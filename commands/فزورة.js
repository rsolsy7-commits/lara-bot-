module.exports = {
  config: {
    name: "فزورة",
    aliases: ["riddle"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "فزورة عشوائية",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const list = [
      "ما هو الشيء الذي لا يُكسر؟",
      "ما هو الشيء الذي يكتب ولا يقرأ؟",
      "ما هو الشيء الذي يسمع بلا أذن؟"
    ];
    const pick = list[Math.floor(Math.random() * list.length)];

    api.sendMessage("🧠 فزورة:\n" + pick, event.threadID);
  }
};
