window.UNIT = {
  slug: "les-nombres",
  title: "Les nombres",
  level: "A1",
  subject: "Premiers pas",
  minutes: 45,
  focus: ["les nombres de 0 à 100", "Tu as quel âge ?", "le verbe avoir", "le numéro de téléphone"],

  presentation: {
    scene: "🔢📱🎂",
    situation: "Léa s'inscrit à la bibliothèque de l'université. La personne de l'accueil demande son **âge**, son **numéro de téléphone** et son **numéro d'étudiante**.",
    warmup: {
      prompt: "Où utilisez-vous les nombres chaque jour ?",
      options: ["l'heure", "le téléphone", "l'âge", "l'argent", "l'adresse", "la salle de classe", "le bus", "les notes"],
      response: "Oui ! Les nombres sont partout."
    },
    dialogueTitle: "À la bibliothèque",
    dialogue: [
      { who: "Le bibliothécaire", line: "Bonjour ! Votre nom, s'il vous plaît ?" },
      { who: "Léa", line: "Léa Moreau." },
      { who: "Le bibliothécaire", line: "*Vous avez quel âge* ?" },
      { who: "Léa", line: "*J'ai dix-neuf ans*." },
      { who: "Le bibliothécaire", line: "*Votre numéro de téléphone* ?" },
      { who: "Léa", line: "C'est le *zéro six, quarante-deux, quinze, trente, quatre-vingts*." },
      { who: "Le bibliothécaire", line: "Merci. Et votre numéro d'étudiante ?" },
      { who: "Léa", line: "*Soixante-dix-sept, douze, cinquante*." }
    ]
  },

  objectives: [
    "Je peux compter de *0* à *100*.",
    "Je peux dire mon âge avec *j'ai… ans*.",
    "Je peux conjuguer le verbe *avoir*.",
    "Je peux dire et comprendre un numéro de téléphone."
  ],

  explanation: {
    vocabTitle: "Les nombres importants",
    vocab: [
      { word: "zéro", icon: "0️⃣" }, { word: "un", icon: "1️⃣" }, { word: "deux", icon: "2️⃣" }, { word: "trois", icon: "3️⃣" },
      { word: "quatre", icon: "4️⃣" }, { word: "cinq", icon: "5️⃣" }, { word: "six", icon: "6️⃣" }, { word: "sept", icon: "7️⃣" },
      { word: "huit", icon: "8️⃣" }, { word: "neuf", icon: "9️⃣" }, { word: "dix", icon: "🔟" }, { word: "onze", icon: "11" },
      { word: "douze", icon: "12" }, { word: "quinze", icon: "15" }, { word: "vingt", icon: "20" }, { word: "trente", icon: "30" },
      { word: "cinquante", icon: "50" }, { word: "soixante-dix", icon: "70" }, { word: "quatre-vingts", icon: "80" }, { word: "cent", icon: "💯" }
    ],
    grammar: [
      {
        title: "Les nombres de 11 à 100",
        head: ["Nombre", "En lettres", "Astuce"],
        rows: [
          ["11 – 16", "onze, douze, treize, quatorze, quinze, seize", "à apprendre par cœur"],
          ["17 – 19", "*dix-sept*, *dix-huit*, *dix-neuf*", "10 + 7, 10 + 8, 10 + 9"],
          ["20 – 60", "vingt, trente, quarante, cinquante, soixante", "21 = vingt *et un*, 22 = vingt-deux"],
          ["70 – 79", "*soixante-dix*, soixante et onze, soixante-douze…", "60 + 10, 60 + 11…"],
          ["80 – 89", "*quatre-vingts*, quatre-vingt-un…", "4 × 20"],
          ["90 – 99", "*quatre-vingt-dix*, quatre-vingt-onze…", "4 × 20 + 10"]
        ],
        note: "En Belgique et en Suisse : 70 = *septante*, 90 = *nonante*."
      },
      {
        title: "Le verbe avoir",
        head: ["Pronom", "avoir", "Exemple"],
        rows: [
          ["j'", "*ai*", "J'ai vingt ans."], ["tu", "*as*", "Tu as quel âge ?"],
          ["il / elle", "*a*", "Elle a dix-huit ans."], ["nous", "*avons*", "Nous avons deux cours."],
          ["vous", "*avez*", "Vous avez un téléphone ?"], ["ils / elles", "*ont*", "Ils ont trente ans."]
        ],
        note: "Pour l'âge, on utilise *avoir*, pas *être* : *J'ai 19 ans.*"
      },
      {
        title: "Le numéro de téléphone",
        head: ["Écrit", "On dit"],
        rows: [
          ["06 42 15 30 80", "zéro six, quarante-deux, quinze, trente, quatre-vingts"],
          ["07 11 99 25 60", "zéro sept, onze, quatre-vingt-dix-neuf, vingt-cinq, soixante"]
        ],
        note: "En France, on dit les nombres *deux par deux*."
      }
    ],
    watchOut: [
      ["Je suis dix-neuf ans.", "J'ai dix-neuf ans."],
      ["J'ai vingt.", "J'ai vingt ans."],
      ["soixante-dix-un", "soixante et onze"],
      ["vingt-un", "vingt et un"]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Écrivez le nombre en lettres ou complétez.",
      items: [
        "15 = [[quinze]]",
        "Elle [[a]] vingt ans.",
        "70 = [[soixante-dix|soixante dix]]"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Trois étudiants donnent leurs informations au secrétariat. Écoutez.",
      title: "Au secrétariat",
      script: [
        { who: "La secrétaire", line: "Bonjour. Comment vous vous appelez ?" },
        { who: "Hugo", line: "Hugo Lambert. J'ai dix-huit ans." },
        { who: "La secrétaire", line: "Votre numéro de téléphone ?" },
        { who: "Hugo", line: "Zéro six, vingt-trois, quarante-cinq, douze, quatorze." },
        { who: "La secrétaire", line: "Merci. Mademoiselle ?" },
        { who: "Camille", line: "Camille Roux. J'ai vingt et un ans. Mon numéro, c'est le zéro sept, quatre-vingt-dix, seize, soixante, trois." },
        { who: "La secrétaire", line: "Et vous, monsieur ?" },
        { who: "Mehdi", line: "Mehdi Saïdi. J'ai vingt-cinq ans. Mon numéro de salle, c'est la salle soixante-quatorze." }
      ],
      activities: [
        {
          type: "match", title: "Quel âge ?",
          prompt: "Associez la personne et son âge.",
          pairs: [["Hugo", "18 ans"], ["Camille", "21 ans"], ["Mehdi", "25 ans"]]
        },
        {
          type: "gap", title: "Les numéros",
          prompt: "Écoutez encore et écrivez les nombres en chiffres.",
          items: [
            "Hugo : 06 23 [[45]] 12 [[14]]",
            "Camille : 07 [[90]] 16 [[60]] 03",
            "Mehdi : la salle [[74]]"
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez la fiche d'inscription du club de sport de l'université.",
      title: "Club de sport : inscriptions",
      text: [
        { author: "Fiche 1", body: "Nom : **Julie Petit**. Âge : 19 ans. Téléphone : 06 55 18 70 02. Sport : la natation. Nombre d'heures par semaine : 3." },
        { author: "Fiche 2", body: "Nom : **Antoine Garcia**. Âge : 22 ans. Téléphone : 07 81 33 96 40. Sport : le football. Nombre d'heures par semaine : 6." },
        { author: "Fiche 3", body: "Nom : **Fatou Diallo**. Âge : 20 ans. Téléphone : 06 12 77 64 15. Sport : le basket. Nombre d'heures par semaine : 4." }
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Julie a dix-neuf ans.", a: true },
            { s: "Antoine fait du sport six heures par semaine.", a: true },
            { s: "Fatou a vingt-deux ans.", a: false },
            { s: "Le numéro d'Antoine commence par zéro six.", a: false },
            { s: "Fatou fait du basket.", a: true }
          ]
        },
        {
          type: "rewrite", title: "En lettres",
          prompt: "Écrivez les nombres en lettres.",
          items: [
            { q: "Julie a 19 ans.", a: ["Julie a dix-neuf ans.", "Julie a dix-neuf ans"] },
            { q: "Antoine a 22 ans.", a: ["Antoine a vingt-deux ans."] },
            { q: "Fatou a 20 ans.", a: ["Fatou a vingt ans."] },
            { q: "Le numéro d'Antoine finit par 40.", a: ["Le numéro d'Antoine finit par quarante."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis remplissez votre fiche.",
      activities: [
        {
          type: "tiles", title: "Mettez les mots dans l'ordre",
          items: [
            { a: "Tu as quel âge ?" },
            { a: "J'ai vingt ans." },
            { a: "Nous avons trois cours aujourd'hui." },
            { a: "Quel est ton numéro de téléphone ?" }
          ]
        },
        {
          type: "write", title: "Ma fiche d'inscription",
          prompt: "Écrivez un petit texte pour le club de l'université : votre nom, votre âge, un numéro (inventé !) et deux autres nombres importants pour vous (votre salle, votre bus…). Écrivez les nombres en lettres.",
          minWords: 25, maxWords: 50,
          model: "Je m'appelle Pablo. J'ai dix-neuf ans. Mon numéro de téléphone, c'est le zéro six, vingt, trente-trois, quinze, quatre-vingts. Mon cours de français est dans la salle douze. Je prends le bus quarante-six.",
          bank: ["Je m'appelle", "J'ai … ans.", "Mon numéro, c'est le…", "la salle", "le bus"],
          checklist: ["J'ai écrit mon âge avec *j'ai… ans*.", "J'ai écrit les nombres **en lettres**.", "J'ai écrit au moins quatre nombres."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Dites les nombres",
          prompt: "Écoutez et répétez. Attention à *soixante-dix* et *quatre-vingts* !",
          items: [
            { s: "J'ai dix-neuf ans.", alt: ["J'ai 19 ans."] },
            { s: "Vous avez quel âge ?" },
            { s: "Elle a vingt et un ans.", alt: ["Elle a 21 ans."] },
            { s: "Il y a soixante-dix étudiants.", alt: ["Il y a 70 étudiants."] },
            { s: "Mon bus, c'est le quatre-vingt-douze.", alt: ["Mon bus, c'est le 92."] },
            { s: "Nous avons trois cours.", alt: ["Nous avons 3 cours."] }
          ]
        },
        {
          type: "speak", title: "Compte à rebours",
          prompt: "Comptez de 20 à 0, puis de 60 à 100 de dix en dix (60, 70, 80…). Ensuite, dites votre âge et l'âge de deux personnes de votre famille.",
          language: ["vingt, dix-neuf, dix-huit…", "soixante, soixante-dix, quatre-vingts…", "J'ai… ans.", "Ma mère a… ans."],
          seconds: 60,
          checklist: ["compté sans erreur ?", "dit *soixante-dix* et *quatre-vingt-dix* ?", "utilisé *avoir* pour l'âge ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux compter de 0 à 20.", review: "Explication : le vocabulaire" },
    { can: "Je peux dire les nombres de 20 à 100.", review: "Explication : les nombres de 11 à 100" },
    { can: "Je peux dire mon âge avec le verbe *avoir*.", review: "Explication : le verbe avoir" },
    { can: "Je peux comprendre un numéro de téléphone.", review: "Écouter, activité 2" },
    { can: "Je peux écrire les nombres en lettres.", review: "Lire, activité 2 et Écrire, activité 2" },
    { can: "Je peux demander et donner des informations personnelles simples.", review: "Parler, activité 1" }
  ]
};
