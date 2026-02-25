module.exports = {
  config: {
    name: "لاتيه",
    aliases: ["latte"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "يعطيك لاتيه عشوائي",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const list = ["☕ لاتيه فانيلا", "☕ لاتيه كراميل", "☕ لاتيه شوكولا", "☕ لاتيه كلاسيك"];
    const pick = list[Math.floor(Math.random() * list.length)];

    api.sendMessage("☕ لاتيه اليوم:\n" + pick, event.threadID);
  }
};
