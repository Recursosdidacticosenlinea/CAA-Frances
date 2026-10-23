window.UNIT = {
  slug: "les-vetements",
  title: "Les vêtements",
  level: "A2",
  subject: "Les achats",
  minutes: 50,
  focus: ["les vêtements", "ce, cet, cette, ces", "plus… que, moins… que, aussi… que", "dans un magasin"],

  presentation: {
    scene: "👕👗🛍️",
    situation: "Sarah cherche une tenue pour un entretien de stage. Elle va dans un **magasin de vêtements** avec son ami Hugo.",
    warmup: {
      prompt: "Qu'est-ce que vous portez aujourd'hui ?",
      options: ["un jean", "un pantalon", "une jupe", "une robe", "un tee-shirt", "une chemise", "un pull", "une veste", "des baskets", "des chaussures"],
      response: "Très bien ! Vous allez apprendre à décrire et comparer des vêtements."
    },
    dialogueTitle: "Dans le magasin",
    dialogue: [
      { who: "La vendeuse", line: "Bonjour ! Je peux vous aider ?" },
      { who: "Sarah", line: "Oui, je cherche une veste pour un entretien. *Je fais du* 38." },
      { who: "La vendeuse", line: "*Cette veste* noire est très élégante. Ou *ce blazer* bleu." },
      { who: "Hugo", line: "La noire est *plus classique que* la bleue." },
      { who: "Sarah", line: "Oui, mais la bleue est *moins chère que* la noire. Je peux *l'essayer* ?" },
      { who: "La vendeuse", line: "Bien sûr. Les cabines sont au fond." },
      { who: "Sarah", line: "Alors, Hugo ? Elle *me va* bien ?" },
      { who: "Hugo", line: "Parfait ! Elle est *aussi élégante que* la noire." }
    ]
  },

  objectives: [
    "Je peux nommer les vêtements et les accessoires.",
    "Je peux utiliser les démonstratifs *ce, cet, cette, ces*.",
    "Je peux comparer avec *plus, moins, aussi… que*.",
    "Je peux acheter un vêtement dans un magasin."
  ],

  explanation: {
    vocabTitle: "Les vêtements",
    vocab: [
      { word: "un pantalon", icon: "👖" }, { word: "une chemise", icon: "👔" }, { word: "un tee-shirt", icon: "👕" }, { word: "une robe", icon: "👗" },
      { word: "une jupe", icon: "🩳" }, { word: "un pull", icon: "🧶" }, { word: "une veste", icon: "🧥" }, { word: "un manteau", icon: "🧥" },
      { word: "des chaussures", icon: "👞" }, { word: "des baskets", icon: "👟" }, { word: "un chapeau", icon: "👒" }, { word: "une écharpe", icon: "🧣" },
      { word: "un sac à main", icon: "👜" }, { word: "des lunettes", icon: "🕶️" }
    ],
    grammar: [
      {
        title: "Les démonstratifs",
        head: ["Masculin", "Masculin + voyelle", "Féminin", "Pluriel"],
        rows: [["*ce* pull", "*cet* anorak, *cet* homme", "*cette* robe", "*ces* chaussures"]],
        note: "Pour distinguer : *ce pull-ci* (près) et *ce pull-là* (loin)."
      },
      {
        title: "Le comparatif",
        head: ["", "Structure", "Exemple"],
        rows: [
          ["+", "*plus* + adjectif + *que*", "La robe est *plus* chère *que* la jupe."],
          ["−", "*moins* + adjectif + *que*", "Le pull est *moins* chaud *que* le manteau."],
          ["=", "*aussi* + adjectif + *que*", "Ce jean est *aussi* joli *que* l'autre."],
          ["bon", "*meilleur(e)* que", "Cette qualité est *meilleure que* l'autre."]
        ],
        note: "L'adjectif s'accorde : *La veste est plus chère.* On ne dit pas *plus bon*, mais *meilleur*."
      },
      {
        title: "Au magasin",
        head: ["Le client", "Le vendeur"],
        rows: [
          ["Je cherche… / Je fais du 40.", "Quelle taille faites-vous ? / Vous chaussez du combien ?"],
          ["Je peux l'essayer ?", "Les cabines sont là-bas."],
          ["Il est trop grand / petit.", "Vous voulez la taille au-dessus / en dessous ?"],
          ["Il me va bien ? / Je le prends.", "Vous payez par carte ?"]
        ]
      }
    ],
    watchOut: [
      ["ce écharpe", "cette écharpe"],
      ["ce homme", "cet homme"],
      ["Cette robe est plus bonne.", "Cette robe est meilleure."],
      ["Le pull est plus chaud de la chemise.", "Le pull est plus chaud que la chemise."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez.",
      items: ["J'aime [[cette]] jupe.", "[[Cet]] anorak est chaud.", "La robe est plus chère [[que]] la jupe."]
    }
  },

  skills: {
    listening: {
      intro: "Deux amis préparent leurs valises pour un voyage au Canada en hiver. Écoutez.",
      title: "Qu'est-ce qu'on emporte ?",
      script: [
        { who: "Pierre", line: "Il va faire moins quinze à Québec ! Qu'est-ce qu'on emporte ?" },
        { who: "Lucie", line: "Moi, je prends mon gros manteau. Il est plus chaud que ma veste." },
        { who: "Pierre", line: "Et des bottes, pas des baskets. Les baskets sont moins pratiques dans la neige." },
        { who: "Lucie", line: "Tu prends cette écharpe rouge ou ces deux écharpes grises ?" },
        { who: "Pierre", line: "Les grises. Elles sont aussi chaudes que la rouge, et j'en ai deux !" },
        { who: "Lucie", line: "N'oublie pas un bonnet et des gants !" }
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Le manteau de Lucie est moins chaud que sa veste.", a: false },
            { s: "Pierre préfère les bottes pour la neige.", a: true },
            { s: "Les écharpes grises sont aussi chaudes que la rouge.", a: true },
            { s: "Ils vont à Québec en été.", a: false }
          ]
        },
        {
          type: "gap", title: "Complétez",
          prompt: "Écoutez encore et complétez.",
          items: ["Le manteau est plus [[chaud]] que la veste.", "Les baskets sont [[moins]] pratiques.", "N'oublie pas un bonnet et des [[gants]] !"]
        }
      ]
    },

    reading: {
      intro: "Lisez les avis des clients sur une boutique en ligne.",
      title: "Avis clients",
      text: [
        { author: "Nadia ★★★★★", body: "J'ai acheté cette robe pour un mariage. Elle est magnifique et plus confortable que ma vieille robe. La taille M me va parfaitement." },
        { author: "Julien ★★☆☆☆", body: "Ce pull est joli, mais il est moins chaud que la description. Et il est trop petit. Je fais du L et le L est comme un M !" },
        { author: "Élise ★★★★☆", body: "Ces baskets sont aussi belles que sur la photo. Elles sont un peu chères, mais la qualité est meilleure que dans les autres magasins." }
      ],
      activities: [
        {
          type: "match", title: "Qui a acheté quoi ?",
          pairs: [["Nadia", "une robe pour un mariage"], ["Julien", "un pull trop petit"], ["Élise", "des baskets"]]
        },
        {
          type: "rewrite", title: "Comparez",
          prompt: "Écrivez une phrase de comparaison.",
          items: [
            { q: "robe (+ confortable) / vieille robe", a: ["La robe est plus confortable que la vieille robe."] },
            { q: "pull (− chaud) / description", a: ["Le pull est moins chaud que la description."] },
            { q: "baskets (= belles) / photo", a: ["Les baskets sont aussi belles que sur la photo.", "Les baskets sont aussi belles que la photo."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis écrivez un avis.",
      activities: [
        {
          type: "tiles", title: "Mettez les mots dans l'ordre",
          items: [
            { a: "Je peux essayer cette veste ?" },
            { a: "Ce manteau est plus chaud." },
            { a: "Ces chaussures sont trop petites." },
            { a: "Cet anorak est moins cher que l'autre." }
          ]
        },
        {
          type: "write", title: "Mon avis sur un achat",
          prompt: "Écrivez un avis sur un vêtement que vous avez acheté. Comparez-le avec un autre vêtement. Donnez une note de 1 à 5 étoiles.",
          minWords: 50, maxWords: 80,
          model: "★★★★☆ J'ai acheté cette veste en jean le mois dernier. Elle est plus légère que ma veste en cuir et aussi élégante. Je fais du M et la taille est parfaite. Le seul problème : elle est un peu plus chère que dans les autres magasins. Mais la qualité est meilleure !",
          bank: ["J'ai acheté ce / cette…", "Il / Elle est plus… que…", "aussi… que", "moins… que", "Je fais du…", "meilleur(e)"],
          checklist: ["J'ai utilisé un démonstratif.", "J'ai fait deux comparaisons.", "J'ai accordé les adjectifs."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Au magasin",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Je cherche une veste." },
            { s: "Je peux l'essayer ?" },
            { s: "Cette robe est trop petite." },
            { s: "Ce pull est plus chaud que la chemise." },
            { s: "Ces chaussures sont aussi belles." },
            { s: "Je le prends." }
          ]
        },
        {
          type: "speak", title: "Mon style",
          prompt: "Décrivez votre style et comparez vos vêtements de la semaine et du week-end.",
          language: ["En semaine, je porte…", "Le week-end, …", "plus confortable que…", "mon vêtement préféré"],
          seconds: 60,
          checklist: ["nommé six vêtements ?", "fait une comparaison ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux nommer quinze vêtements et accessoires.", review: "Explication : le vocabulaire" },
    { can: "Je peux utiliser *ce, cet, cette, ces*.", review: "Explication : les démonstratifs" },
    { can: "Je peux comparer avec *plus, moins, aussi… que*.", review: "Explication : le comparatif ; Lire, activité 2" },
    { can: "Je peux utiliser *meilleur(e)*.", review: "Explication : le comparatif" },
    { can: "Je peux comprendre des avis de clients.", review: "Lire" },
    { can: "Je peux acheter un vêtement dans un magasin.", review: "Parler, activité 1" }
  ]
};
