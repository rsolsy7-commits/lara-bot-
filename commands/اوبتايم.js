module.exports = {
  config: {
    name: "اوبتايم",
    aliases: ["up", "ابتايم"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "UTILITY",
    description: "عرض مدة تشغيل البوت",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    const time = process.uptime();
    const h = Math.floor(time / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = Math.floor(time % 60);

    api.sendMessage(`⏳ مدة التشغيل:\n${h} ساعة، ${m} دقيقة، ${s} ثانية`, event.threadID);
  }
};
