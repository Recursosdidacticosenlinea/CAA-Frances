window.UNIT = {
  slug: "science-et-societe",
  title: "Science et société",
  level: "B2",
  subject: "La science",
  minutes: 60,
  focus: ["la voix passive", "par ou de ?", "la forme pronominale à sens passif", "la mise en relief : c'est… qui / que"],

  presentation: {
    scene: "🔬🧬🛰️",
    situation: "Le musée des sciences de la ville prépare une exposition sur les **grandes découvertes**. Une guide présente les panneaux aux étudiants.",
    warmup: {
      prompt: "Quelle invention vous semble la plus importante de l'histoire ?",
      options: ["l'imprimerie", "l'électricité", "les vaccins", "internet", "la roue", "les antibiotiques", "le téléphone", "l'énergie solaire"],
      response: "Bon choix ! Vous allez apprendre à présenter des découvertes de façon scientifique."
    },
    dialogueTitle: "La visite guidée",
    dialogue: [
      { who: "La guide", line: "Ce vaccin *a été mis au point par* Louis Pasteur en 1885. *C'est lui qui* a sauvé le jeune Joseph Meister de la rage." },
      { who: "Pablo", line: "Et ce microscope, *il a été fabriqué* quand ?" },
      { who: "La guide", line: "Au XVIIᵉ siècle. *Il était utilisé par* les premiers biologistes." },
      { who: "Sarah", line: "Et le panneau sur la radioactivité ?" },
      { who: "La guide", line: "*C'est Marie Curie qui* a reçu deux prix Nobel. La radioactivité naturelle *a été découverte* en 1896, et le polonium *a été isolé* par Marie et Pierre Curie en 1898." },
      { who: "Pablo", line: "Ces informations *se trouvent* aussi sur l'application du musée ?" },
      { who: "La guide", line: "Oui, et l'exposition *sera complétée* le mois prochain par une salle sur l'intelligence artificielle." }
    ]
  },

  objectives: [
    "Je peux former la voix passive à tous les temps.",
    "Je peux choisir entre *par* et *de* pour le complément d'agent.",
    "Je peux utiliser la forme pronominale à sens passif et *on*.",
    "Je peux mettre une information en relief avec *c'est… qui / que*."
  ],

  explanation: {
    vocabTitle: "La recherche scientifique",
    vocab: [
      { word: "une découverte", icon: "💡" }, { word: "une invention", icon: "⚙️" }, { word: "une expérience", icon: "🧪" }, { word: "un chercheur", icon: "🧑‍🔬" },
      { word: "un laboratoire", icon: "🏛️" }, { word: "une hypothèse", icon: "❓" }, { word: "démontrer", icon: "📊" }, { word: "mettre au point", icon: "🛠️" },
      { word: "un brevet", icon: "📜" }, { word: "l'éthique", icon: "⚖️" }, { word: "la génétique", icon: "🧬" }, { word: "l'espace", icon: "🚀" }
    ],
    grammar: [
      {
        title: "La voix passive",
        intro: "*être* (au temps du verbe actif) + participe passé accordé avec le sujet.",
        head: ["Temps", "Voix active", "Voix passive"],
        rows: [
          ["présent", "Les chercheurs *analysent* les données.", "Les données *sont analysées* par les chercheurs."],
          ["passé composé", "Fleming *a découvert* la pénicilline.", "La pénicilline *a été découverte* par Fleming."],
          ["imparfait", "On *utilisait* cet outil.", "Cet outil *était utilisé*."],
          ["futur", "L'ESA *lancera* le satellite.", "Le satellite *sera lancé* par l'ESA."],
          ["subjonctif", "Il faut qu'on *vérifie* les résultats.", "Il faut que les résultats *soient vérifiés*."]
        ],
        note: "Seuls les verbes avec un complément d'objet direct peuvent se mettre au passif."
      },
      {
        title: "Par ou de ? Les autres formes",
        head: ["Forme", "Exemple"],
        rows: [
          ["*par* : action concrète", "Le prix a été remis *par* le président."],
          ["*de* : sentiment, état, description", "Elle est aimée *de* tous. La salle est entourée *de* jardins."],
          ["*on* (agent inconnu)", "*On* a découvert un nouveau virus."],
          ["forme pronominale", "Ce médicament *se vend* en pharmacie. Le français *se parle* sur cinq continents."]
        ]
      },
      {
        title: "La mise en relief",
        head: ["Pour insister sur…", "Structure", "Exemple"],
        rows: [
          ["le sujet", "*C'est… qui*", "*C'est* Marie Curie *qui* a découvert le polonium."],
          ["le complément", "*C'est… que*", "*C'est* en 1898 *qu'*elle l'a découvert."],
          ["une idée", "*Ce qui / Ce que…, c'est…*", "*Ce qui* m'intéresse, *c'est* la génétique."]
        ]
      }
    ],
    watchOut: [
      ["La découverte a été fait en 1928.", "La découverte a été faite en 1928."],
      ["Le vaccin a découvert par Pasteur.", "Le vaccin a été découvert par Pasteur."],
      ["C'est Pasteur que a créé le vaccin.", "C'est Pasteur qui a créé le vaccin."],
      ["Il est respecté par tout le monde. (sentiment)", "Il est respecté de tous."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Mettez à la voix passive ou complétez.",
      items: ["La lampe [[a été inventée|a ete inventee]] par Edison. (inventer, passé composé)", "Les résultats [[seront publiés|seront publies]] demain. (publier, futur)", "C'est Einstein [[qui]] a formulé la relativité."]
    }
  },

  skills: {
    listening: {
      intro: "Écoutez un extrait d'une émission de vulgarisation scientifique.",
      title: "La Minute Science : l'ARN messager",
      script: [
        { who: "Le présentateur", line: "Aujourd'hui, une découverte qui a changé notre époque : l'ARN messager." },
        { who: "Le présentateur", line: "L'idée d'utiliser l'ARN pour soigner a été défendue pendant des décennies par la biochimiste Katalin Karikó. Ses travaux ont longtemps été ignorés, et ses demandes de financement étaient régulièrement refusées." },
        { who: "Le présentateur", line: "C'est en 2005 qu'elle a publié, avec Drew Weissman, un article décisif. Mais c'est seulement en 2020 que cette technologie a été utilisée à grande échelle, pour les vaccins contre le Covid-19." },
        { who: "Le présentateur", line: "En 2023, le prix Nobel de médecine leur a été attribué. Aujourd'hui, l'ARN messager est étudié pour soigner certains cancers. Comme quoi, la persévérance finit par être récompensée !" }
      ],
      activities: [
        {
          type: "gap", title: "Les dates",
          prompt: "Complétez.",
          items: ["L'article décisif a été publié en [[2005]].", "La technologie a été utilisée à grande échelle en [[2020]].", "Le prix Nobel leur a été attribué en [[2023]]."]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Les travaux de Karikó ont été immédiatement reconnus.", a: false },
            { s: "Ses demandes de financement étaient souvent refusées.", a: true },
            { s: "L'ARN messager est étudié pour soigner des cancers.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez cet article sur les enjeux éthiques de la génétique.",
      title: "Modifier les gènes : jusqu'où ?",
      text: [
        "En 2012, une technique révolutionnaire a été mise au point par Emmanuelle Charpentier et Jennifer Doudna : CRISPR-Cas9, surnommée les « ciseaux génétiques ». Grâce à elle, l'ADN peut être modifié avec une précision inédite. Ces deux chercheuses ont été récompensées par le prix Nobel de chimie en 2020.",
        "Les applications sont immenses : des maladies héréditaires pourraient être guéries, des plantes plus résistantes à la sécheresse sont déjà cultivées. Mais ce qui inquiète la communauté scientifique, ce sont les dérives possibles.",
        "En 2018, un chercheur chinois a annoncé la naissance de deux bébés génétiquement modifiés. Il a été condamné par la justice de son pays et l'expérience a été dénoncée par les scientifiques du monde entier. C'est pourquoi de nombreux pays exigent que la modification de l'embryon humain soit strictement encadrée."
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "CRISPR-Cas9 a été mise au point par deux chercheuses.", a: true },
            { s: "Elles ont reçu le prix Nobel de médecine.", a: false },
            { s: "L'expérience de 2018 a été félicitée par la communauté scientifique.", a: false },
            { s: "Beaucoup de pays veulent encadrer la modification de l'embryon.", a: true }
          ]
        },
        {
          type: "sort", title: "Actif ou passif ?",
          prompt: "Classez les phrases du texte.",
          bins: ["Voix passive", "Voix active"],
          items: [
            { text: "une technique a été mise au point", bin: 0 }, { text: "l'ADN peut être modifié", bin: 0 }, { text: "il a été condamné", bin: 0 },
            { text: "un chercheur a annoncé", bin: 1 }, { text: "de nombreux pays exigent", bin: 1 }
          ]
        }
      ]
    },

    writing: {
      intro: "Transformez, puis rédigez un panneau d'exposition.",
      activities: [
        {
          type: "rewrite", title: "À la voix passive",
          prompt: "Transformez à la voix passive.",
          items: [
            { q: "Gutenberg a inventé l'imprimerie.", a: ["L'imprimerie a été inventée par Gutenberg."] },
            { q: "Les étudiants présenteront le projet.", a: ["Le projet sera présenté par les étudiants."] },
            { q: "Un robot contrôle la production.", a: ["La production est contrôlée par un robot."] },
            { q: "Tout le monde admire cette chercheuse.", a: ["Cette chercheuse est admirée de tous.", "Cette chercheuse est admirée de tout le monde.", "Cette chercheuse est admirée par tout le monde."] }
          ]
        },
        {
          type: "write", title: "Un panneau pour l'exposition",
          prompt: "Rédigez le panneau d'une exposition sur une découverte ou un(e) scientifique de votre pays ou de votre domaine d'études. Utilisez la voix passive, la forme pronominale et la mise en relief.",
          minWords: 150, maxWords: 220,
          model: "Guillermo González Camarena et la télévision couleur. C'est en 1940 qu'un jeune ingénieur mexicain de 23 ans, Guillermo González Camarena, a déposé le brevet d'un système de télévision en couleurs. Son invention, appelée « système trichromatique séquentiel de champs », a été brevetée au Mexique, puis aux États-Unis. Plus tard, elle a été utilisée pour les premières émissions en couleurs de la télévision mexicaine. Ce qui est remarquable, c'est que l'ingénieur avait construit ses premiers appareils avec des pièces récupérées. Aujourd'hui, son nom est connu de nombreux étudiants en communication, et son histoire se raconte dans les écoles d'ingénieurs. Son histoire montre que l'innovation peut naître partout.",
          bank: ["C'est en… que…", "a été inventé(e) par…", "a été utilisé(e) par…", "Ce qui est remarquable, c'est que…", "est connu(e) de…", "se trouve / se conserve…"],
          checklist: ["J'ai utilisé la voix passive à trois temps différents.", "J'ai utilisé *par* et *de*.", "J'ai utilisé une forme pronominale à sens passif.", "J'ai utilisé deux mises en relief."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Présentez une découverte",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "La pénicilline a été découverte par hasard." },
            { s: "C'est une chercheuse qui a reçu deux prix Nobel." },
            { s: "Ce vaccin a été mis au point par un chercheur français." },
            { s: "Ces résultats seront publiés le mois prochain." },
            { s: "Ce médicament se vend en pharmacie." },
            { s: "Ce qui m'intéresse, c'est la génétique." }
          ]
        },
        {
          type: "speak", title: "Débat éthique",
          prompt: "Donnez votre avis : « Faut-il tout autoriser au nom du progrès scientifique ? » Prenez un exemple (génétique, IA, expérimentation animale…).",
          language: ["Ce qui me pose problème, c'est…", "Ces recherches devraient être encadrées par…", "C'est la société qui doit décider…"],
          seconds: 90,
          checklist: ["donné un exemple précis ?", "utilisé la mise en relief ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux former la voix passive à différents temps.", review: "Explication : la voix passive ; Écrire, activité 1" },
    { can: "Je peux accorder le participe passé au passif.", review: "Explication : la voix passive" },
    { can: "Je peux choisir entre *par* et *de*.", review: "Explication : par ou de ?" },
    { can: "Je peux utiliser la forme pronominale à sens passif.", review: "Explication : les autres formes" },
    { can: "Je peux mettre une information en relief.", review: "Explication : la mise en relief" },
    { can: "Je peux présenter une découverte scientifique.", review: "Écrire, activité 2 et Parler, activité 1" }
  ]
};
