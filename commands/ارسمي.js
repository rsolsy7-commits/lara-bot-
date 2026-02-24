module.exports = {
  config: {
    name: "ارسمي",
    aliases: ["drawing", "xl"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "OTHERS",
    description: "تحويل النص إلى رسم",
    guide: "{pn} نص"
  },

  onStart: async function({ api, event, args }) {
    if (!args[0]) return api.sendMessage("اكتبي النص للرسم.", event.threadID);

    api.sendMessage("🖌️ جاري إنشاء الرسم…", event.threadID);
  }
};
