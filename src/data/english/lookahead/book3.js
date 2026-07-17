/**
 * Look Ahead 3 — 走遍英国 第3册
 * 级别：Intermediate (B1) | 15个单元 | 高级语法和话题
 * 新增语法：过去完成时、虚拟语气、倒装句等
 */
export const lookAhead3Data = [
  // ========== Unit 1: Life stories ==========
  {
    unit: 1, unitTitle: "Life stories", unitDesc: "Biographies and past perfect",
    lessons: [
      {
        id: 'la3-u1-l1', title: "Lesson 1 — Biography", goal: "Learn to talk about life events using past perfect",
        vocab: [
          { word: "biography", meaning: "传记", example: "I read a biography of Einstein.", audio: "biography" },
          { word: "childhood", meaning: "童年", example: "His childhood was happy.", audio: "childhood" },
          { word: "education", meaning: "教育", example: "She received a good education.", audio: "education" },
          { word: "career", meaning: "职业生涯", example: "His career was successful.", audio: "career" },
          { word: "achievement", meaning: "成就", example: "Her greatest achievement was...", audio: "achievement" },
          { word: "graduate", meaning: "毕业", example: "He graduated from Oxford.", audio: "graduate" },
          { word: "marry", meaning: "结婚", example: "She married young.", audio: "marry" },
          { word: "retire", meaning: "退休", example: "He retired at 65.", audio: "retire" },
          { word: "pass away", meaning: "去世", example: "She passed away in 2020.", audio: "pass away" },
          { word: "before", meaning: "在...之前", example: "Before he became famous...", audio: "before" },
          { word: "after", meaning: "在...之后", example: "After she graduated...", audio: "after" },
          { word: "already", meaning: "已经", example: "He had already left.", audio: "already" },
        ],
        grammar: { title: "Past perfect tense", content: "Past perfect describes an action that happened before another past action:\n\nStructure: had + past participle\n\n- I had finished before he arrived. (我在他到达之前已经完成了)\n- She had already left when I called. (我打电话时她已经离开了)\n- They had eaten dinner before we came. (我们来之前他们已经吃过晚饭了)\n\nNegative: had not (hadn't) + past participle\n- I hadn't finished yet. (我还没完成)\n- She hadn't seen the film. (她没看过那部电影)\n\nQuestions: Had + subject + past participle?\n- Had you finished before he arrived? — Yes, I had. / No, I hadn't.\n\nUses:\n1. Action before another past action:\n   When I arrived, the film had already started. (当我到达时，电影已经开始了)\n\n2. With before/after/when/by the time:\n   Before she became famous, she had worked as a teacher. (在她成名之前，她当过老师)\n   After he had finished, he went home. (他完成后，回家了)\n\n3. Reported speech:\n   She said, \"I had finished.\" → She said that she had finished.\n\nPast simple vs past perfect:\n- Past simple: action happened at a specific time\n  I arrived at 9. (我9点到达)\n- Past perfect: action happened before another past action\n  When I arrived, the meeting had started. (当我到达时，会议已经开始了)", tip: "Past perfect = had + past participle. Use for 'the past of the past'!" },
        dialogue: [
          { role: "A", text: "Tell me about Einstein's life.", cn: "告诉我爱因斯坦的生平。" },
          { role: "B", text: "He was born in 1879. Before he became famous, he had worked as a patent clerk.", cn: "他出生于1879年。在他成名之前，他当过专利局职员。" },
          { role: "A", text: "When did he win the Nobel Prize?", cn: "他什么时候获得诺贝尔奖？" },
          { role: "B", text: "He won it in 1921. By that time, he had already published his theory of relativity.", cn: "他在1921年获得。到那时，他已经发表了相对论。" },
          { role: "A", text: "Where did he live?", cn: "他住在哪里？" },
          { role: "B", text: "He had moved to the USA before World War II started.", cn: "他在二战开始前已经搬到了美国。" },
        ],
        practice: [
          { type: "fill", question: "When I arrived, the film ___ already started.", answer: "had", hint: "过去完成时" },
          { type: "choice", question: "'她在我打电话前已经离开了' 怎么说?", options: ["She left before I called.", "She had left before I called.", "She has left before I called.", "She was leaving before I called."], answer: 1 },
          { type: "fill", question: "Before he became famous, he ___ worked as a teacher.", answer: "had", hint: "过去完成时" },
          { type: "choice", question: "'我到达时会议已经开始了' 怎么说?", options: ["When I arrived, the meeting started.", "When I arrived, the meeting had started.", "When I arrive, the meeting starts.", "When I arrived, the meeting has started."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unit 2: Travel and adventure ==========
  {
    unit: 2, unitTitle: "Travel and adventure", unitDesc: "Travel stories and narrative tenses",
    lessons: [
      {
        id: 'la3-u2-l1', title: "Lesson 1 — An unforgettable journey", goal: "Learn to narrate past events",
        vocab: [
          { word: "journey", meaning: "旅程", example: "It was a long journey.", audio: "journey" },
          { word: "destination", meaning: "目的地", example: "Our destination was Paris.", audio: "destination" },
          { word: "adventure", meaning: "冒险", example: "It was an adventure.", audio: "adventure" },
          { word: "explore", meaning: "探索", example: "We explored the city.", audio: "explore" },
          { word: "discover", meaning: "发现", example: "We discovered a hidden beach.", audio: "discover" },
          { word: "memorable", meaning: "难忘的", example: "It was a memorable experience.", audio: "memorable" },
          { word: "unforgettable", meaning: "难忘的", example: "An unforgettable trip.", audio: "unforgettable" },
          { word: "suddenly", meaning: "突然", example: "Suddenly, it started to rain.", audio: "suddenly" },
          { word: "eventually", meaning: "最终", example: "We eventually arrived.", audio: "eventually" },
          { word: "meanwhile", meaning: "同时", example: "Meanwhile, the others were waiting.", audio: "meanwhile" },
          { word: "fortunately", meaning: "幸运地", example: "Fortunately, we had umbrellas.", audio: "fortunately" },
          { word: "unfortunately", meaning: "不幸地", example: "Unfortunately, we missed the train.", audio: "unfortunately" },
        ],
        grammar: { title: "Narrative tenses", content: "When telling a story, we use multiple past tenses together:\n\n1. Past simple — main events:\n   We arrived in Paris. We visited the Louvre. (我们到达巴黎。我们参观了卢浮宫。)\n\n2. Past continuous — background/actions in progress:\n   The sun was shining when we arrived. (我们到达时阳光明媚)\n   We were walking along the street when it started to rain. (我们正沿着街道走，突然开始下雨)\n\n3. Past perfect — events before the main story:\n   We had booked the hotel before we left. (我们出发前已经预订了酒店)\n   She had never been abroad before that trip. (在那次旅行之前，她从没出过国)\n\n4. Past perfect continuous — duration before past:\n   We had been travelling for 10 hours when we finally arrived. (我们旅行了10小时才最终到达)\n\nStructure of a narrative:\n- Background (past continuous): It was a sunny day. Birds were singing.\n- Main events (past simple): We got on the bus. We drove to the coast.\n- Earlier events (past perfect): We had planned this trip for months.\n- Interruptions: Suddenly, the bus broke down.\n\nSignal words:\n- suddenly, eventually, meanwhile, fortunately, unfortunately\n- when, while, as soon as, by the time", tip: "Narrative = past simple (events) + past continuous (background) + past perfect (earlier events)" },
        dialogue: [
          { role: "A", text: "Tell me about your trip to Japan.", cn: "告诉我你的日本之旅。" },
          { role: "B", text: "Well, we had planned the trip for months. When we arrived, it was raining.", cn: "嗯，我们计划了几个月。当我们到达时，正在下雨。" },
          { role: "A", text: "What did you do?", cn: "你们做了什么？" },
          { role: "B", text: "We were walking around Tokyo when we discovered a small temple.", cn: "我们正在东京闲逛，突然发现了一座小寺庙。" },
          { role: "A", text: "That sounds amazing!", cn: "听起来太棒了！" },
          { role: "B", text: "Yes, it was unforgettable. We had never seen anything like it before.", cn: "是的，很难忘。我们以前从没见过这样的东西。" },
        ],
        practice: [
          { type: "fill", question: "We ___ walking around when it started to rain.", answer: "were", hint: "过去进行时" },
          { type: "choice", question: "'我们到达时，他们已经离开了' 怎么说?", options: ["When we arrived, they left.", "When we arrived, they had left.", "When we arrive, they leave.", "When we arrived, they have left."], answer: 1 },
          { type: "fill", question: "The sun ___ shining when we arrived.", answer: "was", hint: "过去进行时" },
          { type: "choice", question: "'突然开始下雨' 怎么说?", options: ["Suddenly it rains.", "Suddenly it rained.", "Suddenly it was raining.", "Suddenly it had rained."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Units 3-15: More topics ==========
  {
    unit: 3, unitTitle: "The media", unitDesc: "News, journalism, and passive voice",
    lessons: [
      {
        id: 'la3-u3-l1', title: "Lesson 1 — News and journalism", goal: "Learn to discuss media and news",
        vocab: [
          { word: "media", meaning: "媒体", example: "The media reported the story.", audio: "media" },
          { word: "journalist", meaning: "记者", example: "The journalist wrote an article.", audio: "journalist" },
          { word: "article", meaning: "文章", example: "I read an interesting article.", audio: "article" },
          { word: "headline", meaning: "标题", example: "The headline was shocking.", audio: "headline" },
          { word: "interview", meaning: "采访", example: "She gave an interview.", audio: "interview" },
          { word: "report", meaning: "报道", example: "The report was accurate.", audio: "report" },
          { word: "broadcast", meaning: "广播", example: "The news was broadcast live.", audio: "broadcast" },
          { word: "editor", meaning: "编辑", example: "The editor published the story.", audio: "editor" },
          { word: "source", meaning: "来源", example: "The source was reliable.", audio: "source" },
          { word: "reliable", meaning: "可靠的", example: "Is the source reliable?", audio: "reliable" },
          { word: "bias", meaning: "偏见", example: "The article has a bias.", audio: "bias" },
          { word: "objective", meaning: "客观的", example: "News should be objective.", audio: "objective" },
        ],
        grammar: { title: "Passive voice in all tenses", content: "Passive voice can be used in any tense:\n\nPresent simple: am/is/are + past participle\n- News is broadcast every day. (新闻每天广播)\n\nPresent continuous: am/is/are being + past participle\n- The story is being reported now. (故事正在被报道)\n\nPast simple: was/were + past participle\n- The article was written yesterday. (文章是昨天写的)\n\nPast continuous: was/were being + past participle\n- The interview was being conducted when I arrived. (我到达时采访正在进行)\n\nPresent perfect: have/has been + past participle\n- The report has been published. (报告已经发表了)\n\nPast perfect: had been + past participle\n- The story had been reported before we arrived. (我们到达前故事已经被报道了)\n\nFuture: will be + past participle\n- The news will be broadcast at 9. (新闻将在9点广播)\n\nModal verbs: modal + be + past participle\n- The story must be verified. (故事必须被核实)\n- The article should be objective. (文章应该客观)\n\nBy + agent (optional):\n- The book was written by Shakespeare. (书是莎士比亚写的)\n- The news is reported by journalists. (新闻是记者报道的)", tip: "Passive = be + past participle. Change 'be' to match the tense!" },
        dialogue: [
          { role: "A", text: "Do you trust the news?", cn: "你信任新闻吗？" },
          { role: "B", text: "It depends. Some sources are more reliable than others.", cn: "看情况。有些来源比其他来源更可靠。" },
          { role: "A", text: "How is the news reported?", cn: "新闻是怎么报道的？" },
          { role: "B", text: "The story is reported by journalists who verify the sources.", cn: "故事是由核实来源的记者报道的。" },
          { role: "A", text: "Has the article been published?", cn: "文章发表了吗？" },
          { role: "B", text: "Yes, it was published yesterday. It had been written before the event.", cn: "是的，昨天发表了。它是在事件发生前写的。" },
        ],
        practice: [
          { type: "fill", question: "The news ___ broadcast every day.", answer: "is", hint: "现在时被动" },
          { type: "choice", question: "'文章是昨天写的' 怎么说?", options: ["The article wrote yesterday.", "The article was written yesterday.", "The article is written yesterday.", "The article has written yesterday."], answer: 1 },
          { type: "fill", question: "The story ___ been reported before we arrived.", answer: "had", hint: "过去完成时被动" },
          { type: "choice", question: "'新闻将在9点广播' 怎么说?", options: ["The news will broadcast at 9.", "The news will be broadcast at 9.", "The news is broadcast at 9.", "The news broadcasts at 9."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unit 4: Science and technology ==========
  {
    unit: 4, unitTitle: "Science and technology", unitDesc: "Inventions and future predictions",
    lessons: [
      {
        id: 'la3-u4-l1', title: "Lesson 1 — Technology in our lives", goal: "Learn to discuss technology and make predictions",
        vocab: [
          { word: "technology", meaning: "技术", example: "Technology is changing fast.", audio: "technology" },
          { word: "invention", meaning: "发明", example: "The internet is a great invention.", audio: "invention" },
          { word: "innovation", meaning: "创新", example: "Innovation is important.", audio: "innovation" },
          { word: "device", meaning: "设备", example: "This device is useful.", audio: "device" },
          { word: "software", meaning: "软件", example: "The software is updated.", audio: "software" },
          { word: "artificial intelligence", meaning: "人工智能", example: "AI is developing fast.", audio: "artificial intelligence" },
          { word: "robot", meaning: "机器人", example: "Robots are used in factories.", audio: "robot" },
          { word: "predict", meaning: "预测", example: "It's hard to predict the future.", audio: "predict" },
          { word: "likely", meaning: "可能的", example: "It's likely to happen.", audio: "likely" },
          { word: "unlikely", meaning: "不可能的", example: "It's unlikely to change.", audio: "unlikely" },
          { word: "definitely", meaning: "肯定地", example: "It will definitely change.", audio: "definitely" },
          { word: "probably", meaning: "可能", example: "It will probably happen.", audio: "probably" },
        ],
        grammar: { title: "Future predictions: will, be likely to, be bound to", content: "Different ways to make predictions:\n\n1. WILL (general predictions):\n   - Technology will change our lives. (技术将改变我们的生活)\n   - Robots will do more work in the future. (机器人在未来会做更多工作)\n\n2. BE LIKELY TO (probable):\n   - AI is likely to become more advanced. (人工智能可能会变得更先进)\n   - It's likely that we'll all use electric cars. (我们可能都会使用电动汽车)\n\n3. BE UNLIKELY TO (improbable):\n   - People are unlikely to stop using phones. (人们不太可能停止使用手机)\n   - It's unlikely that we'll live on Mars soon. (我们不太可能很快住在火星)\n\n4. BE BOUND TO (certain):\n   - Technology is bound to change. (技术肯定会改变)\n   - Change is bound to happen. (改变肯定会发生)\n\n5. BE SURE/CERTAIN TO (definite):\n   - AI is sure to improve. (人工智能肯定会进步)\n   - It's certain that technology will advance. (技术肯定会进步)\n\nDegrees of certainty:\n- definitely/certainly/bound to (100%)\n- likely/probably (70-80%)\n- might/may/could (50%)\n- unlikely (20-30%)\n- definitely not/unlikely (0-10%)\n\nStructure:\n- will + verb: Technology will change.\n- be likely to + verb: Technology is likely to change.\n- be bound to + verb: Technology is bound to change.", tip: "will = general prediction, be likely to = probable, be bound to = certain. Use different expressions for different levels of certainty!" },
        dialogue: [
          { role: "A", text: "What do you think the future will be like?", cn: "你认为未来会是什么样？" },
          { role: "B", text: "I think AI is likely to become much more advanced.", cn: "我认为人工智能可能会变得更先进。" },
          { role: "A", text: "Will robots replace humans?", cn: "机器人会取代人类吗？" },
          { role: "B", text: "It's unlikely that robots will completely replace humans, but they'll do more jobs.", cn: "机器人不太可能完全取代人类，但它们会做更多工作。" },
          { role: "A", text: "What about space travel?", cn: "太空旅行呢？" },
          { role: "B", text: "It's possible that we'll travel to Mars in the future.", cn: "未来我们可能会去火星旅行。" },
        ],
        practice: [
          { type: "fill", question: "AI is ___ to become more advanced.", answer: "likely", hint: "可能" },
          { type: "choice", question: "'技术肯定会改变' 怎么说?", options: ["Technology will change.", "Technology is likely to change.", "Technology is bound to change.", "Technology might change."], answer: 2 },
          { type: "fill", question: "It's ___ that we'll live on Mars soon.", answer: "unlikely", hint: "不可能" },
          { type: "choice", question: "'机器人可能会做更多工作' 怎么说?", options: ["Robots will do more work.", "Robots are likely to do more work.", "Robots are bound to do more work.", "Robots definitely do more work."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Units 5-15: More topics ==========
  {
    unit: 5, unitTitle: "Crime and punishment", unitDesc: "Crime stories and legal vocabulary",
    lessons: [
      {
        id: 'la3-u5-l1', title: "Lesson 1 — Crime and justice", goal: "Learn to discuss crime and justice",
        vocab: [
          { word: "crime", meaning: "犯罪", example: "Crime is a serious problem.", audio: "crime" },
          { word: "criminal", meaning: "罪犯", example: "The criminal was arrested.", audio: "criminal" },
          { word: "murder", meaning: "谋杀", example: "He was charged with murder.", audio: "murder" },
          { word: "theft", meaning: "盗窃", example: "She reported a theft.", audio: "theft" },
          { word: "robbery", meaning: "抢劫", example: "There was a robbery at the bank.", audio: "robbery" },
          { word: "arrest", meaning: "逮捕", example: "The police arrested the suspect.", audio: "arrest" },
          { word: "suspect", meaning: "嫌疑人", example: "The suspect was questioned.", audio: "suspect" },
          { word: "witness", meaning: "证人", example: "The witness saw everything.", audio: "witness" },
          { word: "evidence", meaning: "证据", example: "There was no evidence.", audio: "evidence" },
          { word: "guilty", meaning: "有罪的", example: "He was found guilty.", audio: "guilty" },
          { word: "innocent", meaning: "无辜的", example: "She was innocent.", audio: "innocent" },
          { word: "sentence", meaning: "判决", example: "He was sentenced to 10 years.", audio: "sentence" },
        ],
        grammar: { title: "Modals of deduction: must, can't, might", content: "Use modals to make deductions about past and present:\n\n1. MUST (certain - positive):\n   - He must be guilty. (他肯定有罪)\n   - She must have stolen it. (她肯定偷了)\n\n2. CAN'T (certain - negative):\n   - He can't be guilty. (他不可能有罪)\n   - She can't have stolen it. (她不可能偷了)\n\n3. MIGHT/MAY/COULD (possible):\n   - He might be guilty. (他可能有罪)\n   - She might have stolen it. (她可能偷了)\n\n4. COULDN'T (impossible):\n   - He couldn't be guilty. (他不可能有罪)\n   - She couldn't have stolen it. (她不可能偷了)\n\nPresent deduction: modal + base verb\n- He must be at home. (他肯定在家)\n- She can't be serious. (她不可能认真)\n\nPast deduction: modal + have + past participle\n- He must have been at home. (他肯定在家过)\n- She can't have stolen it. (她不可能偷了)\n\nDegrees of certainty:\n- must/can't (90-100%)\n- might/may/could (30-50%)\n- couldn't (0-10%)\n\nExamples:\n- The lights are off. They must be out. (灯关着。他们肯定出去了)\n- He just ate. He can't be hungry. (他刚吃过。他不可能饿)\n- She might be late. (她可能迟到)", tip: "must = certain yes, can't = certain no, might = possible. For past: must have + pp!" },
        dialogue: [
          { role: "A", text: "What happened last night?", cn: "昨晚发生了什么？" },
          { role: "B", text: "There was a robbery at the bank. The suspect was arrested.", cn: "银行发生了抢劫。嫌疑人被逮捕了。" },
          { role: "A", text: "Is he guilty?", cn: "他有罪吗？" },
          { role: "B", text: "There's evidence against him. He must be guilty.", cn: "有对他不利的证据。他肯定有罪。" },
          { role: "A", text: "What about his alibi?", cn: "他的不在场证明呢？" },
          { role: "B", text: "He says he was at home, but he can't prove it.", cn: "他说他在家，但他无法证明。" },
        ],
        practice: [
          { type: "fill", question: "He ___ be guilty. There's evidence.", answer: "must", hint: "肯定" },
          { type: "choice", question: "'她不可能偷了' 怎么说?", options: ["She must have stolen it.", "She can't have stolen it.", "She might have stolen it.", "She should have stolen it."], answer: 1 },
          { type: "fill", question: "He ___ have been at home. (他可能在家)", answer: "might", hint: "可能" },
          { type: "choice", question: "'灯关着。他们肯定出去了' 怎么说?", options: ["The lights are off. They must be out.", "The lights are off. They can't be out.", "The lights are off. They might be out.", "The lights are off. They are out."], answer: 0 },
        ]
      },
    ]
  },
  // ========== Units 6-15: More topics ==========
  {
    unit: 6, unitTitle: "The environment", unitDesc: "Environmental issues and solutions",
    lessons: [
      {
        id: 'la3-u6-l1', title: "Lesson 1 — Saving the planet", goal: "Learn to discuss environmental issues",
        vocab: [
          { word: "environment", meaning: "环境", example: "We must protect the environment.", audio: "environment" },
          { word: "pollution", meaning: "污染", example: "Air pollution is a problem.", audio: "pollution" },
          { word: "climate change", meaning: "气候变化", example: "Climate change is real.", audio: "climate change" },
          { word: "global warming", meaning: "全球变暖", example: "Global warming is accelerating.", audio: "global warming" },
          { word: "recycle", meaning: "回收", example: "We should recycle more.", audio: "recycle" },
          { word: "renewable", meaning: "可再生的", example: "Solar energy is renewable.", audio: "renewable" },
          { word: "endangered", meaning: "濒危的", example: "Pandas are endangered.", audio: "endangered" },
          { word: "extinct", meaning: "灭绝的", example: "Dinosaurs are extinct.", audio: "extinct" },
          { word: "sustainable", meaning: "可持续的", example: "We need sustainable solutions.", audio: "sustainable" },
          { word: "conservation", meaning: "保护", example: "Wildlife conservation is important.", audio: "conservation" },
          { word: "deforestation", meaning: "砍伐森林", example: "Deforestation is a problem.", audio: "deforestation" },
          { word: "drought", meaning: "干旱", example: "There was a drought.", audio: "drought" },
        ],
        grammar: { title: "Conditionals: second and third", content: "Second and third conditionals for hypothetical situations:\n\n1. Second conditional (unreal present/future):\n   If + past simple, would + base verb\n   \n   - If I were rich, I would travel the world. (如果我有钱，我会环游世界)\n   - If she studied harder, she would pass. (如果她更努力学习，她会通过)\n   - If we recycled more, we would help the planet. (如果我们更多回收，我们会帮助地球)\n   \n   Use: imaginary situations in present/future\n   Note: Use 'were' for all persons in formal English\n   - If I were you, I would... (如果我是你，我会...)\n\n2. Third conditional (unreal past):\n   If + past perfect, would have + past participle\n   \n   - If I had studied, I would have passed. (如果我学习了，我就会通过)\n   - If she had recycled, she would have helped. (如果她回收了，她就会帮助了)\n   - If we had acted sooner, we would have prevented it. (如果我们早点行动，我们就会阻止了)\n   \n   Use: imaginary situations in the past (regrets)\n\nMixed conditional:\n- If + past perfect, would + base verb (past condition, present result)\n  If I had studied harder, I would have a better job now. (如果我当时更努力学习，我现在就会有更好的工作)\n\nVariations:\n- could/might instead of would:\n  If I had time, I could help you. (如果我有时间，我可以帮你)\n  If she had studied, she might have passed. (如果她学习了，她可能通过了)", tip: "Second: if + past, would + verb (unreal present). Third: if + past perfect, would have + pp (unreal past)" },
        dialogue: [
          { role: "A", text: "What would you do if you were the president?", cn: "如果你是总统，你会做什么？" },
          { role: "B", text: "If I were the president, I would invest in renewable energy.", cn: "如果我是总统，我会投资可再生能源。" },
          { role: "A", text: "What about climate change?", cn: "气候变化呢？" },
          { role: "B", text: "If we had acted sooner, we would have prevented some of the damage.", cn: "如果我们早点行动，我们就会阻止一些损害。" },
          { role: "A", text: "What can we do now?", cn: "我们现在能做什么？" },
          { role: "B", text: "If everyone recycled more, we would make a difference.", cn: "如果每个人更多回收，我们就会有所作为。" },
        ],
        practice: [
          { type: "fill", question: "If I ___ rich, I would travel.", answer: "were", hint: "第二条件句" },
          { type: "choice", question: "'如果我学习了，我就会通过' 怎么说?", options: ["If I study, I will pass.", "If I studied, I would pass.", "If I had studied, I would have passed.", "If I had studied, I will pass."], answer: 2 },
          { type: "fill", question: "If we ___ acted sooner, we would have prevented it.", answer: "had", hint: "第三条件句" },
          { type: "choice", question: "'如果我是你，我会...' 怎么说?", options: ["If I am you, I will...", "If I were you, I would...", "If I was you, I will...", "If I had been you, I would have..."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Units 7-15: More topics ==========
  {
    unit: 7, unitTitle: "Health and fitness", unitDesc: "Health issues and medical vocabulary",
    lessons: [
      {
        id: 'la3-u7-l1', title: "Lesson 1 — Staying healthy", goal: "Learn to discuss health and fitness",
        vocab: [
          { word: "health", meaning: "健康", example: "Health is wealth.", audio: "health" },
          { word: "fitness", meaning: "健身", example: "Fitness is important.", audio: "fitness" },
          { word: "diet", meaning: "饮食", example: "A balanced diet is essential.", audio: "diet" },
          { word: "exercise", meaning: "锻炼", example: "Regular exercise is good.", audio: "exercise" },
          { word: "symptom", meaning: "症状", example: "What are the symptoms?", audio: "symptom" },
          { word: "treatment", meaning: "治疗", example: "The treatment was effective.", audio: "treatment" },
          { word: "recovery", meaning: "康复", example: "His recovery was quick.", audio: "recovery" },
          { word: "prevent", meaning: "预防", example: "Prevention is better than cure.", audio: "prevent" },
          { word: "cure", meaning: "治愈", example: "There's no cure for the common cold.", audio: "cure" },
          { word: "infection", meaning: "感染", example: "The infection spread quickly.", audio: "infection" },
          { word: "vaccine", meaning: "疫苗", example: "The vaccine is effective.", audio: "vaccine" },
          { word: "immune", meaning: "免疫的", example: "The vaccine makes you immune.", audio: "immune" },
        ],
        grammar: { title: "Should/ought to/had better for advice", content: "Different ways to give advice:\n\n1. SHOULD (general advice):\n   - You should exercise more. (你应该多锻炼)\n   - You shouldn't eat too much sugar. (你不应该吃太多糖)\n\n2. OUGHT TO (moral obligation):\n   - You ought to eat more vegetables. (你应该多吃蔬菜)\n   - You ought not to smoke. (你不应该吸烟)\n   Note: 'ought to' is more formal than 'should'\n\n3. HAD BETTER (strong advice/warning):\n   - You'd better see a doctor. (你最好去看医生)\n   - You'd better not skip breakfast. (你最好不要跳过早餐)\n   Note: 'had better' implies a warning or negative consequence\n\n4. IT'S TIME (suggestion):\n   - It's time you started exercising. (是你开始锻炼的时候了)\n   - It's high time we took action. (是我们采取行动的时候了)\n\n5. WHY DON'T YOU / HOW ABOUT (suggestions):\n   - Why don't you try yoga? (你为什么不试试瑜伽？)\n   - How about going for a run? (去跑步怎么样？)\n\nDegrees of strength:\n- should/ought to (general advice)\n- had better (strong advice/warning)\n- must (obligation)\n\nExamples:\n- You should eat more fruit. (你应该多吃水果)\n- You ought to respect your elders. (你应该尊重长辈)\n- You'd better take an umbrella. (你最好带把伞)\n- It's time you went to bed. (是你上床睡觉的时候了)", tip: "should = advice, ought to = moral obligation, had better = warning. Use appropriately!" },
        dialogue: [
          { role: "A", text: "I don't feel well.", cn: "我感觉不舒服。" },
          { role: "B", text: "You should see a doctor.", cn: "你应该看医生。" },
          { role: "A", text: "I don't have time.", cn: "我没时间。" },
          { role: "B", text: "You'd better make time. Your health is important.", cn: "你最好抽出时间。你的健康很重要。" },
          { role: "A", text: "What do you suggest?", cn: "你建议什么？" },
          { role: "B", text: "Why don't you try exercising more and eating a balanced diet?", cn: "你为什么不试试多锻炼，吃均衡饮食？" },
        ],
        practice: [
          { type: "fill", question: "You ___ exercise more. (你应该多锻炼)", answer: "should", hint: "建议" },
          { type: "choice", question: "'你最好去看医生' 怎么说?", options: ["You should see a doctor.", "You ought to see a doctor.", "You'd better see a doctor.", "You must see a doctor."], answer: 2 },
          { type: "fill", question: "It's time you ___ exercising.", answer: "started", hint: "it's time + past" },
          { type: "choice", question: "'你为什么不试试瑜伽？' 怎么说?", options: ["Why don't you try yoga?", "Why not you try yoga?", "Why you don't try yoga?", "Why not try yoga?"], answer: 0 },
        ]
      },
    ]
  },
  // ========== Units 8-15: More topics ==========
  {
    unit: 8, unitTitle: "Work and careers", unitDesc: "Job interviews and career development",
    lessons: [
      {
        id: 'la3-u8-l1', title: "Lesson 1 — Job interviews", goal: "Learn to talk about work and careers",
        vocab: [
          { word: "career", meaning: "职业", example: "She has a successful career.", audio: "career" },
          { word: "interview", meaning: "面试", example: "I have a job interview.", audio: "interview" },
          { word: "qualification", meaning: "资格", example: "What qualifications do you have?", audio: "qualification" },
          { word: "experience", meaning: "经验", example: "I have 5 years of experience.", audio: "experience" },
          { word: "skill", meaning: "技能", example: "What skills do you have?", audio: "skill" },
          { word: "salary", meaning: "工资", example: "The salary is competitive.", audio: "salary" },
          { word: "promotion", meaning: "晋升", example: "She got a promotion.", audio: "promotion" },
          { word: "resign", meaning: "辞职", example: "He resigned last month.", audio: "resign" },
          { word: "apply", meaning: "申请", example: "I applied for the job.", audio: "apply" },
          { word: "hire", meaning: "雇佣", example: "They hired a new manager.", audio: "hire" },
          { word: "fire", meaning: "解雇", example: "He was fired.", audio: "fire" },
          { word: "retire", meaning: "退休", example: "She retired at 60.", audio: "retire" },
        ],
        grammar: { title: "Used to / would / be used to / get used to", content: "Different ways to talk about past habits and adaptation:\n\n1. USED TO (past habits/states):\n   - I used to smoke. (我过去吸烟)\n   - She used to live in London. (她过去住在伦敦)\n   - We used to play here. (我们过去在这里玩)\n   \n   Negative: didn't use to\n   - I didn't use to like coffee. (我过去不喜欢咖啡)\n   \n   Questions: Did + subject + use to?\n   - Did you use to work here? (你过去在这里工作吗？)\n\n2. WOULD (past repeated actions):\n   - When I was young, I would play in the park every day. (当我年轻时，我每天都在公园玩)\n   - She would always bring cookies. (她总是带饼干)\n   Note: 'would' is only for actions, not states\n   Wrong: I would live in London. (live is a state)\n   Right: I used to live in London.\n\n3. BE USED TO (accustomed to):\n   - I am used to waking up early. (我习惯早起)\n   - She is used to hard work. (她习惯辛苦工作)\n   - He isn't used to the cold. (他不习惯寒冷)\n\n4. GET USED TO (become accustomed to):\n   - I'm getting used to the new job. (我正在适应新工作)\n   - She got used to the weather. (她适应了天气)\n   - You'll get used to it. (你会习惯的)\n\nStructure:\n- used to + base verb: I used to smoke.\n- would + base verb: I would play every day.\n- be used to + noun/-ing: I'm used to waking up early.\n- get used to + noun/-ing: I'm getting used to it.", tip: "used to = past habit (actions and states), would = past repeated actions only, be used to = accustomed to" },
        dialogue: [
          { role: "Interviewer", text: "Tell me about your experience.", cn: "告诉我你的经验。" },
          { role: "Candidate", text: "I used to work as a manager for 5 years.", cn: "我过去当过5年经理。" },
          { role: "Interviewer", text: "What skills do you have?", cn: "你有什么技能？" },
          { role: "Candidate", text: "I'm used to working in teams and meeting deadlines.", cn: "我习惯团队合作和按时完成。" },
          { role: "Interviewer", text: "Why did you leave your last job?", cn: "你为什么离开上一份工作？" },
          { role: "Candidate", text: "I decided to change careers. I wanted a new challenge.", cn: "我决定换职业。我想要新的挑战。" },
        ],
        practice: [
          { type: "fill", question: "I ___ smoke, but I quit. (我过去吸烟，但戒了)", answer: "used to", hint: "过去习惯" },
          { type: "choice", question: "'我习惯早起' 怎么说?", options: ["I used to wake up early.", "I would wake up early.", "I'm used to waking up early.", "I got used to wake up early."], answer: 2 },
          { type: "fill", question: "When I was young, I ___ play in the park.", answer: "would", hint: "过去重复动作" },
          { type: "choice", question: "'我正在适应新工作' 怎么说?", options: ["I used to the new job.", "I would the new job.", "I'm getting used to the new job.", "I'm used to the new job."], answer: 2 },
        ]
      },
    ]
  },
  // ========== Units 9-15: More topics ==========
  {
    unit: 9, unitTitle: "Education", unitDesc: "Learning and teaching methods",
    lessons: [
      {
        id: 'la3-u9-l1', title: "Lesson 1 — Learning styles", goal: "Learn to discuss education and learning",
        vocab: [
          { word: "education", meaning: "教育", example: "Education is important.", audio: "education" },
          { word: "learning", meaning: "学习", example: "Learning is a lifelong process.", audio: "learning" },
          { word: "teaching", meaning: "教学", example: "Teaching is a noble profession.", audio: "teaching" },
          { word: "curriculum", meaning: "课程", example: "The curriculum is comprehensive.", audio: "curriculum" },
          { word: "assessment", meaning: "评估", example: "Assessment is ongoing.", audio: "assessment" },
          { word: "motivation", meaning: "动力", example: "Motivation is key to success.", audio: "motivation" },
          { word: "discipline", meaning: "纪律", example: "Discipline is important.", audio: "discipline" },
          { word: "creative", meaning: "创造性的", example: "Creative thinking is valuable.", audio: "creative" },
          { word: "critical", meaning: "批判性的", example: "Critical thinking is essential.", audio: "critical" },
          { word: "collaborative", meaning: "合作的", example: "Collaborative learning is effective.", audio: "collaborative" },
          { word: "independent", meaning: "独立的", example: "Independent study is important.", audio: "independent" },
          { word: "lifelong", meaning: "终身的", example: "Lifelong learning is necessary.", audio: "lifelong" },
        ],
        grammar: { title: "Wish clauses: wish + past simple / past perfect", content: "Use 'wish' to express regrets about present or past:\n\n1. Wish + past simple (present regrets):\n   - I wish I were taller. (我希望我更高)\n   - She wishes she had more time. (她希望有更多时间)\n   - I wish I spoke French. (我希望我会说法语)\n   \n   Note: Use 'were' for all persons in formal English\n   - I wish I were rich. (我希望我有钱)\n\n2. Wish + past perfect (past regrets):\n   - I wish I had studied harder. (我希望我学习更努力)\n   - She wishes she had taken the job. (她希望她接受了那份工作)\n   - I wish I hadn't said that. (我希望我没说过那话)\n\n3. Wish + would (annoying habits):\n   - I wish you would stop smoking. (我希望你停止吸烟)\n   - I wish it wouldn't rain. (我希望别下雨)\n   - She wishes he would listen. (她希望他能听)\n\nIf only (stronger than wish):\n- If only I were taller! (要是我更高就好了！)\n- If only I had studied harder! (要是我学习更努力就好了！)\n- If only you would listen! (要是你能听就好了！)\n\nStructure:\n- wish + past simple (present)\n- wish + past perfect (past)\n- wish + would (habit/annoyance)\n\nExamples:\n- I wish I could fly. (我希望我能飞)\n- She wishes she had more friends. (她希望有更多朋友)\n- I wish I hadn't eaten so much. (我希望我没吃那么多)", tip: "wish + past simple (present regret), wish + past perfect (past regret), wish + would (annoying habit)" },
        dialogue: [
          { role: "A", text: "What do you wish about your education?", cn: "你对你的教育有什么遗憾？" },
          { role: "B", text: "I wish I had studied harder at school.", cn: "我希望我在学校学习更努力。" },
          { role: "A", text: "Why?", cn: "为什么？" },
          { role: "B", text: "Because I wish I could speak another language fluently.", cn: "因为我希望我能流利地说另一种语言。" },
          { role: "A", text: "What about now?", cn: "现在呢？" },
          { role: "B", text: "I wish I had more time to study. If only I could study all day!", cn: "我希望有更多时间学习。要是我能整天学习就好了！" },
        ],
        practice: [
          { type: "fill", question: "I wish I ___ taller. (我希望我更高)", answer: "were", hint: "wish + past" },
          { type: "choice", question: "'我希望我学习更努力' 怎么说?", options: ["I wish I study harder.", "I wish I studied harder.", "I wish I had studied harder.", "I wish I would study harder."], answer: 2 },
          { type: "fill", question: "I wish you ___ stop smoking.", answer: "would", hint: "wish + would" },
          { type: "choice", question: "'要是我更高就好了！' 怎么说?", options: ["I wish I were taller!", "If only I were taller!", "I wish I am taller!", "If only I am taller!"], answer: 1 },
        ]
      },
    ]
  },
  // ========== Units 10-15: More topics ==========
  {
    unit: 10, unitTitle: "Relationships", unitDesc: "Family, friends, and social interactions",
    lessons: [
      {
        id: 'la3-u10-l1', title: "Lesson 1 — Family and friends", goal: "Learn to talk about relationships",
        vocab: [
          { word: "relationship", meaning: "关系", example: "They have a good relationship.", audio: "relationship" },
          { word: "friendship", meaning: "友谊", example: "Friendship is important.", audio: "friendship" },
          { word: "trust", meaning: "信任", example: "Trust is essential.", audio: "trust" },
          { word: "respect", meaning: "尊重", example: "Mutual respect is key.", audio: "respect" },
          { word: "support", meaning: "支持", example: "Family support is valuable.", audio: "support" },
          { word: "conflict", meaning: "冲突", example: "Conflicts happen in all relationships.", audio: "conflict" },
          { word: "compromise", meaning: "妥协", example: "Compromise is necessary.", audio: "compromise" },
          { word: "communicate", meaning: "沟通", example: "Good communication is essential.", audio: "communicate" },
          { word: "understand", meaning: "理解", example: "Understanding is important.", audio: "understand" },
          { word: "forgive", meaning: "原谅", example: "Learn to forgive.", audio: "forgive" },
          { word: "appreciate", meaning: "感激", example: "I appreciate your help.", audio: "appreciate" },
          { word: "loyal", meaning: "忠诚的", example: "A loyal friend is valuable.", audio: "loyal" },
        ],
        grammar: { title: "Relative clauses: defining and non-defining", content: "Relative clauses give information about a noun:\n\n1. Defining relative clauses (essential information):\n   - The man who called is my dad. (打电话的那个男人是我爸爸)\n   - The book that I read was good. (我读的那本书很好)\n   - The city where I live is big. (我住的城市很大)\n   \n   No commas. 'That' can replace 'who' or 'which'.\n\n2. Non-defining relative clauses (extra information):\n   - My brother, who lives in London, is a doctor. (我哥哥住在伦敦，是医生)\n   - Paris, which is the capital of France, is beautiful. (巴黎是法国首都，很美)\n   - My mum, who is a teacher, retired last year. (我妈妈是老师，去年退休了)\n   \n   With commas. 'That' CANNOT be used.\n\n3. Whose (possession):\n   - The girl whose dog is lost is sad. (狗丢了的那个女孩很伤心)\n   - My friend, whose father is a doctor, helped me. (我朋友帮了我，他爸爸是医生)\n\n4. Prepositions in relative clauses:\n   - The person to whom I spoke... (formal)\n   - The person who I spoke to... (informal)\n   - The house in which I grew up... (formal)\n   - The house where I grew up... (informal)\n\nOmitting the relative pronoun:\n- When it's the object: The book (that) I read was good.\n- Cannot omit when it's the subject: The man who called... (NOT The man called...)", tip: "Defining: essential info, no commas, 'that' OK. Non-defining: extra info, commas, 'that' NOT OK." },
        dialogue: [
          { role: "A", text: "Tell me about your best friend.", cn: "告诉我你最好的朋友。" },
          { role: "B", text: "My best friend, who I've known since childhood, is very loyal.", cn: "我最好的朋友，我从小就认识，非常忠诚。" },
          { role: "A", text: "What do you value in a friendship?", cn: "你在友谊中看重什么？" },
          { role: "B", text: "Trust and respect, which are essential for any relationship.", cn: "信任和尊重，这对任何关系都至关重要。" },
          { role: "A", text: "How do you handle conflicts?", cn: "你如何处理冲突？" },
          { role: "B", text: "I believe in open communication, which helps resolve issues.", cn: "我相信开放沟通，这有助于解决问题。" },
        ],
        practice: [
          { type: "fill", question: "The man ___ called is my dad.", answer: "who", hint: "关系代词（人）" },
          { type: "choice", question: "'我哥哥，住在伦敦，是医生' 怎么说?", options: ["My brother who lives in London is a doctor.", "My brother, who lives in London, is a doctor.", "My brother, that lives in London, is a doctor.", "My brother which lives in London is a doctor."], answer: 1 },
          { type: "fill", question: "The girl ___ dog is lost is sad.", answer: "whose", hint: "所有格" },
          { type: "choice", question: "哪个是正确的?", options: ["The book who I read was good.", "The book whose I read was good.", "The book that I read was good.", "The book where I read was good."], answer: 2 },
        ]
      },
    ]
  },
  // ========== Units 11-15: More topics ==========
  {
    unit: 11, unitTitle: "Culture and traditions", unitDesc: "Cultural diversity and customs",
    lessons: [
      {
        id: 'la3-u11-l1', title: "Lesson 1 — Cultural differences", goal: "Learn to discuss culture and traditions",
        vocab: [
          { word: "culture", meaning: "文化", example: "Culture shapes our identity.", audio: "culture" },
          { word: "tradition", meaning: "传统", example: "Traditions are important.", audio: "tradition" },
          { word: "custom", meaning: "习俗", example: "Every culture has customs.", audio: "custom" },
          { word: "heritage", meaning: "遗产", example: "Cultural heritage is valuable.", audio: "heritage" },
          { word: "diversity", meaning: "多样性", example: "Cultural diversity is enriching.", audio: "diversity" },
          { word: "identity", meaning: "身份", example: "Cultural identity is important.", audio: "identity" },
          { word: "celebrate", meaning: "庆祝", example: "We celebrate festivals.", audio: "celebrate" },
          { word: "festival", meaning: "节日", example: "The festival is colorful.", audio: "festival" },
          { word: "ceremony", meaning: "仪式", example: "The ceremony was beautiful.", audio: "ceremony" },
          { word: "ritual", meaning: "仪式", example: "Rituals are part of culture.", audio: "ritual" },
          { word: "diverse", meaning: "多样的", example: "We live in a diverse society.", audio: "diverse" },
          { word: "preserve", meaning: "保护", example: "We must preserve our heritage.", audio: "preserve" },
        ],
        grammar: { title: "Inversion for emphasis", content: "Inversion changes the normal word order for emphasis:\n\n1. Negative adverbs at the beginning:\n   - Never have I seen such beauty. (我从未见过如此美丽)\n   - Rarely do we get such opportunities. (我们很少得到这样的机会)\n   - Seldom has she been so happy. (她很少这么高兴)\n   - Not only did he win, but he also broke the record. (他不仅赢了，还打破了记录)\n\n2. 'Only' expressions:\n   - Only after the war did he return home. (直到战后他才回家)\n   - Only when you grow up will you understand. (只有当你长大你才会明白)\n   - Only by working hard can you succeed. (只有努力工作你才能成功)\n\n3. 'So/Such... that':\n   - So beautiful was the view that we stayed all day. (风景太美了，我们待了一整天)\n   - Such was the crowd that we couldn't move. (人群如此拥挤，我们动不了)\n\n4. Conditional inversion (formal):\n   - Had I known, I would have helped. (If I had known...)\n   - Were I you, I would accept. (If I were you...)\n   - Should you need help, call me. (If you should need help...)\n\n5. Place expressions (literary):\n   - Here comes the bus. (公交车来了)\n   - There goes the bell. (铃响了)\n   - On the hill stood a castle. (山上矗立着一座城堡)\n\nNote: Inversion is formal and mainly used in writing or speeches.", tip: "Inversion = auxiliary + subject + verb. Use for emphasis in formal English!" },
        dialogue: [
          { role: "A", text: "What do you think about cultural diversity?", cn: "你怎么看文化多样性？" },
          { role: "B", text: "Not only is it enriching, but it also makes society stronger.", cn: "它不仅丰富，还使社会更强大。" },
          { role: "A", text: "How important are traditions?", cn: "传统有多重要？" },
          { role: "B", text: "Rarely do I meet someone who doesn't value their traditions.", cn: "我很少遇到不重视传统的人。" },
          { role: "A", text: "Should we preserve all customs?", cn: "我们应该保护所有习俗吗？" },
          { role: "B", text: "Only by understanding our heritage can we appreciate diversity.", cn: "只有理解我们的遗产，我们才能欣赏多样性。" },
        ],
        practice: [
          { type: "fill", question: "Never ___ I seen such beauty.", answer: "have", hint: "倒装" },
          { type: "choice", question: "'他不仅赢了，还打破了记录' 怎么说?", options: ["He not only won, but he also broke the record.", "Not only did he win, but he also broke the record.", "Not only he won, but he also broke the record.", "He not only did win, but he also broke the record."], answer: 1 },
          { type: "fill", question: "Only by working hard ___ you succeed.", answer: "can", hint: "倒装" },
          { type: "choice", question: "'如果我早知道，我就会帮忙了' (正式) 怎么说?", options: ["If I had known, I would have helped.", "Had I known, I would have helped.", "If I knew, I would help.", "Had I know, I would have help."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Units 12-15: More topics ==========
  {
    unit: 12, unitTitle: "The arts", unitDesc: "Art, music, and creative expression",
    lessons: [
      {
        id: 'la3-u12-l1', title: "Lesson 1 — Art and expression", goal: "Learn to discuss art and creativity",
        vocab: [
          { word: "art", meaning: "艺术", example: "Art is a form of expression.", audio: "art" },
          { word: "creativity", meaning: "创造力", example: "Creativity is essential.", audio: "creativity" },
          { word: "inspiration", meaning: "灵感", example: "Inspiration comes from within.", audio: "inspiration" },
          { word: "masterpiece", meaning: "杰作", example: "It's a masterpiece.", audio: "masterpiece" },
          { word: "exhibition", meaning: "展览", example: "The exhibition was amazing.", audio: "exhibition" },
          { word: "performance", meaning: "表演", example: "The performance was excellent.", audio: "performance" },
          { word: "audience", meaning: "观众", example: "The audience loved it.", audio: "audience" },
          { word: "critic", meaning: "评论家", example: "The critic praised the work.", audio: "critic" },
          { word: "contemporary", meaning: "当代的", example: "Contemporary art is diverse.", audio: "contemporary" },
          { word: "abstract", meaning: "抽象的", example: "Abstract art is interesting.", audio: "abstract" },
          { word: "realistic", meaning: "现实的", example: "The painting is realistic.", audio: "realistic" },
          { word: "express", meaning: "表达", example: "Art expresses emotions.", audio: "express" },
        ],
        grammar: { title: "Cleft sentences for emphasis", content: "Cleft sentences emphasize a particular part of a sentence:\n\n1. It-cleft (emphasizing one element):\n   - It was Shakespeare who wrote Hamlet. (是莎士比亚写了《哈姆雷特》)\n   - It's creativity that makes art special. (是创造力使艺术特别)\n   - It was in Paris that they met. (他们是在巴黎相遇的)\n   \n   Structure: It + be + emphasized part + who/that/when/where...\n\n2. What-cleft (emphasizing the action/object):\n   - What I need is a break. (我需要的是休息)\n   - What she loves is painting. (她热爱的是绘画)\n   - What we need is more funding. (我们需要的是更多资金)\n   \n   Structure: What + subject + verb + be + emphasized part\n\n3. All-cleft (emphasizing 'only'):\n   - All I want is peace. (我想要的只是和平)\n   - All you need is love. (你需要的只是爱)\n   - All he did was cry. (他只是哭)\n   \n   Structure: All + subject + verb + be + emphasized part\n\n4. Where/When-cleft:\n   - Where we need to go is Paris. (我们需要去的是巴黎)\n   - When we should leave is tomorrow. (我们应该离开的是明天)\n\nUses:\n- To correct: It was MONDAY, not Tuesday.\n- To emphasize: What I REALLY need is a holiday.\n- To contrast: It's not the money, it's the principle.\n\nNote: Cleft sentences are more emphatic than normal sentences.", tip: "It-cleft: It was X who/that... What-cleft: What I need is... Use for strong emphasis!" },
        dialogue: [
          { role: "A", text: "What makes a great artist?", cn: "是什么造就了伟大的艺术家？" },
          { role: "B", text: "It's creativity that makes a great artist.", cn: "是创造力造就了伟大的艺术家。" },
          { role: "A", text: "What do artists need?", cn: "艺术家需要什么？" },
          { role: "B", text: "What artists need is inspiration and freedom to express themselves.", cn: "艺术家需要的是灵感和表达自我的自由。" },
          { role: "A", text: "Who inspired Picasso?", cn: "谁启发了毕加索？" },
          { role: "B", text: "It was African art that inspired Picasso's later works.", cn: "是非洲艺术启发了毕加索后期的作品。" },
        ],
        practice: [
          { type: "fill", question: "It ___ Shakespeare who wrote Hamlet.", answer: "was", hint: "it-cleft" },
          { type: "choice", question: "'我需要的是休息' 怎么说?", options: ["I need a break.", "What I need is a break.", "That I need is a break.", "Need is what I a break."], answer: 1 },
          { type: "fill", question: "All I want ___ peace.", answer: "is", hint: "all-cleft" },
          { type: "choice", question: "'是创造力使艺术特别' 怎么说?", options: ["Creativity makes art special.", "It's creativity that makes art special.", "What creativity makes art special.", "Creativity is what makes art special."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Units 13-15: More topics ==========
  {
    unit: 13, unitTitle: "Global issues", unitDesc: "World problems and solutions",
    lessons: [
      {
        id: 'la3-u13-l1', title: "Lesson 1 — A better world", goal: "Learn to discuss global challenges",
        vocab: [
          { word: "poverty", meaning: "贫困", example: "Poverty is a global issue.", audio: "poverty" },
          { word: "inequality", meaning: "不平等", example: "Inequality is growing.", audio: "inequality" },
          { word: "hunger", meaning: "饥饿", example: "Hunger affects millions.", audio: "hunger" },
          { word: "refugee", meaning: "难民", example: "Refugees need help.", audio: "refugee" },
          { word: "conflict", meaning: "冲突", example: "Conflict causes suffering.", audio: "conflict" },
          { word: "sustainable", meaning: "可持续的", example: "Sustainable development is key.", audio: "sustainable" },
          { word: "cooperation", meaning: "合作", example: "International cooperation is essential.", audio: "cooperation" },
          { word: "solution", meaning: "解决方案", example: "We need solutions.", audio: "solution" },
          { word: "challenge", meaning: "挑战", example: "Global challenges require action.", audio: "challenge" },
          { word: "responsibility", meaning: "责任", example: "We all have a responsibility.", audio: "responsibility" },
          { word: "humanitarian", meaning: "人道主义的", example: "Humanitarian aid is needed.", audio: "humanitarian" },
          { word: "development", meaning: "发展", example: "Economic development is important.", audio: "development" },
        ],
        grammar: { title: "Subjunctive and formal structures", content: "Formal English uses special structures:\n\n1. Subjunctive (mandates/suggestions):\n   - It is essential that he be present. (他必须出席)\n   - It is important that she study hard. (她必须努力学习)\n   - I suggest that he take the job. (我建议他接受这份工作)\n   - The committee recommended that the policy be changed. (委员会建议改变政策)\n   \n   Note: Use base verb (not 'is/are/has') after 'that' in formal English\n\n2. Should + base verb (British formal):\n   - It is essential that he should be present.\n   - I suggest that he should take the job.\n\n3. Were to (hypothetical):\n   - If he were to resign, we would need a replacement. (如果他辞职，我们需要替代)\n   - Were he to resign, we would need a replacement. (倒装形式)\n\n4. Had + subject + past participle (conditional inversion):\n   - Had I known, I would have helped. (如果我早知道，我就会帮忙)\n   - Had she studied, she would have passed. (如果她学习了，她就会通过)\n\n5. Be + subject (concession):\n   - Be that as it may, we must proceed. (尽管如此，我们必须继续)\n   - Be it ever so humble, there's no place like home. (无论多么简陋，没有比家更好的地方)\n\nNote: These structures are mainly used in formal writing and speeches.", tip: "Subjunctive: It is essential that he BE present. Use base verb in formal English!" },
        dialogue: [
          { role: "A", text: "What solutions do you propose for global poverty?", cn: "你对全球贫困有什么解决方案？" },
          { role: "B", text: "It is essential that international cooperation be strengthened.", cn: "必须加强国际合作。" },
          { role: "A", text: "What about education?", cn: "教育呢？" },
          { role: "B", text: "I suggest that more resources be allocated to education.", cn: "我建议分配更多资源给教育。" },
          { role: "A", text: "What if governments refuse?", cn: "如果政府拒绝呢？" },
          { role: "B", text: "Were they to refuse, we would need grassroots solutions.", cn: "如果他们拒绝，我们需要基层解决方案。" },
        ],
        practice: [
          { type: "fill", question: "It is essential that he ___ present.", answer: "be", hint: "虚拟语气" },
          { type: "choice", question: "'我建议他接受这份工作' (正式) 怎么说?", options: ["I suggest that he takes the job.", "I suggest that he take the job.", "I suggest that he taking the job.", "I suggest that he took the job."], answer: 1 },
          { type: "fill", question: "Had I known, I ___ have helped.", answer: "would", hint: "条件倒装" },
          { type: "choice", question: "'如果他辞职，我们需要替代' (正式) 怎么说?", options: ["If he resigns, we need a replacement.", "If he were to resign, we would need a replacement.", "If he resign, we need a replacement.", "If he was to resign, we need a replacement."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Units 14-15: Review ==========
  {
    unit: 14, unitTitle: "Future of work", unitDesc: "Automation and the changing workplace",
    lessons: [
      {
        id: 'la3-u14-l1', title: "Lesson 1 — The digital workplace", goal: "Learn to discuss the future of work",
        vocab: [
          { word: "automation", meaning: "自动化", example: "Automation is changing work.", audio: "automation" },
          { word: "artificial intelligence", meaning: "人工智能", example: "AI is transforming industries.", audio: "artificial intelligence" },
          { word: "remote", meaning: "远程的", example: "Remote work is popular.", audio: "remote" },
          { word: "flexible", meaning: "灵活的", example: "Flexible hours are preferred.", audio: "flexible" },
          { word: "collaborate", meaning: "合作", example: "We collaborate online.", audio: "collaborate" },
          { word: "innovative", meaning: "创新的", example: "Innovative solutions are needed.", audio: "innovative" },
          { word: "efficiency", meaning: "效率", example: "Efficiency is important.", audio: "efficiency" },
          { word: "productivity", meaning: "生产力", example: "Productivity has increased.", audio: "productivity" },
          { word: "skill", meaning: "技能", example: "New skills are required.", audio: "skill" },
          { word: "adapt", meaning: "适应", example: "We must adapt to change.", audio: "adapt" },
          { word: "retrain", meaning: "再培训", example: "Workers need to retrain.", audio: "retrain" },
          { word: "obsolete", meaning: "过时的", example: "Some jobs are becoming obsolete.", audio: "obsolete" },
        ],
        grammar: { title: "Future perfect and future continuous", content: "Advanced future tenses:\n\n1. Future perfect (will have + past participle):\n   - By 2030, AI will have transformed many industries. (到2030年，AI将已经改变许多行业)\n   - By next year, we will have completed the project. (到明年，我们将已经完成项目)\n   - By the time you arrive, I will have finished cooking. (到你到达时，我将已经做好饭)\n   \n   Use: actions completed before a future time\n\n2. Future continuous (will be + -ing):\n   - This time tomorrow, I will be flying to Paris. (明天这个时候，我将正在飞往巴黎)\n   - In 2030, we will be using more renewable energy. (在2030年，我们将正在使用更多可再生能源)\n   - Don't call at 8. I will be having dinner. (8点别打电话。我将正在吃晚饭)\n   \n   Use: actions in progress at a future time\n\n3. Future perfect continuous (will have been + -ing):\n   - By 2030, I will have been working here for 20 years. (到2030年，我将在这里工作20年了)\n   - By next month, she will have been studying for 5 years. (到下个月，她将已经学习5年了)\n   \n   Use: duration up to a future time\n\nTime expressions:\n- by 2030, by next year, by the time...\n- this time tomorrow, at this time next week\n- for 20 years, for a decade\n\nExamples:\n- By 2050, scientists will have discovered a cure for cancer. (到2050年，科学家将已经发现癌症的治疗方法)\n- This time next year, I will be living in a new city. (明年这个时候，我将正在住在新城市)", tip: "Future perfect: will have + pp (completed before future). Future continuous: will be + -ing (in progress at future)" },
        dialogue: [
          { role: "A", text: "What will the workplace be like in 2030?", cn: "2030年的工作场所会是什么样？" },
          { role: "B", text: "By 2030, AI will have transformed many industries.", cn: "到2030年，AI将已经改变许多行业。" },
          { role: "A", text: "What will we be doing differently?", cn: "我们会有什么不同？" },
          { role: "B", text: "This time next decade, we will be collaborating more with AI.", cn: "到下一个十年这个时候，我们将正在与AI更多合作。" },
          { role: "A", text: "Will remote work continue?", cn: "远程工作会继续吗？" },
          { role: "B", text: "Yes, by 2030, most companies will have adopted flexible work policies.", cn: "是的，到2030年，大多数公司将已经采用灵活的工作政策。" },
        ],
        practice: [
          { type: "fill", question: "By 2030, AI ___ have transformed many industries.", answer: "will", hint: "将来完成时" },
          { type: "choice", question: "'明天这个时候我将正在飞往巴黎' 怎么说?", options: ["Tomorrow I will fly to Paris.", "This time tomorrow, I will be flying to Paris.", "This time tomorrow, I will fly to Paris.", "This time tomorrow, I will have flown to Paris."], answer: 1 },
          { type: "fill", question: "By next year, we ___ have completed the project.", answer: "will", hint: "将来完成时" },
          { type: "choice", question: "'到2030年，我将在这里工作20年了' 怎么说?", options: ["By 2030, I will work here for 20 years.", "By 2030, I will be working here for 20 years.", "By 2030, I will have been working here for 20 years.", "By 2030, I have been working here for 20 years."], answer: 2 },
        ]
      },
    ]
  },
  // ========== Unit 15: Review ==========
  {
    unit: 15, unitTitle: "Review", unitDesc: "Review and consolidation of Book 3",
    lessons: [
      {
        id: 'la3-u15-l1', title: "Lesson 1 — Looking back", goal: "Review all grammar and vocabulary from Book 3",
        vocab: [
          { word: "progress", meaning: "进步", example: "You've made excellent progress.", audio: "progress" },
          { word: "achieve", meaning: "达到", example: "You've achieved a lot.", audio: "achieve" },
          { word: "confident", meaning: "自信的", example: "You should feel confident.", audio: "confident" },
          { word: "fluent", meaning: "流利的", example: "You're becoming fluent.", audio: "fluent" },
          { word: "proficient", meaning: "熟练的", example: "You're now proficient.", audio: "proficient" },
          { word: "master", meaning: "掌握", example: "You've mastered the basics.", audio: "master" },
          { word: "challenge", meaning: "挑战", example: "Book 4 will be more challenging.", audio: "challenge" },
          { word: "reward", meaning: "回报", example: "The effort is rewarding.", audio: "reward" },
          { word: "persevere", meaning: "坚持", example: "Persevere and you'll succeed.", audio: "persevere" },
          { word: "accomplish", meaning: "完成", example: "You've accomplished a lot.", audio: "accomplish" },
          { word: "advance", meaning: "进步", example: "You've advanced to B1.", audio: "advance" },
          { word: "ready", meaning: "准备好的", example: "You're ready for the next level.", audio: "ready" },
        ],
        grammar: { title: "Book 3 Grammar Summary", content: "Book 3 covers:\n\n1. Past perfect:\n   - When I arrived, the film had started.\n\n2. Narrative tenses:\n   - Past simple + continuous + perfect for storytelling\n\n3. Passive voice in all tenses:\n   - News is broadcast. / The article was written.\n\n4. Future predictions:\n   - will, be likely to, be bound to\n\n5. Modals of deduction:\n   - must, can't, might + have + pp\n\n6. Second and third conditionals:\n   - If I were rich, I would travel.\n   - If I had studied, I would have passed.\n\n7. Used to / would / be used to / get used to:\n   - I used to smoke. / I'm used to waking up early.\n\n8. Wish clauses:\n   - I wish I were taller. / I wish I had studied harder.\n\n9. Relative clauses (defining/non-defining):\n   - The man who called... / My brother, who lives in London...\n\n10. Inversion:\n    - Never have I seen... / Only after... did he...\n\n11. Cleft sentences:\n    - It was Shakespeare who... / What I need is...\n\n12. Subjunctive:\n    - It is essential that he be present.\n\n13. Future perfect and continuous:\n    - By 2030, AI will have transformed...\n    - This time tomorrow, I will be flying...", tip: "Book 3 is advanced! You've mastered B1 level. Ready for Book 4 (B2)!" },
        dialogue: [
          { role: "Teacher", text: "Today we're reviewing Book 3. What have we learned?", cn: "今天我们复习第3册。我们学了什么？" },
          { role: "Student", text: "We've learned past perfect, conditionals, and inversion.", cn: "我们学了过去完成时、条件句和倒装句。" },
          { role: "Teacher", text: "Excellent! Can you give me an example?", cn: "太棒了！你能举个例子吗？" },
          { role: "Student", text: "If I had studied harder, I would have passed the exam.", cn: "如果我学习更努力，我就会通过考试。" },
          { role: "Teacher", text: "Perfect! And what about inversion?", cn: "完美！倒装句呢？" },
          { role: "Student", text: "Never have I seen such a beautiful performance.", cn: "我从未见过如此精彩的表演。" },
        ],
        practice: [
          { type: "fill", question: "When I arrived, the film ___ already started.", answer: "had", hint: "过去完成时" },
          { type: "choice", question: "'如果我学习更努力，我就会通过' 怎么说?", options: ["If I study harder, I will pass.", "If I studied harder, I would pass.", "If I had studied harder, I would have passed.", "If I had studied harder, I will pass."], answer: 2 },
          { type: "fill", question: "Never ___ I seen such beauty.", answer: "have", hint: "倒装" },
          { type: "choice", question: "'到2030年，AI将已经改变许多行业' 怎么说?", options: ["By 2030, AI will change many industries.", "By 2030, AI will be changing many industries.", "By 2030, AI will have transformed many industries.", "By 2030, AI has transformed many industries."], answer: 2 },
        ]
      },
    ]
  },
];
