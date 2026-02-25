module.exports = {
  config: {
    name: "زواج",
    aliases: ["marry"],
    version: "1.2",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "تزويج شخصين مع منشن",
    guide: "{pn} (رد على الشخص الأول ثم اكتبي اسم الثاني)"
  },

  onStart: async function({ api, event, args }) {

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص الأول.", event.threadID);

    if (!args[0])
      return api.sendMessage("✏️ اكتبي اسم الشخص الثاني.", event.threadID);

    const uid1 = event.messageReply.senderID;
    const name1 = event.messageReply.body || "الشخص الأول";

    const name2 = args.join(" ");

    api.sendMessage({
      body: `💍 تم الزواج بين:\n@${name1} ❤️ ${name2}\nألف مبروك!`,
      mentions: [{ tag: name1, id: uid1 }]
    }, event.threadID);
  }
};
