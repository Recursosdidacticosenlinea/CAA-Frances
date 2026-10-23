window.UNIT = {
  slug: "reseaux-sociaux",
  title: "Les réseaux sociaux",
  level: "B1",
  subject: "Les médias",
  minutes: 55,
  focus: ["le vocabulaire d'internet", "le discours rapporté au présent", "dire que, demander si, demander ce que", "parler de ses habitudes numériques"],

  presentation: {
    scene: "📱💬❤️",
    situation: "Nathan reçoit un message vocal de sa grand-mère. Elle veut créer un compte sur un **réseau social**. Il **rapporte** le message à sa sœur Zoé.",
    warmup: {
      prompt: "Quels réseaux ou applications utilisez-vous le plus ?",
      options: ["Instagram", "TikTok", "WhatsApp", "YouTube", "X", "Facebook", "LinkedIn", "Discord", "aucun"],
      response: "Merci ! Combien de temps passez-vous dessus ? Vous allez en parler."
    },
    dialogueTitle: "Le message de Mamie",
    dialogue: [
      { who: "Zoé", line: "C'était qui au téléphone ?" },
      { who: "Nathan", line: "Mamie ! Elle *dit qu'*elle veut ouvrir un compte Instagram." },
      { who: "Zoé", line: "Quoi ?! Elle *dit pourquoi* ?" },
      { who: "Nathan", line: "Elle *explique qu'*elle veut voir nos photos de vacances. Et elle *demande si* on peut l'aider samedi." },
      { who: "Zoé", line: "Bien sûr ! Elle *demande autre chose* ?" },
      { who: "Nathan", line: "Oui, elle *demande ce que* c'est, un « hashtag ». Et elle *veut savoir comment* on publie une story." },
      { who: "Zoé", line: "Ha ha ! Dis-lui que nous serons ses professeurs !" }
    ]
  },

  objectives: [
    "Je peux utiliser le vocabulaire d'internet et des réseaux sociaux.",
    "Je peux rapporter une affirmation avec *il dit que…*",
    "Je peux rapporter une question avec *il demande si / ce que / où / quand…*",
    "Je peux rapporter un ordre avec *il dit de* + infinitif."
  ],

  explanation: {
    vocabTitle: "Internet et les réseaux sociaux",
    vocab: [
      { word: "un compte", icon: "👤" }, { word: "un abonné", icon: "👥" }, { word: "publier", icon: "📤" }, { word: "partager", icon: "🔁" },
      { word: "liker / aimer", icon: "❤️" }, { word: "commenter", icon: "💬" }, { word: "une story", icon: "📸" }, { word: "un mot de passe", icon: "🔑" },
      { word: "télécharger", icon: "⬇️" }, { word: "une fausse information", icon: "🚫" }, { word: "le harcèlement", icon: "⚠️" }, { word: "la vie privée", icon: "🔒" },
      { word: "un influenceur", icon: "🤳" }, { word: "être accro", icon: "📵" }
    ],
    grammar: [
      {
        title: "Rapporter une affirmation et un ordre",
        head: ["Discours direct", "Discours rapporté"],
        rows: [
          ["Elle dit : « *Je* suis contente. »", "Elle dit *qu'elle* est contente."],
          ["Il dit : « *Mon* téléphone est cassé. »", "Il dit *que son* téléphone est cassé."],
          ["Elle dit : « *Appelle-moi* ! »", "Elle *me dit de l'appeler*."],
          ["Il dit : « *Ne publiez pas* cette photo. »", "Il nous dit *de ne pas publier* cette photo."]
        ],
        note: "Attention aux changements de personne : *je → il / elle*, *mon → son*, *nous → ils*."
      },
      {
        title: "Rapporter une question",
        head: ["Question directe", "Question rapportée"],
        rows: [
          ["« Tu viens ? » / « Est-ce que tu viens ? »", "Il demande *si* je viens."],
          ["« Qu'est-ce que tu fais ? »", "Il demande *ce que* je fais."],
          ["« Qu'est-ce qui se passe ? »", "Il demande *ce qui* se passe."],
          ["« Où / Quand / Comment / Pourquoi… ? »", "Il demande *où / quand / comment / pourquoi* je pars."]
        ],
        note: "Dans la question rapportée : pas de point d'interrogation, pas d'inversion, pas de *est-ce que*."
      }
    ],
    watchOut: [
      ["Il demande que tu viens.", "Il demande si tu viens."],
      ["Elle demande qu'est-ce que je fais.", "Elle demande ce que je fais."],
      ["Il demande où est-ce que tu habites ?", "Il demande où tu habites."],
      ["Elle dit que je suis fatiguée. (Marie parle d'elle)", "Elle dit qu'elle est fatiguée."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez.",
      items: ["« Tu as un compte ? » → Il demande [[si]] j'ai un compte.", "« Qu'est-ce que tu publies ? » → Il demande [[ce que]] je publie.", "« Éteins ton téléphone ! » → Il me dit [[d']]éteindre mon téléphone."]
    }
  },

  skills: {
    listening: {
      intro: "Une journaliste interviewe une psychologue sur l'utilisation des écrans. Écoutez.",
      title: "Sommes-nous tous accros ?",
      script: [
        { who: "La journaliste", line: "Docteure Martin, les jeunes passent combien de temps sur les réseaux sociaux ?" },
        { who: "Mme Martin", line: "En moyenne, quatre heures par jour. C'est beaucoup, mais ce n'est pas toujours négatif." },
        { who: "La journaliste", line: "Quels sont les risques ?" },
        { who: "Mme Martin", line: "Le principal risque, c'est la comparaison. Les jeunes voient des vies parfaites et ils se sentent moins bien. Il y a aussi le manque de sommeil." },
        { who: "La journaliste", line: "Qu'est-ce que vous conseillez ?" },
        { who: "Mme Martin", line: "Désactivez les notifications. Ne regardez pas votre téléphone une heure avant de dormir. Et rappelez-vous que les réseaux ne montrent pas la réalité." }
      ],
      activities: [
        {
          type: "tiles", title: "Rapportez l'interview",
          prompt: "Remettez les phrases dans l'ordre.",
          items: [
            { a: "La journaliste demande combien de temps les jeunes passent sur les réseaux." },
            { a: "La psychologue dit que c'est en moyenne quatre heures." },
            { a: "Elle conseille de désactiver les notifications." }
          ]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "La psychologue dit que les réseaux sont toujours négatifs.", a: false },
            { s: "Elle explique que la comparaison est un risque.", a: true },
            { s: "Elle conseille de regarder son téléphone avant de dormir.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez ces messages échangés sur un groupe d'amis.",
      title: "Le groupe « Les copains de la fac »",
      text: [
        { author: "Léa · 18:02", body: "Coucou ! Qui vient à la soirée de vendredi ? 🎉" },
        { author: "Karim · 18:05", body: "Moi ! Je peux apporter des boissons. C'est à quelle heure ?" },
        { author: "Léa · 18:06", body: "À 20 h, chez moi. Et ne publiez pas de photos sans demander, s'il vous plaît 😅" },
        { author: "Inès · 18:20", body: "Désolée, je ne peux pas venir, j'ai un examen samedi matin. Vous pouvez m'envoyer des vidéos ?" },
        { author: "Karim · 18:22", body: "Pas de problème ! Bonne chance pour ton examen !" }
      ],
      activities: [
        {
          type: "rewrite", title: "Rapportez les messages",
          prompt: "Rapportez chaque message avec *dit que, demande si, demande ce que, dit de…*",
          items: [
            { q: "Léa : « Qui vient à la soirée ? » → Léa demande…", a: ["Léa demande qui vient à la soirée."] },
            { q: "Karim : « Je peux apporter des boissons. » → Karim dit…", a: ["Karim dit qu'il peut apporter des boissons."] },
            { q: "Karim : « C'est à quelle heure ? » → Karim demande…", a: ["Karim demande à quelle heure c'est."] },
            { q: "Léa : « Ne publiez pas de photos. » → Léa dit…", a: ["Léa dit de ne pas publier de photos.", "Léa leur dit de ne pas publier de photos."] },
            { q: "Inès : « Vous pouvez m'envoyer des vidéos ? » → Inès demande…", a: ["Inès demande s'ils peuvent lui envoyer des vidéos."] }
          ]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "La soirée est chez Karim.", a: false },
            { s: "Inès ne peut pas venir.", a: true },
            { s: "Léa veut qu'on publie beaucoup de photos.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis écrivez un article.",
      activities: [
        {
          type: "rewrite", title: "Questions rapportées",
          prompt: "Rapportez les questions avec *Il me demande…*",
          items: [
            { q: "« Tu as Instagram ? »", a: ["Il me demande si j'ai Instagram."] },
            { q: "« Qu'est-ce que tu regardes ? »", a: ["Il me demande ce que je regarde."] },
            { q: "« Où est ton téléphone ? »", a: ["Il me demande où est mon téléphone.", "Il me demande où mon téléphone est."] },
            { q: "« Pourquoi tu ne réponds pas ? »", a: ["Il me demande pourquoi je ne réponds pas."] }
          ]
        },
        {
          type: "write", title: "Enquête : les étudiants et les réseaux",
          prompt: "Interrogez deux ou trois personnes sur leur utilisation des réseaux sociaux. Écrivez un petit article où vous rapportez leurs réponses.",
          minWords: 100, maxWords: 150,
          model: "Nous avons interrogé trois étudiants sur leur utilisation des réseaux sociaux. Valeria, 20 ans, dit qu'elle passe trois heures par jour sur TikTok. Elle explique qu'elle y apprend beaucoup de choses, mais elle reconnaît qu'elle dort mal. Diego dit qu'il n'utilise que WhatsApp, pour parler avec sa famille. Quand nous lui demandons s'il se sent exclu, il répond que non, au contraire : il a plus de temps pour le sport. Enfin, Camila dit que les réseaux sont essentiels pour son travail de photographe. Elle conseille aux jeunes de ne pas croire tout ce qu'ils voient en ligne.",
          bank: ["Nous avons interrogé…", "Il / Elle dit que…", "Il / Elle explique que…", "Quand nous lui demandons si…,", "Il / Elle répond que…", "Il / Elle conseille de…"],
          checklist: ["J'ai rapporté les paroles de deux personnes ou plus.", "J'ai utilisé *dire que* et *demander si*.", "J'ai changé les pronoms correctement.", "J'ai utilisé des verbes variés (*expliquer, répondre, conseiller*…)."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Rapportez les paroles",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Elle dit qu'elle veut ouvrir un compte." },
            { s: "Il demande si tu viens samedi." },
            { s: "Elle demande ce que c'est, un hashtag." },
            { s: "Il me dit de ne pas publier cette photo." },
            { s: "Je lui ai demandé où il habitait." },
            { s: "Ils disent qu'ils passent trop de temps sur leur téléphone." }
          ]
        },
        {
          type: "speak", title: "Mon rapport aux écrans",
          prompt: "Parlez de votre utilisation des réseaux : combien de temps, pour quoi faire, avantages et inconvénients. Rapportez aussi un conseil que quelqu'un vous a donné.",
          language: ["J'utilise surtout…", "Ma mère / Mon ami me dit souvent de…", "L'avantage, c'est que…", "Le problème, c'est que…"],
          seconds: 75,
          checklist: ["rapporté un conseil avec *dire de* ?", "donné un avantage et un inconvénient ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux utiliser le vocabulaire d'internet.", review: "Explication : le vocabulaire" },
    { can: "Je peux rapporter une affirmation avec *dire que*.", review: "Explication : rapporter une affirmation" },
    { can: "Je peux rapporter une question avec *si, ce que, où…*", review: "Explication : rapporter une question ; Écrire, activité 1" },
    { can: "Je peux rapporter un ordre avec *dire de* + infinitif.", review: "Lire, activité 1" },
    { can: "Je peux changer les pronoms et les possessifs.", review: "Explication : attention aux changements" },
    { can: "Je peux rapporter les paroles d'autres personnes à l'écrit et à l'oral.", review: "Écrire, activité 2 et Parler" }
  ]
};
