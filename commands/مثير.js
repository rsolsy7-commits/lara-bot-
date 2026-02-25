module.exports = {
  config: {
    name: "مثير",
    aliases: ["hot"],
    version: "1.1",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "نسبة الإثارة (مزحة) مع منشن",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص.", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";
    const percent = Math.floor(Math.random() * 100);

    api.sendMessage({
      body: `🔥 @${name} نسبة الإثارة عندك: ${percent}% 😂`,
      mentions: [{ tag: name, id: uid }]
    }, event.threadID);
  }
};
