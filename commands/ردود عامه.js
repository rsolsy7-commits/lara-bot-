const owner = "61562975344669"; // ID المالكة فيكتوريا / روريتا

let botLocked = {}; 

// ردود عامة لأي شخص ينادي "لارا"
const laraReplies = [
  "هااااااا؟! مين ناداني؟ 😤😂",
  "شو بدك مني هلق؟! عم اتقهوّى 😒☕😂",
  "إي لارا هون… لا تصرخوا باسمي 😭🔥",
  "مين عم ينادي؟! حسّيت حدا بده مصيبة 😂😤",
  "إي نعم! لارا وصلت… شو القصة هالمرة؟ 🤨🔥",
  "يا ريت تنادوني وأنا رايقة مو هيك فجأة 😭😂",
  "إي لارا هون… بس لا تزعجوني بلا سبب 😤🤣",
  "مين عم يصرخ باسمي؟! والله كنت نايمة 😤😂",
  "شو في؟! حسّيت في حدا بده يتهاوش معي 😭🔥",
  "إي لارا هون… بس لا ترفع صوتك 😒🤣",
  "شو بدكم مني؟! عم حاول أعيش حياتي بس 😤🤣",
  "إي لارا هون… بس لا تعملوا دراما الله يرضى عليكم 😂🔥",
  "مين ناداني؟! حسّيت في مشكلة جاية بالطريق 😭🤣",
  "شو القصة؟! ليش ناديتوني وأنا عم آكل؟ 😒🍔🤣",
  "إي لارا هون… بس لا تعملوني منبّه تصحوا عليه 😤😂",
  "شو هالنداء المفاجئ؟! قلبي وقع 😭🔥",
  "إي لارا وصلت… بس لا تخلوني أصرخ 😒🤣",
  "مين ناداني؟! كنت عم أرتاح شوي 😩😂",
  "شو بدكم؟! مو كل شوي تنادوني 😤🔥",
  "إي لارا هون… بس والله تعبت من النداءات 😂😭"
];

// ردود خاصة للمالكة فقط (فيكتوريا / روريتا)
const ownerReplies = [
  "يا مالكتي الحلوة… هدول الأطفال مزعجين كتير 😩😂",
  "إي روريتا! أنا هون… شو بدك من لارا؟ 😭❤️",
  "أمري يا ملكة لارا… أنا جاهزة 😤🔥😂",
  "يا روحي إنتِ… ناديني براحتك، مو مثل هالضجة 😒🤣",
  "إي حبيبتي فيكتوريا… لارا دايمًا جاهزة إلك بس 😭❤️",
  "ناديني قد ما بدك يا روريتا… إنتِ مو مثلهم 😤❤️",
  "يا ملكتي… هدول يزعجوني وأنا بس أسمع صوتك بهدى 😭💗",
  "إي حياتي فيكتوريا… شوفيلي هالناس ليش مزعجين 😩😂",
  "أهلاً بمالكة روحي… أنا هون فوراً 😤🔥❤️",
  "إي روريتا… لارا ما ترفض لك نداء أبداً 😭💗"
];

module.exports = {
  config: {
    name: "تقييد",
    aliases: ["lockbot"],
    version: "9.0",
    author: "روريتا",
    prefix: true,
    category: "ADMIN",
    description: "تقييد البوت بحيث لا يرد إلا على اسم لارا",
    guide: "{pn} | {pn} ايقاف"
  },

  onStart: async function({ api, event, args }) {

    const thread = event.threadID;
    const cmd = args[0];

    if (event.senderID !== owner && !event.isGroupAdmin)
      return api.sendMessage("❌ هذا الأمر للمالكة أو الأدمن فقط.", thread);

    if (!cmd) {
      botLocked[thread] = true;

      return api.sendMessage(
        "❌⚠️ *لارا تقول:*\n" +
        "تم تقييد البوت يا جماعة…\n" +
        "حدا يلحقه قبل ما يهرب! شكله زعلان وراح يقعد يحاسب نفسه بالزاوية 🤣🤣💔",
        thread
      );
    }

    if (cmd === "ايقاف") {
      delete botLocked[thread];

      return api.sendMessage("عاد الأسد اللهم لاحسد ＼(^o^)／", thread);
    }
  },

  onChat: async function({ api, event, threadsData }) {

    const thread = event.threadID;
    const msg = event.body?.toLowerCase() || "";

    if (!botLocked[thread]) return;

    if (msg.includes("لارا")) {

      if (event.senderID === owner) {
        const reply = ownerReplies[Math.floor(Math.random() * ownerReplies.length)];
        return api.sendMessage(reply, thread);
      }

      const reply = laraReplies[Math.floor(Math.random() * laraReplies.length)];
      return api.sendMessage(reply, thread);
    }

    return "block";
  }
};
