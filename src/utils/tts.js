/**
 * TTS 语音工具 - 多源容错版
 * 优先级：百度TTS → 有道词典 → Netlify代理 → Web Speech API
 * 法语/英语均支持，国内直连无需VPN
 */

let currentAudio = null;
const audioCache = new Map();
const MAX_CACHE = 500;

// ========== 核心播放函数 ==========

function getCacheKey(text, lang) {
  return `${lang}:${text.substring(0, 100)}`;
}

// 百度翻译TTS（主源）
function getBaiduUrl(text, lang) {
  const langMap = { 'fr-FR': 'fr', 'en-US': 'en', 'ko-KR': 'kor' };
  const langCode = langMap[lang] || 'en';
  const truncated = text.substring(0, 200);
  return `https://fanyi.baidu.com/gettts?lan=${langCode}&text=${encodeURIComponent(truncated)}&spd=4&source=web`;
}

// 有道词典TTS（备用源）
function getYoudaoUrl(text, lang) {
  const truncated = text.substring(0, 100);
  const typeMap = { 'fr-FR': '2', 'en-US': '1', 'ko-KR': '3' };
  const type = typeMap[lang] || '1';
  return `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(truncated)}&type=${type}`;
}

// Netlify函数代理（第三备用）
function getProxyUrl(text, lang) {
  const langMap = { 'fr-FR': 'fr', 'en-US': 'en', 'ko-KR': 'ko' };
  const langCode = langMap[lang] || 'en';
  return `/.netlify/functions/tts?text=${encodeURIComponent(text.substring(0, 200))}&lang=${langCode}`;
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
    
    // iOS Safari 兼容
    utterance.onend = () => {};
    utterance.onerror = () => {};
    
    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
      // iOS workaround
      setTimeout(() => {
        if (window.speechSynthesis.speaking) {
          window.speechSynthesis.resume();
        }
      }, 100);
    }, 50);
    
    return true;
  } catch (e) {
    return false;
  }
}

// 带多源容错的音频播放
function playWithFallback(text, lang, rate) {
  if (!text || !text.trim()) return;
  
  // 停止当前所有音频播放
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = '';
    currentAudio = null;
  }
  // 停止 Web Speech
  if (window.speechSynthesis) {
    try { window.speechSynthesis.cancel(); } catch (e) {}
  }
  
  const key = getCacheKey(text, lang);
  
  // 已缓存 → 直接播放
  if (audioCache.has(key)) {
    const audio = new Audio(audioCache.get(key));
    audio.volume = 1;
    audio.playbackRate = rate || 1;
    currentAudio = audio;
    audio.play().catch(() => {});
    return;
  }
  
  // 尝试多个音频源（只播放第一个成功的）
  const sources = [
    getBaiduUrl(text, lang),
    getYoudaoUrl(text, lang),
    getProxyUrl(text, lang),
  ];
  
  let sourceIndex = 0;
  let currentTimeout = null;
  let isAborted = false; // 标记是否已放弃当前源
  
  function stopCurrentAudio() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.src = '';
      currentAudio = null;
    }
  }
  
  function tryNextSource() {
    if (sourceIndex >= sources.length) {
      // 所有音频源失败，使用 Web Speech API
      if (!isAborted) {
        speakWithWebSpeech(text, lang, rate);
      }
      return;
    }
    
    // 停止之前的音频
    stopCurrentAudio();
    isAborted = false;
    
    const url = sources[sourceIndex];
    const audio = new Audio(url);
    audio.volume = 1;
    currentAudio = audio;
    
    // 清除之前的超时
    if (currentTimeout) {
      clearTimeout(currentTimeout);
    }
    
    currentTimeout = setTimeout(() => {
      // 超时：标记已放弃，跳到下一个源
      isAborted = true;
      stopCurrentAudio();
      sourceIndex++;
      tryNextSource();
    }, sourceIndex === 0 ? 1500 : 1000); // 第一个源1.5秒，其他1秒
    
    audio.addEventListener('canplaythrough', () => {
      if (currentTimeout) {
        clearTimeout(currentTimeout);
        currentTimeout = null;
      }
      // 如果已被放弃，不播放
      if (isAborted) return;
      // 缓存成功
      if (audioCache.size >= MAX_CACHE) {
        const firstKey = audioCache.keys().next().value;
        audioCache.delete(firstKey);
      }
      audioCache.set(key, url);
      audio.play().catch(() => {});
    }, { once: true });
    
    audio.addEventListener('error', () => {
      if (currentTimeout) {
        clearTimeout(currentTimeout);
        currentTimeout = null;
      }
      if (!isAborted) {
        sourceIndex++;
        tryNextSource();
      }
    }, { once: true });
    
    audio.load();
  }
  
  tryNextSource();
}

// ========== 导出函数 ==========

export function speakFrench(text, onEnd) {
  if (!text || !text.trim()) return;
  playWithFallback(text, 'fr-FR', 0.85);
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

export function speak(text, lang = 'en-US', rate = 0.9) {
  if (!text || !text.trim()) return;
  playWithFallback(text, lang, rate);
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

export function preloadAudio(text, lang) {
  if (!text || !text.trim()) return;
  const key = getCacheKey(text, lang);
  if (audioCache.has(key)) return;
  
  const url = getBaiduUrl(text, lang);
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
