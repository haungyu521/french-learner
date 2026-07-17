/**
 * Reflets 2 — 走遍法国 第2册
 * 级别：A2→B1 | 12个单元 | 延续第1册人物线索
 * 新增语法：未完成过去时、简单将来时、关系代词、条件式等
 */
export const reflets2Data = [
  // ========== Unité 1 : Souvenirs de vacances ==========
  {
    unit: 1, unitTitle: "Souvenirs de vacances", unitDesc: "假期回忆、未完成过去时入门",
    lessons: [
      {
        id: 'r2-u1-l1', title: "Leçon 1 — Raconter ses vacances", goal: "学会讲述假期经历，掌握未完成过去时(imparfait)基本概念",
        vocab: [
          { word: "les vacances (f.pl.)", meaning: "假期", example: "Les vacances étaient super!", audio: "les vacances" },
          { word: "se souvenir (de)", meaning: "记得", example: "Je me souviens de ce voyage.", audio: "se souvenir" },
          { word: "inoubliable", meaning: "难忘的", example: "C'était un voyage inoubliable.", audio: "inoubliable" },
          { word: "se reposer", meaning: "休息", example: "Je me suis reposé pendant les vacances.", audio: "se reposer" },
          { word: "se promener", meaning: "散步", example: "Nous nous promenions sur la plage.", audio: "se promener" },
          { word: "le paysage", meaning: "风景", example: "Le paysage était magnifique.", audio: "le paysage" },
          { word: "la mer", meaning: "海", example: "La mer était calme.", audio: "la mer" },
          { word: "la montagne", meaning: "山", example: "Nous avons fait de la montagne.", audio: "la montagne" },
          { word: "le village", meaning: "村庄", example: "Un petit village typique.", audio: "le village" },
          { word: "l'étranger (m.)", meaning: "外国", example: "Je suis allé à l'étranger.", audio: "l'étranger" },
          { word: "se dépêcher", meaning: "赶紧", example: "Dépêche-toi!", audio: "se dépêcher" },
          { word: "autrefois", meaning: "从前", example: "Autrefois, je vivais à la campagne.", audio: "autrefois" },
        ],
        grammar: { title: "未完成过去时 (l'imparfait)", content: "未完成过去时用于描述过去的状态、习惯、正在进行的动作：\n\n构成：nous 的现在时词干 + -ais, -ais, -ait, -ions, -iez, -aient\n\n例：parler → nous parlons → parl-\n- je parlais, tu parlais, il parlait\n- nous parlions, vous parliez, ils parlaient\n\n用法：\n1. 描述过去的状态/背景：\n   Il faisait beau. (天气很好)\n   La mer était calme. (海很平静)\n\n2. 过去的习惯：\n   Tous les étés, nous allions à la plage. (每年夏天我们都去海滩)\n\n3. 过去正在进行的动作：\n   Je lisais quand il est arrivé. (他到达时我正在读书)\n\n对比 passé composé vs imparfait：\n- passé composé: 一次性完成的动作 → J'ai visité Paris. (我参观了巴黎)\n- imparfait: 持续的/重复的状态 → Je visitais souvent Paris. (我经常参观巴黎)\n\n常用 imparfait 的信号词：\ntous les jours, chaque été, souvent, toujours, d'habitude, autrefois", tip: " imparfait 就像电影的'背景画面'，passé composé 是'动作画面'。一个描述场景，一个推动剧情。" },
        dialogue: [
          { role: "Sophie", text: "Alors, tes vacances, c'était comment?", cn: "那么，你的假期怎么样？" },
          { role: "Laurent", text: "C'était formidable! Je suis allé en Provence. Il faisait beau tous les jours.", cn: "太棒了！我去了普罗旺斯。每天天气都很好。" },
          { role: "Sophie", text: "Tu faisais quoi?", cn: "你做什么了？" },
          { role: "Laurent", text: "Le matin, je me promenais sur la plage. L'après-midi, je visitais des villages.", cn: "早上我在海滩散步。下午我参观村庄。" },
          { role: "Sophie", text: "Et le soir?", cn: "晚上呢？" },
          { role: "Laurent", text: "Le soir, nous dînions dans un petit restaurant. La cuisine était délicieuse!", cn: "晚上我们在一家小餐厅吃饭。菜非常好吃！" },
        ],
        practice: [
          { type: "fill", question: "Il ___ beau tous les jours. (每天天气都好)", answer: "faisait", hint: "faire的imparfait" },
          { type: "choice", question: "imparfait 用来表达什么?", options: ["完成的动作", "过去的状态和习惯", "将来的计划", "现在的动作"], answer: 1 },
          { type: "fill", question: "Nous ___ à la plage. (我们去海滩 — imparfait)", answer: "allions", hint: "aller的imparfait" },
          { type: "choice", question: "'我过去经常读书' 怎么说?", options: ["J'ai lu.", "Je lisais.", "Je lirai.", "Je lis."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unité 2 : Projets d'avenir ==========
  {
    unit: 2, unitTitle: "Projets d'avenir", unitDesc: "未来计划、简单将来时",
    lessons: [
      {
        id: 'r2-u2-l1', title: "Leçon 1 — Parler de l'avenir", goal: "学会谈论未来计划，掌握简单将来时(futur simple)",
        vocab: [
          { word: "l'avenir (m.)", meaning: "未来", example: "Qu'est-ce que l'avenir nous réserve?", audio: "l'avenir" },
          { word: "le projet", meaning: "计划", example: "J'ai un projet important.", audio: "le projet" },
          { word: "prévoir", meaning: "计划；预计", example: "Je prévois de voyager.", audio: "prévoir" },
          { word: "espérer", meaning: "希望", example: "J'espère réussir.", audio: "espérer" },
          { word: "réussir", meaning: "成功", example: "Je vais réussir!", audio: "réussir" },
          { word: "l'examen (m.)", meaning: "考试", example: "J'ai un examen la semaine prochaine.", audio: "l'examen" },
          { word: "le diplôme", meaning: "文凭", example: "Je veux obtenir mon diplôme.", audio: "le diplôme" },
          { word: "la carrière", meaning: "职业", example: "Je veux une carrière intéressante.", audio: "la carrière" },
          { word: "déménager", meaning: "搬家", example: "Nous allons déménager.", audio: "déménager" },
          { word: "se marier", meaning: "结婚", example: "Ils vont se marier.", audio: "se marier" },
          { word: "avoir des enfants", meaning: "生孩子", example: "Je veux avoir des enfants.", audio: "avoir des enfants" },
          { word: "peut-être", meaning: "也许", example: "Peut-être que je vais à l'étranger.", audio: "peut-être" },
        ],
        grammar: { title: "简单将来时 (le futur simple)", content: "简单将来时表达未来的计划或预测：\n\n构成：动词不定式 + -ai, -as, -a, -ons, -ez, -ont\n\n-er/-ir 动词：不定式 + 词尾\n- parler → je parlerai, tu parleras, il parlera...\n- finir → je finirai, tu finiras, il finira...\n\n-re 动词：去掉e + 词尾\n- prendre → je prendrai, tu prendras...\n- être → je serai, tu seras, il sera...\n- avoir → j'aurai, tu auras, il aura...\n- aller → j'irai, tu iras, il ira...\n- faire → je ferai, tu feras, il fera...\n- venir → je viendrai, tu viendras...\n- voir → je verrai, tu verras...\n- pouvoir → je pourrai, tu pourras...\n- vouloir → je voudrai, tu voudras...\n\n用法：\n1. 未来计划：Je voyagerai en France l'année prochaine. (我明年将去法国旅行)\n2. 预测：Il fera beau demain. (明天天气会好)\n3. 承诺：Je t'aiderai. (我会帮你)\n\n信号词：demain, la semaine prochaine, l'année prochaine, dans un an, bientôt, un jour", tip: "简单将来时的词尾其实就是 être 的现在时：ai, as, a, ons, ez, ont → 对应 je suis, tu es, il est..." },
        dialogue: [
          { role: "A", text: "Qu'est-ce que tu feras après tes études?", cn: "你学完之后会做什么？" },
          { role: "B", text: "Je chercherai du travail en France. J'espère rester à Paris.", cn: "我将在法国找工作。我希望留在巴黎。" },
          { role: "A", text: "Et moi, je continuerai mes études. Je veux faire un master.", cn: "而我将继续学习。我想读硕士。" },
          { role: "B", text: "Dans quoi?", cn: "什么方向？" },
          { role: "A", text: "En informatique. Plus tard, je créerai ma propre entreprise.", cn: "计算机。以后，我将创建自己的公司。" },
          { role: "B", text: "C'est un beau projet! Bonne chance!", cn: "好计划！祝你好运！" },
        ],
        practice: [
          { type: "fill", question: "Je ___ en France l'année prochaine. (我明年将去法国)", answer: "voyagerai", hint: "voyager的futur simple" },
          { type: "choice", question: "'他将做' 怎么说?", options: ["Il fait.", "Il a fait.", "Il fera.", "Il faisait."], answer: 2 },
          { type: "fill", question: "Nous ___ à Paris. (我们将去巴黎)", answer: "irons", hint: "aller的futur simple" },
        ]
      },
    ]
  },
  // ========== Unité 3 : Vivre ensemble ==========
  {
    unit: 3, unitTitle: "Vivre ensemble", unitDesc: "邻里关系、社区生活、关系代词qui/que",
    lessons: [
      {
        id: 'r2-u3-l1', title: "Leçon 1 — Les voisins", goal: "学会谈论邻里关系，掌握关系代词qui/que/où",
        vocab: [
          { word: "le voisin / la voisine", meaning: "邻居", example: "Mon voisin est très gentil.", audio: "le voisin" },
          { word: "l'immeuble (m.)", meaning: "楼房", example: "J'habite dans un immeuble.", audio: "l'immeuble" },
          { word: "l'étage (m.)", meaning: "楼层", example: "J'habite au troisième étage.", audio: "l'étage" },
          { word: "l'ascenseur (m.)", meaning: "电梯", example: "L'ascenseur est en panne.", audio: "l'ascenseur" },
          { word: "le quartier", meaning: "街区", example: "Mon quartier est calme.", audio: "le quartier" },
          { word: "tranquille", meaning: "安静的", example: "C'est un quartier tranquille.", audio: "tranquille" },
          { word: "bruyant", meaning: "吵闹的", example: "La rue est bruyante.", audio: "bruyant" },
          { word: "s'entendre (avec)", meaning: "和...相处得好", example: "Je m'entends bien avec mes voisins.", audio: "s'entendre" },
          { word: "se plaindre (de)", meaning: "抱怨", example: "Les voisins se plaignent du bruit.", audio: "se plaindre" },
          { word: "le bruit", meaning: "噪音", example: "Il y a trop de bruit.", audio: "le bruit" },
          { word: "la fête", meaning: "聚会；节日", example: "Il y a une fête ce soir.", audio: "la fête" },
          { word: "partager", meaning: "分享", example: "Nous partageons le jardin.", audio: "partager" },
        ],
        grammar: { title: "关系代词 qui, que, où", content: "关系代词连接两个句子，代替先行词：\n\n1. qui — 代替主语\n   L'homme qui parle est mon père. (说话的那个男人是我爸爸)\n   C'est le livre qui m'intéresse. (这是让我感兴趣的书)\n\n2. que (qu') — 代替直接宾语\n   Le film que j'ai vu était bien. (我看的电影很好)\n   La personne que j'ai rencontrée est sympa. (我遇到的人很好)\n\n3. où — 代替地点\n   La ville où j'habite est belle. (我住的城市很美)\n   Le pays où il est né est la France. (他出生的国家是法国)\n\n4. dont — 代替 de + 名词\n   Le film dont je parle est excellent. (我谈到的电影非常好)\n\n对比：\n- L'homme qui parle... (qui = 主语，后面跟动词)\n- L'homme que je vois... (que = 宾语，后面跟主语+动词)\n- La ville où je vis... (où = 地点)", tip: "qui 后面直接跟动词，que 后面跟主语+动词。这是区分它们的最简单方法！" },
        dialogue: [
          { role: "A", text: "Tu habites dans quel quartier?", cn: "你住哪个街区？" },
          { role: "B", text: "J'habite dans le 5e arrondissement, dans un immeuble qui est très ancien.", cn: "我住第5区，在一栋很老的楼里。" },
          { role: "A", text: "Et les voisins, tu t'entends bien avec eux?", cn: "邻居呢，你跟他们相处好吗？" },
          { role: "B", text: "Oui, la voisine qui habite à côté est très sympa. Elle a un chat que j'adore.", cn: "是的，旁边的邻居很好。她有一只我很喜欢的猫。" },
          { role: "A", text: "C'est le quartier où tu te sens bien?", cn: "是你觉得舒服的街区？" },
          { role: "B", text: "Oui, c'est un quartier où il y a beaucoup de commerces.", cn: "是的，这个街区有很多商店。" },
        ],
        practice: [
          { type: "fill", question: "L'homme ___ parle est mon père. (说话的那个男人是我爸爸)", answer: "qui", hint: "关系代词主语" },
          { type: "choice", question: "'我看的电影很好' 怎么说?", options: ["Le film qui j'ai vu est bien.", "Le film que j'ai vu est bien.", "Le film où j'ai vu est bien.", "Le film dont j'ai vu est bien."], answer: 1 },
          { type: "fill", question: "La ville ___ j'habite est Paris. (我住的城市是巴黎)", answer: "où", hint: "关系代词地点" },
        ]
      },
    ]
  },
  // ========== Unité 4 : Les médias ==========
  {
    unit: 4, unitTitle: "Les médias", unitDesc: "媒体、新闻、表达观点",
    lessons: [
      {
        id: 'r2-u4-l1', title: "Leçon 1 — L'actualité", goal: "学会谈论新闻和媒体，表达观点",
        vocab: [
          { word: "le journal", meaning: "报纸", example: "Je lis le journal tous les jours.", audio: "le journal" },
          { word: "la télévision", meaning: "电视", example: "Je regarde la télévision le soir.", audio: "la télévision" },
          { word: "la radio", meaning: "广播", example: "J'écoute la radio.", audio: "la radio" },
          { word: "internet", meaning: "互联网", example: "Je cherche sur internet.", audio: "internet" },
          { word: "l'article (m.)", meaning: "文章", example: "J'ai lu un article intéressant.", audio: "l'article" },
          { word: "l'information (f.)", meaning: "信息；新闻", example: "Les informations sont à 20 heures.", audio: "l'information" },
          { word: "le journaliste", meaning: "记者", example: "Le journaliste a écrit un reportage.", audio: "le journaliste" },
          { word: "la publicité", meaning: "广告", example: "Il y a trop de publicité.", audio: "la publicité" },
          { word: "donner son avis", meaning: "表达观点", example: "Je veux donner mon avis.", audio: "donner son avis" },
          { word: "être d'accord", meaning: "同意", example: "Je suis d'accord avec toi.", audio: "être d'accord" },
          { word: "ne pas être d'accord", meaning: "不同意", example: "Je ne suis pas d'accord.", audio: "pas d'accord" },
          { word: "à mon avis", meaning: "在我看来", example: "À mon avis, c'est une bonne idée.", audio: "à mon avis" },
        ],
        grammar: { title: "表达观点：penser, trouver, sembler", content: "表达观点的常用句型：\n\n1. Je pense que... (我认为...)\n   Je pense que c'est une bonne idée.\n   Je ne pense pas que ce soit une bonne idée. (虚拟式)\n\n2. Je trouve que... (我觉得...)\n   Je trouve que ce film est excellent.\n   Je trouve cette idée intéressante.\n\n3. Il me semble que... (我觉得/似乎...)\n   Il me semble que tu as raison.\n\n4. À mon avis... (在我看来...)\n   À mon avis, il a tort.\n\n5. Selon moi... (根据我...)\n   Selon moi, c'est la meilleure solution.\n\n同意/不同意：\n- Je suis d'accord. (我同意)\n- Je ne suis pas d'accord. (我不同意)\n- C'est vrai. (这是真的)\n- C'est faux. (这是假的)\n- Tu as raison. (你说得对)\n- Tu as tort. (你说错了)\n- Exactement! / Absolument! (完全正确！)", tip: "法国人非常喜欢讨论和辩论！在法国，表达不同意见不是不礼貌，而是正常的交流方式。" },
        dialogue: [
          { role: "A", text: "Tu lis les journaux papier ou en ligne?", cn: "你看纸质报纸还是网上看？" },
          { role: "B", text: "Je lis surtout en ligne. C'est plus rapide et gratuit.", cn: "我主要在网上看。更快而且免费。" },
          { role: "A", text: "À mon avis, les journaux papier sont plus fiables.", cn: "在我看来，纸质报纸更可靠。" },
          { role: "B", text: "Je ne suis pas d'accord. Les sites d'information sont mis à jour en temps réel.", cn: "我不同意。新闻网站实时更新。" },
          { role: "A", text: "C'est vrai, mais il y a beaucoup de fausses informations en ligne.", cn: "确实，但网上有很多假信息。" },
          { role: "B", text: "Tu as raison. Il faut vérifier les sources.", cn: "你说得对。需要核实来源。" },
        ],
        practice: [
          { type: "fill", question: "___ mon avis, c'est une bonne idée. (在我看来，这是个好主意)", answer: "À", hint: "表达观点" },
          { type: "choice", question: "'我同意' 怎么说?", options: ["Je suis d'accord.", "Je pense.", "Je trouve.", "Il me semble."], answer: 0 },
          { type: "fill", question: "Je ___ que c'est une bonne idée. (我认为这是个好主意)", answer: "pense", hint: "认为" },
        ]
      },
    ]
  },
  // ========== Unité 5 : La nature et l'environnement ==========
  {
    unit: 5, unitTitle: "La nature et l'environnement", unitDesc: "自然环境、环保话题、条件式",
    lessons: [
      {
        id: 'r2-u5-l1', title: "Leçon 1 — Protéger la planète", goal: "学会谈论环保话题，掌握条件式基础",
        vocab: [
          { word: "l'environnement (m.)", meaning: "环境", example: "Il faut protéger l'environnement.", audio: "l'environnement" },
          { word: "la pollution", meaning: "污染", example: "La pollution est un problème grave.", audio: "la pollution" },
          { word: "recycler", meaning: "回收", example: "Il faut recycler le plastique.", audio: "recycler" },
          { word: "gaspiller", meaning: "浪费", example: "Ne gaspille pas l'eau!", audio: "gaspiller" },
          { word: "économiser", meaning: "节约", example: "Il faut économiser l'énergie.", audio: "économiser" },
          { word: "l'énergie (f.)", meaning: "能源", example: "Les énergies renouvelables.", audio: "l'énergie" },
          { word: "le réchauffement", meaning: "变暖", example: "Le réchauffement climatique.", audio: "le réchauffement" },
          { word: "la planète", meaning: "星球；地球", example: "Sauvons la planète!", audio: "la planète" },
          { word: "le climat", meaning: "气候", example: "Le climat change.", audio: "le climat" },
          { word: "la forêt", meaning: "森林", example: "La forêt est importante.", audio: "la forêt" },
          { word: "l'espèce (f.)", meaning: "物种", example: "Les espèces en danger.", audio: "l'espèce" },
          { word: "menacé(e)", meaning: "受到威胁的", example: "Les ours polaires sont menacés.", audio: "menacé" },
        ],
        grammar: { title: "条件式现在时 (le conditionnel présent)", content: "条件式用于表达礼貌请求、假设、建议：\n\n构成：简单将来时词干 + imparfait 词尾 (-ais, -ais, -ait, -ions, -iez, -aient)\n\n- parler → je parlerais\n- finir → je finirais\n- être → je serais\n- avoir → j'aurais\n- aller → j'irais\n- faire → je ferais\n- pouvoir → je pourrais\n- vouloir → je voudrais\n\n用法：\n1. 礼貌请求：\n   Je voudrais un café. (我想要一杯咖啡)\n   Pourriez-vous m'aider? (您能帮我吗？)\n\n2. 建议：\n   Tu devrais faire du sport. (你应该做运动)\n   On pourrait aller au cinéma. (我们可以去看电影)\n\n3. 假设（si + imparfait → conditionnel）：\n   Si j'étais riche, je voyagerais. (如果我有钱，我会旅行)\n   Si tu venais, nous irions au cinéma. (如果你来，我们就去看电影)\n\n重要句型：si + imparfait → conditionnel\n- Si j'avais le temps, je lirais plus. (如果我有时间，我会读更多)", tip: "条件式在法语中无处不在！Je voudrais（我想要）就是条件式，你从第一课就在用了！" },
        dialogue: [
          { role: "A", text: "Si tu pouvais changer une chose pour l'environnement, tu ferais quoi?", cn: "如果你能改变一件关于环境的事，你会做什么？" },
          { role: "B", text: "Si j'étais président, je rendrais les transports gratuits.", cn: "如果我是总统，我会让交通免费。" },
          { role: "A", text: "Bonne idée! Moi, j'interdirais les voitures dans le centre-ville.", cn: "好主意！我会禁止汽车进入市中心。" },
          { role: "B", text: "Et si tout le monde recyclait, on pourrait réduire la pollution.", cn: "如果每个人都回收，我们就能减少污染。" },
          { role: "A", text: "Tu as raison. Il faudrait aussi économiser l'énergie.", cn: "你说得对。还应该节约能源。" },
          { role: "B", text: "Exactement. On devrait tous faire un effort!", cn: "完全正确。我们都应该做出努力！" },
        ],
        practice: [
          { type: "fill", question: "Si j'étais riche, je ___. (如果我有钱，我会旅行)", answer: "voyagerais", hint: "voyager的条件式" },
          { type: "choice", question: "'您能帮我吗？' 怎么说?", options: ["Pouvez-vous m'aider?", "Pourriez-vous m'aider?", "Pouvez-vous m'aider?", "Pourriez-vous m'aider?"], answer: 1 },
          { type: "fill", question: "Je ___ un café. (我想要一杯咖啡)", answer: "voudrais", hint: "vouloir的条件式" },
        ]
      },
    ]
  },
  // ========== Unité 6 : La santé ==========
  {
    unit: 6, unitTitle: "La santé", unitDesc: "健康话题、看医生、身体与饮食",
    lessons: [
      {
        id: 'r2-u6-l1', title: "Leçon 1 — Rester en forme", goal: "学会谈论健康生活方式，掌握代词式动词",
        vocab: [
          { word: "la santé", meaning: "健康", example: "La santé est importante.", audio: "la santé" },
          { word: "en forme", meaning: "状态好", example: "Je suis en forme!", audio: "en forme" },
          { word: "se sentir", meaning: "感觉", example: "Je me sens fatigué.", audio: "se sentir" },
          { word: "le stress", meaning: "压力", example: "J'ai beaucoup de stress.", audio: "le stress" },
          { word: "l'alimentation (f.)", meaning: "饮食", example: "Une alimentation équilibrée.", audio: "l'alimentation" },
          { word: "équilibré(e)", meaning: "均衡的", example: "Un régime équilibré.", audio: "équilibré" },
          { word: "le régime", meaning: "饮食；节食", example: "Je fais un régime.", audio: "le régime" },
          { word: "maigrir", meaning: "减肥", example: "Je veux maigrir.", audio: "maigrir" },
          { word: "grossir", meaning: "增重", example: "J'ai grossi.", audio: "grossir" },
          { word: "fumer", meaning: "抽烟", example: "Il ne faut pas fumer.", audio: "fumer" },
          { word: "l'hôpital (m.)", meaning: "医院", example: "Il est à l'hôpital.", audio: "l'hôpital" },
          { word: "le médicament", meaning: "药物", example: "Prends ce médicament.", audio: "le médicament" },
        ],
        grammar: { title: "代词式动词 (les verbes pronominaux)", content: "代词式动词带有自反代词 se：\n\n现在时变位：\nse laver — 洗自己\nje me lave, tu te laves, il/elle se lave\nnous nous lavons, vous vous lavez, ils/elles se lavent\n\n常见代词式动词：\n- se lever (起床) → je me lève\n- se coucher (睡觉) → je me couche\n- se brosser (刷) → je me brosse les dents\n- s'habiller (穿衣) → je m'habille\n- se dépêcher (赶紧) → je me dépêche\n- se reposer (休息) → je me repose\n- se promener (散步) → je me promène\n- s'amuser (玩得开心) → je m'amuse\n- se sentir (感觉) → je me sens\n- se souvenir (记得) → je me souviens\n\n过去时（用 être 做助动词）：\n- Je me suis levé(e). (我起床了)\n- Elle s'est couchée tard. (她很晚才睡)\n- Nous nous sommes promenés. (我们散了步)\n\n注意：过去分词要和主语配合！", tip: "法国人的日常问候 'Comment tu te sens?' (你感觉怎么样) 就是用代词式动词。" },
        dialogue: [
          { role: "Médecin", text: "Comment vous sentez-vous?", cn: "您感觉怎么样？" },
          { role: "Patient", text: "Je me sens très fatigué. Je me couche tard et je me lève tôt.", cn: "我感觉很累。我睡得晚起得早。" },
          { role: "Médecin", text: "Est-ce que vous vous reposez bien?", cn: "您休息得好吗？" },
          { role: "Patient", text: "Non, je ne me repose pas assez. Et je mange mal.", cn: "不好，我休息不够。而且吃得不好。" },
          { role: "Médecin", text: "Il faut que vous changiez votre mode de vie. Couchez-vous avant minuit et mangez équilibré.", cn: "您需要改变生活方式。12点前睡觉，饮食均衡。" },
          { role: "Patient", text: "D'accord, docteur. Merci.", cn: "好的，医生。谢谢。" },
        ],
        practice: [
          { type: "fill", question: "Je ___ lève à 7 heures. (我7点起床)", answer: "me", hint: "自反代词" },
          { type: "choice", question: "'她感觉很好' 怎么说?", options: ["Elle sent bien.", "Elle se sent bien.", "Elle est sent bien.", "Elle se sentez bien."], answer: 1 },
          { type: "fill", question: "Nous nous sommes ___. (我们散了步)", answer: "promenés", hint: "se promener的过去分词" },
        ]
      },
    ]
  },
  // ========== Unité 7-12 (condensed) ==========
  {
    unit: 7, unitTitle: "L'amour et l'amitié", unitDesc: "爱情与友谊、情感表达、虚拟式入门",
    lessons: [
      {
        id: 'r2-u7-l1', title: "Leçon 1 — Les sentiments", goal: "学会表达情感和人际关系",
        vocab: [
          { word: "l'amour (m.)", meaning: "爱情", example: "C'est une belle histoire d'amour.", audio: "l'amour" },
          { word: "l'amitié (f.)", meaning: "友谊", example: "L'amitié est importante.", audio: "l'amitié" },
          { word: "tomber amoureux/amoureuse", meaning: "爱上", example: "Je suis tombé amoureux d'elle.", audio: "tomber amoureux" },
          { word: "se fiancer", meaning: "订婚", example: "Ils se sont fiancés.", audio: "se fiancer" },
          { word: "se marier", meaning: "结婚", example: "Ils se sont mariés en juin.", audio: "se marier" },
          { word: "heureux/heureuse", meaning: "幸福的", example: "Je suis très heureux.", audio: "heureux" },
          { word: "triste", meaning: "伤心的", example: "Elle est triste aujourd'hui.", audio: "triste" },
          { word: "jaloux/jalouse", meaning: "嫉妒的", example: "Il est un peu jaloux.", audio: "jaloux" },
          { word: "fier/fière", meaning: "骄傲的", example: "Je suis fier de toi.", audio: "fier" },
          { word: "avoir confiance", meaning: "信任", example: "J'ai confiance en toi.", audio: "avoir confiance" },
          { word: "manquer", meaning: "想念", example: "Tu me manques.", audio: "manquer" },
          { word: "embrasser", meaning: "亲吻", example: "En France, on fait la bise.", audio: "embrasser" },
        ],
        grammar: { title: "虚拟式入门 (le subjonctif)", content: "虚拟式用于表达愿望、必要性、情感、怀疑：\n\n常见触发结构：\n1. Il faut que... (必须)\n   Il faut que tu viennes. (你必须来)\n\n2. Je veux que... (我希望)\n   Je veux que tu sois heureux. (我希望你幸福)\n\n3. Je suis content que... (我高兴)\n   Je suis content que tu sois là. (我很高兴你在)\n\n4. Il est possible que... (可能)\n   Il est possible qu'il vienne. (他可能会来)\n\n虚拟式变位（以 parler 为例）：\nque je parle, que tu parles, qu'il parle\nque nous parlions, que vous parliez, qu'ils parlent\n\nêtre: que je sois, que tu sois, qu'il soit...\navoir: que j'aie, que tu aies, qu'il ait...\nfaire: que je fasse...\naller: que j'aille...\nvenir: que je vienne...\npouvoir: que je puisse...\nvouloir: que je veuille...\n\n注意：很多虚拟式形式和直陈式相同，只有少数不规则。", tip: "法语的贴面礼 (la bise) 是表达友谊的方式！不同地区贴2-4下，而且不一定真的碰到脸。" },
        dialogue: [
          { role: "A", text: "Tu connais Marie? Elle s'est fiancée!", cn: "你认识Marie吗？她订婚了！" },
          { role: "B", text: "Vraiment? Je suis contente pour elle! Elle est heureuse?", cn: "真的？我为她高兴！她开心吗？" },
          { role: "A", text: "Oui, elle est très heureuse. Il faut que tu la félicites!", cn: "是的，她非常开心。你应该祝贺她！" },
          { role: "B", text: "Bien sûr! Je veux lui envoyer un cadeau.", cn: "当然！我想给她送个礼物。" },
        ],
        practice: [
          { type: "fill", question: "Il faut que tu ___. (你必须来)", answer: "viennes", hint: "venir的虚拟式" },
          { type: "choice", question: "'我很高兴你在' 怎么说?", options: ["Je suis content que tu es là.", "Je suis content que tu sois là.", "Je suis content que tu seras là.", "Je suis content que tu étais là."], answer: 1 },
        ]
      },
    ]
  },
  {
    unit: 8, unitTitle: "La justice", unitDesc: "法律与正义、社会规则、让步从句",
    lessons: [
      {
        id: 'r2-u8-l1', title: "Leçon 1 — Les règles de la société", goal: "学会谈论法律和规则",
        vocab: [
          { word: "la justice", meaning: "正义；司法", example: "La justice est importante.", audio: "la justice" },
          { word: "la loi", meaning: "法律", example: "Il faut respecter la loi.", audio: "la loi" },
          { word: "le droit", meaning: "权利；法律", example: "Tout le monde a le droit à l'éducation.", audio: "le droit" },
          { word: "le devoir", meaning: "义务；作业", example: "C'est mon devoir.", audio: "le devoir" },
          { word: "interdit", meaning: "禁止的", example: "C'est interdit.", audio: "interdit" },
          { word: "permis", meaning: "允许的", example: "C'est permis.", audio: "permis" },
          { word: "punir", meaning: "惩罚", example: "Il a été puni.", audio: "punir" },
          { word: "la peine", meaning: "刑罚", example: "Une peine de prison.", audio: "la peine" },
          { word: "le tribunal", meaning: "法庭", example: "Il va au tribunal.", audio: "le tribunal" },
          { word: "le juge", meaning: "法官", example: "Le juge a décidé.", audio: "le juge" },
          { word: "la liberté", meaning: "自由", example: "La liberté est un droit fondamental.", audio: "la liberté" },
          { word: "l'égalité (f.)", meaning: "平等", example: "L'égalité entre tous.", audio: "l'égalité" },
        ],
        grammar: { title: "让步与对立：bien que, quoique, malgré", content: "表达让步和对比：\n\n1. bien que / quoique + 虚拟式 (虽然)\n   Bien qu'il soit fatigué, il continue. (虽然他累了，他继续)\n   Quoiqu'il pleuve, nous sortons. (虽然下雨，我们出门)\n\n2. malgré + 名词 (尽管)\n   Malgré la pluie, nous sommes sortis. (尽管下雨，我们出去了)\n   Malgré son fatigue, il a continué. (尽管疲劳，他继续了)\n\n3. cependant / pourtant (然而)\n   Il est riche. Cependant, il n'est pas heureux. (他有钱。然而他不幸福)\n\n4. alors que (然而；当...时)\n   Il est sorti alors qu'il pleuvait. (下雨的时候他出去了)\n\n5. tandis que (然而)\n   Il travaille, tandis que sa femme se repose. (他工作，而他妻子休息)", tip: "法国的座右铭就是 Liberté, Égalité, Fraternité（自由、平等、博爱）。" },
        dialogue: [
          { role: "A", text: "Bien que la loi soit stricte, beaucoup de gens ne la respectent pas.", cn: "虽然法律严格，很多人不遵守。" },
          { role: "B", text: "C'est vrai. Malgré les amendes, les gens jettent encore des déchets.", cn: "确实。尽管有罚款，人们还是乱扔垃圾。" },
          { role: "A", text: "Pourtant, c'est un devoir de protéger l'environnement.", cn: "然而，保护环境是义务。" },
          { role: "B", text: "Il faudrait que tout le monde comprenne l'importance.", cn: "需要每个人都理解其重要性。" },
        ],
        practice: [
          { type: "fill", question: "___ la pluie, nous sommes sortis. (尽管下雨，我们出去了)", answer: "Malgré", hint: "尽管+名词" },
          { type: "choice", question: "'虽然他累了，他继续' 怎么说?", options: ["Malgré il est fatigué, il continue.", "Bien qu'il soit fatigué, il continue.", "Pourtant il est fatigué, il continue.", "Il est fatigué, il continue."], answer: 1 },
        ]
      },
    ]
  },
  {
    unit: 9, unitTitle: "L'éducation", unitDesc: "教育体系、学习方法、比较级",
    lessons: [
      {
        id: 'r2-u9-l1', title: "Leçon 1 — Le système éducatif", goal: "学会谈论教育话题，掌握比较级和最高级",
        vocab: [
          { word: "l'éducation (f.)", meaning: "教育", example: "L'éducation est essentielle.", audio: "l'éducation" },
          { word: "l'école (f.)", meaning: "学校", example: "Les enfants vont à l'école.", audio: "l'école" },
          { word: "le lycée", meaning: "高中", example: "Je suis au lycée.", audio: "le lycée" },
          { word: "l'université (f.)", meaning: "大学", example: "Je vais à l'université.", audio: "l'université" },
          { word: "la faculté", meaning: "学院", example: "La faculté de médecine.", audio: "la faculté" },
          { word: "apprendre", meaning: "学习", example: "J'apprends le français.", audio: "apprendre" },
          { word: "enseigner", meaning: "教", example: "Elle enseigne le français.", audio: "enseigner" },
          { word: "la note", meaning: "成绩", example: "J'ai eu une bonne note.", audio: "la note" },
          { word: "réussir à un examen", meaning: "通过考试", example: "J'ai réussi à mon examen.", audio: "réussir" },
          { word: "échouer", meaning: "失败", example: "Il a échoué à l'examen.", audio: "échouer" },
          { word: "le savoir", meaning: "知识", example: "Le savoir est le pouvoir.", audio: "le savoir" },
          { word: "la culture", meaning: "文化", example: "La culture française est riche.", audio: "la culture" },
        ],
        grammar: { title: "比较级和最高级", content: "比较级：\n\n1. 更... (plus... que)\n   Il est plus grand que moi. (他比我高)\n   Ce livre est plus intéressant que l'autre. (这本书比那本有趣)\n\n2. 不如... (moins... que)\n   Il est moins grand que moi. (他不如我高)\n\n3. 一样... (aussi... que)\n   Il est aussi grand que moi. (他和我一样高)\n\n4. 不如... (ne... pas aussi... que)\n   Il n'est pas aussi grand que moi.\n\n最高级：\n1. 最... (le/la/les plus...)\n   C'est le plus grand. (他是最高的)\n   C'est la plus belle ville. (这是最美的城市)\n\n2. 最不... (le/la/les moins...)\n   C'est le moins intéressant. (这是最不有趣的)\n\n不规则比较级：\n- bon → meilleur (更好)\n- mauvais → pire (更差)\n- bien → mieux (更好)\n- mal → pis (更差)", tip: "法国教育体系：小学(5年) → 初中collège(4年) → 高中lycée(3年) → 大学。Baccalauréat (bac) 是高中毕业考试。" },
        dialogue: [
          { role: "A", text: "Ton université est plus grande que la mienne.", cn: "你的大学比我的大。" },
          { role: "B", text: "Oui, mais la tienne est plus ancienne. C'est la plus ancienne de la région.", cn: "是的，但你的更老。它是这个地区最老的。" },
          { role: "A", text: "Quel est le meilleur moyen d'apprendre une langue?", cn: "学语言最好的方法是什么？" },
          { role: "B", text: "À mon avis, c'est de vivre dans le pays. C'est mieux que les cours.", cn: "在我看来，是住在那个国这比上课好。" },
        ],
        practice: [
          { type: "fill", question: "Il est ___ grand ___ moi. (他比我高)", answer: "plus", hint: "更..." },
          { type: "choice", question: "'最好的' 怎么说?", options: ["le bon", "le meilleur", "le plus bon", "le bien"], answer: 1 },
        ]
      },
    ]
  },
  {
    unit: 10, unitTitle: "Le monde du travail", unitDesc: "职场话题、求职面试、间接引语",
    lessons: [
      {
        id: 'r2-u10-l1', title: "Leçon 1 — Chercher du travail", goal: "学会求职面试，掌握间接引语",
        vocab: [
          { word: "le CV (curriculum vitae)", meaning: "简历", example: "J'envoie mon CV.", audio: "le CV" },
          { word: "la lettre de motivation", meaning: "求职信", example: "J'écris une lettre de motivation.", audio: "la lettre de motivation" },
          { word: "l'entretien (m.)", meaning: "面试", example: "J'ai un entretien demain.", audio: "l'entretien" },
          { word: "le poste", meaning: "职位", example: "Je postule pour un poste.", audio: "le poste" },
          { word: "l'expérience (f.)", meaning: "经验", example: "J'ai de l'expérience.", audio: "l'expérience" },
          { word: "compétent(e)", meaning: "有能力的", example: "Elle est très compétente.", audio: "compétent" },
          { word: "motivé(e)", meaning: "有积极性的", example: "Je suis très motivé.", audio: "motivé" },
          { word: "embaucher", meaning: "雇佣", example: "L'entreprise va m'embaucher.", audio: "embaucher" },
          { word: "démissionner", meaning: "辞职", example: "Il a démissionné.", audio: "démissionner" },
          { word: "le chômage", meaning: "失业", example: "Le chômage augmente.", audio: "le chômage" },
          { word: "le stage", meaning: "实习", example: "Je fais un stage.", audio: "le stage" },
          { word: "le CDI", meaning: "长期合同", example: "J'ai signé un CDI.", audio: "le CDI" },
        ],
        grammar: { title: "间接引语 (le discours rapporté)", content: "间接引语转述别人的话：\n\n时态呼应（主句在过去时）：\n- 现在时 → 未完成过去时\n  Il dit : \"Je suis fatigué.\" → Il a dit qu'il était fatigué.\n- 过去时 → 愈过去时\n  Il dit : \"J'ai mangé.\" → Il a dit qu'il avait mangé.\n- 将来时 → 条件式\n  Il dit : \"Je partirai.\" → Il a dit qu'il partirait.\n\n其他变化：\n- aujourd'hui → ce jour-là\n- demain → le lendemain\n- hier → la veille\n- ici → là-bas\n- ce → cela/ça\n\n主句在现在时：时态不变\n- Il dit qu'il est fatigué. (他说他累了)\n- Elle demande si tu viens. (她问你是否来)\n\n疑问句转述：\n- Est-ce que tu viens? → Il demande si je viens.\n- Où vas-tu? → Il me demande où je vais.", tip: "在法国求职，CV（简历）通常一页，附带 lettre de motivation（求职信）。CDI（长期合同）是最理想的工作合同。" },
        dialogue: [
          { role: "Recruteur", text: "Parlez-moi de votre expérience.", cn: "请谈谈您的经验。" },
          { role: "Candidat", text: "J'ai fait un stage de six mois dans une entreprise de marketing.", cn: "我在一家营销公司实习了六个月。" },
          { role: "Recruteur", text: "Pourquoi voulez-vous travailler chez nous?", cn: "为什么想在我们这工作？" },
          { role: "Candidat", text: "Parce que votre entreprise est innovante et je suis très motivé.", cn: "因为贵公司很创新，我非常有积极性。" },
          { role: "Recruteur", text: "Nous vous appellerons la semaine prochaine.", cn: "我们下周给您打电话。" },
          { role: "Candidat", text: "Merci beaucoup. Au revoir.", cn: "非常感谢。再见。" },
        ],
        practice: [
          { type: "fill", question: "Il a dit qu'il ___ fatigué. (他说他累了)", answer: "était", hint: "间接引语时态变化" },
          { type: "choice", question: "'她问我是谁来' 怎么说?", options: ["Elle demande qui je suis.", "Elle a demandé qui j'étais.", "Elle demande qui j'étais.", "Elle a demandé qui je suis."], answer: 1 },
        ]
      },
    ]
  },
  {
    unit: 11, unitTitle: "Les arts et la culture", unitDesc: "艺术与文化、描述作品、被动语态",
    lessons: [
      {
        id: 'r2-u11-l1', title: "Leçon 1 — La culture française", goal: "学会谈论文化艺术，掌握被动语态",
        vocab: [
          { word: "l'art (m.)", meaning: "艺术", example: "L'art français est célèbre.", audio: "l'art" },
          { word: "la peinture", meaning: "绘画", example: "La peinture impressionniste.", audio: "la peinture" },
          { word: "la sculpture", meaning: "雕塑", example: "Les sculptures de Rodin.", audio: "la sculpture" },
          { word: "le roman", meaning: "小说", example: "Un roman de Victor Hugo.", audio: "le roman" },
          { word: "la poésie", meaning: "诗歌", example: "La poésie de Baudelaire.", audio: "la poésie" },
          { word: "le théâtre", meaning: "戏剧", example: "Les pièces de Molière.", audio: "le théâtre" },
          { word: "le chanteur / la chanteuse", meaning: "歌手", example: "Édith Piaf est une grande chanteuse.", audio: "le chanteur" },
          { word: "le chef-d'œuvre", meaning: "杰作", example: "La Joconde est un chef-d'œuvre.", audio: "le chef-d'œuvre" },
          { word: "l'artiste (m./f.)", meaning: "艺术家", example: "Monet est un artiste impressionniste.", audio: "l'artiste" },
          { word: "l'exposition (f.)", meaning: "展览", example: "Une exposition au musée.", audio: "l'exposition" },
          { word: "le patrimoine", meaning: "遗产", example: "Le patrimoine culturel français.", audio: "le patrimoine" },
          { word: "célèbre", meaning: "著名的", example: "Paris est célèbre pour la Tour Eiffel.", audio: "célèbre" },
        ],
        grammar: { title: "被动语态 (la voix passive)", content: "被动语态强调动作的承受者：\n\n结构：主语 + être + 过去分词 + par + 施动者\n\n- Le tableau a été peint par Monet. (这幅画是莫奈画的)\n- La Tour Eiffel a été construite en 1889. (埃菲尔铁塔建于1889年)\n- Ce livre est lu par beaucoup de gens. (这本书被很多人读)\n\n时态变化：\n- 现在时：Le livre est publié. (书被出版)\n- 过去时：Le livre a été publié. (书被出版了)\n- 将来时：Le livre sera publié. (书将被出版)\n- imparfait：Le livre était publié. (书当时被出版)\n\n注意配合：被动语态的过去分词要和主语配合！\n- La lettre a été écrite. (信被写了 → 阴性配合)\n- Les tableaux ont été vendus. (画被卖了 → 复数配合)", tip: "法国拥有世界上最丰富的艺术遗产之一。卢浮宫 (le Louvre) 是世界上参观人数最多的博物馆！" },
        dialogue: [
          { role: "A", text: "Tu es allé à l'exposition au musée?", cn: "你去博物馆的展览了吗？" },
          { role: "B", text: "Oui! Les tableaux de Monet sont magnifiques. La Joconde aussi est exposée.", cn: "去了！莫奈的画太美了。蒙娜丽莎也展出了。" },
          { role: "A", text: "La Joconde a été peinte par Léonard de Vinci, non?", cn: "蒙娜丽莎是达芬奇画的，对吧？" },
          { role: "B", text: "Oui, elle a été peinte au XVIe siècle. C'est le tableau le plus célèbre du monde.", cn: "是的，画于16世纪。它是世界上最著名的画。" },
        ],
        practice: [
          { type: "fill", question: "La Tour Eiffel a été ___ en 1889. (埃菲尔铁塔建于1889年)", answer: "construite", hint: "construire的过去分词" },
          { type: "choice", question: "'这本书被很多人读' 怎么说?", options: ["Ce livre lit beaucoup de gens.", "Ce livre est lu par beaucoup de gens.", "Ce livre a lu beaucoup de gens.", "Beaucoup de gens lisent ce livre."], answer: 1 },
        ]
      },
    ]
  },
  {
    unit: 12, unitTitle: "Bilan et perspectives", unitDesc: "总结回顾、综合练习、展望",
    lessons: [
      {
        id: 'r2-u12-l1', title: "Leçon 1 — Faire le bilan", goal: "综合复习第二册所有语法和词汇",
        vocab: [
          { word: "faire le bilan", meaning: "总结", example: "Il est temps de faire le bilan.", audio: "faire le bilan" },
          { word: "se rendre compte (de)", meaning: "意识到", example: "Je me rends compte de mon erreur.", audio: "se rendre compte" },
          { word: "progresser", meaning: "进步", example: "Mon français progresse.", audio: "progresser" },
          { word: "approfondir", meaning: "深入", example: "Je veux approfondir mes connaissances.", audio: "approfondir" },
          { word: "la connaissance", meaning: "知识", example: "Mes connaissances en français.", audio: "la connaissance" },
          { word: "désormais", meaning: "从今以后", example: "Désormais, je parlerai français.", audio: "désormais" },
          { word: "cependant", meaning: "然而", example: "Cependant, il reste beaucoup à apprendre.", audio: "cependant" },
          { word: "néanmoins", meaning: "尽管如此", example: "Néanmoins, je continue.", audio: "néanmoins" },
          { word: "en effet", meaning: "确实", example: "En effet, c'est vrai.", audio: "en effet" },
          { word: "par conséquent", meaning: "因此", example: "Par conséquent, je dois étudier plus.", audio: "par conséquent" },
        ],
        grammar: { title: "第二册语法总结", content: "Reflets 2 核心语法回顾：\n\n1. 时态体系：\n   - 现在时 (présent) — 当前动作\n   - 复合过去时 (passé composé) — 完成的动作\n   - 未完成过去时 (imparfait) — 过去的状态/习惯\n   - 简单将来时 (futur simple) — 未来的计划\n   - 条件式 (conditionnel) — 假设/礼貌\n   - 虚拟式 (subjonctif) — 愿望/必要性\n\n2. 代词：\n   - 关系代词：qui, que, où, dont\n   - 间接引语：时态呼应\n\n3. 句式：\n   - 被动语态\n   - 比较级/最高级\n   - 让步：bien que, malgré\n\n4. 代词式动词：\n   - se lever, se coucher, se sentir...\n\n下一步：Reflets 3 将进入 B1 级别，学习更复杂的语法和表达。", tip: "恭喜完成 Reflets 2！你已经掌握了法语的核心语法体系。继续前进！" },
        dialogue: [
          { role: "Professeur", text: "Alors, comment trouvez-vous votre progression?", cn: "那么，你觉得你的进步怎么样？" },
          { role: "Étudiant", text: "Je me rends compte que j'ai beaucoup progressé. Je comprends mieux le français maintenant.", cn: "我意识到我进步了很多。我现在更理解法语了。" },
          { role: "Professeur", text: "C'est vrai! Cependant, il reste encore beaucoup à apprendre.", cn: "确实！然而还有很多要学。" },
          { role: "Étudiant", text: "En effet. Par conséquent, je vais continuer à étudier.", cn: "确实。因此我将继续学习。" },
          { role: "Professeur", text: "Excellent! Avec cette motivation, vous réussirez!", cn: "太好了！有这样的积极性，你会成功的！" },
        ],
        practice: [
          { type: "choice", question: "Reflets 2 中学了哪些时态?", options: ["只有现在时", "现在时和过去时", "现在时、过去时、将来时、条件式、虚拟式", "只有口语"], answer: 2 },
          { type: "fill", question: "Je me ___ compte que j'ai progressé. (我意识到我进步了)", answer: "rends", hint: "se rendre compte" },
        ]
      },
    ]
  },
];
