window.UNIT = {
  slug: "chez-le-medecin",
  title: "Chez le médecin",
  level: "A2",
  subject: "La santé",
  minutes: 50,
  focus: ["les parties du corps", "avoir mal à…", "les symptômes", "les conseils : il faut, tu devrais…"],

  presentation: {
    scene: "🩺🤒💊",
    situation: "Nathan est malade depuis deux jours. Il va au **centre de santé** de l'université. La médecin pose des questions.",
    warmup: {
      prompt: "Qu'est-ce que vous faites quand vous êtes malade ?",
      options: ["je dors", "je bois du thé", "je vais chez le médecin", "je prends des médicaments", "je reste au lit", "je vais à la pharmacie", "j'appelle ma mère", "je vais en cours quand même"],
      response: "D'accord ! Vous allez apprendre à parler de votre santé."
    },
    dialogueTitle: "Au centre de santé",
    dialogue: [
      { who: "La médecin", line: "Bonjour, Nathan. *Qu'est-ce qui ne va pas* ?" },
      { who: "Nathan", line: "Je ne me sens pas bien. *J'ai mal à la tête* et *j'ai mal à la gorge*." },
      { who: "La médecin", line: "*Vous avez de la fièvre* ?" },
      { who: "Nathan", line: "Oui, trente-huit et demi. Et *je tousse* beaucoup." },
      { who: "La médecin", line: "*Depuis quand* ?" },
      { who: "Nathan", line: "*Depuis* lundi." },
      { who: "La médecin", line: "C'est une grippe. *Il faut* rester au lit et boire beaucoup d'eau. Prenez ces médicaments trois fois par jour." },
      { who: "Nathan", line: "Je peux aller en cours ?" },
      { who: "La médecin", line: "Non ! *Vous devez* vous reposer deux ou trois jours." }
    ]
  },

  objectives: [
    "Je peux nommer les parties du corps.",
    "Je peux dire où j'ai mal avec *avoir mal à*.",
    "Je peux décrire des symptômes et dire depuis quand.",
    "Je peux donner des conseils avec *il faut, tu dois, tu devrais*."
  ],

  explanation: {
    vocabTitle: "Le corps et la santé",
    vocab: [
      { word: "la tête", icon: "🗣️" }, { word: "les yeux", icon: "👀" }, { word: "l'oreille", icon: "👂" }, { word: "le nez", icon: "👃" },
      { word: "la bouche", icon: "👄" }, { word: "les dents", icon: "🦷" }, { word: "la gorge", icon: "🧣" }, { word: "le ventre", icon: "🫃" },
      { word: "le dos", icon: "🧍" }, { word: "le bras", icon: "💪" }, { word: "la main", icon: "✋" }, { word: "la jambe", icon: "🦵" },
      { word: "le pied", icon: "🦶" }, { word: "la fièvre", icon: "🌡️" }, { word: "le rhume", icon: "🤧" }, { word: "les médicaments", icon: "💊" }
    ],
    grammar: [
      {
        title: "Avoir mal à…",
        head: ["à + article", "Exemple"],
        rows: [
          ["à + le = *au*", "J'ai mal *au* ventre / *au* dos."],
          ["à + la = *à la*", "J'ai mal *à la* tête / *à la* gorge."],
          ["à + l' = *à l'*", "J'ai mal *à l'*oreille."],
          ["à + les = *aux*", "J'ai mal *aux* dents / *aux* pieds."]
        ],
        note: "Autres symptômes : *J'ai de la fièvre. J'ai un rhume. Je tousse. J'ai la nausée. Je suis fatigué(e).*"
      },
      {
        title: "Depuis",
        head: ["Question", "Réponse"],
        rows: [
          ["*Depuis quand* vous avez mal ?", "*Depuis* lundi. / *Depuis* hier."],
          ["*Depuis combien de temps* ?", "*Depuis* trois jours. / *Depuis* une semaine."]
        ],
        note: "Avec *depuis*, on utilise le **présent** : *J'ai mal depuis deux jours.*"
      },
      {
        title: "Donner des conseils",
        head: ["Structure", "Exemple"],
        rows: [
          ["*il faut* + infinitif", "Il faut boire beaucoup d'eau."],
          ["*devoir* + infinitif", "Tu *dois* te reposer. Vous *devez* rester au lit."],
          ["*tu devrais / vous devriez* + infinitif", "Tu devrais aller chez le médecin. (conseil poli)"],
          ["impératif", "Prenez ce médicament. Ne sortez pas."]
        ],
        note: "*devoir* : je dois, tu dois, il doit, nous devons, vous devez, ils doivent."
      }
    ],
    watchOut: [
      ["J'ai mal à le ventre.", "J'ai mal au ventre."],
      ["J'ai mal à les dents.", "J'ai mal aux dents."],
      ["Ma tête fait mal.", "J'ai mal à la tête."],
      ["Il faut de boire de l'eau.", "Il faut boire de l'eau."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez avec *au, à la, à l'* ou *aux*.",
      items: ["J'ai mal [[au]] dos.", "Elle a mal [[aux]] yeux.", "Tu as mal [[à la]] gorge ?"]
    }
  },

  skills: {
    listening: {
      intro: "Trois patients parlent avec le pharmacien. Écoutez.",
      title: "À la pharmacie",
      script: [
        { who: "Le pharmacien", line: "Bonjour, madame. Qu'est-ce qui ne va pas ?" },
        { who: "Claire", line: "J'ai mal au ventre depuis hier soir. Et j'ai un peu la nausée." },
        { who: "Le pharmacien", line: "Vous devez manger léger : du riz, des bananes. Et buvez beaucoup d'eau." },
        { who: "Paul", line: "Moi, j'ai mal au dos. J'ai joué au tennis dimanche." },
        { who: "Le pharmacien", line: "Mettez cette crème deux fois par jour, et ne faites pas de sport cette semaine." },
        { who: "Inès", line: "J'ai un rhume. J'ai le nez qui coule et je tousse depuis trois jours." },
        { who: "Le pharmacien", line: "Prenez ce sirop. Si vous avez de la fièvre, vous devriez aller chez le médecin." }
      ],
      activities: [
        {
          type: "match", title: "Problème et conseil",
          prompt: "Associez le patient, le problème et le conseil.",
          pairs: [["Claire : mal au ventre", "manger léger et boire de l'eau"], ["Paul : mal au dos", "mettre une crème et ne pas faire de sport"], ["Inès : un rhume", "prendre un sirop"]]
        },
        {
          type: "gap", title: "Depuis quand ?",
          prompt: "Complétez.",
          items: ["Claire a mal depuis [[hier]] soir.", "Paul a joué au [[tennis]] dimanche.", "Inès tousse depuis [[trois|3]] jours."]
        }
      ]
    },

    reading: {
      intro: "Lisez l'affiche du centre de santé de l'université.",
      title: "Étudiants : prenez soin de vous !",
      text: [
        "**Pendant les examens, votre santé est importante.**",
        "• Il faut dormir au moins sept heures par nuit. • Vous devriez faire une pause toutes les heures quand vous étudiez. • Mangez des fruits et des légumes, et ne buvez pas trop de café. • Faites du sport : trente minutes de marche par jour, c'est parfait. • Vous êtes stressé(e) ? Vous avez mal à la tête tous les jours ? Ne restez pas seul(e) : le centre de santé est ouvert du lundi au vendredi, de 8 h à 18 h. La consultation est gratuite."
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Il faut dormir au moins sept heures.", a: true },
            { s: "Il faut boire beaucoup de café.", a: false },
            { s: "Le centre est ouvert le samedi.", a: false },
            { s: "La consultation est gratuite.", a: true }
          ]
        },
        {
          type: "sort", title: "Bon ou mauvais pour la santé ?",
          bins: ["C'est bon 👍", "Ce n'est pas bon 👎"],
          items: [
            { text: "dormir sept heures", bin: 0 }, { text: "faire des pauses", bin: 0 }, { text: "marcher trente minutes", bin: 0 }, { text: "manger des légumes", bin: 0 },
            { text: "boire trop de café", bin: 1 }, { text: "rester seul quand on est stressé", bin: 1 }, { text: "étudier toute la nuit", bin: 1 }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis écrivez à un ami malade.",
      activities: [
        {
          type: "rewrite", title: "Donnez un conseil",
          prompt: "Transformez avec *tu devrais*.",
          items: [
            { q: "Il faut dormir. → Tu…", a: ["Tu devrais dormir."] },
            { q: "Il faut aller chez le médecin. → Tu…", a: ["Tu devrais aller chez le médecin."] },
            { q: "Il faut boire du thé. → Tu…", a: ["Tu devrais boire du thé."] },
            { q: "Il ne faut pas sortir. → Tu…", a: ["Tu ne devrais pas sortir."] }
          ]
        },
        {
          type: "write", title: "Un message à un ami malade",
          prompt: "Votre ami(e) est malade. Il / Elle a mal à la tête et de la fièvre. Écrivez-lui un message : demandez comment il / elle va et donnez quatre conseils.",
          minWords: 50, maxWords: 80,
          model: "Salut Léa ! Ta sœur m'a dit que tu es malade. Tu as toujours de la fièvre ? Tu dois rester au lit et dormir beaucoup. Il faut boire de l'eau et du thé avec du miel. Tu devrais aller chez le médecin si la fièvre continue. Et ne t'inquiète pas pour le cours : je vais t'envoyer mes notes ! Bisous et bon rétablissement !",
          bank: ["Comment tu vas ?", "Tu dois…", "Il faut…", "Tu devrais…", "Ne… pas…", "Bon rétablissement !"],
          checklist: ["J'ai donné quatre conseils.", "J'ai utilisé trois structures différentes.", "J'ai fini avec *Bon rétablissement !*"]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Chez le médecin",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Qu'est-ce qui ne va pas ?" },
            { s: "J'ai mal à la tête." },
            { s: "J'ai mal au ventre depuis hier." },
            { s: "Vous avez de la fièvre ?" },
            { s: "Il faut boire beaucoup d'eau." },
            { s: "Tu devrais te reposer." }
          ]
        },
        {
          type: "speak", title: "Mes conseils santé",
          prompt: "Donnez vos cinq conseils pour rester en forme pendant les examens.",
          language: ["Pour rester en forme, il faut…", "Vous devriez…", "Ne… pas…", "C'est important de…"],
          seconds: 60,
          checklist: ["donné cinq conseils ?", "utilisé *il faut* et *vous devriez* ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux nommer quinze parties du corps.", review: "Explication : le vocabulaire" },
    { can: "Je peux dire où j'ai mal avec *au, à la, à l', aux*.", review: "Explication : avoir mal à" },
    { can: "Je peux décrire mes symptômes.", review: "Présentation : le dialogue" },
    { can: "Je peux dire depuis quand j'ai un problème.", review: "Explication : depuis" },
    { can: "Je peux donner des conseils.", review: "Explication : donner des conseils ; Écrire, activité 1" },
    { can: "Je peux parler avec un médecin ou un pharmacien.", review: "Parler, activité 1" }
  ]
};
