const owner = "61562975344669";

module.exports = {
  config: {
    name: "الادمن",
    aliases: ["admins"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "ADMIN",
    description: "عرض قائمة الأدمن",
    guide: "{pn}"
  },

  onStart: async function({ api, event, threadsData }) {

    if (event.senderID !== owner && !event.isGroupAdmin)
      return api.sendMessage("❌ هذا الأمر للمالكة أو الأدمن فقط.", event.threadID);

    const info = await threadsData.get(event.threadID);
    const admins = info.adminIDs.map(a => a.id).join("\n");

    api.sendMessage("👑 قائمة الأدمن:\n" + admins, event.threadID);
  }
};
