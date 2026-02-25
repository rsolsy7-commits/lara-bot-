module.exports = {
  config: {
    name: "اكيناتور",
    aliases: ["Akinator"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "لعبة اكيناتور (نسخة مبسطة)",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    api.sendMessage("🧞‍♂️ اكيناتور: هل تفكرين بشخص حقيقي أم خيالي؟", event.threadID);
  }
};
