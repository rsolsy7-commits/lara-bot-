module.exports = {
  config: {
    name: "شارع",
    aliases: ["street"],
    version: "1.1",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "رمي شخص بالشارع (مزحة) مع منشن",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص اللي بدك ترميه بالشارع.", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";

    api.sendMessage({
      body: `🚧 @${name} تم رميك بالشارع… ديري بالك من السيارات 😂`,
      mentions: [{ tag: name, id: uid }]
    }, event.threadID);
  }
};
