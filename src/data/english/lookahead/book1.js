/**
 * Look Ahead 1 — 走遍英国 第1册
 * 对标 Andy Hopkins & Joc Potter 原版教材体系
 * 级别：Beginner (A1) | 15个单元 | 情景教学法
 * 人物线索：日常生活中的英语交际
 */
export const lookAhead1Data = [
  // ========== Unit 1: Hello! ==========
  {
    unit: 1, unitTitle: "Hello!", unitDesc: "Greetings and introductions",
    lessons: [
      {
        id: 'la1-u1-l1', title: "Lesson 1 — Meeting people", goal: "Learn to greet and introduce yourself",
        vocab: [
          { word: "hello", meaning: "你好", example: "Hello, my name is John.", audio: "hello" },
          { word: "hi", meaning: "嗨", example: "Hi, how are you?", audio: "hi" },
          { word: "good morning", meaning: "早上好", example: "Good morning, class!", audio: "good morning" },
          { word: "good afternoon", meaning: "下午好", example: "Good afternoon, sir.", audio: "good afternoon" },
          { word: "good evening", meaning: "晚上好", example: "Good evening, everyone.", audio: "good evening" },
          { word: "goodbye", meaning: "再见", example: "Goodbye, see you tomorrow!", audio: "goodbye" },
          { word: "see you", meaning: "回头见", example: "See you later!", audio: "see you" },
          { word: "name", meaning: "名字", example: "My name is Mary.", audio: "name" },
          { word: "I", meaning: "我", example: "I am a student.", audio: "I" },
          { word: "you", meaning: "你", example: "You are my friend.", audio: "you" },
          { word: "am", meaning: "是（用于I）", example: "I am happy.", audio: "am" },
          { word: "are", meaning: "是（用于you/we/they）", example: "You are kind.", audio: "are" },
        ],
        grammar: { title: "Verb 'to be' (am/is/are)", content: "The verb 'to be' is the most important verb in English:\n\nI am (I'm) — 我是\nYou are (You're) — 你是\nHe is (He's) — 他是\nShe is (She's) — 她是\nIt is (It's) — 它是\nWe are (We're) — 我们是\nThey are (They're) — 他们\n\nUses:\n1. Identity: I am John. / She is a teacher.\n2. Age: I am twenty years old.\n3. Feelings: He is happy. / They are tired.\n4. Nationality: I am Chinese. / She is English.\n\nNegative: add 'not'\n- I am not (I'm not) tired.\n- You are not (You're not/You aren't) late.\n- He is not (He's not/He isn't) here.\n\nQuestions: swap subject and verb\n- Are you a student? — Yes, I am. / No, I'm not.\n- Is she happy? — Yes, she is. / No, she isn't.", tip: "Remember: I am, You are, He/She/It is, We/They are. Practice every day!" },
        dialogue: [
          { role: "John", text: "Hello! My name is John. What's your name?", cn: "你好！我叫John。你叫什么？" },
          { role: "Mary", text: "Hi, John! I'm Mary. Nice to meet you.", cn: "嗨，John！我叫Mary。很高兴认识你。" },
          { role: "John", text: "Nice to meet you too, Mary. Are you a student?", cn: "也很高兴认识你，Mary。你是学生吗？" },
          { role: "Mary", text: "Yes, I am. I'm a university student. And you?", cn: "是的，我是。我是大学生。你呢？" },
          { role: "John", text: "I'm a student too. I study computer science.", cn: "我也是学生。我学计算机。" },
          { role: "Mary", text: "That's great! See you later, John!", cn: "太好了！回头见，John！" },
          { role: "John", text: "See you, Mary!", cn: "回头见，Mary！" },
        ],
        practice: [
          { type: "fill", question: "My ___ is John. (我的名字是John)", answer: "name", hint: "名字" },
          { type: "choice", question: "'你好吗？' 用英语怎么说?", options: ["Hello, how are you?", "Goodbye, see you!", "Good morning!", "Nice to meet you!"], answer: 0 },
          { type: "fill", question: "She ___ a teacher. (她是老师)", answer: "is", hint: "be动词" },
          { type: "choice", question: "I ___ a student.", options: ["am", "is", "are", "be"], answer: 0 },
        ]
      },
      {
        id: 'la1-u1-l2', title: "Lesson 2 — Numbers 1-20", goal: "Learn numbers 1-20 and how to use them",
        vocab: [
          { word: "one", meaning: "1", example: "I have one book.", audio: "one" },
          { word: "two", meaning: "2", example: "Two cups, please.", audio: "two" },
          { word: "three", meaning: "3", example: "Three people.", audio: "three" },
          { word: "four", meaning: "4", example: "Four euros.", audio: "four" },
          { word: "five", meaning: "5", example: "Five minutes.", audio: "five" },
          { word: "six", meaning: "6", example: "Six months.", audio: "six" },
          { word: "seven", meaning: "7", example: "Seven days.", audio: "seven" },
          { word: "eight", meaning: "8", example: "Eight hours.", audio: "eight" },
          { word: "nine", meaning: "9", example: "Nine o'clock.", audio: "nine" },
          { word: "ten", meaning: "10", example: "Ten people.", audio: "ten" },
          { word: "eleven", meaning: "11", example: "Eleven students.", audio: "eleven" },
          { word: "twelve", meaning: "12", example: "Twelve months.", audio: "twelve" },
          { word: "thirteen", meaning: "13", example: "Thirteen years old.", audio: "thirteen" },
          { word: "fourteen", meaning: "14", example: "Fourteen days.", audio: "fourteen" },
          { word: "fifteen", meaning: "15", example: "Fifteen minutes.", audio: "fifteen" },
          { word: "sixteen", meaning: "16", example: "Sixteen years old.", audio: "sixteen" },
          { word: "seventeen", meaning: "17", example: "Seventeen students.", audio: "seventeen" },
          { word: "eighteen", meaning: "18", example: "Eighteen euros.", audio: "eighteen" },
          { word: "nineteen", meaning: "19", example: "Nineteen people.", audio: "nineteen" },
          { word: "twenty", meaning: "20", example: "Twenty years old.", audio: "twenty" },
        ],
        grammar: { title: "Using numbers: age, time, quantities", content: "Numbers are used in many situations:\n\n1. Age:\n   — How old are you? (你多大？)\n   — I'm twenty years old. (我20岁)\n   Note: Use 'to be' for age, not 'to have'!\n\n2. Time:\n   — What time is it? (几点了？)\n   — It's nine o'clock. (9点了)\n   — It's half past ten. (10点半)\n   — It's a quarter to five. (4点45)\n\n3. Quantities:\n   — How many books do you have? (你有几本书？)\n   — I have five books. (我有5本书)\n\n4. Phone numbers:\n   — What's your phone number? (你电话号码多少？)\n   — It's zero seven seven, one two three, four five six seven.\n\nNumber patterns:\n- 1-12: unique names (one, two, three... twelve)\n- 13-19: -teen ending (thirteen, fourteen... nineteen)\n- 20, 30, 40...: -ty ending (twenty, thirty, forty...)\n- 21-29: twenty-one, twenty-two... twenty-nine", tip: "In English, we say 'I am 20 years old' NOT 'I have 20 years' (like in French/Spanish)!" },
        dialogue: [
          { role: "A", text: "How old are you, Tom?", cn: "你多大，Tom？" },
          { role: "Tom", text: "I'm twenty years old. And you?", cn: "我20岁。你呢？" },
          { role: "A", text: "I'm nineteen. What's your phone number?", cn: "我19岁。你电话号码多少？" },
          { role: "Tom", text: "It's zero seven seven, one two three, four five six seven.", cn: "是077, 123, 4567。" },
          { role: "A", text: "Thanks! What time is it now?", cn: "谢谢！现在几点了？" },
          { role: "Tom", text: "It's half past three. We should go to class.", cn: "3点半了。我们该去上课了。" },
        ],
        practice: [
          { type: "fill", question: "I'm ___ years old. (我20岁)", answer: "twenty", hint: "20" },
          { type: "choice", question: "15 用英语怎么说?", options: ["five", "fifty", "fifteen", "fourteen"], answer: 2 },
          { type: "fill", question: "It's half past ___. (现在3点半)", answer: "three", hint: "3" },
          { type: "choice", question: "'你多大？' 用英语怎么说?", options: ["How are you?", "How old are you?", "What time is it?", "How many?"], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unit 2: My family ==========
  {
    unit: 2, unitTitle: "My family", unitDesc: "Family members and descriptions",
    lessons: [
      {
        id: 'la1-u2-l1', title: "Lesson 1 — Family members", goal: "Learn family vocabulary and possessive adjectives",
        vocab: [
          { word: "family", meaning: "家庭", example: "My family is big.", audio: "family" },
          { word: "father", meaning: "父亲", example: "My father is a doctor.", audio: "father" },
          { word: "mother", meaning: "母亲", example: "My mother is a teacher.", audio: "mother" },
          { word: "brother", meaning: "兄弟", example: "I have one brother.", audio: "brother" },
          { word: "sister", meaning: "姐妹", example: "My sister is young.", audio: "sister" },
          { word: "son", meaning: "儿子", example: "He is my son.", audio: "son" },
          { word: "daughter", meaning: "女儿", example: "She is my daughter.", audio: "daughter" },
          { word: "grandfather", meaning: "祖父", example: "My grandfather is eighty.", audio: "grandfather" },
          { word: "grandmother", meaning: "祖母", example: "My grandmother is kind.", audio: "grandmother" },
          { word: "uncle", meaning: "叔叔/舅舅", example: "My uncle lives in London.", audio: "uncle" },
          { word: "aunt", meaning: "阿姨/姑姑", example: "My aunt is a nurse.", audio: "aunt" },
          { word: "cousin", meaning: "堂/表兄弟姐妹", example: "I have two cousins.", audio: "cousin" },
        ],
        grammar: { title: "Possessive adjectives (my/your/his/her)", content: "Possessive adjectives show ownership:\n\nmy — 我的\nyour — 你的\nhis — 他的\nher — 她的\nits — 它的\nour — 我们的\ntheir — 他们的\n\nExamples:\n- my father (我的父亲)\n- your mother (你的母亲)\n- his brother (他的兄弟)\n- her sister (她的姐妹)\n- our family (我们的家庭)\n- their house (他们的房子)\n\nNote: The possessive adjective agrees with the OWNER, not the thing owned:\n- He is my brother. (他是我的兄弟 — 'my' agrees with 'I')\n- She is his sister. (她是他的姐妹 — 'his' agrees with 'he')\n\nPlural: same for all persons\n- my brothers, your sisters, his cousins", tip: "Remember: my, your, his, her, its, our, their. The possessive matches the OWNER!" },
        dialogue: [
          { role: "A", text: "Tell me about your family, Sarah.", cn: "告诉我你的家庭，Sarah。" },
          { role: "Sarah", text: "Well, I have a big family. I have two brothers and one sister.", cn: "嗯，我有一个大家庭。我有两个兄弟和一个姐妹。" },
          { role: "A", text: "What are their names?", cn: "他们叫什么？" },
          { role: "Sarah", text: "My brothers are Tom and Jack. My sister is Lily.", cn: "我的兄弟是Tom和Jack。我的姐妹是Lily。" },
          { role: "A", text: "And what about your parents?", cn: "你的父母呢？" },
          { role: "Sarah", text: "My father is a doctor and my mother is a teacher.", cn: "我父亲是医生，母亲是老师。" },
        ],
        practice: [
          { type: "fill", question: "This is ___ sister. (这是我的姐妹)", answer: "my", hint: "主有形容词" },
          { type: "choice", question: "'他的母亲' 怎么说?", options: ["my mother", "your mother", "his mother", "her mother"], answer: 2 },
          { type: "fill", question: "I have two ___. (我有两个兄弟)", answer: "brothers", hint: "兄弟（复数）" },
          { type: "choice", question: "'我们的家庭' 怎么说?", options: ["my family", "your family", "his family", "our family"], answer: 3 },
        ]
      },
      {
        id: 'la1-u2-l2', title: "Lesson 2 — Describing people", goal: "Learn to describe people's appearance and personality",
        vocab: [
          { word: "tall", meaning: "高的", example: "He is tall.", audio: "tall" },
          { word: "short", meaning: "矮的", example: "She is short.", audio: "short" },
          { word: "young", meaning: "年轻的", example: "They are young.", audio: "young" },
          { word: "old", meaning: "老的", example: "My grandfather is old.", audio: "old" },
          { word: "beautiful", meaning: "美丽的", example: "She is beautiful.", audio: "beautiful" },
          { word: "handsome", meaning: "英俊的", example: "He is handsome.", audio: "handsome" },
          { word: "kind", meaning: "善良的", example: "My mother is kind.", audio: "kind" },
          { word: "friendly", meaning: "友好的", example: "He is very friendly.", audio: "friendly" },
          { word: "funny", meaning: "有趣的", example: "My brother is funny.", audio: "funny" },
          { word: "smart", meaning: "聪明的", example: "She is smart.", audio: "smart" },
          { word: "hair", meaning: "头发", example: "She has long hair.", audio: "hair" },
          { word: "eyes", meaning: "眼睛", example: "He has blue eyes.", audio: "eyes" },
        ],
        grammar: { title: "Adjectives and 'have/has'", content: "1. Adjectives:\n   Adjectives describe nouns. In English, they don't change:\n   - a tall man / a tall woman (tall doesn't change)\n   - He is tall. / She is tall.\n\n   Position:\n   - Before noun: a beautiful girl\n   - After 'to be': She is beautiful.\n\n2. Have/Has for possession:\n   I have — 我有\n   You have — 你有\n   He/She/It has — 他/她/它有\n   We have — 我们有\n   They have — 他们有\n\n   Examples:\n   - I have blue eyes. (我有蓝眼睛)\n   - She has long hair. (她有长头发)\n   - He has a big family. (他有一个大家庭)\n\n   Negative: don't have / doesn't have\n   - I don't have a sister.\n   - She doesn't have a car.\n\n   Questions: Do you have...? / Does he/she have...?", tip: "Remember: have for I/you/we/they, has for he/she/it!" },
        dialogue: [
          { role: "A", text: "What does your sister look like?", cn: "你姐姐长什么样？" },
          { role: "B", text: "She's tall and beautiful. She has long brown hair and blue eyes.", cn: "她又高又漂亮。她有长长的棕色头发和蓝眼睛。" },
          { role: "A", text: "What about your brother?", cn: "你兄弟呢？" },
          { role: "B", text: "He's short and funny. He has short black hair and brown eyes.", cn: "他矮矮的，很有趣。他有短短的黑头发和棕色眼睛。" },
          { role: "A", text: "Are they friendly?", cn: "他们友好吗？" },
          { role: "B", text: "Yes, they are very friendly and kind.", cn: "是的，他们非常友好和善良。" },
        ],
        practice: [
          { type: "fill", question: "She ___ long hair. (她有长头发)", answer: "has", hint: "have/has" },
          { type: "choice", question: "'他很有趣' 怎么说?", options: ["He is funny.", "He have funny.", "He has funny.", "He is fun."], answer: 0 },
          { type: "fill", question: "I ___ blue eyes. (我有蓝眼睛)", answer: "have", hint: "have/has" },
          { type: "choice", question: "'她很漂亮' 怎么说?", options: ["She has beautiful.", "She is beautiful.", "She beautiful.", "She have beautiful."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unit 3: At school ==========
  {
    unit: 3, unitTitle: "At school", unitDesc: "School life and classroom language",
    lessons: [
      {
        id: 'la1-u3-l1', title: "Lesson 1 — Classroom objects", goal: "Learn school supplies and classroom language",
        vocab: [
          { word: "book", meaning: "书", example: "Open your book.", audio: "book" },
          { word: "pen", meaning: "笔", example: "I have a pen.", audio: "pen" },
          { word: "pencil", meaning: "铅笔", example: "Give me a pencil.", audio: "pencil" },
          { word: "paper", meaning: "纸", example: "I need some paper.", audio: "paper" },
          { word: "desk", meaning: "书桌", example: "The book is on the desk.", audio: "desk" },
          { word: "chair", meaning: "椅子", example: "Sit on the chair.", audio: "chair" },
          { word: "teacher", meaning: "老师", example: "The teacher is kind.", audio: "teacher" },
          { word: "student", meaning: "学生", example: "I am a student.", audio: "student" },
          { word: "class", meaning: "班级；课", example: "The class is interesting.", audio: "class" },
          { word: "lesson", meaning: "课", example: "This is lesson three.", audio: "lesson" },
          { word: "homework", meaning: "作业", example: "Do your homework.", audio: "homework" },
          { word: "read", meaning: "读", example: "Read the text.", audio: "read" },
        ],
        grammar: { title: "Articles (a/an/the) and plurals", content: "1. Indefinite articles (a/an):\n   - a + consonant sound: a book, a pen, a university\n   - an + vowel sound: an apple, an hour, an umbrella\n   \n   Use for one thing, not specific:\n   - I have a book. (我有一本书)\n   - She is a teacher. (她是老师)\n\n2. Definite article (the):\n   - the + any noun: the book, the pen, the students\n   \n   Use for specific things:\n   - The book is on the desk. (那本书在桌上)\n   - The teacher is here. (老师在这里)\n\n3. Plurals:\n   - Regular: +s (book → books, pen → pens)\n   - -es: after s, x, ch, sh (box → boxes, watch → watches)\n   - -ies: consonant + y (baby → babies, city → cities)\n   - Irregular: man → men, woman → women, child → children\n\n4. No article for plural general:\n   - Books are useful. (书是有用的 — all books in general)", tip: "a vs an: it's about SOUND, not spelling! a university (starts with 'y' sound), an hour (h is silent)!" },
        dialogue: [
          { role: "Teacher", text: "Good morning, class. Open your books to page ten.", cn: "早上好，同学们。把书翻到第10页。" },
          { role: "Student", text: "Excuse me, teacher. I don't have a pen.", cn: "对不起，老师。我没有笔。" },
          { role: "Teacher", text: "You can use a pencil. Do you have a pencil?", cn: "你可以用铅笔。你有铅笔吗？" },
          { role: "Student", text: "Yes, I have a pencil and some paper.", cn: "是的，我有铅笔和一些纸。" },
          { role: "Teacher", text: "Good. Now read the text on page ten.", cn: "好的。现在读第10页的课文。" },
          { role: "Student", text: "Yes, teacher.", cn: "好的，老师。" },
        ],
        practice: [
          { type: "fill", question: "I have ___ book. (我有一本书)", answer: "a", hint: "不定冠词" },
          { type: "choice", question: "'打开你的书' 怎么说?", options: ["Close your book.", "Open your book.", "Read your book.", "Write your book."], answer: 1 },
          { type: "fill", question: "She is ___ teacher. (她是老师)", answer: "a", hint: "不定冠词" },
          { type: "choice", question: "book 的复数是?", options: ["bookes", "books", "bookies", "book"], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unit 4: Daily life ==========
  {
    unit: 4, unitTitle: "Daily life", unitDesc: "Daily routines and telling time",
    lessons: [
      {
        id: 'la1-u4-l1', title: "Lesson 1 — My daily routine", goal: "Learn to talk about daily activities",
        vocab: [
          { word: "wake up", meaning: "醒来", example: "I wake up at seven.", audio: "wake up" },
          { word: "get up", meaning: "起床", example: "I get up at seven thirty.", audio: "get up" },
          { word: "have breakfast", meaning: "吃早餐", example: "I have breakfast at eight.", audio: "have breakfast" },
          { word: "go to school", meaning: "去上学", example: "I go to school at nine.", audio: "go to school" },
          { word: "have lunch", meaning: "吃午餐", example: "I have lunch at twelve.", audio: "have lunch" },
          { word: "go home", meaning: "回家", example: "I go home at five.", audio: "go home" },
          { word: "have dinner", meaning: "吃晚餐", example: "I have dinner at seven.", audio: "have dinner" },
          { word: "go to bed", meaning: "上床睡觉", example: "I go to bed at ten.", audio: "go to bed" },
          { word: "always", meaning: "总是", example: "I always wake up early.", audio: "always" },
          { word: "sometimes", meaning: "有时", example: "I sometimes read a book.", audio: "sometimes" },
          { word: "never", meaning: "从不", example: "I never drink coffee.", audio: "never" },
          { word: "usually", meaning: "通常", example: "I usually walk to school.", audio: "usually" },
        ],
        grammar: { title: "Present simple tense", content: "Present simple is used for habits, routines, and facts:\n\nStructure:\n- I/You/We/They + verb: I work, You study, They play\n- He/She/It + verb + s: He works, She studies, It plays\n\nNegative:\n- I/You/We/They + don't + verb: I don't work\n- He/She/It + doesn't + verb: He doesn't work\n\nQuestions:\n- Do you work? — Yes, I do. / No, I don't.\n- Does he work? — Yes, he does. / No, he doesn't.\n\nSpelling rules for he/she/it:\n- Most verbs: +s (works, plays, reads)\n- -ss, -sh, -ch, -x, -o: +es (watches, goes, washes)\n- consonant + y: -ies (studies, carries)\n- vowel + y: +s (plays, says)\n\nFrequency adverbs:\n- always (总是) — usually (通常) — often (经常)\n- sometimes (有时) — rarely (很少) — never (从不)\n\nPosition: before main verb, after 'to be'\n- I always wake up early.\n- She is always happy.", tip: "Remember: he/she/it needs -s on the verb! She works (NOT She work)" },
        dialogue: [
          { role: "A", text: "What time do you wake up?", cn: "你几点醒来？" },
          { role: "B", text: "I usually wake up at seven o'clock.", cn: "我通常7点醒来。" },
          { role: "A", text: "And what do you do in the morning?", cn: "早上你做什么？" },
          { role: "B", text: "I have breakfast at eight, then I go to school at nine.", cn: "我8点吃早餐，然后9点去上学。" },
          { role: "A", text: "Do you have lunch at school?", cn: "你在学校吃午餐吗？" },
          { role: "B", text: "Yes, I have lunch at twelve. Then I go home at five.", cn: "是的，我12点吃午餐。然后5点回家。" },
        ],
        practice: [
          { type: "fill", question: "She ___ to school every day. (她每天去上学)", answer: "goes", hint: "go的第三人称单数" },
          { type: "choice", question: "'我从不喝咖啡' 怎么说?", options: ["I always drink coffee.", "I sometimes drink coffee.", "I never drink coffee.", "I usually drink coffee."], answer: 2 },
          { type: "fill", question: "He ___ breakfast at eight. (他8点吃早餐)", answer: "has", hint: "have的第三人称单数" },
          { type: "choice", question: "Do you like English? — Yes, I ___.", options: ["do", "does", "am", "is"], answer: 0 },
        ]
      },
    ]
  },
  // ========== Unit 5: Food and drink ==========
  {
    unit: 5, unitTitle: "Food and drink", unitDesc: "Food, drinks, and ordering at a restaurant",
    lessons: [
      {
        id: 'la1-u5-l1', title: "Lesson 1 — Food and drinks", goal: "Learn food vocabulary and how to order",
        vocab: [
          { word: "bread", meaning: "面包", example: "I like bread.", audio: "bread" },
          { word: "rice", meaning: "米饭", example: "Rice is delicious.", audio: "rice" },
          { word: "meat", meaning: "肉", example: "I don't eat meat.", audio: "meat" },
          { word: "fish", meaning: "鱼", example: "Fish is healthy.", audio: "fish" },
          { word: "chicken", meaning: "鸡肉", example: "I like chicken.", audio: "chicken" },
          { word: "vegetable", meaning: "蔬菜", example: "Eat your vegetables.", audio: "vegetable" },
          { word: "fruit", meaning: "水果", example: "Fruit is good for you.", audio: "fruit" },
          { word: "apple", meaning: "苹果", example: "An apple a day.", audio: "apple" },
          { word: "water", meaning: "水", example: "I drink water.", audio: "water" },
          { word: "tea", meaning: "茶", example: "Would you like some tea?", audio: "tea" },
          { word: "coffee", meaning: "咖啡", example: "I like coffee.", audio: "coffee" },
          { word: "milk", meaning: "牛奶", example: "Milk is healthy.", audio: "milk" },
        ],
        grammar: { title: "Countable and uncountable nouns", content: "1. Countable nouns (可数名词):\n   - Can be singular or plural: apple/apples, book/books\n   - Use a/an with singular: a book, an apple\n   - Use numbers: two books, three apples\n   - Use some/any: some books, any books\n\n2. Uncountable nouns (不可数名词):\n   - No plural: water, rice, bread, milk, sugar\n   - No a/an: water (NOT a water)\n   - Use some/any: some water, any milk\n   - Use a container: a glass of water, a cup of tea\n\n3. Some vs Any:\n   - Some: positive sentences\n     I have some money. (我有一些钱)\n     There is some water. (有一些水)\n   - Any: negative and questions\n     I don't have any money. (我没有钱)\n     Do you have any water? (你有水吗？)\n\n4. How much vs How many:\n   - How much + uncountable: How much water?\n   - How many + countable: How many apples?", tip: "Common uncountable nouns: water, milk, rice, bread, sugar, salt, meat, cheese, butter, oil, coffee, tea" },
        dialogue: [
          { role: "Waiter", text: "Good evening. What would you like?", cn: "晚上好。您想要什么？" },
          { role: "Customer", text: "I'd like some chicken and rice, please.", cn: "我想要一些鸡肉和米饭。" },
          { role: "Waiter", text: "Would you like something to drink?", cn: "您想喝点什么吗？" },
          { role: "Customer", text: "A glass of water, please. And some tea.", cn: "一杯水，还有一些茶。" },
          { role: "Waiter", text: "Anything else?", cn: "还要别的吗？" },
          { role: "Customer", text: "No, thank you. That's all.", cn: "不要了，谢谢。就这些。" },
        ],
        practice: [
          { type: "fill", question: "I have some ___. (我有一些水)", answer: "water", hint: "不可数名词" },
          { type: "choice", question: "'你想要一些茶吗？' 怎么说?", options: ["Do you like tea?", "Would you like some tea?", "Have you got tea?", "Is there tea?"], answer: 1 },
          { type: "fill", question: "How ___ apples do you have? (你有几个苹果？)", answer: "many", hint: "可数名词用many" },
          { type: "choice", question: "哪个是不可数名词?", options: ["apple", "book", "water", "chair"], answer: 2 },
        ]
      },
    ]
  },
  // ========== Unit 6: Shopping ==========
  {
    unit: 6, unitTitle: "Shopping", unitDesc: "Shopping, prices, and clothes",
    lessons: [
      {
        id: 'la1-u6-l1', title: "Lesson 1 — Clothes shopping", goal: "Learn clothing vocabulary and shopping language",
        vocab: [
          { word: "shirt", meaning: "衬衫", example: "I like this shirt.", audio: "shirt" },
          { word: "T-shirt", meaning: "T恤", example: "This T-shirt is nice.", audio: "T-shirt" },
          { word: "trousers", meaning: "裤子", example: "These trousers are expensive.", audio: "trousers" },
          { word: "dress", meaning: "连衣裙", example: "That dress is beautiful.", audio: "dress" },
          { word: "skirt", meaning: "裙子", example: "The skirt is short.", audio: "skirt" },
          { word: "jacket", meaning: "夹克", example: "I need a jacket.", audio: "jacket" },
          { word: "shoes", meaning: "鞋子", example: "These shoes are comfortable.", audio: "shoes" },
          { word: "hat", meaning: "帽子", example: "I like your hat.", audio: "hat" },
          { word: "expensive", meaning: "贵的", example: "It's too expensive.", audio: "expensive" },
          { word: "cheap", meaning: "便宜的", example: "It's very cheap.", audio: "cheap" },
          { word: "how much", meaning: "多少钱", example: "How much is this?", audio: "how much" },
          { word: "pound", meaning: "英镑", example: "It's ten pounds.", audio: "pound" },
        ],
        grammar: { title: "Demonstratives (this/that/these/those)", content: "Demonstratives show which thing we mean:\n\nSingular:\n- this — 这个（近）: This book is mine.\n- that — 那个（远）: That book is yours.\n\nPlural:\n- these — 这些（近）: These shoes are new.\n- those — 那些（远）: Those shoes are old.\n\nWith 'to be':\n- This is a book. (这是一本书)\n- That is my bag. (那是我的包)\n- These are my shoes. (这些是我的鞋)\n- Those are your books. (那些是你的书)\n\nQuestions:\n- What is this? — It's a pen.\n- What are these? — They are books.\n- How much is this? — It's ten pounds.\n- How much are these? — They are twenty pounds.\n\nNote: this/these for things near you, that/those for things far away", tip: "this → these (近), that → those (远). Remember: these/those are always plural!" },
        dialogue: [
          { role: "Customer", text: "Excuse me, how much is this shirt?", cn: "请问，这件衬衫多少钱？" },
          { role: "Shop assistant", text: "It's twenty-five pounds.", cn: "25英镑。" },
          { role: "Customer", text: "And how much are these trousers?", cn: "这条裤子多少钱？" },
          { role: "Shop assistant", text: "They're forty pounds.", cn: "40英镑。" },
          { role: "Customer", text: "That's expensive. Do you have a cheaper jacket?", cn: "太贵了。有更便宜的夹克吗？" },
          { role: "Shop assistant", text: "Yes, this one is only thirty pounds.", cn: "有的，这件只要30英镑。" },
        ],
        practice: [
          { type: "fill", question: "How ___ is this shirt? (这件衬衫多少钱？)", answer: "much", hint: "询问价格" },
          { type: "choice", question: "'这些是我的鞋' 怎么说?", options: ["This is my shoes.", "These are my shoes.", "That is my shoes.", "Those are my shoes."], answer: 1 },
          { type: "fill", question: "___ shoes are expensive. (那些鞋子很贵)", answer: "Those", hint: "那些（复数远处）" },
          { type: "choice", question: "'这件T恤多少钱？' 怎么说?", options: ["How many is this T-shirt?", "How much is this T-shirt?", "What is this T-shirt?", "Where is this T-shirt?"], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unit 7: My home ==========
  {
    unit: 7, unitTitle: "My home", unitDesc: "Rooms, furniture, and describing homes",
    lessons: [
      {
        id: 'la1-u7-l1', title: "Lesson 1 — Rooms and furniture", goal: "Learn rooms in a house and furniture vocabulary",
        vocab: [
          { word: "house", meaning: "房子", example: "My house is big.", audio: "house" },
          { word: "flat", meaning: "公寓", example: "I live in a flat.", audio: "flat" },
          { word: "room", meaning: "房间", example: "There are five rooms.", audio: "room" },
          { word: "bedroom", meaning: "卧室", example: "My bedroom is small.", audio: "bedroom" },
          { word: "bathroom", meaning: "浴室", example: "The bathroom is clean.", audio: "bathroom" },
          { word: "kitchen", meaning: "厨房", example: "Mum is in the kitchen.", audio: "kitchen" },
          { word: "living room", meaning: "客厅", example: "We watch TV in the living room.", audio: "living room" },
          { word: "garden", meaning: "花园", example: "There is a garden.", audio: "garden" },
          { word: "bed", meaning: "床", example: "The bed is comfortable.", audio: "bed" },
          { word: "table", meaning: "桌子", example: "The table is round.", audio: "table" },
          { word: "sofa", meaning: "沙发", example: "The sofa is soft.", audio: "sofa" },
          { word: "window", meaning: "窗户", example: "Open the window.", audio: "window" },
        ],
        grammar: { title: "There is / There are", content: "Use 'there is/are' to say something exists:\n\nSingular: There is (There's)\n- There is a book on the desk. (桌上有一本书)\n- There's a garden in my house. (我家有个花园)\n\nPlural: There are\n- There are two bedrooms. (有两间卧室)\n- There are some books on the table. (桌上有一些书)\n\nNegative:\n- There isn't a garden. (没有花园)\n- There aren't any chairs. (没有椅子)\n\nQuestions:\n- Is there a bathroom? — Yes, there is. / No, there isn't.\n- Are there any windows? — Yes, there are. / No, there aren't.\n\nPrepositions of place:\n- in (在...里面): in the room\n- on (在...上面): on the table\n- under (在...下面): under the bed\n- next to (在...旁边): next to the window\n- between (在...之间): between the bed and the desk\n- in front of (在...前面): in front of the house\n- behind (在...后面): behind the door", tip: "There is + singular, There are + plural. Use 'any' in negative and questions!" },
        dialogue: [
          { role: "A", text: "Tell me about your home.", cn: "告诉我你的家。" },
          { role: "B", text: "I live in a flat. There are three rooms.", cn: "我住在公寓里。有三个房间。" },
          { role: "A", text: "What rooms are there?", cn: "有哪些房间？" },
          { role: "B", text: "There's a bedroom, a bathroom, and a living room.", cn: "有一间卧室、一间浴室和一间客厅。" },
          { role: "A", text: "Is there a kitchen?", cn: "有厨房吗？" },
          { role: "B", text: "No, there isn't. But there is a table in the living room.", cn: "没有。但客厅里有一张桌子。" },
        ],
        practice: [
          { type: "fill", question: "There ___ a book on the desk. (桌上有一本书)", answer: "is", hint: "单数用is" },
          { type: "choice", question: "'有两间卧室' 怎么说?", options: ["There is two bedrooms.", "There are two bedrooms.", "There have two bedrooms.", "Two bedrooms are."], answer: 1 },
          { type: "fill", question: "Is there a garden? — No, there ___.", answer: "isn't", hint: "否定回答" },
          { type: "choice", question: "'书在桌子下面' 怎么说?", options: ["The book is on the table.", "The book is under the table.", "The book is in the table.", "The book is next to the table."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unit 8: Free time ==========
  {
    unit: 8, unitTitle: "Free time", unitDesc: "Hobbies and free time activities",
    lessons: [
      {
        id: 'la1-u8-l1', title: "Lesson 1 — Hobbies and interests", goal: "Learn to talk about hobbies and interests",
        vocab: [
          { word: "hobby", meaning: "爱好", example: "My hobby is reading.", audio: "hobby" },
          { word: "sport", meaning: "运动", example: "I like sports.", audio: "sport" },
          { word: "football", meaning: "足球", example: "I play football.", audio: "football" },
          { word: "basketball", meaning: "篮球", example: "Basketball is fun.", audio: "basketball" },
          { word: "swimming", meaning: "游泳", example: "I like swimming.", audio: "swimming" },
          { word: "reading", meaning: "阅读", example: "Reading is my hobby.", audio: "reading" },
          { word: "music", meaning: "音乐", example: "I love music.", audio: "music" },
          { word: "cinema", meaning: "电影院", example: "Let's go to the cinema.", audio: "cinema" },
          { word: "game", meaning: "游戏", example: "I play games.", audio: "game" },
          { word: "dance", meaning: "跳舞", example: "I like to dance.", audio: "dance" },
          { word: "sing", meaning: "唱歌", example: "She sings well.", audio: "sing" },
          { word: "draw", meaning: "画画", example: "I like to draw.", audio: "draw" },
        ],
        grammar: { title: "Like + verb-ing / want + to + verb", content: "1. Like + verb-ing (喜欢做某事):\n   - I like reading. (我喜欢阅读)\n   - She likes swimming. (她喜欢游泳)\n   - They don't like football. (他们不喜欢足球)\n   - Do you like dancing? (你喜欢跳舞吗？)\n\n   Note: he/she/it needs -s on 'like'\n   - He likes playing football.\n\n2. Want + to + verb (想要做某事):\n   - I want to read. (我想阅读)\n   - She wants to swim. (她想游泳)\n   - They want to play. (他们想玩)\n   - Do you want to dance? (你想跳舞吗？)\n\n   Note: he/she/it needs -s on 'want'\n   - He wants to go.\n\n3. Love + verb-ing (热爱做某事):\n   - I love reading. (我热爱阅读)\n   - She loves singing. (她热爱唱歌)\n\n4. Other verbs + verb-ing:\n   - enjoy + verb-ing: I enjoy reading.\n   - don't mind + verb-ing: I don't mind waiting.", tip: "like + verb-ing, want + to + verb. Remember: like swimming, want to swim!" },
        dialogue: [
          { role: "A", text: "What do you like doing in your free time?", cn: "你空闲时间喜欢做什么？" },
          { role: "B", text: "I like reading and playing football.", cn: "我喜欢阅读和踢足球。" },
          { role: "A", text: "Do you want to play basketball this weekend?", cn: "这个周末你想打篮球吗？" },
          { role: "B", text: "Yes, I'd love to! What time?", cn: "是的，我很想！几点？" },
          { role: "A", text: "How about Saturday morning?", cn: "周六早上怎么样？" },
          { role: "B", text: "That's great! See you then!", cn: "太好了！到时候见！" },
        ],
        practice: [
          { type: "fill", question: "I like ___. (我喜欢阅读)", answer: "reading", hint: "like + verb-ing" },
          { type: "choice", question: "'她喜欢游泳' 怎么说?", options: ["She like swimming.", "She likes swimming.", "She likes swim.", "She like swim."], answer: 1 },
          { type: "fill", question: "I want ___ read. (我想阅读)", answer: "to", hint: "want + to + verb" },
          { type: "choice", question: "'你想跳舞吗？' 怎么说?", options: ["Do you like dancing?", "Do you want to dance?", "Are you dancing?", "Can you dance?"], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unit 9: Weather and seasons ==========
  {
    unit: 9, unitTitle: "Weather and seasons", unitDesc: "Weather, seasons, and climate",
    lessons: [
      {
        id: 'la1-u9-l1', title: "Lesson 1 — The weather", goal: "Learn to talk about weather and seasons",
        vocab: [
          { word: "weather", meaning: "天气", example: "The weather is nice.", audio: "weather" },
          { word: "sunny", meaning: "晴朗的", example: "It's sunny today.", audio: "sunny" },
          { word: "rainy", meaning: "下雨的", example: "It's a rainy day.", audio: "rainy" },
          { word: "cloudy", meaning: "多云的", example: "It's cloudy.", audio: "cloudy" },
          { word: "windy", meaning: "刮风的", example: "It's windy outside.", audio: "windy" },
          { word: "snowy", meaning: "下雪的", example: "It's snowy in winter.", audio: "snowy" },
          { word: "hot", meaning: "热的", example: "It's hot in summer.", audio: "hot" },
          { word: "cold", meaning: "冷的", example: "It's cold in winter.", audio: "cold" },
          { word: "warm", meaning: "温暖的", example: "Spring is warm.", audio: "warm" },
          { word: "cool", meaning: "凉爽的", example: "Autumn is cool.", audio: "cool" },
          { word: "spring", meaning: "春天", example: "Spring is beautiful.", audio: "spring" },
          { word: "summer", meaning: "夏天", example: "Summer is hot.", audio: "summer" },
          { word: "autumn", meaning: "秋天", example: "Autumn is colourful.", audio: "autumn" },
          { word: "winter", meaning: "冬天", example: "Winter is cold.", audio: "winter" },
        ],
        grammar: { title: "It + weather expressions", content: "Use 'it' for weather, time, and distance:\n\nWeather:\n- It is sunny. (出太阳)\n- It is raining. (正在下雨)\n- It is snowing. (正在下雪)\n- It is windy. (刮风)\n- It is cloudy. (多云)\n- It is hot/cold/warm/cool. (热/冷/暖/凉)\n\nQuestions:\n- What's the weather like? (天气怎么样？)\n- Is it raining? (在下雨吗？)\n\nSeasons:\n- in spring (在春天)\n- in summer (在夏天)\n- in autumn (在秋天)\n- in winter (在冬天)\n\nNote: Use 'in' for seasons, months, years\n- in spring, in July, in 2024\n\nUse 'on' for days and dates\n- on Monday, on 1st May\n\nUse 'at' for specific times\n- at 9 o'clock, at night, at the weekend", tip: "In English, we say 'It is raining' NOT 'The rain is falling'. Use 'it' for weather!" },
        dialogue: [
          { role: "A", text: "What's the weather like today?", cn: "今天天气怎么样？" },
          { role: "B", text: "It's sunny and warm. It's a beautiful day!", cn: "晴朗又温暖。是个好天气！" },
          { role: "A", text: "What's the weather like in winter?", cn: "冬天天气怎么样？" },
          { role: "B", text: "It's cold and sometimes snowy.", cn: "很冷，有时下雪。" },
          { role: "A", text: "Do you like summer or winter?", cn: "你喜欢夏天还是冬天？" },
          { role: "B", text: "I like summer. It's warm and sunny.", cn: "我喜欢夏天。又温暖又晴朗。" },
        ],
        practice: [
          { type: "fill", question: "It's ___ today. (今天天气晴朗)", answer: "sunny", hint: "天气形容词" },
          { type: "choice", question: "'天气怎么样？' 怎么说?", options: ["How is the weather?", "What's the weather like?", "What is weather?", "How weather is?"], answer: 1 },
          { type: "fill", question: "It's cold ___ winter.", answer: "in", hint: "季节前用in" },
          { type: "choice", question: "'正在下雨' 怎么说?", options: ["The rain is falling.", "It is raining.", "It rains.", "Rain is."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unit 10: Travel ==========
  {
    unit: 10, unitTitle: "Travel", unitDesc: "Travel, transport, and directions",
    lessons: [
      {
        id: 'la1-u10-l1', title: "Lesson 1 — Getting around", goal: "Learn transport vocabulary and how to ask for directions",
        vocab: [
          { word: "bus", meaning: "公共汽车", example: "I take the bus.", audio: "bus" },
          { word: "train", meaning: "火车", example: "The train is fast.", audio: "train" },
          { word: "car", meaning: "汽车", example: "I drive a car.", audio: "car" },
          { word: "bike", meaning: "自行车", example: "I ride a bike.", audio: "bike" },
          { word: "plane", meaning: "飞机", example: "The plane is big.", audio: "plane" },
          { word: "boat", meaning: "船", example: "The boat is small.", audio: "boat" },
          { word: "station", meaning: "车站", example: "The station is near.", audio: "station" },
          { word: "airport", meaning: "机场", example: "The airport is far.", audio: "airport" },
          { word: "ticket", meaning: "票", example: "I need a ticket.", audio: "ticket" },
          { word: "left", meaning: "左边", example: "Turn left.", audio: "left" },
          { word: "right", meaning: "右边", example: "Turn right.", audio: "right" },
          { word: "straight", meaning: "直走", example: "Go straight on.", audio: "straight" },
        ],
        grammar: { title: "Prepositions of movement and directions", content: "Prepositions of movement:\n- to (去): Go to the station.\n- from (从): I come from China.\n- into (进入): Walk into the room.\n- out of (从...出来): Come out of the house.\n- through (穿过): Walk through the park.\n- along (沿着): Walk along the street.\n- past (经过): Walk past the shop.\n- over (越过): Walk over the bridge.\n\nAsking for directions:\n- Excuse me, where is the station? (请问，车站在哪？)\n- How do I get to the airport? (我怎么去机场？)\n- Is there a bank near here? (这附近有银行吗？)\n\nGiving directions:\n- Go straight on. (直走)\n- Turn left/right. (左/右转)\n- It's on the left/right. (在左/右边)\n- It's next to the bank. (在银行旁边)\n- It's opposite the park. (在公园对面)\n\nTransport:\n- by bus (乘公交)\n- by train (乘火车)\n- by car (开车)\n- on foot (步行)\n- by plane (乘飞机)", tip: "Go straight, turn left/right. Use 'by' for transport (by bus, by train) but 'on foot' for walking!" },
        dialogue: [
          { role: "A", text: "Excuse me, how do I get to the station?", cn: "请问，我怎么去车站？" },
          { role: "B", text: "Go straight on, then turn left.", cn: "直走，然后左转。" },
          { role: "A", text: "Is it far?", cn: "远吗？" },
          { role: "B", text: "No, it's about five minutes on foot.", cn: "不远，步行大约5分钟。" },
          { role: "A", text: "Thank you! Can I take a bus?", cn: "谢谢！我可以坐公交吗？" },
          { role: "B", text: "Yes, you can take the number 5 bus.", cn: "可以，你可以坐5路公交。" },
        ],
        practice: [
          { type: "fill", question: "Turn ___. (左转)", answer: "left", hint: "方向" },
          { type: "choice", question: "'车站怎么走？' 怎么说?", options: ["Where is the station?", "What is the station?", "When is the station?", "Why is the station?"], answer: 0 },
          { type: "fill", question: "I go to school ___ bus.", answer: "by", hint: "交通方式" },
          { type: "choice", question: "'步行' 怎么说?", options: ["by foot", "on foot", "with foot", "use foot"], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unit 11: At work ==========
  {
    unit: 11, unitTitle: "At work", unitDesc: "Jobs, workplaces, and work routines",
    lessons: [
      {
        id: 'la1-u11-l1', title: "Lesson 1 — Jobs and professions", goal: "Learn job vocabulary and talk about work",
        vocab: [
          { word: "job", meaning: "工作", example: "I have a new job.", audio: "job" },
          { word: "work", meaning: "工作", example: "I work in an office.", audio: "work" },
          { word: "doctor", meaning: "医生", example: "She is a doctor.", audio: "doctor" },
          { word: "nurse", meaning: "护士", example: "He is a nurse.", audio: "nurse" },
          { word: "teacher", meaning: "老师", example: "I am a teacher.", audio: "teacher" },
          { word: "engineer", meaning: "工程师", example: "She is an engineer.", audio: "engineer" },
          { word: "manager", meaning: "经理", example: "He is the manager.", audio: "manager" },
          { word: "office", meaning: "办公室", example: "I work in an office.", audio: "office" },
          { word: "hospital", meaning: "医院", example: "She works in a hospital.", audio: "hospital" },
          { word: "school", meaning: "学校", example: "He works in a school.", audio: "school" },
          { word: "company", meaning: "公司", example: "I work for a company.", audio: "company" },
          { word: "salary", meaning: "工资", example: "The salary is good.", audio: "salary" },
        ],
        grammar: { title: "Present simple for routines and facts", content: "Present simple for work routines:\n\nStructure:\n- I/You/We/They + verb: I work, You study\n- He/She/It + verb + s: He works, She studies\n\nNegative:\n- I don't work here. (我不在这里工作)\n- He doesn't work here. (他不在这里工作)\n\nQuestions:\n- Do you work in an office? — Yes, I do.\n- Does she work in a hospital? — Yes, she does.\n\nPrepositions with work:\n- work in (在...工作): work in an office, work in a hospital\n- work for (为...工作): work for a company, work for Google\n- work with (与...一起): work with children, work with computers\n- work as (作为...): work as a teacher, work as a doctor\n\nJobs with articles:\n- a doctor, a teacher, an engineer\n- Note: 'an' before vowel sounds: an engineer, an artist\n\nNo article for general statements:\n- Teachers work hard. (老师们工作辛苦)\n- Doctors help people. (医生帮助人们)", tip: "work in + place, work for + company, work as + job. Remember the difference!" },
        dialogue: [
          { role: "A", text: "What do you do, Tom?", cn: "你做什么工作，Tom？" },
          { role: "Tom", text: "I'm an engineer. I work for a big company.", cn: "我是工程师。我在一家大公司工作。" },
          { role: "A", text: "Where do you work?", cn: "你在哪里工作？" },
          { role: "Tom", text: "I work in an office in the city centre.", cn: "我在市中心的一间办公室工作。" },
          { role: "A", text: "Do you like your job?", cn: "你喜欢你的工作吗？" },
          { role: "Tom", text: "Yes, I do. It's interesting and the salary is good.", cn: "是的，我喜欢。很有趣，工资也不错。" },
        ],
        practice: [
          { type: "fill", question: "She works ___ a hospital. (她在医院工作)", answer: "in", hint: "工作地点" },
          { type: "choice", question: "'他是工程师' 怎么说?", options: ["He is engineer.", "He is an engineer.", "He is a engineer.", "He engineer."], answer: 1 },
          { type: "fill", question: "I work ___ a teacher. (我作为老师工作)", answer: "as", hint: "作为" },
          { type: "choice", question: "'你在哪里工作？' 怎么说?", options: ["What do you work?", "Where do you work?", "When do you work?", "Why do you work?"], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unit 12: Past events ==========
  {
    unit: 12, unitTitle: "Past events", unitDesc: "Past tense and talking about yesterday",
    lessons: [
      {
        id: 'la1-u12-l1', title: "Lesson 1 — Yesterday", goal: "Learn to talk about past events using past simple",
        vocab: [
          { word: "yesterday", meaning: "昨天", example: "Yesterday was Monday.", audio: "yesterday" },
          { word: "last week", meaning: "上周", example: "Last week was busy.", audio: "last week" },
          { word: "last month", meaning: "上个月", example: "Last month was hot.", audio: "last month" },
          { word: "last year", meaning: "去年", example: "Last year was good.", audio: "last year" },
          { word: "ago", meaning: "以前", example: "Two days ago.", audio: "ago" },
          { word: "was", meaning: "是（过去）", example: "I was happy.", audio: "was" },
          { word: "were", meaning: "是（过去复数）", example: "They were here.", audio: "were" },
          { word: "went", meaning: "去了", example: "I went to school.", audio: "went" },
          { word: "had", meaning: "有了", example: "I had a good time.", audio: "had" },
          { word: "did", meaning: "做了", example: "I did my homework.", audio: "did" },
          { word: "saw", meaning: "看到了", example: "I saw a film.", audio: "saw" },
          { word: "ate", meaning: "吃了", example: "I ate breakfast.", audio: "ate" },
        ],
        grammar: { title: "Past simple (was/were and regular verbs)", content: "Past simple is used for completed actions in the past:\n\n1. Verb 'to be' in past:\n   - I/He/She/It was (我是/他是/她是)\n   - You/We/They were (你是/我们是/他们是)\n   \n   Negative: wasn't / weren't\n   - I wasn't happy. (我不高兴)\n   - They weren't here. (他们不在这里)\n   \n   Questions: Was/Were + subject?\n   - Was she happy? — Yes, she was. / No, she wasn't.\n   - Were you at home? — Yes, I was. / No, I wasn't.\n\n2. Regular verbs: +ed\n   - work → worked: I worked yesterday.\n   - play → played: She played tennis.\n   - study → studied: They studied hard.\n   - stop → stopped: He stopped the car.\n\n3. Negative: didn't + verb\n   - I didn't work yesterday. (我昨天没工作)\n   - She didn't play tennis. (她没打网球)\n\n4. Questions: Did + subject + verb?\n   - Did you work yesterday? — Yes, I did. / No, I didn't.\n   - Did she play tennis? — Yes, she did. / No, she didn't.\n\nTime expressions:\n- yesterday, last week/month/year, two days ago, in 2020", tip: "Regular verbs: +ed (worked, played). Irregular verbs need to be memorized (went, saw, ate, had)!" },
        dialogue: [
          { role: "A", text: "What did you do yesterday?", cn: "你昨天做了什么？" },
          { role: "B", text: "I went to school and had lessons.", cn: "我去上学，上了课。" },
          { role: "A", text: "Was it interesting?", cn: "有趣吗？" },
          { role: "B", text: "Yes, it was. We studied English and played games.", cn: "是的，很有趣。我们学了英语，玩了游戏。" },
          { role: "A", text: "What did you do after school?", cn: "放学后你做了什么？" },
          { role: "B", text: "I went home and watched TV. Then I did my homework.", cn: "我回家看了电视。然后做了作业。" },
        ],
        practice: [
          { type: "fill", question: "I ___ to school yesterday. (我昨天去了学校)", answer: "went", hint: "go的过去式" },
          { type: "choice", question: "'她昨天没工作' 怎么说?", options: ["She doesn't work yesterday.", "She didn't work yesterday.", "She wasn't work yesterday.", "She not worked yesterday."], answer: 1 },
          { type: "fill", question: "___ you happy yesterday? — Yes, I was.", answer: "Were", hint: "were用于you" },
          { type: "choice", question: "'你昨天做了什么？' 怎么说?", options: ["What do you do yesterday?", "What did you do yesterday?", "What were you do yesterday?", "What you did yesterday?"], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unit 13: Future plans ==========
  {
    unit: 13, unitTitle: "Future plans", unitDesc: "Talking about future plans and intentions",
    lessons: [
      {
        id: 'la1-u13-l1', title: "Lesson 1 — Plans for the future", goal: "Learn to talk about future plans",
        vocab: [
          { word: "tomorrow", meaning: "明天", example: "Tomorrow is Tuesday.", audio: "tomorrow" },
          { word: "next week", meaning: "下周", example: "Next week is busy.", audio: "next week" },
          { word: "next month", meaning: "下个月", example: "Next month is my birthday.", audio: "next month" },
          { word: "next year", meaning: "明年", example: "Next year is 2025.", audio: "next year" },
          { word: "will", meaning: "将会", example: "I will go tomorrow.", audio: "will" },
          { word: "going to", meaning: "将要", example: "I'm going to study.", audio: "going to" },
          { word: "plan", meaning: "计划", example: "I have a plan.", audio: "plan" },
          { word: "hope", meaning: "希望", example: "I hope to pass.", audio: "hope" },
          { word: "maybe", meaning: "也许", example: "Maybe I'll go.", audio: "maybe" },
          { word: "soon", meaning: "很快", example: "I'll see you soon.", audio: "soon" },
          { word: "later", meaning: "以后", example: "See you later.", audio: "later" },
          { word: "promise", meaning: "承诺", example: "I promise I'll help.", audio: "promise" },
        ],
        grammar: { title: "Future: will vs going to", content: "Two ways to talk about the future:\n\n1. Will + verb (decisions, promises, predictions):\n   - I will go tomorrow. (我明天会去)\n   - She will help you. (她会帮你)\n   - It will rain tomorrow. (明天会下雨)\n   \n   Negative: won't + verb\n   - I won't go. (我不会去)\n   \n   Questions: Will + subject + verb?\n   - Will you come? — Yes, I will. / No, I won't.\n\n2. Be going to + verb (plans, intentions):\n   - I'm going to study tonight. (我今晚打算学习)\n   - She's going to visit her mum. (她打算去看望她妈妈)\n   - They're going to play football. (他们打算踢足球)\n\nWhen to use which:\n- will: quick decisions, promises, predictions without evidence\n  - I'll help you. (我帮你)\n  - I think it will rain. (我觉得会下雨)\n\n- going to: planned decisions, predictions with evidence\n  - I'm going to buy a car. (我打算买车 — planned)\n  - Look at those clouds! It's going to rain. (看那些云！要下雨了 — evidence)\n\nTime expressions:\n- tomorrow, next week/month/year, soon, later, in the future", tip: "will = quick decision/promise, going to = plan/intention. Both are future!" },
        dialogue: [
          { role: "A", text: "What are you going to do this weekend?", cn: "这个周末你打算做什么？" },
          { role: "B", text: "I'm going to visit my grandparents.", cn: "我打算去看望祖父母。" },
          { role: "A", text: "That's nice. Will you stay there long?", cn: "真好。你会待很久吗？" },
          { role: "B", text: "No, I'll come back on Sunday.", cn: "不会，我周日回来。" },
          { role: "A", text: "What will you do on Sunday?", cn: "周日你会做什么？" },
          { role: "B", text: "I'll probably relax at home. Maybe I'll read a book.", cn: "我可能会在家休息。也许会读本书。" },
        ],
        practice: [
          { type: "fill", question: "I ___ go to school tomorrow. (我明天会去上学)", answer: "will", hint: "将来时" },
          { type: "choice", question: "'我打算今晚学习' 怎么说?", options: ["I will study tonight.", "I'm going to study tonight.", "I study tonight.", "I studied tonight."], answer: 1 },
          { type: "fill", question: "She ___ going to visit her mum.", answer: "is", hint: "be going to" },
          { type: "choice", question: "'你会来吗？' 怎么说?", options: ["Do you come?", "Are you coming?", "Will you come?", "Did you come?"], answer: 2 },
        ]
      },
    ]
  },
  // ========== Unit 14: Health ==========
  {
    unit: 14, unitTitle: "Health", unitDesc: "Health, body, and visiting the doctor",
    lessons: [
      {
        id: 'la1-u14-l1', title: "Lesson 1 — At the doctor's", goal: "Learn health vocabulary and how to describe symptoms",
        vocab: [
          { word: "head", meaning: "头", example: "My head hurts.", audio: "head" },
          { word: "stomach", meaning: "胃", example: "I have a stomach ache.", audio: "stomach" },
          { word: "tooth", meaning: "牙齿", example: "I have a toothache.", audio: "tooth" },
          { word: "back", meaning: "背", example: "My back hurts.", audio: "back" },
          { word: "arm", meaning: "手臂", example: "My arm is broken.", audio: "arm" },
          { word: "leg", meaning: "腿", example: "My leg hurts.", audio: "leg" },
          { word: "hurt", meaning: "疼痛", example: "My head hurts.", audio: "hurt" },
          { word: "sick", meaning: "生病的", example: "I feel sick.", audio: "sick" },
          { word: "tired", meaning: "累的", example: "I'm tired.", audio: "tired" },
          { word: "medicine", meaning: "药", example: "Take this medicine.", audio: "medicine" },
          { word: "doctor", meaning: "医生", example: "Go to the doctor.", audio: "doctor" },
          { word: "rest", meaning: "休息", example: "You need to rest.", audio: "rest" },
        ],
        grammar: { title: "Can/can't and should/shouldn't", content: "1. Can/can't (能力/许可):\n   - I can swim. (我会游泳)\n   - She can't drive. (她不会开车)\n   - Can you help me? — Yes, I can. / No, I can't.\n   \n   Uses:\n   - Ability: I can speak English.\n   - Permission: Can I go now?\n   - Request: Can you help me?\n\n2. Should/shouldn't (建议):\n   - You should rest. (你应该休息)\n   - You shouldn't eat too much. (你不应该吃太多)\n   - Should I go to the doctor? — Yes, you should. / No, you shouldn't.\n   \n   Uses:\n   - Advice: You should see a doctor.\n   - Recommendation: You should take this medicine.\n   - Opinion: You shouldn't smoke.\n\n3. Must/mustn't (必须/禁止):\n   - You must take your medicine. (你必须吃药)\n   - You mustn't smoke here. (你不能在这里吸烟)\n\n4. Giving advice:\n   - You should + verb: You should rest.\n   - You'd better + verb: You'd better see a doctor.\n   - Why don't you + verb: Why don't you take some medicine?", tip: "can = ability/permission, should = advice, must = obligation. Don't confuse them!" },
        dialogue: [
          { role: "Doctor", text: "What's the matter?", cn: "怎么了？" },
          { role: "Patient", text: "I have a headache and I feel tired.", cn: "我头痛，感觉累。" },
          { role: "Doctor", text: "How long have you felt like this?", cn: "你感觉这样多久了？" },
          { role: "Patient", text: "Since yesterday.", cn: "从昨天开始。" },
          { role: "Doctor", text: "You should rest and drink plenty of water.", cn: "你应该休息，多喝水。" },
          { role: "Patient", text: "Should I take any medicine?", cn: "我需要吃药吗？" },
          { role: "Doctor", text: "Yes, take this medicine twice a day.", cn: "是的，这药一天吃两次。" },
        ],
        practice: [
          { type: "fill", question: "You ___ rest. (你应该休息)", answer: "should", hint: "建议" },
          { type: "choice", question: "'我不会游泳' 怎么说?", options: ["I don't can swim.", "I can't swim.", "I not can swim.", "I can swim not."], answer: 1 },
          { type: "fill", question: "___ I help you? — Yes, please.", answer: "Can", hint: "请求帮助" },
          { type: "choice", question: "'你不应该吃太多' 怎么说?", options: ["You don't eat too much.", "You shouldn't eat too much.", "You can't eat too much.", "You mustn't eat too much."], answer: 1 },
        ]
      },
    ]
  },
  // ========== Unit 15: Review ==========
  {
    unit: 15, unitTitle: "Review", unitDesc: "Review and consolidation of Book 1",
    lessons: [
      {
        id: 'la1-u15-l1', title: "Lesson 1 — Looking back", goal: "Review all grammar and vocabulary from Book 1",
        vocab: [
          { word: "review", meaning: "复习", example: "Let's review the lessons.", audio: "review" },
          { word: "remember", meaning: "记住", example: "I remember the words.", audio: "remember" },
          { word: "forget", meaning: "忘记", example: "Don't forget the homework.", audio: "forget" },
          { word: "understand", meaning: "理解", example: "I understand now.", audio: "understand" },
          { word: "practice", meaning: "练习", example: "Practice makes perfect.", audio: "practice" },
          { word: "improve", meaning: "提高", example: "I want to improve my English.", audio: "improve" },
          { word: "learn", meaning: "学习", example: "I learn English every day.", audio: "learn" },
          { word: "speak", meaning: "说", example: "I can speak English.", audio: "speak" },
          { word: "read", meaning: "读", example: "I like to read.", audio: "read" },
          { word: "write", meaning: "写", example: "I can write in English.", audio: "write" },
          { word: "listen", meaning: "听", example: "Listen carefully.", audio: "listen" },
          { word: "progress", meaning: "进步", example: "You are making progress.", audio: "progress" },
        ],
        grammar: { title: "Book 1 Grammar Summary", content: "Book 1 covers:\n\n1. Verb 'to be': am/is/are\n   - I am a student. / She is happy.\n\n2. Present simple:\n   - I work / He works\n   - I don't work / He doesn't work\n   - Do you work? / Does he work?\n\n3. Past simple (was/were + regular verbs):\n   - I was / They were\n   - I worked / She played\n   - I didn't work / Did you work?\n\n4. Future (will / going to):\n   - I will go / I'm going to go\n\n5. Can/should/must:\n   - I can swim / You should rest / You must go\n\n6. There is/are:\n   - There is a book / There are two books\n\n7. Articles (a/an/the):\n   - a book / an apple / the book\n\n8. Possessives (my/your/his/her):\n   - my book / her pen\n\n9. Demonstratives (this/that/these/those):\n   - this book / those shoes\n\n10. Prepositions (in/on/at/by):\n    - in the room / on the table / at school / by bus", tip: "Book 1 is the foundation! Make sure you master all these basics before moving to Book 2." },
        dialogue: [
          { role: "Teacher", text: "Today we're reviewing Book 1. What did we learn?", cn: "今天我们复习第1册。我们学了什么？" },
          { role: "Student", text: "We learned the verb 'to be', present simple, and past simple.", cn: "我们学了be动词、一般现在时和一般过去时。" },
          { role: "Teacher", text: "Very good! Can you give me an example?", cn: "很好！你能举个例子吗？" },
          { role: "Student", text: "I am a student. I study English every day. Yesterday I studied hard.", cn: "我是学生。我每天学英语。昨天我努力学习了。" },
          { role: "Teacher", text: "Excellent! And what about the future?", cn: "太棒了！将来时呢？" },
          { role: "Student", text: "Tomorrow I will continue studying. I'm going to practice more.", cn: "明天我将继续学习。我打算多练习。" },
        ],
        practice: [
          { type: "fill", question: "I ___ a student. (我是学生)", answer: "am", hint: "be动词" },
          { type: "choice", question: "'她昨天没工作' 怎么说?", options: ["She doesn't work yesterday.", "She didn't work yesterday.", "She wasn't work yesterday.", "She not worked yesterday."], answer: 1 },
          { type: "fill", question: "There ___ two books on the desk.", answer: "are", hint: "复数用are" },
          { type: "choice", question: "'你应该休息' 怎么说?", options: ["You can rest.", "You must rest.", "You should rest.", "You will rest."], answer: 2 },
        ]
      },
    ]
  },
];
