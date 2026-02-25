module.exports = {
  config: {
    name: "سلوت",
    aliases: ["مراهنة", "رهان"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "لعبة السلوت",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const items = ["🍒", "🍋", "🍇", "🍉"];
    const a = items[Math.floor(Math.random() * items.length)];
    const b = items[Math.floor(Math.random() * items.length)];
    const c = items[Math.floor(Math.random() * items.length)];

    const result = `${a} | ${b} | ${c}`;

    api.sendMessage("🎰 النتيجة:\n" + result, event.threadID);
  }
};
