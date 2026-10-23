window.UNIT = {
  slug: "fetes-et-traditions",
  title: "Fêtes et traditions",
  level: "A2",
  subject: "Les cultures",
  minutes: 50,
  focus: ["les fêtes en France et au Mexique", "les pronoms COI lui, leur", "offrir, donner, souhaiter", "les vœux"],

  presentation: {
    scene: "🎄🎉🎂",
    situation: "Décembre approche. Valeria, étudiante mexicaine à Lyon, parle des **fêtes** avec sa colocataire française, Chloé. Que fait-on en France pour Noël ? Et au Mexique ?",
    warmup: {
      prompt: "Quelle est votre fête préférée ?",
      options: ["Noël", "le Nouvel An", "le Jour des Morts", "mon anniversaire", "la fête des Mères", "la Saint-Valentin", "le carnaval", "la fête nationale"],
      response: "Belle fête ! Vous allez apprendre à parler des traditions."
    },
    dialogueTitle: "Noël ici et là-bas",
    dialogue: [
      { who: "Chloé", line: "Valeria, qu'est-ce que tu vas offrir à ta mère pour Noël ?" },
      { who: "Valeria", line: "Je vais *lui* offrir un foulard de Lyon. Et à mes frères, je vais *leur* envoyer du chocolat." },
      { who: "Chloé", line: "Au Mexique, vous fêtez Noël le 24 ou le 25 ?" },
      { who: "Valeria", line: "Le 24 au soir ! Avant, il y a les *posadas* : on chante et on casse une piñata." },
      { who: "Chloé", line: "En France aussi, on dîne le 24. Les enfants ouvrent les cadeaux le 25 au matin." },
      { who: "Valeria", line: "Et le 6 janvier, vous mangez la galette des rois, non ?" },
      { who: "Chloé", line: "Oui ! Celui qui trouve la fève est le roi. Je vais *t'*inviter à la manger avec ma famille !" }
    ]
  },

  objectives: [
    "Je peux parler des fêtes et des traditions.",
    "Je peux utiliser les pronoms COI *lui* et *leur*.",
    "Je peux utiliser les verbes *offrir, donner, envoyer, souhaiter*.",
    "Je peux exprimer des vœux."
  ],

  explanation: {
    vocabTitle: "Les fêtes",
    vocab: [
      { word: "Noël", icon: "🎄" }, { word: "le Nouvel An", icon: "🎆" }, { word: "un cadeau", icon: "🎁" }, { word: "une fête", icon: "🎉" },
      { word: "le sapin", icon: "🌲" }, { word: "la galette des rois", icon: "👑" }, { word: "un défilé", icon: "🎺" }, { word: "le feu d'artifice", icon: "🎇" },
      { word: "les bougies", icon: "🕯️" }, { word: "le Jour des Morts", icon: "💀" }, { word: "fêter", icon: "🥳" }, { word: "souhaiter", icon: "🌠" }
    ],
    grammar: [
      {
        title: "Les pronoms COI",
        intro: "Le pronom COI remplace *à + personne*. Verbes : *offrir à, donner à, téléphoner à, parler à, envoyer à, souhaiter à*.",
        head: ["à + personne", "Pronom", "Exemple"],
        rows: [
          ["à moi / à toi", "*me / te*", "Tu *me* donnes ton adresse ?"],
          ["à ma mère / à mon père", "*lui*", "Je *lui* offre un livre."],
          ["à nous / à vous", "*nous / vous*", "Il *nous* souhaite bonne année."],
          ["à mes parents / à mes amies", "*leur*", "Je *leur* envoie une carte."]
        ],
        note: "*lui* = masculin **et** féminin. Ne confondez pas *leur* (pronom, invariable) et *leur / leurs* (possessif)."
      },
      {
        title: "Les vœux",
        head: ["Occasion", "On dit"],
        rows: [
          ["un anniversaire", "*Joyeux anniversaire !* / *Bon anniversaire !*"],
          ["Noël", "*Joyeux Noël !*"],
          ["le 1er janvier", "*Bonne année !* / *Meilleurs vœux !*"],
          ["une réussite", "*Félicitations !*"],
          ["un voyage, un examen", "*Bon voyage !* / *Bonne chance !*"]
        ]
      }
    ],
    watchOut: [
      ["Je leurs donne un cadeau.", "Je leur donne un cadeau."],
      ["Je la téléphone.", "Je lui téléphone."],
      ["J'offre lui des fleurs.", "Je lui offre des fleurs."],
      ["Joyeuse année !", "Bonne année !"]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez avec *lui* ou *leur*.",
      items: ["Je téléphone à ma grand-mère. → Je [[lui]] téléphone.", "Il offre des fleurs à ses parents. → Il [[leur]] offre des fleurs.", "Tu parles à Paul ? → Tu [[lui]] parles ?"]
    }
  },

  skills: {
    listening: {
      intro: "Trois personnes parlent de leur fête préférée. Écoutez.",
      title: "Ma fête préférée",
      script: [
        { who: "Pierre", line: "J'adore le 14 juillet, la fête nationale française. Il y a un grand défilé à Paris et, le soir, un feu d'artifice." },
        { who: "Lucía", line: "Ma fête préférée, c'est le Jour des Morts, au Mexique. On prépare un autel pour nos grands-parents et on leur offre des fleurs et leur plat préféré." },
        { who: "Nadia", line: "Pour moi, c'est l'Aïd, au Maroc. Toute la famille se réunit. Les enfants reçoivent de nouveaux vêtements et on leur donne un peu d'argent." }
      ],
      activities: [
        {
          type: "match", title: "Quelle fête ?",
          pairs: [["Pierre", "le 14 juillet"], ["Lucía", "le Jour des Morts"], ["Nadia", "l'Aïd"]]
        },
        {
          type: "sort", title: "Quelle tradition ?",
          bins: ["le 14 juillet", "le Jour des Morts", "l'Aïd"],
          items: [
            { text: "un défilé", bin: 0 }, { text: "un feu d'artifice", bin: 0 },
            { text: "un autel", bin: 1 }, { text: "des fleurs pour les grands-parents", bin: 1 },
            { text: "de nouveaux vêtements", bin: 2 }, { text: "un peu d'argent pour les enfants", bin: 2 }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez le message d'invitation d'Hugo.",
      title: "Invitation : la galette des rois !",
      text: [
        "Salut tout le monde ! Samedi 6 janvier, je vous invite chez moi pour manger la galette des rois. C'est une tradition française : on coupe la galette, et le plus jeune se met sous la table. Il dit à qui on donne chaque part.",
        "Dans la galette, il y a une petite figurine : la fève. La personne qui la trouve devient le roi ou la reine. On lui met une couronne en papier ! Apportez vos boissons préférées. Écrivez-moi avant jeudi. À samedi ! Hugo"
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "La fête est le 6 janvier.", a: true },
            { s: "Le plus âgé se met sous la table.", a: false },
            { s: "La personne qui trouve la fève devient le roi ou la reine.", a: true },
            { s: "Hugo prépare toutes les boissons.", a: false }
          ]
        },
        {
          type: "gap", title: "Complétez",
          items: ["La petite figurine s'appelle la [[fève|feve]].", "On met une [[couronne]] en papier au roi.", "Il faut répondre avant [[jeudi]]."]
        }
      ]
    },

    writing: {
      intro: "Pratiquez les pronoms, puis présentez une fête.",
      activities: [
        {
          type: "rewrite", title: "Remplacez par lui ou leur",
          items: [
            { q: "J'offre un livre à mon père.", a: ["Je lui offre un livre."] },
            { q: "Nous envoyons une carte à nos cousins.", a: ["Nous leur envoyons une carte."] },
            { q: "Elle téléphone à sa mère.", a: ["Elle lui téléphone."] },
            { q: "Tu ne parles pas à tes voisins ?", a: ["Tu ne leur parles pas ?"] }
          ]
        },
        {
          type: "write", title: "Une fête de mon pays",
          prompt: "Présentez une fête de votre pays à des étudiants français : la date, ce qu'on fait, ce qu'on mange, ce qu'on offre et à qui.",
          minWords: 60, maxWords: 90,
          model: "Au Mexique, le 2 novembre, nous fêtons le Jour des Morts. Nous préparons un autel avec des photos de nos grands-parents. Nous leur offrons des fleurs orange, des bougies et leur plat préféré. On mange du pain des morts et on boit du chocolat chaud. Ma mère invite toute la famille et ma grand-mère nous raconte des histoires. C'est une fête joyeuse, pas triste !",
          bank: ["Le…, nous fêtons…", "On prépare…", "On mange…", "Nous leur offrons…", "Je lui donne…", "C'est une fête…"],
          checklist: ["J'ai donné la date.", "J'ai décrit deux traditions.", "J'ai utilisé *lui* ou *leur* deux fois."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Vœux et cadeaux",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Joyeux Noël et bonne année !" },
            { s: "Je lui offre un foulard." },
            { s: "Nous leur envoyons du chocolat." },
            { s: "Joyeux anniversaire !" },
            { s: "Le Jour des Morts est une fête joyeuse." },
            { s: "Je vais t'inviter chez moi." }
          ]
        },
        {
          type: "speak", title: "Mes cadeaux de fête",
          prompt: "Parlez de la prochaine fête : à qui vous allez offrir un cadeau, quoi, et pourquoi.",
          language: ["Pour…, je vais offrir… à…", "Je vais lui offrir…", "Je vais leur donner…", "parce que…"],
          seconds: 60,
          checklist: ["parlé de trois personnes ?", "utilisé *lui* et *leur* ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux parler d'une fête et de ses traditions.", review: "Écouter et Lire" },
    { can: "Je peux utiliser *lui* et *leur*.", review: "Explication : les pronoms COI ; Écrire, activité 1" },
    { can: "Je peux distinguer *leur* (pronom) et *leurs* (possessif).", review: "Explication : les pronoms COI (note)" },
    { can: "Je peux utiliser *offrir, donner, envoyer, souhaiter*.", review: "Explication : les pronoms COI" },
    { can: "Je peux exprimer des vœux.", review: "Explication : les vœux" },
    { can: "Je peux présenter une fête de mon pays.", review: "Écrire, activité 2" }
  ]
};
