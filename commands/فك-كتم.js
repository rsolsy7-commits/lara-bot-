let muted = {};

module.exports = {
  config: {
    name: "فك-كتم",
    aliases: ["unmute"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "ADMIN",
    description: "فك الكتم عن شخص",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    const owner = "61562975344669";

    if (event.senderID !== owner && !event.isGroupAdmin)
      return api.sendMessage("❌ هذا الأمر مخصص للمالكة أو الأدمن فقط.", event.threadID);

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص اللي بدك تفكين كتمه.", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";

    delete muted[uid];

    api.sendMessage({
      body: `🔊 @${name} تم فك الكتم عنك.`,
      mentions: [{ tag: name, id: uid }]
    }, event.threadID);
  }
};
