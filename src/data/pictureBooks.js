/**
 * 绘本模块 - 从启蒙到进阶的分级绘本
 * 对标法国/英国本地小学课本体系
 * Level 1: 启蒙（图片+单词+简单句）
 * Level 2: 基础（短句+对话）
 * Level 3: 进阶（段落+故事）
 */
export const pictureBooksData = [
  // ===== Level 1: 启蒙绘本（法语） =====
  {
    id: 1, title: "Les Couleurs", titleCn: "颜色", level: 1, emoji: "🎨", lang: "fr",
    pages: [
      { fr: "Le rouge.", cn: "红色。", vocab: [{ word: "rouge", meaning: "红色" }], img: "🔴" },
      { fr: "Le bleu.", cn: "蓝色。", vocab: [{ word: "bleu", meaning: "蓝色" }], img: "🔵" },
      { fr: "Le jaune.", cn: "黄色。", vocab: [{ word: "jaune", meaning: "黄色" }], img: "🟡" },
      { fr: "Le vert.", cn: "绿色。", vocab: [{ word: "vert", meaning: "绿色" }], img: "🟢" },
      { fr: "Le noir et le blanc.", cn: "黑色和白色。", vocab: [{ word: "noir", meaning: "黑色" }, { word: "blanc", meaning: "白色" }], img: "⚫⚪" },
      { fr: "L'arc-en-ciel a toutes les couleurs!", cn: "彩虹有所有颜色！", vocab: [{ word: "arc-en-ciel", meaning: "彩虹" }], img: "🌈" },
    ]
  },
  {
    id: 2, title: "Les Animaux", titleCn: "动物", level: 1, emoji: "🐾", lang: "fr",
    pages: [
      { fr: "Le chat dit miaou.", cn: "猫说喵。", vocab: [{ word: "chat", meaning: "猫" }], img: "🐱" },
      { fr: "Le chien dit ouaf.", cn: "狗说汪汪。", vocab: [{ word: "chien", meaning: "狗" }], img: "🐶" },
      { fr: "La vache dit meuh.", cn: "牛说哞。", vocab: [{ word: "vache", meaning: "牛" }], img: "🐄" },
      { fr: "Le cochon dit groin.", cn: "猪说哼哼。", vocab: [{ word: "cochon", meaning: "猪" }], img: "🐷" },
      { fr: "Le coq dit cocorico.", cn: "公鸡说咯咯咯。", vocab: [{ word: "coq", meaning: "公鸡" }], img: "🐓" },
      { fr: "Le mouton dit bêê.", cn: "羊说咩。", vocab: [{ word: "mouton", meaning: "羊" }], img: "🐑" },
      { fr: "Et toi, tu dis quoi?", cn: "你呢，你说什么？", vocab: [{ word: "toi", meaning: "你" }], img: "🤔" },
    ]
  },
  {
    id: 3, title: "Ma Famille", titleCn: "我的家庭", level: 1, emoji: "👨‍👩‍👧‍👦", lang: "fr",
    pages: [
      { fr: "Voici papa. Il est grand.", cn: "这是爸爸。他很高。", vocab: [{ word: "papa", meaning: "爸爸" }, { word: "grand", meaning: "高的" }], img: "👨" },
      { fr: "Voici maman. Elle est belle.", cn: "这是妈妈。她很美。", vocab: [{ word: "maman", meaning: "妈妈" }, { word: "belle", meaning: "美的" }], img: "👩" },
      { fr: "Voici mon frère. Il joue.", cn: "这是我的兄弟。他在玩。", vocab: [{ word: "frère", meaning: "兄弟" }, { word: "jouer", meaning: "玩" }], img: "👦" },
      { fr: "Voici ma sœur. Elle rit.", cn: "这是我的姐妹。她在笑。", vocab: [{ word: "sœur", meaning: "姐妹" }, { word: "rire", meaning: "笑" }], img: "👧" },
      { fr: "Nous sommes une famille heureuse!", cn: "我们是一个幸福的家庭！", vocab: [{ word: "famille", meaning: "家庭" }, { word: "heureux", meaning: "幸福的" }], img: "👨‍👩‍👧‍👦" },
    ]
  },
  {
    id: 4, title: "Le Corps", titleCn: "身体", level: 1, emoji: "🧍", lang: "fr",
    pages: [
      { fr: "J'ai une tête.", cn: "我有一个头。", vocab: [{ word: "tête", meaning: "头" }], img: "🗣️" },
      { fr: "J'ai deux yeux.", cn: "我有两只眼睛。", vocab: [{ word: "yeux", meaning: "眼睛" }], img: "👀" },
      { fr: "J'ai un nez.", cn: "我有一个鼻子。", vocab: [{ word: "nez", meaning: "鼻子" }], img: "👃" },
      { fr: "J'ai deux oreilles.", cn: "我有两只耳朵。", vocab: [{ word: "oreilles", meaning: "耳朵" }], img: "👂" },
      { fr: "J'ai une bouche.", cn: "我有一张嘴。", vocab: [{ word: "bouche", meaning: "嘴" }], img: "👄" },
      { fr: "J'ai deux mains!", cn: "我有两只手！", vocab: [{ word: "mains", meaning: "手" }], img: "🙌" },
    ]
  },
  {
    id: 5, title: "Les Fruits", titleCn: "水果", level: 1, emoji: "🍎", lang: "fr",
    pages: [
      { fr: "La pomme est rouge.", cn: "苹果是红色的。", vocab: [{ word: "pomme", meaning: "苹果" }], img: "🍎" },
      { fr: "La banane est jaune.", cn: "香蕉是黄色的。", vocab: [{ word: "banane", meaning: "香蕉" }], img: "🍌" },
      { fr: "L'orange est orange.", cn: "橙子是橙色的。", vocab: [{ word: "orange", meaning: "橙子/橙色" }], img: "🍊" },
      { fr: "Le raisin est violet.", cn: "葡萄是紫色的。", vocab: [{ word: "raisin", meaning: "葡萄" }], img: "🍇" },
      { fr: "La fraise est petite et rouge.", cn: "草莓又小又红。", vocab: [{ word: "fraise", meaning: "草莓" }], img: "🍓" },
      { fr: "J'aime tous les fruits!", cn: "我喜欢所有水果！", vocab: [{ word: "fruits", meaning: "水果" }], img: "🍉🍒🍑" },
    ]
  },
  // ===== Level 2: 基础绘本（法语） =====
  {
    id: 6, title: "Une Journée à la Ferme", titleCn: "农场的一天", level: 2, emoji: "🌾", lang: "fr",
    pages: [
      { fr: "Le fermier se lève tôt. Il donne à manger aux poules.", cn: "农夫早起。他给母鸡喂食。", vocab: [{ word: "fermier", meaning: "农夫" }, { word: "poules", meaning: "母鸡" }], img: "🧑‍🌾" },
      { fr: "Les vaches mangent de l'herbe dans le pré.", cn: "牛在草地上吃草。", vocab: [{ word: "herbe", meaning: "草" }, { word: "pré", meaning: "草地" }], img: "🐄" },
      { fr: "Le tracteur est dans la grange. Il est vieux mais solide.", cn: "拖拉机在谷仓里。它旧但结实。", vocab: [{ word: "tracteur", meaning: "拖拉机" }, { word: "grange", meaning: "谷仓" }], img: "🚜" },
      { fr: "Les canards nagent dans la mare. Les petits suivent leur mère.", cn: "鸭子在池塘游泳。小鸭子跟着妈妈。", vocab: [{ word: "canards", meaning: "鸭子" }, { word: "mare", meaning: "池塘" }], img: "🦆" },
      { fr: "Le soir, le fermier est fatigué mais content. La ferme est calme.", cn: "晚上，农夫累了但很开心。农场安静了。", vocab: [{ word: "fatigué", meaning: "累的" }, { word: "calme", meaning: "安静的" }], img: "🌅" },
    ]
  },
  {
    id: 7, title: "La Petite Sirène de la Seine", titleCn: "塞纳河的小美人鱼", level: 2, emoji: "🧜‍♀️", lang: "fr",
    pages: [
      { fr: "Au fond de la Seine, vivait une petite sirène appelée Ondine.", cn: "在塞纳河底，住着一条叫Ondine的小美人鱼。", vocab: [{ word: "fond", meaning: "底部" }, { word: "sirène", meaning: "美人鱼" }], img: "🧜‍♀️" },
      { fr: "Elle regardait toujours la surface. 'Qu'est-ce qu'il y a là-haut?' demandait-elle.", cn: "她总是看着水面。'上面有什么？'她问。", vocab: [{ word: "surface", meaning: "水面" }, { word: "là-haut", meaning: "上面" }], img: "🌊" },
      { fr: "Un jour, elle a vu la Tour Eiffel briller. 'C'est magnifique!' a-t-elle dit.", cn: "一天，她看到了闪亮的埃菲尔铁塔。'太美了！'她说。", vocab: [{ word: "magnifique", meaning: "壮观的" }], img: "🗼" },
      { fr: "Elle a nagé vers la surface et a vu un jeune homme qui jouait de l'accordéon.", cn: "她游向水面，看到一个拉手风琴的年轻人。", vocab: [{ word: "jeune homme", meaning: "年轻人" }], img: "🎶" },
      { fr: "Depuis ce jour, Ondine écoute la musique chaque soir. Paris est magique!", cn: "从那天起，Ondine每晚听音乐。巴黎太神奇了！", vocab: [{ word: "magique", meaning: "神奇的" }], img: "✨" },
    ]
  },
  {
    id: 8, title: "Le Chat Noir de Montmartre", titleCn: "蒙马特的黑猫", level: 2, emoji: "🐈‍⬛", lang: "fr",
    pages: [
      { fr: "À Montmartre, il y a un chat noir qui s'appelle Minou. Il est très connu.", cn: "在蒙马特，有一只叫Minou的黑猫。它非常出名。", vocab: [{ word: "connu", meaning: "出名的" }], img: "🐈‍⬛" },
      { fr: "Chaque matin, Minou visite les boulangeries. Les boulangers lui donnent des croissants.", cn: "每天早上，Minou去面包店。面包师给它羊角面包。", vocab: [{ word: "boulangerie", meaning: "面包店" }], img: "🥐" },
      { fr: "L'après-midi, il dort au soleil devant les cafés. Les touristes prennent des photos.", cn: "下午，它在咖啡馆前晒太阳。游客们拍照。", vocab: [{ word: "touristes", meaning: "游客" }], img: "☀️" },
      { fr: "Le soir, Minou monte les escaliers du Sacré-Cœur. Il regarde Paris briller.", cn: "晚上，Minou爬上圣心大教堂的台阶。它看着巴黎闪耀。", vocab: [{ word: "escaliers", meaning: "台阶" }, { word: "briller", meaning: "闪耀" }], img: "⛪" },
      { fr: "Minou est le roi de Montmartre!", cn: "Minou是蒙马特之王！", vocab: [{ word: "roi", meaning: "国王" }], img: "👑" },
    ]
  },
  // ===== Level 3: 进阶绘本（法语） =====
  {
    id: 9, title: "Le Petit Prince et le Renard", titleCn: "小王子与狐狸", level: 3, emoji: "🦊", lang: "fr",
    pages: [
      { fr: "Le petit prince a rencontré un renard dans un champ. 'Je voudrais jouer avec toi', a dit le prince.", cn: "小王子在田野里遇到了一只狐狸。'我想和你玩'，王子说。", vocab: [{ word: "renard", meaning: "狐狸" }, { word: "champ", meaning: "田野" }], img: "🦊" },
      { fr: "'Non', a dit le renard. 'Je ne suis pas apprivoisé. Apprivoiser, ça veut dire créer des liens.'", cn: "'不'，狐狸说。'我还没有被驯服。驯服的意思是建立联系。'", vocab: [{ word: "apprivoiser", meaning: "驯服" }, { word: "liens", meaning: "联系" }], img: "🤝" },
      { fr: "'Chaque jour, tu peux t'asseoir un peu plus près de moi', a expliqué le renard.", cn: "'每天，你可以坐得离我近一点'，狐狸解释道。", vocab: [{ word: "expliquer", meaning: "解释" }], img: "💕" },
      { fr: "Le prince est revenu chaque jour. Et un jour, le renard a dit: 'Maintenant, nous sommes amis.'", cn: "王子每天都回来。终于有一天，狐狸说：'现在，我们是朋友了。'", vocab: [{ word: "ami", meaning: "朋友" }], img: "🌻" },
      { fr: "'Tu es responsable de ce que tu as apprivoisé', a dit le renard. Le prince n'a jamais oublié.", cn: "'你要对你驯服的东西负责'，狐狸说。王子从未忘记。", vocab: [{ word: "responsable", meaning: "负责的" }, { word: "oublier", meaning: "忘记" }], img: "⭐" },
    ]
  },
  {
    id: 10, title: "La Révolution des Animaux", titleCn: "动物们的革命", level: 3, emoji: "🐔", lang: "fr",
    pages: [
      { fr: "Dans une ferme française, les animaux étaient fatigués de travailler sans repos. Un vieux coq a eu une idée.", cn: "在法国的一个农场里，动物们厌倦了无休止地工作。一只老公鸡有了个主意。", vocab: [{ word: "repos", meaning: "休息" }, { word: "idée", meaning: "主意" }], img: "🐓" },
      { fr: "'Pourquoi travaillons-nous tout le temps?' a demandé le coq. 'Les humains se reposent le dimanche!'", cn: "'为什么我们一直在干活？'公鸡问。'人类星期天还休息呢！'", vocab: [{ word: "humains", meaning: "人类" }], img: "🤔" },
      { fr: "Les animaux ont discuté. La vache, les poules, le cochon - tous étaient d'accord.", cn: "动物们讨论了。牛、母鸡、猪——都同意了。", vocab: [{ word: "discuter", meaning: "讨论" }, { word: "d'accord", meaning: "同意" }], img: "🗣️" },
      { fr: "Le lundi matin, personne n'a travaillé. Le fermier était surpris! Mais il a compris.", cn: "周一早上，没人干活。农夫很惊讶！但他理解了。", vocab: [{ word: "surpris", meaning: "惊讶的" }, { word: "compris", meaning: "理解" }], img: "😲" },
      { fr: "Depuis ce jour, les animaux ont leur dimanche de repos. Et la ferme est plus heureuse!", cn: "从那天起，动物们有了星期天休息。农场更快乐了！", vocab: [{ word: "heureux", meaning: "快乐的" }], img: "🎉" },
    ]
  },
  // ===== Level 1: 英语启蒙绘本 =====
  {
    id: 11, title: "Colours Around Us", titleCn: "身边的颜色", level: 1, emoji: "🌈", lang: "en",
    pages: [
      { fr: "The sky is blue.", cn: "天空是蓝色的。", vocab: [{ word: "sky", meaning: "天空" }], img: "🌤️" },
      { fr: "The sun is yellow.", cn: "太阳是黄色的。", vocab: [{ word: "sun", meaning: "太阳" }], img: "☀️" },
      { fr: "The grass is green.", cn: "草是绿色的。", vocab: [{ word: "grass", meaning: "草" }], img: "🌿" },
      { fr: "The rose is red.", cn: "玫瑰是红色的。", vocab: [{ word: "rose", meaning: "玫瑰" }], img: "🌹" },
      { fr: "The snow is white.", cn: "雪是白色的。", vocab: [{ word: "snow", meaning: "雪" }], img: "❄️" },
      { fr: "The world is colourful!", cn: "世界是多彩的！", vocab: [{ word: "colourful", meaning: "多彩的" }], img: "🌍" },
    ]
  },
  {
    id: 12, title: "At the Supermarket", titleCn: "在超市", level: 2, emoji: "🛒", lang: "en",
    pages: [
      { fr: "Mum pushes the trolley. 'We need milk, bread and eggs,' she says.", cn: "妈妈推着手推车。'我们需要牛奶、面包和鸡蛋，'她说。", vocab: [{ word: "trolley", meaning: "手推车" }, { word: "milk", meaning: "牛奶" }], img: "🛒" },
      { fr: "'Can I have some sweets?' asks little Tom. 'Only if you eat your vegetables,' says Mum.", cn: "'我能要些糖果吗？'小Tom问。'只有你吃了蔬菜才行，'妈妈说。", vocab: [{ word: "sweets", meaning: "糖果" }, { word: "vegetables", meaning: "蔬菜" }], img: "🍬" },
      { fr: "At the checkout, Tom helps to put everything in the bags. 'That'll be forty-two pounds, please.'", cn: "在收银台，Tom帮忙把所有东西装袋。'一共42英镑，谢谢。'", vocab: [{ word: "checkout", meaning: "收银台" }, { word: "pounds", meaning: "英镑" }], img: "💷" },
      { fr: "On the way home, it starts to rain. They run to the car with the shopping.", cn: "回家路上，开始下雨了。他们拎着购物袋跑向汽车。", vocab: [{ word: "rain", meaning: "下雨" }], img: "🌧️" },
    ]
  },
  {
    id: 13, title: "A Day at School", titleCn: "上学的一天", level: 2, emoji: "🏫", lang: "en",
    pages: [
      { fr: "The bell rings at nine o'clock. Everyone goes to their classroom.", cn: "九点钟铃响了。大家走进教室。", vocab: [{ word: "bell", meaning: "铃" }, { word: "classroom", meaning: "教室" }], img: "🔔" },
      { fr: "First, we do maths. 'Two plus two equals four,' says Miss Taylor.", cn: "首先是数学课。'二加二等于四，'Taylor老师说。", vocab: [{ word: "maths", meaning: "数学" }, { word: "equals", meaning: "等于" }], img: "🔢" },
      { fr: "Then, we paint pictures. Lucy paints a rainbow. Tom paints a dragon!", cn: "然后是画画课。Lucy画了彩虹。Tom画了龙！", vocab: [{ word: "paint", meaning: "画画" }, { word: "rainbow", meaning: "彩虹" }], img: "🎨" },
      { fr: "At break time, we play in the playground. 'Tag, you're it!' shouts Sam.", cn: "课间休息，我们在操场玩。'抓到你啦！'Sam喊道。", vocab: [{ word: "playground", meaning: "操场" }, { word: "tag", meaning: "抓人游戏" }], img: "🏃" },
      { fr: "At three o'clock, school is over. 'See you tomorrow!' everyone says.", cn: "三点放学了。'明天见！'大家说。", vocab: [{ word: "tomorrow", meaning: "明天" }], img: "👋" },
    ]
  },
  // ===== Level 3: 英语进阶绘本 =====
  {
    id: 14, title: "The Lighthouse Keeper", titleCn: "灯塔看守人", level: 3, emoji: "🏠", lang: "en",
    pages: [
      { fr: "Old Captain Webb lived in a lighthouse on the coast of Cornwall. Every evening, he climbed the spiral stairs to light the lamp.", cn: "老韦伯船长住在康沃尔海岸的灯塔里。每天傍晚，他爬上螺旋楼梯点灯。", vocab: [{ word: "lighthouse", meaning: "灯塔" }, { word: "spiral", meaning: "螺旋的" }, { word: "lamp", meaning: "灯" }], img: "🏠" },
      { fr: "The light guided ships safely past the rocks. 'Without that beam, they'd be lost,' he muttered to his cat, Nelson.", cn: "灯光引导船只安全经过礁石。'没有那道光，它们会迷路的，'他对他的猫Nelson喃喃道。", vocab: [{ word: "guided", meaning: "引导" }, { word: "beam", meaning: "光束" }], img: "💡" },
      { fr: "One stormy night, the lamp went out. Captain Webb rushed up the stairs. The wind howled and the rain battered the windows.", cn: "一个暴风雨的夜晚，灯灭了。韦伯船长冲上楼梯。风在呼啸，雨拍打着窗户。", vocab: [{ word: "stormy", meaning: "暴风雨的" }, { word: "howled", meaning: "呼啸" }, { word: "battered", meaning: "拍打" }], img: "⛈️" },
      { fr: "With trembling hands, he relit the lamp. A ship's horn sounded in the distance. 'Safe passage,' he whispered. Nelson purred.", cn: "他用颤抖的手重新点灯。远处传来一声船笛。'安全通过了，'他低语。Nelson发出呼噜声。", vocab: [{ word: "trembling", meaning: "颤抖的" }, { word: "passage", meaning: "通过" }], img: "🚢" },
    ]
  },
  {
    id: 15, title: "The Secret Garden of Versailles", titleCn: "凡尔赛的秘密花园", level: 3, emoji: "🏰", lang: "fr",
    pages: [
      { fr: "Dans les jardins de Versailles, il y avait une porte cachée derrière les rosiers. Personne ne la remarquait.", cn: "在凡尔赛花园里，有一扇藏在玫瑰丛后面的门。没人注意到它。", vocab: [{ word: "jardins", meaning: "花园" }, { word: "cachée", meaning: "隐藏的" }, { word: "rosiers", meaning: "玫瑰丛" }], img: "🌹" },
      { fr: "Un jour, une petite fille nommée Sophie l'a trouvée. Elle a poussé la porte et est entrée dans un jardin enchanté.", cn: "一天，一个叫Sophie的小女孩找到了它。她推开门，走进了一个魔法花园。", vocab: [{ word: "poussé", meaning: "推" }, { word: "enchanté", meaning: "魔法的" }], img: "🚪" },
      { fr: "Les fleurs parlaient! 'Bienvenue, Sophie!' ont dit les roses. 'Nous t'attendions depuis longtemps.'", cn: "花在说话！'欢迎你，Sophie！'玫瑰们说。'我们等你很久了。'", vocab: [{ word: "fleurs", meaning: "花" }, { word: "attendaient", meaning: "等待" }], img: "🌸" },
      { fr: "Sophie a appris que chaque fleur gardait un secret de l'histoire de France. La rose de Marie-Antoinette, le tournesol de Napoléon...", cn: "Sophie了解到每朵花都保存着法国历史的一个秘密。玛丽·安托瓦内特的玫瑰，拿破仑的向日葵...", vocab: [{ word: "secret", meaning: "秘密" }, { word: "histoire", meaning: "历史" }], img: "🌻" },
      { fr: "Depuis ce jour, Sophie revient chaque semaine. Elle est la gardienne du jardin secret de Versailles!", cn: "从那天起，Sophie每周都回来。她是凡尔赛秘密花园的守护者！", vocab: [{ word: "gardienne", meaning: "守护者" }], img: "👑" },
    ]
  },
];
