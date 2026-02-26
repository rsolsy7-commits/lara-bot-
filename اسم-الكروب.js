module.exports = {
  config: {
    name: "اسم-القروب",
    aliases: ["rename"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "ADMIN",
    description: "تغيير اسم المجموعة",
    guide: "{pn} الاسم الجديد"
  },

  onStart: async function({ api, event, args }) {

    const owner = "61562975344669";

    if (event.senderID !== owner && !event.isGroupAdmin)
      return api.sendMessage("❌ هذا الأمر مخصص للمالكة أو الأدمن فقط.", event.threadID);

    if (!args[0])
      return api.sendMessage("✏️ اكتبي الاسم الجديد.", event.threadID);

    const newName = args.join(" ");

    api.setTitle(newName, event.threadID, (err) => {
      if (err) return api.sendMessage("❌ ما قدرت أغير الاسم.", event.threadID);

      api.sendMessage(`📛 تم تغيير اسم المجموعة إلى:\n${newName}`, event.threadID);
    });
  }
};
