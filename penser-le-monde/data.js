window.UNIT = {
  slug: "penser-le-monde",
  title: "Penser le monde",
  level: "C2",
  subject: "La philosophie",
  minutes: 70,
  focus: ["la dissertation", "problématiser un sujet", "le plan dialectique", "les connecteurs soutenus : dès lors, partant, aussi + inversion, encore faut-il"],

  presentation: {
    scene: "🤔📚🦉",
    situation: "En classe préparatoire, une professeure de philosophie corrige les copies d'une dissertation : **« Peut-on être libre sans les autres ? »** Elle explique à ses étudiants ce qui fait une excellente dissertation à la française.",
    warmup: {
      prompt: "Selon vous, qu'est-ce que la liberté ?",
      options: ["faire ce que je veux", "ne dépendre de personne", "choisir ma vie", "obéir à des règles justes", "penser par moi-même", "être en sécurité", "c'est une illusion"],
      response: "Autant de définitions que de philosophes ! Apprenons à transformer cette diversité en réflexion structurée."
    },
    dialogueTitle: "La correction des copies",
    dialogue: [
      { who: "La professeure", line: "Votre introduction ne doit pas répondre à la question : elle doit en montrer *la difficulté*. C'est ce qu'on appelle *problématiser*." },
      { who: "Théo", line: "Donc il faut montrer que la réponse n'est pas évidente ?" },
      { who: "La professeure", line: "Exactement. *D'un côté*, autrui semble limiter ma liberté. *De l'autre*, sans les autres, je n'apprendrais ni à parler ni à penser. *Dès lors*, une tension apparaît." },
      { who: "Camille", line: "Et le plan ? Thèse, antithèse, synthèse ?" },
      { who: "La professeure", line: "Oui, mais la troisième partie ne doit pas être un simple compromis. Elle doit *dépasser* l'opposition. *Encore faut-il* définir précisément les termes du sujet." },
      { who: "Théo", line: "*Aussi* la définition de la liberté *est-elle* la clé de tout ?" },
      { who: "La professeure", line: "Voilà. Vous parlez déjà comme une copie de concours !" }
    ]
  },

  objectives: [
    "Je peux analyser un sujet et en définir les termes.",
    "Je peux formuler une problématique.",
    "Je peux construire un plan dialectique qui dépasse l'opposition.",
    "Je peux utiliser des connecteurs et des tournures du registre soutenu."
  ],

  explanation: {
    vocabTitle: "Le vocabulaire philosophique",
    vocab: [
      { word: "autrui", icon: "👥" }, { word: "la liberté", icon: "🕊️" }, { word: "la conscience", icon: "💡" }, { word: "le devoir", icon: "⚖️" },
      { word: "une thèse", icon: "📌" }, { word: "un paradoxe", icon: "🔀" }, { word: "un concept", icon: "🧠" }, { word: "la problématique", icon: "❓" },
      { word: "dépasser", icon: "⤴️" }, { word: "l'aliénation", icon: "⛓️" }, { word: "l'autonomie", icon: "🧭" }, { word: "la nécessité", icon: "🔒" }
    ],
    grammar: [
      {
        title: "La structure de la dissertation",
        head: ["Étape", "Contenu", "Formules"],
        rows: [
          ["introduction", "accroche, définition des termes, problématique, annonce du plan", "Il semble aller de soi que… Pourtant… Dès lors, on peut se demander si…"],
          ["partie I (thèse)", "la réponse la plus évidente", "Il faut d'abord reconnaître que…"],
          ["partie II (antithèse)", "les limites de la thèse", "Cette conception se heurte cependant à…"],
          ["partie III (dépassement)", "une nouvelle définition qui résout la tension", "Peut-être faut-il alors repenser…"],
          ["conclusion", "réponse nuancée, ouverture", "Ainsi, loin de…, … Reste à savoir si…"]
        ]
      },
      {
        title: "Les connecteurs et tournures soutenus",
        head: ["Tournure", "Sens", "Exemple"],
        rows: [
          ["*dès lors*", "par conséquent, à partir de là", "*Dès lors*, la liberté ne peut être solitaire."],
          ["*partant*", "par conséquent (très soutenu)", "Il pense, et *partant*, il doute."],
          ["*aussi* + inversion", "c'est pourquoi", "*Aussi* faut-il définir les termes."],
          ["*encore faut-il* que + subj.", "mais il est nécessaire que", "*Encore faut-il* que les règles soient justes."],
          ["*peut-être* + inversion", "atténuation en tête de phrase", "*Peut-être* devons-nous repenser la question."],
          ["*reste à* + infinitif / *reste que*", "il reste à… / néanmoins", "*Reste à* savoir si… / *Reste que* le problème demeure."],
          ["*force est de constater que*", "on est obligé de constater", "*Force est de constater que* la thèse est fragile."]
        ],
        note: "Après *aussi*, *peut-être*, *sans doute*, *à peine*, *ainsi* en tête de phrase, le registre soutenu inverse le sujet : *Ainsi s'achève…*"
      }
    ],
    watchOut: [
      ["Aussi la liberté est essentielle. (= c'est pourquoi)", "Aussi la liberté est-elle essentielle."],
      ["Dans cette dissertation, je vais parler de…", "Il conviendra d'examiner d'abord… puis…"],
      ["Encore faut-il que les règles sont justes.", "Encore faut-il que les règles soient justes."],
      ["Partie III : c'est un peu les deux.", "Partie III : dépasser l'opposition par une nouvelle définition."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez.",
      items: ["Aussi [[faut-il]] définir les termes du sujet. (falloir)", "Encore faut-il que la loi [[soit]] juste. (être)", "[[Force]] est de constater que la question demeure."]
    }
  },

  skills: {
    listening: {
      intro: "Écoutez un extrait de cours sur la liberté et autrui.",
      title: "Cours : « L'enfer, c'est les autres » ?",
      script: [
        { who: "La professeure", line: "On cite souvent la formule de Sartre : « L'enfer, c'est les autres. » On la comprend, à tort, comme une condamnation d'autrui." },
        { who: "La professeure", line: "Or Sartre a précisé lui-même le sens de sa pièce : si nos rapports avec autrui sont viciés, alors l'autre devient l'enfer. Le regard d'autrui me juge, me fige, mais il est aussi indispensable pour me connaître." },
        { who: "La professeure", line: "Dès lors, la question n'est pas de fuir les autres, ce qui serait impossible, mais de transformer notre rapport à eux." },
        { who: "La professeure", line: "Aussi peut-on soutenir que la liberté n'est pas l'absence de liens, mais la capacité de choisir ses liens. Encore faut-il que ces liens soient fondés sur la reconnaissance mutuelle." }
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "La formule de Sartre est souvent mal comprise.", a: true },
            { s: "Selon la professeure, il faut fuir les autres pour être libre.", a: false },
            { s: "Le regard d'autrui est à la fois un jugement et une nécessité.", a: true },
            { s: "La liberté est définie comme la capacité de choisir ses liens.", a: true }
          ]
        },
        {
          type: "gap", title: "Les tournures soutenues",
          items: ["[[Dès lors|Des lors]], la question n'est pas de fuir les autres.", "[[Aussi]] peut-on soutenir que la liberté n'est pas l'absence de liens.", "[[Encore faut-il]] que ces liens soient fondés sur la reconnaissance."]
        }
      ]
    },

    reading: {
      intro: "Lisez cette introduction de dissertation rédigée par une étudiante.",
      title: "Introduction : « Peut-on être libre sans les autres ? »",
      text: [
        "Robinson, sur son île, semble jouir d'une liberté absolue : nul ne lui impose de loi, nul ne le juge. Il paraît dès lors aller de soi que les autres constituent un obstacle à notre liberté, puisque leur présence limite nos désirs et contraint nos actions.",
        "Pourtant, Robinson n'a de cesse de reconstruire une société : il compte les jours, cultive la terre selon les techniques apprises, et attend un compagnon. Force est de constater que, même seul, il demeure façonné par les autres. Aussi la question se pose-t-elle : la liberté consiste-t-elle à échapper aux autres, ou ne se construit-elle qu'avec eux ?",
        "Nous verrons d'abord en quoi autrui peut apparaître comme une limite à ma liberté, avant de montrer que cette liberté même est impensable sans lui. Peut-être faudra-t-il alors redéfinir la liberté non comme indépendance, mais comme autonomie partagée."
      ],
      activities: [
        {
          type: "match", title: "Les étapes de l'introduction",
          prompt: "Associez chaque passage à sa fonction.",
          pairs: [["« Robinson, sur son île… »", "accroche"], ["« Il paraît dès lors aller de soi que… »", "première approche (thèse apparente)"], ["« Pourtant, Robinson n'a de cesse… »", "remise en cause"], ["« Aussi la question se pose-t-elle… »", "problématique"], ["« Nous verrons d'abord… »", "annonce du plan"]]
        },
        {
          type: "sort", title: "Repérez les tournures",
          bins: ["Inversion du sujet", "Autre tournure soutenue"],
          items: [
            { text: "Aussi la question se pose-t-elle", bin: 0 }, { text: "Peut-être faudra-t-il", bin: 0 },
            { text: "Force est de constater que", bin: 1 }, { text: "n'a de cesse de", bin: 1 }, { text: "Il paraît aller de soi que", bin: 1 }
          ]
        }
      ]
    },

    writing: {
      intro: "Élevez le registre, puis rédigez votre introduction et votre plan.",
      activities: [
        {
          type: "rewrite", title: "Registre soutenu",
          prompt: "Réécrivez avec la tournure indiquée.",
          items: [
            { q: "C'est pourquoi il faut définir le mot « liberté ». (aussi + inversion)", a: ["Aussi faut-il définir le mot « liberté ».", "Aussi faut-il définir le mot liberté."] },
            { q: "Peut-être que nous devons repenser la question. (peut-être + inversion)", a: ["Peut-être devons-nous repenser la question."] },
            { q: "Mais il faut que les règles soient justes. (encore faut-il)", a: ["Encore faut-il que les règles soient justes."] },
            { q: "On est obligé de constater que la thèse est fragile. (force est de)", a: ["Force est de constater que la thèse est fragile."] }
          ]
        },
        {
          type: "write", title: "Introduction et plan détaillé",
          prompt: "Choisissez un sujet : « Le progrès technique rend-il l'homme plus libre ? », « Peut-on se mettre à la place d'autrui ? » ou « Le bonheur est-il une affaire privée ? ». Rédigez l'introduction complète (accroche, définitions, problématique, annonce du plan), puis le plan détaillé en trois parties avec une idée directrice par partie.",
          minWords: 250, maxWords: 350,
          model: "Introduction. Il suffit aujourd'hui d'un téléphone pour traverser le monde, apprendre une langue ou soigner une maladie à distance. Le progrès technique semble ainsi accroître sans cesse notre pouvoir d'agir et, partant, notre liberté. Pourtant, ces mêmes outils nous rendent dépendants : nous consultons nos écrans plusieurs fois par heure, et des algorithmes orientent nos choix à notre insu. Si l'on entend par liberté la capacité d'agir sans contrainte, le progrès technique paraît l'étendre ; si l'on y voit plutôt la capacité de se gouverner soi-même, il pourrait bien la menacer. Dès lors, la question se pose : le progrès technique nous libère-t-il, ou nous asservit-il à de nouvelles nécessités ? Nous verrons d'abord que la technique affranchit l'homme des contraintes naturelles, avant de montrer qu'elle crée de nouvelles formes de dépendance. Peut-être faudra-t-il alors concevoir la liberté non comme un effet automatique du progrès, mais comme l'usage réfléchi que nous en faisons. Plan détaillé. I. La technique libère l'homme de la nature : elle réduit la souffrance, le travail pénible et la distance (exemples : médecine, machines, communications). II. Elle engendre pourtant de nouvelles servitudes : dépendance aux outils, surveillance, perte de savoir-faire ; force est de constater que l'outil peut devenir maître. III. La liberté ne réside pas dans l'outil mais dans le jugement : encore faut-il une éducation qui apprenne à maîtriser la technique plutôt qu'à la subir.",
          bank: ["Il semble aller de soi que…", "Pourtant,…", "Si l'on entend par… ; si l'on y voit plutôt…", "Dès lors, la question se pose :", "Nous verrons d'abord… avant de montrer…", "Peut-être faudra-t-il alors…", "Encore faut-il que…"],
          checklist: ["J'ai défini les termes du sujet.", "Ma problématique fait apparaître une tension.", "Ma troisième partie dépasse l'opposition.", "J'ai utilisé quatre tournures soutenues dont une inversion."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Le ton de la réflexion",
          prompt: "Écoutez et répétez avec un ton posé.",
          items: [
            { s: "Aussi faut-il définir les termes du sujet." },
            { s: "Dès lors, une tension apparaît." },
            { s: "Encore faut-il que les règles soient justes." },
            { s: "Peut-être devons-nous repenser la question." },
            { s: "Force est de constater que la thèse est fragile." },
            { s: "Reste à savoir si la liberté est possible." }
          ]
        },
        {
          type: "speak", title: "Exposé oral : un sujet en trois minutes",
          prompt: "Présentez oralement votre introduction et votre plan, comme lors d'un oral de concours. Montrez la tension du sujet et justifiez votre plan.",
          language: ["Le sujet nous invite à réfléchir sur…", "Il semble évident que… Pourtant…", "Dès lors, on peut se demander si…", "Dans un premier temps,… Dans un deuxième temps,… Enfin,…", "Peut-être faut-il…"],
          seconds: 180,
          checklist: ["défini les termes ?", "formulé une problématique claire ?", "annoncé un plan qui dépasse l'opposition ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux analyser un sujet et en définir les termes.", review: "Explication : la structure de la dissertation" },
    { can: "Je peux formuler une problématique.", review: "Lire, activité 1" },
    { can: "Je peux construire un plan dialectique avec dépassement.", review: "Explication : la structure ; Écrire, activité 2" },
    { can: "Je peux utiliser l'inversion du sujet après *aussi, peut-être, ainsi*.", review: "Explication (note) ; Écrire, activité 1" },
    { can: "Je peux utiliser *dès lors, partant, encore faut-il, force est de constater*.", review: "Explication : les connecteurs soutenus" },
    { can: "Je peux présenter oralement une réflexion structurée.", review: "Parler" }
  ]
};
