module.exports = {
  config: {
    name: "كوسبلاي",
    aliases: ["أزياء"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "يعطي شخصية كوسبلاي",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const list = ["🎎 Nezuko", "🎎 Zero Two", "🎎 Mikasa", "🎎 Rem"];
    const pick = list[Math.floor(Math.random() * list.length)];

    api.sendMessage("🎎 كوسبلاي مناسب لك:\n" + pick, event.threadID);
  }
};
