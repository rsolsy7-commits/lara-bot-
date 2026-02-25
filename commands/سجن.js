module.exports = {
  config: {
    name: "سجن",
    aliases: ["jail"],
    version: "1.1",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "سجن شخص مع منشن",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص اللي بدك تسجنيه.", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";

    api.sendMessage({
      body: `🚔 @${name} تم سجنك لمدة 24 ساعة 😂`,
      mentions: [{ tag: name, id: uid }]
    }, event.threadID);
  }
};
