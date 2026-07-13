import { useState } from 'react';
import { storyData } from '../data/story';
import { speakFrench } from '../utils/tts';
import { useLocalStorage } from '../hooks/useLocalStorage';

function StorySeries() {
  const [currentEp, setCurrentEp] = useState(0);
  const [currentScene, setCurrentScene] = useState(0);
  const [showCn, setShowCn] = useState(false);
  const [showVocab, setShowVocab] = useState(false);
  const [watched, setWatched] = useLocalStorage('story-watched', []);

  const episode = storyData[currentEp];
  const scene = episode.scenes[currentScene];

  const speak = (text) => speakFrench(text);

  const markWatched = (ep) => {
    if (!watched.includes(ep)) setWatched([...watched, ep]);
  };

  const nextScene = () => {
    if (currentScene < episode.scenes.length - 1) {
      setCurrentScene(currentScene + 1);
      setShowCn(false); setShowVocab(false);
    } else {
      markWatched(currentEp + 1);
      if (currentEp < storyData.length - 1) {
        setCurrentEp(currentEp + 1); setCurrentScene(0);
        setShowCn(false); setShowVocab(false);
      }
    }
  };

  return (
    <div className="story-series">
      <div className="story-header">
        <h2>📺 追剧学法语</h2>
        <p className="subtitle">"Marie à Paris" - 跟着Marie的巴黎冒险学法语</p>
      </div>

      <div className="episode-list">
        {storyData.map((ep, i) => (
          <button key={i} className={`ep-btn ${currentEp === i ? 'active' : ''} ${watched.includes(i + 1) ? 'watched' : ''}`}
            onClick={() => { setCurrentEp(i); setCurrentScene(0); setShowCn(false); setShowVocab(false); }}>
            <span className="ep-emoji">{ep.emoji}</span>
            <span className="ep-title">第{i + 1}集: {ep.titleCn}</span>
            {watched.includes(i + 1) && <span className="ep-done">✅</span>}
          </button>
        ))}
      </div>

      <div className="episode-viewer">
        <div className="episode-title">
          <span className="ep-badge">{episode.emoji} 第{episode.episode}集</span>
          <h3>{episode.title}</h3>
          <p>{episode.titleCn}</p>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${((currentScene + 1) / episode.scenes.length) * 100}%` }} />
          <span className="progress-text">场景 {currentScene + 1}/{episode.scenes.length}</span>
        </div>

        <div className="scene-card">
          <div className="scene-fr" onClick={() => speak(scene.fr)}>
            {scene.fr}
            <span className="speak-icon">🔊</span>
          </div>

          <button className="toggle-btn" onClick={() => setShowCn(!showCn)}>
            {showCn ? '🙈 隐藏翻译' : '👀 查看翻译'}
          </button>
          {showCn && <div className="scene-cn">{scene.cn}</div>}

          <div className="highlight-words">
            {scene.highlight.map((h, i) => (
              <span key={i} className="highlight-tag" onClick={() => speak(h)}>{h} 🔊</span>
            ))}
          </div>

          <button className="toggle-btn words-btn" onClick={() => setShowVocab(!showVocab)}>
            {showVocab ? '📕 收起词汇' : '📖 本场景词汇'}
          </button>
          {showVocab && (
            <div className="scene-vocab">
              {scene.vocab.map((v, i) => (
                <div key={i} className="vocab-chip" onClick={() => speak(v.word)}>
                  <strong>{v.word}</strong> = {v.meaning}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="scene-nav">
          <button onClick={() => { setCurrentScene(Math.max(0, currentScene - 1)); setShowCn(false); setShowVocab(false); }} disabled={currentScene === 0}>← 上一幕</button>
          <button className="next-scene-btn" onClick={nextScene}>
            {currentScene < episode.scenes.length - 1 ? '下一幕 →' : currentEp < storyData.length - 1 ? '下一集 →' : '🎉 看完啦！'}
          </button>
        </div>

        {currentScene === episode.scenes.length - 1 && (
          <div className="cliffhanger">
            <h4>😱 悬念时刻</h4>
            <p>{episode.cliffhanger}</p>
            <p className="next-ep">下集预告：{episode.nextEpisode}</p>
          </div>
        )}
      </div>

      <div className="study-tips">
        <h4>📝 追剧学习法</h4>
        <ul>
          <li>第一遍：只看法语，猜猜大意</li>
          <li>第二遍：看翻译，对照理解</li>
          <li>第三遍：学高亮词汇和重点词</li>
          <li>第四遍：点🔊跟读，模仿语调</li>
          <li>像追剧一样每天看一集，不知不觉就学会了！</li>
        </ul>
      </div>
    </div>
  );
}

export default StorySeries;
