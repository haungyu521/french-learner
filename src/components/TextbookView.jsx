/**
 * TextbookView — 教材查看组件（简洁版）
 * 法语区：走遍法国 1-4册
 * 英语区：走遍英国 1-4册
 */
import { useState } from 'react';
import { reflets1Data } from '../data/reflets/book1';
import { reflets2Data } from '../data/reflets/book2';
import { reflets3Data } from '../data/reflets/book3';
import { reflets4Data } from '../data/reflets/book4';
import { lookAhead1Data } from '../data/english/lookahead/book1';
import { lookAhead2Data } from '../data/english/lookahead/book2';
import { lookAhead3Data } from '../data/english/lookahead/book3';
import { lookAhead4Data } from '../data/english/lookahead/book4';

const frBooks = [
  { key: 'r1', title: '走遍法国 1', level: 'A1/A2', data: reflets1Data },
  { key: 'r2', title: '走遍法国 2', level: 'A2/B1', data: reflets2Data },
  { key: 'r3', title: '走遍法国 3', level: 'B1', data: reflets3Data },
  { key: 'r4', title: '走遍法国 4', level: 'B1/B2', data: reflets4Data },
];
const enBooks = [
  { key: 'l1', title: 'Look Ahead 1', level: 'A1', data: lookAhead1Data },
  { key: 'l2', title: 'Look Ahead 2', level: 'A2', data: lookAhead2Data },
  { key: 'l3', title: 'Look Ahead 3', level: 'B1', data: lookAhead3Data },
  { key: 'l4', title: 'Look Ahead 4', level: 'B2', data: lookAhead4Data },
];

export default function TextbookView() {
  const [lang, setLang] = useState('fr');
  const [bookIdx, setBookIdx] = useState(0);
  const [unitIdx, setUnitIdx] = useState(0);

  const books = lang === 'fr' ? frBooks : enBooks;
  const book = books[bookIdx];
  const unit = book?.data[unitIdx];

  const switchLang = (l) => { setLang(l); setBookIdx(0); setUnitIdx(0); };

  return (
    <div className="textbook-view">
      <h2>📚 教材学习</h2>

      {/* 语言切换 */}
      <div className="tb-lang-switch">
        <button className={lang === 'fr' ? 'active' : ''} onClick={() => switchLang('fr')}>🇫🇷 法语区</button>
        <button className={lang === 'en' ? 'active' : ''} onClick={() => switchLang('en')}>🇬🇧 英语区</button>
      </div>

      {/* 教材选择 */}
      <div className="tb-book-row">
        {books.map((b, i) => (
          <button key={b.key} className={`tb-book-btn ${bookIdx === i ? 'active' : ''}`}
            onClick={() => { setBookIdx(i); setUnitIdx(0); }}>
            <strong>{b.title}</strong>
            <span>{b.level}</span>
          </button>
        ))}
      </div>

      {/* 单元列表 */}
      <div className="tb-unit-row">
        {book?.data.map((u, i) => (
          <button key={i} className={`tb-unit-btn ${unitIdx === i ? 'active' : ''}`}
            onClick={() => setUnitIdx(i)}>
            {u.unit}. {u.unitTitle}
          </button>
        ))}
      </div>

      {/* 课程内容 */}
      {unit?.lessons?.map((lesson, li) => (
        <div key={li} className="tb-lesson">
          <h3>{lesson.title}</h3>
          {lesson.goal && <p className="tb-goal">🎯 {lesson.goal}</p>}

          {/* 词汇 */}
          {lesson.vocab?.length > 0 && (
            <div className="tb-section">
              <h4>📝 词汇</h4>
              <div className="tb-vocab-grid">
                {lesson.vocab.map((v, vi) => (
                  <div key={vi} className="tb-vocab-card">
                    <strong>{v.word}</strong>
                    <span>{v.meaning}</span>
                    <small>{v.example}</small>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 语法 */}
          {lesson.grammar && (
            <div className="tb-section">
              <h4>📚 {lesson.grammar.title}</h4>
              <div className="tb-grammar-box">
                <pre>{lesson.grammar.content}</pre>
                {lesson.grammar.tip && <p className="tb-tip">💡 {lesson.grammar.tip}</p>}
              </div>
            </div>
          )}

          {/* 对话 */}
          {lesson.dialogue?.length > 0 && (
            <div className="tb-section">
              <h4>💬 对话</h4>
              <div className="tb-dialogue">
                {lesson.dialogue.map((d, di) => (
                  <div key={di} className={`tb-line ${d.role === 'A' || d.role === 'Pierre' ? 'left' : 'right'}`}>
                    <span className="tb-role">{d.role}</span>
                    <p>{d.text}</p>
                    {d.cn && <small>{d.cn}</small>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 练习 */}
          {lesson.practice?.length > 0 && (
            <div className="tb-section">
              <h4>✏️ 练习</h4>
              {lesson.practice.map((p, pi) => (
                <div key={pi} className="tb-practice">
                  <p className="tb-q">{p.question}</p>
                  {p.options ? (
                    <div className="tb-options">
                      {p.options.map((o, oi) => (
                        <span key={oi} className={`tb-opt ${oi === p.answer ? 'correct' : ''}`}>
                          {String.fromCharCode(65 + oi)}. {o}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="tb-ans">答案: <strong>{p.answer}</strong></p>
                  )}
                  {p.hint && <small className="tb-hint">💡 {p.hint}</small>}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
