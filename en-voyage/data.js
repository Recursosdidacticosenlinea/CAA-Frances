window.UNIT = {
  slug: "en-voyage",
  title: "En voyage",
  level: "A2",
  subject: "Se déplacer",
  minutes: 55,
  focus: ["le passé composé avec être", "l'accord du participe", "les transports", "raconter un voyage"],

  presentation: {
    scene: "✈️🧳🗼",
    situation: "Valeria est rentrée de Paris. Elle raconte son **voyage** à son ami Maxime. Attention : beaucoup de verbes de mouvement utilisent **être** au passé composé !",
    warmup: {
      prompt: "Comment vous voyagez, en général ?",
      options: ["en avion", "en train", "en bus", "en voiture", "à vélo", "à pied", "en bateau", "je ne voyage pas beaucoup"],
      response: "Très bien ! Bon voyage dans cette unité."
    },
    dialogueTitle: "Retour de Paris",
    dialogue: [
      { who: "Maxime", line: "Valeria ! Alors, ce voyage à Paris ?" },
      { who: "Valeria", line: "Magnifique ! *Je suis partie* le 3 juillet et *je suis arrivée* le 4 au matin." },
      { who: "Maxime", line: "Tu *es allée* à la tour Eiffel ?" },
      { who: "Valeria", line: "Oui, bien sûr ! *Je suis montée* au sommet. Et *je suis restée* deux heures au Louvre." },
      { who: "Maxime", line: "Tu *es sortie* le soir ?" },
      { who: "Valeria", line: "Oui, avec des amis français. *Nous sommes allés* à un concert au bord de la Seine." },
      { who: "Maxime", line: "Et tu *es rentrée* quand ?" },
      { who: "Valeria", line: "*Je suis rentrée* hier. Je suis très fatiguée !" }
    ]
  },

  objectives: [
    "Je peux reconnaître les verbes qui utilisent *être* au passé composé.",
    "Je peux accorder le participe passé avec le sujet.",
    "Je peux parler des transports et des étapes d'un voyage.",
    "Je peux raconter un voyage."
  ],

  explanation: {
    vocabTitle: "Le voyage",
    vocab: [
      { word: "l'avion", icon: "✈️" }, { word: "le train", icon: "🚆" }, { word: "le bus", icon: "🚌" }, { word: "la voiture", icon: "🚗" },
      { word: "le billet", icon: "🎫" }, { word: "la valise", icon: "🧳" }, { word: "le passeport", icon: "🛂" }, { word: "l'hôtel", icon: "🏨" },
      { word: "l'aéroport", icon: "🛫" }, { word: "la gare", icon: "🚉" }, { word: "la plage", icon: "🏖️" }, { word: "la montagne", icon: "🏔️" },
      { word: "un souvenir", icon: "🎁" }, { word: "une photo", icon: "📸" }
    ],
    grammar: [
      {
        title: "Les verbes avec être",
        intro: "Environ 15 verbes (surtout de **mouvement**) et tous les verbes pronominaux utilisent *être*.",
        head: ["Verbe", "Participe", "Contraire"],
        rows: [
          ["aller", "*allé*", "venir → *venu*"], ["arriver", "*arrivé*", "partir → *parti*"],
          ["entrer", "*entré*", "sortir → *sorti*"], ["monter", "*monté*", "descendre → *descendu*"],
          ["naître", "*né*", "mourir → *mort*"], ["rester", "*resté*", "tomber → *tombé*"],
          ["rentrer, retourner, devenir, revenir", "*rentré, retourné, devenu, revenu*", ""]
        ],
        note: "Pronominaux : *se lever* → *je me suis levé(e)*, *s'amuser* → *nous nous sommes amusés*."
      },
      {
        title: "L'accord du participe",
        head: ["Sujet", "être", "Participe"],
        rows: [
          ["je (Maxime)", "*suis*", "parti"], ["je (Valeria)", "*suis*", "parti*e*"],
          ["il / elle", "*est*", "allé / allé*e*"], ["nous (garçons ou mixte)", "*sommes*", "allé*s*"],
          ["nous (filles)", "*sommes*", "allé*es*"], ["ils / elles", "*sont*", "arrivé*s* / arrivé*es*"]
        ],
        note: "Avec *être*, le participe s'accorde comme un adjectif. Avec *avoir*, il ne s'accorde pas (en général)."
      },
      {
        title: "Les transports",
        head: ["Préposition", "Exemples"],
        rows: [["*en*", "en avion, en train, en bus, en voiture, en bateau"], ["*à*", "à pied, à vélo, à moto, à cheval"]]
      }
    ],
    watchOut: [
      ["J'ai allé à Paris.", "Je suis allé(e) à Paris."],
      ["Elle est parti hier.", "Elle est partie hier."],
      ["Nous sommes arrivé.", "Nous sommes arrivés."],
      ["Je suis venu en pied.", "Je suis venu(e) à pied."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez au passé composé.",
      items: ["Marie [[est partie]] en vacances. (partir)", "Nous [[sommes arrivés]] à midi. (arriver)", "Ils [[sont allés]] à la plage. (aller)"]
    }
  },

  skills: {
    listening: {
      intro: "Samuel raconte un voyage difficile. Écoutez.",
      title: "Un voyage catastrophe",
      script: [
        { who: "Samuel", line: "L'été dernier, je suis parti à Montréal avec mon ami Louis." },
        { who: "Samuel", line: "Nous sommes arrivés à l'aéroport en retard. Nous avons couru, mais l'avion est parti sans nous !" },
        { who: "Samuel", line: "Nous avons pris un autre vol le lendemain. Nous sommes arrivés à Montréal à minuit." },
        { who: "Samuel", line: "Et ma valise ? Elle n'est pas arrivée ! Elle est restée à Paris trois jours." },
        { who: "Samuel", line: "Mais après, tout est bien allé. Nous sommes restés deux semaines et nous sommes allés voir les chutes du Niagara. Génial !" }
      ],
      activities: [
        {
          type: "tiles", title: "L'ordre de l'histoire",
          prompt: "Écrivez les phrases.",
          items: [
            { a: "Ils sont arrivés en retard." },
            { a: "L'avion est parti sans eux." },
            { a: "La valise est restée à Paris." },
            { a: "Ils sont allés aux chutes du Niagara." }
          ]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Samuel est parti seul.", a: false },
            { s: "Ils sont arrivés à Montréal à minuit.", a: true },
            { s: "La valise est arrivée avec Samuel.", a: false },
            { s: "Ils sont restés deux semaines.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez le blog de voyage d'Isabel.",
      title: "Mon voyage en Bretagne",
      text: [
        "**Jour 1** – Je suis partie de Paris en train à 8 heures. Je suis arrivée à Rennes à 10 heures. J'ai loué une voiture et je suis allée à Saint-Malo. Je suis montée sur les remparts : quelle vue sur la mer !",
        "**Jour 2** – Je me suis levée tôt. Je suis descendue à la plage et je me suis baignée. L'eau était froide ! L'après-midi, j'ai mangé des crêpes et j'ai acheté des souvenirs.",
        "**Jour 3** – Il a plu toute la journée, alors je suis restée à l'hôtel. Le soir, je suis rentrée à Paris. Un voyage inoubliable !"
      ],
      activities: [
        {
          type: "sort", title: "Être ou avoir ?",
          prompt: "Classez les verbes du texte selon l'auxiliaire.",
          bins: ["être", "avoir"],
          items: [
            { text: "partir", bin: 0 }, { text: "arriver", bin: 0 }, { text: "monter", bin: 0 }, { text: "se lever", bin: 0 }, { text: "rester", bin: 0 },
            { text: "louer", bin: 1 }, { text: "manger", bin: 1 }, { text: "acheter", bin: 1 }, { text: "pleuvoir", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Complétez",
          prompt: "Complétez avec les informations du blog.",
          items: [
            "Isabel est partie de Paris en [[train]].",
            "Elle est allée à [[Saint-Malo]] en voiture.",
            "Le jour 2, elle est descendue à la [[plage]].",
            "Le jour 3, elle est [[restée|restee]] à l'hôtel."
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez l'accord, puis racontez un voyage.",
      activities: [
        {
          type: "rewrite", title: "Changez le sujet",
          prompt: "Réécrivez la phrase avec le nouveau sujet. Attention à l'accord !",
          items: [
            { q: "Il est arrivé à 8 h. → Elle…", a: ["Elle est arrivée à 8 h."] },
            { q: "Je suis allé au musée. → Nous (garçons)…", a: ["Nous sommes allés au musée."] },
            { q: "Il est resté à l'hôtel. → Elles…", a: ["Elles sont restées à l'hôtel."] },
            { q: "Tu es parti hier ? → Vous (filles)… ?", a: ["Vous êtes parties hier ?"] }
          ]
        },
        {
          type: "write", title: "Mon voyage inoubliable",
          prompt: "Racontez un voyage (vrai ou imaginaire) : où vous êtes allé(e), comment, avec qui, ce que vous avez fait et quand vous êtes rentré(e).",
          minWords: 60, maxWords: 100,
          model: "L'année dernière, je suis allée à Oaxaca avec ma famille. Nous sommes partis en bus à six heures du matin et nous sommes arrivés le soir. Le premier jour, nous sommes allés au marché et nous avons goûté des tlayudas. Le deuxième jour, nous sommes montés à Monte Albán. Ma sœur est tombée, mais ce n'était pas grave ! Nous sommes rentrés après cinq jours. C'était magnifique.",
          bank: ["L'année dernière,", "je suis allé(e) à…", "nous sommes partis en…", "nous sommes arrivés…", "nous sommes restés…", "je suis rentré(e)…"],
          checklist: ["J'ai utilisé quatre verbes avec *être*.", "J'ai accordé les participes.", "J'ai utilisé aussi des verbes avec *avoir*."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Racontez un voyage",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Je suis partie en juillet." },
            { s: "Nous sommes arrivés à minuit." },
            { s: "Elle est allée à Paris." },
            { s: "Je suis resté deux semaines." },
            { s: "Nous avons pris le train." },
            { s: "Ils sont rentrés hier." }
          ]
        },
        {
          type: "speak", title: "Mes photos de voyage",
          prompt: "Montrez trois photos d'un voyage et racontez ce qui s'est passé.",
          language: ["Sur cette photo, …", "Ici, nous sommes arrivés à…", "Après, je suis monté(e)…", "C'était…"],
          seconds: 75,
          checklist: ["parlé de trois photos ?", "utilisé le passé composé avec *être* ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux reconnaître les verbes avec *être*.", review: "Explication : les verbes avec être ; Lire, activité 1" },
    { can: "Je peux accorder le participe passé avec *être*.", review: "Explication : l'accord ; Écrire, activité 1" },
    { can: "Je peux utiliser les verbes pronominaux au passé.", review: "Explication : les verbes avec être (note)" },
    { can: "Je peux parler des transports avec *en* et *à*.", review: "Explication : les transports" },
    { can: "Je peux comprendre un récit de voyage.", review: "Écouter et Lire" },
    { can: "Je peux raconter un voyage.", review: "Écrire, activité 2 et Parler" }
  ]
};
