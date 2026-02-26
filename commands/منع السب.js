const owner = "61562975344669";

// منع السب
const badWords = [
  // عربي عامي
  "كلب", "حمار", "تافه", "قذر", "وسخ", "قحبة", "شرموطة", "منيك",
  "منيوك", "عرص", "ابن الكلب", "ابن الحمار", "ابن الوسخة", "ابن القحبة",
  "متخلف", "غبي", "سافل", "حقير", "مقرف", "زبالة", "نذل", "مريض",
  "خرا", "قرف", "وساخة", "قواد", "ديوث", "شرموط", "مخنث",

  // لهجات عربية
  "يا كلب", "يا حمار", "يا غبي", "يا تافه", "يا وسخ", "يا قذر",
  "يا ابن الكلب", "يا ابن الحمار", "يا ابن القحبة", "يا ابن الوسخة",

  // إنجليزي
  "fuck", "shit", "bitch", "asshole", "bastard", "stupid",
  "idiot", "moron", "dumb", "retard", "loser", "trash",
  "motherfucker", "fucker", "pussy", "slut", "whore"
];

let blockBad = {}; // حالة منع السب لكل قروب

module.exports = {
  config: {
    name: "منع-سب",
    aliases: ["blockswear"],
    version: "3.0",
    author: "روريتا",
    prefix: true,
    category: "ADMIN",
    description: "منع السب والشتم داخل القروب",
    guide: "{pn} تشغيل | ايقاف"
  },

  // تشغيل وإيقاف النظام
  onStart: async function({ api, event, args }) {

    const cmd = args[0];
    const thread = event.threadID;

    if (event.senderID !== owner && !event.isGroupAdmin)
      return api.sendMessage("❌ هذا الأمر للمالكة أو الأدمن فقط.", thread);

    if (!cmd)
      return api.sendMessage("⚙️ اكتبي: تشغيل أو ايقاف", thread);

    if (cmd === "تشغيل") {
      blockBad[thread] = true;
      return api.sendMessage("🚫 تم تفعيل منع السب والشتم.", thread);
    }

    if (cmd === "ايقاف") {
      delete blockBad[thread];
      return api.sendMessage("✔️ تم إيقاف منع السب.", thread);
    }

    return api.sendMessage("⚙️ الخيارات: تشغيل / ايقاف", thread);
  },

  // مراقبة الرسائل
  onChat: async function({ api, event, threadsData }) {

    const thread = event.threadID;

    // إذا النظام غير شغال → تجاهل
    if (!blockBad[thread]) return;

    // تجاهل رسائل البوت
    if (event.senderID === api.getCurrentUserID()) return;

    // تجاهل المالكة
    if (event.senderID === owner) return;

    // جلب معلومات القروب
    const info = await threadsData.get(thread);

    // تجاهل الأدمن
    const isAdmin = info.adminIDs.some(a => a.id === event.senderID);
    if (isAdmin) return;

    // فحص الكلمات المسيئة
    const msg = event.body?.toLowerCase() || "";

    for (const word of badWords) {
      if (msg.includes(word)) {

        // حذف الرسالة
        api.unsendMessage(event.messageID);

        // تحذير
        api.sendMessage("⚠️ ممنوع السب داخل القروب.", thread);

        break;
      }
    }
  }
};
