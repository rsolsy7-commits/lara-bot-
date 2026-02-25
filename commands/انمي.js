module.exports = {
  config: {
    name: "انمي",
    aliases: ["اقتراح"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "اقتراح أنمي عشوائي",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const list = ["Attack on Titan", "Naruto", "One Piece", "Death Note", "Jujutsu Kaisen"];
    const pick = list[Math.floor(Math.random() * list.length)];

    api.sendMessage("🎌 اقتراح أنمي:\n" + pick, event.threadID);
  }
};
