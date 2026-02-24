module.exports = {
  config: {
    name: "برومبت",
    aliases: ["prompt", "promptgen", "ميدجورني"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "OTHERS",
    description: "إنشاء برومبت جاهز للذكاء الاصطناعي",
    guide: "{pn} فكرة"
  },

  onStart: async function({ api, event, args }) {
    if (!args[0]) return api.sendMessage("اكتبي الفكرة.", event.threadID);

    const idea = args.join(" ");
    api.sendMessage(`📝 برومبت جاهز:\n${idea} — ultra detailed, 4k`, event.threadID);
  }
};
