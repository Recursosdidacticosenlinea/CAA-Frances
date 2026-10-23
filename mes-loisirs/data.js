window.UNIT = {
  slug: "mes-loisirs",
  title: "Mes loisirs",
  level: "A1",
  subject: "Les loisirs",
  minutes: 45,
  focus: ["les loisirs et les sports", "faire du / de la, jouer au / à la", "aimer + infinitif", "souvent, parfois, jamais"],

  presentation: {
    scene: "⚽🎸🎨",
    situation: "L'université présente ses **clubs** : sport, musique, théâtre… Théo et Amina choisissent une activité pour le semestre.",
    warmup: {
      prompt: "Qu'est-ce que vous aimez faire pendant votre temps libre ?",
      options: ["le football", "la natation", "la danse", "la guitare", "la lecture", "les jeux vidéo", "la cuisine", "le dessin", "la marche"],
      response: "Super ! Vous allez apprendre à parler de vos loisirs."
    },
    dialogueTitle: "La journée des clubs",
    dialogue: [
      { who: "Amina", line: "Théo, tu *fais du* sport ?" },
      { who: "Théo", line: "Oui, *je joue au* basket *le mardi*. Et toi ?" },
      { who: "Amina", line: "Moi, *je fais de la* danse. Et *j'aime* beaucoup *dessiner*." },
      { who: "Théo", line: "Tu *joues d'un* instrument ?" },
      { who: "Amina", line: "Oui, *je joue de la* guitare, mais *pas souvent*." },
      { who: "Théo", line: "Le club de musique cherche des guitaristes ! On y va ensemble ?" },
      { who: "Amina", line: "D'accord ! Et après, le club de théâtre ?" }
    ]
  },

  objectives: [
    "Je peux nommer des loisirs et des sports.",
    "Je peux utiliser *faire du / de la* et *jouer au / à la / du*.",
    "Je peux dire ce que j'aime faire avec *aimer + infinitif*.",
    "Je peux dire la fréquence : *souvent, parfois, jamais*."
  ],

  explanation: {
    vocabTitle: "Les loisirs",
    vocab: [
      { word: "le football", icon: "⚽" }, { word: "le basket", icon: "🏀" }, { word: "le tennis", icon: "🎾" }, { word: "la natation", icon: "🏊" },
      { word: "le vélo", icon: "🚴" }, { word: "la danse", icon: "💃" }, { word: "le yoga", icon: "🧘" }, { word: "la guitare", icon: "🎸" },
      { word: "le piano", icon: "🎹" }, { word: "le dessin", icon: "🎨" }, { word: "la lecture", icon: "📚" }, { word: "les jeux vidéo", icon: "🎮" },
      { word: "le théâtre", icon: "🎭" }, { word: "la cuisine", icon: "🍳" }
    ],
    grammar: [
      {
        title: "Faire et jouer",
        head: ["Verbe", "Utilisation", "Exemple"],
        rows: [
          ["*faire du* (masc.)", "sport, activité", "Je *fais du* vélo, *du* yoga."],
          ["*faire de la* (fém.)", "sport, activité", "Elle *fait de la* danse, *de la* natation."],
          ["*jouer au* (masc.)", "sport avec ballon, jeu", "Il *joue au* foot, *au* tennis."],
          ["*jouer à la* / *aux*", "jeu", "Nous *jouons aux* jeux vidéo."],
          ["*jouer du* / *de la*", "instrument", "Tu *joues du* piano ? Je *joue de la* guitare."]
        ],
        note: "*faire* : je fais, tu fais, il fait, nous faisons, vous faites, ils font."
      },
      {
        title: "Aimer + infinitif et la fréquence",
        head: ["Structure", "Exemple"],
        rows: [
          ["aimer / adorer / détester + infinitif", "J'*aime lire*. Il *déteste courir*."],
          ["*toujours / souvent / parfois*", "Je fais *souvent* du sport."],
          ["*ne… jamais*", "Je *ne* joue *jamais* aux jeux vidéo."],
          ["*le* + jour = chaque semaine", "*Le samedi*, je fais du vélo."]
        ]
      }
    ],
    watchOut: [
      ["Je joue le football.", "Je joue au football."],
      ["Je fais de le vélo.", "Je fais du vélo."],
      ["Je joue la guitare.", "Je joue de la guitare."],
      ["J'aime de danser.", "J'aime danser."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez avec *du, de la, au*.",
      items: ["Je fais [[du]] yoga.", "Il joue [[au]] tennis.", "Elle joue [[de la]] guitare."]
    }
  },

  skills: {
    listening: {
      intro: "Trois étudiants parlent de leurs loisirs à la radio de l'université. Écoutez.",
      title: "Vos loisirs ?",
      script: [
        { who: "Lucas", line: "Moi, je fais du vélo tous les week-ends. Je joue aussi au foot avec mes amis le mercredi." },
        { who: "Sarah", line: "J'adore lire et j'aime beaucoup cuisiner. Je ne fais jamais de sport, je déteste ça !" },
        { who: "Karim", line: "Je joue du piano depuis cinq ans. Le samedi, je fais du théâtre dans le club de l'université." }
      ],
      activities: [
        {
          type: "sort", title: "Qui fait quoi ?",
          bins: ["Lucas", "Sarah", "Karim"],
          items: [
            { text: "du vélo", bin: 0 }, { text: "du foot", bin: 0 },
            { text: "lire", bin: 1 }, { text: "cuisiner", bin: 1 },
            { text: "du piano", bin: 2 }, { text: "du théâtre", bin: 2 }
          ]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Lucas joue au foot le mercredi.", a: true },
            { s: "Sarah fait souvent du sport.", a: false },
            { s: "Karim fait du théâtre le samedi.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez le programme des clubs de l'université.",
      title: "Les clubs du semestre",
      text: [
        { author: "⚽ Club de foot", body: "Le mardi et le jeudi, de 18 h à 20 h, au stade. Pour filles et garçons. Gratuit !" },
        { author: "🎸 Club de musique", body: "Vous jouez de la guitare, du piano ou de la batterie ? Rejoignez notre groupe ! Le mercredi à 17 h." },
        { author: "🎭 Club de théâtre", body: "Vous aimez jouer la comédie ? Le samedi matin, de 10 h à midi, dans la salle 12." },
        { author: "🧘 Yoga", body: "Pour être calme avant les examens ! Le lundi à 8 h, dans le jardin." }
      ],
      activities: [
        {
          type: "match", title: "Quel jour ?",
          pairs: [["le foot", "le mardi et le jeudi"], ["la musique", "le mercredi"], ["le théâtre", "le samedi matin"], ["le yoga", "le lundi"]]
        },
        {
          type: "gap", title: "Complétez",
          items: ["Le club de foot est [[gratuit]].", "Le théâtre est dans la salle [[12|douze]].", "Le yoga est dans le [[jardin]]."]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis présentez vos loisirs.",
      activities: [
        {
          type: "rewrite", title: "Faire ou jouer ?",
          prompt: "Écrivez une phrase avec *je fais* ou *je joue*.",
          items: [
            { q: "le tennis", a: ["Je joue au tennis."] },
            { q: "la natation", a: ["Je fais de la natation."] },
            { q: "le piano", a: ["Je joue du piano."] },
            { q: "le vélo", a: ["Je fais du vélo."] }
          ]
        },
        {
          type: "write", title: "Mon temps libre",
          prompt: "Présentez vos loisirs pour le forum de l'université : ce que vous faites, quand, et ce que vous n'aimez pas. Choisissez un club.",
          minWords: 40, maxWords: 70,
          model: "Pendant mon temps libre, j'aime beaucoup écouter de la musique et je joue de la guitare. Le samedi, je fais du vélo avec ma sœur. Je fais parfois de la natation, mais je ne joue jamais au foot : je déteste ça ! Ce semestre, je choisis le club de musique.",
          bank: ["J'aime…", "Je fais du / de la…", "Je joue au / du…", "Le samedi,", "souvent / parfois", "Je ne… jamais…"],
          checklist: ["J'ai utilisé *faire* et *jouer*.", "J'ai utilisé *aimer + infinitif*.", "J'ai utilisé un mot de fréquence.", "J'ai choisi un club."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Parlez de vos loisirs",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Je fais du vélo le samedi." },
            { s: "Tu joues au basket ?" },
            { s: "Elle fait de la danse." },
            { s: "Je joue de la guitare." },
            { s: "J'aime beaucoup lire." },
            { s: "Je ne joue jamais aux jeux vidéo." }
          ]
        },
        {
          type: "speak", title: "Mes loisirs",
          prompt: "Parlez de vos loisirs pendant une minute : ce que vous faites, quand, avec qui, et ce que vous détestez.",
          language: ["Pendant mon temps libre,…", "Je fais du / de la…", "Je joue au / du…", "souvent / parfois / jamais", "Je déteste…"],
          seconds: 60,
          checklist: ["utilisé *faire* et *jouer* ?", "dit la fréquence ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux nommer douze loisirs et sports.", review: "Explication : le vocabulaire" },
    { can: "Je peux utiliser *faire du / de la*.", review: "Explication : faire et jouer" },
    { can: "Je peux utiliser *jouer au* (sport) et *jouer du* (instrument).", review: "Écrire, activité 1" },
    { can: "Je peux utiliser *aimer + infinitif*.", review: "Explication : aimer + infinitif" },
    { can: "Je peux dire la fréquence avec *souvent, parfois, jamais*.", review: "Explication : la fréquence" },
    { can: "Je peux présenter mes loisirs.", review: "Écrire, activité 2 et Parler" }
  ]
};
