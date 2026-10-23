window.UNIT = {
  slug: "le-grand-debat",
  title: "Le grand débat",
  level: "B2",
  subject: "Argumenter",
  minutes: 60,
  focus: ["la concession", "bien que + subjonctif", "même si, pourtant, néanmoins, avoir beau", "structurer une argumentation"],

  presentation: {
    scene: "🎙️⚖️🗳️",
    situation: "La ligue d'improvisation et de débat de l'université organise sa finale. Le sujet : **« Les études universitaires devraient-elles être entièrement gratuites ? »** Deux équipes s'affrontent.",
    warmup: {
      prompt: "Selon vous, qui devrait financer les études supérieures ?",
      options: ["l'État", "les étudiants", "les familles", "les entreprises", "un système mixte", "les bourses selon le mérite", "les bourses selon les revenus"],
      response: "C'est un vrai sujet de société. Voyons comment argumenter avec nuance."
    },
    dialogueTitle: "La finale du débat",
    dialogue: [
      { who: "La modératrice", line: "Équipe « pour », vous avez la parole." },
      { who: "Antoine", line: "L'éducation est un droit fondamental. *Bien que* la gratuité *ait* un coût pour l'État, c'est un investissement pour toute la société." },
      { who: "La modératrice", line: "Équipe « contre », votre réponse ?" },
      { who: "Nadia", line: "Nous reconnaissons l'importance de l'éducation. *Néanmoins*, si tout est gratuit, les universités manqueront de moyens." },
      { who: "Antoine", line: "*Même si* les budgets sont limités, de nombreux pays nordiques prouvent que c'est possible." },
      { who: "Nadia", line: "*Certes*, *mais* ces pays ont des impôts très élevés. *On a beau* parler d'égalité, quelqu'un doit payer !" },
      { who: "La modératrice", line: "Merci. Le jury va délibérer." }
    ]
  },

  objectives: [
    "Je peux exprimer une concession avec différents connecteurs.",
    "Je peux utiliser *bien que* + subjonctif.",
    "Je peux réfuter un argument poliment.",
    "Je peux construire une argumentation structurée et nuancée."
  ],

  explanation: {
    vocabTitle: "Le vocabulaire de l'argumentation",
    vocab: [
      { word: "une thèse", icon: "📌" }, { word: "une antithèse", icon: "🔄" }, { word: "réfuter", icon: "🙅" }, { word: "nuancer", icon: "🎚️" },
      { word: "un enjeu", icon: "🎯" }, { word: "concéder", icon: "🤲" }, { word: "soutenir (une idée)", icon: "🙋" }, { word: "un contre-argument", icon: "↩️" },
      { word: "la gratuité", icon: "🆓" }, { word: "un impôt", icon: "🧾" }, { word: "l'égalité des chances", icon: "⚖️" }, { word: "le mérite", icon: "🏅" }
    ],
    grammar: [
      {
        title: "La concession",
        intro: "La concession reconnaît un fait ou un argument, mais affirme que la conclusion reste valable.",
        head: ["Connecteur", "Construction", "Exemple"],
        rows: [
          ["*bien que / quoique*", "+ subjonctif", "*Bien que* ce *soit* cher, c'est utile."],
          ["*même si*", "+ indicatif", "*Même si* c'*est* cher, c'est utile."],
          ["*pourtant / cependant / néanmoins / toutefois*", "phrase. + Connecteur, …", "C'est cher. *Pourtant*, c'est utile."],
          ["*malgré*", "+ nom", "*Malgré* le prix, c'est utile."],
          ["*avoir beau*", "+ infinitif", "*On a beau* critiquer le prix, c'est utile."],
          ["*certes… mais*", "deux propositions", "*Certes*, c'est cher, *mais* c'est utile."]
        ]
      },
      {
        title: "Réfuter avec courtoisie",
        head: ["Pour…", "Expressions"],
        rows: [
          ["concéder", "Il est vrai que… / Je reconnais que… / Je vous l'accorde, …"],
          ["réfuter", "Il me semble pourtant que… / Ce raisonnement ne tient pas compte de… / Rien ne prouve que…"],
          ["insister", "Il faut souligner que… / J'insiste sur le fait que…"],
          ["conclure", "En définitive, … / Tout bien considéré, … / Il apparaît donc que…"]
        ],
        note: "*Rien ne prouve que* et *Je ne pense pas que* sont suivis du subjonctif."
      }
    ],
    watchOut: [
      ["Bien que c'est difficile, je continue.", "Bien que ce soit difficile, je continue."],
      ["Même si ce soit difficile…", "Même si c'est difficile…"],
      ["Malgré qu'il pleut…", "Bien qu'il pleuve… / Malgré la pluie…"],
      ["J'ai beau de travailler.", "J'ai beau travailler."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez.",
      items: ["Bien qu'il [[soit]] tard, nous continuons. (être)", "[[Malgré]] la fatigue, elle a gagné.", "Il a [[beau]] étudier, il n'y arrive pas."]
    }
  },

  skills: {
    listening: {
      intro: "Écoutez l'extrait d'un débat radiophonique sur la semaine de quatre jours au travail.",
      title: "Débat : travailler quatre jours par semaine ?",
      script: [
        { who: "Le présentateur", line: "Madame Roux, vous êtes économiste. La semaine de quatre jours, une bonne idée ?" },
        { who: "Mme Roux", line: "Bien qu'elle soit séduisante, cette idée pose des problèmes. Certaines entreprises, comme les hôpitaux, ne peuvent pas fermer un jour de plus." },
        { who: "Le présentateur", line: "Monsieur Benali, vous dirigez une start-up qui l'a adoptée." },
        { who: "M. Benali", line: "Je reconnais que ce n'est pas adapté à tous les secteurs. Pourtant, chez nous, la productivité a augmenté de 15 % et les arrêts maladie ont diminué." },
        { who: "Mme Roux", line: "Certes, mais rien ne prouve que ces résultats durent dans le temps." },
        { who: "M. Benali", line: "On a beau multiplier les objections, les salariés sont plus heureux. Et un salarié heureux est un salarié efficace." }
      ],
      activities: [
        {
          type: "sort", title: "Qui défend quoi ?",
          bins: ["Mme Roux (plutôt contre)", "M. Benali (pour)"],
          items: [
            { text: "pas adapté aux hôpitaux", bin: 0 }, { text: "résultats peut-être temporaires", bin: 0 },
            { text: "productivité en hausse", bin: 1 }, { text: "moins d'arrêts maladie", bin: 1 }, { text: "salariés plus heureux", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Les connecteurs de concession",
          prompt: "Complétez avec le connecteur entendu.",
          items: ["[[Bien qu']]elle soit séduisante, cette idée pose des problèmes.", "[[Pourtant]], chez nous, la productivité a augmenté.", "[[Certes]], mais rien ne prouve que ces résultats durent.", "On a [[beau]] multiplier les objections…"]
        }
      ]
    },

    reading: {
      intro: "Lisez cette tribune publiée dans un quotidien.",
      title: "Tribune : faut-il interdire les voitures en centre-ville ?",
      text: [
        "Depuis quelques années, de nombreuses villes européennes ferment leur centre aux voitures. Bien que cette mesure soit souvent critiquée par les commerçants, elle présente des avantages incontestables : moins de pollution, moins de bruit, plus d'espaces pour les piétons.",
        "Certes, tout le monde ne peut pas se déplacer à vélo. Les personnes âgées ou handicapées ont besoin de solutions adaptées. Néanmoins, ces difficultés ne justifient pas le statu quo : il suffit de développer des navettes électriques et des transports publics accessibles.",
        "On a beau dénoncer une « écologie punitive », les chiffres parlent d'eux-mêmes : à Pontevedra, en Espagne, la piétonnisation a permis de réduire les émissions de CO₂ de 70 %. Malgré les réticences initiales, les habitants ne voudraient plus revenir en arrière."
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "L'auteur est favorable à la fermeture des centres-villes aux voitures.", a: true },
            { s: "L'auteur ignore les problèmes des personnes âgées.", a: false },
            { s: "À Pontevedra, les émissions de CO₂ ont baissé de 70 %.", a: true },
            { s: "Les habitants de Pontevedra regrettent la mesure.", a: false }
          ]
        },
        {
          type: "match", title: "Connecteur et construction",
          prompt: "Associez le connecteur du texte et sa construction.",
          pairs: [["Bien que", "+ subjonctif"], ["Certes", "… mais / néanmoins"], ["On a beau", "+ infinitif"], ["Malgré", "+ nom"]]
        }
      ]
    },

    writing: {
      intro: "Reformulez, puis rédigez votre essai argumentatif.",
      activities: [
        {
          type: "rewrite", title: "Reformulez la concession",
          prompt: "Reformulez avec le connecteur indiqué.",
          items: [
            { q: "Il pleut, mais nous sortons. (bien que)", a: ["Bien qu'il pleuve, nous sortons.", "Nous sortons bien qu'il pleuve."] },
            { q: "Elle est fatiguée, mais elle travaille. (même si)", a: ["Même si elle est fatiguée, elle travaille.", "Elle travaille même si elle est fatiguée."] },
            { q: "Il y a la crise, mais l'entreprise embauche. (malgré)", a: ["Malgré la crise, l'entreprise embauche.", "L'entreprise embauche malgré la crise."] },
            { q: "Je cherche, mais je ne trouve pas. (avoir beau)", a: ["J'ai beau chercher, je ne trouve pas."] }
          ]
        },
        {
          type: "write", title: "Essai argumentatif",
          prompt: "« Les études universitaires devraient-elles être entièrement gratuites ? » Rédigez un essai : introduction, deux arguments, une concession et sa réfutation, conclusion. Utilisez au moins quatre structures de concession différentes.",
          minWords: 180, maxWords: 250,
          model: "L'accès à l'enseignement supérieur est un enjeu majeur pour l'égalité des chances. Faut-il pour autant le rendre entièrement gratuit ? Je le pense, et ce pour deux raisons. D'abord, l'éducation est un investissement collectif : une population mieux formée est plus innovante et plus productive. Ensuite, la gratuité permet aux étudiants de milieux modestes de choisir leurs études selon leurs talents, et non selon leurs moyens. Certes, la gratuité a un coût considérable pour l'État. Bien que cet argument soit sérieux, il ne tient pas compte des bénéfices à long terme : un diplômé paie, au cours de sa vie, beaucoup plus d'impôts. On a beau dénoncer le poids de la dépense publique, des pays comme la Finlande ou l'Allemagne montrent que ce modèle est viable. En définitive, malgré les difficultés budgétaires, la gratuité de l'université me semble être un choix de société juste et rentable.",
          bank: ["Il est vrai que…", "Certes…, mais…", "Bien que… (+ subj.)", "Même si…", "Malgré…", "On a beau…", "Néanmoins,", "En définitive,"],
          checklist: ["Mon essai a une introduction et une conclusion.", "J'ai donné au moins deux arguments.", "J'ai concédé un argument adverse et je l'ai réfuté.", "J'ai utilisé quatre structures de concession différentes."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Argumentez avec nuance",
          prompt: "Écoutez et répétez avec une intonation de débat.",
          items: [
            { s: "Bien que ce soit cher, c'est un investissement." },
            { s: "Même si les budgets sont limités, c'est possible." },
            { s: "Certes, mais quelqu'un doit payer." },
            { s: "On a beau critiquer cette idée, elle fonctionne." },
            { s: "Je vous l'accorde, mais ce raisonnement est incomplet." },
            { s: "En définitive, la gratuité me semble juste." }
          ]
        },
        {
          type: "speak", title: "Plaidoyer de deux minutes",
          prompt: "Défendez une cause qui vous tient à cœur en deux minutes. Anticipez une objection et répondez-y.",
          language: ["Je souhaite défendre…", "On pourrait m'objecter que…", "Certes,… mais…", "C'est pourquoi…"],
          seconds: 120,
          checklist: ["anticipé une objection ?", "conclu clairement ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux utiliser *bien que* + subjonctif.", review: "Explication : la concession" },
    { can: "Je peux varier les connecteurs de concession.", review: "Explication : la concession ; Écrire, activité 1" },
    { can: "Je peux réfuter un argument avec courtoisie.", review: "Explication : réfuter avec courtoisie" },
    { can: "Je peux identifier la position d'un locuteur dans un débat.", review: "Écouter" },
    { can: "Je peux comprendre une tribune argumentative.", review: "Lire" },
    { can: "Je peux rédiger un essai argumentatif structuré.", review: "Écrire, activité 2" }
  ]
};
