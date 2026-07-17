/**
 * LearningResources — 学习资源推荐
 * YouTube + B站 优质法语/英语学习频道和视频
 */
import { useState } from 'react';

const resources = {
  youtube: {
    fr: [
      { name: 'Learn French with Alexa', url: 'https://www.youtube.com/@learnfrenchwithalexa', desc: 'Alexa Polidoro 系统教学，讲解清晰，适合零基础到中级', level: 'A1-B1', icon: '🎓' },
      { name: 'FrenchPod101', url: 'https://www.youtube.com/@FrenchPod101', desc: '大量分级课程，听力+文化，从入门到高级全覆盖', level: 'A1-B2', icon: '🎧' },
      { name: 'Easy French', url: 'https://www.youtube.com/@EasyFrench', desc: '街头采访+双语字幕，感受真实法语，练听力神器', level: 'A2-B2', icon: '🗣️' },
      { name: 'Comme Une Française', url: 'https://www.youtube.com/@CommeUneFrancaise', desc: '法国文化+日常表达，优雅地道，提升语感', level: 'B1-B2', icon: '🇫🇷' },
      { name: 'Oh La La I Speak French', url: 'https://www.youtube.com/@ohlalalaspeakfrench', desc: '中级语法讲解，清晰易懂，适合巩固语法', level: 'B1-B2', icon: '📚' },
      { name: 'Learn French with Vincent', url: 'https://www.youtube.com/@learnfrenchwithvincent', desc: '法国老师沉浸式教学，语速适中，自然习得', level: 'A2-B1', icon: '👨‍🏫' },
    ],
    en: [
      { name: 'English with Lucy', url: 'https://www.youtube.com/@EnglishwithLucy', desc: '英式英语教学，发音+语法+词汇，讲解超清晰', level: 'A2-B2', icon: '💂' },
      { name: 'BBC Learning English', url: 'https://www.youtube.com/@BBCLearningEnglish', desc: 'BBC官方频道，新闻英语+日常英语，权威内容', level: 'B1-B2', icon: '📺' },
      { name: 'Learn English with TV Series', url: 'https://www.youtube.com/@LearnEnglishwithTVSeries', desc: '通过影视剧学英语，有趣又实用，追剧学法', level: 'A2-B2', icon: '🎬' },
      { name: 'Bob the Canadian', url: 'https://www.youtube.com/@BobtheCanadian', desc: '日常场景教学，语速适中，加拿大老师超亲切', level: 'A1-B1', icon: '🍁' },
      { name: 'Papa Teach Me', url: 'https://www.youtube.com/@Papateachme', desc: '英式幽默，趣味教学，让人笑着学会英语', level: 'A2-B1', icon: '🎩' },
      { name: "Rachel's English", url: 'https://www.youtube.com/@rachelsenglish', desc: '美式发音专项，口型详解，纠正发音必备', level: 'A1-B2', icon: '🗽' },
    ],
  },
  bilibili: {
    fr: [
      { name: '法语入门教程合集', url: 'https://www.bilibili.com/video/BV1xb411M7Zx', desc: '零基础系统法语课，每天10分钟，B站最热门法语教程', views: '298万+', icon: '🌟' },
      { name: '走遍法国（中法字幕）', url: 'https://www.bilibili.com/video/BV1D4eAzcEBN', desc: '配套《走遍法国》教材视频，中法双语字幕', views: '热门', icon: '📖' },
      { name: '法语从A1到B2完整课程', url: 'https://www.bilibili.com/video/BV1GJ411X7r5', desc: '完整级别课程，系统学习法语全阶段', views: '热门', icon: '📊' },
      { name: 'Learn French with Alexa（搬运）', url: 'https://www.bilibili.com/video/BV1Kz4y1C7e5', desc: 'YouTube最火法语老师Alexa的课程搬运版', views: '热门', icon: '🎓' },
      { name: '全400集法语入门教程', url: 'https://www.bilibili.com/video/BV1xM4y1w7Rc', desc: '198小时讲完，从0基础到C2大神', views: '百万+', icon: '🏆' },
    ],
    en: [
      { name: '英语兔 — 语法讲解', url: 'https://space.bilibili.com/39665558', desc: '语法讲解清晰，动画演示，B站英语语法第一UP', views: '千万+', icon: '🐰' },
      { name: '零基础系统学英语（53集）', url: 'https://www.bilibili.com/video/BV1xb411M7Zx', desc: '从零开始重建英语基础，适合遗忘星人', views: '百万+', icon: '📚' },
      { name: 'Sydney Serena（中翻版）', url: 'https://www.bilibili.com/video/BV1xK4y1M7e5', desc: '油管顶流博主日常生活纪实，中英翻译版', views: '69万+', icon: '🌏' },
      { name: 'TED听力精选', url: 'https://www.bilibili.com/video/BV1xE411X7pR', desc: 'TED演讲精选，高级听力素材，提升听力必备', views: '热门', icon: '🎤' },
      { name: '29集全英语训练课程', url: 'https://www.bilibili.com/video/BV1CJXRYAEG5', desc: '1个月提升口语听力N个level，实战训练', views: '热门', icon: '💪' },
      { name: '8个沉浸式英语YouTube频道推荐', url: 'https://www.bilibili.com/video/BV1JpWVzEEm5', desc: '大学教授推荐，语速适中、难度合适的学习资源', views: '热门', icon: '🎯' },
    ],
  },
};

export default function LearningResources({ lang = 'fr' }) {
  const [platform, setPlatform] = useState('all'); // all | youtube | bilibili
  const isEnglish = lang === 'en';
  const langKey = isEnglish ? 'en' : 'fr';
  const langLabel = isEnglish ? '英语' : '法语';

  const getYoutubeItems = () => resources.youtube[langKey] || [];
  const getBilibiliItems = () => resources.bilibili[langKey] || [];

  const showYoutube = platform === 'all' || platform === 'youtube';
  const showBilibili = platform === 'all' || platform === 'bilibili';

  return (
    <div className="learning-resources">
      <div className="resources-header">
        <h2>🌐 学习资源推荐</h2>
        <p className="subtitle">精选 YouTube 和 B站 最优质的{langLabel}学习频道和视频</p>
      </div>

      <div className="platform-tabs">
        <button className={platform === 'all' ? 'active' : ''} onClick={() => setPlatform('all')}>
          🌍 全部
        </button>
        <button className={platform === 'youtube' ? 'active' : ''} onClick={() => setPlatform('youtube')}>
          ▶️ YouTube
        </button>
        <button className={platform === 'bilibili' ? 'active' : ''} onClick={() => setPlatform('bilibili')}>
          📺 B站
        </button>
      </div>

      {showYoutube && (
        <div className="resource-section">
          <h3>▶️ YouTube 优质频道</h3>
          <div className="resource-grid">
            {getYoutubeItems().map((item, idx) => (
              <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className="resource-card">
                <div className="resource-icon">{item.icon}</div>
                <div className="resource-info">
                  <h4>{item.name}</h4>
                  <p className="resource-desc">{item.desc}</p>
                  <div className="resource-meta">
                    <span className="resource-level">{item.level}</span>
                    <span className="resource-platform">YouTube</span>
                  </div>
                </div>
                <div className="resource-arrow">→</div>
              </a>
            ))}
          </div>
        </div>
      )}

      {showBilibili && (
        <div className="resource-section">
          <h3>📺 B站 推荐视频</h3>
          <div className="resource-grid">
            {getBilibiliItems().map((item, idx) => (
              <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className="resource-card">
                <div className="resource-icon">{item.icon}</div>
                <div className="resource-info">
                  <h4>{item.name}</h4>
                  <p className="resource-desc">{item.desc}</p>
                  <div className="resource-meta">
                    {item.views && <span className="resource-views">🔥 {item.views}</span>}
                    <span className="resource-platform bilibili">B站</span>
                  </div>
                </div>
                <div className="resource-arrow">→</div>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="tips-box">
        <h4>💡 学习建议</h4>
        <ul>
          <li>每天看 15-30 分钟视频，少量多次效果最好</li>
          <li>第一遍带中文字幕理解内容，第二遍关掉字幕练听力</li>
          <li>跟着视频里的老师大声朗读，模仿语调和节奏</li>
          <li>遇到不懂的表达记下来，在「口语练习」中反复练习</li>
          <li>YouTube 视频可调整速度（0.75x 适合精听）</li>
        </ul>
      </div>
    </div>
  );
}
