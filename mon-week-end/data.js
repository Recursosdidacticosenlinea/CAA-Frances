window.UNIT = {
  slug: "mon-week-end",
  title: "Mon week-end",
  level: "A2",
  subject: "Les loisirs",
  minutes: 55,
  focus: ["le passé composé avec avoir", "les participes passés", "les loisirs", "hier, le week-end dernier…"],

  presentation: {
    scene: "🎬⚽🎉",
    situation: "Lundi matin, à l'université. Karim et Zoé parlent de leur **week-end**. Qu'est-ce qu'ils ont fait ?",
    warmup: {
      prompt: "Qu'est-ce que vous faites normalement le week-end ?",
      options: ["du sport", "les courses", "le ménage", "la fête", "des devoirs", "des séries", "de la musique", "une promenade", "rien !"],
      response: "Bien ! Maintenant, vous allez raconter votre week-end passé."
    },
    dialogueTitle: "Tu as passé un bon week-end ?",
    dialogue: [
      { who: "Zoé", line: "Salut Karim ! *Tu as passé* un bon week-end ?" },
      { who: "Karim", line: "Oui, génial ! Samedi, *j'ai joué* au foot avec mes cousins. Et toi ?" },
      { who: "Zoé", line: "Samedi, *j'ai travaillé* au café. Le soir, *j'ai regardé* un film avec ma sœur." },
      { who: "Karim", line: "Quel film ?" },
      { who: "Zoé", line: "Une comédie française. *J'ai beaucoup ri* ! Et dimanche, tu *as fait* quoi ?" },
      { who: "Karim", line: "*J'ai fait* mes devoirs et *j'ai mangé* chez mes grands-parents." },
      { who: "Zoé", line: "Moi, *je n'ai rien fait*. *J'ai dormi* toute la journée !" }
    ]
  },

  objectives: [
    "Je peux former le passé composé avec *avoir*.",
    "Je peux utiliser les participes passés réguliers et irréguliers.",
    "Je peux faire une phrase négative au passé composé.",
    "Je peux raconter mon week-end."
  ],

  explanation: {
    vocabTitle: "Les loisirs",
    vocab: [
      { word: "jouer au foot", icon: "⚽" }, { word: "faire du vélo", icon: "🚴" }, { word: "nager", icon: "🏊" }, { word: "danser", icon: "💃" },
      { word: "voir un film", icon: "🎬" }, { word: "lire un livre", icon: "📖" }, { word: "écouter un concert", icon: "🎸" }, { word: "faire la fête", icon: "🎉" },
      { word: "faire une randonnée", icon: "🥾" }, { word: "visiter un musée", icon: "🖼️" }, { word: "jouer aux jeux vidéo", icon: "🎮" }, { word: "dormir", icon: "😴" }
    ],
    grammar: [
      {
        title: "Le passé composé avec avoir",
        intro: "Pour une action terminée dans le passé : sujet + *avoir* (présent) + participe passé.",
        head: ["Sujet", "avoir", "participe passé"],
        rows: [
          ["j'", "*ai*", "mangé"], ["tu", "*as*", "regardé"], ["il / elle / on", "*a*", "fini"],
          ["nous", "*avons*", "joué"], ["vous", "*avez*", "vu"], ["ils / elles", "*ont*", "fait"]
        ]
      },
      {
        title: "Les participes passés",
        head: ["Infinitif", "Participe", "Exemple"],
        rows: [
          ["-er → *-é*", "parler → parl*é*", "J'ai parlé avec Léa."],
          ["-ir → *-i*", "finir → fin*i*, dormir → dorm*i*", "Tu as fini ?"],
          ["faire", "*fait*", "Nous avons fait du sport."],
          ["voir / lire / boire", "*vu* / *lu* / *bu*", "Ils ont vu un film."],
          ["prendre / mettre", "*pris* / *mis*", "Elle a pris le train."],
          ["avoir / être", "*eu* / *été*", "J'ai eu un examen."]
        ]
      },
      {
        title: "La négation",
        head: ["Affirmatif", "Négatif"],
        rows: [
          ["J'ai mangé.", "Je *n'*ai *pas* mangé."],
          ["Il a fait quelque chose.", "Il *n'*a *rien* fait."],
          ["Nous avons vu Paul.", "Nous *n'*avons *pas* vu Paul."]
        ],
        note: "*ne… pas* entoure l'auxiliaire *avoir*. Mots du passé : *hier, samedi dernier, le week-end dernier, il y a deux jours*."
      }
    ],
    watchOut: [
      ["J'ai fais du sport.", "J'ai fait du sport."],
      ["J'ai voir un film.", "J'ai vu un film."],
      ["Je n'ai mangé pas.", "Je n'ai pas mangé."],
      ["Hier, je regarde la télé.", "Hier, j'ai regardé la télé."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Mettez le verbe au passé composé.",
      items: ["Hier, j'[[ai mangé]] une pizza. (manger)", "Nous [[avons vu]] un film. (voir)", "Tu [[as fait]] du sport ? (faire)"]
    }
  },

  skills: {
    listening: {
      intro: "Trois étudiants racontent leur week-end à la radio de l'université. Écoutez.",
      title: "Le week-end des étudiants",
      script: [
        { who: "L'animateur", line: "Alors, qu'est-ce que vous avez fait ce week-end ?" },
        { who: "Manon", line: "Samedi, j'ai fait une randonnée à la montagne avec mon club. On a marché six heures ! Dimanche, j'ai dormi." },
        { who: "Antoine", line: "Moi, j'ai travaillé au supermarché samedi. Dimanche, j'ai vu un concert de jazz. C'était super !" },
        { who: "Fatou", line: "J'ai eu un week-end calme. J'ai lu un roman et j'ai préparé un gâteau pour l'anniversaire de ma mère." },
        { who: "L'animateur", line: "Et personne n'a étudié ?" },
        { who: "Antoine", line: "Euh… non, nous n'avons pas étudié !" }
      ],
      activities: [
        {
          type: "sort", title: "Qui a fait quoi ?",
          bins: ["Manon", "Antoine", "Fatou"],
          items: [
            { text: "une randonnée", bin: 0 }, { text: "a beaucoup dormi", bin: 0 },
            { text: "a travaillé", bin: 1 }, { text: "un concert de jazz", bin: 1 },
            { text: "a lu un roman", bin: 2 }, { text: "a préparé un gâteau", bin: 2 }
          ]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Manon a marché six heures.", a: true },
            { s: "Antoine a travaillé dimanche.", a: false },
            { s: "Les trois étudiants ont étudié.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez le message de Lucas sur le groupe de la classe.",
      title: "Quel week-end !",
      text: [
        "Salut à tous ! Quel week-end ! Vendredi soir, j'ai pris le train pour Bordeaux avec mon frère. Samedi matin, nous avons visité la ville. Nous avons vu le célèbre « miroir d'eau » et nous avons pris beaucoup de photos.",
        "À midi, nous avons mangé des huîtres. Mon frère a adoré, mais moi, je n'ai pas aimé ! L'après-midi, nous avons fait du vélo au bord de la Garonne. Dimanche, il a plu, alors nous avons visité un musée. J'ai acheté des cannelés pour vous. À demain en cours !"
      ],
      activities: [
        {
          type: "gap", title: "Complétez",
          prompt: "Complétez avec un participe passé du texte.",
          items: [
            "Lucas a [[pris]] le train vendredi.",
            "Ils ont [[visité|visite]] la ville samedi matin.",
            "Ils ont [[vu]] le miroir d'eau.",
            "Ils ont [[fait]] du vélo l'après-midi.",
            "Dimanche, il a [[plu]]."
          ]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Lucas a voyagé seul.", a: false },
            { s: "Lucas a aimé les huîtres.", a: false },
            { s: "Il a acheté des cannelés pour la classe.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis racontez votre week-end.",
      activities: [
        {
          type: "rewrite", title: "Au passé composé",
          prompt: "Mettez la phrase au passé composé.",
          items: [
            { q: "Je regarde une série.", a: ["J'ai regardé une série."] },
            { q: "Nous faisons du sport.", a: ["Nous avons fait du sport."] },
            { q: "Elle lit un livre.", a: ["Elle a lu un livre."] },
            { q: "Ils ne boivent pas de café.", a: ["Ils n'ont pas bu de café."] },
            { q: "Tu prends le bus ?", a: ["Tu as pris le bus ?"] }
          ]
        },
        {
          type: "write", title: "Mon week-end dernier",
          prompt: "Racontez votre week-end dernier : samedi et dimanche. Dites aussi une chose que vous n'avez pas faite.",
          minWords: 60, maxWords: 100,
          model: "Le week-end dernier, j'ai passé deux jours très sympas. Samedi matin, j'ai fait du vélo dans le parc. L'après-midi, j'ai retrouvé mes amis au centre-ville et nous avons mangé des tacos. Le soir, nous avons vu un film d'horreur ! Dimanche, j'ai rendu visite à ma grand-mère. Elle a préparé un bon repas. Je n'ai pas fait mes devoirs… mais je vais les faire ce soir !",
          bank: ["Samedi matin,", "L'après-midi,", "Le soir,", "Dimanche,", "j'ai…", "nous avons…", "Je n'ai pas…"],
          checklist: ["J'ai utilisé le passé composé six fois.", "J'ai utilisé deux participes irréguliers (*fait, vu, pris…*).", "J'ai écrit une phrase négative au passé."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Racontez votre week-end",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Tu as passé un bon week-end ?" },
            { s: "Samedi, j'ai joué au foot." },
            { s: "Nous avons vu un film." },
            { s: "J'ai fait mes devoirs." },
            { s: "Je n'ai rien fait." },
            { s: "Qu'est-ce que tu as fait dimanche ?" }
          ]
        },
        {
          type: "speak", title: "Mon meilleur week-end",
          prompt: "Racontez le meilleur week-end de votre vie (vrai ou imaginaire) en une minute.",
          language: ["Un jour, …", "D'abord, j'ai…", "Ensuite, nous avons…", "Enfin, …", "C'était génial !"],
          seconds: 75,
          checklist: ["utilisé *d'abord, ensuite, enfin* ?", "utilisé le passé composé ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux conjuguer *avoir* et former le passé composé.", review: "Explication : le passé composé" },
    { can: "Je peux utiliser les participes réguliers (*-é, -i*).", review: "Explication : les participes passés" },
    { can: "Je peux utiliser les participes irréguliers (*fait, vu, pris…*).", review: "Écrire, activité 1" },
    { can: "Je peux faire une phrase négative au passé composé.", review: "Explication : la négation" },
    { can: "Je peux comprendre un récit de week-end.", review: "Écouter et Lire" },
    { can: "Je peux raconter mon week-end.", review: "Écrire, activité 2 et Parler" }
  ]
};
