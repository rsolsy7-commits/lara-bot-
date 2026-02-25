module.exports = {
  config: {
    name: "ماذا-لو",
    aliases: [],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "سؤال ماذا لو",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const list = [
      "ماذا لو قدرتي تختفي؟",
      "ماذا لو رجعتي بالزمن؟",
      "ماذا لو صرتي غنية فجأة؟",
      "ماذا لو قدرتي تقري العقول؟"
    ];
    const pick = list[Math.floor(Math.random() * list.length)];

    api.sendMessage("❓ " + pick, event.threadID);
  }
};
