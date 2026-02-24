const axios = require("axios");
const fs = require("fs");

module.exports = {
  config: {
    name: "ملصق",
    aliases: ["sticker"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "UTILITY",
    description: "تحويل صورة إلى ملصق",
    guide: "{pn} + صورة"
  },

  onStart: async function({ api, event }) {
    if (!event.messageReply || !event.messageReply.attachments[0])
      return api.sendMessage("📎 ردي على صورة.", event.threadID);

    const url = event.messageReply.attachments[0].url;

    const img = await axios.get(url, { responseType: "arraybuffer" });
    fs.writeFileSync("st.webp", Buffer.from(img.data));

    api.sendMessage(
      { attachment: fs.createReadStream("st.webp") },
      event.threadID,
      () => fs.unlinkSync("st.webp")
    );
  }
};
