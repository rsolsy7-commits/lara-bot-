module.exports = {
  config: {
    name: "اكس-او",
    aliases: ["xo"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "لعبة XO بسيطة",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    api.sendMessage("❌⭕ لعبة XO قيد التطوير.", event.threadID);
  }
};
