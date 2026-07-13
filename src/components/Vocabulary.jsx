import { useState, useEffect } from 'react';
import { vocabularyData, SRS_INTERVALS } from '../data/vocabulary';
import { advancedVocabData } from '../data/vocabularyAdvanced';
import { speakFrench, preloadAudio } from '../utils/tts';
const allVocab = [...vocabularyData, ...advancedVocabData];
import { useLocalStorage } from '../hooks/useLocalStorage';

function Vocabulary() {
  const [progress, setProgress] = useLocalStorage('vocab-progress', {});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [mode, setMode] = useState('learn'); // learn, review, browse
  const [levelFilter, setLevelFilter] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState('all');

  // 预加载当前和后续词汇的音频
  useEffect(() => {
    const words = getCurrentWords();
    if (words.length > 0) {
      // 预加载当前词和后面5个词
      for (let i = currentIndex; i < Math.min(currentIndex + 6, words.length); i++) {
        const w = words[i];
        preloadAudio(w.word, 'fr-FR');
        if (w.example) preloadAudio(w.example, 'fr-FR');
      }
    }
  }, [currentIndex, mode]);

  // Initialize progress for new words
  useEffect(() => {
    const newProgress = { ...progress };
    allVocab.forEach(word => {
      if (!newProgress[word.id]) {
        newProgress[word.id] = { level: 0, nextReview: Date.now(), correct: 0, wrong: 0, lastReview: null };
      }
    });
    if (Object.keys(newProgress).length !== Object.keys(progress).length) {
      setProgress(newProgress);
    }
  }, []);

  // Get words due for review
  const getReviewWords = () => {
    const now = Date.now();
    return allVocab.filter(word => {
      const p = progress[word.id];
      return p && p.nextReview <= now && p.level < SRS_INTERVALS.length - 1;
    }).sort((a, b) => (progress[a.id]?.nextReview || 0) - (progress[b.id]?.nextReview || 0));
  };

  // Get new words (not yet started)
  const getNewWords = () => {
    return allVocab.filter(word => {
      const p = progress[word.id];
      return !p || p.level === 0;
    }).filter(w => levelFilter === 0 || w.level === levelFilter)
      .filter(w => categoryFilter === 'all' || w.category === categoryFilter);
  };

  const getCurrentWords = () => {
    if (mode === 'review') return getReviewWords();
    if (mode === 'browse') return allVocab
      .filter(w => levelFilter === 0 || w.level === levelFilter)
      .filter(w => categoryFilter === 'all' || w.category === categoryFilter);
    return getNewWords();
  };

  const currentWords = getCurrentWords();
  const currentWord = currentWords[currentIndex];

  const handleAnswer = (correct) => {
    if (!currentWord) return;
    const newProgress = { ...progress };
    const p = { ...newProgress[currentWord.id] };
    
    if (correct) {
      p.level = Math.min(p.level + 1, SRS_INTERVALS.length - 1);
      p.correct = (p.correct || 0) + 1;
    } else {
      p.level = Math.max(p.level - 1, 0);
      p.wrong = (p.wrong || 0) + 1;
    }
    
    const days = SRS_INTERVALS[p.level];
    p.nextReview = Date.now() + days * 24 * 60 * 60 * 1000;
    p.lastReview = Date.now();
    newProgress[currentWord.id] = p;
    setProgress(newProgress);
    
    setShowAnswer(false);
    if (currentIndex < currentWords.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const speak = (text) => speakFrench(text);

  const reviewCount = getReviewWords().length;
  const newCount = getNewWords().length;
  const masteredCount = allVocab.filter(w => progress[w.id]?.level >= SRS_INTERVALS.length - 1).length;

  const categories = [...new Set(allVocab.map(w => w.category))];

  const getLevelBadge = (level) => {
    if (!level || level === 0) return { text: '新词', color: '#94a3b8' };
    if (level <= 2) return { text: '学习中', color: '#f59e0b' };
    if (level <= 4) return { text: '熟悉', color: '#3b82f6' };
    return { text: '掌握', color: '#10b981' };
  };

  return (
    <div className="vocabulary">
      <div className="vocab-stats">
        <div className="stat-card" onClick={() => { setMode('learn'); setCurrentIndex(0); setShowAnswer(false); }}>
          <span className="stat-number">{newCount}</span>
          <span className="stat-label">新词待学</span>
        </div>
        <div className="stat-card review" onClick={() => { setMode('review'); setCurrentIndex(0); setShowAnswer(false); }}>
          <span className="stat-number">{reviewCount}</span>
          <span className="stat-label">待复习</span>
        </div>
        <div className="stat-card mastered">
          <span className="stat-number">{masteredCount}</span>
          <span className="stat-label">已掌握</span>
        </div>
      </div>

      <div className="mode-tabs">
        <button className={`tab ${mode === 'learn' ? 'active' : ''}`} onClick={() => { setMode('learn'); setCurrentIndex(0); setShowAnswer(false); }}>
          学习新词
        </button>
        <button className={`tab ${mode === 'review' ? 'active' : ''}`} onClick={() => { setMode('review'); setCurrentIndex(0); setShowAnswer(false); }}>
          复习 ({reviewCount})
        </button>
        <button className={`tab ${mode === 'browse' ? 'active' : ''}`} onClick={() => { setMode('browse'); setCurrentIndex(0); setShowAnswer(false); }}>
          浏览全部
        </button>
      </div>

      {mode === 'browse' && (
        <div className="filters">
          <select value={levelFilter} onChange={e => { setLevelFilter(Number(e.target.value)); setCurrentIndex(0); }}>
            <option value={0}>全部级别</option>
            <option value={1}>A1-A2 基础</option>
            <option value={2}>B1 进阶</option>
            <option value={3}>B2 高级</option>
            <option value={4}>C1 精通</option>
            <option value={5}>C2 大师</option>
          </select>
          <select value={categoryFilter} onChange={e => { setCategoryFilter(e.target.value); setCurrentIndex(0); }}>
            <option value="all">全部分类</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      )}

      {currentWord ? (
        <div className="card-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${((currentIndex + 1) / currentWords.length) * 100}%` }} />
            <span className="progress-text">{currentIndex + 1} / {currentWords.length}</span>
          </div>

          <div className={`flashcard ${showAnswer ? 'flipped' : ''}`} onClick={() => !showAnswer && setShowAnswer(true)}>
            {!showAnswer ? (
              <div className="card-front">
                <div className="word-level">
                  {getLevelBadge(progress[currentWord.id]?.level) && (
                    <span className="level-badge" style={{ backgroundColor: getLevelBadge(progress[currentWord.id]?.level).color }}>
                      {getLevelBadge(progress[currentWord.id]?.level).text}
                    </span>
                  )}
                  <span className="category-badge">{currentWord.category}</span>
                </div>
                <h2 className="word">{currentWord.word}</h2>
                {currentWord.phonetic && <p className="phonetic">{currentWord.phonetic}</p>}
                <button className="speak-btn" onClick={(e) => { e.stopPropagation(); speak(currentWord.word); }}>
                  🔊 听发音
                </button>
                <p className="hint">点击卡片查看答案</p>
              </div>
            ) : (
              <div className="card-back">
                <h3 className="meaning">{currentWord.meaning}</h3>
                <div className="example-section">
                  <p className="example-fr">{currentWord.example}</p>
                  {currentWord.exampleCn && <p className="example-cn">{currentWord.exampleCn}</p>}
                </div>
                <button className="speak-btn" onClick={(e) => { e.stopPropagation(); speak(currentWord.example); }}>
                  🔊 听例句
                </button>
              </div>
            )}
          </div>

          {showAnswer && (
            <div className="answer-buttons">
              <button className="btn-wrong" onClick={() => handleAnswer(false)}>
                😅 不认识
              </button>
              <button className="btn-fuzzy" onClick={() => handleAnswer(true)}>
                🤔 有点印象
              </button>
              <button className="btn-correct" onClick={() => handleAnswer(true)}>
                😊 记住了
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="empty-state">
          <span className="empty-icon">🎉</span>
          <h3>{mode === 'review' ? '太棒了！今天没有需要复习的单词！' : '当前没有可学习的单词'}</h3>
          <p>{mode === 'review' ? '明天再来复习吧~' : '试试切换其他模式'}</p>
        </div>
      )}

      <div className="study-tips">
        <h4>📝 记忆小贴士</h4>
        <ul>
          <li>每天学5-10个新词就够了，贪多嚼不烂</li>
          <li>先点🔊听发音，跟着念3遍再记意思</li>
          <li>把单词放到例句里理解，比死记硬背强100倍</li>
          <li>复习比新学更重要！忘了的词会自动安排下次复习</li>
        </ul>
      </div>
    </div>
  );
}

export default Vocabulary;
