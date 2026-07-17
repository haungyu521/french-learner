/**
 * 英语知识点 — 精细分类版
 * 大类：语法 / 发音 / 词汇 / 文化
 * 子类：时态 / 介词 / 动词 / 句型 / 从句 / 冠词 / 发音规则 / 日常表达 / 高频表达 / 英式vs美式
 */
export const englishKnowledgeData = [
  // ========== 语法 > 时态 ==========
  {
    id: 'en-1', title: "be动词 (am/is/are)", category: "语法", subcategory: "动词", difficulty: 1,
    ipa: "/biː/",
    pronunciationNote: "发音注意：am强读/æm/，弱读/əm/。is强读/ɪz/，弱读/z/或/s/。are强读/ɑːr/，弱读/ər/。在快速口语中几乎都用弱读形式。",
    content: "be动词是英语最基础的动词，表示'是'或'存在'。",
    details: [
      { term: "I am (I'm)", definition: "我是", example: "I am a student.", ipa: "/aɪ æm ə ˈstjuːdənt/" },
      { term: "You are (You're)", definition: "你是", example: "You are kind.", ipa: "/juː ɑːr kaɪnd/" },
      { term: "He/She is (He's/She's)", definition: "他/她是", example: "She is a doctor.", ipa: "/ʃiː ɪz ə ˈdɒktə/" },
      { term: "We are (We're)", definition: "我们是", example: "We are friends.", ipa: "/wiː ɑːr frɛndz/" },
      { term: "They are (They're)", definition: "他们是", example: "They are happy.", ipa: "/ðeɪ ɑːr ˈhæpi/" },
    ],
    tips: "be动词是最不规则的动词，但也是最常用的！先记住这5种形式。",
    commonErrors: ["❌ I is a student. → ✅ I am a student.", "❌ She are my friend. → ✅ She is my friend."],
    mnemonic: "我用am，你用are，is连着他她它，单数is，复数are",
    usage: "be动词用于描述身份、状态、位置、年龄和感受。是英语中使用最频繁的动词。",
    register: "通用",
    exampleParagraph: [
      { text: "I'm a student. Nice to meet you!", cn: "我是学生，很高兴认识你！", context: "自我介绍必备" },
      { text: "She's my best friend. We've known each other for years.", cn: "她是我最好的朋友，我们认识好多年了。", context: "口语常用" },
      { text: "Are you OK? — Yes, I'm fine, thanks.", cn: "你还好吗？— 是的，我很好，谢谢。", context: "日常问候" },
    ],
    scenarios: ["自我介绍", "描述身份/职业", "表达感受/状态"]
  },
  {
    id: 'en-2', title: "一般现在时 (Present Simple)", category: "语法", subcategory: "时态", difficulty: 1,
    pronunciationNote: "发音规则：第三人称-s的发音：①清辅音后读/s/（works /wɜːks/）②浊辅音/元音后读/z/（plays /pleɪz/）③s/sh/ch/x后加-es读/ɪz/（watches /ˈwɒtʃɪz/）。",
    content: "表示习惯性动作、事实或真理。",
    details: [
      { term: "I/You/We/They + 动词原形", definition: "肯定句", example: "I work every day.", ipa: "/aɪ wɜːk ˈɛvri deɪ/" },
      { term: "He/She/It + 动词s/es", definition: "第三人称单数", example: "She works hard.", ipa: "/ʃiː wɜːks hɑːd/" },
      { term: "do/does + not", definition: "否定句", example: "I don't like coffee.", ipa: "/aɪ dəʊnt laɪk ˈkɒfi/" },
      { term: "Do/Does + 主语 + 动词?", definition: "疑问句", example: "Do you speak English?", ipa: "/duː juː spiːk ˈɪŋɡlɪʃ/" },
    ],
    tips: "第三人称单数加-s是最容易忘的！He works, She likes",
    commonErrors: ["❌ He work here. → ✅ He works here.", "❌ She don't like it. → ✅ She doesn't like it."],
    mnemonic: "他她它+s，我你他们不加s。否定用don't/doesn't",
    usage: "一般现在时用于表达习惯、事实、真理和经常性动作。口语和书面语中都极为常用。",
    register: "通用",
    exampleParagraph: [
      { text: "I usually have coffee and toast for breakfast.", cn: "我通常早餐喝咖啡吃吐司。", context: "描述日常习惯" },
      { text: "She doesn't like spicy food.", cn: "她不喜欢辣的食物。", context: "表达喜好" },
      { text: "Do you work here? — Yes, I do.", cn: "你在这里工作吗？— 是的。", context: "日常问答" },
    ],
    scenarios: ["描述日常习惯", "表达喜好/厌恶", "问答工作/生活"]
  },
  {
    id: 'en-4', title: "一般过去时 (Past Simple)", category: "语法", subcategory: "时态", difficulty: 2,
    pronunciationNote: "发音规则：-ed的三种读音：①/t/在清辅音后（worked /wɜːkt/）②/d/在浊辅音/元音后（played /pleɪd/）③/ɪd/在t/d后（wanted /ˈwɒntɪd/）。",
    content: "表示过去发生的动作或状态。",
    details: [
      { term: "规则动词 + ed", definition: "worked, played, lived", example: "I worked yesterday.", ipa: "/aɪ wɜːkt ˈjɛstədeɪ/" },
      { term: "不规则动词", definition: "特殊变化", example: "go→went, see→saw, eat→ate", ipa: "/ɡəʊ→wɛnt, siː→sɔː, iːt→eɪt/" },
      { term: "did + not (didn't)", definition: "过去否定", example: "I didn't go to school.", ipa: "/aɪ ˈdɪdnt ɡəʊ tuː skuːl/" },
      { term: "Did + 主语 + 动词原形?", definition: "过去疑问", example: "Did you see it?", ipa: "/dɪd juː siː ɪt/" },
    ],
    tips: "不规则动词需要逐个记忆，最常见的有：be→was/were, go→went, have→had",
    commonErrors: ["❌ I goed home. → ✅ I went home.", "❌ Did you went? → ✅ Did you go?"],
    mnemonic: "过去时标志：动词变过去式。否定疑问用did，动词回原形",
    usage: "一般过去时用于描述过去发生的动作或状态。口语中常用yesterday, last week等时间词。",
    register: "通用",
    exampleParagraph: [
      { text: "I went to the cinema last night. The film was brilliant!", cn: "我昨晚去了电影院。电影太棒了！", context: "英式口语brilliant=很好" },
      { text: "Did you enjoy your holiday? — Yes, it was lovely.", cn: "你假期过得开心吗？— 是的，很棒。", context: "英式holiday=假期" },
      { text: "She didn't come to the party because she was tired.", cn: "她没来派对因为她累了。", context: "解释原因" },
    ],
    scenarios: ["讲述昨天/上周做了什么", "分享过去经历", "描述过去的状态"]
  },
  {
    id: 'en-5', title: "现在进行时 (Present Continuous)", category: "语法", subcategory: "时态", difficulty: 2,
    pronunciationNote: "发音注意：-ing读/ɪŋ/，口语中常弱读为/ɪn/（如goin', doin'）。英式英语更倾向保持/ɪŋ/。",
    content: "表示正在进行的动作：be + doing",
    details: [
      { term: "am/is/are + doing", definition: "正在做", example: "I am studying now.", ipa: "/aɪ æm ˈstʌdiɪŋ naʊ/" },
      { term: "否定", definition: "be + not + doing", example: "She isn't working.", ipa: "/ʃiː ˈɪznt ˈwɜːkɪŋ/" },
      { term: "疑问", definition: "Be + 主语 + doing?", example: "Are you listening?", ipa: "/ɑːr juː ˈlɪsnɪŋ/" },
      { term: "常见时间词", definition: "now, at the moment", example: "right now, currently" },
    ],
    tips: "注意：有些动词不用进行时，如：know, like, want, need（状态动词）"
  },
  {
    id: 'en-7', title: "现在完成时 (Present Perfect)", category: "语法", subcategory: "时态", difficulty: 3,
    pronunciationNote: "连读规则：have在have been中弱读为/həv/或/əv/。I've读/aɪv/，he's读/hiːz/。has在she's中读/z/。",
    content: "have/has + 过去分词，表示过去发生但与现在有关的事。",
    details: [
      { term: "have/has + done", definition: "已经完成", example: "I have finished my work.", ipa: "/aɪ hæv ˈfɪnɪʃt maɪ wɜːk/" },
      { term: "have been to", definition: "去过", example: "I have been to Paris.", ipa: "/aɪ hæv biːn tuː ˈpærɪs/" },
      { term: "have gone to", definition: "去了（还没回）", example: "She has gone to London.", ipa: "/ʃiː hæz ɡɒn tuː ˈlʌndən/" },
      { term: "常见时间词", definition: "already, yet, just, ever, never", example: "Have you ever been to China?", ipa: "/hæv juː ˈɛvər biːn tuː ˈtʃaɪnə/" },
    ],
    tips: "现在完成时强调'对现在的影响'，一般过去时只说'过去发生了'",
    usage: "现在完成时连接过去和现在，强调结果或经验。英式英语中使用频率远高于美式。",
    register: "通用",
    exampleParagraph: [
      { text: "I've just had lunch. I'm not hungry.", cn: "我刚吃过午饭。我不饿。", context: "英式口语常用just+现在完成时" },
      { text: "Have you ever been to London? — Yes, I have.", cn: "你去过伦敦吗？— 去过。", context: "询问经验" },
      { text: "She's lived here since 2010.", cn: "她从2010年起就住在这里。", context: "持续到现在" },
    ],
    scenarios: ["询问人生经验", "描述最近发生的事", "表达持续状态"]
  },
  {
    id: 'en-32', title: "过去进行时 (Past Continuous)", category: "语法", subcategory: "时态", difficulty: 2,
    pronunciationNote: "弱读：was弱读/wəz/，were弱读/wər/。在快速口语中'I was going'读作/aɪ wəz ˈɡəʊɪn/。",
    content: "表示过去某个时刻正在进行的动作：was/were + doing",
    details: [
      { term: "was/were + doing", definition: "过去正在做", example: "I was reading at 8 last night.", ipa: "/aɪ wəz ˈriːdɪŋ æt eɪt lɑːst naɪt/" },
      { term: "被打断", definition: "when + 一般过去时", example: "I was sleeping when the phone rang.", ipa: "/aɪ wəz ˈsliːpɪŋ wɛn ðə fəʊn ræŋ/" },
      { term: "两个同时进行的动作", definition: "while连接", example: "I was cooking while he was watching TV.", ipa: "/aɪ wəz ˈkʊkɪŋ waɪl hiː wəz ˈwɒtʃɪŋ tiːˈviː/" },
    ],
    tips: "when + 短动作(过去时)，while + 长动作(进行时)"
  },
  {
    id: 'en-33', title: "过去完成时 (Past Perfect)", category: "语法", subcategory: "时态", difficulty: 3,
    pronunciationNote: "弱读：had弱读/həd/或/əd/。I'd读/aɪd/。在连续说话中'had'经常几乎消失。",
    content: "had + 过去分词，表示'过去的过去'。",
    details: [
      { term: "had + done", definition: "已经完成", example: "I had finished before he arrived.", ipa: "/aɪ hæd ˈfɪnɪʃt bɪˈfɔːr hiː əˈraɪvd/" },
      { term: "过去的过去", definition: "比过去更早", example: "When I got there, the train had left.", ipa: "/wɛn aɪ ɡɒt ðɛər, ðə treɪn hæd lɛft/" },
      { term: "与一般过去时搭配", definition: "先发生的用过去完成时", example: "She had eaten, so she wasn't hungry.", ipa: "/ʃiː hæd ˈiːtn, səʊ ʃiː ˈwɒznt ˈhʌŋɡri/" },
    ],
    tips: "过去完成时 = 过去的过去。时间线上最早发生的事用它。"
  },
  {
    id: 'en-34', title: "将来时 (will / be going to)", category: "语法", subcategory: "时态", difficulty: 2,
    pronunciationNote: "连读：will弱读/wɪl/或/l/，I'll读/aɪl/。going to弱读为gonna /ˈɡɒnə/（口语）。",
    content: "英语有两种表达将来的方式，用法不同。",
    details: [
      { term: "will + 动词", definition: "临时决定/预测/承诺", example: "I'll help you. (我帮你)", ipa: "/aɪl hɛlp juː/" },
      { term: "be going to + 动词", definition: "计划好的/有迹象的", example: "I'm going to visit Paris. (我计划去)", ipa: "/aɪm ˈɡəʊɪŋ tuː ˈvɪzɪt ˈpærɪs/" },
      { term: "will vs going to", definition: "will=临时, going to=计划", example: "Look at those clouds! It's going to rain.", ipa: "/lʊk æt ðəʊz klaʊdz! ɪts ˈɡəʊɪŋ tuː reɪn/" },
      { term: "现在进行时表将来", definition: "已确定的安排", example: "I'm meeting her at 3. (约好了)", ipa: "/aɪm ˈmiːtɪŋ hɜːr æt θriː/" },
    ],
    tips: "will=即兴决定，going to=已有计划。考试常考这个区别！"
  },

  // ========== 语法 > 介词 ==========
  {
    id: 'en-11', title: "英语介词大全 (Prepositions)", category: "语法", subcategory: "介词", difficulty: 1,
    pronunciationNote: "弱读规则：介词在句子中通常弱读。at弱读/ət/，for弱读/fər/，to弱读/tə/，of弱读/əv/，from弱读/frəm/。",
    content: "介词表示时间、地点、方向等关系。",
    details: [
      { term: "at (在/时间)", definition: "具体地点或时间点", example: "at the door, at 3 o'clock", ipa: "/æt ðə dɔːr, æt θriː əˈklɒk/" },
      { term: "in (在...里/时间段)", definition: "大地点或时间段", example: "in London, in the morning", ipa: "/ɪn ˈlʌndən, ɪn ðə ˈmɔːnɪŋ/" },
      { term: "on (在...上/日期)", definition: "表面或具体日期", example: "on the table, on Monday", ipa: "/ɒn ðə ˈteɪbl, ɒn ˈmʌndeɪ/" },
      { term: "to (到/向)", definition: "方向、目的地", example: "go to school", ipa: "/ɡəʊ tə skuːl/" },
      { term: "from (从/来自)", definition: "来源", example: "from China", ipa: "/frɒm ˈtʃaɪnə/" },
      { term: "with / without", definition: "伴随", example: "with friends, without sugar", ipa: "/wɪð frɛndz, wɪˈðaʊt ˈʃʊɡə/" },
      { term: "about (关于/大约)", definition: "话题或大概", example: "a book about France", ipa: "/ə bʊk əˈbaʊt frɑːns/" },
      { term: "between / among", definition: "两者/多者之间", example: "between you and me", ipa: "/bɪˈtwiːn juː ænd miː/" },
    ],
    tips: "记忆技巧：at=小地点/具体时间，in=大地方/时间段，on=表面/具体日期"
  },
  {
    id: 'en-35', title: "介词搭配 (Dependent Prepositions)", category: "语法", subcategory: "介词", difficulty: 2,
    pronunciationNote: "连读：interested in连读为/ˈɪntrəstɪd ɪn/→interested-in，look at连读/lʊk æt/→look-at。",
    content: "某些形容词和动词后面必须跟固定的介词！",
    details: [
      { term: "interested IN", definition: "对...感兴趣", example: "I'm interested in music.", ipa: "/aɪm ˈɪntrəstɪd ɪn ˈmjuːzɪk/" },
      { term: "good AT", definition: "擅长", example: "She's good at maths.", ipa: "/ʃiːz ɡʊd æt mæθs/" },
      { term: "afraid OF", definition: "害怕", example: "He's afraid of spiders.", ipa: "/hiːz əˈfreɪd əv ˈspaɪdəz/" },
      { term: "depend ON", definition: "取决于", example: "It depends on the weather.", ipa: "/ɪt dɪˈpɛndz ɒn ðə ˈwɛðə/" },
      { term: "listen TO", definition: "听", example: "Listen to me!", ipa: "/ˈlɪsn tə miː/" },
      { term: "wait FOR", definition: "等待", example: "I'm waiting for the bus.", ipa: "/aɪm ˈweɪtɪŋ fər ðə bʌs/" },
      { term: "look forward TO", definition: "期待", example: "I look forward to seeing you.", ipa: "/aɪ lʊk ˈfɔːwəd tə ˈsiːɪŋ juː/" },
    ],
    tips: "这些搭配必须整体记忆！不能自己随便选介词。"
  },

  // ========== 语法 > 动词 ==========
  {
    id: 'en-6', title: "情态动词 (can/could/must/should)", category: "语法", subcategory: "动词", difficulty: 2,
    pronunciationNote: "发音注意：can强读/kæn/，弱读/kən/。could强读/kʊd/，弱读/kəd/。must强读/mʌst/，弱读/məst/。否定can't英式/kɑːnt/美式/kænt/。",
    content: "表示能力、可能性、义务、建议等。",
    details: [
      { term: "can", definition: "能/会（能力）", example: "I can swim.", ipa: "/aɪ kæn swɪm/" },
      { term: "could", definition: "能（过去/委婉）", example: "Could you help me?", ipa: "/kʊd juː hɛlp miː/" },
      { term: "must", definition: "必须", example: "You must be quiet.", ipa: "/juː mʌst biː kwaɪət/" },
      { term: "should", definition: "应该", example: "You should rest.", ipa: "/juː ʃʊd rɛst/" },
      { term: "may/might", definition: "可能", example: "It might rain.", ipa: "/ɪt maɪt reɪn/" },
    ],
    tips: "情态动词后面永远用原形动词！不能说 can to go，只能说 can go"
  },
  {
    id: 'en-12', title: "短语动词 (Phrasal Verbs)", category: "语法", subcategory: "动词", difficulty: 2,
    pronunciationNote: "重音规则：短语动词的重音通常在副词/介词部分——get UP /ɡet ˈʌp/，turn OFF /tɜːn ˈɒf/。",
    content: "动词 + 介词/副词，意思往往和原动词完全不同！",
    details: [
      { term: "get up / get over", definition: "起床 / 克服", example: "I get up at 7.", ipa: "/aɪ ɡet ʌp æt ˈsɛvən/" },
      { term: "look for / look after", definition: "寻找 / 照顾", example: "I'm looking for my keys.", ipa: "/aɪm ˈlʊkɪŋ fər maɪ kiːz/" },
      { term: "give up / give in", definition: "放弃 / 屈服", example: "Don't give up!", ipa: "/dəʊnt ɡɪv ʌp/" },
      { term: "turn on / turn off", definition: "打开 / 关掉", example: "Turn off the light.", ipa: "/tɜːn ɒf ðə laɪt/" },
      { term: "pick up / put on", definition: "捡起/接人 / 穿上", example: "Pick up the phone!", ipa: "/pɪk ʌp ðə fəʊn/" },
      { term: "come up with / run out of", definition: "想出 / 用完", example: "I ran out of milk.", ipa: "/aɪ ræn aʊt əv mɪlk/" },
    ],
    tips: "短语动词是英语最难的部分之一！每天记2-3个，用句子来记"
  },

  // ========== 语法 > 句型 ==========
  {
    id: 'en-8', title: "被动语态 (Passive Voice)", category: "语法", subcategory: "句型", difficulty: 3,
    pronunciationNote: "弱读：been弱读/bɪn/或/bən/。was/were在被动语态中弱读。The book was written→/ðə bʊk wəz ˈrɪtn/。",
    content: "be + 过去分词，强调动作的承受者。",
    details: [
      { term: "一般现在被动", definition: "am/is/are + done", example: "English is spoken here.", ipa: "/ˈɪŋɡlɪʃ ɪz ˈspəʊkən hɪər/" },
      { term: "一般过去被动", definition: "was/were + done", example: "The book was written in 1900.", ipa: "/ðə bʊk wəz ˈrɪtn ɪn ˈnaɪntiːn ˈhʌndrəd/" },
      { term: "现在完成被动", definition: "has/have been + done", example: "The work has been completed.", ipa: "/ðə wɜːk hæz biːn ˈkɒmpliːtɪd/" },
      { term: "含情态动词被动", definition: "can/must be + done", example: "It must be done today.", ipa: "/ɪt mʌst biː dʌn təˈdeɪ/" },
    ],
    tips: "被动语态的关键：主语是动作的承受者，不是执行者"
  },
  {
    id: 'en-15', title: "条件句 (Conditionals)", category: "语法", subcategory: "句型", difficulty: 3,
    pronunciationNote: "连读：would弱读/wʊd/或/əd/。I'd读/aɪd/。If I were you连读为/ɪf aɪ wɜːr juː/。",
    content: "条件句表示'如果...就...'，根据可能性不同分为四种类型。",
    details: [
      { term: "零条件句", definition: "if + 现在时, 现在时（事实）", example: "If you heat water, it boils.", ipa: "/ɪf juː hiːt ˈwɔːtər, ɪt bɔɪlz/" },
      { term: "第一条件句", definition: "if + 现在时, will + 动词（可能）", example: "If it rains, I will stay home.", ipa: "/ɪf ɪt reɪnz, aɪ wɪl steɪ həʊm/" },
      { term: "第二条件句", definition: "if + 过去时, would + 动词（假设）", example: "If I were rich, I would travel.", ipa: "/ɪf aɪ wɜːr rɪtʃ, aɪ wʊd ˈtrævl/" },
      { term: "第三条件句", definition: "if + 过去完成, would have + 过去分词", example: "If I had studied, I would have passed.", ipa: "/ɪf aɪ hæd ˈstʌdid, aɪ wʊd hæv pɑːst/" },
    ],
    tips: "第二条件句用were不用was（If I were...），这是语法规则！"
  },
  {
    id: 'en-36', title: "间接引语 (Reported Speech)", category: "语法", subcategory: "句型", difficulty: 3,
    pronunciationNote: "语调变化：间接引语用陈述语调（降调），不用疑问语调。said弱读/sed/或/sd/。",
    content: "转述他人的话，时态需要后退一步。",
    details: [
      { term: "现在时 → 过去时", definition: "He says 'I am...' → He said he was...", example: "She said she was tired.", ipa: "/ʃiː sɛd ʃiː wəz ˈtaɪəd/" },
      { term: "过去时 → 过去完成时", definition: "He said 'I did...' → He said he had done...", example: "He said he had finished.", ipa: "/hiː sɛd hiː hæd ˈfɪnɪʃt/" },
      { term: "will → would", definition: "'I will...' → He said he would...", example: "She said she would come.", ipa: "/ʃiː sɛd ʃiː wʊd kʌm/" },
      { term: "时间词变化", definition: "today→that day, tomorrow→the next day", example: "now → then, yesterday → the day before" },
    ],
    tips: "间接引语的核心：时态后退一步！"
  },

  // ========== 语法 > 从句 ==========
  {
    id: 'en-10', title: "定语从句 (Relative Clauses)", category: "语法", subcategory: "从句", difficulty: 3,
    pronunciationNote: "发音注意：who/huː/，which/wɪtʃ/，that弱读/ðət/。whose/huːz/。在非正式英语中that替代who/which时弱读。",
    content: "用 who/which/that/where 引导的从句修饰名词。",
    details: [
      { term: "who/that + 人", definition: "修饰人", example: "The man who lives here is kind.", ipa: "/ðə mæn huː lɪvz hɪər ɪz kaɪnd/" },
      { term: "which/that + 物", definition: "修饰物", example: "The book which I read was great.", ipa: "/ðə bʊk wɪtʃ aɪ rɛd wəz ɡreɪt/" },
      { term: "where", definition: "修饰地点", example: "The city where I was born", ipa: "/ðə ˈsɪti wɛər aɪ wəz bɔːn/" },
      { term: "whose", definition: "表示所属", example: "The girl whose father is a doctor", ipa: "/ðə ɡɜːl huːz ˈfɑːðər ɪz ə ˈdɒktə/" },
    ],
    tips: "that 可以替代 who 和 which（非正式），但 which 不能替代 who"
  },
  {
    id: 'en-37', title: "名词性从句 (Noun Clauses)", category: "语法", subcategory: "从句", difficulty: 3,
    pronunciationNote: "连读：that在从句中弱读/ðət/甚至省略。what连读：what I need→/wɒt aɪ niːd/→wha-tI need。",
    content: "从句充当名词角色，作主语、宾语或表语。",
    details: [
      { term: "that从句", definition: "作宾语", example: "I think that he is right.", ipa: "/aɪ θɪŋk ðət hiː ɪz raɪt/" },
      { term: "what从句", definition: "...的事物", example: "What I need is a break.", ipa: "/wɒt aɪ niːd ɪz ə breɪk/" },
      { term: "whether/if从句", definition: "是否", example: "I don't know whether he will come.", ipa: "/aɪ dəʊnt nəʊ ˈwɛðər hiː wɪl kʌm/" },
      { term: "wh-从句", definition: "疑问词引导", example: "I know where she lives.", ipa: "/aɪ nəʊ wɛər ʃiː lɪvz/" },
    ],
    tips: "what = the thing that。What I said = 我说的话"
  },

  // ========== 语法 > 冠词 ==========
  {
    id: 'en-3', title: "冠词 a/an/the", category: "语法", subcategory: "冠词", difficulty: 1,
    pronunciationNote: "发音规则：a强读/eɪ/，弱读/ə/。an强读/æn/，弱读/ən/。the在辅音前/ðə/，元音前/ði/。",
    content: "英语冠词系统：不定冠词和定冠词的区别。",
    details: [
      { term: "a + 辅音开头", definition: "一个（泛指）", example: "a book, a cat", ipa: "/ə bʊk, ə kæt/" },
      { term: "an + 元音开头", definition: "一个（泛指）", example: "an apple, an hour", ipa: "/ən ˈæpl, ən ˈaʊər/" },
      { term: "the", definition: "这个/那个（特指）", example: "The book on the table", ipa: "/ðə bʊk ɒn ðə ˈteɪbl/" },
      { term: "零冠词", definition: "泛指/不可数", example: "I love music. Water is life.", ipa: "/aɪ lʌv ˈmjuːzɪk. ˈwɔːtər ɪz laɪf/" },
    ],
    tips: "和法语不同！英语泛指抽象名词时不用冠词：I like coffee（法语：J'aime LE café）"
  },

  // ========== 语法 > 词性 ==========
  {
    id: 'en-14', title: "常用词搭配 (Collocations)", category: "语法", subcategory: "词性", difficulty: 2,
    pronunciationNote: "连读规则：make a连读/meɪk ə/→ma-ka，do the连读/duː ðə/→do-the。搭配中的冠词和介词通常弱读，重音落在名词上。",
    content: "某些词总是固定搭配使用，记住这些搭配让英语更自然！",
    details: [
      { term: "make + 名词", definition: "make a decision/mistake/effort", example: "I made a mistake.", ipa: "/aɪ meɪd ə mɪˈsteɪk/" },
      { term: "do + 名词", definition: "do homework/exercise/the dishes", example: "I need to do my homework.", ipa: "/aɪ niːd tə duː maɪ ˈhəʊmwɜːk/" },
      { term: "have + 名词", definition: "have a break/lunch/a chat", example: "Let's have a break.", ipa: "/lɛts hæv ə breɪk/" },
      { term: "take + 名词", definition: "take a photo/a shower", example: "Take a photo!", ipa: "/teɪk ə ˈfəʊtəʊ/" },
      { term: "catch + 名词", definition: "catch a cold/a bus", example: "I caught the 8 o'clock bus.", ipa: "/aɪ kɔːt ði eɪt əˈklɒk bʌs/" },
    ],
    tips: "make强调'创造'，do强调'执行'。make a cake(做蛋糕=创造)，do the dishes(洗碗=执行)"
  },

  // ========== 发音 ==========
  {
    id: 'en-9', title: "英式 vs 美式英语", category: "发音", subcategory: "英式vs美式", difficulty: 1,
    pronunciationNote: "发音差异重点：①r音——英式不卷舌car/kɑː/，美式卷舌/kɑːr/ ②t音——英式water/ˈwɔːtə/，美式/ˈwɑːt̬ɚ/（t变d） ③a音——英式bath/bɑːθ/，美式/bæθ/。",
    content: "英式英语和美式英语在词汇、拼写、发音上的差异。",
    details: [
      { term: "词汇差异", definition: "英→美", example: "flat→apartment, lift→elevator, rubbish→trash", ipa: "/flæt→əˈpɑːrtmənt, lɪft→ˈɛlɪveɪtər/" },
      { term: "拼写差异", definition: "英→美", example: "colour→color, centre→center", ipa: "/ˈkʌlər→ˈkʌlər, ˈsɛntər→ˈsɛntər/" },
      { term: "发音差异", definition: "r发音", example: "英式 /kɑː/ (不卷舌) vs 美式 /kɑːr/ (卷舌)", ipa: "/kɑː/ vs /kɑːr/" },
      { term: "语法差异", definition: "现在完成时", example: "英: I've lost my key vs 美: I lost my key", ipa: "/aɪv lɒst maɪ kiː/ vs /aɪ lɒst maɪ kiː/" },
    ],
    tips: "两种都对！选一种坚持学就好，英式更优雅，美式更实用"
  },
  {
    id: 'en-38', title: "英语连读与弱读", category: "发音", subcategory: "发音规则", difficulty: 2,
    pronunciationNote: "连读三大规则：①辅音+元音连读（an apple→a-napple）②辅音+辅音合并（bad dog→ba-dog）③元音+元音插入j/w（go out→go-w-out）。",
    content: "英语母语者说话时有很多连读和弱读现象。",
    details: [
      { term: "辅音+元音连读", definition: "前词尾辅音+后词首元音", example: "an apple → a-napple", ipa: "/ən ˈæpl → ə ˈnæpl/" },
      { term: "弱读 of", definition: "of → /əv/", example: "a cup of tea → a cuppa tea", ipa: "/ə kʌp əv tiː → ə ˈkʌpə tiː/" },
      { term: "弱读 to", definition: "to → /tə/", example: "go to school → go-ta school", ipa: "/ɡəʊ tə skuːl → ɡəʊ tə skuːl/" },
      { term: "gonna/wanna", definition: "going to / want to 的弱读", example: "I'm gonna be late.", ipa: "/aɪm ˈɡɒnə biː leɪt/" },
      { term: "英式吞音", definition: "t在辅音前常省略", example: "next day → nex day", ipa: "/nɛkst deɪ → nɛks deɪ/" },
    ],
    tips: "连读是听懂母语者的关键！不需要你自己连读，但要能听出来。"
  },

  // ========== 词汇 > 日常表达 ==========
  {
    id: 'en-13', title: "英语日常高频表达", category: "词汇", subcategory: "日常表达", difficulty: 1,
    pronunciationNote: "口语缩读：gonna/ˈɡɒnə/=going to，wanna/ˈwɒnə/=want to。how's it读/haʊz ɪt/，cup of tea连读为cuppa/ˈkʌpə/。中国学生注意：不要每个词都读得很清楚，口语中要自然弱读。",
    content: "英语母语者每天都在说的表达！",
    details: [
      { term: "How's it going?", definition: "最近怎么样？", example: "Hey, how's it going? — Not bad!", ipa: "/haʊz ɪt ˈɡəʊɪŋ/" },
      { term: "I'm gonna...", definition: "我要...(口语缩写)", example: "I'm gonna be late.", ipa: "/aɪm ˈɡɒnə biː leɪt/" },
      { term: "No worries.", definition: "没关系", example: "Sorry! — No worries!", ipa: "/nəʊ ˈwʌriz/" },
      { term: "I can't be bothered.", definition: "我懒得", example: "I can't be bothered to cook.", ipa: "/aɪ kɑːnt biː ˈbɒðəd tə kʊk/" },
      { term: "It's not my cup of tea.", definition: "不是我的菜", example: "Horror movies? Not my cup of tea.", ipa: "/ɪts nɒt maɪ kʌp əv tiː/" },
      { term: "I'm broke.", definition: "我没钱了", example: "Want to go shopping? I'm broke.", ipa: "/aɪm brəʊk/" },
    ],
    tips: "gonna = going to，wanna = want to。这些在日常对话中非常常见！"
  },
  {
    id: 'en-39', title: "英式地道表达 (British Slang)", category: "词汇", subcategory: "高频表达", difficulty: 2,
    pronunciationNote: "英式特色发音：cheers读/tʃɪəz/，knackered读/ˈnækəd/（英式r不卷舌）。Bob's your uncle连读为/bɒbz jɔːr ˈʌŋkl/。brilliant口语中常缩短为/brɪl/。",
    content: "英国人特有的地道表达，让你的英语更英式！",
    details: [
      { term: "Cheers!", definition: "谢谢/干杯", example: "Cheers mate! (谢谢伙计！)", ipa: "/tʃɪəz meɪt/" },
      { term: "Brilliant!", definition: "太棒了！", example: "That's brilliant!", ipa: "/ðæts ˈbrɪliənt/" },
      { term: "I'm knackered.", definition: "我累坏了", example: "After work, I'm absolutely knackered.", ipa: "/ˈɑːftə wɜːk, aɪm ˌæbsəˈluːtli ˈnækəd/" },
      { term: "It's minted!", definition: "太酷了！", example: "That new phone is minted!", ipa: "/ðæt njuː fəʊn ɪz ˈmɪntɪd/" },
      { term: "Bob's your uncle!", definition: "就这么简单！", example: "Add salt, stir, and Bob's your uncle!", ipa: "/bɒbz jɔːr ˈʌŋkl/" },
      { term: "It's cheeky!", definition: "厚脸皮的/调皮的", example: "That's a bit cheeky!", ipa: "/ðæts ə bɪt ˈtʃiːki/" },
    ],
    tips: "这些表达在英国街头天天能听到！学会几个让你的英语瞬间变地道。"
  },

  // ========== 文化 ==========
  {
    id: 'en-40', title: "英国文化常识", category: "文化", subcategory: "英国文化", difficulty: 1,
    pronunciationNote: "文化词汇发音：queue/kjuː/（注意不是/kwiː/），pub/pʌb/，scone/skɒn/（英式）或/skəʊn/（美式）。dry humour读/draɪ ˈhjuːmər/。",
    content: "了解英国文化能让你更好地理解英式英语！",
    details: [
      { term: "排队文化", definition: "英国人什么都排队", example: "插队(jump the queue)是严重的社交禁忌", ipa: "/dʒʌmp ðə kjuː/" },
      { term: "下午茶", definition: "Afternoon tea", example: "茶+司康饼+三明治，下午3-4点", ipa: "/ˌɑːftəˈnjuːn tiː/" },
      { term: "天气话题", definition: "社交润滑剂", example: "'Lovely day!' 是开启对话的好方式", ipa: "/ˈlʌvli deɪ/" },
      { term: "Pub文化", definition: "酒吧是社交中心", example: "不是喝酒的地方，是朋友聚会的场所", ipa: "/pʌb/" },
      { term: "幽默方式", definition: "Dry humour / Sarcasm", example: "英国人的幽默很含蓄，经常是反着说", ipa: "/draɪ ˈhjuːmər / ˈsɑːkæzəm/" },
    ],
    tips: "英国人最讨厌插队！在伦敦排队是一种生活方式。"
  },

  // ========== 语法 > 口语易错点 (由简到难) ==========
  {
    id: 'en-41', title: "口语易错：I am / I'm 缩写混淆", category: "语法", subcategory: "口语易错", difficulty: 1,
    pronunciationNote: "缩写发音：I'm/aɪm/，you're/jɔːr/，he's/hiːz/，she's/ʃiːz/，we're/wɪər/，they're/ðɛər/。中国学生常犯错误：把I'm读成两个音节，应该是一个音节。",
    content: "初学者最容易犯的错误！am/is/are的缩写形式搞混。",
    details: [
      { term: "❌ I'm is a student.", definition: "重复了be动词", example: "✅ I'm a student. / I am a student." },
      { term: "❌ I is happy.", definition: "I后面一定是am", example: "✅ I am happy. / I'm happy." },
      { term: "❌ He're coming.", definition: "he后面不能用're", example: "✅ He's coming. (he is)" },
      { term: "缩写规则", definition: "I am→I'm, you are→you're, he is→he's", example: "she's, we're, they're" },
    ],
    tips: "记住：I永远配am，he/she/it配is，you/we/they配are。口语中一定要用缩写！"
  },
  {
    id: 'en-42', title: "口语易错：he/she 不分", category: "语法", subcategory: "口语易错", difficulty: 1,
    pronunciationNote: "发音区别：he/hiː/（长音）vs she/ʃiː/（sh音）。his/hɪz/ vs her/hɜːr/。him/hɪm/弱读/ɪm/。中国学生特别注意：中文口语他/她同音，但英语完全不同。",
    content: "中文口语不分他/她，但英语一定要分！这是中国学生最常见的口语错误。",
    details: [
      { term: "he = 他 (男性)", definition: "he/his/him", example: "He is my brother." },
      { term: "she = 她 (女性)", definition: "she/her/her", example: "She is my sister." },
      { term: "❌ 常见错误", definition: "说 My friend, he is... 但朋友是女性", example: "✅ My friend, she is..." },
      { term: "his vs her", definition: "他的 vs 她的", example: "❌ Her name is Tom → ✅ His name is Tom" },
    ],
    tips: "口语练习时特别注意！介绍人时先确认性别再说he/she。"
  },
  {
    id: 'en-43', title: "口语易错：时态混用 (现在时 vs 进行时)", category: "语法", subcategory: "口语易错", difficulty: 2,
    pronunciationNote: "缩读注意：I'm working读/aɪm ˈwɜːkɪŋ/，连读时m和w之间自然过渡。状态动词I know读/aɪ nəʊ/，不能读成I'm knowing。",
    content: "口语中最容易把一般现在时和现在进行时搞混！",
    details: [
      { term: "一般现在时", definition: "habit/fact (习惯/事实)", example: "I work every day." },
      { term: "现在进行时", definition: "now (正在做)", example: "I'm working now." },
      { term: "❌ I'm working every day.", definition: "习惯性动作不用进行时", example: "✅ I work every day." },
      { term: "❌ I work now.", definition: "正在做要用进行时", example: "✅ I'm working now." },
      { term: "状态动词不用进行时", definition: "know/like/want/need", example: "❌ I'm knowing → ✅ I know" },
    ],
    tips: "口诀：经常做=一般现在时，正在做=进行时。状态动词(know/like/want)永远不用进行时！"
  },
  {
    id: 'en-44', title: "口语易错：过去时 vs 现在完成时", category: "语法", subcategory: "口语易错", difficulty: 2,
    pronunciationNote: "I've been读/aɪv biːn/，have弱读/həv/。I went读/aɪ wɛnt/。中国学生常忘记用have/has，直接说I go/I go there。",
    content: "中国学生口语中经常混用这两个时态！",
    details: [
      { term: "一般过去时", definition: "过去发生，与现在无关", example: "I went to Paris last year." },
      { term: "现在完成时", definition: "过去发生，影响现在", example: "I have been to Paris. (我去过巴黎)" },
      { term: "❌ I have gone there yesterday.", definition: "具体时间不能用完成时", example: "✅ I went there yesterday." },
      { term: "❌ I went to Paris 3 times.", definition: "强调次数用完成时", example: "✅ I have been to Paris 3 times." },
      { term: "信号词", definition: "yesterday/last→过去时", example: "ever/never/already→完成时" },
    ],
    tips: "有具体时间(yesterday/last week)→用过去时。没有具体时间，强调经历→用完成时。"
  },
  {
    id: 'en-45', title: "口语易错：可数 vs 不可数名词", category: "语法", subcategory: "口语易错", difficulty: 2,
    pronunciationNote: "some在不可数名词前弱读/səm/。a lot of连读为/ə lɒt əv/→a-lo-ta。information读/ˌɪnfəˈmeɪʃn/（注意不是/ˌɪnfərˈmeɪʃn/）。",
    content: "口语中经常忘记名词可数/不可数的区别！",
    details: [
      { term: "❌ I need an information.", definition: "information不可数", example: "✅ I need some information." },
      { term: "❌ I have many homework.", definition: "homework不可数", example: "✅ I have a lot of homework." },
      { term: "❌ Can you give me an advice?", definition: "advice不可数", example: "✅ Can you give me some advice?" },
      { term: "❌ I have a good news!", definition: "news不可数", example: "✅ I have good news!" },
      { term: "常见不可数词", definition: "information/homework/advice/news/furniture", example: "都不可数！不能加s，不能用a/an" },
    ],
    tips: "这些词中文可以数（一个消息、一条新闻），但英语不可数！用some/a lot of代替。"
  },
  {
    id: 'en-46', title: "口语易错：make vs do 混用", category: "语法", subcategory: "口语易错", difficulty: 2,
    pronunciationNote: "make读/meɪk/，made读/meɪd/。do读/duː/，did读/dɪd/。make a连读/meɪk ə/，do the连读/duː ðə/。重音在名词上，动词弱读。",
    content: "make和do都表示'做'，但搭配完全不同！",
    details: [
      { term: "make = 创造/产生", definition: "make a cake/decision/mistake", example: "I made a mistake." },
      { term: "do = 执行/做", definition: "do homework/exercise/the dishes", example: "I do my homework." },
      { term: "❌ I did a mistake.", definition: "错误用make不用do", example: "✅ I made a mistake." },
      { term: "❌ I make my homework.", definition: "作业用do不用make", example: "✅ I do my homework." },
      { term: "make搭配", definition: "make money/a call/a plan/a mess", example: "Make a phone call!" },
      { term: "do搭配", definition: "do the laundry/a favour/business", example: "Can you do me a favour?" },
    ],
    tips: "make强调'创造'出新的东西，do强调'执行'某个任务。"
  },
  {
    id: 'en-47', title: "口语易错：介词 in/on/at 混用", category: "语法", subcategory: "口语易错", difficulty: 2,
    pronunciationNote: "介词弱读：in/ɪn/弱读/ən/，on/ɒn/弱读/ən/，at/æt/弱读/ət/。在快速口语中介词几乎听不到，靠上下文理解。中国学生常把on读成/ɒn/（正确）而不是/ɑːn/。",
    content: "口语中介词用错是最常见的错误！",
    details: [
      { term: "❌ I'm in Monday free.", definition: "具体日期用on", example: "✅ I'm free on Monday." },
      { term: "❌ I was born in July 5th.", definition: "具体日期用on", example: "✅ I was born on July 5th." },
      { term: "时间介词规则", definition: "at+具体时间, on+日期, in+月/年", example: "at 3pm, on Monday, in July, in 2024" },
      { term: "地点介词规则", definition: "at+小地点, in+大地点, on+表面", example: "at the door, in London, on the table" },
    ],
    tips: "口诀：at小on大in更大。at+具体时刻，on+具体日期，in+月份/年份/季节。"
  },
  {
    id: 'en-48', title: "口语易错：条件句 if + 时态错误", category: "语法", subcategory: "口语易错", difficulty: 3,
    pronunciationNote: "if弱读/ɪf/。If I were连读/ɪf aɪ wɜːr/。would've读/ˈwʊdəv/（口语）。中国学生常把if读成/iːf/（长音），应该读短音/ɪf/。",
    content: "口语中条件句时态用错是高级学习者常见问题！",
    details: [
      { term: "❌ If I will have money...", definition: "if后面不能用will!", example: "✅ If I have money... / If I had money..." },
      { term: "真实条件", definition: "if + 现在时, will + 动词", example: "If it rains, I will stay home." },
      { term: "假设条件", definition: "if + 过去时, would + 动词", example: "If I were you, I would go." },
      { term: "❌ If I was you...", definition: "正式语法用were不用was", example: "✅ If I were you... (虚拟语气)" },
    ],
    tips: "黄金规则：if后面永远不用will/would！If I were you是最经典的用法。"
  },
  {
    id: 'en-49', title: "口语易错：中式英语 (Chinglish)", category: "语法", subcategory: "口语易错", difficulty: 3,
    pronunciationNote: "中式英语常把每个字都读得很重，应该学会英语的节奏感：重读内容词（名词/动词/形容词），弱读功能词（冠词/介词/助动词）。turn on连读/tɜːn ɒn/。",
    content: "中文思维直译成英语，是口语中最常见的错误来源！",
    details: [
      { term: "❌ I very like it.", definition: "very不能直接修饰动词", example: "✅ I really like it. / I like it a lot." },
      { term: "❌ My body is not very good.", definition: "身体好不说body", example: "✅ I'm not feeling well." },
      { term: "❌ Open the light.", definition: "开灯不说open", example: "✅ Turn on the light." },
      { term: "❌ I play computer.", definition: "玩电脑不说play computer", example: "✅ I use the computer." },
      { term: "❌ People mountain people sea.", definition: "人山人海不能直译", example: "✅ It's packed! / It's crowded!" },
    ],
    tips: "避免中式英语的最好方法：多听英语母语者的表达，不要逐字翻译中文！"
  },

  // ========== 新增知识点 ==========
  {
    id: 'en-50', title: "there is / there are 存在句", category: "语法", subcategory: "句型", difficulty: 1,
    pronunciationNote: "there弱读/ðər/，与they are /ðɛər/发音不同。there's/ðɛərz/，there're/ðɛərər/。口语中常用there's代替there are（非正式）。中国学生注意不要读成/ðɪər/。",
    content: "表示'某处有某物'，用there is/are。",
    details: [
      { term: "There is + 单数/不可数", definition: "有一个...", example: "There is a book on the table." },
      { term: "There are + 复数", definition: "有一些...", example: "There are two cats in the garden." },
      { term: "否定", definition: "There isn't/aren't", example: "There isn't any milk." },
      { term: "疑问", definition: "Is there...? / Are there...?", example: "Is there a bank near here?" },
    ],
    tips: "there is/are ≠ they are！there是引导词，不是'那里'的意思。",
    commonErrors: ["❌ There has a book. → ✅ There is a book.", "❌ There is two cats. → ✅ There are two cats."],
    mnemonic: "there be句型：be动词跟后面的名词一致。单数用is，复数用are"
  },
  {
    id: 'en-51', title: "some / any 用法", category: "语法", subcategory: "词性", difficulty: 1,
    pronunciationNote: "some强读/sʌm/，弱读/səm/。any读/ˈɛni/。somebody读/ˈsʌmbədi/，anybody读/ˈɛnibədi/。在疑问句中some读强读形式表示期待肯定回答。",
    content: "some用于肯定句，any用于否定和疑问句。",
    details: [
      { term: "some + 名词", definition: "一些（肯定句）", example: "I have some money." },
      { term: "any + 名词", definition: "任何（否定/疑问）", example: "Do you have any questions?" },
      { term: "some用于疑问句", definition: "表示请求/邀请", example: "Would you like some tea?" },
      { term: "somebody/anybody", definition: "有人/任何人", example: "Is anybody there?" },
    ],
    tips: "规则：肯定用some，否定疑问用any。但请求/邀请用some！",
    commonErrors: ["❌ I don't have some money. → ✅ I don't have any money.", "❌ Do you have some time? → ✅ Do you have any time?"],
    mnemonic: "肯定some否定any，请求邀请用some"
  },
  {
    id: 'en-52', title: "much / many / a lot of", category: "语法", subcategory: "词性", difficulty: 1,
    pronunciationNote: "much/mʌtʃ/，many/ˈmɛni/。a lot of连读为/ə lɒt əv/。how much读/haʊ mʌtʃ/，how many读/haʊ ˈmɛni/。中国学生注意much和many的元音不同。",
    content: "much修饰不可数名词，many修饰可数名词，a lot of两者都可以。",
    details: [
      { term: "much + 不可数", definition: "很多（不可数）", example: "How much water?" },
      { term: "many + 可数复数", definition: "很多（可数）", example: "How many books?" },
      { term: "a lot of / lots of", definition: "很多（通用）", example: "a lot of money / a lot of books" },
      { term: "a few / a little", definition: "一些（few可数/little不可数）", example: "a few friends / a little time" },
    ],
    tips: "口语中a lot of比much/many更常用！much多用于否定和疑问。",
    commonErrors: ["❌ I have much friends. → ✅ I have many friends.", "❌ How much books? → ✅ How many books?"],
    mnemonic: "much不可数，many可数，a lot of万能"
  },
  {
    id: 'en-53', title: "形容词顺序 (Order of Adjectives)", category: "语法", subcategory: "词性", difficulty: 2,
    pronunciationNote: "多个形容词连读时，重音落在最后一个形容词上。beautiful读/ˈbjuːtɪfl/，注意不是/bjuːˈtɪfʊl/。中国学生容易把每个形容词都重读，应该只重读最后一个。",
    content: "多个形容词修饰名词时有固定顺序！",
    details: [
      { term: "观点→大小→年龄→形状→颜色→来源→材料→用途", definition: "形容词顺序规则", example: "a beautiful small old round red Italian wooden dining table" },
      { term: "常用顺序", definition: "opinion-size-age-shape-colour-origin-material-purpose", example: "a lovely long curly blonde hair" },
      { term: "实际用法", definition: "一般不超过3个形容词", example: "a nice old house (✓) 不说 a nice old stone Victorian house" },
    ],
    tips: "不需要记住全部顺序！记住常用的：观点→大小→颜色→材料",
    mnemonic: "观点大小年龄形状，颜色来源材料用途。OSASCOMP口诀"
  },
  {
    id: 'en-54', title: "used to / be used to / get used to", category: "语法", subcategory: "动词", difficulty: 2,
    pronunciationNote: "used to读/juːst tə/（t弱读），be used to读/biː juːzd tə/（d发音）。中国学生常把used to读成/juːzd tuː/，应该是/juːst tə/。get used to中d发音。",
    content: "三个'used to'用法完全不同！",
    details: [
      { term: "used to + 动词", definition: "过去常常（现在不做了）", example: "I used to smoke." },
      { term: "be used to + 名词/doing", definition: "习惯于", example: "I'm used to getting up early." },
      { term: "get used to + 名词/doing", definition: "逐渐习愤", example: "I'm getting used to the cold weather." },
    ],
    tips: "used to do=过去常常，be used to=习惯，get used to=变得习惯",
    commonErrors: ["❌ I used to going there. → ✅ I used to go there.", "❌ I'm used to wake up early. → ✅ I'm used to waking up early."],
    mnemonic: "used to do=过去习愤（不再做了），be used to doing=习惯做"
  },
  {
    id: 'en-55', title: "too / enough 用法", category: "语法", subcategory: "词性", difficulty: 1,
    pronunciationNote: "too读/tuː/，enough读/ɪˈnʌf/（注意gh不发音）。too...to连读：too big to读/tuː bɪɡ tə/。enough在形容词后，to在enough后，to弱读/tə/。",
    content: "too表示'太...'（负面），enough表示'足够...'。",
    details: [
      { term: "too + 形容词", definition: "太...（不好）", example: "It's too expensive." },
      { term: "too + 形容词 + to do", definition: "太...而不能", example: "It's too cold to go out." },
      { term: "形容词 + enough", definition: "足够...", example: "It's warm enough." },
      { term: "not + 形容词 + enough", definition: "不够...", example: "It's not big enough." },
    ],
    tips: "too在后：too big。enough在前：big enough。位置不同！",
    commonErrors: ["❌ It's enough big. → ✅ It's big enough.", "❌ It's too hot that I can't go. → ✅ It's too hot to go out."],
    mnemonic: "too在前，enough在后。too big但big enough"
  },
  {
    id: 'en-56', title: "will vs would 区别", category: "语法", subcategory: "动词", difficulty: 2,
    pronunciationNote: "will弱读/wɪl/，I'll读/aɪl/。would弱读/wʊd/，I'd读/aɪd/。would like连读/wʊd laɪk/。would've读/ˈwʊdəv/。中国学生注意：will和would的元音不同/ɪ/ vs /ʊ/。",
    content: "will表示现在/将来的决定，would表示假设/礼貌/过去习惯。",
    details: [
      { term: "will + 动词", definition: "即时决定/承诺", example: "I'll help you." },
      { term: "would + 动词", definition: "假设/礼貌请求", example: "Would you like tea?" },
      { term: "would表示过去习惯", definition: "过去常常", example: "When I was young, I would play in the park." },
      { term: "would like = want的礼貌版", definition: "想要", example: "I would like a coffee, please." },
    ],
    tips: "will更直接，would更礼貌更委婉。点单时说I'd like比I want礼貌得多！",
    mnemonic: "will=现在决定，would=礼貌/假设/过去习愤"
  },
  {
    id: 'en-57', title: "英语数字读法", category: "发音", subcategory: "发音规则", difficulty: 1,
    pronunciationNote: "重音模式：-teen数字重音在后（thirTEEN /θɜːˈtiːn/），-ty数字重音在前（THIRty /ˈθɜːti/）。中国学生最容易混混15(fifTEEN)和50(FIFTY)，注意重音位置！hundred读/ˈhʌndrəd/。",
    content: "英语数字的读法和中文有很大不同！",
    details: [
      { term: "13-19 (thirteen~nineteen)", definition: "-teen结尾，重音在后", example: "thirTEEN, fourTEEN" },
      { term: "30-90 (thirty~ninety)", definition: "-ty结尾，重音在前", example: "THIRty, FORTY" },
      { term: "百/千/百万", definition: "hundred/thousand/million", example: "two hundred and fifty (250)" },
      { term: "英式数字读法", definition: "and在百位后", example: "one hundred and one (101)" },
    ],
    tips: "-teen和-ty最容易混淆！注意重音位置：thirTEEN vs THIRty",
    commonErrors: ["❌ 15读成fivety → ✅ fifteen", "❌ 50读成fiveteen → ✅ fifty"],
    mnemonic: "13-19重音在后(-teen)，30-90重音在前(-ty)"
  },
  {
    id: 'en-58', title: "英语日期和时间表达", category: "文化", subcategory: "日常表达", difficulty: 1,
    pronunciationNote: "日期读法：25th读/twɛnˈtiː fɪfθ/，不是twenty five。星期Monday/ˈmʌndeɪ/，重音在第一音节。half past连读/hɑːf pɑːst/，quarter读/ˈkwɔːtər/。",
    content: "英式日期和时间表达与中文差异很大。",
    details: [
      { term: "英式日期格式", definition: "日/月/年", example: "25/12/2024 (英式) vs 12/25/2024 (美式)" },
      { term: "星期表达", definition: "Monday, Tuesday...", example: "What day is it? — It's Wednesday." },
      { term: "英式报时", definition: "past/to系统", example: "half past three (3:30), quarter to four (3:45)" },
      { term: "am/pm", definition: "上午/下午", example: "9am = 上午9点, 9pm = 晚上9点" },
    ],
    tips: "英式日期：日/月/年。美式：月/日/年。别搞混！",
    mnemonic: "英式日月年(DMY)，美式月日年(MDY)"
  },
  {
    id: 'en-59', title: "英语电话用语", category: "词汇", subcategory: "日常表达", difficulty: 1,
    pronunciationNote: "This is读/ðɪs ɪz/→连读/ðɪsɪz/。Could I读/kʊd aɪ/→连读/kʊdaɪ/。hold on连读/həʊld ɒn/→hol-don。中国学生注意：电话中this is不是说“这是”，是说“我是”。",
    content: "英语打电话有固定的表达方式！",
    details: [
      { term: "开场", definition: "This is [name] speaking.", example: "Hello, this is Mary speaking." },
      { term: "找某人", definition: "Could I speak to...?", example: "Could I speak to Mr. Smith?" },
      { term: "留言", definition: "Can I leave a message?", example: "Can I leave a message for him?" },
      { term: "稍等", definition: "Hold on / One moment, please.", example: "Hold on, I'll get him." },
      { term: "结束", definition: "Speak to you soon. / Bye for now.", example: "Thanks for calling. Bye!" },
    ],
    tips: "电话中不说'I am Mary'，说'This is Mary speaking'！",
    mnemonic: "电话用this is/that is，不说I am/he is"
  },
  {
    id: 'en-60', title: "英语邮件写作格式", category: "词汇", subcategory: "日常表达", difficulty: 2,
    pronunciationNote: "Dear读/dɪər/（英式不卷舌）。faithfully读/ˈfeɪθfəli/（th读/θ/）。sincerely读/sɪnˈsɪəli/。中国学生注意：faithfully和sincerely的th都读清音/θ/。",
    content: "英式邮件有严格的格式和礼貌用语。",
    details: [
      { term: "正式开头", definition: "Dear Sir/Madam, (不知道名字)", example: "Dear Sir/Madam, I am writing to..." },
      { term: "半正式开头", definition: "Dear Mr/Mrs/Dr + 姓", example: "Dear Dr Smith," },
      { term: "非正式开头", definition: "Hi/Hello + 名字", example: "Hi John," },
      { term: "正式结尾", definition: "Yours faithfully (不知名) / Yours sincerely (知名)", example: "Yours faithfully," },
      { term: "非正式结尾", definition: "Best wishes / Kind regards", example: "Best wishes, [name]" },
    ],
    tips: "知道对方名字用Yours sincerely，不知道用Yours faithfully！",
    mnemonic: "不知名faithfully(忠实)，知名sincerely(真诚)"
  },
  {
    id: 'en-61', title: "英语常见缩写 (Contractions)", category: "发音", subcategory: "日常表达", difficulty: 1,
    pronunciationNote: "缩写发音规则：I'm/aɪm/，don't/dəʊnt/，won't/wəʊnt/（注意不是/wɒnt/），can't英/kɑːnt/美/kænt/，isn't/ˈɪznt/。中国学生常把won't和want混混，won't是/wəʊnt/而want是/wɒnt/。",
    content: "英语口语中大量使用缩写，不用缩写会显得很不自然。",
    details: [
      { term: "I'm / You're / He's", definition: "I am / You are / He is", example: "I'm fine. You're welcome." },
      { term: "don't / doesn't / didn't", definition: "do not / does not / did not", example: "I don't know." },
      { term: "I've / I'll / I'd", definition: "I have / I will / I would", example: "I've got it. I'll go. I'd like..." },
      { term: "won't", definition: "will not (特殊变化！)", example: "I won't be late." },
      { term: "isn't / aren't / can't", definition: "is not / are not / cannot", example: "It isn't fair." },
    ],
    tips: "won't是will not的特殊缩写！不是willn't。",
    commonErrors: ["❌ willn't → ✅ won't", "❌ am not → ✅ I'm not (没有amn't)"],
    mnemonic: "will not = won't (特殊！)，其余都是not→n't"
  },
  {
    id: 'en-62', title: "英语问路用语", category: "词汇", subcategory: "日常表达", difficulty: 1,
    pronunciationNote: "excuse me读/ɪkˈskjuːz miː/。how do I连读/haʊ duː aɪ/→how-do-I。straight读/streɪt/（注意不是/streɪtʃ/）。opposite读/ˈɒpəzɪt/。中国学生注意straight的元音。",
    content: "在英国问路和指路的标准表达。",
    details: [
      { term: "问路", definition: "Excuse me, how do I get to...?", example: "Excuse me, how do I get to the station?" },
      { term: "直走", definition: "Go straight ahead / Go along this road", example: "Go straight and turn left." },
      { term: "转弯", definition: "Turn left/right at the...", example: "Turn right at the traffic lights." },
      { term: "在...旁边", definition: "It's next to / opposite / between", example: "It's next to the post office." },
      { term: "距离", definition: "It's about a 10-minute walk.", example: "It's not far. About 5 minutes." },
    ],
    tips: "英国人指路用地标：'past the church, then left at the roundabout'",
    mnemonic: "问路用How do I get to...，不说Where is...(虽然也能懂)"
  },
  {
    id: 'en-63', title: "英语比较级和最高级", category: "语法", subcategory: "词性", difficulty: 2,
    pronunciationNote: "比较级-er读/ər/，最高级-est读/ɪst/。bigger读/ˈbɪɡər/（g双写但只发一个音）。more读/mɔːr/，most读/məʊst/。as...as中第一个as弱读/əz/。中国学生注意-er不要读成两个音节。",
    content: "形容词和副词的比较级和最高级变化规则。",
    details: [
      { term: "短形容词 +er/+est", definition: "big→bigger→biggest", example: "taller than / the tallest" },
      { term: "长形容词 more/most", definition: "beautiful→more beautiful→most beautiful", example: "more interesting than / the most interesting" },
      { term: "不规则变化", definition: "good→better→best, bad→worse→worst", example: "better than / the best" },
      { term: "as...as", definition: "和...一样", example: "She's as tall as her mother." },
    ],
    tips: "单音节加-er/-est，多音节用more/most。不规则的要单独记！",
    commonErrors: ["❌ more big → ✅ bigger", "❌ most good → ✅ the best"],
    mnemonic: "短词加er/est，长词用more/most。good-better-best特殊记"
  },
  {
    id: 'en-64', title: "英语否定表达大全", category: "语法", subcategory: "句型", difficulty: 2,
    pronunciationNote: "never读/ˈnɛvər/，hardly读/ˈhɑːdli/，barely读/ˈbɛəli/。don't弱读/dəʊnt/，doesn't读/ˈdʌznt/。neither英式读/ˈnaɪðər/，美式读/ˈniːðər/。中国学生注意：never和not不能同时使用。",
    content: "英语有多种否定方式，每种语气不同。",
    details: [
      { term: "not", definition: "基本否定", example: "I don't like it." },
      { term: "never", definition: "从不", example: "I never eat meat." },
      { term: "no + 名词", definition: "没有", example: "I have no idea." },
      { term: "neither...nor", definition: "既不...也不", example: "Neither Tom nor Jerry came." },
      { term: "hardly/barely", definition: "几乎不", example: "I can hardly hear you." },
      { term: "双重否定（非标准）", definition: "I can't get no...", example: "标准：I can't get any. (非标准口语常见)" },
    ],
    tips: "英语中双重否定在标准语法中是错误的！I don't know nothing ❌",
    commonErrors: ["❌ I don't know nothing. → ✅ I don't know anything.", "❌ I never eat nothing. → ✅ I never eat anything."],
    mnemonic: "否定词只有一个！never/not/no/hardly选一个就够了"
  },
  {
    id: 'en-65', title: "英国NHS就医指南", category: "文化", subcategory: "英国文化", difficulty: 1,
    pronunciationNote: "GP读/dʒiː ˈpiː/（不是/dʒiːpiː/）。NHS读/ɛn eɪtʃ ɛs/。A&E读/eɪ ænd iː/。prescription读/prɪˈskrɪpʃn/。appointment读/əˈpɔɪntmənt/。中国学生注意prescription的重音在第二音节。",
    content: "在英国看病的流程和常用表达。",
    details: [
      { term: "GP (General Practitioner)", definition: "全科医生（第一步）", example: "I need to see a GP." },
      { term: "register with a GP", definition: "注册全科医生", example: "I need to register with a local GP." },
      { term: "make an appointment", definition: "预约", example: "I'd like to make an appointment." },
      { term: "A&E (Accident & Emergency)", definition: "急诊", example: "Go to A&E for emergencies." },
      { term: "prescription", definition: "处方", example: "The doctor gave me a prescription." },
      { term: "NHS免费", definition: "全民免费医疗", example: "Treatment on the NHS is free at the point of use." },
    ],
    tips: "在英国看病先找GP，不要直接去A&E（除非紧急）！",
    mnemonic: "GP→预约→看病→处方。急诊才去A&E"
  },
  {
    id: 'en-66', title: "英语面试用语", category: "词汇", subcategory: "高频表达", difficulty: 3,
    pronunciationNote: "strengths读/streŋθs/（注意th+/s/），weaknesses读/ˈwiːknəsɪz/。professional读/prəˈfɛʃənl/。improving读/ɪmˈpruːvɪŋ/。中国学生特别注意strengths的th+s组合发音。",
    content: "英语面试中的标准表达和技巧。",
    details: [
      { term: "自我介绍", definition: "Tell me about yourself.", example: "I'm a motivated professional with..." },
      { term: "优势", definition: "What are your strengths?", example: "My key strengths include..." },
      { term: "劣势", definition: "What are your weaknesses?", example: "I'm working on improving..." },
      { term: "离职原因", definition: "Why did you leave?", example: "I'm looking for new challenges." },
      { term: "提问环节", definition: "Do you have any questions?", example: "Could you tell me more about the team?" },
    ],
    tips: "面试中不要说负面话！把弱点转化为改进方向。",
    mnemonic: "STAR法则：Situation-Task-Action-Result 回答行为问题"
  },
];
