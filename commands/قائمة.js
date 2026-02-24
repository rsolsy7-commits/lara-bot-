module.exports = {
  config: {
    name: "قائمة",
    aliases: ["menu", "اوامر", "الاوامر", "help", "قائمه"],
    version: "1.0",
    author: "روريتا",
    prefix: true,
    category: "UTILITY",
    description: "عرض قائمة أوامر البوت",
    guide: "{pn}"
  },

  onStart: async function({ api, event }) {
    api.sendMessage(
`╔════ ∘◦ ✥ ◦∘ ════╗
      ✦ قائمة أوامر لارا ✦
╚════ ∘◦ ✥ ◦∘ ════╝

① الإسلام  
② الأدوات  
③ أخرى  
④ الألعاب  
⑤ الإدارة  
⑥ الاقتصاد  
⑦ BOX  
⑧ الميديا  
⑨ الخدمات

📝 اكتبي رقم الفئة لعرض أوامرها.`,
      event.threadID
    );
  }
};
