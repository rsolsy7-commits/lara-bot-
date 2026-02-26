module.exports = {
  config: {
    name: "حذف",
    aliases: ["delete"],
    version: "4.0",
    author: "Victoria",
    prefix: true,
    category: "TOOLS",
    description: "حذف رسالة البوت فقط عند الرد عليها",
    guide: "{pn} (بالرد على رسالة البوت)"
  },

  onStart: async function({ api, event }) {

    const thread = event.threadID;

    // لازم يكون الأمر رد على رسالة
    if (!event.messageReply)
      return api.sendMessage("⚠️ لازم ترد على رسالة حتى أحذفها.", thread, event.messageID);

    const target = event.messageReply;

    // إذا الرسالة مو رسالة البوت → ممنوع
    if (target.senderID !== api.getCurrentUserID()) {
      return api.sendMessage("لا احذف رساله لم ارسلها 🐸☝🏻", thread, event.messageID);
    }

    // حذف رسالة البوت
    api.unsendMessage(target.messageID, (err) => {
      if (err) {
        return api.sendMessage("❌ ما قدرت أحذف… يمكن في مشكلة.", thread, event.messageID);
      } else {
        return api.sendMessage("✔️ تم حذف رسالة البوت.", thread, event.messageID);
      }
    });
  }
};
