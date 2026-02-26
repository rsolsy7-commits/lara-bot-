const owner = "61562975344669"; // ID المالكة فيكتوريا / روريتا

module.exports = {
  config: {
    name: "لقب",
    aliases: ["nick", "nickname"],
    version: "1.0",
    author: "Victoria",
    prefix: true,
    category: "ADMIN",
    description: "تغيير لقب عضو داخل المجموعة",
    guide: "{pn} (بالرد) لقب جديد | {pn} ID لقب جديد"
  },

  onStart: async function({ api, event, args }) {

    const thread = event.threadID;
    const sender = event.senderID;

    // فقط المالكة أو الأدمن
    if (sender !== owner && !event.isGroupAdmin)
      return api.sendMessage("❌ هذا الأمر للمالكة أو الأدمن فقط.", thread);

    // إذا كان رد على رسالة
    if (event.messageReply) {
      const targetID = event.messageReply.senderID;
      const newNick = args.join(" ");

      if (!newNick)
        return api.sendMessage("⚠️ اكتبي اللقب الجديد.", thread);

      return api.changeNickname(newNick, thread, targetID, (err) => {
        if (err) return api.sendMessage("❌ ما قدرت أغير اللقب… يمكن البوت مو أدمن.", thread);

        if (sender === owner)
          return api.sendMessage(`✨ تم تغيير اللقب يا روريتا ❤️`, thread);

        return api.sendMessage(`✔️ تم تغيير لقب العضو.`, thread);
      });
    }

    // إذا كان باستخدام ID
    if (args.length >= 2) {
      const targetID = args[0];
      const newNick = args.slice(1).join(" ");

      return api.changeNickname(newNick, thread, targetID, (err) => {
        if (err) return api.sendMessage("❌ ما قدرت أغير اللقب… يمكن البوت مو أدمن.", thread);

        if (sender === owner)
          return api.sendMessage(`✨ تم تغيير اللقب يا روريتا ❤️`, thread);

        return api.sendMessage(`✔️ تم تغيير لقب العضو.`, thread);
      });
    }

    return api.sendMessage("⚠️ استخدمي الأمر بالرد أو مع ID.", thread);
  }
};
