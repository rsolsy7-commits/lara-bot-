module.exports = {
  name: "luck",
  aliases: ["حظ", "لعبةالحظ"],
  description: "لعبة حظ بسيطة",

  execute(api, event) {
    const results = [
      "🍀 حظك اليوم ممتاز!",
      "🙂 حظ متوسط… مو سيء!",
      "😬 حظك قليل شوي اليوم",
      "😢 اليوم مو يومك بالحظ"
    ];

    const random = results[Math.floor(Math.random() * results.length)];
    api.sendMessage(random, event.threadID);
  }
};
