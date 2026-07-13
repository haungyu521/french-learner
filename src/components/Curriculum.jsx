import { useState, useEffect } from 'react';
import { curriculumData, advancedCurriculumData } from '../data/curriculum';
import { speakFrench, preloadAudio } from '../utils/tts';
const allCurriculum = [...curriculumData, ...advancedCurriculumData];
import { useLocalStorage } from '../hooks/useLocalStorage';

function Curriculum() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useLocalStorage('curriculum-completed', []);
  const [tab, setTab] = useState('vocab'); // vocab, grammar, dialogue, practice
  const [practiceIdx, setPracticeIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  const speak = (text) => speakFrench(text);

  // 进入课程后预加载所有词汇音频
  useEffect(() => {
    if (selectedLesson && selectedLesson.vocab) {
      selectedLesson.vocab.forEach(v => {
        preloadAudio(v.word, 'fr-FR');
        if (v.example) preloadAudio(v.example, 'fr-FR');
      });
      if (selectedLesson.dialogue) {
        selectedLesson.dialogue.forEach(d => preloadAudio(d.text, 'fr-FR'));
      }
    }
  }, [selectedLesson]);

  const totalLessons = allCurriculum.reduce((s, u) => s + u.lessons.length, 0);
  const completedCount = completedLessons.length;

  const markComplete = (id) => {
    if (!completedLessons.includes(id)) setCompletedLessons([...completedLessons, id]);
  };

  const checkPractice = (lesson) => {
    const p = lesson.practice[practiceIdx];
    setShowResult(true);
    if (p.type === 'fill') return userAnswer.toLowerCase().trim() === p.answer.toLowerCase().trim();
    if (p.type === 'choice') return parseInt(userAnswer) === p.answer;
    return false;
  };

  if (selectedLesson) {
    const lesson = allCurriculum.flatMap(u => u.lessons).find(l => l.id === selectedLesson);
    const isComplete = completedLessons.includes(lesson.id);

    return (
      <div className="curriculum-detail">
        <button className="back-btn" onClick={() => { setSelectedLesson(null); setTab('vocab'); }}>← 返回课程列表</button>
        
        <div className="lesson-header">
          <h2>{lesson.title}</h2>
          <p className="lesson-goal">🎯 目标：{lesson.goal}</p>
          {!isComplete && <button className="complete-btn" onClick={() => markComplete(lesson.id)}>✅ 标记完成</button>}
          {isComplete && <span className="completed-badge">✅ 已完成</span>}
        </div>

        <div className="lesson-tabs">
          {['vocab', 'grammar', 'dialogue', 'practice'].map(t => (
            <button key={t} className={`lesson-tab ${tab === t ? 'active' : ''}`} onClick={() => { setTab(t); setPracticeIdx(0); setUserAnswer(''); setShowResult(false); }}>
              {t === 'vocab' && '📝 词汇'}
              {t === 'grammar' && '📖 语法'}
              {t === 'dialogue' && '💬 对话'}
              {t === 'practice' && '✍️ 练习'}
            </button>
          ))}
        </div>

        {tab === 'vocab' && (
          <div className="vocab-section">
            {lesson.vocab.map((v, i) => (
              <div key={i} className="mnemonic-card">
                <div className="mnemonic-word" onClick={() => speak(v.audio || v.word)}>
                  <h3>{v.word}</h3>
                  <span className="mnemonic-meaning">{v.meaning}</span>
                  <span className="speak-icon">🔊</span>
                </div>
                <p className="mnemonic-example" onClick={() => speak(v.example)}>📌 {v.example} <span className="speak-icon">🔊</span></p>
              </div>
            ))}
          </div>
        )}

        {tab === 'grammar' && (
          <div className="grammar-section">
            <h3>{lesson.grammar.title}</h3>
            <div className="grammar-content">{lesson.grammar.content.split('\n').map((line, i) => <p key={i}>{line}</p>)}</div>
            <div className="grammar-tip">
              <span>💡</span>
              <p>{lesson.grammar.tip}</p>
            </div>
          </div>
        )}

        {tab === 'dialogue' && (
          <div className="dialogue-section">
            {lesson.dialogue.map((d, i) => (
              <div key={i} className={`dialogue-line ${d.role === '你' || d.role === 'B' ? 'your-line' : 'other-line'}`}>
                <span className="dialogue-role">{d.role}</span>
                <p className="dialogue-fr" onClick={() => speak(d.text)}>{d.text} <span className="speak-icon">🔊</span></p>
                <p className="dialogue-cn">{d.cn}</p>
              </div>
            ))}
            <button className="speak-btn large" onClick={() => {
              let delay = 0;
              lesson.dialogue.forEach(d => { setTimeout(() => speak(d.text), delay); delay += 3000; });
            }}>🔊 播放整段对话</button>
          </div>
        )}

        {tab === 'practice' && lesson.practice[practiceIdx] && (
          <div className="practice-section">
            <div className="progress-bar"><div className="progress-fill" style={{ width: `${((practiceIdx + 1) / lesson.practice.length) * 100}%` }} /></div>
            <div className="practice-question">
              <h3>第{practiceIdx + 1}题 / 共{lesson.practice.length}题</h3>
              <p className="q-text">{lesson.practice[practiceIdx].question}</p>
              {lesson.practice[practiceIdx].hint && <p className="q-hint">💡 提示：{lesson.practice[practiceIdx].hint}</p>}

              {lesson.practice[practiceIdx].type === 'fill' ? (
                <input type="text" value={userAnswer} onChange={e => setUserAnswer(e.target.value)} placeholder="输入答案..." className="answer-input"
                  onKeyDown={e => e.key === 'Enter' && !showResult && checkPractice(lesson)} />
              ) : (
                <div className="choice-options">
                  {lesson.practice[practiceIdx].options.map((opt, i) => (
                    <button key={i} className={`choice-btn ${userAnswer === String(i) ? 'selected' : ''} ${showResult && i === lesson.practice[practiceIdx].answer ? 'correct' : ''} ${showResult && userAnswer === String(i) && i !== lesson.practice[practiceIdx].answer ? 'wrong' : ''}`}
                      onClick={() => !showResult && setUserAnswer(String(i))}>
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {!showResult ? (
                <button className="submit-btn" onClick={() => checkPractice(lesson)} disabled={!userAnswer}>检查答案</button>
              ) : (
                <div className="practice-result">
                  <p className={checkPractice(lesson) ? 'result-correct' : 'result-wrong'}>
                    {checkPractice(lesson) ? '✅ 正确！太棒了！' : `❌ 正确答案是：${lesson.practice[practiceIdx].type === 'fill' ? lesson.practice[practiceIdx].answer : lesson.practice[practiceIdx].options[lesson.practice[practiceIdx].answer]}`}
                  </p>
                  <button className="next-btn" onClick={() => {
                    if (practiceIdx < lesson.practice.length - 1) { setPracticeIdx(practiceIdx + 1); setUserAnswer(''); setShowResult(false); }
                  }}>
                    {practiceIdx < lesson.practice.length - 1 ? '下一题 →' : '🎉 全部完成！'}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="curriculum">
      <div className="curriculum-header">
        <h2>🎓 系统课程</h2>
        <p className="subtitle">30节递进式课程，从零开始学法语</p>
        <div className="curriculum-progress">
          <div className="progress-bar"><div className="progress-fill" style={{ width: `${(completedCount / totalLessons) * 100}%` }} /></div>
          <span>已完成 {completedCount}/{totalLessons} 课</span>
        </div>
      </div>

      {allCurriculum.map((unit, ui) => (
        <div key={ui} className="unit-block">
          <div className="unit-header">
            <h3>单元 {unit.unit}：{unit.unitTitle}</h3>
            <p>{unit.unitDesc}</p>
          </div>
          <div className="lesson-grid">
            {unit.lessons.map(lesson => (
              <div key={lesson.id} className={`lesson-card ${completedLessons.includes(lesson.id) ? 'completed' : ''}`}
                onClick={() => setSelectedLesson(lesson.id)}>
                <div className="lesson-number">{lesson.id}</div>
                <div className="lesson-info">
                  <h4>{lesson.title.split('：')[1] || lesson.title}</h4>
                  <p>{lesson.goal}</p>
                  <div className="lesson-meta">
                    <span>📝 {lesson.vocab.length}词</span>
                    <span>💬 {lesson.dialogue.length}句</span>
                  </div>
                </div>
                {completedLessons.includes(lesson.id) && <span className="done-badge">✅</span>}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="study-tips">
        <h4>📝 课程学习建议</h4>
        <ul>
          <li>按顺序学，每课包含词汇、语法、对话、练习四个环节</li>
          <li>先学词汇（看脑洞记忆！），再看语法理解规律</li>
          <li>对话环节一定要点🔊听发音，跟着念</li>
          <li>做完练习题才算真正完成一课</li>
        </ul>
      </div>
    </div>
  );
}

export default Curriculum;
