/**
 * AIConversation — AI对话练习 + 发音纠正
 * 利用 Web Speech API 实现语音识别和发音对比
 */
import { useState, useEffect, useRef } from 'react';
import { speakFrench, speakEnglish } from '../utils/tts';

const conversations = {
  fr: [
    {
      title: '在咖啡馆', icon: '☕', level: 'A1',
      lines: [
        { role: 'ai', text: 'Bonjour ! Qu\'est-ce que je vous sers ?', cn: '你好！您要什么？' },
        { role: 'you', text: 'Un café, s\'il vous plaît.', cn: '请来一杯咖啡。' },
        { role: 'ai', text: 'Avec ou sans sucre ?', cn: '加糖还是不加糖？' },
        { role: 'you', text: 'Avec un peu de sucre, merci.', cn: '加一点糖，谢谢。' },
        { role: 'ai', text: 'Voilà ! Ça fait trois euros.', cn: '给您！一共三欧元。' },
        { role: 'you', text: 'Merci beaucoup ! Au revoir !', cn: '非常感谢！再见！' },
      ]
    },
    {
      title: '问路', icon: '🗺️', level: 'A1',
      lines: [
        { role: 'you', text: 'Excusez-moi, où est la gare ?', cn: '打扰一下，火车站在哪？' },
        { role: 'ai', text: 'C\'est tout droit, puis à gauche.', cn: '直走，然后左转。' },
        { role: 'you', text: 'C\'est loin d\'ici ?', cn: '离这里远吗？' },
        { role: 'ai', text: 'Non, c\'est à cinq minutes à pied.', cn: '不远，走路五分钟。' },
        { role: 'you', text: 'Merci beaucoup !', cn: '非常感谢！' },
      ]
    },
    {
      title: '在餐厅', icon: '🍽️', level: 'A2',
      lines: [
        { role: 'ai', text: 'Bonsoir ! Vous avez réservé ?', cn: '晚上好！预订了吗？' },
        { role: 'you', text: 'Oui, une table pour deux, s\'il vous plaît.', cn: '是的，请给我两人桌。' },
        { role: 'ai', text: 'Suivez-moi, voici le menu.', cn: '跟我来，这是菜单。' },
        { role: 'you', text: 'Qu\'est-ce que vous recommandez ?', cn: '您推荐什么？' },
        { role: 'ai', text: 'Le filet de bœuf est excellent.', cn: '牛排非常好。' },
        { role: 'you', text: 'Très bien, je vais prendre ça.', cn: '好的，我要这个。' },
        { role: 'ai', text: 'Et comme boisson ?', cn: '喝什么呢？' },
        { role: 'you', text: 'Une bouteille de vin rouge, s\'il vous plaît.', cn: '请给我一瓶红葡萄酒。' },
      ]
    },
    {
      title: '酒店入住', icon: '🏨', level: 'A2',
      lines: [
        { role: 'ai', text: 'Bienvenue à l\'hôtel ! Avez-vous une réservation ?', cn: '欢迎来到酒店！有预订吗？' },
        { role: 'you', text: 'Oui, au nom de Li, pour trois nuits.', cn: '有，姓李，住三晚。' },
        { role: 'ai', text: 'Parfait. Chambre avec vue ou sans vue ?', cn: '好的。要景观房还是普通房？' },
        { role: 'you', text: 'Avec vue, s\'il vous plaît.', cn: '请给我景观房。' },
        { role: 'ai', text: 'Le petit déjeuner est servi de sept à dix heures.', cn: '早餐供应时间是7点到10点。' },
        { role: 'you', text: 'À quelle heure est le checkout ?', cn: '退房时间是几点？' },
        { role: 'ai', text: 'Avant midi. Bonne séjour !', cn: '中午之前。祝您住得愉快！' },
      ]
    },
    {
      title: '购物', icon: '🛍️', level: 'A2',
      lines: [
        { role: 'ai', text: 'Bonjour ! Je peux vous aider ?', cn: '你好！需要帮忙吗？' },
        { role: 'you', text: 'Oui, je cherche un manteau.', cn: '是的，我在找一件大衣。' },
        { role: 'ai', text: 'Quelle taille faites-vous ?', cn: '您穿什么尺码？' },
        { role: 'you', text: 'Je fais du M. Je peux l\'essayer ?', cn: '我穿M号。可以试穿吗？' },
        { role: 'ai', text: 'Bien sûr, les cabines sont au fond.', cn: '当然，试衣间在最里面。' },
        { role: 'you', text: 'Il me va bien. Combien coûte-il ?', cn: '很合身。多少钱？' },
        { role: 'ai', text: 'Quatre-vingt-dix euros.', cn: '90欧元。' },
        { role: 'you', text: 'Je vais le prendre. Je paie par carte.', cn: '我要了。我刷卡付。' },
      ]
    },
    {
      title: '看医生', icon: '🏥', level: 'B1',
      lines: [
        { role: 'ai', text: 'Bonjour, qu\'est-ce qui vous amène ?', cn: '你好，什么症状？' },
        { role: 'you', text: 'J\'ai mal à la gorge depuis trois jours.', cn: '我喉咙痛三天了。' },
        { role: 'ai', text: 'Avez-vous de la fièvre ?', cn: '发烧了吗？' },
        { role: 'you', text: 'Oui, un peu. Et je tousse beaucoup.', cn: '是的，有一点。而且咳嗽很多。' },
        { role: 'ai', text: 'Ouvrez la bouche, s\'il vous plaît.', cn: '请张嘴。' },
        { role: 'you', text: 'Est-ce que c\'est grave, docteur ?', cn: '严重吗，医生？' },
        { role: 'ai', text: 'Non, c\'est une angine. Je vous prescris des antibiotiques.', cn: '不严重，是扁桃体炎。我给你开抗生素。' },
      ]
    },
  ],
  en: [
    {
      title: 'At the Café', icon: '☕', level: 'A1',
      lines: [
        { role: 'ai', text: 'Hello! What can I get you?', cn: '你好！你要点什么？' },
        { role: 'you', text: 'A cup of tea with milk, please.', cn: '请来一杯加奶的茶。' },
        { role: 'ai', text: 'Would you like anything else?', cn: '还要别的吗？' },
        { role: 'you', text: 'No, that\'s all. How much is it?', cn: '不了，就这些。多少钱？' },
        { role: 'ai', text: 'That\'ll be three pounds fifty.', cn: '一共三镑五。' },
        { role: 'you', text: 'Cheers! Have a good one!', cn: '谢谢！祝你愉快！' },
      ]
    },
    {
      title: 'Asking Directions', icon: '🗺️', level: 'A1',
      lines: [
        { role: 'you', text: 'Excuse me, how do I get to the station?', cn: '打扰一下，去火车站怎么走？' },
        { role: 'ai', text: 'Go straight on, then turn left at the traffic lights.', cn: '直走，然后在红绿灯处左转。' },
        { role: 'you', text: 'Is it far from here?', cn: '离这远吗？' },
        { role: 'ai', text: 'No, it\'s about five minutes\' walk.', cn: '不远，走路大约五分钟。' },
        { role: 'you', text: 'Thank you very much!', cn: '非常感谢！' },
      ]
    },
    {
      title: 'At the Restaurant', icon: '🍽️', level: 'A2',
      lines: [
        { role: 'ai', text: 'Good evening! Do you have a reservation?', cn: '晚上好！有预订吗？' },
        { role: 'you', text: 'Yes, a table for two, under the name Li.', cn: '有，两人桌，姓李。' },
        { role: 'ai', text: 'Right this way. Here\'s the menu.', cn: '请这边走。这是菜单。' },
        { role: 'you', text: 'What would you recommend?', cn: '您推荐什么？' },
        { role: 'ai', text: 'The roast beef is excellent today.', cn: '今天的烤牛肉很棒。' },
        { role: 'you', text: 'Brilliant, I\'ll have that please. And a glass of red wine.', cn: '太好了，我要这个。再来一杯红酒。' },
      ]
    },
    {
      title: 'Hotel Check-in', icon: '🏨', level: 'A2',
      lines: [
        { role: 'ai', text: 'Welcome! Do you have a reservation?', cn: '欢迎！有预订吗？' },
        { role: 'you', text: 'Yes, under Li, for three nights.', cn: '有，姓李，住三晚。' },
        { role: 'ai', text: 'Lovely. Would you prefer a room with a view?', cn: '好的。要景观房吗？' },
        { role: 'you', text: 'Yes, please. What time is breakfast?', cn: '好的。早餐几点？' },
        { role: 'ai', text: 'Breakfast is from seven to ten.', cn: '早餐7点到10点。' },
        { role: 'you', text: 'Perfect. What time is check-out?', cn: '完美。退房几点？' },
        { role: 'ai', text: 'Before noon. Enjoy your stay!', cn: '中午前。祝您住得愉快！' },
      ]
    },
    {
      title: 'Job Interview', icon: '💼', level: 'B1',
      lines: [
        { role: 'ai', text: 'Please, take a seat. Tell me about yourself.', cn: '请坐。介绍一下你自己。' },
        { role: 'you', text: 'Thank you. I graduated from university last year with a degree in marketing.', cn: '谢谢。我去年大学毕业，市场营销专业。' },
        { role: 'ai', text: 'What are your strengths?', cn: '你的优势是什么？' },
        { role: 'you', text: 'I\'m a quick learner and I work well in a team.', cn: '我学东西快，团队合作能力强。' },
        { role: 'ai', text: 'Where do you see yourself in five years?', cn: '五年后你期望自己在哪里？' },
        { role: 'you', text: 'I hope to be leading my own projects and continuing to grow.', cn: '我希望带领自己的项目并继续成长。' },
      ]
    },
    {
      title: 'At the Doctor', icon: '🏥', level: 'B1',
      lines: [
        { role: 'ai', text: 'Good morning. What seems to be the problem?', cn: '早上好。怎么了？' },
        { role: 'you', text: 'I\'ve had a sore throat for three days.', cn: '我喉咙痛三天了。' },
        { role: 'ai', text: 'Do you have a fever?', cn: '发烧了吗？' },
        { role: 'you', text: 'A slight one. And I\'ve been coughing a lot.', cn: '有一点。而且咳嗽很多。' },
        { role: 'ai', text: 'Let me have a look. Open your mouth, please.', cn: '让我看看。请张嘴。' },
        { role: 'you', text: 'Is it serious, doctor?', cn: '严重吗，医生？' },
        { role: 'ai', text: 'It\'s just a throat infection. I\'ll prescribe some antibiotics.', cn: '只是喉咙感染。我开些抗生素。' },
      ]
    },
  ],
};

// Levenshtein distance for pronunciation scoring
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
    }
  }
  return dp[m][n];
}

function similarity(a, b) {
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 100;
  return Math.round((1 - levenshtein(a.toLowerCase().trim(), b.toLowerCase().trim()) / maxLen) * 100);
}

export default function AIConversation({ lang = 'fr' }) {
  const isEnglish = lang === 'en';
  const langKey = isEnglish ? 'en' : 'fr';
  const scenes = conversations[langKey] || [];

  const [currentScene, setCurrentScene] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [recognized, setRecognized] = useState('');
  const [score, setScore] = useState(null);
  const [completedLines, setCompletedLines] = useState(new Set());
  const [supported, setSupported] = useState(true);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSupported(false);
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = isEnglish ? 'en-GB' : 'fr-FR';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setRecognized(text);
      const target = scene.lines[currentLine]?.text || '';
      const sim = similarity(text, target);
      setScore(sim);
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
      setRecognized('[识别失败，请重试]');
      setScore(0);
    };

    recognition.onend = () => setIsListening(false);
    recognitionRef.current = recognition;
  }, [isEnglish]);

  const scene = scenes[currentScene] || { lines: [] };
  const line = scene.lines[currentLine];

  const speak = (text) => {
    if (isEnglish) speakEnglish(text);
    else speakFrench(text);
  };

  const startListening = () => {
    if (!recognitionRef.current) return;
    setRecognized('');
    setScore(null);
    setIsListening(true);
    try {
      recognitionRef.current.start();
    } catch (e) {
      setIsListening(false);
    }
  };

  const handleNext = () => {
    // Mark current "you" line as completed
    if (line?.role === 'you') {
      setCompletedLines(prev => new Set([...prev, `${currentScene}-${currentLine}`]));
    }
    if (currentLine < scene.lines.length - 1) {
      setCurrentLine(currentLine + 1);
      setRecognized('');
      setScore(null);
    }
  };

  const handlePrev = () => {
    if (currentLine > 0) {
      setCurrentLine(currentLine - 1);
      setRecognized('');
      setScore(null);
    }
  };

  const getScoreColor = (s) => {
    if (s >= 80) return '#4CAF50';
    if (s >= 60) return '#FF9800';
    return '#f44336';
  };

  const getScoreText = (s) => {
    if (s >= 90) return '太棒了！发音非常标准！';
    if (s >= 80) return '很好！发音不错！';
    if (s >= 60) return '还行，再练练会更好！';
    if (s >= 40) return '需要多练习，加油！';
    return '再试一次，慢慢来！';
  };

  if (!supported) {
    return (
      <div className="ai-conversation">
        <h2>🎤 AI对话练习</h2>
        <div className="not-supported">
          <p>⚠️ 您的浏览器不支持语音识别功能</p>
          <p>请使用 <strong>Chrome</strong> 或 <strong>Edge</strong> 浏览器访问本网站</p>
          <p>语音识别仅在 HTTPS 环境下可用（本网站已满足）</p>
          <div className="fallback-tips">
            <h4>💡 替代练习方法：</h4>
            <ul>
              <li>点击🔊听AI朗读，然后自己大声跟读</li>
              <li>使用「口语练习」模块的跟读功能</li>
              <li>用手机录音对比标准发音</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ai-conversation">
      <div className="conv-header">
        <h2>🎤 AI对话练习</h2>
        <p className="subtitle">模拟真实场景对话，AI说/你回答，实时纠正发音</p>
      </div>

      {/* Scene selector */}
      <div className="scene-selector">
        {scenes.map((s, idx) => (
          <button key={idx} className={`scene-btn ${currentScene === idx ? 'active' : ''}`}
            onClick={() => { setCurrentScene(idx); setCurrentLine(0); setRecognized(''); setScore(null); }}>
            <span className="scene-icon">{s.icon}</span>
            <span className="scene-name">{s.title}</span>
            <span className="scene-level">{s.level}</span>
          </button>
        ))}
      </div>

      {/* Conversation area */}
      <div className="conv-area">
        <h3>{scene.icon} {scene.title}</h3>
        <div className="conv-progress">
          第 {currentLine + 1} / {scene.lines.length} 句
        </div>

        {line && (
          <div className={`conv-line ${line.role}`}>
            <div className="conv-bubble">
              <span className="role-tag">{line.role === 'ai' ? '🤖 AI' : '🧑 你'}</span>
              <p className="conv-text">{line.text}</p>
              <p className="conv-cn">{line.cn}</p>
              {line.role === 'ai' && (
                <button className="speak-btn" onClick={() => speak(line.text)}>
                  🔊 听AI发音
                </button>
              )}
            </div>

            {line.role === 'you' && (
              <div className="conv-response">
                <button className={`mic-btn ${isListening ? 'listening' : ''}`}
                  onClick={isListening ? () => { recognitionRef.current?.stop(); setIsListening(false); } : startListening}
                  disabled={isListening}>
                  {isListening ? '🎤 正在听...' : '🎤 点击说话'}
                </button>

                {recognized && (
                  <div className="recognition-result">
                    <p className="recognized-text">
                      <strong>你说的是：</strong>{recognized}
                    </p>
                    {score !== null && (
                      <div className="score-display">
                        <div className="score-circle" style={{ borderColor: getScoreColor(score) }}>
                          <span className="score-num" style={{ color: getScoreColor(score) }}>{score}%</span>
                          <span className="score-label">匹配度</span>
                        </div>
                        <p className="score-feedback" style={{ color: getScoreColor(score) }}>
                          {getScoreText(score)}
                        </p>
                      </div>
                    )}
                    {score !== null && score < 80 && (
                      <div className="correction-box">
                        <p><strong>目标句子：</strong>{line.text}</p>
                        <button className="speak-btn small" onClick={() => speak(line.text)}>
                          🔊 再听一次
                        </button>
                        <button className="retry-btn" onClick={startListening}>
                          🎤 再试一次
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="conv-nav">
          <button onClick={handlePrev} disabled={currentLine === 0}>← 上一句</button>
          {line?.role === 'you' && score !== null && score >= 60 ? (
            <button onClick={handleNext} className="next-btn">
              {currentLine < scene.lines.length - 1 ? '下一句 →' : '✅ 完成！'}
            </button>
          ) : line?.role === 'ai' ? (
            <button onClick={handleNext}>
              {currentLine < scene.lines.length - 1 ? '下一句 →' : '✅ 完成！'}
            </button>
          ) : (
            <span className="hint-text">请先完成语音练习</span>
          )}
        </div>
      </div>

      {/* Tips */}
      <div className="conv-tips">
        <h4>💡 练习技巧</h4>
        <ul>
          <li>先听AI发音，注意语调和节奏</li>
          <li>点击🎤后大声说出你的台词</li>
          <li>系统会自动对比你的发音并打分</li>
          <li>得分低于80%可以重试，直到满意</li>
          <li>建议使用 Chrome 浏览器获得最佳体验</li>
        </ul>
      </div>
    </div>
  );
}
