module.exports = {
  config: {
    name: "قبر",
    aliases: ["grave"],
    version: "1.1",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "دفن شخص داخل القبر (مزحة) مع منشن",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص اللي بدك تدفنيه (مزحة).", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";

    api.sendMessage({
      body: `⚰️ @${name} تم دفنك داخل القبر… الله يرحمك 😂`,
      mentions: [{ tag: name, id: uid }]
    }, event.threadID);
  }
};
