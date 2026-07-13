export const advancedCurriculumData = [
  {
    unit: 7, unitTitle: "B2进阶：复杂表达", unitDesc: "掌握复杂语法结构和精细表达",
    lessons: [
      { id: 31, title: "第三十一课：未完成过去时 (Imparfait)", goal: "区分passé composé和imparfait", vocab: [
        { word: "Autrefois", meaning: "从前/过去", mnemonic: "'哦吐喝哇' - 从前吐了一口哇", example: "Autrefois, j'habitais à Pékin.", audio: "autrefois" },
        { word: "Souvent", meaning: "经常", mnemonic: "'苏旺' - 苏东坡很旺，经常来", example: "Je lisais souvent le soir.", audio: "souvent" },
        { word: "Toujours", meaning: "总是/一直", mnemonic: "'土猪喝' - 土猪一直喝水", example: "Il pleuvait toujours en Bretagne.", audio: "toujours" },
        { word: "D'habitude", meaning: "通常", mnemonic: "'大必拖得' - 大事情必然拖得通常很慢", example: "D'habitude, je me lève tôt.", audio: "d'habitude" },
      ], grammar: { title: "Imparfait vs Passé Composé", content: "Imparfait(未完成过去时)描述过去的状态、习惯、持续动作：\n\n变位：nous形式的现在时去掉-ons，加 -ais, -ais, -ait, -ions, -iez, -aient\nparler → parl-ais, parl-ais, parl-ait...\n\n对比：\nImparfait = 背景描述/习惯\nIl pleuvait. (当时在下雨 - 背景)\nJe lisais tous les soirs. (我过去每晚都读 - 习惯)\n\nPassé Composé = 一次性完成的动作\nIl a plu hier. (昨天下雨了 - 事件)\nJ'ai lu ce livre. (我读了这本书 - 完成)", tip: "记住：Imparfait是'电影的背景画面'，Passé Composé是'突然发生的事件'！" },
        dialogue: [
          { role: "A", text: "Quand j'étais petit, je jouais dans le parc tous les jours.", cn: "我小时候，每天在公园玩。" },
          { role: "B", text: "Et un jour, qu'est-ce qui s'est passé?", cn: "然后有一天，发生了什么？" },
          { role: "A", text: "Un jour, j'ai trouvé un chien abandonné!", cn: "有一天，我发现了一只被遗弃的狗！" },
        ], practice: [
          { type: "fill", question: "Quand j'___ petit, je jouais au foot. (être imparfait)", answer: "étais", hint: "être的imparfait" },
          { type: "choice", question: "描述过去的习惯用哪个时态?", options: ["Passé composé", "Imparfait", "Présent", "Futur"], answer: 1 },
        ]
      },
      { id: 32, title: "第三十二课：将来时与将来过去时", goal: "掌握Futur simple和Futur antérieur", vocab: [
        { word: "Bientôt", meaning: "很快/不久", mnemonic: "'比昂头' - 比昂头很快就到了", example: "Je partirai bientôt.", audio: "bientôt" },
        { word: "L'année prochaine", meaning: "明年", mnemonic: "prochaine=下一个", example: "L'année prochaine, j'irai en France.", audio: "l'année prochaine" },
        { word: "Dès que", meaning: "一...就...", mnemonic: "'得死磕' - 一磕就死磕到底", example: "Dès que j'arriverai, je t'appellerai.", audio: "dès que" },
        { word: "Espérer", meaning: "希望", mnemonic: "'爱死配喝' - 爱死了配着喝，希望永远有", example: "J'espère réussir.", audio: "espérer" },
      ], grammar: { title: "Futur Simple & Futur Antérieur", content: "Futur Simple（简单将来时）：\n不定式 + -ai, -as, -a, -ons, -ez, -ont\nJe parlerai (我将说)\nTu finiras (你将完成)\n\nFutur Antérieur（先将来时）：\naurai/serai + 过去分词\nQuand j'aurai fini... (当我完成之后...)\n\nDès que + futur antérieur, + futur simple\nDès que tu seras arrivé, je partirai.\n(你一到，我就走。)\n\n时间连词后用将来时（法语特色！）：\nQuand je serai grand... (当我长大后...)\nSi tu viens, je serai content. (如果你来我会高兴)", tip: "法语跟英语不同：quand/dès que后面用将来时！Quand je pourrai(不是peux)" },
        dialogue: [
          { role: "A", text: "Qu'est-ce que tu feras l'année prochaine?", cn: "你明年做什么？" },
          { role: "B", text: "Dès que j'aurai mon diplôme, je partirai en France!", cn: "我一拿到文凭就去法国！" },
          { role: "A", text: "Et après?", cn: "然后呢？" },
          { role: "B", text: "Je trouverai un travail à Paris et j'y resterai pour toujours!", cn: "在巴黎找工作，永远待在那！" },
        ], practice: [
          { type: "fill", question: "Demain, je ___ à Paris. (aller将来时)", answer: "irai", hint: "aller的将来时" },
          { type: "choice", question: "Dès que后面用什么时态?", options: ["现在时", "过去时", "将来时", "虚拟式"], answer: 2 },
        ]
      },
      { id: 33, title: "第三十三课：代词大整理", goal: "掌握所有法语代词的用法和顺序", vocab: [
        { word: "Lui / Leur", meaning: "给他/给他们", mnemonic: "lui=给一个人，leur=给一群人", example: "Je lui parle. (我对他说)", audio: "lui" },
        { word: "Y", meaning: "那里/对此", mnemonic: "y='那里'，像地图上的标记点", example: "J'y vais. (我去那里)", audio: "y" },
        { word: "En", meaning: "一些/关于它", mnemonic: "'昂' - 昂首说一些", example: "J'en veux. (我要一些)", audio: "en" },
        { word: "Dont", meaning: "其中的/whose", mnemonic: "'冻' - 冻住了其中的东西", example: "Le livre dont je parle.", audio: "dont" },
      ], grammar: { title: "代词顺序（双代词）", content: "法语代词放在动词前面，顺序很重要：\n\nme/te/se/nous/vous → le/la/les → lui/leur → y → en → VERBE\n\n例子：\nJe donne le livre à Paul.\n→ Je le lui donne. (我把它给他)\n\nJ'achète des pommes pour toi.\n→ Je t'en achète. (我给你买一些)\n\nIl parle de son voyage à Marie.\n→ Il lui en parle. (他跟她说这件事)\n\n否定：ne + 代词们 + 动词 + pas\nJe ne le lui donne pas.", tip: "记住代词顺序口诀：'我你他(们)→它→给他→那里→一些'！" },
        dialogue: [
          { role: "A", text: "Tu as donné le cadeau à Marie?", cn: "你把礼物给Marie了吗？" },
          { role: "B", text: "Oui, je le lui ai donné hier.", cn: "是的，昨天我把它给她了。" },
          { role: "A", text: "Et des fleurs? Tu lui en as acheté?", cn: "花呢？你给她买了吗？" },
          { role: "B", text: "Oui, je lui en ai acheté un bouquet!", cn: "是的，我给她买了一束！" },
        ], practice: [
          { type: "fill", question: "Je ___ donne le livre. (给Marie)", answer: "lui", hint: "给她" },
          { type: "choice", question: "'我去那里'用代词怎么说?", options: ["J'y vais", "J'en vais", "Je vais y", "Je le vais"], answer: 0 },
        ]
      },
      { id: 34, title: "第三十四课：关系从句(qui/que/dont/où)", goal: "用关系从句让句子更高级", vocab: [
        { word: "Celui / Celle", meaning: "那个(男/女)", mnemonic: "'色路一' - 那条路是那个人的", example: "Celui qui parle est mon ami.", audio: "celui" },
        { word: "Ce que / Ce qui", meaning: "什么(从句)", mnemonic: "'色哥' - 色哥说的话", example: "Ce que tu dis est vrai.", audio: "ce que" },
        { word: "Lequel / Laquelle", meaning: "哪一个", mnemonic: "'了个喝' - 了解了一个喝哪一个", example: "Laquelle préfères-tu?", audio: "lequel" },
        { word: "Auquel / Duquel", meaning: "向哪一个/从哪一个", mnemonic: "auquel=à+lequel", example: "L'homme auquel je parle.", audio: "auquel" },
      ], grammar: { title: "关系代词进阶", content: "qui = 主语 (qui fait l'action)\nL'homme qui parle. (说话的男人)\n\nque = 直接宾语\nLe livre que je lis. (我读的书)\n\ndont = de的替代\nLe film dont je parle. (我谈论的电影)\nLa fille dont le père est médecin. (父亲是医生的女孩)\n\noù = 地点/时间\nLa ville où j'habite. (我住的城市)\nLe jour où je suis arrivé. (我到的那天)\n\nlequel = 介词后(avec, pour, sans...)\nLa personne avec laquelle je travaille.\n(和我一起工作的人)", tip: "dont替代de！当动词搭配de时用dont：parler de → dont je parle" },
        dialogue: [
          { role: "A", text: "Tu connais le restaurant dont tout le monde parle?", cn: "你知道大家都在说的那家餐厅吗？" },
          { role: "B", text: "Celui qui est près de la Seine?", cn: "塞纳河边那家？" },
          { role: "A", text: "Oui! C'est celui où on a mangé la semaine dernière.", cn: "对！就是我们上周去吃的那家。" },
        ], practice: [
          { type: "fill", question: "Le livre ___ je lis est intéressant. (直接宾语)", answer: "que", hint: "直接宾语关系代词" },
          { type: "choice", question: "parler de后面用哪个关系代词?", options: ["qui", "que", "dont", "où"], answer: 2 },
        ]
      },
      { id: 35, title: "第三十五课：被动语态与强调句", goal: "掌握法语的被动语态和Mise en relief", vocab: [
        { word: "Être fait par", meaning: "由...制作", mnemonic: "被动语态核心", example: "Ce gâteau est fait par ma mère.", audio: "fait par" },
        { word: "C'est...qui/que", meaning: "正是...（强调）", mnemonic: "强调句型万能公式", example: "C'est moi qui ai fait ça.", audio: "c'est qui" },
        { word: "On", meaning: "人们/我们(口语)", mnemonic: "'翁' - 翁翁们(人们)", example: "On dit que... (人们说...)", audio: "on" },
        { word: "Se faire + 动词", meaning: "被...(口语被动)", mnemonic: "口语化被动", example: "Il s'est fait voler son vélo.", audio: "se faire" },
      ], grammar: { title: "被动语态 & 强调句", content: "被动语态：être + 过去分词 + par\nLe livre est écrit par Victor Hugo.\n(这本书由雨果所写)\n\n注意过去分词要配合主语：\nLa lettre est écrite. (阴性加e)\nLes livres sont écrits. (复数加s)\n\n强调句(Mise en relief)：\nC'est + 强调部分 + qui/que + 其余\nC'est Marie qui a gagné. (正是Marie赢了)\nC'est ce livre que je veux. (我想要的正是这本书)\n\n口语被动：se faire + 不定式\nIl s'est fait virer. (他被开除了)\nElle s'est fait arnaquer. (她被骗了)", tip: "强调句是法语口语的精髓！用c'est...qui/que让表达更有力" },
        dialogue: [
          { role: "A", text: "C'est toi qui as cuisiné ce plat?", cn: "这道菜是你做的吗？" },
          { role: "B", text: "Oui! Il est fait avec des ingrédients bio.", cn: "是的！用的是有机食材。" },
          { role: "A", text: "C'est exactement ce que j'aime!", cn: "这正是我喜欢的！" },
        ], practice: [
          { type: "fill", question: "C'est moi ___ ai raison. (正是我)", answer: "qui", hint: "强调主语用qui" },
          { type: "choice", question: "'他被开除了'口语怎么说?", options: ["Il est viré", "Il s'est fait virer", "Il a viré", "Il est fait virer"], answer: 1 },
        ]
      },
    ]
  },
  {
    unit: 8, unitTitle: "C1精通：细微差别", unitDesc: "掌握语言的精微之处",
    lessons: [
      { id: 36, title: "第三十六课：间接引语与时态配合", goal: "掌握discours rapporté的所有规则", vocab: [
        { word: "Affirmer", meaning: "断言/肯定", mnemonic: "'啊飞喝梦' - 啊飞着做梦断言自己会飞", example: "Il affirme qu'il a raison.", audio: "affirmer" },
        { word: "Prétendre", meaning: "声称", mnemonic: "'破躺得' - 破躺着声称自己是国王", example: "Elle prétend tout savoir.", audio: "prétendre" },
        { word: "Avouer", meaning: "承认", mnemonic: "'啊五鹅' - 啊五只鹅承认偷吃了", example: "Il a avoué son erreur.", audio: "avouer" },
        { word: "Nier", meaning: "否认", mnemonic: "'你爷' - 你爷爷否认了一切", example: "Il nie avoir dit ça.", audio: "nier" },
      ], grammar: { title: "间接引语时态配合", content: "当主句是过去时，从句要降级：\n\n现在时 → 未完成过去时\nIl dit qu'il est fatigué. → Il a dit qu'il était fatigué.\n\nPassé composé → Plus-que-parfait\nIl dit qu'il a fini. → Il a dit qu'il avait fini.\n\nFutur → Conditionnel présent\nIl dit qu'il viendra. → Il a dit qu'il viendrait.\n\n时间词变化：\naujourd'hui → ce jour-là\ndemain → le lendemain\nhier → la veille\n\n直接问句 → 间接问句：\n\"Où vas-tu?\" → Il m'a demandé où j'allais.\n\"Est-ce que tu viens?\" → Il m'a demandé si je venais.", tip: "间接引语的时态降级是C1级别的标志！能自然使用这个规则说明你法语真的很好" },
        dialogue: [
          { role: "A", text: "Qu'est-ce qu'il a dit exactement?", cn: "他具体说了什么？" },
          { role: "B", text: "Il a affirmé qu'il viendrait le lendemain.", cn: "他断言他第二天会来。" },
          { role: "A", text: "Et il a nié avoir volé l'argent?", cn: "他否认偷了钱吗？" },
          { role: "B", text: "Oui, il a prétendu qu'il était innocent.", cn: "是的，他声称自己是无辜的。" },
        ], practice: [
          { type: "fill", question: "Il a dit qu'il ___ fatigué. (être-间接引语)", answer: "était", hint: "现在时降为imparfait" },
          { type: "choice", question: "demain在间接引语中变成什么?", options: ["le lendemain", "le jour suivant", "demain", "hier"], answer: 0 },
        ]
      },
      { id: 37, title: "第三十七课：Plus-que-parfait", goal: "掌握过去的过去", vocab: [
        { word: "Déjà", meaning: "已经", mnemonic: "'得惹' - 已经惹了麻烦了", example: "J'avais déjà mangé quand il est arrivé.", audio: "déjà" },
        { word: "Avant que", meaning: "在...之前", mnemonic: "'啊旺哥' - 在哥来之前", example: "Avant qu'il parte, je lui ai parlé.", audio: "avant que" },
        { word: "Après que", meaning: "在...之后", mnemonic: "'啊泼喝哥' - 在他泼了水之后", example: "Après qu'il est parti, j'ai pleuré.", audio: "après que" },
        { word: "Pendant que", meaning: "在...期间", mnemonic: "'胖当哥' - 在胖当哥的期间", example: "Pendant qu'il dormait, j'ai lu.", audio: "pendant que" },
      ], grammar: { title: "Plus-que-parfait (愈过去时)", content: "描述'过去的过去'：\n\n构成：avais/étais(avoir或être的imparfait) + 过去分词\n\nJ'avais mangé avant de sortir.\n(我在出门前已经吃了)\n\nQuand il est arrivé, j'étais déjà parti.\n(当他到的时候，我已经走了)\n\n时间线：\nPlus-que-parfait → Imparfait → Passé composé → Présent\n(最先发生) → (背景) → (事件) → (现在)\n\nElle m'a dit qu'elle avait perdu ses clés.\n(她告诉我她(之前)把钥匙弄丢了)", tip: "Plus-que-parfait就是法语的'had done'，描述在过去某个时间点之前已经完成的事" },
        dialogue: [
          { role: "A", text: "Pourquoi tu n'as pas mangé au restaurant?", cn: "你为什么没在餐厅吃？" },
          { role: "B", text: "Parce que j'avais déjà dîné à la maison!", cn: "因为我在家已经吃过了！" },
          { role: "A", text: "Et quand Marie est arrivée?", cn: "那Marie来的时候呢？" },
          { role: "B", text: "Nous étions déjà partis depuis une heure.", cn: "我们已经走了一个小时了。" },
        ], practice: [
          { type: "fill", question: "J'___ déjà fini quand il a appelé. (avoir的pqp)", answer: "avais", hint: "avoir的imparfait" },
          { type: "choice", question: "Plus-que-parfait描述的是什么?", options: ["现在的事", "将来的事", "过去的过去", "习惯"], answer: 2 },
        ]
      },
      { id: 38, title: "第三十八课：虚拟式进阶", goal: "掌握虚拟式的所有时态和高级用法", vocab: [
        { word: "Quoique", meaning: "虽然(=bien que)", mnemonic: "'夸哥' - 虽然夸哥但不同意", example: "Quoiqu'il dise, je ne change pas d'avis.", audio: "quoique" },
        { word: "À condition que", meaning: "条件是...", mnemonic: "'啊空低熊哥' - 条件是空着低头的熊和哥", example: "Je viendrai à condition que tu paies.", audio: "à condition que" },
        { word: "De peur que", meaning: "生怕/以免", mnemonic: "'德泼喝哥' - 德国泼了哥一身，生怕他生气", example: "De peur qu'il pleuve, prends un parapluie.", audio: "de peur que" },
        { word: "Bien que", meaning: "虽然", mnemonic: "'比昂够' - 虽然比够还多", example: "Bien qu'il soit riche, il vit simplement.", audio: "bien que" },
      ], grammar: { title: "虚拟式高级用法", content: "触发虚拟式的表达：\n1. 意愿：Je veux que tu viennes.\n2. 情感：Je suis content que tu sois là.\n3. 必要性：Il faut que tu fasses attention.\n4. 让步：Bien qu'il soit difficile...\n5. 目的：Pour que tout le monde comprenne.\n6. 恐惧：De peur qu'il ne soit trop tard.\n7. 条件：À condition que tu viennes.\n\n虚拟式过去时(subjonctif passé)：\naie/sois + 过去分词\nJe doute qu'il ait compris.\n(我怀疑他是否理解了)\n\n注意：que...ne中的ne是虚词(explétif)，不是否定！\nDe peur qu'il ne vienne. (怕他来 - 不是怕他不来)", tip: "虚拟式的ne explétif不是否定！这是C1考试常考点" },
        dialogue: [
          { role: "A", text: "Bien qu'il fasse froid, je vais courir.", cn: "虽然很冷，我还是去跑步。" },
          { role: "B", text: "À condition que tu fasses attention!", cn: "条件是你要注意安全！" },
          { role: "A", text: "De peur que tu ne t'inquiètes, je te promets d'être prudent.", cn: "免得你担心，我保证小心。" },
        ], practice: [
          { type: "fill", question: "Bien qu'il ___ malade, il travaille. (être虚拟式)", answer: "soit", hint: "être的虚拟式" },
          { type: "choice", question: "de peur que后面的ne是什么意思?", options: ["否定", "虚词(非否定)", "疑问", "强调"], answer: 1 },
        ]
      },
      { id: 39, title: "第三十九课：Gérondif与Participe", goal: "掌握gérondif, participe présent和adjectif verbal", vocab: [
        { word: "En faisant", meaning: "一边做...", mnemonic: "'昂肥肿' - 一边昂头一边做", example: "En faisant du sport, on reste en forme.", audio: "en faisant" },
        { word: "Tout en", meaning: "虽然同时/一边...一边", mnemonic: "'都昂' - 都昂着头一边做", example: "Tout en riant, il pleurait.", audio: "tout en" },
        { word: "Ayant / Étant", meaning: "已经做了/已经是(过去分词)", mnemonic: "分词的高级形式", example: "Ayant fini, il est parti.", audio: "ayant" },
        { word: "Étant donné que", meaning: "鉴于", mnemonic: "'哎当给内' - 鉴于哎当时给内了", example: "Étant donné qu'il pleut, restons ici.", audio: "étant donné que" },
      ], grammar: { title: "Gérondif vs Participe Présent", content: "Gérondif = en + participe présent\n表达同时性、方式、条件：\nEn marchant, je réfléchis. (走路时我思考)\nEn étudiant, on réussit. (通过学习就能成功)\n\nParticipe Présent = 动词去掉-ons加-ant\n表达原因、描述：\nÉtant malade, il est resté chez lui.\n(因为生病，他待在家)\nLes enfants jouant dans le parc...\n(在公园玩的孩子们...)\n\n过去分词形式：\nAyant compris, il a répondu.\n(理解了之后，他回答了)\nÉtant arrivé en retard, il s'est excusé.\n(因为迟到了，他道歉了)\n\nGérondif强调同时性，Participe强调因果", tip: "en+ant=gérondif(同时做)，单独的ant=participe présent(原因)" },
        dialogue: [
          { role: "A", text: "Comment tu as appris le français?", cn: "你怎么学的法语？" },
          { role: "B", text: "En regardant des films et en lisant des livres!", cn: "通过看电影和读书！" },
          { role: "A", text: "Et tu as réussi en combien de temps?", cn: "多久成功的？" },
          { role: "B", text: "Étant donné que j'étudiais 2 heures par jour, en un an!", cn: "鉴于我每天学2小时，一年！" },
        ], practice: [
          { type: "fill", question: "___ marchant, je réfléchis. (在...时)", answer: "En", hint: "gérondif用en+" },
          { type: "choice", question: "'因为生病了'用participe怎么表达?", options: ["En étant malade", "Étant malade", "Étant malade", "En malade"], answer: 1 },
        ]
      },
      { id: 40, title: "第四十课：法语成语与谚语", goal: "掌握法国人日常使用的经典成语", vocab: [
        { word: "Avoir le cafard", meaning: "心情不好/郁闷", mnemonic: "avoir有+cafard蟑螂=有蟑螂在心上=郁闷", example: "J'ai le cafard aujourd'hui.", audio: "avoir le cafard" },
        { word: "Coûter les yeux de la tête", meaning: "贵得要死", mnemonic: "cost花费+眼睛+头=贵到要眼睛和头", example: "Ce sac coûte les yeux de la tête!", audio: "coûter les yeux" },
        { word: "Poser un lapin", meaning: "放鸽子", mnemonic: "poser放+lapin兔子=放了一只兔子=放鸽子", example: "Il m'a posé un lapin!", audio: "poser un lapin" },
        { word: "Avoir la flemme", meaning: "懒得动", mnemonic: "avoir有+flemme懒惰=懒得动", example: "J'ai la flemme de sortir.", audio: "avoir la flemme" },
        { word: "Tomber dans les pommes", meaning: "晕倒", mnemonic: "tomber掉+pommes苹果=掉进苹果里=晕倒", example: "Elle est tombée dans les pommes.", audio: "tomber dans les pommes" },
      ], grammar: { title: "法国经典谚语", content: "1. C'est en forgeant qu'on devient forgeron.\n   打铁才能成铁匠 = 熟能生巧\n\n2. Il ne faut pas vendre la peau de l'ours avant de l'avoir tué.\n   不能没杀熊就卖熊皮 = 不要过早乐观\n\n3. Qui vivra verra.\n   活着的人就会看到 = 走着瞧\n\n4. Pierre qui roule n'amasse pas mousse.\n   滚石不生苔 = 频繁换工作存不下钱\n\n5. L'habit ne fait pas le moine.\n   衣服不能造就僧侣 = 不能以貌取人\n\n6. Mieux vaut tard que jamais.\n   迟到总比不到好 = 亡羊补牢", tip: "谚语是C2水平的标志！能在对话中自然使用谚语，法国人会非常 impressed" },
        dialogue: [
          { role: "A", text: "Je veux acheter cette voiture mais elle coûte les yeux de la tête!", cn: "我想买这车但贵得要死！" },
          { role: "B", text: "Tu sais, l'habit ne fait pas le moine. Une voiture chère n'est pas toujours une bonne voiture.", cn: "你知道，不能以貌取人。贵车不一定是好车。" },
          { role: "A", text: "C'est vrai. Et puis, mieux vaut tard que jamais!", cn: "确实。而且，迟做总比不做好！" },
        ], practice: [
          { type: "fill", question: "Il m'a posé un ___! (放鸽子)", answer: "lapin", hint: "兔子" },
          { type: "choice", question: "'C'est en forgeant qu'on devient forgeron'是什么意思?", options: ["铁匠很有钱", "熟能生巧", "铁匠很累", "打铁很累"], answer: 1 },
        ]
      },
    ]
  },
  {
    unit: 9, unitTitle: "C1-C2：文学与思想", unitDesc: "法语文学、哲学和学术表达",
    lessons: [
      { id: 41, title: "第四十一课：Concordance des temps", goal: "精通时态一致性规则", vocab: [
        { word: "Simultané", meaning: "同时的", mnemonic: "'si摸他内' - 同时摸他的内部", example: "Les événements étaient simultanés.", audio: "simultané" },
        { word: "Antérieur", meaning: "在前的/先前的", mnemonic: "'昂特喝' - 昂头特别喝前酒", example: "L'action antérieure était déjà finie.", audio: "antérieur" },
        { word: "Postérieur", meaning: "在后的", mnemonic: "'破死特喝' - 破事特多后来喝酒", example: "L'événement postérieur a tout changé.", audio: "postérieur" },
        { word: "Concomitant", meaning: "伴随的/同时的", mnemonic: "'空靠眯当' - 空着靠在一起眯着当伴", example: "Des faits concomitants.", audio: "concomitant" },
      ], grammar: { title: "时态一致性大全", content: "主句现在时：\n从句可用：现在时、过去时、将来时\n\n主句过去时（降级规则）：\n同时 → Imparfait\nIl a dit qu'il travaillait. (他说他(当时)在工作)\n\n先发生 → Plus-que-parfait\nIl a dit qu'il avait travaillé. (他说他(之前)已经工作了)\n\n后发生 → Conditionnel\nIl a dit qu'il travaillerait. (他说他(之后)会工作)\n\n条件句时态搭配：\nSi + présent → futur/imperatif\nSi + imparfait → conditionnel présent\nSi + plus-que-parfait → conditionnel passé\n\nSi j'avais su, j'aurais agi différemment.\n(如果我早知道，我会不同地行动)", tip: "concordance des temps是法语写作的核心！掌握它说明你的法语已经达到C1水平" },
        dialogue: [
          { role: "A", text: "Si tu avais su la vérité, qu'aurais-tu fait?", cn: "如果你知道真相，你会怎么做？" },
          { role: "B", text: "Si j'avais su, je n'aurais jamais accepté cette offre.", cn: "如果我知道，我绝不会接受那个提议。" },
          { role: "A", text: "Et maintenant?", cn: "现在呢？" },
          { role: "B", text: "Maintenant, je sais que j'aurais dû refuser bien plus tôt.", cn: "现在我知道我应该更早就拒绝。" },
        ], practice: [
          { type: "fill", question: "Si j'___ riche, je voyagerais. (être-imparfait)", answer: "étais", hint: "si+imparfait→conditionnel" },
          { type: "choice", question: "Si + plus-que-parfait后面用什么?", options: ["imparfait", "conditionnel présent", "conditionnel passé", "subjonctif"], answer: 2 },
        ]
      },
      { id: 42, title: "第四十二课：法语文学阅读", goal: "能读懂法语文学经典片段", vocab: [
        { word: "Roman", meaning: "小说", mnemonic: "'喝闷' - 喝着闷酒看小说", example: "Je lis un roman de Camus.", audio: "roman" },
        { word: "Nouvelle", meaning: "短篇小说", mnemonic: "和英语novella同源", example: "Les nouvelles de Maupassant.", audio: "nouvelle" },
        { word: "Poème", meaning: "诗歌", mnemonic: "'破啊么' - 破了啊么，诗也碎了", example: "Un poème de Baudelaire.", audio: "poème" },
        { word: "Récit", meaning: "叙事/故事", mnemonic: "'喝西' - 喝着西柚汁讲叙事", example: "Le récit de son voyage.", audio: "récit" },
        { word: "Essai", meaning: "散文/论文", mnemonic: "和英语essay一样", example: "Un essai philosophique.", audio: "essai" },
      ], grammar: { title: "文学法语的特点", content: "文学法语使用特殊的语法形式：\n\n1. Passé Simple（简单过去时）：\nIl alla, il dit, il fit...\n(书面语，口语中用passé composé代替)\n\n2. Subjonctif Imparfait：\nIl fallait qu'il partît.\n(极正式，现代很少用)\n\n3. 倒装和省略：\nPeut-être viendra-t-il. (也许他会来)\n\n经典阅读推荐：\n- Le Petit Prince (圣-埃克苏佩里) - 入门\n- L'Étranger (加缪) - 中级\n- Les Fleurs du Mal (波德莱尔) - 高级诗歌", tip: "passé simple只需要'认识'不需要'会用'！阅读时看到-il alla知道是'il est allé'就行" },
        dialogue: [
          { role: "A", text: "As-tu lu Le Petit Prince?", cn: "你读过《小王子》吗？" },
          { role: "B", text: "Oui! \"On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux.\"", cn: "读过！'只有用心才能看清。真正重要的东西是眼睛看不见的。'" },
          { role: "A", text: "C'est une citation magnifique.", cn: "这是一句太美的名言。" },
        ], practice: [
          { type: "fill", question: "On ne voit bien qu'avec le ___. (心)", answer: "cœur", hint: "心" },
          { type: "choice", question: "passé simple在口语中使用吗?", options: ["经常用", "偶尔用", "几乎不用", "必须用"], answer: 2 },
        ]
      },
      { id: 43, title: "第四十三课：哲学与抽象思维", goal: "能用法语讨论哲学和抽象话题", vocab: [
        { word: "Conscience", meaning: "意识/良心", mnemonic: "'空晒昂死' - 空着晒太阳死，这就是意识", example: "La conscience de soi est importante.", audio: "conscience" },
        { word: "Existence", meaning: "存在", mnemonic: "和英语existence一样", example: "L'existence précède l'essence.", audio: "existence" },
        { word: "Liberté", meaning: "自由", mnemonic: "'里别喝得' - 在里面别喝太多，要自由", example: "Liberté, égalité, fraternité.", audio: "liberté" },
        { word: "Absurde", meaning: "荒诞的", mnemonic: "'啊不死的' - 啊不死的就是荒诞的", example: "La vie est absurde selon Camus.", audio: "absurde" },
        { word: "Paradoxe", meaning: "悖论", mnemonic: "和英语paradox一样", example: "C'est un paradoxe intéressant.", audio: "paradoxe" },
      ], grammar: { title: "法国哲学传统", content: "法国是哲学之国！从笛卡尔到萨特：\n\n笛卡尔：Je pense, donc je suis.\n(我思故我在)\n\n萨特：L'existence précède l'essence.\n(存在先于本质 - 存在主义)\n\n加缪：Il faut imaginer Sisyphe heureux.\n(应该想象西西弗斯是幸福的 - 荒诞主义)\n\n波伏瓦：On ne naît pas femme, on le devient.\n(不是天生的女人，而是成为女人)\n\n法语哲学讨论常用结构：\n- Certes... mais... (诚然...但是...)\n- On pourrait objecter que... (有人可能反驳说...)\n- Il n'en demeure pas moins que... (尽管如此仍然...)", tip: "法国高中就必修哲学(philosophie)！高考bac必考哲学论文" },
        dialogue: [
          { role: "A", text: "Tu connais la philosophie de Sartre?", cn: "你知道萨特的哲学吗？" },
          { role: "B", text: "L'existentialisme? Certes, c'est fascinant, mais on pourrait objecter que c'est trop pessimiste.", cn: "存在主义？诚然很迷人，但可以说太悲观了。" },
          { role: "A", text: "Il n'en demeure pas moins que Sartre a profondément influencé la pensée française.", cn: "尽管如此，萨特仍然深刻影响了法国思想。" },
        ], practice: [
          { type: "fill", question: "Je pense, donc je ___. (我思故我在)", answer: "suis", hint: "être" },
          { type: "choice", question: "法国高考必考什么科目?", options: ["数学", "物理", "哲学", "体育"], answer: 2 },
        ]
      },
      { id: 44, title: "第四十四课：学术法语", goal: "掌握法语论文和演讲的写作技巧", vocab: [
        { word: "Toutefois", meaning: "然而(正式)", mnemonic: "'都特哇' - 都特别哇然而没用", example: "Toutefois, cette hypothèse reste à vérifier.", audio: "toutefois" },
        { word: "Par ailleurs", meaning: "此外/另一方面", mnemonic: "'怕累' - 怕累就别看另一方面了", example: "Par ailleurs, il convient de noter que...", audio: "par ailleurs" },
        { word: "En l'occurrence", meaning: "在此情况下", mnemonic: "'昂咯哭喝昂死' - 在此情况下昂头哭着喝", example: "En l'occurrence, la solution est simple.", audio: "en l'occurrence" },
        { word: "Corroborer", meaning: "证实/佐证", mnemonic: "'口喝波喝' - 口渴波波喝证实了水的存在", example: "Les données corroborent cette théorie.", audio: "corroborer" },
      ], grammar: { title: "法语论文结构", content: "法国学术写作有严格的三段论结构：\n\nThèse - Antithèse - Synthèse\n(论点 - 反论点 - 综合)\n\n连接词层次：\n引出观点：En premier lieu... / D'une part...\n添加论据：De plus... / En outre... / Par ailleurs...\n转折：Cependant... / Toutefois... / Néanmoins...\n让步：Certes... / Il est vrai que... / Bien que...\n举例：À titre d'exemple... / Notamment... / En particulier...\n总结：En somme... / En définitive... / Pour conclure...\n\n学术论文开头公式：\n\"Il est communément admis que... Pourtant, une analyse approfondie révèle que...\"", tip: "法国教育体系的dissertation(论文)是严格的三段论！这是法国思维的核心" },
        dialogue: [
          { role: "A", text: "Comment écrire une dissertation en français?", cn: "怎么用法语写论文？" },
          { role: "B", text: "D'abord, la thèse. Ensuite, l'antithèse. Enfin, la synthèse.", cn: "首先论点，然后反论点，最后综合。" },
          { role: "A", text: "Et les connecteurs logiques?", cn: "逻辑连接词呢？" },
          { role: "B", text: "En premier lieu... De plus... Toutefois... En définitive...", cn: "首先...此外...然而...总而言之..." },
        ], practice: [
          { type: "fill", question: "___, cette théorie est contestable. (然而-正式)", answer: "Toutefois", hint: "正式的然而" },
          { type: "choice", question: "法国论文的经典结构是什么?", options: ["起承转合", "三段论", "四段论", "自由写作"], answer: 1 },
        ]
      },
      { id: 45, title: "第四十五课：高级口语表达", goal: "像法国人一样自然流利地说话", vocab: [
        { word: "Bref", meaning: "总之/算了", mnemonic: "'布喝废' - 不喝了废话说完总之", example: "Bref, c'était une longue histoire.", audio: "bref" },
        { word: "En gros", meaning: "大概/总之", mnemonic: "'昂格喝' - 昂着大概喝了格格的酒", example: "En gros, il n'est pas venu.", audio: "en gros" },
        { word: "Du coup", meaning: "所以(口语)", mnemonic: "'度库' - 所以度量了库存", example: "Du coup, on a annulé.", audio: "du coup" },
        { word: "Genre", meaning: "像/那种(口语填充词)", mnemonic: "和英语genre一样", example: "C'était, genre, super bizarre.", audio: "genre" },
        { word: "Trop", meaning: "太...(口语加强)", mnemonic: "'拖' - 太拖了太慢了", example: "C'est trop bien! / Trop cool!", audio: "trop" },
      ], grammar: { title: "口语法语的特点", content: "口语vs书面语的巨大差异：\n\n1. 省略ne：\n书面：Je ne sais pas. → 口语：Je sais pas. / Chais pas.\n\n2. on代替nous：\n书面：Nous allons. → 口语：On va.\n\n3. 填充词：\nEn fait... / Du coup... / Genre... / Tu vois?\nBref... / Bah... / Genre... / Fin...\n\n4. 口头禅：\nAh bah oui! (啊对啊！)\nC'est clair! (就是！)\nN'importe quoi! (胡说！)\nT'as vu? (你看到了吗？)\nÇa marche! (行！)\nC'est pas grave. (没事)\n\n5. 缩略：\ntu as → t'as\ntu es → t'es\nil y a → y a\nje suis → j'suis / ch'uis", tip: "du coup是法国人说得最多的口语连接词！学会它就像学会法语的灵魂" },
        dialogue: [
          { role: "A", text: "T'as vu le film hier soir?", cn: "你昨晚看电影了吗？" },
          { role: "B", text: "Ouais, c'était trop bien! Du coup, je l'ai regardé deux fois.", cn: "对，太好看了！所以我看了两遍。" },
          { role: "A", text: "Genre, t'as pas dormi?", cn: "所以你没睡觉？" },
          { role: "B", text: "Bah si, mais tard. Bref, j'suis fatigué aujourd'hui.", cn: "睡了，但很晚。总之，今天很累。" },
        ], practice: [
          { type: "fill", question: "___, on a annulé la sortie. (所以-口语)", answer: "Du coup", hint: "口语的所以" },
          { type: "choice", question: "'Chais pas'是什么意思?", options: ["我不知道", "我不想去", "我不明白", "我不吃"], answer: 0 },
        ]
      },
    ]
  },
  {
    unit: 10, unitTitle: "C2大师：融会贯通", unitDesc: "法语的最高境界",
    lessons: [
      { id: 46, title: "第四十六课：法语幽默与讽刺", goal: "理解法国人的幽默方式和讽刺艺术", vocab: [
        { word: "Ironie", meaning: "讽刺/反语", mnemonic: "'一喝窝你' - 一喝就窝火讽刺你", example: "C'est de l'ironie, ne le prends pas au premier degré.", audio: "ironie" },
        { word: "Second degré", meaning: "反讽/讽刺层", mnemonic: "'色冻得个喝' - 色冻(到)第二层=讽刺层", example: "Il parle toujours au second degré.", audio: "second degré" },
        { word: "Sarcasme", meaning: "挖苦/讽刺", mnemonic: "'洒喝死母' - 洒了喝死母亲的话=挖苦", example: "Son sarcasme est parfois blessant.", audio: "sarcasme" },
        { word: "Sous-entendu", meaning: "暗指/潜台词", mnemonic: "'苏昂当读' - 苏东坡昂头当读暗指", example: "Il y a un sous-entendu dans sa phrase.", audio: "sous-entendu" },
      ], grammar: { title: "法式幽默密码", content: "法国人幽默的三个层次：\n\n1. Premier degré (字面意思) - 不幽默\nIl fait beau. 天气好。\n\n2. Second degré (反讽) - 法式幽默精髓\nQuelle belle journée! (暴雨中说好天气)\n\n3. Absurde (荒诞) - 高级幽默\nC'est pas faux. (Kaamelott经典台词)\n\n法国经典幽默表达：\n- C'est pas faux. (不假=确实 - 但很敷衍)\n- Sans blague! (不会吧！)\n- Tu m'étonnes! (可不是嘛！字面'你让我惊讶')\n- Comme par hasard... (巧了...暗含讽刺)\n- Mais bien sûr... (是啊当然...明显不信)", tip: "法国幽默的关键：second degré！说反话是一种艺术，要会分辨字面和真实意思" },
        dialogue: [
          { role: "A", text: "Il pleut encore... Quelle belle journée, hein?", cn: "又下雨了...好天气啊，是吧？(反讽)" },
          { role: "B", text: "Sans blague! Tu m'étonnes que tu veuilles rester en France!", cn: "不会吧！难怪你想留在法国！" },
          { role: "A", text: "Mais bien sûr, c'est exactement pour ça que je reste...", cn: "是啊当然，这就是原因...(讽刺)" },
        ], practice: [
          { type: "fill", question: "Quelle belle journée! (暴雨中) 这是___ degré.", answer: "second", hint: "反讽层" },
          { type: "choice", question: "'Tu m'étonnes!'实际意思是?", options: ["你让我惊讶", "可不是嘛", "我不信", "你好奇怪"], answer: 1 },
        ]
      },
      { id: 47, title: "第四十七课：法语媒体与新闻", goal: "能看懂法语新闻和媒体", vocab: [
        { word: "Actualité", meaning: "新闻/时事", mnemonic: "'啊可拖啊里贴' - 啊可以拖着贴新闻", example: "L'actualité politique est mouvementée.", audio: "actualité" },
        { word: "Débat", meaning: "辩论", mnemonic: "'得把' - 得把话说清楚=辩论", example: "Un débat télévisé.", audio: "débat" },
        { word: "Éditorial", meaning: "社论", mnemonic: "和英语editorial一样", example: "L'éditorial du Monde.", audio: "éditorial" },
        { word: "Polémique", meaning: "争议", mnemonic: "'破累米课' - 破了累得眯着上课=争议", example: "Cette loi crée une polémique.", audio: "polémique" },
        { word: "Manifestation", meaning: "游行/示威", mnemonic: "字面意思：manifest=表明", example: "Il y a une manifestation demain.", audio: "manifestation" },
      ], grammar: { title: "法语新闻阅读技巧", content: "法国主要媒体：\n报纸：Le Monde(世界报), Le Figaro(费加罗报), Libération(解放报)\n电视：France 24, TF1, Arte\n广播：France Inter, RFI\n\n新闻法语特点：\n1. 标题常用不定式：\n\"Le président annonce une réforme\"\n\n2. 被动语态频繁：\n\"Le suspect a été arrêté\"\n\n3. 间接引语：\n\"Selon le ministre, la situation s'améliore\"\n\n4. 数字表达：\n\"Près de/Haut de/Environ\" = 大约\n\"Recule de 5%\" = 下降5%\n\n看懂新闻标题的秘诀：认识20个新闻高频词就能看懂80%的标题", tip: "每天读一篇France24法语新闻，是达到C2水平的最佳方法" },
        dialogue: [
          { role: "A", text: "Tu as lu les actualités aujourd'hui?", cn: "你今天看新闻了吗？" },
          { role: "B", text: "Oui, il y a une grande polémique sur la réforme des retraites.", cn: "看了，关于退休改革有个大争议。" },
          { role: "A", text: "Selon Le Monde, des milliers de personnes ont manifesté.", cn: "根据世界报，成千上万的人游行了。" },
        ], practice: [
          { type: "fill", question: "Selon le ___, la situation s'améliore. (部长)", answer: "ministre", hint: "部长" },
          { type: "choice", question: "法国最权威的报纸是?", options: ["Le Figaro", "Le Monde", "Libération", "Le Parisien"], answer: 1 },
        ]
      },
      { id: 48, title: "第四十八课：法语诗歌赏析", goal: "能欣赏和解读法语诗歌", vocab: [
        { word: "Vers", meaning: "诗句", mnemonic: "'外喝' - 外面喝着写诗", example: "Les vers de ce poème sont magnifiques.", audio: "vers" },
        { word: "Rime", meaning: "押韵", mnemonic: "和英语rhyme一样", example: "Les rimes sont en ABAB.", audio: "rime" },
        { word: "Métaphore", meaning: "隐喻", mnemonic: "和英语metaphor一样", example: "La vie est une métaphore du voyage.", audio: "métaphore" },
        { word: "Alexandrin", meaning: "亚历山大诗体(12音节)", mnemonic: "'啊来散得喝' - 亚历山大散开得到了12", example: "L'alexandrin est le vers classique français.", audio: "alexandrin" },
      ], grammar: { title: "法语诗歌入门", content: "法国最著名的诗人：\n- Baudelaire (波德莱尔) - Les Fleurs du Mal\n- Rimbaud (兰波) - Le Dormeur du Val\n- Verlaine (魏尔伦) - Il pleure dans mon cœur\n- Hugo (雨果) - Demain, dès l'aube\n\n经典诗句赏析：\nBaudelaire: \"Sois sage, ô ma Douleur\"\n(乖一点，哦我的痛苦)\n\nVerlaine: \"Il pleure dans mon cœur comme il pleut sur la ville\"\n(我心中哭泣，如同雨落城中)\n\nRimbaud: \"Je est un autre\"\n(我是另一个人)\n\n诗歌阅读技巧：\n1. 先朗读，感受韵律\n2. 找隐喻和象征\n3. 理解情感基调\n4. 联系时代背景", tip: "读法语诗歌不需要每个字都懂！先感受韵律和情感，再慢慢理解意思" },
        dialogue: [
          { role: "A", text: "Tu connais le poème de Verlaine? \"Il pleure dans mon cœur comme il pleut sur la ville.\"", cn: "你知道魏尔伦的诗吗？'我心中哭泣，如同雨落城中'" },
          { role: "B", text: "Quelle métaphore magnifique! La pluie et les larmes.", cn: "太美的隐喻！雨和泪。" },
          { role: "A", text: "C'est ça la poésie française : simple en apparence, profond en réalité.", cn: "这就是法语诗歌：表面简单，实则深邃。" },
        ], practice: [
          { type: "fill", question: "Il pleure dans mon ___ comme il pleut sur la ville.", answer: "cœur", hint: "心" },
          { type: "choice", question: "alexandrin诗有多少个音节?", options: ["8", "10", "12", "14"], answer: 2 },
        ]
      },
      { id: 49, title: "第四十九课：职场法语", goal: "掌握法语职场沟通和求职技巧", vocab: [
        { word: "CV (Curriculum Vitae)", meaning: "简历", mnemonic: "CV和英语一样", example: "J'ai envoyé mon CV hier.", audio: "CV" },
        { word: "Entretien", meaning: "面试", mnemonic: "'昂喝得听' - 昂着头喝得到听面试结果", example: "J'ai un entretien demain.", audio: "entretien" },
        { word: "CDI (Contrat à durée indéterminée)", meaning: "长期合同/正式工", mnemonic: "CDI=法国人心中的圣杯", example: "J'ai enfin décroché un CDI!", audio: "CDI" },
        { word: "Stage", meaning: "实习", mnemonic: "'死打日' - 实习累死打日光", example: "Je fais un stage de six mois.", audio: "stage" },
        { word: "Démission", meaning: "辞职", mnemonic: "'得咪送' - 得眯着眼送走辞职信", example: "J'ai donné ma démission.", audio: "démission" },
      ], grammar: { title: "法国职场文化", content: "法国职场特殊之处：\n1. 35小时工作制 - 法定每周35小时\n2. 5周带薪假 - congés payés\n3. CDI是最高追求 - 几乎不能被开除\n4. 午餐时间1-2小时 - 认真吃饭\n\n职场法语：\n邮件开头：Madame, Monsieur, / Cher(e) collègue,\n邮件结尾：Cordialement / Bien à vous\n\n面试高频问题：\nParlez-moi de vous. (介绍一下自己)\nPourquoi vous voulez ce poste? (为什么想要这份工作?)\nVos qualités et défauts? (优缺点)\n\n求职信公式：\n\"Je me permets de vous adresser ma candidature pour le poste de...\"", tip: "法国人求职信中从不写'我很努力'，而是展示具体的能力和成果" },
        dialogue: [
          { role: "面试官", text: "Parlez-moi de vous.", cn: "介绍一下自己。" },
          { role: "你", text: "J'ai cinq ans d'expérience dans le marketing digital. J'ai géré des projets pour des entreprises internationales.", cn: "我有5年数字营销经验。管理过国际企业的项目。" },
          { role: "面试官", text: "Pourquoi voulez-vous ce poste?", cn: "为什么想要这个岗位？" },
          { role: "你", text: "Parce que votre entreprise partage mes valeurs et que je peux apporter une expertise concrète.", cn: "因为贵公司认同我的价值观，我能带来具体的专业知识。" },
        ], practice: [
          { type: "fill", question: "J'ai un ___ demain matin. (面试)", answer: "entretien", hint: "面试" },
          { type: "choice", question: "法国法定每周工作多少小时?", options: ["30", "35", "40", "45"], answer: 1 },
        ]
      },
      { id: 50, title: "第五十课：C2毕业 - 法语之路", goal: "总结全部所学，展望法语学习未来", vocab: [
        { word: "Accomplissement", meaning: "成就", mnemonic: "'啊空铺里死忙' - 啊空着铺了里程碑忙死=成就", example: "Quel accomplissement remarquable!", audio: "accomplissement" },
        { word: "Persévérance", meaning: "坚持不懈", mnemonic: "'泼洗味昂死' - 泼了洗了味道还在坚持", example: "La persévérance est la clé du succès.", audio: "persévérance" },
        { word: "Épanouissement", meaning: "绽放/自我实现", mnemonic: "'啊铺怒一死忙' - 啊铺着怒火一样死忙绽放", example: "L'épanouissement par les langues.", audio: "épanouissement" },
        { word: "Maîtriser", meaning: "掌握/精通", mnemonic: "'没喝水' - 没喝到水也要掌握法语", example: "Tu maîtrises bien le français!", audio: "maîtriser" },
      ], grammar: { title: "C2之后的法语之路", content: "恭喜！你已经完成了50课的学习！\n\nC2级别你应该能做到：\n✓ 理解任何法语内容（包括快速对话）\n✓ 写学术论文和正式信件\n✓ 理解幽默、讽刺和潜台词\n✓ 自如地用法语辩论和演讲\n✓ 阅读法国文学原著\n✓ 理解各种口音的法语\n\n继续提升的方向：\n1. DALF C1/C2考试备考\n2. 法国文学深度阅读\n3. 法语播客和广播日常化\n4. 写作练习（日记、博客、论文）\n5. 找到法语母语语伴\n6. 去法语国家生活/工作\n\nRappelle-toi : la langue est un pont vers les autres.\n(记住：语言是通向他人的桥梁)", tip: "50课只是开始！真正的C2需要在法语世界里沉浸多年。但你现在已经有了坚实的基础！Félicitations!" },
        dialogue: [
          { role: "老师", text: "Bravo! Tu as accompli un parcours exceptionnel!", cn: "太棒了！你完成了一段非凡的旅程！" },
          { role: "你", text: "Merci infiniment! Grâce à ces 50 leçons, je me sens beaucoup plus confiant.", cn: "非常感谢！通过这50课，我感觉自信多了。" },
          { role: "老师", text: "La persévérance est la clé. Continue à pratiquer et tu atteindras la maîtrise!", cn: "坚持是关键。继续练习，你会达到精通！" },
          { role: "你", text: "C'est exactement mon objectif! Le français est devenu une passion.", cn: "这正是我的目标！法语已经成为了一种热爱。" },
        ], practice: [
          { type: "fill", question: "La ___ est la clé du succès. (坚持不懈)", answer: "persévérance", hint: "坚持" },
          { type: "choice", question: "DALF C2代表什么级别?", options: ["入门", "中级", "精通", "母语"], answer: 2 },
        ]
      },
    ]
  },
  {
    unit: 11, unitTitle: "C2终极：地道法语", unitDesc: "只有母语者才知道的表达",
    lessons: [
      { id: 51, title: "第五十一课：法语语气词大全", goal: "掌握让表达更生动的语气词", vocab: [
        { word: "Putain", meaning: "卧槽(语气词)", mnemonic: "法国人说最多的脏话/感叹词", example: "Putain, c'est génial!", audio: "putain" },
        { word: "Bordel", meaning: "该死/乱糟糟", mnemonic: "'波喝了' - 波了喝了乱糟糟", example: "C'est le bordel ici!", audio: "bordel" },
        { word: "Merde", meaning: "屎/该死", mnemonic: "和英语shit对应", example: "Merde! J'ai oublié mes clés!", audio: "merde" },
        { word: "Quand même", meaning: "还是/毕竟/居然", mnemonic: "'空当么' - 空当这么厉害还是赢了", example: "C'est quand même incroyable!", audio: "quand même" },
      ], grammar: { title: "法语语气词系统", content: "语气词是法语口语的灵魂：\n\n惊讶/感叹：\nPutain! (卧槽！万能感叹词)\nMerde! (该死！)\nOh là là! (哦天哪！)\nMince! (糟糕！优雅版)\n\n强调：\nQuand même (还是/居然)\nVraiment (真的)\nCarrément (完全/就是)\n\n过渡：\nAllez... (来吧/算了...)\nBon... (好吧...)\nBref... (总之...)\n\n注意：Putain是最常用的但也是最粗俗的，正式场合用Mince或Zut代替！", tip: "quand même是法国人说最多的语气表达之一！表示'尽管如此/还是'" },
        dialogue: [
          { role: "A", text: "Putain, tu as vu ça? C'est quand même incroyable!", cn: "卧槽，你看到了吗？太不可思议了！" },
          { role: "B", text: "Oh là là! Carrément! Je n'en reviens pas!", cn: "哦天哪！就是！我都不敢相信！" },
          { role: "A", text: "Allez, on y va quand même.", cn: "算了，我们还是走吧。" },
        ], practice: [
          { type: "fill", question: "C'est ___ même génial! (还是/居然)", answer: "quand", hint: "quand même" },
          { type: "choice", question: "正式场合用什么替代Putain?", options: ["Merde", "Bordel", "Mince", "Putain"], answer: 2 },
        ]
      },
      { id: 52, title: "第五十二课：法语数字高级(70-100)", goal: "掌握法语独特的数字系统", vocab: [
        { word: "Soixante-dix", meaning: "70(60+10)", mnemonic: "法语70=60+10！不是septante", example: "J'ai soixante-dix ans.", audio: "soixante-dix" },
        { word: "Quatre-vingts", meaning: "80(4×20)", mnemonic: "法语80=4个20！二十进制", example: "Il a quatre-vingts ans.", audio: "quatre-vingts" },
        { word: "Quatre-vingt-dix", meaning: "90(4×20+10)", mnemonic: "法语90=80+10！", example: "Il fait quatre-vingt-dix degrés.", audio: "quatre-vingt-dix" },
        { word: "Cent", meaning: "100", mnemonic: "终于到了正常的100！", example: "Cent euros.", audio: "cent" },
        { word: "Mille", meaning: "1000", mnemonic: "'密乐' - 密密麻麻乐了一千个", example: "Mille mercis!", audio: "mille" },
      ], grammar: { title: "法语数字的疯狂逻辑", content: "法语数字70-99使用二十进制！\n\n70 = soixante-dix (60+10)\n71 = soixante et onze (60+11)\n72 = soixante-douze (60+12)\n...\n80 = quatre-vingts (4×20)\n81 = quatre-vingt-un (80+1)\n90 = quatre-vingt-dix (80+10)\n91 = quatre-vingt-onze (80+11)\n99 = quatre-vingt-dix-neuf (80+19)\n\n比利时和瑞士用septante(70)/nonante(90)！\n\n大数字：\ncent = 100\nmille = 1000\nun million = 1,000,000\n\n规则：80有s(quatre-vingts)，但81-99没有", tip: "法国数字是全世界最反人类的！但这也是法国人的骄傲，他们拒绝改成正常数字" },
        dialogue: [
          { role: "A", text: "Tu as quel âge?", cn: "你多大了？" },
          { role: "B", text: "J'ai quatre-vingt-deux ans!", cn: "我82岁！" },
          { role: "A", text: "Wow! Et vous êtes en forme!", cn: "哇！您身体真好！" },
          { role: "B", text: "Merci! J'ai payé quatre-vingt-quinze euros pour mon forfait sport.", cn: "谢谢！我花了95欧办的健身卡。" },
        ], practice: [
          { type: "fill", question: "85用法语怎么说? quatre-vingt-___", answer: "cinq", hint: "80+5" },
          { type: "choice", question: "73用法语怎么说?", options: ["septante-trois", "soixante-treize", "soixante-trois", "quarante-trente-trois"], answer: 1 },
        ]
      },
      { id: 53, title: "第五十三课：法语食物大全", goal: "掌握法国日常食物的法语名称", vocab: [
        { word: "Poulet rôti", meaning: "烤鸡", mnemonic: "'普乐喝提' - 普通乐呵呵地提着烤鸡", example: "Un poulet rôti avec des pommes de terre.", audio: "poulet rôti" },
        { word: "Coq au vin", meaning: "红酒炖鸡", mnemonic: "'口狗万' - 口红狗和红酒=经典菜", example: "Le coq au vin est un plat traditionnel.", audio: "coq au vin" },
        { word: "Ratatouille", meaning: "杂菜炖(料理鼠王)", mnemonic: "看过《料理鼠王》就知道了！", example: "La ratatouille est un plat provençal.", audio: "ratatouille" },
        { word: "Crêpe", meaning: "可丽饼", mnemonic: "'可热破' - 可以热着破开吃", example: "Une crêpe au Nutella.", audio: "crêpe" },
        { word: "Soupe à l'oignon", meaning: "洋葱汤", mnemonic: "法国经典！洋葱做的汤", example: "La soupe à l'oignon gratinée.", audio: "soupe à l'oignon" },
      ], grammar: { title: "法国地方美食", content: "各地区特色：\n\n巴黎：Croissant, Macaron, Steak tartare\n里昂(美食之都)：Quenelle, Tablier de sapeur\n普罗旺斯：Ratatouille, Bouillabaisse(鱼汤)\n布列塔尼：Crêpe, Galette(荞麦饼)\n阿尔萨斯：Choucroute(酸菜), Flammekueche\n\n法国奶酪(400+种！)：\nCamembert - 诺曼底经典\nRoquefort - 蓝纹奶酪\nBrie - 软质奶酪\nComté - 硬质奶酪\n\n法国甜品：\nCrème brûlée(焦糖布丁)\nTarte tatin(反转苹果挞)\nÉclair(闪电泡芙)\nMille-feuille(拿破仑)", tip: "法国人每天吃350种以上的奶酪！认识奶酪是融入法国社会的捷径" },
        dialogue: [
          { role: "侍者", text: "Qu'est-ce que je vous sers comme plat du jour?", cn: "今天特色菜要什么？" },
          { role: "你", text: "Le coq au vin, s'il vous plaît. Et en dessert, une crème brûlée.", cn: "红酒炖鸡。甜点要焦糖布丁。" },
          { role: "侍者", text: "Excellent choix! Et comme boisson?", cn: "好选择！喝什么？" },
          { role: "你", text: "Un verre de vin de Bourgogne, parfait avec le coq au vin!", cn: "一杯勃艮第红酒，配红酒炖鸡绝配！" },
        ], practice: [
          { type: "fill", question: "La ___ est un plat provençal. (杂菜炖)", answer: "ratatouille", hint: "料理鼠王" },
          { type: "choice", question: "法国被称为美食之都的城市是?", options: ["巴黎", "里昂", "尼斯", "马赛"], answer: 1 },
        ]
      },
      { id: 54, title: "第五十四课：法语感情表达大全", goal: "精确表达各种复杂感情", vocab: [
        { word: "Amour fou", meaning: "疯狂的爱", mnemonic: "amour爱+fou疯狂=疯狂的爱", example: "C'est un amour fou!", audio: "amour fou" },
        { word: "Nostalgie", meaning: "怀旧/乡愁", mnemonic: "和英语nostalgia一样", example: "J'ai la nostalgie de mon pays.", audio: "nostalgie" },
        { word: "Dégoûté(e)", meaning: "厌恶的/恶心", mnemonic: "'得古特' - 得到古老特别的东西=厌恶", example: "Je suis dégoûté par cette nouvelle.", audio: "dégoûté" },
        { word: "Émerveillé(e)", meaning: "被震撼/惊叹", mnemonic: "'爱美女爷' - 爱美女爷被震撼了", example: "Je suis émerveillé par ce paysage.", audio: "émerveillé" },
      ], grammar: { title: "法语情感表达层次", content: "爱的层次：\nJe t'aime. 我爱你(最强)\nJe t'aime bien. 我挺喜欢你(反而比aimer弱！)\nJe t'adore. 我爱慕你(介于两者之间)\nJ'ai un coup de cœur pour... 我对...一见倾心\n\n快乐的层次：\nContent(e) = 高兴\nHeureux(se) = 幸福\nRavi(e) = 狂喜\nAux anges = 如登仙境\n\n悲伤的层次：\nTriste = 伤心\nMalheureux(se) = 不幸\nDésespéré(e) = 绝望\nAu bout du rouleau = 走投无路\n\n愤怒的层次：\nAgacé(e) = 烦躁\nEn colère = 生气\nFurieux(se) = 暴怒\nHors de soi = 怒不可遏", tip: "Je t'aime bien在法语里比je t'aime弱！说bien反而让爱变淡了" },
        dialogue: [
          { role: "A", text: "Tu es content de ton nouveau travail?", cn: "你对新工作满意吗？" },
          { role: "B", text: "Content? Je suis ravi! C'est un travail de rêve!", cn: "满意？我是狂喜！这是梦想中的工作！" },
          { role: "A", text: "Tu as de la chance! Moi, j'ai la nostalgie de mon ancien boulot.", cn: "你真幸运！我却怀旧想以前的工作。" },
        ], practice: [
          { type: "fill", question: "Je suis ___ par ce spectacle! (被震撼)", answer: "émerveillé", hint: "惊叹" },
          { type: "choice", question: "je t'aime bien和je t'aime哪个更强烈?", options: ["aime bien", "aime", "一样", "看语境"], answer: 1 },
        ]
      },
      { id: 55, title: "第五十五课：法语时间表达大全", goal: "精确表达各种时间概念", vocab: [
        { word: "Tout à l'heure", meaning: "等会/刚才", mnemonic: "法语的神奇：同一个词可以指过去或将来！", example: "Je l'ai vu tout à l'heure. (我刚才看到了)", audio: "tout à l'heure" },
        { word: "Tout de suite", meaning: "马上/立刻", mnemonic: "'都的睡' - 都得睡觉，马上就睡", example: "Viens tout de suite!", audio: "tout de suite" },
        { word: "De temps en temps", meaning: "时不时", mnemonic: "'得当昂得当' - 时不时当昂当", example: "Je le vois de temps en temps.", audio: "de temps en temps" },
        { word: "Désormais", meaning: "从此以后", mnemonic: "'得早没' - 从此以后得早起没有了", example: "Désormais, je parlerai français.", audio: "désormais" },
      ], grammar: { title: "法语时间表达全景", content: "过去：\nIl y a longtemps = 很久以前\nRécemment = 最近\nJadis = 往昔(文学)\nAuparavant = 以前\n\n现在：\nMaintenant = 现在\nActuellement = 目前\nÀ l'heure actuelle = 当前\nEn ce moment = 此刻\n\n将来：\nBientôt = 很快\nTout à l'heure = 等会\nPlus tard = 以后\nProchainement = 即将\n\n频率：\nJamais = 从不\nRarement = 很少\nDe temps en temps = 时不时\nSouvent = 经常\nToujours = 总是\n\n注意：actuellement不是'actually'！法语里是'目前'的意思！", tip: "tout à l'hour很神奇：Je le vois tout à l'heure=我等会见他 / Je l'ai vu tout à l'heure=我刚才见到他了" },
        dialogue: [
          { role: "A", text: "Tu fais quoi tout à l'heure?", cn: "你等会做什么？" },
          { role: "B", text: "Désormais, je me consacre au français. J'étudie tout le temps!", cn: "从此以后，我全力学法语。我总是在学！" },
          { role: "A", text: "De temps en temps, il faut aussi se reposer!", cn: "时不时也要休息！" },
        ], practice: [
          { type: "fill", question: "Viens ___! (马上!)", answer: "tout de suite", hint: "马上" },
          { type: "choice", question: "actuellement在法语中是什么意思?", options: ["实际上", "目前", "事实上", "活跃地"], answer: 1 },
        ]
      },
      { id: 56, title: "第五十六课：法语否定大全", goal: "掌握所有否定形式", vocab: [
        { word: "Ne...guère", meaning: "几乎不", mnemonic: "'呢盖喝' - 呢盖住了几乎喝不到", example: "Il ne parle guère.", audio: "ne guère" },
        { word: "Ne...nullement", meaning: "毫不/一点也不(正式)", mnemonic: "'呢怒乐忙' - 毫不怒着乐=完全否定", example: "Je ne suis nullement d'accord.", audio: "nullement" },
        { word: "Ne...aucun(e)", meaning: "没有任何", mnemonic: "'呢口干' - 没有任何口干", example: "Je n'ai aucun doute.", audio: "aucun" },
        { word: "Ne...nulle part", meaning: "任何地方都不", mnemonic: "'呢怒趴喝' - 任何地方都不趴着喝", example: "Je ne le trouve nulle part.", audio: "nulle part" },
      ], grammar: { title: "法语否定全系统", content: "基本否定：\nne...pas = 不\nne...jamais = 从不\nne...rien = 什么都不\nne...personne = 没有人\nne...plus = 不再\nne...que = 只有(部分否定)\n\n高级否定：\nne...guère = 几乎不\nne...nullement = 毫不(正式)\nne...aucun(e) = 没有任何\nne...nulle part = 任何地方都不\nne...ni...ni = 既不...也不\n\n双重否定：\nJe ne vois personne nulle part.\n(我在任何地方都看不到任何人)\n\nne...que的特殊用法(不是否定！)：\nJe ne bois que de l'eau. = 我只喝水\nIl ne lit que des romans. = 他只读小说", tip: "ne...que不是否定！它表示'只有'，相当于seulement" },
        dialogue: [
          { role: "A", text: "Tu ne manges jamais de viande?", cn: "你从不吃肉？" },
          { role: "B", text: "Je ne mange que des légumes. Ni viande ni poisson.", cn: "我只吃蔬菜。既不吃肉也不吃鱼。" },
          { role: "A", text: "Et tu n'as aucun regret?", cn: "你没有任何遗憾？" },
          { role: "B", text: "Nullement! C'est mon choix.", cn: "毫不遗憾！这是我的选择。" },
        ], practice: [
          { type: "fill", question: "Je ne bois ___ de l'eau. (只喝)", answer: "que", hint: "ne...que=只有" },
          { type: "choice", question: "ne...que是什么意思?", options: ["不", "只有", "从不", "不再"], answer: 1 },
        ]
      },
      { id: 57, title: "第五十七课：法语感叹句大全", goal: "掌握各种表达感叹的方式", vocab: [
        { word: "Quel / Quelle", meaning: "多么/何等", mnemonic: "'盖乐' - 盖乐=多么快乐", example: "Quelle belle surprise!", audio: "quel" },
        { word: "Comme", meaning: "多么(感叹)", mnemonic: "和英语come不一样", example: "Comme il a grandi!", audio: "comme" },
        { word: "Ce que", meaning: "多么(口语感叹)", mnemonic: "'色哥' - 色哥多么厉害", example: "Ce que c'est beau!", audio: "ce que" },
        { word: "Vraiment", meaning: "真的/实在太", mnemonic: "'v喝忙' - v字喝忙着说真的太忙了", example: "C'est vraiment magnifique!", audio: "vraiment" },
      ], grammar: { title: "法语感叹句系统", content: "感叹句公式：\n\n1. Quel(le) + 名词 + !\nQuelle chance! (多幸运！)\nQuel beau temps! (多好的天气！)\n\n2. Comme + 句子 + !\nComme tu as grandi! (你长大了多少！)\nComme il fait chaud! (太热了！)\n\n3. Que + 句子 + !(正式)\nQue c'est beau! (多美啊！)\n\n4. Ce que + 句子 + !(口语)\nCe que c'est bon! (太好吃了！)\n\n5. Si + 句子 + !(书面)\nSi seulement je pouvais! (要是我能就好了！)\n\n6. 感叹词：\nOh là là! (哦天哪！)\nIncroyable! (难以置信！)\nGénial! (太棒了！)\nN'importe quoi! (胡说八道！)", tip: "Quel(le)感叹句是法语最优雅的感叹方式！Quelle belle journée比C'est beau更文学" },
        dialogue: [
          { role: "A", text: "Quelle belle vue! Comme c'est magnifique!", cn: "多美的景色！太壮观了！" },
          { role: "B", text: "Ce que c'est beau! Je n'ai jamais rien vu de pareil!", cn: "太美了！我从来没见过这样的！" },
          { role: "A", text: "Si seulement on pouvait rester ici pour toujours!", cn: "要是我们能永远待在这里就好了！" },
        ], practice: [
          { type: "fill", question: "___ belle surprise! (多么)", answer: "Quelle", hint: "quelle+阴性名词" },
          { type: "choice", question: "口语感叹句用哪个?", options: ["Que", "Ce que", "Quel", "Comme"], answer: 1 },
        ]
      },
      { id: 58, title: "第五十八课：法语比较与最高级", goal: "精确比较和表达最高级", vocab: [
        { word: "Plus...que", meaning: "比...更", mnemonic: "'铺乐哥' - 铺着乐哥比你更乐", example: "Il est plus grand que moi.", audio: "plus que" },
        { word: "Moins...que", meaning: "比...更不/少", mnemonic: "'木啊哥' - 木啊比你哥少", example: "C'est moins cher que l'autre.", audio: "moins que" },
        { word: "Aussi...que", meaning: "和...一样", mnemonic: "'哦西哥' - 哦西边的哥和你一样", example: "Il est aussi intelligent que toi.", audio: "aussi que" },
        { word: "Le/La plus", meaning: "最...", mnemonic: "最高级", example: "C'est le plus beau pays du monde.", audio: "le plus" },
        { word: "Pire / Meilleur", meaning: "最差/最好", mnemonic: "不规则比较级", example: "C'est le meilleur restaurant.", audio: "meilleur" },
      ], grammar: { title: "法语比较系统", content: "比较级：\nplus + adj/adv + que = 比...更\nmoins + adj/adv + que = 比...不如\naussi + adj + que = 和...一样\nautant + 动词/名词 + que = 和...同样多\n\n不规则比较级：\nbon → meilleur (更好)\nmauvais → pire (更差)\nbien → mieux (更好地)\nmal → pis (更差地-少见)\n\n最高级：\nle/la/les + plus + adj = 最...\nle/la/les + moins + adj = 最不...\nle meilleur = 最好的\nle pire = 最差的\n\n注意：bon没有plus bon！用meilleur代替", tip: "bon的比较级不是plus bon而是meilleur！这是最常见的错误" },
        dialogue: [
          { role: "A", text: "Ce restaurant est meilleur que l'autre, tu ne trouves pas?", cn: "这家餐厅比那家好吃，你不觉得吗？" },
          { role: "B", text: "Oui, et il est moins cher aussi! C'est le meilleur rapport qualité-prix.", cn: "是的，而且更便宜！性价比最高。" },
          { role: "A", text: "Exactement! C'est le plus beau jour de ma vie!", cn: "就是！这是我人生中最美好的一天！" },
        ], practice: [
          { type: "fill", question: "C'est le ___ restaurant de Paris. (最好的)", answer: "meilleur", hint: "bon的最高级" },
          { type: "choice", question: "bon的比较级是什么?", options: ["plus bon", "meilleur", "mieux", "plus bien"], answer: 1 },
        ]
      },
      { id: 59, title: "第五十九课：法语连接词高级", goal: "掌握C2级别的逻辑连接", vocab: [
        { word: "Or", meaning: "然而(论证转折)", mnemonic: "'喝' - 然而喝一杯继续说", example: "Or, cette théorie est contestée.", audio: "or" },
        { word: "Soit...soit", meaning: "要么...要么", mnemonic: "'刷...刷' - 要么刷这个要么刷那个", example: "Soit tu viens, soit tu restes.", audio: "soit soit" },
        { word: "À savoir", meaning: "即/也就是说", mnemonic: "'啊撒我喝' - 啊撒我一杯酒也就是说", example: "Un seul candidat, à savoir Marie.", audio: "à savoir" },
        { word: "Force est de constater", meaning: "不得不承认", mnemonic: "字面：力量在于确认=不得不承认", example: "Force est de constater que ça ne marche pas.", audio: "force est de constater" },
      ], grammar: { title: "C2级逻辑连接词", content: "论证结构连接词：\n\n引出论点：Il convient de noter que... / Force est de constater que...\n添加论据：Qui plus est... / De surcroît... / Par surcroît...\n让步转折：Certes... mais... / Il n'empêche que... / Nonobstant...\n因果关系：De ce fait... / Par conséquent... / C'est la raison pour laquelle...\n对立比较：À l'inverse... / En contrepartie... / A contrario...\n总结：En définitive... / Somme toute... / Au bout du compte...\n\n极正式表达(书面)：\nNonobstant = 尽管\nEu égard à = 鉴于\nSous réserve de = 在...条件下", tip: "这些连接词是DALF C1/C2考试的必备！阅卷老师看到这些会加分" },
        dialogue: [
          { role: "A", text: "Force est de constater que la politique actuelle ne fonctionne pas.", cn: "不得不承认，目前的政策不奏效。" },
          { role: "B", text: "Certes, mais il n'empêche que certains aspects sont positifs.", cn: "诚然，但不妨碍某些方面是积极的。" },
          { role: "A", text: "En définitive, c'est un compromis nécessaire.", cn: "总而言之，这是必要的妥协。" },
        ], practice: [
          { type: "fill", question: "___ est de constater que le problème persiste.", answer: "Force", hint: "Force est de constater" },
          { type: "choice", question: "nonobstant是什么意思?", options: ["因为", "尽管", "此外", "所以"], answer: 1 },
        ]
      },
      { id: 60, title: "第六十课：法语大师 - 终极毕业", goal: "你已经走完了从A1到C2的全部旅程", vocab: [
        { word: "Bravissimo", meaning: "太棒了(意大利语借用)", mnemonic: "bravo的超级版", example: "Bravissimo! Quel parcours!", audio: "bravissimo" },
        { word: "Chef-d'œuvre", meaning: "杰作/巨作", mnemonic: "'chef头+œuvre作品' = 头部作品=杰作", example: "Ce film est un chef-d'œuvre.", audio: "chef-d'œuvre" },
        { word: "Incontournable", meaning: "不可回避的/必学的", mnemonic: "in不+contourner绕过+able=不可绕过", example: "La grammaire est incontournable.", audio: "incontournable" },
        { word: "Perpétuer", meaning: "传承/延续", mnemonic: "'泼佩吐爷' - 泼着佩吐爷爷传承文化", example: "Perpétuer la tradition.", audio: "perpétuer" },
      ], grammar: { title: "C2大师之路", content: "60课旅程完成！你已经掌握了：\n\nA1-A2：生存法语(打招呼/点餐/问路/购物)\nB1：独立交流(表达观点/讲过去的事/情感)\nB2：流利表达(复杂语法/辩论/文化讨论)\nC1：精通级(虚拟式/间接引语/学术写作)\nC2：大师级(文学/哲学/幽默/地道表达)\n\n法语学习的终极建议：\n1. 每天沉浸式学习(看法语/听法语/想法语)\n2. 不要追求完美，追求流利\n3. 犯错是进步的一部分\n4. 文化理解比语法更重要\n5. 找到你的法语'社区'(朋友/语伴/社群)\n\n法国人的秘密：很多法国人自己的语法也不完美！\n你现在的法语水平可能已经超过了一些法国青少年的写作水平 :)\n\nLe voyage de mille lieues commence par un premier pas.\n(千里之行始于足下 - 老子)", tip: "60课是终点也是起点。语言没有完美，只有不断精进。Bravo et à bientôt!" },
        dialogue: [
          { role: "老师", text: "Félicitations! Tu as accompli un véritable chef-d'œuvre en apprenant 60 leçons!", cn: "恭喜！学完60课是你的杰作！" },
          { role: "你", text: "Merci du fond du cœur! Ce parcours a été inoubliable.", cn: "打心底感谢！这段旅程难以忘怀。" },
          { role: "老师", text: "N'oublie jamais : la langue est un pont vers les autres. Perpétue ton apprentissage!", cn: "永远记住：语言是通向他人的桥梁。继续你的学习之旅！" },
          { role: "你", text: "C'est exactement ce que je compte faire! À bientôt pour de nouvelles aventures!", cn: "这正是我打算做的！回头见继续新的冒险！" },
        ], practice: [
          { type: "fill", question: "Ce parcours est un véritable ___. (杰作)", answer: "chef-d'œuvre", hint: "杰作" },
          { type: "choice", question: "60课后最重要的建议是?", options: ["停止学习", "每天沉浸式学习", "只背单词", "只看语法"], answer: 1 },
        ]
      },
    ]
  },
];
