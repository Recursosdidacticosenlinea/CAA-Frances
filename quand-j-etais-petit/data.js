window.UNIT = {
  slug: "quand-j-etais-petit",
  title: "Quand j'étais petit",
  level: "A2",
  subject: "Les souvenirs",
  minutes: 55,
  focus: ["l'imparfait", "les habitudes du passé", "décrire le passé", "avant / maintenant"],

  presentation: {
    scene: "🧸📷🏡",
    situation: "Marie regarde un vieil album de photos avec sa petite-fille Emma. Elle raconte ses **souvenirs d'enfance**.",
    warmup: {
      prompt: "Qu'est-ce que vous aimiez quand vous étiez petit(e) ?",
      options: ["les dessins animés", "jouer dehors", "les bonbons", "les jeux vidéo", "dessiner", "les animaux", "l'école", "les vacances chez mes grands-parents"],
      response: "Quels beaux souvenirs ! Vous allez apprendre à les raconter."
    },
    dialogueTitle: "L'album de photos",
    dialogue: [
      { who: "Emma", line: "Mamie, c'est toi sur la photo ?" },
      { who: "Mamie", line: "Oui ! *J'avais* huit ans. *J'habitais* dans un petit village en Provence." },
      { who: "Emma", line: "Tu *allais* à l'école à pied ?" },
      { who: "Mamie", line: "Oui, *il n'y avait pas* de bus. *Je marchais* trois kilomètres tous les jours !" },
      { who: "Emma", line: "Et qu'est-ce que tu *faisais* après l'école ?" },
      { who: "Mamie", line: "*Je jouais* avec mes frères dans les champs. *Nous n'avions pas* de télévision." },
      { who: "Emma", line: "Pas de télé ? Et pas de téléphone ?" },
      { who: "Mamie", line: "Non ! Mais *nous étions* très heureux." }
    ]
  },

  objectives: [
    "Je peux former l'imparfait.",
    "Je peux parler de mes habitudes passées.",
    "Je peux décrire une personne ou un lieu dans le passé.",
    "Je peux comparer avant et maintenant."
  ],

  explanation: {
    vocabTitle: "L'enfance",
    vocab: [
      { word: "l'enfance", icon: "👶" }, { word: "un jouet", icon: "🧸" }, { word: "une poupée", icon: "🪆" }, { word: "le ballon", icon: "⚽" },
      { word: "les dessins animés", icon: "📺" }, { word: "la cour de récréation", icon: "🛝" }, { word: "le village", icon: "🏘️" }, { word: "les bonbons", icon: "🍬" },
      { word: "grimper aux arbres", icon: "🌳" }, { word: "faire des bêtises", icon: "😈" }, { word: "le maître / la maîtresse", icon: "🧑‍🏫" }, { word: "les vacances", icon: "🏕️" }
    ],
    grammar: [
      {
        title: "La formation de l'imparfait",
        intro: "On prend le radical de *nous* au présent, sans *-ons*, et on ajoute les terminaisons.",
        head: ["Sujet", "Terminaison", "jouer (nous jou-ons)", "faire (nous fais-ons)"],
        rows: [
          ["je", "*-ais*", "je jou*ais*", "je fais*ais*"], ["tu", "*-ais*", "tu jou*ais*", "tu fais*ais*"],
          ["il / elle / on", "*-ait*", "il jou*ait*", "elle fais*ait*"], ["nous", "*-ions*", "nous jou*ions*", "nous fais*ions*"],
          ["vous", "*-iez*", "vous jou*iez*", "vous fais*iez*"], ["ils / elles", "*-aient*", "ils jou*aient*", "elles fais*aient*"]
        ],
        note: "Exception : *être* → j'*étais*, tu étais, il était, nous étions… Et *il y a* → *il y avait*."
      },
      {
        title: "Quand utiliser l'imparfait ?",
        head: ["Usage", "Exemple"],
        rows: [
          ["habitudes du passé", "*Tous les dimanches*, nous *allions* chez ma grand-mère."],
          ["description (personnes, lieux)", "Ma maison *était* petite. Mon père *avait* une moustache."],
          ["situation, contexte", "*Il faisait* beau. *J'avais* dix ans."],
          ["comparer avec aujourd'hui", "*Avant*, je *jouais* dehors. *Maintenant*, je joue sur mon téléphone."]
        ],
        note: "Mots utiles : *avant, autrefois, quand j'étais petit(e), tous les jours, d'habitude, souvent*."
      }
    ],
    watchOut: [
      ["Quand je suis petit, je jouais…", "Quand j'étais petit, je jouais…"],
      ["nous jouaions", "nous jouions"],
      ["Il y a avait un parc.", "Il y avait un parc."],
      ["J'étais huit ans.", "J'avais huit ans."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Mettez le verbe à l'imparfait.",
      items: ["Avant, j'[[habitais]] à Lyon. (habiter)", "Nous [[étions|etions]] contents. (être)", "Ils [[faisaient]] du vélo. (faire)"]
    }
  },

  skills: {
    listening: {
      intro: "Trois personnes parlent de leur école primaire. Écoutez.",
      title: "Mon école primaire",
      script: [
        { who: "Daniel", line: "Mon école était très petite. Il y avait seulement douze élèves. La maîtresse s'appelait Madame Rose et elle était très gentille." },
        { who: "Sophie", line: "Moi, j'allais à l'école en bus. J'adorais la récréation : nous jouions à la corde à sauter. Mais je détestais les maths !" },
        { who: "Karim", line: "Mon école était au Maroc. Nous apprenions l'arabe et le français. Le vendredi après-midi, nous n'avions pas cours. C'était génial !" }
      ],
      activities: [
        {
          type: "sort", title: "Qui dit quoi ?",
          bins: ["Daniel", "Sophie", "Karim"],
          items: [
            { text: "une école de douze élèves", bin: 0 }, { text: "une maîtresse gentille", bin: 0 },
            { text: "le bus", bin: 1 }, { text: "la corde à sauter", bin: 1 }, { text: "détestait les maths", bin: 1 },
            { text: "deux langues", bin: 2 }, { text: "pas cours le vendredi après-midi", bin: 2 }
          ]
        },
        {
          type: "gap", title: "Complétez",
          prompt: "Complétez avec le verbe à l'imparfait.",
          items: ["Mon école [[était|etait]] très petite.", "Nous [[jouions]] à la corde à sauter.", "Nous [[apprenions]] l'arabe et le français."]
        }
      ]
    },

    reading: {
      intro: "Lisez le texte de Pierre pour le concours « Mon souvenir d'enfance ».",
      title: "Les étés chez mon grand-père",
      text: [
        "Quand j'étais petit, je passais tous les étés chez mon grand-père, en Bretagne. Il avait une vieille maison près de la mer. Le matin, nous allions pêcher sur son petit bateau. Mon grand-père était très patient : il m'expliquait le nom de tous les poissons.",
        "L'après-midi, je jouais sur la plage avec mes cousins. Nous construisions des châteaux de sable et nous mangions des glaces. Le soir, ma grand-mère préparait des crêpes. Il n'y avait pas d'internet, mais je ne m'ennuyais jamais. Aujourd'hui, la maison n'existe plus, mais ces souvenirs sont toujours dans mon cœur."
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Pierre passait les étés chez son grand-père.", a: true },
            { s: "La maison était à la montagne.", a: false },
            { s: "Le grand-père était impatient.", a: false },
            { s: "Le soir, la grand-mère préparait des crêpes.", a: true },
            { s: "Pierre s'ennuyait souvent.", a: false }
          ]
        },
        {
          type: "match", title: "Le moment de la journée",
          pairs: [["le matin", "pêcher sur le bateau"], ["l'après-midi", "jouer sur la plage"], ["le soir", "manger des crêpes"]]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis racontez un souvenir.",
      activities: [
        {
          type: "rewrite", title: "Avant et maintenant",
          prompt: "Écrivez la phrase au passé avec *avant* et l'imparfait.",
          items: [
            { q: "Maintenant, j'habite en ville. (à la campagne)", a: ["Avant, j'habitais à la campagne."] },
            { q: "Maintenant, nous avons un ordinateur. (une radio)", a: ["Avant, nous avions une radio."] },
            { q: "Maintenant, il est grand. (petit)", a: ["Avant, il était petit."] },
            { q: "Maintenant, elles font du yoga. (de la danse)", a: ["Avant, elles faisaient de la danse."] }
          ]
        },
        {
          type: "write", title: "Mon souvenir d'enfance",
          prompt: "Participez au concours ! Racontez un souvenir d'enfance : où vous habitiez, comment vous étiez, ce que vous faisiez d'habitude.",
          minWords: 70, maxWords: 110,
          model: "Quand j'étais petite, j'habitais à Veracruz avec mes parents et mes deux frères. Notre maison était petite, mais il y avait un grand jardin avec un manguier. J'étais une enfant très curieuse et un peu timide. Tous les après-midi, je grimpais dans l'arbre et je lisais des bandes dessinées. Le dimanche, nous allions à la plage et mon père achetait des glaces à la noix de coco. Je n'avais pas de téléphone, mais j'avais beaucoup d'imagination !",
          bank: ["Quand j'étais petit(e),", "j'habitais…", "il y avait…", "tous les jours,", "d'habitude,", "le dimanche, nous…"],
          checklist: ["J'ai utilisé l'imparfait au moins six fois.", "J'ai utilisé *être* et *avoir* à l'imparfait.", "J'ai utilisé des mots d'habitude (*tous les jours, souvent*…)."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Racontez votre enfance",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Quand j'étais petit, j'habitais à la campagne." },
            { s: "Nous jouions dans le jardin." },
            { s: "Il y avait un grand arbre." },
            { s: "Ma grand-mère préparait des crêpes." },
            { s: "Avant, je n'avais pas de téléphone." },
            { s: "C'était une belle époque." }
          ]
        },
        {
          type: "speak", title: "Une photo d'enfance",
          prompt: "Choisissez une photo de votre enfance. Décrivez-la : quel âge vous aviez, où vous étiez, ce que vous faisiez.",
          language: ["Sur cette photo, j'avais… ans.", "J'étais à…", "Il faisait…", "Je portais…", "D'habitude, …"],
          seconds: 60,
          checklist: ["dit votre âge avec *j'avais* ?", "décrit le lieu ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux former l'imparfait des verbes réguliers.", review: "Explication : la formation" },
    { can: "Je peux utiliser *être* et *avoir* à l'imparfait.", review: "Explication : la formation (note)" },
    { can: "Je peux parler de mes habitudes passées.", review: "Explication : quand utiliser l'imparfait" },
    { can: "Je peux comparer avant et maintenant.", review: "Écrire, activité 1" },
    { can: "Je peux comprendre un souvenir d'enfance.", review: "Écouter et Lire" },
    { can: "Je peux raconter un souvenir d'enfance.", review: "Écrire, activité 2 et Parler" }
  ]
};
