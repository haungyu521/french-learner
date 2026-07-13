import { useState } from 'react';
import { pictureBooksData } from '../data/pictureBooks';
import { speakFrench } from '../utils/tts';
import { useLocalStorage } from '../hooks/useLocalStorage';

function PictureBook() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [showCn, setShowCn] = useState(false);
  const [showVocab, setShowVocab] = useState(false);
  const [readBooks, setReadBooks] = useLocalStorage('picturebook-read', []);

  const speak = (text) => speakFrench(text);

  const book = selectedBook !== null ? pictureBooksData.find(b => b.id === selectedBook) : null;
  const page = book ? book.pages[currentPage] : null;

  const markRead = (bookId) => {
    if (!readBooks.includes(bookId)) setReadBooks([...readBooks, bookId]);
  };

  const nextPage = () => {
    if (book && currentPage < book.pages.length - 1) {
      setCurrentPage(currentPage + 1);
      setShowCn(false);
      setShowVocab(false);
    } else if (book) {
      markRead(book.id);
      setSelectedBook(null);
      setCurrentPage(0);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setShowCn(false);
      setShowVocab(false);
    }
  };

  const levelNames = { 1: '启蒙', 2: '基础', 3: '进阶' };
  const levelColors = { 1: '#10b981', 2: '#3b82f6', 3: '#8b5cf6' };

  // 绘本阅读视图
  if (book && page) {
    return (
      <div className="picture-book-reader">
        <button className="back-btn" onClick={() => { setSelectedBook(null); setCurrentPage(0); }}>
          ← 返回绘本列表
        </button>

        <div className="book-header">
          <h2>{book.emoji} {book.title}</h2>
          <h3>{book.titleCn}</h3>
          <span className="level-badge" style={{ background: levelColors[book.level] }}>
            Level {book.level}: {levelNames[book.level]}
          </span>
        </div>

        <div className="book-page">
          <div className="book-illustration" onClick={() => speak(page.fr)}>
            <span className="book-emoji">{page.img}</span>
            <span className="mini-speak">🔊 点击朗读</span>
          </div>

          <div className="book-text">
            <p className="book-fr" onClick={() => speak(page.fr)}>
              {page.fr}
            </p>
            <button className="toggle-btn" onClick={() => setShowCn(!showCn)}>
              {showCn ? '🙈 隐藏翻译' : '👀 查看翻译'}
            </button>
            {showCn && <p className="book-cn">{page.cn}</p>}
          </div>

          <div className="book-vocab-section">
            <button className="toggle-btn" onClick={() => setShowVocab(!showVocab)}>
              {showVocab ? '🙈 隐藏词汇' : '📝 学习词汇'}
            </button>
            {showVocab && (
              <div className="book-vocab-list">
                {page.vocab.map((v, i) => (
                  <div key={i} className="vocab-card" onClick={() => speak(v.word)}>
                    <span className="vocab-word">{v.word}</span>
                    <span className="vocab-meaning">{v.meaning}</span>
                    <span className="mini-speak">🔊</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="book-nav">
          <button className="page-btn" onClick={prevPage} disabled={currentPage === 0}>
            ← 上一页
          </button>
          <span className="page-indicator">{currentPage + 1} / {book.pages.length}</span>
          <button className="page-btn" onClick={nextPage}>
            {currentPage === book.pages.length - 1 ? '✅ 读完' : '下一页 →'}
          </button>
        </div>
      </div>
    );
  }

  // 绘本列表
  return (
    <div className="picture-book">
      <div className="section-header">
        <h2>📚 绘本阅读</h2>
        <p className="subtitle">从启蒙到进阶，跟着绘本轻松学语言</p>
      </div>

      <div className="level-filter">
        <span className="filter-label">难度选择：</span>
        {[1, 2, 3].map(level => (
          <span key={level} className="level-tag" style={{ background: levelColors[level] }}>
            Level {level}: {levelNames[level]}
          </span>
        ))}
      </div>

      <div className="book-grid">
        {pictureBooksData.map(b => (
          <button key={b.id} className={`book-card ${readBooks.includes(b.id) ? 'read' : ''}`}
            onClick={() => { setSelectedBook(b.id); setCurrentPage(0); setShowCn(false); setShowVocab(false); }}>
            <span className="book-card-emoji">{b.emoji}</span>
            <span className="book-card-title">{b.title}</span>
            <span className="book-card-title-cn">{b.titleCn}</span>
            <span className="level-badge-sm" style={{ background: levelColors[b.level] }}>
              L{b.level}
            </span>
            {b.lang === 'en' && <span className="lang-badge">EN</span>}
            {readBooks.includes(b.id) && <span className="read-badge">✅</span>}
          </button>
        ))}
      </div>

      <div className="reading-stats">
        <p>📖 已读 {readBooks.length} / {pictureBooksData.length} 本绘本</p>
      </div>
    </div>
  );
}

export default PictureBook;
