module.exports = {
  config: {
    name: "استيكر",
    aliases: ["sticker", "ستيكر"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "لعبة إرسال ستيكر عشوائي",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const stickers = ["😹", "🤣", "😈", "🥺", "😎"];
    const pick = stickers[Math.floor(Math.random() * stickers.length)];

    api.sendMessage("🎭 ستيكر عشوائي:\n" + pick, event.threadID);
  }
};
