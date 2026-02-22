module.exports = {
  name: "azkar",
  aliases: ["اذكار", "ذكر"],
  description: "أذكار يومية عشوائية",

  execute(api, event) {
    const azkar = [
      "سبحان الله وبحمده، سبحان الله العظيم",
      "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
      "أستغفر الله العظيم وأتوب إليه",
      "اللهم صل وسلم على نبينا محمد",
      "حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم"
    ];

    const random = azkar[Math.floor(Math.random() * azkar.length)];
    api.sendMessage(random, event.threadID);
  }
};
