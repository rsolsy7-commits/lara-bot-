module.exports = {
  config: {
    name: "زوجيني",
    aliases: ["زوجة", "waifu"],
    version: "1.3",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "يعطي زوجة أنمي مع منشن",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص اللي بدك تزوجيه.", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";

    const list = [
      "❤️ هيناتا",
      "❤️ ريم",
      "❤️ ميكاسا",
      "❤️ نامي",
      "❤️ زيرو تو",
      "❤️ ساكورا"
    ];

    const pick = list[Math.floor(Math.random() * list.length)];

    api.sendMessage({
      body: `💞 @${name} زوجتك هي:\n${pick}`,
      mentions: [{ tag: name, id: uid }]
    }, event.threadID);
  }
};
