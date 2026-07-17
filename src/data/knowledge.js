/**
 * 法语知识点 — 精细分类版
 * 大类：语法 / 发音 / 词汇 / 文化
 * 子类：时态 / 介词 / 代词 / 冠词 / 动词 / 否定 / 句型 / 配合 / 发音规则 / 日常表达 / 高频表达 / 法国文化
 */
export const knowledgeData = [
  // ========== 语法 > 时态 ==========
  {
    id: 1, title: "现在时 (Le Présent)", category: "语法", subcategory: "时态", difficulty: 1,
    ipa: "/lə pʁe.zɑ̃/",
    pronunciationNote: "连音规则：主语+动词之间常发生连音，如 vous êtes [vu.z‿ɛt]、nous avons [nu.z‿a.vɔ̃]。词尾-ent在动词变位中不发音。",
    content: "法语动词根据主语变化词尾，这是最基本的时态。",
    details: [
      { term: "Je (我)", definition: "-e / -s / -x", example: "Je parle (我说)", ipa: "/ʒə paʁl/" },
      { term: "Tu (你)", definition: "-es / -s / -x", example: "Tu parles (你说)", ipa: "/ty paʁl/" },
      { term: "Il/Elle (他/她)", definition: "-e / -t / -d", example: "Il parle (他说)", ipa: "/il paʁl/" },
      { term: "Nous (我们)", definition: "-ons", example: "Nous parlons (我们说)", ipa: "/nu paʁ.lɔ̃/" },
      { term: "Vous (你们/您)", definition: "-ez", example: "Vous parlez (你们说)", ipa: "/vu paʁ.le/" },
      { term: "Ils/Elles (他们)", definition: "-ent", example: "Ils parlent (他们说)", ipa: "/il paʁl/" },
    ],
    tips: "记忆技巧：-er类动词是最常见的，先记住parler的变位模式，其他动词套用即可！",
    usage: "现在时用于描述当前状态、习惯性动作和普遍事实。日常对话中使用频率最高。",
    register: "通用",
    exampleParagraph: [
      { text: "Je me lève à 7 heures tous les jours.", cn: "我每天7点起床。", context: "口语常用，描述日常习惯" },
      { text: "Le soleil se lève à l'est.", cn: "太阳从东方升起。", context: "陈述事实" },
      { text: "Tu parles très bien français !", cn: "你法语说得很好！", context: "口语赞美" },
    ],
    scenarios: ["日常对话描述习惯", "陈述客观事实", "表达当前状态"]
  },
  {
    id: 6, title: "复合过去时 (Passé Composé)", category: "语法", subcategory: "时态", difficulty: 2,
    ipa: "/pɑ.se kɔ̃.po.ze/",
    pronunciationNote: "连音规则：助动词与过去分词之间可连音，如 j'ai aimé [ʒe.z‿e.me]。avoir的缩写形式j'ai、t'as、il a在口语中常连读。",
    content: "法语最常用的过去时态，描述已完成的动作。构成：avoir/être + 过去分词",
    details: [
      { term: "构成", definition: "avoir/être + 过去分词", example: "J'ai mangé (我吃了)", ipa: "/ʒe mɑ̃.ʒe/" },
      { term: "-er → -é", definition: "parler → parlé", example: "J'ai parlé (我说了)", ipa: "/ʒe paʁ.le/" },
      { term: "-ir → -i", definition: "finir → fini", example: "J'ai fini (我完成了)", ipa: "/ʒe fi.ni/" },
      { term: "-re → -u", definition: "vendre → vendu", example: "J'ai vendu (我卖了)", ipa: "/ʒe vɑ̃.dy/" },
      { term: "être动词", definition: "用于移动/状态变化", example: "Je suis allé(e) (我去了)", ipa: "/ʒə sɥi.z‿a.le/" },
    ],
    tips: "大部分动词用avoir，只有表示移动和状态变化的动词用être。记住 DR MRS VANDERTRAMP 动词列表！",
    usage: "复合过去时用于描述已完成的动作，是口语中最常用的过去时态。书面语中逐渐替代简单过去时。",
    register: "口语",
    exampleParagraph: [
      { text: "J'ai mangé une pomme ce matin.", cn: "我今天早上吃了一个苹果。", context: "口语常用，描述刚发生的事" },
      { text: "Je suis allé au cinéma hier soir.", cn: "我昨晚去了电影院。", context: "aller用être作助动词" },
      { text: "Elle est née en 2000.", cn: "她出生于2000年。", context: "表示状态变化用être" },
    ],
    scenarios: ["讲述昨天做了什么", "描述已完成的事件", "日常对话中的过去经历"]
  },
  {
    id: 19, title: "未完成过去时 (L'Imparfait)", category: "语法", subcategory: "时态", difficulty: 2,
    ipa: "/lɛ̃.paʁ.fɛ/",
    pronunciationNote: "连音规则：-ions/-iez词尾与后接元音词发生连音，如 nous avions [nu.z‿a.vjɔ̃]。imparfait词尾-ais/-ait/-aient发音相同，都是/ɛ/。",
    content: "描述过去的状态、习惯、正在进行的动作。构成：nous的现在时词干 + imparfait词尾",
    details: [
      { term: "构成", definition: "nous现在时词干 + -ais,-ais,-ait,-ions,-iez,-aient", example: "Nous parlions → je parlais", ipa: "/ʒə paʁ.lɛ/" },
      { term: "用法1：过去状态", definition: "描述过去的背景", example: "Il faisait beau. (当时天气很好)", ipa: "/il fə.zɛ bo/" },
      { term: "用法2：过去习惯", definition: "经常做的事", example: "Tous les étés, nous allions à la plage.", ipa: "/nu.z‿a.ljɔ̃ a la plaʒ/" },
      { term: "用法3：正在进行", definition: "被打断的动作", example: "Je lisais quand il est arrivé.", ipa: "/ʒə li.zɛ kɑ̃.t‿il ɛ.t‿a.ʁi.ve/" },
    ],
    tips: "对比：passé composé = 一次性完成的动作；imparfait = 持续的/重复的状态",
    usage: "未完成过去时用于描述过去的背景、习惯和正在进行的动作。常与passé composé搭配使用。",
    register: "通用",
    exampleParagraph: [
      { text: "Quand j'étais petit, je jouais au foot tous les jours.", cn: "我小时候每天踢足球。", context: "描述过去的习惯" },
      { text: "Il pleuvait quand je suis sorti.", cn: "我出门时正在下雨。", context: "imparfait描述背景+passé composé描述动作" },
    ],
    scenarios: ["回忆童年/过去", "讲故事时描述背景", "描述被打断的动作"]
  },
  {
    id: 20, title: "简单将来时 (Le Futur Simple)", category: "语法", subcategory: "时态", difficulty: 2,
    ipa: "/lə fy.tyʁ sɛ̃pl/",
    pronunciationNote: "发音注意：将来时词尾-ai/-as/-a发音不同——/e/、/a/、/a/。不规则动词如 être/avoir/aller/faire 词干变化但词尾不变。",
    content: "表示未来的计划、预测、承诺。构成：动词不定式 + 词尾",
    details: [
      { term: "构成", definition: "不定式 + -ai, -as, -a, -ons, -ez, -ont", example: "je parlerai (我将说)", ipa: "/ʒə paʁ.lə.ʁe/" },
      { term: "-re动词", definition: "去掉e再加词尾", example: "prendre → je prendrai", ipa: "/ʒə pʁɑ̃.dʁe/" },
      { term: "être", definition: "je serai", example: "Je serai là demain.", ipa: "/ʒə sə.ʁe la də.mɛ̃/" },
      { term: "avoir", definition: "j'aurai", example: "J'aurai le temps.", ipa: "/ʒo.ʁe lə tɑ̃/" },
      { term: "aller", definition: "j'irai", example: "J'irai à Paris.", ipa: "/ʒi.ʁe a pa.ʁi/" },
      { term: "faire", definition: "je ferai", example: "Je ferai de mon mieux.", ipa: "/ʒə fə.ʁe də mɔ̃ mjø/" },
    ],
    tips: "不规则动词需要记忆，但词尾都是一样的！信号词：demain, la semaine prochaine, bientôt"
  },
  {
    id: 21, title: "条件式现在时 (Le Conditionnel Présent)", category: "语法", subcategory: "时态", difficulty: 3,
    ipa: "/lə kɔ̃.di.sjɔ.nɛl pʁe.zɑ̃/",
    pronunciationNote: "发音特点：条件式词尾与imparfait相同(/ɛ/音)，但词干与将来时相同。je voudrais [ʒə vu.dʁɛ] 中d不发音。",
    content: "表示礼貌请求、建议、假设。构成：将来时词干 + imparfait词尾",
    details: [
      { term: "构成", definition: "将来时词干 + -ais,-ais,-ait,-ions,-iez,-aient", example: "je voudrais (我想要)", ipa: "/ʒə vu.dʁɛ/" },
      { term: "礼貌请求", definition: "Je voudrais un café.", example: "我想要一杯咖啡", ipa: "/ʒə vu.dʁɛ œ̃ ka.fe/" },
      { term: "建议", definition: "Tu devrais étudier.", example: "你应该学习", ipa: "/ty də.vʁe e.ty.dje/" },
      { term: "假设", definition: "Si j'avais de l'argent, je voyagerais.", example: "如果我有钱，我就旅行", ipa: "/ʒə vwa.ja.ʒə.ʁɛ/" },
    ],
    tips: "条件式的关键搭配：si + imparfait → conditionnel présent",
    usage: "条件式用于礼貌请求、提出建议和表达假设。在正式场合和日常礼貌用语中非常重要。",
    register: "正式",
    exampleParagraph: [
      { text: "Je voudrais un café, s'il vous plaît.", cn: "我想要一杯咖啡，谢谢。", context: "口语最常用！餐厅点单必备" },
      { text: "Si j'étais riche, j'achèterais une maison en Provence.", cn: "如果我有钱，我会买一栋普罗旺斯的房子。", context: "假设情景" },
      { text: "Tu devrais voir un médecin.", cn: "你应该去看医生。", context: "口语建议" },
    ],
    scenarios: ["餐厅/商店礼貌点单", "提出建议", "表达假设情景"]
  },
  {
    id: 22, title: "虚拟式 (Le Subjonctif)", category: "语法", subcategory: "时态", difficulty: 3,
    ipa: "/lə syb.ʒɔ̃k.tif/",
    pronunciationNote: "发音注意：虚拟式某些形式与现在时发音相同，需靠上下文区分。que引起的连音：qu'il [kil]、qu'elle [kɛl]。",
    content: "表达愿望、必要性、情感、怀疑。用于特定连词和动词结构后。",
    details: [
      { term: "愿望", definition: "Je veux que tu viennes.", example: "我想让你来", ipa: "/ʒə vø kə ty vjɛn/" },
      { term: "必要性", definition: "Il faut que tu travailles.", example: "你必须工作", ipa: "/il fo kə ty tʁa.vaj/" },
      { term: "情感", definition: "Je suis content que tu sois là.", example: "我很高兴你在这里", ipa: "/ʒə sɥi kɔ̃.tɑ̃ kə ty swa la/" },
      { term: "怀疑", definition: "Je ne pense pas qu'il ait raison.", example: "我不认为他对", ipa: "/ʒə nə pɑ̃s pa kil ɛ ʁɛ.zɔ̃/" },
      { term: "être虚拟式", definition: "sois, sois, soit, soyons, soyez, soient", example: "Il faut que tu sois prêt.", ipa: "/il fo kə ty swa pʁɛ/" },
      { term: "连词触发", definition: "bien que, pour que, avant que", example: "Bien qu'il soit tard, je reste.", ipa: "/bjɛ̃ kil swa taʁ ʒə ʁɛst/" },
    ],
    tips: "虚拟式是法语高级语法的标志！记住触发词：vouloir que, falloir que, bien que, pour que"
  },
  {
    id: 23, title: "愈过去时 (Le Plus-que-parfait)", category: "语法", subcategory: "时态", difficulty: 3,
    ipa: "/lə plys.kə.paʁ.fɛ/",
    pronunciationNote: "连音规则：avais/avait与后接元音开头的过去分词连音，如 j'avais allé [ʒa.vɛ.z‿a.le]。",
    content: "表示'过去的过去'。构成：助动词的imparfait + 过去分词",
    details: [
      { term: "构成", definition: "avoir/être的imparfait + 过去分词", example: "j'avais mangé (我已经吃了)", ipa: "/ʒa.vɛ mɑ̃.ʒe/" },
      { term: "用法", definition: "过去的过去", example: "Quand je suis arrivé, il avait déjà mangé.", ipa: "/kɑ̃ ʒə sɥi.z‿a.ʁi.ve il a.vɛ de.ʒa mɑ̃.ʒe/" },
      { term: "间接引语", definition: "时态呼应", example: "Il a dit qu'il avait fini.", ipa: "/il a di kil a.vɛ fi.ni/" },
    ],
    tips: "信号词：déjà, avant, quand, lorsque"
  },

  // ========== 语法 > 介词 ==========
  {
    id: 11, title: "法语介词大全 (Les Prépositions)", category: "语法", subcategory: "介词", difficulty: 2,
    ipa: "/le pʁe.po.zi.sjɔ̃/",
    pronunciationNote: "发音注意：à [a]、de [də]、en [ɑ̃] 在连音中变化。à在元音前不省略（与定冠词l'不同），但de+le缩合为du。",
    content: "介词连接名词和句子其他部分。法语介词比中文复杂得多！",
    details: [
      { term: "à (在/到/给)", definition: "地点、方向、对象", example: "Je vais à Paris. (我去巴黎)", ipa: "/a pa.ʁi/" },
      { term: "de (的/从/关于)", definition: "所属、来源、内容", example: "Le livre de Marie. (玛丽的书)", ipa: "/də ma.ʁi/" },
      { term: "en (在...里/用)", definition: "国家(阴性)、交通方式", example: "Je vais en France.", ipa: "/ɑ̃ fʁɑ̃s/" },
      { term: "dans (在...里面)", definition: "空间内", example: "Le chat est dans la boîte.", ipa: "/dɑ̃ la bwat/" },
      { term: "sur (在...上面)", definition: "位置、主题", example: "Le livre est sur la table.", ipa: "/syʁ la tabl/" },
      { term: "pour (为了/对于)", definition: "目的、对象", example: "C'est pour toi.", ipa: "/puʁ twa/" },
      { term: "avec / sans", definition: "伴随", example: "Je viens avec toi.", ipa: "/a.vɛk twa/" },
      { term: "pendant / pendant", definition: "时间段", example: "Pendant les vacances.", ipa: "/pɑ̃.dɑ̃ le va.kɑ̃s/" },
    ],
    tips: "à和de是最常用的两个介词！à=去/在(某地)，de=从/的"
  },
  {
    id: 24, title: "地点介词深入 (去/在/来自)", category: "语法", subcategory: "介词", difficulty: 2,
    pronunciationNote: "连音规则：au [o] 和 aux [o] 发音相同！du [dy] 和 des [de] 发音不同。en在元音前不连音。",
    content: "去不同地方用不同介词，这是法语的特色！",
    details: [
      { term: "去城市", definition: "à + 城市", example: "Je vais à Paris / à Lyon" },
      { term: "去阳性国家", definition: "au + 国家", example: "Je vais au Japon / au Canada" },
      { term: "去阴性国家", definition: "en + 国家", example: "Je vais en France / en Chine" },
      { term: "来自城市", definition: "de + 城市", example: "Je viens de Paris" },
      { term: "来自阳性国家", definition: "du + 国家", example: "Je viens du Japon" },
      { term: "来自阴性国家", definition: "de + 国家", example: "Je viens de France" },
      { term: "chez + 人", definition: "在某人那里", example: "Je vais chez moi / chez Pierre" },
    ],
    tips: "记忆技巧：à表方向，de表来源。国家看阴阳性选au/en！"
  },
  {
    id: 17, title: "缩合冠词 (au/du/aux/des)", category: "语法", subcategory: "介词", difficulty: 2,
    pronunciationNote: "发音重点：au [o] = à+le，aux [o] = à+les（两者发音相同！）。du [dy] = de+le，des [de] = de+les。连音：aux enfants [o.z‿ɑ̃.fɑ̃]。",
    content: "当介词à或de遇到定冠词le/les时，必须缩合！",
    details: [
      { term: "à + le = au", definition: "去(阳性单数地方)", example: "Je vais au cinéma." },
      { term: "à + les = aux", definition: "去(复数地方)", example: "Je parle aux enfants." },
      { term: "de + le = du", definition: "从/的(阳性单数)", example: "Je viens du marché." },
      { term: "de + les = des", definition: "从/的(复数)", example: "Les jouets des enfants." },
      { term: "à + la = à la", definition: "阴性不变", example: "Je vais à la plage." },
    ],
    tips: "只有le和les会缩合！la和l'不变。au和du是最常用的！"
  },

  // ========== 语法 > 代词 ==========
  {
    id: 12, title: "直接宾语代词 COD", category: "语法", subcategory: "代词", difficulty: 2,
    pronunciationNote: "连音规则：代词与动词之间常连音，如 les amis [le.z‿a.mi] → Je les ai [ʒə le.z‿e]。me/te在元音前省略为m'/t'。",
    content: "COD代替直接跟在动词后面的名词（不需要介词）。放在动词前面！",
    details: [
      { term: "me/te (我/你)", definition: "第一、二人称", example: "Il me regarde. (他看着我)" },
      { term: "le/la (他/她/它)", definition: "第三人称单数", example: "Je le vois. (我看到他)" },
      { term: "nous/vous", definition: "第一、二人称复数", example: "Il nous aide." },
      { term: "les (他们)", definition: "第三人称复数", example: "Je les connais." },
    ],
    tips: "COD放在动词前面！Je VOIS le chat → Je LE vois."
  },
  {
    id: 13, title: "间接宾语代词 COI", category: "语法", subcategory: "代词", difficulty: 2,
    pronunciationNote: "发音注意：lui [lɥi] 和 leur [lœʁ] 发音不同！lui是单数（给他/她），leur是复数（给他们）。",
    content: "COI代替以à开头的间接宾语（通常是人）。",
    details: [
      { term: "me/te", definition: "给我/给你", example: "Il me parle. (他跟我说话)" },
      { term: "lui", definition: "给他/她（不分阴阳性！）", example: "Je lui téléphone." },
      { term: "nous/vous", definition: "给我们/给你们", example: "Vous nous écrivez." },
      { term: "leur", definition: "给他们/她们", example: "Je leur dis merci." },
    ],
    tips: "lui=给他/她一个人，leur=给他们/她们多个人。注意lui和leur没有复数s！"
  },
  {
    id: 14, title: "副代词 y 和 en", category: "语法", subcategory: "代词", difficulty: 3,
    pronunciationNote: "发音注意：y [i] 在元音前与动词连音，如 j'y vais [ʒi.vɛ]。en [ɑ̃] 在元音前连音，如 j'en ai [ʒɑ̃.n‿e]。",
    content: "y和en是两个特殊代词，代替以介词引导的短语。",
    details: [
      { term: "y = à + 地点/事物", definition: "代替'去某地'", example: "Je vais à Paris → J'y vais." },
      { term: "en = de + 事物", definition: "代替'来自某处'", example: "Je viens de Paris → J'en viens." },
      { term: "y + 动词", definition: "代替à+事物", example: "Je pense à mon travail → J'y pense." },
      { term: "en + 数量", definition: "代替de+名词", example: "J'ai deux chats → J'en ai deux." },
    ],
    tips: "y='去那里/想到它'，en='从那里来/有一些'。y和en放在动词前面！"
  },
  {
    id: 25, title: "关系代词 (qui/que/où/dont)", category: "语法", subcategory: "代词", difficulty: 2,
    pronunciationNote: "发音注意：qui [ki] 后直接跟动词（连音），que [kə] 后跟主语。où [u] 发音同ou（或者）。dont [dɔ̃] 鼻音。",
    content: "关系代词连接两个句子，代替先行词在从句中的角色。",
    details: [
      { term: "qui — 主语", definition: "代替主语", example: "L'homme qui parle est mon père." },
      { term: "que — 直接宾语", definition: "代替COD", example: "Le film que j'ai vu était bien." },
      { term: "où — 地点", definition: "代替地点", example: "La ville où j'habite est belle." },
      { term: "dont — de引导", definition: "代替de+名词", example: "Le film dont je parle est excellent." },
    ],
    tips: "区分：qui后面直接跟动词，que后面跟主语+动词"
  },
  {
    id: 26, title: "主有形容词 (mon/ma/mes...)", category: "语法", subcategory: "代词", difficulty: 1,
    pronunciationNote: "连音规则：mon/ton/son在元音前连音——mon ami [mɔ̃.n‿a.mi]（即使ami是阳性！这是为了发音）。",
    content: "主有形容词表示'谁的'，需要和名词的阴阳性一致。",
    details: [
      { term: "mon/ma/mes (我的)", definition: "阳性/阴性/复数", example: "mon livre, ma table, mes amis" },
      { term: "ton/ta/tes (你的)", definition: "阳性/阴性/复数", example: "ton chat, ta sœur, tes livres" },
      { term: "son/sa/ses (他/她的)", definition: "取决于名词阴阳性", example: "son père, sa mère, ses enfants" },
      { term: "notre/nos (我们的)", definition: "单数/复数", example: "notre maison, nos enfants" },
      { term: "votre/vos (您的/你们的)", definition: "单数/复数", example: "votre ami, vos amis" },
      { term: "leur/leurs (他们的)", definition: "单数/复数", example: "leur chat, leurs enfants" },
    ],
    tips: "mon/ma/sa取决于后面名词的阴阳性，不是拥有者的性别！son livre = 他/她的书"
  },

  // ========== 语法 > 冠词 ==========
  {
    id: 8, title: "冠词系统 (定冠词/不定冠词/部分冠词)", category: "语法", subcategory: "冠词", difficulty: 1,
    pronunciationNote: "发音重点：le [lə]、la [la]、les [le]。l'在元音前：l'eau [lo]、l'ami [la.mi]。des [de] 连音：des amis [de.z‿a.mi]。",
    content: "法语冠词比英语复杂，需要区分三种冠词。",
    details: [
      { term: "le / la / les", definition: "定冠词（特指）", example: "le livre (那本书)" },
      { term: "un / une / des", definition: "不定冠词（泛指）", example: "un livre (一本书)" },
      { term: "du / de la / des", definition: "部分冠词（不可数）", example: "du pain (一些面包)" },
      { term: "l'", definition: "元音前省略", example: "l'eau (水), l'ami (朋友)" },
    ],
    tips: "部分冠词是法语的特色！看到食物、液体、抽象概念时用du/de la就对了！"
  },

  // ========== 语法 > 动词 ==========
  {
    id: 27, title: "反身动词 (se laver, se lever...)", category: "语法", subcategory: "动词", difficulty: 2,
    pronunciationNote: "连音规则：反身代词me/te/se在元音前省略为m'/t'/s'——je m'appelle [ʒə ma.pɛl]。nous nous [nu nu] 两个nous连读。",
    content: "反身动词表示动作作用于主语自己。复合时态用être作助动词。",
    details: [
      { term: "现在时", definition: "je me lave, tu te laves, il se lave", example: "Nous nous lavons" },
      { term: "复合时态", definition: "用être + 过去分词", example: "Je me suis levé(e)." },
      { term: "分类", definition: "反身/相互/被动/绝对", example: "se laver / se parler / se vendre / se promener" },
    ],
    tips: "反身代词和主语一致：me, te, se, nous, vous, se"
  },
  {
    id: 28, title: "常用不规则动词 (être/avoir/aller/faire)", category: "语法", subcategory: "动词", difficulty: 1,
    pronunciationNote: "发音重点：être [ɛtʁ]、avoir [a.vwaʁ]、aller [a.le]、faire [fɛʁ]。连音：vous êtes [vu.z‿ɛt]、ils ont [il.z‿ɔ̃]。",
    content: "这四个动词是法语的基石，必须完全掌握。",
    details: [
      { term: "être (是)", definition: "je suis, tu es, il est...", example: "Je suis chinois." },
      { term: "avoir (有)", definition: "j'ai, tu as, il a...", example: "J'ai vingt ans." },
      { term: "aller (去)", definition: "je vais, tu vas, il va...", example: "Je vais à Paris." },
      { term: "faire (做)", definition: "je fais, tu fais, il fait...", example: "Je fais du sport." },
    ],
    tips: "这四个动词的变位必须烂熟于心！它们也是构成复合时态的助动词。"
  },

  // ========== 语法 > 否定 ==========
  {
    id: 5, title: "否定句的构成 (La Négation)", category: "语法", subcategory: "否定", difficulty: 2,
    pronunciationNote: "发音注意：ne在口语中常省略——'Je sais pas' [ʒə sɛ pa]。ne在元音前省略为n'：je n'ai pas [ʒə ne pa]。",
    content: "法语否定句的基本结构：ne + 动词 + pas。还有更多否定形式！",
    details: [
      { term: "ne...pas", definition: "不（基本否定）", example: "Je ne parle pas." },
      { term: "ne...jamais", definition: "从不", example: "Je ne fume jamais." },
      { term: "ne...rien", definition: "什么都不", example: "Je ne comprends rien." },
      { term: "ne...personne", definition: "没有人", example: "Je ne vois personne." },
      { term: "ne...plus", definition: "不再", example: "Je ne veux plus." },
    ],
    tips: "口语中ne经常被省略：Je sais pas（我不知道）。但写作时一定写全！"
  },

  // ========== 语法 > 句型 ==========
  {
    id: 10, title: "疑问句的三种方式", category: "语法", subcategory: "句型", difficulty: 2,
    pronunciationNote: "连音规则：est-ce que [ɛs kə]，倒装时连音：vas-tu [va ty]、a-t-il [a.t‿il]（插入t用于发音）。",
    content: "法语有三种方式构成疑问句，从简单到正式。",
    details: [
      { term: "语调升高", definition: "口语最简单", example: "Tu viens? (你来吗？)" },
      { term: "Est-ce que", definition: "标准疑问句", example: "Est-ce que tu viens?" },
      { term: "倒装", definition: "正式书面语", example: "Viens-tu?" },
      { term: "疑问词", definition: "qui/que/où/quand/comment/pourquoi", example: "Où habites-tu?" },
    ],
    tips: "日常口语用升高语调最简单！est-ce que万能公式！"
  },
  {
    id: 7, title: "连接词 (Les Connecteurs)", category: "语法", subcategory: "句型", difficulty: 2,
    pronunciationNote: "发音注意：et [e]（和）永远不连音！但est [ɛ]（是）要连音。这是初学者常混淆的。",
    content: "连接词让句子更流畅自然。",
    details: [
      { term: "et (和)", definition: "并列", example: "Je mange et je bois." },
      { term: "mais (但是)", definition: "转折", example: "C'est bon mais cher." },
      { term: "ou (或者)", definition: "选择", example: "Café ou thé?" },
      { term: "parce que (因为)", definition: "原因", example: "Je reste parce que je suis fatigué." },
      { term: "donc (所以)", definition: "结果", example: "Il pleut, donc je reste." },
      { term: "quand (当...时)", definition: "时间", example: "Quand je mange, je suis content." },
    ],
    tips: "parce que（因为）和 donc（所以）是最常用的，先记住这两个！"
  },
  {
    id: 29, title: "比较级和最高级", category: "语法", subcategory: "句型", difficulty: 2,
    ipa: "/lə kɔ̃.pa.ʁa.tif e lə sy.pɛʁ.la.tif/",
    pronunciationNote: "发音注意：plus [plys] 在辅音前不发音s，plus que [plys kə]。aussi [o.si] 连音：aussi important [o.si.z‿ɛ̃.pɔʁ.tɑ̃]。meilleur [mɛ.jœʁ] 发音不同于pire [piʁ]。",
    content: "比较级：plus/moins/aussi...que。最高级：le/la/les plus/moins...",
    details: [
      { term: "更... que", definition: "plus... que", example: "Il est plus grand que moi." },
      { term: "不如... que", definition: "moins... que", example: "Il est moins grand que moi." },
      { term: "和...一样", definition: "aussi... que", example: "Il est aussi grand que moi." },
      { term: "最...", definition: "le/la/les plus...", example: "C'est le plus grand." },
      { term: "不规则", definition: "bon→meilleur, mauvais→pire", example: "C'est le meilleur!" },
    ],
    tips: "bon的最高级是meilleur（不是plus bon）！"
  },
  {
    id: 30, title: "被动语态 (La Voix Passive)", category: "语法", subcategory: "句型", difficulty: 3,
    ipa: "/la vwa pa.siv/",
    pronunciationNote: "发音注意：被动语态中être的发音随肘态变化。过去分词配合发音同形容词配合，如 chantée [ʃɑ̃.te]。par [paʁ] 在元音前连音。",
    content: "构成：主语 + être + 过去分词 + par + 施动者",
    details: [
      { term: "现在时被动", definition: "est + 过去分词", example: "Le livre est lu par l'étudiant." },
      { term: "复合过去被动", definition: "a été + 过去分词", example: "Le tableau a été admiré." },
      { term: "过去分词配合", definition: "和主语性数一致", example: "La chanson est chantée." },
    ],
    tips: "过去分词要和主语保持性数一致！"
  },

  // ========== 语法 > 配合 ==========
  {
    id: 18, title: "过去分词的配合", category: "语法", subcategory: "配合", difficulty: 3,
    ipa: "/l‿a.kɔʁ də paʁ.ti.sip pa.se/",
    pronunciationNote: "发音注意：过去分词配合时加-e不改变发音（如 allée [a.le] 与allé发音相同），加-s也不发音。但有些特殊情况如 fait [fɛ] → faite [fɛt] 发音不同。",
    content: "用être时过去分词要和主语配合；用avoir时通常不配合（除非COD在前）。",
    details: [
      { term: "être + 过去分词", definition: "和主语性数一致", example: "Elle est allée. (加e)" },
      { term: "avoir + 过去分词", definition: "通常不配合", example: "Elle a mangé." },
      { term: "avoir + COD在前", definition: "和前置COD配合", example: "La lettre que j'ai écrite." },
    ],
    tips: "DR MRS VANDERTRAMP动词用être，其他大部分用avoir"
  },

  // ========== 语法 > 词性 ==========
  {
    id: 2, title: "名词的阴阳性 (Genre des noms)", category: "语法", subcategory: "词性", difficulty: 1,
    ipa: "/ʒɑ̃ʁ de nɔ̃/",
    pronunciationNote: "发音注意：阴阳性变化时发音可能不同，如 un chat [œ̃ ʃa] vs une chatte [yn ʃat]。词尾-e通常不发音，但加-e后某些辅音开始发音，如 grand [ɡʁɑ̃] → grande [ɡʁɑ̃d]。",
    content: "法语名词分阳性和阴性，冠词和形容词需要与之匹配。",
    details: [
      { term: "阳性", definition: "le/un", example: "le livre, un chat" },
      { term: "阴性", definition: "la/une", example: "la table, une maison" },
      { term: "-e结尾", definition: "大多阴性", example: "la table, la porte" },
      { term: "-age结尾", definition: "大多阳性", example: "le fromage, le voyage" },
      { term: "-tion结尾", definition: "几乎全阴性", example: "la nation, la question" },
    ],
    tips: "不要死记硬背！记住词尾规律，遇到新词猜一猜，慢慢就记住了。"
  },

  // ========== 发音 ==========
  {
    id: 9, title: "不发音字母与连读 (Liaison)", category: "发音", subcategory: "发音规则", difficulty: 2,
    pronunciationNote: "核心规则：词尾辅音通常不发音（CaReFuL除外：c,r,f,l发音）。连音(liaison)发生条件：①词尾辅音+词首元音/哑音h ②在同一语音组内。必须连音：冠词+名词、代词+动词、形容词+名词。禁止连音：et后面、名词+名词。",
    content: "法语很多词尾字母不发音，但连读时又需要发音！",
    details: [
      { term: "词尾辅音", definition: "通常不发音(除c,r,f,l)", example: "Paris读'Pa-ri'" },
      { term: "词尾-e", definition: "通常不发音", example: "table读'tabl'" },
      { term: "词尾-es/-ent", definition: "动词变位不发音", example: "ils parlent读'parl'" },
      { term: "h永远不发音", definition: "", example: "hôtel读'otel'" },
      { term: "Liaison连读", definition: "词尾辅音+词首元音", example: "les amis读'le-za-mi'" },
    ],
    tips: "记住CaReFuL（c,r,f,l）这四个词尾辅音要发音！"
  },

  // ========== 词汇 > 数字 ==========
  {
    id: 4, title: "法语数字 1-100", category: "词汇", subcategory: "数字", difficulty: 1,
    ipa: "/le nɔ̃bʁ ɑ̃ fʁɑ̃.sɛ/",
    pronunciationNote: "发音注意：vingt [vɛ̃] 在80-89时发音为 [vɛ̃t]（连音），如 quatre-vingt-un [ka.tʁə.vɛ̃.t‿œ̃]。six [sis] 和 dix [dis] 在辅音前s不发音，元音前连音。sept [sɛt] 和 neuf [nœf] 在辅音前词尾发音。",
    content: "法语数字系统有独特逻辑，70-99用组合方式表达。",
    details: [
      { term: "1-10", definition: "un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix", example: "J'ai trois chats." },
      { term: "11-16", definition: "onze...seize (特殊词)", example: "J'ai seize ans." },
      { term: "17-19", definition: "dix-sept, dix-huit, dix-neuf", example: "17 = dix + sept" },
      { term: "70-79", definition: "soixante-dix (60+10)", example: "70 = soixante-dix" },
      { term: "80", definition: "quatre-vingts (4×20)", example: "80 = 4×20" },
      { term: "90-99", definition: "quatre-vingt-dix (4×20+10)", example: "95 = quatre-vingt-quinze" },
    ],
    tips: "70以上最头疼！70=soixante-dix(60+10)，80=quatre-vingts(4×20)，90=quatre-vingt-dix"
  },

  // ========== 词汇 > 日常表达 ==========
  {
    id: 3, title: "常用问候与告别", category: "词汇", subcategory: "日常表达", difficulty: 1,
    ipa: "/le sa.ly.ta.sjɔ̃ e le.z‿a.djø/",
    pronunciationNote: "发音注意：bonjour [bɔ̃.ʒuʁ] 鼻音。salut [sa.ly] 词尾t不发音。ç在ça [sa] 中发/s/音。bientôt [bjɛ̃.to] 词尾t不发音。",
    content: "掌握法语的日常问候是交流的第一步。",
    details: [
      { term: "Bonjour", definition: "你好（白天用）", example: "Bonjour Madame!" },
      { term: "Bonsoir", definition: "晚上好", example: "Bonsoir Monsieur!" },
      { term: "Salut", definition: "嗨/拜拜（非正式）", example: "Salut! Ça va?" },
      { term: "Comment ça va?", definition: "你好吗？", example: "Salut! Comment ça va?" },
      { term: "À bientôt", definition: "回头见", example: "À bientôt, mon ami!" },
    ],
    tips: "Bonjour是最万能的问候！Salut只能跟朋友用。"
  },
  {
    id: 15, title: "法语日常高频表达", category: "词汇", subcategory: "高频表达", difficulty: 1,
    ipa: "/le.z‿ɛk.spʁe.sjɔ̃ ku.ti.djɛn/",
    pronunciationNote: "发音注意：口语中省略ne——'Je sais pas' [ʒə sɛ pa]。ça va [sa va] 中ç发/s/音。C'est pas grave [sɛ pa ɡʁav] 中词尾-e不发音。génial [ʒe.njal] 注意软g发音。",
    content: "法国人每天都在说的表达，学会这些你就能在法国生存！",
    details: [
      { term: "Ça va?", definition: "你好吗？", example: "Salut, ça va? — Oui, ça va!" },
      { term: "C'est pas grave.", definition: "没关系", example: "Désolé! — C'est pas grave." },
      { term: "J'en ai marre!", definition: "我受够了！", example: "Encore du travail? J'en ai marre!" },
      { term: "C'est génial!", definition: "太棒了！", example: "On va au cinéma? — C'est génial!" },
      { term: "Je ne sais pas.", definition: "我不知道", example: "Tu sais l'heure? — Je ne sais pas." },
    ],
    tips: "C'est pas grave是法国人说得最多的话之一！口语中省略ne：Je sais pas."
  },

  // ========== 文化 ==========
  {
    id: 31, title: "法国社交礼仪与文化", category: "文化", subcategory: "法国文化", difficulty: 1,
    ipa: "/la kyl.tyʁ fʁɑ̃.sɛz/",
    pronunciationNote: "发音注意：la bise [la biz]。monsieur [mə.sjø] 发音特殊，不是 [mɔ̃.sjø]。madame [ma.dam]。bonjour [bɔ̃.ʒuʁ] 鼻音。",
    content: "了解法国文化能让你更好地和法国人交流！",
    details: [
      { term: "La bise (贴面礼)", definition: "见面亲吻脸颊", example: "在巴黎亲2下，南法亲3-4下" },
      { term: "Bonjour (基本礼貌)", definition: "进门必说", example: "进商店/电梯都要说Bonjour" },
      { term: "Vous vs Tu", definition: "正式vs非正式", example: "对陌生人用vous，朋友用tu" },
      { term: "用餐礼仪", definition: "双手放桌上", example: "手不要放膝盖上！" },
      { term: "从不说money", definition: "用l'addition", example: "不说combien ça coûte，说C'est combien?" },
    ],
    tips: "法国人最看重礼貌！进门说Bonjour，离开说Au revoir，这是基本尊重。"
  },

  // ========== 语法 > DELF易错点 ==========
  {
    id: 32, title: "DELF易错：ce vs se / c'est vs s'est", category: "语法", subcategory: "DELF易错", difficulty: 2,
    ipa: "/sə vs sə — sɛ vs sɛ/",
    pronunciationNote: "发音注意：c'est [sɛ] 和 s'est [sɛ] 发音完全相同！ce [sə] 和 se [sə] 发音也相同。只能靠上下文区分，听力中要特别注意。",
    content: "DELF考试高频易混淆！ce是指示代词，se是反身代词，完全不一样！",
    details: [
      { term: "ce = 这/那", definition: "指示代词", example: "C'est un livre. (这是一本书)" },
      { term: "se = 自己", definition: "反身代词", example: "Il se lave. (他洗自己)" },
      { term: "c'est + 名词/形容词", definition: "这是...", example: "C'est facile. (这很简单)" },
      { term: "s'est + 过去分词", definition: "反身动词过去时", example: "Il s'est levé. (他起床了)" },
      { term: "区分技巧", definition: "把ce换成ces(复数)", example: "能说ces→用ce；能说se→用se" },
    ],
    tips: "DELF写作中这个错误扣分很重！记住：c'est=这是，s'est=他/她(自己)做了..."
  },
  {
    id: 33, title: "DELF易错：il y a vs c'est vs il est", category: "语法", subcategory: "DELF易错", difficulty: 2,
    ipa: "/il ja — sɛ — il ɛ/",
    pronunciationNote: "发音注意：il y a [il ja] 在口语中常缩减为 y'a [ja]。c'est [sɛ] 和 il est [il ɛ] 发音不同。c'est在元音前不连音，但il est连音：il est arrivé [i.l‿ɛ.t‿a.ʁi.ve]。",
    content: "三个表达'有/是'的方式，DELF口语和写作中最容易混用！",
    details: [
      { term: "il y a + 名词(不定)", definition: "有...", example: "Il y a un chat. (有一只猫)" },
      { term: "c'est + 限定名词", definition: "这是(特指)", example: "C'est mon chat. (这是我的猫)" },
      { term: "il est + 形容词/职业", definition: "他是...", example: "Il est médecin. (他是医生)" },
      { term: "常见错误", definition: "❌ C'est un professeur", example: "✅ Il est professeur. (不说C'est)" },
      { term: "c'est vs il est", definition: "c'est+限定词+名词 / il est+无冠词名词", example: "C'est un bon prof. / Il est prof." },
    ],
    tips: "DELF口语考试：描述职业用il est，描述具体事物用c'est/il y a"
  },
  {
    id: 34, title: "DELF易错：passé composé中avoir vs être", category: "语法", subcategory: "DELF易错", difficulty: 2,
    ipa: "/a.vwaʁ vs ɛtʁ — pa.se kɔ̃.po.ze/",
    pronunciationNote: "发音注意：用être时过去分词配合发音——allé [a.le] vs allée [a.le]（发音相同但拼写不同），venu [və.ny] vs venue [və.ny]。suis/es/est/sommes/êtes/sont 发音各不相同。",
    content: "DELF A1/A2必考！哪些动词用être做助动词？",
    details: [
      { term: "DR MRS VANDERTRAMP", definition: "用être的动词口诀", example: "Devenir, Revenir, Monter, Rester, Sortir..." },
      { term: "aller/venir", definition: "移动动词用être", example: "Je suis allé(e) / Elle est venue" },
      { term: "naître/mourir", definition: "状态变化用être", example: "Il est né en 1990. / Elle est morte." },
      { term: "其余大部分用avoir", definition: "manger, parler, lire...", example: "J'ai mangé. / J'ai parlé." },
      { term: "être动词过去分词要配合", definition: "加e(阴)/s(复)/es(阴复)", example: "Elle est allée. / Ils sont venus." },
    ],
    tips: "口诀：DR MRS VANDERTRAMP + 所有反身动词用être。DELF写作中忘记配合扣分！"
  },
  {
    id: 35, title: "DELF易错：tu vs vous 使用场景", category: "语法", subcategory: "DELF易错", difficulty: 1,
    ipa: "/ty vs vu/",
    pronunciationNote: "发音注意：tu [ty] 和 vous [vu] 发音不同。对考官一定用vous [vu]。tutoyer [ty.twa.je] 和vouvoyer [vu.vwa.je] 分别表示用tu和vous称呼。",
    content: "DELF口语考试中用错tu/vous会严重影响印象分！",
    details: [
      { term: "vous — 正式", definition: "陌生人/长辈/上司/客户", example: "Bonjour Monsieur, vous désirez?" },
      { term: "tu — 非正式", definition: "朋友/家人/同龄人/小孩", example: "Salut! Tu veux un café?" },
      { term: "DELF口语", definition: "对考官一定用vous!", example: "Vous pouvez répéter? (请重复)" },
      { term: "DELF写作", definition: "正式信用vous，私人信用tu", example: "Lettre formelle→vous / Email ami→tu" },
      { term: "常见错误", definition: "❌ 对考官说Tu peux répéter?", example: "✅ Vous pouvez répéter?" },
    ],
    tips: "DELF考试黄金法则：不确定时用vous！用tu会显得不礼貌，但用vous永远不会错。"
  },
  {
    id: 36, title: "DELF易错：否定结构 ne...pas 的位置", category: "语法", subcategory: "DELF易错", difficulty: 2,
    ipa: "/la ne.ɡa.sjɔ̃ — nə pa/",
    pronunciationNote: "发音注意：ne在元音前省略为n'——je n'ai pas [ʒə ne pa]。口语中ne常省略，发音变为 [ʒə sɛ pa]。jamais [ʒa.mɛ]、rien [ʁjɛ̃]、personne [pɛʁ.sɔn] 发音各异。",
    content: "DELF写作中否定句结构错误是常见扣分点！",
    details: [
      { term: "简单时态", definition: "ne + 动词 + pas", example: "Je ne mange pas. (我不吃)" },
      { term: "复合时态", definition: "ne + 助动词 + pas + 过去分词", example: "Je n'ai pas mangé. (我没吃)" },
      { term: "不定式", definition: "ne pas + 不定式", example: "Il faut ne pas fumer. (不要吸烟)" },
      { term: "ne...jamais/rien", definition: "同样结构", example: "Je ne fume jamais. / Je ne comprends rien." },
      { term: "口语省略ne", definition: "⚠️ 口语可省略ne，DELF写作不行！", example: "❌写作: Je sais pas. ✅写作: Je ne sais pas." },
    ],
    tips: "DELF写作绝对不能省略ne！这是书面语和口语的最大区别。"
  },
  {
    id: 37, title: "DELF易错：du/de la/des vs de", category: "语法", subcategory: "DELF易错", difficulty: 2,
    ipa: "/dy də la de vs də/",
    pronunciationNote: "发音注意：du [dy]、de la [də la]、des [de] 和单独的 de [də] 发音不同。否定后全部变成de [də]，但être动词后不变。des在元音前连音：des amis [de.z‿a.mi]。",
    content: "部分冠词和de的区别是DELF A2/B1高频考点！",
    details: [
      { term: "du/de la/des", definition: "部分冠词(不可数/泛指)", example: "Je mange du pain. (我吃面包)" },
      { term: "de (否定后)", definition: "否定句中部分冠词变de", example: "Je ne mange pas de pain." },
      { term: "de + 形容词+名词", definition: "形容词在名词前时用de", example: "de bons amis (好朋友)" },
      { term: "常见错误", definition: "❌ Je ne mange pas du pain", example: "✅ Je ne mange pas de pain." },
      { term: "例外", definition: "动词是être时不变", example: "Ce n'est pas du pain. (这不是面包)" },
    ],
    tips: "DELF口诀：否定后，du/de la/des全部变成de！(除了être动词)"
  },
  {
    id: 38, title: "DELF易错：同音异义词", category: "语法", subcategory: "DELF易错", difficulty: 1,
    ipa: "/le.z‿o.mɔ.nim/",
    pronunciationNote: "发音注意：son/sont [sɔ̃] 发音相同。mon/mont [mɔ̃] 发音相同。vert/vers/ver [vɛʁ] 发音相同。mer/mère [mɛʁ] 发音相同。必须靠上下文区分！",
    content: "法语听力中同音词是DELF最大陷阱！",
    details: [
      { term: "son (他的) vs sont (是)", definition: "发音完全一样", example: "Son livre / Ils sont là" },
      { term: "mon (我的) vs mont (山)", definition: "发音一样", example: "Mon ami / Le mont Blanc" },
      { term: "vert (绿色) vs vers (向) vs ver (虫)", definition: "三个词同音", example: "vert / vers / ver" },
      { term: "mer (海) vs mère (母亲)", definition: "发音一样", example: "La mer / Ma mère" },
      { term: "aire (空地) vs air (空气) vs hare (鲱鱼)", definition: "同音", example: "l'air / une aire" },
    ],
    tips: "DELF听力技巧：根据上下文判断！听到/sɔ̃/时，后面跟动词→sont，后面跟名词→son"
  },
  {
    id: 39, title: "DELF易错：si + 时态搭配", category: "语法", subcategory: "DELF易错", difficulty: 3,
    ipa: "/si — le kɔʁ.kɔʁ.dɑ̃s də tɑ̃/",
    pronunciationNote: "发音注意：si [si] 在元音前不省略（与que不同）。si后绝对不能用将来时或条件式。条件式词尾-ais/-ait/-aient都发/ɛ/音。",
    content: "DELF B1必考！si后面的时态有严格规则，不能用错！",
    details: [
      { term: "si + 现在时 → 现在/将来时", definition: "真实条件", example: "Si tu étudies, tu réussiras." },
      { term: "si + imparfait → conditionnel", definition: "假设条件", example: "Si j'étais riche, je voyagerais." },
      { term: "si + plus-que-parfait → cond. passé", definition: "过去假设", example: "Si j'avais su, j'aurais agi." },
      { term: "❌ 绝对错误", definition: "si后面不能用将来时！", example: "❌ Si tu étudieras → ✅ Si tu étudies" },
      { term: "口诀", definition: "si没有will (si后不用将来时)", example: "Les 'si' n'aiment pas les 'rai'" },
    ],
    tips: "法语口诀：Les 'si' n'aiment pas les 'rai' (si不喜欢rai结尾的词=将来时/条件式)"
  },
  {
    id: 40, title: "DELF易错：en vs y 的选择", category: "语法", subcategory: "DELF易错", difficulty: 3,
    ipa: "/ɑ̃ vs i/",
    pronunciationNote: "发音注意：en [ɑ̃] 鼻音，y [i] 高音。en在元音前连音：j'en ai [ʒɑ̃.n‿e]。y在元音前连音：j'y vais [ʒi.vɛ]。两者在口语中容易混淆，需特别注意。",
    content: "DELF B1口语和写作中经常用混！",
    details: [
      { term: "y = à + 事物/地点", definition: "代替à引导的内容", example: "Je pense à mon examen → J'y pense." },
      { term: "en = de + 事物", definition: "代替de引导的内容", example: "Je viens de Paris → J'en viens." },
      { term: "en + 数量", definition: "代替de+数量", example: "J'ai deux frères → J'en ai deux." },
      { term: "常见混淆", definition: "❌ J'y ai deux → ✅ J'en ai deux", example: "数量一定用en！" },
      { term: "位置", definition: "y/en放在动词前(肯定/否定)", example: "Je m'y vais. / Je n'y vais pas." },
    ],
    tips: "记忆法：en=de(的/从)，y=à(去/想到)。DELF口语中用对en/y可以加分！"
  },
];
