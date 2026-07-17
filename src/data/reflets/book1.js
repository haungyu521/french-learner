/**
 * Reflets 1 — 走遍法国 第1册
 * 对标 Guy Capelle & Noelle Gidon 原版教材体系
 * 级别：A1→A2 | 12个单元 | 情景教学法
 * 人物线索：Laurent, Sophie, Thomas, Marie 等在巴黎的生活
 */
export const reflets1Data = [
  // ========== Unité 1 : Bonjour ! ==========
  {
    unit: 1, unitTitle: "Bonjour !", unitDesc: "问候与自我介绍，认识法国人",
    lessons: [
      {
        id: 'r1-u1-l1', title: "Leçon 1 — Se présenter", goal: "学会用法语介绍自己的姓名、国籍、职业",
        vocab: [
          { word: "Bonjour", meaning: "你好（白天）", example: "Bonjour, je m'appelle Laurent.", audio: "Bonjour" },
          { word: "Bonsoir", meaning: "晚上好", example: "Bonsoir, Madame.", audio: "Bonsoir" },
          { word: "je m'appelle", meaning: "我叫", example: "Je m'appelle Sophie.", audio: "je m'appelle" },
          { word: "comment", meaning: "怎么；如何", example: "Comment tu t'appelles?", audio: "comment" },
          { word: "tu", meaning: "你", example: "Tu es français?", audio: "tu" },
          { word: "vous", meaning: "您；你们", example: "Vous êtes français, Monsieur?", audio: "vous" },
          { word: "français / française", meaning: "法国人（男/女）", example: "Je suis française.", audio: "française" },
          { word: "chinois / chinoise", meaning: "中国人（男/女）", example: "Il est chinois.", audio: "chinois" },
          { word: "étudiant / étudiante", meaning: "大学生", example: "Je suis étudiante.", audio: "étudiante" },
          { word: "professeur", meaning: "老师", example: "Vous êtes professeur?", audio: "professeur" },
          { word: "enchanté(e)", meaning: "很高兴认识你", example: "Enchanté, Madame!", audio: "enchanté" },
          { word: "merci", meaning: "谢谢", example: "Merci beaucoup!", audio: "merci" },
        ],
        grammar: { title: "动词 être（是）的现在时变位", content: "être 是法语最重要的动词，表示\"是\"或\"存在\"：\n\nje suis — 我是\ntu es — 你是\nil/elle est — 他/她是\nnous sommes — 我们是\nvous êtes — 您是/你们是\nils/elles sont — 他们/她们是\n\n用法：\n- Je suis chinois. (我是中国人)\n- Tu es étudiant? (你是学生吗？)\n- Elle est professeur. (她是老师)\n\n注意：法语形容词要和主语的性别一致！\n- Je suis chinois. (男) / Je suis chinoise. (女)\n- Il est étudiant. / Elle est étudiante.", tip: "记忆口诀：suis-es-est-sommes-êtes-sont，每天念三遍！" },
        dialogue: [
          { role: "Laurent", text: "Bonjour! Je m'appelle Laurent. Et toi?", cn: "你好！我叫Laurent。你呢？" },
          { role: "Sophie", text: "Moi, c'est Sophie. Je suis française. Tu es chinois?", cn: "我叫Sophie。我是法国人。你是中国人吗？" },
          { role: "Laurent", text: "Oui, je suis chinois. Je suis étudiant à Paris.", cn: "是的，我是中国人。我在巴黎上学。" },
          { role: "Sophie", text: "Enchantée! Moi aussi, je suis étudiante.", cn: "很高兴认识你！我也是学生。" },
          { role: "Laurent", text: "Tu étudies quoi?", cn: "你学什么？" },
          { role: "Sophie", text: "J'étudie le chinois. Et toi?", cn: "我学中文。你呢？" },
          { role: "Laurent", text: "Moi, j'étudie l'informatique.", cn: "我学计算机。" },
        ],
        practice: [
          { type: "fill", question: "Je ___ Laurent. (我叫Laurent)", answer: "m'appelle", hint: "自我介绍" },
          { type: "choice", question: "'您是老师吗？' 用法语怎么说?", options: ["Tu es professeur?", "Vous êtes professeur?", "Il est professeur?", "Je suis professeur."], answer: 1 },
          { type: "fill", question: "Elle ___ chinoise. (她是中国人)", answer: "est", hint: "être变位" },
          { type: "choice", question: "enchanté 的意思是?", options: ["谢谢", "再见", "很高兴认识你", "对不起"], answer: 2 },
        ]
      },
      {
        id: 'r1-u1-l2', title: "Leçon 2 — Les nationalités", goal: "学会谈论国籍，掌握形容词的阴阳性变化",
        vocab: [
          { word: "anglais / anglaise", meaning: "英国人", example: "Il est anglais.", audio: "anglais" },
          { word: "américain / américaine", meaning: "美国人", example: "Elle est américaine.", audio: "américaine" },
          { word: "allemand / allemande", meaning: "德国人", example: "Ils sont allemands.", audio: "allemand" },
          { word: "espagnol / espagnole", meaning: "西班牙人", example: "Elle est espagnole.", audio: "espagnole" },
          { word: "italien / italienne", meaning: "意大利人", example: "Il est italien.", audio: "italien" },
          { word: "japonais / japonaise", meaning: "日本人", example: "Elle est japonaise.", audio: "japonaise" },
          { word: "la France", meaning: "法国", example: "Je viens de France.", audio: "la France" },
          { word: "la Chine", meaning: "中国", example: "Il vient de Chine.", audio: "la Chine" },
          { word: "venir de", meaning: "来自", example: "Je viens de Chine.", audio: "venir de" },
          { word: "habiter", meaning: "居住", example: "J'habite à Paris.", audio: "habiter" },
          { word: "Paris", meaning: "巴黎", example: "Paris est une belle ville.", audio: "Paris" },
          { word: "la langue", meaning: "语言", example: "Le français est une belle langue.", audio: "la langue" },
        ],
        grammar: { title: "形容词的阴阳性与国籍表达", content: "法语形容词必须和名词保持性数一致：\n\n阳性→阴性的变化规则：\n1. 一般规则：+e\n   chinois → chinoise, anglais → anglaise\n2. 以-e结尾：不变\n   belge → belge, suisse → suisse\n3. 以-er结尾：-er → -ère\n   français → française (特殊)\n4. 以-en结尾：-en → -enne\n   européen → européenne\n5. 以-et结尾：-et → -ète\n   complet → complète\n\n国籍表达：\n- 阳性：Il est chinois. / Il est français.\n- 阴性：Elle est chinoise. / Elle est française.\n- 复数阳：Ils sont chinois.\n- 复数阴：Elles sont chinoises.\n\n来自某国：venir de + 国名\n- Je viens de Chine. (我来自中国)\n- Il vient du Japon. (du = de + le)\n- Elle vient d'Espagne. (d' = de + 元音开头)", tip: "记住：在法语里，说国籍时形容词要配合主语的性别变化！C'est très important!" },
        dialogue: [
          { role: "Thomas", text: "Tu viens d'où, Marie?", cn: "你从哪来，Marie？" },
          { role: "Marie", text: "Je viens de France, de Lyon. Et toi?", cn: "我来自法国，里昂。你呢？" },
          { role: "Thomas", text: "Moi, je viens du Japon. J'habite à Paris maintenant.", cn: "我来自日本。我现在住在巴黎。" },
          { role: "Marie", text: "Tu parles français?", cn: "你会说法语吗？" },
          { role: "Thomas", text: "Un peu. Je parle japonais et un peu français.", cn: "一点。我说日语和一点法语。" },
          { role: "Marie", text: "Moi, je parle français et anglais.", cn: "我说法语和英语。" },
        ],
        practice: [
          { type: "fill", question: "Elle vient ___ Chine. (她来自中国)", answer: "de", hint: "来自" },
          { type: "choice", question: "英国人（女性）怎么说?", options: ["anglais", "anglaise", "angle", "anglese"], answer: 1 },
          { type: "fill", question: "Ils ___ japonais. (他们是日本人)", answer: "sont", hint: "être变位" },
          { type: "choice", question: "'我住在巴黎' 怎么说?", options: ["Je viens de Paris.", "J'habite à Paris.", "Je suis Paris.", "Je parle Paris."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unité 2 : Comment ça va ? ==========
  {
    unit: 2, unitTitle: "Comment ça va ?", unitDesc: "日常问候、数字0-31、感受表达",
    lessons: [
      {
        id: 'r1-u2-l1', title: "Leçon 1 — Les salutations", goal: "掌握各种问候方式，学会询问近况",
        vocab: [
          { word: "Comment ça va?", meaning: "怎么样？", example: "Salut, comment ça va?", audio: "Comment ça va" },
          { word: "Ça va bien", meaning: "很好", example: "Ça va bien, merci.", audio: "Ça va bien" },
          { word: "Ça va mal", meaning: "不好", example: "Non, ça va mal aujourd'hui.", audio: "Ça va mal" },
          { word: "Comme ci, comme ça", meaning: "一般般", example: "Comme ci, comme ça.", audio: "Comme ci comme ça" },
          { word: "Et toi?", meaning: "你呢？（非正式）", example: "Ça va? Et toi?", audio: "Et toi" },
          { word: "Et vous?", meaning: "您呢？（正式）", example: "Et vous, Monsieur?", audio: "Et vous" },
          { word: "Au revoir", meaning: "再见", example: "Au revoir, à demain!", audio: "Au revoir" },
          { word: "À demain", meaning: "明天见", example: "À demain, bonne soirée!", audio: "À demain" },
          { word: "À bientôt", meaning: "回头见", example: "À bientôt!", audio: "À bientôt" },
          { word: "Bonne journée", meaning: "祝你有美好的一天", example: "Bonne journée, Madame!", audio: "Bonne journée" },
          { word: "Bonne soirée", meaning: "祝你晚上愉快", example: "Bonne soirée et à demain!", audio: "Bonne soirée" },
          { word: "Bonne nuit", meaning: "晚安（睡觉前）", example: "Bonne nuit, dors bien!", audio: "Bonne nuit" },
        ],
        grammar: { title: "ça va 的多种用法", content: "ça va 是法语最万能的表达：\n\n1. 问句：Ça va? = 你好吗？\n   — Ça va bien, merci. (很好，谢谢)\n   — Ça va mal. (不好)\n   — Comme ci, comme ça. (一般般)\n   — Pas mal! (还不错)\n\n2. 陈述句：Ça va. = 还行/没问题。\n   — Tu as compris? (你懂了吗？)\n   — Oui, ça va. (嗯，没问题。)\n\n3. 搭配介词：\n   — Comment ça va? (怎么样？)\n   — Ça ne va pas. (不好)\n\n正式 vs 非正式：\n- 朋友之间：Salut! Ça va? Et toi?\n- 对长辈/陌生人：Bonjour! Comment allez-vous? Et vous?\n\naller 动词变位（ça va 来自 aller）：\nje vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont", tip: "在法国，每天进任何商店的第一句话都是 Bonjour! 这是基本礼貌！" },
        dialogue: [
          { role: "Sophie", text: "Salut Laurent! Comment ça va?", cn: "嗨Laurent！你好吗？" },
          { role: "Laurent", text: "Ça va bien, merci! Et toi?", cn: "很好，谢谢！你呢？" },
          { role: "Sophie", text: "Pas mal. Tu vas à la fac aujourd'hui?", cn: "还不错。你今天去大学吗？" },
          { role: "Laurent", text: "Oui, j'ai cours à 10 heures. Et toi?", cn: "是的，我10点有课。你呢？" },
          { role: "Sophie", text: "Moi aussi. On y va ensemble?", cn: "我也是。我们一起走？" },
          { role: "Laurent", text: "D'accord! Allons-y!", cn: "好的！走吧！" },
        ],
        practice: [
          { type: "choice", question: "朋友之间打招呼说'你好吗？'用?", options: ["Comment allez-vous?", "Comment ça va?", "Bonsoir", "Au revoir"], answer: 1 },
          { type: "fill", question: "Ça va bien, ___. (很好，谢谢)", answer: "merci", hint: "谢谢" },
          { type: "choice", question: "'À bientôt' 的意思是?", options: ["再见（永别）", "明天见", "回头见", "晚安"], answer: 2 },
        ]
      },
      {
        id: 'r1-u2-l2', title: "Leçon 2 — Les nombres (0-31)", goal: "掌握0-31的数字，用于日期、年龄等",
        vocab: [
          { word: "zéro", meaning: "0", example: "Zéro.", audio: "zéro" },
          { word: "un / une", meaning: "1", example: "Un café, s'il vous plaît.", audio: "un" },
          { word: "deux", meaning: "2", example: "Deux tickets, s'il vous plaît.", audio: "deux" },
          { word: "trois", meaning: "3", example: "Trois personnes.", audio: "trois" },
          { word: "quatre", meaning: "4", example: "Quatre euros.", audio: "quatre" },
          { word: "cinq", meaning: "5", example: "Cinq minutes.", audio: "cinq" },
          { word: "six", meaning: "6", example: "Six mois.", audio: "six" },
          { word: "sept", meaning: "7", example: "Sept jours.", audio: "sept" },
          { word: "huit", meaning: "8", example: "Huit heures.", audio: "huit" },
          { word: "neuf", meaning: "9", example: "Neuf euros.", audio: "neuf" },
          { word: "dix", meaning: "10", example: "Dix personnes.", audio: "dix" },
          { word: "onze", meaning: "11", example: "Onze heures.", audio: "onze" },
          { word: "douze", meaning: "12", example: "Douze mois.", audio: "douze" },
          { word: "treize", meaning: "13", example: "Treize euros.", audio: "treize" },
          { word: "quatorze", meaning: "14", example: "Quatorze jours.", audio: "quatorze" },
          { word: "quinze", meaning: "15", example: "Quinze minutes.", audio: "quinze" },
          { word: "seize", meaning: "16", example: "Seize ans.", audio: "seize" },
          { word: "dix-sept", meaning: "17", example: "Dix-sept étudiants.", audio: "dix-sept" },
          { word: "dix-huit", meaning: "18", example: "Dix-huit heures.", audio: "dix-huit" },
          { word: "dix-neuf", meaning: "19", example: "Dix-neuf euros.", audio: "dix-neuf" },
          { word: "vingt", meaning: "20", example: "Vingt personnes.", audio: "vingt" },
          { word: "vingt et un", meaning: "21", example: "Vingt et un ans.", audio: "vingt et un" },
          { word: "vingt-deux", meaning: "22", example: "Vingt-deux euros.", audio: "vingt-deux" },
          { word: "trente", meaning: "30", example: "Trente jours.", audio: "trente" },
          { word: "trente et un", meaning: "31", example: "Le trente et un décembre.", audio: "trente et un" },
        ],
        grammar: { title: "数字的使用场景", content: "数字在法语中的常见用法：\n\n1. 年龄：\n   — Tu as quel âge? (你多大？)\n   — J'ai vingt ans. (我20岁)\n   注意：法语用 avoir（有）来表示年龄，不用 être！\n   J'ai 20 ans. ≠ Je suis 20 ans. (错！)\n\n2. 价格：\n   — Ça coûte combien? (多少钱？)\n   — Ça fait dix euros. (一共10欧元)\n\n3. 电话号码：\n   — Quel est ton numéro? (你电话号码多少？)\n   — C'est le zéro six... (是06...)\n\n4. 日期：\n   — Quel jour sommes-nous? (今天几号？)\n   — Nous sommes le cinq mars. (3月5号)\n\n数字规律：\n- 1-16 各有独立名称\n- 17-19 = dix + 个位 (dix-sept, dix-huit, dix-neuf)\n- 20, 30 各有独立名称\n- 21, 31 = vingt/trente + et + un\n- 22-29 = vingt + 个位 (vingt-deux, vingt-trois...)", tip: "法语数字从70开始变疯狂！70=60+10, 80=4×20, 90=4×20+10。但第一册只需掌握到31。" },
        dialogue: [
          { role: "A", text: "Tu as quel âge, Thomas?", cn: "你多大，Thomas？" },
          { role: "Thomas", text: "J'ai vingt et un ans. Et toi?", cn: "我21岁。你呢？" },
          { role: "A", text: "Moi, j'ai vingt-trois ans.", cn: "我23岁。" },
          { role: "Thomas", text: "Ton numéro de téléphone, c'est quoi?", cn: "你电话号码是什么？" },
          { role: "A", text: "C'est le zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit.", cn: "是06, 12, 34, 56, 78。" },
        ],
        practice: [
          { type: "fill", question: "J'ai ___ ans. (我20岁)", answer: "vingt", hint: "20" },
          { type: "choice", question: "15 用法语怎么说?", options: ["cinq", "cinquante", "quinze", "quatorze"], answer: 2 },
          { type: "fill", question: "___ et un (21)", answer: "vingt", hint: "20+1" },
          { type: "choice", question: "法语说'我20岁'用哪个动词?", options: ["être (suis)", "avoir (ai)", "faire (fais)", "aller (vais)"], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unité 3 : La famille ==========
  {
    unit: 3, unitTitle: "La famille", unitDesc: "家庭成员、描述外貌与性格",
    lessons: [
      {
        id: 'r1-u3-l1', title: "Leçon 1 — Les membres de la famille", goal: "掌握家庭成员称谓，学会用物主形容词",
        vocab: [
          { word: "le père", meaning: "父亲", example: "Mon père s'appelle Pierre.", audio: "le père" },
          { word: "la mère", meaning: "母亲", example: "Ma mère est professeur.", audio: "la mère" },
          { word: "le frère", meaning: "兄弟", example: "J'ai un frère.", audio: "le frère" },
          { word: "la sœur", meaning: "姐妹", example: "Ma sœur a vingt ans.", audio: "la sœur" },
          { word: "le fils", meaning: "儿子", example: "C'est mon fils.", audio: "le fils" },
          { word: "la fille", meaning: "女儿；女孩", example: "C'est ma fille.", audio: "la fille" },
          { word: "le grand-père", meaning: "祖父", example: "Mon grand-père a 80 ans.", audio: "le grand-père" },
          { word: "la grand-mère", meaning: "祖母", example: "Ma grand-mère habite à Lyon.", audio: "la grand-mère" },
          { word: "l'oncle (m.)", meaning: "叔叔/舅舅", example: "Mon oncle habite à Marseille.", audio: "l'oncle" },
          { word: "la tante", meaning: "阿姨/姑姑", example: "Ma tante est médecin.", audio: "la tante" },
          { word: "le cousin / la cousine", meaning: "堂/表兄弟姐妹", example: "J'ai deux cousins.", audio: "le cousin" },
          { word: "la famille", meaning: "家庭", example: "Ma famille est grande.", audio: "la famille" },
        ],
        grammar: { title: "主有形容词 (mon/ma/mes...)", content: "法语的主有形容词要和\"拥有的东西\"的性别一致，不是和拥有者一致：\n\n单数阳性：mon (我的), ton (你的), son (他/她的)\n单数阴性：ma (我的), ta (你的), sa (他/她的)\n复数：mes (我的), tes (你的), ses (他/她的)\n\n我们：notre (单数), nos (复数)\n你们：votre (单数), vos (复数)\n他们：leur (单数), leurs (复数)\n\n规则：\n- 拥有的东西是阳性 → mon/ton/son\n  mon père, mon frère, mon oncle\n- 拥有的东西是阴性 → ma/ta/sa\n  ma mère, ma sœur, ma tante\n- 拥有的东西是复数 → mes/tes/ses\n  mes parents, mes frères, mes sœurs\n\n特殊情况：阴性词以元音开头时用 mon/ton/son\nmon amie (我的女朋友), mon école (我的学校)", tip: "注意：ma sœur ≠ mon sœur! 但如果阴性词以元音开头：mon amie (不是 ma amie)" },
        dialogue: [
          { role: "Sophie", text: "Tu as des frères et sœurs, Laurent?", cn: "你有兄弟姐妹吗，Laurent？" },
          { role: "Laurent", text: "Oui, j'ai un frère et une sœur. Mon frère s'appelle Marc.", cn: "有，我有一个哥哥和一个妹妹。我哥哥叫Marc。" },
          { role: "Sophie", text: "Il a quel âge?", cn: "他多大？" },
          { role: "Laurent", text: "Il a vingt-cinq ans. Et ma sœur a dix-huit ans.", cn: "他25岁。我妹妹18岁。" },
          { role: "Sophie", text: "Et tes parents, ils font quoi?", cn: "你父母做什么工作？" },
          { role: "Laurent", text: "Mon père est ingénieur et ma mère est médecin.", cn: "我父亲是工程师，母亲是医生。" },
        ],
        practice: [
          { type: "fill", question: "___ mère est professeur. (我的母亲是老师)", answer: "Ma", hint: "主有形容词+阴性" },
          { type: "choice", question: "'他的姐姐' 怎么说?", options: ["mon frère", "sa sœur", "son frère", "ma sœur"], answer: 1 },
          { type: "fill", question: "J'ai ___ frère. (我有一个哥哥)", answer: "un", hint: "不定冠词阳性" },
          { type: "choice", question: "'我们的家庭' 怎么说?", options: ["mon famille", "ma famille", "notre famille", "votre famille"], answer: 2 },
        ]
      },
      {
        id: 'r1-u3-l2', title: "Leçon 2 — Décrire les personnes", goal: "学会描述人的外貌和性格",
        vocab: [
          { word: "grand / grande", meaning: "高的", example: "Il est grand.", audio: "grand" },
          { word: "petit / petite", meaning: "矮的；小的", example: "Elle est petite.", audio: "petite" },
          { word: "blond / blonde", meaning: "金发的", example: "Elle est blonde.", audio: "blonde" },
          { word: "brun / brune", meaning: "棕发的", example: "Il est brun.", audio: "brun" },
          { word: "les yeux", meaning: "眼睛", example: "Elle a les yeux bleus.", audio: "les yeux" },
          { word: "les cheveux", meaning: "头发", example: "Il a les cheveux noirs.", audio: "les cheveux" },
          { word: "gentil / gentille", meaning: "善良的", example: "Elle est très gentille.", audio: "gentille" },
          { word: "sympa (thique)", meaning: "好的，讨人喜欢的", example: "Il est très sympa.", audio: "sympa" },
          { word: "intelligent / intelligente", meaning: "聪明的", example: "Elle est intelligente.", audio: "intelligente" },
          { word: "drôle", meaning: "有趣的", example: "Il est très drôle.", audio: "drôle" },
          { word: "sérieux / sérieuse", meaning: "认真的", example: "Elle est sérieuse.", audio: "sérieuse" },
          { word: "avoir ... ans", meaning: "...岁", example: "J'ai vingt ans.", audio: "avoir ans" },
        ],
        grammar: { title: "描述人：être + 形容词 / avoir + 名词", content: "描述人用两种结构：\n\n1. être + 形容词（描述性格、身高、发色等）：\n   Il est grand. (他很高)\n   Elle est blonde. (她是金发)\n   Ils sont sympas. (他们很好)\n   注意：形容词要和主语保持性数一致！\n\n2. avoir + 名词（描述眼睛、头发等身体部位）：\n   Il a les yeux bleus. (他有蓝眼睛)\n   Elle a les cheveux longs. (她有长头发)\n   注意：身体部位前用定冠词 les/les\n\n常用形容词配合：\n- grand/grande (高)\n- petit/petite (矮)\n- blond/blonde (金发)\n- brun/brune (棕发)\n- gentil/gentille (善良)\n- sérieux/sérieuse (认真)\n- intelligent/intelligente (聪明)\n- sportif/sportive (爱运动)", tip: "法语形容词通常放在名词后面（和中文不同）：un garçon intelligent (不是 un intelligent garçon)" },
        dialogue: [
          { role: "A", text: "C'est qui, cette fille?", cn: "那个女孩是谁？" },
          { role: "B", text: "C'est Marie, ma cousine. Elle est grande et blonde.", cn: "是Marie，我的表姐。她又高又是金发。" },
          { role: "A", text: "Elle a quel âge?", cn: "她多大？" },
          { role: "B", text: "Elle a vingt-deux ans. Elle est très sympa et intelligente.", cn: "她22岁。她人很好，也很聪明。" },
          { role: "A", text: "Et le garçon à côté d'elle?", cn: "她旁边那个男孩呢？" },
          { role: "B", text: "C'est son frère. Il est brun et un peu petit.", cn: "是她弟弟。他是棕发，有点矮。" },
        ],
        practice: [
          { type: "fill", question: "Elle ___ les yeux bleus. (她有蓝眼睛)", answer: "a", hint: "avoir变位" },
          { type: "choice", question: "形容一个女生'善良的'怎么说?", options: ["gentil", "gentille", "gentils", "gentilles"], answer: 1 },
          { type: "fill", question: "Il est grand et ___. (他又高又是棕发)", answer: "brun", hint: "棕发(阳性)" },
        ]
      },
    ]
  },
  // ========== Unité 4 : Au café ==========
  {
    unit: 4, unitTitle: "Au café", unitDesc: "在咖啡馆点餐、食物与饮料、部分冠词",
    lessons: [
      {
        id: 'r1-u4-l1', title: "Leçon 1 — Commander au café", goal: "学会在咖啡馆点餐，掌握礼貌用语",
        vocab: [
          { word: "un café", meaning: "一杯咖啡", example: "Un café, s'il vous plaît.", audio: "un café" },
          { word: "un thé", meaning: "一杯茶", example: "Un thé au lait, s'il vous plaît.", audio: "un thé" },
          { word: "un verre de vin", meaning: "一杯葡萄酒", example: "Un verre de vin rouge.", audio: "un verre de vin" },
          { word: "une bière", meaning: "一杯啤酒", example: "Une bière pression.", audio: "une bière" },
          { word: "de l'eau", meaning: "水", example: "De l'eau minérale, s'il vous plaît.", audio: "de l'eau" },
          { word: "un jus de fruit", meaning: "一杯果汁", example: "Un jus d'orange.", audio: "un jus de fruit" },
          { word: "l'addition", meaning: "账单", example: "L'addition, s'il vous plaît!", audio: "l'addition" },
          { word: "le menu / la carte", meaning: "套餐菜单 / 点菜菜单", example: "Le menu, s'il vous plaît.", audio: "le menu" },
          { word: "je voudrais", meaning: "我想要", example: "Je voudrais un café.", audio: "je voudrais" },
          { word: "s'il vous plaît", meaning: "请", example: "Un café, s'il vous plaît.", audio: "s'il vous plaît" },
          { word: "combien", meaning: "多少", example: "Ça coûte combien?", audio: "combien" },
          { word: "l'euro", meaning: "欧元", example: "Ça fait trois euros.", audio: "l'euro" },
        ],
        grammar: { title: "部分冠词 (du, de la, de l')", content: "部分冠词用于不可数名词前，表示\"一些\"：\n\n阳性单数前：du\n— du café (一些咖啡), du pain (一些面包)\n\n阴性单数前：de la\n— de la confiture (一些果酱), de la viande (一些肉)\n\n元音开头前：de l'\n— de l'eau (一些水), de l'huile (一些油)\n\n对比：\n- un café = 一杯咖啡（整个单位）\n- du café = 一些咖啡（不可数）\n\n在否定句中，部分冠词全部变成 de：\n— Je bois du café. → Je ne bois pas de café.\n— Il mange de la viande. → Il ne mange pas de viande.\n\n常用搭配：\n- Je voudrais du café. (我想要一些咖啡)\n- Vous avez de l'eau? (您有水吗？)\n- Il prend du thé. (他喝茶)", tip: "在法国咖啡馆，服务员不会主动来结账！你需要主动喊 L'addition, s'il vous plaît!" },
        dialogue: [
          { role: "Serveur", text: "Bonjour! Vous désirez?", cn: "你好！您要什么？" },
          { role: "Laurent", text: "Je voudrais un café, s'il vous plaît.", cn: "我想要一杯咖啡。" },
          { role: "Serveur", text: "Avec du sucre ou sans sucre?", cn: "加糖还是不加糖？" },
          { role: "Laurent", text: "Avec du sucre, s'il vous plaît. Et aussi un croissant.", cn: "加糖。还要一个羊角面包。" },
          { role: "Serveur", text: "Voilà! Ça fait quatre euros cinquante.", cn: "给您！一共4欧50。" },
          { role: "Laurent", text: "Tenez, monsieur. Merci.", cn: "给您。谢谢。" },
          { role: "Serveur", text: "Merci, monsieur. Bonne journée!", cn: "谢谢。祝您有美好的一天！" },
        ],
        practice: [
          { type: "fill", question: "Je voudrais ___ café. (我想要一杯咖啡)", answer: "un", hint: "不定冠词" },
          { type: "choice", question: "'请结账' 怎么说?", options: ["Le menu, s'il vous plaît.", "L'addition, s'il vous plaît.", "Un café, s'il vous plaît.", "Combien de café?"], answer: 1 },
          { type: "fill", question: "Je bois ___ eau. (我喝水)", answer: "de l'", hint: "部分冠词+元音开头" },
          { type: "choice", question: "du 是什么冠词?", options: ["不定冠词", "定冠词", "部分冠词", "缩合冠词"], answer: 2 },
        ]
      },
      {
        id: 'r1-u4-l2', title: "Leçon 2 — Les aliments", goal: "认识常见食物，学会在面包店购物",
        vocab: [
          { word: "le pain", meaning: "面包", example: "Une baguette de pain.", audio: "le pain" },
          { word: "la baguette", meaning: "法棍面包", example: "Une baguette, s'il vous plaît.", audio: "la baguette" },
          { word: "le croissant", meaning: "羊角面包", example: "Un croissant au beurre.", audio: "le croissant" },
          { word: "le fromage", meaning: "奶酪", example: "Du fromage de chèvre.", audio: "le fromage" },
          { word: "le beurre", meaning: "黄油", example: "Du beurre frais.", audio: "le beurre" },
          { word: "le lait", meaning: "牛奶", example: "Un litre de lait.", audio: "le lait" },
          { word: "les œufs", meaning: "鸡蛋", example: "Six œufs, s'il vous plaît.", audio: "les œufs" },
          { word: "la viande", meaning: "肉", example: "De la viande de bœuf.", audio: "la viande" },
          { word: "le poulet", meaning: "鸡肉", example: "Du poulet rôti.", audio: "le poulet" },
          { word: "le poisson", meaning: "鱼", example: "Du poisson frais.", audio: "le poisson" },
          { word: "les fruits", meaning: "水果", example: "Des fruits frais.", audio: "les fruits" },
          { word: "les légumes", meaning: "蔬菜", example: "Des légumes verts.", audio: "les légumes" },
          { word: "le sucre", meaning: "糖", example: "Du sucre, s'il vous plaît.", audio: "le sucre" },
          { word: "le sel", meaning: "盐", example: "Passé-moi le sel.", audio: "le sel" },
        ],
        grammar: { title: "不定冠词 un/une/des 与部分冠词 du/de la/de l'", content: "法语有两类\"一些\"的表达：\n\n1. 不定冠词（可数名词）：\n   un (阳性单数)：un café, un croissant\n   une (阴性单数)：une baguette, une bière\n   des (复数)：des œufs, des fruits\n\n2. 部分冠词（不可数名词）：\n   du (= de + le)：du pain, du fromage\n   de la：de la viande, de la confiture\n   de l' (元音前)：de l'eau, de l'huile\n\n区别：\n— Je mange un croissant. (我吃了一个羊角面包 → 整个)\n— Je mange du fromage. (我吃了一些奶酪 → 一部分)\n\n否定句中：\n所有不定冠词和部分冠词在否定句中都变成 de：\n— J'ai un frère. → Je n'ai pas de frère.\n— Je mange du pain. → Je ne mange pas de pain.\n— Il achète des fruits. → Il n'achète pas de fruits.", tip: "法国人每天必买 baguette！面包店 (la boulangerie) 是法国生活的核心。" },
        dialogue: [
          { role: "Client", text: "Bonjour, madame. Je voudrais une baguette et deux croissants.", cn: "你好。我要一根法棍和两个羊角面包。" },
          { role: "Boulangère", text: "Voilà. Autre chose?", cn: "给您。还要别的吗？" },
          { role: "Client", text: "Oui, quatre œufs et un peu de fromage, s'il vous plaît.", cn: "要四个鸡蛋和一些奶酪。" },
          { role: "Boulangère", text: "Du fromage? Je suis boulangère, pas fromagère! Allez à la fromagerie.", cn: "奶酪？我是面包师，不是奶酪商！去奶酪店吧。" },
          { role: "Client", text: "Ah, pardon! Bonne journée!", cn: "啊，抱歉！祝您有美好的一天！" },
        ],
        practice: [
          { type: "fill", question: "Je mange ___ pain. (我吃面包)", answer: "du", hint: "部分冠词+阳性" },
          { type: "choice", question: "否定句 '我不吃肉'怎么说?", options: ["Je mange de la viande.", "Je ne mange pas de viande.", "Je ne mange du viande.", "Je mange pas la viande."], answer: 1 },
          { type: "fill", question: "___ baguette, s'il vous plaît. (一根法棍)", answer: "Une", hint: "不定冠词阴性" },
        ]
      },
    ]
  },
  // ========== Unité 5 : La ville ==========
  {
    unit: 5, unitTitle: "La ville", unitDesc: "城市设施、问路与指路、地点介词",
    lessons: [
      {
        id: 'r1-u5-l1', title: "Leçon 1 — Les lieux de la ville", goal: "认识城市中的各种场所",
        vocab: [
          { word: "la gare", meaning: "火车站", example: "La gare est loin?", audio: "la gare" },
          { word: "la poste", meaning: "邮局", example: "Où est la poste?", audio: "la poste" },
          { word: "la banque", meaning: "银行", example: "Je vais à la banque.", audio: "la banque" },
          { word: "la pharmacie", meaning: "药店", example: "La pharmacie est ouverte.", audio: "la pharmacie" },
          { word: "le marché", meaning: "市场", example: "Le marché est le dimanche.", audio: "le marché" },
          { word: "le musée", meaning: "博物馆", example: "Le musée du Louvre.", audio: "le musée" },
          { word: "l'église (f.)", meaning: "教堂", example: "L'église est belle.", audio: "l'église" },
          { word: "le restaurant", meaning: "餐厅", example: "Un bon restaurant.", audio: "le restaurant" },
          { word: "l'hôtel (m.)", meaning: "酒店", example: "Un hôtel près de la gare.", audio: "l'hôtel" },
          { word: "la bibliothèque", meaning: "图书馆", example: "Je vais à la bibliothèque.", audio: "la bibliothèque" },
          { word: "le cinéma", meaning: "电影院", example: "On va au cinéma?", audio: "le cinéma" },
          { word: "le supermarché", meaning: "超市", example: "Le supermarché est ouvert.", audio: "le supermarché" },
        ],
        grammar: { title: "地点介词：à, en, chez", content: "法语用不同介词表示\"去某地\"：\n\n1. à + 定冠词缩合：\n   - 阳性地点：à + le = au\n     au cinéma, au musée, au restaurant\n   - 阴性地点：à + la = à la\n     à la gare, à la poste, à la banque\n   - 元音开头：à + l' = à l'\n     à l'hôtel, à l'église\n   - 复数：à + les = aux\n     aux toilettes\n\n2. 特殊用法：\n   - chez + 人/职业 = 在某人那里\n     chez moi (在我家), chez le médecin (在医生那里)\n   - en + 阴性国名 = 在某国\n     en France, en Chine\n   - au + 阳性国名 = 在某国\n     au Japon, au Canada\n\n3. venir de 来自：\n   - Je viens de France. (我来自法国)\n   - Je viens du Japon. (du = de + le)", tip: "法国人说 au cinéma（去电影院），不说 à le cinéma！à+le 必须缩合成 au。" },
        dialogue: [
          { role: "Touriste", text: "Excusez-moi, où est la gare, s'il vous plaît?", cn: "打扰一下，请问火车站在哪？" },
          { role: "Passant", text: "La gare? C'est tout droit, puis à gauche.", cn: "火车站？直走，然后左转。" },
          { role: "Touriste", text: "C'est loin?", cn: "远吗？" },
          { role: "Passant", text: "Non, c'est à cinq minutes à pied. Vous ne pouvez pas la rater.", cn: "不远，走路五分钟。你不会错过的。" },
          { role: "Touriste", text: "Merci beaucoup!", cn: "非常感谢！" },
          { role: "Passant", text: "De rien! Bonne journée!", cn: "不客气！祝你有美好的一天！" },
        ],
        practice: [
          { type: "fill", question: "Je vais ___ cinéma. (我去电影院)", answer: "au", hint: "à+le缩合" },
          { type: "choice", question: "'邮局在哪？' 怎么说?", options: ["Où est la poste?", "Où est le poste?", "Où est poste?", "Où la poste?"], answer: 0 },
          { type: "fill", question: "Je vais ___ France. (我去法国)", answer: "en", hint: "介词+阴性国名" },
          { type: "choice", question: "à + le 缩合为?", options: ["al", "au", "à le", "aux"], answer: 1 },
        ]
      },
      {
        id: 'r1-u5-l2', title: "Leçon 2 — Se déplacer en ville", goal: "学会使用交通工具、理解方向指示",
        vocab: [
          { word: "le métro", meaning: "地铁", example: "Je prends le métro.", audio: "le métro" },
          { word: "le bus", meaning: "公交车", example: "Le bus numéro 38.", audio: "le bus" },
          { word: "le taxi", meaning: "出租车", example: "Un taxi, s'il vous plaît!", audio: "le taxi" },
          { word: "le vélo", meaning: "自行车", example: "Je vais à vélo.", audio: "le vélo" },
          { word: "à pied", meaning: "步行", example: "C'est à dix minutes à pied.", audio: "à pied" },
          { word: "tout droit", meaning: "直走", example: "Allez tout droit.", audio: "tout droit" },
          { word: "à gauche", meaning: "左转", example: "Tournez à gauche.", audio: "à gauche" },
          { word: "à droite", meaning: "右转", example: "Tournez à droite.", audio: "à droite" },
          { word: "le carrefour", meaning: "十字路口", example: "Au carrefour, tournez à gauche.", audio: "le carrefour" },
          { word: "la rue", meaning: "街道", example: "La rue est très longue.", audio: "la rue" },
          { word: "le pont", meaning: "桥", example: "Traversez le pont.", audio: "le pont" },
          { word: "la place", meaning: "广场", example: "La place de la République.", audio: "la place" },
        ],
        grammar: { title: "命令式与指路表达", content: "指路时常用命令式：\n\nAllez tout droit. (直走)\nTournez à gauche. (左转)\nTournez à droite. (右转)\nTraversez la rue. (过马路)\nPrenez la première à gauche. (在第一个路口左转)\nContinuez jusqu'au feu. (一直走到红绿灯)\n\n非正式（用tu）：\nVa tout droit. (直走)\nTourne à gauche. (左转)\n\n其他指路表达：\n- C'est loin? (远吗？)\n- C'est à cinq minutes. (五分钟就到了)\n- C'est près d'ici. (离这很近)\n- Vous ne pouvez pas le/la rater. (你不会错过的)\n- C'est au coin de la rue. (在街角)\n\nprendre 表示\"乘坐\"：\n- Je prends le métro. (我坐地铁)\n- On prend le bus? (我们坐公交？)\n- Prenez le taxi. (您打车吧)", tip: "巴黎地铁 (métro) 是欧洲最密集的地铁网络之一。学会看地铁图是在巴黎生活的必备技能！" },
        dialogue: [
          { role: "A", text: "Pour aller à la tour Eiffel, c'est comment?", cn: "去埃菲尔铁塔怎么走？" },
          { role: "B", text: "Prends le métro ligne 6. Descends à Bir-Hakeim.", cn: "坐6号线。在Bir-Hakeim下车。" },
          { role: "A", text: "C'est loin d'ici?", cn: "离这远吗？" },
          { role: "B", text: "Non, c'est à vingt minutes en métro.", cn: "不远，坐地铁20分钟。" },
          { role: "A", text: "Merci! Je prends un ticket aller simple?", cn: "谢谢！我买单程票？" },
          { role: "B", text: "Non, prends un carnet de dix tickets. C'est moins cher.", cn: "不，买一本10张的票。更便宜。" },
        ],
        practice: [
          { type: "fill", question: "Tournez ___ gauche. (左转)", answer: "à", hint: "介词" },
          { type: "choice", question: "'步行' 怎么说?", options: ["en voiture", "à pied", "en bus", "à vélo"], answer: 1 },
          { type: "fill", question: "Je prends ___ métro. (我坐地铁)", answer: "le", hint: "定冠词阳性" },
        ]
      },
    ]
  },
  // ========== Unité 6 : Les vêtements ==========
  {
    unit: 6, unitTitle: "Les vêtements", unitDesc: "服装购物、颜色、指示代词",
    lessons: [
      {
        id: 'r1-u6-l1', title: "Leçon 1 — Acheter des vêtements", goal: "学会在服装店购物，描述衣服",
        vocab: [
          { word: "un manteau", meaning: "大衣", example: "Un beau manteau.", audio: "un manteau" },
          { word: "une robe", meaning: "连衣裙", example: "Une robe bleue.", audio: "une robe" },
          { word: "un pull", meaning: "毛衣", example: "Un pull en laine.", audio: "un pull" },
          { word: "une chemise", meaning: "衬衫", example: "Une chemise blanche.", audio: "une chemise" },
          { word: "un pantalon", meaning: "裤子", example: "Un pantalon noir.", audio: "un pantalon" },
          { word: "une jupe", meaning: "裙子", example: "Une jupe courte.", audio: "une jupe" },
          { word: "des chaussures", meaning: "鞋子", example: "Des chaussures confortables.", audio: "des chaussures" },
          { word: "un T-shirt", meaning: "T恤", example: "Un T-shirt rouge.", audio: "un T-shirt" },
          { word: "la taille", meaning: "尺码", example: "Vous faites quelle taille?", audio: "la taille" },
          { word: "la couleur", meaning: "颜色", example: "Quelle couleur vous préférez?", audio: "la couleur" },
          { word: "essayer", meaning: "试穿", example: "Je peux essayer cette robe?", audio: "essayer" },
          { word: "la cabine", meaning: "试衣间", example: "Les cabines sont au fond.", audio: "la cabine" },
        ],
        grammar: { title: "指示形容词 ce/cet/cette/ces", content: "指示形容词表示\"这个/那个\"：\n\n阳性单数：ce\n— ce manteau (这件大衣), ce pull (这件毛衣)\n\n阳性单数（元音开头）：cet\n— cet hôtel (这家酒店), cet été (今年夏天)\n\n阴性单数：cette\n— cette robe (这条裙子), cette chemise (这件衬衫)\n\n复数：ces\n— ces chaussures (这些鞋), ces livres (这些书)\n\n对比主有形容词：\n- ce manteau = 这件大衣（指示）\n- mon manteau = 我的大衣（所有）\n\n购物常用句型：\n- Je voudrais ce manteau. (我想要这件大衣)\n- Cette robe est belle. (这条裙子很漂亮)\n- Ces chaussures sont chères. (这些鞋很贵)", tip: "法国打折季 (les soldes) 在每年一月和七月，持续4-6周，是购物的好时机！" },
        dialogue: [
          { role: "Cliente", text: "Bonjour, je cherche une robe pour une soirée.", cn: "你好，我在找一条晚会的裙子。" },
          { role: "Vendeuse", text: "Bien sûr. Quelle taille vous faites?", cn: "当然。您穿什么尺码？" },
          { role: "Cliente", text: "Je fais du 38. Je peux essayer celle-ci?", cn: "我穿38码。我能试穿这件吗？" },
          { role: "Vendeuse", text: "Bien sûr, les cabines sont au fond.", cn: "当然，试衣间在里面。" },
          { role: "Cliente", text: "Elle me va bien? Qu'est-ce que vous en pensez?", cn: "我穿好看吗？你觉得呢？" },
          { role: "Vendeuse", text: "Très bien! Elle vous va parfaitement.", cn: "很好看！非常合身。" },
          { role: "Cliente", text: "Combien ça coûte?", cn: "多少钱？" },
          { role: "Vendeuse", text: "Quarante-cinq euros.", cn: "45欧元。" },
        ],
        practice: [
          { type: "fill", question: "___ robe est belle. (这条裙子很漂亮)", answer: "Cette", hint: "指示形容词阴性" },
          { type: "choice", question: "'这件大衣' 怎么说?", options: ["cette manteau", "ce manteau", "cet manteau", "ces manteau"], answer: 1 },
          { type: "fill", question: "Je peux ___? (我能试穿吗？)", answer: "essayer", hint: "试穿" },
        ]
      },
      {
        id: 'r1-u6-l2', title: "Leçon 2 — Les couleurs", goal: "掌握颜色词汇，形容词配合",
        vocab: [
          { word: "rouge", meaning: "红色", example: "Une robe rouge.", audio: "rouge" },
          { word: "bleu / bleue", meaning: "蓝色", example: "Un pull bleu.", audio: "bleu" },
          { word: "vert / verte", meaning: "绿色", example: "Une écharpe verte.", audio: "vert" },
          { word: "jaune", meaning: "黄色", example: "Un T-shirt jaune.", audio: "jaune" },
          { word: "noir / noire", meaning: "黑色", example: "Un pantalon noir.", audio: "noir" },
          { word: "blanc / blanche", meaning: "白色", example: "Une chemise blanche.", audio: "blanc" },
          { word: "gris / grise", meaning: "灰色", example: "Un manteau gris.", audio: "gris" },
          { word: "marron", meaning: "棕色", example: "Des chaussures marron.", audio: "marron" },
          { word: "rose", meaning: "粉色", example: "Une robe rose.", audio: "rose" },
          { word: "orange", meaning: "橙色", example: "Un pull orange.", audio: "orange" },
        ],
        grammar: { title: "颜色形容词的配合与位置", content: "颜色形容词要和名词保持性数一致：\n\n一般规则：+e (阴性), +s (复数)\n- bleu → bleue → bleus → bleues\n- vert → verte → verts → vertes\n- noir → noire → noirs → noires\n- blanc → blanche → blancs → blanches\n\n不变化的颜色形容词：\n- marron (棕色) → 不变！des chaussures marron\n- orange (橙色) → 不变！un pull orange\n\n位置：\n大多数颜色形容词放在名词后面：\n- une robe rouge (一条红裙子)\n- un pantalon noir (一条黑裤子)\n\n但某些常用短形容词可以放前面：\n- un beau manteau noir\n- une belle robe blanche\n\n多个形容词修饰：\n- une grande robe rouge (一条大的红裙子)\n  顺序：大小 → 颜色 → 名词", tip: "marron 和 orange 是例外！它们作为颜色形容词时不变化。这是因为它们来自名词（栗子、橙子）。" },
        dialogue: [
          { role: "A", text: "J'aime beaucoup ta robe! Elle est de quelle couleur?", cn: "我很喜欢你的裙子！什么颜色的？" },
          { role: "B", text: "Elle est bleue. Je l'ai achetée aux soldes.", cn: "蓝色的。我在打折时买的。" },
          { role: "A", text: "Elle te va très bien. Tu as aussi une écharpe verte?", cn: "很适合你。你也有条绿色围巾？" },
          { role: "B", text: "Oui, elle est verte et grise.", cn: "有，绿色和灰色的。" },
        ],
        practice: [
          { type: "fill", question: "Une robe ___ (红色的裙子)", answer: "rouge", hint: "颜色" },
          { type: "choice", question: "'棕色的鞋子' 怎么说? (marron不变)", options: ["des chaussures marrons", "des chaussures marron", "des chaussures brunes", "des marron chaussures"], answer: 1 },
          { type: "fill", question: "Des yeux ___ (蓝色的眼睛)", answer: "bleus", hint: "bleu的阳性复数" },
        ]
      },
    ]
  },
  // ========== Unité 7 : Le corps et la santé ==========
  {
    unit: 7, unitTitle: "Le corps et la santé", unitDesc: "身体部位、看医生、描述不适",
    lessons: [
      {
        id: 'r1-u7-l1', title: "Leçon 1 — Le corps humain", goal: "掌握身体部位词汇，学会描述身体感受",
        vocab: [
          { word: "la tête", meaning: "头", example: "J'ai mal à la tête.", audio: "la tête" },
          { word: "le bras", meaning: "手臂", example: "Il s'est cassé le bras.", audio: "le bras" },
          { word: "la main", meaning: "手", example: "Lave-toi les mains.", audio: "la main" },
          { word: "la jambe", meaning: "腿", example: "J'ai mal à la jambe.", audio: "la jambe" },
          { word: "le pied", meaning: "脚", example: "J'ai mal au pied.", audio: "le pied" },
          { word: "le dos", meaning: "背", example: "J'ai mal au dos.", audio: "le dos" },
          { word: "le ventre", meaning: "肚子", example: "J'ai mal au ventre.", audio: "le ventre" },
          { word: "avoir mal à", meaning: "...疼", example: "J'ai mal à la tête.", audio: "avoir mal" },
          { word: "le médecin", meaning: "医生", example: "Je vais chez le médecin.", audio: "le médecin" },
          { word: "la fièvre", meaning: "发烧", example: "J'ai de la fièvre.", audio: "la fièvre" },
          { word: "le rhume", meaning: "感冒", example: "J'ai un rhume.", audio: "le rhume" },
          { word: "fatigué(e)", meaning: "累的", example: "Je suis très fatigué.", audio: "fatigué" },
        ],
        grammar: { title: "avoir mal à + 身体部位", content: "描述身体疼痛用 avoir mal à：\n\n结构：avoir mal + à + 定冠词 + 身体部位\n\n- J'ai mal à la tête. (我头疼)\n  → à + la = à la\n- J'ai mal au dos. (我背疼)\n  → à + le = au\n- J'ai mal aux dents. (我牙疼)\n  → à + les = aux\n- Il a mal au ventre. (他肚子疼)\n\n对比：\n- mal à la tête (头疼) → à la (阴性)\n- mal au dos (背疼) → au (阳性)\n- mal aux pieds (脚疼) → aux (复数)\n\n其他身体表达：\n- J'ai de la fièvre. (我发烧了)\n- J'ai froid. (我冷)\n- J'ai chaud. (我热)\n- J'ai faim. (我饿了)\n- J'ai soif. (我渴了)", tip: "在法国看医生，医生通常会说 Ouvrez la bouche（张嘴），Respirez（呼吸），然后开 une ordonnance（处方）。" },
        dialogue: [
          { role: "Médecin", text: "Qu'est-ce que vous avez?", cn: "您怎么了？" },
          { role: "Patient", text: "J'ai mal à la tête et j'ai de la fièvre.", cn: "我头疼，还发烧了。" },
          { role: "Médecin", text: "Depuis quand?", cn: "多久了？" },
          { role: "Patient", text: "Depuis trois jours.", cn: "三天了。" },
          { role: "Médecin", text: "Ouvrez la bouche... Vous avez une angine. Je vous prescris des antibiotiques.", cn: "张嘴...您得了扁桃体炎。我给您开抗生素。" },
          { role: "Patient", text: "D'accord, merci docteur.", cn: "好的，谢谢医生。" },
        ],
        practice: [
          { type: "fill", question: "J'ai mal ___ la tête. (我头疼)", answer: "à", hint: "介词" },
          { type: "choice", question: "'我背疼' 怎么说?", options: ["J'ai mal à la dos.", "J'ai mal au dos.", "J'ai mal aux dos.", "J'ai mal le dos."], answer: 1 },
          { type: "fill", question: "Depuis ___ jours. (三天了)", answer: "trois", hint: "数字" },
        ]
      },
    ]
  },
  // ========== Unité 8 : Le travail ==========
  {
    unit: 8, unitTitle: "Le travail", unitDesc: "职业、工作场所、日常安排",
    lessons: [
      {
        id: 'r1-u8-l1', title: "Leçon 1 — Les métiers", goal: "掌握常见职业词汇，谈论工作",
        vocab: [
          { word: "le métier", meaning: "职业", example: "Quel est votre métier?", audio: "le métier" },
          { word: "le médecin", meaning: "医生", example: "Je suis médecin.", audio: "le médecin" },
          { word: "l'avocat(e)", meaning: "律师", example: "Elle est avocate.", audio: "l'avocat" },
          { word: "l'ingénieur(e)", meaning: "工程师", example: "Il est ingénieur.", audio: "l'ingénieur" },
          { word: "le/la professeur", meaning: "老师", example: "Je suis professeur de français.", audio: "le professeur" },
          { word: "le commerçant / la commerçante", meaning: "商人", example: "Mon père est commerçant.", audio: "le commerçant" },
          { word: "l'infirmier/infirmière", meaning: "护士", example: "Elle est infirmière.", audio: "l'infirmière" },
          { word: "le cuisinier / la cuisinière", meaning: "厨师", example: "Il est cuisinier.", audio: "le cuisinier" },
          { word: "travailler", meaning: "工作", example: "Je travaille dans un bureau.", audio: "travailler" },
          { word: "le bureau", meaning: "办公室", example: "Mon bureau est au centre-ville.", audio: "le bureau" },
          { word: "l'entreprise (f.)", meaning: "公司", example: "Je travaille dans une entreprise.", audio: "l'entreprise" },
          { word: "le salaire", meaning: "工资", example: "Le salaire est correct.", audio: "le salaire" },
        ],
        grammar: { title: "动词 travailler 和 travailler 的用法", content: "travailler (-er类动词) 的现在时变位：\n\nje travaille — 我工作\ntu travailles — 你工作\nil/elle travaille — 他/她工作\nnous travaillons — 我们工作\nvous travaillez — 您工作\nils/elles travaillent — 他们工作\n\n注意：il travaille 和 je travaille 发音相同！\n\n工作相关表达：\n- Je travaille dans un bureau. (我在办公室工作)\n- Je travaille pour une entreprise. (我在一家公司工作)\n- Je travaille en tant que professeur. (我作为老师工作)\n- Je suis sans emploi. (我失业)\n- Je suis à la retraite. (我退休了)\n\n询问职业：\n- Qu'est-ce que tu fais dans la vie? (你是做什么的？)\n- Vous travaillez où? (你在哪工作？)\n- Tu aimes ton travail? (你喜欢你的工作吗？)", tip: "法国人很重视工作生活平衡。每周法定工作时间是35小时，每年至少5周带薪假期！" },
        dialogue: [
          { role: "A", text: "Tu fais quoi dans la vie, Sophie?", cn: "你做什么工作，Sophie？" },
          { role: "Sophie", text: "Je suis journaliste. Je travaille pour un magazine.", cn: "我是记者。我在一家杂志工作。" },
          { role: "A", text: "C'est intéressant! Tu travailles où?", cn: "很有意思！你在哪工作？" },
          { role: "Sophie", text: "Mon bureau est dans le 11e arrondissement de Paris.", cn: "我的办公室在巴黎第11区。" },
          { role: "A", text: "Et tu aimes ton travail?", cn: "你喜欢你的工作吗？" },
          { role: "Sophie", text: "Oui, j'adore! Je rencontre des gens intéressants tous les jours.", cn: "喜欢！我每天都能遇到有趣的人。" },
        ],
        practice: [
          { type: "fill", question: "Je ___ dans un bureau. (我在办公室工作)", answer: "travaille", hint: "travailler变位" },
          { type: "choice", question: "'你是做什么的？' 怎么说?", options: ["Tu es où?", "Tu fais quoi dans la vie?", "Tu travailles combien?", "Quel âge tu as?"], answer: 1 },
          { type: "fill", question: "Elle est ___. (她是护士)", answer: "infirmière", hint: "职业阴性" },
        ]
      },
    ]
  },
  // ========== Unité 9 : Les loisirs ==========
  {
    unit: 9, unitTitle: "Les loisirs", unitDesc: "爱好与休闲活动、运动、文化",
    lessons: [
      {
        id: 'r1-u9-l1', title: "Leçon 1 — Les hobbies", goal: "谈论自己的爱好和休闲活动",
        vocab: [
          { word: "le loisir", meaning: "休闲", example: "Quels sont tes loisirs?", audio: "le loisir" },
          { word: "le sport", meaning: "运动", example: "Je fais du sport.", audio: "le sport" },
          { word: "la musique", meaning: "音乐", example: "J'écoute de la musique.", audio: "la musique" },
          { word: "le cinéma", meaning: "电影", example: "J'adore le cinéma.", audio: "le cinéma" },
          { word: "la lecture", meaning: "阅读", example: "La lecture est mon hobby.", audio: "la lecture" },
          { word: "voyager", meaning: "旅行", example: "J'aime voyager.", audio: "voyager" },
          { word: "cuisiner", meaning: "做饭", example: "J'adore cuisiner.", audio: "cuisiner" },
          { word: "dessiner", meaning: "画画", example: "Je dessine bien.", audio: "dessiner" },
          { word: "aimer", meaning: "喜欢", example: "J'aime la musique.", audio: "aimer" },
          { word: "adorer", meaning: "非常喜欢", example: "J'adore le cinéma.", audio: "adorer" },
          { word: "détester", meaning: "讨厌", example: "Je déteste le sport.", audio: "détester" },
          { word: "préférer", meaning: "更喜欢", example: "Je préfère la lecture.", audio: "préférer" },
        ],
        grammar: { title: "aimer/adorer/détester + 名词/动词不定式", content: "表达喜好用 aimer, adorer, détester, préférer：\n\n+ 名词：\n- J'aime le sport. (我喜欢运动)\n- J'adore la musique. (我非常喜欢音乐)\n- Je déteste le cinéma. (我讨厌电影)\n\n+ 动词不定式：\n- J'aime voyager. (我喜欢旅行)\n- J'adore cuisiner. (我非常喜欢做饭)\n- Je déteste me lever tôt. (我讨厌早起)\n\n否定：\n- Je n'aime pas le sport. (我不喜欢运动)\n- Je n'aime pas voyager. (我不喜欢旅行)\n\n问句：\n- Qu'est-ce que tu aimes faire? (你喜欢做什么？)\n- Quels sont tes loisirs? (你的爱好是什么？)\n- Tu aimes la musique? (你喜欢音乐吗？)\n\n程度排序：\nadorer (非常喜欢) > aimer (喜欢) > bien aimer (挺喜欢) > ne pas aimer (不喜欢) > détester (讨厌)", tip: "法国人最流行的休闲活动：看足球、骑自行车、去电影院、在咖啡馆聊天！" },
        dialogue: [
          { role: "A", text: "Qu'est-ce que tu aimes faire le week-end?", cn: "你周末喜欢做什么？" },
          { role: "B", text: "J'aime faire du vélo et j'adore le cinéma.", cn: "我喜欢骑自行车，非常喜欢看电影。" },
          { role: "A", text: "Moi, je préfère la lecture. Et le soir?", cn: "我更喜欢阅读。晚上呢？" },
          { role: "B", text: "Le soir, je regarde la télé ou j'écoute de la musique.", cn: "晚上，我看电视或听音乐。" },
          { role: "A", text: "Tu aimes cuisiner?", cn: "你喜欢做饭吗？" },
          { role: "B", text: "Oui, j'adore! Je fais souvent des gâteaux.", cn: "喜欢！我经常做蛋糕。" },
        ],
        practice: [
          { type: "fill", question: "J'___ voyager. (我喜欢旅行)", answer: "aime", hint: "aimer变位" },
          { type: "choice", question: "'我非常喜欢音乐' 怎么说?", options: ["J'aime la musique.", "J'adore la musique.", "Je déteste la musique.", "Je préfère la musique."], answer: 1 },
          { type: "fill", question: "Qu'est-ce que tu aimes ___? (你喜欢做什么？)", answer: "faire", hint: "做" },
        ]
      },
    ]
  },
  // ========== Unité 10 : Le voyage ==========
  {
    unit: 10, unitTitle: "Le voyage", unitDesc: "旅行计划、预订酒店、描述旅行经历",
    lessons: [
      {
        id: 'r1-u10-l1', title: "Leçon 1 — Préparer un voyage", goal: "学会计划旅行、预订住宿",
        vocab: [
          { word: "le voyage", meaning: "旅行", example: "Je prépare un voyage.", audio: "le voyage" },
          { word: "le passeport", meaning: "护照", example: "N'oublie pas ton passeport!", audio: "le passeport" },
          { word: "la valise", meaning: "行李箱", example: "Je fais ma valise.", audio: "la valise" },
          { word: "le billet", meaning: "票", example: "Un billet aller-retour.", audio: "le billet" },
          { word: "l'avion (m.)", meaning: "飞机", example: "Je prends l'avion.", audio: "l'avion" },
          { word: "le train", meaning: "火车", example: "Le train part à 8 heures.", audio: "le train" },
          { word: "réserver", meaning: "预订", example: "Je réserve une chambre.", audio: "réserver" },
          { word: "la chambre", meaning: "房间", example: "Une chambre pour deux nuits.", audio: "la chambre" },
          { word: "le départ", meaning: "出发", example: "Le départ est à 7 heures.", audio: "le départ" },
          { word: "l'arrivée (f.)", meaning: "到达", example: "L'arrivée est à 18 heures.", audio: "l'arrivée" },
          { word: "le pays", meaning: "国家", example: "La France est un beau pays.", audio: "le pays" },
          { word: "la plage", meaning: "海滩", example: "On va à la plage.", audio: "la plage" },
        ],
        grammar: { title: "将来时 (aller + 动词不定式)", content: "表达即将发生的动作用近将来时：\n\n结构：aller 的现在时 + 动词不定式\n\nje vais partir — 我将出发\ntu vas venir — 你将到来\nil/elle va arriver — 他/她将要到达\nnous allons réserver — 我们将预订\nvous allez partir — 您将出发\nils/elles vont voyager — 他们将旅行\n\n用法：\n- Je vais voyager en France. (我将去法国旅行)\n- Nous allons réserver un hôtel. (我们将预订酒店)\n- Tu vas prendre l'avion? (你将坐飞机吗？)\n\n对比现在时：\n- Je voyage en France. (我去法国旅行 → 习惯性)\n- Je vais voyager en France. (我将去法国旅行 → 即将发生)\n\n旅行计划表达：\n- Je vais partir en vacances. (我将去度假)\n- On va aller à la plage. (我们将去海滩)\n- Il va faire un voyage. (他将去旅行)", tip: "法国人度假通常在八月，整个法国几乎\"放假\"一个月！南法 (le Sud) 是最受欢迎的度假目的地。" },
        dialogue: [
          { role: "A", text: "Tu vas où en vacances cet été?", cn: "你今年夏天去哪度假？" },
          { role: "B", text: "Je vais aller en Provence, dans le sud de la France.", cn: "我将去普罗旺斯，法国南部。" },
          { role: "A", text: "Super! Tu vas prendre le train?", cn: "太好了！你坐火车吗？" },
          { role: "B", text: "Oui, je vais réserver un billet de train. Et toi?", cn: "是的，我将预订火车票。你呢？" },
          { role: "A", text: "Moi, je vais rester à Paris. Je vais visiter des musées.", cn: "我留在巴黎。我将参观博物馆。" },
          { role: "B", text: "C'est bien aussi! Paris en été, c'est magnifique.", cn: "也很好！夏天的巴黎很美。" },
        ],
        practice: [
          { type: "fill", question: "Je ___ partir en voyage. (我将去旅行)", answer: "vais", hint: "aller变位" },
          { type: "choice", question: "'我们将预订酒店' 怎么说?", options: ["Nous réservons un hôtel.", "Nous allons réserver un hôtel.", "Nous avons réservé un hôtel.", "Nous réservons un hôtel."], answer: 1 },
          { type: "fill", question: "Le ___ est à 7 heures. (出发是7点)", answer: "départ", hint: "出发" },
        ]
      },
    ]
  },
  // ========== Unité 11 : Le temps qu'il fait ==========
  {
    unit: 11, unitTitle: "Le temps qu'il fait", unitDesc: "天气、季节、气候描述",
    lessons: [
      {
        id: 'r1-u11-l1', title: "Leçon 1 — La météo", goal: "学会谈论天气和季节",
        vocab: [
          { word: "le temps", meaning: "天气；时间", example: "Quel temps fait-il?", audio: "le temps" },
          { word: "le soleil", meaning: "太阳", example: "Il y a du soleil.", audio: "le soleil" },
          { word: "la pluie", meaning: "雨", example: "Il pleut.", audio: "la pluie" },
          { word: "le vent", meaning: "风", example: "Il y a du vent.", audio: "le vent" },
          { word: "la neige", meaning: "雪", example: "Il neige.", audio: "la neige" },
          { word: "il fait beau", meaning: "天气好", example: "Il fait beau aujourd'hui.", audio: "il fait beau" },
          { word: "il fait mauvais", meaning: "天气不好", example: "Il fait mauvais.", audio: "il fait mauvais" },
          { word: "il fait chaud", meaning: "天气热", example: "Il fait chaud en été.", audio: "il fait chaud" },
          { word: "il fait froid", meaning: "天气冷", example: "Il fait froid en hiver.", audio: "il fait froid" },
          { word: "le printemps", meaning: "春天", example: "Au printemps, il fait doux.", audio: "le printemps" },
          { word: "l'été (m.)", meaning: "夏天", example: "En été, il fait chaud.", audio: "l'été" },
          { word: "l'automne (m.)", meaning: "秋天", example: "En automne, les feuilles tombent.", audio: "l'automne" },
          { word: "l'hiver (m.)", meaning: "冬天", example: "En hiver, il fait froid.", audio: "l'hiver" },
        ],
        grammar: { title: "天气表达：il fait + 形容词 / il y a + 名词", content: "法语天气用 impersonnel（无人称）结构：\n\nil fait + 形容词：\n- Il fait beau. (天气好)\n- Il fait mauvais. (天气不好)\n- Il fait chaud. (热)\n- Il fait froid. (冷)\n- Il fait doux. (温和)\n- Il fait gris. (阴天)\n\nil y a + 名词：\n- Il y a du soleil. (出太阳)\n- Il y a du vent. (有风)\n- Il y a des nuages. (有云)\n- Il y a du brouillard. (有雾)\n\n动词形式：\n- Il pleut. (下雨) ← pleuvoir\n- Il neige. (下雪) ← neiger\n\n季节前用 en：\n- en printemps (在春天) → 实际用 au printemps\n- en été (在夏天)\n- en automne (在秋天)\n- en hiver (在冬天)\n\n注意：au printemps, en été, en automne, en hiver", tip: "巴黎天气变化无常！法国人说：'Si tu n'aimes pas le temps, attends cinq minutes.' (不喜欢天气？等五分钟就变了)" },
        dialogue: [
          { role: "A", text: "Quel temps fait-il à Paris en ce moment?", cn: "巴黎现在天气怎么样？" },
          { role: "B", text: "Il fait assez chaud. Il y a du soleil, mais parfois il pleut.", cn: "挺热的。有太阳，但有时会下雨。" },
          { role: "A", text: "Et en hiver?", cn: "冬天呢？" },
          { role: "B", text: "En hiver, il fait froid et il y a souvent du brouillard.", cn: "冬天很冷，经常有雾。" },
          { role: "A", text: "Je préfère l'été alors!", cn: "那我更喜欢夏天！" },
          { role: "B", text: "Moi, j'aime le printemps. Il fait doux et les fleurs sont belles.", cn: "我喜欢春天。天气温和，花很漂亮。" },
        ],
        practice: [
          { type: "fill", question: "Il ___ beau aujourd'hui. (今天天气好)", answer: "fait", hint: "faire变位" },
          { type: "choice", question: "'有风' 怎么说?", options: ["Il vente.", "Il y a du vent.", "Il fait vent.", "Il est venteux."], answer: 1 },
          { type: "fill", question: "___ été, il fait chaud. (夏天，天气热)", answer: "En", hint: "季节前介词" },
        ]
      },
    ]
  },
  // ========== Unité 12 : Le passé ==========
  {
    unit: 12, unitTitle: "Le passé", unitDesc: "过去时态入门、讲述过去发生的事",
    lessons: [
      {
        id: 'r1-u12-l1', title: "Leçon 1 — Le passé composé", goal: "掌握过去时的基本构成，讲述过去的事",
        vocab: [
          { word: "hier", meaning: "昨天", example: "Hier, je suis allé au cinéma.", audio: "hier" },
          { word: "aujourd'hui", meaning: "今天", example: "Aujourd'hui, il fait beau.", audio: "aujourd'hui" },
          { word: "demain", meaning: "明天", example: "Demain, je vais voyager.", audio: "demain" },
          { word: "la semaine dernière", meaning: "上周", example: "La semaine dernière, je suis allé à Lyon.", audio: "la semaine dernière" },
          { word: "le mois dernier", meaning: "上个月", example: "Le mois dernier, j'ai voyagé.", audio: "le mois dernier" },
          { word: "l'année dernière", meaning: "去年", example: "L'année dernière, j'ai visité Paris.", audio: "l'année dernière" },
          { word: "aller (passé: suis allé)", meaning: "去了", example: "Je suis allé au cinéma.", audio: "suis allé" },
          { word: "manger (passé: ai mangé)", meaning: "吃了", example: "J'ai mangé une pizza.", audio: "ai mangé" },
          { word: "voir (passé: ai vu)", meaning: "看了", example: "J'ai vu un bon film.", audio: "ai vu" },
          { word: "faire (passé: ai fait)", meaning: "做了", example: "J'ai fait du sport.", audio: "ai fait" },
          { word: "prendre (passé: ai pris)", meaning: "坐了；拿了", example: "J'ai pris le métro.", audio: "ai pris" },
          { word: "acheter (passé: ai acheté)", meaning: "买了", example: "J'ai acheté un livre.", audio: "ai acheté" },
        ],
        grammar: { title: "复合过去时 (passé composé)", content: "复合过去时 = 助动词(avoir/être)的现在时 + 过去分词\n\n结构：\n- J'ai mangé. (我吃了)\n- Tu as parlé. (你说了)\n- Il/Elle a fini. (他/她完成了)\n- Nous avons vu. (我们看了)\n- Vous avez fait. (你们做了)\n- Ils/Elles sont allés. (他们去了)\n\n用 être 的动词（表示移动和状态变化）：\n- aller → je suis allé(e) (去了)\n- venir → je suis venu(e) (来了)\n- arriver → je suis arrivé(e) (到了)\n- partir → je suis parti(e) (走了)\n- sortir → je suis sorti(e) (出去了)\n- entrer → je suis entré(e) (进去了)\n\n注意：用 être 的动词，过去分词要和主语配合！\n- Je suis allé. (男)\n- Je suis allée. (女)\n- Nous sommes allés. (男/混合)\n- Nous sommes allées. (全女)\n\n常用过去分词：\n- manger → mangé (吃了)\n- parler → parlé (说了)\n- finir → fini (完成了)\n- voir → vu (看了)\n- faire → fait (做了)\n- prendre → pris (坐了/拿了)\n- acheter → acheté (买了)\n- boire → bu (喝了)", tip: "记住用 être 的动词口诀：DR MRS VANDERTRAMP (Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Rentrer, Tomber, Retourner, Arriver, Mourir, Partir)" },
        dialogue: [
          { role: "A", text: "Qu'est-ce que tu as fait hier?", cn: "你昨天做了什么？" },
          { role: "B", text: "Hier, je suis allé au cinéma. J'ai vu un film français.", cn: "昨天我去了电影院。我看了一部法国电影。" },
          { role: "A", text: "C'était bien?", cn: "好看吗？" },
          { role: "B", text: "Oui, c'était très bien! Et après, j'ai mangé avec des amis.", cn: "好看！之后我和朋友们吃了饭。" },
          { role: "A", text: "Vous êtes allés où?", cn: "你们去了哪？" },
          { role: "B", text: "Nous sommes allés dans un restaurant italien. J'ai mangé des pâtes.", cn: "我们去了一家意大利餐厅。我吃了意面。" },
        ],
        practice: [
          { type: "fill", question: "J'___ mangé une pizza. (我吃了一个披萨)", answer: "ai", hint: "avoir变位" },
          { type: "choice", question: "'我去了电影院' 怎么说?", options: ["Je ai allé au cinéma.", "Je suis allé au cinéma.", "J'ai allé au cinéma.", "Je vais au cinéma."], answer: 1 },
          { type: "fill", question: "Elle a ___ un livre. (她买了一本书)", answer: "acheté", hint: "acheter的过去分词" },
          { type: "choice", question: "aller 的过去时用哪个助动词?", options: ["avoir", "être", "faire", "aller"], answer: 1 },
        ]
      },
    ]
  },
];
