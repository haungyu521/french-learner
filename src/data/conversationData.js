// 自由对话 + 中国文化 + 谚语歇后语 + 口音注释

// ========== 谚语和歇后语 ==========
export const proverbs = {
  fr: [
    { proverb: 'Qui vivra verra.', literal: '谁活得更久谁就能看到', meaning: '来日方长/走着瞧', region: '全法国通用', accent: '标准法语' },
    { proverb: 'Mieux vaut tard que jamais.', literal: '迟总比不迟到好', meaning: '亡羊补牢，为时未晚', region: '全法国通用', accent: '标准法语' },
    { proverb: 'Paris ne s\'est pas fait en un jour.', literal: '巴黎不是一天建成的', meaning: '冰冻三尺非一日之寒', region: '巴黎', accent: 'Parisien' },
    { proverb: 'C\'est pas la mer à boire.', literal: '这又不是要喝干大海', meaning: '没那么难/别夸张', region: '全法国', accent: '口语化' },
    { proverb: 'Avoir le cafard.', literal: '拥有蟑螂', meaning: '心情低落/郁闷', region: '全法国', accent: '标准法语', note: 'Baudelaire发明的表达' },
    { proverb: 'Poser un lapin.', literal: '放一只兔子', meaning: '放鸽子/爽约', region: '全法国', accent: '标准法语' },
    { proverb: 'Avoir la flemme.', literal: '拥有懒惰', meaning: '懒得动/不想做', region: '全法国', accent: '年轻人常用' },
    { proverb: 'C\'est la galère.', literal: '这是划船', meaning: '太麻烦了/太惨了', region: '南法马赛常用', accent: 'Accent du Midi', note: '南法人常用这个表达困难' },
    { proverb: 'Se rouler les pouces.', literal: '滚动大拇指', meaning: '无所事事/游手好闲', region: '全法国', accent: '标准法语' },
    { proverb: 'Il pleut des cordes.', literal: '天上下绳子', meaning: '倾盆大雨', region: '全法国', accent: '标准法语' },
    { proverb: 'Être comme un poisson dans l\'eau.', literal: '像水里的鱼', meaning: '如鱼得水', region: '全法国', accent: '标准法语' },
    { proverb: 'Avoir d\'autres chats à fouetter.', literal: '有其他猫要鞭打', meaning: '还有更重要的事要做', region: '全法国', accent: '标准法语' },
  ],
  en: [
    { proverb: 'It\'s raining cats and dogs.', literal: '天上下猫下狗', meaning: '倾盆大雨', region: '英国', accent: 'British RP', note: '经典英式表达' },
    { proverb: 'Keep a stiff upper lip.', literal: '保持僵硬的上唇', meaning: '坚强不屈/泰然自若', region: '英国', accent: 'British RP', note: '英国人的典型性格' },
    { proverb: 'Break a leg!', literal: '摔断腿', meaning: '祝你好运！', region: '英美通用', accent: '标准', note: '戏剧界传统说法' },
    { proverb: 'The ball is in your court.', literal: '球在你这边', meaning: '该你决定了', region: '英美通用', accent: '标准' },
    { proverb: 'Once in a blue moon.', literal: '蓝月亮一次', meaning: '千载难逢/极其罕见', region: '英美通用', accent: '标准' },
    { proverb: 'Don\'t cry over spilt milk.', literal: '别为洒了的牛奶哭', meaning: '覆水难收', region: '英美通用', accent: '标准' },
    { proverb: 'A penny for your thoughts.', literal: '一分钱买你的想法', meaning: '你在想什么？', region: '英国', accent: 'British RP', note: '英式礼貌问法' },
    { proverb: 'Bob\'s your uncle!', literal: '鲍勃是你舅舅', meaning: '就这么简单！搞定了！', region: '英国', accent: 'British RP', note: '非常英式的口头禅' },
    { proverb: 'It\'s not my cup of tea.', literal: '这不是我的茶', meaning: '这不是我的菜', region: '英国', accent: 'British RP', note: '英国人和茶的渊源' },
    { proverb: 'When pigs fly.', literal: '当猪会飞的时候', meaning: '绝无可能', region: '英美通用', accent: '标准' },
    { proverb: 'Speak of the devil.', literal: '说到魔鬼', meaning: '说曹操曹操到', region: '英美通用', accent: '标准' },
    { proverb: 'The early bird catches the worm.', literal: '早起的鸟抓到虫', meaning: '早起的鸟儿有虫吃', region: '英美通用', accent: '标准' },
  ],
};

// ========== 中国文化传播话题 ==========
export const chineseCulture = {
  fr: [
    {
      topic: '春节 Le Festival de Printemps',
      icon: '🧧',
      intro: '向法国朋友介绍中国最重要的节日——春节。法国人很好奇家庭传统和食物。',
      dialogues: [
        { role: 'ai', text: 'Qu\'est-ce que c\'est, le Festival de Printemps ?', cn: '春节是什么？',
          teacherTip: '🎓 法国人用 "Festival de Printemps" 来表示春节。直译是"春天的节日"。' },
        { role: 'you', text: 'C\'est la fête la plus importante en Chine, comme Noël en France.', cn: '这是中国最重要的节日，就像法国的圣诞节。',
          teacherTip: '🎓 用 "comme Noël en France" 做类比，法国人立刻就能理解春节的重要性。' },
        { role: 'ai', text: 'Comment est-ce qu\'on célèbre ?', cn: '怎么庆祝呢？',
          teacherTip: '🎓 "Comment est-ce qu\'on..." = 人们怎么... 这是法国人常用的提问方式。' },
        { role: 'you', text: 'On se réunit en famille, on mange des dumplings, et les enfants reçoivent des enveloppes rouges.', cn: '家人团聚，吃饺子，孩子们收红包。',
          teacherTip: '🎓 "enveloppe rouge" = 红包。"dumplings" 法语也常用这个词，或者用 "raviolis chinois"。' },
        { role: 'ai', text: 'Pourquoi des enveloppes rouges ?', cn: '为什么是红色的信封？',
          teacherTip: '🎓 法国人对颜色象征很感兴趣，红色在中国文化中代表好运。' },
        { role: 'you', text: 'Le rouge porte bonheur en Chine. C\'est un symbole de prospérité.', cn: '红色在中国代表好运，是繁荣的象征。',
          teacherTip: '🎓 "porter bonheur" = 带来好运。"prospérité" = 繁荣。法国文化也认为红色有力量。' },
      ]
    },
    {
      topic: '中国茶文化 Le thé chinois',
      icon: '🍵',
      intro: '法国人也爱喝茶，但方式完全不同。向他们介绍中国茶道的精髓。',
      dialogues: [
        { role: 'ai', text: 'Quelle est la différence entre le thé chinois et le thé français ?', cn: '中国茶和法国茶有什么区别？',
          teacherTip: '🎓 法国人通常喝加牛奶或糖的茶，中国茶则是纯茶。' },
        { role: 'you', text: 'En Chine, on boit le thé nature, sans sucre ni lait. On apprécie le goût original.', cn: '在中国，我们喝纯茶，不加糖不加奶，品味原本的味道。',
          teacherTip: '🎓 "nature" = 原味的。"apprécier" = 欣赏/品味。法国人很理解品味食物的概念。' },
        { role: 'ai', text: 'Quels types de thé existe-t-il en Chine ?', cn: '中国有哪些茶？',
          teacherTip: '🎓 法国人最常接触的是绿茶和红茶，但中国茶的种类远不止这些。' },
        { role: 'you', text: 'Il y a le thé vert, le thé noir, le thé oolong, le thé blanc et le thé pu-erh.', cn: '有绿茶、红茶、乌龙茶、白茶和普洱茶。',
          teacherTip: '🎓 法语中：绿茶=thé vert，红茶=thé noir（注意法国人说"黑茶"），乌龙茶=thé oolong。' },
        { role: 'ai', text: 'Le thé pu-erh, c\'est spécial ?', cn: '普洱茶很特别吗？',
          teacherTip: '🎓 普洱茶对法国人来说很新奇，可以解释它的发酵工艺。' },
        { role: 'you', text: 'Oui, c\'est un thé fermenté de la province du Yunnan. Plus il vieillit, meilleur il est.', cn: '是的，这是云南的发酵茶。越陈越好。',
          teacherTip: '🎓 "fermenté" = 发酵的。"Plus il vieillit, meilleur il est" = 越陈越好，类似法语说红酒。' },
      ]
    },
    {
      topic: '中国哲学 La philosophie chinoise',
      icon: '☯️',
      intro: '法国人热爱哲学！向他们介绍孔子和道家思想，这是文化交流的高级话题。',
      dialogues: [
        { role: 'ai', text: 'Tu connais Confucius ? Qu\'est-ce qu\'il a enseigné ?', cn: '你知道孔子吗？他教了什么？',
          teacherTip: '🎓 Confucius 是孔子在法语中的名字。法国人对东方哲学很感兴趣。' },
        { role: 'you', text: 'Il a enseigné la morale, le respect des aînés et l\'harmonie sociale.', cn: '他教道德、尊敬长辈和社会和谐。',
          teacherTip: '🎓 "morale" = 道德。"respect des aînés" = 尊敬长辈。"harmonie" = 和谐。' },
        { role: 'ai', text: 'C\'est similaire à la philosophie grecque ?', cn: '和希腊哲学相似吗？',
          teacherTip: '🎓 法国人常将东西方哲学做比较，这是很好的对话切入点。' },
        { role: 'you', text: 'Oui, mais Confucius se concentre plus sur les relations humaines et la famille.', cn: '是的，但孔子更关注人际关系和家庭。',
          teacherTip: '🎓 "se concentrer sur" = 专注于。"relations humaines" = 人际关系。' },
        { role: 'ai', text: 'Et le taoïsme, c\'est quoi ?', cn: '那道家思想是什么？',
          teacherTip: '🎓 "taoïsme" = 道家思想。法国人对"道"的概念很着迷。' },
        { role: 'you', text: 'Le taoïsme enseigne à vivre en harmonie avec la nature et à suivre le Tao.', cn: '道家教导与自然和谐相处，遵循道。',
          teacherTip: '🎓 "en harmonie avec la nature" = 与自然和谐。"le Tao" = 道。法国也有类似概念。' },
      ]
    },
    {
      topic: '中国美食 La gastronomie chinoise',
      icon: '🥢',
      intro: '法国人以美食为傲，向他们介绍真正的中国菜远不止外卖！',
      dialogues: [
        { role: 'ai', text: 'La cuisine chinoise en France, c\'est différent de la vraie cuisine ?', cn: '法国的中餐和正宗中餐不一样吗？',
          teacherTip: '🎓 这是一个很好的话题！法国的中餐馆确实做了很多改良。' },
        { role: 'you', text: 'Oui ! En Chine, il y a huit grandes cuisines régionales. Le Sichuan est épicé, le Canton est doux.', cn: '是的！中国有八大菜系。四川菜辣，广东菜清淡。',
          teacherTip: '🎓 "huit grandes cuisines régionales" = 八大菜系。"épicé" = 辣的。"doux" = 清淡的/甜的。' },
        { role: 'ai', text: 'Le dim sum, c\'est quoi exactement ?', cn: '点心到底是什么？',
          teacherTip: '🎓 "dim sum" 在法语中直接用粤语发音，法国人很喜欢吃点心。' },
        { role: 'you', text: 'Les dim sums sont des petits plats, souvent servis dans des paniers en bambou.', cn: '点心是小份菜肴，通常用竹篮盛放。',
          teacherTip: '🎓 "paniers en bambou" = 竹篮。"petits plats" = 小份菜。法国人也喜欢小份精致的食物。' },
        { role: 'ai', text: 'En Chine, on utilise les baguettes pour tout ?', cn: '在中国什么都用筷子吗？',
          teacherTip: '🎓 "baguettes" 在法语中就是筷子，注意和法国面包 "baguette" 区分发音。' },
        { role: 'you', text: 'Presque tout ! Mais pour le riz, on peut utiliser une cuillère. Et la soupe aussi.', cn: '几乎所有！但米饭可以用勺子，汤也是。',
          teacherTip: '🎓 "Presque" = 几乎。"cuillère" = 勺子。法国人喝汤用勺子，这和中国不同。' },
      ]
    },
  ],
  en: [
    {
      topic: 'Spring Festival 春节',
      icon: '🧧',
      intro: 'Introduce the most important Chinese festival to an English speaker.',
      dialogues: [
        { role: 'ai', text: 'So, what\'s the Spring Festival all about?', cn: '春节到底是怎么回事？',
          teacherTip: '🎓 "What\'s ... all about?" 是地道的英语口语，表示"到底是什么"。' },
        { role: 'you', text: 'It\'s the most important holiday in China, a bit like Christmas but with a lunar calendar.', cn: '这是中国最重要的节日，有点像圣诞节但按农历。',
          teacherTip: '🎓 "a bit like" = 有点像。"lunar calendar" = 农历。用 Christmas 做类比让英国人秒懂。' },
        { role: 'ai', text: 'What do people actually do during the festival?', cn: '人们具体做什么？',
          teacherTip: '🎓 "actually" 在英语中用于追问真实情况，非常常用。' },
        { role: 'you', text: 'Families gather for a reunion dinner, eat dumplings, and kids get red envelopes with money.', cn: '家人团聚吃年夜饭，吃饺子，孩子收红包。',
          teacherTip: '🎓 "reunion dinner" = 团圆饭。"red envelopes" = 红包。英美人也能理解这个概念。' },
        { role: 'ai', text: 'Why red envelopes specifically?', cn: '为什么偏偏是红色信封？',
          teacherTip: '🎓 "specifically" = 特意/偏偏。英国人对颜色的文化含义很感兴趣。' },
        { role: 'you', text: 'Red symbolises good fortune in Chinese culture. It\'s believed to ward off evil spirits.', cn: '红色在中国文化中象征好运，据说能驱邪。',
          teacherTip: '🎓 "symbolise" = 象征。"ward off" = 驱除。"evil spirits" = 邪灵。注意英式拼写 symbolise vs 美式 symbolize。' },
      ]
    },
    {
      topic: 'Chinese Tea Culture 中国茶文化',
      icon: '🍵',
      intro: 'British people drink tea every day! Show them the Chinese way.',
      dialogues: [
        { role: 'ai', text: 'We Brits love our tea. How is Chinese tea different?', cn: '我们英国人爱喝茶。中国茶有什么不同？',
          teacherTip: '🎓 "We Brits love our tea" — 英国人确实以爱喝茶著称。注意 "Brits" 是口语化的说法。' },
        { role: 'you', text: 'Chinese tea is drunk plain, no milk or sugar. We focus on the natural flavour and aroma.', cn: '中国茶是纯饮的，不加奶不加糖。我们注重天然的味道和香气。',
          teacherTip: '🎓 "drunk plain" = 纯饮。"flavour" 是英式拼写（美式 flavor）。"aroma" = 香气。' },
        { role: 'ai', text: 'What\'s the ceremony behind it?', cn: '有什么仪式感？',
          teacherTip: '🎓 "ceremony" = 仪式。英国人有下午茶传统，对中国茶道很好奇。' },
        { role: 'you', text: 'Tea ceremony, or Gongfu tea, is about mindfulness and appreciating each sip.', cn: '功夫茶是关于正念和品味每一口。',
          teacherTip: '🎓 "mindfulness" = 正念/专注。"each sip" = 每一口。这个概念在英国也很受欢迎。' },
        { role: 'ai', text: 'How many types of tea are there?', cn: '有多少种茶？',
          teacherTip: '🎓 英国人通常只知道 green tea 和 black tea，但中国茶远不止这些。' },
        { role: 'you', text: 'There are six main types: green, black, oolong, white, yellow, and dark tea like pu-erh.', cn: '有六大类：绿茶、红茶、乌龙茶、白茶、黄茶和黑茶如普洱。',
          teacherTip: '🎓 注意：中文"红茶"在英语中是 "black tea"！中文"黑茶"是 "dark tea"。' },
      ]
    },
    {
      topic: 'Chinese Philosophy 中国哲学',
      icon: '☯️',
      intro: 'British intellectuals love discussing Eastern philosophy.',
      dialogues: [
        { role: 'ai', text: 'I\'ve heard of Confucius. What\'s his main teaching?', cn: '我听说过孔子。他的主要思想是什么？',
          teacherTip: '🎓 "I\'ve heard of" = 我听说过。英国教育中会提到 Confucius。' },
        { role: 'you', text: 'He emphasised morality, respect for elders, and social harmony through proper conduct.', cn: '他强调道德、尊敬长辈和通过正确行为实现社会和谐。',
          teacherTip: '🎓 "emphasised" 是英式过去式（美式 emphasized）。"proper conduct" = 正确的行为。' },
        { role: 'ai', text: 'How does that compare to Western philosophy?', cn: '和西方哲学怎么比？',
          teacherTip: '🎓 英国人很喜欢比较思维。"compare to" = 与...比较。' },
        { role: 'you', text: 'Western philosophy focuses more on logic and individualism, while Chinese thought values collectivism.', cn: '西方哲学更注重逻辑和个人主义，而中国思想重视集体主义。',
          teacherTip: '🎓 "focuses on" = 专注于。"collectivism" = 集体主义。这是很好的跨文化讨论。' },
        { role: 'ai', text: 'What about Taoism? I find that fascinating.', cn: '道家呢？我觉得很迷人。',
          teacherTip: '🎓 "fascinating" = 迷人的/极有趣的。英国人对东方神秘哲学很感兴趣。' },
        { role: 'you', text: 'Taoism teaches us to live in harmony with nature and follow the natural way, the Tao.', cn: '道家教导我们与自然和谐相处，遵循自然之道。',
          teacherTip: '🎓 "in harmony with nature" = 与自然和谐。"the natural way" = 自然之道。' },
      ]
    },
    {
      topic: 'Chinese Food 中国美食',
      icon: '🥢',
      intro: 'British people love takeaway food. Show them real Chinese cuisine!',
      dialogues: [
        { role: 'ai', text: 'Is Chinese food in the UK anything like the real thing?', cn: '英国的中餐和正宗中餐像吗？',
          teacherTip: '🎓 "the real thing" = 正宗的东西。英国中餐确实很本土化了。' },
        { role: 'you', text: 'Not really. China has eight major regional cuisines. Sichuan is fiery, Cantonese is delicate.', cn: '不太像。中国有八大菜系。四川菜火辣，广东菜精致。',
          teacherTip: '🎓 "fiery" = 火辣的。"delicate" = 精致的/细腻的。英国人很欣赏美食描述。' },
        { role: 'ai', text: 'What\'s the deal with dim sum then?', cn: '那点心是什么情况？',
          teacherTip: '🎓 "What\'s the deal with..." = ...是怎么回事？非常口语化的英式表达。' },
        { role: 'you', text: 'Dim sum is small dishes served in bamboo steamers, usually with tea. It\'s a Cantonese tradition.', cn: '点心是用竹蒸笼蒸的小菜，通常配茶。是广东的传统。',
          teacherTip: '🎓 "bamboo steamers" = 竹蒸笼。"Cantonese tradition" = 广东传统。' },
        { role: 'ai', text: 'Do Chinese people actually eat everything with chopsticks?', cn: '中国人真的什么都用筷子吃吗？',
          teacherTip: '🎓 "actually" 在英式英语中用于追问真实情况。' },
        { role: 'you', text: 'Most things, yes! But for rice and soup, a spoon is perfectly acceptable.', cn: '大部分是的！但米饭和汤，用勺子完全没问题。',
          teacherTip: '🎓 "perfectly acceptable" = 完全可以接受的。英国人很在意餐桌礼仪。' },
      ]
    },
  ],
};

// ========== 自由对话话题 ==========
export const freeTopics = {
  fr: [
    {
      topic: '日常闲聊',
      icon: '💭',
      responses: [
        { you: 'Bonjour ! Comment ça va aujourd\'hui ?', cn: '你好！今天怎么样？', tip: '🎓 "Comment ça va" 是最常用的问候。法国人回答通常说 "Ça va bien, merci."' },
        { ai: 'Ça va très bien, merci ! Et toi, qu\'est-ce que tu as fait ce week-end ?', cn: '我很好，谢谢！你呢，周末做了什么？', tip: '🎓 "qu\'est-ce que tu as fait" = 你做了什么。注意过去时 passé composé。' },
        { you: 'Je suis allé au cinéma. J\'ai vu un film français.', cn: '我去看电影了。看了一部法国电影。', tip: '🎓 "Je suis allé" = 我去了（aller 的过去式）。"J\'ai vu" = 我看了（voir 的过去式）。' },
        { ai: 'Ah bon ! C\'était quel film ? Tu as aimé ?', cn: '是吗！什么电影？你喜欢吗？', tip: '🎓 "Ah bon" = 是吗？法国人常用的惊讶回应。"C\'était" = 那是（未完成过去时）。' },
        { you: 'C\'était une comédie. C\'était très drôle !', cn: '是一部喜剧。很好笑！', tip: '🎓 "comédie" = 喜剧。"drôle" = 好笑的。法国喜剧电影很有名！' },
      ]
    },
    {
      topic: '旅行经历',
      icon: '✈️',
      responses: [
        { you: 'J\'aimerais voyager en France. Tu me recommandes quoi ?', cn: '我想去法国旅行。你推荐什么？', tip: '🎓 "J\'aimerais" = 我想要（条件式，更礼貌）。"Tu me recommandes quoi" = 你推荐什么给我。' },
        { ai: 'Bien sûr ! Tu préfères la ville ou la campagne ?', cn: '当然！你更喜欢城市还是乡村？', tip: '🎓 "Tu préfères" = 你更喜欢。法国人很在意这个选择——巴黎 vs 普罗旺斯！' },
        { you: 'J\'aime les deux ! Mais j\'adore la mer.', cn: '两个都喜欢！但我喜欢海。', tip: '🎓 "J\'adore" 比 "J\'aime" 更强烈。"la mer" = 海。法国南部有很美的海岸线！' },
        { ai: 'Alors tu devrais aller à Nice ou Marseille ! Le sud de la France est magnifique.', cn: '那你应该去尼斯或马赛！法国南部很美。', tip: '🎓 "tu devrais" = 你应该（条件式）。"magnifique" = 壮丽的。南法口音叫 "accent du Midi"！' },
        { you: 'Super ! J\'irai cet été. Merci pour le conseil !', cn: '太棒了！我今年夏天去。谢谢建议！', tip: '🎓 "J\'irai" = 我将去（aller 的简单将来时）。"cet été" = 今年夏天。' },
      ]
    },
    {
      topic: '法国文化',
      icon: '🇫🇷',
      responses: [
        { you: 'Pourquoi les Français font-ils la bise ?', cn: '法国人为什么行贴面礼？', tip: '🎓 "la bise" = 贴面礼。"Pourquoi... font-ils" 是倒装问句，比较正式。' },
        { ai: 'C\'est une tradition ! En général, on fait deux, trois ou quatre bises selon les régions.', cn: '这是传统！通常根据不同地区，亲两下、三下或四下。', tip: '🎓 "En général" = 通常。"selon les régions" = 根据地区。南法通常亲3-4下，巴黎亲2下！' },
        { you: 'C\'est compliqué ! Et comment on sait combien de bises faire ?', cn: '太复杂了！怎么知道该亲几下？', tip: '🎓 "C\'est compliqué" = 太复杂了。"combien de" = 多少。连法国人自己都搞不清楚！' },
        { ai: 'Haha, c\'est vrai ! Souvent on hésite. Les Français eux-mêmes ne savent pas toujours !', cn: '哈哈，没错！经常犹豫。法国人自己也不总是知道！', tip: '🎓 "on hésite" = 我们犹豫。"eux-mêmes" = 他们自己。这是法国文化的一个有趣矛盾。' },
        { you: 'En Chine, on se serre la main ou on s\'incline.', cn: '在中国，我们握手或鞠躬。', tip: '🎓 "se serrer la main" = 握手。"s\'incliner" = 鞠躬。比较中法问候方式很有趣！' },
      ]
    },
  ],
  en: [
    {
      topic: 'Daily Chat',
      icon: '💭',
      responses: [
        { you: 'Hello! How are you doing today?', cn: '你好！今天怎么样？', tip: '🎓 "How are you doing" 比 "How are you" 更口语化。英式回答常用 "I\'m quite well, thanks."' },
        { ai: 'I\'m doing brilliantly, cheers! What have you been up to this weekend?', cn: '我非常好，谢谢！你周末在忙什么？', tip: '🎓 "brilliantly" 是英式口语。"What have you been up to" = 你在忙什么，非常地道的英式表达。' },
        { you: 'I went to the pub with some mates. Had a lovely time.', cn: '我和朋友去了酒吧。玩得很开心。', tip: '🎓 "mates" = 朋友（英式口语）。"Had a lovely time" = 玩得很开心。"lovely" 是非常英式的词。' },
        { ai: 'Sounds brilliant! What pub did you go to?', cn: '听起来很棒！去的什么酒吧？', tip: '🎓 "Sounds brilliant" = 听起来太棒了。英式口语中 "brilliant" 使用频率极高。' },
        { you: 'The one around the corner. They do proper fish and chips there.', cn: '街角那家。他们做正宗的炸鱼薯条。', tip: '🎓 "around the corner" = 街角。"proper" = 正宗的，英式口语常用。' },
      ]
    },
    {
      topic: 'Travel Experiences',
      icon: '✈️',
      responses: [
        { you: 'I\'d love to visit the UK. What would you recommend?', cn: '我想去英国旅行。你推荐什么？', tip: '🎓 "I\'d love to" = 我很想去。"What would you recommend" = 你会推荐什么，礼貌问法。' },
        { ai: 'Oh, absolutely! Are you more into cities or the countryside?', cn: '当然！你更喜欢城市还是乡村？', tip: '🎓 "Are you more into" = 你更喜欢...，口语化表达。"countryside" = 乡村。' },
        { you: 'I love both, but I\'m really into history and castles.', cn: '都喜欢，但我对历史和城堡很感兴趣。', tip: '🎓 "I\'m really into" = 我对...很感兴趣。英国到处都是城堡和历史遗迹！' },
        { ai: 'Then you should definitely visit Edinburgh or Bath. Absolutely stunning places.', cn: '那你一定要去爱丁堡或巴斯。绝对令人惊叹的地方。', tip: '🎓 "definitely" = 一定。"stunning" = 令人惊叹的。英式英语中高频赞美词。' },
        { you: 'Brilliant! I\'ll plan a trip there next summer.', cn: '太棒了！我计划明年夏天去。', tip: '🎓 "Brilliant" = 太棒了。"I\'ll plan" = 我将计划。英国夏天天气最好！' },
      ]
    },
    {
      topic: 'British Culture',
      icon: '🇬🇧',
      responses: [
        { you: 'Why do British people queue for everything?', cn: '为什么英国人什么都排队？', tip: '🎓 "queue" = 排队。英国人以爱排队著称！这是英国文化的重要部分。' },
        { ai: 'Ha! Well, queuing is practically a national sport. It\'s just not done to jump the queue.', cn: '哈！排队简直是国民运动。插队是绝对不行的。', tip: '🎓 "practically" = 几乎/实际上。"jump the queue" = 插队。在英国插队是非常严重的！' },
        { you: 'In China, people used to push and shove. But it\'s getting better now.', cn: '在中国，人们以前会推搡。但现在好多了。', tip: '🎓 "push and shove" = 推搡/挤。"used to" = 过去常常。诚实的文化对比！' },
        { ai: 'Fair enough! Every culture has its own norms. I suppose it comes down to population density.', cn: '说得对！每种文化都有自己的规范。我想这和人口密度有关。', tip: '🎓 "Fair enough" = 说得对/有道理。"comes down to" = 归结于。非常英式理性思维。' },
        { you: 'Exactly. And in China, we\'re learning from each other too.', cn: '没错。在中国，我们也在互相学习。', tip: '🎓 "learning from each other" = 互相学习。跨文化交流的核心精神。' },
      ]
    },
  ],
};

// ========== 口音注释 ==========
export const accentNotes = {
  fr: {
    '标准法语': { description: '巴黎为中心的标准发音，清晰优雅', example: 'Bonjour, comment allez-vous?' },
    '南法口音 Accent du Midi': { description: '马赛、图卢兹等地，语调更温暖，拖长尾音，常用 "putain" 和 "mince"', example: 'Ça c\'est la galère, mon !', note: '南法人说 "mon" 或 "ma fille" 代替 "mon ami"' },
    '里昂口音': { description: '里昂地区，元音更圆润', example: 'On mange des quenelles ?' },
    '魁北克法语': { description: '加拿大法语，保留古法语特色', example: 'C\'est tiguidou ! (没问题！)' },
  },
  en: {
    'British RP (Received Pronunciation)': { description: '英国标准发音，也叫"女王英语"或"牛津英语"，优雅清晰', example: 'I say, rather splendid, isn\'t it?' },
    'Cockney (伦敦东区)': { description: '伦敦东区口音，吞掉h音，使用rhyming slang', example: 'Apples and pears = stairs (楼梯)', note: 'Cockney rhyming slang 非常有趣！' },
    'Scottish': { description: '苏格兰口音，r音很重，语速快', example: 'Och, it\'s a braw day!' },
    'American General': { description: '美式通用口音，r音明显，语调平坦', example: 'That\'s awesome, dude!' },
  },
};
