const axios = require("axios");

module.exports = {
  config: {
    name: "ترجمي",
    aliases: ["trans", "ترجمة", "ترجم"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "UTILITY",
    description: "ترجمة نص",
    guide: "{pn} نص"
  },

  onStart: async function({ api, event, args }) {
    if (!args[0]) return api.sendMessage("اكتبي النص للترجمة.", event.threadID);

    const text = args.join(" ");
    const res = await axios.get(`https://api.popcat.xyz/translate?to=ar&text=${encodeURIComponent(text)}`);

    api.sendMessage("🌐 الترجمة:\n" + res.data.translated, event.threadID);
  }
};
