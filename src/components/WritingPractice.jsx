import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

function WritingPractice() {
  const [mode, setMode] = useState('fill'); // fill, translate, free
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [history, setHistory] = useLocalStorage('writing-history', []);

  const fillBlanks = [
    // 现在时变位
    { sentence: "Je ___ français.", answer: "parle", hint: "我说（parler变位）", full: "Je parle français." },
    { sentence: "Nous ___ au restaurant.", answer: "allons", hint: "我们去（aller变位）", full: "Nous allons au restaurant." },
    { sentence: "Elle ___ une lettre à son ami.", answer: "écrit", hint: "她写（écrire变位）", full: "Elle écrit une lettre à son ami." },
    { sentence: "Les enfants ___ dans le jardin.", answer: "jouent", hint: "孩子们在玩（jouer变位）", full: "Les enfants jouent dans le jardin." },
    { sentence: "Tu ___ quel âge?", answer: "as", hint: "你几岁（avoir变位）", full: "Tu as quel âge?" },
    { sentence: "Vous ___ très gentils.", answer: "êtes", hint: "你们是（être变位）", full: "Vous êtes très gentils." },
    { sentence: "Ils ___ du pain tous les jours.", answer: "mangent", hint: "他们每天吃面包（manger变位）", full: "Ils mangent du pain tous les jours." },
    // 过去时
    { sentence: "Hier, j'ai ___ un bon film.", answer: "vu", hint: "昨天我看了（voir过去分词）", full: "Hier, j'ai vu un bon film." },
    { sentence: "Elle est ___ à Paris hier.", answer: "allée", hint: "她昨天去了巴黎（aller+阴性配合）", full: "Elle est allée à Paris hier." },
    { sentence: "Nous avons ___ au restaurant.", answer: "mangé", hint: "我们在餐厅吃了（manger过去分词）", full: "Nous avons mangé au restaurant." },
    // 条件式与虚拟式
    { sentence: "J'___ un café, s'il vous plaît.", answer: "aimerais", hint: "我想要（条件式）", full: "J'aimerais un café, s'il vous plaît." },
    { sentence: "Si j'étais riche, je ___ le tour du monde.", answer: "ferais", hint: "如果我有钱，我会环游世界（条件式）", full: "Si j'étais riche, je ferais le tour du monde." },
    { sentence: "Il faut que tu ___ tes devoirs.", answer: "fasses", hint: "你必须做作业（faire虚拟式）", full: "Il faut que tu fasses tes devoirs." },
    // 介词与冠词
    { sentence: "Je vais ___ cinéma.", answer: "au", hint: "我去电影院（à+le缩合）", full: "Je vais au cinéma." },
    { sentence: "Elle vient ___ Japon.", answer: "du", hint: "她来自日本（de+le缩合）", full: "Elle vient du Japon." },
    { sentence: "Nous habitons ___ France.", answer: "en", hint: "我们住在法国（阴性国名用en）", full: "Nous habitons en France." },
  ];

  const translations = [
    // A1 基础翻译
    { cn: "我喜欢法国面包。", answer: "J'aime le pain français.", hint: "aimer + le pain + français" },
    { cn: "你今天做什么？", answer: "Qu'est-ce que tu fais aujourd'hui?", hint: "Qu'est-ce que + tu + faire" },
    { cn: "我不明白。", answer: "Je ne comprends pas.", hint: "ne + comprendre + pas" },
    { cn: "她有一个小猫。", answer: "Elle a un petit chat.", hint: "avoir + petit + chat" },
    { cn: "这很好，谢谢。", answer: "C'est très bien, merci.", hint: "c'est + très + bien" },
    { cn: "你会说英语吗？", answer: "Est-ce que tu parles anglais?", hint: "est-ce que + parler + anglais" },
    // A2 进阶翻译
    { cn: "我们去公园吧。", answer: "Allons au parc.", hint: "aller (命令式) + au + parc" },
    { cn: "我需要帮助。", answer: "J'ai besoin d'aide.", hint: "avoir besoin de + aide" },
    { cn: "昨天天气很好。", answer: "Il faisait beau hier.", hint: "imparfait: il faisait" },
    { cn: "我每天早上坐地铁上班。", answer: "Je prends le métro tous les matins pour aller au travail.", hint: "prendre + tous les matins" },
    { cn: "你能帮我一下吗？", answer: "Pourriez-vous m'aider, s'il vous plaît?", hint: "pourriez-vous (条件式礼貌)" },
    { cn: "我在这家公司工作了三年。", answer: "Je travaille dans cette entreprise depuis trois ans.", hint: "depuis + 时间段" },
    // B1 高级翻译
    { cn: "如果我有时间，我会去法国。", answer: "Si j'avais le temps, j'irais en France.", hint: "si + imparfait → conditionnel" },
    { cn: "虽然很累，但他很开心。", answer: "Bien qu'il soit fatigué, il est content.", hint: "bien que + subjonctif" },
    { cn: "我后悔没有学法语。", answer: "Je regrette de ne pas avoir appris le français.", hint: "regretter de + 过去不定式" },
    { cn: "据说这部电影很好。", answer: "On dit que ce film est très bon.", hint: "on dit que (据说)" },
  ];

  const freeWritingPrompts = [
    // A1 基础写作
    { prompt: "描述你的一天", hint: "用je做主语，描述从早到晚做了什么。试着用3-5个句子。", starter: "Le matin, je me lève à...", level: "A1" },
    { prompt: "介绍你自己", hint: "你的名字、年龄、爱好、工作/学习。", starter: "Bonjour, je m'appelle...", level: "A1" },
    { prompt: "描述你最喜欢的食物", hint: "是什么？为什么喜欢？什么时候吃？", starter: "Mon plat préféré est...", level: "A1" },
    // A2 进阶写作
    { prompt: "你上次旅行去了哪里？", hint: "用过去时描述，去了哪里，做了什么。", starter: "La dernière fois, je suis allé(e) à...", level: "A2" },
    { prompt: "写一封邮件给朋友", hint: "问候+正文+告别，注意用tu。", starter: "Bonjour [nom],\n\nComment vas-tu ? Je t'écris pour...", level: "A2" },
    { prompt: "描述你的住所", hint: "你住在哪里？房子/公寓？周围有什么？", starter: "J'habite dans...", level: "A2" },
    { prompt: "谈谈你的家庭", hint: "家庭成员、职业、性格描述。", starter: "Ma famille se compose de...", level: "A2" },
    // B1 高级写作
    { prompt: "你的梦想是什么？", hint: "用条件式je voudrais或j'aimerais", starter: "Mon rêve, c'est de...", level: "B1" },
    { prompt: "对社交媒体的看法", hint: "表达观点：à mon avis, je pense que, cependant", starter: "À mon avis, les réseaux sociaux...", level: "B1" },
    { prompt: "写一封正式投诉信", hint: "注意正式语气：Madame, Monsieur / Je vous prie de...", starter: "Madame, Monsieur,\n\nJe me permets de vous écrire concernant...", level: "B1" },
    { prompt: "描述一个改变你生活的事件", hint: "用passé composé和imparfait交替", starter: "Ce jour-là, tout a changé. Il faisait...", level: "B1" },
  ];

  const getCurrentList = () => {
    if (mode === 'fill') return fillBlanks;
    if (mode === 'translate') return translations;
    return freeWritingPrompts;
  };

  const currentList = getCurrentList();
  const current = currentList[currentIndex];

  const handleSubmit = () => {
    setShowAnswer(true);
    const entry = {
      date: new Date().toISOString(),
      mode,
      question: mode === 'fill' ? current.sentence : mode === 'translate' ? current.cn : current.prompt,
      userInput,
      answer: mode === 'fill' ? current.answer : mode === 'translate' ? current.answer : '自由写作',
      correct: mode !== 'free' && userInput.toLowerCase().trim() === (mode === 'fill' ? current.answer : current.answer).toLowerCase().trim()
    };
    setHistory([entry, ...history.slice(0, 49)]);
  };

  const nextQuestion = () => {
    setUserInput('');
    setShowAnswer(false);
    setCurrentIndex((currentIndex + 1) % currentList.length);
  };

  return (
    <div className="writing-practice">
      <div className="writing-header">
        <h2>✍️ 写作练习</h2>
        <p className="subtitle">从填空到造句，循序渐进提升法语写作能力</p>
      </div>

      <div className="mode-tabs">
        <button className={`tab ${mode === 'fill' ? 'active' : ''}`} onClick={() => { setMode('fill'); setCurrentIndex(0); setUserInput(''); setShowAnswer(false); }}>
          📝 填空题
        </button>
        <button className={`tab ${mode === 'translate' ? 'active' : ''}`} onClick={() => { setMode('translate'); setCurrentIndex(0); setUserInput(''); setShowAnswer(false); }}>
          🔄 翻译练习
        </button>
        <button className={`tab ${mode === 'free' ? 'active' : ''}`} onClick={() => { setMode('free'); setCurrentIndex(0); setUserInput(''); setShowAnswer(false); }}>
          ✏️ 自由写作
        </button>
      </div>

      <div className="exercise-card">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${((currentIndex + 1) / currentList.length) * 100}%` }} />
          <span className="progress-text">{currentIndex + 1} / {currentList.length}</span>
        </div>

        {mode === 'fill' && current && (
          <>
            <div className="question">
              <h3>填入正确的词：</h3>
              <p className="sentence">{current.sentence}</p>
              <p className="hint-text">💡 提示：{current.hint}</p>
            </div>
            <input
              type="text"
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              placeholder="输入你的答案..."
              className="answer-input"
              onKeyDown={e => e.key === 'Enter' && !showAnswer && handleSubmit()}
            />
          </>
        )}

        {mode === 'translate' && current && (
          <>
            <div className="question">
              <h3>把这句话翻译成法语：</h3>
              <p className="sentence cn">{current.cn}</p>
              <p className="hint-text">💡 提示：{current.hint}</p>
            </div>
            <input
              type="text"
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              placeholder="用法语写..."
              className="answer-input"
              onKeyDown={e => e.key === 'Enter' && !showAnswer && handleSubmit()}
            />
          </>
        )}

        {mode === 'free' && current && (
          <>
            <div className="question">
              <h3>📝 写作主题：{current.prompt}</h3>
              <p className="hint-text">💡 提示：{current.hint}</p>
              <p className="starter-text">开头参考：{current.starter}</p>
            </div>
            <textarea
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              placeholder="在这里写你的法语短文...不用怕写错，写错才能进步！"
              className="answer-textarea"
              rows={6}
            />
          </>
        )}

        <div className="exercise-actions">
          {!showAnswer ? (
            <button className="submit-btn" onClick={handleSubmit} disabled={!userInput.trim()}>
              {mode === 'free' ? '📋 保存' : '✅ 检查答案'}
            </button>
          ) : (
            <>
              {mode !== 'free' && (
                <div className={`result ${userInput.toLowerCase().trim() === (mode === 'fill' ? current.answer : current.answer).toLowerCase().trim() ? 'correct' : 'wrong'}`}>
                  {userInput.toLowerCase().trim() === (mode === 'fill' ? current.answer : current.answer).toLowerCase().trim() ? (
                    <p>✅ 正确！太棒了！</p>
                  ) : (
                    <>
                      <p>❌ 你的答案：{userInput}</p>
                      <p>✅ 正确答案：<strong>{mode === 'fill' ? current.answer : current.answer}</strong></p>
                      {mode === 'fill' && <p>完整句子：{current.full}</p>}
                    </>
                  )}
                </div>
              )}
              {mode === 'free' && (
                <div className="result saved">
                  <p>📋 已保存！继续保持写作习惯，写多了自然就越写越好了！</p>
                </div>
              )}
              <button className="next-btn" onClick={nextQuestion}>
                → 下一题
              </button>
            </>
          )}
        </div>
      </div>

      <div className="writing-tips-section">
        <h4>📝 写作进阶路线</h4>
        <div className="writing-roadmap">
          <div className="roadmap-step active">
            <span className="step-icon">📝</span>
            <strong>填空题</strong>
            <p>先掌握基础词汇和动词变位</p>
          </div>
          <div className="roadmap-arrow">→</div>
          <div className="roadmap-step">
            <span className="step-icon">🔄</span>
            <strong>翻译练习</strong>
            <p>学习用法语思考和表达</p>
          </div>
          <div className="roadmap-arrow">→</div>
          <div className="roadmap-step">
            <span className="step-icon">✏️</span>
            <strong>自由写作</strong>
            <p>写日记、描述生活，真正用起来</p>
          </div>
        </div>
      </div>

      <div className="study-tips">
        <h4>📝 写作练习建议</h4>
        <ul>
          <li>写错了没关系！错误是最好的老师</li>
          <li>先从填空题开始，把动词变位记牢</li>
          <li>翻译时先想中文意思，再找对应的法语表达</li>
          <li>自由写作时不要查字典，先写再改，培养语感</li>
        </ul>
      </div>
    </div>
  );
}

export default WritingPractice;
