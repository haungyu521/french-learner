import { useState, useEffect } from 'react';
import { koreanCurriculum } from '../data/korean/curriculum';
import { speakKorean, preloadAudio } from '../utils/tts';

export default function KoreanCurriculum() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [tab, setTab] = useState('vocab');

  const totalLessons = koreanCurriculum.reduce((s, u) => s + u.lessons.length, 0);
  const lesson = koreanCurriculum.flatMap(u => u.lessons).find(l => l.id === selectedLesson);

  const speak = (text) => speakKorean(text);

  useEffect(() => {
    if (lesson && lesson.vocab) {
      lesson.vocab.forEach(v => preloadAudio(v.word, 'ko-KR'));
      if (lesson.dialogue && lesson.dialogue.lines) {
        lesson.dialogue.lines.forEach(d => preloadAudio(d.text, 'ko-KR'));
      }
    }
  }, [lesson]);

  if (lesson) {
    const tabs = [
      { id: 'vocab', name: '词汇', icon: '📝' },
      { id: 'grammar', name: '语法', icon: '📐' },
      { id: 'dialogue', name: '对话', icon: '💬' },
      { id: 'practice', name: '练习', icon: '✏️' },
      { id: 'mnemonic', name: '记忆法', icon: '🧠' },
    ];

    return (
      <div className="curriculum-detail">
        <button className="back-btn" onClick={() => setSelectedLesson(null)}>← 返回课程列表</button>
        <div className="lesson-header">
          <h2>{lesson.title}</h2>
          <span className="lesson-level-badge">{lesson.level}</span>
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
                    <button className="speak-btn" onClick={() => speak(v.word)}>🔊</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === 'grammar' && lesson.grammar && (
            <div className="grammar-section">
              <h3>{lesson.grammar.title}</h3>
              <div className="grammar-content">
                {lesson.grammar.content.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          )}

          {tab === 'dialogue' && lesson.dialogue && (
            <div className="dialogue-section">
              <h3>💬 对话练习</h3>
              <p className="dialogue-speakers">{lesson.dialogue.speaker1} & {lesson.dialogue.speaker2}</p>
              {lesson.dialogue.lines.map((line, i) => (
                <div key={i} className={`dialogue-line ${line.speaker === lesson.dialogue.speaker1 ? 'left' : 'right'}`}>
                  <div className="dialogue-bubble">
                    <p className="dialogue-text">{line.text}</p>
                    <p className="dialogue-cn">{line.cn}</p>
                    <button className="speak-btn" onClick={() => speak(line.text)}>🔊</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === 'practice' && lesson.practice && (
            <div className="practice-section">
              <h3>✏️ 练习题</h3>
              {lesson.practice.map((p, i) => (
                <div key={i} className="practice-item">
                  <p className="practice-question">{i + 1}. {p.question}</p>
                  {p.type === 'choice' && (
                    <div className="practice-options">
                      {p.options.map((opt, j) => (
                        <button key={j} className="practice-option" onClick={(e) => {
                          const buttons = e.target.parentElement.querySelectorAll('button');
                          buttons.forEach(b => b.classList.remove('correct', 'wrong'));
                          if (j === p.answer) e.target.classList.add('correct');
                          else e.target.classList.add('wrong');
                        }}>{opt}</button>
                      ))}
                    </div>
                  )}
                  {p.type === 'fill' && (
                    <input type="text" placeholder="输入答案..." className="practice-fill-input"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const val = e.target.value.trim();
                          e.target.classList.remove('correct', 'wrong');
                          if (val === p.answer) e.target.classList.add('correct');
                          else e.target.classList.add('wrong');
                        }
                      }} />
                  )}
                  {p.hint && <p className="practice-hint">💡 {p.hint}</p>}
                </div>
              ))}
            </div>
          )}

          {tab === 'mnemonic' && lesson.mnemonic && (
            <div className="mnemonic-section">
              <h3>🧠 记忆法</h3>
              <div className="mnemonic-box">
                <p>{lesson.mnemonic}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="curriculum">
      <div className="curriculum-header">
        <h2>🎓 韩语系统课程</h2>
        <p className="subtitle">从零基础到流利 · TOPIK 1-6 · 首尔标准口语 · 共 {totalLessons} 课</p>
      </div>
      <div className="curriculum-units">
        {koreanCurriculum.map(unit => (
          <div key={unit.id} className="curriculum-unit">
            <h3 className="unit-title">{unit.title}</h3>
            <span className="unit-level">{unit.level}</span>
            <div className="unit-lessons">
              {unit.lessons.map(lesson => (
                <div key={lesson.id} className="lesson-card" onClick={() => { setSelectedLesson(lesson.id); setTab('vocab'); }}>
                  <span className="lesson-num">{lesson.id}</span>
                  <span className="lesson-name">{lesson.title}</span>
                  <span className="lesson-level">{lesson.level}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="study-tips">
        <h4>📝 学习建议</h4>
        <ul>
          <li>每课先看「词汇」再读「语法」，最后做「练习」巩固</li>
          <li>对话练习点击🔊听首尔标准发音，模仿语调</li>
          <li>「记忆法」中的口诀可以帮助快速记住发音规则和语法</li>
          <li>建议每天学1-2课，第二天复习上一课再学新课</li>
          <li>TOPIK 1-2为入门，3-4为进阶，5-6为高级，按顺序学习效果最佳</li>
        </ul>
      </div>
    </div>
  );
}
