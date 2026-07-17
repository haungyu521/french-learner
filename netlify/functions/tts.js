exports.handler = async function(event) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': 'public, max-age=86400'
  };

  const params = event.queryStringParameters || {};
  const text = params.text || '';
  const lang = params.lang || 'en';

  if (!text) {
    return { statusCode: 400, headers, body: 'Missing text parameter' };
  }

  const truncated = text.substring(0, 200);
  const langCode = lang === 'fr-FR' ? 'fr' : lang === 'en-US' ? 'en' : lang;

  const ttsUrls = [
    `https://fanyi.baidu.com/gettts?lan=${langCode}&text=${encodeURIComponent(truncated)}&spd=4&source=web`,
    `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(truncated)}&type=${langCode === 'fr' ? '1' : '2'}`
  ];

  for (const ttsUrl of ttsUrls) {
    try {
      const response = await fetch(ttsUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Referer': langCode === 'fr' ? 'https://fanyi.baidu.com/' : 'https://dict.youdao.com/'
        }
      });

      if (!response.ok) continue;

      const audioBuffer = await response.arrayBuffer();
      if (audioBuffer.byteLength === 0) continue;

      const contentType = response.headers.get('content-type') || 'audio/mpeg';

      return {
        statusCode: 200,
        headers: {
          ...headers,
          'Content-Type': contentType,
          'Content-Length': audioBuffer.byteLength.toString()
        },
        body: Buffer.from(audioBuffer).toString('base64'),
        isBase64Encoded: true
      };
    } catch (e) {
      continue;
    }
  }

  return { statusCode: 503, headers, body: 'TTS service unavailable' };
};
