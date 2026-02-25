module.exports = {
  config: {
    name: "ونبيس",
    aliases: ["onepiece"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "شخصية من ون بيس",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const list = ["لوفي", "زورو", "سانجي", "نامي", "روبين"];
    const pick = list[Math.floor(Math.random() * list.length)];

    api.sendMessage("🏴‍☠️ شخصيتك من ون بيس:\n" + pick, event.threadID);
  }
};
