window.UNIT = {
  slug: "projets-d-avenir",
  title: "Mes projets d'avenir",
  level: "B1",
  subject: "Les études",
  minutes: 55,
  focus: ["le futur simple", "les verbes irréguliers au futur", "quand + futur", "parler de ses projets"],

  presentation: {
    scene: "🎓🚀🌍",
    situation: "C'est la fin de l'année. Lors de la cérémonie, des étudiants de dernière année parlent de leurs **projets** pour l'avenir.",
    warmup: {
      prompt: "Où vous voyez-vous dans dix ans ?",
      options: ["à l'étranger", "dans une grande entreprise", "dans ma propre entreprise", "dans un laboratoire", "dans une école", "avec une famille", "en voyage autour du monde", "je ne sais pas encore"],
      response: "Beaux projets ! Vous allez apprendre à en parler au futur."
    },
    dialogueTitle: "Après l'université",
    dialogue: [
      { who: "Lucas", line: "Alors, Inès, qu'est-ce que tu *feras* après le diplôme ?" },
      { who: "Inès", line: "*Je partirai* au Canada. *Je ferai* un master en intelligence artificielle à Montréal." },
      { who: "Lucas", line: "Super ! Et après ?" },
      { who: "Inès", line: "*Quand j'aurai* mon master, *je travaillerai* dans une start-up. Et toi ?" },
      { who: "Lucas", line: "Moi, *je resterai* ici. *Je deviendrai* professeur de biologie. *J'aime* transmettre." },
      { who: "Inès", line: "Tu *seras* un excellent prof ! On *se reverra*, j'espère ?" },
      { who: "Lucas", line: "Bien sûr ! *Je viendrai* te voir à Montréal. *Il fera* froid, mais ce *sera* génial !" }
    ]
  },

  objectives: [
    "Je peux former le futur simple des verbes réguliers.",
    "Je peux utiliser les verbes irréguliers au futur (*être, avoir, faire, aller…*).",
    "Je peux utiliser *quand* + futur.",
    "Je peux présenter mes projets personnels et professionnels."
  ],

  explanation: {
    vocabTitle: "Les études et le travail",
    vocab: [
      { word: "le diplôme", icon: "🎓" }, { word: "la licence", icon: "📜" }, { word: "le master", icon: "📘" }, { word: "le doctorat", icon: "🔬" },
      { word: "un stage", icon: "🧑‍💼" }, { word: "un échange", icon: "🔄" }, { word: "une bourse", icon: "💰" }, { word: "une carrière", icon: "📈" },
      { word: "une entreprise", icon: "🏢" }, { word: "s'installer", icon: "🏠" }, { word: "réussir", icon: "🏆" }, { word: "un rêve", icon: "✨" }
    ],
    grammar: [
      {
        title: "Le futur simple : formation",
        intro: "Infinitif + terminaisons d'*avoir* au présent. Pour les verbes en *-re*, on enlève le *-e* final.",
        head: ["Sujet", "Terminaison", "travailler", "partir", "prendre"],
        rows: [
          ["je", "*-ai*", "travailler*ai*", "partir*ai*", "prendr*ai*"],
          ["tu", "*-as*", "travailler*as*", "partir*as*", "prendr*as*"],
          ["il / elle / on", "*-a*", "travailler*a*", "partir*a*", "prendr*a*"],
          ["nous", "*-ons*", "travailler*ons*", "partir*ons*", "prendr*ons*"],
          ["vous", "*-ez*", "travailler*ez*", "partir*ez*", "prendr*ez*"],
          ["ils / elles", "*-ont*", "travailler*ont*", "partir*ont*", "prendr*ont*"]
        ]
      },
      {
        title: "Les verbes irréguliers",
        head: ["Infinitif", "Radical", "Exemple"],
        rows: [
          ["être", "*ser-*", "je serai"], ["avoir", "*aur-*", "tu auras"], ["faire", "*fer-*", "il fera"],
          ["aller", "*ir-*", "nous irons"], ["venir / devenir", "*viendr- / deviendr-*", "vous viendrez"],
          ["pouvoir", "*pourr-*", "ils pourront"], ["vouloir", "*voudr-*", "je voudrai"],
          ["voir", "*verr-*", "tu verras"], ["savoir", "*saur-*", "on saura"], ["devoir", "*devr-*", "elle devra"]
        ],
        note: "Météo : *il fera beau, il pleuvra, il neigera*."
      },
      {
        title: "Quand + futur",
        head: ["Français", "Attention"],
        rows: [
          ["*Quand j'aurai* mon diplôme, je chercherai un travail.", "Après *quand*, on utilise le **futur** (pas le présent comme en espagnol)."],
          ["Je t'appellerai *quand* j'arriverai.", "*Cuando llegue* → *quand j'arriverai*"],
          ["*Dans* cinq ans, je serai médecin.", "*dans* + durée = dans le futur"]
        ],
        note: "Futur proche (*je vais partir*) = projet sûr et proche. Futur simple (*je partirai*) = projet plus lointain, prévision."
      }
    ],
    watchOut: [
      ["Quand j'ai mon diplôme, je voyagerai.", "Quand j'aurai mon diplôme, je voyagerai."],
      ["Je serais médecin dans cinq ans.", "Je serai médecin dans cinq ans."],
      ["Je prenderai le train.", "Je prendrai le train."],
      ["Nous allerons en France.", "Nous irons en France."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Mettez le verbe au futur simple.",
      items: ["L'année prochaine, je [[ferai]] un stage. (faire)", "Nous [[irons]] à Paris. (aller)", "Quand tu [[seras]] grand, tu comprendras. (être)"]
    }
  },

  skills: {
    listening: {
      intro: "Une conseillère d'orientation parle avec Hugo de son avenir. Écoutez.",
      title: "Chez la conseillère d'orientation",
      script: [
        { who: "La conseillère", line: "Alors Hugo, vous finirez votre licence en juin. Quels sont vos projets ?" },
        { who: "Hugo", line: "Je voudrais faire un master en économie, mais je ne sais pas où." },
        { who: "La conseillère", line: "Vous avez de bonnes notes. Vous pourrez demander une bourse pour étudier à l'étranger." },
        { who: "Hugo", line: "C'est vrai ? Ce serait génial ! J'aimerais aller en Belgique." },
        { who: "La conseillère", line: "Très bien. Vous devrez envoyer votre dossier avant le 15 mars. Quand vous aurez la réponse, vous viendrez me voir." },
        { who: "Hugo", line: "Parfait. Et après le master, je chercherai un travail dans une organisation internationale." }
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Hugo finira sa licence en septembre.", a: false },
            { s: "Il veut faire un master en économie.", a: true },
            { s: "Il aimerait étudier en Belgique.", a: true },
            { s: "Il devra envoyer son dossier avant le 15 mars.", a: true },
            { s: "Après le master, il travaillera dans une banque.", a: false }
          ]
        },
        {
          type: "gap", title: "Les verbes au futur",
          prompt: "Complétez avec les verbes entendus.",
          items: ["Vous [[pourrez]] demander une bourse.", "Vous [[devrez]] envoyer votre dossier.", "Quand vous [[aurez]] la réponse, vous [[viendrez]] me voir."]
        }
      ]
    },

    reading: {
      intro: "Lisez la lettre qu'Amina a écrite pour elle-même dans dix ans.",
      title: "Lettre à moi-même dans dix ans",
      text: [
        "Chère Amina du futur,",
        "Aujourd'hui, j'ai vingt ans et je suis en deuxième année d'architecture. Quand tu liras cette lettre, tu auras trente ans. Est-ce que tu seras architecte ? J'espère que tu construiras des bâtiments écologiques, comme tu le rêves aujourd'hui.",
        "Je suis sûre que tu vivras dans une grande ville, peut-être à Paris ou à Dakar. Tu parleras couramment trois langues. Tu auras peut-être des enfants, et tu leur apprendras à aimer la nature. N'oublie pas tes amis d'aujourd'hui et ta famille. Et surtout, quand tu auras des difficultés, souviens-toi : tu es plus forte que tu ne le crois ! Amina (20 ans)"
      ],
      activities: [
        {
          type: "match", title: "Les rêves d'Amina",
          pairs: [["métier", "architecte"], ["bâtiments", "écologiques"], ["ville", "Paris ou Dakar"], ["langues", "trois"], ["âge dans la lettre", "trente ans"]]
        },
        {
          type: "sort", title: "Présent ou futur ?",
          prompt: "Classez les verbes du texte.",
          bins: ["Présent", "Futur simple"],
          items: [
            { text: "j'ai", bin: 0 }, { text: "je suis", bin: 0 }, { text: "tu rêves", bin: 0 },
            { text: "tu liras", bin: 1 }, { text: "tu auras", bin: 1 }, { text: "tu construiras", bin: 1 }, { text: "tu vivras", bin: 1 }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis écrivez votre lettre pour le futur.",
      activities: [
        {
          type: "rewrite", title: "Au futur simple",
          prompt: "Transformez au futur simple.",
          items: [
            { q: "Je vais finir mes études.", a: ["Je finirai mes études."] },
            { q: "Nous allons avoir un chien.", a: ["Nous aurons un chien."] },
            { q: "Elle va être médecin.", a: ["Elle sera médecin."] },
            { q: "Ils vont venir en juin.", a: ["Ils viendront en juin."] },
            { q: "Quand je (arriver), je t'appellerai.", a: ["Quand j'arriverai, je t'appellerai."] }
          ]
        },
        {
          type: "write", title: "Lettre à moi-même dans dix ans",
          prompt: "Écrivez une lettre à vous-même dans dix ans. Imaginez votre vie : travail, lieu, famille, loisirs. Utilisez au moins une fois *quand* + futur.",
          minWords: 90, maxWords: 140,
          model: "Cher Diego du futur, quand tu liras cette lettre, tu auras trente et un ans. J'imagine que tu seras ingénieur civil et que tu construiras des ponts. Tu habiteras peut-être à Monterrey, ou en Europe ! Tu parleras français, j'en suis sûr. Le week-end, tu feras encore du vélo dans la montagne. Quand tu auras un peu de temps, appelle tes amis du lycée. Et n'oublie pas : tu as promis d'emmener maman à Paris. J'espère que tu seras heureux. Diego (21 ans)",
          bank: ["Quand tu liras cette lettre,", "tu seras…", "tu auras…", "tu habiteras…", "tu feras…", "J'espère que…", "N'oublie pas…"],
          checklist: ["J'ai utilisé le futur simple au moins huit fois.", "J'ai utilisé trois verbes irréguliers.", "J'ai utilisé *quand* + futur."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Parlez de l'avenir",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "L'année prochaine, je ferai un stage." },
            { s: "Quand j'aurai mon diplôme, je partirai au Canada." },
            { s: "Nous irons en France." },
            { s: "Tu seras un excellent professeur." },
            { s: "Il fera froid, mais ce sera génial." },
            { s: "Je deviendrai ingénieure." }
          ]
        },
        {
          type: "speak", title: "Mon plan à cinq ans",
          prompt: "Présentez votre plan pour les cinq prochaines années, comme dans un entretien.",
          language: ["Dans un an,…", "Quand j'aurai mon diplôme,…", "Je voudrais…", "J'espère que…", "Dans cinq ans, je serai…"],
          seconds: 75,
          checklist: ["parlé des études et du travail ?", "utilisé *quand* + futur ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux former le futur simple des verbes réguliers.", review: "Explication : formation" },
    { can: "Je peux utiliser dix verbes irréguliers au futur.", review: "Explication : les verbes irréguliers" },
    { can: "Je peux utiliser *quand* + futur.", review: "Explication : quand + futur" },
    { can: "Je peux distinguer futur proche et futur simple.", review: "Explication : quand + futur (note) ; Écrire, activité 1" },
    { can: "Je peux comprendre une conversation sur les projets d'études.", review: "Écouter" },
    { can: "Je peux présenter mes projets d'avenir.", review: "Écrire, activité 2 et Parler, activité 2" }
  ]
};
