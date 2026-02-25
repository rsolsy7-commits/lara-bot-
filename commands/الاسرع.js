module.exports = {
  config: {
    name: "الاسرع",
    aliases: [],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "لعبة من الأسرع",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const words = ["قمر", "شمس", "بحر", "سماء", "ورد", "ليل"];
    const pick = words[Math.floor(Math.random() * words.length)];

    api.sendMessage("⏳ اكتبِ الكلمة التالية بسرعة:\n" + pick, event.threadID);
  }
};
