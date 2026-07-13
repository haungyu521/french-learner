/**
 * 英语完整课程体系 A1→C2
 * 对标法语课程，覆盖所有语法知识点
 * 以英式英语为主，标注美式差异
 */
export const englishCurriculum = [
  // ===== 第一单元：语音与入门 =====
  {
    unit: 1, unitTitle: "语音基础", unitDesc: "英语音标与发音规则",
    lessons: [
      {
        id: 'en1', title: "Lesson 1: 字母与音标", goal: "掌握26个字母和48个国际音标",
        vocab: [
          { word: "Vowels (元音)", meaning: "20个元音", example: "iː (see), ɪ (sit), e (bed), æ (cat)", audio: "vowels" },
          { word: "Consonants (辅音)", meaning: "28个辅音", example: "p, b, t, d, k, g, f, v, s, z", audio: "consonants" },
          { word: "Diphthongs (双元音)", meaning: "8个双元音", example: "eɪ (day), aɪ (my), ɔɪ (boy), aʊ (now)", audio: "diphthongs" },
          { word: "Schwa /ə/", meaning: "中央元音（最常见）", example: "about, the, banana", audio: "schwa" },
        ],
        grammar: { title: "英语发音规则", content: "英语发音的'坑'：\n\n1. 拼写≠发音（和法语不同！）\n   - 'ough' 有6种读法：though/θ/, through/uː/, rough/ʌf/, thought/ɔː/, cough/ɒf/\n   - 'read' 现在时/riːd/ vs 过去式/red/\n\n2. 重音很重要：\n   - 名词重音在前：REcord (名词)\n   - 动词重音在后：reCORD (动词)\n\n3. 英式 vs 美式发音差异：\n   - R音：英式不卷舌 /kɑː/, 美式卷舌 /kɑːr/\n   - æ vs ɑː：英式 /bɑːθ/, 美式 /bæθ/ (bath)\n   - t发音：英式清晰 /t/, 美式闪音 /ɾ/ (water)\n\n4. 连读规则：\n   - 辅音+元音：an_apple → /ənæpl/\n   - r连读：far_away → /fɑːrəweɪ/\n\n英式英语特色：\n- 清晰的/t/发音\n- 不卷舌的/r/\n- /ɒ/音（hot, not）美式变成/ɑː/", tip: "英式发音秘诀：/t/要清晰，/r/不卷舌，/ɒ/嘴要圆！" },
        dialogue: [
          { role: "A", text: "How do you pronounce 'schedule'?", cn: "schedule怎么念？" },
          { role: "B", text: "In British English: /ˈʃedjuːl/. In American: /ˈskedʒuːl/.", cn: "英式读/ˈʃedjuːl/，美式读/ˈskedʒuːl/。" },
          { role: "A", text: "So many differences!", cn: "差异真多！" },
          { role: "B", text: "Yes, but both are correct!", cn: "是的，但两种都对！" },
        ],
        practice: [
          { type: "choice", question: "英式英语中，'water'的t怎么发?", options: ["不发音", "闪音/ɾ/", "清晰的/t/", "发/d/"], answer: 2 },
          { type: "choice", question: "英式英语的r在词尾发音吗?", options: ["发音", "不发音", "有时发音", "看情况"], answer: 1 },
        ]
      },
      {
        id: 'en2', title: "Lesson 2: 打招呼与告别", goal: "学会各种场合的英语打招呼",
        vocab: [
          { word: "Hello / Hi", meaning: "你好/嗨", example: "Hello, how are you?", audio: "Hello" },
          { word: "Good morning/afternoon/evening", meaning: "早上/下午/晚上好", example: "Good morning, class!", audio: "Good morning" },
          { word: "Goodbye / Bye", meaning: "再见", example: "Goodbye, see you tomorrow!", audio: "Goodbye" },
          { word: "Good night", meaning: "晚安", example: "Good night, sleep well!", audio: "Good night" },
          { word: "How do you do?", meaning: "你好（非常正式）", example: "How do you do? Pleased to meet you.", audio: "How do you do" },
          { word: "Alright?", meaning: "你好吗？（英式非正式）", example: "Alright, mate?", audio: "Alright" },
          { word: "See you later/soon", meaning: "回头见/很快见", example: "See you later, alligator!", audio: "See you later" },
          { word: "Take care", meaning: "保重", example: "Take care of yourself!", audio: "Take care" },
        ],
        grammar: { title: "英式打招呼文化", content: "英语打招呼的正式程度：\n\n最正式：How do you do? (初次见面，回答也是How do you do?)\n正式：Good morning/afternoon/evening\n标准：Hello, how are you?\n非正式：Hi! / Hey!\n英式非正式：Alright? (回答：Alright! / Yeah, not bad)\n\n回答方式：\n— How are you?\n— I'm fine, thank you. And you? (标准)\n— Not bad, thanks. (英式常用)\n— Can't complain! (英式：没啥可抱怨的)\n— Alright? → Alright. (英式非正式)\n\n英式特色：\n- 'Alright?' 不是真的问你好不好\n- 'How do you do?' 不需要回答，只是打招呼\n- 英国人爱用 'Lovely to meet you!'", tip: "英国人说 'How are you?' 只是打招呼，不需要详细回答！" },
        dialogue: [
          { role: "A", text: "Good morning! How are you today?", cn: "早上好！今天怎么样？" },
          { role: "B", text: "Not bad, thanks. Lovely day, isn't it?", cn: "还不错，谢谢。天气不错，是吧？" },
          { role: "A", text: "Absolutely! Have a good one!", cn: "确实！祝你有美好的一天！" },
          { role: "B", text: "You too! Cheers!", cn: "你也是！再见！" },
        ],
        practice: [
          { type: "fill", question: "Good ___, class! (早上好)", answer: "morning", hint: "早上" },
          { type: "choice", question: "英式非正式打招呼用?", options: ["Good morning", "How do you do?", "Alright?", "Good evening"], answer: 2 },
        ]
      },
      {
        id: 'en3', title: "Lesson 3: 自我介绍", goal: "能用英语完整介绍自己",
        vocab: [
          { word: "My name is...", meaning: "我叫...", example: "My name is Li Wei.", audio: "My name is" },
          { word: "I'm from...", meaning: "我来自...", example: "I'm from Shanghai, China.", audio: "I'm from" },
          { word: "I'm ... years old", meaning: "我...岁", example: "I'm twenty-five years old.", audio: "years old" },
          { word: "I work as a...", meaning: "我的职业是...", example: "I work as a teacher.", audio: "I work as" },
          { word: "I live in...", meaning: "我住在...", example: "I live in London.", audio: "I live in" },
          { word: "Nice to meet you", meaning: "很高兴认识你", example: "Nice to meet you, Mr. Smith.", audio: "Nice to meet you" },
          { word: "I'm interested in...", meaning: "我对...感兴趣", example: "I'm interested in languages.", audio: "interested in" },
        ],
        grammar: { title: "be动词 (am/is/are)", content: "英语自我介绍用 be 动词：\n\nI am (I'm) a student. 我是学生。\nHe is (He's) from London. 他来自伦敦。\nShe is (She's) a doctor. 她是医生。\n\nbe动词变位：\nI am / You are / He-She-it is\nWe are / You are / They are\n\n否定：I am not / He is not (isn't) / They are not (aren't)\n疑问：Am I...? / Are you...? / Is he...?\n\n缩写更自然：\nI'm = I am\nYou're = You are\nHe's = He is\nWe're = We are\nThey're = They are\n\n注意：英语不说 'I have 25 years'（那是法语！），要说 'I am 25 years old'", tip: "英语比法语简单多了！没有阴阳性！" },
        dialogue: [
          { role: "A", text: "Hello! My name's James. What's yours?", cn: "你好！我叫James。你叫什么？" },
          { role: "B", text: "I'm Li Wei. I'm from China. Nice to meet you!", cn: "我叫李薇。我来自中国。很高兴认识你！" },
          { role: "A", text: "Nice to meet you too! What do you do?", cn: "也很高兴认识你！你做什么工作？" },
          { role: "B", text: "I'm a student. I'm studying English and French.", cn: "我是学生。我在学英语和法语。" },
          { role: "A", text: "Brilliant! Where do you live?", cn: "太棒了！你住哪？" },
          { role: "B", text: "I live near the city centre.", cn: "我住在市中心附近。" },
        ],
        practice: [
          { type: "fill", question: "I ___ twenty-five years old. (我25岁)", answer: "am", hint: "be动词" },
          { type: "choice", question: "'很高兴认识你' 英语是?", options: ["How are you?", "Nice to meet you", "Good to see", "Happy to know"], answer: 1 },
        ]
      },
    ]
  },
  // ===== 第二单元：冠词与名词 =====
  {
    unit: 2, unitTitle: "冠词与名词", unitDesc: "a/an/the 和可数/不可数名词",
    lessons: [
      {
        id: 'en4', title: "Lesson 4: 冠词 a/an/the", goal: "掌握英语冠词体系",
        vocab: [
          { word: "a/an (不定冠词)", meaning: "一个", example: "A book. An apple.", audio: "a an" },
          { word: "the (定冠词)", meaning: "这个/那个", example: "The book on the table.", audio: "the" },
          { word: "零冠词（不用冠词）", meaning: "泛指/不可数", example: "I love music. Water is important.", audio: "zero article" },
          { word: "some", meaning: "一些", example: "I need some water.", audio: "some" },
          { word: "any", meaning: "任何（否定/疑问）", example: "Do you have any questions?", audio: "any" },
        ],
        grammar: { title: "英语冠词体系", content: "英语冠词 vs 法语冠词（对比学习）：\n\n不定冠词：a/an\na book (一本书) — 泛指\nan apple (一个苹果) — 元音前用an\n\n定冠词：the\nthe book (这本书) — 特指\nthe apple (这个苹果) — 双方都知道的\n\n零冠词（英语特有！法语必须加冠词）：\nI love music. (我爱音乐 — 法语: J'aime LA musique)\nWater is important. (水很重要 — 法语: L'eau est importante)\n\nsome/any 用法：\nsome → 肯定句：I have some money.\nany → 否定/疑问：I don't have any money. Do you have any?\n\n关键区别（英法对比）：\n法语：Je mange du pain. (部分冠词)\n英语：I eat bread. / I'm eating some bread. (零冠词或some)\n\n法语：J'aime le café. (定冠词泛指)\n英语：I like coffee. (零冠词泛指)", tip: "英语泛指抽象名词时不用冠词，法语必须用！这是最大区别！" },
        dialogue: [
          { role: "A", text: "Would you like a cup of tea?", cn: "你要杯茶吗？" },
          { role: "B", text: "Yes, please. I love tea!", cn: "好的。我爱喝茶！" },
          { role: "A", text: "I prefer coffee, actually.", cn: "其实我更喜欢咖啡。" },
          { role: "B", text: "The coffee here is excellent.", cn: "这的咖啡很棒。" },
        ],
        practice: [
          { type: "fill", question: "I love ___ music. (零冠词)", answer: "/", hint: "不需要冠词" },
          { type: "choice", question: "'一个苹果' 英语是?", options: ["a apple", "an apple", "the apple", "some apple"], answer: 1 },
        ]
      },
      {
        id: 'en5', title: "Lesson 5: 可数与不可数名词", goal: "掌握名词的可数性",
        vocab: [
          { word: "可数名词", meaning: "可以数的", example: "one book, two books, three cats", audio: "countable" },
          { word: "不可数名词", meaning: "不能数的", example: "water, music, information, advice", audio: "uncountable" },
          { word: "much / many", meaning: "很多", example: "much water / many books", audio: "much many" },
          { word: "a lot of / lots of", meaning: "很多（通用）", example: "a lot of water / a lot of books", audio: "a lot of" },
          { word: "a piece of", meaning: "一片/一条", example: "a piece of advice / information", audio: "a piece of" },
        ],
        grammar: { title: "可数 vs 不可数", content: "英语名词分可数和不可数（法语也有类似概念）：\n\n可数名词(Countable)：\n有单复数：book/books, cat/cats\n可以用 a/an, many, few\nHow many books do you have?\n\n不可数名词(Uncountable)：\n没有复数：water, music, information, advice, news\n不用 a/an，用 some/any/much\nHow much water do you need?\n\n常见不可数名词（中国学生易错）：\ninformation (不是 informations)\nadvice (不是 advices — 用 a piece of advice)\nfurniture (不是 furnitures)\nnews (不可数但用复数动词：The news IS good)\nknowledge, research, homework, traffic\n\n量词搭配：\na piece of advice/information/news\na glass of water\na cup of tea\na bit of help\n\n注意：有些词在英语不可数，法语可数：\ninformation (英不可数) vs information (法可数: des informations)\nfurniture (英不可数) vs meubles (法可数)", tip: "记住：information, advice, furniture, news 在英语中不可数！" },
        dialogue: [
          { role: "A", text: "Can you give me some advice?", cn: "你能给我一些建议吗？" },
          { role: "B", text: "Sure. A piece of advice: always practice every day.", cn: "当然。一条建议：每天都要练习。" },
          { role: "A", text: "That's very helpful. Thank you!", cn: "太有帮助了。谢谢！" },
        ],
        practice: [
          { type: "choice", question: "'information' 是可数还是不可数?", options: ["可数", "不可数", "都可以", "看情况"], answer: 1 },
          { type: "fill", question: "How ___ water do you need? (多少)", answer: "much", hint: "不可数用much" },
        ]
      },
    ]
  },
  // ===== 第三单元：核心时态 =====
  {
    unit: 3, unitTitle: "核心时态", unitDesc: "英语12种时态的系统理解",
    lessons: [
      {
        id: 'en6', title: "Lesson 6: 现在时", goal: "掌握一般现在时和现在进行时",
        vocab: [
          { word: "I work", meaning: "我工作（习惯）", example: "I work every day.", audio: "I work" },
          { word: "I am working", meaning: "我正在工作", example: "I am working right now.", audio: "I am working" },
          { word: "always/usually/often", meaning: "总是/通常/经常", example: "I always drink tea.", audio: "always" },
          { word: "never/sometimes", meaning: "从不/有时", example: "I never eat meat.", audio: "never" },
          { word: "every day/week", meaning: "每天/每周", example: "I go to work every day.", audio: "every day" },
        ],
        grammar: { title: "一般现在时 vs 现在进行时", content: "英语时态的核心区分：\n\n一般现在时 (Simple Present)：\n构成：主语 + 动词原形（三单加-s）\nI work / He works / We work\n\n用法：\n1. 习惯：I drink tea every morning.\n2. 事实：The sun rises in the east.\n3. 时刻表：The train leaves at 9.\n\n现在进行时 (Present Continuous)：\n构成：am/is/are + doing\nI am working / She is reading\n\n用法：\n1. 正在做：I'm studying English now.\n2. 近期计划：I'm meeting Tom tomorrow.\n3. 变化趋势：It's getting colder.\n\n关键区分：\nI work here. (我在这里工作 — 长期事实)\nI'm working here. (我在这里工作 — 暂时的)\n\nI drink tea. (我喝茶 — 习惯)\nI'm drinking tea. (我在喝茶 — 现在正在)\n\n频率副词位置：\nalways/usually/often → 动词前：I always drink tea.\nsometimes → 句首或句尾：Sometimes I drink tea.", tip: "一般现在时=照片（定格），现在进行时=视频（进行中）" },
        dialogue: [
          { role: "A", text: "What do you usually do in the morning?", cn: "你早上通常做什么？" },
          { role: "B", text: "I usually have a cup of tea and read the news.", cn: "我通常喝茶看新闻。" },
          { role: "A", text: "And what are you doing now?", cn: "那你现在在做什么？" },
          { role: "B", text: "I'm studying English, of course!", cn: "我在学英语啊！" },
        ],
        practice: [
          { type: "fill", question: "She ___ to school every day. (go)", answer: "goes", hint: "三单加-es" },
          { type: "choice", question: "'我正在学习' 英语是?", options: ["I study", "I am studying", "I studies", "I studied"], answer: 1 },
        ]
      },
      {
        id: 'en7', title: "Lesson 7: 过去时", goal: "掌握一般过去时和过去进行时",
        vocab: [
          { word: "I worked", meaning: "我工作了（完成）", example: "I worked yesterday.", audio: "I worked" },
          { word: "I was working", meaning: "我当时正在工作", example: "I was working when you called.", audio: "I was working" },
          { word: "yesterday / last week", meaning: "昨天/上周", example: "I saw him yesterday.", audio: "yesterday" },
          { word: "ago", meaning: "...以前", example: "Two years ago, I lived in London.", audio: "ago" },
          { word: "while / when", meaning: "当...的时候", example: "While I was cooking, the phone rang.", audio: "while" },
        ],
        grammar: { title: "一般过去时 vs 过去进行时", content: "一般过去时 (Simple Past)：\n构成：动词过去式（规则加-ed，不规则需记忆）\nI worked / She went / We ate\n\n用法：\n1. 完成的动作：I finished my homework.\n2. 过去的习惯：I played football every weekend.\n3. 过去的事实：She lived in Paris for 5 years.\n\n过去进行时 (Past Continuous)：\n构成：was/were + doing\nI was working / They were playing\n\n用法：\n1. 过去某时正在做：At 8pm, I was watching TV.\n2. 被打断的动作：I was sleeping when the phone rang.\n\n过去时 vs 过去进行时：\nI was reading (背景) when she arrived (事件).\n= 我正在读书(背景)的时候她到了(事件)\n\n不规则动词必须记忆：\ngo → went, see → saw, eat → ate\ntake → took, come → came, give → gave\nbuy → bought, think → thought\nsay → said, tell → told\n\n否定和疑问：\nI didn't work. (否定)\nDid you work? (疑问)", tip: "过去进行时是'过去的视频'，一般过去时是'过去的照片'！" },
        dialogue: [
          { role: "A", text: "What did you do last weekend?", cn: "你上周末做了什么？" },
          { role: "B", text: "I went to the cinema. I watched a brilliant film.", cn: "我去看电影了。看了一部很棒的电影。" },
          { role: "A", text: "What was it about?", cn: "讲什么的？" },
          { role: "B", text: "It was about a man who travelled around the world.", cn: "关于一个环游世界的人。" },
        ],
        practice: [
          { type: "fill", question: "I ___ (go) to the park yesterday.", answer: "went", hint: "go的过去式" },
          { type: "choice", question: "'我在学习的时候他来了' 怎么表达?", options: ["I studied when he came", "I was studying when he came", "I study when he comes", "I had studied when he came"], answer: 1 },
        ]
      },
      {
        id: 'en8', title: "Lesson 8: 将来时", goal: "掌握英语表达将来的多种方式",
        vocab: [
          { word: "will + 动词", meaning: "将会（决定/预测）", example: "I will help you.", audio: "will" },
          { word: "be going to + 动词", meaning: "打算/将要", example: "I'm going to study abroad.", audio: "going to" },
          { word: "be + doing (现在进行时)", meaning: "即将（已安排）", example: "I'm meeting her at 3.", audio: "present continuous" },
          { word: "might / may", meaning: "可能", example: "I might go to France.", audio: "might" },
          { word: "tomorrow / next week", meaning: "明天/下周", example: "I'll see you tomorrow.", audio: "tomorrow" },
        ],
        grammar: { title: "英语表达将来的4种方式", content: "英语没有专门的'将来时'，但有4种表达：\n\n1. will + 动词（即时决定/预测/承诺）：\nI'll help you. (我帮你 — 即时决定)\nIt will rain tomorrow. (明天会下雨 — 预测)\nI'll always love you. (我会永远爱你 — 承诺)\n\n2. be going to + 动词（计划/有迹象）：\nI'm going to study in London. (我打算去伦敦学习 — 计划)\nLook at those clouds! It's going to rain. (看那些云！要下雨了 — 有迹象)\n\n3. 现在进行时（已安排）：\nI'm meeting Tom at 3. (我3点和Tom见面 — 已约好)\nThe train is leaving at 9. (火车9点开 — 时刻表)\n\n4. 一般现在时（时刻表）：\nThe film starts at 8. (电影8点开始)\n\nwill vs going to 区别：\nwill → 临时决定：I'll have the steak. (我临时决定要牛排)\ngoing to → 已有计划：I'm going to have steak. (我计划好吃牛排)\n\n否定：\nwill → won't (I won't go)\ngoing to → isn't/aren't going to (She isn't going to come)", tip: "will=临时决定，going to=已有计划，现在进行时=已安排！" },
        dialogue: [
          { role: "A", text: "What are you going to do this weekend?", cn: "你这周末打算做什么？" },
          { role: "B", text: "I'm going to visit my parents. I'm driving on Saturday.", cn: "我打算去看父母。我周六开车去。" },
          { role: "A", text: "That sounds lovely. Will you stay long?", cn: "听起来不错。你会待很久吗？" },
          { role: "B", text: "I'll probably stay until Sunday evening.", cn: "我大概待到周日晚上。" },
        ],
        practice: [
          { type: "fill", question: "I ___ help you. (我会帮你)", answer: "will", hint: "将来时" },
          { type: "choice", question: "'我打算去伦敦' 英语是?", options: ["I will go to London", "I'm going to London", "I go to London", "I went to London"], answer: 1 },
        ]
      },
    ]
  },
  // ===== 第四单元：介词与短语 =====
  {
    unit: 4, unitTitle: "介词与短语", unitDesc: "in/on/at/by 等核心介词",
    lessons: [
      {
        id: 'en9', title: "Lesson 9: 时间介词 in/on/at", goal: "掌握时间介词的区别",
        vocab: [
          { word: "in + 时间段", meaning: "在...期间", example: "in the morning, in 2024, in summer", audio: "in" },
          { word: "on + 具体日期", meaning: "在...（天）", example: "on Monday, on 25th December, on my birthday", audio: "on" },
          { word: "at + 时间点", meaning: "在...（时刻）", example: "at 3 o'clock, at noon, at night", audio: "at" },
          { word: "before / after", meaning: "在...之前/之后", example: "before lunch, after work", audio: "before after" },
          { word: "during / while", meaning: "在...期间", example: "during the holiday, while I was sleeping", audio: "during" },
          { word: "since / for", meaning: "自从/持续", example: "since 2020, for 3 years", audio: "since for" },
        ],
        grammar: { title: "时间介词金字塔", content: "时间介词 in/on/at 从大到小：\n\nin (最大范围)：\n- 世纪：in the 21st century\n- 年代：in the 1990s\n- 年：in 2024\n- 季节：in summer / in winter\n- 月：in January / in March\n- 一天中的时段：in the morning / in the afternoon / in the evening\n\non (具体某天)：\n- 星期：on Monday / on Friday\n- 日期：on 25th December\n- 节日：on Christmas Day\n- 具体某天：on my birthday, on a rainy day\n\nat (精确时刻)：\n- 钟点：at 3 o'clock / at 9:30\n- 时刻：at noon / at midnight / at dawn\n- 节日：at Christmas (整个假期)\n- 固定：at night / at the weekend (英式) / on the weekend (美式)\n\nsince vs for：\nsince + 时间点：since 2020, since Monday\nfor + 时间段：for 3 years, for 2 weeks\n\nbefore vs ago：\nbefore + 时间点：before 2020\n时间段 + ago：3 years ago", tip: "in=大范围，on=具体天，at=精确时刻！" },
        dialogue: [
          { role: "A", text: "When is your birthday?", cn: "你生日什么时候？" },
          { role: "B", text: "It's on 15th March.", cn: "3月15号。" },
          { role: "A", text: "What time does the party start?", cn: "派对几点开始？" },
          { role: "B", text: "At 7 in the evening.", cn: "晚上7点。" },
        ],
        practice: [
          { type: "fill", question: "I'll see you ___ Monday. (在周一)", answer: "on", hint: "具体某天用on" },
          { type: "choice", question: "'在2024年' 英语是?", options: ["at 2024", "on 2024", "in 2024", "by 2024"], answer: 2 },
        ]
      },
      {
        id: 'en10', title: "Lesson 10: 地点介词 in/on/at", goal: "掌握地点介词的区别",
        vocab: [
          { word: "in + 封闭空间", meaning: "在...里面", example: "in the room, in London, in the car", audio: "in" },
          { word: "on + 表面", meaning: "在...上面", example: "on the table, on the wall, on the bus", audio: "on" },
          { word: "at + 地点", meaning: "在...（位置）", example: "at the door, at school, at work", audio: "at" },
          { word: "next to / beside", meaning: "在...旁边", example: "The bank is next to the post office.", audio: "next to" },
          { word: "between", meaning: "在...之间", example: "Between the bank and the shop.", audio: "between" },
          { word: "opposite", meaning: "在...对面", example: "The park is opposite the school.", audio: "opposite" },
        ],
        grammar: { title: "地点介词 in/on/at 区别", content: "in (在...里面/大范围)：\n- 国家/城市：in China, in London\n- 房间/建筑：in the kitchen, in the library\n- 封闭空间：in the car, in a box\n\non (在...表面)：\n- 表面：on the table, on the wall\n- 楼层：on the first floor (英式=2楼)\n- 公共交通：on the bus, on the train, on a plane\n- 街道：on Oxford Street\n\nat (在某位置)：\n- 精确位置：at the door, at the bus stop\n- 机构/场所：at school, at work, at home\n- 事件：at a party, at a concert\n\nin vs on vs at 对比：\nI'm in the car. (在车里)\nI'm on the bus. (在公交上 — 可以走动的用on)\nI'm at the bus stop. (在公交站)\n\nin London (在大范围)\non Oxford Street (在街上)\nat the shop (在商店这个点)\n\n英式 vs 美式：\nat the weekend (英) / on the weekend (美)\nin hospital (英) / in the hospital (美)", tip: "in=里面/大范围，on=表面/交通，at=精确位置！" },
        dialogue: [
          { role: "A", text: "Where do you work?", cn: "你在哪工作？" },
          { role: "B", text: "I work at a hospital in central London.", cn: "我在伦敦市中心的一家医院工作。" },
          { role: "A", text: "Is it on a main road?", cn: "在大路上吗？" },
          { role: "B", text: "Yes, it's on Oxford Street, near the park.", cn: "是的，在牛津街上，靠近公园。" },
        ],
        practice: [
          { type: "fill", question: "I live ___ London. (在伦敦)", answer: "in", hint: "城市用in" },
          { type: "choice", question: "'在公交车上' 英语是?", options: ["in the bus", "on the bus", "at the bus", "by the bus"], answer: 1 },
        ]
      },
    ]
  },
  // ===== 第五单元：情态动词与句型 =====
  {
    unit: 5, unitTitle: "情态动词与句型", unitDesc: "can/could/must/should/may 等",
    lessons: [
      {
        id: 'en11', title: "Lesson 11: 情态动词", goal: "掌握所有情态动词的用法",
        vocab: [
          { word: "can / can't", meaning: "能/不能", example: "I can speak French.", audio: "can" },
          { word: "could / couldn't", meaning: "能够（过去/礼貌）", example: "Could you help me?", audio: "could" },
          { word: "must / mustn't", meaning: "必须/禁止", example: "You must study hard.", audio: "must" },
          { word: "should / shouldn't", meaning: "应该/不应该", example: "You should see a doctor.", audio: "should" },
          { word: "may / might", meaning: "可能/也许", example: "It might rain later.", audio: "may" },
          { word: "have to / don't have to", meaning: "不得不/不必", example: "I have to work late.", audio: "have to" },
          { word: "would / wouldn't", meaning: "将会（礼貌/假设）", example: "I would like a cup of tea.", audio: "would" },
          { word: "need to / needn't", meaning: "需要/不必", example: "You need to practise more.", audio: "need to" },
        ],
        grammar: { title: "情态动词完整体系", content: "情态动词 = 表达能力、义务、许可、可能性\n\nCAN — 能力/许可：\nI can swim. (能力)\nCan I go? (许可)\nIt can be cold. (可能性)\n\nCOULD — 过去能力/礼貌请求：\nI could swim when I was 5. (过去能力)\nCould you help me? (礼貌请求)\nIt could rain. (可能性较弱)\n\nMUST — 义务/推断：\nYou must study. (义务 — 说话者认为必须)\nYou must be tired. (推断 — 你肯定累了)\nMustn't = 禁止：You mustn't smoke here.\n\nSHOULD — 建议：\nYou should see a doctor. (建议)\nYou shouldn't eat so much. (不建议)\n\nMAY/MIGHT — 可能性：\nIt may/might rain. (可能下雨)\nMay I come in? (正式许可)\n\nHAVE TO — 外部义务（vs must 是内部义务）：\nI have to work late. (老板要求的)\nI must study harder. (我自己觉得应该)\n\nMUST vs HAVE TO：\nmust → 说话者认为必须（主观）\nhave to → 外部规定必须（客观）\n\nwould like = want 的礼貌版：\nI would like a coffee. = I want a coffee. (更礼貌)", tip: "must=主观必须，have to=客观不得不！" },
        dialogue: [
          { role: "A", text: "Could you help me with this?", cn: "你能帮我一下吗？" },
          { role: "B", text: "Of course! What do you need?", cn: "当然！你需要什么？" },
          { role: "A", text: "I must finish this by tomorrow.", cn: "我明天之前必须完成。" },
          { role: "B", text: "You should start now then!", cn: "那你应该现在就开始！" },
        ],
        practice: [
          { type: "fill", question: "___ you help me, please? (能)", answer: "Could", hint: "礼貌请求" },
          { type: "choice", question: "'你肯定很累' 英语是?", options: ["You must be tired", "You should be tired", "You can be tired", "You would be tired"], answer: 0 },
        ]
      },
    ]
  },
  // ===== 第六单元：日常英语 =====
  {
    unit: 6, unitTitle: "日常英语", unitDesc: "咖啡馆、购物、交通、看医生",
    lessons: [
      {
        id: 'en12', title: "Lesson 12: 在咖啡馆", goal: "学会在英式咖啡馆点单",
        vocab: [
          { word: "a cup of tea/coffee", meaning: "一杯茶/咖啡", example: "A cup of tea, please.", audio: "cup of tea" },
          { word: "the bill / the cheque", meaning: "账单", example: "Could we have the bill, please?", audio: "the bill" },
          { word: "I'd like...", meaning: "我想要...", example: "I'd like a latte, please.", audio: "I'd like" },
          { word: "Could I have...?", meaning: "能给我...吗？", example: "Could I have the menu?", audio: "Could I have" },
          { word: "with milk / without sugar", meaning: "加奶/不加糖", example: "Tea with milk, please.", audio: "with milk" },
          { word: "to take away", meaning: "带走（英式）", example: "Is that to eat in or take away?", audio: "take away" },
          { word: "a scone / a muffin", meaning: "司康饼/玛芬", example: "I'll have a scone with jam.", audio: "a scone" },
        ],
        grammar: { title: "礼貌点单：Could I...?", content: "英式英语点单非常注重礼貌：\n\nI'd like a coffee, please. (我想要一杯咖啡)\nCould I have a tea, please? (能给我一杯茶吗？)\nCan I get a...? (美式，不太正式)\n\n回答：\nYes, of course. / Certainly. / Here you go.\n\n英式特色：\n'Would you like milk?' — 'Yes, please.' / 'No, thank you.'\n英国人喝茶加牛奶很常见！\n\n英式 vs 美式：\n英式：the bill / takeaway\n美式：the check / to go\n\n英式下午茶：\n- 三明治 → 司康饼(配奶油和果酱) → 小蛋糕\n- 先吃咸的再吃甜的！", tip: "英国人说 'please' 和 'thank you' 的频率非常高！" },
        dialogue: [
          { role: "Waiter", text: "Good afternoon! What can I get you?", cn: "下午好！想要什么？" },
          { role: "A", text: "Could I have a cup of Earl Grey, please?", cn: "能给我一杯伯爵茶吗？" },
          { role: "Waiter", text: "Would you like milk and sugar?", cn: "要加奶和糖吗？" },
          { role: "A", text: "Just milk, no sugar, please.", cn: "只要奶，不加糖。" },
          { role: "Waiter", text: "Lovely. That'll be six pounds fifty.", cn: "好的。一共6.5英镑。" },
        ],
        practice: [
          { type: "fill", question: "Could I ___ a cup of tea, please? (能给我)", answer: "have", hint: "有" },
          { type: "choice", question: "英式'带走'是?", options: ["to go", "to take away", "take out", "carry out"], answer: 1 },
        ]
      },
      {
        id: 'en13', title: "Lesson 13: 购物", goal: "学会在英式商店购物",
        vocab: [
          { word: "How much is this?", meaning: "这个多少钱？", example: "Excuse me, how much is this jacket?", audio: "How much" },
          { word: "too expensive / cheap", meaning: "太贵/便宜", example: "That's a bit too expensive.", audio: "expensive" },
          { word: "a size larger/smaller", meaning: "大/小一号", example: "Do you have this in a size larger?", audio: "size larger" },
          { word: "the changing room", meaning: "试衣间（英式）", example: "Where are the changing rooms?", audio: "changing room" },
          { word: "the sale / discount", meaning: "打折", example: "Is this in the sale?", audio: "sale" },
          { word: "to pay by card / cash", meaning: "刷卡/现金支付", example: "Can I pay by card?", audio: "by card" },
          { word: "a refund / exchange", meaning: "退款/换货", example: "I'd like a refund, please.", audio: "refund" },
          { word: "a receipt", meaning: "收据", example: "Would you like a receipt?", audio: "receipt" },
        ],
        grammar: { title: "购物实用表达", content: "购物对话：\n\n问价：How much is this? / How much does this cost?\n试穿：Can I try this on? / Where are the changing rooms?\n尺码：Do you have this in a medium/large?\n付款：I'll pay by card. / Can I pay in cash?\n退货：I'd like to return this. / Can I have a refund?\n\n英式 vs 美式购物：\n英式：the shop / the changing room / a receipt\n美式：the store / the fitting room / a receipt\n\n英国打折说 'the sales'（复数），通常1月和7月。\n\n退货政策：\n- 一般28天内可退\n- 需要 receipt (收据)\n- online shopping 14天冷静期(cooling-off period)", tip: "英国退货政策很好，保留收据！" },
        dialogue: [
          { role: "A", text: "Excuse me, do you have this in a medium?", cn: "请问这件有中号吗？" },
          { role: "Assistant", text: "Let me check... Yes, here you are.", cn: "让我查...有的，给您。" },
          { role: "A", text: "Could I try it on?", cn: "能试穿吗？" },
          { role: "Assistant", text: "Of course, the changing rooms are over there.", cn: "当然，试衣间在那边。" },
          { role: "A", text: "It fits perfectly. I'll take it.", cn: "很合身。我要了。" },
        ],
        practice: [
          { type: "fill", question: "Could I ___ it on? (试穿)", answer: "try", hint: "试" },
          { type: "choice", question: "英式'试衣间'是?", options: ["fitting room", "changing room", "try room", "dressing room"], answer: 1 },
        ]
      },
    ]
  },
];
