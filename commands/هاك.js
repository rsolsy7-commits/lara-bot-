module.exports = {
  config: {
    name: "هاك",
    aliases: [],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "مزحة هاك",
    guide: "{pn} اسم"
  },

  onStart: async function({ api, event, args }) {
    const name = args.join(" ") || "الهدف";
    api.sendMessage(`💻 جاري اختراق ${name}...\n✔️ تمت المزحة 😂`, event.threadID);
  }
};
