window.UNIT = {
  slug: "la-meteo",
  title: "Quel temps fait-il ?",
  level: "A2",
  subject: "Le monde autour de moi",
  minutes: 50,
  focus: ["la météo", "les saisons", "le futur proche : aller + infinitif", "les projets du week-end"],

  presentation: {
    scene: "☀️🌧️❄️",
    situation: "Vendredi soir. Théo et Inès préparent leur week-end. Ils regardent la **météo** sur le téléphone avant de choisir une activité.",
    warmup: {
      prompt: "Quel temps fait-il aujourd'hui chez vous ?",
      options: ["il fait beau", "il fait chaud", "il fait froid", "il pleut", "il y a du vent", "il y a des nuages", "il neige", "il y a un orage"],
      response: "Merci ! Vous allez apprendre à parler de la météo et de vos projets."
    },
    dialogueTitle: "On fait quoi ce week-end ?",
    dialogue: [
      { who: "Inès", line: "*Quel temps va-t-il faire* demain ?" },
      { who: "Théo", line: "Samedi, *il va faire beau* et chaud : vingt-huit degrés !" },
      { who: "Inès", line: "Super ! *On va aller* à la plage ?" },
      { who: "Théo", line: "Bonne idée. Mais dimanche, *il va pleuvoir* toute la journée." },
      { who: "Inès", line: "Alors dimanche, *je vais rester* à la maison. *Je vais étudier* pour l'examen." },
      { who: "Théo", line: "Moi, *je vais regarder* un film. Tu viens ?" },
      { who: "Inès", line: "D'accord, après mes révisions !" }
    ]
  },

  objectives: [
    "Je peux décrire la météo.",
    "Je peux parler des saisons.",
    "Je peux utiliser le futur proche : *aller + infinitif*.",
    "Je peux parler de mes projets selon la météo."
  ],

  explanation: {
    vocabTitle: "La météo et les saisons",
    vocab: [
      { word: "il fait beau", icon: "☀️" }, { word: "il fait chaud", icon: "🥵" }, { word: "il fait froid", icon: "🥶" }, { word: "il pleut", icon: "🌧️" },
      { word: "il neige", icon: "❄️" }, { word: "il y a du vent", icon: "💨" }, { word: "il y a des nuages", icon: "☁️" }, { word: "il y a un orage", icon: "⛈️" },
      { word: "le soleil", icon: "🌞" }, { word: "le parapluie", icon: "☂️" }, { word: "le printemps", icon: "🌸" }, { word: "l'été", icon: "🏖️" },
      { word: "l'automne", icon: "🍁" }, { word: "l'hiver", icon: "⛄" }
    ],
    grammar: [
      {
        title: "Parler de la météo",
        head: ["Structure", "Exemples"],
        rows: [
          ["*il fait* + adjectif", "Il fait beau / mauvais / chaud / froid / doux."],
          ["*il y a* + nom", "Il y a du soleil / du vent / des nuages / du brouillard."],
          ["verbe", "Il pleut. Il neige."],
          ["température", "Il fait vingt degrés. Il fait moins cinq."]
        ],
        note: "Saisons : *au* printemps, mais *en* été, *en* automne, *en* hiver."
      },
      {
        title: "Le futur proche",
        head: ["Sujet", "aller (présent)", "+ infinitif"],
        rows: [
          ["je", "*vais*", "partir"], ["tu", "*vas*", "rester"], ["il / elle / on", "*va*", "pleuvoir"],
          ["nous", "*allons*", "visiter"], ["vous", "*allez*", "voyager"], ["ils / elles", "*vont*", "étudier"]
        ],
        note: "Négation : *Je ne vais pas sortir.* (*ne… pas* autour de *aller*)"
      }
    ],
    watchOut: [
      ["Il est chaud.", "Il fait chaud."],
      ["Je vais à étudier.", "Je vais étudier."],
      ["Je vais ne pas sortir.", "Je ne vais pas sortir."],
      ["en printemps", "au printemps"]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez.",
      items: ["Demain, il [[va]] pleuvoir.", "Nous [[allons]] visiter le musée.", "Il [[fait]] froid en hiver."]
    }
  },

  skills: {
    listening: {
      intro: "Écoutez la météo de la radio pour le week-end.",
      title: "La météo du week-end",
      script: [
        { who: "La présentatrice", line: "Bonjour à tous ! Voici la météo pour ce week-end." },
        { who: "La présentatrice", line: "Dans le nord, samedi, il va faire froid : huit degrés seulement, avec beaucoup de vent." },
        { who: "La présentatrice", line: "À Paris, il va y avoir des nuages le matin, mais l'après-midi il va faire beau." },
        { who: "La présentatrice", line: "Dans le sud, à Marseille, il va faire très chaud : trente degrés ! Attention au soleil." },
        { who: "La présentatrice", line: "Et dans les Alpes, il va neiger dimanche. Bon week-end !" }
      ],
      activities: [
        {
          type: "match", title: "Quel temps ?",
          prompt: "Associez la région et la météo.",
          pairs: [["le nord", "froid et du vent"], ["Paris", "des nuages, puis beau"], ["Marseille", "très chaud"], ["les Alpes", "de la neige"]]
        },
        {
          type: "gap", title: "Les détails",
          prompt: "Complétez.",
          items: ["Dans le nord, il va faire [[8|huit]] degrés.", "À Marseille, il va faire [[30|trente]] degrés.", "Il va neiger [[dimanche]]."]
        }
      ]
    },

    reading: {
      intro: "Lisez le forum « Quelle est votre saison préférée ? »",
      title: "Votre saison préférée",
      text: [
        { author: "Camille (Québec)", body: "Moi, j'adore l'hiver ! Il fait très froid, moins vingt parfois, et il neige beaucoup. Cet hiver, je vais faire du ski avec mes amis." },
        { author: "Mehdi (Maroc)", body: "Ma saison préférée, c'est le printemps. Il fait doux et il y a des fleurs partout. En été, il fait trop chaud pour moi !" },
        { author: "Lucía (Mexique)", body: "Je préfère l'automne. Il ne fait pas trop chaud et il ne pleut pas beaucoup. En novembre, nous allons célébrer le Jour des Morts en famille." }
      ],
      activities: [
        {
          type: "sort", title: "Qui dit quoi ?",
          bins: ["Camille", "Mehdi", "Lucía"],
          items: [
            { text: "adore l'hiver", bin: 0 }, { text: "va faire du ski", bin: 0 },
            { text: "aime les fleurs", bin: 1 }, { text: "n'aime pas la chaleur", bin: 1 },
            { text: "préfère l'automne", bin: 2 }, { text: "va célébrer une fête en famille", bin: 2 }
          ]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Au Québec, il neige beaucoup en hiver.", a: true },
            { s: "Mehdi adore l'été.", a: false },
            { s: "Lucía aime l'automne parce qu'il pleut beaucoup.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez le futur proche, puis écrivez vos projets.",
      activities: [
        {
          type: "rewrite", title: "Au futur proche",
          prompt: "Transformez au futur proche.",
          items: [
            { q: "Je visite Paris.", a: ["Je vais visiter Paris."] },
            { q: "Il pleut.", a: ["Il va pleuvoir."] },
            { q: "Nous restons à la maison.", a: ["Nous allons rester à la maison."] },
            { q: "Elles ne sortent pas.", a: ["Elles ne vont pas sortir."] }
          ]
        },
        {
          type: "write", title: "Mon week-end selon la météo",
          prompt: "Regardez la météo de votre ville pour ce week-end. Écrivez quel temps il va faire et ce que vous allez faire samedi et dimanche.",
          minWords: 50, maxWords: 80,
          model: "Ce week-end à Puebla, samedi, il va faire beau et chaud : vingt-six degrés. Je vais aller au parc avec ma sœur et nous allons faire un pique-nique. Dimanche, il va pleuvoir l'après-midi. Je ne vais pas sortir : je vais lire un livre et je vais préparer mes cours.",
          bank: ["Samedi, il va faire…", "Dimanche, il va pleuvoir.", "Je vais…", "Nous allons…", "Je ne vais pas…"],
          checklist: ["J'ai décrit la météo des deux jours.", "J'ai utilisé le futur proche quatre fois.", "J'ai fait une phrase négative au futur proche."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Parlez de la météo",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Quel temps fait-il ?" },
            { s: "Il fait beau et chaud." },
            { s: "Demain, il va pleuvoir." },
            { s: "Nous allons faire un pique-nique." },
            { s: "Je ne vais pas sortir." },
            { s: "En hiver, il neige beaucoup." }
          ]
        },
        {
          type: "speak", title: "Présentez la météo !",
          prompt: "Vous êtes présentateur ou présentatrice météo. Présentez la météo de demain dans trois villes de votre pays.",
          language: ["Bonjour à tous !", "Demain, à…, il va faire…", "Il va y avoir…", "Attention au…", "Bonne journée !"],
          model: [
            { who: "La présentatrice", line: "Bonjour à tous ! Demain, à Mexico, il va faire beau le matin, mais il va pleuvoir l'après-midi. À Monterrey, il va faire très chaud. Et à Puebla, il va y avoir des nuages. Bonne journée !" }
          ],
          seconds: 60,
          checklist: ["parlé de trois villes ?", "utilisé *il va faire* et *il va pleuvoir* ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux dire quel temps il fait.", review: "Explication : parler de la météo" },
    { can: "Je peux nommer les quatre saisons.", review: "Explication : le vocabulaire" },
    { can: "Je peux conjuguer *aller* au présent.", review: "Explication : le futur proche" },
    { can: "Je peux utiliser le futur proche, aussi au négatif.", review: "Écrire, activité 1" },
    { can: "Je peux comprendre un bulletin météo.", review: "Écouter" },
    { can: "Je peux parler de mes projets du week-end.", review: "Écrire, activité 2 et Parler, activité 2" }
  ]
};
