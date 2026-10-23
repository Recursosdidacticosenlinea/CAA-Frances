window.UNIT = {
  slug: "vivre-ensemble",
  title: "Vivre ensemble",
  level: "B2",
  subject: "La société",
  minutes: 60,
  focus: ["la vie en communauté", "l'expression du temps : avant que, après que, dès que, jusqu'à ce que", "avant de + infinitif / après + infinitif passé", "proposer des règles de vie commune"],

  presentation: {
    scene: "🏘️🤝🕊️",
    situation: "Dans une résidence universitaire, les conflits entre voisins se multiplient : bruit, cuisine sale, poubelles… Le conseil des résidents se réunit pour rédiger une **charte du vivre-ensemble**.",
    warmup: {
      prompt: "Qu'est-ce qui crée le plus de conflits entre voisins ?",
      options: ["le bruit", "la propreté", "les animaux", "le stationnement", "les fêtes", "les odeurs de cuisine", "le manque de communication"],
      response: "Merci ! Voyons comment le conseil organise la vie commune."
    },
    dialogueTitle: "Le conseil des résidents",
    dialogue: [
      { who: "Sophie", line: "*Avant que* nous *votions* la charte, je voudrais qu'on parle du bruit." },
      { who: "Karim", line: "D'accord. Je propose le silence *dès que* minuit *sonne*, en semaine." },
      { who: "Élise", line: "Et pour la cuisine ? Chacun doit nettoyer *après avoir cuisiné*." },
      { who: "Karim", line: "Oui. Et on garde les affiches sur la porte *jusqu'à ce que* tout le monde *ait compris* les règles." },
      { who: "Sophie", line: "*Après que* la charte *aura été adoptée*, on organisera un repas partagé, *pour que* les gens se connaissent mieux." },
      { who: "Élise", line: "Excellente idée ! *Avant de* punir, il faut d'abord se parler." }
    ]
  },

  objectives: [
    "Je peux parler de la vie en communauté et des conflits de voisinage.",
    "Je peux exprimer l'antériorité avec *avant que* + subjonctif et *avant de* + infinitif.",
    "Je peux exprimer la postériorité avec *après que* + indicatif et *après* + infinitif passé.",
    "Je peux utiliser *dès que, jusqu'à ce que, pendant que, depuis que*."
  ],

  explanation: {
    vocabTitle: "Le vivre-ensemble",
    vocab: [
      { word: "un voisin", icon: "🏠" }, { word: "le voisinage", icon: "🏘️" }, { word: "une nuisance", icon: "🔊" }, { word: "une incivilité", icon: "🚯" },
      { word: "un conflit", icon: "⚡" }, { word: "une médiation", icon: "🤝" }, { word: "une charte", icon: "📜" }, { word: "les parties communes", icon: "🚪" },
      { word: "la tolérance", icon: "🕊️" }, { word: "la solidarité", icon: "💞" }, { word: "respecter les règles", icon: "✅" }, { word: "un repas partagé", icon: "🍲" }
    ],
    grammar: [
      {
        title: "Exprimer le temps",
        head: ["Rapport", "Connecteur", "Mode", "Exemple"],
        rows: [
          ["avant", "*avant que*", "subjonctif", "Rangez la cuisine *avant que* les autres *arrivent*."],
          ["avant (même sujet)", "*avant de*", "infinitif", "Rangez la cuisine *avant de* partir."],
          ["après", "*après que*", "indicatif", "*Après qu'*il *est parti*, le calme est revenu."],
          ["après (même sujet)", "*après*", "infinitif passé", "*Après avoir mangé*, nettoyez la table."],
          ["immédiatement après", "*dès que / aussitôt que*", "indicatif", "*Dès que* la fête *finit*, on range."],
          ["limite", "*jusqu'à ce que*", "subjonctif", "On parlera *jusqu'à ce qu'*on *trouve* une solution."],
          ["simultanéité", "*pendant que / alors que*", "indicatif", "*Pendant que* tu dors, je travaille."],
          ["point de départ", "*depuis que*", "indicatif", "*Depuis que* la charte existe, il y a moins de conflits."]
        ],
        note: "Astuce : ce qui n'est pas encore réalisé (*avant que, jusqu'à ce que*) → subjonctif ; ce qui est réalisé (*après que, dès que*) → indicatif."
      },
      {
        title: "Dès que / quand + futur",
        head: ["Futur simple", "Futur antérieur (action terminée avant l'autre)"],
        rows: [
          ["*Dès que* tu *arriveras*, appelle-moi.", "*Dès que* tu *auras fini*, appelle-moi."],
          ["*Quand* la réunion *commencera*, éteignez vos téléphones.", "*Quand* nous *aurons voté*, nous ferons la fête."]
        ],
        note: "Futur antérieur : *avoir / être* au futur + participe passé (*j'aurai fini, elle sera partie*)."
      }
    ],
    watchOut: [
      ["Après que nous ayons mangé…", "Après que nous avons mangé…"],
      ["Avant qu'il part…", "Avant qu'il parte…"],
      ["Avant de que tu sortes…", "Avant que tu sortes… / Avant de sortir…"],
      ["Après manger, on range.", "Après avoir mangé, on range."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez.",
      items: ["Range ta chambre avant que tes parents [[arrivent]]. (arriver)", "[[Après avoir|Apres avoir]] cuisiné, nettoie la cuisine.", "Nous attendrons jusqu'à ce qu'il [[soit]] là. (être)"]
    }
  },

  skills: {
    listening: {
      intro: "Une médiatrice explique comment elle résout les conflits de voisinage. Écoutez.",
      title: "Le métier de médiatrice",
      script: [
        { who: "La médiatrice", line: "Mon travail commence dès qu'un habitant m'appelle. Avant de rencontrer les deux voisins ensemble, je les écoute séparément." },
        { who: "La médiatrice", line: "Pendant que l'un parle, l'autre ne doit pas l'interrompre. C'est une règle essentielle." },
        { who: "La médiatrice", line: "Après avoir écouté tout le monde, je propose des solutions concrètes : des horaires, un planning de ménage…" },
        { who: "La médiatrice", line: "Je reste disponible jusqu'à ce que la situation soit vraiment apaisée. Et depuis que la ville a créé ce service, les plaintes à la police ont diminué de moitié." }
      ],
      activities: [
        {
          type: "tiles", title: "Les étapes de la médiation",
          prompt: "Remettez les mots dans l'ordre.",
          items: [
            { a: "Elle écoute les voisins séparément." },
            { a: "Elle les réunit ensuite." },
            { a: "Elle propose des solutions concrètes." }
          ]
        },
        {
          type: "gap", title: "Les connecteurs de temps",
          prompt: "Complétez avec le connecteur entendu.",
          items: ["Mon travail commence [[dès qu']]un habitant m'appelle.", "[[Pendant que]] l'un parle, l'autre ne doit pas l'interrompre.", "Je reste disponible [[jusqu'à ce que|jusqu'a ce que]] la situation soit apaisée.", "[[Depuis que]] la ville a créé ce service, les plaintes ont diminué."]
        }
      ]
    },

    reading: {
      intro: "Lisez la charte adoptée par la résidence.",
      title: "Charte du vivre-ensemble – Résidence Les Tilleuls",
      text: [
        "1. **Le calme** : en semaine, le silence est demandé dès que 23 heures sonnent. Avant d'organiser une fête, prévenez vos voisins au moins deux jours à l'avance.",
        "2. **La cuisine commune** : après avoir cuisiné, chacun lave sa vaisselle et nettoie les plaques. Ne laissez pas d'aliments dans le frigo commun plus d'une semaine.",
        "3. **Les conflits** : avant que la situation ne devienne grave, parlez directement avec la personne concernée. Si le problème continue, contactez le conseil des résidents, qui organisera une médiation jusqu'à ce qu'une solution soit trouvée.",
        "4. **La solidarité** : un repas partagé est organisé chaque premier vendredi du mois. Depuis qu'il existe, de nombreuses amitiés sont nées !"
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "En semaine, le silence commence à minuit.", a: false },
            { s: "Il faut prévenir les voisins deux jours avant une fête.", a: true },
            { s: "En cas de conflit, il faut d'abord appeler la police.", a: false },
            { s: "Le repas partagé a lieu une fois par mois.", a: true }
          ]
        },
        {
          type: "sort", title: "Quel mode ?",
          prompt: "Classez les expressions de la charte selon le mode qui suit.",
          bins: ["+ indicatif", "+ subjonctif", "+ infinitif"],
          items: [
            { text: "dès que 23 heures sonnent", bin: 0 }, { text: "depuis qu'il existe", bin: 0 },
            { text: "avant que la situation ne devienne grave", bin: 1 }, { text: "jusqu'à ce qu'une solution soit trouvée", bin: 1 },
            { text: "avant d'organiser une fête", bin: 2 }, { text: "après avoir cuisiné", bin: 2 }
          ]
        }
      ]
    },

    writing: {
      intro: "Transformez, puis rédigez votre charte.",
      activities: [
        {
          type: "rewrite", title: "Infinitif ou subjonctif ?",
          prompt: "Combinez les phrases avec le connecteur indiqué.",
          items: [
            { q: "Je range la cuisine. Ensuite, je sors. (avant de)", a: ["Je range la cuisine avant de sortir."] },
            { q: "Range la cuisine. Les invités vont arriver. (avant que)", a: ["Range la cuisine avant que les invités arrivent.", "Range la cuisine avant que les invités n'arrivent."] },
            { q: "Il a mangé. Ensuite, il a lavé la vaisselle. (après + infinitif passé)", a: ["Après avoir mangé, il a lavé la vaisselle.", "Il a lavé la vaisselle après avoir mangé."] },
            { q: "Nous discutons. Nous trouverons un accord. (jusqu'à ce que)", a: ["Nous discutons jusqu'à ce que nous trouvions un accord.", "Nous discuterons jusqu'à ce que nous trouvions un accord."] }
          ]
        },
        {
          type: "write", title: "La charte de mon lieu de vie",
          prompt: "Rédigez une charte du vivre-ensemble pour votre résidence, votre maison familiale ou votre salle de classe : une introduction, cinq règles et une conclusion. Utilisez au moins six expressions de temps différentes.",
          minWords: 160, maxWords: 230,
          model: "Charte de la salle d'étude du troisième étage. Cette salle est partagée par plus de cent étudiants. Pour que chacun puisse y travailler sereinement, nous proposons cinq règles. Premièrement, dès que vous entrez, mettez votre téléphone en mode silencieux. Deuxièmement, pendant que les autres étudient, parlez à voix basse ou sortez dans le couloir. Troisièmement, avant de partir, jetez vos déchets et remettez les chaises en place. Quatrièmement, ne laissez pas vos affaires sur une table pendant que vous êtes absent plus de quinze minutes. Enfin, après avoir utilisé le tableau, effacez-le pour le groupe suivant. Si un conflit apparaît, parlez-en calmement avec la personne avant qu'il ne prenne de l'ampleur. Depuis que des règles similaires ont été adoptées à la bibliothèque centrale, l'ambiance y est bien meilleure. Nous espérons que ce sera bientôt le cas ici !",
          bank: ["dès que…", "pendant que…", "avant de + infinitif", "avant que + subjonctif", "après avoir + participe", "jusqu'à ce que…", "depuis que…"],
          checklist: ["Ma charte a une introduction, cinq règles et une conclusion.", "J'ai utilisé six expressions de temps différentes.", "J'ai utilisé le subjonctif après *avant que / jusqu'à ce que*.", "J'ai utilisé l'indicatif après *après que / dès que*."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Les règles de la vie commune",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Avant que nous votions, parlons du bruit." },
            { s: "Le silence commence dès que minuit sonne." },
            { s: "Après avoir cuisiné, chacun nettoie la cuisine." },
            { s: "Nous parlerons jusqu'à ce que nous trouvions une solution." },
            { s: "Depuis que la charte existe, il y a moins de conflits." },
            { s: "Avant de punir, il faut d'abord se parler." }
          ]
        },
        {
          type: "speak", title: "Proposez vos règles",
          prompt: "Vous présentez au conseil des résidents trois règles pour mieux vivre ensemble. Justifiez chaque règle (deux minutes).",
          language: ["Je propose que…", "Dès que…", "Avant de…", "Après avoir…", "jusqu'à ce que…", "Depuis que…, on constate que…"],
          seconds: 120,
          checklist: ["proposé trois règles ?", "utilisé quatre expressions de temps ?", "justifié vos propositions ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux parler du vivre-ensemble et des conflits de voisinage.", review: "Explication : le vocabulaire" },
    { can: "Je peux utiliser *avant que* + subjonctif et *avant de* + infinitif.", review: "Explication : exprimer le temps ; Écrire, activité 1" },
    { can: "Je peux utiliser *après que* + indicatif et *après avoir* + participe.", review: "Explication : exprimer le temps" },
    { can: "Je peux utiliser *dès que, jusqu'à ce que, pendant que, depuis que*.", review: "Écouter, activité 2 ; Lire, activité 2" },
    { can: "Je peux utiliser le futur antérieur après *dès que / quand*.", review: "Explication : dès que / quand + futur" },
    { can: "Je peux rédiger et présenter des règles de vie commune.", review: "Écrire, activité 2 et Parler" }
  ]
};
