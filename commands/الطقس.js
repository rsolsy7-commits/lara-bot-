const axios = require("axios");

module.exports = {
  config: {
    name: "الطقس",
    aliases: [],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "UTILITY",
    description: "عرض حالة الطقس",
    guide: "{pn} اسم المدينة"
  },

  onStart: async function({ api, event, args }) {
    if (!args[0]) return api.sendMessage("اكتبي اسم المدينة.", event.threadID);

    const city = args.join(" ");
    const res = await axios.get(`https://api.popcat.xyz/weather?q=${encodeURIComponent(city)}`);

    api.sendMessage(
      `🌤️ الطقس في ${city}:\nدرجة الحرارة: ${res.data.temperature}°C\nالوصف: ${res.data.description}`,
      event.threadID
    );
  }
};
