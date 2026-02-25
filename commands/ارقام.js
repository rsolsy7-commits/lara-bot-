module.exports = {
  config: {
    name: "ارقام",
    aliases: ["أرقام"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "يعطيك رقم عشوائي",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const num = Math.floor(Math.random() * 1000);
    api.sendMessage("🔢 رقمك العشوائي:\n" + num, event.threadID);
  }
};
