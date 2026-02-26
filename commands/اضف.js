const owner = "61562975344669"; // ID المالكة فيكتوريا / روريتا

module.exports = {
  config: {
    name: "اضف",
    aliases: ["add"],
    version: "2.0",
    author: "Victoria",
    prefix: true,
    category: "ADMIN",
    description: "إضافة عضو إلى المجموعة باستخدام ID",
    guide: "{pn} 123456789"
  },

  onStart: async function({ api, event, args }) {

    const thread = event.threadID;
    const sender = event.senderID;

    // فقط المالكة أو الأدمن
    if (sender !== owner && !event.isGroupAdmin)
      return api.sendMessage("❌ هذا الأمر للمالكة أو الأدمن فقط.", thread);

    // إذا ما كتب ID
    if (!args[0])
      return api.sendMessage("⚠️ اكتبي ID الشخص بعد كلمة اضف", thread);

    const userID = args[0];

    // محاولة إضافة الشخص
    api.addUserToGroup(userID, thread, (err) => {
      if (err) {
        return api.sendMessage("❌ ما قدرت أضيفه… يمكنه قافل الإضافة أو في مشكلة.", thread);
      } else {

        // رد خاص للمالكة
        if (sender === owner) {
          return api.sendMessage(
            `✨ تمت الإضافة يا مالكتي فيكتوريا ❤️\nتم إدخال هذا الشخص للمجموعة:\n${userID}`,
            thread
          );
        }

        // رد للأدمن
        return api.sendMessage(
          `✔️ تمت إضافة العضو بنجاح.\nID: ${userID}`,
          thread
        );
      }
    });
  }
};
