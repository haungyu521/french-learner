import { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const SKIP_REASONS = [
  { id: 'sick', label: '身体不适', icon: '🤒' },
  { id: 'busy', label: '工作繁忙', icon: '💼' },
  { id: 'family', label: '家庭事务', icon: '🏠' },
  { id: 'travel', label: '外出旅行', icon: '✈️' },
  { id: 'network', label: '网络设备问题', icon: '📡' },
  { id: 'other', label: '其他', icon: '📝' },
];

function getToday() {
  return new Date().toISOString().split('T')[0];
}

function getMonthDays(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function DailyCheckIn({ onClose }) {
  const today = getToday();
  const [checkins, setCheckins] = useLocalStorage('daily-checkins', {});
  const [mode, setMode] = useState('main'); // main, skip, calendar
  const [skipReason, setSkipReason] = useState('');
  const [skipNote, setSkipNote] = useState('');
  const [calMonth, setCalMonth] = useState(() => {
    const d = new Date();
    return { year: d.getFullYear(), month: d.getMonth() };
  });

  const todayStatus = checkins[today]; // 'done', 'skipped', or undefined

  const handleCheckIn = () => {
    setCheckins({ ...checkins, [today]: 'done' });
    setMode('calendar');
  };

  const handleSkip = () => {
    if (!skipReason) return;
    setCheckins({
      ...checkins,
      [today]: { status: 'skipped', reason: skipReason, note: skipNote }
    });
    setMode('calendar');
  };

  // 月度统计
  const getMonthStats = () => {
    const { year, month } = calMonth;
    const daysInMonth = getMonthDays(year, month);
    const todayDate = new Date();
    let done = 0, skipped = 0, missed = 0;

    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const record = checkins[dateStr];
      const date = new Date(year, month, d);

      if (date > todayDate) continue; // 未来天数不计

      if (record === 'done') done++;
      else if (record && record.status === 'skipped') skipped++;
      else if (date < todayDate || (date.toDateString() === todayDate.toDateString() && !record)) {
        if (!record) missed++;
      }
    }
    const total = Math.min(daysInMonth, todayDate.getMonth() === month && todayDate.getFullYear() === year ? todayDate.getDate() : daysInMonth);
    return { done, skipped, missed, total, rate: total > 0 ? Math.round(done / total * 100) : 0 };
  };

  const stats = getMonthStats();
  const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

  return (
    <div className="checkin-overlay">
      <div className="checkin-modal">
        {/* 已打卡/已请假 - 显示日历 */}
        {todayStatus && mode === 'calendar' && (
          <>
            <div className="checkin-header">
              <h2>📅 学习日历</h2>
              <button className="checkin-close" onClick={onClose}>✕</button>
            </div>
            <div className="checkin-status">
              {todayStatus === 'done'
                ? <span className="status-done">✅ 今日已打卡！太棒了！</span>
                : <span className="status-skip">⚠️ 今日已请假</span>}
            </div>
            <div className="checkin-calendar">
              <div className="cal-nav">
                <button onClick={() => setCalMonth(m => m.month === 0 ? { year: m.year - 1, month: 11 } : { ...m, month: m.month - 1 })}>◀</button>
                <span>{calMonth.year}年 {monthNames[calMonth.month]}</span>
                <button onClick={() => setCalMonth(m => m.month === 11 ? { year: m.year + 1, month: 0 } : { ...m, month: m.month + 1 })}>▶</button>
              </div>
              <div className="cal-grid">
                {['日', '一', '二', '三', '四', '五', '六'].map(d => <div key={d} className="cal-head">{d}</div>)}
                {(() => {
                  const firstDay = new Date(calMonth.year, calMonth.month, 1).getDay();
                  const days = getMonthDays(calMonth.year, calMonth.month);
                  const cells = [];
                  for (let i = 0; i < firstDay; i++) cells.push(<div key={`e${i}`} className="cal-cell empty"></div>);
                  for (let d = 1; d <= days; d++) {
                    const dateStr = `${calMonth.year}-${String(calMonth.month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
                    const record = checkins[dateStr];
                    let cls = 'cal-cell';
                    if (record === 'done') cls += ' done';
                    else if (record && record.status === 'skipped') cls += ' skipped';
                    else if (dateStr === today) cls += ' today';
                    else cls += ' missed';
                    cells.push(<div key={d} className={cls}>{d}</div>);
                  }
                  return cells;
                })()}
              </div>
            </div>
            <div className="checkin-stats">
              <div className="stat-row">
                <span className="stat-dot done"></span> 已打卡 <strong>{stats.done}</strong> 天
              </div>
              <div className="stat-row">
                <span className="stat-dot skipped"></span> 已请假 <strong>{stats.skipped}</strong> 天
              </div>
              <div className="stat-row">
                <span className="stat-dot missed"></span> 未打卡 <strong>{stats.missed}</strong> 天
              </div>
              <div className="stat-rate">
                完成率 <strong>{stats.rate}%</strong>
              </div>
            </div>
            <button className="checkin-btn" onClick={onClose}>开始学习 →</button>
          </>
        )}

        {/* 未打卡 - 主界面 */}
        {!todayStatus && mode === 'main' && (
          <>
            <div className="checkin-header">
              <h2>📋 每日打卡</h2>
              <p>今天{new Date().getDay() === 0 ? '日' : new Date().getDay()} · {new Date().toLocaleDateString('zh-CN')}</p>
            </div>
            <div className="checkin-main">
              <p className="checkin-question">今天学习了吗？</p>
              <button className="checkin-btn primary" onClick={handleCheckIn}>
                ✅ 打卡！今天学了
              </button>
              <button className="checkin-btn secondary" onClick={() => setMode('skip')}>
                😔 今天没法学
              </button>
            </div>
          </>
        )}

        {/* 请假界面 */}
        {!todayStatus && mode === 'skip' && (
          <>
            <div className="checkin-header">
              <h2>😔 请假</h2>
              <button className="checkin-close" onClick={() => setMode('main')}>← 返回</button>
            </div>
            <div className="checkin-skip">
              <p>请选择请假理由（必填）：</p>
              <div className="skip-reasons">
                {SKIP_REASONS.map(r => (
                  <button key={r.id}
                    className={`skip-reason-btn ${skipReason === r.id ? 'active' : ''}`}
                    onClick={() => setSkipReason(r.id)}>
                    {r.icon} {r.label}
                  </button>
                ))}
              </div>
              <textarea className="skip-note" placeholder="补充说明（选填）" value={skipNote}
                onChange={e => setSkipNote(e.target.value)} rows={2} />
              <button className="checkin-btn primary" onClick={handleSkip} disabled={!skipReason}>
                提交请假
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DailyCheckIn;
