const owner = "61562975344669";

module.exports = {
  config: {
    name: "تنزيل-ادمن",
    aliases: ["demote"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "ADMIN",
    description: "تنزيل شخص من الأدمن",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    if (event.senderID !== owner)
      return api.sendMessage("❌ هذا الأمر للمالكة فقط.", event.threadID);

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص اللي بدك تنزلينه.", event.threadID);

    const uid = event.messageReply.senderID;

    api.changeAdminStatus(event.threadID, uid, false, (err) => {
      if (err) return api.sendMessage("❌ ما قدرت أنزله.", event.threadID);

      api.sendMessage("📉 تم تنزيله من الأدمن.", event.threadID);
    });
  }
};
