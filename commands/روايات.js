module.exports = {
  config: {
    name: "روايات",
    aliases: [],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "رواية قصيرة عشوائية",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const stories = [
      "في ليلة هادئة، ظهرت رسالة غامضة...",
      "في عالم آخر، كانت هناك فتاة تبحث عن الحقيقة...",
      "في مدينة مظلمة، بدأ كل شيء بصوت غريب..."
    ];
    const pick = stories[Math.floor(Math.random() * stories.length)];

    api.sendMessage("📖 رواية قصيرة:\n" + pick, event.threadID);
  }
};
