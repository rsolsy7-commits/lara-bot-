module.exports = {
  config: {
    name: "مسح",
    aliases: ["حذف", "كرنج", "unsend"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "UTILITY",
    description: "حذف رسالة البوت",
    guide: "{pn} ردي على رسالة البوت"
  },

  onStart: async function({ api, event }) {
    if (!event.messageReply) return api.sendMessage("📎 ردي على رسالة لحذفها.", event.threadID);

    api.unsendMessage(event.messageReply.messageID);
  }
};
