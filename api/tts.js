/**
 * Vercel Serverless TTS Proxy - 国内直连版（无需VPN）
 * 法语：百度翻译（支持法语 lan=fr）✅
 * 英语：百度翻译 ✅
 * 备用：有道词典（法语 le=fra）✅
 * 解决小米浏览器阻止跨域音频的问题
 */
export default async function handler(req, res) {
  const { text, lang, source } = req.query;

  if (!text) {
    return res.status(400).json({ error: 'Missing text parameter' });
  }

  const langCode = lang || 'fr';
  const truncated = text.substring(0, 200);

  let headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 14; Xiaomi 15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36'
  };

  // 所有源都是国内可直连的
  const ttsUrls = [];

  // 百度翻译（法语和英语都支持）
  ttsUrls.push({
    url: `https://fanyi.baidu.com/gettts?lan=${langCode}&text=${encodeURIComponent(truncated)}&spd=4&source=web`,
    headers
  });

  // 有道词典备用（法语需要 le=fra 参数）
  const youdaoType = langCode === 'fr' ? '1' : '2'; // 1=法语, 2=英语
  ttsUrls.push({
    url: `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(truncated)}&type=${youdaoType}`,
    headers
  });

  // 依次尝试，第一个失败就用下一个
  for (const { url, headers: h } of ttsUrls) {
    try {
      const response = await fetch(url, { headers: h });
      if (!response.ok) continue;

      const audioBuffer = await response.arrayBuffer();
      if (audioBuffer.byteLength === 0) continue;

      // 成功 - 返回音频
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.setHeader('Content-Type', 'audio/mpeg');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      return res.send(Buffer.from(audioBuffer));
    } catch (e) {
      continue; // 尝试下一个源
    }
  }

  // 所有源都失败
  return res.status(500).json({
    error: 'All TTS sources failed',
    lang: langCode
  });
}
