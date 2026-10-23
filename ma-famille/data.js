window.UNIT = {
  slug: "ma-famille",
  title: "Ma famille",
  level: "A1",
  subject: "Les personnes",
  minutes: 50,
  focus: ["la famille", "mon, ma, mes", "ton, ta, tes", "il / elle s'appelle…"],

  presentation: {
    scene: "👨‍👩‍👧‍👦🏡📸",
    situation: "Sarah montre une photo de sa **famille** à son amie Inès. Inès pose des questions.",
    warmup: {
      prompt: "Qui habite avec vous ?",
      options: ["ma mère", "mon père", "mon frère", "ma sœur", "mes grands-parents", "mon chien", "mon chat", "mes amis", "j'habite seul(e)"],
      response: "Merci ! Dans cette unité, vous allez parler de votre famille."
    },
    dialogueTitle: "La photo de famille",
    dialogue: [
      { who: "Inès", line: "C'est qui, sur la photo ?" },
      { who: "Sarah", line: "C'est *ma* famille ! Voici *mon* père. Il s'appelle Marc." },
      { who: "Inès", line: "Et la dame à côté ?" },
      { who: "Sarah", line: "C'est *ma* mère, Sophie. Elle est médecin." },
      { who: "Inès", line: "Tu as des frères et sœurs ?" },
      { who: "Sarah", line: "Oui, j'ai *un frère* et *une sœur*. Voici *mes* grands-parents aussi." },
      { who: "Inès", line: "Ils sont très sympas ! Et le chien ?" },
      { who: "Sarah", line: "C'est Max, *notre* chien !" }
    ]
  },

  objectives: [
    "Je peux nommer les membres de la famille.",
    "Je peux utiliser *mon, ma, mes*.",
    "Je peux utiliser *ton, ta, tes* dans une question.",
    "Je peux présenter ma famille."
  ],

  explanation: {
    vocabTitle: "La famille",
    vocab: [
      { word: "la mère", icon: "👩" }, { word: "le père", icon: "👨" }, { word: "les parents", icon: "👫" },
      { word: "le frère", icon: "👦" }, { word: "la sœur", icon: "👧" }, { word: "le fils", icon: "👶" },
      { word: "la fille", icon: "👧" }, { word: "le grand-père", icon: "👴" }, { word: "la grand-mère", icon: "👵" },
      { word: "l'oncle", icon: "🧔" }, { word: "la tante", icon: "👩‍🦰" }, { word: "le cousin", icon: "🧑" },
      { word: "la cousine", icon: "👩‍🦱" }, { word: "le chien", icon: "🐶" }, { word: "le chat", icon: "🐱" }
    ],
    grammar: [
      {
        title: "Les possessifs",
        head: ["", "Masculin", "Féminin", "Pluriel"],
        rows: [
          ["je", "*mon* père", "*ma* mère", "*mes* parents"],
          ["tu", "*ton* frère", "*ta* sœur", "*tes* cousins"],
          ["il / elle", "*son* oncle", "*sa* tante", "*ses* grands-parents"],
          ["nous", "*notre* chien", "*notre* maison", "*nos* enfants"]
        ],
        note: "Devant une voyelle, on dit *mon* : *mon amie*, *ton école*."
      },
      {
        title: "Présenter une personne",
        head: ["Pour…", "Exemple"],
        rows: [
          ["montrer", "*Voici* mon père. / *C'est* ma sœur."],
          ["le nom", "Il *s'appelle* Marc. Elle *s'appelle* Sophie."],
          ["l'âge", "Il *a* cinquante ans."],
          ["la profession", "Elle *est* médecin."],
          ["les frères et sœurs", "J'*ai* deux frères. Je *n'ai pas de* sœur."]
        ],
        note: "Avec *être* + profession, pas d'article : *Elle est médecin*, pas *une médecin*."
      }
    ],
    watchOut: [
      ["ma ami", "mon ami"],
      ["mon parents", "mes parents"],
      ["Je n'ai pas une sœur.", "Je n'ai pas de sœur."],
      ["Mon père est un professeur.", "Mon père est professeur."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez avec *mon, ma* ou *mes*.",
      items: ["[[Ma]] sœur s'appelle Julie.", "[[Mes]] grands-parents habitent à Lyon.", "[[Mon]] frère a douze ans."]
    }
  },

  skills: {
    listening: {
      intro: "Julien parle de sa famille à un camarade. Écoutez.",
      title: "La famille de Julien",
      script: [
        { who: "Théo", line: "Julien, tu as une grande famille ?" },
        { who: "Julien", line: "Oui ! Mes parents s'appellent Pierre et Marie. Mon père est professeur et ma mère est architecte." },
        { who: "Théo", line: "Et tu as des frères et sœurs ?" },
        { who: "Julien", line: "J'ai deux sœurs, Emma et Lucie. Emma a seize ans et Lucie a dix ans. Je n'ai pas de frère." },
        { who: "Théo", line: "Tes grands-parents habitent avec vous ?" },
        { who: "Julien", line: "Non, ils habitent à la campagne. Mais ma grand-mère vient chaque dimanche. Et nous avons un chat, Minou !" }
      ],
      activities: [
        {
          type: "match", title: "Qui est qui ?",
          prompt: "Associez.",
          pairs: [["Pierre", "le père"], ["Marie", "la mère"], ["Emma", "la sœur, 16 ans"], ["Lucie", "la sœur, 10 ans"], ["Minou", "le chat"]]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Le père de Julien est architecte.", a: false },
            { s: "Julien a un frère.", a: false },
            { s: "Les grands-parents habitent à la campagne.", a: true },
            { s: "La grand-mère vient le dimanche.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez le texte de Fatou pour le blog de la classe.",
      title: "Ma famille, par Fatou",
      text: [
        "Je m'appelle Fatou et j'ai vingt ans. J'habite à Dakar avec **ma** mère, **mon** beau-père et **mes** deux frères, Moussa et Ibrahima. Ma mère s'appelle Aïssatou. Elle est infirmière. Mon beau-père est cuisinier.",
        "Moussa a quinze ans. Il adore le football. Ibrahima a huit ans. Il aime les dessins animés. Ma tante Awa habite à Paris avec **sa** fille, ma cousine Mariama. Je parle avec elles sur internet chaque semaine."
      ],
      activities: [
        {
          type: "gap", title: "Complétez",
          prompt: "Complétez les phrases avec les informations du texte.",
          items: [
            "La mère de Fatou s'appelle [[Aïssatou|Aissatou]].",
            "Elle est [[infirmière|infirmiere]].",
            "Moussa a [[quinze|15]] ans.",
            "Mariama est la [[cousine]] de Fatou.",
            "La tante de Fatou habite à [[Paris]]."
          ]
        },
        {
          type: "sort", title: "Masculin, féminin ou pluriel ?",
          prompt: "Classez les mots avec le bon possessif.",
          bins: ["mon", "ma", "mes"],
          items: [
            { text: "frère", bin: 0 }, { text: "beau-père", bin: 0 }, { text: "oncle", bin: 0 },
            { text: "mère", bin: 1 }, { text: "tante", bin: 1 }, { text: "cousine", bin: 1 },
            { text: "frères", bin: 2 }, { text: "parents", bin: 2 }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis présentez votre famille.",
      activities: [
        {
          type: "rewrite", title: "Changez la personne",
          prompt: "Remplacez *je* par *tu*. Attention aux possessifs !",
          items: [
            { q: "C'est ma mère. → C'est…", a: ["C'est ta mère."] },
            { q: "Voici mon frère. → Voici…", a: ["Voici ton frère."] },
            { q: "Ce sont mes parents. → Ce sont…", a: ["Ce sont tes parents."] },
            { q: "Mon amie s'appelle Léa. → …", a: ["Ton amie s'appelle Léa."] }
          ]
        },
        {
          type: "write", title: "Ma famille",
          prompt: "Présentez votre famille : le nom, l'âge et la profession de trois ou quatre personnes.",
          minWords: 40, maxWords: 70,
          model: "Dans ma famille, nous sommes quatre. Mon père s'appelle Andrés. Il a quarante-huit ans et il est ingénieur. Ma mère s'appelle Paula. Elle est professeure. J'ai une sœur, Valeria. Elle a quatorze ans. Je n'ai pas de frère, mais j'ai un chien, Rocky !",
          bank: ["Dans ma famille, nous sommes…", "Mon père s'appelle…", "Ma mère est…", "J'ai un frère / une sœur.", "Je n'ai pas de…"],
          checklist: ["J'ai présenté trois personnes ou plus.", "J'ai utilisé *mon, ma, mes*.", "J'ai donné un âge et une profession."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Parlez de la famille",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Voici mon père." },
            { s: "Ma sœur est plus jeune que moi." },
            { s: "Mes grands-parents habitent à la campagne." },
            { s: "Tu as des frères et sœurs ?" },
            { s: "Je n'ai pas de frère." },
            { s: "Ma mère est médecin." }
          ]
        },
        {
          type: "speak", title: "Ma photo de famille",
          prompt: "Prenez une photo de votre famille (ou imaginez-la). Présentez quatre personnes en une minute.",
          language: ["Voici…", "C'est mon / ma…", "Il / Elle a… ans.", "Il / Elle est…"],
          seconds: 75,
          checklist: ["présenté quatre personnes ?", "dit un âge ?", "dit une profession ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux nommer dix membres de la famille.", review: "Explication : le vocabulaire" },
    { can: "Je peux utiliser *mon, ma, mes*.", review: "Explication : les possessifs" },
    { can: "Je peux utiliser *ton, ta, tes* dans une question.", review: "Écrire, activité 1" },
    { can: "Je peux dire le nom, l'âge et la profession d'une personne.", review: "Explication : présenter une personne" },
    { can: "Je peux comprendre une description de famille.", review: "Écouter et Lire" },
    { can: "Je peux présenter ma famille à l'écrit et à l'oral.", review: "Écrire, activité 2 et Parler, activité 2" }
  ]
};
