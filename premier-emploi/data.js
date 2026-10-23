window.UNIT = {
  slug: "premier-emploi",
  title: "Mon premier emploi",
  level: "B1",
  subject: "Le travail",
  minutes: 55,
  focus: ["l'entretien d'embauche", "les pronoms relatifs qui, que, où", "les qualités et les compétences", "parler de son expérience"],

  presentation: {
    scene: "💼🤝📄",
    situation: "Sofía postule pour un stage dans une entreprise française à Mexico. Aujourd'hui, elle a son **entretien d'embauche** avec la responsable des ressources humaines.",
    warmup: {
      prompt: "Quelles qualités sont importantes pour un premier emploi ?",
      options: ["être ponctuel", "être organisé", "travailler en équipe", "être créatif", "parler des langues", "être curieux", "savoir s'adapter", "être patient"],
      response: "Excellent ! Vous allez apprendre à présenter vos qualités en français."
    },
    dialogueTitle: "L'entretien",
    dialogue: [
      { who: "Mme Leroy", line: "Bonjour, mademoiselle. Parlez-moi un peu de vous." },
      { who: "Sofía", line: "Je suis étudiante en commerce international. C'est un domaine *qui* me passionne." },
      { who: "Mme Leroy", line: "Vous avez déjà de l'expérience ?" },
      { who: "Sofía", line: "Oui, j'ai fait un stage dans une entreprise *où* j'ai géré les réseaux sociaux. C'est une expérience *que* j'ai beaucoup aimée." },
      { who: "Mme Leroy", line: "Quelles sont vos qualités ?" },
      { who: "Sofía", line: "Je suis organisée et je sais travailler en équipe. Je parle espagnol, anglais et français." },
      { who: "Mme Leroy", line: "Et pourquoi notre entreprise ?" },
      { who: "Sofía", line: "Parce que c'est une entreprise *qui* exporte des produits durables, et ce sont des valeurs *que* je partage." }
    ]
  },

  objectives: [
    "Je peux utiliser le vocabulaire du travail et de l'entretien.",
    "Je peux utiliser les pronoms relatifs *qui, que, où*.",
    "Je peux présenter mes qualités et mes compétences.",
    "Je peux répondre à des questions d'entretien."
  ],

  explanation: {
    vocabTitle: "Le monde du travail",
    vocab: [
      { word: "un CV", icon: "📄" }, { word: "une lettre de motivation", icon: "✉️" }, { word: "un entretien", icon: "🗣️" }, { word: "un poste", icon: "🪑" },
      { word: "un stage", icon: "🧑‍💼" }, { word: "le salaire", icon: "💶" }, { word: "un contrat", icon: "📝" }, { word: "l'expérience", icon: "📈" },
      { word: "une compétence", icon: "🛠️" }, { word: "une qualité", icon: "⭐" }, { word: "un défaut", icon: "⚠️" }, { word: "postuler", icon: "📨" },
      { word: "embaucher", icon: "🤝" }, { word: "un collègue", icon: "👥" }
    ],
    grammar: [
      {
        title: "Les pronoms relatifs qui, que, où",
        intro: "Ils permettent de relier deux phrases et d'éviter les répétitions.",
        head: ["Pronom", "Remplace…", "Exemple"],
        rows: [
          ["*qui*", "le **sujet** du verbe", "J'ai un collègue. Ce collègue parle chinois. → J'ai un collègue *qui* parle chinois."],
          ["*que / qu'*", "le **complément d'objet direct**", "C'est un travail. J'aime ce travail. → C'est un travail *que* j'aime."],
          ["*où*", "un **lieu** ou un **moment**", "C'est l'entreprise *où* je travaille. Le jour *où* j'ai commencé…"]
        ],
        note: "Astuce : après *qui*, il y a souvent un **verbe**. Après *que*, il y a un **sujet** (je, tu, Marie…)."
      },
      {
        title: "Parler de soi en entretien",
        head: ["Pour…", "Expressions"],
        rows: [
          ["se présenter", "Je suis titulaire d'une licence en… / Je suis en dernière année de…"],
          ["l'expérience", "J'ai travaillé comme… / J'ai été chargé(e) de…"],
          ["les compétences", "Je sais + infinitif / Je maîtrise… / J'ai de bonnes connaissances en…"],
          ["les qualités", "Je suis + adjectif : rigoureux, autonome, motivé, dynamique…"],
          ["la motivation", "Ce poste m'intéresse parce que… / Je souhaite…"]
        ]
      }
    ],
    watchOut: [
      ["C'est le livre qui j'aime.", "C'est le livre que j'aime."],
      ["L'entreprise que je travaille.", "L'entreprise où je travaille."],
      ["C'est un poste que m'intéresse.", "C'est un poste qui m'intéresse."],
      ["que il", "qu'il"]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez avec *qui, que* ou *où*.",
      items: ["J'ai une amie [[qui]] travaille à Paris.", "Le stage [[que]] j'ai fait était intéressant.", "C'est la ville [[où]] je suis né."]
    }
  },

  skills: {
    listening: {
      intro: "Trois candidats répondent à la question : « Quel est votre plus grand défaut ? » Écoutez.",
      title: "La question piège",
      script: [
        { who: "La recruteuse", line: "Quel est votre plus grand défaut ?" },
        { who: "Antoine", line: "Je suis un peu perfectionniste. C'est un défaut qui me fait parfois perdre du temps, mais j'apprends à fixer des priorités." },
        { who: "La recruteuse", line: "Et vous, madame ?" },
        { who: "Nadia", line: "Je suis timide. Mais j'ai fait un stage dans un musée où je devais présenter les œuvres au public. C'est une expérience qui m'a beaucoup aidée." },
        { who: "La recruteuse", line: "Monsieur ?" },
        { who: "Louis", line: "Euh… je n'ai pas de défaut. Je suis parfait." },
        { who: "La recruteuse", line: "Ah… Merci, monsieur." }
      ],
      activities: [
        {
          type: "match", title: "Les défauts",
          pairs: [["Antoine", "perfectionniste"], ["Nadia", "timide"], ["Louis", "dit qu'il est parfait"]]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Antoine apprend à fixer des priorités.", a: true },
            { s: "Nadia a fait un stage dans une banque.", a: false },
            { s: "Le stage a aidé Nadia avec sa timidité.", a: true },
            { s: "La réponse de Louis est une bonne stratégie.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez cette offre de stage.",
      title: "Offre de stage – Assistant(e) marketing",
      text: [
        "**L'entreprise** : Verde est une jeune entreprise qui fabrique des sacs en matériaux recyclés. Nous avons des bureaux à Lyon et à Mexico, où travaillent quarante personnes.",
        "**Le poste** : Vous assisterez l'équipe marketing qui prépare le lancement de notre nouvelle collection. Vous serez chargé(e) des réseaux sociaux et de l'organisation d'événements.",
        "**Le profil que nous recherchons** : étudiant(e) en marketing ou communication, créatif(ve) et organisé(e). Vous parlez français et espagnol. La connaissance de Canva est un plus.",
        "**Conditions** : stage de six mois à Mexico, à partir de février. Gratification : 8 000 pesos par mois. Envoyez votre CV et votre lettre de motivation avant le 10 janvier."
      ],
      activities: [
        {
          type: "gap", title: "Les informations clés",
          prompt: "Complétez.",
          items: [
            "Verde fabrique des [[sacs]] en matériaux recyclés.",
            "Le stagiaire sera chargé des [[réseaux sociaux|reseaux sociaux]] et des événements.",
            "Il faut parler français et [[espagnol]].",
            "Le stage dure [[six|6]] mois.",
            "Il faut postuler avant le [[10|dix]] janvier."
          ]
        },
        {
          type: "sort", title: "Qui, que ou où ?",
          prompt: "Classez les phrases du texte selon le pronom relatif.",
          bins: ["qui", "que", "où"],
          items: [
            { text: "…une entreprise ___ fabrique des sacs", bin: 0 }, { text: "…l'équipe ___ prépare le lancement", bin: 0 },
            { text: "…le profil ___ nous recherchons", bin: 1 },
            { text: "…des bureaux à Lyon et à Mexico, ___ travaillent quarante personnes", bin: 2 }
          ]
        }
      ]
    },

    writing: {
      intro: "Reliez les phrases, puis écrivez votre lettre de motivation.",
      activities: [
        {
          type: "rewrite", title: "Reliez les phrases",
          prompt: "Faites une seule phrase avec *qui, que* ou *où*.",
          items: [
            { q: "J'ai un collègue. Il parle quatre langues.", a: ["J'ai un collègue qui parle quatre langues."] },
            { q: "C'est un projet. J'adore ce projet.", a: ["C'est un projet que j'adore."] },
            { q: "Voici le bureau. Je travaille dans ce bureau.", a: ["Voici le bureau où je travaille."] },
            { q: "Je cherche un stage. Ce stage est à l'étranger.", a: ["Je cherche un stage qui est à l'étranger."] },
            { q: "La personne est la directrice. Tu as vu cette personne.", a: ["La personne que tu as vue est la directrice."] }
          ]
        },
        {
          type: "write", title: "Ma lettre de motivation",
          prompt: "Répondez à l'offre de Verde. Présentez-vous, parlez de votre expérience, de vos qualités et de votre motivation. Utilisez *qui, que, où* au moins trois fois.",
          minWords: 100, maxWords: 150,
          model: "Madame, Monsieur, Je suis étudiante en communication à l'Université de Puebla et je souhaite postuler au stage d'assistante marketing que vous proposez. L'année dernière, j'ai fait un stage dans une agence où j'ai géré les réseaux sociaux de trois clients. C'est une expérience qui m'a appris à être organisée et réactive. Je suis créative et j'aime travailler en équipe. Je parle espagnol, français et anglais. Votre entreprise m'intéresse particulièrement parce qu'elle défend des valeurs écologiques que je partage. Je reste à votre disposition pour un entretien. Veuillez agréer, Madame, Monsieur, mes salutations distinguées.",
          bank: ["Madame, Monsieur,", "Je souhaite postuler au poste de…", "J'ai travaillé comme…", "C'est une expérience qui…", "Je suis…", "Votre entreprise m'intéresse parce que…", "Veuillez agréer…"],
          checklist: ["J'ai utilisé une formule de politesse au début et à la fin.", "J'ai parlé de mon expérience et de mes qualités.", "J'ai utilisé *qui, que, où*.", "J'ai expliqué ma motivation."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "L'entretien d'embauche",
          prompt: "Écoutez et répétez avec assurance.",
          items: [
            { s: "Je suis étudiante en commerce international." },
            { s: "C'est un domaine qui me passionne." },
            { s: "J'ai géré les réseaux sociaux d'une entreprise." },
            { s: "C'est une expérience que j'ai beaucoup aimée." },
            { s: "Je sais travailler en équipe." },
            { s: "Ce poste m'intéresse parce que je partage vos valeurs." }
          ]
        },
        {
          type: "speak", title: "Le pitch d'une minute",
          prompt: "Présentez-vous à un recruteur en une minute : qui vous êtes, ce que vous savez faire, ce que vous cherchez.",
          language: ["Bonjour, je m'appelle…", "Je suis…", "Je sais…", "Je cherche un poste qui…", "Merci de votre attention."],
          seconds: 60,
          checklist: ["été clair(e) et dynamique ?", "dit ce que vous cherchez ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux utiliser le vocabulaire de l'emploi.", review: "Explication : le vocabulaire" },
    { can: "Je peux utiliser *qui* et *que* correctement.", review: "Explication : les pronoms relatifs ; Écrire, activité 1" },
    { can: "Je peux utiliser *où* pour un lieu ou un moment.", review: "Explication : les pronoms relatifs" },
    { can: "Je peux comprendre une offre d'emploi.", review: "Lire" },
    { can: "Je peux écrire une lettre de motivation simple.", review: "Écrire, activité 2" },
    { can: "Je peux répondre aux questions d'un entretien.", review: "Parler, activité 1" }
  ]
};
