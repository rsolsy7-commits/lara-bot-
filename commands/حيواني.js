module.exports = {
  config: {
    name: "حيواني",
    aliases: ["animal"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "يعطيك حيوان عشوائي",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const list = ["🐱", "🐶", "🐼", "🦊", "🐯"];
    const pick = list[Math.floor(Math.random() * list.length)];

    api.sendMessage("🐾 حيوانك هو:\n" + pick, event.threadID);
  }
};
