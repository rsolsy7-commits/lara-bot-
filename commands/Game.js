const owner = "61562975344669";

let gameOn = {};
let waitingPlayers = {};
let players = {};
let scores = {};
let currentQuestion = {};
let round = {};
let acceptingPlayers = {};
let hallOfFame = {}; // لوحة الشرف

const questions = [
  { q: "ما هو أكبر كوكب في المجموعة الشمسية؟", a: "المشتري" },
  { q: "كم عدد قارات العالم؟", a: "7" },
  { q: "ما هو الحيوان الذي لا ينام؟", a: "السمك" },
  { q: "ما هو أسرع حيوان بري؟", a: "الفهد" },
  { q: "ما هو الشيء الذي يكسر بدون أن يُلمس؟", a: "الصمت" },
  { q: "شيء تملكه ويستعمله غيرك؟", a: "اسمك" },
  { q: "ما هو لون السماء؟", a: "أزرق" },
  { q: "ما هو الحيوان الذي يضحك؟", a: "الضبع" },
  { q: "ما هو أضخم حيوان على الأرض؟", a: "الحوت الأزرق" },
  { q: "ما هو أسرع طائر؟", a: "الصقر" },
  { q: "ما هو الحيوان الذي لا يشرب الماء؟", a: "الكنغر البري" },
  { q: "ما هو أطول نهر في العالم؟", a: "النيل" },
  { q: "ما هو الكوكب الأحمر؟", a: "المريخ" },
  { q: "ما هو الحيوان الذي ينام واقفًا؟", a: "الحصان" },
  { q: "ما هو الشيء الذي كلما أخذت منه كبر؟", a: "الحفرة" },
  { q: "ما هو الشيء الذي لا يمشي إلا بالضرب؟", a: "المسمار" },
  { q: "ما هو الشيء الذي يسمع بلا أذن؟", a: "الهاتف" },
  { q: "ما هو الشيء الذي يكتب ولا يقرأ؟", a: "القلم" },
  { q: "ما هو الحيوان الذي يبيض ولا يلد؟", a: "الطيور" },
  { q: "ما هو الحيوان الذي يلد ولا يبيض؟", a: "الثدييات" }
];

module.exports = {
  config: {
    name: "لعبة",
    aliases: ["game"],
    version: "3.0",
    author: "Rsol",
    prefix: true,
    category: "FUN",
    description: "لعبة أسئلة حماسية بين الأعضاء",
    guide: "{pn} تشغيل | {pn} ايقاف | {pn} شرف"
  },

  onStart: async function({ api, event, args }) {
    const thread = event.threadID;

    if (args[0] === "شرف") {
      return showHallOfFame(api, thread);
    }

    if (args[0] === "ايقاف") {
      delete gameOn[thread];
      delete acceptingPlayers[thread];
      return api.sendMessage("🎮 تم إيقاف اللعبة.", thread);
    }

    if (args[0] === "تشغيل") {
      gameOn[thread] = true;
      acceptingPlayers[thread] = true;
      waitingPlayers[thread] = [];

      api.sendMessage(
        "🔥 يلا يا جماعة… اللي بدو يلعب يكتب **تم** خلال 10 ثواني! 😤🔥",
        thread
      );

      setTimeout(() => checkPlayers(api, thread), 10000);
    }
  },

  onChat: async function({ api, event }) {
    const thread = event.threadID;
    const sender = event.senderID;
    const msg = event.body?.trim();

    if (acceptingPlayers[thread] && msg === "تم") {
      if (!waitingPlayers[thread].includes(sender)) {
        waitingPlayers[thread].push(sender);
        api.sendMessage("🔥 تم تسجيلك باللعبة!", thread);
      }
      return;
    }

    if (!gameOn[thread]) return;
    if (!players[thread]?.includes(sender)) return;

    if (msg === currentQuestion[thread].a) {
      scores[thread][sender]++;

      api.sendMessage("🔥 إجابة صحيحة! نقطة إلك 😤", thread);

      if (round[thread] >= 7) {
        endGame(api, thread);
      } else {
        round[thread]++;
        askQuestion(api, thread);
      }
    }
  }
};

function checkPlayers(api, thread) {
  const count = waitingPlayers[thread].length;

  if (count < 3) {
    api.sendMessage("😒 ولا 3 أشخاص؟ خلاص لغّيت اللعبة.", thread);
    delete acceptingPlayers[thread];
    delete gameOn[thread];
    return;
  }

  const maxPlayers = Math.min(count, 10);
  players[thread] = waitingPlayers[thread].slice(0, maxPlayers);

  scores[thread] = {};
  players[thread].forEach(id => scores[thread][id] = 0);

  round[thread] = 1;
  delete acceptingPlayers[thread];

  api.sendMessage(
    `🔥 تمام! عدد اللاعبين: ${maxPlayers}\nنبدأ الجولة الأولى 😤🔥`,
    thread
  );

  askQuestion(api, thread);
}

function askQuestion(api, thread) {
  const q = questions[Math.floor(Math.random() * questions.length)];
  currentQuestion[thread] = q;

  api.sendMessage(
    `❓ سؤال الجولة ${round[thread]}:\n${q.q}\n\nيلا يا عباقرة 😤🔥`,
    thread
  );
}

function endGame(api, thread) {
  const scoreEntries = Object.entries(scores[thread]);
  const sorted = scoreEntries.sort((a, b) => b[1] - a[1]);

  const topScore = sorted[0][1];
  const winners = sorted.filter(s => s[1] === topScore);

  if (winners.length > 1) {
    api.sendMessage("🔥 تعادل! سؤال فاصل 😤🔥", thread);
    round[thread]++;
    askQuestion(api, thread);
    return;
  }

  const winner = winners[0][0];

  api.getUserInfo(winner, (err, info) => {
    const name = info[winner].name;
    const pic = info[winner].profileUrl;

    if (!hallOfFame[winner]) {
      hallOfFame[winner] = { name, wins: 0, pic };
    }

    hallOfFame[winner].wins++;

    api.sendMessage(
      `🏆 انتهت اللعبة!\nالفائز هو: ${name} 🎉🔥\n\nمبروووك يا ملك الجولة 😤❤️`,
      thread
    );
  });

  delete gameOn[thread];
}

function showHallOfFame(api, thread) {
  if (Object.keys(hallOfFame).length === 0)
    return api.sendMessage("لا يوجد فائزين بعد 😢", thread);

  let msg = "🎉🎊💃🏻 لوحة شرف لارا 💃🏻🎊🎉\n\n";

  const sorted = Object.entries(hallOfFame).sort((a, b) => b[1].wins - a[1].wins);

  sorted.forEach(([id, data], i) => {
    msg += `${i + 1}) ${data.name}\nعدد الفوز: ${data.wins}\nالصورة: ${data.pic}\n\n`;
  });

  api.sendMessage(msg, thread);
}
