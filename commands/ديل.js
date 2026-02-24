module.exports = {
  config: {
    name: "ديل",
    aliases: ["dalle"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "OTHERS",
    description: "توليد صورة عبر الذكاء الاصطناعي",
    guide: "{pn} وصف"
  },

  onStart: async function({ api, event, args }) {
    if (!args[0]) return api.sendMessage("اكتبي وصف الصورة.", event.threadID);

    const text = args.join(" ");
    api.sendMessage("🎨 جاري توليد الصورة…", event.threadID);

    api.sendMessage("✔️ تم توليد الصورة (هذا نموذج فقط).", event.threadID);
  }
};
