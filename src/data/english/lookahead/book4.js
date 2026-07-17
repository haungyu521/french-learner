/**
 * Look Ahead 4 — 走遍英国 第4册
 * 级别：Upper-Intermediate (B2) | 15个单元 | 高级英语
 * 新增语法：虚拟语气深入、倒装句、强调句等
 */
export const lookAhead4Data = [
  // ========== Unit 1: Identity and belonging ==========
  {
    unit: 1, unitTitle: "Identity and belonging", unitDesc: "Personal identity and social groups",
    lessons: [
      {
        id: 'la4-u1-l1', title: "Lesson 1 — Who am I?", goal: "Learn to discuss identity and belonging",
        vocab: [
          { word: "identity", meaning: "身份", example: "Identity is complex.", audio: "identity" },
          { word: "belonging", meaning: "归属感", example: "A sense of belonging is important.", audio: "belonging" },
          { word: "heritage", meaning: "遗产", example: "Cultural heritage shapes us.", audio: "heritage" },
          { word: "diversity", meaning: "多样性", example: "Diversity enriches society.", audio: "diversity" },
          { word: "prejudice", meaning: "偏见", example: "Prejudice must be challenged.", audio: "prejudice" },
          { word: "discrimination", meaning: "歧视", example: "Discrimination is unacceptable.", audio: "discrimination" },
          { word: "stereotype", meaning: "刻板印象", example: "Stereotypes are misleading.", audio: "stereotype" },
          { word: "inclusive", meaning: "包容的", example: "We need inclusive communities.", audio: "inclusive" },
          { word: "marginalized", meaning: "边缘化的", example: "Marginalized groups need support.", audio: "marginalized" },
          { word: "empower", meaning: "赋权", example: "Education empowers people.", audio: "empower" },
          { word: "resilience", meaning: "韧性", example: "Resilience is key to success.", audio: "resilience" },
          { word: "authentic", meaning: "真实的", example: "Be authentic.", audio: "authentic" },
        ],
        grammar: { title: "Advanced relative clauses", content: "Advanced uses of relative clauses:\n\n1. Non-defining with quantifiers:\n   - Some of the students, most of whom passed, celebrated. (一些学生，大多数通过了，庆祝了)\n   - The books, many of which were old, were donated. (这些书，很多都很旧，被捐赠了)\n\n2. Preposition + whom/which:\n   - The person to whom I spoke was helpful. (我与之交谈的人很乐于助人)\n   - The house in which I grew up was small. (我长大的房子很小)\n\n3. Sentential relative clauses:\n   - He passed the exam, which surprised everyone. (他通过了考试，这让每个人都很惊讶)\n   - She's moving abroad, which means we'll see less of each other. (她要搬到国外，这意味着我们见面的机会更少)\n\n4. Reduced relative clauses:\n   - The man standing there is my dad. (站在那里的那个男人是我爸爸)\n   - The book written by Shakespeare is famous. (莎士比亚写的书很有名)\n\n5. Double relative clauses:\n   - The book that I read which was written by Shakespeare is famous. (我读的那本莎士比亚写的书很有名)\n\nNote: 'That' cannot be used in non-defining clauses or after prepositions.", tip: "Advanced relative clauses add sophistication to your writing. Use them in essays and formal speech!" },
        dialogue: [
          { role: "A", text: "How do you define your identity?", cn: "你如何定义你的身份？" },
          { role: "B", text: "My identity, which is shaped by my heritage, is complex.", cn: "我的身份，由我的遗产塑造，很复杂。" },
          { role: "A", text: "What challenges do marginalized groups face?", cn: "边缘化群体面临什么挑战？" },
          { role: "B", text: "They face prejudice, many of which stems from stereotypes.", cn: "他们面临偏见，很多源于刻板印象。" },
          { role: "A", text: "How can we create inclusive communities?", cn: "我们如何创建包容性社区？" },
          { role: "B", text: "Education, which empowers people, is key.", cn: "教育，能赋权于人，是关键。" },
        ],
        practice: [
          { type: "fill", question: "The person ___ whom I spoke was helpful.", answer: "to", hint: "介词 + whom" },
          { type: "choice", question: "'他通过了考试，这让每个人都很惊讶' 怎么说?", options: ["He passed the exam, that surprised everyone.", "He passed the exam, which surprised everyone.", "He passed the exam, who surprised everyone.", "He passed the exam, what surprised everyone."], answer: 1 },
          { type: "fill", question: "Some students, most ___ ___ passed, celebrated.", answer: "of whom", hint: "量词 + whom" },
          { type: "choice", question: "'站在那里的那个男人是我爸爸' 怎么说?", options: ["The man who standing there is my dad.", "The man standing there is my dad.", "The man stands there is my dad.", "The man is standing there is my dad."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Units 2-15: More topics ==========
  {
    unit: 2, unitTitle: "The power of language", unitDesc: "Linguistics and communication",
    lessons: [
      {
        id: 'la4-u2-l1', title: "Lesson 1 — How language shapes thought", goal: "Learn to discuss language and communication",
        vocab: [
          { word: "linguistics", meaning: "语言学", example: "Linguistics is fascinating.", audio: "linguistics" },
          { word: "bilingual", meaning: "双语的", example: "She is bilingual.", audio: "bilingual" },
          { word: "dialect", meaning: "方言", example: "Every region has a dialect.", audio: "dialect" },
          { word: "accent", meaning: "口音", example: "He has a British accent.", audio: "accent" },
          { word: "fluency", meaning: "流利", example: "Fluency takes time.", audio: "fluency" },
          { word: "nuance", meaning: "细微差别", example: "Language has nuances.", audio: "nuance" },
          { word: "rhetoric", meaning: "修辞", example: "Rhetoric is persuasive.", audio: "rhetoric" },
          { word: "metaphor", meaning: "隐喻", example: "Life is a journey is a metaphor.", audio: "metaphor" },
          { word: "idiom", meaning: "习语", example: "Every language has idioms.", audio: "idiom" },
          { word: "eloquent", meaning: "雄辩的", example: "She is an eloquent speaker.", audio: "eloquent" },
          { word: "articulate", meaning: "表达清晰的", example: "He is articulate.", audio: "articulate" },
          { word: "persuade", meaning: "说服", example: "She persuaded me to go.", audio: "persuade" },
        ],
        grammar: { title: "Participle clauses", content: "Participle clauses make writing more concise:\n\n1. Present participle (-ing) clauses:\n   - Walking down the street, I met an old friend. (= When I was walking...)\n   - Feeling tired, she went to bed early. (= Because she felt tired...)\n   - The man standing there is my dad. (= The man who is standing there...)\n\n2. Past participle (-ed/3rd form) clauses:\n   - Written in 1900, the book is still popular. (= Because it was written...)\n   - Shocked by the news, she sat down. (= Because she was shocked...)\n   - The book written by Shakespeare is famous. (= The book which was written by...)\n\n3. Perfect participle (having + past participle):\n   - Having finished my work, I went home. (= After I had finished...)\n   - Having been warned, he was prepared. (= Because he had been warned...)\n\n4. Passive participle clauses:\n   - Built in 1900, the house is historic. (= Which was built...)\n   - Known for his talent, the artist is famous. (= Because he is known...)\n\nFunctions:\n- Time: Walking home, I saw a rainbow. (= When I was walking...)\n- Reason: Feeling sick, she stayed home. (= Because she felt sick...)\n- Condition: Working hard, you'll succeed. (= If you work hard...)\n- Concession: Knowing the risks, he proceeded. (= Although he knew...)\n\nNote: The subject of the participle clause must be the same as the main clause!", tip: "Participle clauses make your writing more sophisticated. Use them in essays and formal writing!" },
        dialogue: [
          { role: "A", text: "How does language shape thought?", cn: "语言如何塑造思想？" },
          { role: "B", text: "Speaking multiple languages, you see the world differently.", cn: "说多种语言，你会以不同方式看世界。" },
          { role: "A", text: "What about idioms?", cn: "习语呢？" },
          { role: "B", text: "Idioms, which are unique to each language, reveal cultural nuances.", cn: "习语，每种语言都独特，揭示文化细微差别。" },
          { role: "A", text: "How can we become more eloquent?", cn: "我们如何变得更雄辩？" },
          { role: "B", text: "Having practiced regularly, you'll become more articulate.", cn: "经常练习，你会变得更表达清晰。" },
        ],
        practice: [
          { type: "fill", question: "___ down the street, I met an old friend.", answer: "Walking", hint: "现在分词" },
          { type: "choice", question: "'因为感到累，她早早上床了' 怎么说?", options: ["Because she felt tired, she went to bed early.", "Feeling tired, she went to bed early.", "Felt tired, she went to bed early.", "She felt tired, she went to bed early."], answer: 1 },
          { type: "fill", question: "___ finished my work, I went home.", answer: "Having", hint: "完成分词" },
          { type: "choice", question: "'建于1900年，这座房子很有历史意义' 怎么说?", options: ["Built in 1900, the house is historic.", "Building in 1900, the house is historic.", "The house built in 1900 is historic.", "Both A and C are correct."], answer: 3 },
        ]
      },
    ]
  },
  // ========== Units 3-15: More topics ==========
  {
    unit: 3, unitTitle: "Ethics and morality", unitDesc: "Moral dilemmas and ethical decisions",
    lessons: [
      {
        id: 'la4-u3-l1', title: "Lesson 1 — Moral choices", goal: "Learn to discuss ethics and moral dilemmas",
        vocab: [
          { word: "ethics", meaning: "伦理", example: "Ethics guide our decisions.", audio: "ethics" },
          { word: "morality", meaning: "道德", example: "Morality is subjective.", audio: "morality" },
          { word: "dilemma", meaning: "困境", example: "It's a moral dilemma.", audio: "dilemma" },
          { word: "conscience", meaning: "良心", example: "My conscience is clear.", audio: "conscience" },
          { word: "integrity", meaning: "正直", example: "Integrity is important.", audio: "integrity" },
          { word: "compromise", meaning: "妥协", example: "Don't compromise your values.", audio: "compromise" },
          { word: "justify", meaning: "证明...正当", example: "Can you justify your actions?", audio: "justify" },
          { word: "consequence", meaning: "后果", example: "Every action has consequences.", audio: "consequence" },
          { word: "responsible", meaning: "负责任的", example: "We are all responsible.", audio: "responsible" },
          { word: "accountable", meaning: "有责任的", example: "Leaders must be accountable.", audio: "accountable" },
          { word: "altruistic", meaning: "利他的", example: "Altruistic acts inspire others.", audio: "altruistic" },
          { word: "selfish", meaning: "自私的", example: "Don't be selfish.", audio: "selfish" },
        ],
        grammar: { title: "Mixed conditionals", content: "Mixed conditionals combine second and third conditionals:\n\n1. Past condition → Present result:\n   If + past perfect, would + base verb\n   \n   - If I had studied harder, I would have a better job now. (如果我当时学习更努力，我现在就会有更好的工作)\n   - If she had taken that opportunity, she would be successful now. (如果她当时抓住了那个机会，她现在就会成功)\n   - If they had invested wisely, they would be rich now. (如果他们当时投资明智，现在就会富有)\n\n2. Present condition → Past result:\n   If + past simple, would have + past participle\n   \n   - If I were more confident, I would have applied for the job. (如果我更自信，我就会申请那份工作了)\n   - If she were braver, she would have spoken up. (如果她更勇敢，她就会说出来了)\n   - If he weren't so lazy, he would have finished the project. (如果他不那么懒，他就会完成项目了)\n\n3. Alternative forms:\n   - But for your help, I would have failed. (= If it hadn't been for...)\n   - Without your advice, I would have made a mistake. (= If I hadn't had...)\n\n4. Wishes about the past:\n   - I wish I had studied harder. (我希望我当时学习更努力)\n   - If only I had taken that chance. (要是我当时抓住那个机会就好了)\n\nUses:\n- Regrets about the past affecting the present\n- Imaginary present situations affecting past actions\n- Hypothetical scenarios across time\n\nNote: Mixed conditionals are advanced and used in formal speech and writing.", tip: "Mixed conditionals: past condition → present result (if + pp, would + verb). Present condition → past result (if + past, would have + pp)" },
        dialogue: [
          { role: "A", text: "What would you do if you faced a moral dilemma?", cn: "如果你面临道德困境，你会怎么做？" },
          { role: "B", text: "If I had more experience, I would make better decisions.", cn: "如果我有更多经验，我就会做出更好的决定。" },
          { role: "A", text: "What about past mistakes?", cn: "过去的错误呢？" },
          { role: "B", text: "If I had acted differently, things would be better now.", cn: "如果我当时表现不同，现在会更好。" },
          { role: "A", text: "How do you justify difficult choices?", cn: "你如何证明困难的选择是正当的？" },
          { role: "B", text: "I try to act with integrity, even if the consequences are difficult.", cn: "我尽量正直行事，即使后果困难。" },
        ],
        practice: [
          { type: "fill", question: "If I had studied harder, I ___ have a better job now.", answer: "would", hint: "混合条件句" },
          { type: "choice", question: "'如果我更自信，我就会申请那份工作了' 怎么说?", options: ["If I am more confident, I will apply.", "If I were more confident, I would apply.", "If I were more confident, I would have applied.", "If I had been more confident, I would apply."], answer: 2 },
          { type: "fill", question: "If she had taken that opportunity, she ___ be successful now.", answer: "would", hint: "混合条件句" },
          { type: "choice", question: "'要不是你的帮助，我就会失败了' 怎么说?", options: ["If you didn't help, I would fail.", "But for your help, I would have failed.", "Without your help, I fail.", "If you hadn't helped, I fail."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Units 4-15: More topics ==========
  {
    unit: 4, unitTitle: "Innovation and creativity", unitDesc: "Creative thinking and problem-solving",
    lessons: [
      {
        id: 'la4-u4-l1', title: "Lesson 1 — Thinking outside the box", goal: "Learn to discuss innovation and creativity",
        vocab: [
          { word: "innovation", meaning: "创新", example: "Innovation drives progress.", audio: "innovation" },
          { word: "creativity", meaning: "创造力", example: "Creativity is essential.", audio: "creativity" },
          { word: "breakthrough", meaning: "突破", example: "It was a major breakthrough.", audio: "breakthrough" },
          { word: "paradigm", meaning: "范式", example: "A paradigm shift occurred.", audio: "paradigm" },
          { word: "disruptive", meaning: "颠覆性的", example: "Disruptive technology changes industries.", audio: "disruptive" },
          { word: "entrepreneur", meaning: "企业家", example: "She is a successful entrepreneur.", audio: "entrepreneur" },
          { word: "venture", meaning: "风险投资", example: "The venture was risky.", audio: "venture" },
          { word: "prototype", meaning: "原型", example: "The prototype was tested.", audio: "prototype" },
          { word: "iterate", meaning: "迭代", example: "We iterate to improve.", audio: "iterate" },
          { word: "collaborate", meaning: "合作", example: "We collaborate to innovate.", audio: "collaborate" },
          { word: "pioneer", meaning: "先驱", example: "She is a pioneer in the field.", audio: "pioneer" },
          { word: "visionary", meaning: "有远见的", example: "He is a visionary leader.", audio: "visionary" },
        ],
        grammar: { title: "Nominalization", content: "Nominalization turns verbs/adjectives into nouns for formal writing:\n\n1. Verb → Noun:\n   - decide → decision: The decision was made.\n   - develop → development: The development was rapid.\n   - analyze → analysis: The analysis showed...\n   - conclude → conclusion: The conclusion is clear.\n   - investigate → investigation: The investigation revealed...\n\n2. Adjective → Noun:\n   - important → importance: The importance is clear.\n   - different → difference: There is a difference.\n   - aware → awareness: Raising awareness is key.\n   - confident → confidence: Confidence is important.\n\n3. Benefits of nominalization:\n   - Makes writing more formal and academic\n   - Allows for more complex sentence structures\n   - Emphasizes concepts rather than actions\n\n4. Examples:\n   - Verb: The government decided to act. → Noun: The government's decision to act was wise.\n   - Verb: Scientists analyzed the data. → Noun: The analysis of the data revealed...\n   - Adjective: People are aware of the problem. → Noun: Public awareness of the problem is growing.\n\n5. Common nominalizations:\n   - achieve → achievement\n   - create → creation\n   - educate → education\n   - innovate → innovation\n   - motivate → motivation\n\nNote: Nominalization is common in academic and formal writing.", tip: "Nominalization makes your writing more formal and academic. Use it in essays and reports!" },
        dialogue: [
          { role: "A", text: "What drives innovation?", cn: "什么推动创新？" },
          { role: "B", text: "The development of new ideas requires creativity.", cn: "新想法的发展需要创造力。" },
          { role: "A", text: "How do entrepreneurs succeed?", cn: "企业家如何成功？" },
          { role: "B", text: "Their ability to collaborate and iterate is crucial.", cn: "他们合作和迭代的能力至关重要。" },
          { role: "A", text: "What about failure?", cn: "失败呢？" },
          { role: "B", text: "The analysis of failures often leads to breakthroughs.", cn: "对失败的分析往往带来突破。" },
        ],
        practice: [
          { type: "fill", question: "The ___ was made. (decision/decide)", answer: "decision", hint: "名词化" },
          { type: "choice", question: "'数据的分析显示了...' 怎么说?", options: ["Scientists analyzed the data and showed...", "The analysis of the data revealed...", "Analyzing the data showed...", "The data analysis shows..."], answer: 1 },
          { type: "fill", question: "Public ___ of the problem is growing.", answer: "awareness", hint: "名词化" },
          { type: "choice", question: "'政府的行动决定是明智的' (正式) 怎么说?", options: ["The government decided to act wisely.", "The government's decision to act was wise.", "The government wisely decided to act.", "The government's acting decision was wise."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Units 5-15: More topics ==========
  {
    unit: 5, unitTitle: "The mind and behavior", unitDesc: "Psychology and human behavior",
    lessons: [
      {
        id: 'la4-u5-l1', title: "Lesson 1 — Understanding behavior", goal: "Learn to discuss psychology and behavior",
        vocab: [
          { word: "psychology", meaning: "心理学", example: "Psychology studies the mind.", audio: "psychology" },
          { word: "behavior", meaning: "行为", example: "Behavior is influenced by many factors.", audio: "behavior" },
          { word: "cognitive", meaning: "认知的", example: "Cognitive processes are complex.", audio: "cognitive" },
          { word: "emotion", meaning: "情绪", example: "Emotions influence decisions.", audio: "emotion" },
          { word: "personality", meaning: "个性", example: "Personality shapes behavior.", audio: "personality" },
          { word: "motivation", meaning: "动机", example: "Motivation drives action.", audio: "motivation" },
          { word: "perception", meaning: "感知", example: "Perception varies among individuals.", audio: "perception" },
          { word: "conscious", meaning: "有意识的", example: "We are conscious beings.", audio: "conscious" },
          { word: "subconscious", meaning: "潜意识的", example: "The subconscious influences us.", audio: "subconscious" },
          { word: "instinct", meaning: "本能", example: "Instinct guides survival.", audio: "instinct" },
          { word: "habit", meaning: "习惯", example: "Habits are hard to break.", audio: "habit" },
          { word: "addiction", meaning: "成瘾", example: "Addiction is a serious issue.", audio: "addiction" },
        ],
        grammar: { title: "Cleft sentences and emphasis", content: "Advanced emphasis structures:\n\n1. It-cleft (emphasizing one element):\n   - It was creativity that made the difference. (是创造力起了作用)\n   - It's in times of crisis that we discover our strengths. (正是在危机时刻，我们发现了我们的优势)\n   - It was through hard work that she succeeded. (正是通过努力工作，她成功了)\n\n2. What-cleft (emphasizing the action/object):\n   - What we need is a new approach. (我们需要的是新方法)\n   - What surprised me was her reaction. (让我惊讶的是她的反应)\n   - What matters most is how we respond. (最重要的是我们如何回应)\n\n3. All-cleft (emphasizing 'only'):\n   - All I want is the truth. (我想要的只是真相)\n   - All you need is love. (你需要的只是爱)\n   - All he did was complain. (他只是抱怨)\n\n4. The thing is that...:\n   - The thing is that we don't have enough time. (问题是我们没有足够的时间)\n   - The thing is that she doesn't care. (问题是她不在乎)\n\n5. Emphatic structures with 'do':\n   - I do believe you're right. (我确实相信你是对的)\n   - She does work hard. (她确实工作努力)\n   - They did try their best. (他们确实尽了最大努力)\n\n6. Inversion for emphasis:\n   - Never have I seen such dedication. (我从未见过如此奉献)\n   - Not only did she win, but she also broke the record. (她不仅赢了，还打破了记录)\n   - Only by understanding can we solve the problem. (只有理解我们才能解决问题)\n\nNote: These structures are used for strong emphasis in formal speech and writing.", tip: "Use cleft sentences and inversion to add emphasis and sophistication to your English!" },
        dialogue: [
          { role: "A", text: "What drives human behavior?", cn: "什么驱动人类行为？" },
          { role: "B", text: "It's motivation that drives most behavior.", cn: "是动机驱动了大多数行为。" },
          { role: "A", text: "What about habits?", cn: "习惯呢？" },
          { role: "B", text: "What makes habits hard to break is their subconscious nature.", cn: "使习惯难以打破的是它们的潜意识本质。" },
          { role: "A", text: "How can we change behavior?", cn: "我们如何改变行为？" },
          { role: "B", text: "All we need is awareness and commitment.", cn: "我们需要的只是意识和承诺。" },
        ],
        practice: [
          { type: "fill", question: "It ___ creativity that made the difference.", answer: "was", hint: "it-cleft" },
          { type: "choice", question: "'我们需要的是新方法' 怎么说?", options: ["We need a new approach.", "What we need is a new approach.", "That we need is a new approach.", "Need is what we a new approach."], answer: 1 },
          { type: "fill", question: "All I want ___ the truth.", answer: "is", hint: "all-cleft" },
          { type: "choice", question: "'我确实相信你是对的' 怎么说?", options: ["I believe you're right.", "I do believe you're right.", "I am believing you're right.", "I have believed you're right."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Units 6-15: More topics ==========
  {
    unit: 6, unitTitle: "Globalization", unitDesc: "Global interconnectedness and its effects",
    lessons: [
      {
        id: 'la4-u6-l1', title: "Lesson 1 — A connected world", goal: "Learn to discuss globalization",
        vocab: [
          { word: "globalization", meaning: "全球化", example: "Globalization connects us.", audio: "globalization" },
          { word: "interconnected", meaning: "相互联系的", example: "We live in an interconnected world.", audio: "interconnected" },
          { word: "multinational", meaning: "跨国的", example: "Multinational companies dominate.", audio: "multinational" },
          { word: "outsourcing", meaning: "外包", example: "Outsourcing reduces costs.", audio: "outsourcing" },
          { word: "immigration", meaning: "移民", example: "Immigration is a complex issue.", audio: "immigration" },
          { word: "cultural exchange", meaning: "文化交流", example: "Cultural exchange enriches societies.", audio: "cultural exchange" },
          { word: "homogenization", meaning: "同质化", example: "Globalization leads to homogenization.", audio: "homogenization" },
          { word: "preservation", meaning: "保护", example: "Preservation of culture is important.", audio: "preservation" },
          { word: "sustainability", meaning: "可持续性", example: "Sustainability is key.", audio: "sustainability" },
          { word: "inequality", meaning: "不平等", example: "Global inequality persists.", audio: "inequality" },
          { word: "interdependence", meaning: "相互依存", example: "Interdependence is a reality.", audio: "interdependence" },
          { word: "sovereignty", meaning: "主权", example: "National sovereignty is debated.", audio: "sovereignty" },
        ],
        grammar: { title: "Advanced passive structures", content: "Advanced uses of the passive voice:\n\n1. Impersonal passive:\n   - It is believed that... (人们相信...)\n   - It is said that... (据说...)\n   - It is expected that... (预计...)\n   - It has been shown that... (已经证明...)\n\n2. Passive with reporting verbs:\n   - He is said to be rich. (据说他很富有)\n   - She is believed to have left. (据信她已经离开了)\n   - The project is expected to be completed soon. (预计项目将很快完成)\n\n3. Causative passive:\n   - I had my hair cut. (我理了发)\n   - She got her car repaired. (她修了车)\n   - We need to get the documents signed. (我们需要签署文件)\n\n4. Double passive:\n   - He is said to have been arrested. (据说他被逮捕了)\n   - The project is believed to have been completed. (据信项目已经完成)\n\n5. Passive with prepositions:\n   - The book was written by Shakespeare. (书是莎士比亚写的)\n   - The city is known for its architecture. (城市以其建筑闻名)\n   - He was accused of theft. (他被指控盗窃)\n\n6. Passive infinitives and gerunds:\n   - The house needs to be cleaned. (房子需要打扫)\n   - I hate being kept waiting. (我讨厌被让等待)\n   - The problem requires being addressed. (问题需要被解决)\n\nNote: Advanced passive structures are common in academic and formal writing.", tip: "Advanced passive structures add formality and objectivity to your writing. Use them in essays!" },
        dialogue: [
          { role: "A", text: "How does globalization affect us?", cn: "全球化如何影响我们？" },
          { role: "B", text: "It is believed that globalization has both positive and negative effects.", cn: "人们相信全球化既有积极影响也有消极影响。" },
          { role: "A", text: "What about cultural exchange?", cn: "文化交流呢？" },
          { role: "B", text: "Cultural exchange is said to enrich societies.", cn: "据说文化交流丰富社会。" },
          { role: "A", text: "What challenges does globalization create?", cn: "全球化创造什么挑战？" },
          { role: "B", text: "Inequality is expected to persist without intervention.", cn: "预计不平等将持续，除非干预。" },
        ],
        practice: [
          { type: "fill", question: "It ___ believed that globalization connects us.", answer: "is", hint: "非人称被动" },
          { type: "choice", question: "'据说他很富有' 怎么说?", options: ["He says to be rich.", "He is said to be rich.", "He said to be rich.", "He saying to be rich."], answer: 1 },
          { type: "fill", question: "The project is expected ___ be completed soon.", answer: "to", hint: "被动不定式" },
          { type: "choice", question: "'据信她已经离开了' 怎么说?", options: ["She believes to have left.", "She is believed to have left.", "She believed to have left.", "She believing to have left."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Units 7-15: More topics ==========
  {
    unit: 7, unitTitle: "Justice and law", unitDesc: "Legal systems and social justice",
    lessons: [
      {
        id: 'la4-u7-l1', title: "Lesson 1 — The rule of law", goal: "Learn to discuss justice and legal systems",
        vocab: [
          { word: "justice", meaning: "正义", example: "Justice must be served.", audio: "justice" },
          { word: "legislation", meaning: "立法", example: "Legislation protects rights.", audio: "legislation" },
          { word: "regulation", meaning: "法规", example: "Regulations ensure safety.", audio: "regulation" },
          { word: "compliance", meaning: "合规", example: "Compliance is mandatory.", audio: "compliance" },
          { word: "litigation", meaning: "诉讼", example: "Litigation is expensive.", audio: "litigation" },
          { word: "verdict", meaning: "裁决", example: "The verdict was guilty.", audio: "verdict" },
          { word: "appeal", meaning: "上诉", example: "They filed an appeal.", audio: "appeal" },
          { word: "sentence", meaning: "判决", example: "The sentence was 10 years.", audio: "sentence" },
          { word: "rehabilitation", meaning: "康复", example: "Rehabilitation is important.", audio: "rehabilitation" },
          { word: "deterrence", meaning: "威慑", example: "Punishment provides deterrence.", audio: "deterrence" },
          { word: "equity", meaning: "公平", example: "Equity is essential.", audio: "equity" },
          { word: "advocacy", meaning: "倡导", example: "Advocacy for justice continues.", audio: "advocacy" },
        ],
        grammar: { title: "Subjunctive mood in formal English", content: "The subjunctive mood is used in formal English:\n\n1. After 'it is essential/important/necessary that':\n   - It is essential that he be present. (他必须出席)\n   - It is important that she study hard. (她必须努力学习)\n   - It is necessary that the policy be changed. (政策必须改变)\n\n2. After verbs of suggestion/demand/insistence:\n   - I suggest that he take the job. (我建议他接受这份工作)\n   - The committee recommended that the rules be revised. (委员会建议修改规则)\n   - She demanded that he apologize. (她要求他道歉)\n\n3. After 'wish' (present wishes):\n   - I wish I were taller. (我希望我更高)\n   - She wishes she had more time. (她希望有更多时间)\n\n4. After 'if only' (hypothetical):\n   - If only I were rich! (要是我有钱就好了！)\n   - If only she were here! (要是她在这里就好了！)\n\n5. After 'as if/as though' (unreal comparisons):\n   - He acts as if he were the boss. (他表现得好像他是老板)\n   - She talks as though she knew everything. (她说话好像她什么都知道)\n\n6. Fixed expressions:\n   - God save the Queen! (上帝保佑女王！)\n   - Be that as it may... (尽管如此...)\n   - Heaven forbid! (千万别！)\n\nNote: In British English, 'should' is often used instead of the subjunctive:\n- It is essential that he should be present.\n- I suggest that he should take the job.", tip: "Subjunctive: Use base verb after 'it is essential that' and verbs of suggestion. Formal English!" },
        dialogue: [
          { role: "A", text: "What makes a just legal system?", cn: "什么使法律系统公正？" },
          { role: "B", text: "It is essential that justice be served equally.", cn: "正义必须平等地得到伸张。" },
          { role: "A", text: "How should laws be made?", cn: "法律应该如何制定？" },
          { role: "B", text: "I suggest that legislation reflect public needs.", cn: "我建议立法反映公众需求。" },
          { role: "A", text: "What about punishment?", cn: "惩罚呢？" },
          { role: "B", text: "It is important that rehabilitation be prioritized over punishment.", cn: "康复应该优先于惩罚。" },
        ],
        practice: [
          { type: "fill", question: "It is essential that he ___ present.", answer: "be", hint: "虚拟语气" },
          { type: "choice", question: "'我建议他接受这份工作' (正式) 怎么说?", options: ["I suggest that he takes the job.", "I suggest that he take the job.", "I suggest that he taking the job.", "I suggest that he took the job."], answer: 1 },
          { type: "fill", question: "I wish I ___ taller.", answer: "were", hint: "虚拟语气" },
          { type: "choice", question: "'他表现得好像他是老板' 怎么说?", options: ["He acts as if he is the boss.", "He acts as if he were the boss.", "He acts as if he was the boss.", "He acts as if he be the boss."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Units 8-15: More topics ==========
  {
    unit: 8, unitTitle: "The digital age", unitDesc: "Technology and society",
    lessons: [
      {
        id: 'la4-u8-l1', title: "Lesson 1 — Living online", goal: "Learn to discuss the digital age",
        vocab: [
          { word: "digital", meaning: "数字的", example: "We live in a digital age.", audio: "digital" },
          { word: "cybersecurity", meaning: "网络安全", example: "Cybersecurity is crucial.", audio: "cybersecurity" },
          { word: "privacy", meaning: "隐私", example: "Privacy is a right.", audio: "privacy" },
          { word: "surveillance", meaning: "监控", example: "Surveillance is increasing.", audio: "surveillance" },
          { word: "algorithm", meaning: "算法", example: "Algorithms shape our experience.", audio: "algorithm" },
          { word: "artificial intelligence", meaning: "人工智能", example: "AI is transforming society.", audio: "artificial intelligence" },
          { word: "automation", meaning: "自动化", example: "Automation changes work.", audio: "automation" },
          { word: "virtual reality", meaning: "虚拟现实", example: "VR is immersive.", audio: "virtual reality" },
          { word: "social media", meaning: "社交媒体", example: "Social media connects us.", audio: "social media" },
          { word: "misinformation", meaning: "错误信息", example: "Misinformation spreads fast.", audio: "misinformation" },
          { word: "addiction", meaning: "成瘾", example: "Digital addiction is real.", audio: "addiction" },
          { word: "disconnect", meaning: "断开", example: "We need to disconnect sometimes.", audio: "disconnect" },
        ],
        grammar: { title: "Future in the past", content: "Expressing past predictions about the future:\n\n1. Would + base verb:\n   - He said he would help. (他说他会帮忙)\n   - She thought she would pass. (她认为她会通过)\n   - They believed they would win. (他们相信他们会赢)\n\n2. Was/were going to + base verb:\n   - I was going to call you. (我本来要给你打电话)\n   - She was going to study medicine. (她本来要学医)\n   - They were going to move abroad. (他们本来要搬到国外)\n\n3. Was/were + -ing (future arrangement in the past):\n   - I was meeting him the next day. (我第二天要见他)\n   - She was starting a new job. (她就要开始新工作)\n\n4. Was/were to + base verb (formal):\n   - He was to become president. (他后来成了总统)\n   - She was to discover the truth. (她后来发现了真相)\n\n5. Uses:\n   - Reported speech: She said, \"I will help.\" → She said she would help.\n   - Unfulfilled plans: I was going to study, but I changed my mind.\n   - Historical narrative: In 1999, he was to become famous.\n\n6. Perfect forms:\n   - I had thought he would come. (我原以为他会来)\n   - She had expected to win. (她原以为会赢)\n\nNote: 'Would' and 'was/were going to' are the most common forms.", tip: "Future in the past: would + verb (reported speech), was/were going to + verb (unfulfilled plans)" },
        dialogue: [
          { role: "A", text: "How has the digital age changed us?", cn: "数字时代如何改变了我们？" },
          { role: "B", text: "Experts predicted that AI would transform society.", cn: "专家预测AI会改变社会。" },
          { role: "A", text: "What about privacy?", cn: "隐私呢？" },
          { role: "B", text: "Privacy advocates had warned that surveillance would increase.", cn: "隐私倡导者曾警告监控会增加。" },
          { role: "A", text: "What were people going to do?", cn: "人们打算做什么？" },
          { role: "B", text: "Many were going to demand better protection, but change was slow.", cn: "很多人打算要求更好的保护，但变化很慢。" },
        ],
        practice: [
          { type: "fill", question: "He said he ___ help.", answer: "would", hint: "过去将来时" },
          { type: "choice", question: "'我本来要给你打电话' 怎么说?", options: ["I will call you.", "I was going to call you.", "I had called you.", "I would call you."], answer: 1 },
          { type: "fill", question: "She thought she ___ pass.", answer: "would", hint: "过去将来时" },
          { type: "choice", question: "'他后来成了总统' 怎么说?", options: ["He became president.", "He was to become president.", "He would become president.", "He had become president."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Units 9-15: More topics ==========
  {
    unit: 9, unitTitle: "Artificial intelligence", unitDesc: "AI and its impact on humanity",
    lessons: [
      {
        id: 'la4-u9-l1', title: "Lesson 1 — The AI revolution", goal: "Learn to discuss AI and its implications",
        vocab: [
          { word: "artificial intelligence", meaning: "人工智能", example: "AI is advancing rapidly.", audio: "artificial intelligence" },
          { word: "machine learning", meaning: "机器学习", example: "Machine learning is powerful.", audio: "machine learning" },
          { word: "neural network", meaning: "神经网络", example: "Neural networks mimic the brain.", audio: "neural network" },
          { word: "algorithm", meaning: "算法", example: "Algorithms process data.", audio: "algorithm" },
          { word: "automation", meaning: "自动化", example: "Automation replaces jobs.", audio: "automation" },
          { word: "ethical", meaning: "伦理的", example: "Ethical concerns arise.", audio: "ethical" },
          { word: "bias", meaning: "偏见", example: "AI can have bias.", audio: "bias" },
          { word: "transparency", meaning: "透明度", example: "Transparency is needed.", audio: "transparency" },
          { word: "autonomous", meaning: "自主的", example: "Autonomous vehicles are coming.", audio: "autonomous" },
          { word: "singularity", meaning: "奇点", example: "The singularity is approaching.", audio: "singularity" },
          { word: "existential", meaning: "存在的", example: "Existential risks must be considered.", audio: "existential" },
          { word: "beneficial", meaning: "有益的", example: "AI can be beneficial.", audio: "beneficial" },
        ],
        grammar: { title: "Advanced inversion structures", content: "Inversion for emphasis and formality:\n\n1. Negative adverbials at the beginning:\n   - Never have I seen such dedication. (我从未见过如此奉献)\n   - Rarely does one encounter such brilliance. (一个人很少遇到如此才华)\n   - Seldom has technology advanced so quickly. (技术很少如此快速发展)\n   - Not only did she win, but she also broke the record. (她不仅赢了，还打破了记录)\n\n2. 'Only' expressions:\n   - Only after the war did peace return. (直到战后和平才回归)\n   - Only when you understand can you help. (只有当你理解你才能帮助)\n   - Only by working together can we succeed. (只有共同努力我们才能成功)\n\n3. Conditional inversion (formal):\n   - Had I known, I would have helped. (= If I had known...)\n   - Were I you, I would accept. (= If I were you...)\n   - Should you need help, call me. (= If you should need help...)\n\n4. Place/direction expressions (literary):\n   - Here comes the bus. (公交车来了)\n   - There goes the bell. (铃响了)\n   - On the hill stood a castle. (山上矗立着一座城堡)\n   - Into the room walked a stranger. (一个陌生人走进了房间)\n\n5. So/Such... that:\n   - So powerful is AI that it can transform industries. (AI如此强大，能改变行业)\n   - Such was the impact that society changed. (影响如此之大，社会改变了)\n\n6. Nor/Neither for agreement:\n   - Nor do I agree. (我也不同意)\n   - Neither can we ignore the risks. (我们也不能忽视风险)\n\nNote: Inversion is mainly used in formal writing and speeches.", tip: "Advanced inversion adds emphasis and formality. Use in essays for sophistication!" },
        dialogue: [
          { role: "A", text: "How is AI changing society?", cn: "AI如何改变社会？" },
          { role: "B", text: "Never has technology advanced so quickly.", cn: "技术从未如此快速发展。" },
          { role: "A", text: "What about ethical concerns?", cn: "伦理担忧呢？" },
          { role: "B", text: "Not only are there ethical concerns, but there are also existential risks.", cn: "不仅有伦理担忧，还有存在性风险。" },
          { role: "A", text: "Can we regulate AI?", cn: "我们能监管AI吗？" },
          { role: "B", text: "Only by working together can we ensure AI is beneficial.", cn: "只有共同努力我们才能确保AI有益。" },
        ],
        practice: [
          { type: "fill", question: "Never ___ I seen such dedication.", answer: "have", hint: "倒装" },
          { type: "choice", question: "'她不仅赢了，还打破了记录' 怎么说?", options: ["She not only won, but she also broke the record.", "Not only did she win, but she also broke the record.", "Not only she won, but she also broke the record.", "She not only did win, but she also broke the record."], answer: 1 },
          { type: "fill", question: "Had I known, I ___ have helped.", answer: "would", hint: "条件倒装" },
          { type: "choice", question: "'只有共同努力我们才能成功' 怎么说?", options: ["We can succeed only by working together.", "Only by working together can we succeed.", "Only we can succeed by working together.", "By working together only we can succeed."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Units 10-15: More topics ==========
  {
    unit: 10, unitTitle: "Climate crisis", unitDesc: "Environmental emergency and solutions",
    lessons: [
      {
        id: 'la4-u10-l1', title: "Lesson 1 — Acting now", goal: "Learn to discuss the climate crisis",
        vocab: [
          { word: "climate crisis", meaning: "气候危机", example: "The climate crisis is urgent.", audio: "climate crisis" },
          { word: "emissions", meaning: "排放", example: "Emissions must be reduced.", audio: "emissions" },
          { word: "carbon footprint", meaning: "碳足迹", example: "Reduce your carbon footprint.", audio: "carbon footprint" },
          { word: "renewable energy", meaning: "可再生能源", example: "Renewable energy is essential.", audio: "renewable energy" },
          { word: "biodiversity", meaning: "生物多样性", example: "Biodiversity is declining.", audio: "biodiversity" },
          { word: "deforestation", meaning: "砍伐森林", example: "Deforestation accelerates climate change.", audio: "deforestation" },
          { word: "drought", meaning: "干旱", example: "Droughts are increasing.", audio: "drought" },
          { word: "flood", meaning: "洪水", example: "Floods are more frequent.", audio: "flood" },
          { word: "extinction", meaning: "灭绝", example: "Species face extinction.", audio: "extinction" },
          { word: "mitigation", meaning: "缓解", example: "Mitigation is necessary.", audio: "mitigation" },
          { word: "adaptation", meaning: "适应", example: "Adaptation is key.", audio: "adaptation" },
          { word: "sustainable", meaning: "可持续的", example: "Sustainable solutions are needed.", audio: "sustainable" },
        ],
        grammar: { title: "Hypothetical language: as if, as though, suppose, imagine", content: "Expressing hypothetical situations:\n\n1. As if / As though (unreal comparisons):\n   - He acts as if he were the boss. (他表现得好像他是老板)\n   - She talks as though she knew everything. (她说话好像她什么都知道)\n   - It looks as if it's going to rain. (看起来好像要下雨 — likely true)\n   - It looks as if it were going to rain. (看起来好像要下雨 — unlikely)\n\n2. Suppose / Supposing (hypothetical questions):\n   - Suppose you won the lottery. What would you do? (假设你中了彩票。你会做什么？)\n   - Supposing she refused. What would you do? (假设她拒绝了。你会做什么？)\n\n3. Imagine (hypothetical scenarios):\n   - Imagine you were president. What would you change? (想象你是总统。你会改变什么？)\n   - Imagine we had no internet. How would we communicate? (想象我们没有互联网。我们如何沟通？)\n\n4. What if (hypothetical questions):\n   - What if everyone recycled? (如果每个人都回收呢？)\n   - What if we had no fossil fuels? (如果我们没有化石燃料呢？)\n\n5. If only (wishes about the past):\n   - If only we had acted sooner! (要是我们早点行动就好了！)\n   - If only I had studied environmental science! (要是我学了环境科学就好了！)\n\n6. Provided/Providing that (conditions):\n   - We can succeed provided that we work together. (只要我们共同努力就能成功)\n   - I'll help providing that you need it. (我会帮助，只要你需要)\n\nNote: Use past tense after 'as if/as though' for unreal situations.", tip: "Hypothetical language: as if + past (unreal), suppose/imagine + past (hypothetical), what if + past (question)" },
        dialogue: [
          { role: "A", text: "What would you do about the climate crisis?", cn: "你会如何处理气候危机？" },
          { role: "B", text: "Imagine we had no fossil fuels. We'd have to use renewable energy.", cn: "想象我们没有化石燃料。我们将不得不使用可再生能源。" },
          { role: "A", text: "What if governments refused to act?", cn: "如果政府拒绝行动呢？" },
          { role: "B", text: "Suppose everyone demanded change. Governments would have to respond.", cn: "假设每个人都要求改变。政府将不得不回应。" },
          { role: "A", text: "How do politicians act?", cn: "政治家们表现如何？" },
          { role: "B", text: "They act as if the crisis weren't urgent.", cn: "他们表现得好像危机不紧急。" },
        ],
        practice: [
          { type: "fill", question: "He acts as if he ___ the boss.", answer: "were", hint: "虚拟语气" },
          { type: "choice", question: "'假设你中了彩票。你会做什么？' 怎么说?", options: ["If you win the lottery, what will you do?", "Suppose you won the lottery. What would you do?", "When you win the lottery, what do you do?", "You win the lottery, what will you do?"], answer: 1 },
          { type: "fill", question: "___ we had no internet, how would we communicate?", answer: "Imagine", hint: "假设" },
          { type: "choice", question: "'他们表现得好像危机不紧急' 怎么说?", options: ["They act as the crisis isn't urgent.", "They act as if the crisis weren't urgent.", "They act like the crisis isn't urgent.", "They act as if the crisis not urgent."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Units 11-15: More topics ==========
  {
    unit: 11, unitTitle: "Space exploration", unitDesc: "The final frontier",
    lessons: [
      {
        id: 'la4-u11-l1', title: "Lesson 1 — Beyond Earth", goal: "Learn to discuss space exploration",
        vocab: [
          { word: "space exploration", meaning: "太空探索", example: "Space exploration inspires us.", audio: "space exploration" },
          { word: "universe", meaning: "宇宙", example: "The universe is vast.", audio: "universe" },
          { word: "galaxy", meaning: "星系", example: "Our galaxy is the Milky Way.", audio: "galaxy" },
          { word: "planet", meaning: "行星", example: "Mars is a planet.", audio: "planet" },
          { word: "astronaut", meaning: "宇航员", example: "Astronauts explore space.", audio: "astronaut" },
          { word: "mission", meaning: "任务", example: "The mission was successful.", audio: "mission" },
          { word: "orbit", meaning: "轨道", example: "The satellite is in orbit.", audio: "orbit" },
          { word: "gravity", meaning: "重力", example: "Gravity keeps us on Earth.", audio: "gravity" },
          { word: "colony", meaning: "殖民地", example: "A Mars colony is possible.", audio: "colony" },
          { word: "telescope", meaning: "望远镜", example: "Telescopes observe the stars.", audio: "telescope" },
          { word: "extraterrestrial", meaning: "外星的", example: "Extraterrestrial life is possible.", audio: "extraterrestrial" },
          { word: "cosmos", meaning: "宇宙", example: "The cosmos is infinite.", audio: "cosmos" },
        ],
        grammar: { title: "Wishes and regrets: wish, if only, I should have, I ought to have", content: "Expressing wishes and regrets:\n\n1. Wish + past simple (present wishes):\n   - I wish I were an astronaut. (我希望我是宇航员)\n   - She wishes she had more time. (她希望有更多时间)\n\n2. Wish + past perfect (past regrets):\n   - I wish I had studied science. (我希望我学了科学)\n   - She wishes she had taken the opportunity. (她希望她抓住了机会)\n\n3. If only (stronger wishes):\n   - If only I were taller! (要是我更高就好了！)\n   - If only I had studied harder! (要是我学习更努力就好了！)\n\n4. Should have / Ought to have (past regrets):\n   - I should have studied harder. (我本应该学习更努力)\n   - She ought to have taken the job. (她本应该接受那份工作)\n   - We should have acted sooner. (我们本应该早点行动)\n\n5. Needn't have (unnecessary past actions):\n   - I needn't have worried. (我本不必担心)\n   - She needn't have rushed. (她本不必匆忙)\n\n6. Would rather / Would sooner (preferences):\n   - I'd rather stay home. (我宁愿待在家里)\n   - I'd sooner walk than drive. (我宁愿走路也不开车)\n\n7. It's time (suggestions):\n   - It's time we left. (是我们离开的时候了)\n   - It's high time we took action. (是我们采取行动的时候了)\n\nNote: 'Should have' and 'ought to have' express regret about past actions.", tip: "Wish + past (present regret), wish + past perfect (past regret), should have + pp (past regret)" },
        dialogue: [
          { role: "A", text: "Do you wish you were an astronaut?", cn: "你希望自己是宇航员吗？" },
          { role: "B", text: "I wish I were. I'd love to explore space.", cn: "我希望我是。我想探索太空。" },
          { role: "A", text: "What about past choices?", cn: "过去的选择呢？" },
          { role: "B", text: "I should have studied physics. Then I could have become an astronaut.", cn: "我本应该学物理。那样我就能成为宇航员了。" },
          { role: "A", text: "Is it too late?", cn: "太晚了吗？" },
          { role: "B", text: "If only I had known earlier! But it's never too late to learn.", cn: "要是我早点知道就好了！但学习永远不嫌晚。" },
        ],
        practice: [
          { type: "fill", question: "I wish I ___ an astronaut.", answer: "were", hint: "wish + past" },
          { type: "choice", question: "'我本应该学习更努力' 怎么说?", options: ["I should study harder.", "I should have studied harder.", "I should studying harder.", "I should studied harder."], answer: 1 },
          { type: "fill", question: "If only I ___ studied harder!", answer: "had", hint: "if only + past perfect" },
          { type: "choice", question: "'是我们离开的时候了' 怎么说?", options: ["It's time we leave.", "It's time we left.", "It's time to leave.", "Both B and C are correct."], answer: 3 },
        ]
      },
    ]
  },
  // ========== Units 12-15: More topics ==========
  {
    unit: 12, unitTitle: "The future of humanity", unitDesc: "What lies ahead for our species",
    lessons: [
      {
        id: 'la4-u12-l1', title: "Lesson 1 — Tomorrow's world", goal: "Learn to discuss the future of humanity",
        vocab: [
          { word: "humanity", meaning: "人类", example: "Humanity faces challenges.", audio: "humanity" },
          { word: "evolution", meaning: "进化", example: "Evolution continues.", audio: "evolution" },
          { word: "extinction", meaning: "灭绝", example: "Extinction is a risk.", audio: "extinction" },
          { word: "utopia", meaning: "乌托邦", example: "A utopia is ideal.", audio: "utopia" },
          { word: "dystopia", meaning: "反乌托邦", example: "A dystopia is frightening.", audio: "dystopia" },
          { word: "demographic", meaning: "人口的", example: "Demographic changes occur.", audio: "demographic" },
          { word: "longevity", meaning: "长寿", example: "Longevity is increasing.", audio: "longevity" },
          { word: "immortality", meaning: "不朽", example: "Immortality is a dream.", audio: "immortality" },
          { word: "transhumanism", meaning: "超人类主义", example: "Transhumanism explores enhancement.", audio: "transhumanism" },
          { word: "sustainability", meaning: "可持续性", example: "Sustainability is crucial.", audio: "sustainability" },
          { word: "resilience", meaning: "韧性", example: "Human resilience is remarkable.", audio: "resilience" },
          { word: "legacy", meaning: "遗产", example: "What legacy will we leave?", audio: "legacy" },
        ],
        grammar: { title: "Advanced future expressions", content: "Sophisticated ways to talk about the future:\n\n1. Be set to / Be due to (certainty):\n   - The project is set to begin next month. (项目定于下月开始)\n   - The report is due to be published soon. (报告即将发表)\n\n2. Be bound to / Be certain to (definite):\n   - Change is bound to happen. (改变肯定会发生)\n   - Technology is certain to advance. (技术肯定会进步)\n\n3. Be likely to / Be unlikely to (probability):\n   - AI is likely to transform industries. (AI可能会改变行业)\n   - Humans are unlikely to become obsolete. (人类不太可能变得过时)\n\n4. Be projected to / Be estimated to (predictions):\n   - The population is projected to reach 10 billion. (人口预计将达到100亿)\n   - Temperatures are estimated to rise by 2 degrees. (温度预计会上升2度)\n\n5. Be on the verge of / Be on the brink of (imminent):\n   - We are on the verge of a breakthrough. (我们即将取得突破)\n   - The company is on the brink of collapse. (公司濒临倒闭)\n\n6. Be poised to (ready for future action):\n   - The company is poised to expand. (公司准备扩张)\n   - Technology is poised to revolutionize healthcare. (技术准备革新医疗保健)\n\n7. Come + time expression (future perfect):\n   - By 2050, we will have achieved much. (到2050年，我们将已经取得很多成就)\n\nNote: These expressions are common in academic and journalistic writing.", tip: "Advanced future expressions add precision and sophistication to your predictions!" },
        dialogue: [
          { role: "A", text: "What does the future hold for humanity?", cn: "人类的未来会怎样？" },
          { role: "B", text: "The population is projected to reach 10 billion by 2100.", cn: "人口预计到2100年将达到100亿。" },
          { role: "A", text: "What about technology?", cn: "技术呢？" },
          { role: "B", text: "AI is bound to transform every aspect of life.", cn: "AI肯定会改变生活的方方面面。" },
          { role: "A", text: "Are we ready?", cn: "我们准备好了吗？" },
          { role: "B", text: "We are on the verge of major changes. We need to be prepared.", cn: "我们即将发生重大变化。我们需要做好准备。" },
        ],
        practice: [
          { type: "fill", question: "The project is ___ to begin next month.", answer: "set", hint: "定于" },
          { type: "choice", question: "'AI可能会改变行业' 怎么说?", options: ["AI will change industries.", "AI is likely to change industries.", "AI is bound to change industries.", "AI changes industries."], answer: 1 },
          { type: "fill", question: "We are ___ the verge of a breakthrough.", answer: "on", hint: "即将" },
          { type: "choice", question: "'人口预计到2100年将达到100亿' 怎么说?", options: ["The population will reach 10 billion by 2100.", "The population is projected to reach 10 billion by 2100.", "The population reaches 10 billion by 2100.", "The population is reaching 10 billion by 2100."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Units 13-15: More topics ==========
  {
    unit: 13, unitTitle: "Philosophy of life", unitDesc: "Meaning, purpose, and the good life",
    lessons: [
      {
        id: 'la4-u13-l1', title: "Lesson 1 — The meaning of life", goal: "Learn to discuss philosophical questions",
        vocab: [
          { word: "philosophy", meaning: "哲学", example: "Philosophy asks big questions.", audio: "philosophy" },
          { word: "meaning", meaning: "意义", example: "What is the meaning of life?", audio: "meaning" },
          { word: "purpose", meaning: "目的", example: "Everyone seeks a purpose.", audio: "purpose" },
          { word: "happiness", meaning: "幸福", example: "Happiness is a goal.", audio: "happiness" },
          { word: "fulfillment", meaning: "满足", example: "Fulfillment comes from within.", audio: "fulfillment" },
          { word: "virtue", meaning: "美德", example: "Virtue is its own reward.", audio: "virtue" },
          { word: "wisdom", meaning: "智慧", example: "Wisdom comes with experience.", audio: "wisdom" },
          { word: "contemplation", meaning: "沉思", example: "Contemplation leads to insight.", audio: "contemplation" },
          { word: "existential", meaning: "存在的", example: "Existential questions are profound.", audio: "existential" },
          { word: "absurd", meaning: "荒谬的", example: "Life can seem absurd.", audio: "absurd" },
          { word: "authentic", meaning: "真实的", example: "Live an authentic life.", audio: "authentic" },
          { word: "transcend", meaning: "超越", example: "We seek to transcend limitations.", audio: "transcend" },
        ],
        grammar: { title: "Literary and rhetorical devices", content: "Advanced English uses literary devices for effect:\n\n1. Metaphor (direct comparison):\n   - Time is a thief. (时间是小偷)\n   - Life is a journey. (生活是旅程)\n   - The world is a stage. (世界是舞台)\n\n2. Simile (comparison with 'like/as'):\n   - As brave as a lion. (像狮子一样勇敢)\n   - Like a bird in a cage. (像笼中的鸟)\n   - As clear as crystal. (像水晶一样清晰)\n\n3. Personification (giving human qualities):\n   - The wind whispered through the trees. (风在树间低语)\n   - Time flies. (时间飞逝)\n   - The sun smiled down on us. (太阳对我们微笑)\n\n4. Hyperbole (exaggeration):\n   - I've told you a million times. (我告诉过你一百万次了)\n   - This bag weighs a ton. (这包有一吨重)\n   - I'm so hungry I could eat a horse. (我饿得能吃下一匹马)\n\n5. Alliteration (repeated sounds):\n   - Peter Piper picked a peck of pickled peppers.\n   - She sells seashells by the seashore.\n   - The fair breeze blew. ( fair breeze 吹)\n\n6. Rhetorical questions:\n   - Is life not more than mere existence? (生活不仅仅是存在吗？)\n   - What is happiness if not fulfillment? (如果不是满足，幸福是什么？)\n\n7. Parallelism (similar structure):\n   - Easy come, easy go. (来得容易去得快)\n   - To err is human; to forgive, divine. (犯错是人，宽恕是神)\n   - Ask not what your country can do for you; ask what you can do for your country.\n\nNote: Literary devices make your English more expressive and memorable.", tip: "Literary devices add beauty and power to your English. Use them in speeches and writing!" },
        dialogue: [
          { role: "A", text: "What is the meaning of life?", cn: "生活的意义是什么？" },
          { role: "B", text: "Life is a journey, not a destination.", cn: "生活是旅程，不是目的地。" },
          { role: "A", text: "How do we find happiness?", cn: "我们如何找到幸福？" },
          { role: "B", text: "Happiness is not something ready-made. It comes from our actions.", cn: "幸福不是现成的东西。它来自我们的行动。" },
          { role: "A", text: "What about suffering?", cn: "苦难呢？" },
          { role: "B", text: "Like the lotus flower that grows in muddy water, we can transcend suffering.", cn: "就像莲花在泥水中生长，我们可以超越苦难。" },
        ],
        practice: [
          { type: "fill", question: "Time ___ a thief. (时间是小偷)", answer: "is", hint: "隐喻" },
          { type: "choice", question: "'像狮子一样勇敢' 怎么说?", options: ["Brave like a lion.", "As brave as a lion.", "Braver than a lion.", "Like brave a lion."], answer: 1 },
          { type: "fill", question: "The wind ___ through the trees. (风在树间低语)", answer: "whispered", hint: "拟人" },
          { type: "choice", question: "'生活是旅程，不是目的地' 怎么说?", options: ["Life is a journey, not a destination.", "Life is like a journey.", "Life journeys to destinations.", "Life's journey has destinations."], answer: 0 },
        ]
      },
    ]
  },
  // ========== Units 14-15: Review ==========
  {
    unit: 14, unitTitle: "Global challenges", unitDesc: "Solving the world's biggest problems",
    lessons: [
      {
        id: 'la4-u14-l1', title: "Lesson 1 — A call to action", goal: "Learn to discuss global challenges and solutions",
        vocab: [
          { word: "challenge", meaning: "挑战", example: "Global challenges require action.", audio: "challenge" },
          { word: "solution", meaning: "解决方案", example: "We need innovative solutions.", audio: "solution" },
          { word: "collaboration", meaning: "合作", example: "Collaboration is key.", audio: "collaboration" },
          { word: "sustainable", meaning: "可持续的", example: "Sustainable development is essential.", audio: "sustainable" },
          { word: "equity", meaning: "公平", example: "Equity must be prioritized.", audio: "equity" },
          { word: "resilience", meaning: "韧性", example: "Building resilience is crucial.", audio: "resilience" },
          { word: "advocacy", meaning: "倡导", example: "Advocacy drives change.", audio: "advocacy" },
          { word: "empowerment", meaning: "赋权", example: "Empowerment leads to progress.", audio: "empowerment" },
          { word: "solidarity", meaning: "团结", example: "Solidarity unites us.", audio: "solidarity" },
          { word: "compassion", meaning: "同情", example: "Compassion guides our actions.", audio: "compassion" },
          { word: "responsibility", meaning: "责任", example: "We all have a responsibility.", audio: "responsibility" },
          { word: "legacy", meaning: "遗产", example: "What legacy will we leave?", audio: "legacy" },
        ],
        grammar: { title: "Comprehensive review: Advanced structures", content: "Book 4 covers advanced English structures:\n\n1. Advanced relative clauses:\n   - The person to whom I spoke was helpful.\n   - He passed the exam, which surprised everyone.\n\n2. Participle clauses:\n   - Walking down the street, I met a friend.\n   - Written in 1900, the book is still popular.\n\n3. Mixed conditionals:\n   - If I had studied harder, I would have a better job now.\n   - If I were more confident, I would have applied.\n\n4. Nominalization:\n   - The decision was made. / The analysis showed...\n\n5. Cleft sentences:\n   - It was creativity that made the difference.\n   - What we need is a new approach.\n\n6. Advanced inversion:\n   - Never have I seen such dedication.\n   - Only by working together can we succeed.\n\n7. Subjunctive mood:\n   - It is essential that he be present.\n\n8. Future in the past:\n   - He said he would help.\n   - I was going to call you.\n\n9. Hypothetical language:\n   - Imagine we had no internet.\n   - Suppose you won the lottery.\n\n10. Wishes and regrets:\n    - I wish I were an astronaut.\n    - I should have studied harder.\n\n11. Advanced future expressions:\n    - The population is projected to reach 10 billion.\n    - We are on the verge of a breakthrough.\n\n12. Literary devices:\n    - Metaphor, simile, personification, hyperbole...", tip: "Book 4 is upper-intermediate (B2). You've mastered advanced English! Congratulations!" },
        dialogue: [
          { role: "A", text: "What global challenges do we face?", cn: "我们面临什么全球挑战？" },
          { role: "B", text: "Never has humanity faced such complex challenges.", cn: "人类从未面临如此复杂的挑战。" },
          { role: "A", text: "What solutions do you propose?", cn: "你提出什么解决方案？" },
          { role: "B", text: "What we need is global collaboration and sustainable solutions.", cn: "我们需要的是全球合作和可持续解决方案。" },
          { role: "A", text: "Are we capable of change?", cn: "我们有能力改变吗？" },
          { role: "B", text: "If we work together, there is nothing we cannot achieve.", cn: "如果我们共同努力，没有什么是我们不能实现的。" },
        ],
        practice: [
          { type: "fill", question: "Never ___ humanity faced such challenges.", answer: "has", hint: "倒装" },
          { type: "choice", question: "'我们需要的是全球合作' 怎么说?", options: ["We need global collaboration.", "What we need is global collaboration.", "That we need is global collaboration.", "Need is what we global collaboration."], answer: 1 },
          { type: "fill", question: "It is essential that he ___ present.", answer: "be", hint: "虚拟语气" },
          { type: "choice", question: "'如果我学习更努力，我现在就会有更好的工作' 怎么说?", options: ["If I study harder, I will have a better job.", "If I studied harder, I would have a better job.", "If I had studied harder, I would have a better job now.", "If I had studied harder, I will have a better job."], answer: 2 },
        ]
      },
    ]
  },
  // ========== Unit 15: Final review ==========
  {
    unit: 15, unitTitle: "Final review", unitDesc: "Consolidation of Book 4",
    lessons: [
      {
        id: 'la4-u15-l1', title: "Lesson 1 — Looking back", goal: "Review all grammar and vocabulary from Book 4",
        vocab: [
          { word: "mastery", meaning: "掌握", example: "You've achieved mastery.", audio: "mastery" },
          { word: "proficiency", meaning: "熟练", example: "You've reached proficiency.", audio: "proficiency" },
          { word: "fluency", meaning: "流利", example: "You're becoming fluent.", audio: "fluency" },
          { word: "sophistication", meaning: "复杂", example: "Your English is sophisticated.", audio: "sophistication" },
          { word: "accomplishment", meaning: "成就", example: "This is a great accomplishment.", audio: "accomplishment" },
          { word: "milestone", meaning: "里程碑", example: "This is a milestone.", audio: "milestone" },
          { word: "journey", meaning: "旅程", example: "The journey continues.", audio: "journey" },
          { word: "perspective", meaning: "观点", example: "Your perspective has broadened.", audio: "perspective" },
          { word: "transform", meaning: "改变", example: "You've been transformed.", audio: "transform" },
          { word: "inspire", meaning: "启发", example: "You inspire others.", audio: "inspire" },
          { word: "achieve", meaning: "达到", example: "You've achieved your goal.", audio: "achieve" },
          { word: "excel", meaning: "优秀", example: "You excel in English.", audio: "excel" },
        ],
        grammar: { title: "Book 4 Grammar Summary", content: "Book 4 covers:\n\n1. Advanced relative clauses:\n   - The person to whom I spoke...\n   - He passed, which surprised everyone.\n\n2. Participle clauses:\n   - Walking down the street, I met...\n   - Written in 1900, the book is...\n\n3. Mixed conditionals:\n   - If I had studied, I would have a better job now.\n\n4. Nominalization:\n   - The decision was made.\n\n5. Cleft sentences:\n   - It was X that... / What I need is...\n\n6. Advanced inversion:\n   - Never have I seen...\n   - Only by working together can we...\n\n7. Subjunctive mood:\n   - It is essential that he be present.\n\n8. Future in the past:\n   - He said he would help.\n\n9. Hypothetical language:\n   - Imagine we had no internet.\n\n10. Wishes and regrets:\n    - I wish I were... / I should have...\n\n11. Advanced future expressions:\n    - The population is projected to...\n\n12. Literary devices:\n    - Metaphor, simile, personification...\n\nCongratulations on completing Book 4! You've reached upper-intermediate (B2) level!", tip: "You've completed all 4 books of Look Ahead! Your English is now at B2 level. Keep practicing to reach C1!" },
        dialogue: [
          { role: "Teacher", text: "Today we're reviewing Book 4. What have we learned?", cn: "今天我们复习第4册。我们学了什么？" },
          { role: "Student", text: "We've learned advanced structures like inversion, cleft sentences, and the subjunctive.", cn: "我们学了高级结构，如倒装句、分裂句和虚拟语气。" },
          { role: "Teacher", text: "Excellent! Can you give me an example?", cn: "太棒了！你能举个例子吗？" },
          { role: "Student", text: "Never have I seen such sophistication in English writing.", cn: "我从未见过如此复杂的英语写作。" },
          { role: "Teacher", text: "Perfect! And what about cleft sentences?", cn: "完美！分裂句呢？" },
          { role: "Student", text: "What we need is a comprehensive understanding of advanced grammar.", cn: "我们需要的是对高级语法的全面理解。" },
        ],
        practice: [
          { type: "fill", question: "Never ___ I seen such sophistication.", answer: "have", hint: "倒装" },
          { type: "choice", question: "'我们需要的是全面理解' 怎么说?", options: ["We need comprehensive understanding.", "What we need is comprehensive understanding.", "That we need is comprehensive understanding.", "Need is what we comprehensive understanding."], answer: 1 },
          { type: "fill", question: "It is essential that he ___ present.", answer: "be", hint: "虚拟语气" },
          { type: "choice", question: "'如果我学习更努力，我现在就会有更好的工作' 怎么说?", options: ["If I study harder, I will have a better job.", "If I studied harder, I would have a better job.", "If I had studied harder, I would have a better job now.", "If I had studied harder, I will have a better job."], answer: 2 },
        ]
      },
    ]
  },
];
