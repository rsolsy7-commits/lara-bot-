module.exports = {
  config: {
    name: "قمامة",
    aliases: ["🚮"],
    version: "1.2",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "مزحة قمامة مع منشن",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص اللي بدك تعملي عليه المزحة.", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";

    api.sendMessage({
      body: `🚮 @${name} تم رميك بالقمامة… بمزح 😂`,
      mentions: [{ tag: name, id: uid }]
    }, event.threadID);
  }
};
