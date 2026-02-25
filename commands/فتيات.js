module.exports = {
  config: {
    name: "فتيات",
    aliases: ["girls"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "يعطيك فتاة أنمي",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const list = ["💗 ميكاسا", "💗 ريم", "💗 نامي", "💗 زيرو تو"];
    const pick = list[Math.floor(Math.random() * list.length)];

    api.sendMessage("👧 فتاة أنمي:\n" + pick, event.threadID);
  }
};
