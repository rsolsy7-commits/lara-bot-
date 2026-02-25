module.exports = {
  config: {
    name: "سلاح",
    aliases: [],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "يعطيك سلاح عشوائي",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const guns = ["🔫 مسدس", "🗡️ سيف", "🏹 قوس", "🪓 فأس"];
    const pick = guns[Math.floor(Math.random() * guns.length)];

    api.sendMessage("⚔️ سلاحك:\n" + pick, event.threadID);
  }
};
