window.UNIT = {
  slug: "au-restaurant",
  title: "Au restaurant",
  level: "A2",
  subject: "La vie quotidienne",
  minutes: 50,
  focus: ["commander au restaurant", "les pronoms COD le, la, l', les", "je voudrais / je vais prendre", "l'addition"],

  presentation: {
    scene: "🍽️🥗🍷",
    situation: "Pour fêter la fin des examens, Lucie et Mateo vont dans un petit **restaurant** français. Le serveur prend la commande.",
    warmup: {
      prompt: "Qu'est-ce que vous commandez souvent au restaurant ?",
      options: ["une pizza", "une salade", "un steak", "du poisson", "des pâtes", "une soupe", "un dessert", "un café", "de l'eau"],
      response: "Miam ! Vous allez apprendre à commander en français."
    },
    dialogueTitle: "La commande",
    dialogue: [
      { who: "Le serveur", line: "Bonsoir ! Vous avez choisi ?" },
      { who: "Lucie", line: "Oui. Comme entrée, *je voudrais* la soupe à l'oignon." },
      { who: "Mateo", line: "Moi, *je vais prendre* le steak-frites." },
      { who: "Le serveur", line: "Le steak, vous *le* voulez comment ? Saignant, à point ?" },
      { who: "Mateo", line: "À point, s'il vous plaît." },
      { who: "Le serveur", line: "Et la salade de chèvre ? Je *la* recommande, elle est délicieuse." },
      { who: "Lucie", line: "D'accord, je *la* prends comme plat. Et une carafe d'eau, s'il vous plaît." },
      { who: "Mateo", line: "Plus tard… *L'addition*, s'il vous plaît !" }
    ]
  },

  objectives: [
    "Je peux comprendre un menu.",
    "Je peux commander un repas poliment.",
    "Je peux utiliser les pronoms COD *le, la, l', les*.",
    "Je peux demander l'addition et faire une réclamation simple."
  ],

  explanation: {
    vocabTitle: "Au restaurant",
    vocab: [
      { word: "le menu", icon: "📋" }, { word: "la carte", icon: "📖" }, { word: "l'entrée", icon: "🥗" }, { word: "le plat principal", icon: "🍲" },
      { word: "le dessert", icon: "🍰" }, { word: "la boisson", icon: "🥤" }, { word: "le serveur", icon: "🧑‍🍳" }, { word: "l'addition", icon: "🧾" },
      { word: "le pourboire", icon: "💶" }, { word: "réserver une table", icon: "📞" }, { word: "végétarien", icon: "🥦" }, { word: "épicé", icon: "🌶️" }
    ],
    grammar: [
      {
        title: "Les pronoms COD",
        intro: "Le pronom COD remplace un nom **sans préposition** (le, la, les + nom ; mon, ce…).",
        head: ["Nom", "Pronom", "Exemple"],
        rows: [
          ["le steak (masc.)", "*le*", "Je *le* veux à point."],
          ["la salade (fém.)", "*la*", "Je *la* prends."],
          ["l'eau / le café (voyelle)", "*l'*", "Je *l'*aime bien chaud."],
          ["les frites (pluriel)", "*les*", "Je *les* adore !"]
        ],
        note: "Le pronom est **avant** le verbe. Négation : *Je ne la prends pas.* Avec un infinitif : *Je vais la prendre.*"
      },
      {
        title: "Commander",
        head: ["Le serveur", "Le client"],
        rows: [
          ["Vous avez choisi ?", "Oui, *je voudrais*… / *Je vais prendre*…"],
          ["Et comme boisson ?", "Une carafe d'eau, s'il vous plaît."],
          ["Comment voulez-vous la viande ?", "Saignante / À point / Bien cuite."],
          ["Tout s'est bien passé ?", "C'était délicieux ! / L'addition, s'il vous plaît."]
        ]
      }
    ],
    watchOut: [
      ["Je prends la.", "Je la prends."],
      ["Je ne prends la pas.", "Je ne la prends pas."],
      ["Je le aime.", "Je l'aime."],
      ["Je veux un café ! (au serveur)", "Je voudrais un café, s'il vous plaît."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez avec *le, la, l'* ou *les*.",
      items: ["La soupe ? Je [[la]] prends.", "Les frites ? Je [[les]] adore.", "Le dessert ? Je ne [[le]] veux pas."]
    }
  },

  skills: {
    listening: {
      intro: "Une famille commande au restaurant. Écoutez.",
      title: "En famille au restaurant",
      script: [
        { who: "La serveuse", line: "Bonjour ! Vous avez choisi ?" },
        { who: "Papa", line: "Oui. Pour moi, le poisson du jour avec du riz." },
        { who: "Maman", line: "Je voudrais la salade végétarienne, s'il vous plaît. Elle est épicée ?" },
        { who: "La serveuse", line: "Non, pas du tout." },
        { who: "Maman", line: "Parfait, je la prends." },
        { who: "Zoé", line: "Moi, je veux le hamburger ! Mais sans oignons, je les déteste." },
        { who: "La serveuse", line: "Très bien. Et comme boissons ?" },
        { who: "Papa", line: "Une bouteille d'eau gazeuse et un jus d'orange pour la petite." }
      ],
      activities: [
        {
          type: "match", title: "Qui commande quoi ?",
          pairs: [["le père", "le poisson du jour"], ["la mère", "la salade végétarienne"], ["Zoé", "le hamburger sans oignons"]]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "La salade est très épicée.", a: false },
            { s: "Zoé déteste les oignons.", a: true },
            { s: "Ils commandent de l'eau gazeuse.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez le menu du restaurant « Chez Paulette ».",
      title: "Chez Paulette – Menu du jour (18 €)",
      text: [
        "**Entrées** : soupe à l'oignon · salade de chèvre chaud · œuf mayonnaise",
        "**Plats** : steak-frites · poulet rôti et légumes · ratatouille (végétarien)",
        "**Desserts** : crème brûlée · tarte aux pommes · mousse au chocolat",
        "Le menu comprend une entrée, un plat et un dessert. Boissons non comprises. Service du mardi au samedi, de 12 h à 14 h 30 et de 19 h à 22 h 30. Réservation conseillée le week-end."
      ],
      activities: [
        {
          type: "sort", title: "Entrée, plat ou dessert ?",
          bins: ["Entrée", "Plat", "Dessert"],
          items: [
            { text: "soupe à l'oignon", bin: 0 }, { text: "œuf mayonnaise", bin: 0 },
            { text: "poulet rôti", bin: 1 }, { text: "ratatouille", bin: 1 },
            { text: "crème brûlée", bin: 2 }, { text: "tarte aux pommes", bin: 2 }
          ]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Le menu coûte 18 euros.", a: true },
            { s: "Les boissons sont comprises.", a: false },
            { s: "Le restaurant est ouvert le lundi.", a: false },
            { s: "Il y a un plat végétarien.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez les pronoms, puis écrivez un avis.",
      activities: [
        {
          type: "rewrite", title: "Remplacez par un pronom",
          prompt: "Répondez avec *le, la, l'* ou *les*.",
          items: [
            { q: "Tu prends la soupe ? (oui)", a: ["Oui, je la prends."] },
            { q: "Vous aimez les desserts ? (oui)", a: ["Oui, je les aime.", "Oui, nous les aimons."] },
            { q: "Il boit le café ? (non)", a: ["Non, il ne le boit pas."] },
            { q: "Tu vas réserver la table ? (oui)", a: ["Oui, je vais la réserver."] }
          ]
        },
        {
          type: "write", title: "Mon avis sur un restaurant",
          prompt: "Écrivez un avis sur un restaurant (vrai ou imaginaire) : ce que vous avez commandé, le service, le prix. Utilisez deux pronoms COD.",
          minWords: 50, maxWords: 80,
          model: "★★★★☆ Hier soir, j'ai dîné Chez Paulette avec mes amis. Comme entrée, j'ai pris la soupe à l'oignon : je la recommande ! Ensuite, j'ai mangé le steak-frites. Les frites étaient excellentes, je les ai adorées. Le serveur était très sympathique. Le menu coûte 18 euros : ce n'est pas cher. Le seul problème : la musique était trop forte.",
          bank: ["Comme entrée, j'ai pris…", "Je la / le / les recommande.", "Le service était…", "Le prix…", "Le seul problème,…"],
          checklist: ["J'ai parlé du repas, du service et du prix.", "J'ai utilisé deux pronoms COD.", "J'ai donné une note."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Commandez !",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Je voudrais la soupe à l'oignon." },
            { s: "Je vais prendre le steak-frites." },
            { s: "À point, s'il vous plaît." },
            { s: "Je la prends." },
            { s: "Une carafe d'eau, s'il vous plaît." },
            { s: "L'addition, s'il vous plaît !" }
          ]
        },
        {
          type: "speak", title: "Ma commande",
          prompt: "Regardez le menu de « Chez Paulette ». Enregistrez votre commande complète : entrée, plat, dessert et boisson. Expliquez vos choix.",
          language: ["Comme entrée, je voudrais…", "Comme plat, je vais prendre…", "Je la / le prends parce que…", "Comme boisson,…"],
          seconds: 60,
          checklist: ["commandé les trois plats ?", "utilisé *je voudrais* ?", "utilisé un pronom COD ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux comprendre un menu.", review: "Lire" },
    { can: "Je peux commander poliment.", review: "Explication : commander" },
    { can: "Je peux utiliser *le, la, l', les*.", review: "Explication : les pronoms COD" },
    { can: "Je peux placer le pronom au négatif et avec un infinitif.", review: "Écrire, activité 1" },
    { can: "Je peux comprendre une commande au restaurant.", review: "Écouter" },
    { can: "Je peux écrire un avis sur un restaurant.", review: "Écrire, activité 2" }
  ]
};
