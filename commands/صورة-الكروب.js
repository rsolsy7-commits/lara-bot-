const owner = "61562975344669";

module.exports = {
  config: {
    name: "صورة-القروب",
    aliases: ["setpic"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "ADMIN",
    description: "تغيير صورة المجموعة",
    guide: "{pn} (ارسل صورة مع الأمر)"
  },

  onStart: async function({ api, event }) {

    if (event.senderID !== owner && !event.isGroupAdmin)
      return api.sendMessage("❌ هذا الأمر للمالكة أو الأدمن فقط.", event.threadID);

    if (!event.messageReply || !event.messageReply.attachments[0])
      return api.sendMessage("📎 ردي على صورة لتعيينها كصورة القروب.", event.threadID);

    const img = event.messageReply.attachments[0].url;

    api.changeGroupImage(img, event.threadID, (err) => {
      if (err) return api.sendMessage("❌ ما قدرت أغير الصورة.", event.threadID);
      api.sendMessage("🖼️ تم تغيير صورة القروب.", event.threadID);
    });
  }
};
