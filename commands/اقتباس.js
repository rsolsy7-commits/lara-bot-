module.exports = {
  config: {
    name: "اقتباس",
    aliases: ["quote"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "اقتباس عشوائي",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const list = [
      "كن قويًا لأجلك.",
      "لا شيء يستحق أن تفقد سلامك.",
      "ابتسم… فالله يدبر أمورك.",
      "كل شيء سيمر."
    ];
    const pick = list[Math.floor(Math.random() * list.length)];

    api.sendMessage("💬 اقتباس:\n" + pick, event.threadID);
  }
};
