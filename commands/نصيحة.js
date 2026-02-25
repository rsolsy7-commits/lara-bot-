module.exports = {
  config: {
    name: "نصيحة",
    aliases: [],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "يعطي نصيحة عشوائية",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const list = [
      "لا تثقي بكل الناس.",
      "ابتسمي، الحياة قصيرة.",
      "اعملي بصمت ودعي نجاحك يتكلم.",
      "لا تتسرعي في الحكم."
    ];
    const pick = list[Math.floor(Math.random() * list.length)];

    api.sendMessage("💡 نصيحة اليوم:\n" + pick, event.threadID);
  }
};
