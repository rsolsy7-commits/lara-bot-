module.exports = {
  config: {
    name: "دردشة-مزيفة",
    aliases: ["fakechat", "دردشة"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "إنشاء دردشة مزيفة",
    guide: "{pn} نص"
  },

  onStart: async function({ api, event, args }) {
    const text = args.join(" ") || "مرحبا، هذه دردشة مزيفة!";
    api.sendMessage("💬 دردشة مزيفة:\n" + text, event.threadID);
  }
};
