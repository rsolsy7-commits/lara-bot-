module.exports = {
  config: {
    name: "قولي",
    aliases: ["say"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "GAMES",
    description: "يكرر كلامك",
    guide: "{pn} نص"
  },

  onStart: async function({ api, event, args }) {
    if (!args[0]) return api.sendMessage("اكتبي النص.", event.threadID);

    api.sendMessage(args.join(" "), event.threadID);
  }
};
