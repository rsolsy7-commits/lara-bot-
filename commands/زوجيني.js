let married = {};

module.exports = {
  config: {
    name: "زوجيني",
    aliases: ["زوجة", "waifu"],
    version: "2.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "تزويج شخص مع منشن وتسجيل الزواج",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص اللي بدك تزوجيه.", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";
    const user = event.senderID;

    // تسجيل الزواج
    married[user] = uid;

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
      body: `💞 @${name} تم الزواج رسميًا!\nزوجتك هي:\n${pick}`,
      mentions: [{ tag: name, id: uid }]
    }, event.threadID);
  }
};
