module.exports = {
  config: {
    name: "لعبة-ايموجي",
    aliases: ["emoji-game"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "لعبة تخمين الايموجي",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const list = ["🍎", "🐱", "🚗", "🌙", "🔥"];
    const pick = list[Math.floor(Math.random() * list.length)];

    api.sendMessage("❓ خمني الايموجي:\n" + pick, event.threadID);
  }
};
