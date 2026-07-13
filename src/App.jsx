import { useState, useEffect, lazy, Suspense, memo, useCallback } from 'react';
import './App.css';

// 懒加载所有组件 - 按需加载，大幅提升首屏速度
const Curriculum = lazy(() => import('./components/Curriculum'));
const EnglishCurriculum = lazy(() => import('./components/EnglishCurriculum'));
const StorySeries = lazy(() => import('./components/StorySeries'));
const MicroLearn = lazy(() => import('./components/MicroLearn'));
const Challenge = lazy(() => import('./components/Challenge'));
const Vocabulary = lazy(() => import('./components/Vocabulary'));
const KnowledgePoints = lazy(() => import('./components/KnowledgePoints'));
const Articles = lazy(() => import('./components/Articles'));
const OralPractice = lazy(() => import('./components/OralPractice'));
const WritingPractice = lazy(() => import('./components/WritingPractice'));
const DailyPlan = lazy(() => import('./components/DailyPlan'));
const Conjugation = lazy(() => import('./components/Conjugation'));
const Bilingual = lazy(() => import('./components/Bilingual'));
const Logic = lazy(() => import('./components/Logic'));
const DailyCheckIn = lazy(() => import('./components/DailyCheckIn'));
const ExamPrep = lazy(() => import('./components/ExamPrep'));
const PictureBook = lazy(() => import('./components/PictureBook'));

// 加载占位符 - 轻量骨架屏
const Loading = memo(() => (
  <div className="loading-skeleton">
    <div className="skeleton-pulse" />
    <div className="skeleton-pulse" style={{ width: '60%' }} />
    <div className="skeleton-pulse" style={{ width: '80%' }} />
  </div>
));

function getToday() {
  return new Date().toISOString().split('T')[0];
}

const frenchSections = [
  { id: 'plan', name: '今日计划', icon: '📅' },
  { id: 'curriculum', name: '系统课程', icon: '🎓' },
  { id: 'vocabulary', name: '单词记忆', icon: '📝' },
  { id: 'conjugation', name: '动词变位', icon: '🔤' },
  { id: 'exam', name: '考试备考', icon: '🎯' },
  { id: 'story', name: '追剧学法', icon: '📺' },
  { id: 'micro', name: '速学', icon: '⚡' },
  { id: 'challenge', name: '闯关', icon: '🏆' },
  { id: 'knowledge', name: '知识点', icon: '📚' },
  { id: 'articles', name: '文章', icon: '📖' },
  { id: 'picturebook', name: '绘本', icon: '📚' },
  { id: 'oral', name: '口语', icon: '🗣️' },
  { id: 'writing', name: '写作', icon: '✍️' },
];

const englishSections = [
  { id: 'en_plan', name: '今日计划', icon: '📅' },
  { id: 'en_curriculum', name: '系统课程', icon: '🎓' },
  { id: 'en_vocab', name: '单词记忆', icon: '📝' },
  { id: 'en_knowledge', name: '知识点', icon: '📚' },
  { id: 'en_challenge', name: '闯关', icon: '🏆' },
  { id: 'en_oral', name: '口语', icon: '🗣️' },
  { id: 'en_writing', name: '写作', icon: '✍️' },
];

const sharedSections = [
  { id: 'bilingual', name: '双语对比', icon: '🔗' },
  { id: 'logic', name: '逻辑训练', icon: '🧠' },
];

// 缓存 sections 避免每次渲染重新创建
const FR_SECTIONS = [...frenchSections, ...sharedSections];
const EN_SECTIONS = [...englishSections, ...sharedSections];
const BOTH_SECTIONS = [...sharedSections, ...frenchSections.slice(0, 4), ...englishSections.slice(1, 2)];

function App() {
  const [lang, setLang] = useState('fr');
  const [activeSection, setActiveSection] = useState('plan');
  const [showCheckIn, setShowCheckIn] = useState(false);

  // 每日打卡检查
  useEffect(() => {
    try {
      const checkins = JSON.parse(localStorage.getItem('daily-checkins') || '{}');
      if (!checkins[getToday()]) setShowCheckIn(true);
    } catch { setShowCheckIn(true); }
  }, []);

  // 安卓语音解锁
  useEffect(() => {
    const unlock = () => {
      if (window.speechSynthesis) {
        const u = new SpeechSynthesisUtterance(' ');
        u.volume = 0.01;
        window.speechSynthesis.speak(u);
      }
    };
    document.addEventListener('touchstart', unlock, { once: true });
    document.addEventListener('click', unlock, { once: true });
    return () => {
      document.removeEventListener('touchstart', unlock);
      document.removeEventListener('click', unlock);
    };
  }, []);

  const sections = lang === 'fr' ? FR_SECTIONS : lang === 'en' ? EN_SECTIONS : BOTH_SECTIONS;

  const handleLangChange = useCallback((newLang, section) => {
    setLang(newLang);
    setActiveSection(section);
  }, []);

  const handleCloseCheckIn = useCallback(() => setShowCheckIn(false), []);
  const handleShowCheckIn = useCallback(() => setShowCheckIn(true), []);

  const renderSection = () => {
    switch (activeSection) {
      case 'plan': case 'en_plan': return <DailyPlan onNavigate={setActiveSection} />;
      case 'curriculum': return <Curriculum />;
      case 'en_curriculum': return <EnglishCurriculum />;
      case 'en_challenge': case 'challenge': return <Challenge />;
      case 'en_vocab': case 'vocabulary': return <Vocabulary />;
      case 'en_knowledge': case 'knowledge': return <KnowledgePoints />;
      case 'en_oral': case 'oral': return <OralPractice />;
      case 'en_writing': case 'writing': return <WritingPractice />;
      case 'story': return <StorySeries />;
      case 'micro': return <MicroLearn />;
      case 'conjugation': return <Conjugation />;
      case 'exam': return <ExamPrep />;
      case 'articles': return <Articles />;
      case 'picturebook': return <PictureBook />;
      case 'bilingual': return <Bilingual />;
      case 'logic': return <Logic />;
      default: return <DailyPlan onNavigate={setActiveSection} />;
    }
  };

  const titles = { fr: '🇫🇷 Français', en: '🇬🇧 English', both: '🌍 双语学习' };
  const subtitles = {
    fr: '专为健忘星人设计的法语助手',
    en: '从零基础开始的英语之旅',
    both: '英法对比，两种语言一起进步'
  };

  return (
    <div className="app">
      {showCheckIn && (
        <Suspense fallback={<Loading />}>
          <DailyCheckIn onClose={handleCloseCheckIn} />
        </Suspense>
      )}

      <header className="app-header">
        <div className="lang-switch">
          <button className={`lang-btn ${lang === 'fr' ? 'active' : ''}`} onClick={() => handleLangChange('fr', 'plan')}>🇫🇷 法语</button>
          <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => handleLangChange('en', 'en_plan')}>🇬🇧 英语</button>
          <button className={`lang-btn ${lang === 'both' ? 'active' : ''}`} onClick={() => handleLangChange('both', 'bilingual')}>🔗 双语</button>
        </div>
        <h1 className="app-title">{titles[lang]}</h1>
        <p className="app-subtitle">{subtitles[lang]}</p>
      </header>

      <nav className="app-nav">
        <button className="nav-btn" onClick={handleShowCheckIn}>
          <span className="nav-icon">📅</span>
          <span className="nav-name">打卡日历</span>
        </button>
        {sections.map(section => (
          <button key={section.id} className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}>
            <span className="nav-icon">{section.icon}</span>
            <span className="nav-name">{section.name}</span>
          </button>
        ))}
      </nav>

      <main className="app-main">
        <Suspense fallback={<Loading />}>
          {renderSection()}
        </Suspense>
      </main>

      <footer className="app-footer">
        <p>💡 每天坚持15分钟，少量多次，忘了没关系，复习就好！</p>
      </footer>
    </div>
  );
}

export default App;
