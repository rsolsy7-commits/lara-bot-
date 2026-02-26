// Contest.js – مسابقة لارا الرسمية الطويلة

const owner = "61562975344669";

let contestOn = {};
let acceptingPlayers = {};
let waitingPlayers = {};
let players = {};
let scores = {};
let hallOfFame = {};
let currentQuestion = {};
let answeredThisRound = {};
let targetScore = 20;

const flags = [
  { emoji: "🇯🇵", name: "اليابان" },
  { emoji: "🇫🇷", name: "فرنسا" },
  { emoji: "🇸🇾", name: "سوريا" },
  { emoji: "🇸🇦", name: "السعودية" },
  { emoji: "🇪🇬", name: "مصر" },
  { emoji: "🇩🇪", name: "ألمانيا" },
  { emoji: "🇮🇹", name: "إيطاليا" },
  { emoji: "🇪🇸", name: "إسبانيا" }
];

const emojiQuestions = [
  { desc: "إيموجي يعبر عن الغضب", answer: "😤" },
  { desc: "إيموجي يعبر عن النوم", answer: "😴" },
  { desc: "إيموجي يعبر عن الفرح", answer: "😄" },
  { desc: "إيموجي يعبر عن الحزن", answer: "😢" },
  { desc: "إيموجي يعبر عن الحب", answer: "❤️" }
];

const words = [
  { word: "برمجة", letters: ["ب", "ر", "م", "ج", "ة"] },
  { word: "لارا", letters: ["ل", "ا", "ر", "ا"] },
  { word: "مسابقة", letters: ["م", "س", "ا", "ب", "ق", "ة"] },
  { word: "ذكاء", letters: ["ذ", "ك", "ا", "ء"] }
];

const mathQuestions = [
  { q: "12 + 8 = ؟", a: "20" },
  { q: "25 - 9 = ؟", a: "16" },
  { q: "7 + 5 = ؟", a: "12" },
  { q: "15 - 6 = ؟", a: "9" },
  { q: "10 + 10 = ؟", a: "20" }
];

// هنا فقط مثال نصي لصورة أنمي – في التطبيق الفعلي تربطها بصورة
const animeQuestions = [
  { hint: "شخصية أنمي مشهورة من ناروتو، شعره أشقر ويرتدي برتقالي", name: "ناروتو" },
  { hint: "شخصية من ون بيس، قبعة قش", name: "لوفي" },
  { hint: "شخصية من ديث نوت، يحب التفاح", name: "ريوك" }
];

module.exports = {
  config: {
    name: "مسابقة",
    aliases: ["contest", "مسابقه"],
    version: "1.0",
    author: "Rsol & Roro",
    prefix: true,
    category: "FUN",
    description: "مسابقة لارا الرسمية الطويلة بنظام نقاط ولوحة شرف",
    guide: "{pn} تشغيل | {pn} شرف"
  },

  onStart: async function ({ api, event, args }) {
    const thread = event.threadID;

    // عرض لوحة الشرف فقط
    if (args[0] === "شرف") {
      return showHallOfFame(api, thread);
    }

    // إيقاف المسابقة
    if (args[0] === "ايقاف") {
      delete contestOn[thread];
      delete acceptingPlayers[thread];
      delete waitingPlayers[thread];
      delete players[thread];
      delete scores[thread];
      delete currentQuestion[thread];
      delete answeredThisRound[thread];
      return api.sendMessage("🎮 تم إيقاف المسابقة.", thread);
    }

    // تشغيل المسابقة
    if (args[0] === "تشغيل") {
      if (contestOn[thread]) {
        return api.sendMessage("المسابقة شغالة أصلاً يا عبقري 😤", thread);
      }

      contestOn[thread] = true;
      acceptingPlayers[thread] = true;
      waitingPlayers[thread] = [];
      scores[thread] = {};
      answeredThisRound[thread] = [];

      const intro =
        "🎯 نظام قسم الفعاليات:\n\n" +
        "أهلاً وسهلاً بكل عضو جديد 👋\n" +
        "هذا القسم مخصص للتفاعل والمنافسة في فعاليات متنوعة 🎮🔥\n\n" +
        "نظامنا بسيط لكن منظّم:\n\n" +
        "1. 🎭 الفعاليات:\n" +
        "ننظم فعاليات ترفيهية، تنافسية، غامضة، وأحيانًا رعب وتشويق 👻\n" +
        "كل فعالية لها قوانينها الخاصة، والمشاركة فيها تمنحك نقاط.\n\n" +
        "2. 💎 النقاط والمستويات:\n" +
        "كل ما تشارك أكثر، تجمع نقاط أكثر 💥\n" +
        "النقاط التي تجمعها في قسم الفعاليات كل أسبوع ستضاف إلى رتبتك في فريقك 💸\n\n" +
        "3. 🕹️ الجوائز والترقيات:\n" +
        "أكثر الأعضاء تفاعلاً يتم تكريمهم بلقب خاص أو صلاحيات رمزية 💫\n\n" +
        "📢 هدفنا:\n" +
        "خلق جو ممتع، تنافسي، ومليء بالطاقة بين الأعضاء 💪\n\n" +
        "للدخول في المسابقة… اكتبوا **تم**\n" +
        "(يجب تفاعل 3 أعضاء على الأقل لبدء المسابقة)";

      api.sendMessage(intro, thread, () => {
        setTimeout(() => checkPlayers(api, thread), 10000);
      });

      return;
    }

    return api.sendMessage("استخدم: مسابقة تشغيل | مسابقة شرف | مسابقة ايقاف", thread);
  },

  onChat: async function ({ api, event }) {
    const thread = event.threadID;
    const sender = event.senderID;
    const msg = (event.body || "").trim();

    // تسجيل اللاعبين بكلمة "تم"
    if (acceptingPlayers[thread] && msg === "تم") {
      if (!waitingPlayers[thread].includes(sender)) {
        waitingPlayers[thread].push(sender);
        api.sendMessage("🔥 تم تسجيلك في المسابقة يا شاطر 😤", thread);
      }
      return;
    }

    // إذا ما في مسابقة شغالة
    if (!contestOn[thread]) return;

    // إذا ما في لاعبين محددين أو المرسل مو من اللاعبين
    if (!players[thread] || !players[thread].includes(sender)) return;

    // إذا ما في سؤال حالي
    if (!currentQuestion[thread]) return;

    // منع نفس الشخص من أخذ أكثر من ترتيب في نفس السؤال
    if (answeredThisRound[thread].includes(sender)) return;

    // التحقق من الإجابة حسب نوع السؤال
    const cq = currentQuestion[thread];

    if (!checkAnswer(cq, msg)) return;

    // تسجيل ترتيب الإجابة
    answeredThisRound[thread].push(sender);
    const rank = answeredThisRound[thread].length; // 1 أو 2 أو 3

    let points = 0;
    if (rank === 1) points = 3;
    else if (rank === 2) points = 2;
    else if (rank === 3) points = 1;
    else return; // أكثر من 3 ما ياخذون نقاط

    if (!scores[thread][sender]) scores[thread][sender] = 0;
    scores[thread][sender] += points;

    let rankText = "";
    if (rank === 1) rankText = "🥇 الأول +3 نقاط!";
    if (rank === 2) rankText = "🥈 الثاني +2 نقاط!";
    if (rank === 3) rankText = "🥉 الثالث +1 نقطة!";

    api.getUserInfo(sender, (err, info) => {
      const name = info?.[sender]?.name || "مشارك";
      api.sendMessage(
        `🔥 إجابة صحيحة من: ${name}\n${rankText}\nمجموع نقاطك الآن: ${scores[thread][sender]}`,
        thread
      );
    });

    // إذا وصلنا 3 مجيبين أو خلصنا الترتيب
    if (rank === 3) {
      // فحص إذا في فائز وصل 20 نقطة أو أكثر
      const winner = getWinnerReachedTarget(scores[thread], targetScore);
      if (winner) {
        endContest(api, thread);
      } else {
        // سؤال جديد
        setTimeout(() => askQuestion(api, thread), 1500);
      }
    }
  }
};

// التحقق من اللاعبين بعد 10 ثواني
function checkPlayers(api, thread) {
  const list = waitingPlayers[thread] || [];
  const count = list.length;

  if (count < 3) {
    api.sendMessage("😒 أقل من 3 مشاركين… تم إلغاء المسابقة.", thread);
    cleanup(thread);
    return;
  }

  const maxPlayers = Math.min(count, 10);
  players[thread] = list.slice(0, maxPlayers);
  scores[thread] = {};
  players[thread].forEach(id => (scores[thread][id] = 0));
  acceptingPlayers[thread] = false;

  // إعلان اللاعبين
  api.getUserInfo(players[thread], (err, info) => {
    let namesList = "";
    players[thread].forEach(id => {
      const name = info?.[id]?.name || "مشارك";
      namesList += `❀-『${name}』:\n`;
    });

    const msg =
      "⛩️🔥 مــــســـابـــقــــة 🔥⛩️\n" +
      "⛩️🔥 رســــمــــيــــــــة 🔥⛩️\n\n" +
      "*❀✦═══ •『🔴』• ═══✦❀*\n" +
      "(اسم الاعضاء المشاركين)\n" +
      namesList +
      "♡ ♡ ♡\n\n" +
      "*❀✦═══ •『🔴』• ═══✦❀*\n\n" +
      "🔴- الـحـكـم : ✦『البوت』✦\n" +
      "🔵- الـفـوز عـلى : 『20』 نقطة㊗️\n" +
      "⚫- الـنـوع : 『مـنـــــو؏』💙❄";

    api.sendMessage(msg, thread, () => {
      setTimeout(() => askQuestion(api, thread), 2000);
    });
  });
}

// اختيار نوع سؤال عشوائي وإرساله
function askQuestion(api, thread) {
  if (!contestOn[thread]) return;
  answeredThisRound[thread] = [];

  const types = ["flagName", "emojiName", "emojiBring", "flagBring", "split", "join", "math", "anime"];
  const type = types[Math.floor(Math.random() * types.length)];

  let qText = "";
  let data = { type };

  switch (type) {
    case "flagName": {
      const f = flags[Math.floor(Math.random() * flags.length)];
      data.flag = f;
      qText = `🇺🇳 سؤال أعلام:\n${f.emoji} ما اسم هذه الدولة؟`;
      break;
    }
    case "emojiName": {
      const e = emojiQuestions[Math.floor(Math.random() * emojiQuestions.length)];
      data.emoji = e;
      qText = `😊 سؤال إيموجي:\n${e.desc}… ما هو الإيموجي الصحيح؟`;
      break;
    }
    case "emojiBring": {
      const e = emojiQuestions[Math.floor(Math.random() * emojiQuestions.length)];
      data.emoji = e;
      qText = `😏 سؤال إحضار إيموجي:\nهاتولي إيموجي يعبر عن: ${e.desc}`;
      break;
    }
    case "flagBring": {
      const f = flags[Math.floor(Math.random() * flags.length)];
      data.flag = f;
      qText = `🚩 سؤال إحضار علم:\nهاتولي علم: ${f.name}`;
      break;
    }
    case "split": {
      const w = words[Math.floor(Math.random() * words.length)];
      data.word = w;
      qText = `🧩 سؤال تفكيك:\nفكك كلمة: (${w.word})\nمثال: ب ر م ج ة`;
      break;
    }
    case "join": {
      const w = words[Math.floor(Math.random() * words.length)];
      data.word = w;
      qText = `🧩 سؤال تركيب:\nركّب الكلمة من هذه الحروف:\n${w.letters.join(" - ")}`;
      break;
    }
    case "math": {
      const m = mathQuestions[Math.floor(Math.random() * mathQuestions.length)];
      data.math = m;
      qText = `🧮 سؤال حساب:\n${m.q}`;
      break;
    }
    case "anime": {
      const a = animeQuestions[Math.floor(Math.random() * animeQuestions.length)];
      data.anime = a;
      qText = `🎌 سؤال أنمي:\n${a.hint}\n(اكتب اسم الشخصية)`;
      break;
    }
  }

  currentQuestion[thread] = data;
  api.sendMessage(`❓ سؤال جديد:\n${qText}\n\nأسرع 3 إجابات صحيحة: 3 – 2 – 1 نقاط 😤🔥`, thread);
}

// التحقق من صحة الإجابة حسب نوع السؤال
function checkAnswer(cq, msg) {
  msg = msg.trim();

  switch (cq.type) {
    case "flagName":
      return normalize(msg) === normalize(cq.flag.name);
    case "emojiName":
      return msg === cq.emoji.answer;
    case "emojiBring":
      return msg === cq.emoji.answer;
    case "flagBring":
      return msg === cq.flag.emoji;
    case "split": {
      const expected = cq.word.letters.join(" ");
      return normalize(msg) === normalize(expected);
    }
    case "join":
      return normalize(msg) === normalize(cq.word.word);
    case "math":
      return msg === cq.math.a;
    case "anime":
      return normalize(msg) === normalize(cq.anime.name);
    default:
      return false;
  }
}

// فحص إذا أحد وصل للهدف
function getWinnerReachedTarget(scoreObj, target) {
  for (const id in scoreObj) {
    if (scoreObj[id] >= target) return id;
  }
  return null;
}

// إنهاء المسابقة وإعلان الفائزين + لوحة الشرف
function endContest(api, thread) {
  const scoreEntries = Object.entries(scores[thread] || {});
  if (scoreEntries.length === 0) {
    api.sendMessage("ما في نقاط… تم إنهاء المسابقة.", thread);
    cleanup(thread);
    return;
  }

  scoreEntries.sort((a, b) => b[1] - a[1]); // ترتيب تنازلي

  const top1 = scoreEntries[0];
  const top2 = scoreEntries[1];
  const top3 = scoreEntries[2];

  const winnersIds = scoreEntries.slice(0, 3).map(e => e[0]);

  api.getUserInfo(winnersIds, (err, info) => {
    const getName = id => info?.[id]?.name || "مشارك";
    const getPic = id => info?.[id]?.profileUrl || "لا يوجد رابط متاح";

    const w1 = top1 ? { id: top1[0], score: top1[1], name: getName(top1[0]), pic: getPic(top1[0]) } : null;
    const w2 = top2 ? { id: top2[0], score: top2[1], name: getName(top2[0]), pic: getPic(top2[0]) } : null;
    const w3 = top3 ? { id: top3[0], score: top3[1], name: getName(top3[0]), pic: getPic(top3[0]) } : null;

    // تحديث لوحة الشرف
    [w1, w2, w3].forEach(w => {
      if (!w) return;
      if (!hallOfFame[w.id]) {
        hallOfFame[w.id] = { name: w.name, wins: 0, pic: w.pic };
      }
      hallOfFame[w.id].wins++;
    });

    let resultMsg =
      "🏅 الـــــفــــــــائـــــــــزون 🏅 \n" +
      "≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈\n\n";

    if (w1) {
      resultMsg +=
        `🥇 الـــفـائـز الأول :\n` +
        `✦『${w1.name}』✦\n` +
        `📸 صورة البروفايل: ${w1.pic}\n` +
        `🔢 عدد نقاطه: ${w1.score}\n\n`;
    }
    if (w2) {
      resultMsg +=
        `🥈 الــفـائــز الثاني :\n` +
        `✦『${w2.name}』✦\n` +
        `📸 صورة البروفايل: ${w2.pic}\n` +
        `🔢 عدد نقاطه: ${w2.score}\n\n`;
    }
    if (w3) {
      resultMsg +=
        `🥉 الـفـائـز الـثـالث :\n` +
        `✦『${w3.name}』✦\n` +
        `📸 صورة البروفايل: ${w3.pic}\n` +
        `🔢 عدد نقاطه: ${w3.score}\n\n`;
    }

    resultMsg += "🎉🎊💃🏻 مبرووووك للفائزين 💃🏻🎊🎉";

    api.sendMessage(resultMsg, thread, () => {
      // إرسال لوحة الشرف بعد الفائزين
      setTimeout(() => showHallOfFame(api, thread), 2000);
    });

    cleanup(thread);
  });
}

// عرض لوحة الشرف
function showHallOfFame(api, thread) {
  if (!hallOfFame || Object.keys(hallOfFame).length === 0) {
    return api.sendMessage("لا يوجد فائزين في لوحة الشرف بعد 😢", thread);
  }

  const sorted = Object.entries(hallOfFame).sort((a, b) => b[1].wins - a[1].wins);

  let msg = "🎉🎊💃🏻 لوحة شرف لارا 💃🏻🎊🎉\n\n";

  sorted.forEach(([id, data], i) => {
    msg +=
      `🥇 المركز ${i + 1}:\n` +
      `الاسم: ${data.name}\n` +
      `عدد الفوز: ${data.wins}\n` +
      `الصورة: ${data.pic}\n\n`;
  });

  api.sendMessage(msg, thread);
}

// تنظيف بيانات المسابقة
function cleanup(thread) {
  delete contestOn[thread];
  delete acceptingPlayers[thread];
  delete waitingPlayers[thread];
  delete players[thread];
  delete scores[thread];
  delete currentQuestion[thread];
  delete answeredThisRound[thread];
}

// تبسيط النص للمقارنة
function normalize(str) {
  return (str || "")
    .toString()
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
      }
