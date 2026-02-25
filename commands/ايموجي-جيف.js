module.exports = {
  config: {
    name: "ايموجي-جيف",
    aliases: ["emoji-gif"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "إرسال ايموجي جيف عشوائي",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const list = ["😂", "😹", "😈", "🥺", "😎"];
    const pick = list[Math.floor(Math.random() * list.length)];

    api.sendMessage("🎭 ايموجي جيف:\n" + pick, event.threadID);
  }
};
