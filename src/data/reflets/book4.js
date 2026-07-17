/**
 * Reflets 4 — 走遍法国 第4册
 * 级别：B1/B2 | 12个单元 | 高级语法：泛指代词、让步从句、条件句等
 * 话题：全球化、哲学、文学、经济、国际关系等
 */
export const reflets4Data = [
  // ========== Unité 1 : La mondialisation ==========
  {
    unit: 1, unitTitle: "La mondialisation", unitDesc: "全球化与文化多样性",
    lessons: [
      {
        id: 'r4-u1-l1', title: "Leçon 1 — Un monde globalisé", goal: "讨论全球化，掌握泛指代词",
        vocab: [
          { word: "la mondialisation", meaning: "全球化", example: "La mondialisation change le monde.", audio: "la mondialisation" },
          { word: "global", meaning: "全球的", example: "C'est un problème global.", audio: "global" },
          { word: "la diversité", meaning: "多样性", example: "La diversité culturelle est importante.", audio: "la diversité" },
          { word: "culturel", meaning: "文化的", example: "Le patrimoine culturel est précieux.", audio: "culturel" },
          { word: "l'économie (f.)", meaning: "经济", example: "L'économie mondiale est interconnectée.", audio: "l'économie" },
          { word: "le commerce", meaning: "贸易", example: "Le commerce international augmente.", audio: "le commerce" },
          { word: "échanger", meaning: "交换", example: "Nous échangeons des produits.", audio: "échanger" },
          { word: "la frontière", meaning: "边界", example: "Les frontières sont ouvertes.", audio: "la frontière" },
          { word: "l'immigration (f.)", meaning: "移民", example: "L'immigration est un sujet de débat.", audio: "l'immigration" },
          { word: "l'identité (f.)", meaning: "身份", example: "L'identité nationale est importante.", audio: "l'identité" },
          { word: "uniforme", meaning: "统一的", example: "La culture devient uniforme.", audio: "uniforme" },
          { word: "préserver", meaning: "保护", example: "Il faut préserver les traditions.", audio: "préserver" },
        ],
        grammar: { title: "泛指代词 (les pronoms indéfinis)", content: "泛指代词用于指代不确定的人或事物：\n\n1. 指代人：\n   - quelqu'un (某人)\n     Quelqu'un frappe à la porte. (有人在敲门)\n   - personne (没有人)\n     Personne n'est venu. (没有人来)\n   - tout le monde (每个人)\n     Tout le monde est content. (每个人都很高兴)\n   - aucun (没有一个)\n     Aucun n'a répondu. (没有一个回答)\n\n2. 指代事物：\n   - quelque chose (某事)\n     J'ai quelque chose à te dire. (我有事要告诉你)\n   - rien (没有任何事)\n     Je n'ai rien à dire. (我没什么要说的)\n   - tout (一切)\n     Tout est possible. (一切皆有可能)\n\n3. 既可指人也可指物：\n   - certain (某些)\n     Certaines personnes sont gentilles. (有些人很好)\n   - plusieurs (几个)\n     Plusieurs sont venus. (几个人来了)\n   - autre (其他)\n     J'ai autre chose à faire. (我有其他事要做)\n   - même (相同的)\n     Ils ont les mêmes idées. (他们有相同的想法)\n\n4. 泛指代词作主语：\n   - On dit que... (人们说...)\n   - Il faut que... (必须...)\n   - Chacun a son avis. (每个人都有自己的观点)", tip: "泛指代词是法语B2级别的重要语法，多读多练！" },
        dialogue: [
          { role: "A", text: "Qu'est-ce que tu penses de la mondialisation?", cn: "你怎么看全球化？" },
          { role: "B", text: "C'est un phénomène complexe. Quelque chose change dans notre façon de vivre.", cn: "这是个复杂的现象。我们的生活方式正在改变。" },
          { role: "A", text: "Est-ce que tout le monde est d'accord?", cn: "每个人都同意吗？" },
          { role: "B", text: "Non, certaines personnes pensent que la mondialisation détruit la diversité culturelle.", cn: "不，有些人认为全球化正在摧毁文化多样性。" },
          { role: "A", text: "Et toi, tu es pour ou contre?", cn: "你呢，支持还是反对？" },
          { role: "B", text: "Je pense qu'il faut préserver les identités tout en acceptant le changement.", cn: "我认为需要保护身份认同，同时接受变化。" },
        ],
        practice: [
          { type: "fill", question: "___ est venu. (没有人来)", answer: "Personne", hint: "泛指代词" },
          { type: "choice", question: "'每个人都很高兴' 怎么说?", options: ["Tout le monde est content.", "Quelqu'un est content.", "Personne est content.", "Rien est content."], answer: 0 },
          { type: "fill", question: "J'ai ___ chose à te dire.", answer: "quelque", hint: "泛指代词" },
        ]
      },
    ]
  },
  // ========== Unité 2 : Philosophie et réflexion ==========
  {
    unit: 2, unitTitle: "Philosophie et réflexion", unitDesc: "哲学与思考",
    lessons: [
      {
        id: 'r4-u2-l1', title: "Leçon 1 — Penser le monde", goal: "讨论哲学话题，掌握让步从句",
        vocab: [
          { word: "la philosophie", meaning: "哲学", example: "La philosophie est l'amour de la sagesse.", audio: "la philosophie" },
          { word: "penser", meaning: "思考", example: "Je pense, donc je suis.", audio: "penser" },
          { word: "la raison", meaning: "理性", example: "La raison est importante.", audio: "la raison" },
          { word: "la vérité", meaning: "真理", example: "La vérité est parfois difficile à accepter.", audio: "la vérité" },
          { word: "la sagesse", meaning: "智慧", example: "La sagesse vient avec l'âge.", audio: "la sagesse" },
          { word: "réfléchir", meaning: "反思", example: "Il faut réfléchir avant d'agir.", audio: "réfléchir" },
          { word: "la conscience", meaning: "意识", example: "La conscience est importante.", audio: "la conscience" },
          { word: "libre", meaning: "自由的", example: "L'homme est libre.", audio: "libre" },
          { word: "la liberté", meaning: "自由", example: "La liberté est un droit fondamental.", audio: "la liberté" },
          { word: "le devoir", meaning: "责任", example: "Chacun a ses devoirs.", audio: "le devoir" },
          { word: "le droit", meaning: "权利", example: "Tout le monde a des droits.", audio: "le droit" },
          { word: "moral", meaning: "道德的", example: "C'est une question morale.", audio: "moral" },
        ],
        grammar: { title: "让步从句 (les propositions de concession)", content: "让步从句表达与主句相反的情况：\n\n1. bien que + 虚拟式 (虽然)\n   Bien qu'il soit intelligent, il ne travaille pas. (虽然他很聪明，但不努力)\n\n2. quoique + 虚拟式 (虽然)\n   Quoiqu'elle soit fatiguée, elle continue. (虽然她累了，但继续)\n\n3. malgré + 名词 (尽管)\n   Malgré la pluie, nous sommes sortis. (尽管下雨，我们还是出去了)\n\n4. malgré que + 虚拟式 (虽然 — 口语)\n   Malgré qu'il soit malade, il vient. (虽然生病，他还是来了)\n\n5. avoir beau + 不定式 (徒然)\n   J'ai beau étudier, je ne comprends pas. (我徒然学习，还是不懂)\n\n6. sans que + 虚拟式 (没有...就)\n   Il est parti sans que je le voie. (他走了，我没看到他)\n\n7. tout + 形容词/副词 + que + 虚拟式 (虽然)\n   Tout intelligent qu'il soit, il fait des erreurs. (虽然他很聪明，但会犯错)\n\n注意：bien que 和 quoique 后必须用虚拟式！", tip: "让步从句是法语B2的核心语法，多读多写多练！" },
        dialogue: [
          { role: "A", text: "Tu as lu ce livre de philosophie?", cn: "你读了这本哲学书吗？" },
          { role: "B", text: "Oui, bien qu'il soit difficile, je l'ai terminé.", cn: "是的，虽然很难，但我读完了。" },
          { role: "A", text: "Qu'est-ce que tu en penses?", cn: "你怎么想？" },
          { role: "B", text: "Je pense que la vérité est parfois difficile à accepter, malgré que ce soit important.", cn: "我认为真理有时难以接受，尽管这很重要。" },
          { role: "A", text: "Tu as raison. La philosophie nous aide à réfléchir.", cn: "你说得对。哲学帮助我们思考。" },
          { role: "B", text: "Exactement. Tout complexe que soit le sujet, il faut réfléchir.", cn: "没错。无论话题多复杂，都需要思考。" },
        ],
        practice: [
          { type: "fill", question: "___ qu'il soit intelligent, il ne travaille pas.", answer: "Bien", hint: "让步从句" },
          { type: "choice", question: "'尽管下雨，我们还是出去了' 怎么说?", options: ["Malgré la pluie, nous sommes sortis.", "Parce que la pluie, nous sommes sortis.", "Quand la pluie, nous sommes sortis.", "Si la pluie, nous sommes sortis."], answer: 0 },
          { type: "fill", question: "J'ai beau ___, je ne comprends pas.", answer: "étudier", hint: "让步结构" },
        ]
      },
    ]
  },
  // ========== Unité 3 : Littérature et écriture ==========
  {
    unit: 3, unitTitle: "Littérature et écriture", unitDesc: "文学与写作",
    lessons: [
      {
        id: 'r4-u3-l1', title: "Leçon 1 — Les grands auteurs", goal: "讨论文学作品，掌握文学过去时",
        vocab: [
          { word: "la littérature", meaning: "文学", example: "La littérature française est riche.", audio: "la littérature" },
          { word: "l'écrivain (m.)", meaning: "作家", example: "Victor Hugo est un grand écrivain.", audio: "l'écrivain" },
          { word: "le roman", meaning: "小说", example: "Ce roman est magnifique.", audio: "le roman" },
          { word: "le poème", meaning: "诗歌", example: "Ce poème est beau.", audio: "le poème" },
          { word: "le théâtre", meaning: "戏剧", example: "Le théâtre est un art vivant.", audio: "le théâtre" },
          { word: "écrire", meaning: "写作", example: "Il écrit des romans.", audio: "écrire" },
          { word: "lire", meaning: "阅读", example: "J'aime lire des livres.", audio: "lire" },
          { word: "le personnage", meaning: "人物", example: "Le personnage principal est intéressant.", audio: "le personnage" },
          { word: "l'intrigue (f.)", meaning: "情节", example: "L'intrigue est complexe.", audio: "l'intrigue" },
          { word: "le style", meaning: "风格", example: "Son style est unique.", audio: "le style" },
          { word: "l'œuvre (f.)", meaning: "作品", example: "C'est une œuvre masterpiece.", audio: "l'œuvre" },
          { word: "chef-d'œuvre", meaning: "杰作", example: "C'est un chef-d'œuvre de la littérature.", audio: "chef-d'œuvre" },
        ],
        grammar: { title: "文学过去时 (le passé simple)", content: "文学过去时用于书面叙述，尤其是文学作品：\n\n-er 动词变位：\n- je parlai, tu parlás, il parla\n- nous parlâmes, vous parlâtes, ils parlèrent\n\n-ir 动词变位：\n- je finis, tu finis, il finit\n- nous finîmes, vous finîtes, ils finirent\n\n-re 动词变位：\n- je vendis, tu vendis, il vendit\n- nous vendîmes, vous vendîtes, ils vendirent\n\nêtre 和 avoir：\n- je fus, tu fus, il fut, nous fûmes, vous fûtes, ils furent\n- j'eus, tu eus, il eut, nous eûmes, vous eûtes, ils eurent\n\n用法：\n1. 文学作品中叙述完成的动作：\n   Il entra dans la salle. (他走进了大厅)\n   Elle prit le livre. (她拿了书)\n\n2. 与未完成过去时搭配：\n   Il faisait beau quand il arriva. (天气很好，当他到达时)\n\n注意：文学过去时主要用于书面语，口语中用复合过去时替代！", tip: "文学过去时是法语文学的标志，多读经典作品多感受！" },
        dialogue: [
          { role: "A", text: "Tu as lu Les Misérables de Victor Hugo?", cn: "你读了Victor Hugo的《悲惨世界》吗？" },
          { role: "B", text: "Oui, c'est un chef-d'œuvre. Le personnage principal s'appelle Jean Valjean.", cn: "是的，这是杰作。主角叫Jean Valjean。" },
          { role: "A", text: "Comment est l'intrigue?", cn: "情节怎么样？" },
          { role: "B", text: "L'intrigue est complexe. Jean Valjean vola du pain et fut condamné.", cn: "情节很复杂。Jean Valjean偷了面包，被判刑。" },
          { role: "A", text: "Et le style?", cn: "风格呢？" },
          { role: "B", text: "Le style de Hugo est magnifique. Il décrivit la société avec passion.", cn: "Hugo的风格很美。他热情地描述了社会。" },
        ],
        practice: [
          { type: "fill", question: "Il ___ dans la salle. (他走进了大厅)", answer: "entra", hint: "entrer的passé simple" },
          { type: "choice", question: "'她拿了书' 怎么说?", options: ["Elle prend le livre.", "Elle prit le livre.", "Elle a pris le livre.", "Elle prenait le livre."], answer: 1 },
          { type: "fill", question: "Nous ___ nos études. (我们完成了学业)", answer: "finîmes", hint: "finir的passé simple" },
        ]
      },
    ]
  },
  // ========== Unité 4 : Économie et finance ==========
  {
    unit: 4, unitTitle: "Économie et finance", unitDesc: "经济与金融",
    lessons: [
      {
        id: 'r4-u4-l1', title: "Leçon 1 — Le monde économique", goal: "讨论经济话题，掌握条件句",
        vocab: [
          { word: "l'économie (f.)", meaning: "经济", example: "L'économie est en crise.", audio: "l'économie" },
          { word: "la finance", meaning: "金融", example: "La finance mondiale est complexe.", audio: "la finance" },
          { word: "le marché", meaning: "市场", example: "Le marché est instable.", audio: "le marché" },
          { word: "l'entreprise (f.)", meaning: "企业", example: "L'entreprise est rentable.", audio: "l'entreprise" },
          { word: "le profit", meaning: "利润", example: "Le profit augmente.", audio: "le profit" },
          { word: "la perte", meaning: "亏损", example: "L'entreprise a subi une perte.", audio: "la perte" },
          { word: "investir", meaning: "投资", example: "Il investit dans l'immobilier.", audio: "investir" },
          { word: "l'investissement (m.)", meaning: "投资", example: "C'est un bon investissement.", audio: "l'investissement" },
          { word: "la banque", meaning: "银行", example: "Je vais à la banque.", audio: "la banque" },
          { word: "le crédit", meaning: "信贷", example: "J'ai pris un crédit.", audio: "le crédit" },
          { word: "la dette", meaning: "债务", example: "Le pays a une grande dette.", audio: "la dette" },
          { word: "la croissance", meaning: "增长", example: "La croissance est lente.", audio: "la croissance" },
        ],
        grammar: { title: "条件句 (les phrases conditionnelles)", content: "条件句表达假设和结果：\n\n1. 真实条件（si + 现在时 → 现在时/将来时/命令式）：\n   Si tu étudies, tu réussiras. (如果你学习，你就会通过)\n   S'il fait beau, nous irons au parc. (如果天气好，我们就去公园)\n\n2. 可能条件（si + 未完成过去时 → 条件式现在时）：\n   Si j'avais de l'argent, je voyagerais. (如果我有钱，我就会旅行)\n   Si tu venais, nous serions contents. (如果你来，我们会很高兴)\n\n3. 不可能条件（si + 愈过去时 → 条件式过去时）：\n   Si j'avais étudié, j'aurais réussi. (如果我学习了，我就会通过了)\n   Si tu étais venu, nous aurions été contents. (如果你来了，我们会很高兴)\n\n4. 其他条件结构：\n   - à condition que + subj. (条件是...)\n   - pourvu que + subj. (只要...)\n   - au cas où + conditionnel (万一...)\n   - sans + 名词/不定式 (如果没有...)\n\n注意：si 后不能用将来时或条件式！\n错：Si tu viendras... (错)\n对：Si tu viens... (对)", tip: "条件句是法语B2的核心语法，记住：si 后不用将来时！" },
        dialogue: [
          { role: "A", text: "Qu'est-ce que tu ferais si tu avais beaucoup d'argent?", cn: "如果你有很多钱，你会做什么？" },
          { role: "B", text: "Si j'avais de l'argent, j'investirais dans l'immobilier.", cn: "如果我有钱，我会投资房地产。" },
          { role: "A", text: "Et si tu pouvais créer une entreprise?", cn: "如果你能创建一家公司呢？" },
          { role: "B", text: "Si je pouvais, je créerais une entreprise technologique.", cn: "如果可以，我会创建一家科技公司。" },
          { role: "A", text: "Tu penses que la croissance reviendra?", cn: "你认为增长会恢复吗？" },
          { role: "B", text: "Si le marché se stabilise, la croissance reviendra.", cn: "如果市场稳定，增长会恢复。" },
        ],
        practice: [
          { type: "fill", question: "Si tu ___ (étudier), tu réussiras.", answer: "étudies", hint: "真实条件句" },
          { type: "choice", question: "'如果我有钱，我就会旅行' 怎么说?", options: ["Si j'ai de l'argent, je voyagerai.", "Si j'avais de l'argent, je voyagerais.", "Si j'avais eu de l'argent, j'aurais voyagé.", "Si j'aurai de l'argent, je voyagerais."], answer: 1 },
          { type: "fill", question: "Si j'avais étudié, j'___ réussi.", answer: "aurais", hint: "条件式过去时" },
        ]
      },
    ]
  },
  // ========== Unité 5 : Droit et justice ==========
  {
    unit: 5, unitTitle: "Droit et justice", unitDesc: "法律与正义",
    lessons: [
      {
        id: 'r4-u5-l1', title: "Leçon 1 — Le système judiciaire", goal: "讨论法律话题，掌握虚拟式在让步从句中的应用",
        vocab: [
          { word: "le droit", meaning: "法律", example: "Le droit est important.", audio: "le droit" },
          { word: "la justice", meaning: "正义", example: "La justice doit être rendue.", audio: "la justice" },
          { word: "la loi", meaning: "法律", example: "La loi est la même pour tous.", audio: "la loi" },
          { word: "le tribunal", meaning: "法庭", example: "L'affaire sera jugée au tribunal.", audio: "le tribunal" },
          { word: "le juge", meaning: "法官", example: "Le juge est impartial.", audio: "le juge" },
          { word: "l'avocat (m.)", meaning: "律师", example: "L'avocat défend son client.", audio: "l'avocat" },
          { word: "le procès", meaning: "审判", example: "Le procès dure depuis une semaine.", audio: "le procès" },
          { word: "la peine", meaning: "刑罚", example: "La peine est sévère.", audio: "la peine" },
          { word: "la prison", meaning: "监狱", example: "Il a été condamné à la prison.", audio: "la prison" },
          { word: "l'amende (f.)", meaning: "罚款", example: "Il a payé une amende.", audio: "l'amende" },
          { word: "condamner", meaning: "判决", example: "Le juge l'a condamné.", audio: "condamner" },
          { word: "innocent", meaning: "无罪的", example: "Il est innocent.", audio: "innocent" },
        ],
        grammar: { title: "虚拟式在让步从句中的应用 (le subjonctif dans les concessions — suite)", content: "让步从句中虚拟式的深入用法：\n\n1. bien que + subj. (虽然)\n   Bien qu'il soit coupable, il mérite un procès équitable. (虽然有罪，他应得公正审判)\n\n2. quoique + subj. (虽然)\n   Quoiqu'elle soit innocente, elle a été condamnée. (虽然无辜，她被判刑了)\n\n3. malgré + 名词 (尽管)\n   Malgré les preuves, il nie. (尽管有证据，他否认)\n\n4. tout + adj. + que + subj. (虽然)\n   Tout puissant qu'il soit, il ne peut pas tout faire. (虽然他很强大，但不能做所有事)\n\n5. en vain que + subj. (徒然)\n   En vain qu'il essaie, il échoue. (他徒然尝试，还是失败了)\n\n6. sans que + subj. (没有...就)\n   Il est parti sans que personne le voie. (他走了，没人看到他)\n\n7. à moins que + subj. (除非)\n   Je viendrai à moins que je sois malade. (我会来，除非我生病)\n\n注意：让步从句中虚拟式的使用是法语B2的难点！", tip: "让步从句是法语写作和口语的高级表达，多读多写多练！" },
        dialogue: [
          { role: "A", text: "Tu as suivi ce procès?", cn: "你关注这个审判了吗？" },
          { role: "B", text: "Oui, bien que l'accusé soit coupable, son avocat a bien défendu.", cn: "是的，虽然被告有罪，但他的律师辩护得很好。" },
          { role: "A", text: "Qu'est-ce que le juge a décidé?", cn: "法官怎么决定的？" },
          { role: "B", text: "Le juge l'a condamné à cinq ans de prison, malgré les circonstances atténuantes.", cn: "法官判他五年监禁，尽管有减轻情节。" },
          { role: "A", text: "C'est sévère.", cn: "很严厉。" },
          { role: "B", text: "Oui, mais la justice doit être rendue, à moins que ce soit injuste.", cn: "是的，但正义必须得到伸张，除非这不公正。" },
        ],
        practice: [
          { type: "fill", question: "___ qu'il soit coupable, il mérite un procès équitable.", answer: "Bien", hint: "让步从句" },
          { type: "choice", question: "'虽然无辜，她被判刑了' 怎么说?", options: ["Parce qu'elle est innocente, elle a été condamnée.", "Quoiqu'elle soit innocente, elle a été condamnée.", "Quand elle est innocente, elle a été condamnée.", "Si elle est innocente, elle a été condamnée."], answer: 1 },
          { type: "fill", question: "Je viendrai ___ que je sois malade.", answer: "à moins", hint: "让步条件" },
        ]
      },
    ]
  },
  // ========== Unité 6 : Relations internationales ==========
  {
    unit: 6, unitTitle: "Relations internationales", unitDesc: "国际关系",
    lessons: [
      {
        id: 'r4-u6-l1', title: "Leçon 1 — Le monde diplomatique", goal: "讨论国际事务，掌握条件式在外交语言中的应用",
        vocab: [
          { word: "la diplomatie", meaning: "外交", example: "La diplomatie est essentielle.", audio: "la diplomatie" },
          { word: "le diplomate", meaning: "外交官", example: "Le diplomate négocie.", audio: "le diplomate" },
          { word: "l'ambassade (f.)", meaning: "大使馆", example: "Il travaille à l'ambassade.", audio: "l'ambassade" },
          { word: "le traité", meaning: "条约", example: "Le traité a été signé.", audio: "le traité" },
          { word: "négocier", meaning: "谈判", example: "Les pays négocient.", audio: "négocier" },
          { word: "l'accord (m.)", meaning: "协议", example: "L'accord est conclu.", audio: "l'accord" },
          { word: "le conflit", meaning: "冲突", example: "Le conflit dure depuis longtemps.", audio: "le conflit" },
          { word: "la paix", meaning: "和平", example: "Nous voulons la paix.", audio: "la paix" },
          { word: "la guerre", meaning: "战争", example: "La guerre est terrible.", audio: "la guerre" },
          { word: "l'ONU (f.)", meaning: "联合国", example: "L'ONU maintient la paix.", audio: "l'ONU" },
          { word: "l'alliance (f.)", meaning: "联盟", example: "L'alliance est forte.", audio: "l'alliance" },
          { word: "la coopération", meaning: "合作", example: "La coopération est nécessaire.", audio: "la coopération" },
        ],
        grammar: { title: "条件式在外交语言中的应用 (le conditionnel dans le langage diplomatique)", content: "条件式在外交和正式语言中用于表达委婉、假设或建议：\n\n1. 委婉表达：\n   Le gouvernement souhaiterait négocier. (政府希望谈判)\n   La France proposerait un accord. (法国提议一项协议)\n\n2. 假设情况：\n   Si les deux pays acceptaient, la paix serait possible. (如果两国接受，和平就可能实现)\n   Que feriez-vous si le conflit continuait? (如果冲突继续，你们会做什么？)\n\n3. 新闻报道中的未证实信息：\n   Le président aurait déclaré... (据称总统宣布...)\n   Les négociations auraient échoué. (据称谈判失败)\n\n4. 礼貌建议：\n   Nous vous suggérerions de... (我们建议您...)\n   Il serait préférable de... (最好...)\n\n5. 外交辞令：\n   Nous serions disposés à... (我们愿意...)\n   Cela pourrait être envisagé. (这可以被考虑)", tip: "条件式在正式场合和外交语言中非常重要，多读新闻多练习！" },
        dialogue: [
          { role: "A", text: "Qu'est-ce qui se passe aux négociations?", cn: "谈判进展如何？" },
          { role: "B", text: "Les deux pays souhaiteraient trouver un accord.", cn: "两国希望达成协议。" },
          { role: "A", text: "Et le conflit?", cn: "冲突呢？" },
          { role: "B", text: "Si les deux parties acceptaient, la paix serait possible.", cn: "如果双方接受，和平就可能实现。" },
          { role: "A", text: "Qu'est-ce que l'ONU propose?", cn: "联合国提议什么？" },
          { role: "B", text: "L'ONU proposerait une médiation. Cela pourrait aider.", cn: "联合国提议调解。这可能有帮助。" },
        ],
        practice: [
          { type: "fill", question: "Le gouvernement ___ négocier. (政府希望谈判)", answer: "souhaiterait", hint: "条件式现在时" },
          { type: "choice", question: "'据称总统宣布...' 怎么说?", options: ["Le président déclare...", "Le président a déclaré...", "Le président aurait déclaré...", "Le président déclarerait..."], answer: 2 },
          { type: "fill", question: "Si les deux pays acceptaient, la paix ___ possible.", answer: "serait", hint: "条件式现在时" },
        ]
      },
    ]
  },
  // ========== Unité 7 : Médias et opinion publique ==========
  {
    unit: 7, unitTitle: "Médias et opinion publique", unitDesc: "媒体与舆论",
    lessons: [
      {
        id: 'r4-u7-l1', title: "Leçon 1 — L'influence des médias", goal: "讨论媒体影响，掌握目的从句深入",
        vocab: [
          { word: "l'opinion (f.)", meaning: "舆论", example: "L'opinion publique est importante.", audio: "l'opinion" },
          { word: "publique", meaning: "公众的", example: "L'opinion publique change.", audio: "publique" },
          { word: "l'influence (f.)", meaning: "影响", example: "Les médias ont une grande influence.", audio: "l'influence" },
          { word: "manipuler", meaning: "操纵", example: "Les médias peuvent manipuler.", audio: "manipuler" },
          { word: "la manipulation", meaning: "操纵", example: "La manipulation est dangereuse.", audio: "la manipulation" },
          { word: "informer", meaning: "告知", example: "Les médias informent le public.", audio: "informer" },
          { word: "l'information (f.)", meaning: "信息", example: "L'information est essentielle.", audio: "l'information" },
          { word: "la censure", meaning: "审查", example: "La censure est interdite.", audio: "la censure" },
          { word: "la liberté de la presse", meaning: "新闻自由", example: "La liberté de la presse est un droit.", audio: "la liberté de la presse" },
          { word: "le sondage", meaning: "民意调查", example: "Le sondage montre que...", audio: "le sondage" },
          { word: "le débat", meaning: "辩论", example: "Le débat est animé.", audio: "le débat" },
          { word: "convaincre", meaning: "说服", example: "Il a convaincu le public.", audio: "convaincre" },
        ],
        grammar: { title: "目的从句深入 (les propositions de but — suite)", content: "目的从句的深入用法：\n\n1. pour que + subj. (为了)\n   Je parle fort pour que tout le monde m'entende. (我大声说以便大家都能听到)\n\n2. afin que + subj. (为了 — 更正式)\n   Nous travaillons afin que les générations futures vivent mieux. (我们工作以便后代生活更好)\n\n3. de peur que + subj. (+ ne explétif) (以免)\n   Je ferme la fenêtre de peur qu'il ne pleuve. (我关上窗户以免下雨)\n\n4. de crainte que + subj. (+ ne explétif) (生怕)\n   Elle parle bas de crainte qu'on ne l'entende. (她小声说生怕别人听到)\n\n5. sans que + subj. (没有...就)\n   Il est sorti sans que je le voie. (他出去了，我没看到他)\n\n6. 主语相同时用不定式：\n   pour + inf. (为了)\n   Je travaille pour réussir. (我工作为了成功)\n   afin de + inf. (为了 — 更正式)\n   Il étudie afin de passer l'examen. (他学习为了通过考试)\n\n7. ne explétif：\n   在 de peur que 和 de crainte que 后，可以加 ne（不表示否定）：\n   Je crains qu'il ne vienne. (我担心他会来)\n   de peur qu'il ne pleuve (以免下雨)", tip: "目的从句是法语B2的重要语法，多读多写多练！" },
        dialogue: [
          { role: "A", text: "Qu'est-ce que tu penses des médias?", cn: "你怎么看媒体？" },
          { role: "B", text: "Les médias informent le public, mais ils peuvent aussi manipuler l'opinion.", cn: "媒体告知公众，但也可能操纵舆论。" },
          { role: "A", text: "Comment peut-on éviter la manipulation?", cn: "如何避免操纵？" },
          { role: "B", text: "Il faut vérifier les sources afin que l'information soit fiable.", cn: "需要核实来源以便信息可靠。" },
          { role: "A", text: "Et la liberté de la presse?", cn: "新闻自由呢？" },
          { role: "B", text: "Elle est essentielle pour que la démocratie fonctionne.", cn: "它对民主运作至关重要。" },
        ],
        practice: [
          { type: "fill", question: "Je parle fort ___ que tout le monde m'entende.", answer: "pour", hint: "目的从句" },
          { type: "choice", question: "'我们工作以便后代生活更好' 怎么说?", options: ["Nous travaillons pour que les générations futures vivent mieux.", "Nous travaillons parce que les générations futures vivent mieux.", "Nous travaillons quand les générations futures vivent mieux.", "Nous travaillons si les générations futures vivent mieux."], answer: 0 },
          { type: "fill", question: "Il faut vérifier les sources ___ que l'information soit fiable.", answer: "afin", hint: "目的从句" },
        ]
      },
    ]
  },
  // ========== Unité 8 : Éducation et société ==========
  {
    unit: 8, unitTitle: "Éducation et société", unitDesc: "教育与社会",
    lessons: [
      {
        id: 'r4-u8-l1', title: "Leçon 1 — Le rôle de l'éducation", goal: "讨论教育作用，掌握强调句",
        vocab: [
          { word: "l'éducation (f.)", meaning: "教育", example: "L'éducation est essentielle.", audio: "l'éducation" },
          { word: "la société", meaning: "社会", example: "La société change.", audio: "la société" },
          { word: "le rôle", meaning: "角色", example: "L'éducation joue un rôle important.", audio: "le rôle" },
          { word: "apprendre", meaning: "学习", example: "J'apprends le français.", audio: "apprendre" },
          { word: "enseigner", meaning: "教授", example: "Il enseigne les mathématiques.", audio: "enseigner" },
          { word: "la connaissance", meaning: "知识", example: "La connaissance est le pouvoir.", audio: "la connaissance" },
          { word: "la compétence", meaning: "能力", example: "Il a les compétences nécessaires.", audio: "la compétence" },
          { word: "former", meaning: "培训", example: "L'école forme les jeunes.", audio: "former" },
          { word: "la formation", meaning: "培训", example: "La formation est importante.", audio: "la formation" },
          { word: "l'élève (m./f.)", meaning: "学生", example: "Les élèves étudient.", audio: "l'élève" },
          { word: "le professeur", meaning: "老师", example: "Le professeur enseigne.", audio: "le professeur" },
          { word: "l'école (f.)", meaning: "学校", example: "L'école est obligatoire.", audio: "l'école" },
        ],
        grammar: { title: "强调句 (les phrases emphatiques)", content: "强调句用于突出句子的某个成分：\n\n1. C'est... qui (强调主语)\n   C'est moi qui ai raison. (是我对)\n   C'est lui qui a fait ça. (是他做的)\n\n2. C'est... que (强调直接宾语)\n   C'est le livre que j'ai lu. (是我读的那本书)\n   C'est Marie que j'ai vue. (是我见到的Marie)\n\n3. Ce qui... c'est (强调主语从句)\n   Ce qui m'intéresse, c'est la culture. (让我感兴趣的是文化)\n   Ce qui est important, c'est de comprendre. (重要的是理解)\n\n4. Ce que... c'est (强调宾语从句)\n   Ce que je veux, c'est réussir. (我想要的是成功)\n   Ce que j'aime, c'est voyager. (我喜欢的是旅行)\n\n5. 其他强调结构：\n   - Il y a... qui/que (有...)\n     Il y a beaucoup de gens qui pensent ça. (有很多人这么想)\n   - Quant à... (至于...)\n     Quant à moi, je suis d'accord. (至于我，我同意)\n   - Pour ce qui est de... (关于...)\n     Pour ce qui est de l'éducation, c'est important. (关于教育，这很重要)", tip: "强调句是法语口语和写作的高级表达，多读多练！" },
        dialogue: [
          { role: "A", text: "Qu'est-ce qui est le plus important dans l'éducation?", cn: "教育中最重要的是什么？" },
          { role: "B", text: "Ce qui est important, c'est de former des citoyens responsables.", cn: "重要的是培养有责任感的公民。" },
          { role: "A", text: "Et le rôle du professeur?", cn: "老师的角色呢？" },
          { role: "B", text: "C'est le professeur qui transmet les connaissances.", cn: "是老师传授知识。" },
          { role: "A", text: "Et qu'est-ce que les élèves doivent faire?", cn: "学生应该做什么？" },
          { role: "B", text: "Ce que les élèves doivent faire, c'est apprendre et développer leurs compétences.", cn: "学生应该做的是学习和培养能力。" },
        ],
        practice: [
          { type: "fill", question: "___ moi ___ ai raison.", answer: "C'est...qui", hint: "强调主语" },
          { type: "choice", question: "'让我感兴趣的是文化' 怎么说?", options: ["Ce qui m'intéresse, c'est la culture.", "Que ce qui m'intéresse, la culture.", "La culture m'intéresse.", "Ce que m'intéresse, c'est la culture."], answer: 0 },
          { type: "fill", question: "___ je veux, c'est réussir.", answer: "Ce que", hint: "强调宾语" },
        ]
      },
    ]
  },
  // ========== Unité 9 : Environnement et développement durable ==========
  {
    unit: 9, unitTitle: "Environnement et développement durable", unitDesc: "环境与可持续发展",
    lessons: [
      {
        id: 'r4-u9-l1', title: "Leçon 1 — Les enjeux environnementaux", goal: "讨论环境问题，掌握让步从句深入",
        vocab: [
          { word: "l'environnement (m.)", meaning: "环境", example: "L'environnement est en danger.", audio: "l'environnement" },
          { word: "le développement durable", meaning: "可持续发展", example: "Le développement durable est nécessaire.", audio: "le développement durable" },
          { word: "le climat", meaning: "气候", example: "Le climat change.", audio: "le climat" },
          { word: "le réchauffement", meaning: "变暖", example: "Le réchauffement climatique est grave.", audio: "le réchauffement" },
          { word: "la pollution", meaning: "污染", example: "La pollution est un problème majeur.", audio: "la pollution" },
          { word: "l'énergie (f.)", meaning: "能源", example: "Les énergies renouvelables sont l'avenir.", audio: "l'énergie" },
          { word: "renouvelable", meaning: "可再生的", example: "L'énergie solaire est renouvelable.", audio: "renouvelable" },
          { word: "recycler", meaning: "回收", example: "Nous recyclons les déchets.", audio: "recycler" },
          { word: "le déchet", meaning: "垃圾", example: "Les déchets doivent être recyclés.", audio: "le déchet" },
          { word: "la biodiversité", meaning: "生物多样性", example: "La biodiversité est menacée.", audio: "la biodiversité" },
          { word: "menacer", meaning: "威胁", example: "Le climat menace la biodiversité.", audio: "menacer" },
          { word: "protéger", meaning: "保护", example: "Il faut protéger l'environnement.", audio: "protéger" },
        ],
        grammar: { title: "让步从句深入 (les propositions de concession — suite)", content: "让步从句的深入用法：\n\n1. bien que + subj. (虽然)\n   Bien que le climat change, certains nient le problème. (虽然气候变化，有些人否认问题)\n\n2. quoique + subj. (虽然)\n   Quoique les énergies renouvelables soient disponibles, nous utilisons encore les combustibles fossiles. (虽然可再生能源可用，我们仍使用化石燃料)\n\n3. malgré + 名词 (尽管)\n   Malgré la pollution, les villes continuent de grandir. (尽管有污染，城市继续增长)\n\n4. tout + adj. + que + subj. (虽然)\n   Tout important que soit le problème, nous devons agir. (虽然问题重要，我们必须行动)\n\n5. avoir beau + inf. (徒然)\n   J'ai beau recycler, la pollution augmente. (我徒然回收，污染仍在增加)\n\n6. sans que + subj. (没有...就)\n   Les espèces disparaissent sans que personne ne fasse rien. (物种消失，没人做任何事)\n\n7. à moins que + subj. (除非)\n   Nous devons agir, à moins que ce soit trop tard. (我们必须行动，除非太晚了)\n\n注意：让步从句中虚拟式的使用是法语B2的难点！", tip: "让步从句是法语写作和口语的高级表达，多读多写多练！" },
        dialogue: [
          { role: "A", text: "Qu'est-ce que tu penses du réchauffement climatique?", cn: "你怎么看全球变暖？" },
          { role: "B", text: "Bien que le climat change, certains nient encore le problème.", cn: "虽然气候变化，有些人仍否认问题。" },
          { role: "A", text: "Et les énergies renouvelables?", cn: "可再生能源呢？" },
          { role: "B", text: "Quoiqu'elles soient disponibles, nous utilisons encore les combustibles fossiles.", cn: "虽然它们可用，我们仍使用化石燃料。" },
          { role: "A", text: "Que devons-nous faire?", cn: "我们应该做什么？" },
          { role: "B", text: "Nous devons agir, à moins que ce soit trop tard.", cn: "我们必须行动，除非太晚了。" },
        ],
        practice: [
          { type: "fill", question: "___ le climat change, certains nient le problème.", answer: "Bien que", hint: "让步从句" },
          { type: "choice", question: "'尽管有污染，城市继续增长' 怎么说?", options: ["Parce que la pollution, les villes continuent de grandir.", "Malgré la pollution, les villes continuent de grandir.", "Quand la pollution, les villes continuent de grandir.", "Si la pollution, les villes continuent de grandir."], answer: 1 },
          { type: "fill", question: "Nous devons agir, ___ que ce soit trop tard.", answer: "à moins", hint: "让步条件" },
        ]
      },
    ]
  },
  // ========== Unité 10 : Sciences et éthique ==========
  {
    unit: 10, unitTitle: "Sciences et éthique", unitDesc: "科学与伦理",
    lessons: [
      {
        id: 'r4-u10-l1', title: "Leçon 1 — Les dilemmes éthiques", goal: "讨论科学伦理，掌握虚拟式在名词从句中的综合应用",
        vocab: [
          { word: "la science", meaning: "科学", example: "La science avance rapidement.", audio: "la science" },
          { word: "l'éthique (f.)", meaning: "伦理", example: "L'éthique est importante.", audio: "l'éthique" },
          { word: "le dilemme", meaning: "困境", example: "C'est un dilemme éthique.", audio: "le dilemme" },
          { word: "la génétique", meaning: "遗传学", example: "La génétique pose des questions éthiques.", audio: "la génétique" },
          { word: "la clonage", meaning: "克隆", example: "Le clonage est controversé.", audio: "la clonage" },
          { word: "l'expérience (f.)", meaning: "实验", example: "L'expérience est réussie.", audio: "l'expérience" },
          { word: "rechercher", meaning: "研究", example: "Les chercheurs recherchent des solutions.", audio: "rechercher" },
          { word: "le chercheur", meaning: "研究员", example: "Le chercheur travaille dur.", audio: "le chercheur" },
          { word: "la découverte", meaning: "发现", example: "La découverte est importante.", audio: "la découverte" },
          { word: "controversé", meaning: "有争议的", example: "C'est un sujet controversé.", audio: "controversé" },
          { word: "moral", meaning: "道德的", example: "C'est une question morale.", audio: "moral" },
          { word: "responsable", meaning: "负责任的", example: "Nous devons être responsables.", audio: "responsable" },
        ],
        grammar: { title: "虚拟式在名词从句中的综合应用 (le subjonctif dans les subordonnées — synthèse)", content: "虚拟式在名词从句中的综合用法：\n\n1. 愿望/意志后：\n   Je veux que tu viennes. (我想要你来)\n   Je souhaite qu'il réussisse. (我希望他成功)\n\n2. 必要性/义务后：\n   Il faut que tu travailles. (你必须工作)\n   Il est nécessaire que nous partions. (我们有必要离开)\n\n3. 情感/评价后：\n   Je suis content que tu sois là. (我很高兴你在这里)\n   Il est dommage qu'il ne puisse pas venir. (很遗憾他不能来)\n\n4. 怀疑/否定后：\n   Je ne pense pas qu'il ait raison. (我不认为他对)\n   Je doute qu'elle vienne. (我怀疑她会来)\n\n5. 某些连词后：\n   bien que + subj. (虽然)\n   pour que + subj. (为了)\n   avant que + subj. (在...之前)\n   jusqu'à ce que + subj. (直到)\n   à moins que + subj. (除非)\n\n6. 虚拟式 vs 直陈式：\n   - Je pense qu'il vient. (我认为他来 — 直陈式，表示确定)\n   - Je ne pense pas qu'il vienne. (我不认为他来 — 虚拟式，表示不确定)\n   - Il est certain qu'il viendra. (确定他会来 — 直陈式)\n   - Il n'est pas certain qu'il vienne. (不确定他是否会来 — 虚拟式)", tip: "虚拟式是法语B2的核心语法，多读多写多练！" },
        dialogue: [
          { role: "A", text: "Qu'est-ce que tu penses du clonage?", cn: "你怎么看克隆？" },
          { role: "B", text: "C'est un sujet controversé. Il est nécessaire que nous réfléchissions aux conséquences éthiques.", cn: "这是个有争议的话题。我们有必要反思伦理后果。" },
          { role: "A", text: "Et la génétique?", cn: "遗传学呢？" },
          { role: "B", text: "Je ne pense pas que la génétique soit mauvaise en soi, mais il faut être responsable.", cn: "我不认为遗传学本身不好，但需要负责任。" },
          { role: "A", text: "Tu as raison. Il faut que les chercheurs soient éthiques.", cn: "你说得对。研究人员需要有道德。" },
          { role: "B", text: "Exactement. Je doute que la science puisse progresser sans éthique.", cn: "没错。我怀疑科学能否在没有伦理的情况下进步。" },
        ],
        practice: [
          { type: "fill", question: "Il est nécessaire que nous ___ (réfléchir) aux conséquences.", answer: "réfléchissions", hint: "réfléchir的虚拟式" },
          { type: "choice", question: "'我不认为他对' 怎么说?", options: ["Je pense qu'il a raison.", "Je ne pense pas qu'il ait raison.", "Il a raison.", "Je crois qu'il a raison."], answer: 1 },
          { type: "fill", question: "Il faut que les chercheurs ___ (être) éthiques.", answer: "soient", hint: "être的虚拟式" },
        ]
      },
    ]
  },
  // ========== Unité 11 : Cultures et identités ==========
  {
    unit: 11, unitTitle: "Cultures et identités", unitDesc: "文化与身份",
    lessons: [
      {
        id: 'r4-u11-l1', title: "Leçon 1 — L'identité culturelle", goal: "讨论文化身份，掌握泛指代词深入",
        vocab: [
          { word: "l'identité (f.)", meaning: "身份", example: "L'identité culturelle est importante.", audio: "l'identité" },
          { word: "culturel", meaning: "文化的", example: "Le patrimoine culturel est précieux.", audio: "culturel" },
          { word: "la culture", meaning: "文化", example: "La culture est diverse.", audio: "la culture" },
          { word: "la tradition", meaning: "传统", example: "Les traditions sont importantes.", audio: "la tradition" },
          { word: "le patrimoine", meaning: "遗产", example: "Le patrimoine doit être préservé.", audio: "le patrimoine" },
          { word: "la langue", meaning: "语言", example: "La langue est une partie de l'identité.", audio: "la langue" },
          { word: "l'origine (f.)", meaning: "起源", example: "Chacun a ses origines.", audio: "l'origine" },
          { word: "divers", meaning: "多样的", example: "Le monde est divers.", audio: "divers" },
          { word: "la diversité", meaning: "多样性", example: "La diversité est une richesse.", audio: "la diversité" },
          { word: "l'intégration (f.)", meaning: "融合", example: "L'intégration est importante.", audio: "l'intégration" },
          { word: "l'assimilation (f.)", meaning: "同化", example: "L'assimilation est un processus.", audio: "l'assimilation" },
          { word: "préserver", meaning: "保护", example: "Il faut préserver les traditions.", audio: "préserver" },
        ],
        grammar: { title: "泛指代词深入 (les pronoms indéfinis — suite)", content: "泛指代词的深入用法：\n\n1. 指代人：\n   - quelqu'un (某人)\n     Quelqu'un frappe à la porte. (有人在敲门)\n   - personne (没有人)\n     Personne n'est venu. (没有人来)\n   - tout le monde (每个人)\n     Tout le monde est content. (每个人都很高兴)\n   - aucun (没有一个)\n     Aucun n'a répondu. (没有一个回答)\n   - certains (某些人)\n     Certains pensent que... (有些人认为...)\n   - d'autres (其他人)\n     D'autres pensent que... (其他人认为...)\n\n2. 指代事物：\n   - quelque chose (某事)\n     J'ai quelque chose à te dire. (我有事要告诉你)\n   - rien (没有任何事)\n     Je n'ai rien à dire. (我没什么要说的)\n   - tout (一切)\n     Tout est possible. (一切皆有可能)\n   - chaque (每个)\n     Chaque culture est unique. (每种文化都是独特的)\n\n3. 既可指人也可指物：\n   - certain (某些)\n     Certaines personnes sont gentilles. (有些人很好)\n   - plusieurs (几个)\n     Plusieurs sont venus. (几个人来了)\n   - autre (其他)\n     J'ai autre chose à faire. (我有其他事要做)\n   - même (相同的)\n     Ils ont les mêmes idées. (他们有相同的想法)\n\n4. 泛指代词作主语：\n   - On dit que... (人们说...)\n   - Il faut que... (必须...)\n   - Chacun a son avis. (每个人都有自己的观点)", tip: "泛指代词是法语B2的重要语法，多读多练！" },
        dialogue: [
          { role: "A", text: "Qu'est-ce que l'identité culturelle?", cn: "什么是文化身份？" },
          { role: "B", text: "C'est l'ensemble des traits qui définissent une personne ou un groupe.", cn: "是定义一个人或群体的特征总和。" },
          { role: "A", text: "Est-ce que tout le monde a une identité culturelle?", cn: "每个人都有文化身份吗？" },
          { role: "B", text: "Oui, chacun a ses origines et ses traditions.", cn: "是的，每个人都有自己的起源和传统。" },
          { role: "A", text: "Et la diversité culturelle?", cn: "文化多样性呢？" },
          { role: "B", text: "La diversité est une richesse. Il faut préserver les cultures.", cn: "多样性是一笔财富。需要保护文化。" },
        ],
        practice: [
          { type: "fill", question: "___ est venu. (没有人来)", answer: "Personne", hint: "泛指代词" },
          { type: "choice", question: "'每种文化都是独特的' 怎么说?", options: ["Tout culture est unique.", "Chaque culture est unique.", "Quelque culture est unique.", "Aucune culture est unique."], answer: 1 },
          { type: "fill", question: "J'ai ___ chose à te dire.", answer: "quelque", hint: "泛指代词" },
        ]
      },
    ]
  },
  // ========== Unité 12 : Bilan et perspectives ==========
  {
    unit: 12, unitTitle: "Bilan et perspectives", unitDesc: "总结与展望",
    lessons: [
      {
        id: 'r4-u12-l1', title: "Leçon 1 — Faire le bilan", goal: "总结学习成果，掌握综合语法",
        vocab: [
          { word: "le bilan", meaning: "总结", example: "Il est temps de faire le bilan.", audio: "le bilan" },
          { word: "la perspective", meaning: "展望", example: "Les perspectives sont bonnes.", audio: "la perspective" },
          { word: "résumer", meaning: "总结", example: "Je vais résumer la leçon.", audio: "résumer" },
          { word: "l'essentiel (m.)", meaning: "要点", example: "L'essentiel est de comprendre.", audio: "l'essentiel" },
          { word: "approfondir", meaning: "深入", example: "Je veux approfondir mes connaissances.", audio: "approfondir" },
          { word: "maîtriser", meaning: "掌握", example: "Je veux maîtriser le français.", audio: "maîtriser" },
          { word: "progresser", meaning: "进步", example: "Je progresse en français.", audio: "progresser" },
          { word: "l'objectif (m.)", meaning: "目标", example: "Mon objectif est de parler couramment.", audio: "l'objectif" },
          { word: "atteindre", meaning: "达到", example: "J'ai atteint mon objectif.", audio: "atteindre" },
          { word: "la confiance", meaning: "信心", example: "J'ai confiance en moi.", audio: "la confiance" },
          { word: "l'expérience (f.)", meaning: "经验", example: "C'est une expérience enrichissante.", audio: "l'expérience" },
          { word: "enrichissant", meaning: "丰富的", example: "Ce voyage est enrichissant.", audio: "enrichissant" },
        ],
        grammar: { title: "综合语法复习 (révision générale — suite)", content: "本册语法总结：\n\n1. 泛指代词 (les pronoms indéfinis)：\n   - quelqu'un, personne, tout le monde, aucun\n   - quelque chose, rien, tout\n   - certain, plusieurs, autre, même\n\n2. 让步从句 (les propositions de concession)：\n   - bien que + subj., quoique + subj.\n   - malgré + nom, tout + adj. + que + subj.\n\n3. 文学过去时 (le passé simple)：\n   - 用于书面叙述，文学作品\n   - il parla, il finit, il vendit\n\n4. 条件句 (les phrases conditionnelles)：\n   - si + prés. → prés./fut.\n   - si + imparf. → conditionnel présent\n   - si + plus-que-parfait → conditionnel passé\n\n5. 条件式在外交语言中的应用：\n   - 委婉表达：Le gouvernement souhaiterait...\n   - 假设情况：Si les deux pays acceptaient...\n\n6. 目的从句深入 (les propositions de but)：\n   - pour que + subj., afin que + subj.\n   - de peur que + subj., de crainte que + subj.\n\n7. 强调句 (les phrases emphatiques)：\n   - C'est... qui/que\n   - Ce qui/ce que... c'est\n\n8. 虚拟式综合应用：\n   - 愿望、必要性、情感、怀疑\n   - 各种连词后的使用", tip: "B2级别是法语学习的高级阶段！继续加油，向C1迈进！" },
        dialogue: [
          { role: "A", text: "Alors, tu as fait le bilan de ton français?", cn: "那么，你总结了自己的法语学习吗？" },
          { role: "B", text: "Oui, j'ai fait beaucoup de progrès. J'ai maîtrisé le subjonctif et le conditionnel.", cn: "是的，我进步很大。我掌握了虚拟式和条件式。" },
          { role: "A", text: "Et quel est ton objectif pour le prochain niveau?", cn: "你下一个级别的目标是什么？" },
          { role: "B", text: "Je veux approfondir mes connaissances et atteindre un niveau C1.", cn: "我想深入知识并达到C1水平。" },
          { role: "A", text: "C'est un bon objectif. Tu as confiance?", cn: "好目标。你有信心吗？" },
          { role: "B", text: "Oui, j'ai confiance en moi. Cette expérience a été enrichissante.", cn: "是的，我有信心。这次经历很丰富。" },
        ],
        practice: [
          { type: "fill", question: "___ est venu. (没有人来)", answer: "Personne", hint: "泛指代词" },
          { type: "choice", question: "'虽然很难，但我读完了' 怎么说?", options: ["Parce qu'il est difficile, je l'ai terminé.", "Bien qu'il soit difficile, je l'ai terminé.", "Quand il est difficile, je l'ai terminé.", "Si il est difficile, je l'ai terminé."], answer: 1 },
          { type: "fill", question: "Si j'avais étudié, j'___ réussi.", answer: "aurais", hint: "条件式过去时" },
        ]
      },
    ]
  },
];
