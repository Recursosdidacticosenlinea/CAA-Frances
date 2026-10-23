window.UNIT = {
  slug: "jours-et-mois",
  title: "Les jours et les mois",
  level: "A1",
  subject: "Le temps",
  minutes: 45,
  focus: ["les jours de la semaine", "les mois de l'année", "la date", "C'est quand ton anniversaire ?"],

  presentation: {
    scene: "📅🎂🗓️",
    situation: "Emma et Yanis regardent le calendrier de la classe. Ils cherchent les **anniversaires** des camarades.",
    warmup: {
      prompt: "Quel est votre jour préféré ?",
      options: ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"],
      response: "Bon choix ! Et pourquoi ? Vous allez apprendre à le dire."
    },
    dialogueTitle: "Le calendrier des anniversaires",
    dialogue: [
      { who: "Emma", line: "Yanis, *c'est quand ton anniversaire* ?" },
      { who: "Yanis", line: "*C'est le 3 mars*. Et toi ?" },
      { who: "Emma", line: "Moi, c'est *le 21 juillet*, en été !" },
      { who: "Yanis", line: "Et aujourd'hui, *on est le combien* ?" },
      { who: "Emma", line: "*Aujourd'hui, on est mardi 14 octobre*." },
      { who: "Yanis", line: "Oh ! L'anniversaire de Léa, c'est *jeudi* ! Le 16 octobre." },
      { who: "Emma", line: "On organise une petite fête ?" }
    ]
  },

  objectives: [
    "Je peux dire les jours de la semaine.",
    "Je peux dire les mois de l'année.",
    "Je peux dire et écrire la date.",
    "Je peux demander et dire la date d'un anniversaire."
  ],

  explanation: {
    vocabTitle: "Les jours et les mois",
    vocab: [
      { word: "lundi", icon: "1️⃣" }, { word: "mardi", icon: "2️⃣" }, { word: "mercredi", icon: "3️⃣" }, { word: "jeudi", icon: "4️⃣" },
      { word: "vendredi", icon: "5️⃣" }, { word: "samedi", icon: "6️⃣" }, { word: "dimanche", icon: "7️⃣" },
      { word: "janvier", icon: "❄️" }, { word: "février", icon: "💘" }, { word: "mars", icon: "🌱" }, { word: "avril", icon: "🌷" },
      { word: "mai", icon: "🌼" }, { word: "juin", icon: "🌞" }, { word: "juillet", icon: "🏖️" }, { word: "août", icon: "⛱️" },
      { word: "septembre", icon: "🎒" }, { word: "octobre", icon: "🍂" }, { word: "novembre", icon: "🌧️" }, { word: "décembre", icon: "🎄" }
    ],
    grammar: [
      {
        title: "La date",
        head: ["Question", "Réponse"],
        rows: [
          ["*On est quel jour* ?", "On est lundi."],
          ["*On est le combien* ?", "On est le 14 (octobre)."],
          ["*Quelle est la date* aujourd'hui ?", "C'est le mardi 14 octobre."],
          ["*C'est quand* ton anniversaire ?", "C'est *le 1er* (premier) mai."]
        ],
        note: "Pour le 1, on dit *le premier*. Après, *le deux, le trois, le quatre*…"
      },
      {
        title: "Les petits mots du temps",
        head: ["Mot", "Exemple"],
        rows: [
          ["*le* + jour = chaque semaine", "*Le lundi*, j'ai cours de français. (tous les lundis)"],
          ["jour sans article = un jour précis", "*Lundi*, je vais au cinéma. (ce lundi)"],
          ["*en* + mois", "Mon anniversaire est *en* juillet."],
          ["*le* + date", "La fête est *le* 16 octobre."]
        ],
        note: "En français, les jours et les mois s'écrivent avec une **minuscule** : *lundi, janvier*."
      }
    ],
    watchOut: [
      ["Lundi, Mars", "lundi, mars"],
      ["le un mai", "le premier mai"],
      ["Mon anniversaire est dans juillet.", "Mon anniversaire est en juillet."],
      ["C'est le mai 3.", "C'est le 3 mai."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez.",
      items: ["Après lundi, c'est [[mardi]].", "Mon anniversaire est [[en]] avril.", "1/5 = le [[premier]] mai."]
    }
  },

  skills: {
    listening: {
      intro: "Le professeur annonce le programme de la semaine. Écoutez.",
      title: "Le programme de la semaine",
      script: [
        { who: "Le professeur", line: "Bonjour à tous ! Voici le programme de la semaine." },
        { who: "Le professeur", line: "Lundi, nous avons un examen de vocabulaire." },
        { who: "Le professeur", line: "Mercredi, nous regardons un film français." },
        { who: "Le professeur", line: "Vendredi, c'est l'anniversaire de Camille : nous faisons une petite fête !" },
        { who: "Le professeur", line: "Et attention : le samedi 15 novembre, il y a une excursion à la bibliothèque centrale." },
        { who: "Camille", line: "Merci, monsieur ! Mon anniversaire, c'est le 14 novembre." }
      ],
      activities: [
        {
          type: "match", title: "Quel jour ?",
          prompt: "Associez le jour et l'activité.",
          pairs: [["lundi", "un examen de vocabulaire"], ["mercredi", "un film français"], ["vendredi", "une petite fête"], ["samedi", "une excursion"]]
        },
        {
          type: "gap", title: "Les dates",
          prompt: "Écoutez encore et complétez.",
          items: ["L'excursion est le samedi [[15|quinze]] novembre.", "L'anniversaire de Camille est le [[14|quatorze]] novembre."]
        }
      ]
    },

    reading: {
      intro: "Lisez l'agenda de Lucie.",
      title: "L'agenda de Lucie",
      text: [
        { author: "Lundi 6 mai", body: "Cours de français à 9 h. Le soir, sport avec Manon." },
        { author: "Mercredi 8 mai", body: "Jour férié en France ! Pas de cours. Pique-nique avec la famille." },
        { author: "Samedi 11 mai", body: "Anniversaire de mon frère Hugo : il a vingt ans ! Fête à la maison." },
        { author: "Dimanche 12 mai", body: "Repos. Je téléphone à ma grand-mère." }
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Lucie a cours de français le lundi 6 mai.", a: true },
            { s: "Le 8 mai, Lucie va à l'université.", a: false },
            { s: "L'anniversaire d'Hugo est le samedi 11 mai.", a: true },
            { s: "Le dimanche, Lucie fait du sport.", a: false }
          ]
        },
        {
          type: "rewrite", title: "Écrivez la date en lettres",
          prompt: "Écrivez la date en lettres.",
          items: [
            { q: "lun. 6/5", a: ["lundi six mai", "le lundi six mai"] },
            { q: "sam. 11/5", a: ["samedi onze mai", "le samedi onze mai"] },
            { q: "1/1", a: ["le premier janvier", "premier janvier"] },
            { q: "25/12", a: ["le vingt-cinq décembre", "vingt-cinq décembre"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis écrivez votre semaine.",
      activities: [
        {
          type: "tiles", title: "Mettez les mots dans l'ordre",
          items: [
            { a: "C'est quand ton anniversaire ?" },
            { a: "Mon anniversaire est le 2 juin." },
            { a: "On est quel jour aujourd'hui ?" },
            { a: "Le samedi, je ne travaille pas." }
          ]
        },
        {
          type: "write", title: "Ma semaine idéale",
          prompt: "Écrivez votre semaine : une activité pour chaque jour. Dites aussi la date de votre anniversaire.",
          minWords: 40, maxWords: 70,
          model: "Le lundi, j'ai cours de mathématiques. Le mardi, je fais du sport. Le mercredi, je regarde des séries. Le jeudi, j'étudie à la bibliothèque. Le vendredi, je sors avec mes amis. Le samedi, je travaille au café et le dimanche, je dors ! Mon anniversaire est le 9 septembre.",
          bank: ["Le lundi,", "Le week-end,", "Mon anniversaire est le…", "j'ai cours de…", "je fais du sport"],
          checklist: ["J'ai écrit les sept jours.", "Les jours sont en **minuscules**.", "J'ai écrit la date de mon anniversaire."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Dites la date",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "On est quel jour aujourd'hui ?" },
            { s: "Aujourd'hui, on est mardi quatorze octobre.", alt: ["Aujourd'hui, on est mardi 14 octobre."] },
            { s: "C'est quand ton anniversaire ?" },
            { s: "Mon anniversaire est le premier mai.", alt: ["Mon anniversaire est le 1er mai."] },
            { s: "Le samedi, je ne travaille pas." },
            { s: "En juillet, il fait chaud." }
          ]
        },
        {
          type: "speak", title: "Ma semaine",
          prompt: "Parlez de votre semaine pendant une minute : qu'est-ce que vous faites chaque jour ?",
          language: ["Le lundi, …", "Le mardi et le jeudi, …", "Le week-end, …"],
          seconds: 70,
          checklist: ["dit les sept jours ?", "utilisé *le* + jour ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux dire les sept jours de la semaine.", review: "Explication : le vocabulaire" },
    { can: "Je peux dire les douze mois de l'année.", review: "Explication : le vocabulaire" },
    { can: "Je peux dire et écrire la date.", review: "Explication : la date ; Lire, activité 2" },
    { can: "Je peux utiliser *le* lundi, *en* mai, *le* 3 mars.", review: "Explication : les petits mots du temps" },
    { can: "Je peux comprendre un programme de la semaine.", review: "Écouter" },
    { can: "Je peux parler de ma semaine.", review: "Écrire, activité 2 et Parler, activité 2" }
  ]
};
