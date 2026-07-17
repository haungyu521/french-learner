import { useState, useEffect, useMemo } from 'react';
import { articlesData } from '../data/articles';
import { koreanArticlesData } from '../data/korean/articles';
import { speakFrench, speakEnglish, speakKorean } from '../utils/tts';

function Articles({ lang = 'fr' }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showTranslation, setShowTranslation] = useState({});
  const [showWordList, setShowWordList] = useState({});
  const [activeWord, setActiveWord] = useState(null);
  const [difficultyFilter, setDifficultyFilter] = useState(0);
  const [langFilter, setLangFilter] = useState(lang === 'en' ? 'en' : 'fr');
  const [tagFilter, setTagFilter] = useState('all');
  const isEnglish = lang === 'en';
  const isKorean = lang === 'ko';
  const allArticles = isKorean ? koreanArticlesData : articlesData;
  const textKey = isKorean ? 'ko' : 'fr';
  const storageKey = isKorean ? 'read-articles-ko' : lang === 'en' ? 'read-articles-en' : 'read-articles';
  const [readArticles, setReadArticles] = useState(() => {
    try { return JSON.parse(localStorage.getItem(storageKey) || '[]'); } catch { return []; }
  });
  const [readSpeed, setReadSpeed] = useState(0.8);
  const [displayCount, setDisplayCount] = useState(12);

  // 当语言切换时，重置语言筛选器
  useEffect(() => {
    if (isKorean) return;
    setLangFilter(lang === 'en' ? 'en' : 'fr');
    setDisplayCount(12);
  }, [lang]);

  useEffect(() => { setDisplayCount(12); }, [langFilter, difficultyFilter, tagFilter]);

  useEffect(() => {
    if (selectedArticle) markAsRead(selectedArticle);
  }, [selectedArticle]);

  const filteredArticles = allArticles.filter(a => {
    if (isKorean) {
      if (difficultyFilter > 0 && a.difficulty !== difficultyFilter) return false;
      if (tagFilter !== 'all' && a.tag !== tagFilter) return false;
      return true;
    }
    const articleLang = a.lang || 'fr';
    if (langFilter !== 'all' && articleLang !== langFilter) return false;
    if (difficultyFilter > 0 && a.difficulty !== difficultyFilter) return false;
    if (tagFilter !== 'all' && a.tag !== tagFilter) return false;
    return true;
  });

  const visibleArticles = filteredArticles.slice(0, displayCount);
  const hasMore = displayCount < filteredArticles.length;

  const speak = (text) => {
    if (isKorean) speakKorean(text);
    else if (isEnglish) speakEnglish(text);
    else speakFrench(text, readSpeed);
  };

  const markAsRead = (articleId) => {
    if (!readArticles.includes(articleId)) {
      const updated = [...readArticles, articleId];
      setReadArticles(updated);
      localStorage.setItem(storageKey, JSON.stringify(updated));
    }
  };

  const toggleTranslation = (articleId, paraIdx) => {
    setShowTranslation(prev => ({ ...prev, [`${articleId}-${paraIdx}`]: !prev[`${articleId}-${paraIdx}`] }));
  };

  const toggleWords = (articleId, paraIdx) => {
    setShowWordList(prev => ({ ...prev, [`${articleId}-${paraIdx}`]: !prev[`${articleId}-${paraIdx}`] }));
  };

  const highlightText = (text, words) => {
    if (!words || words.length === 0) return text;
    const sorted = [...words].sort((a, b) => b.word.length - a.word.length);
    const pattern = sorted.map(w => w.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    if (!pattern) return text;
    const regex = new RegExp(`\\b(${pattern})\\b`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => {
      const matchedWord = sorted.find(w => w.word.toLowerCase() === part.toLowerCase());
      if (matchedWord) {
        return (
          <span key={i} className="hw-inline" onClick={(e) => {
            e.stopPropagation();
            setActiveWord(prev => prev?.word === matchedWord.word ? null : matchedWord);
          }}>{part}</span>
        );
      }
      return part;
    });
  };

  const difficultyLabels = { 1: 'A1 入门', 2: 'A2 基础', 3: 'B1 进阶', 4: 'B2 高级', 5: 'C1 精通', 6: 'C2 大师' };
  const difficultyColors = { 1: '#4CAF50', 2: '#2196F3', 3: '#FF9800', 4: '#f44336', 5: '#9C27B0', 6: '#795548' };
  const tagColors = { '文化': '#1976D2', '趣味': '#E91E63', '话题': '#FF9800' };

  if (selectedArticle) {
    const article = allArticles.find(a => a.id === selectedArticle);
    const articleLang = article.lang || 'fr';
    const articleSpeak = articleLang === 'en' ? (t) => speakEnglish(t) : articleLang === 'ko' ? (t) => speakKorean(t) : (t) => speakFrench(t, readSpeed);
    const articleTextKey = articleLang === 'ko' ? 'ko' : 'fr';

    return (
      <div className="article-reader">
        <button className="back-btn" onClick={() => setSelectedArticle(null)}>
          ← 返回文章列表
        </button>
        
        <div className="article-header">
          <h2>{article.title}</h2>
          <h3>{article.titleCn}</h3>
          <div className="article-meta-bar">
            <span className="difficulty-badge" style={{ background: difficultyColors[article.difficulty] }}>
              {difficultyLabels[article.difficulty]}
            </span>
            {article.tag && <span className="difficulty-badge" style={{ background: tagColors[article.tag] }}>{article.tag}</span>}
            <span className="lang-badge">{articleLang === 'en' ? '🇬🇧 English' : articleLang === 'ko' ? '🇰🇷 한국어' : '🇫🇷 Français'}</span>
          </div>
          <div className="article-controls">
            <button onClick={() => articleSpeak(article.paragraphs.map(p => p[articleTextKey]).join(' '))}>
              🔊 朗读全文
            </button>
            <button onClick={() => {
              let delay = 0;
              article.paragraphs.forEach((p) => {
                setTimeout(() => articleSpeak(p[articleTextKey]), delay);
                delay += 5000;
              });
            }}>
              📖 逐段朗读
            </button>
            {articleLang === 'fr' && (
              <div className="speed-control-inline">
                <label>速度：</label>
                <input type="range" min="0.5" max="1.2" step="0.1" value={readSpeed}
                  onChange={e => setReadSpeed(Number(e.target.value))} />
                <span>{readSpeed <= 0.6 ? '很慢' : readSpeed <= 0.8 ? '慢速' : readSpeed <= 1.0 ? '正常' : '快速'}</span>
              </div>
            )}
          </div>
        </div>

        <div className="article-content">
          {article.paragraphs.map((para, idx) => (
            <div key={idx} className="paragraph-block">
              <div className="paragraph-fr" onClick={() => articleSpeak(para[articleTextKey])}>
                <span className="para-number">{idx + 1}</span>
                {highlightText(para[articleTextKey], para.words)}
                <span className="mini-speak">🔊</span>
              </div>

              {activeWord && (
                <div className="word-detail-popup">
                  <div className="wdp-header">
                    <span className="wdp-word" onClick={() => articleSpeak(activeWord.word)}>{activeWord.word} 🔊</span>
                    <span className="wdp-meaning">{activeWord.meaning}</span>
                    <button className="wdp-close" onClick={() => setActiveWord(null)}>✕</button>
                  </div>
                  {activeWord.usage && <div className="wdp-usage"><span className="wdp-label">用法</span>{activeWord.usage}</div>}
                  {activeWord.note && <div className="wdp-note"><span className="wdp-label">释义</span>{activeWord.note}</div>}
                  {activeWord.example && <div className="wdp-example"><span className="wdp-label">例句</span>{activeWord.example}</div>}
                </div>
              )}
              
              <button className="toggle-btn" onClick={() => toggleTranslation(article.id, idx)}>
                {showTranslation[`${article.id}-${idx}`] ? '🙈 隐藏翻译' : '👀 查看翻译'}
              </button>

              {showTranslation[`${article.id}-${idx}`] && (
                <div className="paragraph-cn">{para.cn}</div>
              )}

              <button className="toggle-btn words-btn" onClick={() => toggleWords(article.id, idx)}>
                {showWordList[`${article.id}-${idx}`] ? '📕 收起词汇' : `📖 重点词汇 (${(para.words || []).length}个)`}
              </button>

              {showWordList[`${article.id}-${idx}`] && (
                <div className="word-list">
                  {para.words.map((w, wi) => (
                    <div key={wi} className={`word-item ${activeWord?.word === w.word ? 'active' : ''}`} onClick={() => {
                      setActiveWord(prev => prev?.word === w.word ? null : w);
                      articleSpeak(w.word);
                    }}>
                      <span className="word-fr">{w.word}</span>
                      <span className="word-cn">{w.meaning}</span>
                      {w.usage && <span className="word-usage-tag">{w.usage}</span>}
                      <span className="word-speak">🔊</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="culture-box">
          <h4>💡 {isKorean ? '한국 문화 팁' : '文化小知识'}</h4>
          <p>{article.culture || '阅读建议：先自己读一遍，再听朗读，最后对照翻译理解。'}</p>
        </div>

        <div className="study-tips">
          <h4>📝 {isKorean ? '읽기 학습 팁' : '阅读建议'}</h4>
          <ul>
            {isKorean ? [
              <li key="1">첫 번째: 원문만 읽으며 대의 파악하기</li>,
              <li key="2">두 번째: 🔊 눌러 발음 듣고 따라 말하기</li>,
              <li key="3">세 번째: 번역을 보며 이해 확인하기</li>,
              <li key="4">네 번째: 핵심 어휘 학습, 🔊 눌러 단어 발음 듣기</li>,
            ] : (
              <>
                <li>第一遍：只看原文，试着理解大意</li>
                <li>第二遍：点🔊听发音，跟读模仿语调</li>
                <li>第三遍：看翻译，对照理解</li>
                <li>第四遍：学习重点词汇，点击🔊听单词发音</li>
              </>
            )}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="articles">
      <div className="articles-header">
        <h2>📖 {isKorean ? '한국어 읽기' : '双语阅读'}</h2>
        <p className="subtitle">{isKorean ? '단계별 한국어 글로 어휘와 문화 학습 · 총 ' : '通过分级双语文章，在阅读中学习词汇和文化 · 共 '}{allArticles.length} {isKorean ? '편' : '篇'}</p>
      </div>

      {/* Filters */}
      <div className="articles-filters">
        <div className="filter-group">
          <span className="filter-label">难度：</span>
          <button className={`filter-btn ${difficultyFilter === 0 ? 'active' : ''}`} onClick={() => setDifficultyFilter(0)}>全部</button>
          {[1,2,3,4,5,6].map(d => (
            <button key={d} className={`filter-btn ${difficultyFilter === d ? 'active' : ''}`}
              style={difficultyFilter === d ? { background: difficultyColors[d] } : {}}
              onClick={() => setDifficultyFilter(d)}>
              {difficultyLabels[d]}
            </button>
          ))}
        </div>
        {!isKorean && (
        <div className="filter-group">
          <span className="filter-label">语言：</span>
          <button className={`filter-btn ${langFilter === 'all' ? 'active' : ''}`} onClick={() => setLangFilter('all')}>全部</button>
          <button className={`filter-btn ${langFilter === 'fr' ? 'active' : ''}`} onClick={() => setLangFilter('fr')}>🇫🇷 法语</button>
          <button className={`filter-btn ${langFilter === 'en' ? 'active' : ''}`} onClick={() => setLangFilter('en')}>🇬🇧 英语</button>
        </div>
        )}
        <div className="filter-group">
          <span className="filter-label">类型：</span>
          <button className={`filter-btn ${tagFilter === 'all' ? 'active' : ''}`} onClick={() => setTagFilter('all')}>全部</button>
          <button className={`filter-btn ${tagFilter === '文化' ? 'active' : ''}`} style={tagFilter === '文化' ? { background: tagColors['文化'] } : {}} onClick={() => setTagFilter('文化')}>🏛️ 文化</button>
          <button className={`filter-btn ${tagFilter === '趣味' ? 'active' : ''}`} style={tagFilter === '趣味' ? { background: tagColors['趣味'] } : {}} onClick={() => setTagFilter('趣味')}>😄 趣味</button>
          <button className={`filter-btn ${tagFilter === '话题' ? 'active' : ''}`} style={tagFilter === '话题' ? { background: tagColors['话题'] } : {}} onClick={() => setTagFilter('话题')}>💬 话题</button>
        </div>
      </div>

      <p className="article-count">筛选结果：{filteredArticles.length} 篇 {readArticles.length > 0 && `· 已读 ${readArticles.length} 篇`}</p>

      <div className="article-grid">
        {visibleArticles.map(article => {
          const isRead = readArticles.includes(article.id);
          const articleLang = article.lang || 'fr';
          return (
            <div key={article.id} className={`article-card ${isRead ? 'read' : ''}`} onClick={() => setSelectedArticle(article.id)}>
              <div className={`article-image article-${article.image || (articleLang === 'en' ? 'beach' : articleLang === 'ko' ? 'palace' : 'cafe')}`}>
                <span className="article-emoji">
                  {articleLang === 'en' ? '🇬🇧' : articleLang === 'ko' ? '🇰🇷' : '🇫🇷'}
                </span>
                {isRead && <span className="read-badge">✓ 已读</span>}
              </div>
              <div className="article-info">
                <h3>{article.title}</h3>
                <p className="article-title-cn">{article.titleCn}</p>
                <div className="article-tags">
                  {article.tag && <span className="tag-badge" style={{ background: tagColors[article.tag] || '#666' }}>{article.tag}</span>}
                </div>
                <div className="article-meta">
                  <span className="difficulty" style={{ color: difficultyColors[article.difficulty] }}>
                    {'⭐'.repeat(Math.min(article.difficulty, 5))}{'☆'.repeat(Math.max(0, 6 - article.difficulty))}
                  </span>
                  <span className="para-count">{article.paragraphs.length} 段</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {hasMore && (
        <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
          <button
            onClick={() => setDisplayCount(prev => prev + 12)}
            style={{
              padding: '0.6rem 2rem', border: '2px solid #667eea', borderRadius: '20px',
              background: 'white', color: '#667eea', fontSize: '0.9rem', fontWeight: 600,
              cursor: 'pointer', transition: 'all 0.2s'
            }}
            onMouseOver={e => { e.target.style.background = '#667eea'; e.target.style.color = 'white'; }}
            onMouseOut={e => { e.target.style.background = 'white'; e.target.style.color = '#667eea'; }}
          >
            加载更多（还有 {filteredArticles.length - displayCount} 篇）
          </button>
        </div>
      )}
    </div>
  );
}

export default Articles;
