const owner = "61562975344669";

module.exports = {
  config: {
    name: "معلومات-عضو",
    aliases: ["userinfo"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "ADMIN",
    description: "عرض معلومات عضو",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص.", event.threadID);

    const uid = event.messageReply.senderID;

    api.getUserInfo(uid, (err, info) => {
      if (err) return api.sendMessage("❌ خطأ.", event.threadID);

      const user = info[uid];

      api.sendMessage(
        `🪪 معلومات العضو:\n\n` +
        `• الاسم: ${user.name}\n` +
        `• الجنس: ${user.gender}\n` +
        `• آيدي: ${uid}`,
        event.threadID
      );
    });
  }
};
