window.UNIT = {
  slug: "au-cas-ou",
  title: "Au cas où…",
  level: "C1",
  subject: "La société",
  speakers: { "L'économiste": "f" },
  minutes: 65,
  focus: ["la consommation responsable", "la condition et l'hypothèse avancées", "au cas où + conditionnel, à condition que, à moins que, pour peu que", "en admettant que, quand bien même, à supposer que"],

  presentation: {
    scene: "🛒♻️🤔",
    situation: "Une association de consommateurs organise un débat public : **faut-il interdire la publicité pour les produits les plus polluants ?** Une économiste et un représentant des entreprises s'opposent, en multipliant les hypothèses.",
    warmup: {
      prompt: "Qu'est-ce qui influence le plus vos achats ?",
      options: ["le prix", "la publicité", "les avis en ligne", "les influenceurs", "l'impact écologique", "la marque", "les conseils d'amis", "les promotions"],
      response: "Intéressant ! Vous allez apprendre à formuler des hypothèses et des conditions avec précision."
    },
    dialogueTitle: "Le débat public",
    dialogue: [
      { who: "L'économiste", line: "Interdire ces publicités serait efficace, *à condition qu'*on *propose* des alternatives accessibles." },
      { who: "M. Garnier", line: "*À supposer que* cette mesure *soit adoptée*, des milliers d'emplois dans le secteur publicitaire seraient menacés." },
      { who: "L'économiste", line: "*Quand bien même* quelques emplois *seraient* touchés, d'autres seraient créés dans les secteurs durables." },
      { who: "M. Garnier", line: "*Pour peu que* l'État *se montre* trop sévère, les entreprises iront investir ailleurs." },
      { who: "L'économiste", line: "*À moins que* l'Europe entière n'*adopte* les mêmes règles. Et *au cas où* certaines entreprises *refuseraient*, des sanctions sont prévues." },
      { who: "La modératrice", line: "*En admettant que* vous ayez tous deux raison, quel compromis proposez-vous ?" }
    ]
  },

  objectives: [
    "Je peux exprimer une condition avec *à condition que, pourvu que, pour peu que*.",
    "Je peux exprimer une restriction avec *à moins que, sauf si*.",
    "Je peux formuler une hypothèse avec *au cas où, à supposer que, en admettant que*.",
    "Je peux concéder une hypothèse avec *quand bien même* + conditionnel."
  ],

  explanation: {
    vocabTitle: "La consommation",
    vocab: [
      { word: "le pouvoir d'achat", icon: "💶" }, { word: "la surconsommation", icon: "🛍️" }, { word: "l'obsolescence programmée", icon: "⏳" }, { word: "le greenwashing", icon: "🍃" },
      { word: "l'étiquetage", icon: "🏷️" }, { word: "un label", icon: "✅" }, { word: "le circuit court", icon: "🚜" }, { word: "la seconde main", icon: "🔁" },
      { word: "réparer", icon: "🔧" }, { word: "le consommateur", icon: "🧑" }, { word: "une réglementation", icon: "📜" }, { word: "inciter", icon: "👉" }
    ],
    grammar: [
      {
        title: "Condition, restriction, hypothèse",
        head: ["Connecteur", "Mode", "Exemple"],
        rows: [
          ["*à condition que / pourvu que*", "subjonctif", "J'achèterai ce téléphone *à condition qu'*il *soit* réparable."],
          ["*pour peu que* (il suffit que)", "subjonctif", "*Pour peu qu'*on *fasse* attention, on peut économiser."],
          ["*à moins que* (sauf si)", "subjonctif (+ *ne* explétif facultatif)", "Nous irons au marché, *à moins qu'*il ne *pleuve*."],
          ["*à supposer que / en admettant que*", "subjonctif", "*À supposer que* la loi *passe*, que changera-t-elle ?"],
          ["*au cas où / dans le cas où*", "conditionnel", "Prends un sac *au cas où* tu *ferais* des courses."],
          ["*quand bien même*", "conditionnel", "*Quand bien même* ce serait plus cher, je préfère le local."],
          ["*sauf si / même si*", "indicatif", "Je viendrai, *sauf si* je *suis* malade."],
          ["*à condition de* / *en cas de*", "infinitif / nom", "*À condition de* réparer… / *En cas de* panne…"]
        ],
        note: "Le *ne* explétif (*à moins qu'il ne pleuve*) n'a pas de valeur négative : c'est une marque de registre soutenu."
      }
    ],
    watchOut: [
      ["Au cas où il pleut…", "Au cas où il pleuvrait…"],
      ["À condition qu'il est réparable…", "À condition qu'il soit réparable…"],
      ["Quand bien même c'est cher…", "Quand bien même ce serait cher…"],
      ["À moins qu'il ne pleuve (= s'il ne pleut pas).", "À moins qu'il ne pleuve (= sauf s'il pleut)."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Mettez le verbe au mode qui convient.",
      items: ["Au cas où tu [[changerais]] d'avis, appelle-moi. (changer)", "J'accepte, à condition que vous [[soyez]] à l'heure. (être)", "Quand bien même il [[pleuvrait]], nous sortirions. (pleuvoir)"]
    }
  },

  skills: {
    listening: {
      intro: "Écoutez une chronique radio sur l'obsolescence programmée.",
      title: "Chronique : réparer plutôt que jeter",
      script: [
        { who: "Le chroniqueur", line: "En France, depuis 2021, un indice de réparabilité doit être affiché sur certains appareils. Une bonne nouvelle, à condition que les consommateurs le consultent." },
        { who: "Le chroniqueur", line: "Car pour peu qu'un smartphone soit proposé en promotion, beaucoup oublient la question de sa durée de vie." },
        { who: "Le chroniqueur", line: "Quand bien même un appareil réparable coûterait un peu plus cher, il serait souvent plus économique sur cinq ans." },
        { who: "Le chroniqueur", line: "Mon conseil ? Avant d'acheter, renseignez-vous sur la disponibilité des pièces détachées, au cas où l'écran se briserait. Et à moins que votre appareil ne soit vraiment irréparable, essayez d'abord un atelier de réparation." }
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "L'indice de réparabilité est affiché depuis 2021 sur certains appareils.", a: true },
            { s: "Selon le chroniqueur, les promotions font oublier la durée de vie.", a: true },
            { s: "Un appareil réparable n'est jamais plus cher.", a: false },
            { s: "Il conseille de jeter immédiatement un appareil en panne.", a: false }
          ]
        },
        {
          type: "gap", title: "Les connecteurs entendus",
          items: ["Une bonne nouvelle, [[à condition que|a condition que]] les consommateurs le consultent.", "[[Pour peu qu']]un smartphone soit proposé en promotion…", "[[Quand bien même]] un appareil réparable coûterait plus cher…", "…[[au cas où|au cas ou]] l'écran se briserait."]
        }
      ]
    },

    reading: {
      intro: "Lisez cette tribune publiée dans un magazine économique.",
      title: "Le greenwashing, ou l'art de verdir son image",
      text: [
        "Sacs « éco-conçus », vols « neutres en carbone », bouteilles « 100 % naturelles »… À en croire les publicités, tout serait devenu écologique. La réalité est moins reluisante : selon une étude de la Commission européenne, plus de la moitié des allégations environnementales seraient vagues, trompeuses ou non fondées.",
        "Que faire ? Interdire ces pratiques ne suffira pas, à moins que les sanctions ne soient réellement dissuasives. À supposer qu'une entreprise soit condamnée, l'amende représente souvent une fraction infime de son chiffre d'affaires.",
        "Le consommateur, quant à lui, n'est pas impuissant, pour peu qu'il apprenne à reconnaître les labels sérieux. Quand bien même il n'aurait pas le temps de tout vérifier, quelques réflexes suffisent : se méfier des termes flous et privilégier les certifications indépendantes."
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Selon l'étude, la majorité des allégations seraient problématiques.", a: true },
            { s: "L'auteur pense que l'interdiction suffit.", a: false },
            { s: "Les amendes sont souvent faibles pour les grandes entreprises.", a: true },
            { s: "L'auteur conseille de faire confiance aux termes flous.", a: false }
          ]
        },
        {
          type: "sort", title: "Quel mode après le connecteur ?",
          bins: ["subjonctif", "conditionnel"],
          items: [
            { text: "à moins que les sanctions ne soient…", bin: 0 }, { text: "à supposer qu'une entreprise soit…", bin: 0 }, { text: "pour peu qu'il apprenne…", bin: 0 },
            { text: "quand bien même il n'aurait pas…", bin: 1 }, { text: "au cas où l'écran se briserait", bin: 1 }
          ]
        }
      ]
    },

    writing: {
      intro: "Reformulez, puis rédigez votre plaidoyer.",
      activities: [
        {
          type: "rewrite", title: "Reformulez la condition",
          prompt: "Reformulez avec le connecteur indiqué.",
          items: [
            { q: "Je viendrai si je ne suis pas malade. (à moins que)", a: ["Je viendrai, à moins que je ne sois malade.", "Je viendrai à moins que je sois malade.", "Je viendrai, à moins que je sois malade."] },
            { q: "Si jamais il pleut, prends un parapluie. (au cas où)", a: ["Au cas où il pleuvrait, prends un parapluie.", "Prends un parapluie au cas où il pleuvrait."] },
            { q: "Même si c'était gratuit, je n'en voudrais pas. (quand bien même)", a: ["Quand bien même ce serait gratuit, je n'en voudrais pas."] },
            { q: "Il suffit que tu sois patient pour réussir. (pour peu que)", a: ["Pour peu que tu sois patient, tu réussiras."] }
          ]
        },
        {
          type: "write", title: "Plaidoyer pour une consommation responsable",
          prompt: "Rédigez un texte argumentatif pour ou contre l'interdiction de la publicité pour les produits les plus polluants. Anticipez les objections par des hypothèses. Utilisez au moins six connecteurs de condition ou d'hypothèse différents, avec le bon mode.",
          minWords: 220, maxWords: 300,
          model: "Interdire la publicité pour les produits les plus polluants : l'idée choque, et pourtant elle mérite d'être examinée sérieusement. La publicité n'informe pas seulement, elle crée des désirs. Pour peu qu'un message soit répété assez souvent, il finit par transformer un objet superflu en besoin. Il serait donc cohérent de limiter la promotion des produits dont l'impact environnemental est le plus lourd, à condition que la liste en soit établie par une autorité indépendante. On objectera que cette mesure menacerait des emplois. À supposer que ce soit le cas, la transition créerait d'autres activités : publicité pour la réparation, la location ou la seconde main. On dira encore que le consommateur doit rester libre. Mais quand bien même aucune publicité ne vanterait les SUV, chacun pourrait toujours en acheter : la liberté de choisir ne dépend pas de la liberté d'être sollicité. Enfin, au cas où certaines entreprises contourneraient la loi par le biais des influenceurs, des sanctions proportionnelles à leur chiffre d'affaires devraient être prévues. En admettant que cette mesure ne règle pas tout, elle enverrait un signal clair : l'urgence climatique n'est plus compatible avec une incitation permanente à consommer davantage. À moins que nous ne préférions attendre que le climat décide à notre place.",
          bank: ["pour peu que…", "à condition que…", "à supposer que…", "quand bien même… (+ cond.)", "au cas où… (+ cond.)", "en admettant que…", "à moins que… ne…"],
          checklist: ["J'ai pris position clairement.", "J'ai anticipé au moins deux objections.", "J'ai utilisé six connecteurs de condition ou d'hypothèse.", "J'ai respecté le mode de chaque connecteur."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Conditions et hypothèses",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Prends un sac au cas où tu ferais des courses." },
            { s: "J'accepte, à condition que ce soit réparable." },
            { s: "Nous sortirons, à moins qu'il ne pleuve." },
            { s: "Quand bien même ce serait cher, je préfère le local." },
            { s: "Pour peu qu'on fasse attention, on économise." },
            { s: "À supposer que la loi passe, que changera-t-elle ?" }
          ]
        },
        {
          type: "speak", title: "Mes conditions pour un achat responsable",
          prompt: "Expliquez en deux minutes à quelles conditions vous seriez prêt(e) à changer vos habitudes de consommation (vêtements, téléphone, alimentation…). Envisagez aussi les obstacles.",
          language: ["Je serais prêt(e) à…, à condition que…", "pour peu que…", "à moins que…", "Quand bien même…", "Au cas où…"],
          seconds: 120,
          checklist: ["utilisé quatre connecteurs différents ?", "respecté les modes ?", "envisagé des obstacles ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux utiliser *à condition que, pourvu que, pour peu que* + subjonctif.", review: "Explication : condition, restriction, hypothèse" },
    { can: "Je peux utiliser *à moins que* (+ *ne* explétif) et *sauf si*.", review: "Explication (note) ; Écrire, activité 1" },
    { can: "Je peux utiliser *au cas où* et *quand bien même* + conditionnel.", review: "Explication ; Lire, activité 2" },
    { can: "Je peux utiliser *à supposer que, en admettant que*.", review: "Explication : condition, restriction, hypothèse" },
    { can: "Je peux comprendre une chronique ou une tribune sur la consommation.", review: "Écouter et Lire" },
    { can: "Je peux argumenter en anticipant les objections par des hypothèses.", review: "Écrire, activité 2 et Parler" }
  ]
};
