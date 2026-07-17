/**
 * Reflets 3 — 走遍法国 第3册
 * 级别：B1 | 12个单元 | 深入虚拟式、条件式、泛指代词等
 * 话题：社会问题、科技发展、历史文化、媒体传播等
 */
export const reflets3Data = [
  // ========== Unité 1 : Sciences et technologie ==========
  {
    unit: 1, unitTitle: "Sciences et technologie", unitDesc: "科技发展与现代社会",
    lessons: [
      {
        id: 'r3-u1-l1', title: "Leçon 1 — Les progrès scientifiques", goal: "谈论科技进步，掌握虚拟式深入用法",
        vocab: [
          { word: "la science", meaning: "科学", example: "La science avance rapidement.", audio: "la science" },
          { word: "la technologie", meaning: "技术", example: "La technologie change notre vie.", audio: "la technologie" },
          { word: "l'innovation (f.)", meaning: "创新", example: "C'est une innovation importante.", audio: "l'innovation" },
          { word: "la recherche", meaning: "研究", example: "Il fait de la recherche en biologie.", audio: "la recherche" },
          { word: "le chercheur", meaning: "研究员", example: "Les chercheurs ont découvert un vaccin.", audio: "le chercheur" },
          { word: "découvrir", meaning: "发现", example: "Ils ont découvert une nouvelle planète.", audio: "découvrir" },
          { word: "la découverte", meaning: "发现", example: "C'est une grande découverte.", audio: "la découverte" },
          { word: "l'invention (f.)", meaning: "发明", example: "L'invention de l'imprimerie a changé le monde.", audio: "l'invention" },
          { word: "l'ordinateur (m.)", meaning: "电脑", example: "J'utilise l'ordinateur tous les jours.", audio: "l'ordinateur" },
          { word: "Internet", meaning: "互联网", example: "Internet est indispensable.", audio: "Internet" },
          { word: "le réseau", meaning: "网络", example: "Le réseau est très rapide.", audio: "le réseau" },
          { word: "télécharger", meaning: "下载", example: "Je télécharge un document.", audio: "télécharger" },
        ],
        grammar: { title: "虚拟式深入 (le subjonctif — suite)", content: "虚拟式用于表达愿望、必要性、可能性、情感等：\n\n常见触发虚拟式的结构：\n1. 表达愿望：\n   Je veux que tu viennes. (我想要你来)\n   J'espère que tu viendras. (我希望你来 — 注意：espérer 用直陈式)\n\n2. 表达必要性：\n   Il faut que tu travailles. (你必须工作)\n   Il est nécessaire que nous partions. (我们有必要离开)\n\n3. 表达情感：\n   Je suis content que tu sois là. (我很高兴你在这里)\n   Je crains qu'il ne soit en retard. (我担心他迟到)\n\n4. 表达可能性/怀疑：\n   Je ne pense pas qu'il ait raison. (我不认为他对)\n   Est-ce qu'il est possible qu'elle vienne? (她可能来吗？)\n\n5. 某些连词后：\n   bien que (虽然), pour que (为了), avant que (在...之前)\n   Bien qu'il soit malade, il vient. (虽然生病，他还是来了)\n\n不规则虚拟式：\n   être: sois, sois, soit, soyons, soyez, soient\n   avoir: aie, aies, ait, ayons, ayez, aient\n   faire: fasse, fasses, fasse, fassions, fassiez, fassent\n   pouvoir: puisse, puisses, puisse, puissions, puissiez, puissent\n   vouloir: veuille, veuilles, veuille, voulions, vouliez, veuillent", tip: "虚拟式是法语的'高级语法'，B1-B2阶段必须掌握！多读多练是关键。" },
        dialogue: [
          { role: "A", text: "Tu as entendu parler de la nouvelle découverte?", cn: "你听说那个新发现了吗？" },
          { role: "B", text: "Oui, c'est incroyable! Les chercheurs ont trouvé une nouvelle source d'énergie.", cn: "是的，太不可思议了！研究人员发现了一种新能源。" },
          { role: "A", text: "Il faut que je lise l'article. Tu penses que c'est fiable?", cn: "我得读读那篇文章。你觉得可靠吗？" },
          { role: "B", text: "Je ne pense pas que ce soit faux. La source est sérieuse.", cn: "我不认为这是假的。来源很可靠。" },
          { role: "A", text: "J'espère que cette découverte aidera l'environnement.", cn: "我希望这个发现能帮助环境。" },
          { role: "B", text: "Oui, c'est possible que ce soit une révolution.", cn: "是的，这可能是一场革命。" },
        ],
        practice: [
          { type: "fill", question: "Il faut que tu ___ (finir) ce travail.", answer: "finisses", hint: "finir的虚拟式" },
          { type: "choice", question: "哪个句子用了虚拟式?", options: ["Je pense qu'il vient.", "Je veux qu'il vienne.", "Il viendra demain.", "Il est venu hier."], answer: 1 },
          { type: "fill", question: "Bien qu'il ___ (être) malade, il travaille.", answer: "soit", hint: "être的虚拟式" },
          { type: "choice", question: "'我不认为他对' 怎么说?", options: ["Je pense qu'il a raison.", "Je ne pense pas qu'il ait raison.", "Il a raison.", "Je crois qu'il a raison."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unité 2 : Médias et communication ==========
  {
    unit: 2, unitTitle: "Médias et communication", unitDesc: "媒体与信息传播",
    lessons: [
      {
        id: 'r3-u2-l1', title: "Leçon 1 — Les médias modernes", goal: "讨论媒体作用，掌握间接引语深入",
        vocab: [
          { word: "le média", meaning: "媒体", example: "Les médias jouent un rôle important.", audio: "le média" },
          { word: "la presse", meaning: "新闻界；报纸", example: "Je lis la presse tous les jours.", audio: "la presse" },
          { word: "la télévision", meaning: "电视", example: "Je regarde la télévision le soir.", audio: "la télévision" },
          { word: "la radio", meaning: "广播", example: "J'écoute la radio le matin.", audio: "la radio" },
          { word: "le journal", meaning: "报纸；日记", example: "Il lit le journal.", audio: "le journal" },
          { word: "l'information (f.)", meaning: "信息；新闻", example: "C'est une information importante.", audio: "l'information" },
          { word: "la nouvelle", meaning: "消息；短篇小说", example: "J'ai une bonne nouvelle!", audio: "la nouvelle" },
          { word: "diffuser", meaning: "播放；传播", example: "La chaîne diffuse ce film à 20h.", audio: "diffuser" },
          { word: "le journaliste", meaning: "记者", example: "Le journaliste a interviewé le président.", audio: "le journaliste" },
          { word: "interviewer", meaning: "采访", example: "Qui va interviewer cet artiste?", audio: "interviewer" },
          { word: "la publicité", meaning: "广告", example: "Je déteste les publicités.", audio: "la publicité" },
          { word: "influencer", meaning: "影响", example: "Les médias influencent l'opinion.", audio: "influencer" },
        ],
        grammar: { title: "间接引语 (le discours rapporté — suite)", content: "间接引语用于转述他人的话：\n\n时态呼应规则（主句动词在过去时）：\n1. 现在时 → 未完成过去时\n   Il dit: \"Je suis fatigué.\" → Il a dit qu'il était fatigué.\n\n2. 复合过去时 → 愈过去时\n   Il dit: \"J'ai mangé.\" → Il a dit qu'il avait mangé.\n\n3. 简单将来时 → 条件式现在时\n   Il dit: \"Je viendrai.\" → Il a dit qu'il viendrait.\n\n4. 命令式 → 不定式\n   Il dit: \"Partez!\" → Il a dit de partir.\n\n疑问句转换：\n- Est-ce que tu viens? → Il demande si je viens.\n- Où vas-tu? → Il demande où je vais.\n- Tu viens? → Il demande si je viens.\n\n指示词变化：\n- ce → cela/ça\n- ici → là-bas\n- aujourd'hui → ce jour-là\n- demain → le lendemain\n- hier → la veille", tip: "间接引语是法语写作和口语的必备技能，注意时态呼应和指示词变化！" },
        dialogue: [
          { role: "A", text: "Tu as regardé les informations hier soir?", cn: "你昨晚看新闻了吗？" },
          { role: "B", text: "Oui, le journaliste a interviewé un chercheur célèbre.", cn: "是的，记者采访了一位著名研究员。" },
          { role: "A", text: "Qu'est-ce qu'il a dit?", cn: "他说了什么？" },
          { role: "B", text: "Il a dit que la technologie changeait notre façon de communiquer.", cn: "他说科技正在改变我们的交流方式。" },
          { role: "A", text: "Et qu'est-ce qu'il a annoncé?", cn: "他还宣布了什么？" },
          { role: "B", text: "Il a annoncé qu'une nouvelle application serait lancée le mois suivant.", cn: "他宣布下个月将推出一款新应用。" },
        ],
        practice: [
          { type: "fill", question: "Il a dit qu'il ___ (être) fatigué.", answer: "était", hint: "être的imparfait" },
          { type: "choice", question: "'他说明天会来' 怎么说?", options: ["Il dit qu'il viendra demain.", "Il a dit qu'il viendrait le lendemain.", "Il dit qu'il est venu.", "Il a dit qu'il vient demain."], answer: 1 },
          { type: "fill", question: "Elle demande si je ___. (她问我是否来)", answer: "viens", hint: "疑问句转述" },
        ]
      },
    ]
  },
  // ========== Unité 3 : Société et problèmes sociaux ==========
  {
    unit: 3, unitTitle: "Société et problèmes sociaux", unitDesc: "社会问题与社会现象",
    lessons: [
      {
        id: 'r3-u3-l1', title: "Leçon 1 — Les défis de la société", goal: "讨论社会问题，掌握条件式过去时",
        vocab: [
          { word: "la société", meaning: "社会", example: "La société moderne a beaucoup de problèmes.", audio: "la société" },
          { word: "le problème", meaning: "问题", example: "C'est un problème sérieux.", audio: "le problème" },
          { word: "la pauvreté", meaning: "贫困", example: "La pauvreté augmente dans les grandes villes.", audio: "la pauvreté" },
          { word: "le chômage", meaning: "失业", example: "Le chômage est un problème majeur.", audio: "le chômage" },
          { word: "le chômeur", meaning: "失业者", example: "Les chômeurs cherchent du travail.", audio: "le chômeur" },
          { word: "la discrimination", meaning: "歧视", example: "La discrimination est interdite.", audio: "la discrimination" },
          { word: "l'inégalité (f.)", meaning: "不平等", example: "Les inégalités augmentent.", audio: "l'inégalité" },
          { word: "le gouvernement", meaning: "政府", example: "Le gouvernement doit agir.", audio: "le gouvernement" },
          { word: "la politique", meaning: "政治；政策", example: "La politique de ce pays est complexe.", audio: "la politique" },
          { word: "manifeste", meaning: "示威", example: "Les citoyens manifestent dans la rue.", audio: "manifeste" },
          { word: "la grève", meaning: "罢工", example: "Les transports sont en grève.", audio: "la grève" },
          { word: "résoudre", meaning: "解决", example: "Il faut résoudre ce problème.", audio: "résoudre" },
        ],
        grammar: { title: "条件式过去时 (le conditionnel passé)", content: "条件式过去时用于表达过去本可能发生但未发生的事，或委婉的假设：\n\n构成：条件式现在时助动词 (avoir/être) + 过去分词\n\n例：\n- j'aurais parlé, tu aurais parlé, il aurait parlé\n- nous aurions parlé, vous auriez parlé, ils auraient parlé\n- je serais allé(e), tu serais allé(e), il serait allé\n- nous serions allé(e)s, vous seriez allé(e)s, ils seraient allés\n\n用法：\n1. 过去本可能但未发生的动作：\n   J'aurais voulu t'aider. (我本想帮你的)\n   Il aurait pu venir. (他本来可以来的)\n\n2. 委婉的假设/建议：\n   Tu aurais dû me le dire. (你本该告诉我的)\n   J'aurais aimé voir ce film. (我本想看这部电影)\n\n3. 新闻报道中的未证实信息：\n   Le suspect aurait fui à l'étranger. (据称嫌疑人已逃往国外)\n\n信号词：si + plus-que-parfait → conditionnel passé\nSi j'avais su, je serais venu. (如果我早知道，我就会来了)", tip: "条件式过去时常用于表达'后悔'或'假设'：Si j'avais étudié, j'aurais réussi. (如果我学习了，我就会通过了)" },
        dialogue: [
          { role: "A", text: "Tu as vu les nouvelles? Il y a une manifestation ce matin.", cn: "你看新闻了吗？今天早上有示威。" },
          { role: "B", text: "Oui, les chômeurs manifestent contre le gouvernement.", cn: "是的，失业者在反对政府的示威。" },
          { role: "A", text: "Qu'est-ce qu'ils demandent?", cn: "他们要求什么？" },
          { role: "B", text: "Ils demandent que le gouvernement résolve le problème du chômage.", cn: "他们要求政府解决失业问题。" },
          { role: "A", text: "Si j'étais au chômage, je manifesterais aussi.", cn: "如果我失业了，我也会示威。" },
          { role: "B", text: "Moi aussi. C'est une situation difficile.", cn: "我也是。这是个困难的局面。" },
        ],
        practice: [
          { type: "fill", question: "J'___ voulu t'aider. (我本想帮你)", answer: "aurais", hint: "avoir的条件式现在时+过去分词" },
          { type: "choice", question: "'他本来可以来的' 怎么说?", options: ["Il peut venir.", "Il a pu venir.", "Il aurait pu venir.", "Il pourra venir."], answer: 2 },
          { type: "fill", question: "Si j'avais su, je ___ venu. (如果我早知道，我就会来了)", answer: "serais", hint: "être的条件式现在时" },
        ]
      },
    ]
  },
  // ========== Unité 4 : Environnement et écologie ==========
  {
    unit: 4, unitTitle: "Environnement et écologie", unitDesc: "环境保护与可持续发展",
    lessons: [
      {
        id: 'r3-u4-l1', title: "Leçon 1 — Protéger la planète", goal: "讨论环境问题，掌握目的从句",
        vocab: [
          { word: "l'environnement (m.)", meaning: "环境", example: "Il faut protéger l'environnement.", audio: "l'environnement" },
          { word: "l'écologie (f.)", meaning: "生态学", example: "L'écologie est importante.", audio: "l'écologie" },
          { word: "la pollution", meaning: "污染", example: "La pollution de l'air est grave.", audio: "la pollution" },
          { word: "polluer", meaning: "污染", example: "Les usines polluent les rivières.", audio: "polluer" },
          { word: "le réchauffement climatique", meaning: "全球变暖", example: "Le réchauffement climatique menace la planète.", audio: "le réchauffement climatique" },
          { word: "le climat", meaning: "气候", example: "Le climat change rapidement.", audio: "le climat" },
          { word: "recycler", meaning: "回收", example: "Nous recyclons le plastique.", audio: "recycler" },
          { word: "le recyclage", meaning: "回收利用", example: "Le recyclage est essentiel.", audio: "le recyclage" },
          { word: "durable", meaning: "可持续的", example: "Le développement durable est nécessaire.", audio: "durable" },
          { word: "l'énergie (f.)", meaning: "能源", example: "Les énergies renouvelables sont l'avenir.", audio: "l'énergie" },
          { word: "renouvelable", meaning: "可再生的", example: "L'énergie solaire est renouvelable.", audio: "renouvelable" },
          { word: "gaspiller", meaning: "浪费", example: "Ne gaspille pas l'eau!", audio: "gaspiller" },
        ],
        grammar: { title: "目的从句 (les propositions de but)", content: "目的从句表达动作的目标或意图：\n\n1. pour que + 虚拟式\n   Je parle fort pour que tout le monde m'entende. (我大声说以便大家都能听到)\n\n2. afin que + 虚拟式 (更正式)\n   Nous économisons l'énergie afin que les générations futures en profitent. (我们节约能源以便后代受益)\n\n3. de peur que / de crainte que + 虚拟式 (+ ne explétif)\n   Je ferme la fenêtre de peur qu'il ne pleuve. (我关上窗户以免下雨)\n\n4. 主语相同时用不定式：\n   pour + 不定式\n   Je travaille pour réussir. (我工作为了成功)\n   afin de + 不定式 (更正式)\n   Il étudie afin de passer l'examen. (他学习为了通过考试)\n\n5. sans que + 虚拟式 (否定目的)\n   Il est sorti sans que je le voie. (他出去了，我没看到他)\n\n注意：pour que 和 afin que 后必须用虚拟式！", tip: "pour que = 以便，afin que = 为了，de peur que = 以免。记住它们后面都用虚拟式！" },
        dialogue: [
          { role: "A", text: "Qu'est-ce que tu fais pour protéger l'environnement?", cn: "你做什么来保护环境？" },
          { role: "B", text: "Je recycle tous les déchets pour que la planète reste propre.", cn: "我回收所有垃圾以便地球保持清洁。" },
          { role: "A", text: "Et tu économises l'énergie?", cn: "你节约能源吗？" },
          { role: "B", text: "Oui, j'éteins les lumières afin de ne pas gaspiller l'électricité.", cn: "是的，我关灯以免浪费电。" },
          { role: "A", text: "C'est important. Nous devons agir pour que les générations futures vivent dans un monde sain.", cn: "这很重要。我们必须行动以便后代生活在一个健康的世界。" },
          { role: "B", text: "Exactement. Chacun peut faire sa part.", cn: "没错。每个人都能尽自己的一份力。" },
        ],
        practice: [
          { type: "fill", question: "Je parle fort ___ que tout le monde m'entende.", answer: "pour", hint: "目的从句" },
          { type: "choice", question: "'我们节约能源以便后代受益' 怎么说?", options: ["Nous économisons l'énergie pour que les générations futures en profitent.", "Nous économisons l'énergie parce que les générations futures en profitent.", "Nous économisons l'énergie quand les générations futures en profitent.", "Nous économisons l'énergie si les générations futures en profitent."], answer: 0 },
          { type: "fill", question: "Il étudie afin ___ passer l'examen.", answer: "de", hint: "目的不定式" },
        ]
      },
    ]
  },
  // ========== Unité 5 : Culture et arts ==========
  {
    unit: 5, unitTitle: "Culture et arts", unitDesc: "文化艺术与创作",
    lessons: [
      {
        id: 'r3-u5-l1', title: "Leçon 1 — L'art et la culture", goal: "讨论艺术与文化，掌握被动语态",
        vocab: [
          { word: "l'art (m.)", meaning: "艺术", example: "L'art est une forme d'expression.", audio: "l'art" },
          { word: "la culture", meaning: "文化", example: "La culture française est riche.", audio: "la culture" },
          { word: "le musée", meaning: "博物馆", example: "Nous visitons le musée du Louvre.", audio: "le musée" },
          { word: "l'exposition (f.)", meaning: "展览", example: "Il y a une exposition d'art moderne.", audio: "l'exposition" },
          { word: "le tableau", meaning: "画作", example: "Ce tableau est magnifique.", audio: "le tableau" },
          { word: "la sculpture", meaning: "雕塑", example: "Cette sculpture est en bronze.", audio: "la sculpture" },
          { word: "peindre", meaning: "绘画", example: "Il peint des paysages.", audio: "peindre" },
          { word: "le peintre", meaning: "画家", example: "Monet est un peintre célèbre.", audio: "le peintre" },
          { word: "l'artiste (m./f.)", meaning: "艺术家", example: "C'est un artiste talentueux.", audio: "l'artiste" },
          { word: "le talent", meaning: "才华", example: "Elle a beaucoup de talent.", audio: "le talent" },
          { word: "créer", meaning: "创造", example: "Il crée des œuvres originales.", audio: "créer" },
          { word: "l'œuvre (f.)", meaning: "作品", example: "C'est une œuvre masterpiece.", audio: "l'œuvre" },
        ],
        grammar: { title: "被动语态 (la voix passive)", content: "被动语态用于强调动作的承受者而非执行者：\n\n构成：主语 + être + 过去分词 + par + 施动者\n\n例：\n- Le livre est lu par l'étudiant. (书被学生读)\n- La chanson est chantée par la chanteuse. (歌被女歌手唱)\n- Les tableaux sont peints par l'artiste. (画被画家画)\n\n时态变化（通过 être 的时态体现）：\n- 现在时：Le tableau est admiré par les visiteurs. (画被游客欣赏)\n- 复合过去时：Le tableau a été admiré par les visiteurs. (画被游客欣赏了)\n- 未完成过去时：Le tableau était admiré par les visiteurs. (画过去被游客欣赏)\n- 简单将来时：Le tableau sera admiré par les visiteurs. (画将被游客欣赏)\n\n注意：\n1. 过去分词要和主语保持性数一致\n   La lettre est écrite par Marie. (信被Marie写)\n   Les lettres sont écrites par Marie. (信件被Marie写)\n\n2. 施动者用 par 引导，如果是事物可用 de\n   La ville est entourée de murs. (城市被墙壁环绕)\n\n3. 只有直接宾语的句子才能变被动\n   主动：Le chat mange la souris. → 被动：La souris est mangée par le chat.", tip: "被动语态在法语写作中很常见，尤其是描述艺术品、历史事件时！" },
        dialogue: [
          { role: "A", text: "Tu es allé à l'exposition hier?", cn: "你昨天去展览了吗？" },
          { role: "B", text: "Oui, j'ai vu des tableaux magnifiques. Ils étaient peints par un artiste local.", cn: "是的，我看到了很美的画。它们是一位本地艺术家画的。" },
          { role: "A", text: "Quel style? L'art moderne ou classique?", cn: "什么风格？现代艺术还是古典艺术？" },
          { role: "B", text: "C'était de l'art moderne. Les œuvres étaient créées avec des matériaux recyclés.", cn: "是现代艺术。作品是用回收材料创作的。" },
          { role: "A", text: "C'est intéressant! L'art peut être fait avec n'importe quoi.", cn: "真有趣！艺术可以用任何东西创作。" },
          { role: "B", text: "Exactement. La créativité est plus importante que les matériaux.", cn: "没错。创造力比材料更重要。" },
        ],
        practice: [
          { type: "fill", question: "Le tableau ___ peint par Monet. (画被Monet画)", answer: "est", hint: "être的现在时" },
          { type: "choice", question: "'这本书被学生读了' 怎么说?", options: ["Le livre lit l'étudiant.", "Le livre est lu par l'étudiant.", "Le livre a lu l'étudiant.", "Le livre était lit par l'étudiant."], answer: 1 },
          { type: "fill", question: "Les chansons ___ chantées par la chanteuse.", answer: "sont", hint: "être的现在时复数" },
        ]
      },
    ]
  },
  // ========== Unité 6 : Histoire et mémoire ==========
  {
    unit: 6, unitTitle: "Histoire et mémoire", unitDesc: "历史与记忆",
    lessons: [
      {
        id: 'r3-u6-l1', title: "Leçon 1 — L'histoire de France", goal: "讲述法国历史，掌握愈过去时",
        vocab: [
          { word: "l'histoire (f.)", meaning: "历史", example: "L'histoire de France est riche.", audio: "l'histoire" },
          { word: "la mémoire", meaning: "记忆", example: "La mémoire est importante.", audio: "la mémoire" },
          { word: "le passé", meaning: "过去", example: "Le passé ne peut pas changer.", audio: "le passé" },
          { word: "la Révolution française", meaning: "法国大革命", example: "La Révolution française a eu lieu en 1789.", audio: "la Révolution française" },
          { word: "la guerre", meaning: "战争", example: "La guerre a duré longtemps.", audio: "la guerre" },
          { word: "la paix", meaning: "和平", example: "Nous voulons la paix.", audio: "la paix" },
          { word: "le roi", meaning: "国王", example: "Le roi Louis XIV a régné longtemps.", audio: "le roi" },
          { word: "la république", meaning: "共和国", example: "La France est une république.", audio: "la république" },
          { word: "la liberté", meaning: "自由", example: "La liberté est un droit fondamental.", audio: "la liberté" },
          { word: "l'égalité (f.)", meaning: "平等", example: "L'égalité est importante.", audio: "l'égalité" },
          { word: "la fraternité", meaning: "博爱", example: "La fraternité unit les citoyens.", audio: "la fraternité" },
          { word: "se souvenir (de)", meaning: "记得", example: "Je me souviens de cette histoire.", audio: "se souvenir" },
        ],
        grammar: { title: "愈过去时 (le plus-que-parfait)", content: "愈过去时用于表达在过去某一动作之前已经完成的动作：\n\n构成：助动词 (avoir/être) 的 imparfait + 过去分词\n\n例：\n- j'avais parlé, tu avais parlé, il avait parlé\n- nous avions parlé, vous aviez parlé, ils avaient parlé\n- j'étais allé(e), tu étais allé(e), il était allé\n- nous étions allé(e)s, vous étiez allé(e)s, ils étaient allés\n\n用法：\n1. 表示'过去的过去'：\n   Quand je suis arrivé, il avait déjà mangé. (当我到达时，他已经吃过了)\n   Elle a dit qu'elle avait fini. (她说她已经完成了)\n\n2. 与 passé composé 或 imparfait 搭配：\n   Il pleuvait (imparfait) et j'avais oublié (plus-que-parfait) mon parapluie.\n   (天在下雨，我忘了带伞)\n\n3. 在间接引语中（主句动词在过去时）：\n   Il a dit: \"J'ai fini.\" → Il a dit qu'il avait fini.\n   (他说：\"我完成了。\" → 他说他已经完成了)\n\n信号词：déjà, avant, quand, lorsque, après que", tip: "愈过去时就像'过去的过去'，用于描述在另一个过去动作之前已经发生的事情。" },
        dialogue: [
          { role: "A", text: "Tu connais l'histoire de la Révolution française?", cn: "你了解法国大革命的历史吗？" },
          { role: "B", text: "Oui, je me souviens que la Révolution a commencé en 1789.", cn: "是的，我记得大革命开始于1789年。" },
          { role: "A", text: "Qu'est-ce qui s'est passé avant?", cn: "之前发生了什么？" },
          { role: "B", text: "Avant, le roi avait régné pendant des siècles. Le peuple avait souffert de la faim.", cn: "之前，国王统治了几个世纪。人民遭受了饥饿。" },
          { role: "A", text: "Et après la Révolution?", cn: "大革命之后呢？" },
          { role: "B", text: "Après, la République a été proclamée. La liberté et l'égalité sont devenues des valeurs fondamentales.", cn: "之后，共和国被宣告成立。自由和平等成为了核心价值观。" },
        ],
        practice: [
          { type: "fill", question: "Quand je suis arrivé, il ___ déjà mangé.", answer: "avait", hint: "avoir的imparfait" },
          { type: "choice", question: "'她已经完成了' 怎么说?", options: ["Elle a fini.", "Elle avait fini.", "Elle finit.", "Elle finira."], answer: 1 },
          { type: "fill", question: "Nous ___ déjà partis quand il est arrivé.", answer: "étions", hint: "être的imparfait" },
        ]
      },
    ]
  },
  // ========== Unité 7 : Éducation et formation ==========
  {
    unit: 7, unitTitle: "Éducation et formation", unitDesc: "教育与培训",
    lessons: [
      {
        id: 'r3-u7-l1', title: "Leçon 1 — Le système éducatif", goal: "讨论教育体系，掌握比较级和最高级",
        vocab: [
          { word: "l'éducation (f.)", meaning: "教育", example: "L'éducation est essentielle.", audio: "l'éducation" },
          { word: "l'école (f.)", meaning: "学校", example: "Les enfants vont à l'école.", audio: "l'école" },
          { word: "le lycée", meaning: "高中", example: "Il étudie au lycée.", audio: "le lycée" },
          { word: "l'université (f.)", meaning: "大学", example: "Elle étudie à l'université.", audio: "l'université" },
          { word: "le diplôme", meaning: "文凭", example: "Il a obtenu son diplôme.", audio: "le diplôme" },
          { word: "la formation", meaning: "培训", example: "La formation est importante.", audio: "la formation" },
          { word: "apprendre", meaning: "学习", example: "J'apprends le français.", audio: "apprendre" },
          { word: "enseigner", meaning: "教授", example: "Il enseigne les mathématiques.", audio: "enseigner" },
          { word: "l'élève (m./f.)", meaning: "学生", example: "Les élèves étudient dur.", audio: "l'élève" },
          { word: "le professeur", meaning: "老师", example: "Le professeur explique la leçon.", audio: "le professeur" },
          { word: "la connaissance", meaning: "知识", example: "La connaissance est le pouvoir.", audio: "la connaissance" },
          { word: "réussir", meaning: "成功", example: "Il a réussi à l'examen.", audio: "réussir" },
        ],
        grammar: { title: "比较级和最高级 (le comparatif et le superlatif)", content: "比较级用于比较两个事物，最高级用于表达极端程度：\n\n比较级：\n1. 更... que (plus... que)\n   Il est plus grand que moi. (他比我高)\n   Cette ville est plus belle que l'autre. (这个城市比另一个更美)\n\n2. 不如... que (moins... que)\n   Il est moins grand que moi. (他不如我高)\n\n3. 和...一样 (aussi... que)\n   Il est aussi grand que moi. (他和我一样高)\n\n4. 不如 (moins... que)\n   Ce livre est moins intéressant que l'autre. (这本书不如另一本有趣)\n\n最高级：\n1. 最... (le/la/les plus...)\n   C'est le plus grand de la classe. (他是班里最高的)\n   C'est la plus belle ville. (这是最美的城市)\n\n2. 最不... (le/la/les moins...)\n   C'est le moins intéressant des livres. (这是最不有趣的书)\n\n不规则比较级：\n- bon → meilleur (更好的)\n- mauvais → pire (更差的)\n- petit → moindre (更小的，抽象意义)\n\n最高级不规则：\n- bon → le meilleur (最好的)\n- mauvais → le pire (最差的)", tip: "比较级和最高级在法语中很常用，注意形容词要和名词保持性数一致！" },
        dialogue: [
          { role: "A", text: "Tu préfères quelle université?", cn: "你更喜欢哪所大学？" },
          { role: "B", text: "Je préfère Sorbonne. C'est plus célèbre que les autres.", cn: "我更喜欢索邦。它比其他大学更著名。" },
          { role: "A", text: "Et la formation est meilleure?", cn: "培训质量更好吗？" },
          { role: "B", text: "Oui, c'est la meilleure université de France pour les lettres.", cn: "是的，它是法国最好的文科大学。" },
          { role: "A", text: "Mais les études sont plus difficiles?", cn: "但是学习更难吗？" },
          { role: "B", text: "Oui, c'est plus difficile, mais les connaissances sont plus profondes.", cn: "是的，更难，但知识更深入。" },
        ],
        practice: [
          { type: "fill", question: "Il est ___ grand ___ moi.", answer: "plus...que", hint: "比较级" },
          { type: "choice", question: "'这是最好的书' 怎么说?", options: ["C'est le meilleur livre.", "C'est le plus bon livre.", "C'est le bien livre.", "C'est plus bon livre."], answer: 0 },
          { type: "fill", question: "Cette ville est ___ belle ___ l'autre.", answer: "plus...que", hint: "比较级" },
        ]
      },
    ]
  },
  // ========== Unité 8 : Travail et profession ==========
  {
    unit: 8, unitTitle: "Travail et profession", unitDesc: "工作与职业",
    lessons: [
      {
        id: 'r3-u8-l1', title: "Leçon 1 — Le monde du travail", goal: "讨论职场话题，掌握虚拟式在名词从句中的应用",
        vocab: [
          { word: "le travail", meaning: "工作", example: "Le travail est important.", audio: "le travail" },
          { word: "la profession", meaning: "职业", example: "Quelle est votre profession?", audio: "la profession" },
          { word: "le métier", meaning: "行业；手艺", example: "Quel est ton métier?", audio: "le métier" },
          { word: "l'emploi (m.)", meaning: "就业", example: "Il cherche un emploi.", audio: "l'emploi" },
          { word: "le salaire", meaning: "工资", example: "Le salaire est correct.", audio: "le salaire" },
          { word: "le collègue", meaning: "同事", example: "Mes collègues sont sympas.", audio: "le collègue" },
          { word: "le patron", meaning: "老板", example: "Mon patron est exigeant.", audio: "le patron" },
          { word: "l'entretien (m.)", meaning: "面试", example: "J'ai un entretien demain.", audio: "l'entretien" },
          { word: "le CV (curriculum vitae)", meaning: "简历", example: "J'envoie mon CV.", audio: "le CV" },
          { word: "postuler", meaning: "申请", example: "Je postule pour ce poste.", audio: "postuler" },
          { word: "embaucher", meaning: "雇佣", example: "L'entreprise va embaucher un nouveau employé.", audio: "embaucher" },
          { word: "démissionner", meaning: "辞职", example: "Il a démissionné hier.", audio: "démissionner" },
        ],
        grammar: { title: "虚拟式在名词从句中的应用 (le subjonctif dans les propositions subordonnées)", content: "虚拟式常用于以下名词从句中：\n\n1. 愿望/意志后：\n   Je veux que tu viennes. (我想要你来)\n   Je souhaite qu'il réussisse. (我希望他成功)\n\n2. 必要性/义务后：\n   Il faut que tu travailles. (你必须工作)\n   Il est nécessaire que nous partions. (我们有必要离开)\n\n3. 情感/评价后：\n   Je suis content que tu sois là. (我很高兴你在这里)\n   Il est dommage qu'il ne puisse pas venir. (很遗憾他不能来)\n   Je crains qu'il ne soit en retard. (我担心他迟到)\n\n4. 怀疑/否定后：\n   Je ne pense pas qu'il ait raison. (我不认为他对)\n   Je doute qu'elle vienne. (我怀疑她会来)\n\n5. 某些连词后：\n   bien que + subj. (虽然)\n   pour que + subj. (为了)\n   avant que + subj. (在...之前)\n   jusqu'à ce que + subj. (直到)\n\n对比直陈式：\n- Je pense qu'il vient. (我认为他来 — 直陈式，表示确定)\n- Je ne pense pas qu'il vienne. (我不认为他来 — 虚拟式，表示不确定)", tip: "虚拟式是法语B1-B2的核心语法，多读多写多练是关键！" },
        dialogue: [
          { role: "A", text: "Tu as trouvé du travail?", cn: "你找到工作了吗？" },
          { role: "B", text: "Oui, j'ai postulé pour plusieurs postes et j'ai eu des entretiens.", cn: "是的，我申请了几个职位，也参加了面试。" },
          { role: "A", text: "Et le patron, il est comment?", cn: "老板怎么样？" },
          { role: "B", text: "Il est exigeant mais juste. Il veut que nous travaillions dur.", cn: "他很严格但公正。他希望我们努力工作。" },
          { role: "A", text: "Et tes collègues?", cn: "同事呢？" },
          { role: "B", text: "Mes collègues sont sympas. Je suis content que nous travaillions bien ensemble.", cn: "同事很好。我很高兴我们合作得很好。" },
        ],
        practice: [
          { type: "fill", question: "Il faut que tu ___ (travailler) dur.", answer: "travailles", hint: "travailler的虚拟式" },
          { type: "choice", question: "'我希望他成功' 怎么说?", options: ["J'espère qu'il réussit.", "Je souhaite qu'il réussisse.", "Je pense qu'il réussira.", "Je crois qu'il réussit."], answer: 1 },
          { type: "fill", question: "Je suis content que tu ___ (être) là.", answer: "sois", hint: "être的虚拟式" },
        ]
      },
    ]
  },
  // ========== Unité 9 : Santé et bien-être ==========
  {
    unit: 9, unitTitle: "Santé et bien-être", unitDesc: "健康与福祉",
    lessons: [
      {
        id: 'r3-u9-l1', title: "Leçon 1 — La santé", goal: "讨论健康问题，掌握代词式动词深入",
        vocab: [
          { word: "la santé", meaning: "健康", example: "La santé est importante.", audio: "la santé" },
          { word: "le bien-être", meaning: "福祉", example: "Le bien-être est essentiel.", audio: "le bien-être" },
          { word: "le médecin", meaning: "医生", example: "Je vais chez le médecin.", audio: "le médecin" },
          { word: "le malade", meaning: "病人", example: "Le malade est à l'hôpital.", audio: "le malade" },
          { word: "la maladie", meaning: "疾病", example: "Cette maladie est grave.", audio: "la maladie" },
          { word: "le traitement", meaning: "治疗", example: "Le traitement est efficace.", audio: "le traitement" },
          { word: "le médicament", meaning: "药物", example: "Prends ce médicament.", audio: "le médicament" },
          { word: "l'hôpital (m.)", meaning: "医院", example: "Il est à l'hôpital.", audio: "l'hôpital" },
          { word: "la pharmacie", meaning: "药店", example: "J'achète des médicaments à la pharmacie.", audio: "la pharmacie" },
          { word: "se reposer", meaning: "休息", example: "Il faut se reposer.", audio: "se reposer" },
          { word: "se sentir", meaning: "感觉", example: "Je me sens fatigué.", audio: "se sentir" },
          { word: "guérir", meaning: "治愈", example: "Il a guéri rapidement.", audio: "guérir" },
        ],
        grammar: { title: "代词式动词深入 (les verbes pronominaux — suite)", content: "代词式动词在复合时态中用 être 作助动词，过去分词要和主语保持性数一致：\n\n1. 复合时态中的配合：\n   Je me suis lavé(e). (我洗了自己)\n   Elle s'est reposée. (她休息了)\n   Nous nous sommes promenés. (我们散步了)\n\n2. 过去分词与直接宾语配合：\n   如果自反代词是直接宾语，过去分词要配合：\n   Elle s'est lavée. (她洗了自己 — se 是直接宾语)\n   \n   如果自反代词是间接宾语，过去分词不配合：\n   Elle s'est lavé les mains. (她洗了手 — se 是间接宾语，les mains 是直接宾语)\n\n3. 代词式动词的被动意义：\n   Ça se voit. (这看得出来)\n   Ça s'entend. (这听得出来)\n   Les livres se vendent bien. (书卖得很好)\n\n4. 代词式动词的意义：\n   - 反身意义：se laver (洗自己)\n   - 相互意义：se parler (互相说话)\n   - 被动意义：se vendre (被卖)\n   - 绝对意义：se promener (散步)", tip: "代词式动词的过去分词配合是法语的难点之一，多练习！" },
        dialogue: [
          { role: "A", text: "Tu ne te sens pas bien?", cn: "你感觉不好吗？" },
          { role: "B", text: "Non, je me suis réveillé avec un mal de tête.", cn: "不好，我醒来时头痛。" },
          { role: "A", text: "Tu es allé chez le médecin?", cn: "你去看医生了吗？" },
          { role: "B", text: "Oui, je me suis fait examiner. Le médecin m'a donné un traitement.", cn: "是的，我做了检查。医生给了我一个治疗方案。" },
          { role: "A", text: "Et ça va mieux?", cn: "现在好点了吗？" },
          { role: "B", text: "Oui, je me repose et je prends les médicaments. Je me sens mieux.", cn: "是的，我在休息并吃药。我感觉好多了。" },
        ],
        practice: [
          { type: "fill", question: "Elle ___ est reposée. (她休息了)", answer: "s'", hint: "se的缩合" },
          { type: "choice", question: "'我们散步了' 怎么说?", options: ["Nous avons promené.", "Nous nous sommes promenés.", "Nous sommes promenés.", "Nous nous avons promenés."], answer: 1 },
          { type: "fill", question: "Je me suis ___. (我洗了自己)", answer: "lavé", hint: "过去分词" },
        ]
      },
    ]
  },
  // ========== Unité 10 : Voyages et découvertes ==========
  {
    unit: 10, unitTitle: "Voyages et découvertes", unitDesc: "旅行与发现",
    lessons: [
      {
        id: 'r3-u10-l1', title: "Leçon 1 — Explorer le monde", goal: "谈论旅行经历，掌握地点介词深入",
        vocab: [
          { word: "le voyage", meaning: "旅行", example: "Le voyage était magnifique.", audio: "le voyage" },
          { word: "la destination", meaning: "目的地", example: "Quelle est ta destination?", audio: "la destination" },
          { word: "le passeport", meaning: "护照", example: "N'oublie pas ton passeport.", audio: "le passeport" },
          { word: "le visa", meaning: "签证", example: "J'ai obtenu mon visa.", audio: "le visa" },
          { word: "l'avion (m.)", meaning: "飞机", example: "Nous prenons l'avion.", audio: "l'avion" },
          { word: "le train", meaning: "火车", example: "Le train est à l'heure.", audio: "le train" },
          { word: "l'hôtel (m.)", meaning: "酒店", example: "Nous réservons un hôtel.", audio: "l'hôtel" },
          { word: "le billet", meaning: "票", example: "J'ai acheté un billet.", audio: "le billet" },
          { word: "la valise", meaning: "行李箱", example: "Ma valise est lourde.", audio: "la valise" },
          { word: "découvrir", meaning: "发现", example: "Nous avons découvert un beau village.", audio: "découvrir" },
          { word: "explorer", meaning: "探索", example: "J'aime explorer de nouveaux endroits.", audio: "explorer" },
          { word: "l'aventure (f.)", meaning: "冒险", example: "C'était une grande aventure.", audio: "l'aventure" },
        ],
        grammar: { title: "地点介词深入 (les prépositions de lieu — suite)", content: "地点介词用于表达位置、方向、来源等：\n\n1. 国家前：\n   - 阳性国家：en (在), du (来自), au (去)\n     en France, du Japon, au Canada\n   - 阴性国家：en (在/去), de (来自)\n     en Chine, de France, en Espagne\n   - 元音开头：au (在/去), d' (来自)\n     au Iran, d'Italie\n\n2. 城市前：\n   - 在/去：à\n     à Paris, à Londres, à New York\n   - 来自：de\n     de Paris, de Londres\n\n3. 方位表达：\n   - 在...旁边：à côté de\n   - 在...前面：devant\n   - 在...后面：derrière\n   - 在...上面：sur\n   - 在...下面：sous\n   - 在...里面：dans\n   - 在...之间：entre\n\n4. 方向表达：\n   - 朝向：vers, en direction de\n   - 直到：jusqu'à\n   - 穿过：à travers\n\n5. 特殊用法：\n   - chez + 人 (在某人那里)\n     chez moi (在我家), chez le médecin (在医生那里)\n   - au bord de (在...边上)\n     au bord de la mer (在海边)", tip: "地点介词是法语口语和写作的基础，多记多练！" },
        dialogue: [
          { role: "A", text: "Où es-tu allé en vacances?", cn: "你去哪里度假了？" },
          { role: "B", text: "Je suis allé en Italie, à Rome.", cn: "我去了意大利，罗马。" },
          { role: "A", text: "C'était comment?", cn: "怎么样？" },
          { role: "B", text: "C'était magnifique! Nous avons découvert des monuments historiques et mangé une cuisine délicieuse.", cn: "太美了！我们发现了历史古迹，吃了美味的美食。" },
          { role: "A", text: "Vous êtes restés longtemps?", cn: "你们待了很久吗？" },
          { role: "B", text: "Oui, nous sommes restés deux semaines. C'était une aventure inoubliable.", cn: "是的，我们待了两周。这是一次难忘的冒险。" },
        ],
        practice: [
          { type: "fill", question: "Je vais ___ France. (我去法国)", answer: "en", hint: "阴性国家前" },
          { type: "choice", question: "'他来自日本' 怎么说?", options: ["Il vient de Japon.", "Il vient du Japon.", "Il vient en Japon.", "Il vient à Japon."], answer: 1 },
          { type: "fill", question: "Nous habitons ___ Paris. (我们住在巴黎)", answer: "à", hint: "城市前" },
        ]
      },
    ]
  },
  // ========== Unité 11 : Faits divers et actualités ==========
  {
    unit: 11, unitTitle: "Faits divers et actualités", unitDesc: "社会新闻与时事",
    lessons: [
      {
        id: 'r3-u11-l1', title: "Leçon 1 — Les faits divers", goal: "讲述新闻事件，掌握被动语态深入",
        vocab: [
          { word: "le fait divers", meaning: "社会新闻", example: "J'ai lu un fait divers intéressant.", audio: "le fait divers" },
          { word: "l'accident (m.)", meaning: "事故", example: "Il y a eu un accident.", audio: "l'accident" },
          { word: "l'incendie (m.)", meaning: "火灾", example: "Un incendie s'est déclaré dans l'immeuble.", audio: "l'incendie" },
          { word: "le vol", meaning: "盗窃", example: "Il y a eu un vol dans le quartier.", audio: "le vol" },
          { word: "la victime", meaning: "受害者", example: "La victime a été transportée à l'hôpital.", audio: "la victime" },
          { word: "le témoin", meaning: "证人", example: "Le témoin a vu l'accident.", audio: "le témoin" },
          { word: "la police", meaning: "警察", example: "La police enquête.", audio: "la police" },
          { word: "l'enquête (f.)", meaning: "调查", example: "L'enquête est en cours.", audio: "l'enquête" },
          { word: "arrêter", meaning: "逮捕", example: "Le suspect a été arrêté.", audio: "arrêter" },
          { word: "le suspect", meaning: "嫌疑人", example: "Le suspect a avoué.", audio: "le suspect" },
          { word: "avouer", meaning: "承认", example: "Il a avoué son crime.", audio: "avouer" },
          { word: "le tribunal", meaning: "法庭", example: "L'affaire sera jugée au tribunal.", audio: "le tribunal" },
        ],
        grammar: { title: "被动语态深入 (la voix passive — suite)", content: "被动语态在新闻和叙述中很常见：\n\n1. 不同时态的被动：\n   - 现在时：Le suspect est interrogé par la police. (嫌疑人被警察审问)\n   - 复合过去时：Le suspect a été arrêté hier. (嫌疑人昨天被逮捕)\n   - 未完成过去时：La ville était entourée de murs. (城市被墙壁环绕)\n   - 简单将来时：Le coupable sera jugé demain. (罪犯明天将被审判)\n\n2. 施动者的省略：\n   当施动者不重要或未知时，可以省略 par + 施动者：\n   Le magasin a été cambriolé. (商店被盗了)\n   La route est bloquée. (路被堵了)\n\n3. 被动语态 vs 代词式动词的被动意义：\n   - 被动语态：Le livre est lu par les étudiants. (书被学生读)\n   - 代词式被动：Ce livre se lit facilement. (这本书读起来很容易)\n\n4. 新闻标题中的被动：\n   Un homme a été arrêté. (一名男子被逮捕)\n   Les voleurs ont été identifiés. (小偷被确认身份)", tip: "被动语态在法语新闻和叙述中非常重要，多读新闻多练习！" },
        dialogue: [
          { role: "A", text: "Tu as lu les nouvelles ce matin?", cn: "你今天早上看新闻了吗？" },
          { role: "B", text: "Oui, il y a eu un incendie dans un immeuble du 10e arrondissement.", cn: "是的，10区的一栋楼发生了火灾。" },
          { role: "A", text: "Est-ce qu'il y a des victimes?", cn: "有受害者吗？" },
          { role: "B", text: "Heureusement, non. Les habitants ont été évacués à temps.", cn: "幸好没有。居民被及时疏散了。" },
          { role: "A", text: "Et l'enquête, qu'est-ce qu'elle dit?", cn: "调查怎么说？" },
          { role: "B", text: "L'enquête est en cours. On pense que l'incendie a été causé par un court-circuit.", cn: "调查正在进行。人们认为火灾是由短路引起的。" },
        ],
        practice: [
          { type: "fill", question: "Le suspect ___ arrêté hier. (嫌疑人昨天被逮捕)", answer: "a été", hint: "复合过去时的被动" },
          { type: "choice", question: "'路被堵了' 怎么说?", options: ["La route bloque.", "La route est bloquée.", "La route a bloqué.", "La route se bloque."], answer: 1 },
          { type: "fill", question: "Les voleurs ___ été identifiés.", answer: "ont", hint: "avoir的复合过去时" },
        ]
      },
    ]
  },
  // ========== Unité 12 : Bilan et perspectives ==========
  {
    unit: 12, unitTitle: "Bilan et perspectives", unitDesc: "总结与展望",
    lessons: [
      {
        id: 'r3-u12-l1', title: "Leçon 1 — Faire le bilan", goal: "总结学习成果，掌握综合语法",
        vocab: [
          { word: "le bilan", meaning: "总结", example: "Il est temps de faire le bilan.", audio: "le bilan" },
          { word: "la perspective", meaning: "展望", example: "Les perspectives sont bonnes.", audio: "la perspective" },
          { word: "résumer", meaning: "总结", example: "Je vais résumer la leçon.", audio: "résumer" },
          { word: "l'essentiel (m.)", meaning: "要点", example: "L'essentiel est de comprendre.", audio: "l'essentiel" },
          { word: "approfondir", meaning: "深入", example: "Je veux approfondir mes connaissances.", audio: "approfondir" },
          { word: "maîtriser", meaning: "掌握", example: "Je veux maîtriser le subjonctif.", audio: "maîtriser" },
          { word: "progresser", meaning: "进步", example: "Je progresse en français.", audio: "progresser" },
          { word: "l'objectif (m.)", meaning: "目标", example: "Mon objectif est de parler couramment.", audio: "l'objectif" },
          { word: "atteindre", meaning: "达到", example: "J'ai atteint mon objectif.", audio: "atteindre" },
          { word: "la confiance", meaning: "信心", example: "J'ai confiance en moi.", audio: "la confiance" },
          { word: "l'expérience (f.)", meaning: "经验", example: "C'est une expérience enrichissante.", audio: "l'expérience" },
          { word: "enrichissant", meaning: "丰富的", example: "Ce voyage est enrichissant.", audio: "enrichissant" },
        ],
        grammar: { title: "综合语法复习 (révision générale)", content: "本册语法总结：\n\n1. 虚拟式 (le subjonctif)：\n   - 表达愿望、必要性、情感、怀疑\n   - Je veux que tu viennes.\n   - Il faut que nous partions.\n\n2. 条件式过去时 (le conditionnel passé)：\n   - 表达过去本可能但未发生的事\n   - J'aurais voulu t'aider.\n\n3. 间接引语深入 (le discours rapporté)：\n   - 时态呼应：présent → imparfait, futur → conditionnel\n   - Il a dit qu'il venait.\n\n4. 目的从句 (les propositions de but)：\n   - pour que + subj., afin que + subj.\n   - Je travaille pour réussir.\n\n5. 被动语态 (la voix passive)：\n   - être + 过去分词 + par\n   - Le livre est lu par l'étudiant.\n\n6. 愈过去时 (le plus-que-parfait)：\n   - avoir/être 的 imparfait + 过去分词\n   - Il avait déjà mangé quand je suis arrivé.\n\n7. 比较级和最高级 (le comparatif et superlatif)：\n   - plus... que, le plus...\n   - Il est plus grand que moi.\n\n8. 代词式动词深入 (les verbes pronominaux)：\n   - 复合时态中的配合\n   - Elle s'est reposée.", tip: "B1级别是法语学习的重要里程碑！继续加油，向B2迈进！" },
        dialogue: [
          { role: "A", text: "Alors, tu as fait le bilan de ton français?", cn: "那么，你总结了自己的法语学习吗？" },
          { role: "B", text: "Oui, j'ai fait beaucoup de progrès. J'ai maîtrisé le subjonctif et le conditionnel.", cn: "是的，我进步很大。我掌握了虚拟式和条件式。" },
          { role: "A", text: "Et quel est ton objectif pour le prochain niveau?", cn: "你下一个级别的目标是什么？" },
          { role: "B", text: "Je veux approfondir mes connaissances et atteindre un niveau B2.", cn: "我想深入知识并达到B2水平。" },
          { role: "A", text: "C'est un bon objectif. Tu as confiance?", cn: "好目标。你有信心吗？" },
          { role: "B", text: "Oui, j'ai confiance en moi. Cette expérience a été enrichissante.", cn: "是的，我有信心。这次经历很丰富。" },
        ],
        practice: [
          { type: "fill", question: "Je veux que tu ___ (venir) avec moi.", answer: "viennes", hint: "venir的虚拟式" },
          { type: "choice", question: "'我本想帮你' 怎么说?", options: ["Je veux t'aider.", "J'ai voulu t'aider.", "J'aurais voulu t'aider.", "Je voudrais t'aider."], answer: 2 },
          { type: "fill", question: "Le livre ___ lu par l'étudiant.", answer: "est", hint: "被动语态" },
        ]
      },
    ]
  },
];
