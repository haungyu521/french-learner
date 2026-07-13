import { useState } from 'react';
import { curriculumData } from '../data/curriculum';
import { vocabularyData } from '../data/vocabulary';
import { speakFrench } from '../utils/tts';
import { useLocalStorage } from '../hooks/useLocalStorage';

function Challenge() {
  const [mode, setMode] = useState('menu');
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [bestScores, setBestScores] = useLocalStorage('challenge-best', {});
  const [streak, setStreak] = useState(0);

  const speak = (text) => speakFrench(text);

  const generateQuestions = (type, count = 10) => {
    const qs = [];
    if (type === 'vocab') {
      const shuffled = [...vocabularyData].sort(() => Math.random() - 0.5).slice(0, count);
      shuffled.forEach(v => {
        const wrong = vocabularyData.filter(w => w.id !== v.id).sort(() => Math.random() - 0.5).slice(0, 3);
        const options = [v.meaning, ...wrong.map(w => w.meaning)].sort(() => Math.random() - 0.5);
        qs.push({ type: 'choice', question: `"${v.word}" 是什么意思?`, options, answer: options.indexOf(v.meaning), audio: v.word, category: 'vocab' });
      });
    } else if (type === 'listen') {
      const shuffled = [...vocabularyData].sort(() => Math.random() - 0.5).slice(0, count);
      shuffled.forEach(v => {
        const wrong = vocabularyData.filter(w => w.id !== v.id).sort(() => Math.random() - 0.5).slice(0, 3);
        const options = [v.word, ...wrong.map(w => w.word)].sort(() => Math.random() - 0.5);
        qs.push({ type: 'listen', question: '听发音，选择正确的单词', options, answer: options.indexOf(v.word), audio: v.word, category: 'listen' });
      });
    } else if (type === 'grammar') {
      const allPractice = curriculumData.flatMap(u => u.lessons).flatMap(l => l.practice).filter(p => p.type === 'choice');
      allPractice.sort(() => Math.random() - 0.5).slice(0, count).forEach(p => {
        qs.push({ type: 'choice', question: p.question, options: p.options, answer: p.answer, category: 'grammar' });
      });
    } else if (type === 'mix') {
      const vocab = generateQuestions('vocab', 4);
      const listen = generateQuestions('listen', 3);
      const grammar = generateQuestions('grammar', 3);
      return [...vocab, ...listen, ...grammar].sort(() => Math.random() - 0.5);
    }
    return qs;
  };

  const startChallenge = (type) => {
    const qs = generateQuestions(type);
    setQuestions(qs); setCurrentQ(0); setScore(0); setSelected(null); setShowAnswer(false); setStreak(0);
    setMode('play');
  };

  const checkAnswer = (idx) => {
    if (showAnswer) return;
    setSelected(idx);
    setShowAnswer(true);
    const correct = idx === questions[currentQ].answer;
    if (correct) { setScore(score + 1); setStreak(streak + 1); }
    else setStreak(0);
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1); setSelected(null); setShowAnswer(false);
    } else {
      const finalScore = score + (selected === questions[currentQ].answer ? 0 : 0);
      const key = mode;
      if (!bestScores[key] || finalScore > bestScores[key]) {
        setBestScores({ ...bestScores, [key]: finalScore });
      }
      setMode('result');
    }
  };

  if (mode === 'menu') {
    return (
      <div className="challenge">
        <div className="challenge-header">
          <h2>🏆 闯关挑战</h2>
          <p className="subtitle">测试你的法语水平，挑战最高分！</p>
        </div>

        <div className="challenge-modes">
          <div className="challenge-card" onClick={() => startChallenge('vocab')}>
            <span className="card-emoji">📝</span>
            <h3>词汇大闯关</h3>
            <p>看单词选意思，10题限时挑战</p>
            <span className="card-diff">⭐ 入门</span>
            {bestScores.vocab !== undefined && <span className="best-score">最高分: {bestScores.vocab}/10</span>}
          </div>
          <div className="challenge-card" onClick={() => startChallenge('listen')}>
            <span className="card-emoji">👂</span>
            <h3>听力大闯关</h3>
            <p>听发音选单词，练练你的耳朵</p>
            <span className="card-diff">⭐⭐ 进阶</span>
            {bestScores.listen !== undefined && <span className="best-score">最高分: {bestScores.listen}/10</span>}
          </div>
          <div className="challenge-card" onClick={() => startChallenge('grammar')}>
            <span className="card-emoji">📖</span>
            <h3>语法大闯关</h3>
            <p>语法选择题，考考你的基本功</p>
            <span className="card-diff">⭐⭐ 进阶</span>
            {bestScores.grammar !== undefined && <span className="best-score">最高分: {bestScores.grammar}/10</span>}
          </div>
          <div className="challenge-card" onClick={() => startChallenge('mix')}>
            <span className="card-emoji">🎯</span>
            <h3>综合大闯关</h3>
            <p>词汇+听力+语法混合，终极挑战</p>
            <span className="card-diff">⭐⭐⭐ 高级</span>
            {bestScores.mix !== undefined && <span className="best-score">最高分: {bestScores.mix}/10</span>}
          </div>
        </div>

        <div className="study-tips">
          <h4>📝 闯关小贴士</h4>
          <ul>
            <li>词汇闯关：靠脑洞记忆法来选，想不起来就看哪个最"荒谬"</li>
            <li>听力闯关：先点🔊听3遍再选，不要猜</li>
            <li>连续答对有连击加分效果！</li>
            <li>每天挑战一次，记录进步</li>
          </ul>
        </div>
      </div>
    );
  }

  if (mode === 'result') {
    const percentage = Math.round((score / questions.length) * 100);
    let grade, emoji, message;
    if (percentage >= 90) { grade = 'S级·法语天才'; emoji = '🏆'; message = '太强了！你几乎全对了！'; }
    else if (percentage >= 70) { grade = 'A级·法语达人'; emoji = '🌟'; message = '很棒！继续保持！'; }
    else if (percentage >= 50) { grade = 'B级·努力中'; emoji = '💪'; message = '不错的开始！多复习再来！'; }
    else { grade = 'C级·继续加油'; emoji = '📚'; message = '回去看看课程，下次会更好！'; }

    return (
      <div className="challenge-result">
        <div className="result-card">
          <span className="result-emoji">{emoji}</span>
          <h2>{grade}</h2>
          <div className="result-score">{score}/{questions.length}</div>
          <p>{message}</p>
          <div className="result-stats">
            <span>正确率: {percentage}%</span>
          </div>
        </div>
        <button className="retry-btn" onClick={() => setMode('menu')}>返回挑战列表</button>
      </div>
    );
  }

  const q = questions[currentQ];
  return (
    <div className="challenge-play">
      <div className="challenge-top">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
        </div>
        <div className="challenge-info">
          <span>第{currentQ + 1}/{questions.length}题</span>
          <span>得分: {score}</span>
          {streak >= 3 && <span className="streak-badge">🔥 {streak}连击!</span>}
        </div>
      </div>

      <div className="question-card">
        {q.type === 'listen' && (
          <button className="listen-btn" onClick={() => speak(q.audio)}>
            🔊 点击听发音
          </button>
        )}
        <h3 className="question-text">{q.question}</h3>
        <div className="options-grid">
          {q.options.map((opt, i) => (
            <button key={i}
              className={`option-btn ${selected === i ? (i === q.answer ? 'correct' : 'wrong') : ''} ${showAnswer && i === q.answer ? 'correct' : ''}`}
              onClick={() => checkAnswer(i)}>
              {opt}
            </button>
          ))}
        </div>
        {showAnswer && (
          <div className="answer-feedback">
            <p className={selected === q.answer ? 'feedback-correct' : 'feedback-wrong'}>
              {selected === q.answer ? '✅ 答对了！' : '❌ 答错了，正确答案已标出'}
            </p>
            <button className="next-btn" onClick={nextQuestion}>
              {currentQ < questions.length - 1 ? '下一题 →' : '查看结果'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Challenge;
