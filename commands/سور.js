module.exports = {
  config: {
    name: "سور",
    aliases: [],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "لعبة تخمين السورة",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const list = ["الفاتحة", "البقرة", "الناس", "الإخلاص"];
    const pick = list[Math.floor(Math.random() * list.length)];

    api.sendMessage("📖 خمن السورة:\n(سورة قصيرة من القرآن)", event.threadID);
  }
};
