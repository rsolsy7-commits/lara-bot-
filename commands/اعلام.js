module.exports = {
  config: {
    name: "اعلام",
    aliases: [],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "لعبة تخمين العلم",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const flags = ["🇸🇾", "🇯🇵", "🇫🇷", "🇧🇷", "🇪🇬"];
    const pick = flags[Math.floor(Math.random() * flags.length)];

    api.sendMessage("🌍 خمني العلم:\n" + pick, event.threadID);
  }
};
