import { useState } from 'react';
import { knowledgeData } from '../data/knowledge';
import { speakFrench } from '../utils/tts';
import { useLocalStorage } from '../hooks/useLocalStorage';

function KnowledgePoints() {
  const [expandedId, setExpandedId] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState(0);
  const [bookmarks, setBookmarks] = useLocalStorage('knowledge-bookmarks', []);

  const categories = [...new Set(knowledgeData.map(k => k.category))];

  const filtered = knowledgeData
    .filter(k => categoryFilter === 'all' || k.category === categoryFilter)
    .filter(k => difficultyFilter === 0 || k.difficulty === difficultyFilter)
    .sort((a, b) => a.difficulty - b.difficulty);

  const toggleBookmark = (id) => {
    setBookmarks(prev =>
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  const speak = (text) => speakFrench(text);

  const getDifficultyStars = (d) => '⭐'.repeat(d) + '☆'.repeat(3 - d);

  return (
    <div className="knowledge">
      <div className="knowledge-header">
        <h2>📚 知识点卡片</h2>
        <p className="subtitle">语法、发音、日常用语 - 分类整理，轻松掌握</p>
      </div>

      <div className="filters">
        <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
          <option value="all">全部分类</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={difficultyFilter} onChange={e => setDifficultyFilter(Number(e.target.value))}>
          <option value={0}>全部难度</option>
          <option value={1}>⭐ 入门</option>
          <option value={2}>⭐⭐ 进阶</option>
          <option value={3}>⭐⭐⭐ 高级</option>
        </select>
        <button className="bookmark-filter" onClick={() => setCategoryFilter('bookmark')}>
          🔖 我的收藏 ({bookmarks.length})
        </button>
      </div>

      <div className="knowledge-list">
        {(categoryFilter === 'bookmark'
          ? knowledgeData.filter(k => bookmarks.includes(k.id))
          : filtered
        ).map(item => (
          <div key={item.id} className={`knowledge-card ${expandedId === item.id ? 'expanded' : ''}`}>
            <div className="card-header" onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}>
              <div className="card-header-left">
                <span className="card-category">{item.category}</span>
                <h3>{item.title}</h3>
                <span className="difficulty">{getDifficultyStars(item.difficulty)}</span>
              </div>
              <div className="card-header-right">
                <button className="bookmark-btn" onClick={(e) => { e.stopPropagation(); toggleBookmark(item.id); }}>
                  {bookmarks.includes(item.id) ? '🔖' : '📌'}
                </button>
                <span className="expand-icon">{expandedId === item.id ? '▲' : '▼'}</span>
              </div>
            </div>

            {expandedId === item.id && (
              <div className="card-content">
                <p className="card-description">{item.content}</p>

                <div className="details-table">
                  <div className="table-header">
                    <span>术语/概念</span>
                    <span>解释</span>
                    <span>例句</span>
                  </div>
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="table-row">
                      <span className="term">{detail.term}</span>
                      <span className="definition">{detail.definition}</span>
                      <span className="example" onClick={() => speak(detail.example)}>
                        {detail.example}
                        <span className="mini-speak">🔊</span>
                      </span>
                    </div>
                  ))}
                </div>

                <div className="tips-box">
                  <span className="tips-icon">💡</span>
                  <p>{item.tips}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="study-tips">
        <h4>📝 学习建议</h4>
        <ul>
          <li>先学⭐入门的知识点，打好基础再进阶</li>
          <li>每个知识点都配有记忆技巧（💡），一定要看！</li>
          <li>点击例句旁的🔊可以听发音，跟着念加深印象</li>
          <li>把重要的知识点🔖收藏起来，方便反复查看</li>
        </ul>
      </div>
    </div>
  );
}

export default KnowledgePoints;
