window.UNIT = {
  slug: "causes-et-consequences",
  title: "Causes et conséquences",
  level: "B2",
  subject: "Argumenter",
  minutes: 60,
  focus: ["exprimer la cause", "exprimer la conséquence", "grâce à / à cause de", "si bien que, tellement… que"],

  presentation: {
    scene: "🔗➡️🌐",
    situation: "En cours de sciences sociales, les étudiants analysent un phénomène : **la migration des jeunes diplômés vers l'étranger**. Pourquoi partent-ils ? Quelles en sont les conséquences ?",
    warmup: {
      prompt: "Pourquoi certains jeunes partent-ils travailler à l'étranger ?",
      options: ["de meilleurs salaires", "plus d'opportunités", "la curiosité", "la sécurité", "la qualité de vie", "apprendre une langue", "rejoindre la famille", "fuir une crise"],
      response: "Les causes sont multiples. Apprenons à les analyser avec précision."
    },
    dialogueTitle: "Analyse en classe",
    dialogue: [
      { who: "La professeure", line: "Alors, pourquoi tant de jeunes diplômés quittent-ils leur pays ?" },
      { who: "Diego", line: "*En raison des* salaires trop bas. *Comme* les jeunes ne trouvent pas de postes qualifiés, ils partent." },
      { who: "Inès", line: "Il y a aussi des causes positives : *grâce aux* programmes d'échange, ils découvrent d'autres pays." },
      { who: "La professeure", line: "Et les conséquences ?" },
      { who: "Diego", line: "Les pays perdent des talents, *si bien que* leur économie se développe moins vite. C'est ce qu'on appelle la « fuite des cerveaux »." },
      { who: "Inès", line: "*Pourtant*, beaucoup envoient de l'argent à leur famille. *C'est pourquoi* certains économistes parlent plutôt de « circulation des cerveaux »." },
      { who: "La professeure", line: "Excellente nuance ! *Puisque* vous maîtrisez le sujet, vous ferez un exposé la semaine prochaine." }
    ]
  },

  objectives: [
    "Je peux exprimer la cause avec des conjonctions et des prépositions.",
    "Je peux distinguer une cause positive (*grâce à*) d'une cause négative (*à cause de*).",
    "Je peux exprimer la conséquence avec différents connecteurs.",
    "Je peux analyser un phénomène de société à l'écrit et à l'oral."
  ],

  explanation: {
    vocabTitle: "Analyser un phénomène",
    vocab: [
      { word: "un phénomène", icon: "🌀" }, { word: "une cause", icon: "🔎" }, { word: "une conséquence", icon: "➡️" }, { word: "un facteur", icon: "🧮" },
      { word: "entraîner", icon: "🔗" }, { word: "provoquer", icon: "💥" }, { word: "résulter de", icon: "↩️" }, { word: "la fuite des cerveaux", icon: "🧠" },
      { word: "l'émigration", icon: "✈️" }, { word: "le chômage", icon: "📉" }, { word: "un impact", icon: "🎯" }, { word: "une tendance", icon: "📈" }
    ],
    grammar: [
      {
        title: "Exprimer la cause",
        head: ["Connecteur", "Construction", "Exemple"],
        rows: [
          ["*parce que*", "+ indicatif (réponse à *pourquoi*)", "Il part *parce qu'*il veut voyager."],
          ["*comme*", "+ indicatif, en **début** de phrase", "*Comme* il pleuvait, nous sommes restés."],
          ["*puisque*", "+ indicatif (cause évidente, connue)", "*Puisque* tu es là, aide-moi !"],
          ["*grâce à*", "+ nom (cause positive)", "*Grâce à* sa bourse, elle étudie à Paris."],
          ["*à cause de*", "+ nom (cause négative)", "*À cause de* la grève, le cours est annulé."],
          ["*en raison de / du fait de*", "+ nom (neutre, formel)", "*En raison du* mauvais temps, le vol est retardé."],
          ["*étant donné que / vu que*", "+ indicatif", "*Étant donné que* les prix montent, …"]
        ]
      },
      {
        title: "Exprimer la conséquence",
        head: ["Connecteur", "Construction", "Exemple"],
        rows: [
          ["*donc / alors*", "dans la phrase", "Il était malade, *donc* il n'est pas venu."],
          ["*c'est pourquoi / c'est pour ça que*", "début de proposition", "Les salaires sont bas. *C'est pourquoi* ils partent."],
          ["*si bien que / de sorte que*", "+ indicatif", "Il a beaucoup plu, *si bien que* la route est fermée."],
          ["*par conséquent / en conséquence*", "formel, souvent après un point", "Le budget a baissé. *Par conséquent*, …"],
          ["*tellement / si* + adj. + *que*", "intensité", "Il était *si* fatigué *qu'*il s'est endormi."],
          ["*tant de / tellement de* + nom + *que*", "quantité", "Il y avait *tant de* monde *que* je suis parti."],
          ["*entraîner, provoquer, causer*", "verbes", "La crise *a entraîné* une hausse du chômage."]
        ]
      }
    ],
    watchOut: [
      ["Grâce à la pluie, le match est annulé.", "À cause de la pluie, le match est annulé."],
      ["À cause qu'il est malade…", "Parce qu'il est malade…"],
      ["Il est parti, comme il était fatigué.", "Comme il était fatigué, il est parti."],
      ["Il était tellement fatigué qui s'est endormi.", "Il était tellement fatigué qu'il s'est endormi."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez.",
      items: ["[[Grâce à|Grace a]] ton aide, j'ai réussi.", "[[Comme]] il faisait froid, nous sommes rentrés.", "Il a tellement travaillé [[qu']]il est épuisé."]
    }
  },

  skills: {
    listening: {
      intro: "Écoutez une chronique radio sur l'augmentation du tourisme dans certaines villes.",
      title: "Le surtourisme : trop de visiteurs ?",
      script: [
        { who: "Le chroniqueur", line: "Venise, Barcelone, Amsterdam… Ces villes reçoivent tant de touristes que les habitants finissent par partir." },
        { who: "Le chroniqueur", line: "Pourquoi ce phénomène ? D'abord, grâce aux vols à bas prix, voyager n'a jamais été aussi facile. Ensuite, à cause des réseaux sociaux, tout le monde veut prendre la même photo, au même endroit." },
        { who: "Le chroniqueur", line: "Les conséquences sont lourdes. Les propriétaires préfèrent louer aux touristes, si bien que les loyers explosent pour les habitants. Les commerces traditionnels ferment et sont remplacés par des boutiques de souvenirs." },
        { who: "Le chroniqueur", line: "C'est pourquoi certaines villes réagissent. Venise, par exemple, a instauré un droit d'entrée pour les visiteurs à la journée. Étant donné que le tourisme fait vivre ces villes, il ne s'agit pas de l'interdire, mais de le réguler." }
      ],
      activities: [
        {
          type: "sort", title: "Cause ou conséquence ?",
          bins: ["Causes du surtourisme", "Conséquences du surtourisme"],
          items: [
            { text: "les vols à bas prix", bin: 0 }, { text: "les réseaux sociaux", bin: 0 },
            { text: "les loyers explosent", bin: 1 }, { text: "les commerces traditionnels ferment", bin: 1 }, { text: "les habitants partent", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Les connecteurs",
          prompt: "Complétez avec le connecteur entendu.",
          items: ["[[Grâce aux|Grace aux]] vols à bas prix, voyager est facile.", "[[À cause des|A cause des]] réseaux sociaux, tout le monde veut la même photo.", "Les propriétaires louent aux touristes, [[si bien que]] les loyers explosent.", "[[C'est pourquoi]] certaines villes réagissent."]
        }
      ]
    },

    reading: {
      intro: "Lisez cet extrait d'un rapport sur le sommeil des étudiants.",
      title: "Les étudiants dorment-ils assez ?",
      text: [
        "D'après une enquête menée auprès de 5 000 étudiants, 62 % d'entre eux dorment moins de sept heures par nuit. Plusieurs facteurs expliquent cette tendance.",
        "En premier lieu, l'usage des écrans le soir retarde l'endormissement, la lumière bleue perturbant la production de mélatonine. En second lieu, de nombreux étudiants exercent une activité salariée, si bien qu'ils doivent réviser tard le soir. Enfin, le stress lié aux examens provoque des insomnies.",
        "Les conséquences ne sont pas négligeables. Le manque de sommeil entraîne une baisse de la concentration et de la mémoire ; par conséquent, les résultats universitaires diminuent. Les étudiants sont parfois si fatigués qu'ils s'endorment en cours. C'est pourquoi les auteurs du rapport recommandent de commencer les cours plus tard et de proposer des ateliers de gestion du stress."
      ],
      activities: [
        {
          type: "match", title: "Cause → conséquence",
          prompt: "Associez chaque cause à sa conséquence d'après le texte.",
          pairs: [["la lumière bleue des écrans", "un endormissement retardé"], ["une activité salariée", "des révisions tard le soir"], ["le stress des examens", "des insomnies"], ["le manque de sommeil", "une baisse de la concentration"]]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "La majorité des étudiants interrogés dorment moins de sept heures.", a: true },
            { s: "Le rapport recommande de commencer les cours plus tôt.", a: false },
            { s: "Le manque de sommeil n'a pas d'effet sur les résultats.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Transformez, puis rédigez votre analyse.",
      activities: [
        {
          type: "rewrite", title: "Reformulez",
          prompt: "Reformulez avec le connecteur indiqué.",
          items: [
            { q: "Il a neigé, donc l'école est fermée. (à cause de + nom)", a: ["À cause de la neige, l'école est fermée.", "L'école est fermée à cause de la neige."] },
            { q: "Elle a eu une bourse, donc elle étudie à Lyon. (grâce à)", a: ["Grâce à sa bourse, elle étudie à Lyon.", "Elle étudie à Lyon grâce à sa bourse."] },
            { q: "Il était très nerveux. Il a oublié son discours. (si… que)", a: ["Il était si nerveux qu'il a oublié son discours."] },
            { q: "Tu connais la réponse, alors réponds ! (puisque)", a: ["Puisque tu connais la réponse, réponds !"] },
            { q: "Les prix ont augmenté. Les ventes ont baissé. (si bien que)", a: ["Les prix ont augmenté, si bien que les ventes ont baissé."] }
          ]
        },
        {
          type: "write", title: "Analyse d'un phénomène",
          prompt: "Choisissez un phénomène de société (la fuite des cerveaux, le surtourisme, l'addiction aux écrans, la hausse des loyers…). Rédigez une analyse : introduction, causes, conséquences, conclusion avec une proposition. Utilisez au moins quatre connecteurs de cause et quatre de conséquence.",
          minWords: 180, maxWords: 250,
          model: "Depuis une dizaine d'années, de plus en plus de jeunes Mexicains diplômés partent travailler à l'étranger. Quelles sont les causes de ce phénomène et quelles en sont les conséquences ? D'abord, ce départ s'explique en raison des salaires, souvent trois fois plus élevés au Canada ou en Europe. Ensuite, comme les postes de recherche sont rares, beaucoup de docteurs ne trouvent pas d'emploi correspondant à leur formation. Enfin, grâce aux réseaux sociaux et aux programmes d'échange, partir semble aujourd'hui plus facile. Les conséquences sont doubles. D'une part, le pays perd des talents formés à grands frais, si bien que l'innovation progresse moins vite. D'autre part, les émigrés envoient de l'argent à leur famille et créent des liens internationaux ; c'est pourquoi certains parlent de « circulation des cerveaux ». Par conséquent, il me semble que la solution n'est pas d'empêcher les départs, mais de faciliter les retours, par exemple en créant des postes attractifs pour les chercheurs qui reviennent.",
          bank: ["en raison de…", "comme…", "grâce à…", "à cause de…", "étant donné que…", "si bien que…", "c'est pourquoi…", "par conséquent,…", "entraîner"],
          checklist: ["Mon analyse a une introduction et une conclusion.", "J'ai utilisé quatre connecteurs de cause.", "J'ai utilisé quatre connecteurs de conséquence.", "J'ai fait la différence entre *grâce à* et *à cause de*."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Causes et conséquences",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Grâce à sa bourse, elle étudie à l'étranger." },
            { s: "À cause de la grève, le cours est annulé." },
            { s: "Comme il pleuvait, nous sommes restés." },
            { s: "Il a beaucoup plu, si bien que la route est fermée." },
            { s: "Il était si fatigué qu'il s'est endormi." },
            { s: "C'est pourquoi certaines villes réagissent." }
          ]
        },
        {
          type: "speak", title: "Effet domino",
          prompt: "Jeu à deux : A dit un événement. B donne une conséquence. A donne une conséquence de cette conséquence… Allez le plus loin possible ! Exemple : *Il a plu toute la nuit.*",
          language: ["… si bien que…", "… donc…", "Par conséquent,…", "C'est pourquoi…", "… tellement… que…"],
          model: [
            { who: "A", line: "Il a plu toute la nuit." },
            { who: "B", line: "Si bien que la rivière a débordé." },
            { who: "A", line: "Par conséquent, la route a été fermée." },
            { who: "B", line: "C'est pourquoi les étudiants sont arrivés en retard." }
          ],
          seconds: 75,
          checklist: ["enchaîné six conséquences ?", "varié les connecteurs ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux exprimer la cause avec *parce que, comme, puisque*.", review: "Explication : exprimer la cause" },
    { can: "Je peux utiliser *grâce à, à cause de, en raison de*.", review: "Explication : exprimer la cause ; Écrire, activité 1" },
    { can: "Je peux exprimer la conséquence avec des connecteurs variés.", review: "Explication : exprimer la conséquence" },
    { can: "Je peux utiliser *si / tellement… que* et *tant de… que*.", review: "Explication : exprimer la conséquence" },
    { can: "Je peux identifier les causes et les conséquences dans un document.", review: "Écouter et Lire" },
    { can: "Je peux analyser un phénomène de société.", review: "Écrire, activité 2 et Parler, activité 1" }
  ]
};
