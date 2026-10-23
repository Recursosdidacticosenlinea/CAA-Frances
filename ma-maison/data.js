window.UNIT = {
  slug: "ma-maison",
  title: "Ma maison",
  level: "A1",
  subject: "Le monde autour de moi",
  minutes: 45,
  focus: ["les pièces de la maison", "les meubles", "sur, sous, dans, devant, derrière", "Où est… ?"],

  presentation: {
    scene: "🏠🛋️🛏️",
    situation: "Inès a un nouvel appartement. Elle fait une **visite vidéo** pour son amie Camille. Elle montre les pièces et les meubles.",
    warmup: {
      prompt: "Qu'est-ce qu'il y a chez vous ?",
      options: ["un salon", "une cuisine", "une chambre", "deux chambres", "un jardin", "un balcon", "un garage", "une terrasse"],
      response: "Très bien ! Vous allez apprendre à décrire votre maison."
    },
    dialogueTitle: "La visite vidéo",
    dialogue: [
      { who: "Camille", line: "Alors, montre-moi ton appartement !" },
      { who: "Inès", line: "Voici *le salon*. Il y a *un canapé* bleu et *une table*." },
      { who: "Camille", line: "C'est joli ! Et la télé ?" },
      { who: "Inès", line: "La télé est *sur* le meuble, *devant* le canapé." },
      { who: "Camille", line: "*Où est* ta chambre ?" },
      { who: "Inès", line: "Elle est *à côté de* la salle de bains. Regarde : *le lit*, *l'armoire*… et mon chat *sous* le lit !" },
      { who: "Camille", line: "Ha ha ! Il est mignon !" }
    ]
  },

  objectives: [
    "Je peux nommer les pièces de la maison.",
    "Je peux nommer des meubles.",
    "Je peux dire où sont les objets avec *sur, sous, dans, devant, derrière*.",
    "Je peux décrire ma maison."
  ],

  explanation: {
    vocabTitle: "La maison",
    vocab: [
      { word: "le salon", icon: "🛋️" }, { word: "la cuisine", icon: "🍳" }, { word: "la chambre", icon: "🛏️" }, { word: "la salle de bains", icon: "🛁" },
      { word: "les toilettes", icon: "🚽" }, { word: "le jardin", icon: "🌳" }, { word: "le canapé", icon: "🛋️" }, { word: "le lit", icon: "🛏️" },
      { word: "l'armoire", icon: "🚪" }, { word: "la table", icon: "🪑" }, { word: "la chaise", icon: "💺" }, { word: "la lampe", icon: "💡" },
      { word: "le frigo", icon: "🧊" }, { word: "la fenêtre", icon: "🪟" }
    ],
    grammar: [
      {
        title: "Les prépositions de lieu",
        head: ["Préposition", "Exemple"],
        rows: [
          ["*sur*", "Le livre est *sur* la table."], ["*sous*", "Le chat est *sous* le lit."],
          ["*dans*", "Le lait est *dans* le frigo."], ["*devant*", "La télé est *devant* le canapé."],
          ["*derrière*", "Le jardin est *derrière* la maison."], ["*à côté de*", "La chambre est *à côté de* la cuisine."]
        ],
        note: "*à côté de* + *le* = *à côté du* : *à côté du salon*."
      },
      {
        title: "Poser la question",
        head: ["Question", "Réponse"],
        rows: [
          ["*Où est* la lampe ?", "*Elle est* sur la table."],
          ["*Où sont* mes clés ?", "*Elles sont* dans ton sac."],
          ["*Qu'est-ce qu'il y a* dans le salon ?", "*Il y a* un canapé et une télé."]
        ]
      }
    ],
    watchOut: [
      ["Le chat est en le lit.", "Le chat est sur le lit."],
      ["à côté de le salon", "à côté du salon"],
      ["Où sont la lampe ?", "Où est la lampe ?"],
      ["Il y a un cuisine.", "Il y a une cuisine."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez.",
      items: ["Le lait est [[dans]] le frigo.", "Le chat dort [[sous]] le lit.", "[[Où]] sont mes clés ?"]
    }
  },

  skills: {
    listening: {
      intro: "Hugo cherche ses affaires. Sa mère l'aide. Écoutez.",
      title: "Où sont mes affaires ?",
      script: [
        { who: "Hugo", line: "Maman, où est mon téléphone ?" },
        { who: "Maman", line: "Il est sur la table de la cuisine." },
        { who: "Hugo", line: "Et mes clés ?" },
        { who: "Maman", line: "Elles sont dans ton sac, derrière la porte." },
        { who: "Hugo", line: "Et mon livre de français ?" },
        { who: "Maman", line: "Il est sous ton lit, dans ta chambre ! Range ta chambre, s'il te plaît !" }
      ],
      activities: [
        {
          type: "match", title: "Où sont les objets ?",
          pairs: [["le téléphone", "sur la table de la cuisine"], ["les clés", "dans le sac"], ["le sac", "derrière la porte"], ["le livre", "sous le lit"]]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Le téléphone est dans la chambre.", a: false },
            { s: "Les clés sont dans le sac.", a: true },
            { s: "La mère dit : « Range ta chambre. »", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez l'annonce d'un appartement pour étudiants.",
      title: "À louer : appartement pour étudiants",
      text: [
        "Bel appartement près de l'université. Il y a deux chambres, un salon, une cuisine et une salle de bains. Dans le salon, il y a un grand canapé et une table. La cuisine est équipée : il y a un frigo et un four.",
        "Dans chaque chambre, il y a un lit, un bureau et une armoire. Il n'y a pas de jardin, mais il y a un petit balcon devant le salon. Prix : 500 euros par mois."
      ],
      activities: [
        {
          type: "sort", title: "Quelle pièce ?",
          prompt: "Mettez chaque meuble dans la bonne pièce.",
          bins: ["le salon", "la cuisine", "la chambre"],
          items: [
            { text: "un grand canapé", bin: 0 }, { text: "une table", bin: 0 },
            { text: "un frigo", bin: 1 }, { text: "un four", bin: 1 },
            { text: "un lit", bin: 2 }, { text: "un bureau", bin: 2 }, { text: "une armoire", bin: 2 }
          ]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Il y a trois chambres.", a: false },
            { s: "Il n'y a pas de jardin.", a: true },
            { s: "Le balcon est devant le salon.", a: true },
            { s: "Le prix est de 500 euros par mois.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis décrivez votre maison.",
      activities: [
        {
          type: "tiles", title: "Mettez les mots dans l'ordre",
          items: [
            { a: "Où est la lampe ?" },
            { a: "Le chat est sous la table." },
            { a: "Il y a un canapé dans le salon." },
            { a: "La cuisine est à côté du salon." }
          ]
        },
        {
          type: "write", title: "Ma maison",
          prompt: "Décrivez votre maison ou votre appartement : les pièces, les meubles et où ils sont.",
          minWords: 35, maxWords: 60,
          model: "J'habite dans une petite maison. Il y a un salon, une cuisine, deux chambres et une salle de bains. Dans le salon, il y a un canapé vert et une télé. Ma chambre est à côté de la cuisine. Mon lit est sous la fenêtre. Derrière la maison, il y a un petit jardin.",
          bank: ["J'habite dans…", "Il y a…", "Dans le salon,", "à côté de", "sous / sur / devant / derrière"],
          checklist: ["J'ai nommé trois pièces.", "J'ai nommé quatre meubles.", "J'ai utilisé trois prépositions de lieu."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Dans la maison",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Voici le salon." },
            { s: "Où est ma chambre ?" },
            { s: "Le chat est sous le lit." },
            { s: "La télé est devant le canapé." },
            { s: "Le lait est dans le frigo." },
            { s: "La cuisine est à côté du salon." }
          ]
        },
        {
          type: "speak", title: "Visite de ma maison",
          prompt: "Faites une visite vidéo (ou audio) de votre maison. Présentez trois pièces et dites où sont les meubles.",
          language: ["Voici…", "Il y a…", "Le / La… est sur / sous / devant…", "C'est ma pièce préférée."],
          seconds: 60,
          checklist: ["présenté trois pièces ?", "utilisé trois prépositions ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux nommer les pièces de la maison.", review: "Explication : le vocabulaire" },
    { can: "Je peux nommer dix meubles et objets.", review: "Explication : le vocabulaire" },
    { can: "Je peux utiliser *sur, sous, dans, devant, derrière*.", review: "Explication : les prépositions de lieu" },
    { can: "Je peux demander *Où est… ? Où sont… ?*", review: "Explication : poser la question" },
    { can: "Je peux comprendre une annonce de logement simple.", review: "Lire" },
    { can: "Je peux décrire ma maison.", review: "Écrire, activité 2 et Parler, activité 2" }
  ]
};
