window.UNIT = {
  slug: "travail-de-demain",
  title: "Le travail de demain",
  level: "B2",
  subject: "Le travail",
  minutes: 60,
  focus: ["le télétravail et l'IA", "subjonctif après les sentiments, le doute, la volonté", "subjonctif ou indicatif ?", "subjonctif ou infinitif ?"],

  presentation: {
    scene: "💻🤖🏡",
    situation: "Une entreprise lyonnaise réfléchit à l'avenir du travail. Lors d'une réunion, la directrice et les employés discutent du **télétravail** et de l'arrivée de l'**intelligence artificielle**.",
    warmup: {
      prompt: "Qu'est-ce qui vous semble le plus important dans un futur emploi ?",
      options: ["le salaire", "le télétravail", "les horaires flexibles", "le sens du travail", "la sécurité de l'emploi", "l'ambiance", "les possibilités d'évolution", "l'impact écologique"],
      response: "Le monde du travail change vite. Voyons comment en parler avec nuance."
    },
    dialogueTitle: "La réunion d'équipe",
    dialogue: [
      { who: "Mme Lefèvre", line: "Je *souhaite que* chacun *puisse* donner son avis sur notre nouvelle organisation." },
      { who: "Julien", line: "Je suis *ravi que* nous *ayons* deux jours de télétravail. Mais *j'ai peur que* l'équipe *perde* sa cohésion." },
      { who: "Claire", line: "*Je ne crois pas que* ce *soit* un vrai problème. Il suffit d'organiser des moments ensemble." },
      { who: "Mme Lefèvre", line: "Et l'intelligence artificielle ? Certains *craignent qu'*elle *remplace* des postes." },
      { who: "Julien", line: "*Je doute qu'*elle *puisse* remplacer la créativité humaine. *Je pense qu'*elle *va* nous libérer des tâches répétitives." },
      { who: "Claire", line: "À condition que nous *soyons* formés ! *Il est essentiel que* l'entreprise *propose* des formations." },
      { who: "Mme Lefèvre", line: "C'est noté. *Je veux que* personne ne *se sente* exclu de cette transition." }
    ]
  },

  objectives: [
    "Je peux parler des transformations du monde du travail.",
    "Je peux utiliser le subjonctif après les verbes de sentiment, de volonté et de doute.",
    "Je peux choisir entre subjonctif et indicatif (*je pense que / je ne pense pas que*).",
    "Je peux choisir entre subjonctif et infinitif selon le sujet."
  ],

  explanation: {
    vocabTitle: "Le monde du travail",
    vocab: [
      { word: "le télétravail", icon: "🏡" }, { word: "le présentiel", icon: "🏢" }, { word: "l'automatisation", icon: "🤖" }, { word: "la reconversion", icon: "🔄" },
      { word: "la formation continue", icon: "📚" }, { word: "l'équilibre vie pro / vie perso", icon: "⚖️" }, { word: "l'épuisement professionnel", icon: "🔥" }, { word: "un freelance", icon: "🧑‍💻" },
      { word: "la précarité", icon: "📉" }, { word: "la flexibilité", icon: "🤸" }, { word: "le droit à la déconnexion", icon: "📵" }, { word: "les compétences numériques", icon: "💾" }
    ],
    grammar: [
      {
        title: "Les déclencheurs du subjonctif",
        head: ["Catégorie", "Exemples de verbes / expressions", "Phrase"],
        rows: [
          ["volonté", "vouloir que, souhaiter que, exiger que, préférer que", "Je *veux que* tu *viennes*."],
          ["sentiment", "être content / triste / ravi que, avoir peur que, regretter que", "Je *suis content qu'*il *réussisse*."],
          ["doute", "douter que, ne pas penser / croire que, il est possible que", "*Je doute qu'*elle *sache*."],
          ["nécessité / jugement", "il faut que, il est essentiel / normal / dommage que", "*Il est dommage qu'*il *parte*."],
          ["conjonctions", "pour que, avant que, à condition que, sans que", "Je t'explique *pour que* tu *comprennes*."]
        ]
      },
      {
        title: "Subjonctif ou indicatif ?",
        head: ["Indicatif (certitude)", "Subjonctif (doute)"],
        rows: [
          ["Je *pense qu'*il *est* compétent.", "Je *ne pense pas qu'*il *soit* compétent."],
          ["Je *suis sûr qu'*elle *viendra*.", "Je *ne suis pas sûr qu'*elle *vienne*."],
          ["Il est *certain / probable que* c'*est* vrai.", "Il est *possible / peu probable que* ce *soit* vrai."],
          ["*Après que* il *est* parti…", "*Avant qu'*il *parte*…"]
        ],
        note: "*Espérer que* est suivi de l'**indicatif** : *J'espère que tu vas bien.*"
      },
      {
        title: "Subjonctif ou infinitif ?",
        head: ["Deux sujets différents → subjonctif", "Même sujet → infinitif"],
        rows: [
          ["*Je* veux que *tu* partes.", "*Je* veux partir."],
          ["*Elle* a peur que *nous* soyons en retard.", "*Elle* a peur *d'*être en retard."],
          ["Je travaille pour que *mes enfants* aient une bonne vie.", "Je travaille pour *avoir* une bonne vie."]
        ]
      }
    ],
    watchOut: [
      ["Je veux que je parte.", "Je veux partir."],
      ["Je pense qu'il soit malade.", "Je pense qu'il est malade."],
      ["J'espère que tu sois bien.", "J'espère que tu vas bien."],
      ["Je doute qu'il vient.", "Je doute qu'il vienne."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Subjonctif, indicatif ou infinitif ?",
      items: ["Je ne crois pas qu'il [[puisse]] venir. (pouvoir)", "Je suis sûre qu'elle [[a]] raison. (avoir)", "Nous voulons [[réussir|reussir]]. (réussir)"]
    }
  },

  skills: {
    listening: {
      intro: "Écoutez un reportage radio sur le télétravail, trois ans après sa généralisation.",
      title: "Télétravail : le bilan",
      script: [
        { who: "La journaliste", line: "Trois ans après, que pensent les salariés du télétravail ? Écoutons-les." },
        { who: "Sophie", line: "Je suis contente de ne plus perdre deux heures dans les transports. Mais je regrette que mes collègues soient devenus des visages sur un écran." },
        { who: "Mehdi", line: "Moi, je ne pense pas que le télétravail soit fait pour tout le monde. J'ai besoin que quelqu'un me motive, sinon je procrastine !" },
        { who: "La journaliste", line: "Et du côté des managers ?" },
        { who: "M. Garnier", line: "Au début, j'avais peur que l'équipe soit moins productive. Aujourd'hui, je constate que c'est le contraire. Mais j'exige que tout le monde vienne au bureau le mardi." }
      ],
      activities: [
        {
          type: "match", title: "Qui ressent quoi ?",
          pairs: [["Sophie", "regrette le manque de contact"], ["Mehdi", "a besoin d'être motivé"], ["M. Garnier", "est surpris par la productivité"]]
        },
        {
          type: "gap", title: "Les verbes au subjonctif",
          prompt: "Complétez avec le verbe entendu.",
          items: ["Je regrette que mes collègues [[soient]] devenus des visages sur un écran.", "Je ne pense pas que le télétravail [[soit]] fait pour tout le monde.", "J'exige que tout le monde [[vienne]] au bureau le mardi."]
        }
      ]
    },

    reading: {
      intro: "Lisez cet extrait d'un article de magazine.",
      title: "L'IA va-t-elle nous voler notre travail ?",
      text: [
        "Selon une étude récente, près d'un quart des tâches actuelles pourraient être automatisées d'ici dix ans. Faut-il que nous ayons peur ? Les experts sont partagés.",
        "Pour l'économiste Laura Petit, « il est peu probable que l'intelligence artificielle provoque un chômage massif. Comme lors des révolutions industrielles précédentes, des métiers disparaîtront, mais d'autres apparaîtront ». Elle insiste cependant : « Il est indispensable que les États investissent dans la formation, pour que personne ne reste sur le bord du chemin. »",
        "Le sociologue Paul Durand est plus inquiet : « Je crains que les inégalités n'augmentent. Les travailleurs qualifiés profiteront de l'IA, tandis que les autres risquent de perdre leur emploi sans qu'on leur propose d'alternative. »"
      ],
      activities: [
        {
          type: "sort", title: "Optimiste ou inquiet ?",
          bins: ["Laura Petit (optimiste)", "Paul Durand (inquiet)"],
          items: [
            { text: "pas de chômage massif", bin: 0 }, { text: "de nouveaux métiers apparaîtront", bin: 0 },
            { text: "les inégalités vont augmenter", bin: 1 }, { text: "certains perdront leur emploi sans alternative", bin: 1 }
          ]
        },
        {
          type: "match", title: "Pourquoi le subjonctif ?",
          prompt: "Associez l'expression du texte et la raison du subjonctif.",
          pairs: [["il est peu probable que", "le doute"], ["il est indispensable que", "la nécessité"], ["pour que", "une conjonction de but"], ["je crains que", "un sentiment"]]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis écrivez à votre future entreprise.",
      activities: [
        {
          type: "rewrite", title: "Subjonctif ou infinitif ?",
          prompt: "Combinez les deux phrases.",
          items: [
            { q: "Je veux. Tu viens à la réunion.", a: ["Je veux que tu viennes à la réunion."] },
            { q: "Elle a peur. Elle échoue.", a: ["Elle a peur d'échouer."] },
            { q: "Nous sommes contents. Vous êtes là.", a: ["Nous sommes contents que vous soyez là."] },
            { q: "Je ne pense pas. Il a raison.", a: ["Je ne pense pas qu'il ait raison."] },
            { q: "Il est dommage. Ils partent.", a: ["Il est dommage qu'ils partent."] }
          ]
        },
        {
          type: "write", title: "Mon emploi idéal en 2035",
          prompt: "Une entreprise vous demande : « Comment imaginez-vous le travail idéal en 2035 ? » Exprimez vos souhaits, vos craintes et vos doutes. Utilisez au moins six déclencheurs du subjonctif différents.",
          minWords: 160, maxWords: 220,
          model: "En 2035, je souhaite que le travail soit plus humain, et non moins. D'abord, j'aimerais que chaque salarié puisse choisir entre le bureau et le télétravail selon ses besoins. Il est essentiel que les entreprises respectent le droit à la déconnexion : je ne veux pas que mes soirées soient envahies par les courriels. Ensuite, je suis convaincue que l'intelligence artificielle sera un outil utile. Cependant, je crains que certains métiers ne disparaissent trop vite. Il faudrait que les entreprises forment leurs employés avant que les changements n'arrivent. Enfin, je doute qu'un salaire élevé suffise à rendre les gens heureux : il est important que notre travail ait du sens. Bref, je rêve d'un monde professionnel où la technologie sert les personnes, et non l'inverse.",
          bank: ["Je souhaite que…", "Il est essentiel que…", "Je crains que…", "Je doute que…", "pour que…", "avant que…", "Je suis convaincu(e) que… (+ indicatif)"],
          checklist: ["J'ai utilisé six déclencheurs du subjonctif.", "J'ai utilisé au moins une fois l'indicatif après une certitude.", "J'ai utilisé l'infinitif quand le sujet est le même.", "Mon texte est organisé (d'abord, ensuite, enfin)."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Souhaits et doutes",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Je souhaite que chacun puisse donner son avis." },
            { s: "J'ai peur que l'équipe perde sa cohésion." },
            { s: "Je ne crois pas que ce soit un problème." },
            { s: "Je doute que l'intelligence artificielle remplace la créativité." },
            { s: "Il est essentiel que l'entreprise propose des formations." },
            { s: "J'espère que tout ira bien." }
          ]
        },
        {
          type: "speak", title: "Mon avis sur le télétravail",
          prompt: "Donnez votre opinion nuancée sur le télétravail : avantages, inconvénients, conditions pour qu'il fonctionne.",
          language: ["Je trouve que…", "Je ne pense pas que…", "Pour que le télétravail fonctionne, il faut que…", "À condition que…"],
          seconds: 90,
          checklist: ["nuancé votre opinion ?", "utilisé *pour que* ou *à condition que* ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux utiliser le vocabulaire du travail actuel.", review: "Explication : le vocabulaire" },
    { can: "Je peux utiliser le subjonctif après les verbes de volonté et de sentiment.", review: "Explication : les déclencheurs" },
    { can: "Je peux choisir entre subjonctif et indicatif.", review: "Explication : subjonctif ou indicatif ?" },
    { can: "Je peux choisir entre subjonctif et infinitif.", review: "Explication : subjonctif ou infinitif ? ; Écrire, activité 1" },
    { can: "Je peux comprendre un reportage ou un article sur le travail.", review: "Écouter et Lire" },
    { can: "Je peux exprimer mes souhaits, mes craintes et mes doutes de façon nuancée.", review: "Écrire, activité 2 et Parler" }
  ]
};
