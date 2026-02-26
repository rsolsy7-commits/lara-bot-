const owner = "61562975344669";
let banned = {};

module.exports = {
  config: {
    name: "فك-حظر",
    aliases: ["unban"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "ADMIN",
    description: "فك الحظر عن شخص",
    guide: "{pn} (رد على الشخص)"
  },

  onStart: async function({ api, event }) {

    if (event.senderID !== owner && !event.isGroupAdmin)
      return api.sendMessage("❌ للمالكة أو الأدمن فقط.", event.threadID);

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص.", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";

    delete banned[uid];

    api.sendMessage({
      body: `✅ @${name} تم فك الحظر عنك.`,
      mentions: [{ tag: name, id: uid }]
    }, event.threadID);
  }
};
