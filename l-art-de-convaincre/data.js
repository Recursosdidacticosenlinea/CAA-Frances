window.UNIT = {
  slug: "l-art-de-convaincre",
  title: "L'art de convaincre",
  level: "C1",
  subject: "Communiquer",
  minutes: 65,
  focus: ["l'éloquence et la prise de parole", "les figures de style : anaphore, métaphore, antithèse, question rhétorique", "les registres pathétique et polémique", "construire un discours"],

  presentation: {
    scene: "🎤🏛️✨",
    situation: "L'université organise son **concours d'éloquence**. Les finalistes ont trois minutes pour convaincre le jury sur le thème : « Faut-il avoir peur de l'avenir ? » Une coach les aide à travailler leur discours.",
    warmup: {
      prompt: "Qu'est-ce qui rend un discours convaincant, selon vous ?",
      options: ["les arguments", "les émotions", "la voix", "les gestes", "les exemples", "l'humour", "les silences", "la confiance"],
      response: "Tout cela compte ! Découvrons les outils des grands orateurs."
    },
    dialogueTitle: "Répétition avec la coach",
    dialogue: [
      { who: "La coach", line: "Commence ton discours, Karim." },
      { who: "Karim", line: "« L'avenir nous inquiète. *L'avenir* nous menace. *L'avenir*, nous dit-on, est une tempête. »" },
      { who: "La coach", line: "Très bien, c'est une *anaphore* : la répétition crée un rythme. Et la tempête, c'est une *métaphore*. Continue." },
      { who: "Karim", line: "« Mais *faut-il pour autant fermer les yeux* ? Faut-il choisir la peur plutôt que l'audace ? »" },
      { who: "La coach", line: "Des *questions rhétoriques* : tu n'attends pas de réponse, tu fais réfléchir le jury." },
      { who: "Karim", line: "« L'avenir n'est pas ce qui nous arrive, c'est ce que nous faisons. Nous pouvons subir *la nuit* ou allumer *la lumière*. »" },
      { who: "La coach", line: "Parfait : une *antithèse* pour conclure. Maintenant, ralentis et regarde le jury dans les yeux." }
    ]
  },

  objectives: [
    "Je peux identifier les principales figures de style d'un discours.",
    "Je peux utiliser l'anaphore, la métaphore, l'antithèse et la question rhétorique.",
    "Je peux reconnaître et employer les registres pathétique et polémique.",
    "Je peux construire et prononcer un discours persuasif."
  ],

  explanation: {
    vocabTitle: "La rhétorique",
    vocab: [
      { word: "l'éloquence", icon: "🎤" }, { word: "un orateur", icon: "🗣️" }, { word: "l'auditoire", icon: "👥" }, { word: "persuader", icon: "🎯" },
      { word: "la péroraison", icon: "🏁" }, { word: "l'exorde", icon: "🚪" }, { word: "le ton", icon: "🎚️" }, { word: "une envolée", icon: "🕊️" },
      { word: "captiver", icon: "🧲" }, { word: "le débit", icon: "⏱️" }, { word: "une pause", icon: "⏸️" }, { word: "l'ethos", icon: "🏛️" }
    ],
    grammar: [
      {
        title: "Les figures de style",
        head: ["Figure", "Définition", "Exemple"],
        rows: [
          ["*anaphore*", "répétition d'un mot en début de phrase", "*Nous* voulons agir. *Nous* voulons choisir."],
          ["*métaphore*", "comparaison sans outil (*comme*)", "L'avenir est *une tempête*."],
          ["*comparaison*", "rapprochement avec *comme, tel, pareil à*", "L'avenir est *comme* une page blanche."],
          ["*antithèse*", "opposition de deux idées", "Subir *la nuit* ou allumer *la lumière*."],
          ["*question rhétorique*", "question sans réponse attendue", "Faut-il fermer les yeux ?"],
          ["*gradation*", "termes d'intensité croissante", "Je doute, je crains, je tremble."],
          ["*hyperbole*", "exagération", "Je vous l'ai dit mille fois."],
          ["*prétérition*", "dire qu'on ne dira pas ce qu'on dit", "Je ne vous parlerai pas des sacrifices de nos parents…"]
        ]
      },
      {
        title: "Les registres",
        head: ["Registre", "Effet recherché", "Procédés"],
        rows: [
          ["pathétique", "émouvoir, susciter la pitié", "vocabulaire des sentiments, exclamations, témoignages"],
          ["polémique", "attaquer, critiquer", "ironie, questions rhétoriques, vocabulaire péjoratif"],
          ["lyrique", "exprimer des sentiments personnels", "*je*, images, rythme"],
          ["épique", "grandir, exalter", "hyperboles, héros, combat"]
        ],
        note: "Un bon discours combine *logos* (raison), *pathos* (émotion) et *ethos* (crédibilité de l'orateur)."
      }
    ],
    watchOut: [
      ["« L'avenir est comme une tempête » est une métaphore.", "C'est une comparaison (avec *comme*)."],
      ["Une question rhétorique attend une réponse.", "Une question rhétorique n'attend pas de réponse."],
      ["L'anaphore répète un mot à la fin.", "L'anaphore répète un mot au début."],
      ["« Je doute, je crains, je tremble » est une antithèse.", "C'est une gradation."]
    ],
    check: {
      type: "match", title: "Vérification rapide",
      prompt: "Associez l'exemple et la figure.",
      pairs: [["« Mon cœur est un violon. »", "métaphore"], ["« Rome, l'unique objet de mon ressentiment ! Rome… »", "anaphore"], ["« Je meurs de soif auprès de la fontaine. »", "antithèse"], ["« Qui peut accepter cela ? »", "question rhétorique"]]
    }
  },

  skills: {
    listening: {
      intro: "Écoutez l'extrait d'un discours prononcé lors du concours.",
      title: "Le discours de Manon",
      script: [
        { who: "Manon", line: "Mesdames et messieurs les membres du jury, on nous répète que notre génération est perdue." },
        { who: "Manon", line: "Perdue, parce qu'elle regarde ses écrans. Perdue, parce qu'elle doute. Perdue, parce qu'elle ne croit plus aux grandes promesses." },
        { who: "Manon", line: "Mais je vous le demande : est-ce être perdu que de refuser les certitudes ? Est-ce être perdu que de chercher un autre chemin ?" },
        { who: "Manon", line: "Je ne vous parlerai pas des nuits blanches, des loyers impossibles, des diplômes qui ne garantissent plus rien. Vous les connaissez." },
        { who: "Manon", line: "Je vous dirai simplement ceci : nous ne sommes pas une génération perdue. Nous sommes une génération qui cherche. Et ceux qui cherchent finissent toujours par trouver." }
      ],
      activities: [
        {
          type: "match", title: "Identifiez les figures",
          pairs: [["« Perdue, parce que… Perdue, parce que… »", "anaphore"], ["« Est-ce être perdu que de refuser les certitudes ? »", "question rhétorique"], ["« Je ne vous parlerai pas des nuits blanches… »", "prétérition"], ["« pas une génération perdue… une génération qui cherche »", "antithèse"]]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Manon accepte l'idée d'une génération perdue.", a: false },
            { s: "Elle évoque les difficultés matérielles des étudiants.", a: true },
            { s: "Sa conclusion est pessimiste.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez ce célèbre extrait de discours de Victor Hugo (1849), prononcé à l'Assemblée nationale. Le texte est dans le domaine public.",
      title: "Victor Hugo, « Discours sur la misère » (extrait)",
      text: [
        "« Je ne suis pas, messieurs, de ceux qui croient qu'on peut supprimer la souffrance en ce monde ; la souffrance est une loi divine ; mais je suis de ceux qui pensent et qui affirment qu'on peut détruire la misère.",
        "Remarquez-le bien, messieurs, je ne dis pas diminuer, amoindrir, limiter, circonscrire, je dis détruire. […] La misère est une maladie du corps social comme la lèpre était une maladie du corps humain ; la misère peut disparaître comme la lèpre a disparu. Détruire la misère ! oui, cela est possible. »"
      ],
      activities: [
        {
          type: "sort", title: "Quelle figure ?",
          bins: ["gradation", "comparaison", "antithèse / opposition", "exclamation (pathos)"],
          items: [
            { text: "diminuer, amoindrir, limiter, circonscrire", bin: 0 },
            { text: "maladie du corps social comme la lèpre", bin: 1 },
            { text: "supprimer la souffrance / détruire la misère", bin: 2 }, { text: "je ne dis pas diminuer… je dis détruire", bin: 2 },
            { text: "Détruire la misère !", bin: 3 }
          ]
        },
        {
          type: "tf", title: "Comprendre l'argumentation",
          items: [
            { s: "Hugo pense qu'on peut supprimer toute souffrance.", a: false },
            { s: "Il distingue la souffrance et la misère.", a: true },
            { s: "Pour lui, la misère est inévitable.", a: false },
            { s: "Il utilise la maladie comme image de la misère.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Créez des figures, puis écrivez votre discours.",
      activities: [
        {
          type: "rewrite", title: "Transformez en figure de style",
          prompt: "Réécrivez la phrase avec la figure indiquée.",
          items: [
            { q: "La ville est très bruyante. (métaphore : « une ruche »)", a: ["La ville est une ruche.", "La ville est une ruche bruyante."] },
            { q: "Nous ne devons pas accepter cela. (question rhétorique)", a: ["Devons-nous accepter cela ?", "Pouvons-nous accepter cela ?"] },
            { q: "Il est riche, mais malheureux. (antithèse avec « riche de… pauvre de… »)", a: ["Il est riche d'argent, mais pauvre de bonheur.", "Riche d'argent, il est pauvre de bonheur."] }
          ]
        },
        {
          type: "write", title: "Mon discours d'éloquence",
          prompt: "Rédigez un discours de concours d'éloquence (environ trois minutes à l'oral) sur le sujet de votre choix : « Faut-il avoir peur de l'avenir ? », « Faut-il toujours dire la vérité ? » ou « La lenteur est-elle une vertu ? ». Structure : exorde, argumentation, péroraison. Utilisez au moins cinq figures de style différentes.",
          minWords: 250, maxWords: 350,
          model: "Mesdames et messieurs, chers membres du jury, on nous dit que le temps, c'est de l'argent. Le temps est devenu une course, une compétition, une obsession. Nous mangeons vite, nous lisons vite, nous aimons vite. Mais je vous le demande : où courons-nous ainsi ? Vers quel trésor, vers quelle victoire ? Je ne vous parlerai pas de ces matins où l'on avale un café debout, ni de ces soirées où l'on répond à des courriels au lieu de répondre à ses enfants. Vous les connaissez trop bien. Je voudrais simplement vous rappeler une chose : la lenteur n'est pas l'ennemie du progrès, elle en est la condition. Le chêne ne pousse pas en une nuit ; il lui faut cent ans pour devenir forêt. Les plus grandes œuvres de l'humanité, des cathédrales aux découvertes scientifiques, sont nées de la patience. Ralentir, ce n'est pas renoncer ; c'est choisir. Choisir de regarder plutôt que de voir, d'écouter plutôt que d'entendre, de vivre plutôt que de survivre. Alors oui, la lenteur est une vertu. Une vertu discrète, une vertu oubliée, une vertu urgente. Et si, ce soir, en rentrant chez vous, vous preniez le temps ? Le temps de rien. Le temps de tout. Je vous remercie.",
          bank: ["Mesdames et messieurs,…", "Je vous le demande :…", "Je ne vous parlerai pas de…", "… n'est pas…, c'est…", "Alors oui,…", "Je vous remercie."],
          checklist: ["Mon discours a un exorde, une argumentation et une péroraison.", "J'ai utilisé cinq figures de style différentes.", "J'ai combiné logos, pathos et ethos.", "Ma conclusion est marquante."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "La voix de l'orateur",
          prompt: "Écoutez et répétez en marquant les pauses et le rythme.",
          items: [
            { s: "L'avenir nous inquiète, l'avenir nous menace." },
            { s: "Faut-il pour autant fermer les yeux ?" },
            { s: "Nous pouvons subir la nuit ou allumer la lumière." },
            { s: "Ralentir, ce n'est pas renoncer, c'est choisir." },
            { s: "Je ne vous parlerai pas des nuits blanches." },
            { s: "Mesdames et messieurs, je vous remercie." }
          ]
        },
        {
          type: "speak", title: "Mon discours au concours",
          prompt: "Prononcez votre discours (trois minutes maximum). Travaillez le débit, les pauses et l'intonation. Regardez la caméra comme si c'était le jury.",
          language: ["Mesdames et messieurs les membres du jury,…", "Je vous le demande :…", "Alors oui,…", "Je vous remercie."],
          seconds: 180,
          checklist: ["parlé lentement et marqué des pauses ?", "fait entendre les figures de style ?", "conclu avec force ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux identifier les figures de style d'un discours.", review: "Explication : les figures de style ; Écouter, activité 1" },
    { can: "Je peux utiliser anaphore, métaphore, antithèse et question rhétorique.", review: "Écrire, activité 1" },
    { can: "Je peux distinguer comparaison et métaphore, gradation et antithèse.", review: "Explication : attention !" },
    { can: "Je peux reconnaître les registres pathétique et polémique.", review: "Explication : les registres" },
    { can: "Je peux analyser un extrait de discours célèbre.", review: "Lire" },
    { can: "Je peux écrire et prononcer un discours persuasif.", review: "Écrire, activité 2 et Parler" }
  ]
};
