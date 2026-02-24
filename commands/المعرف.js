module.exports = {
  config: {
    name: "المعرف",
    aliases: ["uid", "Uid", "ايدي"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "UTILITY",
    description: "عرض معرف فيسبوك",
    guide: "{pn} أو ردي على رسالة"
  },

  onStart: async function({ api, event }) {
    const id = event.messageReply ? event.messageReply.senderID : event.senderID;
    api.sendMessage("🆔 المعرف: " + id, event.threadID);
  }
};
