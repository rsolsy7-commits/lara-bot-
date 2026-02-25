module.exports = {
  config: {
    name: "حضن",
    aliases: ["hug", "عناق"],
    version: "1.2",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "حضن مع منشن",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص اللي بدك تحضنيه.", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";

    api.sendMessage({
      body: `🤗 @${name} تعي خدي حضن دافي 💞`,
      mentions: [{ tag: name, id: uid }]
    }, event.threadID);
  }
};
