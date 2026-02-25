module.exports = {
  config: {
    name: "شاذ",
    aliases: ["gay"],
    version: "1.2",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "مزحة الشذوذ مع منشن",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص اللي بدك تعملي عليه المزحة.", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";

    api.sendMessage({
      body: `🌈 @${name} نسبة الشذوذ عندك 99% 😂`,
      mentions: [{ tag: name, id: uid }]
    }, event.threadID);
  }
};
