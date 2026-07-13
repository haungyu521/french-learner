export const knowledgeData = [
  {
    id: 1,
    title: "法语动词变位 - 现在时 (Présent)",
    category: "语法",
    difficulty: 1,
    content: "法语动词根据主语变化词尾，这是最基本的语法概念。",
    details: [
      { term: "Je (我)", definition: "-e / -s / -x", example: "Je parle (我说)" },
      { term: "Tu (你)", definition: "-es / -s / -x", example: "Tu parles (你说)" },
      { term: "Il/Elle (他/她)", definition: "-e / -t / -d", example: "Il parle (他说)" },
      { term: "Nous (我们)", definition: "-ons", example: "Nous parlons (我们说)" },
      { term: "Vous (你们/您)", definition: "-ez", example: "Vous parlez (你们说)" },
      { term: "Ils/Elles (他们/她们)", definition: "-ent", example: "Ils parlent (他们说)" },
    ],
    tips: "记忆技巧：-er类动词是最常见的，先记住parler（说）的变位模式，其他动词套用即可！"
  },
  {
    id: 2,
    title: "名词的阴阳性 (Genre des noms)",
    category: "语法",
    difficulty: 1,
    content: "法语名词分阳性和阴性，冠词和形容词需要与之匹配。",
    details: [
      { term: "阳性 (Masculin)", definition: "通常用 le/un", example: "le livre (书), un chat (一只猫)" },
      { term: "阴性 (Féminin)", definition: "通常用 la/une", example: "la table (桌子), une maison (一栋房子)" },
      { term: "以-e结尾", definition: "大多数是阴性", example: "la table, la chaise, la porte" },
      { term: "以-age结尾", definition: "大多数是阳性", example: "le voyage, le courage, le fromage" },
      { term: "以-tion结尾", definition: "几乎全是阴性", example: "la nation, la situation, la question" },
    ],
    tips: "记忆技巧：不要死记硬背！记住常见的词尾规律，遇到新词猜一猜，慢慢就记住了。"
  },
  {
    id: 3,
    title: "常用问候与告别",
    category: "日常用语",
    difficulty: 1,
    content: "掌握法语的日常问候是交流的第一步。",
    details: [
      { term: "Bonjour", definition: "你好（白天用）", example: "Bonjour Madame! (女士你好！)" },
      { term: "Bonsoir", definition: "晚上好", example: "Bonsoir Monsieur! (先生晚上好！)" },
      { term: "Salut", definition: "嗨/拜拜（非正式）", example: "Salut! Ça va? (嗨！好吗？)" },
      { term: "Comment ça va?", definition: "你好吗？", example: "Salut! Comment ça va?" },
      { term: "Ça va bien, merci", definition: "很好，谢谢", example: "Ça va très bien, merci!" },
      { term: "À bientôt", definition: "回头见", example: "À bientôt, mon ami!" },
    ],
    tips: "记忆技巧：Bonjour是最万能的问候，正式场合用它准没错！Salut只能跟朋友用。"
  },
  {
    id: 4,
    title: "法语数字 1-20",
    category: "基础",
    difficulty: 1,
    content: "法语数字系统有其独特的逻辑，让我们从1-20开始。",
    details: [
      { term: "1-5", definition: "un, deux, trois, quatre, cinq", example: "J'ai trois chats. (我有三只猫)" },
      { term: "6-10", definition: "six, sept, huit, neuf, dix", example: "Il est huit heures. (现在八点)" },
      { term: "11-16", definition: "onze, douze, treize, quatorze, quinze, seize", example: "J'ai seize ans. (我十六岁)" },
      { term: "17-19", definition: "dix-sept, dix-huit, dix-neuf", example: "Il est dix-huit heures. (现在十八点)" },
      { term: "20", definition: "vingt", example: "Vingt euros. (二十欧元)" },
    ],
    tips: "记忆技巧：11-16是特殊数字需要单独记，17-19是'10+几'的组合，很好记！"
  },
  {
    id: 5,
    title: "否定句的构成 (La négation)",
    category: "语法",
    difficulty: 2,
    content: "法语否定句的基本结构：ne + 动词 + pas",
    details: [
      { term: "ne...pas", definition: "不（基本否定）", example: "Je ne parle pas. (我不说)" },
      { term: "ne...jamais", definition: "从不", example: "Je ne fume jamais. (我从不吸烟)" },
      { term: "ne...rien", definition: "什么都不", example: "Je ne comprends rien. (我什么都不懂)" },
      { term: "ne...personne", definition: "没有人", example: "Je ne vois personne. (我没看到任何人)" },
      { term: "ne...plus", definition: "不再", example: "Je ne veux plus. (我不再想要了)" },
    ],
    tips: "记忆技巧：口语中ne经常被省略，只说pas也行！例如'Je sais pas'（我不知道）。"
  },
  {
    id: 6,
    title: "过去时 - Passé Composé",
    category: "语法",
    difficulty: 2,
    content: "复合过去时是法语中最常用的过去时态，用来描述已完成的动作。",
    details: [
      { term: "构成", definition: "avoir/être + 过去分词", example: "J'ai mangé (我吃了)" },
      { term: "-er → -é", definition: "parler → parlé", example: "J'ai parlé (我说了)" },
      { term: "-ir → -i", definition: "finir → fini", example: "J'ai fini (我完成了)" },
      { term: "-re → -u", definition: "vendre → vendu", example: "J'ai vendu (我卖了)" },
      { term: "être动词", definition: "用于移动/状态变化动词", example: "Je suis allé (我去了)" },
    ],
    tips: "记忆技巧：大部分动词用avoir做助动词，只有表示移动和状态变化的动词用être。记住'aller, venir, arriver, partir...'这些用être就行！"
  },
  {
    id: 7,
    title: "常用连接词 (Les connecteurs)",
    category: "语法",
    difficulty: 2,
    content: "连接词能让你的句子更加流畅和自然。",
    details: [
      { term: "et", definition: "和/并且", example: "Je mange et je bois. (我吃喝)" },
      { term: "mais", definition: "但是", example: "C'est bon mais cher. (好吃但贵)" },
      { term: "ou", definition: "或者", example: "Café ou thé? (咖啡还是茶？)" },
      { term: "parce que", definition: "因为", example: "Je reste parce que je suis fatigué. (我留下因为我累了)" },
      { term: "donc", definition: "所以", example: "Il pleut, donc je reste. (下雨了，所以我留下)" },
      { term: "quand", definition: "当...的时候", example: "Quand je mange, je suis content. (当我吃东西时，我很高兴)" },
    ],
    tips: "记忆技巧：parce que（因为）和 donc（所以）是最常用的，先记住这两个！"
  },
  {
    id: 8,
    title: "法语中的冠词 (Les articles)",
    category: "语法",
    difficulty: 1,
    content: "法语冠词比英语复杂，需要区分定冠词、不定冠词和部分冠词。",
    details: [
      { term: "le / la / les", definition: "定冠词（特指）", example: "le livre (那本书)" },
      { term: "un / une / des", definition: "不定冠词（泛指）", example: "un livre (一本书)" },
      { term: "du / de la / des", definition: "部分冠词（不可数）", example: "du pain (一些面包)" },
      { term: "l'", definition: "元音前省略", example: "l'eau (水), l'ami (朋友)" },
    ],
    tips: "记忆技巧：部分冠词是法语的特色，中文里没有对应概念。看到食物、液体、抽象概念时用du/de la就对了！"
  },
  {
    id: 9,
    title: "法语发音规则 - 不发音字母",
    category: "发音",
    difficulty: 2,
    content: "法语很多词尾字母不发音，这是初学者最容易困惑的地方。",
    details: [
      { term: "词尾辅音", definition: "通常不发音（除c,r,f,l）", example: "Paris读作'Pa-ri'，不读's'" },
      { term: "词尾-e", definition: "通常不发音", example: "table读作'tabl'，不读'ta-ble'" },
      { term: "词尾-es/-ent", definition: "动词变位词尾不发音", example: "ils parlent读作'parl'" },
      { term: "h", definition: "永远不发音", example: "hôtel读作'otel'" },
      { term: " Liaison连读", definition: "词尾辅音+词首元音时发音", example: "les amis读作'le-za-mi'" },
    ],
    tips: "记忆技巧：记住CaReFuL（c,r,f,l）这四个词尾辅音要发音，其他基本不发音！"
  },
  {
    id: 10,
    title: "法语中的疑问句",
    category: "语法",
    difficulty: 2,
    content: "法语有三种方式构成疑问句。",
    details: [
      { term: "语调升高", definition: "口语最简单方式", example: "Tu viens? (你来吗？)" },
      { term: "Est-ce que", definition: "标准疑问句", example: "Est-ce que tu viens? (你来吗？)" },
      { term: "倒装", definition: "正式书面语", example: "Viens-tu? (你来吗？)" },
      { term: "疑问词", definition: "qui/que/où/quand/comment/pourquoi", example: "Où habites-tu? (你住哪？)" },
    ],
    tips: "记忆技巧：日常口语用升高语调最简单！书面语用est-ce que万能公式！"
  },
];
