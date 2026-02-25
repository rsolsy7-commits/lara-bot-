module.exports = {
  config: {
    name: "نرد",
    aliases: ["dice"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "رمي النرد",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const num = Math.floor(Math.random() * 6) + 1;
    api.sendMessage("🎲 رقم النرد:\n" + num, event.threadID);
  }
};
