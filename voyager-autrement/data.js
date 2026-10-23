window.UNIT = {
  slug: "voyager-autrement",
  title: "Voyager autrement",
  level: "B1",
  subject: "Se déplacer",
  minutes: 55,
  focus: ["le tourisme responsable", "exprimer le but : pour, afin de, pour que", "de peur de / de peur que", "organiser un voyage"],

  presentation: {
    scene: "🎒🚂🌿",
    situation: "Le club de voyage de l'université prépare un **voyage solidaire** au Pérou. Les étudiants discutent du but du projet et de la meilleure façon de voyager.",
    warmup: {
      prompt: "Pourquoi voyagez-vous, en général ?",
      options: ["pour me reposer", "pour découvrir une culture", "pour apprendre une langue", "pour voir ma famille", "pour faire du sport", "pour aider une communauté", "pour faire des photos"],
      response: "Très bien ! Vous allez apprendre à exprimer le but."
    },
    dialogueTitle: "Le projet du club",
    dialogue: [
      { who: "Antoine", line: "On part *pour* aider une école dans un village des Andes." },
      { who: "Léa", line: "Oui, *afin de* rénover la bibliothèque et donner des cours d'anglais." },
      { who: "Antoine", line: "Et on prend le bus plutôt que l'avion sur place, *pour* polluer moins." },
      { who: "Léa", line: "Je propose aussi qu'on loge chez l'habitant *pour que* l'argent *reste* dans la communauté." },
      { who: "Antoine", line: "Bonne idée. Il faut préparer une réunion *pour que* tout le monde *comprenne* le projet." },
      { who: "Léa", line: "Et apprenons un peu de quechua, *de peur de* passer pour des touristes qui ne respectent rien !" }
    ]
  },

  objectives: [
    "Je peux parler du tourisme responsable.",
    "Je peux exprimer le but avec *pour, afin de* + infinitif.",
    "Je peux utiliser *pour que / afin que* + subjonctif.",
    "Je peux présenter un projet de voyage et ses objectifs."
  ],

  explanation: {
    vocabTitle: "Le tourisme responsable",
    vocab: [
      { word: "le tourisme de masse", icon: "🏖️" }, { word: "l'écotourisme", icon: "🌿" }, { word: "loger chez l'habitant", icon: "🏡" }, { word: "le volontariat", icon: "🤝" },
      { word: "l'empreinte carbone", icon: "👣" }, { word: "un itinéraire", icon: "🗺️" }, { word: "un sac à dos", icon: "🎒" }, { word: "une auberge de jeunesse", icon: "🛏️" },
      { word: "respecter", icon: "🙏" }, { word: "une communauté locale", icon: "🏘️" }, { word: "le patrimoine", icon: "🏛️" }, { word: "s'adapter", icon: "🔄" }
    ],
    grammar: [
      {
        title: "Exprimer le but",
        head: ["Même sujet → infinitif", "Sujets différents → subjonctif"],
        rows: [
          ["*pour* voyager moins cher", "*pour que* tu voyages moins cher"],
          ["*afin de* respecter la nature", "*afin que* nous respections la nature"],
          ["*de peur de* se perdre", "*de peur que* le guide se perde"],
          ["*dans le but de* découvrir", "—"]
        ],
        note: "*pour que* et *afin que* sont toujours suivis du **subjonctif** : *pour que tu puisses, afin qu'il soit*."
      },
      {
        title: "Exemples dans le contexte du voyage",
        head: ["Phrase"],
        rows: [
          ["Je prends le train *pour* réduire mon empreinte carbone."],
          ["Nous logeons chez l'habitant *afin de* connaître la culture locale."],
          ["Le guide parle lentement *pour que* les touristes *comprennent*."],
          ["Je réserve tôt *de peur qu'*il n'y *ait* plus de places."]
        ]
      }
    ],
    watchOut: [
      ["Je travaille pour que je paie le voyage.", "Je travaille pour payer le voyage."],
      ["pour que tu peux venir", "pour que tu puisses venir"],
      ["afin que de visiter", "afin de visiter"],
      ["Je pars pour de découvrir.", "Je pars pour découvrir."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez.",
      items: ["Je fais des économies [[pour]] voyager.", "Je t'explique le plan pour que tu [[comprennes]]. (comprendre)", "Nous partons tôt [[afin d']]éviter la foule."]
    }
  },

  skills: {
    listening: {
      intro: "Une spécialiste donne des conseils pour voyager de façon responsable. Écoutez.",
      title: "Cinq conseils pour voyager autrement",
      script: [
        { who: "La spécialiste", line: "Premier conseil : voyagez moins loin, mais plus longtemps, pour réduire vos trajets en avion." },
        { who: "La spécialiste", line: "Deuxièmement, logez dans des hébergements locaux, afin que l'argent profite aux habitants." },
        { who: "La spécialiste", line: "Troisièmement, apprenez quelques mots de la langue locale pour montrer votre respect." },
        { who: "La spécialiste", line: "Quatrièmement, emportez une gourde pour éviter les bouteilles en plastique." },
        { who: "La spécialiste", line: "Et enfin, demandez toujours la permission avant de photographier une personne, pour qu'elle ne se sente pas comme un objet touristique." }
      ],
      activities: [
        {
          type: "match", title: "Le conseil et son but",
          pairs: [["voyager moins loin", "réduire les trajets en avion"], ["loger localement", "faire profiter les habitants"], ["apprendre quelques mots", "montrer son respect"], ["emporter une gourde", "éviter le plastique"]]
        },
        {
          type: "gap", title: "Les expressions du but",
          prompt: "Complétez avec l'expression entendue.",
          items: ["Logez dans des hébergements locaux, [[afin que]] l'argent profite aux habitants.", "Emportez une gourde [[pour]] éviter les bouteilles en plastique.", "Demandez la permission, pour qu'elle ne se [[sente]] pas comme un objet."]
        }
      ]
    },

    reading: {
      intro: "Lisez le témoignage de Mehdi, de retour d'un voyage solidaire.",
      title: "Mon mois au Pérou",
      text: [
        "L'été dernier, je suis parti un mois au Pérou avec une association, dans le but d'aider une école rurale. Nous avons repeint les classes et organisé des ateliers de lecture pour que les enfants aient envie de lire.",
        "Je logeais chez une famille, afin de partager leur quotidien. Au début, c'était difficile : pas d'eau chaude, et je ne parlais pas bien espagnol. Mais la famille parlait lentement pour que je comprenne, et j'ai fait beaucoup de progrès.",
        "Aujourd'hui, je voyage autrement. Je prends le train dès que possible pour polluer moins, et je choisis des petits hôtels de peur d'encourager le tourisme de masse. Ce voyage a changé ma façon de voir le monde."
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Mehdi est parti avec une association.", a: true },
            { s: "Il logeait dans un grand hôtel.", a: false },
            { s: "La famille parlait vite.", a: false },
            { s: "Aujourd'hui, Mehdi prend le train dès que possible.", a: true }
          ]
        },
        {
          type: "sort", title: "Infinitif ou subjonctif ?",
          bins: ["but + infinitif", "but + subjonctif"],
          items: [
            { text: "dans le but d'aider une école", bin: 0 }, { text: "afin de partager leur quotidien", bin: 0 }, { text: "pour polluer moins", bin: 0 },
            { text: "pour que les enfants aient envie de lire", bin: 1 }, { text: "pour que je comprenne", bin: 1 }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis présentez votre projet de voyage.",
      activities: [
        {
          type: "rewrite", title: "Pour + infinitif ou pour que + subjonctif ?",
          prompt: "Combinez les phrases avec *pour* ou *pour que*.",
          items: [
            { q: "J'économise. Je veux voyager.", a: ["J'économise pour voyager."] },
            { q: "Je t'envoie la carte. Tu trouves l'hôtel.", a: ["Je t'envoie la carte pour que tu trouves l'hôtel."] },
            { q: "Nous partons tôt. Nous voulons voir le lever du soleil.", a: ["Nous partons tôt pour voir le lever du soleil."] },
            { q: "Le guide répète. Les touristes comprennent.", a: ["Le guide répète pour que les touristes comprennent."] }
          ]
        },
        {
          type: "write", title: "Notre projet de voyage responsable",
          prompt: "Présentez un projet de voyage responsable pour votre club : destination, objectifs, transports, hébergement et règles du groupe. Utilisez au moins cinq expressions du but.",
          minWords: 100, maxWords: 150,
          model: "Notre club propose un voyage de dix jours au Chiapas, dans le but de découvrir les cultures mayas et de soutenir une coopérative de café. Nous voyagerons en bus pour réduire notre empreinte carbone. Nous logerons dans des maisons d'hôtes afin que l'argent profite directement aux familles. Avant de partir, nous organiserons trois ateliers pour que chaque participant connaisse l'histoire de la région. Sur place, nous apprendrons quelques mots de tseltal afin de saluer les habitants dans leur langue. Enfin, nous demanderons toujours la permission avant de prendre des photos, de peur de manquer de respect aux gens.",
          bank: ["dans le but de…", "pour + infinitif", "afin de…", "pour que + subjonctif", "afin que…", "de peur de…"],
          checklist: ["J'ai présenté la destination et les objectifs.", "J'ai utilisé cinq expressions du but.", "J'ai utilisé le subjonctif après *pour que / afin que*."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Exprimez le but",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Je prends le train pour polluer moins." },
            { s: "Nous logeons chez l'habitant afin de découvrir la culture." },
            { s: "Le guide parle lentement pour que nous comprenions." },
            { s: "Je réserve de peur qu'il n'y ait plus de places." },
            { s: "Nous partons dans le but d'aider une école." },
            { s: "Il faut respecter les communautés locales." }
          ]
        },
        {
          type: "speak", title: "Mon voyage idéal",
          prompt: "Présentez votre voyage idéal en une minute et demie : où, comment, et surtout pourquoi.",
          language: ["Je voudrais aller à… pour…", "afin de…", "pour que mes amis / ma famille…", "de peur de…"],
          seconds: 90,
          checklist: ["exprimé trois buts ?", "utilisé *pour que* + subjonctif ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux parler du tourisme responsable.", review: "Explication : le vocabulaire ; Écouter" },
    { can: "Je peux utiliser *pour, afin de* + infinitif.", review: "Explication : exprimer le but" },
    { can: "Je peux utiliser *pour que, afin que* + subjonctif.", review: "Explication : exprimer le but ; Écrire, activité 1" },
    { can: "Je peux choisir entre infinitif et subjonctif selon le sujet.", review: "Lire, activité 2" },
    { can: "Je peux comprendre un témoignage de voyage.", review: "Lire" },
    { can: "Je peux présenter un projet de voyage et ses objectifs.", review: "Écrire, activité 2 et Parler" }
  ]
};
