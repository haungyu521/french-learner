/**
 * TTS 语音工具 - 多源容错版（无双重声音版）
 * 优先级：Netlify代理(无CORS) → 百度TTS → 有道词典 → Google TTS → Web Speech API
 * 法语/英语/韩语均支持
 */

let currentAudio = null;
const audioCache = new Map();
const MAX_CACHE = 500;

// 会话令牌 - 防止竞态条件导致双重声音
let sessionId = 0;

// ========== 核心播放函数 ==========

function getCacheKey(text, lang) {
  return `${lang}:${text.substring(0, 100)}`;
}

// Netlify函数代理（首选 - 无CORS问题，支持所有语言）
function getProxyUrl(text, lang) {
  const langMap = { 'fr-FR': 'fr', 'en-US': 'en', 'ko-KR': 'ko' };
  const langCode = langMap[lang] || 'en';
  return `/.netlify/functions/tts?text=${encodeURIComponent(text.substring(0, 200))}&lang=${langCode}`;
}

// 百度翻译TTS（备用源 - 可能受CORS限制）
function getBaiduUrl(text, lang) {
  const langMap = { 'fr-FR': 'fr', 'en-US': 'en', 'ko-KR': 'kor' };
  const langCode = langMap[lang] || 'en';
  const truncated = text.substring(0, 200);
  return `https://fanyi.baidu.com/gettts?lan=${langCode}&text=${encodeURIComponent(truncated)}&spd=4&source=web`;
}

// 有道词典TTS（备用源 - 可能受CORS限制）
function getYoudaoUrl(text, lang) {
  const truncated = text.substring(0, 100);
  const typeMap = { 'fr-FR': '2', 'en-US': '1', 'ko-KR': '3' };
  const type = typeMap[lang] || '1';
  return `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(truncated)}&type=${type}`;
}

// Google翻译TTS（备用源 - 可能受CORS限制）
function getGoogleUrl(text, lang) {
  const langMap = { 'fr-FR': 'fr', 'en-US': 'en', 'ko-KR': 'ko' };
  const langCode = langMap[lang] || 'en';
  return `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text.substring(0, 200))}&tl=${langCode}&client=tw-ob`;
}

// 停止所有当前播放
function stopAll() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = '';
    currentAudio = null;
  }
  if (window.speechSynthesis) {
    try { window.speechSynthesis.cancel(); } catch (e) {}
  }
}

// Web Speech API（最终兜底）
function speakWithWebSpeech(text, lang, rate) {
  if (!window.speechSynthesis) return false;

  try {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = rate || 0.9;
    utterance.volume = 1;

    // 尝试匹配最佳语音
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      const langPrefix = lang.split('-')[0]; // fr, en, ko
      const match = voices.find(v => v.lang.startsWith(langPrefix)) ||
                    voices.find(v => v.lang.startsWith(lang));
      if (match) utterance.voice = match;
    }

    utterance.onend = () => {};
    utterance.onerror = () => {};

    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
      setTimeout(() => {
        if (window.speechSynthesis.speaking) {
          window.speechSynthesis.resume();
        }
      }, 100);
    }, 50);

    return true;
  } catch (e) {
    console.warn('Web Speech API failed:', e.message);
    return false;
  }
}

// 带多源容错的音频播放 - 修复竞态条件
function playWithFallback(text, lang, rate) {
  if (!text || !text.trim()) return;

  // 分配新的会话ID - 旧的异步操作会被丢弃
  const mySessionId = ++sessionId;

  // 停止所有正在播放的内容
  stopAll();

  const key = getCacheKey(text, lang);

  // 已缓存 → 直接播放
  if (audioCache.has(key)) {
    const audio = new Audio(audioCache.get(key));
    audio.volume = 1;
    audio.playbackRate = rate || 1;
    currentAudio = audio;
    const playPromise = audio.play();
    if (playPromise) {
      playPromise.catch(() => {
        audioCache.delete(key);
        playWithFallback(text, lang, rate);
      });
    }
    return;
  }

  // 音频源列表（Netlify代理优先 - 无CORS问题）
  const sources = [
    getProxyUrl(text, lang),
    getBaiduUrl(text, lang),
    getYoudaoUrl(text, lang),
    getGoogleUrl(text, lang),
  ];

  let sourceIndex = 0;
  let currentTimeout = null;

  function tryNextSource() {
    // 如果会话已被新的调用取代，放弃
    if (mySessionId !== sessionId) return;

    if (sourceIndex >= sources.length) {
      // 所有音频源失败，使用 Web Speech API
      speakWithWebSpeech(text, lang, rate);
      return;
    }

    // 停止之前尝试的音频
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.src = '';
      currentAudio = null;
    }

    const url = sources[sourceIndex];
    const audio = new Audio(url);
    audio.volume = 1;
    currentAudio = audio;

    if (currentTimeout) {
      clearTimeout(currentTimeout);
      currentTimeout = null;
    }

    // 超时设置
    const timeoutMs = sourceIndex === 0 ? 5000 : 2500;
    currentTimeout = setTimeout(() => {
      if (mySessionId !== sessionId) return; // 会话已过期
      // 超时，跳到下一个源
      if (currentAudio === audio) {
        currentAudio = null;
      }
      audio.pause();
      audio.src = '';
      sourceIndex++;
      tryNextSource();
    }, timeoutMs);

    audio.addEventListener('canplaythrough', () => {
      // 关键修复：检查会话是否仍然有效
      if (mySessionId !== sessionId) {
        // 会话已过期 - 丢弃这个音频，不要播放
        audio.pause();
        audio.src = '';
        return;
      }
      // 关键修复：检查这是否当前的音频对象
      if (currentAudio !== audio) {
        audio.pause();
        audio.src = '';
        return;
      }

      if (currentTimeout) {
        clearTimeout(currentTimeout);
        currentTimeout = null;
      }

      // 缓存
      if (audioCache.size >= MAX_CACHE) {
        const firstKey = audioCache.keys().next().value;
        audioCache.delete(firstKey);
      }
      audioCache.set(key, url);

      const playPromise = audio.play();
      if (playPromise) {
        playPromise.catch(() => {
          if (mySessionId !== sessionId) return;
          sourceIndex++;
          tryNextSource();
        });
      }
    }, { once: true });

    audio.addEventListener('error', () => {
      if (mySessionId !== sessionId) return; // 会话已过期
      if (currentTimeout) {
        clearTimeout(currentTimeout);
        currentTimeout = null;
      }
      sourceIndex++;
      tryNextSource();
    }, { once: true });

    audio.load();
  }

  tryNextSource();
}

// ========== 导出函数 ==========

export function speakFrench(text, rate, onEnd) {
  if (!text || !text.trim()) return;
  // 兼容旧API: speakFrench(text, rate) / speakFrench(text, onEnd) / speakFrench(text)
  if (typeof rate === 'function') {
    onEnd = rate;
    rate = undefined;
  }
  playWithFallback(text, 'fr-FR', rate || 0.85);
  if (onEnd) setTimeout(onEnd, Math.max(500, text.length * 80));
}

export function speakEnglish(text, onEnd) {
  if (!text || !text.trim()) return;
  playWithFallback(text, 'en-US', 0.9);
  if (onEnd) setTimeout(onEnd, Math.max(500, text.length * 60));
}

export function speakSlow(text, onEnd) {
  if (!text || !text.trim()) return;
  playWithFallback(text, 'fr-FR', 0.6);
  if (onEnd) setTimeout(onEnd, Math.max(800, text.length * 120));
}

export function speakKorean(text, onEnd) {
  if (!text || !text.trim()) return;
  playWithFallback(text, 'ko-KR', 0.85);
  if (onEnd) setTimeout(onEnd, Math.max(500, text.length * 70));
}

// 慢速韩语
export function speakKoreanSlow(text, onEnd) {
  if (!text || !text.trim()) return;
  playWithFallback(text, 'ko-KR', 0.6);
  if (onEnd) setTimeout(onEnd, Math.max(800, text.length * 100));
}

// 慢速英语
export function speakEnglishSlow(text, onEnd) {
  if (!text || !text.trim()) return;
  playWithFallback(text, 'en-US', 0.6);
  if (onEnd) setTimeout(onEnd, Math.max(800, text.length * 100));
}

export function speak(text, lang = 'en-US', rate = 0.9) {
  if (!text || !text.trim()) return;
  playWithFallback(text, lang, rate);
}

export function stopSpeaking() {
  stopAll();
}

export function preloadAudio(text, lang) {
  if (!text || !text.trim()) return;
  const key = getCacheKey(text, lang);
  if (audioCache.has(key)) return;

  const url = getProxyUrl(text, lang);
  const audio = new Audio(url);
  audio.preload = 'auto';
  audio.addEventListener('canplaythrough', () => {
    if (audioCache.size >= MAX_CACHE) {
      const firstKey = audioCache.keys().next().value;
      audioCache.delete(firstKey);
    }
    audioCache.set(key, url);
  }, { once: true });
  audio.addEventListener('error', () => {}, { once: true });
  audio.load();
}

export function clearAudioCache() {
  audioCache.clear();
}
