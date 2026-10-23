window.UNIT = {
  slug: "a-mon-avis",
  title: "À mon avis",
  level: "B1",
  subject: "Communiquer",
  minutes: 55,
  focus: ["donner son opinion", "être d'accord / pas d'accord", "les connecteurs logiques", "je pense que + indicatif"],

  presentation: {
    scene: "💬🤔👍",
    situation: "Pendant un cours de méthodologie, les étudiants discutent d'une question : **faut-il interdire les téléphones portables en classe ?** Chacun donne son avis.",
    warmup: {
      prompt: "Et vous, que pensez-vous des téléphones en classe ?",
      options: ["ils sont utiles", "ils distraient", "ça dépend du cours", "il faut les interdire", "il faut les autoriser", "je n'ai pas d'avis"],
      response: "Intéressant ! Dans cette unité, vous allez apprendre à défendre votre opinion."
    },
    dialogueTitle: "Le débat en classe",
    dialogue: [
      { who: "Le professeur", line: "Alors, faut-il interdire les portables en classe ? Qu'en pensez-vous ?" },
      { who: "Camille", line: "*À mon avis*, oui. Les étudiants regardent leurs réseaux sociaux *au lieu d'*écouter." },
      { who: "Mehdi", line: "*Je ne suis pas d'accord*. *Je trouve que* le portable est un outil de travail. On cherche des définitions, on prend des photos du tableau…" },
      { who: "Camille", line: "*C'est vrai, mais* on peut le faire avec un ordinateur." },
      { who: "Sarah", line: "*Je suis d'accord avec* Mehdi. *D'une part*, c'est pratique. *D'autre part*, nous sommes adultes et responsables." },
      { who: "Camille", line: "*Je comprends ton point de vue*, *cependant* je pense qu'il faut des règles claires." },
      { who: "Le professeur", line: "Très bien ! *Finalement*, on peut peut-être trouver un compromis." }
    ]
  },

  objectives: [
    "Je peux exprimer mon opinion avec différentes expressions.",
    "Je peux dire que je suis d'accord ou pas d'accord, poliment.",
    "Je peux organiser mes idées avec des connecteurs logiques.",
    "Je peux participer à une discussion simple sur un sujet de société."
  ],

  explanation: {
    vocabTitle: "Le vocabulaire du débat",
    vocab: [
      { word: "un avis", icon: "💭" }, { word: "un point de vue", icon: "👁️" }, { word: "un argument", icon: "🧩" }, { word: "un exemple", icon: "📌" },
      { word: "un avantage", icon: "➕" }, { word: "un inconvénient", icon: "➖" }, { word: "convaincre", icon: "🎯" }, { word: "défendre", icon: "🛡️" },
      { word: "un compromis", icon: "🤝" }, { word: "une règle", icon: "📏" }, { word: "interdire", icon: "🚫" }, { word: "autoriser", icon: "✅" }
    ],
    grammar: [
      {
        title: "Exprimer son opinion",
        head: ["Expression", "Exemple"],
        rows: [
          ["*À mon avis*, … / *Selon moi*, …", "À mon avis, c'est une bonne idée."],
          ["*Je pense que / Je crois que / Je trouve que* + indicatif", "Je pense que le portable *est* utile."],
          ["*Pour moi*, …", "Pour moi, l'éducation est essentielle."],
          ["*Il me semble que* …", "Il me semble que c'est trop strict."]
        ],
        note: "Au négatif, *je ne pense pas que* est suivi du **subjonctif** (unité B2). Au niveau B1, préférez : *Je pense que ce n'est pas…*"
      },
      {
        title: "Accord et désaccord",
        head: ["D'accord 👍", "Nuancé 🤔", "Pas d'accord 👎"],
        rows: [
          ["Je suis d'accord avec toi / vous.", "Tu as raison, mais…", "Je ne suis pas d'accord."],
          ["Tout à fait ! / Absolument !", "C'est vrai, cependant…", "Je ne suis pas du tout d'accord."],
          ["C'est exactement ce que je pense.", "Ça dépend.", "Je ne partage pas ton avis."],
          ["Bien sûr !", "Je comprends ton point de vue, mais…", "Au contraire !"]
        ]
      },
      {
        title: "Les connecteurs logiques",
        head: ["Pour…", "Connecteurs"],
        rows: [
          ["organiser", "*D'abord / Premièrement*, … *Ensuite*, … *Enfin*, …"],
          ["ajouter", "*De plus*, … / *En plus*, … / *D'une part… d'autre part*"],
          ["opposer", "*mais*, *cependant*, *pourtant*, *par contre*"],
          ["donner une cause", "*parce que*, *car*"],
          ["conclure", "*Donc*, … / *En conclusion*, … / *Finalement*, …"]
        ]
      }
    ],
    watchOut: [
      ["Je suis d'accord avec toi que…", "Je suis d'accord avec toi : …"],
      ["Selon moi, je pense que…", "Selon moi, … (ou) Je pense que…"],
      ["Je pense que c'est pas une bonne idée.", "Je pense que ce n'est pas une bonne idée."],
      ["Je suis pas d'accord.", "Je ne suis pas d'accord."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez avec un connecteur.",
      items: ["C'est pratique, [[mais|cependant|pourtant|par contre]] c'est cher.", "[[D'abord|Premièrement]], je vais présenter le problème.", "Je reste à la maison [[parce que|car]] je suis malade."]
    }
  },

  skills: {
    listening: {
      intro: "Une émission de radio étudiante pose la question : « Faut-il rendre les cours en ligne obligatoires ? » Écoutez trois opinions.",
      title: "Les cours en ligne : pour ou contre ?",
      script: [
        { who: "L'animateur", line: "Bienvenue ! Aujourd'hui, on parle des cours en ligne. Julien, quel est ton avis ?" },
        { who: "Julien", line: "Je suis pour. D'abord, on gagne du temps : pas de transport. Ensuite, on peut revoir les vidéos. Pour moi, c'est l'avenir." },
        { who: "L'animateur", line: "Nadia, tu es d'accord ?" },
        { who: "Nadia", line: "Pas du tout ! Je trouve que les cours en ligne sont isolants. On ne voit pas ses camarades. De plus, tout le monde n'a pas une bonne connexion internet." },
        { who: "L'animateur", line: "Et toi, Antoine ?" },
        { who: "Antoine", line: "Ça dépend. Pour les cours théoriques, c'est pratique. Par contre, pour les travaux pratiques et les langues, je pense que la présence est nécessaire. Donc, il faut un système mixte." }
      ],
      activities: [
        {
          type: "match", title: "Qui pense quoi ?",
          pairs: [["Julien", "est pour les cours en ligne"], ["Nadia", "est contre les cours en ligne"], ["Antoine", "propose un système mixte"]]
        },
        {
          type: "sort", title: "Arguments pour ou contre ?",
          bins: ["Pour les cours en ligne", "Contre les cours en ligne"],
          items: [
            { text: "on gagne du temps", bin: 0 }, { text: "on peut revoir les vidéos", bin: 0 }, { text: "c'est pratique pour la théorie", bin: 0 },
            { text: "c'est isolant", bin: 1 }, { text: "pas tout le monde a internet", bin: 1 }, { text: "les langues demandent la présence", bin: 1 }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez ce courrier des lecteurs dans le journal de l'université.",
      title: "Courrier des lecteurs : la semaine de quatre jours",
      text: [
        { author: "Élise, étudiante en droit", body: "Je suis totalement favorable à la semaine de quatre jours. D'une part, nous serions moins fatigués. D'autre part, le vendredi libre permettrait à beaucoup d'étudiants de travailler pour payer leurs études. À mon avis, c'est une mesure juste." },
        { author: "Marc, professeur de chimie", body: "Je comprends les arguments des étudiants, cependant je ne partage pas leur avis. Le programme est déjà très chargé. Si on supprime un jour, les journées seront trop longues et les étudiants seront encore plus fatigués. Je pense donc que ce n'est pas une bonne solution." }
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Élise est pour la semaine de quatre jours.", a: true },
            { s: "Selon Élise, le vendredi libre aide les étudiants qui travaillent.", a: true },
            { s: "Marc est d'accord avec les étudiants.", a: false },
            { s: "Marc pense que les journées seraient trop longues.", a: true }
          ]
        },
        {
          type: "gap", title: "Retrouvez les connecteurs",
          prompt: "Retrouvez dans le texte le connecteur qui manque.",
          items: [
            "[[D'une part]], nous serions moins fatigués. [[D'autre part]], le vendredi libre permettrait…",
            "Je comprends les arguments, [[cependant]] je ne partage pas leur avis.",
            "Je pense [[donc]] que ce n'est pas une bonne solution."
          ]
        }
      ]
    },

    writing: {
      intro: "Organisez vos idées, puis écrivez votre opinion.",
      activities: [
        {
          type: "tiles", title: "Construisez des phrases d'opinion",
          items: [
            { a: "À mon avis, cette idée est excellente." },
            { a: "Je ne suis pas d'accord avec toi." },
            { a: "Je pense que les règles sont nécessaires." },
            { a: "C'est vrai, mais ça coûte cher." }
          ]
        },
        {
          type: "write", title: "Courrier des lecteurs",
          prompt: "Répondez à la question du journal : « Faut-il interdire les portables en classe ? » Donnez votre opinion, deux arguments avec des exemples, et une conclusion.",
          minWords: 100, maxWords: 150,
          model: "À mon avis, il ne faut pas interdire les portables en classe, mais il faut les utiliser intelligemment. D'abord, le téléphone est un outil de travail : on peut chercher un mot dans le dictionnaire ou consulter la plateforme du cours. Ensuite, nous sommes adultes. Je pense que chaque étudiant doit être responsable de son attention. Cependant, je comprends les professeurs : les notifications sont une vraie distraction. Par conséquent, je propose une règle simple : le portable est autorisé, mais en mode silencieux. En conclusion, le problème n'est pas l'objet, c'est la façon de l'utiliser.",
          bank: ["À mon avis,", "Je pense que", "D'abord,", "Ensuite,", "De plus,", "Cependant,", "Par exemple,", "En conclusion,"],
          checklist: ["J'ai donné mon opinion clairement.", "J'ai donné deux arguments avec des exemples.", "J'ai utilisé cinq connecteurs.", "J'ai écrit une conclusion."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Donnez votre avis",
          prompt: "Écoutez et répétez avec une intonation convaincante.",
          items: [
            { s: "À mon avis, c'est une bonne idée." },
            { s: "Je ne suis pas d'accord avec toi." },
            { s: "Tu as raison, mais c'est cher." },
            { s: "Je pense que les règles sont nécessaires." },
            { s: "D'une part, c'est pratique." },
            { s: "En conclusion, il faut trouver un compromis." }
          ]
        },
        {
          type: "speak", title: "Mon opinion en une minute",
          prompt: "Choisissez un sujet de société qui vous intéresse et donnez votre opinion en une minute, avec deux arguments et une conclusion.",
          language: ["Le sujet dont je veux parler, c'est…", "Selon moi,…", "Premièrement,…", "De plus,…", "Donc,…"],
          seconds: 75,
          checklist: ["organisé vos idées ?", "conclu ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux exprimer mon opinion avec quatre expressions différentes.", review: "Explication : exprimer son opinion" },
    { can: "Je peux dire que je suis d'accord ou pas d'accord poliment.", review: "Explication : accord et désaccord" },
    { can: "Je peux utiliser les connecteurs logiques.", review: "Explication : les connecteurs ; Lire, activité 2" },
    { can: "Je peux comprendre des opinions différentes à l'oral.", review: "Écouter" },
    { can: "Je peux écrire un texte d'opinion organisé.", review: "Écrire, activité 2" },
    { can: "Je peux participer à un petit débat.", review: "Parler, activité 1" }
  ]
};
