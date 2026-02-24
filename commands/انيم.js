module.exports = {
  config: {
    name: "انيم",
    aliases: ["ارسمي2"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "OTHERS",
    description: "تحويل النص إلى رسم أنمي",
    guide: "{pn} نص"
  },

  onStart: async function({ api, event, args }) {
    if (!args[0]) return api.sendMessage("اكتبي النص.", event.threadID);

    api.sendMessage("✨ جاري تحويل النص إلى أنمي…", event.threadID);
  }
};
