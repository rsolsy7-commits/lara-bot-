module.exports = {
  config: {
    name: "تفكيك",
    aliases: [],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "فككي الكلمة",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const words = ["مدرسة", "سيارة", "كمبيوتر", "هاتف"];
    const pick = words[Math.floor(Math.random() * words.length
