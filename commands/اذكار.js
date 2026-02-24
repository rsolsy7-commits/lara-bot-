module.exports = {
  config: {
    name: "اذكار",
    aliases: ["adhkar", "azkar"],
    version: "1.0",
    author: "روريتا روريتا",
    prefix: true,
    category: "ISLAM",
    description: "يعرض لك ذكر عشوائي",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const list = [
      "سبحان الله",
      "الحمد لله",
      "لا إله إلا الله",
      "الله أكبر",
      "سبحان الله وبحمده",
      "سبحان الله العظيم",
      "أستغفر الله العظيم"
    ];
    const pick = list[Math.floor(Math.random() * list.length)];
    api.sendMessage("✨ ذكر اليوم:\n" + pick, event.threadID);
  }
};
