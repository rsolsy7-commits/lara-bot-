module.exports = {
  config: {
    name: "عملة",
    aliases: ["coin", "flip"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "رمي عملة",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const result = Math.random() < 0.5 ? "وجه" : "كتابة";
    api.sendMessage("🪙 النتيجة:\n" + result, event.threadID);
  }
};
