import { useState } from 'react';
import { articlesData } from '../data/articles';
import { speakFrench } from '../utils/tts';

function Articles() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showTranslation, setShowTranslation] = useState({});
  const [showWordList, setShowWordList] = useState({});

  const speak = (text) => speakFrench(text);

  const toggleTranslation = (articleId, paraIdx) => {
    setShowTranslation(prev => ({ ...prev, [`${articleId}-${paraIdx}`]: !prev[`${articleId}-${paraIdx}`] }));
  };

  const toggleWords = (articleId, paraIdx) => {
    setShowWordList(prev => ({ ...prev, [`${articleId}-${paraIdx}`]: !prev[`${articleId}-${paraIdx}`] }));
  };

  if (selectedArticle) {
    const article = articlesData.find(a => a.id === selectedArticle);
    return (
      <div className="article-reader">
        <button className="back-btn" onClick={() => setSelectedArticle(null)}>
          ← 返回文章列表
        </button>
        
        <div className="article-header">
          <h2>{article.title}</h2>
          <h3>{article.titleCn}</h3>
          <div className="article-controls">
            <button onClick={() => speak(article.paragraphs.map(p => p.fr).join(' '))}>
              🔊 朗读全文
            </button>
          </div>
        </div>

        <div className="article-content">
          {article.paragraphs.map((para, idx) => (
            <div key={idx} className="paragraph-block">
              <div className="paragraph-fr" onClick={() => speak(para.fr)}>
                <span className="para-number">{idx + 1}</span>
                {para.fr}
                <span className="mini-speak">🔊</span>
              </div>
              
              <button className="toggle-btn" onClick={() => toggleTranslation(article.id, idx)}>
                {showTranslation[`${article.id}-${idx}`] ? '🙈 隐藏翻译' : '👀 查看翻译'}
              </button>
              
              {showTranslation[`${article.id}-${idx}`] && (
                <div className="paragraph-cn">{para.cn}</div>
              )}

              <button className="toggle-btn words-btn" onClick={() => toggleWords(article.id, idx)}>
                {showWordList[`${article.id}-${idx}`] ? '📕 收起词汇' : '📖 重点词汇'}
              </button>

              {showWordList[`${article.id}-${idx}`] && (
                <div className="word-list">
                  {para.words.map((w, wi) => (
                    <div key={wi} className="word-item" onClick={() => speak(w.word)}>
                      <span className="word-fr">{w.word}</span>
                      <span className="word-cn">{w.meaning}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="culture-box">
          <h4>🇫🇷 文化小知识</h4>
          <p>{article.culture}</p>
        </div>

        <div className="study-tips">
          <h4>📝 阅读建议</h4>
          <ul>
            <li>第一遍：只看法语，试着理解大意</li>
            <li>第二遍：看翻译，对照理解</li>
            <li>第三遍：学习重点词汇</li>
            <li>第四遍：点击🔊跟读，模仿语调</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="articles">
      <div className="articles-header">
        <h2>📖 趣味文章</h2>
        <p className="subtitle">通过有趣的法语文章，在阅读中学习词汇和文化</p>
      </div>

      <div className="article-grid">
        {articlesData.map(article => (
          <div key={article.id} className="article-card" onClick={() => setSelectedArticle(article.id)}>
            <div className={`article-image article-${article.image}`}>
              <span className="article-emoji">
                {article.image === 'cafe' && '☕'}
                {article.image === 'beach' && '🏖️'}
                {article.image === 'food' && '🍽️'}
                {article.image === 'metro' && '🚇'}
              </span>
            </div>
            <div className="article-info">
              <h3>{article.title}</h3>
              <p className="article-title-cn">{article.titleCn}</p>
              <div className="article-meta">
                <span className="difficulty">
                  {'⭐'.repeat(article.difficulty)}{'☆'.repeat(3 - article.difficulty)}
                </span>
                <span className="para-count">{article.paragraphs.length} 段</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
