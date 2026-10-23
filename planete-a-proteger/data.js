window.UNIT = {
  slug: "planete-a-proteger",
  title: "Une planète à protéger",
  level: "B1",
  subject: "L'environnement",
  minutes: 60,
  focus: ["l'environnement", "il faut que + subjonctif", "le subjonctif présent", "proposer des solutions"],

  presentation: {
    scene: "🌍♻️🌱",
    situation: "Le club écologique de l'université organise une réunion. Les membres veulent rendre le campus plus **écologique**. Chacun propose des idées.",
    warmup: {
      prompt: "Quels gestes écologiques faites-vous déjà ?",
      options: ["trier les déchets", "éteindre la lumière", "prendre le vélo", "utiliser une gourde", "manger moins de viande", "acheter d'occasion", "prendre des douches courtes", "aucun pour le moment"],
      response: "Chaque geste compte ! Voyons ce que propose le club."
    },
    dialogueTitle: "La réunion du club écolo",
    dialogue: [
      { who: "Manon", line: "Bon, quelles sont vos idées pour le campus ?" },
      { who: "Yanis", line: "*Il faut qu'on installe* des fontaines d'eau. Comme ça, plus de bouteilles en plastique !" },
      { who: "Manon", line: "Bonne idée. Quoi d'autre ?" },
      { who: "Lucía", line: "*Il faut que la cafétéria propose* plus de plats végétariens." },
      { who: "Yanis", line: "Et *il est important que les étudiants fassent* le tri. Il n'y a pas assez de poubelles de recyclage." },
      { who: "Manon", line: "D'accord. Mais *il faut que nous soyons* réalistes : le budget est limité." },
      { who: "Lucía", line: "Alors *il faut que nous allions* voir le directeur avec un projet précis !" }
    ]
  },

  objectives: [
    "Je peux utiliser le vocabulaire de l'environnement.",
    "Je peux former le subjonctif présent des verbes réguliers.",
    "Je peux utiliser les subjonctifs irréguliers les plus fréquents (*être, avoir, faire, aller*).",
    "Je peux exprimer une nécessité avec *il faut que, il est important que*."
  ],

  explanation: {
    vocabTitle: "L'environnement",
    vocab: [
      { word: "le réchauffement climatique", icon: "🌡️" }, { word: "la pollution", icon: "🏭" }, { word: "les déchets", icon: "🗑️" }, { word: "le recyclage", icon: "♻️" },
      { word: "trier", icon: "🧺" }, { word: "gaspiller", icon: "💸" }, { word: "économiser l'énergie", icon: "💡" }, { word: "les énergies renouvelables", icon: "☀️" },
      { word: "le plastique", icon: "🧴" }, { word: "la biodiversité", icon: "🐝" }, { word: "les transports en commun", icon: "🚌" }, { word: "le compost", icon: "🌱" }
    ],
    grammar: [
      {
        title: "Le subjonctif présent : verbes réguliers",
        intro: "On prend le radical de *ils* au présent (*ils parlent → parl-*) et on ajoute : *-e, -es, -e, -ions, -iez, -ent*.",
        head: ["", "parler (ils parl-ent)", "finir (ils finiss-ent)", "prendre (ils prenn-ent)"],
        rows: [
          ["que je", "parl*e*", "finiss*e*", "prenn*e*"], ["que tu", "parl*es*", "finiss*es*", "prenn*es*"],
          ["qu'il / elle", "parl*e*", "finiss*e*", "prenn*e*"], ["que nous", "parl*ions*", "finiss*ions*", "pren*ions*"],
          ["que vous", "parl*iez*", "finiss*iez*", "pren*iez*"], ["qu'ils / elles", "parl*ent*", "finiss*ent*", "prenn*ent*"]
        ],
        note: "*nous* et *vous* ressemblent à l'imparfait : *que nous parlions*, *que vous preniez*."
      },
      {
        title: "Les verbes irréguliers fréquents",
        head: ["être", "avoir", "faire", "aller"],
        rows: [
          ["que je *sois*", "que j'*aie*", "que je *fasse*", "que j'*aille*"],
          ["que tu *sois*", "que tu *aies*", "que tu *fasses*", "que tu *ailles*"],
          ["qu'il *soit*", "qu'il *ait*", "qu'il *fasse*", "qu'il *aille*"],
          ["que nous *soyons*", "que nous *ayons*", "que nous *fassions*", "que nous *allions*"],
          ["que vous *soyez*", "que vous *ayez*", "que vous *fassiez*", "que vous *alliez*"],
          ["qu'ils *soient*", "qu'ils *aient*", "qu'ils *fassent*", "qu'ils *aillent*"]
        ],
        note: "Aussi : *pouvoir → que je puisse*, *savoir → que je sache*, *vouloir → que je veuille*."
      },
      {
        title: "Exprimer la nécessité",
        head: ["+ subjonctif (deux sujets)", "+ infinitif (général)"],
        rows: [
          ["*Il faut que* tu recycles.", "*Il faut* recycler."],
          ["*Il est important que* nous fassions attention.", "*Il est important de* faire attention."],
          ["*Il est nécessaire que* les entreprises polluent moins.", "*Il est nécessaire de* polluer moins."]
        ]
      }
    ],
    watchOut: [
      ["Il faut que nous faisons quelque chose.", "Il faut que nous fassions quelque chose."],
      ["Il faut que je vais au marché.", "Il faut que j'aille au marché."],
      ["Il est important que tu es là.", "Il est important que tu sois là."],
      ["Il faut que recycler.", "Il faut recycler."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Mettez le verbe au subjonctif.",
      items: ["Il faut que tu [[éteignes|eteignes]] la lumière. (éteindre)", "Il faut que nous [[soyons]] responsables. (être)", "Il est important qu'on [[fasse]] le tri. (faire)"]
    }
  },

  skills: {
    listening: {
      intro: "Écoutez un podcast sur les gestes écologiques au quotidien.",
      title: "Podcast : Écolo au quotidien",
      script: [
        { who: "La présentatrice", line: "Bienvenue dans « Écolo au quotidien ». Aujourd'hui, notre invité, Thomas, est ingénieur en environnement. Thomas, par quoi commencer ?" },
        { who: "Thomas", line: "D'abord, il faut que chacun réduise ses déchets. Par exemple, il est important qu'on achète en vrac, sans emballage." },
        { who: "La présentatrice", line: "Et pour l'énergie ?" },
        { who: "Thomas", line: "Il faut qu'on éteigne les appareils électroniques la nuit. Un ordinateur en veille consomme beaucoup !" },
        { who: "La présentatrice", line: "Et les transports ?" },
        { who: "Thomas", line: "Il faut que les villes aient plus de pistes cyclables. Mais il est aussi nécessaire que les gens acceptent de laisser leur voiture." },
        { who: "La présentatrice", line: "Un dernier conseil ?" },
        { who: "Thomas", line: "Oui : il ne faut pas que l'écologie soit une source de stress. Chaque petit geste compte !" }
      ],
      activities: [
        {
          type: "match", title: "Les conseils de Thomas",
          pairs: [["les déchets", "acheter en vrac"], ["l'énergie", "éteindre les appareils la nuit"], ["les transports", "plus de pistes cyclables"], ["l'état d'esprit", "ne pas stresser"]]
        },
        {
          type: "gap", title: "Les verbes au subjonctif",
          prompt: "Complétez avec le verbe entendu.",
          items: ["Il faut que chacun [[réduise|reduise]] ses déchets.", "Il faut que les villes [[aient]] plus de pistes cyclables.", "Il ne faut pas que l'écologie [[soit]] une source de stress."]
        }
      ]
    },

    reading: {
      intro: "Lisez cet article du journal étudiant.",
      title: "Le campus zéro déchet : c'est possible !",
      text: [
        "Depuis septembre, l'Université de Nantes mène un projet ambitieux : devenir un campus « zéro déchet » d'ici 2030. La cafétéria a déjà supprimé les couverts en plastique et propose une réduction de 20 centimes aux étudiants qui apportent leur tasse.",
        "« Il faut que les étudiants comprennent que chaque geste compte », explique Claire Dubois, responsable du projet. « Nous avons installé des composteurs et des fontaines à eau. Mais il est important que tout le monde participe : les étudiants, les professeurs et le personnel. »",
        "Les résultats sont encourageants : en six mois, les déchets ont diminué de 35 %. Mais certains étudiants restent sceptiques. « C'est bien, mais il faudrait que l'université installe aussi des panneaux solaires », dit Hugo, étudiant en physique."
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "L'université veut être « zéro déchet » en 2030.", a: true },
            { s: "Les étudiants qui apportent leur tasse paient plus cher.", a: false },
            { s: "Les déchets ont diminué de 35 % en six mois.", a: true },
            { s: "Hugo pense que le projet est parfait.", a: false }
          ]
        },
        {
          type: "sort", title: "Fait ou proposition ?",
          bins: ["Déjà fait", "Encore à faire"],
          items: [
            { text: "supprimer les couverts en plastique", bin: 0 }, { text: "installer des composteurs", bin: 0 }, { text: "installer des fontaines à eau", bin: 0 },
            { text: "installer des panneaux solaires", bin: 1 }, { text: "faire participer tout le monde", bin: 1 }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis écrivez vos propositions.",
      activities: [
        {
          type: "rewrite", title: "Avec il faut que",
          prompt: "Transformez avec *il faut que* + subjonctif.",
          items: [
            { q: "Nous devons recycler.", a: ["Il faut que nous recyclions."] },
            { q: "Tu dois prendre le vélo.", a: ["Il faut que tu prennes le vélo."] },
            { q: "Les gens doivent être plus responsables.", a: ["Il faut que les gens soient plus responsables."] },
            { q: "Je dois faire attention.", a: ["Il faut que je fasse attention."] },
            { q: "Vous devez aller au marché local.", a: ["Il faut que vous alliez au marché local."] }
          ]
        },
        {
          type: "write", title: "Mon campus écologique",
          prompt: "Écrivez un message au recteur de votre université. Présentez un problème écologique du campus et proposez quatre solutions avec *il faut que, il est important que, il est nécessaire que*.",
          minWords: 100, maxWords: 150,
          model: "Monsieur le Recteur, je vous écris au nom du club écologique. Sur notre campus, nous utilisons chaque jour des milliers de bouteilles et de gobelets en plastique. Nous proposons quatre solutions. D'abord, il faut que l'université installe des fontaines à eau dans chaque bâtiment. Ensuite, il est important que la cafétéria propose des tasses réutilisables. De plus, il est nécessaire que nous ayons plus de poubelles de tri. Enfin, il faut que les étudiants soient informés : nous pourrions organiser une semaine de l'environnement. Nous espérons que vous soutiendrez notre projet. Cordialement, Le club écologique",
          bank: ["Je vous écris au nom de…", "Le problème, c'est que…", "Il faut que…", "Il est important que…", "Il est nécessaire que…", "Nous espérons que…"],
          checklist: ["J'ai présenté un problème.", "J'ai proposé quatre solutions.", "J'ai utilisé le subjonctif au moins quatre fois.", "J'ai utilisé des formules polies."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Proposez des solutions",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Il faut que nous recyclions nos déchets." },
            { s: "Il est important que tu éteignes la lumière." },
            { s: "Il faut qu'on fasse le tri." },
            { s: "Il faut que les villes aient plus de pistes cyclables." },
            { s: "Il ne faut pas gaspiller l'eau." },
            { s: "Chaque petit geste compte." }
          ]
        },
        {
          type: "speak", title: "Mes trois engagements",
          prompt: "Présentez trois gestes écologiques que vous allez faire et expliquez pourquoi c'est important.",
          language: ["Je vais…", "Il est important que je…", "Il faut que nous…", "parce que…"],
          seconds: 60,
          checklist: ["présenté trois gestes ?", "justifié ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux utiliser le vocabulaire de l'environnement.", review: "Explication : le vocabulaire" },
    { can: "Je peux former le subjonctif des verbes réguliers.", review: "Explication : verbes réguliers" },
    { can: "Je peux utiliser *être, avoir, faire, aller* au subjonctif.", review: "Explication : les verbes irréguliers" },
    { can: "Je peux choisir entre *il faut que* + subjonctif et *il faut* + infinitif.", review: "Explication : exprimer la nécessité" },
    { can: "Je peux comprendre un article ou un podcast sur l'écologie.", review: "Écouter et Lire" },
    { can: "Je peux proposer des solutions à un problème.", review: "Écrire, activité 2 et Parler, activité 1" }
  ]
};
