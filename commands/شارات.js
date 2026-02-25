module.exports = {
  config: {
    name: "شارات",
    aliases: [],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "يعطيك شارة عشوائية",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const list = ["🔥", "💎", "⚡", "🌙", "⭐"];
    const pick = list[Math.floor(Math.random() * list.length)];

    api.sendMessage("🎖️ شارتك:\n" + pick, event.threadID);
  }
};
