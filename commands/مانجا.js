module.exports = {
  config: {
    name: "مانجا",
    aliases: ["manga"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "اقتراح مانجا",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const list = ["Attack on Titan", "Tokyo Ghoul", "One Piece", "Naruto", "Chainsaw Man"];
    const pick = list[Math.floor(Math.random() * list.length)];

    api.sendMessage("📚 مانجا مقترحة:\n" + pick, event.threadID);
  }
};
