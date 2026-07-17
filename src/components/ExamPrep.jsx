import { useState, useEffect } from 'react';
import { speakFrench, speakEnglish, speakKorean, preloadAudio } from '../utils/tts';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { KO_EXAM_LEVELS, KO_EXAM_DATA, TOPIK_STRUCTURE, TOPIK_GRADE_INFO, SEOUL_ACCENT_FEATURES } from '../data/korean/examData';

// 法语 DELF/DALF 考试级别
const FR_EXAM_LEVELS = [
  { id: 'a1', name: 'DELF A1', desc: '入门级', color: '#10b981' },
  { id: 'a2', name: 'DELF A2', desc: '基础级', color: '#3b82f6' },
  { id: 'b1', name: 'DELF B1', desc: '进阶级', color: '#8b5cf6' },
  { id: 'b2', name: 'DELF B2', desc: '高阶级', color: '#f59e0b' },
  { id: 'c1', name: 'DALF C1', desc: '流利级', color: '#ef4444' },
  { id: 'c2', name: 'DALF C2', desc: '精通级', color: '#dc2626' },
];

// 英语 IELTS/Cambridge 考试级别
const EN_EXAM_LEVELS = [
  { id: 'a1', name: 'KET (A1-A2)', desc: '入门级', color: '#10b981' },
  { id: 'a2', name: 'PET (A2-B1)', desc: '基础级', color: '#3b82f6' },
  { id: 'b1', name: 'IELTS 4-5', desc: '进阶级', color: '#8b5cf6' },
  { id: 'b2', name: 'IELTS 5.5-6.5', desc: '高阶级', color: '#f59e0b' },
  { id: 'c1', name: 'IELTS 7-8', desc: '流利级', color: '#ef4444' },
  { id: 'c2', name: 'IELTS 8.5-9', desc: '精通级', color: '#dc2626' },
];

const EXAM_SKILLS = [
  { id: 'listening', name: '听力理解', icon: '👂' },
  { id: 'reading', name: '阅读理解', icon: '📖' },
  { id: 'writing', name: '写作表达', icon: '✍️' },
  { id: 'speaking', name: '口语表达', icon: '🗣️' },
];

// 法语考试数据
const FR_EXAM_DATA = {
  a1: {
    listening: [
      { fr: "Bonjour, comment allez-vous ?", en: "Hello, how are you?", cn: "你好，你好吗？", tip: "南法常用 'Ça va?' 代替" },
      { fr: "Je voudrais un café, s'il vous plaît.", en: "I'd like a coffee, please.", cn: "我想要一杯咖啡。", tip: "南法咖啡馆：un café = un express" },
      { fr: "Où est la gare, s'il vous plaît ?", en: "Where is the station, please?", cn: "请问车站在哪？", tip: "问路必备" },
      { fr: "Combien ça coûte ?", en: "How much does it cost?", cn: "这个多少钱？", tip: "购物必备" },
    ],
    reading: [
      { fr: "Le train part à huit heures.", en: "The train leaves at 8.", cn: "火车8点出发。", tip: "SNCF 常见表达" },
      { fr: "Ouvert du lundi au samedi.", en: "Open Monday to Saturday.", cn: "周一到周六营业。", tip: "商店告示" },
    ],
    writing: [
      { prompt: "Écrivez un email simple à un ami.", cn: "写一封简单的邮件给朋友", template: "Bonjour [nom],\n\nComment vas-tu ? Je t'écris pour...\n\nÀ bientôt,\n[Ton prénom]" },
      { prompt: "Décrivez votre journée.", cn: "描述你的一天", template: "Aujourd'hui, je me suis levé(e) à...\nD'abord, j'ai...\nEnsuite, j'ai...\nLe soir,..." },
    ],
    speaking: [
      { topic: "Présentez-vous", cn: "自我介绍", key_phrases: ["Je m'appelle...", "J'ai ... ans", "Je viens de...", "J'habite à..."] },
      { topic: "Parlez de votre famille", cn: "谈论家庭", key_phrases: ["Ma famille se compose de...", "J'ai un frère/une sœur", "Mes parents sont..."] },
    ],
  },
  a2: {
    listening: [
      { fr: "Je prends le métro tous les jours pour aller au travail.", en: "I take the metro every day.", cn: "我每天坐地铁上班。", tip: "日常通勤" },
      { fr: "Le médecin m'a donné une ordonnance.", en: "The doctor gave me a prescription.", cn: "医生给我开了处方。", tip: "看病必备" },
    ],
    reading: [
      { fr: "Le marché a lieu tous les mardis sur la place.", en: "The market is every Tuesday on the square.", cn: "集市每周二在广场。", tip: "南法集市文化" },
    ],
    writing: [
      { prompt: "Racontez vos dernières vacances.", cn: "描述最近的假期", template: "Pendant mes vacances, je suis allé(e) à...\nJ'ai visité...\nCe que j'ai préféré, c'est..." },
    ],
    speaking: [
      { topic: "Décrivez votre ville", cn: "描述你的城市", key_phrases: ["Ma ville est située dans...", "C'est une ville calme/animée", "Il y a beaucoup de..."] },
    ],
  },
  b1: {
    listening: [
      { fr: "Le gouvernement a annoncé de nouvelles mesures écologiques.", en: "The government announced new environmental measures.", cn: "政府宣布新环保措施。", tip: "政治新闻" },
      { fr: "La grève des transports va durer toute la semaine.", en: "The transport strike will last all week.", cn: "交通罢工将持续整周。", tip: "法国罢工文化" },
    ],
    reading: [
      { fr: "La laïcité est un principe fondamental de la République.", en: "Secularism is a fundamental principle.", cn: "世俗化是共和国基本原则。", tip: "法国核心概念" },
    ],
    writing: [
      { prompt: "Exprimez votre opinion sur un sujet d'actualité.", cn: "对时事话题表达观点", template: "À mon avis, ...\nD'un côté, ...\nD'un autre côté, ...\nEn conclusion,..." },
    ],
    speaking: [
      { topic: "Débat : les réseaux sociaux", cn: "辩论：社交媒体", key_phrases: ["Je suis d'accord avec...", "Cependant,...", "En revanche,..."] },
    ],
  },
  b2: {
    listening: [
      { fr: "L'impact de la mondialisation sur les cultures régionales est un sujet de débat.", en: "Globalization's impact on regional cultures is debated.", cn: "全球化对地区文化的影响是辩论话题。", tip: "高级社会话题" },
    ],
    reading: [
      { fr: "L'existentialisme de Sartre a marqué la pensée française.", en: "Sartre's existentialism marked French thought.", cn: "萨特的存在主义影响了法国思想。", tip: "法国哲学" },
    ],
    writing: [
      { prompt: "Rédigez un essai argumenté sur l'éducation.", cn: "写一篇教育议论文", template: "Introduction : ...\nThèse : ...\nAntithèse : ...\nSynthèse : ..." },
    ],
    speaking: [
      { topic: "Les enjeux de la francophonie", cn: "法语世界的挑战", key_phrases: ["La francophonie représente...", "Il est crucial de..."] },
    ],
  },
  c1: {
    listening: [
      { fr: "La nuance entre le subjonctif et l'indicatif reflète une subtilité de la pensée.", en: "The nuance between subjunctive and indicative reflects subtlety.", cn: "虚拟式和直陈式的差别反映了思维的精致。", tip: "高级语法" },
    ],
    reading: [
      { fr: "Proust explore la mémoire involontaire à travers la madeleine.", en: "Proust explores involuntary memory through the madeleine.", cn: "普鲁斯特通过玛德琳探索非自愿记忆。", tip: "法国文学" },
    ],
    writing: [
      { prompt: "Analysez une œuvre littéraire.", cn: "分析一部文学作品", template: "L'œuvre s'inscrit dans le mouvement...\nLe personnage incarne...\nLa métaphore suggère..." },
    ],
    speaking: [
      { topic: "Débat philosophique", cn: "哲学辩论", key_phrases: ["On peut affirmer que...", "Il convient de nuancer..."] },
    ],
  },
  c2: {
    listening: [
      { fr: "L'ironie voltairienne consiste à dire le contraire avec élégance.", en: "Voltaire's irony is saying the opposite with elegance.", cn: "伏尔泰式讽刺是优雅地说反话。", tip: "法国文学修辞" },
    ],
    reading: [
      { fr: "La phénoménologie remet en question la dichotomie sujet-objet.", en: "Phenomenology questions the subject-object dichotomy.", cn: "现象学质疑主客二分法。", tip: "法国哲学" },
    ],
    writing: [
      { prompt: "Rédigez une dissertation littéraire complète.", cn: "写一篇完整的文学论文", template: "Introduction avec problématique...\nPartie I : Analyse thématique...\nPartie II : Analyse stylistique...\nConclusion : Ouverture..." },
    ],
    speaking: [
      { topic: "Soutenez une thèse controversée", cn: "为争议观点辩护", key_phrases: ["Nonobstant les critiques...", "Force est de constater..."] },
    ],
  },
};

// 英语考试数据
const EN_EXAM_DATA = {
  a1: {
    listening: [
      { en: "Hello, my name is James. Nice to meet you.", cn: "你好，我叫James。很高兴认识你。", tip: "IELTS听力Section 1：人名拼写常考" },
      { en: "Could I have a cup of tea, please?", cn: "能给我一杯茶吗？", tip: "英式礼貌表达" },
      { en: "The train arrives at platform three.", cn: "火车到达3号站台。", tip: "交通场景高频" },
      { en: "I'd like to book a table for two at seven.", cn: "我想预订7点两人的桌位。", tip: "餐厅预订场景" },
      { en: "The meeting has been moved to Friday afternoon.", cn: "会议已改到周五下午。", tip: "注意时间变化" },
      { en: "Could you spell your surname for me?", cn: "你能拼一下你的姓吗？", tip: "IELTS必考拼写" },
    ],
    reading: [
      { en: "No smoking in this area. Fine £50.", cn: "此区域禁止吸烟。罚款50英镑。", tip: "公共标识阅读" },
      { en: "Opening hours: Monday to Saturday, 9am to 5:30pm.", cn: "营业时间：周一至周六，上午9点至下午5:30。", tip: "信息提取题" },
      { en: "Students must show their ID card at all times.", cn: "学生必须随时出示学生证。", tip: "规则理解题" },
      { en: "For enquiries, please contact the reception desk.", cn: "如需咨询，请联系前台。", tip: "指示理解" },
    ],
    writing: [
      { prompt: "Write a short email to a friend about your weekend.", cn: "给朋友写一封关于周末的短邮件", template: "Hi [name],\n\nHow are you? I had a lovely weekend!\nOn Saturday, I...\nOn Sunday, I...\n\nLet's meet up soon!\nBest,\n[Your name]" },
      { prompt: "Write a note to your landlord about a problem.", cn: "给房东写一张关于问题的便条", template: "Dear [name],\n\nI'm writing to let you know that...\nCould you please...\n\nThank you,\n[Your name]" },
    ],
    speaking: [
      { topic: "Introduce yourself", cn: "自我介绍", key_phrases: ["My name is... and I'm from...", "I work as a... / I'm studying...", "I live in...", "In my free time, I enjoy..."] },
      { topic: "Talk about your daily routine", cn: "谈论日常", key_phrases: ["I usually wake up at...", "Then I have...", "I go to work/school by...", "In the evening, I..."] },
      { topic: "Describe your hometown", cn: "描述家乡", key_phrases: ["I come from..., which is in...", "It's a fairly big/small city", "The most famous thing is...", "I'd recommend visiting..."] },
    ],
  },
  a2: {
    listening: [
      { en: "I've been living in London for about three years now.", cn: "我住在伦敦大约三年了。", tip: "现在完成进行时" },
      { en: "The flight has been delayed due to bad weather.", cn: "航班因恶劣天气延误。", tip: "机场广播常见" },
      { en: "Would you like to leave a message?", cn: "您要留言吗？", tip: "电话场景" },
      { en: "I'm afraid the item you want is out of stock.", cn: "恐怕您要的商品缺货。", tip: "购物场景" },
    ],
    reading: [
      { en: "Passengers are reminded to keep their belongings with them at all times.", cn: "提醒乘客随时保管好随身物品。", tip: "交通广播" },
      { en: "The library offers free Wi-Fi and computer access to all members.", cn: "图书馆向所有会员提供免费Wi-Fi和电脑。", tip: "信息提取" },
      { en: "Applications must be submitted before the deadline of 31st March.", cn: "申请必须在3月31日截止前提交。", tip: "截止日期题" },
    ],
    writing: [
      { prompt: "Write a letter complaining about a product.", cn: "写一封投诉信", template: "Dear Sir/Madam,\n\nI am writing to complain about...\nI purchased this item on... and...\nI would like to request a refund/replacement.\n\nI look forward to your reply.\nYours faithfully,\n[Name]" },
      { prompt: "Describe a memorable holiday.", cn: "描述一次难忘的假期", template: "Last summer, I went to...\nThe weather was...\nWe visited... and...\nThe best part was...\nI'd love to go back because..." },
    ],
    speaking: [
      { topic: "Describe your best friend", cn: "描述最好的朋友", key_phrases: ["My best friend is called...", "We've known each other for...", "What I like most about them is...", "We usually spend time together by..."] },
      { topic: "Talk about your favourite film or book", cn: "谈论喜欢的电影或书", key_phrases: ["My favourite film/book is...", "It's about...", "The main character...", "I'd recommend it because..."] },
    ],
  },
  b1: {
    listening: [
      { en: "The company has announced a significant reduction in carbon emissions over the past decade.", cn: "该公司宣布过去十年碳排放显著减少。", tip: "IELTS Section 3/4 学术场景" },
      { en: "Recent studies suggest that regular exercise can improve cognitive function.", cn: "最近研究表明经常锻炼可以改善认知功能。", tip: "学术话题" },
      { en: "The government is planning to invest heavily in renewable energy sources.", cn: "政府计划大力投资可再生能源。", tip: "环境话题高频" },
      { en: "Tourism has had both positive and negative impacts on the local community.", cn: "旅游业对当地社区有正反两方面影响。", tip: "社会话题" },
    ],
    reading: [
      { en: "Despite the economic downturn, the tourism industry has shown remarkable resilience.", cn: "尽管经济低迷，旅游业展现出显著韧性。", tip: "让步关系常考" },
      { en: "The author argues that technology has fundamentally altered the way we communicate.", cn: "作者认为科技从根本上改变了我们的交流方式。", tip: "观点题" },
      { en: "Critics have questioned the validity of the research methodology used in the study.", cn: "批评者质疑研究中使用的研究方法论的有效性。", tip: "学术阅读" },
    ],
    writing: [
      { prompt: "Write an essay: 'Technology has improved our lives. To what extent do you agree?'", cn: "写议论文：'科技改善了我们的生活。你在多大程度上同意？'", template: "Introduction: Technology has become an integral part of modern life...\n\nBody 1 (Agree): On the one hand, technology has brought numerous benefits...\nFor instance, ...\n\nBody 2 (Disagree): On the other hand, there are valid concerns...\nMoreover, ...\n\nConclusion: In conclusion, while technology has undoubtedly..., I believe that..." },
      { prompt: "Write a formal letter of application.", cn: "写一封正式求职信", template: "Dear Sir/Madam,\n\nI am writing to apply for the position of... advertised in...\nI believe I am well-suited for this role because...\nMy experience in... has equipped me with...\n\nI would welcome the opportunity to discuss my application further.\n\nYours faithfully,\n[Name]" },
    ],
    speaking: [
      { topic: "Discuss the advantages and disadvantages of social media", cn: "讨论社交媒体的优缺点", key_phrases: ["On the one hand, social media allows...", "On the other hand, it can lead to...", "From my perspective,...", "I'd argue that..."] },
      { topic: "Talk about environmental issues", cn: "谈论环境问题", key_phrases: ["One of the most pressing issues is...", "This is largely due to...", "Governments should...", "Individuals can contribute by..."] },
      { topic: "Describe a significant change in your life", cn: "描述生活中的重大变化", key_phrases: ["A major change was when...", "At first, I found it challenging because...", "However, over time...", "Looking back, I realise that..."] },
    ],
  },
  b2: {
    listening: [
      { en: "The proliferation of artificial intelligence has raised ethical questions that society must address.", cn: "人工智能的激增引发了社会必须解决的伦理问题。", tip: "IELTS Section 4 讲座" },
      { en: "The lecturer argued that globalisation has led to both cultural enrichment and cultural erosion.", cn: "讲师认为全球化带来了文化丰富和文化侵蚀。", tip: "辩证思维" },
    ],
    reading: [
      { en: "The implications of climate change extend far beyond environmental concerns, affecting economic stability and social equity.", cn: "气候变化的影响远超环境，影响经济稳定和社会公平。", tip: "复杂句式" },
    ],
    writing: [
      { prompt: "Write an essay: 'Some people believe that university education should be free. To what extent do you agree or disagree?'", cn: "议论文：'大学教育应该免费。你在多大程度上同意或不同意？'", template: "Introduction: The question of whether university education should be free is highly debated...\n\nBody 1: Proponents argue that free education promotes social mobility...\nFurthermore, ...\n\nBody 2: Conversely, opponents contend that...\nThis is because...\n\nConclusion: In my view, while there are compelling arguments on both sides, I believe that..." },
    ],
    speaking: [
      { topic: "Analyse the impact of globalisation on local cultures", cn: "分析全球化对当地文化的影响", key_phrases: ["Globalisation has had a profound impact on...", "While some argue that..., others contend...", "From a cultural perspective,...", "It is debatable whether..."] },
    ],
  },
  c1: {
    listening: [
      { en: "The epistemological implications of post-truth discourse warrant careful examination of the relationship between fact and opinion.", cn: "后真相话语的认识论影响需要仔细审视事实与观点的关系。", tip: "学术讲座级别" },
    ],
    reading: [
      { en: "The dichotomy between prescriptive and descriptive approaches to linguistics reflects broader tensions between normativity and empirical observation.", cn: "规定性和描述性语言学方法的二分法反映了规范性和经验观察之间更广泛的张力。", tip: "学术文章" },
    ],
    writing: [
      { prompt: "Write a discursive essay: 'The advent of artificial intelligence represents the greatest threat to humanity in the 21st century.'", cn: "论述文：'人工智能的出现是21世纪对人类最大的威胁。'", template: "Introduction: The rapid advancement of AI technology has sparked intense debate...\n\nThesis: Those who argue that... contend that...\n\nAntithesis: However, this perspective fails to account for...\n\nSynthesis: A more nuanced analysis suggests that...\n\nConclusion: Ultimately, the question of... requires a balanced approach..." },
    ],
    speaking: [
      { topic: "Debate: Is language a reflection of culture or does it shape culture?", cn: "辩论：语言反映文化还是塑造文化？", key_phrases: ["This is a contentious issue...", "One could argue that...", "Conversely, it might be said...", "The evidence suggests...", "It is my contention that..."] },
    ],
  },
  c2: {
    listening: [
      { en: "The hermeneutic circle, as conceived by Gadamer, posits that understanding is always mediated by our pre-existing horizons of meaning.", cn: "伽达默尔提出的诠释学循环认为，理解总是由我们预先存在的意义视域所中介。", tip: "最高学术级别" },
    ],
    reading: [
      { en: "The phenomenological reduction, bracketing the natural attitude, reveals the transcendental structures of consciousness that constitute our experience of the world.", cn: "现象学还原通过悬置自然态度，揭示了构成我们世界经验意识的先验结构。", tip: "哲学文本" },
    ],
    writing: [
      { prompt: "Write a critical analysis of the relationship between language, thought, and reality.", cn: "写一篇关于语言、思想和现实关系的批判性分析", template: "Introduction: The tripartite relationship between language, thought, and reality has been a central concern of philosophy...\n\nSection I: The Sapir-Whorf hypothesis and linguistic relativism...\n\nSection II: Chomsky's universal grammar and the innateness hypothesis...\n\nSection III: Wittgenstein's language games and the limits of meaning...\n\nConclusion: The interplay between... remains an open question..." },
    ],
    speaking: [
      { topic: "Defend a controversial philosophical position", cn: "为一个有争议的哲学立场辩护", key_phrases: ["Notwithstanding the prevailing view...", "It is incumbent upon us to...", "The onus of proof lies with...", "One is compelled to conclude..."] },
    ],
  },
};

// IELTS写作评分标准
const IELTS_WRITING_CRITERIA = [
  { name: "Task Achievement/Response", cn: "任务完成度", desc: "是否完整回答了题目要求", score: "25%" },
  { name: "Coherence & Cohesion", cn: "连贯与衔接", desc: "逻辑清晰，使用连接词", score: "25%" },
  { name: "Lexical Resource", cn: "词汇丰富度", desc: "词汇多样性和准确性", score: "25%" },
  { name: "Grammatical Range", cn: "语法范围和准确", desc: "句式多样，语法正确", score: "25%" },
];

// 英式vs美式
const BRITISH_VS_AMERICAN = [
  { british: "flat", american: "apartment", cn: "公寓" },
  { british: "lift", american: "elevator", cn: "电梯" },
  { british: "underground", american: "subway", cn: "地铁" },
  { british: "lorry", american: "truck", cn: "卡车" },
  { british: "autumn", american: "fall", cn: "秋天" },
  { british: "holiday", american: "vacation", cn: "假期" },
  { british: "rubbish", american: "trash/garbage", cn: "垃圾" },
  { british: "chemist", american: "pharmacy", cn: "药店" },
  { british: "boot", american: "trunk", cn: "后备箱" },
  { british: "pavement", american: "sidewalk", cn: "人行道" },
  { british: "queue", american: "line", cn: "排队" },
  { british: "biscuit", american: "cookie", cn: "饼干" },
];

function ExamPrep({ lang }) {
  const [examLang, setExamLang] = useLocalStorage('exam-lang', lang || 'fr');
  const [selectedLevel, setSelectedLevel] = useLocalStorage('exam-level', lang === 'ko' ? 't1' : 'a1');
  const [activeSkill, setActiveSkill] = useState('listening');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showTip, setShowTip] = useState(false);

  const isEn = examLang === 'en';
  const isKo = examLang === 'ko';
  const levels = isKo ? KO_EXAM_LEVELS : isEn ? EN_EXAM_LEVELS : FR_EXAM_LEVELS;
  const examData = isKo ? KO_EXAM_DATA : isEn ? EN_EXAM_DATA : FR_EXAM_DATA;
  const speak = isKo ? speakKorean : isEn ? speakEnglish : speakFrench;
  const ttsLang = isKo ? 'ko-KR' : isEn ? 'en-US' : 'fr-FR';

  const levelData = examData[selectedLevel] || examData[isKo ? 't1' : 'a1'];
  const skillData = levelData[activeSkill] || [];
  const currentItem = skillData[currentIdx];

  useEffect(() => {
    setCurrentIdx(0);
    setShowTip(false);
  }, [examLang, selectedLevel, activeSkill]);

  useEffect(() => {
    if (skillData.length > 0) {
      skillData.forEach(item => {
        const text = isKo ? item.ko : isEn ? item.en : item.fr;
        if (text) preloadAudio(text, ttsLang);
      });
    }
  }, [selectedLevel, activeSkill, examLang]);

  return (
    <div className="exam-prep">
      <h2>🎯 考试备考中心</h2>

      {/* 选择考试语言 */}
      <div className="exam-lang-tabs" style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <button onClick={() => { setExamLang('fr'); setSelectedLevel('a1'); }}
          style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '2px solid', borderColor: examLang === 'fr' ? '#3b82f6' : '#e2e8f0', backgroundColor: examLang === 'fr' ? '#eff6ff' : '#fff', cursor: 'pointer', fontWeight: examLang === 'fr' ? 'bold' : 'normal' }}>
          🇫🇷 法语 DELF/DALF
        </button>
        <button onClick={() => { setExamLang('en'); setSelectedLevel('a1'); }}
          style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '2px solid', borderColor: examLang === 'en' ? '#ef4444' : '#e2e8f0', backgroundColor: examLang === 'en' ? '#fef2f2' : '#fff', cursor: 'pointer', fontWeight: examLang === 'en' ? 'bold' : 'normal' }}>
          🇬🇧 英语 IELTS/Cambridge
        </button>
        <button onClick={() => { setExamLang('ko'); setSelectedLevel('t1'); }}
          style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '2px solid', borderColor: examLang === 'ko' ? '#10b981' : '#e2e8f0', backgroundColor: examLang === 'ko' ? '#ecfdf5' : '#fff', cursor: 'pointer', fontWeight: examLang === 'ko' ? 'bold' : 'normal' }}>
          🇰🇷 韩语 TOPIK
        </button>
      </div>

      <p className="exam-subtitle" style={{ fontSize: '13px', color: '#64748b', marginBottom: '12px' }}>
        {isKo ? 'TOPIK I-VI 全级别备考 · 首尔标准韩语' : isEn ? 'IELTS/Cambridge 全级别备考 · 英式英语为主' : 'DELF/DALF 全级别备考 · 听力+阅读+写作+口语'}
      </p>

      {/* 选择级别 */}
      <div className="exam-levels">
        {levels.map(l => (
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
            <span>{s.icon}</span> {s.name}
          </button>
        ))}
      </div>

      {/* 英语IELTS写作评分标准 */}
      {isEn && activeSkill === 'writing' && (
        <div style={{ background: '#fefce8', padding: '10px 14px', borderRadius: '8px', marginBottom: '12px', fontSize: '13px' }}>
          <strong>📊 IELTS写作评分标准：</strong>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', marginTop: '6px' }}>
            {IELTS_WRITING_CRITERIA.map((c, i) => (
              <div key={i}><strong>{c.name}</strong> ({c.cn}) — {c.score}</div>
            ))}
          </div>
        </div>
      )}

      {/* 内容区 */}
      <div className="exam-content">
        {/* 听力 */}
        {activeSkill === 'listening' && currentItem && (
          <div className="exam-card">
            <div className="exam-card-fr" onClick={() => speak(currentItem.ko || currentItem.en || currentItem.fr)}>
              <p className="exam-fr-text">{currentItem.ko || currentItem.en || currentItem.fr}</p>
              <span className="speak-icon">🔊</span>
            </div>
            <p className="exam-cn-text">{currentItem.cn}</p>
            {currentItem.en && currentItem.fr && <p className="exam-en-text" style={{ fontSize: '13px', color: '#94a3b8' }}>{currentItem.fr}</p>}
            <button className="tip-btn" onClick={() => setShowTip(!showTip)}>
              💡 {showTip ? '收起提示' : (isKo ? 'TOPIK听力提示' : isEn ? 'IELTS听力提示' : '南法口音提示')}
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
            <p className="exam-fr-text">{currentItem.ko || currentItem.en || currentItem.fr}</p>
            <p className="exam-cn-text">{currentItem.cn}</p>
            <button className="speak-btn" onClick={() => speak(currentItem.ko || currentItem.en || currentItem.fr)}>🔊 听朗读</button>
            <button className="tip-btn" onClick={() => setShowTip(!showTip)}>💡 {isKo ? 'TOPIK阅读提示' : isEn ? '阅读技巧' : '文化提示'}</button>
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

      {/* 英式英语 vs 美式英语（仅英语模式显示） */}
      {isEn && (
        <div className="british-section">
          <h3>🇬🇧 英式英语 vs 美式英语</h3>
          <div className="british-grid">
            {BRITISH_VS_AMERICAN.map((w, i) => (
              <div key={i} className="british-card">
                <span className="british-word">{w.british}</span>
                <span className="vs">≠</span>
                <span className="american-word">{w.american}</span>
                <span className="british-cn">{w.cn}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 首尔口音特点 + TOPIK结构（仅韩语模式显示） */}
      {isKo && (
        <div className="accent-section">
          <h3>🏙️ 首尔标准语特点 & TOPIK备考</h3>
          {/* TOPIK 考试结构 */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ color: '#10b981', marginBottom: '8px' }}>📋 TOPIK 考试结构</h4>
            {TOPIK_STRUCTURE.map((s, i) => (
              <div key={i} style={{ background: '#f0fdf4', borderRadius: '8px', padding: '10px 14px', marginBottom: '8px', fontSize: '13px' }}>
                <strong style={{ color: '#10b981' }}>{s.section}</strong> — {s.parts} · 总时长{s.total} · 满分{s.total_score}分
              </div>
            ))}
          </div>
          {/* TOPIK 级别说明 */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ color: '#10b981', marginBottom: '8px' }}>🎯 TOPIK 级别说明</h4>
            {Object.entries(TOPIK_GRADE_INFO).map(([k, v]) => (
              <div key={k} style={{ fontSize: '13px', padding: '4px 0', borderBottom: '1px dashed #e2e8f0' }}>
                <strong style={{ color: '#10b981' }}>TOPIK {k.replace('t', '')}급</strong>：{v}
              </div>
            ))}
          </div>
          {/* 首尔口音特点 */}
          <h4 style={{ color: '#10b981', marginBottom: '8px' }}>🗣️ 首尔标准语发音特点</h4>
          <div className="accent-grid">
            {SEOUL_ACCENT_FEATURES.map((f, i) => (
              <div key={i} className="accent-card">
                <strong>{f.feature}</strong>
                <p>例：{f.example}</p>
                <p className="accent-compare">对比：{f.compare}</p>
              </div>
            ))}
          </div>
          {/* 学习建议 */}
          <div style={{ background: '#fffbeb', borderRadius: '8px', padding: '12px 16px', marginTop: '16px', fontSize: '13px', lineHeight: '1.8' }}>
            <strong>💡 韩语学习技巧：</strong>
            <ul style={{ margin: '6px 0 0 18px', padding: 0 }}>
              <li>听力重点：注意<strong>语阶切换</strong>（해요체↔합쇼체），这是TOPIK听力高频考点</li>
              <li>阅读提速：先读题目再找关键词，TOPIK II阅读量大需练速读</li>
              <li>写作模板：TOPIK II写作有固定格式（서론-본론-결론），多背模板</li>
              <li>口语练习：模仿首尔新闻播报语调，句尾轻微下倾是标准语特征</li>
              <li>敬语体系：掌握<span style={{ color: '#ef4444' }}>尊敬语(-시-)</span>和<span style={{ color: '#ef4444' }}>谦让语(-드-)</span>的用法</li>
            </ul>
          </div>
        </div>
      )}

      {/* 南法口音特点（仅法语模式显示） */}
      {!isEn && !isKo && (
        <div className="accent-section">
          <h3>🌻 南法口音特点</h3>
          <div className="accent-grid">
            {[
              { feature: "元音更开放", example: "'pâte' 读得更开", compare: "巴黎法语较闭" },
              { feature: "语调更旋律化", example: "句尾上扬更明显", compare: "北方较平" },
              { feature: "特色词汇", example: "'péguer' = 粘", compare: "标准法语 'coller'" },
              { feature: "常用感叹词", example: "'Boudiou!' = 天哪", compare: "标准法语 'Mon Dieu!'" },
            ].map((f, i) => (
              <div key={i} className="accent-card">
                <strong>{f.feature}</strong>
                <p>例：{f.example}</p>
                <p className="accent-compare">对比：{f.compare}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ExamPrep;
