const owner = "61562975344669";
let banned = {};

module.exports = {
  config: {
    name: "حظر",
    aliases: ["ban"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "ADMIN",
    description: "حظر شخص من استخدام البوت",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    if (event.senderID !== owner && !event.isGroupAdmin)
      return api.sendMessage("❌ للمالكة أو الأدمن فقط.", event.threadID);

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص اللي بدك تحظريه.", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";

    banned[uid] = true;

    api.sendMessage({
      body: `⛔ @${name} تم حظرك من استخدام البوت.`,
      mentions: [{ tag: name, id: uid }]
    }, event.threadID);
  }
};
