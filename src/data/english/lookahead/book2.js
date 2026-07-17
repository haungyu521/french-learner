/**
 * Look Ahead 2 — 走遍英国 第2册
 * 级别：Elementary (A2) | 15个单元 | 延续第1册人物线索
 * 新增语法：现在进行时、过去进行时、现在完成时、比较级等
 */
export const lookAhead2Data = [
  // ========== Unit 1: Daily routines ==========
  {
    unit: 1, unitTitle: "Daily routines", unitDesc: "Daily activities and present simple review",
    lessons: [
      {
        id: 'la2-u1-l1', title: "Lesson 1 — A day in my life", goal: "Review present simple and learn adverbs of frequency",
        vocab: [
          { word: "routine", meaning: "日常", example: "My daily routine is simple.", audio: "routine" },
          { word: "wake up", meaning: "醒来", example: "I wake up at 7.", audio: "wake up" },
          { word: "breakfast", meaning: "早餐", example: "I have breakfast at 8.", audio: "breakfast" },
          { word: "lunch", meaning: "午餐", example: "I have lunch at 12.", audio: "lunch" },
          { word: "dinner", meaning: "晚餐", example: "I have dinner at 7.", audio: "dinner" },
          { word: "evening", meaning: "晚上", example: "I relax in the evening.", audio: "evening" },
          { word: "never", meaning: "从不", example: "I never skip breakfast.", audio: "never" },
          { word: "always", meaning: "总是", example: "I always brush my teeth.", audio: "always" },
          { word: "often", meaning: "经常", example: "I often read books.", audio: "often" },
          { word: "sometimes", meaning: "有时", example: "I sometimes cook dinner.", audio: "sometimes" },
          { word: "rarely", meaning: "很少", example: "I rarely watch TV.", audio: "rarely" },
          { word: "usually", meaning: "通常", example: "I usually walk to work.", audio: "usually" },
        ],
        grammar: { title: "Adverbs of frequency", content: "Adverbs of frequency show how often something happens:\n\n100% — always (总是): I always wake up early.\n90% — usually (通常): I usually have breakfast.\n70% — often (经常): I often exercise.\n50% — sometimes (有时): I sometimes cook.\n30% — occasionally (偶尔): I occasionally go out.\n10% — rarely (很少): I rarely get angry.\n0% — never (从不): I never smoke.\n\nPosition:\n- Before main verb: I always drink coffee.\n- After 'to be': She is always happy.\n- 'Sometimes' can go at beginning or end: Sometimes I cook. / I cook sometimes.\n\nQuestions with frequency:\n- How often do you exercise? — I exercise three times a week.\n- How often does she read? — She reads every day.\n\nFrequency expressions:\n- every day/week/month/year\n- once/twice/three times a week\n- on Mondays/Tuesdays\n- in the morning/afternoon/evening", tip: "always/usually/often/sometimes/rarely/never — learn these in order!" },
        dialogue: [
          { role: "A", text: "What's your daily routine like?", cn: "你的日常生活是什么样的？" },
          { role: "B", text: "I usually wake up at seven and have breakfast at eight.", cn: "我通常7点醒来，8点吃早餐。" },
          { role: "A", text: "Do you always have breakfast?", cn: "你总是吃早餐吗？" },
          { role: "B", text: "Yes, I always have breakfast. I never skip it.", cn: "是的，我总是吃早餐。我从不跳过。" },
          { role: "A", text: "How often do you exercise?", cn: "你多久锻炼一次？" },
          { role: "B", text: "I exercise three times a week. I often go swimming.", cn: "我一周锻炼三次。我经常去游泳。" },
        ],
        practice: [
          { type: "fill", question: "I ___ drink coffee in the morning. (我总是早上喝咖啡)", answer: "always", hint: "频率副词" },
          { type: "choice", question: "'你多久锻炼一次？' 怎么说?", options: ["How often do you exercise?", "How many do you exercise?", "How much do you exercise?", "How long do you exercise?"], answer: 0 },
          { type: "fill", question: "She ___ goes to the gym. (她从不健身)", answer: "never", hint: "频率副词" },
          { type: "choice", question: "哪个频率最高?", options: ["sometimes", "usually", "rarely", "never"], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unit 2: What are you doing? ==========
  {
    unit: 2, unitTitle: "What are you doing?", unitDesc: "Present continuous tense",
    lessons: [
      {
        id: 'la2-u2-l1', title: "Lesson 1 — Right now", goal: "Learn to talk about actions happening now",
        vocab: [
          { word: "now", meaning: "现在", example: "I'm studying now.", audio: "now" },
          { word: "right now", meaning: "此刻", example: "I'm busy right now.", audio: "right now" },
          { word: "at the moment", meaning: "此刻", example: "She's working at the moment.", audio: "at the moment" },
          { word: "today", meaning: "今天", example: "I'm working today.", audio: "today" },
          { word: "this week", meaning: "这周", example: "We're studying hard this week.", audio: "this week" },
          { word: "reading", meaning: "阅读", example: "I'm reading a book.", audio: "reading" },
          { word: "writing", meaning: "写作", example: "She's writing an email.", audio: "writing" },
          { word: "cooking", meaning: "做饭", example: "He's cooking dinner.", audio: "cooking" },
          { word: "shopping", meaning: "购物", example: "They're shopping now.", audio: "shopping" },
          { word: "waiting", meaning: "等待", example: "I'm waiting for you.", audio: "waiting" },
          { word: "listening", meaning: "听", example: "She's listening to music.", audio: "listening" },
          { word: "speaking", meaning: "说话", example: "He's speaking English.", audio: "speaking" },
        ],
        grammar: { title: "Present continuous tense", content: "Present continuous is used for actions happening now:\n\nStructure: am/is/are + verb-ing\n\n- I am (I'm) studying. (我正在学习)\n- You are (You're) reading. (你正在阅读)\n- He is (He's) working. (他正在工作)\n- She is (She's) cooking. (她正在做饭)\n- We are (We're) talking. (我们正在说话)\n- They are (They're) playing. (他们正在玩)\n\nNegative: am/is/are + not + verb-ing\n- I'm not sleeping. (我没在睡觉)\n- She isn't working. (她没在工作)\n- They aren't playing. (他们没在玩)\n\nQuestions: Am/Is/Are + subject + verb-ing?\n- Are you studying? — Yes, I am. / No, I'm not.\n- Is she working? — Yes, she is. / No, she isn't.\n\nSpelling rules for -ing:\n- Most verbs: +ing (work → working, read → reading)\n- -e verbs: drop e + ing (make → making, write → writing)\n- -ie verbs: -ie → -ying (die → dying, lie → lying)\n- Short verbs: double consonant (run → running, sit → sitting)\n\nPresent simple vs continuous:\n- Simple: habits, routines (I work every day)\n- Continuous: now, at the moment (I'm working now)", tip: "Present continuous = am/is/are + verb-ing. Use for actions happening RIGHT NOW!" },
        dialogue: [
          { role: "A", text: "What are you doing right now?", cn: "你现在在做什么？" },
          { role: "B", text: "I'm studying English. What about you?", cn: "我在学英语。你呢？" },
          { role: "A", text: "I'm watching TV. Are you busy today?", cn: "我在看电视。你今天忙吗？" },
          { role: "B", text: "Yes, I'm preparing for an exam.", cn: "是的，我在准备考试。" },
          { role: "A", text: "Is anyone helping you?", cn: "有人帮你吗？" },
          { role: "B", text: "No, I'm studying alone. But my friend is coming later.", cn: "没有，我独自学习。但我的朋友晚点会来。" },
        ],
        practice: [
          { type: "fill", question: "I ___ studying now. (我正在学习)", answer: "am", hint: "be动词" },
          { type: "choice", question: "'她正在做饭' 怎么说?", options: ["She cooks dinner.", "She is cooking dinner.", "She cook dinner.", "She cooking dinner."], answer: 1 },
          { type: "fill", question: "Are you ___? — Yes, I am.", answer: "working", hint: "现在进行时" },
          { type: "choice", question: "'他们在玩吗？' 怎么说?", options: ["Do they play?", "Are they playing?", "Do they playing?", "They are playing?"], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unit 3: Past experiences ==========
  {
    unit: 3, unitTitle: "Past experiences", unitDesc: "Past simple irregular verbs",
    lessons: [
      {
        id: 'la2-u3-l1', title: "Lesson 1 — What did you do?", goal: "Learn irregular past tense verbs",
        vocab: [
          { word: "went", meaning: "去了", example: "I went to Paris.", audio: "went" },
          { word: "saw", meaning: "看到了", example: "I saw a film.", audio: "saw" },
          { word: "ate", meaning: "吃了", example: "I ate breakfast.", audio: "ate" },
          { word: "drank", meaning: "喝了", example: "I drank some water.", audio: "drank" },
          { word: "bought", meaning: "买了", example: "I bought a book.", audio: "bought" },
          { word: "came", meaning: "来了", example: "She came early.", audio: "came" },
          { word: "gave", meaning: "给了", example: "He gave me a gift.", audio: "gave" },
          { word: "took", meaning: "拿了", example: "I took a photo.", audio: "took" },
          { word: "made", meaning: "做了", example: "She made a cake.", audio: "made" },
          { word: "had", meaning: "有了", example: "I had a good time.", audio: "had" },
          { word: "got", meaning: "得到了", example: "I got a present.", audio: "got" },
          { word: "met", meaning: "遇见了", example: "I met my friend.", audio: "met" },
        ],
        grammar: { title: "Past simple irregular verbs", content: "Irregular verbs don't follow the -ed pattern:\n\nCommon irregular verbs:\n- go → went (去)\n- see → saw (看到)\n- eat → ate (吃)\n- drink → drank (喝)\n- buy → bought (买)\n- come → came (来)\n- give → gave (给)\n- take → took (拿)\n- make → made (做)\n- have → had (有)\n- get → got (得到)\n- meet → met (遇见)\n- read → read (读 — 拼写不变，发音变化)\n- write → wrote (写)\n- speak → spoke (说)\n- find → found (找到)\n- know → knew (知道)\n- think → thought (想)\n- say → said (说)\n- tell → told (告诉)\n\nNegative: didn't + base verb\n- I didn't go. (我没去)\n- She didn't see it. (她没看到)\n\nQuestions: Did + subject + base verb?\n- Did you go? — Yes, I did. / No, I didn't.\n- Did she see it? — Yes, she did. / No, she didn't.\n\nTime expressions:\n- yesterday, last week, ago, in 2020, when I was young", tip: "Irregular verbs must be memorized! Make a list and practice every day." },
        dialogue: [
          { role: "A", text: "What did you do last weekend?", cn: "你上周末做了什么？" },
          { role: "B", text: "I went to London and saw some friends.", cn: "我去了伦敦，见了些朋友。" },
          { role: "A", text: "What did you eat?", cn: "你吃了什么？" },
          { role: "B", text: "We ate fish and chips. It was delicious!", cn: "我们吃了炸鱼薯条。很好吃！" },
          { role: "A", text: "Did you buy anything?", cn: "你买了什么吗？" },
          { role: "B", text: "Yes, I bought a souvenir for my mum.", cn: "是的，我给妈妈买了个纪念品。" },
        ],
        practice: [
          { type: "fill", question: "I ___ to Paris last year. (我去年去了巴黎)", answer: "went", hint: "go的过去式" },
          { type: "choice", question: "'她昨天没来' 怎么说?", options: ["She doesn't come yesterday.", "She didn't came yesterday.", "She didn't come yesterday.", "She not came yesterday."], answer: 2 },
          { type: "fill", question: "Did you ___ the film? — Yes, I did.", answer: "see", hint: "动词原形" },
          { type: "choice", question: "eat 的过去式是?", options: ["eated", "ate", "eaten", "eating"], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unit 4: Comparisons ==========
  {
    unit: 4, unitTitle: "Comparisons", unitDesc: "Comparative and superlative adjectives",
    lessons: [
      {
        id: 'la2-u4-l1', title: "Lesson 1 — Bigger, smaller, better", goal: "Learn to compare things using adjectives",
        vocab: [
          { word: "big", meaning: "大的", example: "This house is big.", audio: "big" },
          { word: "small", meaning: "小的", example: "That room is small.", audio: "small" },
          { word: "good", meaning: "好的", example: "This book is good.", audio: "good" },
          { word: "bad", meaning: "坏的", example: "The weather is bad.", audio: "bad" },
          { word: "beautiful", meaning: "美丽的", example: "The city is beautiful.", audio: "beautiful" },
          { word: "expensive", meaning: "贵的", example: "This car is expensive.", audio: "expensive" },
          { word: "cheap", meaning: "便宜的", example: "That one is cheap.", audio: "cheap" },
          { word: "interesting", meaning: "有趣的", example: "The film is interesting.", audio: "interesting" },
          { word: "difficult", meaning: "困难的", example: "The test is difficult.", audio: "difficult" },
          { word: "easy", meaning: "容易的", example: "The question is easy.", audio: "easy" },
          { word: "better", meaning: "更好的", example: "This one is better.", audio: "better" },
          { word: "worse", meaning: "更差的", example: "The weather is worse.", audio: "worse" },
        ],
        grammar: { title: "Comparative and superlative adjectives", content: "Comparing two things:\n\n1. Short adjectives (1 syllable): +er\n   - big → bigger: This house is bigger than that one.\n   - small → smaller: My room is smaller than yours.\n   - hot → hotter: Today is hotter than yesterday.\n\n2. Adjectives ending in -y: -y → -ier\n   - easy → easier: This test is easier than the last one.\n   - happy → happier: She is happier now.\n\n3. Long adjectives (2+ syllables): more + adjective\n   - beautiful → more beautiful: This city is more beautiful than that one.\n   - expensive → more expensive: This car is more expensive.\n   - interesting → more interesting: This book is more interesting.\n\nSuperlative (the most):\n\n1. Short adjectives: the + -est\n   - the biggest: This is the biggest house.\n   - the smallest: This is the smallest room.\n\n2. Long adjectives: the most + adjective\n   - the most beautiful: This is the most beautiful city.\n   - the most expensive: This is the most expensive car.\n\nIrregular:\n- good → better → the best\n- bad → worse → the worst\n- far → farther/further → the farthest/furthest\n\nStructure:\n- Comparative: A is + comparative + than + B\n- Superlative: A is + the + superlative", tip: "Short: big-bigger-biggest. Long: beautiful-more beautiful-the most beautiful. Irregular: good-better-best!" },
        dialogue: [
          { role: "A", text: "Which city is bigger, London or Paris?", cn: "哪个城市更大，伦敦还是巴黎？" },
          { role: "B", text: "London is bigger than Paris.", cn: "伦敦比巴黎大。" },
          { role: "A", text: "Which city is more beautiful?", cn: "哪个城市更美？" },
          { role: "B", text: "I think Paris is more beautiful than London.", cn: "我认为巴黎比伦敦更美。" },
          { role: "A", text: "What's the most expensive city?", cn: "最贵的城市是哪个？" },
          { role: "B", text: "London is the most expensive city in Europe.", cn: "伦敦是欧洲最贵的城市。" },
        ],
        practice: [
          { type: "fill", question: "This house is ___ than that one. (这栋房子比那栋大)", answer: "bigger", hint: "比较级" },
          { type: "choice", question: "'这本书更有趣' 怎么说?", options: ["This book is interestinger.", "This book is more interesting.", "This book is most interesting.", "This book is the most interesting."], answer: 1 },
          { type: "fill", question: "This is the ___ book I've read. (这是我读过最好的书)", answer: "best", hint: "最高级" },
          { type: "choice", question: "good 的比较级是?", options: ["gooder", "more good", "better", "best"], answer: 2 },
        ]
      },
    ]
  },
  // ========== Unit 5: Future plans ==========
  {
    unit: 5, unitTitle: "Future plans", unitDesc: "Going to for future plans",
    lessons: [
      {
        id: 'la2-u5-l1', title: "Lesson 1 — What are you going to do?", goal: "Learn to talk about future plans",
        vocab: [
          { word: "plan", meaning: "计划", example: "I have a plan.", audio: "plan" },
          { word: "travel", meaning: "旅行", example: "I'm going to travel.", audio: "travel" },
          { word: "visit", meaning: "参观", example: "I'm going to visit Paris.", audio: "visit" },
          { word: "study", meaning: "学习", example: "I'm going to study hard.", audio: "study" },
          { word: "move", meaning: "搬家", example: "We're going to move.", audio: "move" },
          { word: "start", meaning: "开始", example: "I'm going to start a new job.", audio: "start" },
          { word: "learn", meaning: "学习", example: "I'm going to learn French.", audio: "learn" },
          { word: "save", meaning: "存钱", example: "I'm going to save money.", audio: "save" },
          { word: "buy", meaning: "买", example: "I'm going to buy a car.", audio: "buy" },
          { word: "next", meaning: "下一个", example: "Next year.", audio: "next" },
          { word: "soon", meaning: "很快", example: "I'll do it soon.", audio: "soon" },
          { word: "decide", meaning: "决定", example: "I've decided.", audio: "decide" },
        ],
        grammar: { title: "Be going to for future plans", content: "Use 'be going to' for planned future actions:\n\nStructure: am/is/are + going to + base verb\n\n- I am going to travel. (我打算旅行)\n- She is going to study. (她打算学习)\n- They are going to move. (他们打算搬家)\n\nNegative: am/is/are + not + going to + verb\n- I'm not going to travel. (我不打算旅行)\n- She isn't going to study. (她不打算学习)\n\nQuestions: Am/Is/Are + subject + going to + verb?\n- Are you going to travel? — Yes, I am. / No, I'm not.\n- Is she going to study? — Yes, she is. / No, she isn't.\n\nUses:\n1. Planned actions:\n   I'm going to visit Paris next month. (我打算下个月去巴黎)\n\n2. Predictions with evidence:\n   Look at those clouds! It's going to rain. (看那些云！要下雨了)\n\n3. Intentions:\n   I've decided. I'm going to learn French. (我决定了。我打算学法语)\n\nTime expressions:\n- tomorrow, next week/month/year, soon, in the future", tip: "be going to = planned future. Remember: am/is/are + going to + verb!" },
        dialogue: [
          { role: "A", text: "What are you going to do this summer?", cn: "这个夏天你打算做什么？" },
          { role: "B", text: "I'm going to travel to Italy.", cn: "我打算去意大利旅行。" },
          { role: "A", text: "That sounds great! Are you going to visit Rome?", cn: "听起来很棒！你打算去罗马吗？" },
          { role: "B", text: "Yes, and I'm also going to visit Florence.", cn: "是的，我还打算去佛罗伦萨。" },
          { role: "A", text: "How long are you going to stay?", cn: "你打算待多久？" },
          { role: "B", text: "I'm going to stay for two weeks.", cn: "我打算待两周。" },
        ],
        practice: [
          { type: "fill", question: "I'm ___ to travel next month. (我打算下个月旅行)", answer: "going", hint: "be going to" },
          { type: "choice", question: "'她打算学习' 怎么说?", options: ["She going to study.", "She is going to study.", "She is going study.", "She going study."], answer: 1 },
          { type: "fill", question: "Are you ___ to visit Paris?", answer: "going", hint: "be going to" },
          { type: "choice", question: "'我不打算搬家' 怎么说?", options: ["I not going to move.", "I don't going to move.", "I'm not going to move.", "I not going move."], answer: 2 },
        ]
      },
    ]
  },
  // ========== Unit 6: Present perfect ==========
  {
    unit: 6, unitTitle: "Present perfect", unitDesc: "Have/has + past participle",
    lessons: [
      {
        id: 'la2-u6-l1', title: "Lesson 1 — Have you ever...?", goal: "Learn present perfect for experiences",
        vocab: [
          { word: "ever", meaning: "曾经", example: "Have you ever been to Paris?", audio: "ever" },
          { word: "never", meaning: "从不", example: "I've never been to Paris.", audio: "never" },
          { word: "already", meaning: "已经", example: "I've already finished.", audio: "already" },
          { word: "just", meaning: "刚刚", example: "I've just eaten.", audio: "just" },
          { word: "yet", meaning: "还", example: "I haven't finished yet.", audio: "yet" },
          { word: "been", meaning: "去过", example: "I've been to London.", audio: "been" },
          { word: "done", meaning: "做了", example: "I've done my homework.", audio: "done" },
          { word: "seen", meaning: "看过", example: "I've seen that film.", audio: "seen" },
          { word: "eaten", meaning: "吃过", example: "I've eaten lunch.", audio: "eaten" },
          { word: "written", meaning: "写过", example: "I've written a letter.", audio: "written" },
          { word: "lived", meaning: "住过", example: "I've lived here for years.", audio: "lived" },
          { word: "travelled", meaning: "旅行过", example: "I've travelled a lot.", audio: "travelled" },
        ],
        grammar: { title: "Present perfect tense", content: "Present perfect connects past and present:\n\nStructure: have/has + past participle\n\n- I/You/We/They + have + past participle\n  I have been to Paris. (我去过巴黎)\n  They have finished. (他们已经完成了)\n\n- He/She/It + has + past participle\n  She has seen that film. (她看过那部电影)\n  He has done his homework. (他已经做了作业)\n\nPast participles:\n- Regular: +ed (worked, played, studied)\n- Irregular: been, done, seen, eaten, written, gone, had, known, taken, given\n\nNegative: haven't/hasn't + past participle\n- I haven't finished yet. (我还没完成)\n- She hasn't been to London. (她没去过伦敦)\n\nQuestions: Have/Has + subject + past participle?\n- Have you ever been to Paris? — Yes, I have. / No, I haven't.\n- Has she seen that film? — Yes, she has. / No, she hasn't.\n\nUses:\n1. Experiences: I have been to Paris. (我去过巴黎)\n2. Recent actions: I've just finished. (我刚完成)\n3. Unfinished time: I've worked here for 5 years. (我在这里工作了5年)\n\nSignal words: ever, never, already, just, yet, for, since", tip: "Present perfect = have/has + past participle. Use for experiences, NOT specific times!" },
        dialogue: [
          { role: "A", text: "Have you ever been to London?", cn: "你去过伦敦吗？" },
          { role: "B", text: "Yes, I have. I've been there three times.", cn: "是的，我去过。我去过三次。" },
          { role: "A", text: "Have you ever visited the British Museum?", cn: "你参观过大英博物馆吗？" },
          { role: "B", text: "Yes, I have. I've already seen it.", cn: "是的，我已经看过了。" },
          { role: "A", text: "Has your sister ever been to England?", cn: "你姐姐去过英国吗？" },
          { role: "B", text: "No, she hasn't. She's never been to Europe.", cn: "没有，她没去过。她从没去过欧洲。" },
        ],
        practice: [
          { type: "fill", question: "I ___ been to Paris. (我去过巴黎)", answer: "have", hint: "have/has" },
          { type: "choice", question: "'她看过那部电影' 怎么说?", options: ["She has seen that film.", "She have seen that film.", "She saw that film.", "She is seen that film."], answer: 0 },
          { type: "fill", question: "Have you ___ finished? — Yes, I have.", answer: "already", hint: "已经" },
          { type: "choice", question: "'你曾经吃过寿司吗？' 怎么说?", options: ["Do you ever eat sushi?", "Did you ever eat sushi?", "Have you ever eaten sushi?", "Are you ever eaten sushi?"], answer: 2 },
        ]
      },
    ]
  },
  // ========== Unit 7: Prepositions ==========
  {
    unit: 7, unitTitle: "Prepositions", unitDesc: "Prepositions of time and place",
    lessons: [
      {
        id: 'la2-u7-l1', title: "Lesson 1 — In, on, at", goal: "Learn prepositions of time and place",
        vocab: [
          { word: "in", meaning: "在...里", example: "I live in London.", audio: "in" },
          { word: "on", meaning: "在...上", example: "The book is on the table.", audio: "on" },
          { word: "at", meaning: "在", example: "I'm at home.", audio: "at" },
          { word: "under", meaning: "在...下面", example: "The cat is under the table.", audio: "under" },
          { word: "between", meaning: "在...之间", example: "It's between the bank and the shop.", audio: "between" },
          { word: "next to", meaning: "在...旁边", example: "The school is next to the park.", audio: "next to" },
          { word: "opposite", meaning: "在...对面", example: "The bank is opposite the school.", audio: "opposite" },
          { word: "in front of", meaning: "在...前面", example: "The car is in front of the house.", audio: "in front of" },
          { word: "behind", meaning: "在...后面", example: "The garden is behind the house.", audio: "behind" },
          { word: "above", meaning: "在...上面", example: "The picture is above the sofa.", audio: "above" },
          { word: "below", meaning: "在...下面", example: "The temperature is below zero.", audio: "below" },
        ],
        grammar: { title: "Prepositions of time and place", content: "IN:\n- Time: in the morning/afternoon/evening, in May, in 2024, in summer\n- Place: in a room, in a city, in a country, in a building\n  I live in London. / She's in the kitchen.\n\nON:\n- Time: on Monday, on 1st May, on my birthday\n- Place: on a street, on a floor, on a wall, on a table\n  The book is on the table. / The picture is on the wall.\n\nAT:\n- Time: at 9 o'clock, at night, at the weekend, at Christmas\n- Place: at home, at school, at work, at the station\n  I'm at home. / She's at work.\n\nOther prepositions:\n- under: 在...下面 (The cat is under the table)\n- between: 在...之间 (between A and B)\n- next to: 在...旁边 (next to the bank)\n- opposite: 在...对面 (opposite the school)\n- in front of: 在...前面\n- behind: 在...后面\n- above: 在...上面\n- below: 在...下面\n\nCommon mistakes:\n- at the weekend (NOT in the weekend)\n- at night (NOT in the night)\n- on Monday (NOT in Monday)", tip: "in + month/year/season, on + day/date, at + time/place. Learn these patterns!" },
        dialogue: [
          { role: "A", text: "Where do you live?", cn: "你住在哪里？" },
          { role: "B", text: "I live in London, on Oxford Street.", cn: "我住在伦敦，牛津街。" },
          { role: "A", text: "What time do you go to work?", cn: "你几点去上班？" },
          { role: "B", text: "I go to work at 9 o'clock in the morning.", cn: "我早上9点去上班。" },
          { role: "A", text: "Where is your office?", cn: "你的办公室在哪里？" },
          { role: "B", text: "It's opposite the bank, next to the park.", cn: "在银行对面，公园旁边。" },
        ],
        practice: [
          { type: "fill", question: "I live ___ London.", answer: "in", hint: "城市前用in" },
          { type: "choice", question: "'我在早上9点去上班' 怎么说?", options: ["I go to work in 9 o'clock.", "I go to work on 9 o'clock.", "I go to work at 9 o'clock.", "I go to work by 9 o'clock."], answer: 2 },
          { type: "fill", question: "The book is ___ the table.", answer: "on", hint: "在...上面" },
          { type: "choice", question: "'银行在学校对面' 怎么说?", options: ["The bank is opposite the school.", "The bank is on the school.", "The bank is at the school.", "The bank is in the school."], answer: 0 },
        ]
      },
    ]
  },
  // ========== Units 8-15: More topics ==========
  {
    unit: 8, unitTitle: "Modals", unitDesc: "Can, must, should, have to",
    lessons: [
      {
        id: 'la2-u8-l1', title: "Lesson 1 — Rules and obligations", goal: "Learn modal verbs for rules and advice",
        vocab: [
          { word: "can", meaning: "能", example: "I can swim.", audio: "can" },
          { word: "can't", meaning: "不能", example: "I can't drive.", audio: "can't" },
          { word: "must", meaning: "必须", example: "You must wear a seatbelt.", audio: "must" },
          { word: "mustn't", meaning: "禁止", example: "You mustn't smoke here.", audio: "mustn't" },
          { word: "should", meaning: "应该", example: "You should rest.", audio: "should" },
          { word: "shouldn't", meaning: "不应该", example: "You shouldn't eat too much.", audio: "shouldn't" },
          { word: "have to", meaning: "不得不", example: "I have to work late.", audio: "have to" },
          { word: "don't have to", meaning: "不必", example: "You don't have to pay.", audio: "don't have to" },
          { word: "need to", meaning: "需要", example: "I need to study.", audio: "need to" },
          { word: "allow", meaning: "允许", example: "You are allowed to park here.", audio: "allow" },
          { word: "forbidden", meaning: "禁止", example: "Smoking is forbidden.", audio: "forbidden" },
          { word: "necessary", meaning: "必要的", example: "It's necessary to wear a helmet.", audio: "necessary" },
        ],
        grammar: { title: "Modal verbs: can, must, should, have to", content: "Modal verbs express ability, obligation, permission, and advice:\n\n1. CAN/CAN'T (ability/permission):\n   - I can swim. (我会游泳)\n   - You can park here. (你可以在这里停车)\n   - I can't drive. (我不会开车)\n   - You can't smoke here. (你不能在这里吸烟)\n\n2. MUST/MUSTN'T (obligation/prohibition):\n   - You must wear a seatbelt. (你必须系安全带)\n   - You mustn't smoke here. (你禁止在这里吸烟)\n   - Students must be on time. (学生必须准时)\n\n3. SHOULD/SOULDN'T (advice):\n   - You should rest. (你应该休息)\n   - You shouldn't eat too much. (你不应该吃太多)\n   - You should see a doctor. (你应该看医生)\n\n4. HAVE TO/DON'T HAVE TO (necessity/no necessity):\n   - I have to work late. (我不得不工作到很晚)\n   - You don't have to pay. (你不必付费)\n   - She has to study hard. (她必须努力学习)\n\n5. NEED TO (necessity):\n   - I need to study. (我需要学习)\n   - You need to wear a uniform. (你需要穿制服)\n\nDifference:\n- must = personal obligation (I must go)\n- have to = external obligation (I have to go)\n- mustn't = prohibition (You mustn't smoke)\n- don't have to = no necessity (You don't have to pay)", tip: "must = 必须, mustn't = 禁止, don't have to = 不必. Don't confuse mustn't and don't have to!" },
        dialogue: [
          { role: "A", text: "What are the rules at your school?", cn: "你们学校有什么规则？" },
          { role: "B", text: "Students must wear a uniform and mustn't use phones in class.", cn: "学生必须穿制服，禁止在课堂上使用手机。" },
          { role: "A", text: "Do you have to study on weekends?", cn: "你周末必须学习吗？" },
          { role: "B", text: "Yes, I have to study for my exams.", cn: "是的，我必须为考试学习。" },
          { role: "A", text: "What should I do if I'm sick?", cn: "如果我生病了应该做什么？" },
          { role: "B", text: "You should see a doctor and you must rest.", cn: "你应该看医生，必须休息。" },
        ],
        practice: [
          { type: "fill", question: "You ___ wear a seatbelt. (你必须系安全带)", answer: "must", hint: "义务" },
          { type: "choice", question: "'你不必付费' 怎么说?", options: ["You mustn't pay.", "You don't have to pay.", "You shouldn't pay.", "You can't pay."], answer: 1 },
          { type: "fill", question: "You ___ smoke here. It's forbidden.", answer: "mustn't", hint: "禁止" },
          { type: "choice", question: "'你应该看医生' 怎么说?", options: ["You must see a doctor.", "You should see a doctor.", "You can see a doctor.", "You have to see a doctor."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unit 9: Conditions ==========
  {
    unit: 9, unitTitle: "Conditions", unitDesc: "If clauses (zero and first conditional)",
    lessons: [
      {
        id: 'la2-u9-l1', title: "Lesson 1 — If...", goal: "Learn conditional sentences",
        vocab: [
          { word: "if", meaning: "如果", example: "If it rains, I'll stay home.", audio: "if" },
          { word: "will", meaning: "将会", example: "I will help you.", audio: "will" },
          { word: "rain", meaning: "下雨", example: "If it rains...", audio: "rain" },
          { word: "sunny", meaning: "晴朗的", example: "If it's sunny...", audio: "sunny" },
          { word: "cold", meaning: "冷的", example: "If it's cold...", audio: "cold" },
          { word: "hot", meaning: "热的", example: "If it's hot...", audio: "hot" },
          { word: "study", meaning: "学习", example: "If I study hard...", audio: "study" },
          { word: "pass", meaning: "通过", example: "...I'll pass the exam.", audio: "pass" },
          { word: "hurry", meaning: "赶快", example: "If you hurry...", audio: "hurry" },
          { word: "miss", meaning: "错过", example: "...you'll miss the bus.", audio: "miss" },
          { word: "possible", meaning: "可能的", example: "If possible...", audio: "possible" },
          { word: "result", meaning: "结果", example: "The result is good.", audio: "result" },
        ],
        grammar: { title: "Zero and first conditional", content: "Conditional sentences have two parts: if-clause and main clause.\n\n1. Zero conditional (facts, always true):\n   If + present simple, present simple\n   \n   - If you heat water, it boils. (如果你加热水，它会沸腾)\n   - If it rains, the ground gets wet. (如果下雨，地会湿)\n   - If I'm tired, I go to bed. (如果我累了，我就去睡觉)\n   \n   Use for: facts, general truths, habits\n\n2. First conditional (real future possibilities):\n   If + present simple, will + base verb\n   \n   - If it rains, I will stay home. (如果下雨，我会待在家里)\n   - If you study hard, you will pass. (如果你努力学习，你会通过)\n   - If you hurry, you'll catch the bus. (如果你赶快，你会赶上公交)\n   \n   Use for: real possibilities in the future\n\nNegative:\n- If it doesn't rain, we'll go out. (如果不下雨，我们就出去)\n- If you don't hurry, you'll miss the bus. (如果你不赶快，你会错过公交)\n\nQuestions:\n- What will you do if it rains? (如果下雨你会做什么？)\n- What happens if you heat ice? (如果你加热冰会怎样？)\n\nNote: Never use 'will' in the if-clause!\nWrong: If it will rain...\nRight: If it rains...", tip: "Zero: facts (if + present, present). First: future (if + present, will + verb). Never use 'will' after 'if'!" },
        dialogue: [
          { role: "A", text: "What will you do if it rains tomorrow?", cn: "如果明天下雨你会做什么？" },
          { role: "B", text: "If it rains, I'll stay home and read a book.", cn: "如果下雨，我会待在家里看书。" },
          { role: "A", text: "And if it's sunny?", cn: "如果晴天呢？" },
          { role: "B", text: "If it's sunny, I'll go to the park.", cn: "如果晴天，我会去公园。" },
          { role: "A", text: "What happens if you don't study?", cn: "如果你不学习会怎样？" },
          { role: "B", text: "If I don't study, I won't pass the exam.", cn: "如果我不学习，我就不会通过考试。" },
        ],
        practice: [
          { type: "fill", question: "If it rains, I ___ stay home. (如果下雨，我会待在家里)", answer: "will", hint: "第一条件句" },
          { type: "choice", question: "'如果你努力学习，你会通过' 怎么说?", options: ["If you study hard, you will pass.", "If you will study hard, you pass.", "If you study hard, you pass.", "You will pass if you will study."], answer: 0 },
          { type: "fill", question: "If you ___ water, it boils.", answer: "heat", hint: "零条件句" },
          { type: "choice", question: "哪个是正确的?", options: ["If it will rain, I'll stay home.", "If it rains, I'll stay home.", "If it rains, I stay home.", "If it will rain, I stay home."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unit 10: Passive voice ==========
  {
    unit: 10, unitTitle: "Passive voice", unitDesc: "Passive voice in present and past",
    lessons: [
      {
        id: 'la2-u10-l1', title: "Lesson 1 — It was made in China", goal: "Learn passive voice",
        vocab: [
          { word: "made", meaning: "制造", example: "It was made in China.", audio: "made" },
          { word: "built", meaning: "建造", example: "The bridge was built in 1990.", audio: "built" },
          { word: "written", meaning: "写", example: "The book was written by her.", audio: "written" },
          { word: "spoken", meaning: "说", example: "English is spoken worldwide.", audio: "spoken" },
          { word: "used", meaning: "使用", example: "This tool is used for cutting.", audio: "used" },
          { word: "grown", meaning: "种植", example: "Rice is grown in Asia.", audio: "grown" },
          { word: "produced", meaning: "生产", example: "Cars are produced in Germany.", audio: "produced" },
          { word: "sold", meaning: "卖", example: "These shoes are sold worldwide.", audio: "sold" },
          { word: "stolen", meaning: "偷", example: "My bike was stolen.", audio: "stolen" },
          { word: "discovered", meaning: "发现", example: "America was discovered in 1492.", audio: "discovered" },
          { word: "invented", meaning: "发明", example: "The phone was invented by Bell.", audio: "invented" },
          { word: "by", meaning: "被", example: "It was written by Shakespeare.", audio: "by" },
        ],
        grammar: { title: "Passive voice", content: "Passive voice focuses on the action, not the doer:\n\nStructure: be + past participle\n\nPresent passive: am/is/are + past participle\n- English is spoken worldwide. (英语在全世界被说)\n- Cars are made in Germany. (汽车在德国被制造)\n- Rice is grown in Asia. (水稻在亚洲被种植)\n\nPast passive: was/were + past participle\n- The bridge was built in 1990. (桥在1990年被建造)\n- The book was written by her. (书被她写)\n- America was discovered in 1492. (美洲在1492年被发现)\n\nNegative:\n- The window wasn't broken. (窗户没被打破)\n- The cars weren't sold. (汽车没被卖出)\n\nQuestions:\n- When was it built? — It was built in 1990.\n- Who was it written by? — It was written by Shakespeare.\n\nActive vs Passive:\n- Active: Shakespeare wrote the play. (莎士比亚写了这部剧)\n- Passive: The play was written by Shakespeare. (这部剧是莎士比亚写的)\n\nUse passive when:\n1. The doer is unknown: My bike was stolen.\n2. The doer is unimportant: The road is being repaired.\n3. We want to emphasize the action: The book was written in 1900.", tip: "Passive = be + past participle. Present: is/are + pp. Past: was/were + pp." },
        dialogue: [
          { role: "A", text: "Where was this phone made?", cn: "这部手机是哪里制造的？" },
          { role: "B", text: "It was made in China.", cn: "它是中国制造的。" },
          { role: "A", text: "When was it invented?", cn: "它是什么时候发明的？" },
          { role: "B", text: "The telephone was invented by Bell in 1876.", cn: "电话是Bell在1876年发明的。" },
          { role: "A", text: "What language is spoken in Brazil?", cn: "巴西说什么语言？" },
          { role: "B", text: "Portuguese is spoken in Brazil.", cn: "巴西说葡萄牙语。" },
        ],
        practice: [
          { type: "fill", question: "English ___ spoken worldwide.", answer: "is", hint: "现在时被动" },
          { type: "choice", question: "'这本书是她写的' 怎么说?", options: ["She wrote the book.", "The book was written by her.", "The book is written by her.", "The book was wrote by her."], answer: 1 },
          { type: "fill", question: "The bridge was ___ in 1990.", answer: "built", hint: "过去时被动" },
          { type: "choice", question: "'电话是Bell发明的' 怎么说?", options: ["Bell invented the phone.", "The phone was invented by Bell.", "The phone is invented by Bell.", "The phone invented by Bell."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Units 11-15: More topics ==========
  {
    unit: 11, unitTitle: "Relative clauses", unitDesc: "Who, which, that, where",
    lessons: [
      {
        id: 'la2-u11-l1', title: "Lesson 1 — The man who...", goal: "Learn relative clauses",
        vocab: [
          { word: "who", meaning: "谁（关系代词）", example: "The man who called is my dad.", audio: "who" },
          { word: "which", meaning: "哪个（关系代词）", example: "The book which I read was good.", audio: "which" },
          { word: "that", meaning: "那个（关系代词）", example: "The car that I bought is new.", audio: "that" },
          { word: "where", meaning: "哪里（关系副词）", example: "The city where I live is big.", audio: "where" },
          { word: "whose", meaning: "谁的", example: "The girl whose dog is lost.", audio: "whose" },
          { word: "person", meaning: "人", example: "The person who helped me.", audio: "person" },
          { word: "thing", meaning: "东西", example: "The thing that I need.", audio: "thing" },
          { word: "place", meaning: "地方", example: "The place where we met.", audio: "place" },
          { word: "remember", meaning: "记得", example: "I remember the day.", audio: "remember" },
          { word: "forget", meaning: "忘记", example: "I'll never forget the time.", audio: "forget" },
        ],
        grammar: { title: "Relative clauses", content: "Relative clauses give more information about a noun:\n\n1. WHO — for people:\n   - The man who called is my dad. (打电话的那个男人是我爸爸)\n   - The girl who sits next to me is kind. (坐在我旁边的女孩很善良)\n\n2. WHICH/THAT — for things:\n   - The book which I read was good. (我读的那本书很好)\n   - The car that I bought is new. (我买的那辆车是新的)\n   Note: 'that' can replace 'which' in defining clauses\n\n3. WHERE — for places:\n   - The city where I live is big. (我住的城市很大)\n   - The school where I study is old. (我学习的学校很旧)\n\n4. WHOSE — for possession:\n   - The girl whose dog is lost is sad. (狗丢了的那个女孩很伤心)\n   - The man whose car was stolen called the police. (车被偷的那个男人报了警)\n\nDefining vs non-defining:\n- Defining: The book that I read was good. (essential info, no commas)\n- Non-defining: My brother, who lives in London, is a doctor. (extra info, with commas)\n\nNote: In defining clauses, 'that' can replace 'who' or 'which':\n- The person who/that called...\n- The thing which/that I need...", tip: "who = people, which/that = things, where = places, whose = possession" },
        dialogue: [
          { role: "A", text: "Do you know the man who called?", cn: "你认识打电话的那个男人吗？" },
          { role: "B", text: "Yes, he's my uncle who lives in London.", cn: "是的，他是我住在伦敦的叔叔。" },
          { role: "A", text: "What about the book that you recommended?", cn: "你推荐的那本书呢？" },
          { role: "B", text: "The book that I read last week was excellent.", cn: "我上周读的那本书很棒。" },
          { role: "A", text: "Is this the city where you grew up?", cn: "这是你长大的城市吗？" },
          { role: "B", text: "Yes, this is the city where I was born and raised.", cn: "是的，这是我出生和长大的城市。" },
        ],
        practice: [
          { type: "fill", question: "The man ___ called is my dad.", answer: "who", hint: "关系代词（人）" },
          { type: "choice", question: "'我读的那本书很好' 怎么说?", options: ["The book who I read was good.", "The book which I read was good.", "The book where I read was good.", "The book whose I read was good."], answer: 1 },
          { type: "fill", question: "The city ___ I live is big.", answer: "where", hint: "关系副词（地方）" },
          { type: "choice", question: "'狗丢了的那个女孩很伤心' 怎么说?", options: ["The girl who dog is lost is sad.", "The girl which dog is lost is sad.", "The girl whose dog is lost is sad.", "The girl where dog is lost is sad."], answer: 2 },
        ]
      },
    ]
  },
  // ========== Unit 12: Reported speech ==========
  {
    unit: 12, unitTitle: "Reported speech", unitDesc: "Reporting what someone said",
    lessons: [
      {
        id: 'la2-u12-l1', title: "Lesson 1 — She said that...", goal: "Learn reported speech",
        vocab: [
          { word: "said", meaning: "说了", example: "She said she was tired.", audio: "said" },
          { word: "told", meaning: "告诉", example: "He told me he was busy.", audio: "told" },
          { word: "asked", meaning: "问了", example: "She asked if I was OK.", audio: "asked" },
          { word: "replied", meaning: "回答", example: "He replied that he was fine.", audio: "replied" },
          { word: "explained", meaning: "解释", example: "She explained that she was late.", audio: "explained" },
          { word: "promised", meaning: "承诺", example: "He promised he would help.", audio: "promised" },
          { word: "agreed", meaning: "同意", example: "She agreed to come.", audio: "agreed" },
          { word: "refused", meaning: "拒绝", example: "He refused to help.", audio: "refused" },
          { word: "suggested", meaning: "建议", example: "She suggested going out.", audio: "suggested" },
          { word: "that", meaning: "那个", example: "He said that he was tired.", audio: "that" },
        ],
        grammar: { title: "Reported speech", content: "Reported speech tells what someone said without quoting them exactly:\n\nDirect: She said, \"I am tired.\"\nReported: She said that she was tired.\n\nChanges:\n1. Tense changes (backshift):\n   - am/is → was: \"I am happy\" → She said she was happy.\n   - are → were: \"We are busy\" → They said they were busy.\n   - will → would: \"I will help\" → He said he would help.\n   - can → could: \"I can swim\" → She said she could swim.\n   - have → had: \"I have finished\" → She said she had finished.\n\n2. Pronoun changes:\n   - I → he/she: \"I am tired\" → She said she was tired.\n   - we → they: \"We are busy\" → They said they were busy.\n\n3. Time/place changes:\n   - today → that day\n   - yesterday → the day before\n   - tomorrow → the next day\n   - here → there\n   - now → then\n\nReporting verbs:\n- said (that) + clause: She said that she was tired.\n- told + person + that: He told me that he was busy.\n- asked + if/wh: She asked if I was OK.\n\nQuestions:\n- \"Are you OK?\" → She asked if I was OK.\n- \"Where do you live?\" → He asked where I lived.", tip: "Direct → Reported: tense goes back one step (present → past, will → would)" },
        dialogue: [
          { role: "A", text: "What did Sarah say?", cn: "Sarah说了什么？" },
          { role: "B", text: "She said that she was tired.", cn: "她说她累了。" },
          { role: "A", text: "Did she say anything else?", cn: "她还说了什么吗？" },
          { role: "B", text: "She told me that she had a busy day.", cn: "她告诉我她今天很忙。" },
          { role: "A", text: "What about Tom?", cn: "Tom呢？" },
          { role: "B", text: "He said that he would help us tomorrow.", cn: "他说他明天会帮我们。" },
        ],
        practice: [
          { type: "fill", question: "She said ___ she was tired.", answer: "that", hint: "间接引语" },
          { type: "choice", question: "'他说他很忙' 怎么说?", options: ["He said he is busy.", "He said he was busy.", "He said he busy.", "He said that he busy."], answer: 1 },
          { type: "fill", question: "He told ___ that he was fine.", answer: "me", hint: "告诉某人" },
          { type: "choice", question: "'她问我是否还好' 怎么说?", options: ["She said if I was OK.", "She asked if I was OK.", "She told if I was OK.", "She asked that I was OK."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Units 13-15: More topics ==========
  {
    unit: 13, unitTitle: "Gerunds and infinitives", unitDesc: "Verb + -ing / verb + to",
    lessons: [
      {
        id: 'la2-u13-l1', title: "Lesson 1 — I like swimming / I want to swim", goal: "Learn verbs followed by -ing or to",
        vocab: [
          { word: "like", meaning: "喜欢", example: "I like swimming.", audio: "like" },
          { word: "love", meaning: "热爱", example: "I love reading.", audio: "love" },
          { word: "enjoy", meaning: "享受", example: "I enjoy cooking.", audio: "enjoy" },
          { word: "hate", meaning: "讨厌", example: "I hate waiting.", audio: "hate" },
          { word: "want", meaning: "想要", example: "I want to swim.", audio: "want" },
          { word: "need", meaning: "需要", example: "I need to study.", audio: "need" },
          { word: "hope", meaning: "希望", example: "I hope to pass.", audio: "hope" },
          { word: "decide", meaning: "决定", example: "I decided to go.", audio: "decide" },
          { word: "plan", meaning: "计划", example: "I plan to travel.", audio: "plan" },
          { word: "agree", meaning: "同意", example: "She agreed to help.", audio: "agree" },
          { word: "refuse", meaning: "拒绝", example: "He refused to come.", audio: "refuse" },
          { word: "promise", meaning: "承诺", example: "I promised to help.", audio: "promise" },
        ],
        grammar: { title: "Verbs + -ing or to + verb", content: "Some verbs are followed by -ing, others by to:\n\n1. Verbs + -ing:\n   - like + -ing: I like swimming.\n   - love + -ing: I love reading.\n   - enjoy + -ing: I enjoy cooking.\n   - hate + -ing: I hate waiting.\n   - finish + -ing: I finished working.\n   - mind + -ing: Do you mind opening the window?\n   - suggest + -ing: She suggested going out.\n   - avoid + -ing: He avoided answering.\n\n2. Verbs + to + verb:\n   - want + to: I want to swim.\n   - need + to: I need to study.\n   - hope + to: I hope to pass.\n   - decide + to: I decided to go.\n   - plan + to: I plan to travel.\n   - agree + to: She agreed to help.\n   - refuse + to: He refused to come.\n   - promise + to: I promised to help.\n   - learn + to: I'm learning to drive.\n   - would like + to: I'd like to go.\n\n3. Verbs + both (with similar meaning):\n   - like + -ing/to: I like swimming/to swim.\n   - love + -ing/to: I love reading/to read.\n   - hate + -ing/to: I hate waiting/to wait.\n   - start + -ing/to: It started raining/to rain.\n   - begin + -ing/to: It began to rain/raining.\n\n4. Verbs + both (with different meaning):\n   - stop + -ing: I stopped smoking. (quit)\n   - stop + to: I stopped to smoke. (in order to)\n   - remember + -ing: I remember meeting him. (past)\n   - remember + to: Remember to call me. (future)", tip: "like/love/enjoy/hate + -ing. want/need/hope/decide/plan + to. Learn the patterns!" },
        dialogue: [
          { role: "A", text: "What do you enjoy doing?", cn: "你喜欢做什么？" },
          { role: "B", text: "I enjoy reading and cooking.", cn: "我喜欢阅读和做饭。" },
          { role: "A", text: "What do you want to do this weekend?", cn: "这个周末你想做什么？" },
          { role: "B", text: "I want to visit my grandparents.", cn: "我想去看望祖父母。" },
          { role: "A", text: "Have you decided where to go?", cn: "你决定去哪里了吗？" },
          { role: "B", text: "Yes, I've decided to go to the countryside.", cn: "是的，我决定去乡下。" },
        ],
        practice: [
          { type: "fill", question: "I enjoy ___. (我喜欢阅读)", answer: "reading", hint: "enjoy + -ing" },
          { type: "choice", question: "'我想游泳' 怎么说?", options: ["I want swimming.", "I want to swim.", "I want swim.", "I wanting swim."], answer: 1 },
          { type: "fill", question: "She decided ___ go.", answer: "to", hint: "decide + to" },
          { type: "choice", question: "'他拒绝来' 怎么说?", options: ["He refused coming.", "He refused to come.", "He refused come.", "He refusing come."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unit 14: Phrasal verbs ==========
  {
    unit: 14, unitTitle: "Phrasal verbs", unitDesc: "Common phrasal verbs",
    lessons: [
      {
        id: 'la2-u14-l1', title: "Lesson 1 — Get up, turn on, look for", goal: "Learn common phrasal verbs",
        vocab: [
          { word: "get up", meaning: "起床", example: "I get up at seven.", audio: "get up" },
          { word: "turn on", meaning: "打开", example: "Turn on the light.", audio: "turn on" },
          { word: "turn off", meaning: "关闭", example: "Turn off the TV.", audio: "turn off" },
          { word: "look for", meaning: "寻找", example: "I'm looking for my keys.", audio: "look for" },
          { word: "look after", meaning: "照顾", example: "She looks after the baby.", audio: "look after" },
          { word: "give up", meaning: "放弃", example: "Don't give up!", audio: "give up" },
          { word: "put on", meaning: "穿上", example: "Put on your coat.", audio: "put on" },
          { word: "take off", meaning: "脱下", example: "Take off your shoes.", audio: "take off" },
          { word: "pick up", meaning: "捡起", example: "Pick up the phone.", audio: "pick up" },
          { word: "put away", meaning: "收起来", example: "Put away your books.", audio: "put away" },
          { word: "come back", meaning: "回来", example: "I'll come back tomorrow.", audio: "come back" },
          { word: "go out", meaning: "出去", example: "Let's go out tonight.", audio: "go out" },
        ],
        grammar: { title: "Phrasal verbs", content: "Phrasal verbs = verb + particle (preposition/adverb):\n\nCommon phrasal verbs:\n\n1. get up — 起床\n   I get up at seven every day.\n\n2. turn on/off — 打开/关闭\n   Turn on the light. / Turn off the TV.\n\n3. look for — 寻找\n   I'm looking for my keys.\n\n4. look after — 照顾\n   She looks after the baby.\n\n5. give up — 放弃\n   Don't give up! Keep trying.\n\n6. put on — 穿上\n   Put on your coat. It's cold.\n\n7. take off — 脱下\n   Take off your shoes.\n\n8. pick up — 捡起；接人\n   Pick up the phone. / I'll pick you up at 6.\n\n9. put away — 收起来\n   Put away your books.\n\n10. come back — 回来\n    I'll come back tomorrow.\n\n11. go out — 出去\n    Let's go out tonight.\n\n12. find out — 发现\n    I found out the truth.\n\nNote: Some phrasal verbs are separable:\n- Turn on the light. / Turn the light on.\n- Put on your coat. / Put your coat on.\n\nOthers are inseparable:\n- Look after the baby. (NOT Look the baby after)\n- Look for my keys. (NOT Look my keys for)", tip: "Phrasal verbs are very common in English! Learn them in context, not just the meaning." },
        dialogue: [
          { role: "A", text: "What time do you get up?", cn: "你几点起床？" },
          { role: "B", text: "I get up at seven. Then I turn on the radio.", cn: "我7点起床。然后打开收音机。" },
          { role: "A", text: "What are you looking for?", cn: "你在找什么？" },
          { role: "B", text: "I'm looking for my keys. I can't find them.", cn: "我在找钥匙。我找不到。" },
          { role: "A", text: "Put on your coat and let's go out.", cn: "穿上外套，我们出去吧。" },
          { role: "B", text: "OK. I'll come back later to look for them.", cn: "好的。我晚点回来找。" },
        ],
        practice: [
          { type: "fill", question: "I ___ up at seven. (我7点起床)", answer: "get", hint: "起床" },
          { type: "choice", question: "'打开灯' 怎么说?", options: ["Open the light.", "Turn on the light.", "Turn up the light.", "Turn the light."], answer: 1 },
          { type: "fill", question: "I'm looking ___ my keys.", answer: "for", hint: "寻找" },
          { type: "choice", question: "'照顾婴儿' 怎么说?", options: ["Look for the baby.", "Look at the baby.", "Look after the baby.", "Look the baby."], answer: 2 },
        ]
      },
    ]
  },
  // ========== Unit 15: Review ==========
  {
    unit: 15, unitTitle: "Review", unitDesc: "Review and consolidation of Book 2",
    lessons: [
      {
        id: 'la2-u15-l1', title: "Lesson 1 — Looking back", goal: "Review all grammar and vocabulary from Book 2",
        vocab: [
          { word: "progress", meaning: "进步", example: "You've made great progress.", audio: "progress" },
          { word: "improve", meaning: "提高", example: "I want to improve my English.", audio: "improve" },
          { word: "achieve", meaning: "达到", example: "I've achieved my goal.", audio: "achieve" },
          { word: "continue", meaning: "继续", example: "I'll continue studying.", audio: "continue" },
          { word: "practice", meaning: "练习", example: "Practice makes perfect.", audio: "practice" },
          { word: "review", meaning: "复习", example: "Let's review Book 2.", audio: "review" },
          { word: "remember", meaning: "记住", example: "I remember everything.", audio: "remember" },
          { word: "understand", meaning: "理解", example: "I understand now.", audio: "understand" },
          { word: "confident", meaning: "自信的", example: "I feel confident.", audio: "confident" },
          { word: "proud", meaning: "骄傲的", example: "I'm proud of you.", audio: "proud" },
          { word: "ready", meaning: "准备好的", example: "I'm ready for Book 3.", audio: "ready" },
          { word: "challenge", meaning: "挑战", example: "Book 3 will be a challenge.", audio: "challenge" },
        ],
        grammar: { title: "Book 2 Grammar Summary", content: "Book 2 covers:\n\n1. Adverbs of frequency:\n   - always, usually, often, sometimes, rarely, never\n\n2. Present continuous:\n   - I am studying now.\n\n3. Past simple irregular verbs:\n   - went, saw, ate, drank, bought, came...\n\n4. Comparative and superlative:\n   - bigger, more beautiful, the best\n\n5. Be going to (future plans):\n   - I'm going to travel.\n\n6. Present perfect:\n   - I have been to Paris.\n   - Have you ever...?\n\n7. Prepositions (in/on/at):\n   - in the morning, on Monday, at 9 o'clock\n\n8. Modal verbs:\n   - can, must, should, have to\n\n9. Conditionals (zero and first):\n   - If it rains, I'll stay home.\n\n10. Passive voice:\n    - It was made in China.\n\n11. Relative clauses:\n    - The man who called...\n\n12. Reported speech:\n    - She said that she was tired.\n\n13. Gerunds and infinitives:\n    - I like swimming. / I want to swim.\n\n14. Phrasal verbs:\n    - get up, turn on, look for...", tip: "Book 2 is a big step forward! Make sure you master all these topics before moving to Book 3." },
        dialogue: [
          { role: "Teacher", text: "Today we're reviewing Book 2. What have we learned?", cn: "今天我们复习第2册。我们学了什么？" },
          { role: "Student", text: "We've learned present perfect, comparatives, and passive voice.", cn: "我们学了现在完成时、比较级和被动语态。" },
          { role: "Teacher", text: "Excellent! Can you give me an example of present perfect?", cn: "太棒了！你能给我一个现在完成时的例子吗？" },
          { role: "Student", text: "I have been to London three times. It's the most beautiful city I've ever visited.", cn: "我去过伦敦三次。那是我去过的最美丽的城市。" },
          { role: "Teacher", text: "Perfect! And what about the passive?", cn: "完美！被动语态呢？" },
          { role: "Student", text: "The book was written by Shakespeare. It was published in 1600.", cn: "这本书是莎士比亚写的。它在1600年出版。" },
        ],
        practice: [
          { type: "fill", question: "I ___ been to Paris. (我去过巴黎)", answer: "have", hint: "现在完成时" },
          { type: "choice", question: "'她比我高' 怎么说?", options: ["She is taller than me.", "She is more tall than me.", "She is taller me.", "She taller than me."], answer: 0 },
          { type: "fill", question: "If it rains, I ___ stay home.", answer: "will", hint: "第一条件句" },
          { type: "choice", question: "'这本书是她写的' 怎么说?", options: ["She wrote the book.", "The book was written by her.", "The book is written by her.", "The book was wrote by her."], answer: 1 },
        ]
      },
    ]
  },
];
