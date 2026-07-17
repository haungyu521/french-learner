import { useState, useMemo } from 'react';
import { koreanConjugationData, koreanConjugationRules } from '../data/korean/conjugation';
import { speakKorean } from '../utils/tts';

const speechLevels = [
  { id: '해요체(非正式敬语)', name: '해요체', desc: '非正式敬语（日常最常用）', short: '해요체' },
  { id: '합쇼체(正式敬语)', name: '합쇼체', desc: '正式敬语（商务/演讲）', short: '합쇼체' },
  { id: '해체(平语)', name: '해체', desc: '平语（朋友间）', short: '해체' },
  { id: '连接形', name: '连接形', desc: '连接两个句子', short: '연결형' },
  { id: '修饰形', name: '修饰形', desc: '修饰名词', short: '수식형' },
];

const tenses = [
  { id: 'present', name: '现在时', ko: '현재형' },
  { id: 'past', name: '过去时', ko: '과거형' },
  { id: 'future', name: '将来时', ko: '미래형' },
  { id: 'imperative', name: '命令形', ko: '명령형' },
  { id: 'suggestive', name: '提议形', ko: '제안형' },
];

export default function KoreanConjugation() {
  const [selectedVerb, setSelectedVerb] = useState(0);
  const [filterIrregular, setFilterIrregular] = useState('all');
  const [showRules, setShowRules] = useState(false);

  const filteredVerbs = useMemo(() => {
    if (filterIrregular === 'all') return koreanConjugationData;
    if (filterIrregular === 'regular') return koreanConjugationData.filter(v => !v.irregular);
    if (filterIrregular === 'irregular') return koreanConjugationData.filter(v => v.irregular);
    return koreanConjugationData.filter(v => v.type.includes(filterIrregular));
  }, [filterIrregular]);

  const verb = filteredVerbs[selectedVerb] || koreanConjugationData[0];

  const filterOptions = [
    { id: 'all', name: '全部' },
    { id: 'regular', name: '规则动词' },
    { id: 'irregular', name: '不规则动词' },
    { id: 'ㅂ不规则', name: 'ㅂ不规则' },
    { id: 'ㄷ不规则', name: 'ㄷ不规则' },
    { id: 'ㄹ不规则', name: 'ㄹ不规则' },
    { id: 'ㅅ不规则', name: 'ㅅ不规则' },
    { id: 'ㅎ不规则', name: 'ㅎ不规则' },
    { id: '르不规则', name: '르不规则' },
  ];

  return (
    <div className="conjugation">
      <div className="conj-header">
        <h2>🔤 韩语动词/形容词变形</h2>
        <p className="subtitle">首尔标准活用 · 语阶×时态 · 规则与不规则变形</p>
      </div>

      {/* 过滤器 */}
      <div className="conj-filters">
        {filterOptions.map(f => (
          <button key={f.id} className={`conj-filter-btn ${filterIrregular === f.id ? 'active' : ''}`}
            onClick={() => { setFilterIrregular(f.id); setSelectedVerb(0); }}>
            {f.name}
          </button>
        ))}
      </div>

      {/* 动词列表 */}
      <div className="conj-verb-list">
        {filteredVerbs.map((v, i) => (
          <button key={i} className={`conj-verb-btn ${selectedVerb === i ? 'active' : ''}`}
            onClick={() => setSelectedVerb(i)}>
            <span className="verb-text">{v.verb}</span>
            <span className="verb-meaning">{v.meaning}</span>
            {v.irregular && <span className="irregular-tag">不规则</span>}
          </button>
        ))}
      </div>

      {/* 变形详情 */}
      {verb && (
        <div className="conj-detail">
          <div className="conj-verb-header">
            <h3>{verb.verb} <button className="speak-btn" onClick={() => speakKorean(verb.verb)}>🔊</button></h3>
            <div className="conj-verb-meta">
              <span className="meta-item">词干: <strong>{verb.stem}</strong></span>
              <span className="meta-item">意思: <strong>{verb.meaning}</strong></span>
              <span className="meta-item">类型: <strong>{verb.type}</strong></span>
            </div>
            {verb.note && (
              <div className="conj-note">
                <p>💡 {verb.note}</p>
              </div>
            )}
          </div>

          {/* 按语阶显示变形 */}
          <div className="conj-tables">
            {speechLevels.map(level => {
              const levelData = verb.conjugations?.[level.id];
              if (!levelData) return null;

              // 连接形和修饰形是 key-value 形式
              const isConnective = level.id === '连接形';
              const isModifier = level.id === '修饰形';

              if (isConnective || isModifier) {
                const entries = Object.entries(levelData);
                return (
                  <div key={level.id} className="conj-table">
                    <h4>{level.name} <span className="level-desc">{level.desc}</span></h4>
                    <div className="conj-form-grid">
                      {entries.map(([key, val]) => (
                        <div key={key} className="conj-form-item">
                          <span className="form-label">{key}</span>
                          <span className="form-value">{val}</span>
                          <button className="mini-speak" onClick={() => speakKorean(val)}>🔊</button>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              // 语阶用 tense 显示
              return (
                <div key={level.id} className="conj-table">
                  <h4>{level.name} <span className="level-desc">{level.desc}</span></h4>
                  <div className="conj-form-grid">
                    {tenses.map(tense => {
                      const val = levelData[tense.id];
                      if (!val) return null;
                      return (
                        <div key={tense.id} className="conj-form-item">
                          <span className="form-label">{tense.name} ({tense.ko})</span>
                          <span className="form-value">{val}</span>
                          <button className="mini-speak" onClick={() => speakKorean(val)}>🔊</button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 变形规则说明 */}
      <div className="conj-rules-section">
        <button className="rules-toggle" onClick={() => setShowRules(!showRules)}>
          {showRules ? '▼ 收起变形规则' : '▶ 展开变形规则详解'}
        </button>
        {showRules && koreanConjugationRules && (
          <div className="conj-rules-list">
            {koreanConjugationRules.map((rule, i) => (
              <div key={i} className="rule-card">
                <h4>{rule.title || rule.name}</h4>
                <p>{rule.content || rule.desc}</p>
                {rule.examples && rule.examples.map((ex, j) => (
                  <div key={j} className="rule-example">
                    {ex}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="study-tips">
        <h4>📝 变形学习技巧</h4>
        <ul>
          <li>韩语变形不像法语按人称变，而是按<strong>语阶</strong>（敬语等级）变化</li>
          <li>해요체是日常最常用的语阶，先掌握这个再学其他</li>
          <li>不规则动词是最容易出错的地方，重点关注ㅂ/ㄷ/ㄹ/ㅅ/ㅎ/르六类不规则</li>
          <li>点击🔊听首尔标准发音，特别注意语调升降</li>
          <li>连接形和修饰形在造句时极为重要，是从句子到段落的桥梁</li>
          <li>建议每天学2-3个动词的全部变形，一周覆盖核心动词</li>
        </ul>
      </div>
    </div>
  );
}
