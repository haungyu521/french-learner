import { useState, useEffect, useMemo, useCallback } from 'react';
import { vocabularyData as frVocab, SRS_INTERVALS } from '../data/vocabulary';
import { advancedVocabData as frAdvVocab } from '../data/vocabularyAdvanced';
import { vocabularyData as enVocab } from '../data/english/vocabulary';
import { vocabularyData as koVocab, SRS_INTERVALS as koSRS } from '../data/korean/vocabulary';
import { speakFrench, speakEnglish, speakKorean, preloadAudio } from '../utils/tts';
import { useLocalStorage } from '../hooks/useLocalStorage';

function Vocabulary({ lang = 'fr' }) {
  const isKorean = lang === 'ko';
  const allVocab = useMemo(() => {
    if (lang === 'en') return [...enVocab];
    if (lang === 'ko') return [...koVocab];
    return [...frVocab, ...frAdvVocab];
  }, [lang]);

  const speak = lang === 'en' ? speakEnglish : lang === 'ko' ? speakKorean : speakFrench;
  const ttsLang = lang === 'en' ? 'en-US' : lang === 'ko' ? 'ko-KR' : 'fr-FR';
  const storageKey = lang === 'en' ? 'vocab-progress-en' : lang === 'ko' ? 'vocab-progress-ko' : 'vocab-progress';

  const [progress, setProgress] = useLocalStorage(storageKey, {});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [mode, setMode] = useState('learn');
  const [levelFilter, setLevelFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [quizOptions, setQuizOptions] = useState(null);
  const [quizAnswer, setQuizAnswer] = useState(null);

  useEffect(() => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setMode('learn');
  }, [lang]);

  useEffect(() => {
    const words = getCurrentWords();
    if (words.length > 0) {
      for (let i = currentIndex; i < Math.min(currentIndex + 6, words.length); i++) {
        const w = words[i];
        preloadAudio(w.word, ttsLang);
        if (w.example) preloadAudio(w.example, ttsLang);
      }
    }
  }, [currentIndex, mode, lang]);

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

  const getReviewWords = () => {
    const now = Date.now();
    return allVocab.filter(word => {
      const p = progress[word.id];
      return p && p.nextReview <= now && p.level < SRS_INTERVALS.length - 1;
    }).sort((a, b) => (progress[a.id]?.nextReview || 0) - (progress[b.id]?.nextReview || 0));
  };

  const getWeakWords = () => {
    return allVocab.filter(word => {
      const p = progress[word.id];
      return p && p.wrong >= 3;
    }).sort((a, b) => (progress[b.id]?.wrong || 0) - (progress[a.id]?.wrong || 0));
  };

  const getNewWords = () => {
    return allVocab.filter(word => {
      const p = progress[word.id];
      return !p || p.level === 0;
    }).filter(w => levelFilter === 'all' || matchLevel(w.level, levelFilter))
      .filter(w => categoryFilter === 'all' || w.category === categoryFilter);
  };

  const matchLevel = (wordLevel, filter) => {
    if (filter === 'all') return true;
    if (filter === 'a1a2') return wordLevel <= 2;
    if (filter === 'b1b2') return wordLevel === 3 || wordLevel === 4;
    if (filter === 'c1c2') return wordLevel >= 5;
    return wordLevel === Number(filter);
  };

  const generateQuizOptions = useCallback((correctWord) => {
    const others = allVocab
      .filter(w => w.id !== correctWord.id && w.meaning !== correctWord.meaning)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const options = [...others.map(w => ({ id: w.id, text: w.meaning, correct: false })),
      { id: correctWord.id, text: correctWord.meaning, correct: true }];
    return options.sort(() => Math.random() - 0.5);
  }, [allVocab]);

  useEffect(() => {
    if (mode === 'listen' && currentWord) {
      const opts = generateQuizOptions(currentWord);
      setQuizOptions(opts);
      setQuizAnswer(null);
      speak(currentWord.word);
    }
  }, [currentIndex, mode]);

  const getCurrentWords = () => {
    if (mode === 'review') return getReviewWords();
    if (mode === 'weak') return getWeakWords();
    if (mode === 'quick') return getReviewWords().length > 0 ? getReviewWords() : getNewWords();
    if (mode === 'listen') return getReviewWords().length > 0 ? getReviewWords() : getNewWords();
    if (mode === 'browse') return allVocab
      .filter(w => levelFilter === 'all' || matchLevel(w.level, levelFilter))
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

  const handleQuizAnswer = (option) => {
    if (quizAnswer !== null) return;
    setQuizAnswer(option.correct);
    handleAnswer(option.correct);
  };

  const reviewCount = getReviewWords().length;
  const weakCount = getWeakWords().length;
  const newCount = getNewWords().length;
  const masteredCount = allVocab.filter(w => progress[w.id]?.level >= SRS_INTERVALS.length - 1).length;
  const categories = [...new Set(allVocab.map(w => w.category))];

  const getLevelBadge = (level) => {
    if (!level || level === 0) return { text: '新词', color: '#94a3b8' };
    if (level <= 2) return { text: '学习中', color: '#f59e0b' };
    if (level <= 4) return { text: '熟悉', color: '#3b82f6' };
    return { text: '掌握', color: '#10b981' };
  };

  const isWeakWord = (word) => {
    const p = progress[word.id];
    return p && p.wrong >= 3;
  };

  const title = lang === 'en' ? '📝 英语单词记忆' : lang === 'ko' ? '📝 韩语单词记忆' : '📝 法语单词记忆';

  return (
    <div className="vocabulary">
      <div className="vocab-stats">
        <div className="stat-card" onClick={() => { setMode('learn'); setCurrentIndex(0); setShowAnswer(false); }}>
          <span className="stat-number">{newCount}</span>
          <span className="stat-label">新词待学</span>
        </div>
        <div className="stat-card review" onClick={() => { setMode('review'); setCurrentIndex(0); setShowAnswer(false); }}>
          <span className="stat-number">{reviewCount}</span>
          <span className="stat-label">今日待复习</span>
        </div>
        <div className="stat-card weak" onClick={() => { setMode('weak'); setCurrentIndex(0); setShowAnswer(false); }} style={{ backgroundColor: weakCount > 0 ? '#fef2f2' : '#f0fdf4' }}>
          <span className="stat-number" style={{ color: weakCount > 0 ? '#ef4444' : '#10b981' }}>{weakCount}</span>
          <span className="stat-label">薄弱词</span>
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
        <button className={`tab ${mode === 'quick' ? 'active' : ''}`} onClick={() => { setMode('quick'); setCurrentIndex(0); setShowAnswer(false); }}>
          ⚡ 快速复习
        </button>
        <button className={`tab ${mode === 'listen' ? 'active' : ''}`} onClick={() => { setMode('listen'); setCurrentIndex(0); setShowAnswer(false); }}>
          👂 听音辨词
        </button>
        <button className={`tab ${mode === 'browse' ? 'active' : ''}`} onClick={() => { setMode('browse'); setCurrentIndex(0); setShowAnswer(false); }}>
          浏览全部
        </button>
      </div>

      {mode === 'browse' && (
        <div className="filters">
          <select value={levelFilter} onChange={e => { setLevelFilter(e.target.value); setCurrentIndex(0); }}>
            <option value="all">全部级别</option>
            <option value="a1a2">A1-A2 基础</option>
            <option value="1">A1 入门</option>
            <option value="2">A2 基础</option>
            <option value="b1b2">B1-B2 进阶</option>
            <option value="3">B1 进阶</option>
            <option value="4">B2 高级</option>
            <option value="c1c2">C1-C2 精通</option>
            <option value="5">C1 精通</option>
            <option value="6">C2 大师</option>
          </select>
          <select value={categoryFilter} onChange={e => { setCategoryFilter(e.target.value); setCurrentIndex(0); }}>
            <option value="all">全部分类</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      )}

      {mode === 'weak' && weakCount > 0 && (
        <div style={{ background: '#fef2f2', padding: '8px 12px', borderRadius: '8px', marginBottom: '12px', fontSize: '13px', color: '#991b1b' }}>
          ⚠️ 这些词你答错了3次以上，系统已自动标记为薄弱词。建议重点复习！
        </div>
      )}

      {currentWord ? (
        <div className="card-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${((currentIndex + 1) / currentWords.length) * 100}%` }} />
            <span className="progress-text">{currentIndex + 1} / {currentWords.length}</span>
          </div>

          {mode === 'listen' ? (
            <div className="flashcard">
              <div className="card-front">
                <div className="word-level">
                  <span className="category-badge">👂 听音辨词</span>
                  {isWeakWord(currentWord) && <span className="level-badge" style={{ backgroundColor: '#ef4444' }}>薄弱词</span>}
                </div>
                <button className="speak-btn" style={{ fontSize: '24px', margin: '20px 0' }} onClick={(e) => { e.stopPropagation(); speak(currentWord.word); }}>
                  🔊 再听一次
                </button>
                <p className="hint">听发音，选择正确的词义</p>
                {quizOptions && (
                  <div style={{ display: 'grid', gap: '8px', marginTop: '16px', width: '100%' }}>
                    {quizOptions.map((opt, i) => (
                      <button key={opt.id}
                        onClick={() => handleQuizAnswer(opt)}
                        disabled={quizAnswer !== null}
                        style={{
                          padding: '10px 16px', borderRadius: '8px', border: '2px solid',
                          borderColor: quizAnswer === null ? '#e2e8f0' : opt.correct ? '#10b981' : (quizAnswer !== null && opt.id === currentWord.id ? '#ef4444' : '#e2e8f0'),
                          backgroundColor: quizAnswer === null ? '#fff' : opt.correct ? '#ecfdf5' : (quizAnswer !== null && opt.id === currentWord.id ? '#fef2f2' : '#fff'),
                          cursor: quizAnswer !== null ? 'default' : 'pointer',
                          fontSize: '14px', textAlign: 'left',
                          fontWeight: quizAnswer !== null && opt.correct ? 'bold' : 'normal'
                        }}>
                        {String.fromCharCode(65 + i)}. {opt.text}
                        {quizAnswer !== null && opt.correct && ' ✓'}
                        {quizAnswer !== null && !opt.correct && opt.id === currentWord.id && ' ✗'}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : mode === 'quick' ? (
            <div className="flashcard" style={{ cursor: 'default' }}>
              <div className="card-front" style={{ padding: '20px' }}>
                <div className="word-level">
                  <span className="category-badge">⚡ 快速复习</span>
                  {isWeakWord(currentWord) && <span className="level-badge" style={{ backgroundColor: '#ef4444' }}>薄弱词</span>}
                  {getLevelBadge(progress[currentWord.id]?.level) && (
                    <span className="level-badge" style={{ backgroundColor: getLevelBadge(progress[currentWord.id]?.level).color }}>
                      {getLevelBadge(progress[currentWord.id]?.level).text}
                    </span>
                  )}
                </div>
                <h2 className="word" style={{ fontSize: '28px' }}>{currentWord.word}</h2>
                <p style={{ fontSize: '18px', color: '#475569', margin: '8px 0' }}>{currentWord.meaning}</p>
                {currentWord.example && (
                  <p style={{ fontSize: '14px', color: '#64748b', fontStyle: 'italic', margin: '4px 0' }}>{currentWord.example}</p>
                )}
                {currentWord.exampleCn && (
                  <p style={{ fontSize: '13px', color: '#94a3b8', margin: '2px 0' }}>{currentWord.exampleCn}</p>
                )}
              </div>
              <div className="answer-buttons" style={{ marginTop: '16px' }}>
                <button className="btn-wrong" onClick={() => handleAnswer(false)}>
                  😅 不认识
                </button>
                <button className="btn-correct" onClick={() => handleAnswer(true)}>
                  😊 认识
                </button>
              </div>
            </div>
          ) : (
            <div className={`flashcard ${showAnswer ? 'flipped' : ''}`} onClick={() => !showAnswer && setShowAnswer(true)}>
              {!showAnswer ? (
                <div className="card-front">
                  <div className="word-level">
                    {getLevelBadge(progress[currentWord.id]?.level) && (
                      <span className="level-badge" style={{ backgroundColor: getLevelBadge(progress[currentWord.id]?.level).color }}>
                        {getLevelBadge(progress[currentWord.id]?.level).text}
                      </span>
                    )}
                    {isWeakWord(currentWord) && <span className="level-badge" style={{ backgroundColor: '#ef4444' }}>薄弱词</span>}
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
          )}

          {showAnswer && mode !== 'quick' && mode !== 'listen' && (
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
          <h3>{mode === 'review' ? '太棒了！今天没有需要复习的单词！' : mode === 'weak' ? '很好！你还没有薄弱词' : '当前没有可学习的单词'}</h3>
          <p>{mode === 'review' ? '明天再来复习吧~' : mode === 'weak' ? '继续保持好的学习习惯' : '试试切换其他模式'}</p>
        </div>
      )}

      <div className="study-tips">
        <h4>📝 记忆小贴士</h4>
        <ul>
          <li>每天学5-10个新词就够了，贪多嚼不烂</li>
          <li>先点🔊听发音，跟着念3遍再记意思</li>
          <li>把单词放到例句里理解，比死记硬背强100倍</li>
          <li>复习比新学更重要！忘了的词会自动安排下次复习</li>
          <li>⚡ 快速复习模式适合碎片时间，快速刷一遍</li>
          <li>👂 听音辨词模式训练听力，播放发音选词义</li>
          <li>错误≥3次的词会被标记为<span style={{ color: '#ef4444', fontWeight: 'bold' }}>薄弱词</span>，重点攻克</li>
        </ul>
      </div>
    </div>
  );
}

export default Vocabulary;
