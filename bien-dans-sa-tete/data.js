window.UNIT = {
  slug: "bien-dans-sa-tete",
  title: "Bien dans sa tête",
  level: "C1",
  subject: "La santé",
  minutes: 65,
  focus: ["la santé mentale", "atténuer : plutôt, quelque peu, relativement, il se peut que", "intensifier : extrêmement, nullement, loin de, à quel point", "parler d'un sujet sensible avec tact"],

  presentation: {
    scene: "🧠🌱💬",
    situation: "Le service de santé de l'université lance une campagne : **« En parler, c'est déjà aller mieux »**. Une psychologue anime une table ronde avec des étudiants sur le stress, l'anxiété et l'épuisement.",
    warmup: {
      prompt: "Qu'est-ce qui vous aide quand vous êtes stressé(e) ?",
      options: ["parler à un proche", "faire du sport", "dormir", "la musique", "la nature", "méditer", "écrire", "consulter un professionnel"],
      response: "Merci de partager. Ici, vous apprendrez à parler de ces sujets avec nuance et délicatesse."
    },
    dialogueTitle: "La table ronde",
    dialogue: [
      { who: "La psychologue", line: "Comment décririez-vous votre état pendant la période des examens ?" },
      { who: "Antoine", line: "Je dirais que je suis *plutôt* stressé, mais *rien de bien grave*. C'est *relativement* gérable." },
      { who: "Manon", line: "Pour moi, c'est *nettement* plus difficile. Je ne m'étais *pas du tout* rendu compte *à quel point* l'anxiété pouvait être épuisante." },
      { who: "La psychologue", line: "Vous êtes *loin d'être* la seule, Manon. *Il se peut que* beaucoup d'étudiants n'osent *nullement* en parler." },
      { who: "Antoine", line: "C'est vrai que le sujet reste *quelque peu* tabou." },
      { who: "La psychologue", line: "*Précisément*. Demander de l'aide n'est *en aucun cas* un signe de faiblesse." }
    ]
  },

  objectives: [
    "Je peux utiliser le vocabulaire de la santé mentale avec justesse.",
    "Je peux atténuer un propos (*plutôt, quelque peu, il se peut que…*).",
    "Je peux intensifier un propos (*nettement, nullement, à quel point, loin de…*).",
    "Je peux aborder un sujet sensible avec tact, à l'écrit et à l'oral."
  ],

  explanation: {
    vocabTitle: "La santé mentale",
    vocab: [
      { word: "le bien-être", icon: "🌿" }, { word: "l'anxiété", icon: "😰" }, { word: "l'épuisement", icon: "🪫" }, { word: "le surmenage", icon: "📚" },
      { word: "la charge mentale", icon: "🧠" }, { word: "un trouble", icon: "🌀" }, { word: "consulter", icon: "🩺" }, { word: "la résilience", icon: "🌱" },
      { word: "la bienveillance", icon: "💗" }, { word: "se confier", icon: "🤝" }, { word: "un tabou", icon: "🤐" }, { word: "la stigmatisation", icon: "🏷️" }
    ],
    grammar: [
      {
        title: "Atténuer",
        head: ["Procédé", "Exemples"],
        rows: [
          ["adverbes", "*plutôt, assez, relativement, quelque peu, un tant soit peu, légèrement*"],
          ["conditionnel", "Je *dirais* que… / On *pourrait* penser que…"],
          ["possibilité", "*Il se peut que* + subj. / *Il n'est pas exclu que* + subj."],
          ["litote", "*Ce n'est pas facile* (= c'est difficile). *Je ne suis pas contre* (= je suis pour)."],
          ["euphémisme", "*traverser une période difficile* (= aller très mal)"]
        ]
      },
      {
        title: "Intensifier",
        head: ["Procédé", "Exemples"],
        rows: [
          ["adverbes", "*extrêmement, nettement, profondément, particulièrement, infiniment*"],
          ["négation forte", "*nullement, aucunement, en aucun cas, pas le moins du monde*"],
          ["exclamation indirecte", "Je ne savais pas *à quel point* c'était dur. / Tu ne peux pas imaginer *combien* j'étais soulagé."],
          ["*loin de* + infinitif / nom", "Il est *loin d'*être guéri. Vous êtes *loin d'*être seul."],
          ["*on ne peut plus* + adj.", "C'est *on ne peut plus* clair. (= extrêmement clair)"]
        ],
        note: "*Nullement* et *aucunement* s'emploient avec *ne* : *Ce n'est nullement une faiblesse.*"
      }
    ],
    watchOut: [
      ["C'est très extrêmement difficile.", "C'est extrêmement difficile."],
      ["Il se peut qu'il est fatigué.", "Il se peut qu'il soit fatigué."],
      ["Ce n'est pas nullement grave.", "Ce n'est nullement grave."],
      ["Il est loin de guérir. (= il n'est pas guéri)", "Il est loin d'être guéri."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez.",
      items: ["Il se peut qu'elle [[ait]] besoin d'aide. (avoir)", "Ce n'est [[nullement|aucunement]] un signe de faiblesse.", "Je ne savais pas [[à quel point|a quel point]] c'était difficile."]
    }
  },

  skills: {
    listening: {
      intro: "Écoutez le témoignage d'une étudiante dans un podcast.",
      title: "Podcast : « Mon burn-out à vingt ans »",
      script: [
        { who: "Élise", line: "Au début, je me disais que j'étais simplement un peu fatiguée. Je travaillais le soir dans un restaurant et je révisais la nuit." },
        { who: "Élise", line: "Puis, petit à petit, je n'arrivais plus à me concentrer. J'oubliais tout. Je ne me rendais pas compte à quel point j'étais épuisée." },
        { who: "Élise", line: "C'est une amie qui m'a convaincue de consulter. Honnêtement, je n'étais pas le moins du monde convaincue que ça m'aiderait." },
        { who: "Élise", line: "Aujourd'hui, je suis loin d'avoir tout réglé, mais je vais nettement mieux. J'ai appris à dire non, ce qui n'est pas rien !" }
      ],
      activities: [
        {
          type: "tiles", title: "Les étapes du témoignage",
          prompt: "Remettez les mots dans l'ordre.",
          items: [
            { a: "Elle se croyait un peu fatiguée." },
            { a: "Elle ne pouvait plus se concentrer." },
            { a: "Une amie l'a convaincue de consulter." }
          ]
        },
        {
          type: "match", title: "Atténuation ou intensification ?",
          prompt: "Associez l'expression et son effet.",
          pairs: [["« un peu fatiguée »", "atténuation"], ["« à quel point j'étais épuisée »", "intensification"], ["« pas le moins du monde »", "négation renforcée"], ["« ce n'est pas rien »", "litote"]]
        }
      ]
    },

    reading: {
      intro: "Lisez cet éditorial publié dans la revue de l'université.",
      title: "Santé mentale : briser le silence",
      text: [
        "Selon une enquête récente, plus d'un étudiant sur trois déclarerait des symptômes d'anxiété. Ce chiffre, pour le moins préoccupant, n'a pourtant rien de surprenant : précarité, pression des résultats, incertitude sur l'avenir… Les causes sont nombreuses et étroitement liées.",
        "Il serait toutefois réducteur de présenter la jeune génération comme fragile. Elle est, au contraire, la première à parler ouvertement de ces questions, là où ses aînés préféraient se taire. Ce n'est nullement un signe de faiblesse, mais plutôt une forme de lucidité.",
        "Reste que l'offre de soins est loin d'être à la hauteur. Dans certaines universités, il faut attendre plusieurs mois pour obtenir un rendez-vous avec un psychologue. Il n'est pas exclu que ce délai décourage précisément ceux qui en ont le plus besoin."
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "L'auteur trouve le chiffre de l'enquête très surprenant.", a: false },
            { s: "Il pense que la jeune génération est fragile.", a: false },
            { s: "Il considère que parler de santé mentale est une forme de lucidité.", a: true },
            { s: "Selon lui, l'offre de soins est suffisante.", a: false }
          ]
        },
        {
          type: "sort", title: "Atténuer ou intensifier ?",
          prompt: "Classez les expressions du texte.",
          bins: ["Atténuer", "Intensifier"],
          items: [
            { text: "il serait réducteur de", bin: 0 }, { text: "plutôt une forme de lucidité", bin: 0 }, { text: "il n'est pas exclu que", bin: 0 },
            { text: "pour le moins préoccupant", bin: 1 }, { text: "étroitement liées", bin: 1 }, { text: "ce n'est nullement", bin: 1 }, { text: "loin d'être à la hauteur", bin: 1 }
          ]
        }
      ]
    },

    writing: {
      intro: "Nuancez, puis rédigez votre lettre ouverte.",
      activities: [
        {
          type: "rewrite", title: "Changez l'intensité",
          prompt: "Reformulez avec l'expression indiquée.",
          items: [
            { q: "Ce n'est pas un signe de faiblesse. (nullement)", a: ["Ce n'est nullement un signe de faiblesse."] },
            { q: "Il n'est pas guéri du tout. (loin de)", a: ["Il est loin d'être guéri."] },
            { q: "Peut-être qu'elle a besoin de repos. (il se peut que)", a: ["Il se peut qu'elle ait besoin de repos."] },
            { q: "C'est extrêmement clair. (on ne peut plus)", a: ["C'est on ne peut plus clair."] }
          ]
        },
        {
          type: "write", title: "Lettre ouverte au président de l'université",
          prompt: "Rédigez une lettre ouverte au président de votre université sur la santé mentale des étudiants : constat, causes, propositions. Adoptez un ton à la fois ferme et bienveillant, en alternant atténuation et intensification.",
          minWords: 220, maxWords: 300,
          model: "Monsieur le Président, nous souhaitons attirer votre attention sur une question qui nous paraît on ne peut plus urgente : la santé mentale des étudiants. Il ne s'agit nullement de dramatiser, mais les chiffres sont pour le moins inquiétants. Selon une enquête menée par notre association, près de quatre étudiants sur dix se disent régulièrement épuisés. Nous ne savions pas à quel point la situation s'était dégradée depuis la pandémie. Les causes sont multiples et étroitement liées : la précarité financière, qui oblige beaucoup d'entre nous à travailler le soir, une pression des résultats parfois écrasante, et un sentiment d'isolement que les cours en ligne n'ont fait qu'aggraver. Nous reconnaissons volontiers les efforts déjà engagés ; force est de constater, toutefois, qu'ils sont loin d'être suffisants. Il faut aujourd'hui attendre près de trois mois pour consulter un psychologue du campus. Nous proposons donc, d'une part, le recrutement de deux psychologues supplémentaires, et, d'autre part, la création d'un espace d'écoute animé par des étudiants formés. Il n'est pas exclu que ces mesures aient un coût ; il nous semble cependant que celui de l'inaction serait infiniment plus élevé. Nous vous prions d'agréer, Monsieur le Président, l'expression de notre haute considération.",
          bank: ["Il ne s'agit nullement de…", "pour le moins…", "à quel point…", "loin d'être…", "il n'est pas exclu que…", "infiniment / nettement", "force est de constater que…"],
          checklist: ["J'ai présenté un constat, des causes et des propositions.", "J'ai utilisé trois procédés d'atténuation.", "J'ai utilisé trois procédés d'intensification.", "Mon ton est ferme mais bienveillant."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Nuancez votre propos",
          prompt: "Écoutez et répétez avec un ton calme et bienveillant.",
          items: [
            { s: "Je dirais que je suis plutôt stressé." },
            { s: "Ce n'est nullement un signe de faiblesse." },
            { s: "Je ne savais pas à quel point c'était difficile." },
            { s: "Vous êtes loin d'être la seule." },
            { s: "Il se peut que tu aies besoin de repos." },
            { s: "Demander de l'aide est une preuve de courage." }
          ]
        },
        {
          type: "speak", title: "Message de sensibilisation",
          prompt: "Enregistrez un message de deux minutes pour la campagne « En parler, c'est déjà aller mieux » : décrivez un signe d'alerte, déconstruisez un préjugé et donnez un conseil concret, avec tact.",
          language: ["Il arrive que…", "On pourrait penser que…, or…", "Ce n'est nullement…", "Vous êtes loin d'être seul(e).", "N'hésitez pas à…"],
          seconds: 120,
          checklist: ["atténué et intensifié vos propos ?", "parlé avec tact ?", "donné un conseil concret ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux utiliser le vocabulaire de la santé mentale.", review: "Explication : le vocabulaire" },
    { can: "Je peux atténuer un propos de plusieurs façons.", review: "Explication : atténuer" },
    { can: "Je peux intensifier un propos et renforcer une négation.", review: "Explication : intensifier ; Écrire, activité 1" },
    { can: "Je peux reconnaître une litote ou un euphémisme.", review: "Écouter, activité 2" },
    { can: "Je peux comprendre un éditorial nuancé.", review: "Lire" },
    { can: "Je peux aborder un sujet sensible avec tact.", review: "Écrire, activité 2 et Parler" }
  ]
};
