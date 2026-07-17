exports.handler = async function(event) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': 'public, max-age=86400'
  };

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  const params = event.queryStringParameters || {};
  const text = params.text || '';
  const lang = params.lang || 'en';

  if (!text) {
    return { statusCode: 400, headers, body: 'Missing text parameter' };
  }

  const truncated = text.substring(0, 200);

  // 语言映射表
  const baiduLangMap = { 'fr': 'fr', 'en': 'en', 'ko': 'kor' };
  const youdaoTypeMap = { 'fr': '2', 'en': '1', 'ko': '3' };
  const googleLangMap = { 'fr': 'fr', 'en': 'en', 'ko': 'ko' };

  const baiduLang = baiduLangMap[lang] || 'en';
  const youdaoType = youdaoTypeMap[lang] || '1';
  const googleLang = googleLangMap[lang] || 'en';

  // 多源TTS URL列表（按优先级排序）
  const ttsUrls = [
    // Google Translate TTS (最稳定)
    `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(truncated)}&tl=${googleLang}&client=tw-ob`,
    // 百度翻译TTS
    `https://fanyi.baidu.com/gettts?lan=${baiduLang}&text=${encodeURIComponent(truncated)}&spd=4&source=web`,
    // 有道词典TTS
    `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(truncated)}&type=${youdaoType}`,
  ];

  for (const ttsUrl of ttsUrls) {
    try {
      const isGoogle = ttsUrl.includes('google');
      const isBaidu = ttsUrl.includes('baidu');
      const isYoudao = ttsUrl.includes('youdao');

      const fetchHeaders = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      };

      if (isBaidu) {
        fetchHeaders['Referer'] = 'https://fanyi.baidu.com/';
      } else if (isYoudao) {
        fetchHeaders['Referer'] = 'https://dict.youdao.com/';
      } else if (isGoogle) {
        fetchHeaders['Referer'] = 'https://translate.google.com/';
      }

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(ttsUrl, {
        headers: fetchHeaders,
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        console.log(`TTS source failed: ${response.status} for ${ttsUrl.substring(0, 60)}`);
        continue;
      }

      const audioBuffer = await response.arrayBuffer();
      if (audioBuffer.byteLength === 0 || audioBuffer.byteLength < 100) {
        console.log(`TTS source returned empty audio`);
        continue;
      }

      const contentType = response.headers.get('content-type') || 'audio/mpeg';

      return {
        statusCode: 200,
        headers: {
          ...headers,
          'Content-Type': contentType,
          'Content-Length': audioBuffer.byteLength.toString(),
        },
        body: Buffer.from(audioBuffer).toString('base64'),
        isBase64Encoded: true,
      };
    } catch (e) {
      console.log(`TTS source error: ${e.message}`);
      continue;
    }
  }

  return { statusCode: 503, headers, body: 'TTS service unavailable' };
};
