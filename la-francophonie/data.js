window.UNIT = {
  slug: "la-francophonie",
  title: "La francophonie",
  level: "B2",
  subject: "Les cultures",
  minutes: 60,
  focus: ["le monde francophone", "le pronom relatif dont", "lequel, auquel, duquel", "préposition + qui / lequel"],

  presentation: {
    scene: "🌍🗣️🎶",
    situation: "Le 20 mars, c'est la **Journée internationale de la francophonie**. L'université organise un festival avec des étudiants du Sénégal, du Québec, de Belgique et du Maroc. Amina présente le projet.",
    warmup: {
      prompt: "Quels pays francophones connaissez-vous ?",
      options: ["la France", "le Canada (Québec)", "la Belgique", "la Suisse", "le Sénégal", "le Maroc", "Haïti", "la Côte d'Ivoire", "le Luxembourg", "Madagascar"],
      response: "Le français est parlé sur les cinq continents ! Découvrons cette diversité."
    },
    dialogueTitle: "La préparation du festival",
    dialogue: [
      { who: "Amina", line: "Voici le programme *dont* je vous ai parlé. Le festival, *auquel* participent huit pays, aura lieu dans le grand amphithéâtre." },
      { who: "Louis", line: "Et le concert ? C'est le groupe québécois *dont* le chanteur est très connu ?" },
      { who: "Amina", line: "Exactement ! Il y aura aussi une conférence *pendant laquelle* des écrivains parleront de la langue française en Afrique." },
      { who: "Louis", line: "Qui est l'écrivaine *avec qui* tu as organisé la table ronde ?" },
      { who: "Amina", line: "C'est Fatou Diome, une romancière franco-sénégalaise *dont* les livres sont traduits dans de nombreuses langues." },
      { who: "Louis", line: "Super. Et les stands de cuisine ?" },
      { who: "Amina", line: "Ils seront dans le hall, *à côté duquel* se trouve la cafétéria. Ce sera une fête *dont* tout le monde se souviendra !" }
    ]
  },

  objectives: [
    "Je peux parler de la diversité du monde francophone.",
    "Je peux utiliser le pronom relatif *dont*.",
    "Je peux utiliser *lequel, laquelle, lesquels, lesquelles* après une préposition.",
    "Je peux utiliser les formes contractées *auquel, duquel…*"
  ],

  explanation: {
    vocabTitle: "La francophonie",
    vocab: [
      { word: "un francophone", icon: "🗣️" }, { word: "la langue maternelle", icon: "👶" }, { word: "la langue officielle", icon: "🏛️" }, { word: "un accent", icon: "🎵" },
      { word: "le créole", icon: "🌴" }, { word: "le métissage", icon: "🤝" }, { word: "le patrimoine", icon: "🏺" }, { word: "une expression régionale", icon: "💬" },
      { word: "l'identité", icon: "🪪" }, { word: "la diversité", icon: "🌈" }, { word: "la diaspora", icon: "✈️" }, { word: "le bilinguisme", icon: "🔤" }
    ],
    grammar: [
      {
        title: "Le pronom relatif dont",
        intro: "*dont* remplace un complément introduit par **de**.",
        head: ["Construction avec de", "Avec dont"],
        rows: [
          ["parler *de* ce livre", "C'est le livre *dont* je parle."],
          ["avoir besoin *d'*un dictionnaire", "Voici le dictionnaire *dont* j'ai besoin."],
          ["se souvenir *de* cette fête", "C'est une fête *dont* tout le monde se souviendra."],
          ["être fier *de* son pays", "C'est un pays *dont* elle est fière."],
          ["le chanteur *du* groupe (complément du nom)", "Le groupe *dont* le chanteur est québécois."]
        ],
        note: "Verbes fréquents : *parler de, avoir besoin de, avoir envie de, se souvenir de, s'occuper de, rêver de, être content / fier de*."
      },
      {
        title: "Préposition + lequel / qui",
        head: ["", "Masculin", "Féminin"],
        rows: [
          ["singulier", "*lequel*", "*laquelle*"],
          ["pluriel", "*lesquels*", "*lesquelles*"],
          ["à + …", "*auquel* / *auxquels*", "*à laquelle* / *auxquelles*"],
          ["de + … (locutions : près de, à côté de…)", "*duquel* / *desquels*", "*de laquelle* / *desquelles*"]
        ],
        note: "Pour une **personne**, on préfère *préposition + qui* : *l'amie avec qui je voyage*. Pour une chose : *la ville dans laquelle je vis*, *le projet auquel je pense*."
      },
      {
        title: "Exemples en contexte",
        head: ["Phrase"],
        rows: [
          ["La conférence *pendant laquelle* il a parlé était passionnante."],
          ["Le festival *auquel* je participe a lieu à Québec. (participer *à*)"],
          ["Le parc *près duquel* j'habite est immense. (près *de*)"],
          ["Les collègues *avec qui* je travaille sont belges."]
        ]
      }
    ],
    watchOut: [
      ["Le livre que je parle.", "Le livre dont je parle."],
      ["Le projet à lequel je pense.", "Le projet auquel je pense."],
      ["Le stylo dont j'écris.", "Le stylo avec lequel j'écris."],
      ["La ville dont je vis.", "La ville où / dans laquelle je vis."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez avec *dont, lequel, laquelle, auquel…*",
      items: ["C'est le film [[dont]] tout le monde parle.", "La table sur [[laquelle]] tu travailles est vieille.", "Le concours [[auquel]] je participe est difficile."]
    }
  },

  skills: {
    listening: {
      intro: "Trois étudiants francophones parlent de leur rapport au français. Écoutez.",
      title: "Le français, ma langue ?",
      script: [
        { who: "Fatou", line: "Je viens du Sénégal. Chez moi, je parle wolof avec ma famille, mais le français, c'est la langue dans laquelle j'ai fait toutes mes études. C'est une langue dont j'ai besoin pour travailler." },
        { who: "Maxime", line: "Moi, je suis québécois. Ce dont je suis le plus fier, c'est notre résistance pour garder le français en Amérique du Nord. On a des expressions auxquelles les Français ne comprennent rien : « magasiner », « avoir de la misère »…" },
        { who: "Nadia", line: "Je suis marocaine. Au Maroc, on parle arabe, amazigh et français. Le français est une langue avec laquelle j'ai un rapport complexe : c'est la langue de la colonisation, mais aussi une langue de culture et d'ouverture." }
      ],
      activities: [
        {
          type: "match", title: "Qui dit quoi ?",
          pairs: [["Fatou", "le français est la langue de ses études"], ["Maxime", "est fier de la résistance du français en Amérique"], ["Nadia", "a un rapport complexe avec le français"]]
        },
        {
          type: "gap", title: "Les pronoms relatifs",
          prompt: "Complétez avec le pronom entendu.",
          items: ["C'est la langue dans [[laquelle]] j'ai fait mes études.", "C'est une langue [[dont]] j'ai besoin.", "Des expressions [[auxquelles]] les Français ne comprennent rien.", "Une langue avec [[laquelle]] j'ai un rapport complexe."]
        }
      ]
    },

    reading: {
      intro: "Lisez cet article sur la francophonie.",
      title: "La francophonie en chiffres et en mots",
      text: [
        "Avec plus de 320 millions de locuteurs, le français est la cinquième langue la plus parlée au monde. C'est une langue dont l'avenir se joue surtout en Afrique : selon l'Organisation internationale de la Francophonie, plus de 60 % des francophones qui l'utilisent quotidiennement vivent sur le continent africain.",
        "La francophonie n'est pas seulement une question de chiffres. C'est un espace culturel dans lequel se rencontrent des littératures, des musiques et des accents très différents. Pensons au Martiniquais Aimé Césaire, grâce auquel le mouvement de la négritude est né, ou à l'Algérienne Assia Djebar, dont l'œuvre explore la condition des femmes.",
        "Cette diversité est une richesse, mais aussi un défi : quel français enseigner ? Celui de Paris, celui de Montréal, celui de Dakar ? De plus en plus de professeurs défendent un enseignement dans lequel toutes les variétés ont leur place."
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Le français est la troisième langue la plus parlée au monde.", a: false },
            { s: "La majorité des francophones quotidiens vivent en Afrique.", a: true },
            { s: "Aimé Césaire est lié au mouvement de la négritude.", a: true },
            { s: "L'article défend un seul modèle de français : celui de Paris.", a: false }
          ]
        },
        {
          type: "sort", title: "Quel pronom ?",
          prompt: "Classez les expressions du texte selon le pronom.",
          bins: ["dont", "lequel / laquelle", "auquel"],
          items: [
            { text: "une langue ___ l'avenir se joue en Afrique", bin: 0 }, { text: "Assia Djebar, ___ l'œuvre explore…", bin: 0 },
            { text: "un espace culturel dans ___ se rencontrent…", bin: 1 }, { text: "un enseignement dans ___ toutes les variétés…", bin: 1 },
            { text: "Aimé Césaire, grâce ___ la négritude est née", bin: 2 }
          ]
        }
      ]
    },

    writing: {
      intro: "Reliez les phrases, puis écrivez votre article.",
      activities: [
        {
          type: "rewrite", title: "Reliez les phrases",
          prompt: "Faites une seule phrase avec le pronom relatif qui convient.",
          items: [
            { q: "C'est un auteur. Je t'ai parlé de cet auteur.", a: ["C'est un auteur dont je t'ai parlé.", "C'est l'auteur dont je t'ai parlé."] },
            { q: "Voici l'université. J'étudie dans cette université.", a: ["Voici l'université dans laquelle j'étudie.", "Voici l'université où j'étudie."] },
            { q: "C'est un problème. Je pense souvent à ce problème.", a: ["C'est un problème auquel je pense souvent."] },
            { q: "J'ai une amie. Je voyage avec cette amie.", a: ["J'ai une amie avec qui je voyage.", "J'ai une amie avec laquelle je voyage."] },
            { q: "C'est une ville. Ses habitants parlent trois langues.", a: ["C'est une ville dont les habitants parlent trois langues."] }
          ]
        },
        {
          type: "write", title: "Un pays francophone que j'aimerais découvrir",
          prompt: "Présentez un pays ou une région francophone : sa situation linguistique, une personnalité, une tradition, et les raisons pour lesquelles vous aimeriez le découvrir. Utilisez au moins cinq pronoms relatifs composés ou *dont*.",
          minWords: 160, maxWords: 220,
          model: "Le Québec est une région dont on parle souvent pour son hiver, mais qui est surtout un symbole de résistance linguistique. Entouré de plus de 300 millions d'anglophones, c'est un territoire dans lequel le français est la seule langue officielle. La loi grâce à laquelle cette protection a été renforcée, en 1977, s'appelle la Charte de la langue française. Parmi les artistes dont les Québécois sont fiers, il y a le chanteur Félix Leclerc et l'auteur Michel Tremblay, dont les pièces de théâtre sont écrites en « joual », le français populaire de Montréal. La tradition à laquelle je voudrais participer, c'est la « cabane à sucre », au printemps, pendant laquelle on mange des plats au sirop d'érable. Ce dont je rêve, c'est de passer un semestre à Montréal pour découvrir ce français qui sonne si différemment.",
          bank: ["C'est un pays dont…", "dans lequel / laquelle…", "grâce auquel / à laquelle…", "pendant lequel / laquelle…", "auquel / à laquelle je voudrais…", "Ce dont je rêve, c'est…"],
          checklist: ["J'ai utilisé *dont* au moins deux fois.", "J'ai utilisé trois formes de *lequel* (avec préposition).", "J'ai présenté la situation linguistique.", "J'ai expliqué pourquoi je voudrais y aller."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Les mots de la francophonie",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "C'est le livre dont je t'ai parlé." },
            { s: "Voici la ville dans laquelle j'ai grandi." },
            { s: "C'est un projet auquel je pense souvent." },
            { s: "C'est une langue dont j'ai besoin pour travailler." },
            { s: "La raison pour laquelle j'apprends le français est simple." },
            { s: "Le français est parlé sur cinq continents." }
          ]
        },
        {
          type: "speak", title: "Ma relation avec le français",
          prompt: "Parlez de votre relation avec la langue française : pourquoi vous l'apprenez, les difficultés, les mots ou expressions que vous aimez.",
          language: ["Le français est une langue dont…", "Ce dont j'ai besoin, c'est…", "La raison pour laquelle j'apprends le français…", "Une expression à laquelle je pense souvent…"],
          seconds: 90,
          checklist: ["utilisé *la raison pour laquelle* ?", "utilisé *dont* ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux parler de la diversité du monde francophone.", review: "Lire et Écouter" },
    { can: "Je peux utiliser *dont* avec les verbes en *de*.", review: "Explication : le pronom relatif dont" },
    { can: "Je peux utiliser *dont* comme complément du nom.", review: "Explication : le pronom relatif dont (dernier exemple)" },
    { can: "Je peux utiliser *préposition + lequel / laquelle*.", review: "Explication : préposition + lequel" },
    { can: "Je peux utiliser *auquel, duquel* et leurs formes.", review: "Explication : préposition + lequel ; Écrire, activité 1" },
    { can: "Je peux écrire un texte complexe avec des relatives variées.", review: "Écrire, activité 2" }
  ]
};
