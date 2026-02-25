module.exports = {
  config: {
    name: "ضرب",
    aliases: ["hit"],
    version: "1.1",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "ضرب شخص (مزحة) مع منشن",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص اللي بدك تضربيه.", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";

    api.sendMessage({
      body: `👊 @${name} خدي كف محترم 😂`,
      mentions: [{ tag: name, id: uid }]
    }, event.threadID);
  }
};
