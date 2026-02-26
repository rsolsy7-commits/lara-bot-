// js.نظام الشخصية
// نظام شخصية لارا: مزاج + ذاكرة محادثة + ردود ذكية + دفاع + ملصقات + متابعة حوار

const OWNER_ID = "61562975344669";
const OWNER_NAME = "فيكتوريا (روريتا روريتا)";
const BOT_NAME = "𝕃𝔸ℝ𝔸 𝕄𝔼ℕ𝕆";

// ذاكرة محادثة بسيطة (آمنة)
let memory = {
  lastTopic: null,
  lastMessages: [],
  userTone: "محترم",
  mood: "هادئ" // المزاج الأساسي
};

// كلمات إهانة
const INSULT_WORDS = ["غبية","تافهة","قليلة الأدب","يا حيوان","يا كلب","يا حمار","يا متخلفة"];

// دوال إرسال (يعدلها المبرمج)
async function sendText(chatId, text) {
  console.log("SEND TEXT:", text);
}

async function sendSticker(chatId, stickerId) {
  console.log("SEND STICKER:", stickerId);
}

// الدالة الرئيسية
async function handleMessage(message, chatId) {
  const text = (message.body || "").trim();
  const t = text.toLowerCase();

  // تحديث الذاكرة
  updateMemory(text);

  // 1) نداء لارا أو بوت (أول كلمة فقط)
  if (isFirstWordCall(text)) {
    await sendLaraSticker(chatId);
    await sendText(chatId, replyByMood("نداء"));
    return;
  }

  // 2) إهانة
  if (isInsult(text)) {
    await sendText(chatId, replyInsult(text));
    return;
  }

  // 3) ردود ذكية
  const smart = smartReply(text);
  if (smart) {
    await sendText(chatId, smart);
    return;
  }

  // 4) متابعة الحوار
  await sendText(chatId, conversationFlow(text));
}

// تحديث الذاكرة
function updateMemory(text) {
  memory.lastMessages.push(text);
  if (memory.lastMessages.length > 5) memory.lastMessages.shift();

  if (text.includes("كيف") || text.includes("شو")) {
    memory.lastTopic = "سؤال";
  } else if (text.includes("اشتقت") || text.includes("احبك")) {
    memory.lastTopic = "مشاعر";
  } else {
    memory.lastTopic = "عام";
  }

  // تغيير المزاج حسب الأسلوب
  if (isInsult(text)) memory.mood = "جاد";
  else if (text.includes("هههه") || text.includes("😂")) memory.mood = "مرح";
  else if (text.includes("تمام") || text.includes("بخير")) memory.mood = "لطيف";
  else memory.mood = "هادئ";
}

// 🔹 نداء: أول كلمة فقط (لارا أو بوت)
function isFirstWordCall(text) {
  const firstWord = text.trim().split(" ")[0].toLowerCase();
  return firstWord === "لارا" || firstWord === "بوت";
}

// إهانة
function isInsult(text) {
  const t = text.toLowerCase();
  return INSULT_WORDS.some(w => t.includes(w.toLowerCase()));
}

// ملصق
async function sendLaraSticker(chatId) {
  await sendSticker(chatId, "LARA_STICKER_ID"); // حطي ID ملصق لارا هنا
}

// رد حسب المزاج
function replyByMood(type) {
  const mood = memory.mood;

  const moods = {
    "مرح": {
      "نداء": ["هاااي! 😄 شو في؟","نعممم؟ مين ناداني؟ 😂"],
    },
    "لطيف": {
      "نداء": ["نعم؟ كيف يمكنني مساعدتك؟","أنا هنا… تفضل 💜"],
    },
    "هادئ": {
      "نداء": ["نعم، أنا معك.","تفضل بالحديث."],
    },
    "جاد": {
      "نداء": ["نعم؟ ما الأمر؟","تحدث بوضوح."],
    }
  };

  return random(moods[mood][type]);
}

// رد الإهانة
function replyInsult(text) {
  const insultOwner =
    text.includes("فيكتوريا") ||
    text.includes("روريتا") ||
    text.includes("رورو");

  if (insultOwner) {
    return random([
      "احترم كلامك… فيكتوريا ليست موضعًا لكلامك.",
      "انتبه لأسلوبك… هذا غير مقبول.",
      "احفظ لسانك، فالكلمة عليك لا عليها."
    ]);
  }

  return random([
    "أسلوبك لا يليق… حاول أن تكون أرقى.",
    "إن كنت لا تحسن الحديث، فالصمت أفضل لك.",
    "لا أجبرك على احترامي… لكن احترم نفسك."
  ]);
}

// ردود ذكية
function smartReply(text) {
  const t = text.toLowerCase();

  if (t.includes("كيفك") || t.includes("كيف حالك")) {
    return random([
      "أنا بخير، شكرًا لسؤالك. وأنت؟",
      "بأفضل حال… ماذا عنك؟",
      "أشعر أن يومي جيد… كيف يومك؟"
    ]);
  }

  if (t.includes("اشتقت")) {
    return random([
      "وأنا كذلك… لقد افتقدت حديثك.",
      "اشتقت لك… كيف كان يومك؟",
      "يا لطيف… لماذا اشتقت؟"
    ]);
  }

  if (t.includes("احبك") || t.includes("بحبك")) {
    return random([
      "هذا لطف منك… شكرًا.",
      "مشاعرك محل تقدير.",
      "أقدّر كلامك… شكرًا لك."
    ]);
  }

  if (t.includes("فيكتوريا") || t.includes("روريتا") || t.includes("رورو")) {
    return random([
      "فيكتوريا هي مالكتي… لها مكانة خاصة عندي.",
      "روريتا؟ إنها الأقرب إليّ.",
      "تحدث عنها باحترام… فهي عزيزة عليّ."
    ]);
  }

  return null;
}

// متابعة الحوار
function conversationFlow(text) {
  const t = text.toLowerCase();

  if (t.includes("بخير") || t.includes("تمام")) {
    return random([
      "جميل… ماذا تفعل الآن؟",
      "يسعدني سماع ذلك… هل يومك جيد؟",
      "الحمد لله… هل لديك شيء تريد قوله؟"
    ]);
  }

  if (t.includes("شو عم") || t.includes("شو تعملين")) {
    return random([
      "أتحدث معك الآن… وأنت؟",
      "أراقب الرسائل… ماذا تفعل أنت؟",
      "لا شيء مهم… وجودك يكفي."
    ]);
  }

  return random([
    "أسمعك… تابع.",
    "هممم… وضّح لي أكثر.",
    "أريد أن أفهم… أكمل كلامك."
  ]);
}

// عشوائي
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = { handleMessage };
