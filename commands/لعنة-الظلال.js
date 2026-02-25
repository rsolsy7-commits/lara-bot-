module.exports = {
  config: {
    name: "لعنة-الظلال",
    aliases: [],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "لعبة رعب بسيطة",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    api.sendMessage("🌑 الظلال تقترب منك… هل تهربين أم تواجهين؟", event.threadID);
  }
};
