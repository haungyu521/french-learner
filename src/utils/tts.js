/**
 * TTS 语音工具 - 国内源离线版（无需VPN）
 * 法语：百度翻译 + 有道词典（国内直连）✅
 * 英语：百度翻译（国内直连）✅
 * 优化：缓存 + 预加载 + 即时反馈
 */

let currentAudio = null;
const audioCache = new Map(); // 缓存 Blob URL
const MAX_CACHE = 300;
const prefetchQueue = [];
let isPrefetching = false;

// 预连接提示 - 减少 DNS/TLS 延迟
(function preconnect() {
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = window.location.origin;
  document.head.appendChild(link);
})();

function getCacheKey(text, lang) {
  return `${lang}:${text.substring(0, 100)}`;
}

function getProxyUrl(text, lang) {
  const langCode = lang === 'fr-FR' ? 'fr' : lang === 'en-US' ? 'en' : lang;
  // 法语和英语都用百度（国内直连，无需VPN）
  const source = 'baidu';
  const encoded = encodeURIComponent(text.substring(0, 200));
  return `/api/tts?text=${encoded}&lang=${langCode}&source=${source}`;
}

// 将音频缓存为 Blob URL（更小的内存占用，更快的回放）
function cacheAsBlob(audio, key) {
  // 直接使用 URL 缓存即可，避免 blob 转换的额外开销
  if (audioCache.size >= MAX_CACHE) {
    const firstKey = audioCache.keys().next().value;
    audioCache.delete(firstKey);
  }
  audioCache.set(key, audio.src);
}

function playWithCache(text, lang) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  const key = getCacheKey(text, lang);

  // 已缓存 → 直接播放（毫秒级）
  if (audioCache.has(key)) {
    const audio = new Audio(audioCache.get(key));
    audio.volume = 1;
    currentAudio = audio;
    try { audio.play(); } catch (e) {}
    return audio;
  }

  // 首次加载
  const url = getProxyUrl(text, lang);
  const audio = new Audio(url);
  audio.volume = 1;
  currentAudio = audio;

  audio.addEventListener('canplaythrough', () => cacheAsBlob(audio, key), { once: true });
  // 加载失败也尝试缓存URL
  audio.addEventListener('loadeddata', () => {
    if (!audioCache.has(key)) cacheAsBlob(audio, key);
  }, { once: true });

  try { audio.play(); } catch (e) {}
  return audio;
}

export function preloadAudio(text, lang) {
  if (!text || !text.trim()) return;
  const key = getCacheKey(text, lang);
  if (audioCache.has(key)) return;

  // 限制并发预加载数量
  if (prefetchQueue.length > 5) return;

  prefetchQueue.push({ text, lang, key });
  processPrefetch();
}

function processPrefetch() {
  if (isPrefetching || prefetchQueue.length === 0) return;
  isPrefetching = true;

  const { text, lang, key } = prefetchQueue.shift();
  if (audioCache.has(key)) {
    isPrefetching = false;
    processPrefetch();
    return;
  }

  const url = getProxyUrl(text, lang);
  const audio = new Audio(url);
  audio.preload = 'auto';

  audio.addEventListener('canplaythrough', () => {
    cacheAsBlob(audio, key);
    isPrefetching = false;
    processPrefetch();
  }, { once: true });

  audio.addEventListener('error', () => {
    isPrefetching = false;
    processPrefetch();
  }, { once: true });

  audio.load();
}

export function speak(text, lang = 'en-US', rate = 0.9) {
  if (!text || !text.trim()) return;
  stopSpeaking();
  playWithCache(text, lang);
}

export function speakFrench(text, rate = 0.85) {
  speak(text, 'fr-FR', rate);
}

export function speakEnglish(text, rate = 0.9) {
  speak(text, 'en-US', rate);
}

export function speakSlow(text, lang = 'en-US', rate = 0.6) {
  speak(text, lang, rate);
}

export function stopSpeaking() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = '';
    currentAudio = null;
  }
  if (window.speechSynthesis) {
    try { window.speechSynthesis.cancel(); } catch (e) {}
  }
}

export function clearAudioCache() {
  audioCache.clear();
}
