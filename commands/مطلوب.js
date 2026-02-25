module.exports = {
  config: {
    name: "مطلوب",
    aliases: ["wanted", "mostalob"],
    version: "1.2",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "إعلان مطلوب مع منشن",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص المطلوب.", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";

    api.sendMessage({
      body: `📢 @${name} مطلوب للعدالة!\n💰 المكافأة: 1,000,000$`,
      mentions: [{ tag: name, id: uid }]
    }, event.threadID);
  }
};
