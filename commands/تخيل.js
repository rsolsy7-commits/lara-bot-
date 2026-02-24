module.exports = {
  config: {
    name: "تخيل",
    aliases: ["تخيلي"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "OTHERS",
    description: "تخيّل شيء عبر الذكاء الاصطناعي",
    guide: "{pn} وصف"
  },

  onStart: async function({ api, event, args }) {
    if (!args[0]) return api.sendMessage("اكتبي ما تريدين تخيّله.", event.threadID);

    api.sendMessage("🌈 جاري التخيل…", event.threadID);
  }
};
