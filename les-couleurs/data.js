window.UNIT = {
  slug: "les-couleurs",
  title: "Les couleurs",
  level: "A1",
  subject: "Le monde autour de moi",
  minutes: 45,
  focus: ["les couleurs", "masculin et féminin", "singulier et pluriel", "De quelle couleur est… ?"],

  presentation: {
    scene: "🎨🌈🖍️",
    situation: "Manon et Nathan préparent une affiche pour la fête de l'université. Ils choisissent les **couleurs**.",
    warmup: {
      prompt: "Quelle est votre couleur préférée ?",
      options: ["rouge", "bleu", "vert", "jaune", "noir", "blanc", "orange", "rose", "violet", "gris", "marron"],
      response: "Super ! C'est une jolie couleur."
    },
    dialogueTitle: "L'affiche de la fête",
    dialogue: [
      { who: "Manon", line: "Le fond de l'affiche, il est *bleu* ou *vert* ?" },
      { who: "Nathan", line: "*Bleu* ! Et le titre est *jaune*." },
      { who: "Manon", line: "D'accord. Et les lettres ? *Blanches* ?" },
      { who: "Nathan", line: "Oui, les lettres sont *blanches*. Et la date est *rouge*." },
      { who: "Manon", line: "*De quelle couleur* est le soleil ?" },
      { who: "Nathan", line: "Le soleil est *orange* !" },
      { who: "Manon", line: "Parfait. C'est très joli !" }
    ]
  },

  objectives: [
    "Je peux dire le nom de dix couleurs.",
    "Je peux demander *De quelle couleur est… ?*",
    "Je peux accorder la couleur au masculin et au féminin.",
    "Je peux accorder la couleur au singulier et au pluriel."
  ],

  explanation: {
    vocabTitle: "Les couleurs",
    vocab: [
      { word: "rouge", icon: "🟥" }, { word: "bleu", icon: "🟦" }, { word: "vert", icon: "🟩" }, { word: "jaune", icon: "🟨" },
      { word: "orange", icon: "🟧" }, { word: "violet", icon: "🟪" }, { word: "noir", icon: "⬛" }, { word: "blanc", icon: "⬜" },
      { word: "marron", icon: "🟫" }, { word: "rose", icon: "🌸" }, { word: "gris", icon: "🩶" }, { word: "le drapeau", icon: "🏳️" }
    ],
    grammar: [
      {
        title: "Masculin et féminin",
        head: ["Masculin", "Féminin", "Exemple"],
        rows: [
          ["vert", "vert*e*", "un livre vert / une voiture vert*e*"],
          ["bleu", "bleu*e*", "un sac bleu / une table bleu*e*"],
          ["noir", "noir*e*", "un chat noir / une chaise noir*e*"],
          ["gris", "gris*e*", "un pull gris / une jupe gris*e*"],
          ["violet", "violet*te*", "un stylo violet / une fleur violet*te*"],
          ["blanc", "blan*che*", "un mur blanc / une porte blan*che*"],
          ["rouge, jaune, rose", "rouge, jaune, rose", "pas de changement (déjà un *-e*)"]
        ],
        note: "*Orange* et *marron* ne changent jamais : *une porte orange, des chaussures marron*."
      },
      {
        title: "Singulier et pluriel",
        head: ["Singulier", "Pluriel"],
        rows: [
          ["un stylo noir", "des stylos noir*s*"],
          ["une fleur jaune", "des fleurs jaune*s*"],
          ["une porte blanche", "des portes blanche*s*"],
          ["un sac gris", "des sacs gris (déjà un *-s*)"]
        ],
        note: "La couleur est *après* le nom : *une voiture rouge*, pas *une rouge voiture*."
      },
      {
        title: "Poser la question",
        head: ["Question", "Réponse"],
        rows: [
          ["*De quelle couleur est* le drapeau du Mexique ?", "Il est vert, blanc et rouge."],
          ["*De quelle couleur sont* tes chaussures ?", "Elles sont noires."],
          ["*Quelle est ta couleur préférée* ?", "Ma couleur préférée, c'est le bleu."]
        ]
      }
    ],
    watchOut: [
      ["une rouge voiture", "une voiture rouge"],
      ["une maison blanc", "une maison blanche"],
      ["des chats noir", "des chats noirs"],
      ["des sacs oranges", "des sacs orange"]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Écrivez la couleur avec la bonne forme.",
      items: [
        "une table (vert) [[verte]]",
        "des stylos (noir) [[noirs]]",
        "une porte (blanc) [[blanche]]"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Trois étudiants décrivent le drapeau de leur pays. Écoutez.",
      title: "Les drapeaux",
      script: [
        { who: "Diego", line: "Je suis mexicain. Le drapeau du Mexique est vert, blanc et rouge. Il y a un aigle au centre." },
        { who: "Chloé", line: "Moi, je suis française. Le drapeau de la France est bleu, blanc et rouge." },
        { who: "Amina", line: "Je suis sénégalaise. Le drapeau du Sénégal est vert, jaune et rouge, avec une étoile verte." },
        { who: "Diego", line: "Et le drapeau du Japon, il est blanc avec un cercle rouge !" }
      ],
      activities: [
        {
          type: "sort", title: "Quelles couleurs ?",
          prompt: "Mettez les couleurs dans le bon drapeau.",
          bins: ["Mexique", "France", "Sénégal"],
          items: [
            { text: "un aigle au centre", bin: 0 }, { text: "vert, blanc et rouge", bin: 0 },
            { text: "bleu, blanc et rouge", bin: 1 },
            { text: "une étoile verte", bin: 2 }, { text: "vert, jaune et rouge", bin: 2 }
          ]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Le drapeau de la France est vert, blanc et rouge.", a: false },
            { s: "Le drapeau du Sénégal a une étoile.", a: true },
            { s: "Le drapeau du Japon a un cercle bleu.", a: false },
            { s: "Chloé est française.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez les messages de vente sur le groupe de l'université.",
      title: "À vendre !",
      text: [
        { author: "Nadia", body: "Je vends un vélo **rouge** et deux casques **noirs**. Prix : 80 euros." },
        { author: "Louis", body: "À vendre : une lampe **blanche** et une chaise **verte**. Très bon état ! 15 euros." },
        { author: "Zoé", body: "Je vends des livres de français et un sac **violet**. Le sac a des fleurs **roses**. 20 euros." }
      ],
      activities: [
        {
          type: "match", title: "Quelle couleur ?",
          prompt: "Associez l'objet et sa couleur.",
          pairs: [["le vélo de Nadia", "rouge"], ["les casques", "noirs"], ["la lampe de Louis", "blanche"], ["la chaise", "verte"], ["le sac de Zoé", "violet"]]
        },
        {
          type: "rewrite", title: "Au pluriel",
          prompt: "Écrivez la phrase au pluriel.",
          items: [
            { q: "un vélo rouge → des…", a: ["des vélos rouges"] },
            { q: "une lampe blanche → des…", a: ["des lampes blanches"] },
            { q: "une chaise verte → des…", a: ["des chaises vertes"] },
            { q: "un sac violet → des…", a: ["des sacs violets"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis décrivez votre chambre.",
      activities: [
        {
          type: "tiles", title: "Mettez les mots dans l'ordre",
          items: [
            { a: "De quelle couleur est ton sac ?" },
            { a: "Mon sac est noir." },
            { a: "J'ai une voiture blanche." },
            { a: "Les fleurs sont jaunes." }
          ]
        },
        {
          type: "write", title: "Ma chambre en couleurs",
          prompt: "Décrivez votre chambre ou votre salle de classe. Donnez la couleur de six objets.",
          minWords: 30, maxWords: 60,
          model: "Ma chambre est petite. Les murs sont blancs. Mon lit est bleu et ma lampe est jaune. J'ai une chaise noire et un tapis rouge. Ma couleur préférée, c'est le vert, alors j'ai des plantes vertes !",
          bank: ["Ma chambre est…", "Les murs sont…", "J'ai un / une…", "Ma couleur préférée, c'est…"],
          checklist: ["J'ai donné la couleur de six objets.", "La couleur est **après** le nom.", "J'ai fait l'accord au féminin et au pluriel."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Dites les couleurs",
          prompt: "Écoutez et répétez. Attention au féminin !",
          items: [
            { s: "Mon sac est noir." },
            { s: "J'ai une voiture blanche." },
            { s: "De quelle couleur est ton pull ?" },
            { s: "Les fleurs sont jaunes." },
            { s: "Le drapeau est bleu, blanc et rouge." },
            { s: "Ma couleur préférée, c'est le vert." }
          ]
        },
        {
          type: "speak", title: "Mon drapeau",
          prompt: "Décrivez le drapeau de votre pays et le drapeau d'un autre pays. Dites aussi votre couleur préférée.",
          language: ["Le drapeau du… est…", "Il y a…", "au centre", "Ma couleur préférée, c'est…"],
          seconds: 45,
          checklist: ["décrit deux drapeaux ?", "dit votre couleur préférée ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux dire le nom de dix couleurs.", review: "Explication : le vocabulaire" },
    { can: "Je peux demander la couleur d'un objet.", review: "Explication : poser la question" },
    { can: "Je peux faire l'accord masculin / féminin.", review: "Explication : masculin et féminin" },
    { can: "Je peux faire l'accord singulier / pluriel.", review: "Lire, activité 2" },
    { can: "Je peux décrire un drapeau.", review: "Écouter et Parler, activité 2" },
    { can: "Je peux décrire une pièce avec les couleurs.", review: "Écrire, activité 2" }
  ]
};
