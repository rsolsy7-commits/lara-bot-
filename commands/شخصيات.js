module.exports = {
  config: {
    name: "شخصيات",
    aliases: [],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "يعطيك شخصية عشوائية",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const list = [
      "ناروتو",
      "ساسكي",
      "لوفي",
      "زورو",
      "غوكو",
      "إيتاتشي",
      "ميكاسا"
    ];
    const pick = list[Math.floor(Math.random() * list.length)];
    api.sendMessage("🎭 شخصيتك هي:\n" + pick, event.threadID);
  }
};
