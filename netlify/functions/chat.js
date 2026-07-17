// Netlify Function - 代理 AI 对话 API
// 支持 Google Gemini 和 硅基流动 SiliconFlow

const GEMINI_API = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
const SILICONFLOW_API = 'https://api.siliconflow.cn/v1/chat/completions';

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { apiKey, messages, lang, systemPrompt, provider = 'gemini' } = JSON.parse(event.body);

    if (!apiKey) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: '缺少 API Key，请先设置' }),
      };
    }

    if (!messages || !Array.isArray(messages)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: '消息格式错误' }),
      };
    }

    // 根据 provider 调用不同 API
    if (provider === 'siliconflow') {
      return await handleSiliconFlow(apiKey, messages, systemPrompt, headers);
    } else {
      return await handleGemini(apiKey, messages, systemPrompt, headers);
    }
  } catch (error) {
    console.error('Chat function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: '服务器内部错误: ' + error.message }),
    };
  }
};

// Google Gemini
async function handleGemini(apiKey, messages, systemPrompt, headers) {
  const contents = messages.map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }],
  }));

  const requestBody = {
    contents,
    generationConfig: {
      temperature: 0.8,
      maxOutputTokens: 1024,
    },
  };

  if (systemPrompt) {
    requestBody.systemInstruction = {
      parts: [{ text: systemPrompt }],
    };
  }

  const response = await fetch(`${GEMINI_API}?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    if (response.status === 400 || response.status === 401 || response.status === 403) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'API Key 无效，请检查后重试' }),
      };
    }
    return {
      statusCode: response.status,
      headers,
      body: JSON.stringify({ error: errorData?.error?.message || `Gemini API 错误` }),
    };
  }

  const data = await response.json();
  const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || '抱歉，我没有理解。';

  return { statusCode: 200, headers, body: JSON.stringify({ reply }) };
}

// 硅基流动 SiliconFlow (OpenAI 兼容格式)
async function handleSiliconFlow(apiKey, messages, systemPrompt, headers) {
  const apiMessages = messages.map(msg => ({
    role: msg.role,
    content: msg.content,
  }));

  if (systemPrompt) {
    apiMessages.unshift({ role: 'system', content: systemPrompt });
  }

  const requestBody = {
    model: 'Qwen/Qwen2.5-7B-Instruct',  // 免费模型
    messages: apiMessages,
    temperature: 0.8,
    max_tokens: 1024,
    stream: false,
  };

  const response = await fetch(SILICONFLOW_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    if (response.status === 401 || response.status === 403) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'API Key 无效，请检查后重试' }),
      };
    }
    return {
      statusCode: response.status,
      headers,
      body: JSON.stringify({ error: errorData?.error?.message || '硅基流动 API 错误' }),
    };
  }

  const data = await response.json();
  const reply = data?.choices?.[0]?.message?.content || '抱歉，我没有理解。';

  return { statusCode: 200, headers, body: JSON.stringify({ reply }) };
}
