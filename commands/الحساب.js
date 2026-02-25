module.exports = {
  config: {
    name: "الحساب",
    aliases: ["calc"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "آلة حاسبة بسيطة",
    guide: "{pn} 5+5"
  },

  onStart: async function({ api, event, args }) {
    try {
      const result = eval(args.join(" "));
      api.sendMessage("🧮 النتيجة: " + result, event.threadID);
    } catch {
      api.sendMessage("❌ عملية غير صالحة.", event.threadID);
    }
  }
};
