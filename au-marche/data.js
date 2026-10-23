window.UNIT = {
  slug: "au-marche",
  title: "Au marché",
  level: "A2",
  subject: "La vie quotidienne",
  minutes: 50,
  focus: ["du, de la, de l', des", "les quantités", "Combien ça coûte ?", "Je voudrais…"],

  presentation: {
    scene: "🧺🍅💶",
    situation: "C'est samedi matin. Julie va au **marché** avec sa colocataire Paula. Elles achètent des fruits et des légumes pour la semaine.",
    warmup: {
      prompt: "Où faites-vous les courses ?",
      options: ["au marché", "au supermarché", "dans une petite épicerie", "en ligne", "à la boulangerie", "ce sont mes parents"],
      response: "D'accord ! En France, beaucoup de gens vont au marché le week-end."
    },
    dialogueTitle: "Chez le marchand de fruits et légumes",
    dialogue: [
      { who: "Le vendeur", line: "Bonjour, mesdames ! Qu'est-ce que je vous sers ?" },
      { who: "Julie", line: "Bonjour ! *Je voudrais un kilo de* tomates, s'il vous plaît." },
      { who: "Le vendeur", line: "Voilà. Et avec ça ?" },
      { who: "Paula", line: "*Une barquette de* fraises et *trois* avocats." },
      { who: "Le vendeur", line: "Désolé, je *n'ai plus d'*avocats aujourd'hui. Mais j'ai *des* mangues !" },
      { who: "Paula", line: "D'accord, deux mangues. *Ça fait combien* ?" },
      { who: "Le vendeur", line: "Alors… *ça fait* neuf euros cinquante." }
    ]
  },

  objectives: [
    "Je peux utiliser les articles partitifs *du, de la, de l', des*.",
    "Je peux exprimer une quantité : *un kilo de, une bouteille de, beaucoup de…*",
    "Je peux demander un prix et comprendre la réponse.",
    "Je peux faire des achats poliment avec *je voudrais*."
  ],

  explanation: {
    vocabTitle: "Au marché",
    vocab: [
      { word: "les tomates", icon: "🍅" }, { word: "les carottes", icon: "🥕" }, { word: "les pommes de terre", icon: "🥔" }, { word: "les oignons", icon: "🧅" },
      { word: "les fraises", icon: "🍓" }, { word: "les bananes", icon: "🍌" }, { word: "le raisin", icon: "🍇" }, { word: "la farine", icon: "🌾" },
      { word: "l'huile", icon: "🫒" }, { word: "le beurre", icon: "🧈" }, { word: "un kilo", icon: "⚖️" }, { word: "une bouteille", icon: "🍾" },
      { word: "un paquet", icon: "📦" }, { word: "une barquette", icon: "🧺" }, { word: "l'argent", icon: "💶" }
    ],
    grammar: [
      {
        title: "Les articles partitifs",
        intro: "On utilise le partitif pour une quantité **non précise** (une partie de quelque chose).",
        head: ["Masculin", "Féminin", "Voyelle", "Pluriel"],
        rows: [["*du* pain", "*de la* farine", "*de l'*huile", "*des* tomates"]],
        note: "Je mange *du* pain (un peu de pain). Mais : J'aime *le* pain (en général)."
      },
      {
        title: "Les quantités",
        head: ["Quantité précise", "Quantité avec un adverbe", "Négation"],
        rows: [
          ["un kilo *de* tomates", "beaucoup *de* fruits", "pas *de* sucre"],
          ["une bouteille *d'*eau", "un peu *de* beurre", "pas *d'*huile"],
          ["un paquet *de* riz", "trop *de* sel", "plus *de* lait"],
          ["200 grammes *de* fromage", "assez *d'*argent", ""]
        ],
        note: "Après une quantité, toujours *de* / *d'* : *un kilo de pommes* (pas *un kilo des pommes*)."
      },
      {
        title: "Acheter",
        head: ["Le client", "Le vendeur"],
        rows: [
          ["*Je voudrais*… / *Je vais prendre*…", "*Qu'est-ce que je vous sers ?*"],
          ["*C'est combien ?* / *Ça coûte combien ?*", "*C'est 3 euros le kilo.*"],
          ["*Ça fait combien ?*", "*Ça fait 9,50 €.* (neuf euros cinquante)"],
          ["*C'est tout, merci.*", "*Et avec ça ?*"]
        ]
      }
    ],
    watchOut: [
      ["Je voudrais un kilo des pommes.", "Je voudrais un kilo de pommes."],
      ["Je ne mange pas du pain.", "Je ne mange pas de pain."],
      ["Je bois de le lait.", "Je bois du lait."],
      ["Il y a beaucoup des gens.", "Il y a beaucoup de gens."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez avec *du, de la, de l', des* ou *de*.",
      items: ["Je prends [[de la]] farine.", "Un kilo [[de]] carottes, s'il vous plaît.", "Je ne mange pas [[de]] viande."]
    }
  },

  skills: {
    listening: {
      intro: "Paula fait les courses à la fromagerie. Écoutez.",
      title: "À la fromagerie",
      script: [
        { who: "La vendeuse", line: "Bonjour, mademoiselle. Vous désirez ?" },
        { who: "Paula", line: "Bonjour. Je voudrais du fromage pour une fête. Qu'est-ce que vous me conseillez ?" },
        { who: "La vendeuse", line: "Prenez du camembert et du comté. Ils sont excellents." },
        { who: "Paula", line: "D'accord. Un camembert et trois cents grammes de comté, s'il vous plaît. C'est combien, le comté ?" },
        { who: "La vendeuse", line: "Vingt-quatre euros le kilo. Et avec ça ?" },
        { who: "Paula", line: "Une bouteille de jus de pomme. C'est tout." },
        { who: "La vendeuse", line: "Ça fait quinze euros vingt, s'il vous plaît." }
      ],
      activities: [
        {
          type: "gap", title: "Les achats de Paula",
          prompt: "Écoutez et complétez.",
          items: [
            "Paula achète un [[camembert]].",
            "Elle achète [[300|trois cents]] grammes de comté.",
            "Le comté coûte [[24|vingt-quatre]] euros le kilo.",
            "Elle prend une [[bouteille]] de jus de pomme.",
            "Elle paie [[15,20|15.20|quinze euros vingt]] euros."
          ]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Paula achète du fromage pour un examen.", a: false },
            { s: "La vendeuse conseille deux fromages.", a: true },
            { s: "Paula achète du vin.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez la recette des crêpes de la grand-mère de Julie.",
      title: "Les crêpes de Mamie",
      text: [
        "**Ingrédients pour 15 crêpes** : 250 grammes de farine, 4 œufs, un demi-litre de lait, une pincée de sel, 50 grammes de beurre fondu et un peu de sucre.",
        "**Préparation** : Dans un saladier, mettez de la farine et du sel. Ajoutez des œufs et mélangez. Versez du lait petit à petit. Ajoutez du beurre fondu. Laissez reposer une heure. Faites cuire les crêpes dans une poêle chaude avec un peu d'huile. Mangez-les avec du sucre, de la confiture ou du chocolat !"
      ],
      activities: [
        {
          type: "match", title: "Les quantités",
          prompt: "Associez l'ingrédient et la quantité.",
          pairs: [["la farine", "250 grammes"], ["les œufs", "4"], ["le lait", "un demi-litre"], ["le sel", "une pincée"], ["le beurre", "50 grammes"]]
        },
        {
          type: "sort", title: "Du, de la, de l' ou des ?",
          prompt: "Classez les ingrédients.",
          bins: ["du", "de la", "de l'", "des"],
          items: [
            { text: "lait", bin: 0 }, { text: "sel", bin: 0 }, { text: "sucre", bin: 0 },
            { text: "farine", bin: 1 }, { text: "confiture", bin: 1 },
            { text: "huile", bin: 2 }, { text: "eau", bin: 2 },
            { text: "œufs", bin: 3 }, { text: "fraises", bin: 3 }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis écrivez votre liste de courses et votre recette.",
      activities: [
        {
          type: "rewrite", title: "Phrases négatives",
          prompt: "Écrivez la phrase au négatif.",
          items: [
            { q: "Je mange du pain.", a: ["Je ne mange pas de pain."] },
            { q: "Nous achetons des fraises.", a: ["Nous n'achetons pas de fraises."] },
            { q: "Il boit de l'eau.", a: ["Il ne boit pas d'eau."] },
            { q: "Elle prend de la confiture.", a: ["Elle ne prend pas de confiture."] }
          ]
        },
        {
          type: "write", title: "Ma recette préférée",
          prompt: "Écrivez la recette d'un plat simple de votre pays : les ingrédients avec les quantités, puis la préparation (avec l'impératif).",
          minWords: 50, maxWords: 90,
          model: "Le guacamole (pour 4 personnes). Ingrédients : trois avocats, une tomate, un demi-oignon, un citron vert, de la coriandre et du sel. Préparation : Coupez la tomate et l'oignon. Écrasez les avocats. Ajoutez du jus de citron, de la coriandre et un peu de sel. Mélangez et servez avec des tortillas !",
          bank: ["Ingrédients :", "un kilo de", "un peu de", "Coupez…", "Ajoutez…", "Mélangez…"],
          checklist: ["J'ai écrit trois quantités avec *de*.", "J'ai utilisé *du, de la* ou *des*.", "J'ai utilisé l'impératif pour la préparation."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Au marché",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Je voudrais un kilo de tomates." },
            { s: "Ça fait combien ?" },
            { s: "Je n'ai plus d'avocats." },
            { s: "Une bouteille d'eau, s'il vous plaît." },
            { s: "Et avec ça ?" },
            { s: "C'est tout, merci." }
          ]
        },
        {
          type: "speak", title: "Mon frigo",
          prompt: "Ouvrez votre frigo (ou imaginez-le). Dites ce qu'il y a et ce qu'il n'y a pas.",
          language: ["Dans mon frigo, il y a du / de la / des…", "Il n'y a pas de…", "Il y a beaucoup de…", "Il n'y a plus de…"],
          seconds: 60,
          checklist: ["utilisé des partitifs ?", "fait une phrase négative avec *pas de* ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux utiliser *du, de la, de l', des*.", review: "Explication : les articles partitifs" },
    { can: "Je peux exprimer une quantité avec *de*.", review: "Explication : les quantités" },
    { can: "Je peux utiliser *pas de* au négatif.", review: "Écrire, activité 1" },
    { can: "Je peux demander et comprendre un prix.", review: "Écouter, activité 1" },
    { can: "Je peux comprendre une recette.", review: "Lire" },
    { can: "Je peux faire des courses au marché.", review: "Parler, activité 1" }
  ]
};
