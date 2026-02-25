module.exports = {
  config: {
    name: "درايك",
    aliases: [],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "ميم درايك",
    guide: "{pn} نص1 | نص2"
  },

  onStart: async function({ api, event, args }) {
    api.sendMessage("😂 ميم درايك جاهز (نسخة مبسطة).", event.threadID);
  }
};
