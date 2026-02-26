module.exports = {
  config: {
    name: "طرد",
    aliases: ["kick"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "ADMIN",
    description: "طرد شخص من المجموعة (للأدمن والمالكة فقط)",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    const owner = "615629753446({ api, event }) {

    const owner = "61562975344669";

    // التحقق من الصلاحيات
    if (event.senderID !== owner && !event.isGroupAdmin)
      return api.sendMessage("❌ هذا الأمر مخصص للمالكة أو الأدمن فقط.", event.threadID);

    // لازم يكون في رد
    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص اللي بدك تطرديه.", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";

    api.removeUserFromGroup(uid, event.threadID, (err) => {
      if (err) return api.sendMessage("❌ ما قدرت أطرده.", event.threadID);

      api.sendMessage({
        body: `🚪 @${name} تم طردك من المجموعة.`,
        mentions: [{ tag: name, id: uid }]
      }, event.threadID);
    });
  }
};
