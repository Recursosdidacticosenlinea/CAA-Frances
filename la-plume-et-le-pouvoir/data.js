window.UNIT = {
  slug: "la-plume-et-le-pouvoir",
  title: "La plume et le pouvoir",
  level: "C2",
  subject: "La société",
  minutes: 70,
  focus: ["l'analyse du discours politique", "la synthèse de documents", "la reformulation et la condensation", "la neutralité de la synthèse"],

  presentation: {
    scene: "🏛️🖋️📑",
    situation: "Une journaliste parlementaire doit écrire, en une heure, une **synthèse** de trois documents contradictoires sur la réforme du droit de vote à seize ans. Son rédacteur en chef lui rappelle les règles de l'exercice.",
    warmup: {
      prompt: "Faut-il permettre aux jeunes de voter dès seize ans ?",
      options: ["oui", "non", "seulement aux élections locales", "à condition d'une éducation civique", "je n'ai pas d'avis", "ça dépend du pays"],
      response: "Gardez votre avis pour vous : dans une synthèse, il est interdit ! Voyons pourquoi."
    },
    dialogueTitle: "À la rédaction",
    dialogue: [
      { who: "Le rédacteur", line: "Rappel : une synthèse n'est ni un résumé document par document, ni un commentaire. *Aucune opinion personnelle*." },
      { who: "Sophie", line: "Donc je dois croiser les documents, regrouper les idées par thèmes ?" },
      { who: "Le rédacteur", line: "Exactement. Et *reformuler* : ne recopie jamais une phrase d'un auteur." },
      { who: "Sophie", line: "Le député dit que « la jeunesse est mûre ». Je peux écrire : *selon le député, les jeunes disposeraient de la maturité nécessaire* ?" },
      { who: "Le rédacteur", line: "Parfait. Tu nommes la source, tu reformules et tu restes neutre. Et pense à *condenser* : divise la longueur par quatre." },
      { who: "Sophie", line: "Dès lors, mon plan pourrait être : les arguments en faveur, les objections, puis les conditions de réussite évoquées." },
      { who: "Le rédacteur", line: "Voilà une synthèse qui ne prend parti pour personne. Au travail !" }
    ]
  },

  objectives: [
    "Je peux analyser les stratégies d'un discours politique.",
    "Je peux confronter plusieurs documents et en dégager une problématique commune.",
    "Je peux reformuler et condenser sans trahir le sens.",
    "Je peux rédiger une synthèse objective et organisée."
  ],

  explanation: {
    vocabTitle: "Le discours et la synthèse",
    vocab: [
      { word: "la synthèse", icon: "📑" }, { word: "confronter", icon: "⚔️" }, { word: "reformuler", icon: "🔁" }, { word: "condenser", icon: "🗜️" },
      { word: "un corpus", icon: "📚" }, { word: "la neutralité", icon: "⚖️" }, { word: "un élu", icon: "🏛️" }, { word: "le scrutin", icon: "🗳️" },
      { word: "la citoyenneté", icon: "🪪" }, { word: "une réforme", icon: "📜" }, { word: "un enjeu", icon: "🎯" }, { word: "la rhétorique", icon: "🎤" }
    ],
    grammar: [
      {
        title: "Les verbes pour rapporter une position",
        head: ["Nuance", "Verbes", "Exemple"],
        rows: [
          ["neutre", "*affirmer, estimer, considérer, souligner, rappeler*", "Le député *estime* que la jeunesse est prête."],
          ["accord", "*partager, rejoindre, abonder dans le sens de*", "La sociologue *rejoint* en partie cette analyse."],
          ["opposition", "*contester, réfuter, s'inscrire en faux contre, objecter*", "Le juriste *conteste* cet argument."],
          ["concession", "*reconnaître, admettre, concéder*", "Il *reconnaît* toutefois que…"],
          ["proposition", "*préconiser, plaider pour, appeler à*", "Elle *préconise* une éducation civique renforcée."]
        ],
        note: "Évitez *dire* et *parler* : le verbe introducteur doit indiquer la position de l'auteur sans la juger."
      },
      {
        title: "Condenser : la nominalisation et les connecteurs",
        head: ["Phrase longue", "Version condensée"],
        rows: [
          ["Le fait que les jeunes votent dès seize ans permettrait qu'ils s'intéressent davantage à la politique.", "*Le vote à seize ans* favoriserait *l'engagement politique* des jeunes."],
          ["Les auteurs ne sont pas d'accord sur la question de savoir si les jeunes sont mûrs.", "*La maturité des jeunes* divise les auteurs."],
          ["Alors que le député est pour, le juriste, lui, est contre.", "*Au plaidoyer* du député *s'oppose* la réserve du juriste."]
        ],
        note: "Connecteurs de confrontation : *de même, à l'instar de, à l'inverse, en revanche, si… en revanche…, tous s'accordent à…*"
      },
      {
        title: "Les stratégies du discours politique",
        head: ["Stratégie", "Procédé", "Exemple"],
        rows: [
          ["rassembler", "*nous* inclusif", "*Nous* avons tous un rôle à jouer."],
          ["dramatiser", "hyperbole, vocabulaire de la crise", "Notre démocratie est *en danger*."],
          ["légitimer", "appel à l'histoire, aux valeurs", "*Fidèles à l'esprit de 1789*,…"],
          ["simplifier", "alternative binaire", "*Soit* nous agissons, *soit* nous renonçons."]
        ]
      }
    ],
    watchOut: [
      ["Je pense que le député a raison.", "Le député estime que… (aucune opinion personnelle)"],
      ["Le document 1 dit… Le document 2 dit…", "Confrontez les documents par thèmes."],
      ["« La jeunesse est mûre » (citation recopiée)", "Selon le député, les jeunes disposeraient de la maturité nécessaire."],
      ["Le juriste dit que non.", "Le juriste conteste cet argument."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez avec un verbe introducteur précis.",
      items: ["La sociologue [[préconise|preconise]] une meilleure éducation civique. (elle propose)", "Le juriste [[conteste|réfute|refute]] l'argument de la maturité. (il s'oppose)", "Le député [[reconnaît|reconnait|admet|concède]] toutefois quelques risques. (il concède)"]
    }
  },

  skills: {
    listening: {
      intro: "Écoutez l'extrait d'un discours fictif prononcé à l'Assemblée.",
      title: "Discours : « Faire confiance à la jeunesse »",
      script: [
        { who: "La députée", line: "Mesdames et messieurs les députés, à seize ans, on peut travailler, payer des impôts, conduire une voiture accompagné. Mais on ne peut pas choisir ceux qui décident de notre avenir." },
        { who: "La députée", line: "Nous parlons sans cesse de désaffection politique. Mais comment s'étonner que les jeunes se détournent d'une démocratie qui leur ferme la porte ?" },
        { who: "La députée", line: "Fidèles à l'esprit de ceux qui, avant nous, ont étendu le suffrage aux femmes, nous pouvons aujourd'hui franchir une nouvelle étape." },
        { who: "La députée", line: "Soit nous faisons confiance à notre jeunesse, soit nous continuons à déplorer son silence. Pour ma part, j'ai choisi." }
      ],
      activities: [
        {
          type: "match", title: "Repérez les stratégies",
          pairs: [["« Nous parlons sans cesse de désaffection politique »", "nous inclusif"], ["« comment s'étonner que… ? »", "question rhétorique"], ["« Fidèles à l'esprit de ceux qui… »", "appel à l'histoire"], ["« Soit nous faisons confiance…, soit… »", "alternative binaire"]]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "La députée est favorable au vote à seize ans.", a: true },
            { s: "Elle compare cette réforme au droit de vote des femmes.", a: true },
            { s: "Son discours est neutre et objectif.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez le corpus de trois documents (fictifs) sur le vote à seize ans.",
      title: "Corpus : le droit de vote à seize ans",
      text: [
        { author: "Document 1 – Tribune d'un député", body: "L'Autriche a abaissé l'âge du vote à seize ans en 2007. Les études menées depuis montrent que les jeunes votants ne sont ni moins informés ni moins responsables que leurs aînés. Abaisser l'âge du vote, c'est ancrer très tôt l'habitude de participer." },
        { author: "Document 2 – Entretien avec un juriste", body: "La majorité civile est fixée à dix-huit ans : c'est l'âge auquel on devient pleinement responsable de ses actes. Dissocier le droit de vote de cette majorité créerait une incohérence juridique. Je ne conteste pas l'intérêt des jeunes pour la politique, mais leur dépendance à l'égard de leurs parents pose la question de la liberté de leur choix." },
        { author: "Document 3 – Article d'une sociologue", body: "Le débat sur la maturité est en partie un faux débat : aucun examen de maturité n'est exigé des électeurs adultes. En revanche, l'abaissement de l'âge du vote n'aura d'effet que s'il s'accompagne d'une véritable éducation civique à l'école. Sans cela, on risque de voir l'abstention des jeunes simplement transférée à un âge plus précoce." }
      ],
      activities: [
        {
          type: "sort", title: "Classez les arguments par thème",
          bins: ["Pour le vote à 16 ans", "Contre ou réserves", "Condition de réussite"],
          items: [
            { text: "l'exemple de l'Autriche", bin: 0 }, { text: "prendre tôt l'habitude de voter", bin: 0 }, { text: "aucun examen de maturité pour les adultes", bin: 0 },
            { text: "incohérence avec la majorité civile", bin: 1 }, { text: "dépendance à l'égard des parents", bin: 1 },
            { text: "une éducation civique renforcée", bin: 2 }
          ]
        },
        {
          type: "match", title: "Qui défend quoi ?",
          pairs: [["le député", "plaide pour l'abaissement de l'âge du vote"], ["le juriste", "s'inscrit en faux contre la réforme"], ["la sociologue", "nuance le débat et pose une condition"]]
        }
      ]
    },

    writing: {
      intro: "Condensez, puis rédigez votre synthèse.",
      activities: [
        {
          type: "rewrite", title: "Condensez et neutralisez",
          prompt: "Reformulez de façon neutre et plus concise (nominalisation, verbe introducteur).",
          items: [
            { q: "Le juriste, lui, il dit qu'il n'est pas d'accord parce que la majorité c'est dix-huit ans.", a: ["Le juriste conteste la réforme au nom de la majorité civile.", "Le juriste s'oppose à la réforme en invoquant la majorité civile.", "Le juriste conteste la réforme en raison de la majorité civile."] },
            { q: "La sociologue pense qu'il faudrait que l'école fasse plus d'éducation civique.", a: ["La sociologue préconise une éducation civique renforcée.", "La sociologue préconise un renforcement de l'éducation civique."] },
            { q: "Les auteurs ne sont pas d'accord sur la maturité des jeunes.", a: ["La maturité des jeunes divise les auteurs."] }
          ]
        },
        {
          type: "write", title: "Synthèse de documents",
          prompt: "Rédigez une synthèse objective du corpus (documents 1 à 3) : une introduction (thème, documents, problématique), un développement en deux ou trois parties thématiques qui confrontent les documents, et une conclusion sans opinion personnelle. Reformulez, ne citez pas.",
          minWords: 200, maxWords: 260,
          model: "L'abaissement de l'âge du vote à seize ans suscite un débat dont rendent compte trois documents : la tribune d'un député, l'entretien d'un juriste et l'article d'une sociologue. Ces textes invitent à se demander si les adolescents sont prêts à exercer ce droit et à quelles conditions une telle réforme serait efficace. Le député plaide pour la réforme en s'appuyant sur l'exemple autrichien : depuis 2007, les jeunes électeurs ne s'y montreraient ni moins informés ni moins responsables que leurs aînés. La sociologue rejoint en partie cette position, jugeant la question de la maturité largement artificielle, puisqu'aucun électeur adulte n'y est soumis. À l'inverse, le juriste s'inscrit en faux contre cette évolution. Il souligne l'incohérence qu'introduirait la dissociation entre droit de vote et majorité civile, et s'interroge sur l'indépendance d'un choix effectué par des mineurs encore dépendants de leurs parents. Tous les auteurs ne s'opposent toutefois pas sur l'essentiel : si le député voit dans le vote précoce un moyen d'ancrer l'habitude de participer, la sociologue conditionne ce bénéfice à un renforcement de l'éducation civique, faute duquel l'abstention serait seulement déplacée. Ainsi, au-delà de la question de l'âge, le corpus fait apparaître celle de la formation du citoyen, préalable à toute extension du suffrage.",
          bank: ["… dont rendent compte trois documents :", "Ces textes invitent à se demander si…", "… plaide pour…", "… rejoint en partie…", "À l'inverse,… s'inscrit en faux contre…", "Tous s'accordent toutefois sur…", "Ainsi,…"],
          checklist: ["Je n'ai donné aucune opinion personnelle.", "J'ai confronté les documents par thèmes, sans les résumer un par un.", "J'ai reformulé sans recopier de phrases.", "J'ai utilisé des verbes introducteurs précis."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Rapporter avec neutralité",
          prompt: "Écoutez et répétez avec un ton neutre.",
          items: [
            { s: "Le député plaide pour l'abaissement de l'âge du vote." },
            { s: "Le juriste s'inscrit en faux contre cette réforme." },
            { s: "La sociologue préconise une éducation civique renforcée." },
            { s: "La maturité des jeunes divise les auteurs." },
            { s: "Tous s'accordent sur l'importance de la formation." },
            { s: "Une synthèse ne prend parti pour personne." }
          ]
        },
        {
          type: "speak", title: "Revue de presse orale",
          prompt: "Présentez en deux minutes, de façon neutre, les positions de trois sources (articles, vidéos, discours) sur un débat d'actualité de votre choix. Confrontez-les par thèmes, sans donner votre avis.",
          language: ["Ce débat oppose…", "Selon…, …", "… rejoint cette analyse", "À l'inverse,…", "Tous s'accordent toutefois sur…", "Ainsi, le débat porte moins sur… que sur…"],
          seconds: 120,
          checklist: ["resté neutre ?", "confronté les sources par thèmes ?", "utilisé des verbes introducteurs variés ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux analyser les stratégies d'un discours politique.", review: "Explication : les stratégies ; Écouter" },
    { can: "Je peux utiliser des verbes introducteurs précis et neutres.", review: "Explication : les verbes pour rapporter" },
    { can: "Je peux condenser une idée par la nominalisation.", review: "Explication : condenser ; Écrire, activité 1" },
    { can: "Je peux confronter plusieurs documents par thèmes.", review: "Lire" },
    { can: "Je peux rédiger une synthèse objective.", review: "Écrire, activité 2" },
    { can: "Je peux présenter oralement une revue de presse neutre.", review: "Parler" }
  ]
};
