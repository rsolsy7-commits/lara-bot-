module.exports = {
  config: {
    name: "شخصيتي",
    aliases: [],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "تحليل شخصية بسيط",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const traits = [
      "هادئة وذكية",
      "مرحة ومجنونة",
      "غامضة وجذابة",
      "قوية وعنيدة",
      "لطيفة وحنونة"
    ];
    const pick = traits[Math.floor(Math.random() * traits.length)];

    api.sendMessage("💫 شخصيتك:\n" + pick, event.threadID);
  }
};
