/**
 * FreeChat - 自由对话组件
 * 使用 Puter.js 免费 AI，无需 API Key
 */
import { useState, useEffect, useRef } from 'react';
import { speakFrench, speakEnglish, speakKorean, stopSpeaking } from '../utils/tts';

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function renderMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br/>');
}

export default function FreeChat({ lang = 'fr' }) {
  const isEnglish = lang === 'en';
  const isKorean = lang === 'ko';
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speakingId, setSpeakingId] = useState(null);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // 初始化语音识别
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    const recognition = new SpeechRecognition();
    recognition.lang = isKorean ? 'ko-KR' : isEnglish ? 'en-US' : 'fr-FR';
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      setInput(event.results[0][0].transcript);
      setIsListening(false);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognitionRef.current = recognition;
  }, [isEnglish, isKorean]);

  // 系统提示
  const systemPrompt = isKorean
    ? `You are a friendly Korean language tutor helping a Chinese student practice Korean (Seoul standard Korean / 서울 표준어).
- Respond in Korean at an appropriate level.
- Be patient, encouraging, and natural.
- Gently correct grammar mistakes with brief explanations in Chinese.
- Keep responses concise (2-4 sentences).
- Use Seoul standard Korean expressions.
- You can discuss any topic the student wants.`
    : isEnglish
    ? `You are a friendly British English tutor helping a Chinese student practice English.
- Respond in English at an appropriate level.
- Be patient, encouraging, and natural.
- Gently correct grammar mistakes with brief explanations.
- Keep responses concise (2-4 sentences).
- Use British English when appropriate.
- You can discuss any topic the student wants.`
    : `Tu es un tuteur de français sympathique pour un étudiant chinois.
- Réponds en français à un niveau adapté.
- Sois patient, encourageant et naturel.
- Corrige gentiment les erreurs avec de brèves explications.
- Garde tes réponses concises (2-4 phrases).
- Tu peux discuter de n'importe quel sujet.`;

  // 发送消息 - 使用 Puter.js AI（免费，无需 Key）
  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: 'user', content: input.trim(), id: Date.now() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // 检查 Puter.js 是否可用
      if (typeof puter === 'undefined' || !puter.ai) {
        throw new Error('AI 服务未加载，请检查网络后刷新页面');
      }

      // 构建对话历史（包含系统提示）
      const chatMessages = [
        { role: 'system', content: systemPrompt },
        ...newMessages.slice(-10).map(m => ({
          role: m.role,
          content: m.content,
        })),
      ];

      // 调用 Puter.js AI（快速模型）
      const response = await puter.ai.chat(chatMessages, {
        model: 'gpt-4.1-nano',
      });

      const replyText = typeof response === 'string' ? response : response?.message?.content || response?.toString() || 'Désolé, je n\'ai pas compris.';

      const aiMsg = { role: 'assistant', content: replyText, id: Date.now() + 1 };
      setMessages(prev => [...prev, aiMsg]);

      // 自动朗读 AI 回复
      setTimeout(() => {
        if (isKorean) speakKorean(replyText, () => setSpeakingId(null));
        else if (isEnglish) speakEnglish(replyText, () => setSpeakingId(null));
        else speakFrench(replyText, () => setSpeakingId(null));
        setSpeakingId(aiMsg.id);
      }, 300);
    } catch (error) {
      const errMsg = error?.message || '网络错误，请检查连接后重试';
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `❌ ${errMsg}`,
        id: Date.now() + 1,
        isError: true,
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const startListening = () => {
    if (!recognitionRef.current) {
      alert('您的浏览器不支持语音识别，请使用 Chrome 浏览器');
      return;
    }
    setIsListening(true);
    try { recognitionRef.current.start(); } catch (e) { setIsListening(false); }
  };

  const speakMessage = (text, id) => {
    if (speakingId === id) { stopSpeaking(); setSpeakingId(null); return; }
    stopSpeaking();
    setSpeakingId(id);
    if (isKorean) speakKorean(text, () => setSpeakingId(null));
    else if (isEnglish) speakEnglish(text, () => setSpeakingId(null));
    else speakFrench(text, () => setSpeakingId(null));
  };

  const clearChat = () => {
    if (messages.length > 0 && window.confirm('确定要清空所有对话记录吗？')) {
      setMessages([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="free-chat">
      {/* 头部 */}
      <div className="fc-header">
        <h2>🤖 {isEnglish ? 'Free Chat' : isKorean ? '자유 대화' : '自由对话'}</h2>
        <p className="fc-subtitle">
          {isEnglish ? 'Chat freely with AI! No setup needed.' : isKorean ? 'AI와 자유롭게 대화하세요!' : '和 AI 自由聊天，无需设置直接用！'}
        </p>
        {messages.length > 0 && (
          <div className="fc-header-btns">
            <button className="fc-btn-clear" onClick={clearChat}>🗑️ 清空对话</button>
          </div>
        )}
      </div>

      {/* 消息列表 */}
      <div className="fc-messages">
        {messages.length === 0 && (
          <div className="fc-empty">
            <p className="fc-empty-icon">💬</p>
            <p className="fc-empty-text">
              {isEnglish ? 'Start chatting! Ask me anything!' : isKorean ? '대화를 시작하세요! 무엇이든 물어보세요!' : '开始聊天吧！想聊什么都行！'}
            </p>
            <div className="fc-suggestions">
              {(isKorean ? [
                "한국 영화에 대해 이야기해요!",
                "커피 주문하는 법 알려주세요",
                "한국 문화에 대해 물어봐도 될까요?",
                "오늘 날씨가 어때요?",
              ] : isEnglish ? [
                "Let's talk about movies!",
                "How do I order coffee?",
                "Help me practice for an interview",
                "What's the weather like?",
              ] : [
                " parlons de cinéma !",
                "Comment commander un café ?",
                "Aide-moi à pratiquer un entretien",
                "Quel temps fait-il ?",
              ]).map((s, i) => (
                <button key={i} className="fc-suggestion-btn" onClick={() => setInput(s)}>{s}</button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <div key={msg.id} className={`fc-msg ${msg.role} ${msg.isError ? 'error' : ''}`}>
            <div className="fc-msg-avatar">
              {msg.role === 'user' ? '🧑' : (isEnglish ? '🇬🇧' : isKorean ? '🇰🇷' : '🇫🇷')}
            </div>
            <div className="fc-msg-content">
              <div className="fc-msg-text"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(escapeHtml(msg.content)) }} />
              {msg.role === 'assistant' && !msg.isError && (
                <button className={`fc-msg-speak ${speakingId === msg.id ? 'speaking' : ''}`}
                  onClick={() => speakMessage(msg.content, msg.id)}>
                  {speakingId === msg.id ? '🔊 ...' : '🔊'}
                </button>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="fc-msg assistant loading">
            <div className="fc-msg-avatar">{isEnglish ? '🇬🇧' : isKorean ? '🇰🇷' : '🇫🇷'}</div>
            <div className="fc-msg-content">
              <div className="fc-typing"><span></span><span></span><span></span></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* 输入区域 */}
      <div className="fc-input-area">
        <div className="fc-input-row">
          <textarea className="fc-input"
            placeholder={isEnglish ? 'Type here... (Enter to send)' : isKorean ? '여기에 입력하세요... (Enter로 전송)' : '输入你想说的... (回车发送)'}
            value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown} rows={1} disabled={isLoading} />
          <button className={`fc-mic-btn ${isListening ? 'listening' : ''}`}
            onClick={isListening ? () => { recognitionRef.current?.stop(); setIsListening(false); } : startListening}
            disabled={isLoading || isListening} title="语音输入">
            {isListening ? '🎤 ...' : '🎤'}
          </button>
          <button className="fc-send-btn" onClick={sendMessage} disabled={isLoading || !input.trim()}>
            {isLoading ? '...' : '➤'}
          </button>
        </div>
      </div>
    </div>
  );
}
