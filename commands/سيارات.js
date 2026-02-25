module.exports = {
  config: {
    name: "سيارات",
    aliases: ["car", "cars"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "يعطي سيارة عشوائية",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const cars = ["🚗 BMW", "🏎️ Ferrari", "🚙 Jeep", "🚘 Mercedes"];
    const pick = cars[Math.floor(Math.random() * cars.length)];

    api.sendMessage("🚗 سيارتك:\n" + pick, event.threadID);
  }
};
