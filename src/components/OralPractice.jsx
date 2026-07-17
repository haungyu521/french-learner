import { useState, useEffect, useRef } from 'react';
import { speakFrench, speakSlow, speakEnglish, speakKorean, speakKoreanSlow, speakEnglishSlow } from '../utils/tts';
import { proverbs, chineseCulture, freeTopics, accentNotes } from '../data/conversationData';
import { koreanConversations as koConversations } from '../data/korean/conversationData';

// 场景对话数据
const aiConversations = {
  fr: [
    { title: '在咖啡馆', icon: '☕', level: 'A1',
      intro: '场景：你走进巴黎街角一家咖啡馆，准备点一杯咖啡。法国人非常看重礼貌，进门一定要说Bonjour！',
      keyVocab: [{ word: 'servir', meaning: '服务/端上' }, { word: 'sucre', meaning: '糖' }, { word: 'voilà', meaning: '给您' }],
      tips: '💡 法国咖啡馆文化：坐下后服务员会主动过来，不需要举手示意。说"s\'il vous plaît"（请）是基本礼貌。',
      lines: [
        { role: 'ai', text: 'Bonjour ! Qu\'est-ce que je vous sers ?', cn: '你好！您要什么？', teacherTip: '🎓 "je vous sers" 来自 servir（服务），这里意思是"给您上什么"。注意法语中 vous 是尊称。' },
        { role: 'you', text: 'Un café, s\'il vous plaît.', cn: '请来一杯咖啡。', teacherTip: '🎓 关键词：s\'il vous plaît = 请（正式）。法国人说这句话时语调会上扬，表示礼貌请求。' },
        { role: 'ai', text: 'Avec ou sans sucre ?', cn: '加糖还是不加糖？', teacherTip: '🎓 "Avec ou sans" = 加还是不加。法国咖啡通常不加糖，要糖需主动说。' },
        { role: 'you', text: 'Avec un peu de sucre, merci.', cn: '加一点糖，谢谢。', teacherTip: '🎓 "un peu de" = 一点。注意：merci 在法国使用频率极高，什么都要说merci。' },
        { role: 'ai', text: 'Voilà ! Ça fait trois euros.', cn: '给您！一共三欧元。', teacherTip: '🎓 "Ça fait" = 一共是。法国用欧元，价格说法：trois euros = 3欧。' },
        { role: 'you', text: 'Merci beaucoup ! Au revoir !', cn: '非常感谢！再见！', teacherTip: '🎓 "Merci beaucoup" 比 "merci" 更热情。离开时一定要说 Au revoir！' },
      ]
    },
    { title: '问路', icon: '🗺️', level: 'A1',
      intro: '场景：你在巴黎街头迷路了，需要向路人问路去火车站。',
      keyVocab: [{ word: 'tout droit', meaning: '直走' }, { word: 'loin', meaning: '远' }, { word: 'à pied', meaning: '步行' }],
      tips: '💡 问路时先说 "Excusez-moi" 引起注意，这是法国社交的基本礼仪。',
      lines: [
        { role: 'you', text: 'Excusez-moi, où est la gare ?', cn: '打扰一下，火车站在哪？', teacherTip: '🎓 "où est" = ...在哪里。gare = 火车站。' },
        { role: 'ai', text: 'C\'est tout droit, puis à gauche.', cn: '直走，然后左转。', teacherTip: '🎓 "tout droit" = 直走。"puis" = 然后。' },
        { role: 'you', text: 'C\'est loin d\'ici ?', cn: '离这里远吗？', teacherTip: '🎓 "C\'est loin" = 远吗？"d\'ici" = 从这里。' },
        { role: 'ai', text: 'Non, c\'est à cinq minutes à pied.', cn: '不远，走路五分钟。', teacherTip: '🎓 "à pied" = 步行。法国人常用"几分钟"来表示距离。' },
        { role: 'you', text: 'Merci beaucoup !', cn: '非常感谢！', teacherTip: '🎓 得到帮助后一定要说 merci。' },
      ]
    },
    { title: '超市购物', icon: '🛒', level: 'A1',
      intro: '场景：你在法国超市购物，需要询问价格和找商品。',
      keyVocab: [{ word: 'combien', meaning: '多少' }, { word: 'cher', meaning: '贵的' }, { word: 'caisse', meaning: '收银台' }],
      tips: '💡 法国超市进门要先拿推车或篮子，结账要自己扫码装袋。',
      lines: [
        { role: 'you', text: 'Excusez-moi, où sont les fruits et légumes ?', cn: '打扰，水果蔬菜在哪？', teacherTip: '🎓 "fruits et légumes" = 水果蔬菜。' },
        { role: 'ai', text: 'C\'est au fond du magasin, à gauche.', cn: '在超市最里面，左边。', teacherTip: '🎓 "au fond" = 在最里面。' },
        { role: 'you', text: 'Combien coûtent les pommes ?', cn: '苹果多少钱？', teacherTip: '🎓 "Combien coûtent" = 多少钱。coûter = 花费。' },
        { role: 'ai', text: 'Les pommes sont à trois euros le kilo.', cn: '苹果三欧一公斤。', teacherTip: '🎓 法国用公斤，不用斤！' },
        { role: 'you', text: 'D\'accord, je prends un kilo. Où est la caisse ?', cn: '好的，来一公斤。收银台在哪？', teacherTip: '🎓 "je prends" = 我要了。"la caisse" = 收银台。' },
      ]
    },
    { title: '看医生', icon: '🏥', level: 'A2',
      intro: '场景：你在法国生病了，需要去看医生。',
      keyVocab: [{ word: 'malade', meaning: '生病的' }, { word: 'ordonnance', meaning: '处方' }, { word: 'pharmacie', meaning: '药房' }],
      tips: '💡 法国看病需要先在Santé.fr预约，然后带Carte Vitale（医保卡）去。',
      lines: [
        { role: 'ai', text: 'Bonjour, qu\'est-ce qui ne va pas ?', cn: '你好，哪里不舒服？', teacherTip: '🎓 医生问诊的标准开场。' },
        { role: 'you', text: 'J\'ai mal à la tête et je tousse beaucoup.', cn: '我头疼，而且咳嗽很厉害。', teacherTip: '🎓 "J\'ai mal à" = 我...疼。' },
        { role: 'ai', text: 'Depuis combien de temps ?', cn: '多久了？', teacherTip: '🎓 法国医生一定会问的问题。' },
        { role: 'you', text: 'Depuis trois jours.', cn: '三天了。', teacherTip: '🎓 "Depuis" = 已经...了。' },
        { role: 'ai', text: 'Je vais vous faire une ordonnance. Allez à la pharmacie.', cn: '我给你开个处方。去药房吧。', teacherTip: '🎓 "ordonnance" = 处方。' },
      ]
    },
    { title: '讨论兴趣', icon: '🎭', level: 'A2',
      intro: '场景：和一个法国朋友聊天，讨论各自的兴趣爱好。',
      keyVocab: [{ word: 'passion', meaning: '热爱' }, { word: 'loisir', meaning: '爱好' }, { word: 'partager', meaning: '分享' }],
      tips: '💡 法国人聊天时喜欢深入讨论，不像英美那样只聊表面。',
      lines: [
        { role: 'ai', text: 'Qu\'est-ce que tu aimes faire pendant ton temps libre ?', cn: '你空闲时间喜欢做什么？', teacherTip: '🎓 "temps libre" = 空闲时间。' },
        { role: 'you', text: 'J\'aime lire et faire de la photo. Et toi ?', cn: '我喜欢阅读和摄影。你呢？', teacherTip: '🎓 "faire de la photo" = 摄影。' },
        { role: 'ai', text: 'Moi, je suis passionné de cinéma et de cuisine.', cn: '我热爱电影和烹饪。', teacherTip: '🎓 "passionné de" = 对...充满热情。' },
        { role: 'you', text: 'Quel est ton film préféré ?', cn: '你最喜欢的电影是什么？', teacherTip: '🎓 "Quel est..." = ...是什么？' },
        { role: 'ai', text: 'J\'adore "Intouchables". C\'est un film touchant et drôle.', cn: '我喜欢《触不可及》。感人又好笑。', teacherTip: '🎓 "touchant" = 感人的。"drôle" = 好笑的。' },
      ]
    },
    { title: '谈论天气', icon: '🌦️', level: 'A2',
      intro: '场景：和法国邻居聊天气。天气是全球通用的聊天话题！',
      keyVocab: [{ word: 'temps', meaning: '天气/时间' }, { word: 'soleil', meaning: '太阳' }, { word: 'pleuvoir', meaning: '下雨' }],
      tips: '💡 法国天气多变，南法阳光充足，北法经常下雨。',
      lines: [
        { role: 'ai', text: 'Il fait beau aujourd\'hui, non ?', cn: '今天天气很好，对吧？', teacherTip: '🎓 "Il fait beau" = 天气好。' },
        { role: 'you', text: 'Oui, enfin ! Après toute cette pluie...', cn: '是啊，终于！下了那么多雨之后...', teacherTip: '🎓 "enfin" = 终于。' },
        { role: 'ai', text: 'Paraît que ce week-end il va faire chaud !', cn: '据说这个周末会很热！', teacherTip: '🎓 "il va faire chaud" = 将会很热（近将来时）。' },
        { role: 'you', text: 'Super ! Je vais en profiter pour aller au parc.', cn: '太好了！我要趁机去公园。', teacherTip: '🎓 "en profiter" = 利用这个机会。' },
      ]
    },
  ],
  en: [
    { title: 'At the Pub', icon: '🍺', level: 'A1',
      intro: 'You walk into a traditional British pub. Time to order a drink like a local!',
      keyVocab: [{ word: 'pint', meaning: '品脱(英制)' }, { word: 'barman', meaning: '酒保' }, { word: 'cheers', meaning: '干杯/谢谢' }],
      tips: '💡 British pubs: you order at the bar, not at the table. Always say "cheers" when someone buys you a drink!',
      lines: [
        { role: 'ai', text: 'Evening! What can I get you?', cn: '晚上好！要来点什么？', teacherTip: '🎓 "What can I get you?" = 要什么？英式口语常用。' },
        { role: 'you', text: 'A pint of lager, please.', cn: '请来一品脱拉格啤酒。', teacherTip: '🎓 "pint" = 品脱（约568ml）。英式酒吧标准点法。' },
        { role: 'ai', text: 'That\'ll be four pounds fifty.', cn: '一共4镑50。', teacherTip: '🎓 "That\'ll be" = 一共是。英国用pounds（镑）。' },
        { role: 'you', text: 'Here you go. Cheers!', cn: '给你。谢谢！', teacherTip: '🎓 "Here you go" = 给你（口语）。"Cheers" 在英国万能用！' },
        { role: 'ai', text: 'Cheers, mate! Enjoy!', cn: '谢谢，哥们！慢慢喝！', teacherTip: '🎓 "mate" = 哥们/朋友。英国人之间常用。' },
      ]
    },
    { title: 'Asking for Directions', icon: '🗺️', level: 'A1',
      intro: 'You\'re lost in London. Ask a passer-by for help.',
      keyVocab: [{ word: 'tube', meaning: '地铁(英式)' }, { word: 'junction', meaning: '十字路口' }, { word: 'opposite', meaning: '对面' }],
      tips: '💡 Londoners say "tube" not "subway", and "pavement" not "sidewalk".',
      lines: [
        { role: 'you', text: 'Excuse me, how do I get to the nearest tube station?', cn: '打扰，最近的地铁站怎么走？', teacherTip: '🎓 "tube" = 地铁（英式）。美国人叫subway。' },
        { role: 'ai', text: 'Go straight on, then turn left at the junction.', cn: '直走，到十字路口左转。', teacherTip: '🎓 "straight on" = 直走。"junction" = 路口（英式）。' },
        { role: 'you', text: 'Is it far from here?', cn: '离这远吗？', teacherTip: '🎓 英式问路标准句式。' },
        { role: 'ai', text: 'About ten minutes\' walk. You can\'t miss it.', cn: '走路大概十分钟。你不会错过的。', teacherTip: '🎓 "You can\'t miss it" = 你不会错过的。经典指路用语。' },
        { role: 'you', text: 'Brilliant, thanks very much!', cn: '太好了，非常感谢！', teacherTip: '🎓 "Brilliant" = 太好了（英式口语高频词）。' },
      ]
    },
    { title: 'Shopping in London', icon: '🛍️', level: 'A1',
      intro: 'You\'re shopping at a London market. Ask about prices and sizes.',
      keyVocab: [{ word: 'quid', meaning: '镑(口语)' }, { word: 'size', meaning: '尺码' }, { word: 'change', meaning: '找零' }],
      tips: '💡 "Quid" is slang for pounds. "How much" is the key phrase for shopping.',
      lines: [
        { role: 'you', text: 'Excuse me, how much is this jumper?', cn: '打扰，这件毛衣多少钱？', teacherTip: '🎓 "jumper" = 毛衣（英式）。美国人叫sweater。' },
        { role: 'ai', text: 'That one\'s twenty-five quid.', cn: '那件25镑。', teacherTip: '🎓 "quid" = 镑（口语）。正式场合用pounds。' },
        { role: 'you', text: 'Do you have it in a smaller size?', cn: '有小一号的吗？', teacherTip: '🎓 英国买衣服常用句式。' },
        { role: 'ai', text: 'Yeah, here you are. That\'ll be twenty-five pounds.', cn: '有的，给你。一共25镑。', teacherTip: '🎓 "here you are" = 给你。' },
        { role: 'you', text: 'Can I pay by card?', cn: '可以刷卡吗？', teacherTip: '🎓 英国几乎到处都能刷卡。' },
      ]
    },
    { title: 'At the Doctor\'s', icon: '🏥', level: 'A2',
      intro: 'You\'re feeling unwell in London. Time to see a GP.',
      keyVocab: [{ word: 'GP', meaning: '全科医生' }, { word: 'prescription', meaning: '处方' }, { word: 'NHS', meaning: '国民医疗服务' }],
      tips: '💡 The NHS (National Health Service) provides free healthcare in the UK.',
      lines: [
        { role: 'ai', text: 'Good morning. What seems to be the problem?', cn: '早上好。怎么了？', teacherTip: '🎓 英式医生标准问诊开场。' },
        { role: 'you', text: 'I\'ve got a terrible headache and a sore throat.', cn: '我头疼得厉害，嗓子也疼。', teacherTip: '🎓 "I\'ve got" = 我有（英式口语常用）。' },
        { role: 'ai', text: 'How long have you had these symptoms?', cn: '这些症状多久了？', teacherTip: '🎓 现在完成时问诊。' },
        { role: 'you', text: 'For about three days now.', cn: '大概三天了。', teacherTip: '🎓 "for about..." = 大约...了。' },
        { role: 'ai', text: 'I\'ll write you a prescription. Take it to the chemist.', cn: '我给你开个处方。去药房拿药。', teacherTip: '🎓 "chemist" = 药房（英式）。美国人叫pharmacy。' },
      ]
    },
    { title: 'Chatting about Hobbies', icon: '🎭', level: 'A2',
      intro: 'Making small talk with a British colleague about hobbies.',
      keyVocab: [{ word: 'keen on', meaning: '热衷于' }, { word: 'gig', meaning: '演出(英式)' }, { word: 'fancy', meaning: '想要(英式口语)' }],
      tips: '💡 British small talk often involves hobbies, football, and the weather!',
      lines: [
        { role: 'ai', text: 'So, what do you get up to at the weekend?', cn: '那你周末一般做什么？', teacherTip: '🎓 "get up to" = 做（英式口语）。"at the weekend" = 在周末（英式）。' },
        { role: 'you', text: 'I\'m quite keen on photography and hiking.', cn: '我挺喜欢摄影和徒步。', teacherTip: '🎓 "keen on" = 热衷于（英式高频表达）。' },
        { role: 'ai', text: 'Oh brilliant! I\'m really into live music. Love going to gigs.', cn: '太棒了！我非常喜欢现场音乐，爱去看演出。', teacherTip: '🎓 "into" = 热衷于。"gig" = 演出（英式口语）。' },
        { role: 'you', text: 'Fancy coming to an exhibition with me sometime?', cn: '要不要有空和我一起去看个展？', teacherTip: '🎓 "Fancy doing..." = 想要做...吗？（英式口语邀请）。' },
        { role: 'ai', text: 'Yeah, that sounds lovely. Let\'s do it!', cn: '好啊，听起来很棒。就这么定了！', teacherTip: '🎓 "lovely" = 很好的（英式万能好评词）。' },
      ]
    },
  ],
  ko: koConversations,
};

export default function OralPractice({ lang = 'fr' }) {
  const [currentLang, setCurrentLang] = useState(lang);
  const [currentScene, setCurrentScene] = useState(null);
  const [currentLine, setCurrentLine] = useState(0);
  const [showTip, setShowTip] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [completedLines, setCompletedLines] = useState([]);
  const resultRef = useRef(null);

  // 当外部 lang 属性变化时，同步内部语言状态
  useEffect(() => {
    setCurrentLang(lang);
    setCurrentScene(null);
  }, [lang]);

  const currentData = aiConversations[currentLang] || [];

  const handleSpeak = (text, lang) => {
    setIsSpeaking(true);
    if (lang === 'fr') speakFrench(text);
    else if (lang === 'ko') speakKorean(text);
    else speakEnglish(text);
    setTimeout(() => setIsSpeaking(false), 2000);
  };

  const handleSlowSpeak = (text, lang) => {
    setIsSpeaking(true);
    if (lang === 'ko') speakKoreanSlow(text);
    else if (lang === 'en') speakEnglishSlow(text);
    else speakSlow(text);
    setTimeout(() => setIsSpeaking(false), 3000);
  };

  const handleSceneChange = (scene) => {
    setCurrentScene(scene);
    setCurrentLine(0);
    setShowIntro(true);
    setCompletedLines([]);
    setShowTip(false);
  };

  const handleNextLine = () => {
    if (currentLine >= currentScene.lines.length - 1) {
      setCompletedLines(currentScene.lines.map((_, i) => i));
      return;
    }
    setCompletedLines(prev => [...prev, currentLine]);
    setCurrentLine(prev => prev + 1);
    setShowTip(false);
  };

  const completionRate = currentScene ? (completedLines.length / currentScene.lines.length * 100) : 0;

  return (
    <div className="oral-practice">
      {/* 顶部：语言切换 */}
      <div className="op-header">
        <h2>🎓 口语练习</h2>
        <div className="op-lang-switch">
          <button className={currentLang === 'fr' ? 'active' : ''} onClick={() => { setCurrentLang('fr'); setCurrentScene(null); }}>🇫🇷 法语</button>
          <button className={currentLang === 'en' ? 'active' : ''} onClick={() => { setCurrentLang('en'); setCurrentScene(null); }}>🇬🇧 英语</button>
          <button className={currentLang === 'ko' ? 'active' : ''} onClick={() => { setCurrentLang('ko'); setCurrentScene(null); }}>🇰🇷 韩语</button>
        </div>
      </div>

      {/* 未选场景：显示场景列表 */}
      {!currentScene && (
        <div className="op-scene-list">
          <p className="op-subtitle">选择一个场景开始对话练习</p>
          <div className="op-grid">
            {currentData.map((scene, i) => (
              <div key={i} className="op-card" onClick={() => handleSceneChange(scene)}>
                <span className="op-icon">{scene.icon}</span>
                <strong>{scene.title}</strong>
                <span className="op-level">{scene.level}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 场景介绍 */}
      {currentScene && showIntro && (
        <div className="op-intro">
          <button className="op-back" onClick={() => setCurrentScene(null)}>← 返回</button>
          <div className="op-intro-card">
            <h3>{currentScene.icon} {currentScene.title}</h3>
            <p className="op-intro-text">{currentScene.intro}</p>
            {currentScene.keyVocab && (
              <div className="op-vocab-row">
                {currentScene.keyVocab.map((v, i) => (
                  <span key={i} className="op-vocab-tag"><strong>{v.word}</strong> {v.meaning}</span>
                ))}
              </div>
            )}
            <div className="op-tip-box">{currentScene.tips}</div>
            <button className="op-start-btn" onClick={() => setShowIntro(false)}>开始练习 →</button>
          </div>
        </div>
      )}

      {/* 对话练习 */}
      {currentScene && !showIntro && (
        <div className="op-conversation">
          <div className="op-conv-top">
            <button className="op-back" onClick={() => { setCurrentScene(null); setCompletedLines([]); setCurrentLine(0); }}>← 返回</button>
            <div className="op-progress">
              <span>{completedLines.length}/{currentScene.lines.length}</span>
              <div className="op-progress-bar"><div className="op-progress-fill" style={{ width: `${completionRate}%` }}></div></div>
            </div>
          </div>

          {/* 历史对话 */}
          <div className="op-history">
            {completedLines.map((lineIdx) => {
              const line = currentScene.lines[lineIdx];
              return (
                <div key={lineIdx} className={`op-msg ${line.role}`}>
                  <span className="op-msg-role">{line.role === 'ai' ? (currentLang === 'fr' ? '🇫🇷' : currentLang === 'ko' ? '🇰🇷' : '🇬🇧') : '🙋'}</span>
                  <div className="op-msg-body">
                    <p className="op-msg-text">{line.text}</p>
                    <p className="op-msg-cn">{line.cn}</p>
                  </div>
                  <button className="op-msg-speak" onClick={() => handleSpeak(line.text, currentLang)} title="听发音">🔊</button>
                </div>
              );
            })}
          </div>

          {/* 当前句 */}
          {completedLines.length < currentScene.lines.length && (
            <div className={`op-current ${currentScene.lines[currentLine].role}`}>
              <span className="op-msg-role">{currentScene.lines[currentLine].role === 'ai' ? (currentLang === 'fr' ? '🇫🇷' : currentLang === 'ko' ? '🇰🇷' : '🇬🇧') : '🙋 你说'}</span>
              <div className="op-msg-body">
                <p className="op-msg-text">{currentScene.lines[currentLine].text}</p>
                <p className="op-msg-cn">{currentScene.lines[currentLine].cn}</p>
                <div className="op-actions">
                  <button className="op-speak-btn" onClick={() => handleSpeak(currentScene.lines[currentLine].text, currentLang)} disabled={isSpeaking}>
                    🔊 {isSpeaking ? '...' : '听发音'}
                  </button>
                  {currentLang === 'fr' && <button className="op-slow-btn" onClick={() => handleSlowSpeak(currentScene.lines[currentLine].text, 'fr')} disabled={isSpeaking}>🐢 慢速</button>}
                  {currentLang === 'ko' && <button className="op-slow-btn" onClick={() => handleSlowSpeak(currentScene.lines[currentLine].text, 'ko')} disabled={isSpeaking}>🐢 慢速</button>}
                  {currentLang === 'en' && <button className="op-slow-btn" onClick={() => handleSlowSpeak(currentScene.lines[currentLine].text, 'en')} disabled={isSpeaking}>🐢 慢速</button>}
                  <button className="op-tip-btn" onClick={() => setShowTip(!showTip)}>💡 {showTip ? '收起' : '提示'}</button>
                </div>
                {showTip && <div className="op-tip-detail">{currentScene.lines[currentLine].teacherTip}</div>}
              </div>
            </div>
          )}

          {/* 操作按钮 */}
          {completedLines.length < currentScene.lines.length && (
            <div className="op-nav-btns">
              {currentScene.lines[currentLine].role === 'you' ? (
                <button className="op-next-btn" onClick={handleNextLine} disabled={isSpeaking}>
                  {currentLine >= currentScene.lines.length - 1 ? '完成 ✅' : '下一句 →'}
                </button>
              ) : (
                <button className="op-next-btn auto" onClick={handleNextLine}>点击继续 →</button>
              )}
            </div>
          )}

          {/* 完成 */}
          {completedLines.length >= currentScene.lines.length && (
            <div className="op-done">
              <h3>🎉 练习完成！</h3>
              <p>你已完成「{currentScene.title}」的全部对话！</p>
              <button className="op-restart" onClick={() => { setCurrentScene(null); setCompletedLines([]); }}>选择其他场景</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
