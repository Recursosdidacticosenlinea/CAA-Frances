window.UNIT = {
  slug: "ma-journee",
  title: "Ma journée",
  level: "A1",
  subject: "La vie quotidienne",
  minutes: 50,
  focus: ["Quelle heure est-il ?", "les verbes en -er", "à + heure", "la routine"],

  presentation: {
    scene: "⏰☕🚌",
    situation: "Lucie est étudiante en biologie. Elle a une journée très chargée. Elle parle de sa **routine** avec son ami Maxime.",
    warmup: {
      prompt: "Qu'est-ce que vous faites le matin ?",
      options: ["je déjeune", "je prends une douche", "je prends le bus", "je marche", "j'écoute de la musique", "je regarde mon téléphone", "je travaille", "j'étudie"],
      response: "Très bien ! Dans cette unité, vous allez raconter votre journée."
    },
    dialogueTitle: "Une journée chargée",
    dialogue: [
      { who: "Maxime", line: "Lucie, tu commences les cours à quelle heure ?" },
      { who: "Lucie", line: "Je *commence à huit heures*. Je *quitte* la maison *à sept heures*." },
      { who: "Maxime", line: "Et tu *déjeunes* où ?" },
      { who: "Lucie", line: "Je *déjeune* à la cafétéria *à midi et demi*." },
      { who: "Maxime", line: "Tu *rentres* tard ?" },
      { who: "Lucie", line: "Oui ! Je *travaille* dans un café l'après-midi. Je *rentre à sept heures et quart*." },
      { who: "Maxime", line: "Oh là là ! *Quelle heure est-il* ? *Il est deux heures moins le quart*… On a cours !" }
    ]
  },

  objectives: [
    "Je peux demander et dire l'heure.",
    "Je peux conjuguer les verbes en *-er* au présent.",
    "Je peux dire à quelle heure je fais une activité.",
    "Je peux raconter ma journée."
  ],

  explanation: {
    vocabTitle: "Les verbes de la journée",
    vocab: [
      { word: "se réveiller", icon: "⏰" }, { word: "déjeuner", icon: "🍽️" }, { word: "commencer", icon: "▶️" }, { word: "travailler", icon: "💼" },
      { word: "étudier", icon: "📚" }, { word: "marcher", icon: "🚶" }, { word: "rentrer", icon: "🏠" }, { word: "regarder", icon: "📺" },
      { word: "écouter", icon: "🎧" }, { word: "manger", icon: "🍲" }, { word: "le matin", icon: "🌅" }, { word: "l'après-midi", icon: "🌤️" },
      { word: "le soir", icon: "🌆" }, { word: "la nuit", icon: "🌙" }
    ],
    grammar: [
      {
        title: "L'heure",
        head: ["Heure", "On dit"],
        rows: [
          ["8 h 00", "Il est huit *heures*."],
          ["8 h 15", "Il est huit heures *et quart*."],
          ["8 h 30", "Il est huit heures *et demie*."],
          ["8 h 45", "Il est neuf heures *moins le quart*."],
          ["8 h 50", "Il est neuf heures *moins dix*."],
          ["12 h / 0 h", "Il est *midi*. / Il est *minuit*."]
        ],
        note: "Question : *Quelle heure est-il ?* Pour une activité : *à quelle heure ?* → *à* huit heures."
      },
      {
        title: "Les verbes en -er au présent",
        head: ["Pronom", "Terminaison", "travailler"],
        rows: [
          ["je", "*-e*", "je travaill*e*"], ["tu", "*-es*", "tu travaill*es*"], ["il / elle / on", "*-e*", "elle travaill*e*"],
          ["nous", "*-ons*", "nous travaill*ons*"], ["vous", "*-ez*", "vous travaill*ez*"], ["ils / elles", "*-ent*", "ils travaill*ent*"]
        ],
        note: "*-e, -es, -e, -ent* se prononcent pareil ! On n'entend pas la terminaison."
      }
    ],
    watchOut: [
      ["Il est huit et demie.", "Il est huit heures et demie."],
      ["Je commence en huit heures.", "Je commence à huit heures."],
      ["Ils travaillons.", "Ils travaillent."],
      ["Il est douze heures de la nuit.", "Il est minuit."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez.",
      items: ["Nous [[étudions|etudions]] le français. (étudier)", "Tu [[regardes]] la télé ? (regarder)", "10 h 30 = dix heures et [[demie]]"]
    }
  },

  skills: {
    listening: {
      intro: "Thomas, étudiant en médecine, raconte sa journée. Écoutez.",
      title: "La journée de Thomas",
      script: [
        { who: "Thomas", line: "Je me réveille à six heures. Je prends un café et je quitte la maison à sept heures moins le quart." },
        { who: "Thomas", line: "Les cours commencent à sept heures et demie. Le matin, j'étudie l'anatomie." },
        { who: "Thomas", line: "Je déjeune à une heure avec mes amis." },
        { who: "Thomas", line: "L'après-midi, je travaille à l'hôpital. Je rentre à huit heures du soir." },
        { who: "Thomas", line: "Le soir, je mange et je regarde une série. Je me couche à onze heures." }
      ],
      activities: [
        {
          type: "match", title: "À quelle heure ?",
          prompt: "Associez l'activité et l'heure.",
          pairs: [["il se réveille", "6 h 00"], ["il quitte la maison", "6 h 45"], ["les cours commencent", "7 h 30"], ["il déjeune", "13 h 00"], ["il rentre", "20 h 00"]]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Thomas étudie l'anatomie le matin.", a: true },
            { s: "Il déjeune seul.", a: false },
            { s: "Il travaille à l'hôpital l'après-midi.", a: true },
            { s: "Il se couche à minuit.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez le message de Sofía à sa correspondante française.",
      title: "Un message de Mexico",
      text: [
        "Salut Clara ! Tu demandes comment est ma journée ? Alors voilà. Je me réveille à six heures et quart. Je prends le métro à sept heures. À l'université, je commence à huit heures. J'étudie l'architecture : je dessine beaucoup !",
        "À deux heures, je mange avec ma famille. C'est l'heure du repas au Mexique. L'après-midi, je travaille dans une librairie. Le soir, je téléphone à mes amis et j'écoute de la musique. Et toi, ta journée ? Bisous, Sofía"
      ],
      activities: [
        {
          type: "gap", title: "Complétez",
          prompt: "Complétez avec les informations du texte.",
          items: [
            "Sofía se réveille à six heures et [[quart]].",
            "Elle prend le [[métro|metro]] à sept heures.",
            "Elle étudie l'[[architecture]].",
            "Elle mange avec sa famille à [[deux]] heures.",
            "L'après-midi, elle travaille dans une [[librairie]]."
          ]
        },
        {
          type: "rewrite", title: "Changez la personne",
          prompt: "Remplacez *je* par *nous*.",
          items: [
            { q: "Je dessine beaucoup.", a: ["Nous dessinons beaucoup."] },
            { q: "Je travaille dans une librairie.", a: ["Nous travaillons dans une librairie."] },
            { q: "J'écoute de la musique.", a: ["Nous écoutons de la musique."] },
            { q: "Je téléphone à mes amis.", a: ["Nous téléphonons à nos amis.", "Nous téléphonons à mes amis."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis écrivez votre journée.",
      activities: [
        {
          type: "tiles", title: "Mettez les mots dans l'ordre",
          items: [
            { a: "Quelle heure est-il ?" },
            { a: "Il est trois heures et quart." },
            { a: "Je déjeune à midi." },
            { a: "Vous travaillez le samedi ?" }
          ]
        },
        {
          type: "write", title: "Ma journée typique",
          prompt: "Répondez au message de Sofía. Racontez votre journée avec au moins cinq heures différentes.",
          minWords: 50, maxWords: 80,
          model: "Salut Sofía ! Moi, je me réveille à sept heures. Je prends le bus à huit heures moins le quart. Les cours commencent à huit heures et demie. Je déjeune à la cafétéria à une heure. L'après-midi, j'étudie à la bibliothèque. Je rentre à six heures. Le soir, je regarde des vidéos et je me couche à minuit. Bisous !",
          bank: ["Je me réveille à…", "Je commence à…", "Je déjeune à…", "L'après-midi,", "Le soir,", "Je rentre à…"],
          checklist: ["J'ai écrit au moins cinq heures.", "J'ai utilisé *à* + heure.", "J'ai bien conjugué les verbes en *-er*."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Dites l'heure",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Quelle heure est-il ?" },
            { s: "Il est huit heures et demie.", alt: ["Il est 8 h 30.", "Il est 8 heures et demie."] },
            { s: "Je commence à sept heures.", alt: ["Je commence à 7 heures.", "Je commence à 7 h."] },
            { s: "Je déjeune à midi." },
            { s: "L'après-midi, je travaille." },
            { s: "Le soir, je regarde une série." }
          ]
        },
        {
          type: "speak", title: "Ma journée",
          prompt: "Racontez votre journée typique en une minute.",
          language: ["Je me réveille à…", "Le matin, …", "À midi, …", "L'après-midi, …", "Le soir, …"],
          model: [
            { who: "Lucie", line: "Je me réveille à six heures et demie. Je commence les cours à huit heures. Je déjeune à midi et demi. L'après-midi, je travaille. Le soir, je regarde une série." }
          ],
          seconds: 70,
          checklist: ["dit au moins cinq heures ?", "parlé du matin, de l'après-midi et du soir ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux demander et dire l'heure.", review: "Explication : l'heure" },
    { can: "Je peux utiliser *et quart, et demie, moins le quart*.", review: "Parler, activité 1" },
    { can: "Je peux conjuguer les verbes en *-er*.", review: "Explication : les verbes en -er" },
    { can: "Je peux dire à quelle heure je fais une activité.", review: "Écouter, activité 1" },
    { can: "Je peux comprendre un texte sur une routine.", review: "Lire" },
    { can: "Je peux raconter ma journée.", review: "Écrire, activité 2 et Parler, activité 2" }
  ]
};
