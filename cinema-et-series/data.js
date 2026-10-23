window.UNIT = {
  slug: "cinema-et-series",
  title: "Cinéma et séries",
  level: "B1",
  subject: "Les loisirs",
  minutes: 55,
  focus: ["les genres de films", "les pronoms démonstratifs celui, celle, ceux", "celui qui / celle que", "faire une critique"],

  presentation: {
    scene: "🎬🍿📺",
    situation: "Vendredi soir, Nathan et Sarah veulent regarder un **film**. Mais ils n'ont pas les mêmes goûts ! Ils comparent les films de la plateforme.",
    warmup: {
      prompt: "Quels genres de films ou de séries préférez-vous ?",
      options: ["les comédies", "les films d'horreur", "les films d'action", "les drames", "la science-fiction", "les documentaires", "les dessins animés", "les séries policières"],
      response: "Bon choix ! Vous allez apprendre à donner votre avis sur un film."
    },
    dialogueTitle: "On regarde quoi ?",
    dialogue: [
      { who: "Sarah", line: "On regarde un film français ? *Celui-ci* a l'air drôle." },
      { who: "Nathan", line: "Bof… Je préfère *celui que* Karim nous a conseillé, le thriller." },
      { who: "Sarah", line: "*Celui qui* dure trois heures ? Non merci !" },
      { who: "Nathan", line: "Alors une série ? *Celle dont* tout le monde parle, avec les deux détectives." },
      { who: "Sarah", line: "Je l'ai déjà vue. Les acteurs sont géniaux, mais la fin m'a déçue." },
      { who: "Nathan", line: "Bon… On prend *ceux que* tu as choisis le mois dernier : les films d'animation japonais ?" },
      { who: "Sarah", line: "Parfait ! *Celui* de Miyazaki, alors." }
    ]
  },

  objectives: [
    "Je peux parler des genres de films et de séries.",
    "Je peux utiliser *celui, celle, ceux, celles* pour éviter une répétition.",
    "Je peux combiner les démonstratifs avec *qui, que, dont* et *-ci / -là*.",
    "Je peux écrire et présenter une critique de film."
  ],

  explanation: {
    vocabTitle: "Le cinéma",
    vocab: [
      { word: "un réalisateur", icon: "🎥" }, { word: "un acteur / une actrice", icon: "🎭" }, { word: "le scénario", icon: "📜" }, { word: "les effets spéciaux", icon: "💥" },
      { word: "la bande-annonce", icon: "▶️" }, { word: "les sous-titres", icon: "💬" }, { word: "une saison", icon: "📺" }, { word: "un épisode", icon: "🎞️" },
      { word: "l'intrigue", icon: "🧩" }, { word: "un rebondissement", icon: "🔄" }, { word: "émouvant", icon: "😢" }, { word: "ennuyeux", icon: "😴" }
    ],
    grammar: [
      {
        title: "Les pronoms démonstratifs",
        intro: "Ils remplacent un nom déjà mentionné pour éviter la répétition.",
        head: ["", "Masculin", "Féminin"],
        rows: [["singulier", "*celui*", "*celle*"], ["pluriel", "*ceux*", "*celles*"]],
        note: "Ils ne sont jamais seuls : ils sont suivis de *-ci / -là*, de *qui / que / dont*, ou de *de* + nom."
      },
      {
        title: "Les constructions",
        head: ["Construction", "Exemple"],
        rows: [
          ["*celui-ci / celui-là*", "Quel film tu préfères ? *Celui-ci* ou *celui-là* ?"],
          ["*celui qui* (sujet)", "Je veux voir *celui qui* a gagné l'Oscar."],
          ["*celle que* (COD)", "Cette série est *celle que* je préfère."],
          ["*ceux dont* (de)", "Ce sont *ceux dont* je t'ai parlé."],
          ["*celui de* + nom", "Le film de Miyazaki ou *celui de* Pixar ?"]
        ]
      },
      {
        title: "Faire une critique",
        head: ["Pour…", "Expressions"],
        rows: [
          ["résumer", "Le film raconte l'histoire de… / Ça se passe à… / C'est l'histoire d'un homme qui…"],
          ["apprécier", "J'ai adoré… / Les acteurs jouent très bien. / Le scénario est original."],
          ["critiquer", "J'ai été déçu(e) par… / C'est un peu long. / La fin est prévisible."],
          ["recommander", "Je vous le conseille ! / À voir absolument. / À éviter."]
        ]
      }
    ],
    watchOut: [
      ["Je préfère celui.", "Je préfère celui-ci."],
      ["Ce film est celle que j'aime.", "Ce film est celui que j'aime."],
      ["Ceux que tu as parlé.", "Ceux dont tu as parlé."],
      ["Le film de Pixar et le de Disney.", "Le film de Pixar et celui de Disney."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez avec *celui, celle, ceux* ou *celles*.",
      items: ["Cette série est [[celle]] que je préfère.", "Ces films sont [[ceux]] dont je t'ai parlé.", "Le film de Pixar ou [[celui]] de Disney ?"]
    }
  },

  skills: {
    listening: {
      intro: "Écoutez l'émission de radio « Écran total », qui présente les films de la semaine.",
      title: "Écran total",
      script: [
        { who: "Le présentateur", line: "Bonsoir ! Cette semaine, trois films à l'affiche. D'abord, une comédie : « Les Voisins », l'histoire de deux familles qui se détestent. C'est drôle, mais un peu prévisible." },
        { who: "La présentatrice", line: "Ensuite, celui que j'ai préféré : « Le Silence de la mer », un drame historique très émouvant. Les acteurs sont exceptionnels. À voir absolument !" },
        { who: "Le présentateur", line: "Et enfin, pour ceux qui aiment les sensations fortes, « Mars 2090 », un film de science-fiction. Les effets spéciaux sont impressionnants, mais le scénario est faible." },
        { who: "La présentatrice", line: "Bref, celui-là, c'est pour les yeux, pas pour la tête !" }
      ],
      activities: [
        {
          type: "match", title: "Les films et leur genre",
          pairs: [["Les Voisins", "une comédie"], ["Le Silence de la mer", "un drame historique"], ["Mars 2090", "un film de science-fiction"]]
        },
        {
          type: "sort", title: "Point fort ou point faible ?",
          bins: ["Point fort 👍", "Point faible 👎"],
          items: [
            { text: "c'est drôle", bin: 0 }, { text: "les acteurs sont exceptionnels", bin: 0 }, { text: "les effets spéciaux impressionnants", bin: 0 },
            { text: "un peu prévisible", bin: 1 }, { text: "le scénario est faible", bin: 1 }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez ces critiques publiées par des spectateurs.",
      title: "Les avis des spectateurs",
      text: [
        { author: "Inès ★★★★★", body: "« Le Silence de la mer » est le meilleur film que j'ai vu cette année. L'actrice principale est bouleversante. Celle qui joue la grand-mère m'a fait pleurer !" },
        { author: "Paul ★★☆☆☆", body: "J'ai été déçu par « Mars 2090 ». J'avais adoré la bande-annonce, mais le film est trop long. Je préfère ceux de Christopher Nolan, plus intelligents." },
        { author: "Amina ★★★★☆", body: "« Les Voisins » est une comédie légère. Ce n'est pas un chef-d'œuvre, mais c'est celle que je conseille pour une soirée entre amis." }
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Inès a beaucoup aimé « Le Silence de la mer ».", a: true },
            { s: "Paul a aimé le film plus que la bande-annonce.", a: false },
            { s: "Amina pense que « Les Voisins » est un chef-d'œuvre.", a: false }
          ]
        },
        {
          type: "match", title: "Que remplace le pronom ?",
          pairs: [["« Celle qui joue la grand-mère »", "l'actrice"], ["« Je préfère ceux de Nolan »", "les films"], ["« c'est celle que je conseille »", "la comédie"]]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis écrivez votre critique.",
      activities: [
        {
          type: "rewrite", title: "Évitez la répétition",
          prompt: "Remplacez le nom répété par un pronom démonstratif.",
          items: [
            { q: "Je n'aime pas ce film. Je préfère le film de Pixar.", a: ["Je n'aime pas ce film. Je préfère celui de Pixar."] },
            { q: "Cette série est la série que je regarde.", a: ["Cette série est celle que je regarde."] },
            { q: "Les acteurs qui jouent bien sont les acteurs que j'admire.", a: ["Les acteurs qui jouent bien sont ceux que j'admire."] },
            { q: "Tu as vu les séries dont je parlais ? – Oui, j'ai vu les séries dont tu parlais.", a: ["Oui, j'ai vu celles dont tu parlais."] }
          ]
        },
        {
          type: "write", title: "Ma critique de film",
          prompt: "Écrivez la critique d'un film ou d'une série que vous avez vu récemment : résumé, points forts, points faibles, recommandation. Utilisez trois pronoms démonstratifs.",
          minWords: 100, maxWords: 150,
          model: "« Coco » est un film d'animation de Pixar qui se passe au Mexique, pendant le Jour des Morts. Il raconte l'histoire de Miguel, un garçon qui rêve de devenir musicien malgré l'interdiction de sa famille. J'ai adoré les couleurs et la musique : la chanson « Recuérdame » est celle que j'écoute encore aujourd'hui. Les personnages sont attachants, surtout celui de la grand-mère. Le seul point faible, c'est le début, un peu lent. Parmi les films de Pixar, c'est celui que je préfère, avec « Vice-versa ». Je vous le conseille, mais préparez vos mouchoirs !",
          bank: ["Le film raconte l'histoire de…", "Ça se passe à…", "J'ai adoré…", "Le point faible, c'est…", "celui / celle que…", "Je vous le conseille !"],
          checklist: ["J'ai résumé l'histoire sans raconter la fin.", "J'ai donné des points forts et un point faible.", "J'ai utilisé trois pronoms démonstratifs.", "J'ai fait une recommandation."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Parlez de films",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Le film raconte l'histoire d'un jeune musicien." },
            { s: "Celui que je préfère, c'est le film japonais." },
            { s: "Cette série est celle dont tout le monde parle." },
            { s: "Les acteurs jouent très bien." },
            { s: "J'ai été déçue par la fin." },
            { s: "À voir absolument !" }
          ]
        },
        {
          type: "speak", title: "Ma recommandation",
          prompt: "Recommandez un film ou une série en une minute et demie : de quoi ça parle, pourquoi vous l'aimez, à qui vous le conseillez.",
          language: ["Je voudrais vous parler de…", "Ça raconte l'histoire de…", "Ce que j'ai adoré, c'est…", "C'est celui que…", "Je le conseille à ceux qui…"],
          seconds: 90,
          checklist: ["résumé l'histoire ?", "utilisé *celui / celle* ?", "fait une recommandation ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux parler des genres de films et du cinéma.", review: "Explication : le vocabulaire" },
    { can: "Je peux utiliser *celui, celle, ceux, celles*.", review: "Explication : les pronoms démonstratifs" },
    { can: "Je peux utiliser *celui qui / que / dont / de*.", review: "Explication : les constructions ; Écrire, activité 1" },
    { can: "Je peux comprendre une critique à l'oral.", review: "Écouter" },
    { can: "Je peux comprendre l'avis de spectateurs.", review: "Lire" },
    { can: "Je peux écrire et présenter une critique.", review: "Écrire, activité 2 et Parler" }
  ]
};
