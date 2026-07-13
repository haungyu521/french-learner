import { useState, useEffect } from 'react';
import { speakFrench, preloadAudio } from '../utils/tts';
import { useLocalStorage } from '../hooks/useLocalStorage';

// DELF/DALF 考试级别
const EXAM_LEVELS = [
  { id: 'a1', name: 'DELF A1', desc: '入门级', color: '#10b981' },
  { id: 'a2', name: 'DELF A2', desc: '基础级', color: '#3b82f6' },
  { id: 'b1', name: 'DELF B1', desc: '进阶级', color: '#8b5cf6' },
  { id: 'b2', name: 'DELF B2', desc: '高阶级', color: '#f59e0b' },
  { id: 'c1', name: 'DALF C1', desc: '流利级', color: '#ef4444' },
  { id: 'c2', name: 'DALF C2', desc: '精通级', color: '#dc2626' },
];

// 考试题型
const EXAM_SKILLS = [
  { id: 'listening', name: 'Compréhension orale', cn: '听力理解', icon: '👂', tips: '南法口音特点：元音更开放，节奏较慢，常有地方词汇' },
  { id: 'reading', name: 'Compréhension écrite', cn: '阅读理解', icon: '📖', tips: '注意英法假朋友词汇，如actually=actuellement(目前)' },
  { id: 'writing', name: 'Production écrite', cn: '写作表达', icon: '✍️', tips: '注意法语正式书信格式：formule de politesse' },
  { id: 'speaking', name: 'Production orale', cn: '口语表达', icon: '🗣️', tips: '英式英语发音特点：/θ/ /ð/ 音，非卷舌 /r/' },
];

// 各级别核心词汇和表达
const LEVEL_VOCAB = {
  a1: {
    listening: [
      { fr: "Bonjour, comment allez-vous ?", en: "Hello, how are you?", cn: "你好，你好吗？", tip: "南法常用 'Ça va?' 代替" },
      { fr: "Je m'appelle Marie.", en: "My name is Marie.", cn: "我叫玛丽。", tip: "南方人语速较慢，元音清晰" },
      { fr: "Où est la gare, s'il vous plaît ?", en: "Where is the station, please?", cn: "请问车站在哪？", tip: "南法：'la gare' 发音更开" },
      { fr: "Il fait beau aujourd'hui.", en: "It's nice today.", cn: "今天天气很好。", tip: "南法常用 'il fait chaud' 因为南方热" },
      { fr: "Je voudrais un café, s'il vous plaît.", en: "I'd like a coffee, please.", cn: "我想要一杯咖啡。", tip: "南法咖啡馆文化：un café = un express" },
    ],
    reading: [
      { fr: "Le train part à huit heures.", en: "The train leaves at 8.", cn: "火车8点出发。", tip: "SNCF 常见表达" },
      { fr: "Ouvert du lundi au samedi.", en: "Open Monday to Saturday.", cn: "周一到周六营业。", tip: "商店告示常见" },
      { fr: "Attention à la fermeture des portes.", en: "Mind the closing doors.", cn: "注意关门。", tip: "地铁广播" },
    ],
    writing: [
      { prompt: "Écrivez un email simple à un ami.", cn: "写一封简单的邮件给朋友", template: "Bonjour [nom],\n\nComment vas-tu ? Je t'écris pour...\n\nÀ bientôt,\n[Ton prénom]" },
      { prompt: "Décrivez votre journée.", cn: "描述你的一天", template: "Aujourd'hui, je me suis levé(e) à...\nD'abord, j'ai...\nEnsuite, j'ai...\nLe soir,..." },
    ],
    speaking: [
      { topic: "Présentez-vous", cn: "自我介绍", key_phrases: ["Je m'appelle...", "J'ai ... ans", "Je viens de...", "J'habite à...", "Je suis étudiant(e)/travail(leuse)"] },
      { topic: "Parlez de votre famille", cn: "谈论家庭", key_phrases: ["Ma famille se compose de...", "J'ai un frère/une sœur", "Mes parents sont...", "Mon père/ma mère travaille à..."] },
    ],
  },
  a2: {
    listening: [
      { fr: "Je prends le métro tous les jours pour aller au travail.", en: "I take the metro every day to go to work.", cn: "我每天坐地铁上班。", tip: "日常通勤表达" },
      { fr: "En Provence, on mange beaucoup de légumes du soleil.", en: "In Provence, we eat lots of sun vegetables.", cn: "在普罗旺斯，我们吃很多当地产蔬菜。", tip: "南法特色：légumes du soleil" },
      { fr: "Tu viens ce soir ? On fait une raclette !", en: "Coming tonight? We're having raclette!", cn: "今晚来吗？我们吃奶酪火锅！", tip: "南法/萨瓦地区特色" },
    ],
    reading: [
      { fr: "Le marché a lieu tous les mardis et vendredis sur la place du village.", en: "The market is every Tue/Fri on the village square.", cn: "集市每周二五在村广场。", tip: "南法集市文化" },
      { fr: "La cigale est le symbole de la Provence.", en: "The cicada is the symbol of Provence.", cn: "蝉是普罗旺斯的象征。", tip: "南法文化常识" },
    ],
    writing: [
      { prompt: "Racontez vos dernières vacances.", cn: "描述你最近的假期", template: "Pendant mes vacances, je suis allé(e) à...\nJ'ai visité...\nCe que j'ai préféré, c'est...\nJe recommande cette destination parce que..." },
    ],
    speaking: [
      { topic: "Décrivez votre ville", cn: "描述你的城市", key_phrases: ["Ma ville est située dans le sud/nord de...", "C'est une ville calme/animée", "Il y a beaucoup de...", "Ce que j'aime, c'est..."] },
    ],
  },
  b1: {
    listening: [
      { fr: "La bouillabaisse est une soupe de poissons typique de Marseille.", en: "Bouillabaisse is a typical fish soup from Marseille.", cn: "马赛鱼汤是马赛的特色鱼汤。", tip: "南法马赛名菜" },
      { fr: "Il faut que tu fasses attention aux accents du sud.", en: "You need to pay attention to southern accents.", cn: "你需要注意南方口音。", tip: "南法口音特点：元音更开" },
      { fr: "Le gouvernement a annoncé de nouvelles mesures écologiques.", en: "The government announced new environmental measures.", cn: "政府宣布了新的环保措施。", tip: "政治新闻常用表达" },
      { fr: "Les jeunes sont de plus en plus préoccupés par le changement climatique.", en: "Young people are increasingly concerned about climate change.", cn: "年轻人越来越关注气候变化。", tip: "社会话题" },
    ],
    reading: [
      { fr: "Le festival d'Avignon attire des artistes du monde entier chaque été.", en: "The Avignon Festival attracts artists worldwide every summer.", cn: "阿维尼翁戏剧节每年夏天吸引全球艺术家。", tip: "南法文化大事" },
      { fr: "La laïcité est un principe fondamental de la République française.", en: "Secularism is a fundamental principle of the French Republic.", cn: "世俗化是法兰西共和国的基本原则。", tip: "法国社会核心概念" },
    ],
    writing: [
      { prompt: "Exprimez votre opinion sur un sujet d'actualité.", cn: "对时事话题表达观点", template: "À mon avis, ...\nD'un côté, ...\nD'un autre côté, ...\nEn conclusion, je pense que..." },
      { prompt: "Rédigez une lettre formelle de réclamation.", cn: "写一封正式投诉信", template: "Madame, Monsieur,\n\nJe me permets de vous écrire concernant...\nEn effet, ...\nJe vous serais reconnaissant(e) de...\nDans l'attente de votre réponse, je vous prie d'agréer..." },
    ],
    speaking: [
      { topic: "Débat : les avantages et inconvénients des réseaux sociaux", cn: "辩论：社交媒体的优缺点", key_phrases: ["Je suis d'accord avec...", "Je ne suis pas d'accord car...", "Il est vrai que...", "Cependant,...", "En revanche,..."] },
      { topic: "Présentez un projet professionnel", cn: "介绍一个职业规划", key_phrases: ["Mon projet professionnel est de...", "J'ai toujours été passionné(e) par...", "Mes compétences incluent...", "Je souhaite évoluer dans..."] },
    ],
  },
  b2: {
    listening: [
      { fr: "L'impact de la mondialisation sur les cultures régionales est un sujet de débat permanent.", en: "The impact of globalization on regional cultures is a subject of permanent debate.", cn: "全球化对地区文化的影响是一个永恒的辩论话题。", tip: "高级社会话题" },
      { fr: "Les intellectuels français s'opposent souvent à l'uniformisation culturelle.", en: "French intellectuals often oppose cultural homogenization.", cn: "法国知识分子经常反对文化同质化。", tip: "文化辩论" },
    ],
    reading: [
      { fr: "L'existentialisme de Sartre et Camus a profondément marqué la pensée française du XXe siècle.", en: "The existentialism of Sartre and Camus profoundly marked 20th century French thought.", cn: "萨特和加缪的存在主义深刻影响了20世纪法国思想。", tip: "法国哲学" },
    ],
    writing: [
      { prompt: "Rédigez un essai argumenté sur l'éducation.", cn: "写一篇关于教育的议论文", template: "Introduction : Le thème de l'éducation est au cœur des préoccupations...\nThèse : D'abord, il est essentiel de...\nAntithèse : Cependant, on peut se demander si...\nSynthèse : En fin de compte, il semble que..." },
    ],
    speaking: [
      { topic: "Analysez les enjeux de la francophonie", cn: "分析法语世界的挑战", key_phrases: ["La francophonie représente...", "Les enjeux principaux sont...", "Il est crucial de...", "D'un point de vue géopolitique,..."] },
    ],
  },
  c1: {
    listening: [
      { fr: "La nuance entre le subjonctif et l'indicatif reflète une subtilité de la pensée française.", en: "The nuance between subjunctive and indicative reflects a subtlety of French thought.", cn: "虚拟式和直陈式之间的细微差别反映了法国思维的精致。", tip: "高级语法概念" },
    ],
    reading: [
      { fr: "Proust, dans 'À la recherche du temps perdu', explore la mémoire involontaire à travers la madeleine.", en: "Proust, in 'In Search of Lost Time', explores involuntary memory through the madeleine.", cn: "普鲁斯特在《追忆似水年华》中通过玛德琳蛋糕探索非自愿记忆。", tip: "法国文学经典" },
    ],
    writing: [
      { prompt: "Analysez une œuvre littéraire en français.", cn: "用法语分析一部文学作品", template: "L'œuvre de [auteur] s'inscrit dans le mouvement...\nLe personnage principal incarne...\nLa métaphore filée suggère...\nEn définitive, cette œuvre nous invite à..." },
    ],
    speaking: [
      { topic: "Débat philosophique : la liberté existe-t-elle ?", cn: "哲学辩论：自由存在吗？", key_phrases: ["On peut affirmer que...", "Il convient de nuancer...", "Cette assertion mérite d'être examinée...", "Force est de constater que..."] },
    ],
  },
  c2: {
    listening: [
      { fr: "L'ironie voltairienne consiste à dire le contraire de ce que l'on pense avec une élégance redoutable.", en: "Voltaire's irony consists of saying the opposite of what one thinks with formidable elegance.", cn: "伏尔泰式的讽刺在于以令人畏惧的优雅说出与所想相反的话。", tip: "法国文学修辞" },
    ],
    reading: [
      { fr: "La phénoménologie de Merleau-Ponty remet en question la dichotomie entre le sujet et l'objet.", en: "Merleau-Ponty's phenomenology questions the dichotomy between subject and object.", cn: "梅洛-庞蒂的现象学质疑了主体与客体的二分法。", tip: "法国哲学" },
    ],
    writing: [
      { prompt: "Rédigez une dissertation littéraire complète.", cn: "写一篇完整的文学论文", template: "Introduction avec problématique...\nPartie I : Analyse thématique...\nPartie II : Analyse stylistique...\nPartie III : Portée et limites...\nConclusion : Ouverture vers une perspective plus large..." },
    ],
    speaking: [
      { topic: "Soutenez une thèse controversée", cn: "为一个有争议的观点辩护", key_phrases: ["Nonobstant les critiques...", "Il sied de remarquer...", "Force est de constater...", "À l'aune de cette analyse..."] },
    ],
  },
};

// 英式英语 vs 美式英语对比
const BRITISH_VS_AMERICAN = [
  { british: "flat", american: "apartment", cn: "公寓", ipa: "/flæt/" },
  { british: "lift", american: "elevator", cn: "电梯", ipa: "/lɪft/" },
  { british: "underground", american: "subway", cn: "地铁", ipa: "/ˈʌndəɡraʊnd/" },
  { british: "lorry", american: "truck", cn: "卡车", ipa: "/ˈlɒri/" },
  { british: "autumn", american: "fall", cn: "秋天", ipa: "/ˈɔːtəm/" },
  { british: "holiday", american: "vacation", cn: "假期", ipa: "/ˈhɒlədeɪ/" },
  { british: "rubbish", american: "trash/garbage", cn: "垃圾", ipa: "/ˈrʌbɪʃ/" },
  { british: "chemist", american: "pharmacy/drugstore", cn: "药店", ipa: "/ˈkemɪst/" },
  { british: "boot", american: "trunk", cn: "后备箱", ipa: "/buːt/" },
  { british: "bonnet", american: "hood", cn: "引擎盖", ipa: "/ˈbɒnɪt/" },
  { british: "pavement", american: "sidewalk", cn: "人行道", ipa: "/ˈpeɪvmənt/" },
  { british: "queue", american: "line", cn: "排队", ipa: "/kjuː/" },
];

// 南法口音特点
const SOUTHERN_FEATURES = [
  { feature: "元音更开放", example: "'pâte' 读得更开", compare: "巴黎法语较闭" },
  { feature: "词尾-e发音", example: "'mute' 读 /myt/", compare: "北方常省略" },
  { feature: "语调更旋律化", example: "句尾上扬更明显", compare: "北方较平" },
  { feature: "特色词汇", example: "'péguer' = 粘", compare: "标准法语 'coller'" },
  { feature: "双辅音保留", example: "'ajouter' 读 /aʒute/", compare: "北方简化" },
  { feature: "常用感叹词", example: "'Boudiou!' = 天哪", compare: "标准法语 'Mon Dieu!'" },
];

function ExamPrep() {
  const [selectedLevel, setSelectedLevel] = useLocalStorage('exam-level', 'a1');
  const [activeSkill, setActiveSkill] = useState('listening');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showTip, setShowTip] = useState(false);

  const levelData = LEVEL_VOCAB[selectedLevel] || LEVEL_VOCAB.a1;
  const skillData = levelData[activeSkill] || [];
  const currentItem = skillData[currentIdx];

  const speak = (text) => speakFrench(text);

  // 预加载音频
  useEffect(() => {
    if (skillData.length > 0) {
      skillData.forEach(item => {
        if (item.fr) preloadAudio(item.fr, 'fr-FR');
      });
    }
  }, [selectedLevel, activeSkill]);

  return (
    <div className="exam-prep">
      <h2>🎯 法语考试备考</h2>
      <p className="exam-subtitle">DELF/DALF 考试全级别备考 · 南法口音 + 英式英语</p>

      {/* 选择级别 */}
      <div className="exam-levels">
        {EXAM_LEVELS.map(l => (
          <button key={l.id} className={`exam-level-btn ${selectedLevel === l.id ? 'active' : ''}`}
            style={{ borderColor: selectedLevel === l.id ? l.color : '' }}
            onClick={() => { setSelectedLevel(l.id); setCurrentIdx(0); }}>
            <strong>{l.name}</strong>
            <span>{l.desc}</span>
          </button>
        ))}
      </div>

      {/* 选择题型 */}
      <div className="exam-skills">
        {EXAM_SKILLS.map(s => (
          <button key={s.id} className={`exam-skill-btn ${activeSkill === s.id ? 'active' : ''}`}
            onClick={() => { setActiveSkill(s.id); setCurrentIdx(0); setShowTip(false); }}>
            <span>{s.icon}</span> {s.cn}
          </button>
        ))}
      </div>

      {/* 内容区 */}
      <div className="exam-content">
        {/* 听力 */}
        {activeSkill === 'listening' && currentItem && (
          <div className="exam-card">
            <div className="exam-card-fr" onClick={() => speak(currentItem.fr)}>
              <p className="exam-fr-text">{currentItem.fr}</p>
              <span className="speak-icon">🔊</span>
            </div>
            <p className="exam-en-text">{currentItem.en}</p>
            <p className="exam-cn-text">{currentItem.cn}</p>
            <button className="tip-btn" onClick={() => setShowTip(!showTip)}>
              💡 {showTip ? '收起提示' : '南法口音提示'}
            </button>
            {showTip && <p className="tip-text">{currentItem.tip}</p>}
            <div className="exam-nav">
              <button disabled={currentIdx === 0} onClick={() => { setCurrentIdx(currentIdx - 1); setShowTip(false); }}>◀ 上一句</button>
              <span>{currentIdx + 1} / {skillData.length}</span>
              <button disabled={currentIdx >= skillData.length - 1} onClick={() => { setCurrentIdx(currentIdx + 1); setShowTip(false); }}>下一句 ▶</button>
            </div>
          </div>
        )}

        {/* 阅读 */}
        {activeSkill === 'reading' && currentItem && (
          <div className="exam-card">
            <p className="exam-fr-text">{currentItem.fr}</p>
            <p className="exam-en-text">{currentItem.en}</p>
            <p className="exam-cn-text">{currentItem.cn}</p>
            <button className="speak-btn" onClick={() => speak(currentItem.fr)}>🔊 听朗读</button>
            <button className="tip-btn" onClick={() => setShowTip(!showTip)}>💡 文化提示</button>
            {showTip && <p className="tip-text">{currentItem.tip}</p>}
            <div className="exam-nav">
              <button disabled={currentIdx === 0} onClick={() => setCurrentIdx(currentIdx - 1)}>◀ 上一篇</button>
              <span>{currentIdx + 1} / {skillData.length}</span>
              <button disabled={currentIdx >= skillData.length - 1} onClick={() => setCurrentIdx(currentIdx + 1)}>下一篇 ▶</button>
            </div>
          </div>
        )}

        {/* 写作 */}
        {activeSkill === 'writing' && currentItem && (
          <div className="exam-card">
            <p className="exam-prompt">{currentItem.prompt}</p>
            <p className="exam-cn-text">{currentItem.cn}</p>
            <div className="exam-template">
              <p><strong>📝 写作模板：</strong></p>
              <pre>{currentItem.template}</pre>
            </div>
          </div>
        )}

        {/* 口语 */}
        {activeSkill === 'speaking' && currentItem && (
          <div className="exam-card">
            <h3>{currentItem.topic}</h3>
            <p className="exam-cn-text">{currentItem.cn}</p>
            <div className="key-phrases">
              <p><strong>🗣️ 关键表达：</strong></p>
              {currentItem.key_phrases.map((p, i) => (
                <div key={i} className="phrase-row" onClick={() => speak(p)}>
                  <span>{p}</span>
                  <span className="speak-icon">🔊</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 南法口音特点 */}
      <div className="accent-section">
        <h3>🌻 南法口音特点（Marseille, Toulouse, Nice...）</h3>
        <div className="accent-grid">
          {SOUTHERN_FEATURES.map((f, i) => (
            <div key={i} className="accent-card">
              <strong>{f.feature}</strong>
              <p>例：{f.example}</p>
              <p className="accent-compare">对比：{f.compare}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 英式英语 */}
      <div className="british-section">
        <h3>🇬🇧 英式英语 vs 美式英语（流利沟通必备）</h3>
        <div className="british-grid">
          {BRITISH_VS_AMERICAN.map((w, i) => (
            <div key={i} className="british-card">
              <span className="british-word">{w.british}</span>
              <span className="british-ipa">{w.ipa}</span>
              <span className="vs">≠</span>
              <span className="american-word">{w.american}</span>
              <span className="british-cn">{w.cn}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExamPrep;
