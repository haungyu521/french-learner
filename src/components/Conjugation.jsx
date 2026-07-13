import { useState } from 'react';
import { speakFrench } from '../utils/tts';
import { useLocalStorage } from '../hooks/useLocalStorage';

const conjugations = [
  { verb: "Être", meaning: "是", group: "不规则", forms: { "je": "suis", "tu": "es", "il": "est", "nous": "sommes", "vous": "êtes", "ils": "sont" } },
  { verb: "Avoir", meaning: "有", group: "不规则", forms: { "je": "ai", "tu": "as", "il": "a", "nous": "avons", "vous": "avez", "ils": "ont" } },
  { verb: "Aller", meaning: "去", group: "不规则", forms: { "je": "vais", "tu": "vas", "il": "va", "nous": "allons", "vous": "allez", "ils": "vont" } },
  { verb: "Faire", meaning: "做", group: "不规则", forms: { "je": "fais", "tu": "fais", "il": "fait", "nous": "faisons", "vous": "faites", "ils": "font" } },
  { verb: "Pouvoir", meaning: "能", group: "不规则", forms: { "je": "peux", "tu": "peux", "il": "peut", "nous": "pouvons", "vous": "pouvez", "ils": "peuvent" } },
  { verb: "Vouloir", meaning: "想要", group: "不规则", forms: { "je": "veux", "tu": "veux", "il": "veut", "nous": "voulons", "vous": "voulez", "ils": "veulent" } },
  { verb: "Devoir", meaning: "必须", group: "不规则", forms: { "je": "dois", "tu": "dois", "il": "doit", "nous": "devons", "vous": "devez", "ils": "doivent" } },
  { verb: "Savoir", meaning: "知道", group: "不规则", forms: { "je": "sais", "tu": "sais", "il": "sait", "nous": "savons", "vous": "savez", "ils": "savent" } },
  { verb: "Voir", meaning: "看见", group: "不规则", forms: { "je": "vois", "tu": "vois", "il": "voit", "nous": "voyons", "vous": "voyez", "ils": "voient" } },
  { verb: "Dire", meaning: "说", group: "不规则", forms: { "je": "dis", "tu": "dis", "il": "dit", "nous": "disons", "vous": "dites", "ils": "disent" } },
  { verb: "Venir", meaning: "来", group: "不规则", forms: { "je": "viens", "tu": "viens", "il": "vient", "nous": "venons", "vous": "venez", "ils": "viennent" } },
  { verb: "Prendre", meaning: "拿/吃", group: "不规则", forms: { "je": "prends", "tu": "prends", "il": "prend", "nous": "prenons", "vous": "prenez", "ils": "prennent" } },
  { verb: "Parler", meaning: "说话", group: "-er", forms: { "je": "parle", "tu": "parles", "il": "parle", "nous": "parlons", "vous": "parlez", "ils": "parlent" } },
  { verb: "Manger", meaning: "吃", group: "-er", forms: { "je": "mange", "tu": "manges", "il": "mange", "nous": "mangeons", "vous": "mangez", "ils": "mangent" } },
  { verb: "Finir", meaning: "完成", group: "-ir", forms: { "je": "finis", "tu": "finis", "il": "finit", "nous": "finissons", "vous": "finissez", "ils": "finissent" } },
  { verb: "Choisir", meaning: "选择", group: "-ir", forms: { "je": "choisis", "tu": "choisis", "il": "choisit", "nous": "choisissons", "vous": "choisissez", "ils": "choisissent" } },
  { verb: "Vendre", meaning: "卖", group: "-re", forms: { "je": "vends", "tu": "vends", "il": "vend", "nous": "vendons", "vous": "vendez", "ils": "vendent" } },
  { verb: "Attendre", meaning: "等", group: "-re", forms: { "je": "attends", "tu": "attends", "il": "attend", "nous": "attendons", "vous": "attendez", "ils": "attendent" } },
  { verb: "Croire", meaning: "相信", group: "不规则", forms: { "je": "crois", "tu": "crois", "il": "croit", "nous": "croyons", "vous": "croyez", "ils": "croient" } },
  { verb: "Écrire", meaning: "写", group: "不规则", forms: { "je": "écris", "tu": "écris", "il": "écrit", "nous": "écrivons", "vous": "écrivez", "ils": "écrivent" } },
];

const tenses = [
  { id: 'present', name: '现在时 Présent', hint: '最基础的时态' },
  { id: 'passe', name: '复合过去时 Passé Composé', hint: '用avoir/être+过去分词' },
  { id: 'imparfait', name: '未完成过去时 Imparfait', hint: '过去背景/习惯' },
  { id: 'futur', name: '简单将来时 Futur Simple', hint: '不定式+ai,as,a,ons,ez,ont' },
  { id: 'conditionnel', name: '条件式 Conditionnel', hint: '不定式+ais,ais,ait,ions,iez,aient' },
  { id: 'subjonctif', name: '虚拟式 Subjonctif', hint: 'que + 特殊变位' },
];

const subjects = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];
const subjectKeys = ["je", "tu", "il", "nous", "vous", "ils"];

function Conjugation() {
  const [mode, setMode] = useState('learn'); // learn, quiz, reference
  const [selectedVerb, setSelectedVerb] = useState(0);
  const [selectedTense, setSelectedTense] = useState('present');
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState('');
  const [quizResult, setQuizResult] = useState(null);
  const [score, setScore] = useLocalStorage('conj-score', { correct: 0, total: 0 });
  const [filterGroup, setFilterGroup] = useState('all');

  const speak = (text) => speakFrench(text);

  const filteredVerbs = filterGroup === 'all' ? conjugations : conjugations.filter(v => v.group === filterGroup);

  // Quiz logic
  const generateQuiz = () => {
    const v = conjugations[Math.floor(Math.random() * conjugations.length)];
    const sIdx = Math.floor(Math.random() * subjectKeys.length);
    const s = subjectKeys[sIdx];
    return { verb: v, subject: subjects[sIdx], subjectKey: s, answer: v.forms[s] };
  };

  const [currentQuiz, setCurrentQuiz] = useState(() => generateQuiz());

  const checkAnswer = () => {
    const correct = quizAnswer.trim().toLowerCase() === currentQuiz.answer.toLowerCase();
    setQuizResult(correct);
    setScore({ correct: score.correct + (correct ? 1 : 0), total: score.total + 1 });
  };

  const nextQuiz = () => {
    setQuizResult(null);
    setQuizAnswer('');
    setCurrentQuiz(generateQuiz());
  };

  return (
    <div className="conjugation">
      <div className="conj-header">
        <h2>🔤 动词变位训练</h2>
        <p className="subtitle">掌握法语动词变位是流利口语的基础</p>
        <div className="conj-stats">
          <span>✅ {score.correct}/{score.total}</span>
          <span>📊 正确率: {score.total > 0 ? Math.round(score.correct / score.total * 100) : 0}%</span>
        </div>
      </div>

      <div className="mode-tabs">
        <button className={`tab ${mode === 'learn' ? 'active' : ''}`} onClick={() => setMode('learn')}>📖 学习模式</button>
        <button className={`tab ${mode === 'quiz' ? 'active' : ''}`} onClick={() => setMode('quiz')}>🎯 闯关模式</button>
        <button className={`tab ${mode === 'reference' ? 'active' : ''}`} onClick={() => setMode('reference')}>📋 速查表</button>
      </div>

      {mode === 'learn' && (
        <div className="conj-learn">
          <div className="filters">
            <select value={selectedVerb} onChange={e => setSelectedVerb(Number(e.target.value))}>
              {conjugations.map((v, i) => (
                <option key={i} value={i}>{v.verb} ({v.meaning}) - {v.group}</option>
              ))}
            </select>
          </div>
          <div className="conj-table">
            <h3>{conjugations[selectedVerb].verb} <span className="verb-meaning">({conjugations[selectedVerb].meaning})</span>
              <span className="verb-group">{conjugations[selectedVerb].group}</span></h3>
            <div className="conj-grid">
              {subjectKeys.map((s, i) => (
                <div key={s} className="conj-row" onClick={() => speak(`${subjects[i]} ${conjugations[selectedVerb].forms[s]}`)}>
                  <span className="conj-subject">{subjects[i]}</span>
                  <span className="conj-form">{conjugations[selectedVerb].forms[s]}</span>
                  <span className="conj-full">{subjects[i]} {conjugations[selectedVerb].forms[s]}</span>
                  <button className="mini-speak-btn" onClick={e => { e.stopPropagation(); speak(`${subjects[i]} ${conjugations[selectedVerb].forms[s]}`); }}>🔊</button>
                </div>
              ))}
            </div>
            <div className="conj-tip">
              <p>💡 <strong>{conjugations[selectedVerb].group === '-er' ? '-er动词变位规律：去掉-er加 -e, -es, -e, -ons, -ez, -ent' : conjugations[selectedVerb].group === '-ir' ? '-ir动词变位规律：去掉-ir加 -is, -is, -it, -issons, -issez, -issent' : conjugations[selectedVerb].group === '-re' ? '-re动词变位规律：去掉-re加 -s, -s, 原形, -ons, -ez, -ent' : '不规则动词需要单独记忆！'}</strong></p>
            </div>
          </div>
        </div>
      )}

      {mode === 'quiz' && (
        <div className="conj-quiz">
          <div className="quiz-card">
            <div className="quiz-verb">
              <h3>{currentQuiz.verb.verb} <span className="speak-icon" onClick={() => speak(currentQuiz.verb.verb)}>🔊</span></h3>
              <p className="quiz-meaning">{currentQuiz.verb.meaning}</p>
            </div>
            <div className="quiz-question">
              <p className="quiz-subject">{currentQuiz.subject}</p>
              <input className="quiz-input" value={quizAnswer} onChange={e => setQuizAnswer(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && (quizResult ? nextQuiz() : checkAnswer())}
                placeholder="输入变位形式..." disabled={quizResult !== null} autoFocus />
              {quizResult !== null && (
                <div className={`quiz-feedback ${quizResult ? 'correct' : 'wrong'}`}>
                  {quizResult ? '✅ 正确!' : <>❌ 正确答案: <strong onClick={() => speak(currentQuiz.answer)} style={{cursor:'pointer'}}>🔊 {currentQuiz.answer}</strong></>}
                </div>
              )}
            </div>
            <button className="submit-btn" onClick={quizResult ? nextQuiz : checkAnswer}>
              {quizResult ? '下一题 →' : '检查答案'}
            </button>
          </div>
        </div>
      )}

      {mode === 'reference' && (
        <div className="conj-reference">
          <div className="filters">
            <select value={filterGroup} onChange={e => setFilterGroup(e.target.value)}>
              <option value="all">全部动词</option>
              <option value="-er">-er 动词</option>
              <option value="-ir">-ir 动词</option>
              <option value="-re">-re 动词</option>
              <option value="不规则">不规则动词</option>
            </select>
          </div>
          <div className="ref-grid">
            {filteredVerbs.map((v, i) => (
              <div key={i} className="ref-card">
                <h4 onClick={() => speak(v.verb)} style={{cursor:'pointer'}}>{v.verb} <span>({v.meaning})</span> <span className="speak-icon">🔊</span></h4>
                <div className="ref-forms">
                  {subjectKeys.map((s, j) => (
                    <div key={s} className="ref-form" onClick={() => speak(`${subjects[j]} ${v.forms[s]}`)} style={{cursor:'pointer'}}>
                      <span className="ref-subj">{subjects[j]}</span>
                      <strong>{v.forms[s]}</strong>
                      <span className="speak-icon" style={{fontSize:'12px'}}>🔊</span>
                    </div>
                  ))}
                </div>
                <span className="ref-group">{v.group}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="study-tips">
        <h4>📝 动词变位记忆秘诀</h4>
        <ul>
          <li>先掌握3个最重要的不规则动词：être, avoir, aller</li>
          <li>-er动词占80%，记住parler的变位模式即可套用</li>
          <li>每天随机选5个动词练习所有时态的变位</li>
          <li>用句子记忆比单独记变位更有效：Je suis étudiant</li>
        </ul>
      </div>
    </div>
  );
}

export default Conjugation;
