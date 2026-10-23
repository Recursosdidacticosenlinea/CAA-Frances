window.UNIT = {
  slug: "salle-de-classe",
  title: "Dans la salle de classe",
  level: "A1",
  subject: "Les études",
  minutes: 45,
  focus: ["les objets de la classe", "un, une, des", "il y a / il n'y a pas de", "Qu'est-ce que c'est ?"],

  presentation: {
    scene: "🎒✏️📚",
    situation: "Nathan arrive en retard au cours. Il n'a pas ses affaires ! Il demande des objets à sa voisine, Chloé.",
    warmup: {
      prompt: "Qu'est-ce qu'il y a dans votre sac aujourd'hui ?",
      options: ["un livre", "un cahier", "un stylo", "un crayon", "une gomme", "une trousse", "un ordinateur", "un téléphone", "une bouteille d'eau", "des clés"],
      response: "Très bien ! Vous connaissez déjà des objets de la classe."
    },
    dialogueTitle: "Tu as un stylo ?",
    dialogue: [
      { who: "Nathan", line: "Pardon, Chloé. Tu as *un stylo* ?" },
      { who: "Chloé", line: "Oui, voilà *un stylo* bleu." },
      { who: "Nathan", line: "Merci ! Et tu as *une feuille* ?" },
      { who: "Chloé", line: "Oui. *Il y a des feuilles* dans mon cahier." },
      { who: "Nathan", line: "*Qu'est-ce que c'est*, sur le tableau ?" },
      { who: "Chloé", line: "*C'est le* programme du cours. Et le livre est à la page dix." },
      { who: "Nathan", line: "Oh non, *il n'y a pas de* livre dans mon sac !" }
    ]
  },

  objectives: [
    "Je peux nommer douze objets de la classe.",
    "Je peux utiliser *un, une, des*.",
    "Je peux utiliser *il y a* et *il n'y a pas de*.",
    "Je peux demander un objet poliment."
  ],

  explanation: {
    vocabTitle: "Les objets de la classe",
    vocab: [
      { word: "un livre", icon: "📕" }, { word: "un cahier", icon: "📓" }, { word: "un stylo", icon: "🖊️" },
      { word: "un crayon", icon: "✏️" }, { word: "une gomme", icon: "🧽" }, { word: "une règle", icon: "📏" },
      { word: "une trousse", icon: "👝" }, { word: "un sac", icon: "🎒" }, { word: "une feuille", icon: "📄" },
      { word: "un ordinateur", icon: "💻" }, { word: "une table", icon: "🪑" }, { word: "une chaise", icon: "💺" },
      { word: "le tableau", icon: "🧑‍🏫" }, { word: "une fenêtre", icon: "🪟" }, { word: "une porte", icon: "🚪" }
    ],
    grammar: [
      {
        title: "Les articles indéfinis",
        head: ["Masculin", "Féminin", "Pluriel"],
        rows: [["*un* stylo", "*une* gomme", "*des* stylos / *des* gommes"], ["*un* ordinateur", "*une* table", "*des* ordinateurs"]],
        note: "Il n'y a pas de règle simple : apprenez le mot avec son article (*un* livre, *une* règle)."
      },
      {
        title: "Il y a / il n'y a pas de",
        head: ["Affirmatif", "Négatif"],
        rows: [
          ["*Il y a un* tableau.", "*Il n'y a pas de* tableau."],
          ["*Il y a une* fenêtre.", "*Il n'y a pas de* fenêtre."],
          ["*Il y a des* chaises.", "*Il n'y a pas de* chaises."],
          ["*Il y a un* ordinateur.", "*Il n'y a pas d'*ordinateur."]
        ],
        note: "Au négatif, *un, une, des* deviennent *de* (ou *d'* devant une voyelle)."
      },
      {
        title: "Demander un objet",
        head: ["Question", "Réponse"],
        rows: [
          ["*Qu'est-ce que c'est* ?", "*C'est un* cahier. / *Ce sont des* crayons."],
          ["*Tu as* une gomme ?", "Oui, voilà ! / Non, désolé(e)."],
          ["*Tu peux me prêter* ton stylo ?", "Bien sûr !"]
        ]
      }
    ],
    watchOut: [
      ["Il n'y a pas un livre.", "Il n'y a pas de livre."],
      ["Il y a des ordinateur.", "Il y a des ordinateurs."],
      ["C'est des stylos.", "Ce sont des stylos."],
      ["un gomme", "une gomme"]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez avec *un, une, des* ou *de*.",
      items: ["Il y a [[une]] fenêtre.", "Il y a [[des]] livres sur la table.", "Il n'y a pas [[de]] tableau."]
    }
  },

  skills: {
    listening: {
      intro: "Le professeur décrit la nouvelle salle de classe. Écoutez.",
      title: "La nouvelle salle",
      script: [
        { who: "Le professeur", line: "Bienvenue dans la nouvelle salle ! Elle est grande et moderne." },
        { who: "Le professeur", line: "Il y a vingt tables et quarante chaises." },
        { who: "Le professeur", line: "Il y a un grand tableau blanc et un écran pour les vidéos." },
        { who: "Le professeur", line: "Il y a trois fenêtres. Il n'y a pas de rideaux." },
        { who: "Manon", line: "Monsieur, il y a des ordinateurs ?" },
        { who: "Le professeur", line: "Non, il n'y a pas d'ordinateurs. Mais il y a le wifi !" }
      ],
      activities: [
        {
          type: "sort", title: "Il y a ou il n'y a pas ?",
          prompt: "Classez les objets.",
          bins: ["Il y a…", "Il n'y a pas de…"],
          items: [
            { text: "tables", bin: 0 }, { text: "un tableau blanc", bin: 0 }, { text: "un écran", bin: 0 }, { text: "le wifi", bin: 0 },
            { text: "rideaux", bin: 1 }, { text: "ordinateurs", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Combien ?",
          prompt: "Écrivez le nombre.",
          items: ["Il y a [[20|vingt]] tables.", "Il y a [[40|quarante]] chaises.", "Il y a [[3|trois]] fenêtres."]
        }
      ]
    },

    reading: {
      intro: "Lisez la liste de matériel pour le cours de français.",
      title: "Liste de matériel",
      text: [
        "**Cours de français – Niveau A1**",
        "Pour le cours, vous avez besoin de : un cahier grand format, un dictionnaire français-espagnol, deux stylos (un bleu et un rouge), un crayon et une gomme.",
        "Il n'y a pas de livre à acheter : les documents sont sur la plateforme. Les ordinateurs portables sont acceptés. Il n'y a pas de téléphone pendant les examens !"
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Il faut un dictionnaire.", a: true },
            { s: "Il faut trois stylos.", a: false },
            { s: "Il y a un livre à acheter.", a: false },
            { s: "Les téléphones sont acceptés pendant les examens.", a: false }
          ]
        },
        {
          type: "rewrite", title: "Au négatif",
          prompt: "Écrivez la phrase au négatif.",
          items: [
            { q: "Il y a un livre.", a: ["Il n'y a pas de livre."] },
            { q: "Il y a des ordinateurs.", a: ["Il n'y a pas d'ordinateurs."] },
            { q: "Il y a une gomme.", a: ["Il n'y a pas de gomme."] },
            { q: "Il y a des fenêtres.", a: ["Il n'y a pas de fenêtres."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis décrivez votre salle de classe.",
      activities: [
        {
          type: "tiles", title: "Mettez les mots dans l'ordre",
          items: [
            { a: "Qu'est-ce que c'est ?" },
            { a: "Ce sont des crayons." },
            { a: "Tu as une gomme ?" },
            { a: "Il n'y a pas de tableau." }
          ]
        },
        {
          type: "write", title: "Ma salle de classe",
          prompt: "Décrivez votre salle de classe (ou votre bureau à la maison). Qu'est-ce qu'il y a ? Qu'est-ce qu'il n'y a pas ?",
          minWords: 35, maxWords: 60,
          model: "Ma salle de classe est petite. Il y a quinze tables et trente chaises. Il y a un tableau blanc et une grande fenêtre. Sur la table du professeur, il y a un ordinateur. Il n'y a pas de télévision et il n'y a pas d'horloge !",
          bank: ["Ma salle de classe est…", "Il y a…", "Il n'y a pas de…", "Sur la table,"],
          checklist: ["J'ai utilisé *il y a* trois fois.", "J'ai utilisé *il n'y a pas de* une fois.", "J'ai fait attention à *un, une, des*."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Dans la classe",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Tu as un stylo ?" },
            { s: "Qu'est-ce que c'est ?" },
            { s: "Ce sont des crayons." },
            { s: "Il y a une grande fenêtre." },
            { s: "Il n'y a pas de tableau." },
            { s: "Tu peux me prêter ta gomme ?" }
          ]
        },
        {
          type: "speak", title: "Visite de ma salle",
          prompt: "Montrez votre salle ou votre bureau. Dites ce qu'il y a et ce qu'il n'y a pas.",
          language: ["Voici ma salle.", "Il y a…", "Il n'y a pas de…", "C'est un / une…"],
          seconds: 60,
          checklist: ["nommé six objets ?", "utilisé *il y a* et *il n'y a pas de* ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux nommer douze objets de la classe.", review: "Explication : le vocabulaire" },
    { can: "Je peux utiliser *un, une, des*.", review: "Explication : les articles indéfinis" },
    { can: "Je peux utiliser *il y a*.", review: "Explication : il y a" },
    { can: "Je peux utiliser *il n'y a pas de*.", review: "Lire, activité 2" },
    { can: "Je peux demander un objet poliment.", review: "Parler, activité 1" },
    { can: "Je peux décrire une salle.", review: "Écrire, activité 2 et Parler, activité 2" }
  ]
};
