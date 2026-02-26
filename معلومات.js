const owner = "61562975344669";

module.exports = {
  config: {
    name: "معلومات",
    aliases: ["info"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "ADMIN",
    description: "عرض معلومات المجموعة",
    guide: "{pn}"
  },

  onStart: async function({ api, event, threadsData }) {

    if (event.senderID !== owner && !event.isGroupAdmin)
      return api.sendMessage("❌ هذا الأمر للمالكة أو الأدمن فقط.", event.threadID);

    const info = await threadsData.get(event.threadID);

    api.sendMessage(
      `📌 معلومات القروب:\n\n` +
      `• الاسم: ${info.threadName}\n` +
      `• الأعضاء: ${info.participantIDs.length}\n` +
      `• الأدمن: ${info.adminIDs.length}\n`,
      event.threadID
    );
  }
};
