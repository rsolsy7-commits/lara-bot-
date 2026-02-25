module.exports = {
  config: {
    name: "بازل",
    aliases: ["puzzle"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "لغز بسيط",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const list = [
      "شيء يمشي بلا قدمين… ما هو؟",
      "شيء تراه في الليل والنهار ولا تراه في السماء… ما هو؟",
      "شيء كلما أخذت منه كبر… ما هو؟"
    ];
    const pick = list[Math.floor(Math.random() * list.length)];

    api.sendMessage("🧩 لغز:\n" + pick, event.threadID);
  }
};
