module.exports = {
  config: {
    name: "قبح",
    aliases: ["ugly"],
    version: "1.1",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "نسبة القبح (مزحة) مع منشن",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص.", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";
    const percent = Math.floor(Math.random() * 100);

    api.sendMessage({
      body: `🤢 @${name} نسبة القبح عندك: ${percent}% 😂`,
      mentions: [{ tag: name, id: uid }]
    }, event.threadID);
  }
};
