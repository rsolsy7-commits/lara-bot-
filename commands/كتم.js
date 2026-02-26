let muted = {};

module.exports = {
  config: {
    name: "كتم",
    aliases: ["mute"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "ADMIN",
    description: "كتم شخص داخل المجموعة",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    const owner = "61562975344669";

    if (event.senderID !== owner && !event.isGroupAdmin)
      return api.sendMessage("❌ هذا الأمر مخصص للمالكة أو الأدمن فقط.", event.threadID);

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص اللي بدك تكتيميه.", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";

    muted[uid] = true;

    api.sendMessage({
      body: `🔇 @${name} تم كتمك.`,
      mentions: [{ tag: name, id: uid }]
    }, event.threadID);
  }
};
