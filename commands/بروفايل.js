module.exports = {
  config: {
    name: "بروفايل",
    aliases: ["profile"],
    version: "1.1",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "عرض بروفايل شخص مع منشن",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص لعرض بروفايله.", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";

    api.sendMessage({
      body: `🪪 بروفايل @${name}\nمعرفه: ${uid}`,
      mentions: [{ tag: name, id: uid }]
    }, event.threadID);
  }
};
