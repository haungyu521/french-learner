/**
 * 法语完整课程体系 A1→C2
 * 覆盖所有语法知识点：冠词、介词、时态、代词、语态、句式等
 * 从零基础到精通，系统性语言认知
 */
export const curriculumData = [
  // ===== 第一单元：语音与入门 =====
  {
    unit: 1, unitTitle: "语音基础", unitDesc: "法语发音规则，掌握拼读能力",
    lessons: [
      {
        id: 1, title: "法语字母与发音", goal: "掌握26个字母的法语读法",
        vocab: [
          { word: "A, B, C, D, E, F", meaning: "前6个字母", example: "A comme Avion.", audio: "A B C D E F" },
          { word: "G, H, I, J, K, L", meaning: "中间6个字母", example: "H 不发音！", audio: "G H I J K L" },
          { word: "M, N, O, P, Q, R", meaning: "后6个字母", example: "R 是小舌音！", audio: "M N O P Q R" },
          { word: "S, T, U, V, W, X", meaning: "继续", example: "U 是法语特有音！", audio: "S T U V W X" },
          { word: "Y, Z", meaning: "最后2个", example: "Y comme Yoga.", audio: "Y Z" },
        ],
        grammar: { title: "法语字母的特殊之处", content: "法语字母与英语的关键区别：\n\n1. R — 小舌音，不是英语的卷舌R\n2. H — 永远不发音！\n3. U — 嘴唇撅起（像吹口哨），说/i/\n4. E — 词尾e通常不发音\n5. 鼻化元音：an, en, in, on, un — 气流从鼻子出\n\n拼读规则：\n- 法语是'拼读一致'的语言，学会规则就能读任何词\n- 词尾辅音通常不发音（除C, R, F, L — 记作'CaReF'）", tip: "法语发音最大的秘诀：嘴唇要用力！比中文夸张得多！" },
        dialogue: [
          { role: "A", text: "Comment on prononce 'Paris'?", cn: "'Paris'怎么念？" },
          { role: "B", text: "Pa-ri. Le 's' ne se prononce pas.", cn: "Pa-ri。s不发音。" },
          { role: "A", text: "Et 'Lyon'?", cn: "那Lyon呢？" },
          { role: "B", text: "Li-on. Le 'on' est nasal.", cn: "Li-on。on是鼻化元音。" },
        ],
        practice: [
          { type: "choice", question: "法语词尾的s通常发音吗?", options: ["发音", "不发音", "有时发音", "看情况"], answer: 1 },
          { type: "choice", question: "法语H字母发音吗?", options: ["发音", "不发音", "有时发音", "只在词首发音"], answer: 1 },
        ]
      },
      {
        id: 2, title: "鼻化元音与连读", goal: "掌握法语特有的鼻化元音和连读规则",
        vocab: [
          { word: "an/en", meaning: "/ɑ̃/ 鼻化a", example: "France, dans, enfant", audio: "an en" },
          { word: "in/ain", meaning: "/ɛ̃/ 鼻化e", example: "vin, pain, matin", audio: "in ain" },
          { word: "on", meaning: "/ɔ̃/ 鼻化o", example: "bon, nom, maison", audio: "on" },
          { word: "un", meaning: "/œ̃/ 鼻化eu", example: "un, lundi, brun", audio: "un" },
          { word: "la liaison", meaning: "连读", example: "les_amis → /le.za.mi/", audio: "liaison" },
        ],
        grammar: { title: "鼻化元音与连读规则", content: "鼻化元音（元音+鼻音）：\n- an/en → /ɑ̃/ (嘴大张)\n- in/ain → /ɛ̃/ (嘴微张，像微笑)\n- on → /ɔ̃/ (嘴圆)\n- un → /œ̃/ (嘴撅起，现代法语常读成/in/)\n\n连读(liaison)规则：\n词尾不发音的辅音+下一个词元音开头 → 发音\n- les amis → /le.za.mi/\n- un_enfant → /œ̃.nɑ̃.fɑ̃/\n- vous_avez → /vu.za.ve/\n\n必须连读：限定词+名词、代词+动词\n禁止连读：et(和)之后、h aspiré之前", tip: "南法口音特点：鼻化元音更开放，un常读成/an/，词尾-e可能发音！" },
        dialogue: [
          { role: "A", text: "Tu viens d'où?", cn: "你从哪来？" },
          { role: "B", text: "Je viens du sud, de Marseille.", cn: "我来自南方，马赛。" },
          { role: "A", text: "Ah, l'accent du sud ! C'est charmant.", cn: "啊，南方口音！很有魅力。" },
          { role: "B", text: "Oui, chez nous, on prononce mieux !", cn: "是啊，我们那边发音更好听！" },
        ],
        practice: [
          { type: "choice", question: "'les amis' 需要连读吗?", options: ["需要", "不需要", "看情况", "只在正式场合"], answer: 0 },
          { type: "fill", question: "bon 的鼻化元音是 ___", answer: "ɔ̃", hint: "on组合" },
        ]
      },
    ]
  },
  // ===== 第二单元：生存法语 A1 =====
  {
    unit: 2, unitTitle: "生存法语", unitDesc: "最基本的法语，能在法国活下去",
    lessons: [
      {
        id: 3, title: "打招呼与告别", goal: "学会各种场合的打招呼方式",
        vocab: [
          { word: "Bonjour", meaning: "你好（白天）", example: "Bonjour Madame!", audio: "Bonjour" },
          { word: "Bonsoir", meaning: "晚上好", example: "Bonsoir tout le monde!", audio: "Bonsoir" },
          { word: "Bonne nuit", meaning: "晚安（睡觉前）", example: "Bonne nuit, dors bien!", audio: "Bonne nuit" },
          { word: "Salut", meaning: "嗨（非正式）", example: "Salut, ça va?", audio: "Salut" },
          { word: "Au revoir", meaning: "再见", example: "Au revoir, à demain!", audio: "Au revoir" },
          { word: "À bientôt", meaning: "回头见", example: "À bientôt!", audio: "À bientôt" },
          { word: "À demain / à lundi", meaning: "明天见/周一见", example: "À demain, bonne soirée!", audio: "À demain" },
          { word: "Comment ça va?", meaning: "怎么样？", example: "Salut, comment ça va?", audio: "Comment ça va" },
        ],
        grammar: { title: "正式 vs 非正式", content: "法语打招呼分等级：\n\n正式：Bonjour（对陌生人、长辈、上司）\n非正式：Salut（对朋友、同龄人）\n亲密：Coucou（对很亲的人）\n\nÇa va? 万能问候：\n— Comment ça va? (你好吗？)\n— Ça va bien. (很好)\n— Ça va mal. (不好)\n— Comme ci, comme ça. (一般般)\n— Et toi? / Et vous? (你呢？)\n\n重要：在法国，进任何商店都要先说Bonjour！", tip: "Bonjour是法语世界的通行证！不说会被认为很粗鲁。" },
        dialogue: [
          { role: "A", text: "Bonjour Madame!", cn: "您好，女士！" },
          { role: "B", text: "Bonjour Monsieur! Comment allez-vous?", cn: "您好，先生！您怎么样？" },
          { role: "A", text: "Très bien, merci. Et vous?", cn: "很好，谢谢。您呢？" },
          { role: "B", text: "Bien aussi. Bonne journée!", cn: "也好。祝您有美好的一天！" },
        ],
        practice: [
          { type: "fill", question: "___, comment allez-vous?", answer: "Bonjour", hint: "打招呼" },
          { type: "choice", question: "对朋友打招呼用?", options: ["Bonjour", "Bonsoir", "Salut", "Au revoir"], answer: 2 },
        ]
      },
      {
        id: 4, title: "谢谢、道歉与礼貌", goal: "掌握感谢、道歉、礼貌用语",
        vocab: [
          { word: "Merci (beaucoup)", meaning: "谢谢（非常感谢）", example: "Merci beaucoup pour votre aide.", audio: "Merci" },
          { word: "De rien", meaning: "不客气（普通）", example: "— Merci! — De rien!", audio: "De rien" },
          { word: "Je vous en prie", meaning: "不客气（正式）", example: "Je vous en prie, Madame.", audio: "Je vous en prie" },
          { word: "Pardon", meaning: "对不起/借过", example: "Pardon, je peux passer?", audio: "Pardon" },
          { word: "Excusez-moi", meaning: "打扰一下", example: "Excusez-moi, où est la gare?", audio: "Excusez-moi" },
          { word: "Désolé(e)", meaning: "抱歉", example: "Je suis désolé, je suis en retard.", audio: "Désolé" },
          { word: "S'il vous plaît", meaning: "请（正式）", example: "Un café, s'il vous plaît.", audio: "S'il vous plaît" },
          { word: "S'il te plaît", meaning: "请（非正式）", example: "Aide-moi, s'il te plaît.", audio: "S'il te plaît" },
        ],
        grammar: { title: "礼貌等级体系", content: "法语礼貌用语分等级：\n\n谢谢：Merci → Merci beaucoup → Mille mercis（千谢万谢）\n不客气：De rien（普通）→ Je vous en prie（正式）→ Il n'y a pas de quoi（随意）\n抱歉：Pardon（借过）→ Excusez-moi（打扰）→ Je suis désolé(e)（真诚道歉）\n请：S'il vous plaît（正式/对多人）→ S'il te plaît（非正式/对朋友）\n\nvous vs tu：\n- vous：对陌生人、长辈、上司、多人\n- tu：对朋友、家人、同龄人\n- 法国人之间用tu需要对方同意：'On peut se tutoyer?'", tip: "不确定用tu还是vous？用vous永远不会错！" },
        dialogue: [
          { role: "A", text: "Excusez-moi, vous avez l'heure?", cn: "打扰一下，您知道几点吗？" },
          { role: "B", text: "Il est trois heures.", cn: "三点了。" },
          { role: "A", text: "Merci beaucoup!", cn: "非常感谢！" },
          { role: "B", text: "Je vous en prie.", cn: "不客气。" },
        ],
        practice: [
          { type: "fill", question: "— Merci! — ___!", answer: "De rien", hint: "不客气" },
          { type: "choice", question: "'打扰一下' 法语是?", options: ["Pardon", "Merci", "Excusez-moi", "Désolé"], answer: 2 },
        ]
      },
      {
        id: 5, title: "数字 0-100", goal: "掌握法语所有数字",
        vocab: [
          { word: "zéro à dix", meaning: "0-10", example: "un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix", audio: "zéro à dix" },
          { word: "onze à seize", meaning: "11-16", example: "onze, douze, treize, quatorze, quinze, seize", audio: "onze à seize" },
          { word: "dix-sept à vingt", meaning: "17-20", example: "dix-sept, dix-huit, dix-neuf, vingt", audio: "dix-sept à vingt" },
          { word: "trente à soixante", meaning: "30-60", example: "trente, quarante, cinquante, soixante", audio: "trente à soixante" },
          { word: "soixante-dix", meaning: "70 (60+10)", example: "soixante-dix, soixante-et-onze (71)", audio: "soixante-dix" },
          { word: "quatre-vingts", meaning: "80 (4×20)", example: "quatre-vingts, quatre-vingt-un (81)", audio: "quatre-vingts" },
          { word: "quatre-vingt-dix", meaning: "90 (4×20+10)", example: "quatre-vingt-dix, quatre-vingt-dix-neuf (99)", audio: "quatre-vingt-dix" },
          { word: "cent", meaning: "100", example: "cent, deux cents, trois cents", audio: "cent" },
        ],
        grammar: { title: "法语数字的60进制", content: "法语70-99用60进制（全球最奇葩的数字系统）：\n\n70 = soixante-dix (60+10)\n71 = soixante-et-onze (60+11)\n72 = soixante-douze (60+12)\n73 = soixante-treize (60+13)\n...\n80 = quatre-vingts (4×20) ← 注意有s!\n81 = quatre-vingt-un ← 无s!\n82 = quatre-vingt-deux\n...\n90 = quatre-vingt-dix (4×20+10)\n91 = quatre-vingt-onze\n...\n99 = quatre-vingt-dix-neuf\n\n比利时/瑞士：septante(70), octante/huitante(80), nonante(90)\n\n年龄：J'ai 25 ans. (用avoir，不用être)\n价格：Ça fait 15 euros. (15欧元)", tip: "法国人自己也觉得这个数字系统很烦！多练就习惯了。" },
        dialogue: [
          { role: "A", text: "Tu as quel âge?", cn: "你几岁？" },
          { role: "B", text: "J'ai vingt-cinq ans. Et toi?", cn: "我25岁。你呢？" },
          { role: "A", text: "Moi, j'en ai vingt-huit.", cn: "我28岁。" },
        ],
        practice: [
          { type: "fill", question: "75 = ___ (60+15)", answer: "soixante-quinze", hint: "soixante + quinze" },
          { type: "choice", question: "80 法语怎么说?", options: ["octante", "quatre-vingts", "huitante", "soixante-vingt"], answer: 1 },
        ]
      },
      {
        id: 6, title: "自我介绍", goal: "能介绍姓名、国籍、职业、住址",
        vocab: [
          { word: "Je m'appelle...", meaning: "我叫...", example: "Je m'appelle Marie.", audio: "Je m'appelle" },
          { word: "Je suis chinois/chinoise", meaning: "我是中国人", example: "Je suis chinoise.", audio: "Je suis chinois" },
          { word: "J'habite à...", meaning: "我住在...", example: "J'habite à Shanghai.", audio: "J'habite à" },
          { word: "Je suis étudiant(e)", meaning: "我是学生", example: "Je suis étudiante.", audio: "étudiant" },
          { word: "Je travaille dans...", meaning: "我在...工作", example: "Je travaille dans un bureau.", audio: "Je travaille" },
          { word: "J'ai ... ans", meaning: "我...岁", example: "J'ai vingt-cinq ans.", audio: "J'ai ans" },
          { word: "Enchanté(e)", meaning: "很高兴认识你", example: "Enchanté de faire votre connaissance.", audio: "Enchanté" },
        ],
        grammar: { title: "Je suis + 身份（阴阳性）", content: "自我介绍用 Je suis(我是)：\n\n阳性 → 阴性（通常加-e）：\nchinois → chinoise\nétudiant → étudiante\nfrançais → française\ningénieur → ingénieure\n\n不规则：\nami → amie\nheureux → heureuse\nvieux → vieille\n\n注意：\n- 年龄用 avoir：J'ai 25 ans（我有25年）\n- 不说 Je suis 25 ans ❌\n- 职业前不加冠词：Je suis étudiant ✅（不是 un étudiant）", tip: "女生注意阴阳性变化！形容词也要配合。" },
        dialogue: [
          { role: "A", text: "Bonjour! Je m'appelle Pierre. Enchanté!", cn: "你好！我叫Pierre。很高兴认识你！" },
          { role: "B", text: "Je m'appelle Li Wei. Je suis chinoise.", cn: "我叫李薇。我是中国人。" },
          { role: "A", text: "Tu fais quoi dans la vie?", cn: "你做什么工作？" },
          { role: "B", text: "Je suis étudiante en français.", cn: "我是法语专业的学生。" },
        ],
        practice: [
          { type: "fill", question: "Je ___ Marie. (我叫)", answer: "m'appelle", hint: "我叫" },
          { type: "choice", question: "女生说'我是学生'?", options: ["Je suis étudiant", "Je suis étudiante", "Je suis étudiants", "Je suis une étudiant"], answer: 1 },
        ]
      },
    ]
  },
  // ===== 第三单元：冠词与名词 A1 =====
  {
    unit: 3, unitTitle: "冠词与名词", unitDesc: "法语的性数体系——最核心的语法基础",
    lessons: [
      {
        id: 7, title: "名词的阴阳性", goal: "理解法语名词的性别",
        vocab: [
          { word: "le livre (阳性)", meaning: "书", example: "Le livre est intéressant.", audio: "le livre" },
          { word: "la table (阴性)", meaning: "桌子", example: "La table est grande.", audio: "la table" },
          { word: "l'eau (元音前)", meaning: "水", example: "L'eau est fraîche.", audio: "l'eau" },
          { word: "les livres (复数)", meaning: "书（复数）", example: "Les livres sont sur la table.", audio: "les livres" },
          { word: "un homme / une femme", meaning: "一个男人/女人", example: "Un homme et une femme.", audio: "un homme une femme" },
        ],
        grammar: { title: "法语名词都有性别！", content: "法语每个名词都有性别（阳性/阴性），这是最核心的语法概念：\n\n阳性名词用 le/un：le livre, un homme\n阴性名词用 la/une：la table, une femme\n元音开头用 l'：l'eau, l'ami(e)\n复数统一用 les：les livres, les tables\n\n判断规律（不是100%）：\n阳性常见词尾：-age, -ment, -eau, -teur, -isme\n阴性常见词尾：-tion, -sion, -té, -ée, -ure, -ance, -ence\n\n例外很多！建议：记名词时一定连冠词一起记！\n不要记 livre，要记 le livre", tip: "名词的性别是法语的'灵魂'，所有形容词、冠词都要配合！" },
        dialogue: [
          { role: "A", text: "C'est quoi, le mot 'maison'?", cn: "maison这个词是什么性？" },
          { role: "B", text: "C'est féminin. La maison.", cn: "阴性的。la maison。" },
          { role: "A", text: "Et 'problème'?", cn: "那problème呢？" },
          { role: "B", text: "Masculin. Le problème.", cn: "阳性的。le problème。" },
        ],
        practice: [
          { type: "choice", question: "'table' 是什么性别?", options: ["阳性", "阴性", "中性", "没有性别"], answer: 1 },
          { type: "fill", question: "___ livre est intéressant. (这本书)", answer: "Le", hint: "阳性定冠词" },
        ]
      },
      {
        id: 8, title: "定冠词与不定冠词", goal: "掌握le/la/les和un/une/des的用法",
        vocab: [
          { word: "le/la/les", meaning: "定冠词（这个/这些）", example: "Le chat est mignon. (这只猫很可爱)", audio: "le la les" },
          { word: "un/une/des", meaning: "不定冠词（一个/一些）", example: "Un chat passe. (一只猫经过)", audio: "un une des" },
          { word: "l'", meaning: "定冠词（元音前）", example: "L'homme arrive. (这个男人来了)", audio: "l'" },
          { word: "du/de la/des", meaning: "部分冠词（一些）", example: "Je mange du pain. (我吃面包)", audio: "du de la des" },
        ],
        grammar: { title: "三种冠词的区别", content: "法语冠词体系（最关键的语法之一）：\n\n1. 定冠词（特指）：le/la/les/l'\nle livre (这本书) / la maison (这房子) / les enfants (这些孩子)\n\n2. 不定冠词（泛指一个）：un/une/des\nun livre (一本书) / une maison (一座房子) / des enfants (一些孩子)\n\n3. 部分冠词（不可数）：du/de la/des/l'\ndu pain (一些面包) / de la viande (一些肉) / de l'eau (一些水)\n\n核心区别：\nJ'aime le café. (我喜欢咖啡 — 泛指)\nJe veux un café. (我想要一杯咖啡 — 一个)\nJe bois du café. (我在喝咖啡 — 一些)", tip: "中文说'我喜欢咖啡'，法语必须选：le(泛指)还是du(一些)！" },
        dialogue: [
          { role: "A", text: "Tu veux du café?", cn: "你要喝咖啡吗？" },
          { role: "B", text: "Oui, un café, s'il te plaît.", cn: "好的，来一杯。" },
          { role: "A", text: "Tu prends du sucre?", cn: "你加糖吗？" },
          { role: "B", text: "Non, je n'aime pas le sucre.", cn: "不，我不喜欢糖。" },
        ],
        practice: [
          { type: "fill", question: "Je mange ___ pain. (我吃面包)", answer: "du", hint: "部分冠词（阳性）" },
          { type: "choice", question: "'这本书' 法语是?", options: ["un livre", "le livre", "du livre", "des livres"], answer: 1 },
        ]
      },
      {
        id: 9, title: "名词复数", goal: "掌握名词复数的构成规则",
        vocab: [
          { word: "-s", meaning: "通常加s", example: "le chat → les chats", audio: "chats" },
          { word: "-x", meaning: "-eau/-eu/-ou加x", example: "le jeu → les jeux", audio: "jeux" },
          { word: "-aux", meaning: "-al变-aux", example: "le cheval → les chevaux", audio: "chevaux" },
          { word: "不变", meaning: "-s/-x/-z结尾不变", example: "le prix → les prix", audio: "prix" },
          { word: "特殊变化", meaning: "不规则复数", example: "le ciel → les cieux", audio: "cieux" },
        ],
        grammar: { title: "复数构成规则", content: "名词复数规则：\n\n1. 一般规则：加-s\nchat → chats, maison → maisons\n\n2. -eau, -eu, -ou 结尾：加-x\njeu → jeux, beau → beaux, genou → genoux\n例外：pneu → pneus, landau → landaus\n\n3. -al 结尾：变 -aux\ncheval → chevaux, animal → animaux\n例外：festival → festivals, bal → bals\n\n4. -s, -x, -z 结尾：不变\nprix → prix, nez → nez, voix → voix\n\n5. 特殊：\nbijou/caillou/genou/hibou/joujou/pou → +x\nciel → cieux, œil → yeux\n\n重要：复数的s/x不发音！", tip: "冠词要配合：le → les, un → des, du → des" },
        dialogue: [
          { role: "A", text: "Quel est le pluriel de 'cheval'?", cn: "cheval的复数是什么？" },
          { role: "B", text: "Chevaux. Le 'al' devient 'aux'.", cn: "Chevaux。al变成aux。" },
          { role: "A", text: "Et 'festival'?", cn: "那festival呢？" },
          { role: "B", text: "Festivals. C'est une exception !", cn: "Festivals。这是个例外！" },
        ],
        practice: [
          { type: "fill", question: "le cheval → les ___", answer: "chevaux", hint: "-al变-aux" },
          { type: "choice", question: "le jeu 的复数是?", options: ["les jeus", "les jeux", "les jeus", "les jeu"], answer: 1 },
        ]
      },
    ]
  },
  // ===== 第四单元：核心动词与现在时 A1 =====
  {
    unit: 4, unitTitle: "核心动词与现在时", unitDesc: "法语动词变位体系与现在时",
    lessons: [
      {
        id: 10, title: "être 和 avoir", goal: "掌握法语最重要的两个动词",
        vocab: [
          { word: "je suis", meaning: "我是", example: "Je suis étudiant.", audio: "je suis" },
          { word: "tu es", meaning: "你是", example: "Tu es français?", audio: "tu es" },
          { word: "il/elle est", meaning: "他/她是", example: "Elle est médecin.", audio: "elle est" },
          { word: "nous sommes", meaning: "我们是", example: "Nous sommes amis.", audio: "nous sommes" },
          { word: "vous êtes", meaning: "您/你们是", example: "Vous êtes chinois?", audio: "vous êtes" },
          { word: "ils/elles sont", meaning: "他们/她们是", example: "Ils sont contents.", audio: "ils sont" },
          { word: "j'ai", meaning: "我有", example: "J'ai vingt ans.", audio: "j'ai" },
          { word: "il/elle a", meaning: "他/她有", example: "Elle a un chat.", audio: "elle a" },
          { word: "nous avons", meaning: "我们有", example: "Nous avons faim.", audio: "nous avons" },
        ],
        grammar: { title: "être 和 avoir 的现在时变位", content: "être (是) — 最常用的动词：\nje suis, tu es, il/elle est\nnous sommes, vous êtes, ils/elles sont\n\navoir (有) — 第二常用：\nj'ai, tu as, il/elle a\nnous avons, vous avez, ils/elles ont\n\n用途：\nêtre：身份(Je suis étudiant)、国籍(Il est français)、年龄(错！年龄用avoir)、被动语态\navoir：拥有(J'ai un chat)、年龄(J'ai 20 ans)、很多固定表达(J'ai faim/soif/peur)\n\n注意：\n- avoir的ils/elles ont，t不发音！\n- être的变位是不规则的，必须死记硬背", tip: "这两个动词是法语的'骨架'，后面所有时态都靠它们！" },
        dialogue: [
          { role: "A", text: "Tu as un animal?", cn: "你有宠物吗？" },
          { role: "B", text: "Oui, j'ai un chat. Il est mignon.", cn: "有，我有一只猫。它很可爱。" },
          { role: "A", text: "Il a quel âge?", cn: "它几岁了？" },
          { role: "B", text: "Il a deux ans.", cn: "两岁了。" },
        ],
        practice: [
          { type: "fill", question: "Je ___ étudiant. (我是)", answer: "suis", hint: "être第一人称" },
          { type: "fill", question: "Nous ___ faim. (我们饿了)", answer: "avons", hint: "avoir第一人称复数" },
        ]
      },
      {
        id: 11, title: "第一组动词(-er)现在时", goal: "掌握最常见的规则动词变位",
        vocab: [
          { word: "parler (说话)", meaning: "-er动词", example: "Je parle français.", audio: "parler" },
          { word: "manger (吃)", meaning: "-er动词", example: "Nous mangeons à midi.", audio: "manger" },
          { word: "travailler (工作)", meaning: "-er动词", example: "Tu travailles où?", audio: "travailler" },
          { word: "habiter (居住)", meaning: "-er动词", example: "J'habite à Paris.", audio: "habiter" },
          { word: "aimer (喜欢/爱)", meaning: "-er动词", example: "J'aime le chocolat.", audio: "aimer" },
          { word: "acheter (买)", meaning: "-er动词(特殊)", example: "J'achète du pain.", audio: "acheter" },
          { word: "commencer (开始)", meaning: "-cer动词", example: "Nous commençons.", audio: "commencer" },
        ],
        grammar: { title: "-er 动词现在时变位（第一组）", content: "法语90%的动词以-er结尾！变位规则：\n\n以 parler 为例：\n词干 parl- + 词尾：\nje parl-e, tu parl-es, il/elle parl-e\nnous parl-ons, vous parl-ez, ils/elles parl-ent\n\n词尾：-e, -es, -e, -ons, -ez, -ent\n\n发音规则：\n-e, -es, -ent 都不发音！\nje parle /tu parl/il parl = 三个听起来一样！\nnous parlons / vous parlez 才有区别\n\n拼写变化：\n-ger动词：nous mangeons (保留e)\n-cer动词：nous commençons (ç保留/s音)\n-eler/-eter动词：双写l/t (j'appelle)\n\n不规则-er动词：aller, envoyer, peser...", tip: "记住：-e, -es, -ent 三个词尾都不发音！" },
        dialogue: [
          { role: "A", text: "Tu parles anglais?", cn: "你说英语吗？" },
          { role: "B", text: "Oui, je parle anglais et français.", cn: "是的，我说英语和法语。" },
          { role: "A", text: "Nous parlons trop !", cn: "我们说太多了！" },
          { role: "B", text: "Vous avez raison !", cn: "你说得对！" },
        ],
        practice: [
          { type: "fill", question: "Je ___ français. (parler)", answer: "parle", hint: "-er动词第一人称" },
          { type: "fill", question: "Nous ___ à midi. (manger)", answer: "mangeons", hint: "-ger动词nous形式" },
        ]
      },
      {
        id: 12, title: "常用不规则动词", goal: "掌握第二、三组核心动词",
        vocab: [
          { word: "finir (完成)", meaning: "-ir动词(第二组)", example: "Je finis à cinq heures.", audio: "finir" },
          { word: "choisir (选择)", meaning: "-ir动词", example: "Je choisis le rouge.", audio: "choisir" },
          { word: "prendre (拿/乘)", meaning: "不规则", example: "Je prends le métro.", audio: "prendre" },
          { word: "faire (做)", meaning: "不规则", example: "Je fais du sport.", audio: "faire" },
          { word: "venir (来)", meaning: "不规则", example: "Je viens de Chine.", audio: "venir" },
          { word: "voir (看见)", meaning: "不规则", example: "Je vois un chat.", audio: "voir" },
          { word: "pouvoir (能够)", meaning: "情态动词", example: "Je peux vous aider?", audio: "pouvoir" },
          { word: "vouloir (想要)", meaning: "情态动词", example: "Je voudrais un café.", audio: "vouloir" },
          { word: "devoir (应该/欠)", meaning: "情态动词", example: "Je dois partir.", audio: "devoir" },
        ],
        grammar: { title: "核心不规则动词变位", content: "第二组(-ir)：finir\nje finis, tu finis, il finit, nous finissons, vous finissez, ils finissent\n特征：nous/vous形式有-iss-\n\nprendre：je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent\n\nfaire：je fais, tu fais, il fait, nous faisons, vous faites, ils font\n\nvenir：je viens, tu viens, il vient, nous venons, vous venez, ils viennent\n\nvoir：je vois, tu vois, il voit, nous voyons, vous voyez, ils voient\n\n三个情态动词（超级重要）：\npouvoir(能够)：je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent\nvouloir(想要)：je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent\ndevoir(应该)：je dois, tu dois, il doit, nous devons, vous devez, ils doivent\n\n用法：情态动词 + 不定式\nJe peux partir. (我能走)\nJe veux manger. (我想吃)\nJe dois travailler. (我必须工作)", tip: "三个情态动词+不定式 = 万能句型！" },
        dialogue: [
          { role: "A", text: "Tu veux venir avec nous?", cn: "你想和我们一起来吗？" },
          { role: "B", text: "Je dois finir mon travail d'abord.", cn: "我必须先完成工作。" },
          { role: "A", text: "Tu peux le faire ce soir?", cn: "你今晚能做吗？" },
          { role: "B", text: "Oui, je peux. J'arrive !", cn: "可以。我来了！" },
        ],
        practice: [
          { type: "fill", question: "Je ___ partir. (我必须)", answer: "dois", hint: "devoir第一人称" },
          { type: "choice", question: "nous finissons 是什么动词?", options: ["-er动词", "-ir动词(第二组)", "不规则动词", "情态动词"], answer: 1 },
        ]
      },
    ]
  },
  // ===== 第五单元：介词与地点表达 A1-A2 =====
  {
    unit: 5, unitTitle: "介词与地点", unitDesc: "à, de, en, dans, sur, sous... 法语介词体系",
    lessons: [
      {
        id: 13, title: "介词 à 和 de", goal: "掌握法语最重要的两个介词",
        vocab: [
          { word: "à Paris", meaning: "在巴黎", example: "J'habite à Paris.", audio: "à Paris" },
          { word: "à le → au", meaning: "在（阳性地点）", example: "Je vais au cinéma.", audio: "au" },
          { word: "à la → à la", meaning: "在（阴性地点）", example: "Je vais à la gare.", audio: "à la" },
          { word: "à les → aux", meaning: "在（复数地点）", example: "Je vais aux États-Unis.", audio: "aux" },
          { word: "de Paris", meaning: "来自巴黎", example: "Je viens de Paris.", audio: "de Paris" },
          { word: "de + le → du", meaning: "来自（阳性）", example: "Je viens du Japon.", audio: "du" },
          { word: "de + la → de la", meaning: "来自（阴性）", example: "Je viens de la Chine.", audio: "de la" },
          { word: "de + les → des", meaning: "来自（复数）", example: "Je viens des États-Unis.", audio: "des" },
        ],
        grammar: { title: "à 和 de 的缩合", content: "法语介词+冠词必须缩合（这是最容易犯错的地方）：\n\nà + le = au → Je vais au cinéma.\nà + la = à la → Je vais à la gare.\nà + l' = à l' → Je vais à l'école.\nà + les = aux → Je vais aux toilettes.\n\nde + le = du → Je viens du Japon.\nde + la = de la → Je viens de la Chine.\nde + l' = de l' → Je viens de l'aéroport.\nde + les = des → Je viens des États-Unis.\n\nà 的用法：\n- 地点：à Paris, à la gare\n- 时间：à 3 heures, à midi\n- 方式：à pied, en voiture(例外)\n- 归属：le livre à Pierre\n\nde 的用法：\n- 来源：de Paris, du Japon\n- 所属：le livre de Pierre\n- 材料：une table en bois(例外用en)\n- 描述：une tasse de thé", tip: "缩合是强制的！说 à le 或 de le 是语法错误！" },
        dialogue: [
          { role: "A", text: "Tu vas où ce weekend?", cn: "你周末去哪？" },
          { role: "B", text: "Je vais au cinéma, puis au restaurant.", cn: "我去电影院，然后去餐厅。" },
          { role: "A", text: "Tu viens d'où?", cn: "你从哪来？" },
          { role: "B", text: "Je viens du travail.", cn: "我来自工作（下班了）。" },
        ],
        practice: [
          { type: "fill", question: "Je vais ___ cinéma. (à+le)", answer: "au", hint: "à+le缩合" },
          { type: "fill", question: "Je viens ___ Japon. (de+le)", answer: "du", hint: "de+le缩合" },
        ]
      },
      {
        id: 14, title: "位置介词：dans, sur, sous, devant, derrière", goal: "掌握描述位置的介词",
        vocab: [
          { word: "dans", meaning: "在...里面", example: "Le livre est dans le sac.", audio: "dans" },
          { word: "sur", meaning: "在...上面", example: "Le chat est sur la table.", audio: "sur" },
          { word: "sous", meaning: "在...下面", example: "Le chien est sous la table.", audio: "sous" },
          { word: "devant", meaning: "在...前面", example: "Je t'attends devant le cinéma.", audio: "devant" },
          { word: "derrière", meaning: "在...后面", example: "Le jardin est derrière la maison.", audio: "derrière" },
          { word: "entre...et...", meaning: "在...和...之间", example: "Entre toi et moi.", audio: "entre" },
          { word: "près de", meaning: "在...附近", example: "La gare est près d'ici.", audio: "près de" },
          { word: "loin de", meaning: "离...远", example: "L'aéroport est loin de la ville.", audio: "loin de" },
        ],
        grammar: { title: "位置介词对比", content: "位置介词体系：\n\ndans (在...里面) — 强调在内部空间\n→ dans la boîte (在盒子里)\n\nsur (在...上面) — 强调在表面\n→ sur la table (在桌上)\n\nsous (在...下面)\n→ sous le lit (在床下)\n\ndevant (前面) ↔ derrière (后面)\n→ devant la porte (门前) / derrière la maison (屋后)\n\nà côté de (在...旁边)\n→ à côté de la gare (车站旁边)\n\nprès de (附近) ↔ loin de (远)\n→ près de l'école (学校附近) / loin de la ville (远离城市)\n\nen face de (在...对面)\n→ en face du parc (公园对面)\n\nchez (在某人家里/店)\n→ chez moi (在我家) / chez le médecin (在医生那里)\n\n注意：dans强调'在内部'，sur强调'在表面'", tip: "chez是法语特有介词，英语和中文都没有！chez moi=at my place" },
        dialogue: [
          { role: "A", text: "Où sont mes clés?", cn: "我的钥匙在哪？" },
          { role: "B", text: "Elles sont sur la table, dans la cuisine.", cn: "在厨房的桌子上。" },
          { role: "A", text: "Merci! Je vais chez le médecin, tu viens?", cn: "谢谢！我要去医生那，你来吗？" },
          { role: "B", text: "Non, je t'attends devant le cabinet.", cn: "不了，我在诊所门口等你。" },
        ],
        practice: [
          { type: "fill", question: "Le chat est ___ la table. (在上面)", answer: "sur", hint: "在...上面" },
          { type: "choice", question: "'在我家' 法语是?", options: ["à moi", "chez moi", "dans moi", "sur moi"], answer: 1 },
        ]
      },
      {
        id: 15, title: "国家与城市的介词", goal: "掌握en, à, au用于国家和城市",
        vocab: [
          { word: "en France", meaning: "在法国（阴性国名）", example: "J'habite en France.", audio: "en France" },
          { word: "au Japon", meaning: "在日本（阳性国名）", example: "Je vais au Japon.", audio: "au Japon" },
          { word: "aux États-Unis", meaning: "在美国（复数）", example: "Je vais aux États-Unis.", audio: "aux États-Unis" },
          { word: "à Paris", meaning: "在巴黎（城市）", example: "J'habite à Paris.", audio: "à Paris" },
          { word: "de France", meaning: "来自法国", example: "Je viens de France.", audio: "de France" },
        ],
        grammar: { title: "国家/城市的介词规则", content: "去/在某国：\n\n阴性国名（通常以-e结尾）：en\n→ en France, en Chine, en Allemagne\n\n阳性国名：au (= à + le)\n→ au Japon, au Canada, au Brésil\n\n复数国名：aux (= à + les)\n→ aux États-Unis, aux Pays-Bas\n\n在某城市：à\n→ à Paris, à Londres, à Shanghai\n\n来自某国/城市：de\n→ de France, de Paris, du Japon\n\n判断阴阳性：\n-la France, la Chine, l'Allemagne → 阴性\n-le Japon, le Canada, le Brésil → 阳性\n\n例外：\n- le Mexique → au Mexique (阳性)\n- la Belgique → en Belgique (阴性)", tip: "大多数以-e结尾的国名是阴性！" },
        dialogue: [
          { role: "A", text: "Tu vas où en vacances?", cn: "你假期去哪？" },
          { role: "B", text: "Je vais en France, à Paris.", cn: "我去法国巴黎。" },
          { role: "A", text: "Tu viens d'où?", cn: "你从哪来？" },
          { role: "B", text: "Je viens de Chine, de Shanghai.", cn: "我来自中国上海。" },
        ],
        practice: [
          { type: "fill", question: "Je vais ___ Japon. (去日本)", answer: "au", hint: "阳性国名用au" },
          { type: "choice", question: "'在中国' 法语是?", options: ["au Chine", "en Chine", "à Chine", "la Chine"], answer: 1 },
        ]
      },
    ]
  },
  // ===== 第六单元：否定与疑问 A1-A2 =====
  {
    unit: 6, unitTitle: "否定与疑问", unitDesc: "法语的否定体系和提问方式",
    lessons: [
      {
        id: 16, title: "否定表达", goal: "掌握ne...pas及其他否定形式",
        vocab: [
          { word: "ne...pas", meaning: "不", example: "Je ne sais pas.", audio: "ne pas" },
          { word: "ne...jamais", meaning: "从不", example: "Je ne fume jamais.", audio: "ne jamais" },
          { word: "ne...plus", meaning: "不再", example: "Je ne fume plus.", audio: "ne plus" },
          { word: "ne...rien", meaning: "什么都不", example: "Je ne comprends rien.", audio: "ne rien" },
          { word: "ne...personne", meaning: "没有人", example: "Je ne vois personne.", audio: "ne personne" },
          { word: "ne...que", meaning: "只有", example: "Je ne bois que de l'eau.", audio: "ne que" },
        ],
        grammar: { title: "否定体系", content: "法语否定 = ne + 动词 + 否定词：\n\nne...pas → 不 (Je ne sais pas)\nne...jamais → 从不 (Je ne mens jamais)\nne...plus → 不再 (Je ne fume plus)\nne...rien → 什么都不 (Je ne comprends rien)\nne...personne → 没有人 (Je ne vois personne)\nne...que → 只有 (Je ne bois que de l'eau)\n\n口语中 ne 经常省略：\nJe sais pas. (口语) = Je ne sais pas. (书面)\n\n不定式否定：ne + 否定词 + 不定式\n→ pour ne pas manger (为了不吃饭)\n→ ne jamais fumer (从不抽烟)\n\n注意：ne...que 不是否定，是限制！\nJe ne bois que de l'eau = 我只喝水", tip: "口语省略ne很常见，但写作时绝对不能省！" },
        dialogue: [
          { role: "A", text: "Tu fumes?", cn: "你抽烟吗？" },
          { role: "B", text: "Non, je ne fume jamais.", cn: "不，我从不抽烟。" },
          { role: "A", text: "Tu comprends?", cn: "你理解吗？" },
          { role: "B", text: "Non, je ne comprends rien !", cn: "不，我什么都不懂！" },
        ],
        practice: [
          { type: "fill", question: "Je ___ comprends ___. (我什么都不懂)", answer: "ne...rien", hint: "什么都不" },
          { type: "choice", question: "'从不' 法语是?", options: ["ne...pas", "ne...jamais", "ne...plus", "ne...rien"], answer: 1 },
        ]
      },
      {
        id: 17, title: "提问方式", goal: "掌握法语三种提问方式",
        vocab: [
          { word: "Qui?", meaning: "谁", example: "Qui est-ce?", audio: "Qui" },
          { word: "Que/Quoi?", meaning: "什么", example: "Qu'est-ce que c'est?", audio: "Que" },
          { word: "Où?", meaning: "哪里", example: "Où habites-tu?", audio: "Où" },
          { word: "Quand?", meaning: "什么时候", example: "Quand est-ce qu'il arrive?", audio: "Quand" },
          { word: "Comment?", meaning: "怎么", example: "Comment allez-vous?", audio: "Comment" },
          { word: "Pourquoi?", meaning: "为什么", example: "Pourquoi tu pleures?", audio: "Pourquoi" },
          { word: "Combien?", meaning: "多少", example: "Combien ça coûte?", audio: "Combien" },
          { word: "Est-ce que...?", meaning: "是否...?", example: "Est-ce que tu parles français?", audio: "Est-ce que" },
        ],
        grammar: { title: "三种提问方式", content: "法语提问有三种方式（正式程度递减）：\n\n1. 倒装（最正式）：\nParles-tu français? (你说法语吗？)\nOù habites-tu? (你住哪？)\n\n2. Est-ce que（标准）：\nEst-ce que tu parles français?\nOù est-ce que tu habites?\n\n3. 语调升高（最口语）：\nTu parles français?\nTu habites où?\n\n疑问词：\nQui → 谁 (Qui est-ce?)\nQue/Quoi → 什么 (Qu'est-ce que c'est?)\nOù → 哪里 (Où vas-tu?)\nQuand → 何时 (Quand est-ce qu'il vient?)\nComment → 如何 (Comment ça va?)\nPourquoi → 为什么 (Pourquoi pas?)\nCombien → 多少 (Combien ça coûte?)\n\nQu'est-ce que = 什么（问事物）\nQu'est-ce qui = 什么（做主语）", tip: "日常口语用语调升高最自然！正式场合用倒装。" },
        dialogue: [
          { role: "A", text: "Où est-ce que tu habites?", cn: "你住哪？" },
          { role: "B", text: "J'habite à Shanghai. Et toi?", cn: "我住上海。你呢？" },
          { role: "A", text: "Pourquoi tu étudies le français?", cn: "你为什么学法语？" },
          { role: "B", text: "Parce que j'adore la culture française!", cn: "因为我超爱法国文化！" },
        ],
        practice: [
          { type: "fill", question: "___ est-ce que tu habites? (哪里)", answer: "Où", hint: "哪里" },
          { type: "choice", question: "'多少钱?' 法语是?", options: ["Comment ça va?", "Combien ça coûte?", "Qu'est-ce que c'est?", "Pourquoi ça?"], answer: 1 },
        ]
      },
    ]
  },
  // ===== 第七单元：形容词体系 A2 =====
  {
    unit: 7, unitTitle: "形容词体系", unitDesc: "形容词的性数配合与位置",
    lessons: [
      {
        id: 18, title: "形容词的阴阳性", goal: "掌握形容词的性数配合规则",
        vocab: [
          { word: "grand/grande", meaning: "高的/大的", example: "Il est grand. Elle est grande.", audio: "grand" },
          { word: "petit/petite", meaning: "小的", example: "Un petit garçon. Une petite fille.", audio: "petit" },
          { word: "beau/belle", meaning: "美丽的", example: "Un beau jour. Une belle journée.", audio: "beau" },
          { word: "nouveau/nouvelle", meaning: "新的", example: "Un nouveau livre. Une nouvelle maison.", audio: "nouveau" },
          { word: "vieux/vieille", meaning: "老的", example: "Un vieux monsieur. Une vieille dame.", audio: "vieux" },
          { word: "heureux/heureuse", meaning: "幸福的", example: "Je suis heureux. Elle est heureuse.", audio: "heureux" },
          { word: "blanc/blanche", meaning: "白色的", example: "Du pain blanc. Une robe blanche.", audio: "blanc" },
          { word: "long/longue", meaning: "长的", example: "Un long voyage. Une longue histoire.", audio: "long" },
        ],
        grammar: { title: "形容词阴阳性变化规则", content: "形容词必须与名词的性数一致！\n\n基本规则：阳性 + -e → 阴性\ngrand → grande, petit → petite\n\n特殊变化：\n-er → -ère：léger → légère\n-el → -elle：cruel → cruelle\n-en → -enne：ancien → ancienne\n-on → -onne：bon → bonne\n-eux → -euse：heureux → heureuse\n-er → -ère：dernier → dernière\n-f → -ve：actif → active\n-c → -che：blanc → blanche\n-c → -que：public → publique\n-et → -ette：muet → muette\n-l → -lle：gentil → gentille\n\n特殊：\nbeau → belle\nnouveau → nouvelle\nvieux → vieille\nfou → folle\ndoux → douce\nfavori → favorite\n\n复数：再加-s\ngrande → grandes", tip: "BAGS形容词(B Beauty, Age, Goodness, Size)放在名词前！" },
        dialogue: [
          { role: "A", text: "Elle est comment, ta nouvelle maison?", cn: "你的新房子怎么样？" },
          { role: "B", text: "Elle est grande et belle.", cn: "又大又漂亮。" },
          { role: "A", text: "Et le jardin?", cn: "花园呢？" },
          { role: "B", text: "Il est petit mais très joli.", cn: "小但很漂亮。" },
        ],
        practice: [
          { type: "fill", question: "Elle est ___ (heureux 阴性)", answer: "heureuse", hint: "-eux → -euse" },
          { type: "choice", question: "blanc 的阴性是?", options: ["blance", "blanche", "blanque", "blane"], answer: 1 },
        ]
      },
      {
        id: 19, title: "形容词的位置", goal: "掌握形容词放在名词前还是后",
        vocab: [
          { word: "avant le nom (名词前)", meaning: "短小常用形容词", example: "un beau jour, une grande maison", audio: "avant" },
          { word: "après le nom (名词后)", meaning: "大多数形容词", example: "une voiture française, un livre intéressant", audio: "après" },
          { word: "位置不同意思不同", meaning: "语义变化", example: "un homme grand(高) vs un grand homme(伟人)", audio: "position" },
        ],
        grammar: { title: "形容词前位 vs 后位", content: "法语形容词位置规则：\n\n放在名词前（BAGS规则）：\nB - Beauty: beau, joli, laid\nA - Age: jeune, vieux, nouveau, ancien\nG - Goodness: bon, mauvais, excellent\nS - Size: grand, petit, gros, long, court\n\n放在名词后（大多数）：\n- 颜色：rouge, bleu, vert\n- 国籍：français, chinois, anglais\n- 形状：rond, carré\n- 长形容词：intéressant, magnifique\n\n位置改变意思：\nun grand homme = 一个伟人\nun homme grand = 一个高个子男人\n\nmon ancien professeur = 我的前任老师\nmon professeur ancien = 我的年迈的老师\n\nune brave femme = 一个善良的女人\nune femme brave = 一个勇敢的女人", tip: "BAGS形容词放前面，其他放后面！" },
        dialogue: [
          { role: "A", text: "C'est un grand homme.", cn: "他是个伟人。" },
          { role: "B", text: "Non, c'est un homme grand. Il fait 1m90!", cn: "不，他是个高个子。1米9！" },
          { role: "A", text: "Ah, je comprends ! La position change le sens.", cn: "啊，我明白了！位置改变意思。" },
        ],
        practice: [
          { type: "choice", question: "'un grand homme' 意思是?", options: ["一个高个子男人", "一个伟人", "一个老男人", "一个大男人"], answer: 1 },
          { type: "fill", question: "une voiture ___ (红色的，放名词后)", answer: "rouge", hint: "颜色形容词放后面" },
        ]
      },
    ]
  },
  // ===== 第八单元：过去时 A2-B1 =====
  {
    unit: 8, unitTitle: "过去时态", unitDesc: "Passé Composé 与 Imparfait",
    lessons: [
      {
        id: 20, title: "Passé Composé（复合过去时）", goal: "掌握最常用的过去时态",
        vocab: [
          { word: "j'ai parlé", meaning: "我说了", example: "J'ai parlé français aujourd'hui.", audio: "j'ai parlé" },
          { word: "je suis allé(e)", meaning: "我去了", example: "Je suis allé(e) au cinéma.", audio: "je suis allé" },
          { word: "j'ai mangé", meaning: "我吃了", example: "J'ai mangé une pomme.", audio: "j'ai mangé" },
          { word: "j'ai fini", meaning: "我完成了", example: "J'ai fini mon travail.", audio: "j'ai fini" },
          { word: "je suis venu(e)", meaning: "我来了", example: "Je suis venu(e) hier.", audio: "je suis venu" },
          { word: "je suis né(e)", meaning: "我出生了", example: "Je suis né(e) en 2000.", audio: "je suis né" },
        ],
        grammar: { title: "Passé Composé 构成", content: "Passé Composé = 助动词(avoir/être) + 过去分词\n\n用 avoir（大多数动词）：\nJ'ai parlé. (我说了)\nJ'ai mangé. (我吃了)\nIl a fini. (他完成了)\n\n用 être（16个运动/状态动词 + 所有代词式动词）：\nJe suis allé(e). (我去了)\nJe suis venu(e). (我来了)\nJe suis né(e). (我出生了)\nJe suis parti(e). (我走了)\nJe suis arrivé(e). (我到了)\nJe suis monté(e)/descendu(e). (上了/下了)\nJe suis entré(e)/sorti(e). (进了/出了)\nJe suis resté(e). (我留下了)\nJe suis mort(e). (我死了)\nJe suis tombé(e). (我摔了)\nJe suis revenu(e). (我回来了)\nJe suis devenu(e). (我变成了)\n\n记忆口诀：DR MRS VANDERTRAMP\n\n过去分词规则：\n-er → -é (parlé)\n-ir → -i (fini)\n-re → -u (vendu)\n\nêtre动词的过去分词要配合主语的阴阳性！", tip: "用être的动词都是'移动/变化'相关的！DR MRS VANDERTRAMP" },
        dialogue: [
          { role: "A", text: "Qu'est-ce que tu as fait hier?", cn: "你昨天做了什么？" },
          { role: "B", text: "Je suis allé(e) au marché. J'ai acheté des fruits.", cn: "我去了市场。买了水果。" },
          { role: "A", text: "Tu as mangé quoi?", cn: "你吃了什么？" },
          { role: "B", text: "J'ai mangé des fraises. C'était délicieux!", cn: "我吃了草莓。太好吃了！" },
        ],
        practice: [
          { type: "fill", question: "Je ___ parlé français. (我说了)", answer: "ai", hint: "avoir助动词" },
          { type: "choice", question: "'aller' 的助动词是?", options: ["avoir", "être", "faire", "aller"], answer: 1 },
        ]
      },
      {
        id: 21, title: "Imparfait（未完成过去时）", goal: "掌握描述过去的时态",
        vocab: [
          { word: "je parlais", meaning: "我当时在说", example: "Je parlais français quand j'étais petit.", audio: "je parlais" },
          { word: "je finissais", meaning: "我当时在结束", example: "Je finissais toujours en retard.", audio: "je finissais" },
          { word: "autrefois", meaning: "从前", example: "Autrefois, je jouais au foot.", audio: "autrefois" },
          { word: "d'habitude", meaning: "通常", example: "D'habitude, je me levais tard.", audio: "d'habitude" },
          { word: "tous les jours", meaning: "每天", example: "Tous les jours, je lisais un livre.", audio: "tous les jours" },
        ],
        grammar: { title: "Imparfait 构成与用法", content: "Imparfait = nous的现在时词干 + -ais, -ais, -ait, -ions, -iez, -aient\n\nparler → nous parlons → parl- → je parlais\nfinir → nous finissons → finiss- → je finissais\n\n用法（核心！）：\n1. 过去的习惯：Quand j'étais petit, je jouais au foot. (小时候我经常踢球)\n2. 过去的描述：Il faisait beau. (当时天气很好)\n3. 过去的持续状态：Je dormais quand tu es arrivé. (你到的时候我在睡觉)\n\nPassé Composé vs Imparfait：\nPC = 一次性完成的动作（事件）→ J'ai mangé. (我吃了)\nIMP = 背景/习惯/持续（画面）→ Je mangeais. (我那时在吃)\n\n比喻：\nIMP = 电影的背景画面\nPC = 突然发生的事件\n→ Je regardais la télé (背景) quand le téléphone a sonné (事件)", tip: "IMP是'过去的照片'，PC是'过去的事件'！" },
        dialogue: [
          { role: "A", text: "Quand tu étais petit, tu faisais quoi?", cn: "你小时候做什么？" },
          { role: "B", text: "Je jouais au foot tous les jours.", cn: "我每天踢球。" },
          { role: "A", text: "Et un jour, qu'est-ce qui s'est passé?", cn: "然后有一天发生了什么？" },
          { role: "B", text: "Un jour, j'ai trouvé un chien abandonné!", cn: "有一天我发现了一只被遗弃的狗！" },
        ],
        practice: [
          { type: "fill", question: "Quand j'___ petit, je jouais. (être的imparfait)", answer: "étais", hint: "être的imparfait第一人称" },
          { type: "choice", question: "描述过去的习惯用?", options: ["Passé composé", "Imparfait", "Présent", "Futur"], answer: 1 },
        ]
      },
    ]
  },
];

// ===== 高级课程 B1-C2 =====
export const advancedCurriculumData = [
  // ===== 第九单元：代词体系 B1 =====
  {
    unit: 9, unitTitle: "代词体系", unitDesc: "直接宾语、间接宾语、关系代词",
    lessons: [
      {
        id: 22, title: "直接宾语代词(COD)", goal: "用le/la/les替代名词",
        vocab: [
          { word: "le/la/les", meaning: "他/她/它们（直接宾语）", example: "Je le vois. (我看见他)", audio: "le la les" },
          { word: "me/te/nous/vous", meaning: "我/你/我们/你们", example: "Il me regarde. (他看着我)", audio: "me te nous vous" },
          { word: "les", meaning: "他们/她们（直接宾语）", example: "Je les connais. (我认识他们)", audio: "les" },
        ],
        grammar: { title: "COD 直接宾语代词", content: "直接宾语 = 动词直接跟的对象（不加介词）\n\nJe vois Pierre. → Je le vois. (我看见他)\nJe mange la pomme. → Je la mange. (我吃它)\nJe lis les livres. → Je les lis. (我读它们)\n\n位置：代词放在动词前\nIl me regarde. (他看着我)\nTu les connais? (你认识他们吗？)\n\n过去时中，COD前置时过去分词要配合：\nLa pomme? Je l'ai mangée. (加了e，因为la是阴性)\nLes lettres? Je les ai écrites. (加了es，因为les是阴性复数)", tip: "COD回答 Qu'est-ce que + 动词? 的问题" },
        dialogue: [
          { role: "A", text: "Tu connais Marie?", cn: "你认识Marie吗？" },
          { role: "B", text: "Oui, je la connais bien.", cn: "是的，我很认识她。" },
          { role: "A", text: "Et ses frères?", cn: "那她的兄弟们呢？" },
          { role: "B", text: "Je les connais aussi.", cn: "我也认识他们。" },
        ],
        practice: [
          { type: "fill", question: "Tu vois Marie? → Tu ___ vois. (她)", answer: "la", hint: "直接宾语代词（阴性单数）" },
        ]
      },
      {
        id: 23, title: "间接宾语代词(COI)", goal: "用lui/leur替代à+人",
        vocab: [
          { word: "lui", meaning: "给他/她（间接宾语）", example: "Je lui parle. (我跟他/她说话)", audio: "lui" },
          { word: "leur", meaning: "给他们/她们", example: "Je leur écris. (我给他们写信)", audio: "leur" },
          { word: "me/te/nous/vous", meaning: "我/你/我们/你们", example: "Il me dit bonjour. (他跟我说你好)", audio: "me te nous vous" },
        ],
        grammar: { title: "COI 间接宾语代词", content: "间接宾语 = 动词 + à + 人\n\nJe parle à Pierre. → Je lui parle. (我跟他说话)\nJe parle à Marie. → Je lui parle. (我跟她说话 — lui不分阴阳性！)\nJe parle aux enfants. → Je leur parle. (我跟他们说话)\n\nCOD vs COI 对比：\nJe vois Pierre. → Je le vois. (COD — 直接)\nJe parle à Pierre. → Je lui parle. (COI — à+人)\n\n注意：lui/leur 只用于人！\nJe pense à ça. → J'y pense. (用y，不用lui)\n\n常用+à动词：\nparler à, téléphoner à, répondre à, donner à, demander à", tip: "lui不分阴阳性！男的女的都是lui！" },
        dialogue: [
          { role: "A", text: "Tu as téléphoné à ton père?", cn: "你给你爸打电话了吗？" },
          { role: "B", text: "Oui, je lui ai téléphoné ce matin.", cn: "是的，我今天早上给他打了。" },
          { role: "A", text: "Et à ta mère?", cn: "那你妈呢？" },
          { role: "B", text: "Je lui téléphone tous les jours.", cn: "我每天给她打电话。" },
        ],
        practice: [
          { type: "fill", question: "Je parle à Pierre. → Je ___ parle.", answer: "lui", hint: "间接宾语代词" },
        ]
      },
      {
        id: 24, title: "关系代词：qui, que, où, dont", goal: "掌握关系从句",
        vocab: [
          { word: "qui", meaning: "谁/...的人（主语）", example: "L'homme qui parle est mon père.", audio: "qui" },
          { word: "que", meaning: "什么/...的东西（直接宾语）", example: "Le livre que je lis est bon.", audio: "que" },
          { word: "où", meaning: "哪里/...的地方", example: "La ville où j'habite est grande.", audio: "où" },
          { word: "dont", meaning: "...的（de的替代）", example: "Le film dont je parle est célèbre.", audio: "dont" },
          { word: "lequel/laquelle", meaning: "哪个（介词后）", example: "Lequel tu préfères?", audio: "lequel" },
        ],
        grammar: { title: "关系代词体系", content: "关系代词连接两个句子：\n\nqui — 做主语：\nL'homme qui parle = 说话的那个人\nLa femme qui chante = 唱歌的那个女人\n\nque — 做直接宾语：\nLe livre que je lis = 我在读的那本书\nLa chanson que j'écoute = 我在听的那首歌\n\noù — 做地点/时间状语：\nLa ville où j'habite = 我住的城市\nLe jour où je suis arrivé = 我到达的那天\n\ndont — 替代 de：\nLe film dont je parle = 我在说的那部电影\nL'ami dont j'ai besoin = 我需要的那个朋友\n\nlequel/laquelle/lesquels/lesquelles — 介词后：\nLequel tu préfères? = 你更喜欢哪个？\nAvec lequel tu viens? = 你跟哪个一起来？\n\nqui vs que 判断：\nqui + 动词 → 主语\nque + 主语 + 动词 → 宾语", tip: "qui做主语，que做宾语，dont替代de！" },
        dialogue: [
          { role: "A", text: "Tu connais le film dont tout le monde parle?", cn: "你知道大家都在说的那部电影吗？" },
          { role: "B", text: "Oui, celui que j'ai vu la semaine dernière?", cn: "是的，上周我看的那部？" },
          { role: "A", text: "C'est celui-là ! Le réalisateur qui l'a fait est génial.", cn: "就是那部！拍它的导演太棒了。" },
        ],
        practice: [
          { type: "fill", question: "L'homme ___ parle est mon père. (主语)", answer: "qui", hint: "关系代词（主语）" },
          { type: "fill", question: "Le livre ___ je lis est bon. (宾语)", answer: "que", hint: "关系代词（宾语）" },
        ]
      },
    ]
  },
  // ===== 第十单元：将来时与条件式 B1 =====
  {
    unit: 10, unitTitle: "将来时与条件式", unitDesc: "Futur simple, Futur proche, Conditionnel",
    lessons: [
      {
        id: 25, title: "Futur Simple（简单将来时）", goal: "掌握将来时的构成和用法",
        vocab: [
          { word: "je parlerai", meaning: "我将说", example: "Je parlerai français un jour.", audio: "je parlerai" },
          { word: "je finirai", meaning: "我将完成", example: "Je finirai ce livre demain.", audio: "je finirai" },
          { word: "j'irai", meaning: "我将去", example: "J'irai en France l'année prochaine.", audio: "j'irai" },
          { word: "je serai", meaning: "我将是", example: "Je serai content.", audio: "je serai" },
          { word: "j'aurai", meaning: "我将有", example: "J'aurai 26 ans demain.", audio: "j'aurai" },
          { word: "demain / l'année prochaine", meaning: "明天/明年", example: "Demain, il fera beau.", audio: "demain" },
        ],
        grammar: { title: "Futur Simple 构成", content: "Futur Simple = 不定式 + 词尾：-ai, -as, -a, -ons, -ez, -ont\n\n-er动词：parler → je parlerai, tu parleras, il parlera...\n-ir动词：finir → je finirai, tu finiras, il finira...\n\n不规则词干：\nêtre → ser- (je serai)\navoir → aur- (j'aurai)\naller → ir- (j'irai)\nfaire → fer- (je ferai)\nvenir → viendr- (je viendrai)\npouvoir → pourr- (je pourrai)\nvouloir → voudr- (je voudrai)\nvoir → verr- (je verrai)\nsavoir → saur- (je saurai)\ndevenir → deviendr- (je deviendrai)\n\n用法：\n1. 将来的事实：Demain, je partirai. (明天我将走)\n2. 预测：Il fera beau demain. (明天天气会好)\n3. 承诺：Je t'aiderai. (我会帮你的)\n\nFutur Proche（近期将来）= aller的现在时 + 不定式\nJe vais manger. (我即将吃饭 — 马上要做)", tip: "Futur Simple = 远期将来，Futur Proche = 近期将来" },
        dialogue: [
          { role: "A", text: "Qu'est-ce que tu feras l'année prochaine?", cn: "你明年将做什么？" },
          { role: "B", text: "J'irai en France pour étudier le français.", cn: "我将去法国学法语。" },
          { role: "A", text: "Tu resteras combien de temps?", cn: "你将待多久？" },
          { role: "B", text: "Je resterai six mois.", cn: "我将待六个月。" },
        ],
        practice: [
          { type: "fill", question: "Demain, je ___ en France. (aller)", answer: "irai", hint: "aller的将来时" },
          { type: "choice", question: "'我将会是' 法语是?", options: ["je suis", "je serai", "je vais", "j'aurai"], answer: 1 },
        ]
      },
      {
        id: 26, title: "Conditionnel（条件式）", goal: "掌握礼貌请求和假设表达",
        vocab: [
          { word: "je voudrais", meaning: "我想要（礼貌）", example: "Je voudrais un café, s'il vous plaît.", audio: "je voudrais" },
          { word: "je pourrais", meaning: "我能够（礼貌）", example: "Je pourrais vous aider?", audio: "je pourrais" },
          { word: "je devrais", meaning: "我应该", example: "Je devrais partir.", audio: "je devrais" },
          { word: "j'aimerais", meaning: "我会喜欢", example: "J'aimerais visiter Paris.", audio: "j'aimerais" },
          { word: "si + imparfait", meaning: "如果（假设）", example: "Si j'étais riche, je voyagerais.", audio: "si imparfait" },
        ],
        grammar: { title: "Conditionnel 构成与用法", content: "Conditionnel = Futur Simple 词干 + Imparfait 词尾\n\n词尾：-ais, -ais, -ait, -ions, -iez, -aient\n\nparler → je parlerais\nfinir → je finirais\nêtre → je serais\navoir → j'aurais\naller → j'irais\n\n用法：\n1. 礼貌请求：Je voudrais un café. (我想要一杯咖啡)\n2. 建议：Tu devrais étudier plus. (你应该多学习)\n3. 假设（si + imparfait）：\n   Si j'avais le temps, je voyagerais. (如果我有时间，我会旅行)\n   Si j'étais toi, je partirais. (如果我是你，我会走)\n\n4. 未确认的信息：\n   Il y aurait un accident. (据说有一场事故)\n\nSi 从句规则：\nSi + présent → futur (Si tu viens, je serai content)\nSi + imparfait → conditionnel (Si tu venais, je serais content)\nSi + plus-que-parfait → conditionnel passé (Si tu étais venu, j'aurais été content)", tip: "Je voudrais 是条件式！不是现在时！" },
        dialogue: [
          { role: "A", text: "Qu'est-ce que tu ferais si tu gagnais au loto?", cn: "如果你中彩票了你会做什么？" },
          { role: "B", text: "Si je gagnais, j'achèterais une maison en Provence.", cn: "如果我中了，我会在普罗旺斯买一栋房子。" },
          { role: "A", text: "Et tu voyagerais où?", cn: "那你会去哪旅行？" },
          { role: "B", text: "Je ferais le tour du monde !", cn: "我会环游世界！" },
        ],
        practice: [
          { type: "fill", question: "Je ___ un café. (我想要，礼貌)", answer: "voudrais", hint: "vouloir的条件式" },
          { type: "choice", question: "Si + imparfait → ?", options: ["présent", "futur", "conditionnel", "imparfait"], answer: 2 },
        ]
      },
    ]
  },
  // ===== 第十一单元：虚拟式 B2 =====
  {
    unit: 11, unitTitle: "虚拟式", unitDesc: "Le Subjonctif — 法语最高级的语法",
    lessons: [
      {
        id: 27, title: "Subjonctif 入门", goal: "理解虚拟式的概念和构成",
        vocab: [
          { word: "que je sois", meaning: "我是（虚拟式）", example: "Il faut que je sois à l'heure.", audio: "que je sois" },
          { word: "que j'aie", meaning: "我有（虚拟式）", example: "Il faut que j'aie du courage.", audio: "que j'aie" },
          { word: "que je fasse", meaning: "我做（虚拟式）", example: "Il veut que je fasse ça.", audio: "que je fasse" },
          { word: "que je puisse", meaning: "我能（虚拟式）", example: "J'espère que je puisse venir.", audio: "que je puisse" },
          { word: "il faut que", meaning: "必须（+虚拟式）", example: "Il faut que tu viennes.", audio: "il faut que" },
        ],
        grammar: { title: "虚拟式(Subjonctif)的概念", content: "虚拟式 = 表达主观意愿、情感、必要性的语式\n\n构成：\nque + je/tu/il/nous/vous/ils + 虚拟式变位\n\n规则变位（取ils的现在时词干 + -e, -es, -e, -ions, -iez, -ent）：\nparler → qu'ils parlent → que je parle\nfinir → qu'ils finissent → que je finisse\n\n常见虚拟式：\nêtre → que je sois, que tu sois, qu'il soit...\navoir → que j'aie, que tu aies, qu'il ait...\nfaire → que je fasse, que nous fassions...\naller → que j'aille, que nous allions...\npouvoir → que je puisse, que nous puissions...\nvouloir → que je veuille, que nous voulions...\nvenir → que je vienne, que nous venions...\n\n触发虚拟式的表达：\nIl faut que... (必须)\nJe veux que... (我希望)\nIl est important que... (重要的是)\nJe suis content que... (我很高兴)\nBien que... (虽然)\nPour que... (为了)", tip: "虚拟式表达的是'主观世界'——愿望、恐惧、必要性！" },
        dialogue: [
          { role: "A", text: "Il faut que tu fasses tes devoirs.", cn: "你必须做作业。" },
          { role: "B", text: "Je ne veux pas que tu me dises quoi faire!", cn: "我不要你告诉我该做什么！" },
          { role: "A", text: "C'est important que tu comprennes.", cn: "你理解这很重要。" },
          { role: "B", text: "D'accord, je ferai de mon mieux.", cn: "好吧，我会尽力。" },
        ],
        practice: [
          { type: "fill", question: "Il faut que tu ___ (faire 虚拟式)", answer: "fasses", hint: "faire的虚拟式" },
          { type: "choice", question: "'Il faut que' 后面用什么语式?", options: ["直陈式", "虚拟式", "条件式", "不定式"], answer: 1 },
        ]
      },
    ]
  },
  // ===== 第十二单元：法国社会与文化 B2 =====
  {
    unit: 12, unitTitle: "法国社会与文化", unitDesc: "了解法国，才能真正理解法语",
    lessons: [
      {
        id: 28, title: "法国美食文化", goal: "了解法国饮食文化和相关词汇",
        vocab: [
          { word: "le petit-déjeuner", meaning: "早餐", example: "Le petit-déjeuner est à 8h.", audio: "petit-déjeuner" },
          { word: "le déjeuner", meaning: "午餐", example: "On déjeune ensemble?", audio: "déjeuner" },
          { word: "le dîner", meaning: "晚餐", example: "Le dîner est à 20h.", audio: "dîner" },
          { word: "l'apéritif (l'apéro)", meaning: "开胃酒", example: "On prend un apéro?", audio: "apéritif" },
          { word: "le fromage", meaning: "奶酪", example: "On prend du fromage après le plat.", audio: "fromage" },
          { word: "la baguette", meaning: "法棍面包", example: "Une baguette, s'il vous plaît.", audio: "baguette" },
          { word: "le vin", meaning: "葡萄酒", example: "Un verre de vin rouge, s'il vous plaît.", audio: "vin" },
          { word: "bon appétit", meaning: "祝好胃口", example: "Bon appétit à tous!", audio: "bon appétit" },
        ],
        grammar: { title: "法国用餐文化", content: "法国用餐节奏（比中国慢很多）：\n\n早餐(petit-déjeuner) 7-9h：\n简单：咖啡+羊角面包\n\n午餐(déjeuner) 12-14h：\n前菜 + 主菜 + 奶酪/甜点 + 咖啡\n法国人午餐至少1小时！\n\n晚餐(dîner) 19-21h：\n正式的一餐，全家团聚\n\n开胃酒(apéro) 18-20h：\n饭前喝一杯，配小食\n\n用餐礼仪：\n- 手放桌上（不是腿上）\n- 面包直接放桌上\n- 不要要求加冰\n- 不要急着买单（service compris）\n- 说Bonjour是必须的\n\n南法特色：\n- 用橄榄油代替黄油\n- 更多香草(herbes de Provence)\n- 口味更清淡", tip: "法国人吃饭是享受，不是填饱肚子！" },
        dialogue: [
          { role: "A", text: "On va au restaurant ce soir?", cn: "今晚去餐厅吗？" },
          { role: "B", text: "D'accord ! On prend l'apéro d'abord?", cn: "好的！先喝个开胃酒？" },
          { role: "A", text: "Bonne idée ! Et après, on choisit un bon resto.", cn: "好主意！然后选个好餐厅。" },
          { role: "B", text: "Je connais un très bon bistrot près de chez moi.", cn: "我家附近有个很好的小餐馆。" },
        ],
        practice: [
          { type: "choice", question: "法国人午餐一般几点?", options: ["11-12点", "12-14点", "14-15点", "随时"], answer: 1 },
          { type: "fill", question: "Bon ___! (祝好胃口)", answer: "appétit", hint: "胃口" },
        ]
      },
    ]
  },
];
