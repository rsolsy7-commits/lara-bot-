module.exports = {
  config: {
    name: "ناروتو",
    aliases: ["naruto_storm"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "شخصية ناروتو عشوائية",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const list = ["ناروتو", "ساسكي", "ساكورا", "كاكاشي", "إيتاتشي"];
    const pick = list[Math.floor(Math.random() * list.length)];

    api.sendMessage("🍥 شخصيتك من ناروتو:\n" + pick, event.threadID);
  }
};
