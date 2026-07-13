import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const logicExercises = {
  sequences: [
    { q: "2, 4, 8, 16, ?", ans: "32", exp: "每个数×2：16×2=32 (等比数列)", diff: 1 },
    { q: "1, 1, 2, 3, 5, 8, ?", ans: "13", exp: "斐波那契数列：前两个数相加=下一个：5+8=13", diff: 2 },
    { q: "3, 6, 9, 12, ?", ans: "15", exp: "每次+3：12+3=15 (等差数列)", diff: 1 },
    { q: "100, 81, 64, 49, ?", ans: "36", exp: "递减的平方数：10², 9², 8², 7², 6²=36", diff: 3 },
    { q: "A, C, E, G, ?", ans: "I", exp: "跳一个字母：A(B)C(D)E(F)G(H)I", diff: 1 },
    { q: "1, 4, 9, 16, 25, ?", ans: "36", exp: "平方数：1², 2², 3², 4², 5², 6²=36", diff: 2 },
    { q: "2, 3, 5, 7, 11, ?", ans: "13", exp: "质数序列(只能被1和自己整除)：下一个质数是13", diff: 3 },
    { q: "Z, X, V, T, ?", ans: "R", exp: "倒着跳一个字母：Z(Y)X(W)V(U)T(S)R", diff: 2 },
  ],
  analogies: [
    { q: "书 : 阅读 = 食物 : ?", ans: "吃", exp: "书用来阅读，食物用来吃（功能关系）", diff: 1 },
    { q: "热 : 冷 = 高 : ?", ans: "矮", exp: "反义关系：热的反面是冷，高的反面是矮", diff: 1 },
    { q: "猫 : 喵 = 狗 : ?", ans: "汪", exp: "动物和它的叫声", diff: 1 },
    { q: "笔 : 写字 = 刀 : ?", ans: "切割", exp: "工具和它的功能", diff: 1 },
    { q: "眼睛 : 看 = 耳朵 : ?", ans: "听", exp: "器官和它的功能", diff: 1 },
    { q: "鱼 : 水 = 鸟 : ?", ans: "天空", exp: "生物和它活动的空间", diff: 2 },
    { q: "医生 : 病人 = 老师 : ?", ans: "学生", exp: "职业和它服务的对象", diff: 1 },
    { q: "种子 : 树 = 婴儿 : ?", ans: "成人", exp: "成长关系：种子长成树，婴儿长成成人", diff: 2 },
  ],
  deductions: [
    { q: "所有的猫都有四条腿。小白有四条腿。小白一定是猫吗？", ans: "不一定", exp: "四腿的不一定是猫，也可能是狗、桌子等。这是'肯定后件'的逻辑谬误！", diff: 2 },
    { q: "如果下雨，地就会湿。地湿了，一定下雨了吗？", ans: "不一定", exp: "地湿可能有其他原因(洒水车、泼水等)。和上一题一样的逻辑谬误！", diff: 2 },
    { q: "小明比小红高。小红比小刚高。小明和小刚谁高？", ans: "小明", exp: "传递关系：A>B，B>C → A>C", diff: 1 },
    { q: "房间里有3个开关控制隔壁房间的3盏灯，你只能去隔壁一次。怎么判断？", ans: "先开1号10分钟，再开2号，去隔壁", exp: "摸灯泡：热的+亮=1号，不热+亮=2号，不热+不亮=3号。用温度这个隐藏信息！", diff: 3 },
    { q: "一个说谎者和一个说真话的人，你不知道谁是谁。问一个问题怎么分辨？", ans: "问'他会说你是说谎者吗？'", exp: "不管问谁这个问题，说'是'的那个就是说真话的人！", diff: 3 },
    { q: "A说：'我们中至少有一个人在说谎'。A和B谁在说谎？", ans: "B在说谎", exp: "如果A说谎，那没人说谎，矛盾！所以A说的是真的，B在说谎", diff: 3 },
  ],
  patterns: [
    { q: "如果所有A都是B，所有B都是C，那么所有A都是C吗？", ans: "是", exp: "三段论推理：A⊂B⊂C → A⊂C。这是逻辑推理的基础！", diff: 1 },
    { q: "'没有人是完美的'和'苏格拉底是人'→ ?", ans: "苏格拉底不完美", exp: "三段论：大前提(所有人不完美)+小前提(苏格拉底是人)=结论", diff: 2 },
    { q: "一个农夫有狼、羊和白菜要过河，船只能带一样。怎么过？", ans: "先带羊→回来→带狼→带羊回来→带白菜→回来→带羊", exp: "关键是中间要把羊带回来一次！这是经典的逻辑题", diff: 3 },
    { q: "5个人排队，A在B前面，C在D前面，E在最后，A和C不相邻。可能的排列？", ans: "B-A-D-C-E 或 D-C-A-B-E等", exp: "系统排列法：先确定约束条件，再逐个排除", diff: 3 },
  ],
  memory: [
    { q: "记住：红蓝绿黄紫。问：第3个颜色是？", ans: "绿", exp: "短期记忆训练！试着用'红蓝绿黄紫'编个故事来记忆", diff: 1 },
    { q: "记住数字：8427561。问：第5位数字是？", ans: "5", exp: "分组记忆法：84-27-56-1 比 8427561 好记！电话号码就是这样记的", diff: 2 },
    { q: "记住：猫-桌子-月亮-钢琴-大海。问：第4个词是？", ans: "钢琴", exp: "联想链记忆法：想象猫跳上桌子，桌子飞到月亮上，月亮掉到钢琴上，钢琴掉进大海", diff: 2 },
    { q: "法语词汇联想：bonjour(你好)=棒酒→棒酒送给你=你好。用类似方法记住merci(谢谢)？", ans: "美人吸→美人吸走了你的感谢", exp: "荒谬联想法是记忆术的核心！越离谱越好记。你已经会用这种方法了！", diff: 2 },
  ],
};

export default function Logic() {
  const [category, setCategory] = useState('sequences');
  const [currentQ, setCurrentQ] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [stats, setStats] = useLocalStorage('logicStats', { correct: 0, total: 0 });

  const categories = [
    { id: 'sequences', name: '数列推理', icon: '🔢' },
    { id: 'analogies', name: '类比思维', icon: '🔗' },
    { id: 'deductions', name: '逻辑推理', icon: '🧩' },
    { id: 'patterns', name: '模式识别', icon: '🧠' },
    { id: 'memory', name: '记忆训练', icon: '💪' },
  ];

  const exercises = logicExercises[category];
  const exercise = exercises[currentQ];

  const checkAnswer = () => {
    if (!userAnswer.trim()) return;
    setShowResult(true);
    const correct = userAnswer.trim().toLowerCase() === exercise.ans.toLowerCase();
    setStats(s => ({ correct: s.correct + (correct ? 1 : 0), total: s.total + 1 }));
  };

  const nextExercise = () => {
    setUserAnswer('');
    setShowResult(false);
    setCurrentQ(i => (i + 1) % exercises.length);
  };

  const accuracy = stats.total > 0 ? Math.round(stats.correct / stats.total * 100) : 0;

  return (
    <div className="logic-section">
      <div className="logic-header">
        <h2>🧠 逻辑思维训练</h2>
        <p className="logic-subtitle">让大脑变聪明，不再傻傻的！</p>
        <div className="logic-stats">
          <span>✅ {stats.correct}/{stats.total}</span>
          <span>📊 正确率 {accuracy}%</span>
        </div>
      </div>

      <div className="category-tabs">
        {categories.map(cat => (
          <button key={cat.id}
            className={`cat-tab ${category === cat.id ? 'active' : ''}`}
            onClick={() => { setCategory(cat.id); setCurrentQ(0); setShowResult(false); setUserAnswer(''); }}>
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      <div className="logic-card">
        <div className="logic-difficulty">
          {'⭐'.repeat(exercise.diff)}
        </div>
        <p className="logic-question">{exercise.q}</p>

        {!showResult ? (
          <div className="logic-input-area">
            <input
              className="logic-input"
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && checkAnswer()}
              placeholder="输入你的答案..."
            />
            <button className="btn-primary" onClick={checkAnswer}>提交</button>
          </div>
        ) : (
          <div className="logic-result">
            <div className={`result-badge ${userAnswer.trim().toLowerCase() === exercise.ans.toLowerCase() ? 'correct' : 'wrong'}`}>
              {userAnswer.trim().toLowerCase() === exercise.ans.toLowerCase() ? '🎉 正确！' : '❌ 不对'}
            </div>
            {userAnswer.trim().toLowerCase() !== exercise.ans.toLowerCase() && (
              <p className="correct-answer">正确答案：<strong>{exercise.ans}</strong></p>
            )}
            <div className="explanation">
              <p>💡 {exercise.exp}</p>
            </div>
            <button className="btn-primary" onClick={nextExercise}>下一题 →</button>
          </div>
        )}
      </div>

      <div className="logic-tips">
        <h3>🎯 逻辑小贴士</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <h4>分类思维</h4>
            <p>把复杂问题拆成小块，逐个解决。学英语和法语也是！把语法、词汇、发音分开练。</p>
          </div>
          <div className="tip-card">
            <h4>类比思维</h4>
            <p>用已知推未知。你已经会法语的条件句，英语的条件句逻辑一样！</p>
          </div>
          <div className="tip-card">
            <h4>逆向思维</h4>
            <p>从结论倒推。做阅读题先看问题再读文章，效率翻倍。</p>
          </div>
          <div className="tip-card">
            <h4>关联记忆</h4>
            <p>新知识和已知联系。英语和法语的'假朋友'越对比记得越牢！</p>
          </div>
        </div>
      </div>
    </div>
  );
}
