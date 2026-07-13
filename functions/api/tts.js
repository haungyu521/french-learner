/**
 * Cloudflare Pages Function - TTS Proxy (国内直连，无需VPN)
 * 法语/英语：百度翻译 + 有道词典
 */
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const text = url.searchParams.get('text');
  const lang = url.searchParams.get('lang') || 'fr';

  if (!text) {
    return new Response(JSON.stringify({ error: 'Missing text parameter' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const truncated = text.substring(0, 200);
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 14; Xiaomi 15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36'
  };

  // 百度翻译（法语和英语都支持）
  const baiduUrl = `https://fanyi.baidu.com/gettts?lan=${lang}&text=${encodeURIComponent(truncated)}&spd=4&source=web`;
  // 有道词典备用
  const youdaoType = lang === 'fr' ? '1' : '2';
  const youdaoUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(truncated)}&type=${youdaoType}`;

  // 依次尝试
  for (const ttsUrl of [baiduUrl, youdaoUrl]) {
    try {
      const response = await fetch(ttsUrl, { headers });
      if (!response.ok) continue;

      const audioBuffer = await response.arrayBuffer();
      if (audioBuffer.byteLength === 0) continue;

      return new Response(audioBuffer, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'audio/mpeg',
          'Cache-Control': 'public, max-age=86400'
        }
      });
    } catch (e) {
      continue;
    }
  }

  return new Response(JSON.stringify({ error: 'All TTS sources failed' }), {
    status: 500,
    headers: { 'Content-Type': 'application/json' }
  });
}
