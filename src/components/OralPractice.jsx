import { useState } from 'react';
import { speakFrench, speakSlow } from '../utils/tts';

function OralPractice() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [mode, setMode] = useState('repeat'); // repeat, conversation, tongue
  const [speed, setSpeed] = useState(0.8);

  const phrases = [
    // 基础 - 日常问候
    { fr: "Bonjour, comment allez-vous?", cn: "你好，您好吗？", level: "基础" },
    { fr: "Je m'appelle Marie.", cn: "我叫Marie。", level: "基础" },
    { fr: "J'habite à Paris.", cn: "我住在巴黎。", level: "基础" },
    { fr: "Enchanté de faire votre connaissance.", cn: "很高兴认识您。", level: "基础" },
    { fr: "Excusez-moi, je ne comprends pas. Pouvez-vous répéter?", cn: "不好意思，我不明白。您能再说一遍吗？", level: "基础" },
    { fr: "Parlez-vous plus lentement, s'il vous plaît?", cn: "请您说慢一点好吗？", level: "基础" },
    // 进阶 - 社交表达
    { fr: "Qu'est-ce que vous faites dans la vie?", cn: "您是做什么工作的？", level: "进阶" },
    { fr: "Je suis très content de vous rencontrer.", cn: "很高兴认识您。", level: "进阶" },
    { fr: "Pourriez-vous m'aider, s'il vous plaît?", cn: "您能帮帮我吗？", level: "进阶" },
    { fr: "Il fait beau aujourd'hui, n'est-ce pas?", cn: "今天天气真好，不是吗？", level: "进阶" },
    { fr: "Est-ce que vous connaissez un bon restaurant près d'ici?", cn: "您知道这附近有好餐厅吗？", level: "进阶" },
    { fr: "Je voudrais réserver une table pour deux personnes.", cn: "我想预订一个两人桌。", level: "进阶" },
    // 实用 - 生活场景
    { fr: "L'addition, s'il vous plaît.", cn: "请结账。", level: "实用" },
    { fr: "Où se trouvent les toilettes?", cn: "洗手间在哪里？", level: "实用" },
    { fr: "Je voudrais un café crème et un croissant.", cn: "我想要一杯奶油咖啡和一个羊角面包。", level: "实用" },
    { fr: "Combien coûte ce manteau?", cn: "这件大衣多少钱？", level: "实用" },
    { fr: "Je peux essayer cette robe, s'il vous plaît?", cn: "我能试穿这条裙子吗？", level: "实用" },
    { fr: "Un ticket pour le métro, s'il vous plaît.", cn: "请给我一张地铁票。", level: "实用" },
    { fr: "Quelle est la prochaine station?", cn: "下一站是哪里？", level: "实用" },
    { fr: "Je voudrais ouvrir un compte en banque.", cn: "我想开一个银行账户。", level: "实用" },
    // 高级 - 深入表达
    { fr: "À mon avis, c'est une excellente idée.", cn: "在我看来，这是个极好的主意。", level: "高级" },
    { fr: "Je ne suis pas tout à fait d'accord avec vous.", cn: "我不完全同意您的看法。", level: "高级" },
    { fr: "Pourriez-vous m'expliquer comment ça fonctionne?", cn: "您能给我解释一下这怎么运作吗？", level: "高级" },
    { fr: "Si j'avais le temps, je voyagerais en Provence.", cn: "如果我有时间，我会去普罗旺斯旅行。", level: "高级" },
    { fr: "Il faudrait que je parte avant vingt heures.", cn: "我必须在八点前走。", level: "高级" },
    { fr: "Je me demande si c'est vraiment nécessaire.", cn: "我在想这是否真的有必要。", level: "高级" },
  ];

  const tongueTwisters = [
    { fr: "Les chaussettes de l'archiduchesse sont-elles sèches, archi-sèches?", cn: "大公爵夫人的袜子干了吗，特别干吗？" },
    { fr: "Un chasseur sachant chasser doit savoir chasser sans son chien.", cn: "会打猎的猎人应该能在没有狗的情况下打猎。" },
    { fr: "Poison sans poison.", cn: "没有毒的毒药。（法语绕口令）" },
    { fr: "Trois tortues trottaient sur un trottoir très étroit.", cn: "三只乌龟在非常窄的人行道上走。" },
    { fr: "Si six scies scient six cyprès, six cent six scies scient six cent six cyprès.", cn: "如果六把锯子锯六棵柏树，那么606把锯子就锯606棵柏树。" },
    { fr: "Poisson sans boisson est poison.", cn: "吃饭不喝酒等于中毒。（法国谚语）" },
    { fr: "Femme fidèle qui fait des fautes, faut s'en méfier.", cn: "忠实的女人犯了错，要小心。（文字游戏）" },
    { fr: "Mon dictionnaire me dit des mots dits dits.", cn: "我的字典告诉我说的词说了说了。" },
    { fr: "Je veux et j'exige d'abondants gage de ta grande sagesse.", cn: "我想要并要求你智慧的充分保证。" },
    { fr: "As-tu vu le ver luisant qui luit au loin dans le chemin ?", cn: "你看到在远处小路上发光的萤火虫了吗？" },
  ];

  const conversations = [
    {
      title: "在咖啡馆",
      lines: [
        { role: "serv", fr: "Bonjour! Qu'est-ce que je vous sers?", cn: "你好！您要什么？" },
        { role: "you", fr: "Bonjour! Un café, s'il vous plaît.", cn: "你好！请来一杯咖啡。" },
        { role: "serv", fr: "Avec du sucre ou sans sucre?", cn: "加糖还是不加糖？" },
        { role: "you", fr: "Avec un peu de sucre, merci.", cn: "加一点糖，谢谢。" },
        { role: "serv", fr: "Voilà! Ça fait trois euros.", cn: "给您！一共三欧元。" },
        { role: "you", fr: "Merci beaucoup! Au revoir!", cn: "非常感谢！再见！" },
      ]
    },
    {
      title: "问路",
      lines: [
        { role: "you", fr: "Excusez-moi, où est la gare?", cn: "打扰一下，火车站在哪？" },
        { role: "pass", fr: "La gare? C'est tout droit, puis à gauche.", cn: "火车站？直走，然后左转。" },
        { role: "you", fr: "C'est loin d'ici?", cn: "离这里远吗？" },
        { role: "pass", fr: "Non, c'est à cinq minutes à pied.", cn: "不远，走路五分钟就到了。" },
        { role: "you", fr: "Merci beaucoup!", cn: "非常感谢！" },
        { role: "pass", fr: "De rien! Bonne journée!", cn: "不客气！祝你有美好的一天！" },
      ]
    },
    {
      title: "在餐厅",
      lines: [
        { role: "serv", fr: "Bonsoir! Vous avez réservé?", cn: "晚上好！您预订了吗？" },
        { role: "you", fr: "Oui, une table pour deux, au nom de Li.", cn: "是的，两人桌，姓李。" },
        { role: "serv", fr: "Suivez-moi. Voici la carte.", cn: "请跟我来。这是菜单。" },
        { role: "you", fr: "Qu'est-ce que vous recommandez?", cn: "您推荐什么？" },
        { role: "serv", fr: "Le filet de bœuf est excellent.", cn: "牛排非常好。" },
        { role: "you", fr: "Très bien, je vais prendre ça. Et comme dessert, une crème brûlée.", cn: "好的，我要这个。甜点要焦糖布丁。" },
        { role: "serv", fr: "Excellent choix!", cn: "很好的选择！" },
      ]
    },
    {
      title: "看医生",
      lines: [
        { role: "doc", fr: "Qu'est-ce que vous avez?", cn: "您怎么了？" },
        { role: "you", fr: "J'ai mal à la gorge et j'ai de la fièvre.", cn: "我喉咙痛，还发烧了。" },
        { role: "doc", fr: "Depuis quand?", cn: "多久了？" },
        { role: "you", fr: "Depuis trois jours.", cn: "三天了。" },
        { role: "doc", fr: "Ouvrez la bouche, s'il vous plaît. Vous avez une angine.", cn: "请张嘴。您得了扁桃体炎。" },
        { role: "you", fr: "Qu'est-ce que je dois faire?", cn: "我该怎么办？" },
        { role: "doc", fr: "Je vous prescris des antibiotiques. Prenez-les trois fois par jour.", cn: "我给您开抗生素。每天吃三次。" },
      ]
    },
    {
      title: "在商店购物",
      lines: [
        { role: "you", fr: "Excusez-moi, vous avez ce pull en taille moyenne?", cn: "请问这件毛衣有中号吗？" },
        { role: "vend", fr: "Laissez-moi vérifier... Oui, le voici.", cn: "让我查一下...有的，给您。" },
        { role: "you", fr: "Je peux l'essayer?", cn: "我能试穿吗？" },
        { role: "vend", fr: "Bien sûr, les cabines d'essayage sont au fond.", cn: "当然，试衣间在里面。" },
        { role: "you", fr: "Il me va bien. Combien ça coûte?", cn: "很合身。多少钱？" },
        { role: "vend", fr: "Quarante-cinq euros.", cn: "45欧元。" },
        { role: "you", fr: "D'accord, je le prends. Je peux payer par carte?", cn: "好的，我要了。能刷卡吗？" },
        { role: "vend", fr: "Oui, bien sûr.", cn: "当然可以。" },
      ]
    },
  ];

  const speak = (text, rate) => rate ? speakSlow(text, 'fr-FR', rate) : speakFrench(text, speed);

  const currentList = mode === 'tongue' ? tongueTwisters : phrases;

  return (
    <div className="oral-practice">
      <div className="oral-header">
        <h2>🗣️ 口语练习</h2>
        <p className="subtitle">听发音，跟读练习，提升你的法语口语能力</p>
      </div>

      <div className="mode-tabs">
        <button className={`tab ${mode === 'repeat' ? 'active' : ''}`} onClick={() => { setMode('repeat'); setCurrentPhrase(0); }}>
          🔄 跟读练习
        </button>
        <button className={`tab ${mode === 'conversation' ? 'active' : ''}`} onClick={() => { setMode('conversation'); setCurrentPhrase(0); }}>
          💬 情景对话
        </button>
        <button className={`tab ${mode === 'tongue' ? 'active' : ''}`} onClick={() => { setMode('tongue'); setCurrentPhrase(0); }}>
          👅 绕口令
        </button>
      </div>

      <div className="speed-control">
        <label>朗读速度：</label>
        <input type="range" min="0.5" max="1.2" step="0.1" value={speed} onChange={e => setSpeed(Number(e.target.value))} />
        <span>{speed === 0.5 ? '很慢' : speed <= 0.7 ? '慢速' : speed <= 0.9 ? '正常' : '快速'}</span>
      </div>

      {mode !== 'conversation' ? (
        <div className="phrase-practice">
          {currentList[currentPhrase] && (
            <div className="phrase-card">
              <span className="phrase-level">{phrases[currentPhrase]?.level || '挑战'}</span>
              <div className="phrase-main">
                <h3 className="phrase-fr">{currentList[currentPhrase].fr}</h3>
                <p className="phrase-cn">{currentList[currentPhrase].cn}</p>
              </div>
              <div className="phrase-actions">
                <button className="speak-btn large" onClick={() => speak(currentList[currentPhrase].fr)}>
                  🔊 听发音
                </button>
                <button className="speak-btn large slow" onClick={() => speak(currentList[currentPhrase].fr, 0.5)}>
                  🐢 慢速
                </button>
              </div>
              <div className="phrase-nav">
                <button onClick={() => setCurrentPhrase(Math.max(0, currentPhrase - 1))} disabled={currentPhrase === 0}>
                  ← 上一句
                </button>
                <span>{currentPhrase + 1} / {currentList.length}</span>
                <button onClick={() => setCurrentPhrase(Math.min(currentList.length - 1, currentPhrase + 1))} disabled={currentPhrase === currentList.length - 1}>
                  下一句 →
                </button>
              </div>
            </div>
          )}

          <div className="practice-steps">
            <h4>跟读三步法：</h4>
            <div className="steps">
              <div className="step">
                <span className="step-num">1</span>
                <div>
                  <strong>听</strong>
                  <p>点击🔊，仔细听发音和语调</p>
                </div>
              </div>
              <div className="step">
                <span className="step-num">2</span>
                <div>
                  <strong>模仿</strong>
                  <p>用🐢慢速反复听，跟着念</p>
                </div>
              </div>
              <div className="step">
                <span className="step-num">3</span>
                <div>
                  <strong>脱稿</strong>
                  <p>不看文字，凭记忆说出来</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="conversation-practice">
          <div className="conversation-selector">
            {conversations.map((conv, idx) => (
              <button key={idx} className={`conv-btn ${currentPhrase === idx ? 'active' : ''}`} onClick={() => setCurrentPhrase(idx)}>
                {conv.title}
              </button>
            ))}
          </div>

          {conversations[currentPhrase] && (
            <div className="conversation-dialog">
              <h3>💬 {conversations[currentPhrase].title}</h3>
              {conversations[currentPhrase].lines.map((line, idx) => (
                <div key={idx} className={`dialog-line ${line.role === 'you' ? 'your-line' : 'other-line'}`}>
                  <div className="line-header">
                    <span className="role-badge">{line.role === 'you' ? '🧑 你说' : '👤 对方'}</span>
                  </div>
                  <p className="line-fr">{line.fr}</p>
                  <p className="line-cn">{line.cn}</p>
                  <button className="mini-speak-btn" onClick={() => speak(line.fr)}>🔊</button>
                </div>
              ))}
              <button className="speak-btn large" onClick={() => {
                const lines = conversations[currentPhrase].lines;
                let delay = 0;
                lines.forEach(line => {
                  setTimeout(() => speak(line.fr), delay);
                  delay += 3000;
                });
              }}>
                🔊 播放整段对话
              </button>
            </div>
          )}
        </div>
      )}

      <div className="study-tips">
        <h4>📝 口语练习建议</h4>
        <ul>
          <li>每天练15分钟比一周突击一次效果好</li>
          <li>先用慢速（🐢）把每个音发准，再逐渐提速</li>
          <li>对着镜子练，观察嘴型变化</li>
          <li>绕口令是练发音的终极武器，从简单的开始</li>
        </ul>
      </div>
    </div>
  );
}

export default OralPractice;
