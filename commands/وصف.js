const owner = "61562975344669";

module.exports = {
  config: {
    name: "وصف",
    aliases: ["desc"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "ADMIN",
    description: "تغيير وصف القروب",
    guide: "{pn} النص"
  },

  onStart: async function({ api, event, args }) {

    if (event.senderID !== owner && !event.isGroupAdmin)
      return api.sendMessage("❌ للمالكة أو الأدمن فقط.", event.threadID);

    if (!args[0])
      return api.sendMessage("✏️ اكتبي الوصف الجديد.", event.threadID);

    const desc = args.join(" ");

    api.changeGroupDescription(desc, event.threadID, (err) => {
      if (err) return api.sendMessage("❌ ما قدرت أغير الوصف.", event.threadID);

      api.sendMessage("📄 تم تغيير وصف القروب.", event.threadID);
    });
  }
};
