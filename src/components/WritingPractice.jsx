import { useState, useMemo, useEffect, useRef } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { frFillBlanks, frTyping, frArticleFill, frTranslations, frFreeWriting } from '../data/writingExercises';
import { enFillBlanks, enTyping, enArticleFill, enTranslations, enFreeWriting } from '../data/english/writingExercises';
import { koFillBlanks, koTyping, koArticleFill, koTranslations, koFreeWriting } from '../data/korean/writingExercises';

function WritingPractice({ lang = 'fr' }) {
  const isKorean = lang === 'ko';
  const [mode, setMode] = useState('fill');
  const [levelFilter, setLevelFilter] = useState('all');
  const [topicFilter, setTopicFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [typingChars, setTypingChars] = useState([]);
  const [typingStarted, setTypingStarted] = useState(false);
  const [typingStartTime, setTypingStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const inputRef = useRef(null);
  const [history, setHistory] = useLocalStorage(lang === 'en' ? 'writing-history-en' : lang === 'ko' ? 'writing-history-ko' : 'writing-history', []);
  const [stats, setStats] = useLocalStorage(lang === 'en' ? 'writing-stats-en' : lang === 'ko' ? 'writing-stats-ko' : 'writing-stats', { correct: 0, wrong: 0, total: 0 });

  const dataMap = {
    fill: lang === 'en' ? enFillBlanks : lang === 'ko' ? koFillBlanks : frFillBlanks,
    typing: lang === 'en' ? enTyping : lang === 'ko' ? koTyping : frTyping,
    article: lang === 'en' ? enArticleFill : lang === 'ko' ? koArticleFill : frArticleFill,
    translate: lang === 'en' ? enTranslations : lang === 'ko' ? koTranslations : frTranslations,
    free: lang === 'en' ? enFreeWriting : lang === 'ko' ? koFreeWriting : frFreeWriting,
  };

  const currentList = useMemo(() => {
    let list = dataMap[mode] || [];
    if (levelFilter !== 'all') {
      list = list.filter(item => item.level === levelFilter);
    }
    if (topicFilter !== 'all' && (mode === 'fill' || mode === 'typing')) {
      list = list.filter(item => (item.topic || item.type) === topicFilter);
    }
    return list;
  }, [mode, levelFilter, topicFilter, lang]);

  const topics = useMemo(() => {
    const list = dataMap[mode] || [];
    const field = mode === 'typing' ? 'type' : 'topic';
    return [...new Set(list.map(item => item[field]).filter(Boolean))];
  }, [mode, lang]);

  const levels = useMemo(() => {
    const list = dataMap[mode] || [];
    return [...new Set(list.map(item => item.level).filter(Boolean))];
  }, [mode, lang]);

  const current = currentList[currentIndex];

  useEffect(() => {
    setCurrentIndex(0);
    setUserInput('');
    setShowAnswer(false);
    setSelectedOption(null);
    setTypingChars([]);
    setTypingStarted(false);
    setTypingStartTime(null);
    setWpm(0);
  }, [mode, levelFilter, topicFilter]);

  useEffect(() => {
    if (mode === 'typing' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentIndex, mode]);

  const switchMode = (newMode) => {
    setMode(newMode);
    setLevelFilter('all');
    setTopicFilter('all');
  };

  const normalizeAnswer = (str) => {
    if (!str) return '';
    return str.toLowerCase().trim()
      .replace(/\s+/g, ' ')
      .replace(/['']/g, "'")
      .replace(/[""]/g, '"');
  };

  const checkAnswer = (input, correct) => {
    const norm1 = normalizeAnswer(input);
    const norm2 = normalizeAnswer(correct);
    if (norm1 === norm2) return true;
    // Allow minor variations
    if (norm1.replace(/'/g, '') === norm2.replace(/'/g, '')) return true;
    return false;
  };

  const handleSubmit = () => {
    setShowAnswer(true);
    let isCorrect = false;
    let answer = '';

    if (mode === 'fill') {
      answer = current.answer;
      isCorrect = checkAnswer(userInput, current.answer);
    } else if (mode === 'typing') {
      answer = current.answer;
      isCorrect = checkAnswer(userInput, current.answer);
      // Calculate WPM
      if (typingStartTime) {
        const elapsed = (Date.now() - typingStartTime) / 1000 / 60;
        const words = current.answer.length / 5;
        setWpm(Math.round(words / elapsed));
      }
    } else if (mode === 'article') {
      answer = current.answer;
      isCorrect = checkAnswer(userInput, current.answer);
    } else if (mode === 'translate') {
      answer = current.answer;
      isCorrect = checkAnswer(userInput, current.answer);
    }

    if (mode !== 'free') {
      setStats(prev => ({
        correct: prev.correct + (isCorrect ? 1 : 0),
        wrong: prev.wrong + (isCorrect ? 0 : 1),
        total: prev.total + 1,
      }));
    }

    const entry = {
      date: new Date().toISOString(),
      mode,
      question: mode === 'fill' ? current.sentence : mode === 'typing' ? current.prompt : mode === 'article' ? current.sentence : mode === 'translate' ? current.cn : current.prompt,
      userInput,
      answer: answer || '自由写作',
      correct: isCorrect,
    };
    setHistory([entry, ...history.slice(0, 99)]);
  };

  const handleArticleSelect = (option) => {
    setSelectedOption(option);
    setUserInput(option);
  };

  const handleTypingInput = (e) => {
    const val = e.target.value;
    if (!typingStarted && val.length > 0) {
      setTypingStarted(true);
      setTypingStartTime(Date.now());
    }
    setUserInput(val);
    // Color-code characters
    const chars = current.answer.split('').map((char, i) => {
      if (i >= val.length) return { char, status: 'pending' };
      if (val[i].toLowerCase() === char.toLowerCase()) return { char, status: 'correct' };
      return { char, status: 'wrong' };
    });
    setTypingChars(chars);
  };

  const nextQuestion = () => {
    setUserInput('');
    setShowAnswer(false);
    setSelectedOption(null);
    setTypingChars([]);
    setTypingStarted(false);
    setTypingStartTime(null);
    setWpm(0);
    if (currentList.length > 0) {
      setCurrentIndex((currentIndex + 1) % currentList.length);
    }
  };

  const prevQuestion = () => {
    setUserInput('');
    setShowAnswer(false);
    setSelectedOption(null);
    setTypingChars([]);
    setTypingStarted(false);
    setTypingStartTime(null);
    setWpm(0);
    if (currentList.length > 0) {
      setCurrentIndex((currentIndex - 1 + currentList.length) % currentList.length);
    }
  };

  const isCorrect = current && checkAnswer(userInput, current.answer);
  const langLabel = lang === 'en' ? '英语' : lang === 'ko' ? '韩语' : '法语';
  const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

  return (
    <div className="writing-practice">
      <div className="writing-header">
        <h2>✍️ {langLabel}写作练习</h2>
        <p className="subtitle">5种练习模式 · {currentList.length} 道题 · 从入门到高级</p>
      </div>

      {/* 统计数据 */}
      <div className="writing-stats">
        <div className="stat-item">
          <span className="stat-value">{stats.total}</span>
          <span className="stat-label">已做题</span>
        </div>
        <div className="stat-item">
          <span className="stat-value correct-stat">{stats.correct}</span>
          <span className="stat-label">正确</span>
        </div>
        <div className="stat-item">
          <span className="stat-value wrong-stat">{stats.wrong}</span>
          <span className="stat-label">错误</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{accuracy}%</span>
          <span className="stat-label">正确率</span>
        </div>
      </div>

      {/* 模式选择 */}
      <div className="mode-tabs">
        <button className={`tab ${mode === 'fill' ? 'active' : ''}`} onClick={() => switchMode('fill')}>
          📝 填空题
        </button>
        <button className={`tab ${mode === 'typing' ? 'active' : ''}`} onClick={() => switchMode('typing')}>
          ⌨️ 打字练习
        </button>
        <button className={`tab ${mode === 'article' ? 'active' : ''}`} onClick={() => switchMode('article')}>
          📋 冠词填空
        </button>
        <button className={`tab ${mode === 'translate' ? 'active' : ''}`} onClick={() => switchMode('translate')}>
          🔄 翻译练习
        </button>
        <button className={`tab ${mode === 'free' ? 'active' : ''}`} onClick={() => switchMode('free')}>
          ✏️ 自由写作
        </button>
      </div>

      {/* 难度和主题筛选 */}
      <div className="exercise-filters">
        {levels.length > 1 && (
          <select value={levelFilter} onChange={e => setLevelFilter(e.target.value)} className="filter-select">
            <option value="all">全部等级</option>
            {levels.sort().map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        )}
        {topics.length > 1 && (mode === 'fill' || mode === 'typing') && (
          <select value={topicFilter} onChange={e => setTopicFilter(e.target.value)} className="filter-select">
            <option value="all">全部主题</option>
            {topics.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        )}
        <span className="filter-count">共 {currentList.length} 题</span>
      </div>

      {/* 练习区域 */}
      <div className="exercise-card">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${currentList.length > 0 ? ((currentIndex + 1) / currentList.length) * 100 : 0}%` }} />
          <span className="progress-text">{currentList.length > 0 ? currentIndex + 1 : 0} / {currentList.length}</span>
        </div>

        {currentList.length === 0 && (
          <div className="empty-state"><p>📭 该筛选条件下暂无题目</p></div>
        )}

        {/* 填空题模式 */}
        {mode === 'fill' && current && (
          <>
            <div className="question">
              <h3>填入正确的词：</h3>
              {current.level && <span className="level-badge">{current.level}</span>}
              {current.topic && <span className="topic-badge">{current.topic}</span>}
              <p className="sentence">{current.sentence}</p>
              <p className="hint-text">💡 提示：{current.hint}</p>
            </div>
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              placeholder="输入你的答案..."
              className={`answer-input ${showAnswer ? (isCorrect ? 'input-correct' : 'input-wrong') : ''}`}
              onKeyDown={e => e.key === 'Enter' && !showAnswer && handleSubmit()}
              disabled={showAnswer}
            />
          </>
        )}

        {/* 打字练习模式 */}
        {mode === 'typing' && current && (
          <>
            <div className="question typing-question">
              <h3>⌨️ 键盘打字练习</h3>
              {current.level && <span className="level-badge">{current.level}</span>}
              {current.type && <span className="topic-badge">{current.type === 'verb' ? '动词' : current.type === 'vocab' ? '词汇' : '句型'}</span>}
              <p className="typing-prompt">{current.prompt}</p>
              {current.ipa && <p className="typing-ipa">音标：{current.ipa}</p>}
              {/* 实时字符着色 */}
              {typingChars.length > 0 && (
                <div className="typing-preview">
                  {typingChars.map((c, i) => (
                    <span key={i} className={`type-char ${c.status}`}>{c.char}</span>
                  ))}
                </div>
              )}
            </div>
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={handleTypingInput}
              placeholder="在这里打字..."
              className={`answer-input typing-input ${showAnswer ? (isCorrect ? 'input-correct' : 'input-wrong') : ''}`}
              onKeyDown={e => e.key === 'Enter' && !showAnswer && userInput.trim() && handleSubmit()}
              disabled={showAnswer}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
            />
            {typingStarted && !showAnswer && (
              <p className="typing-hint">⏱️ 计时中...</p>
            )}
          </>
        )}

        {/* 冠词填空模式 */}
        {mode === 'article' && current && (
          <>
            <div className="question">
              <h3>📋 选择正确的{lang === 'ko' ? '助词' : '冠词'}：</h3>
              {current.level && <span className="level-badge">{current.level}</span>}
              <p className="sentence article-sentence">{current.sentence}</p>
              <p className="hint-text">💡 提示：{current.hint}</p>
            </div>
            <div className="article-options">
              {(current.options || []).map((opt, i) => (
                <button
                  key={i}
                  className={`article-option ${selectedOption === opt ? 'selected' : ''} ${showAnswer ? (opt === current.answer ? 'option-correct' : selectedOption === opt ? 'option-wrong' : '') : ''}`}
                  onClick={() => !showAnswer && handleArticleSelect(opt)}
                  disabled={showAnswer}
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        )}

        {/* 翻译练习模式 */}
        {mode === 'translate' && current && (
          <>
            <div className="question">
              <h3>🔄 把这句话翻译成{langLabel}：</h3>
              {current.level && <span className="level-badge">{current.level}</span>}
              <p className="sentence cn">{current.cn}</p>
              <p className="hint-text">💡 提示：{current.hint}</p>
            </div>
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              placeholder={`用${langLabel}写...`}
              className={`answer-input ${showAnswer ? (isCorrect ? 'input-correct' : 'input-wrong') : ''}`}
              onKeyDown={e => e.key === 'Enter' && !showAnswer && handleSubmit()}
              disabled={showAnswer}
            />
          </>
        )}

        {/* 自由写作模式 */}
        {mode === 'free' && current && (
          <>
            <div className="question">
              <h3>✏️ {current.prompt || current.title}</h3>
              {current.level && <span className="level-badge">{current.level}</span>}
              {current.cn && <p className="cn-hint">{current.cn}</p>}
              <p className="hint-text">💡 提示：{current.hint}</p>
              {current.type && <span className="writing-type-tag">{current.type === '句子' ? '📝 句子练习' : current.type === '段落' ? '📄 段落练习' : '📖 篇章练习'}</span>}
              <p className="starter-text">开头参考：{current.starter}</p>
            </div>
            <textarea
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              placeholder={lang === 'en' ? "Write your text here..." : lang === 'ko' ? "여기에 써 보세요..." : "在这里写你的短文..."}
              className="answer-textarea"
              rows={current.type === '篇章' ? 10 : current.type === '段落' ? 8 : 5}
            />
            {userInput && <p className="word-count">已写 {userInput.split(/\s+/).filter(Boolean).length} 词</p>}
          </>
        )}

        {/* 操作按钮 */}
        {current && (
          <div className="exercise-actions">
            <button className="prev-btn" onClick={prevQuestion} disabled={currentIndex === 0}>
              ← 上一题
            </button>
            {!showAnswer ? (
              <button className="submit-btn" onClick={handleSubmit} disabled={!userInput.trim()}>
                {mode === 'free' ? '📋 保存' : '✅ 检查答案'}
              </button>
            ) : (
              <>
                {mode !== 'free' && (
                  <div className={`result ${isCorrect ? 'correct' : 'wrong'}`}>
                    {isCorrect ? (
                      <p>✅ 正确！太棒了！{wpm > 0 && ` ⌨️ ${wpm} WPM`}</p>
                    ) : (
                      <>
                        <p>❌ 你的答案：{userInput}</p>
                        <p>✅ 正确答案：<strong>{current.answer}</strong></p>
                        {mode === 'fill' && current.full && <p>完整句子：{current.full}</p>}
                        {mode === 'typing' && current.ipa && <p>音标：{current.ipa}</p>}
                      </>
                    )}
                  </div>
                )}
                {mode === 'free' && (
                  <div className="result saved">
                    <p>📋 已保存！继续保持写作习惯！</p>
                  </div>
                )}
                <button className="next-btn" onClick={nextQuestion}>
                  下一题 →
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* 进阶路线 */}
      <div className="writing-tips-section">
        <h4>📝 {langLabel}写作进阶路线</h4>
        <div className="writing-roadmap">
          <div className={`roadmap-step ${mode === 'fill' ? 'active' : ''}`}>
            <span className="step-icon">📝</span>
            <strong>填空题</strong>
            <p>基础词汇和语法</p>
          </div>
          <div className="roadmap-arrow">→</div>
          <div className={`roadmap-step ${mode === 'typing' ? 'active' : ''}`}>
            <span className="step-icon">⌨️</span>
            <strong>打字练习</strong>
            <p>键盘输入强化</p>
          </div>
          <div className="roadmap-arrow">→</div>
          <div className={`roadmap-step ${mode === 'article' ? 'active' : ''}`}>
            <span className="step-icon">📋</span>
            <strong>{lang === 'ko' ? '助词填空' : '冠词填空'}</strong>
            <p>{lang === 'ko' ? '助词精准运用' : '冠词精准运用'}</p>
          </div>
          <div className="roadmap-arrow">→</div>
          <div className={`roadmap-step ${mode === 'translate' ? 'active' : ''}`}>
            <span className="step-icon">🔄</span>
            <strong>翻译练习</strong>
            <p>中{lang === 'en' ? '英' : lang === 'ko' ? '韩' : '法'}思维转换</p>
          </div>
          <div className="roadmap-arrow">→</div>
          <div className={`roadmap-step ${mode === 'free' ? 'active' : ''}`}>
            <span className="step-icon">✏️</span>
            <strong>自由写作</strong>
            <p>创造性表达</p>
          </div>
        </div>
      </div>

      <div className="study-tips">
        <h4>📝 练习建议</h4>
        <ul>
          <li>每天坚持做10-15道题，比一次做很多效果好</li>
          <li>做错的题目记下来，隔一天再做一遍</li>
          <li>打字练习时注意特殊字符的输入方法{lang === 'ko' ? '（韩语键盘设置）' : '（如法语的é, è, ç）'}</li>
          <li>{lang === 'ko' ? '助词填空重点记忆：은/는, 이/가, 을/를, 에/에서' : '冠词填空重点记忆：法语的阴阳性和部分冠词'}</li>
          <li>翻译时先想中文意思，再找对应表达</li>
          <li>自由写作不要查字典，先写再改，培养语感</li>
        </ul>
      </div>
    </div>
  );
}

export default WritingPractice;
