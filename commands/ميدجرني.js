module.exports = {
  config: {
    name: "ميدجرني",
    aliases: ["mj", "midjourney"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "OTHERS",
    description: "توليد صورة بأسلوب ميدجرني",
    guide: "{pn} وصف"
  },

  onStart: async function({ api, event, args }) {
    if (!args[0]) return api.sendMessage("اكتبي وصف الصورة.", event.threadID);

    api.sendMessage("🎨 جاري إنشاء صورة ميدجرني…", event.threadID);
  }
};
