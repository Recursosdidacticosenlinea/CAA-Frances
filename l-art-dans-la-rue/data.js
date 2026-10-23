window.UNIT = {
  slug: "l-art-dans-la-rue",
  title: "L'art dans la rue",
  level: "B2",
  subject: "Les arts",
  minutes: 60,
  focus: ["l'art urbain", "l'opposition : alors que, tandis que, au lieu de", "contrairement à, en revanche, par contre", "décrire et interpréter une œuvre"],

  presentation: {
    scene: "🎨🧱🖌️",
    situation: "Une grande fresque vient d'apparaître sur un mur du centre-ville. Certains habitants l'adorent, d'autres veulent qu'on l'efface. Une journaliste interroge les passants : **le street art, c'est de l'art ou du vandalisme ?**",
    warmup: {
      prompt: "Pour vous, le graffiti, c'est…",
      options: ["de l'art", "du vandalisme", "ça dépend", "une forme d'expression politique", "une façon d'embellir la ville", "une pollution visuelle"],
      response: "C'est un vrai débat ! Apprenons à opposer des points de vue avec finesse."
    },
    dialogueTitle: "Micro-trottoir devant la fresque",
    dialogue: [
      { who: "La journaliste", line: "Madame, que pensez-vous de cette fresque ?" },
      { who: "Mme Lambert", line: "Je la trouve magnifique. *Alors qu'*avant ce mur était gris et triste, maintenant il raconte une histoire." },
      { who: "La journaliste", line: "Et vous, monsieur ?" },
      { who: "M. Roche", line: "*Contrairement à* madame, je pense que c'est une dégradation. L'artiste aurait dû demander l'autorisation *au lieu de* peindre la nuit." },
      { who: "Mme Lambert", line: "*Pourtant*, des artistes comme Banksy sont exposés dans les musées !" },
      { who: "M. Roche", line: "*Certes*. *En revanche*, ce mur appartient à quelqu'un. *Tandis que* les musées choisissent les œuvres, ici, personne n'a rien choisi." }
    ]
  },

  objectives: [
    "Je peux utiliser le vocabulaire de l'art urbain.",
    "Je peux opposer deux faits avec *alors que, tandis que*.",
    "Je peux utiliser *au lieu de, contrairement à, en revanche, par contre*.",
    "Je peux décrire, interpréter et juger une œuvre d'art."
  ],

  explanation: {
    vocabTitle: "L'art urbain",
    vocab: [
      { word: "une fresque", icon: "🖼️" }, { word: "un graffiti", icon: "🎨" }, { word: "un pochoir", icon: "✂️" }, { word: "une bombe de peinture", icon: "🧴" },
      { word: "un mur", icon: "🧱" }, { word: "le vandalisme", icon: "🚫" }, { word: "embellir", icon: "✨" }, { word: "dégrader", icon: "💔" },
      { word: "éphémère", icon: "⏳" }, { word: "une œuvre engagée", icon: "✊" }, { word: "le premier plan / l'arrière-plan", icon: "🔭" }, { word: "évoquer", icon: "💭" }
    ],
    grammar: [
      {
        title: "Exprimer l'opposition",
        intro: "L'opposition compare deux faits **différents**, sans qu'un fait empêche l'autre (≠ concession).",
        head: ["Connecteur", "Construction", "Exemple"],
        rows: [
          ["*alors que / tandis que*", "+ indicatif", "Il adore la fresque, *alors que* sa femme la déteste."],
          ["*au lieu de*", "+ infinitif ou nom", "*Au lieu d'*effacer le mur, la ville l'a protégé."],
          ["*contrairement à*", "+ nom", "*Contrairement à* Paris, Lyon soutient le street art."],
          ["*en revanche / par contre*", "en début de phrase", "Les couleurs sont belles. *En revanche*, le message est confus."],
          ["*au contraire*", "pour corriger", "Ce n'est pas du vandalisme ; *au contraire*, c'est un cadeau à la ville."]
        ],
        note: "*Par contre* est courant à l'oral ; *en revanche* est plus soutenu."
      },
      {
        title: "Décrire et interpréter une œuvre",
        head: ["Étape", "Expressions"],
        rows: [
          ["décrire", "Au premier plan, on voit… / À l'arrière-plan, il y a… / Les couleurs dominantes sont…"],
          ["interpréter", "L'artiste a voulu montrer… / Cette œuvre évoque… / On peut y voir une critique de…"],
          ["juger", "Ce qui me frappe, c'est… / Je trouve cette œuvre… parce que… / Elle me laisse indifférent(e)."]
        ]
      }
    ],
    watchOut: [
      ["Alors qu'il soit content…", "Alors qu'il est content…"],
      ["Contrairement de Paris…", "Contrairement à Paris…"],
      ["Au lieu que peindre…", "Au lieu de peindre…"],
      ["En revanche, mais le message…", "En revanche, le message…"]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez.",
      items: ["Il peint la nuit, [[alors que|tandis que]] son ami peint le jour.", "[[Au lieu d']]effacer la fresque, la mairie l'a restaurée.", "[[Contrairement]] à son frère, elle adore l'art moderne."]
    }
  },

  skills: {
    listening: {
      intro: "Écoutez une guide présenter une visite de street art à Paris.",
      title: "Visite : le street art à Paris",
      script: [
        { who: "La guide", line: "Bienvenue dans le 13ᵉ arrondissement, véritable musée à ciel ouvert ! Alors qu'il y a vingt ans ces immeubles étaient sans couleur, ils accueillent aujourd'hui des fresques immenses." },
        { who: "La guide", line: "Regardez celle-ci : au premier plan, un enfant tient un ballon ; à l'arrière-plan, la ville est grise. L'artiste a voulu évoquer l'espoir dans un monde urbain froid." },
        { who: "La guide", line: "Contrairement aux graffitis illégaux, ces œuvres ont été commandées par la mairie. En revanche, plus loin, vous verrez des pochoirs faits sans autorisation." },
        { who: "La guide", line: "Certains habitants y voient une richesse, tandis que d'autres trouvent que cela attire trop de touristes. Au lieu de juger, je vous invite à observer et à vous faire votre propre avis." }
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Il y a vingt ans, les immeubles étaient déjà colorés.", a: false },
            { s: "Sur la fresque, l'enfant est au premier plan.", a: true },
            { s: "Toutes les œuvres du quartier sont légales.", a: false },
            { s: "La guide demande aux visiteurs de se faire leur propre avis.", a: true }
          ]
        },
        {
          type: "gap", title: "Les connecteurs d'opposition",
          prompt: "Complétez avec le connecteur entendu.",
          items: ["[[Alors qu']]il y a vingt ans ces immeubles étaient sans couleur…", "[[Contrairement]] aux graffitis illégaux, ces œuvres ont été commandées.", "[[En revanche]], plus loin, vous verrez des pochoirs.", "[[Au lieu de]] juger, je vous invite à observer."]
        }
      ]
    },

    reading: {
      intro: "Lisez cet article d'un magazine culturel.",
      title: "Le street art entre au musée",
      text: [
        "Longtemps considéré comme du vandalisme, le street art est aujourd'hui exposé dans les plus grands musées. Alors que, dans les années 1980, les graffeurs fuyaient la police, certains vendent désormais leurs œuvres des millions d'euros.",
        "Ce succès divise. Pour certains artistes, c'est une reconnaissance méritée. D'autres, en revanche, dénoncent une trahison : « Le street art est né dans la rue, pour tout le monde et gratuitement. Au lieu de rester accessible, il devient un produit de luxe », regrette un graffeur anonyme.",
        "Contrairement aux tableaux classiques, les œuvres de rue sont éphémères : la pluie, le soleil ou un nouveau propriétaire peuvent les faire disparaître. C'est peut-être là leur vraie force : elles nous rappellent que la beauté ne dure pas."
      ],
      activities: [
        {
          type: "sort", title: "Arguments",
          bins: ["Le street art au musée : une bonne chose", "Le street art au musée : une trahison"],
          items: [
            { text: "une reconnaissance méritée", bin: 0 }, { text: "les artistes peuvent vivre de leur art", bin: 0 },
            { text: "il devient un produit de luxe", bin: 1 }, { text: "il n'est plus gratuit pour tous", bin: 1 }, { text: "il quitte la rue où il est né", bin: 1 }
          ]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Dans les années 1980, les graffeurs vendaient leurs œuvres très cher.", a: false },
            { s: "Le graffeur anonyme est content du succès du street art.", a: false },
            { s: "Selon l'article, les œuvres de rue sont éphémères.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Reformulez, puis analysez une œuvre.",
      activities: [
        {
          type: "rewrite", title: "Reformulez l'opposition",
          prompt: "Reformulez avec le connecteur indiqué.",
          items: [
            { q: "Paris accepte le street art. Londres le refuse. (alors que)", a: ["Paris accepte le street art, alors que Londres le refuse."] },
            { q: "Il a effacé le mur. Il aurait pu le protéger. (au lieu de)", a: ["Au lieu de protéger le mur, il l'a effacé.", "Il a effacé le mur au lieu de le protéger."] },
            { q: "Les musées sont payants. La rue est gratuite. (contrairement à)", a: ["Contrairement aux musées, la rue est gratuite."] },
            { q: "Les couleurs sont superbes. Le message est banal. (en revanche)", a: ["Les couleurs sont superbes. En revanche, le message est banal."] }
          ]
        },
        {
          type: "write", title: "Analyse d'une œuvre",
          prompt: "Choisissez une œuvre d'art urbain de votre ville (ou une œuvre célèbre). Décrivez-la, interprétez-la et donnez votre avis sur la question : art ou vandalisme ? Utilisez au moins quatre connecteurs d'opposition.",
          minWords: 160, maxWords: 230,
          model: "Sur un mur du quartier de Xanenetla, à Puebla, une fresque représente une vieille femme qui tisse un rebozo. Au premier plan, ses mains sont immenses et ridées, tandis qu'à l'arrière-plan apparaissent les volcans Popocatépetl et Iztaccíhuatl. Les couleurs dominantes sont le rose et le bleu. L'artiste a voulu rendre hommage aux artisanes, alors que leur travail est souvent invisible. Contrairement aux graffitis illégaux, cette œuvre fait partie d'un projet communautaire : les habitants ont choisi les thèmes avec les artistes. Certains critiquent l'arrivée de touristes dans ce quartier tranquille. En revanche, beaucoup de familles ont ouvert des petits commerces grâce à eux. Pour moi, il ne faut pas opposer art et vandalisme : au lieu de juger la technique, il faut se demander si l'œuvre respecte les habitants. Ici, c'est clairement le cas.",
          bank: ["Au premier plan,…", "À l'arrière-plan,…", "L'artiste a voulu…", "alors que / tandis que", "contrairement à…", "en revanche,…", "au lieu de…"],
          checklist: ["J'ai décrit l'œuvre (plans, couleurs).", "J'ai proposé une interprétation.", "J'ai utilisé quatre connecteurs d'opposition.", "J'ai donné mon avis sur le débat."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Opposez les points de vue",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Il adore cette fresque, alors que sa femme la déteste." },
            { s: "Au lieu d'effacer le mur, la ville l'a protégé." },
            { s: "Contrairement aux musées, la rue est gratuite." },
            { s: "En revanche, le message me semble confus." },
            { s: "Au premier plan, un enfant tient un ballon." },
            { s: "Cette œuvre évoque l'espoir dans un monde urbain." }
          ]
        },
        {
          type: "speak", title: "Art ou vandalisme ?",
          prompt: "Montrez une photo d'une œuvre de rue. Décrivez-la, puis donnez votre avis en opposant deux points de vue (deux minutes).",
          language: ["Sur cette photo, au premier plan,…", "Ce qui me frappe, c'est…", "Certains pensent que…, alors que d'autres…", "En revanche,…", "Pour ma part,…"],
          seconds: 120,
          checklist: ["décrit l'œuvre ?", "opposé deux points de vue ?", "donné votre avis ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux utiliser le vocabulaire de l'art urbain.", review: "Explication : le vocabulaire" },
    { can: "Je peux utiliser *alors que* et *tandis que*.", review: "Explication : exprimer l'opposition" },
    { can: "Je peux utiliser *au lieu de, contrairement à, en revanche*.", review: "Explication : exprimer l'opposition ; Écrire, activité 1" },
    { can: "Je peux distinguer opposition et concession.", review: "Explication : exprimer l'opposition (intro) et l'unité « Le grand débat »" },
    { can: "Je peux comprendre une visite guidée ou un article sur l'art.", review: "Écouter et Lire" },
    { can: "Je peux décrire, interpréter et juger une œuvre.", review: "Écrire, activité 2 et Parler" }
  ]
};
