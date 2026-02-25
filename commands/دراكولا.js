module.exports = {
  config: {
    name: "دراكولا",
    aliases: ["مصاص"],
    version: "1.1",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "مص دم شخص (مزحة) مع منشن",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص اللي بدك تمصين دمه (مزحة).", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";

    api.sendMessage({
      body: `🧛‍♂️ @${name} تم مص دمك… طعمه لذيذ 😂`,
      mentions: [{ tag: name, id: uid }]
    }, event.threadID);
  }
};
