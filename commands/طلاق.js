let married = {};

module.exports = {
  config: {
    name: "طلاق",
    aliases: ["divorce"],
    version: "2.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "طلاق شخص إذا كان متزوجًا",
    guide: "{pn} (رد على الزوج/الزوجة)"
  },

  onStart: async function({ api, event }) {

    if (!event.messageReply)
      return api.sendMessage("📎 ردي على الشخص اللي بدك تطلقيه.", event.threadID);

    const uid = event.messageReply.senderID;
    const name = event.messageReply.body || "هذا الشخص";
    const user = event.senderID;

    // التحقق من وجود زواج
    if (!married[user] || married[user] !== uid) {
      return api.sendMessage("❌ ما في زواج بينكم أساسًا.", event.threadID);
    }

    // تنفيذ الطلاق
    delete married[user];

    api.sendMessage({
      body: `💔 @${name} تم الطلاق رسميًا… الله يعوض عليك 😂`,
      mentions: [{ tag: name, id: uid }]
    }, event.threadID);
  }
};
