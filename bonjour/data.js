window.UNIT = {
  slug: "bonjour",
  title: "Bonjour !",
  level: "A1",
  subject: "Premiers pas",
  minutes: 45,
  focus: ["bonjour, salut, au revoir", "je m'appelle…", "le verbe être", "tu ou vous ?"],

  presentation: {
    scene: "👋🙂🤝",
    situation: "C'est le premier jour du cours de français à l'université. Les étudiants arrivent dans la salle. Ils ne se connaissent pas. Ils disent **bonjour** et ils se présentent.",
    warmup: {
      prompt: "Quels mots en français vous connaissez déjà ?",
      options: ["bonjour", "salut", "merci", "au revoir", "oui", "non", "s'il vous plaît", "ça va ?", "bonsoir", "à bientôt"],
      response: "Très bien ! Vous connaissez déjà des mots en français."
    },
    dialogueTitle: "Dans la salle de classe",
    dialogue: [
      { who: "Mme Martin", line: "Bonjour à tous ! Je m'appelle Claire Martin. Je suis votre professeure." },
      { who: "Lucas", line: "Bonjour, madame !" },
      { who: "Mme Martin", line: "Comment *vous vous appelez* ?" },
      { who: "Lucas", line: "*Je m'appelle* Lucas. *Je suis* mexicain." },
      { who: "Léa", line: "*Salut*, Lucas ! Moi, c'est Léa. *Ça va* ?" },
      { who: "Lucas", line: "*Ça va bien*, merci. Et toi ?" },
      { who: "Léa", line: "Très bien ! *Enchantée* !" }
    ]
  },

  objectives: [
    "Je peux dire *bonjour* et *au revoir*.",
    "Je peux dire mon nom avec *je m'appelle…*",
    "Je peux utiliser le verbe *être* : *je suis, tu es, il est…*",
    "Je peux choisir entre *tu* et *vous*."
  ],

  explanation: {
    vocabTitle: "Saluer et prendre congé",
    vocab: [
      { word: "bonjour", icon: "☀️" }, { word: "bonsoir", icon: "🌙" }, { word: "salut", icon: "👋" },
      { word: "au revoir", icon: "🚪" }, { word: "à bientôt", icon: "🔜" }, { word: "à demain", icon: "📅" },
      { word: "merci", icon: "🙏" }, { word: "s'il vous plaît", icon: "🙂" }, { word: "enchanté", icon: "🤝" },
      { word: "ça va ?", icon: "❓" }, { word: "ça va bien", icon: "👍" }, { word: "comme ci, comme ça", icon: "🤷" },
      { word: "oui", icon: "✅" }, { word: "non", icon: "❌" }
    ],
    grammar: [
      {
        title: "Se présenter",
        head: ["Question", "Réponse"],
        rows: [
          ["Comment *tu t'appelles* ?", "*Je m'appelle* Léa."],
          ["Comment *vous vous appelez* ?", "*Je m'appelle* Lucas Pérez."],
          ["Tu es d'où ?", "*Je suis* mexicain / mexicaine."],
          ["Ça va ?", "Ça va bien, merci. Et toi ?"]
        ],
        note: "*Moi, c'est…* est aussi possible : *Moi, c'est Léa.*"
      },
      {
        title: "Le verbe être",
        head: ["Pronom", "être", "Exemple"],
        rows: [
          ["je", "*suis*", "Je suis étudiant."], ["tu", "*es*", "Tu es professeur ?"],
          ["il / elle", "*est*", "Elle est française."], ["nous", "*sommes*", "Nous sommes amis."],
          ["vous", "*êtes*", "Vous êtes madame Martin ?"], ["ils / elles", "*sont*", "Ils sont mexicains."]
        ]
      },
      {
        title: "Tu ou vous ?",
        head: ["", "Quand ?", "Exemple"],
        rows: [
          ["*tu*", "un ami, un enfant, un camarade de classe", "Salut ! Tu vas bien ?"],
          ["*vous*", "un professeur, une personne inconnue, plusieurs personnes", "Bonjour, madame. Vous allez bien ?"]
        ],
        note: "*Salut* = avec *tu*. *Bonjour* = avec *tu* et avec *vous*."
      }
    ],
    watchOut: [
      ["Je suis Léa et j'ai étudiant.", "Je suis Léa et je suis étudiante."],
      ["Salut, madame Martin !", "Bonjour, madame Martin !"],
      ["Je m'appelle est Lucas.", "Je m'appelle Lucas."],
      ["Elle es française.", "Elle est française."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez les phrases.",
      items: [
        "Je m'[[appelle]] Sofía.",
        "Nous [[sommes]] étudiants.",
        "Bonjour, madame. Comment [[vous]] vous appelez ?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Trois personnes se présentent à la cafétéria de l'université. Écoutez.",
      title: "À la cafétéria",
      script: [
        { who: "Karim", line: "Salut ! Je m'appelle Karim. Et toi ?" },
        { who: "Inès", line: "Moi, c'est Inès. Enchantée !" },
        { who: "Karim", line: "Tu es étudiante en médecine ?" },
        { who: "Inès", line: "Non, je suis étudiante en architecture. Et toi ?" },
        { who: "Karim", line: "Moi, je suis étudiant en droit. Je suis marocain." },
        { who: "Inès", line: "Ah, cool ! Moi, je suis française. Oh, voilà monsieur Dubois !" },
        { who: "M. Dubois", line: "Bonjour, Inès. Bonjour, monsieur." },
        { who: "Karim", line: "Bonjour, monsieur. Je m'appelle Karim Benali." },
        { who: "M. Dubois", line: "Enchanté, Karim. Vous êtes nouveau ?" },
        { who: "Karim", line: "Oui, je suis nouveau. Bon, au revoir ! À demain !" },
        { who: "Inès", line: "Salut, Karim ! À bientôt !" }
      ],
      activities: [
        {
          type: "match", title: "Qui est qui ?",
          prompt: "Associez la personne et l'information.",
          pairs: [
            ["Karim", "étudiant en droit"], ["Inès", "étudiante en architecture"],
            ["M. Dubois", "un professeur"], ["Karim est…", "marocain"], ["Inès est…", "française"]
          ]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          prompt: "Écoutez encore une fois.",
          items: [
            { s: "Inès est étudiante en médecine.", a: false },
            { s: "Karim est nouveau.", a: true },
            { s: "Karim dit *salut* à monsieur Dubois.", a: false },
            { s: "Monsieur Dubois dit *vous* à Karim.", a: true },
            { s: "À la fin, Karim dit *à demain*.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Des étudiants écrivent sur le forum du cours de français.",
      title: "Forum : Présentez-vous !",
      text: [
        { author: "Sofía", body: "Bonjour à tous ! Je m'appelle Sofía. Je suis mexicaine. Je suis étudiante en psychologie. Je suis contente d'apprendre le français !" },
        { author: "Thomas", body: "Salut ! Moi, c'est Thomas. Je suis canadien, de Montréal. Je suis étudiant en informatique. Ça va, vous ?" },
        { author: "Amina", body: "Bonsoir ! Je m'appelle Amina. Je suis sénégalaise. Je suis étudiante en économie. Enchantée et à bientôt !" }
      ],
      activities: [
        {
          type: "sort", title: "Classez les informations",
          prompt: "Mettez chaque information dans la bonne boîte.",
          bins: ["Sofía", "Thomas", "Amina"],
          items: [
            { text: "mexicaine", bin: 0 }, { text: "psychologie", bin: 0 },
            { text: "canadien", bin: 1 }, { text: "informatique", bin: 1 }, { text: "Montréal", bin: 1 },
            { text: "sénégalaise", bin: 2 }, { text: "économie", bin: 2 }
          ]
        },
        {
          type: "gap", title: "Complétez le message",
          prompt: "Complétez le message de Diego avec les mots de la liste.",
          bank: true,
          items: [
            "[[Bonjour]] à tous !",
            "Je m'[[appelle]] Diego.",
            "Je [[suis]] colombien.",
            "Je suis étudiant [[en]] musique.",
            "Au [[revoir]] et à bientôt !"
          ]
        }
      ]
    },

    writing: {
      intro: "Mettez les mots dans l'ordre, puis écrivez votre présentation.",
      activities: [
        {
          type: "tiles", title: "Mettez les mots dans l'ordre",
          items: [
            { a: "Je m'appelle Lucas." },
            { a: "Comment tu t'appelles ?" },
            { a: "Elle est étudiante en médecine." },
            { a: "Nous sommes mexicains." },
            { a: "Ça va bien, merci." }
          ]
        },
        {
          type: "write", title: "Ma présentation",
          prompt: "Écrivez un message pour le forum du cours. Dites bonjour, votre nom, votre nationalité et vos études. Dites au revoir.",
          minWords: 25, maxWords: 50,
          model: "Bonjour à tous ! Je m'appelle Camila. Je suis mexicaine, de Puebla. Je suis étudiante en biologie. Je suis contente d'apprendre le français. À bientôt !",
          bank: ["Bonjour à tous !", "Je m'appelle", "Je suis", "étudiant / étudiante en", "À bientôt !"],
          checklist: [
            "J'ai dit **bonjour** et **au revoir**.",
            "J'ai écrit mon nom avec *je m'appelle*.",
            "J'ai utilisé *je suis* deux fois.",
            "J'ai fait attention à *étudiant* / *étudiante*."
          ]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Dites-le bien !",
          prompt: "Écoutez et répétez les phrases pour saluer et vous présenter.",
          items: [
            { s: "Bonjour, madame !" },
            { s: "Comment vous vous appelez ?" },
            { s: "Comment tu t'appelles ?" },
            { s: "Ça va bien, merci. Et toi ?" },
            { s: "Je suis étudiante en médecine." },
            { s: "Au revoir et à bientôt !" }
          ]
        },
        {
          type: "speak", title: "Je me présente",
          prompt: "Enregistrez-vous pendant 30 secondes environ. Dites bonjour, votre nom, votre nationalité et vos études.",
          language: ["Bonjour !", "Je m'appelle…", "Je suis mexicain / mexicaine.", "Je suis étudiant(e) en…", "Au revoir !"],
          seconds: 45,
          checklist: ["dit bonjour ?", "dit votre nom ?", "utilisé *je suis* ?", "dit au revoir ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux dire bonjour, salut, bonsoir et au revoir.", review: "Explication : le vocabulaire" },
    { can: "Je peux dire mon nom et demander le nom d'une personne.", review: "Explication : se présenter" },
    { can: "Je peux conjuguer le verbe *être* au présent.", review: "Explication : le verbe être" },
    { can: "Je peux choisir entre *tu* et *vous*.", review: "Explication : tu ou vous ?" },
    { can: "Je peux comprendre une présentation simple.", review: "Écouter et Lire" },
    { can: "Je peux me présenter à l'écrit et à l'oral.", review: "Écrire, activité 2 et Parler, activité 2" }
  ]
};
