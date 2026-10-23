window.UNIT = {
  slug: "en-ville",
  title: "En ville",
  level: "A2",
  subject: "Se déplacer",
  speakers: { "L'agent": "m" },
  minutes: 50,
  focus: ["les lieux de la ville", "l'impératif", "demander son chemin", "à côté de, en face de…"],

  presentation: {
    scene: "🏙️🗺️🚶",
    situation: "Andrés est étudiant en échange à Lyon. C'est son premier jour en ville. Il cherche la **pharmacie** et la **poste**. Il demande son chemin à une passante.",
    warmup: {
      prompt: "Quels lieux de la ville vous fréquentez souvent ?",
      options: ["la banque", "la pharmacie", "le supermarché", "le cinéma", "la gare", "le musée", "le parc", "la poste", "l'hôpital", "le café"],
      response: "Bien ! Maintenant, apprenez à trouver ces lieux en français."
    },
    dialogueTitle: "Pardon, madame…",
    dialogue: [
      { who: "Andrés", line: "Pardon, madame. *Où est* la pharmacie, s'il vous plaît ?" },
      { who: "Mme Girard", line: "C'est facile. *Allez tout droit*, puis *tournez à gauche* dans la rue Victor-Hugo." },
      { who: "Andrés", line: "Tout droit, puis à gauche… C'est loin ?" },
      { who: "Mme Girard", line: "Non, c'est à cinq minutes à pied. La pharmacie est *en face de* la banque." },
      { who: "Andrés", line: "Et la poste ? Il y a une poste *près d'ici* ?" },
      { who: "Mme Girard", line: "Oui, elle est *à côté de* la pharmacie. *Traversez* la place et c'est là." },
      { who: "Andrés", line: "Merci beaucoup, madame ! Bonne journée !" }
    ]
  },

  objectives: [
    "Je peux nommer les lieux de la ville.",
    "Je peux demander mon chemin poliment.",
    "Je peux donner des directions avec l'impératif.",
    "Je peux situer un lieu avec *à côté de, en face de, entre…*"
  ],

  explanation: {
    vocabTitle: "La ville",
    vocab: [
      { word: "la gare", icon: "🚉" }, { word: "la banque", icon: "🏦" }, { word: "la pharmacie", icon: "💊" }, { word: "la poste", icon: "📮" },
      { word: "l'hôpital", icon: "🏥" }, { word: "le musée", icon: "🏛️" }, { word: "le parc", icon: "🌳" }, { word: "le supermarché", icon: "🛒" },
      { word: "la boulangerie", icon: "🥖" }, { word: "la mairie", icon: "🏢" }, { word: "le carrefour", icon: "✳️" }, { word: "le feu", icon: "🚦" },
      { word: "la rue", icon: "🛣️" }, { word: "la place", icon: "⛲" }
    ],
    grammar: [
      {
        title: "L'impératif",
        head: ["Infinitif", "tu", "vous", "nous"],
        rows: [
          ["tourner", "*Tourne* à droite !", "*Tournez* à droite !", "*Tournons* à droite !"],
          ["aller", "*Va* tout droit !", "*Allez* tout droit !", "*Allons* tout droit !"],
          ["prendre", "*Prends* la 2e rue.", "*Prenez* la 2e rue.", "*Prenons* la 2e rue."],
          ["traverser", "*Traverse* la place.", "*Traversez* la place.", "*Traversons* la place."]
        ],
        note: "Pas de sujet à l'impératif. Avec *tu*, les verbes en *-er* perdent le *-s* : *tu tournes* → *Tourne !*"
      },
      {
        title: "Situer un lieu",
        head: ["Préposition", "Exemple"],
        rows: [
          ["*à côté de*", "La poste est à côté *de la* pharmacie."],
          ["*en face de*", "La pharmacie est en face *de la* banque."],
          ["*près de / loin de*", "Le parc est près *du* musée. (de + le = *du*)"],
          ["*entre… et…*", "Le café est entre la gare et l'hôtel."],
          ["*au coin de*", "La boulangerie est au coin *de la* rue."]
        ],
        note: "*de + le = du*, *de + les = des*, mais *de la* et *de l'* ne changent pas."
      }
    ],
    watchOut: [
      ["Tu tournes à gauche ! (ordre)", "Tourne à gauche !"],
      ["à côté de le musée", "à côté du musée"],
      ["Vous allez tout droit et tournez à la gauche.", "Allez tout droit et tournez à gauche."],
      ["Où est la gare, s'il te plaît, madame ?", "Où est la gare, s'il vous plaît, madame ?"]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez.",
      items: ["(vous, tourner) [[Tournez]] à droite.", "Le parc est près [[du]] musée.", "(tu, aller) [[Va]] tout droit."]
    }
  },

  skills: {
    listening: {
      intro: "Trois touristes demandent leur chemin à un agent de l'office de tourisme. Écoutez.",
      title: "À l'office de tourisme",
      script: [
        { who: "Emma", line: "Bonjour, monsieur. Pour aller au musée des Beaux-Arts, s'il vous plaît ?" },
        { who: "L'agent", line: "Sortez d'ici, tournez à droite et allez tout droit jusqu'à la place des Terreaux. Le musée est sur la place, en face de la mairie." },
        { who: "Louis", line: "Et la gare, c'est loin ?" },
        { who: "L'agent", line: "Oui, assez loin. Prenez le métro, ligne A, direction Perrache. Descendez au terminus." },
        { who: "Amina", line: "Excusez-moi, il y a une boulangerie près d'ici ?" },
        { who: "L'agent", line: "Oui, juste au coin de la rue, à gauche, entre le café et la banque." }
      ],
      activities: [
        {
          type: "match", title: "Où vont-ils ?",
          prompt: "Associez la personne et sa destination.",
          pairs: [["Emma", "le musée des Beaux-Arts"], ["Louis", "la gare"], ["Amina", "une boulangerie"]]
        },
        {
          type: "gap", title: "Les directions",
          prompt: "Écoutez encore et complétez.",
          items: [
            "Le musée est en face de la [[mairie]].",
            "Pour la gare, prenez le [[métro|metro]], ligne A.",
            "La boulangerie est entre le café et la [[banque]].",
            "Elle est au [[coin]] de la rue."
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez le message de Chloé. Elle invite ses amis chez elle.",
      title: "Comment venir chez moi",
      text: [
        "Salut tout le monde ! Pour la fête de samedi, voici comment venir chez moi.",
        "Prenez le bus 12 et descendez à l'arrêt « Jardin des Plantes ». Traversez le parc. À la sortie du parc, tournez à gauche dans la rue Pasteur. Continuez tout droit jusqu'au feu. Mon immeuble est le numéro 8, à côté d'une pharmacie et en face d'un petit supermarché. J'habite au troisième étage. Sonnez à « Martin » ! À samedi !"
      ],
      activities: [
        {
          type: "tiles", title: "Remettez l'itinéraire en ordre",
          prompt: "Écrivez les étapes dans l'ordre du texte.",
          items: [
            { a: "Prenez le bus 12." },
            { a: "Traversez le parc." },
            { a: "Tournez à gauche dans la rue Pasteur." },
            { a: "Continuez tout droit jusqu'au feu." }
          ]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Chloé habite à côté d'une pharmacie.", a: true },
            { s: "Il y a une banque en face de l'immeuble.", a: false },
            { s: "Chloé habite au rez-de-chaussée.", a: false },
            { s: "La fête est samedi.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez l'impératif, puis expliquez le chemin.",
      activities: [
        {
          type: "rewrite", title: "Donnez des ordres",
          prompt: "Transformez à l'impératif (*vous*).",
          items: [
            { q: "Vous allez tout droit.", a: ["Allez tout droit."] },
            { q: "Vous prenez la deuxième rue.", a: ["Prenez la deuxième rue."] },
            { q: "Vous traversez le pont.", a: ["Traversez le pont."] },
            { q: "Vous tournez à droite au feu.", a: ["Tournez à droite au feu."] }
          ]
        },
        {
          type: "write", title: "Comment venir chez moi",
          prompt: "Un ami français arrive à votre université. Écrivez-lui un message pour aller de l'université à un lieu que vous aimez (un café, un parc, votre maison…).",
          minWords: 50, maxWords: 90,
          model: "Salut Hugo ! Pour aller au café « La Tasse », c'est facile. Sors de l'université par la porte principale. Tourne à droite et va tout droit jusqu'au carrefour. Traverse la rue et prends la première rue à gauche. Le café est à côté d'une librairie, en face du parc. Je t'attends à cinq heures !",
          bank: ["Sors de…", "Va tout droit", "Tourne à gauche / à droite", "Traverse…", "C'est à côté de…", "en face de…"],
          checklist: ["J'ai utilisé l'impératif au moins quatre fois.", "J'ai situé le lieu avec deux prépositions.", "J'ai fait attention à *du* / *de la*."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Demandez votre chemin",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Pardon, où est la pharmacie ?" },
            { s: "Allez tout droit." },
            { s: "Tournez à gauche au feu." },
            { s: "C'est en face de la banque." },
            { s: "La poste est à côté du musée." },
            { s: "C'est loin d'ici ?" }
          ]
        },
        {
          type: "speak", title: "Mon quartier",
          prompt: "Présentez votre quartier : quels lieux il y a, où ils sont, et votre lieu préféré.",
          language: ["Dans mon quartier, il y a…", "La boulangerie est à côté de…", "Mon lieu préféré, c'est…"],
          seconds: 75,
          checklist: ["nommé cinq lieux ?", "situé les lieux ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux nommer dix lieux de la ville.", review: "Explication : le vocabulaire" },
    { can: "Je peux demander mon chemin poliment.", review: "Présentation : le dialogue" },
    { can: "Je peux former l'impératif avec *tu* et *vous*.", review: "Explication : l'impératif ; Écrire, activité 1" },
    { can: "Je peux situer un lieu avec *à côté de, en face de, près de*.", review: "Explication : situer un lieu" },
    { can: "Je peux comprendre un itinéraire.", review: "Écouter et Lire" },
    { can: "Je peux expliquer un chemin à l'écrit et à l'oral.", review: "Écrire, activité 2 et Parler, activité 1" }
  ]
};
