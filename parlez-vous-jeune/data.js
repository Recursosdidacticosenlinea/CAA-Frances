window.UNIT = {
  slug: "parlez-vous-jeune",
  title: "Parlez-vous jeune ?",
  level: "C2",
  subject: "La langue",
  minutes: 65,
  focus: ["les niveaux de langue", "l'argot et le verlan", "les expressions idiomatiques", "passer d'un registre à l'autre"],

  presentation: {
    scene: "🗯️😎🔁",
    situation: "Un linguiste anime une conférence sur le **français des jeunes**. Il projette des conversations réelles et montre comment la langue se transforme dans la rue, sur les réseaux et au lycée.",
    warmup: {
      prompt: "Quels mots familiers français connaissez-vous déjà ?",
      options: ["bosser", "un mec", "une meuf", "kiffer", "c'est relou", "ouf", "bouffer", "chelou", "le boulot", "grave"],
      response: "Vous en savez plus que vous ne le croyez ! Apprenons à les reconnaître… et à savoir quand les éviter."
    },
    dialogueTitle: "Conversation de lycéens",
    dialogue: [
      { who: "Yanis", line: "Wesh, t'as capté le *délire* d'hier ? C'était *ouf* !" },
      { who: "Zoé", line: "*Grave* ! Mais le prof de maths, il est trop *relou*, il nous a mis un contrôle surprise." },
      { who: "Yanis", line: "*Laisse tomber*, j'ai *rien capté*. Je suis *dég*." },
      { who: "Le linguiste", line: "Traduisons en registre courant : « Tu as compris ce qui s'est passé hier ? C'était incroyable ! »" },
      { who: "Le linguiste", line: "« Oui, vraiment ! Mais le professeur est pénible, il nous a fait une interrogation surprise. »" },
      { who: "Le linguiste", line: "Notez que *ouf* vient du *verlan* : on inverse les syllabes de « fou ». Et *relou*, c'est « lourd » à l'envers." }
    ]
  },

  objectives: [
    "Je peux distinguer les registres familier, courant, soutenu et littéraire.",
    "Je peux comprendre l'argot et le verlan courants.",
    "Je peux comprendre et utiliser des expressions idiomatiques.",
    "Je peux adapter un message à un registre donné."
  ],

  explanation: {
    vocabTitle: "Familier → courant",
    vocab: [
      { word: "bosser → travailler", icon: "💼" }, { word: "le boulot → le travail", icon: "🏢" }, { word: "bouffer → manger", icon: "🍔" }, { word: "une bagnole → une voiture", icon: "🚗" },
      { word: "un pote → un ami", icon: "🤝" }, { word: "le fric → l'argent", icon: "💶" }, { word: "kiffer → aimer", icon: "❤️" }, { word: "se marrer → rire", icon: "😂" },
      { word: "galérer → avoir du mal", icon: "😩" }, { word: "chelou → bizarre", icon: "🤨" }, { word: "relou → pénible", icon: "🙄" }, { word: "ouf → fou, incroyable", icon: "🤯" }
    ],
    grammar: [
      {
        title: "Les niveaux de langue",
        head: ["Familier", "Courant", "Soutenu"],
        rows: [
          ["T'as pas vu mon portable ?", "Tu n'as pas vu mon téléphone ?", "N'auriez-vous pas aperçu mon téléphone ?"],
          ["J'en ai marre.", "J'en ai assez.", "Je suis excédé(e)."],
          ["Il se la pète.", "Il est prétentieux.", "Il fait preuve de suffisance."],
          ["Ça me saoule.", "Ça m'agace.", "Cela m'importune."]
        ],
        note: "À l'oral familier : chute du *ne* (*j'sais pas*), *ça* au lieu de *cela*, *on* au lieu de *nous*, élisions (*t'as*)."
      },
      {
        title: "Le verlan",
        intro: "On inverse les syllabes d'un mot (« à l'envers » → *verlan*). Certains mots sont entrés dans le dictionnaire.",
        head: ["Mot d'origine", "Verlan", "Sens"],
        rows: [
          ["fou", "*ouf*", "fou, incroyable"], ["lourd", "*relou*", "pénible"], ["louche", "*chelou*", "bizarre"],
          ["femme", "*meuf*", "femme, fille"], ["fête", "*teuf*", "fête"], ["méchant", "*chanmé*", "génial (sens inversé !)"]
        ]
      },
      {
        title: "Expressions idiomatiques",
        head: ["Expression", "Sens"],
        rows: [
          ["*poser un lapin*", "ne pas venir à un rendez-vous"], ["*avoir le cafard*", "être triste"],
          ["*coûter les yeux de la tête*", "coûter très cher"], ["*tomber dans les pommes*", "s'évanouir"],
          ["*avoir un poil dans la main*", "être paresseux"], ["*mettre son grain de sel*", "intervenir sans y être invité"],
          ["*ce n'est pas la mer à boire*", "ce n'est pas si difficile"], ["*se faire du mauvais sang*", "s'inquiéter"]
        ]
      }
    ],
    watchOut: [
      ["Madame la Directrice, ce projet est ouf.", "Madame la Directrice, ce projet est remarquable."],
      ["Il m'a posé un lièvre.", "Il m'a posé un lapin."],
      ["« Chanmé » veut dire « méchant ».", "« Chanmé » veut souvent dire « génial »."],
      ["J'ai le cafard = j'ai un insecte.", "J'ai le cafard = je suis triste."]
    ],
    check: {
      type: "match", title: "Vérification rapide",
      prompt: "Associez le mot familier et son équivalent courant.",
      pairs: [["bosser", "travailler"], ["chelou", "bizarre"], ["le fric", "l'argent"], ["poser un lapin", "ne pas venir"], ["galérer", "avoir du mal"]]
    }
  },

  skills: {
    listening: {
      intro: "Écoutez un extrait de la conférence du linguiste.",
      title: "La langue des jeunes, une menace ?",
      script: [
        { who: "Le linguiste", line: "On entend souvent dire que les jeunes « parlent mal » et que le français s'appauvrit. Je voudrais nuancer ce jugement." },
        { who: "Le linguiste", line: "D'abord, l'argot n'a rien de nouveau. Au dix-neuvième siècle, Victor Hugo consacrait déjà des pages entières à l'argot des bas-fonds parisiens." },
        { who: "Le linguiste", line: "Ensuite, la langue des jeunes est extraordinairement créative : elle emprunte à l'arabe, à l'anglais, aux langues africaines, et invente sans cesse." },
        { who: "Le linguiste", line: "Enfin, et surtout, la plupart des jeunes maîtrisent plusieurs registres. Ils parlent d'une manière avec leurs amis, d'une autre avec leurs professeurs. Ce n'est pas une faiblesse, c'est une compétence." }
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Le linguiste pense que le français s'appauvrit.", a: false },
            { s: "L'argot existait déjà au dix-neuvième siècle.", a: true },
            { s: "La langue des jeunes emprunte à plusieurs langues.", a: true },
            { s: "Selon lui, changer de registre est une compétence.", a: true }
          ]
        },
        {
          type: "tiles", title: "Résumez sa thèse",
          prompt: "Remettez les mots dans l'ordre.",
          items: [
            { a: "L'argot n'a rien de nouveau." },
            { a: "La langue des jeunes est très créative." },
            { a: "Les jeunes maîtrisent plusieurs registres." }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez cet échange de messages entre deux amis, puis le courriel qu'Hugo envoie à sa responsable.",
      title: "Deux messages, deux registres",
      text: [
        { author: "Hugo à son pote Mehdi", body: "Mec, j'suis trop dég, j'vais pas pouvoir venir à la teuf samedi. Mon boss m'a filé un dossier de ouf à boucler pour lundi. J'vais galérer tout le week-end… Désolé, on se rattrape la semaine pro ?" },
        { author: "Hugo à sa responsable", body: "Madame, je vous confirme la bonne réception du dossier. Je mettrai tout en œuvre pour vous le remettre lundi matin. Je me permets toutefois de vous signaler que certaines données me manquent ; pourriez-vous me les transmettre dès que possible ? Bien cordialement, Hugo Lambert" }
      ],
      activities: [
        {
          type: "match", title: "Familier → courant",
          prompt: "Retrouvez l'équivalent courant des mots du premier message.",
          pairs: [["dég", "déçu"], ["la teuf", "la fête"], ["mon boss", "mon responsable"], ["m'a filé", "m'a donné"], ["galérer", "avoir beaucoup de difficultés"], ["la semaine pro", "la semaine prochaine"]]
        },
        {
          type: "sort", title: "Quel registre ?",
          bins: ["Familier", "Soutenu"],
          items: [
            { text: "j'suis trop dég", bin: 0 }, { text: "un dossier de ouf", bin: 0 }, { text: "on se rattrape", bin: 0 },
            { text: "je mettrai tout en œuvre", bin: 1 }, { text: "je me permets de vous signaler", bin: 1 }, { text: "dès que possible", bin: 1 }
          ]
        }
      ]
    },

    writing: {
      intro: "Changez de registre, puis écrivez votre article.",
      activities: [
        {
          type: "rewrite", title: "Passez au registre courant",
          prompt: "Réécrivez la phrase en registre courant.",
          items: [
            { q: "J'ai pas de fric pour m'acheter une bagnole.", a: ["Je n'ai pas d'argent pour m'acheter une voiture.", "Je n'ai pas assez d'argent pour m'acheter une voiture."] },
            { q: "Ce film, je l'ai trop kiffé.", a: ["J'ai beaucoup aimé ce film.", "J'ai adoré ce film."] },
            { q: "Mon pote m'a posé un lapin.", a: ["Mon ami n'est pas venu au rendez-vous.", "Mon ami ne s'est pas présenté au rendez-vous."] },
            { q: "Ce prof est trop relou.", a: ["Ce professeur est très pénible.", "Ce professeur est vraiment pénible."] }
          ]
        },
        {
          type: "write", title: "Article : la langue des jeunes, appauvrissement ou richesse ?",
          prompt: "Rédigez un article argumenté pour une revue universitaire. Illustrez vos idées par des exemples d'argot, de verlan ou d'expressions idiomatiques (que vous expliquerez). Votre texte, lui, doit être rédigé en registre soutenu.",
          minWords: 230, maxWords: 320,
          model: "« Les jeunes ne savent plus parler. » Ce reproche, chaque génération l'adresse à la suivante depuis des siècles. Mérite-t-il qu'on s'y attarde ? À l'examen, la langue des jeunes apparaît moins comme un appauvrissement que comme un laboratoire. Prenons le verlan : inverser les syllabes de « fou » pour obtenir « ouf », de « louche » pour obtenir « chelou », suppose une conscience aiguë de la structure des mots. Loin d'ignorer la langue, ses locuteurs jouent avec elle. Il en va de même des emprunts : « kiffer », venu de l'arabe, ou « liker », issu de l'anglais, témoignent d'une société plurilingue, ouverte sur le monde. Certes, l'usage exclusif de ce lexique dans un contexte professionnel poserait problème : on ne présente pas un projet « de ouf » à un jury. Mais c'est précisément là que réside l'essentiel. La plupart des jeunes savent passer d'un registre à l'autre, du message envoyé à un ami au courriel adressé à un responsable. Cette souplesse, que les linguistes nomment « compétence plurilectale », constitue une richesse et non un défaut. Plutôt que de condamner, l'école gagnerait à en faire un objet d'étude : comparer les registres, c'est apprendre à choisir ses mots. En définitive, la langue ne s'appauvrit pas lorsqu'elle change ; elle meurt lorsqu'elle cesse de changer.",
          bank: ["Ce reproche, chaque génération…", "À l'examen,…", "Loin de…,", "Il en va de même de…", "Certes,… mais…", "C'est précisément là que…", "En définitive,…"],
          checklist: ["Mon texte est entièrement en registre soutenu.", "J'ai cité et expliqué au moins trois mots familiers ou de verlan.", "J'ai défendu une thèse nuancée.", "J'ai une conclusion frappante."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "D'un registre à l'autre",
          prompt: "Écoutez et répétez. Les phrases passent du registre courant au registre soutenu.",
          items: [
            { s: "Je n'ai pas vu mon téléphone." },
            { s: "N'auriez-vous pas aperçu mon téléphone ?" },
            { s: "Il m'a posé un lapin hier soir." },
            { s: "Ce n'est pas la mer à boire." },
            { s: "Je me fais du mauvais sang pour lui." },
            { s: "Ce projet coûte les yeux de la tête." }
          ]
        },
        {
          type: "speak", title: "Une situation, trois registres",
          prompt: "Racontez le même petit problème (un retard, un rendez-vous manqué…) trois fois : à un ami (familier), à un camarade de classe (courant), puis au directeur de votre faculté (soutenu).",
          language: ["Familier : J'suis trop en retard, désolé…", "Courant : Excuse-moi, je suis en retard…", "Soutenu : Je vous prie de bien vouloir excuser mon retard…"],
          seconds: 120,
          checklist: ["changé vraiment de vocabulaire ?", "changé de grammaire (ne, tu / vous) ?", "adapté le ton ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux distinguer quatre niveaux de langue.", review: "Explication : les niveaux de langue" },
    { can: "Je peux comprendre des mots d'argot courants.", review: "Explication : le vocabulaire ; Lire, activité 1" },
    { can: "Je peux reconnaître et expliquer le verlan.", review: "Explication : le verlan" },
    { can: "Je peux comprendre et utiliser des expressions idiomatiques.", review: "Explication : expressions idiomatiques" },
    { can: "Je peux passer du registre familier au registre soutenu.", review: "Écrire, activité 1 et Parler, activité 2" },
    { can: "Je peux écrire un article soutenu sur la langue.", review: "Écrire, activité 2" }
  ]
};
