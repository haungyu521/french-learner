import { useState } from 'react';
import { knowledgeData as frKnowledge } from '../data/knowledge';
import { englishKnowledgeData as enKnowledge } from '../data/english/knowledge';
import { koreanKnowledgeData as koKnowledge } from '../data/korean/knowledge';
import { speakFrench, speakEnglish, speakKorean } from '../utils/tts';
import { useLocalStorage } from '../hooks/useLocalStorage';

const subcategoryIcons = {
  '时态': '⏰', '介词': '📍', '代词': '👤', '冠词': '📋', '动词': '🔤',
  '否定': '❌', '句型': '📐', '配合': '🔗', '词性': '🏷️', '从句': '🔀',
  '发音规则': '🔊', '英式vs美式': '🇬🇧', '数字': '🔢', '日常表达': '💬',
  '高频表达': '⭐', '法国文化': '🇫🇷', '英国文化': '🇬🇧',
  'DELF易错': '⚠️', '口语易错': '🚫',
  '韩语文化': '🇰🇷', 'TOPIK易错': '⚠️', '敬语': '🙇', '助词': '📍',
  '发音': '🔊', '语法': '📐', '词汇': '📝', '文化': '🏯',
};

const registerIcons = {
  '口语': '🗣️', '书面': '📝', '正式': '👔', '非正式': '😎', '通用': '🌐',
};

function KnowledgePoints({ lang = 'fr' }) {
  const knowledgeData = lang === 'en' ? enKnowledge : lang === 'ko' ? koKnowledge : frKnowledge;
  const speak = lang === 'en' ? speakEnglish : lang === 'ko' ? speakKorean : speakFrench;

  const [expandedId, setExpandedId] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [subcategoryFilter, setSubcategoryFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState(0);
  const storageKey = lang === 'en' ? 'knowledge-bookmarks-en' : lang === 'ko' ? 'knowledge-bookmarks-ko' : 'knowledge-bookmarks';
  const [bookmarks, setBookmarks] = useLocalStorage(storageKey, []);

  const categories = [...new Set(knowledgeData.map(k => k.category))];
  const subcategories = [...new Set(
    knowledgeData
      .filter(k => categoryFilter === 'all' || k.category === categoryFilter)
      .map(k => k.subcategory)
      .filter(Boolean)
  )];

  const filtered = knowledgeData
    .filter(k => {
      if (categoryFilter === 'bookmark') return bookmarks.includes(k.id);
      if (categoryFilter === 'all') return true;
      return k.category === categoryFilter;
    })
    .filter(k => subcategoryFilter === 'all' || k.subcategory === subcategoryFilter)
    .filter(k => difficultyFilter === 0 || k.difficulty === difficultyFilter)
    .sort((a, b) => a.difficulty - b.difficulty);

  const toggleBookmark = (id) => {
    setBookmarks(prev =>
      prev.includes(id) ? prev.filter(b => b !== id) : [...new Set([...prev, id])]
    );
  };

  const handleCategoryChange = (val) => {
    setCategoryFilter(val);
    setSubcategoryFilter('all');
  };

  const getDifficultyStars = (d) => '⭐'.repeat(d) + '☆'.repeat(3 - d);

  const title = lang === 'en' ? '📚 英语知识点' : lang === 'ko' ? '📚 韩语知识点' : '📚 法语知识点';
  const subtitle = lang === 'en'
    ? '时态 · 介词 · 代词 · 从句 · 发音 · 文化 — 系统学习+实用例句'
    : lang === 'ko'
    ? '语法 · 发音 · 助词 · 敬语 · 词汇 · 文化 — 首尔标准口语+TOPIK备考'
    : '时态 · 介词 · 代词 · 冠词 · 句型 · 发音 · 文化 — 系统学习+实用例句';

  return (
    <div className="knowledge">
      <div className="knowledge-header">
        <h2>{title}</h2>
        <p className="subtitle">{subtitle}</p>
      </div>

      <div className="filters">
        <select value={categoryFilter} onChange={e => handleCategoryChange(e.target.value)}>
          <option value="all">全部大类</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        {subcategories.length > 0 && (
          <select value={subcategoryFilter} onChange={e => setSubcategoryFilter(e.target.value)}>
            <option value="all">全部子类</option>
            {subcategories.map(s => (
              <option key={s} value={s}>{subcategoryIcons[s] || '📌'} {s}</option>
            ))}
          </select>
        )}
        <select value={difficultyFilter} onChange={e => setDifficultyFilter(Number(e.target.value))}>
          <option value={0}>全部难度</option>
          <option value={1}>⭐ 入门</option>
          <option value={2}>⭐⭐ 进阶</option>
          <option value={3}>⭐⭐⭐ 高级</option>
        </select>
        <button className="bookmark-filter" onClick={() => setCategoryFilter(categoryFilter === 'bookmark' ? 'all' : 'bookmark')}>
          🔖 收藏 ({bookmarks.length})
        </button>
      </div>

      {subcategories.length > 1 && (
        <div className="subcategory-tags">
          <button className={`sub-tag ${subcategoryFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSubcategoryFilter('all')}>全部</button>
          {subcategories.map(s => (
            <button key={s} className={`sub-tag ${subcategoryFilter === s ? 'active' : ''}`}
              onClick={() => setSubcategoryFilter(s)}>
              {subcategoryIcons[s] || '📌'} {s}
            </button>
          ))}
        </div>
      )}

      <div className="knowledge-list">
        {filtered.length === 0 && (
          <div className="empty-state"><p>📭 该分类下暂无知识点</p></div>
        )}
        {filtered.map(item => (
          <div key={item.id} className={`knowledge-card ${expandedId === item.id ? 'expanded' : ''}`}>
            <div className="card-header" onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}>
              <div className="card-title-row">
                <h3>{item.title}</h3>
                {item.ipa && <span className="ipa-badge">{item.ipa}</span>}
                <button className="bookmark-btn" onClick={(e) => { e.stopPropagation(); toggleBookmark(item.id); }}>
                  {bookmarks.includes(item.id) ? '🔖' : '📌'}
                </button>
              </div>
              <div className="card-meta">
                <span className="difficulty">{getDifficultyStars(item.difficulty)}</span>
                <span className="category-tag">{item.category}</span>
                {item.subcategory && (
                  <span className="subcategory-tag">
                    {subcategoryIcons[item.subcategory] || '📌'} {item.subcategory}
                  </span>
                )}
                {item.register && (
                  <span className="register-tag">
                    {registerIcons[item.register] || '🌐'} {item.register}
                  </span>
                )}
              </div>
              <p className="card-content">{item.content}</p>
            </div>

            {expandedId === item.id && (
              <div className="card-detail">
                {/* 发音/音标说明 */}
                {item.pronunciationNote && (
                  <div className="pronunciation-box">
                    <h4>🔊 发音与连读规则</h4>
                    <p>{item.pronunciationNote}</p>
                  </div>
                )}

                {/* 用法说明 */}
                {item.usage && (
                  <div className="usage-box">
                    <h4>📖 用法说明</h4>
                    <p>{item.usage}</p>
                  </div>
                )}

                {/* 详细知识点 */}
                <div className="details-list">
                  {item.details.map((d, i) => (
                    <div key={i} className="detail-item">
                      <span className="detail-term">{d.term}</span>
                      <span className="detail-def">{d.definition}</span>
                      <button className="detail-speak" onClick={() => speak(d.example)}>🔊</button>
                      <span className="detail-example">{d.example}</span>
                      {d.ipa && <span className="detail-ipa">{d.ipa}</span>}
                      {d.register && (
                        <span className="detail-register">{registerIcons[d.register] || ''} {d.register}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* 例句段落 */}
                {item.exampleParagraph && (
                  <div className="example-paragraph">
                    <h4>💬 实用例句</h4>
                    {item.exampleParagraph.map((ep, ei) => (
                      <div key={ei} className="ep-item">
                        <p className="ep-text">{ep.text}</p>
                        {ep.cn && <p className="ep-cn">{ep.cn}</p>}
                        {ep.context && <small className="ep-context">📌 {ep.context}</small>}
                      </div>
                    ))}
                  </div>
                )}

                {/* 使用场景 */}
                {item.scenarios && (
                  <div className="scenarios-box">
                    <h4>🎯 使用场景</h4>
                    <ul>
                      {item.scenarios.map((s, si) => (
                        <li key={si}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.tips && (
                  <div className="tips-box"><p>💡 {item.tips}</p></div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default KnowledgePoints;
