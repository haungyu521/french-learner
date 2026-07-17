import { useState } from 'react';
import { speakFrench, speakEnglish } from '../utils/tts';

const comparisons = [
  {
    id: 1, category: "基础语法",
    items: [
      { concept: "说年龄", zh: "我25岁", en: "I am 25 years old", fr: "J'ai 25 ans (我有25年)", tip: "英语用be(是)，法语用avoir(有)，中文用'岁'。三种语言逻辑都不同！" },
      { concept: "天气", zh: "天气很冷", en: "It is cold", fr: "Il fait froid", tip: "英语用it is，法语用il fait(它做)，中文说'天气'" },
      { concept: "喜欢", zh: "我喜欢咖啡", en: "I like coffee", fr: "J'aime le café (我喜欢那个咖啡)", tip: "法语必须在名词前加冠词(le/la)，英语不用" },
      { concept: "饥饿", zh: "我饿了", en: "I am hungry", fr: "J'ai faim (我有饿)", tip: "和年龄一样：英语用be，法语用avoir" },
      { concept: "名字", zh: "我叫小明", en: "My name is Xiaoming", fr: "Je m'appelle Xiaoming (我叫自己)", tip: "法语用se appeler(叫自己)，英语和中文更直接" },
      { concept: "拥有", zh: "我有一本书", en: "I have a book", fr: "J'ai un livre", tip: "英语和法语的'有'都一样简单，但法语要加冠词un" },
    ]
  },
  {
    id: 2, category: "时态对比",
    items: [
      { concept: "现在时", zh: "我吃", en: "I eat", fr: "Je mange", tip: "英语只有第三人称加s(he eats)，法语每个主语都不同！" },
      { concept: "过去时", zh: "我吃了", en: "I ate", fr: "J'ai mangé (我有吃的)", tip: "英语直接变过去式，法语要用avoir+mangé(过去分词)" },
      { concept: "进行时", zh: "我正在吃", en: "I am eating", fr: "Je mange (我吃)", tip: "法语没有进行时！只能靠上下文理解。这是英语的独有特色" },
      { concept: "将来时", zh: "我将要吃", en: "I will eat / I'm going to eat", fr: "Je mangerai / Je vais manger", tip: "两种语言都有'will'和'going to'两种方式！" },
      { concept: "否定", zh: "我不吃", en: "I don't eat", fr: "Je ne mange pas", tip: "英语加don't，法语用ne...pas包着动词" },
      { concept: "条件", zh: "如果我有钱", en: "If I were rich, I would travel", fr: "Si j'étais riche, je voyagerais", tip: "逻辑完全一样！If=Si, would=条件式。学会一个就会另一个" },
    ]
  },
  {
    id: 3, category: "词汇对比：假朋友",
    items: [
      { concept: "attendre vs attend", zh: "等待 vs 参加", en: "attend = 参加/出席", fr: "attendre = 等待", tip: "假朋友！英语attend≠法语attendre！英语的等待是wait for" },
      { concept: "library vs librairie", zh: "图书馆 vs 书店", en: "library = 图书馆", fr: "librairie = 书店", tip: "法语的图书馆是bibliothèque！又一个假朋友" },
      { concept: "actually vs actuellement", zh: "其实 vs 目前", en: "actually = 其实/实际上", fr: "actuellement = 目前/现在", tip: "法语的'其实'是en fait！英语的'目前'是currently" },
      { concept: "coin vs coin", zh: "硬币 vs 角落", en: "coin = 硬币", fr: "coin = 角落/地方", tip: "法语的硬币是pièce或monnaie！同一个词完全不同的意思" },
      { concept: "pass vs passer", zh: "通过 vs 经过", en: "pass = 通过/传递", fr: "passer = 经过/度过", tip: "意思相近但用法不同。法语passer un examen = 参加考试(不是通过！)" },
      { concept: "bless vs blesser", zh: "祝福 vs 伤害", en: "bless = 祝福", fr: "blesser = 伤害/弄痛", tip: "完全相反！法语bless是伤害，英语bless是祝福。小心使用！" },
    ]
  },
  {
    id: 4, category: "表达对比：同一意思",
    items: [
      { concept: "没关系", zh: "没关系/没事", en: "No worries / It's fine", fr: "Pas de souci / Ce n'est rien", tip: "英语和法语都有'没问题'的说法，逻辑类似" },
      { concept: "加油", zh: "加油！(鼓励)", en: "Come on! / You can do it!", fr: "Allez! / Courage!", tip: "中文'加油'在英法语中都没有直译！用鼓励的表达" },
      { concept: "随便", zh: "随便/无所谓", en: "Whatever / I don't mind", fr: "Peu importe / Ça m'est égal", tip: "法语的peu importe = 不管什么 = 随便" },
      { concept: "无聊", zh: "我很无聊", en: "I'm bored", fr: "Je m'ennuie (我烦自己)", tip: "法语用se ennuyer(自己烦自己)，很形象！" },
      { concept: "想家", zh: "我想家了", en: "I miss home", fr: "La maison me manque (家对我缺少了)", tip: "法语manquer的逻辑反过来了！是'家对我缺少'而不是'我想家'" },
      { concept: "下雨了", zh: "下雨了", en: "It's raining", fr: "Il pleut", tip: "两种语言都用假主语(it/il)，中文直接说'下雨了'" },
    ]
  },
  {
    id: 5, category: "逻辑对比：思维差异",
    items: [
      { concept: "冠词", zh: "中文没有冠词", en: "a/the (不定/定冠词)", fr: "un/une/le/la (还要分性别！)", tip: "中文最简单→英语有a/the→法语还有性别！层层递进" },
      { concept: "形容词", zh: "形容词不变", en: "形容词不变(good永远是good)", fr: "要配合性别和数量(bon/bonne/bons/bonnes)", tip: "学了法语之后，英语的形容词不变简直太幸福了！" },
      { concept: "动词变位", zh: "动词不变(我吃/他吃)", en: "只有第三人称加s(he eats)", fr: "每个主语都不一样！(je mange, tu manges, il mange...)", tip: "法语变位最复杂，英语最简单，中文也是不变的" },
      { concept: "疑问句", zh: "加'吗'(你吃吗)", en: "加Do/Does(Do you eat?)", fr: "加Est-ce que / 倒装(Manges-tu?)", tip: "三种语言形成疑问句的方式都不同！" },
      { concept: "否定", zh: "加'不'(我不吃)", en: "加don't(I don't eat)", fr: "用ne...pas包围(Je ne mange pas)", tip: "法语的否定最复杂，要用两个词包围动词" },
      { concept: "语序", zh: "主+动+宾(和英语一样)", en: "主+动+宾(SVO)", fr: "主+动+宾(但代词放动词前)", tip: "英法语基本语序和中文一样，但法语代词位置不同" },
    ]
  },
  {
    id: 6, category: "冠词体系对比",
    items: [
      { concept: "不定冠词", zh: "一(个/本)", en: "a/an (一个)", fr: "un/une (一个，还分性别！)", tip: "中文最简单，英语有a/an，法语要选un(阳性)或une(阴性)" },
      { concept: "定冠词", zh: "这(个)", en: "the (这个/那个)", fr: "le/la/les/l' (4种形式！)", tip: "英语一个the搞定，法语要分阳性le、阴性la、复数les、元音前l'" },
      { concept: "部分冠词", zh: "一些(中文常省略)", en: "some (或直接省略)", fr: "du/de la/des (必须有！)", tip: "I eat bread vs Je mange DU pain — 法语不能省略冠词！" },
      { concept: "零冠词", zh: "我喜欢音乐(无冠词)", en: "I like music (零冠词)", fr: "J'aime LA musique (必须加冠词)", tip: "英语泛指可以不加冠词，法语必须加！这是最大的区别" },
      { concept: "缩合", zh: "无", en: "无缩合", fr: "à+le=au, de+le=du", tip: "法语冠词和介词会缩合！英语和中文都不会" },
    ]
  },
  {
    id: 7, category: "介词体系对比",
    items: [
      { concept: "时间介词", zh: "在+时间(在3点/在周一/在2024年)", en: "at 3 / on Monday / in 2024", fr: "à 3h / le lundi / en 2024", tip: "英语at/on/in三个，法语à/le/en三个，对应关系不同！" },
      { concept: "地点介词", zh: "在+地点(在家/在学校)", en: "at home / at school", fr: "chez moi / à l'école", tip: "法语chez(在某人家)是特有介词，英语和中文都没有！" },
      { concept: "方向介词", zh: "去+地方(去法国/去学校)", en: "go to France / go to school", fr: "aller en France / aller à l'école", tip: "法语去阴性国家用en，阳性用au，城市用à！英语统一用to" },
      { concept: "方式介词", zh: "坐+车(坐车/走路)", en: "by car / on foot", fr: "en voiture / à pied", tip: "英语by car，法语en voiture；英语on foot，法语à pied" },
    ]
  },
  {
    id: 8, category: "代词体系对比",
    items: [
      { concept: "主语代词", zh: "我/你/他/她/我们/他们", en: "I/you/he/she/we/they", fr: "je/tu/il(nous/vous/ils)", tip: "法语多了tu/vous(你/您)的区别！英语you不分正式非正式" },
      { concept: "宾语代词", zh: "我/你/他(中文不变)", en: "me/you/him(有变化)", fr: "me/te/le/la/lui(更复杂！)", tip: "法语分直接宾语(le/la)和间接宾语(lui/leur)，英语不分" },
      { concept: "自反代词", zh: "我自己(中文简单)", en: "myself/yourself(加self)", fr: "me/te/se(放在动词前)", tip: "法语自反代词放动词前：Je ME lave(我洗自己)" },
      { concept: "关系代词", zh: "...的人/...的东西", en: "who/which/that/whose", fr: "qui/que/où/dont", tip: "法语dont='of which'，英语和中文都没有对应的！" },
    ]
  },
  {
    id: 9, category: "句式结构对比",
    items: [
      { concept: "否定句", zh: "不+动词(我不吃)", en: "don't+动词(I don't eat)", fr: "ne+动词+pas(Je ne mange pas)", tip: "英语加一个don't，法语用ne...pas包围动词！" },
      { concept: "疑问句", zh: "加'吗'(你吃吗?)", en: "加Do(Do you eat?)", fr: "Est-ce que/Manges-tu?", tip: "三种语言形成疑问句的方式都不同！法语还能倒装" },
      { concept: "感叹句", zh: "多么+形容词(多美啊!)", en: "How+adj(How beautiful!)", fr: "Comme/Que+adj(Comme c'est beau!)", tip: "法语用Comme或Que引导感叹句" },
      { concept: "被动句", zh: "被+动词(被打)", en: "be+过去分词(I was hit)", fr: "être+过去分词(J'ai été frappé)", tip: "英语和法语被动语态结构类似！都用be/être+过去分词" },
      { concept: "强调句", zh: "是...的(是他做的)", en: "It is...that(It was him who did it)", fr: "C'est...qui(c'est lui qui l'a fait)", tip: "英法语强调句结构类似：It is...that / C'est...qui" },
    ]
  },
];

const quizData = [
  { q: "英语说年龄用什么动词？", opts: ["have(有)", "be(是)", "do(做)"], ans: 1, exp: "I am 25 (我是25)，法语才用have: J'ai 25 ans" },
  { q: "法语attendre在英语中是什么意思？", opts: ["参加", "等待", "注意"], ans: 1, exp: "假朋友！法语attendre=等待，英语attend=参加" },
  { q: "英语有进行时(I am eating)吗？法语呢？", opts: ["两种都有", "只有英语有", "只有法语有"], ans: 1, exp: "法语没有进行时！Je mange既是'我吃'也是'我正在吃'" },
  { q: "法语形容词要配合什么？英语呢？", opts: ["都要配合", "法语配合英语不配合", "都不配合"], ans: 1, exp: "法语形容词要配合性别和数量，英语形容词永远不变！" },
  { q: "英语和法语的条件句逻辑一样吗？", opts: ["完全一样", "完全不一样", "部分一样"], ans: 0, exp: "If I were rich, I would travel = Si j'étais riche, je voyagerais" },
  { q: "法语的'图书馆'怎么说？", opts: ["librairie", "bibliothèque", "library"], ans: 1, exp: "librairie是书店！bibliothèque才是图书馆。又一个假朋友" },
  { q: "英语否定句加什么？法语呢？", opts: ["都加don't", "英语don't，法语ne...pas", "都加not"], ans: 1, exp: "I don't eat vs Je ne mange pas" },
  { q: "中文'想家'在法语中怎么表达？", opts: ["Je pense à la maison", "La maison me manque", "Je veux la maison"], ans: 1, exp: "法语用manquer，逻辑反过来：'家对我缺少了'" },
];

export default function Bilingual() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [mode, setMode] = useState('learn'); // learn / quiz / plan
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selected, setSelected] = useState(null);

  const currentCategory = comparisons[activeCategory];

  // 双语学习规划数据
  const studyPlan = {
    daily: [
      { time: '07:00-07:30', task: '🇫🇷 法语SRS复习（30分钟）', detail: '先复习昨天学的词，再学5个新词。用SRS系统自动安排复习。', lang: 'fr' },
      { time: '07:30-07:45', task: '🇬🇧 英语SRS复习（15分钟）', detail: '快速复习英语单词，用快速复习模式刷一遍。', lang: 'en' },
      { time: '12:00-12:30', task: '🇫🇷 法语课程学习（30分钟）', detail: '每天学1课新内容，重点记语法和对话。', lang: 'fr' },
      { time: '18:00-18:30', task: '🇬🇧 英语课程学习（30分钟）', detail: '学习英式英语课程，注意文化注释。', lang: 'en' },
      { time: '21:00-21:15', task: '🧠 薄弱词复习（15分钟）', detail: '复习今天标记的薄弱词，错误≥3次的词重点攻克。', lang: 'both' },
      { time: '21:15-21:30', task: '🔗 双语对比学习（15分钟）', detail: '对比今天学的英法知识点，用对比学习模式。', lang: 'both' },
    ],
    milestones: [
      { level: 'A1→A2', duration: '2-3个月', tasks: '掌握基础语法，积累600词/科。能简单自我介绍、点单、问路。', fr: '法语：完成前5课', en: '英语：完成前5课' },
      { level: 'A2→B1', duration: '3-4个月', tasks: '掌握核心时态，积累1000词/科。能描述日常、写简单邮件。', fr: '法语：完成时态单元', en: '英语：完成时态单元' },
      { level: 'B1→B2', duration: '4-6个月', tasks: '掌握复杂句型，积累1500词/科。能讨论社会话题、写议论文。', fr: '法语：开始DELF B2备考', en: '英语：开始IELTS 5.5备考' },
      { level: 'B2→C1', duration: '6-8个月', tasks: '掌握学术表达，积累2000词/科。能写学术论文、做演讲。', fr: '法语：开始DALF C1备考', en: '英语：开始IELTS 7备考' },
      { level: 'C1→C2', duration: '8-12个月', tasks: '精通文学/哲学表达，积累3000词/科。能读懂原著、写文学分析。', fr: '法语：DALF C2备考', en: '英语：IELTS 8.5+备考' },
    ],
    tips: [
      '🧠 记忆力弱解决方案：每个词至少看7次才能记住，不要急！',
      '📝 用例句记单词，不要死背中文意思',
      '🔊 每天听发音跟读3遍，声音记忆比视觉记忆更持久',
      '⚡ 碎片时间用快速复习模式刷词，等公交/排队时都能学',
      '🔄 复习比新学重要！每天先复习再学新内容',
      '🇫🇷🇬🇧 两种语言交替学，避免混淆（早上法语，晚上英语）',
      '📊 每周日检查薄弱词列表，集中攻克',
      '🎯 不要贪多！每天5-10个新词足够，贪多嚼不烂',
    ]
  };

  const handleQuizAnswer = (idx) => {
    if (showAnswer) return;
    setSelected(idx);
    setShowAnswer(true);
    if (idx === quizData[quizIndex].ans) {
      setScore(s => s + 1);
    }
  };

  const nextQuiz = () => {
    setShowAnswer(false);
    setSelected(null);
    if (quizIndex < quizData.length - 1) {
      setQuizIndex(i => i + 1);
    } else {
      setQuizIndex(0);
      setScore(0);
    }
  };

  const speak = (text, lang = 'en') => lang === 'fr' ? speakFrench(text) : speakEnglish(text);

  if (mode === 'plan') {
    return (
      <div className="bilingual-section">
        <div className="bilingual-header">
          <h2>📅 双语学习规划</h2>
          <p className="bilingual-subtitle">根据你的水平（A1）和目标（C2）定制</p>
          <div className="bilingual-tabs">
            <button onClick={() => setMode('learn')}>对比学习</button>
            <button onClick={() => { setMode('quiz'); setQuizIndex(0); setScore(0); }}>测验模式</button>
            <button className="active">学习规划</button>
          </div>
        </div>

        <div style={{ background: '#eff6ff', padding: '12px 16px', borderRadius: '8px', marginBottom: '16px', fontSize: '14px' }}>
          <strong>📊 当前状态：</strong>法语~1400词 / 英语~1200词 | 目标：双语C2
          <br />
          <strong>⏰ 每日学习时间：</strong>约2.5小时（法语60% + 英语40%）
        </div>

        <h3 style={{ margin: '16px 0 8px' }}>📋 每日任务清单</h3>
        <div style={{ display: 'grid', gap: '8px' }}>
          {studyPlan.daily.map((item, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px 14px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ fontWeight: 'bold', color: '#3b82f6', whiteSpace: 'nowrap' }}>{item.time}</span>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '2px' }}>{item.task}</div>
                <div style={{ fontSize: '13px', color: '#64748b' }}>{item.detail}</div>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ margin: '20px 0 8px' }}>🎯 阶段里程碑</h3>
        <div style={{ display: 'grid', gap: '8px' }}>
          {studyPlan.milestones.map((m, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px 14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <strong>{m.level}</strong>
                <span style={{ color: '#f59e0b', fontSize: '13px' }}>⏱️ {m.duration}</span>
              </div>
              <div style={{ fontSize: '13px', color: '#475569', marginBottom: '4px' }}>{m.tasks}</div>
              <div style={{ fontSize: '12px', color: '#3b82f6' }}>🇫🇷 {m.fr}</div>
              <div style={{ fontSize: '12px', color: '#ef4444' }}>🇬🇧 {m.en}</div>
            </div>
          ))}
        </div>

        <h3 style={{ margin: '20px 0 8px' }}>💡 记忆弱用户专属建议</h3>
        <div style={{ display: 'grid', gap: '6px' }}>
          {studyPlan.tips.map((tip, i) => (
            <div key={i} style={{ background: '#fefce8', padding: '8px 12px', borderRadius: '6px', fontSize: '13px' }}>{tip}</div>
          ))}
        </div>
      </div>
    );
  }

  if (mode === 'quiz') {
    const q = quizData[quizIndex];
    return (
      <div className="bilingual-section">
        <div className="bilingual-header">
          <h2>🧠 双语对比测验</h2>
          <div className="bilingual-tabs">
            <button onClick={() => setMode('learn')}>学习模式</button>
            <button className="active">测验模式</button>
          </div>
        </div>
        <div className="quiz-progress">
          <span>第 {quizIndex + 1}/{quizData.length} 题 | 得分: {score}</span>
        </div>
        <div className="quiz-card">
          <p className="quiz-question">{q.q}</p>
          <div className="quiz-options">
            {q.opts.map((opt, i) => (
              <button key={i}
                className={`quiz-option ${selected === i ? (i === q.ans ? 'correct' : 'wrong') : ''} ${showAnswer && i === q.ans ? 'correct' : ''}`}
                onClick={() => handleQuizAnswer(i)}
              >{opt}</button>
            ))}
          </div>
          {showAnswer && (
            <div className="quiz-explanation">
              <p>💡 {q.exp}</p>
              <button className="btn-primary" onClick={nextQuiz}>下一题 →</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bilingual-section">
      <div className="bilingual-header">
        <h2>🔗 英法双语对比</h2>
        <p className="bilingual-subtitle">学会对比，两种语言一起进步！</p>
        <div className="bilingual-tabs">
          <button className="active">学习模式</button>
          <button onClick={() => { setMode('quiz'); setQuizIndex(0); setScore(0); }}>测验模式</button>
          <button onClick={() => setMode('plan')}>学习规划</button>
        </div>
      </div>

      <div className="category-tabs">
        {comparisons.map((cat, i) => (
          <button key={i} className={`cat-tab ${activeCategory === i ? 'active' : ''}`}
            onClick={() => setActiveCategory(i)}>
            {cat.category}
          </button>
        ))}
      </div>

      <div className="comparison-grid">
        {currentCategory.items.map((item, i) => (
          <div key={i} className="comparison-card">
            <div className="comp-concept">{item.concept}</div>
            <div className="comp-languages">
              <div className="comp-lang">
                <span className="lang-label">🇨🇳 中文</span>
                <span className="lang-text">{item.zh}</span>
              </div>
              <div className="comp-lang">
                <span className="lang-label">🇬🇧 英语</span>
                <span className="lang-text">{item.en}</span>
                <button className="speak-btn" onClick={() => speak(item.en, 'en')}>🔊</button>
              </div>
              <div className="comp-lang">
                <span className="lang-label">🇫🇷 法语</span>
                <span className="lang-text">{item.fr}</span>
                <button className="speak-btn" onClick={() => speak(item.fr, 'fr')}>🔊</button>
              </div>
            </div>
            <div className="comp-tip">💡 {item.tip}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

