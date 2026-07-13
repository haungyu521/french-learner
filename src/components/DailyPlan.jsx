import { useLocalStorage } from '../hooks/useLocalStorage';

function DailyPlan({ onNavigate }) {
  const [completedTasks, setCompletedTasks] = useLocalStorage('daily-tasks', {});
  
  const today = new Date().toISOString().split('T')[0];
  const dayTasks = completedTasks[today] || {};

  const toggleTask = (taskId) => {
    const newTasks = { ...completedTasks };
    if (!newTasks[today]) newTasks[today] = {};
    newTasks[today][taskId] = !newTasks[today][taskId];
    setCompletedTasks(newTasks);
  };

  const plan = [
    {
      time: "🌅 早晨 (10分钟)",
      tasks: [
        { id: "vocab-review", text: "复习昨天学过的单词", section: "vocabulary", desc: "打开单词模块，点'复习'按钮" },
        { id: "listen-1", text: "听一段口语练习的对话", section: "oral", desc: "打开口语模块，选'情景对话'" },
      ]
    },
    {
      time: "☀️ 中午 (15分钟)",
      tasks: [
        { id: "learn-words", text: "学5个新单词", section: "vocabulary", desc: "打开单词模块，点'学习新词'" },
        { id: "read-article", text: "读一篇趣味文章", section: "articles", desc: "打开文章模块，选一篇阅读" },
      ]
    },
    {
      time: "🌙 晚上 (20分钟)",
      tasks: [
        { id: "knowledge", text: "学1个语法知识点", section: "knowledge", desc: "打开知识点模块，从入门开始" },
        { id: "oral-practice", text: "跟读练习5个句子", section: "oral", desc: "打开口语模块，选'跟读练习'" },
        { id: "writing", text: "做3道填空练习题", section: "writing", desc: "打开写作模块，做填空题" },
      ]
    },
    {
      time: "🛏️ 睡前 (5分钟)",
      tasks: [
        { id: "review-all", text: "快速浏览今天学过的所有内容", section: "vocabulary", desc: "回忆今天学了什么" },
        { id: "tongue", text: "练一个绕口令", section: "oral", desc: "打开口语模块，选'绕口令'" },
      ]
    },
  ];

  const totalTasks = plan.reduce((sum, block) => sum + block.tasks.length, 0);
  const completedCount = plan.reduce((sum, block) => 
    sum + block.tasks.filter(t => dayTasks[t.id]).length, 0);
  const percentage = Math.round((completedCount / totalTasks) * 100);

  const getStreak = () => {
    let streak = 0;
    const date = new Date();
    while (true) {
      const dateStr = date.toISOString().split('T')[0];
      const tasks = completedTasks[dateStr];
      if (tasks && Object.values(tasks).some(v => v)) {
        streak++;
        date.setDate(date.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  };

  const weekProgress = () => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const tasks = completedTasks[dateStr] || {};
      const completed = Object.values(tasks).filter(v => v).length;
      days.push({
        day: ['日', '一', '二', '三', '四', '五', '六'][date.getDay()],
        date: dateStr,
        completed,
        total: totalTasks,
        isToday: i === 0,
      });
    }
    return days;
  };

  const streak = getStreak();
  const week = weekProgress();

  return (
    <div className="daily-plan">
      <div className="plan-header">
        <h2>📅 每日学习计划</h2>
        <p className="subtitle">每天50分钟，科学安排，轻松学法语</p>
      </div>

      <div className="plan-stats">
        <div className="stat-ring">
          <div className="ring-progress" style={{ '--progress': `${percentage}%` }}>
            <span className="ring-text">{percentage}%</span>
          </div>
          <p>今日完成</p>
        </div>
        <div className="stat-info">
          <div className="stat-item">
            <span className="stat-icon">🔥</span>
            <div>
              <strong>{streak}</strong>
              <span>连续学习天数</span>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon">✅</span>
            <div>
              <strong>{completedCount}/{totalTasks}</strong>
              <span>今日任务</span>
            </div>
          </div>
        </div>
      </div>

      <div className="week-progress">
        <h3>本周进度</h3>
        <div className="week-days">
          {week.map((d, i) => (
            <div key={i} className={`week-day ${d.isToday ? 'today' : ''} ${d.completed > 0 ? 'has-progress' : ''}`}>
              <span className="day-name">{d.day}</span>
              <div className="day-bar">
                <div className="day-fill" style={{ height: `${(d.completed / d.total) * 100}%` }} />
              </div>
              <span className="day-count">{d.completed}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="plan-blocks">
        {plan.map((block, blockIdx) => (
          <div key={blockIdx} className="plan-block">
            <h3 className="block-time">{block.time}</h3>
            {block.tasks.map(task => (
              <div key={task.id} className={`plan-task ${dayTasks[task.id] ? 'completed' : ''}`}>
                <button className="check-btn" onClick={() => toggleTask(task.id)}>
                  {dayTasks[task.id] ? '✅' : '⬜'}
                </button>
                <div className="task-info">
                  <span className="task-text">{task.text}</span>
                  <span className="task-desc">{task.desc}</span>
                </div>
                <button className="go-btn" onClick={() => onNavigate(task.section)}>
                  去练习 →
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="study-method">
        <h3>🧠 科学记忆法 - 专治健忘</h3>
        <div className="method-cards">
          <div className="method-card">
            <h4>🔄 间隔重复法</h4>
            <p>不要一次背100个词！每天学5-10个，然后按1天、3天、7天、14天、30天的间隔复习。本应用的单词模块已经帮你自动安排了！</p>
          </div>
          <div className="method-card">
            <h4>🔗 联想记忆法</h4>
            <p>把法语单词和你知道的东西联系起来。比如"restaurant"在英语里也差不多，"bibliothèque"可以和"book"联想。越荒诞越好记！</p>
          </div>
          <div className="method-card">
            <h4>👄 多感官学习</h4>
            <p>看（读）+ 听（发音）+ 说（跟读）+ 写（写作），四个感官一起用，记忆效果是只看书的4倍！</p>
          </div>
          <div className="method-card">
            <h4>📖 情境学习法</h4>
            <p>不要孤立地背单词！在文章里、对话里学习，这样你不仅知道意思，还知道怎么用。多看文章模块！</p>
          </div>
          <div className="method-card">
            <h4>📅 固定时间法</h4>
            <p>每天固定时间学习（比如早起/午饭/睡前），养成习惯比任何方法都重要。坚持21天就能养成习惯！</p>
          </div>
          <div className="method-card">
            <h4>🎯 少即是多</h4>
            <p>与其一天学2小时然后放弃，不如每天学20分钟坚持365天。细水长流才是王道！</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyPlan;
