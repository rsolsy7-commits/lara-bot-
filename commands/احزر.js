module.exports = {
  config: {
    name: "احزر",
    aliases: ["guess"],
    version: "1.1",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "لعبة احزر مع منشن",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص اللي بدك تعملي معه اللعبة.", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";

    const list = ["🍎", "🐱", "🚗", "🌙", "🔥"];
    const pick = list[Math.floor(Math.random() * list.length)];

    api.sendMessage({
      body: `❓ @${name} احزر هذا الايموجي:\n${pick}`,
      mentions: [{ tag: name, id: uid }]
    }, event.threadID);
  }
};
