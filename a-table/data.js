window.UNIT = {
  slug: "a-table",
  title: "À table !",
  level: "A1",
  subject: "La vie quotidienne",
  minutes: 50,
  focus: ["les aliments", "j'aime / je n'aime pas", "le, la, l', les", "les repas"],

  presentation: {
    scene: "🥐🧀🍎",
    situation: "Camille et Mateo déjeunent à la cafétéria de l'université. Ils parlent de ce qu'ils **aiment** manger.",
    warmup: {
      prompt: "Qu'est-ce que vous aimez manger ?",
      options: ["le pain", "le fromage", "les fruits", "les légumes", "la viande", "le poisson", "le riz", "les pâtes", "le chocolat", "les tacos"],
      response: "Miam ! Vous allez apprendre à parler de vos goûts."
    },
    dialogueTitle: "À la cafétéria",
    dialogue: [
      { who: "Camille", line: "Qu'est-ce que tu prends, Mateo ?" },
      { who: "Mateo", line: "Un sandwich au fromage. *J'adore le fromage* !" },
      { who: "Camille", line: "Moi, *je n'aime pas le fromage*. Je prends une salade." },
      { who: "Mateo", line: "*Tu aimes les légumes* ?" },
      { who: "Camille", line: "Oui, *j'aime beaucoup les légumes*. Et *j'aime bien le poisson*." },
      { who: "Mateo", line: "Et comme dessert ?" },
      { who: "Camille", line: "Une pomme. *Je déteste les gâteaux* trop sucrés !" }
    ]
  },

  objectives: [
    "Je peux nommer des aliments.",
    "Je peux dire ce que j'aime et ce que je n'aime pas.",
    "Je peux utiliser *le, la, l', les*.",
    "Je peux parler des trois repas de la journée."
  ],

  explanation: {
    vocabTitle: "Les aliments",
    vocab: [
      { word: "le pain", icon: "🥖" }, { word: "le fromage", icon: "🧀" }, { word: "le lait", icon: "🥛" }, { word: "le café", icon: "☕" },
      { word: "le riz", icon: "🍚" }, { word: "le poisson", icon: "🐟" }, { word: "le poulet", icon: "🍗" }, { word: "la viande", icon: "🥩" },
      { word: "la salade", icon: "🥗" }, { word: "la pomme", icon: "🍎" }, { word: "l'eau", icon: "💧" }, { word: "l'œuf", icon: "🥚" },
      { word: "les pâtes", icon: "🍝" }, { word: "les légumes", icon: "🥕" }, { word: "les fruits", icon: "🍇" }, { word: "le gâteau", icon: "🍰" }
    ],
    grammar: [
      {
        title: "Les articles définis",
        head: ["Masculin", "Féminin", "Voyelle ou h", "Pluriel"],
        rows: [["*le* pain", "*la* salade", "*l'*eau, *l'*huile", "*les* fruits"]],
        note: "Avec les verbes de goût (*aimer, adorer, détester*), on utilise toujours *le, la, l', les*."
      },
      {
        title: "Les goûts",
        head: ["", "Exemple"],
        rows: [
          ["❤️❤️", "J'*adore* le chocolat."],
          ["❤️", "J'*aime* (*beaucoup* / *bien*) les fruits."],
          ["💔", "Je *n'aime pas* le café."],
          ["💔💔", "Je *déteste* le poisson."]
        ],
        note: "La négation entoure le verbe : *je* **ne** *aime* **pas** → *je* **n'**aime **pas**."
      },
      {
        title: "Le verbe aimer",
        head: ["Pronom", "aimer"],
        rows: [["j'", "aim*e*"], ["tu", "aim*es*"], ["il / elle", "aim*e*"], ["nous", "aim*ons*"], ["vous", "aim*ez*"], ["ils / elles", "aim*ent*"]]
      }
    ],
    watchOut: [
      ["J'aime fromage.", "J'aime le fromage."],
      ["Je ne aime pas le café.", "Je n'aime pas le café."],
      ["J'aime la eau.", "J'aime l'eau."],
      ["Je n'aime le poisson.", "Je n'aime pas le poisson."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez avec *le, la, l'* ou *les*.",
      items: ["J'aime [[les]] fruits.", "Tu aimes [[la]] viande ?", "Je déteste [[l']]eau gazeuse."]
    }
  },

  skills: {
    listening: {
      intro: "Une journaliste de la radio de l'université pose des questions sur les repas. Écoutez.",
      title: "Micro-trottoir : que mangent les étudiants ?",
      script: [
        { who: "La journaliste", line: "Bonjour ! Qu'est-ce que vous mangez au petit-déjeuner ?" },
        { who: "Antoine", line: "Je bois un café et je mange du pain avec de la confiture. J'adore le pain français !" },
        { who: "La journaliste", line: "Et vous, mademoiselle ?" },
        { who: "Nadia", line: "Moi, je ne prends pas de petit-déjeuner. Mais au déjeuner, je mange beaucoup : du riz, du poulet et des légumes." },
        { who: "La journaliste", line: "Et le soir ?" },
        { who: "Pablo", line: "Le soir, je mange des pâtes. Je n'aime pas cuisiner, c'est rapide !" }
      ],
      activities: [
        {
          type: "match", title: "Qui mange quoi ?",
          prompt: "Associez.",
          pairs: [["Antoine, le matin", "du pain et un café"], ["Nadia, le matin", "rien"], ["Nadia, à midi", "du riz, du poulet et des légumes"], ["Pablo, le soir", "des pâtes"]]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Antoine adore le pain français.", a: true },
            { s: "Nadia prend un grand petit-déjeuner.", a: false },
            { s: "Pablo aime beaucoup cuisiner.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez le menu de la cafétéria et les commentaires des étudiants.",
      title: "Le menu du jour",
      text: [
        { author: "Menu du lundi", body: "**Entrée** : salade de tomates. **Plat** : poulet et riz, ou poisson et légumes. **Dessert** : yaourt ou fruit. **Boisson** : eau ou jus d'orange." },
        { author: "Élise", body: "J'adore le poisson, alors je suis contente ! Mais je n'aime pas les yaourts." },
        { author: "Karim", body: "Je ne mange pas de viande. Je prends le poisson et les légumes. Et une pomme !" }
      ],
      activities: [
        {
          type: "sort", title: "Entrée, plat ou dessert ?",
          bins: ["Entrée", "Plat", "Dessert"],
          items: [
            { text: "salade de tomates", bin: 0 }, { text: "poulet et riz", bin: 1 }, { text: "poisson et légumes", bin: 1 },
            { text: "yaourt", bin: 2 }, { text: "fruit", bin: 2 }
          ]
        },
        {
          type: "rewrite", title: "Au négatif",
          prompt: "Écrivez le contraire.",
          items: [
            { q: "J'aime le poisson.", a: ["Je n'aime pas le poisson."] },
            { q: "Karim aime la viande.", a: ["Karim n'aime pas la viande."] },
            { q: "Nous aimons les yaourts.", a: ["Nous n'aimons pas les yaourts."] },
            { q: "Tu aimes l'eau gazeuse.", a: ["Tu n'aimes pas l'eau gazeuse."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis parlez de vos goûts.",
      activities: [
        {
          type: "tiles", title: "Mettez les mots dans l'ordre",
          items: [
            { a: "Tu aimes les légumes ?" },
            { a: "Je n'aime pas le café." },
            { a: "Nous adorons le chocolat." },
            { a: "Elle déteste le poisson." }
          ]
        },
        {
          type: "write", title: "J'aime, je n'aime pas",
          prompt: "Écrivez ce que vous aimez et ce que vous n'aimez pas manger. Parlez aussi d'un plat typique de votre pays.",
          minWords: 40, maxWords: 70,
          model: "J'adore les fruits, surtout les mangues. J'aime bien le poulet et le riz. Je n'aime pas le poisson et je déteste le café ! Au Mexique, mon plat préféré, c'est le mole. Il est délicieux.",
          bank: ["J'adore…", "J'aime bien…", "Je n'aime pas…", "Je déteste…", "Mon plat préféré, c'est…"],
          checklist: ["J'ai utilisé *le, la, l', les* après *aimer*.", "J'ai écrit une phrase négative.", "J'ai parlé d'un plat de mon pays."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "À table, en français !",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "J'adore le fromage." },
            { s: "Je n'aime pas le café." },
            { s: "Tu aimes les légumes ?" },
            { s: "Nous mangeons du pain." },
            { s: "Je prends une salade, s'il vous plaît." },
            { s: "Mon plat préféré, c'est le poisson." }
          ]
        },
        {
          type: "speak", title: "Mes trois repas",
          prompt: "Dites ce que vous mangez au petit-déjeuner, au déjeuner et au dîner.",
          language: ["Au petit-déjeuner, je mange…", "À midi, …", "Le soir, …", "Je bois…"],
          seconds: 60,
          checklist: ["parlé des trois repas ?", "dit ce que vous aimez ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux nommer quinze aliments.", review: "Explication : le vocabulaire" },
    { can: "Je peux utiliser *le, la, l', les*.", review: "Explication : les articles définis" },
    { can: "Je peux dire ce que j'aime et ce que je déteste.", review: "Explication : les goûts" },
    { can: "Je peux faire une phrase négative avec *ne… pas*.", review: "Lire, activité 2" },
    { can: "Je peux comprendre un menu simple.", review: "Lire" },
    { can: "Je peux parler de mes repas.", review: "Parler, activité 2" }
  ]
};
