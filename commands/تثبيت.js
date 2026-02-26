module.exports = {
  config: {
    name: "تثبيت",
    aliases: ["pin"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "ADMIN",
    description: "تثبيت رسالة",
    guide: "{pn} (رد على الرسالة)"
  },

  onStart: async function({ api, event }) {

    const owner = "61562975344669";

    if (event.senderID !== owner && !event.isGroupAdmin)
      return api.sendMessage("❌ هذا الأمر مخصص للمالكة أو الأدمن فقط.", event.threadID);

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الرسالة اللي بدك تثبيتيها.", event.threadID);

    api.pinMessage(event.threadID, event.messageReply.messageID, (err) => {
      if (err) return api.sendMessage("❌ ما قدرت أثبت الرسالة.", event.threadID);

      api.sendMessage("📌 تم تثبيت الرسالة.", event.threadID);
    });
  }
};
