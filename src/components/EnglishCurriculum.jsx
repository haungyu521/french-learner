import { useState, useEffect } from 'react';
import { englishCurriculum } from '../data/english/curriculum';
import { speakEnglish, preloadAudio } from '../utils/tts';

export default function EnglishCurriculum() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [tab, setTab] = useState('vocab');

  const totalLessons = englishCurriculum.reduce((s, u) => s + u.lessons.length, 0);
  const lesson = englishCurriculum.flatMap(u => u.lessons).find(l => l.id === selectedLesson);

  const speak = (text) => speakEnglish(text);

  // 预加载英语音频
  useEffect(() => {
    if (lesson && lesson.vocab) {
      lesson.vocab.forEach(v => preloadAudio(v.word, 'en-US'));
      if (lesson.dialogue) {
        lesson.dialogue.forEach(d => preloadAudio(d.text, 'en-US'));
      }
    }
  }, [lesson]);

  if (lesson) {
    const tabs = [
      { id: 'vocab', name: '词汇', icon: '📝' },
      { id: 'grammar', name: '语法', icon: '📐' },
      { id: 'dialogue', name: '对话', icon: '💬' },
      { id: 'practice', name: '练习', icon: '✏️' },
    ];

    return (
      <div className="curriculum-detail">
        <button className="back-btn" onClick={() => setSelectedLesson(null)}>← 返回课程列表</button>
        <div className="lesson-header">
          <h2>{lesson.title}</h2>
          <p className="lesson-goal">🎯 目标：{lesson.goal}</p>
        </div>
        <div className="lesson-tabs">
          {tabs.map(t => (
            <button key={t.id} className={`tab-btn ${tab === t.id ? 'active' : ''}`} onClick={() => setTab(t.id)}>
              {t.icon} {t.name}
            </button>
          ))}
        </div>
        <div className="lesson-content">
          {tab === 'vocab' && (
            <div className="vocab-list">
              {lesson.vocab.map((v, i) => (
                <div key={i} className="vocab-card">
                  <div className="vocab-top">
                    <span className="vocab-word">{v.word}</span>
                    <span className="vocab-meaning">{v.meaning}</span>
                    <button className="speak-btn" onClick={() => speak(v.audio || v.word)}>🔊</button>
                  </div>
                  <div className="vocab-example">
                    <span className="example-en">{v.example}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {tab === 'grammar' && (
            <div className="grammar-section">
              <h3>{lesson.grammar.title}</h3>
              <div className="grammar-content">
                {lesson.grammar.content.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <div className="grammar-tip">
                <strong>💡 小贴士：</strong>{lesson.grammar.tip}
              </div>
            </div>
          )}
          {tab === 'dialogue' && (
            <div className="dialogue-section">
              {lesson.dialogue.map((d, i) => (
                <div key={i} className={`dialogue-line ${d.role === '你' ? 'self' : 'other'}`}>
                  <span className="dialogue-role">{d.role}</span>
                  <div className="dialogue-bubble">
                    <p className="dialogue-text">{d.text}</p>
                    <p className="dialogue-cn">{d.cn}</p>
                    <button className="speak-btn small" onClick={() => speak(d.text)}>🔊</button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {tab === 'practice' && (
            <div className="practice-section">
              {lesson.practice.map((p, i) => (
                <PracticeCard key={i} item={p} speak={speak} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="curriculum-section">
      <div className="curriculum-header">
        <h2>🇬🇧 英语系统课程</h2>
        <p className="curriculum-subtitle">{totalLessons}节课 · 从小学水平到流利</p>
      </div>
      <div className="unit-list">
        {englishCurriculum.map((unit, ui) => (
          <div key={ui} className="unit-block">
            <div className="unit-header">
              <h3>{unit.unitTitle}</h3>
              <p>{unit.unitDesc}</p>
            </div>
            <div className="lesson-grid">
              {unit.lessons.map(l => (
                <button key={l.id} className="lesson-card" onClick={() => setSelectedLesson(l.id)}>
                  <span className="lesson-id">#{l.id - 100}</span>
                  <span className="lesson-title">{l.title}</span>
                  <span className="lesson-goal-short">{l.goal}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PracticeCard({ item, speak }) {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState(null);

  const check = () => {
    if (item.type === 'fill') {
      setResult(userInput.trim().toLowerCase() === item.answer.toLowerCase() ? 'correct' : 'wrong');
    } else if (item.type === 'choice') {
      setResult(userInput === String(item.answer) ? 'correct' : 'wrong');
    }
  };

  return (
    <div className="practice-card">
      <p className="practice-q">{item.question}</p>
      {item.type === 'fill' && (
        <input className="practice-input" value={userInput} onChange={e => setUserInput(e.target.value)}
          placeholder={item.hint || "输入答案..."} onKeyDown={e => e.key === 'Enter' && check()} />
      )}
      {item.type === 'choice' && (
        <div className="choice-options">
          {item.options.map((opt, i) => (
            <button key={i} className={`choice-btn ${userInput === String(i) ? 'selected' : ''}`}
              onClick={() => { setUserInput(String(i)); }}>
              {opt}
            </button>
          ))}
        </div>
      )}
      <button className="btn-check" onClick={check}>检查</button>
      {result === 'correct' && <p className="result-correct">✅ 正确！</p>}
      {result === 'wrong' && <p className="result-wrong">❌ 答案是：{item.answer}</p>}
    </div>
  );
}
