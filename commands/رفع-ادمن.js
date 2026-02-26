const owner = "61562975344669";

module.exports = {
  config: {
    name: "رفع-ادمن",
    aliases: ["promote"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "ADMIN",
    description: "رفع شخص ليصبح أدمن بالقروب",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    if (event.senderID !== owner)
      return api.sendMessage("❌ هذا الأمر للمالكة فقط.", event.threadID);

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص اللي بدك ترفعينه.", event.threadID);

    const uid = event.messageReply.senderID;

    api.changeAdminStatus(event.threadID, uid, true, (err) => {
      if (err) return api.sendMessage("❌ ما قدرت أرفعه أدمن.", event.threadID);

      api.sendMessage("👑 تم رفعه أدمن.", event.threadID);
    });
  }
};
