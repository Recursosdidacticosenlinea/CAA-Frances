window.UNIT = {
  slug: "a-la-une",
  title: "À la une",
  level: "B2",
  subject: "Les médias",
  minutes: 60,
  focus: ["la presse et l'information", "le gérondif", "le participe présent", "la nominalisation dans les titres"],

  presentation: {
    scene: "📰🗞️📡",
    situation: "Dans la rédaction du journal étudiant, Théo et Lucie préparent la **une** du prochain numéro. Ils choisissent les titres et rédigent les articles.",
    warmup: {
      prompt: "Comment vous informez-vous ?",
      options: ["les réseaux sociaux", "les journaux en ligne", "la télévision", "la radio", "les podcasts", "les newsletters", "la presse papier", "mes amis et ma famille"],
      response: "Merci ! Vous allez découvrir la langue de la presse."
    },
    dialogueTitle: "La conférence de rédaction",
    dialogue: [
      { who: "Lucie", line: "Pour la une, je propose : « *Hausse* des loyers étudiants : la colère monte »." },
      { who: "Théo", line: "Bien. *En lisant* les témoignages, on comprend que la situation est grave." },
      { who: "Lucie", line: "J'ai interviewé une étudiante *travaillant* vingt heures par semaine pour payer son studio." },
      { who: "Théo", line: "Et le deuxième sujet ? L'*inauguration* de la nouvelle bibliothèque ?" },
      { who: "Lucie", line: "Oui : « *Ouverture* de la médiathèque : les étudiants conquis ». Le recteur l'a inaugurée *en coupant* le ruban hier." },
      { who: "Théo", line: "Parfait. *En publiant* ces deux articles, on montre les deux visages de la vie étudiante." },
      { who: "Lucie", line: "Je rédige tout ça *en écoutant* de la musique, et c'est bouclé ce soir !" }
    ]
  },

  objectives: [
    "Je peux utiliser le vocabulaire de la presse.",
    "Je peux former et utiliser le gérondif (*en + participe présent*).",
    "Je peux utiliser le participe présent à l'écrit.",
    "Je peux transformer une phrase en titre de presse (nominalisation)."
  ],

  explanation: {
    vocabTitle: "La presse",
    vocab: [
      { word: "la une", icon: "📰" }, { word: "un titre", icon: "🔠" }, { word: "le chapeau", icon: "🎩" }, { word: "un éditorial", icon: "✍️" },
      { word: "une rubrique", icon: "🗂️" }, { word: "un reportage", icon: "🎥" }, { word: "un fait divers", icon: "🚨" }, { word: "une source", icon: "🔍" },
      { word: "la rédaction", icon: "🏢" }, { word: "un(e) journaliste", icon: "🧑‍💻" }, { word: "une fausse nouvelle", icon: "❌" }, { word: "vérifier", icon: "✔️" }
    ],
    grammar: [
      {
        title: "Le participe présent et le gérondif",
        intro: "Formation : radical de *nous* au présent + *-ant* (*nous lisons → lisant*). Exceptions : *étant, ayant, sachant*.",
        head: ["Forme", "Usage", "Exemple"],
        rows: [
          ["gérondif *en + -ant*", "simultanéité (même sujet)", "Elle travaille *en écoutant* de la musique."],
          ["gérondif", "manière, moyen", "Il a appris le français *en regardant* des films."],
          ["gérondif", "condition", "*En partant* maintenant, tu arriveras à l'heure."],
          ["participe présent", "= *qui* + verbe (écrit, presse)", "Une étudiante *travaillant* le soir (= qui travaille)."],
          ["participe présent", "cause (début de phrase)", "*Étant* malade, il n'est pas venu."]
        ],
        note: "Le gérondif et le participe présent sont **invariables** : *des étudiantes travaillant…*"
      },
      {
        title: "La nominalisation : le style des titres",
        intro: "Les titres de presse remplacent souvent le verbe par un nom.",
        head: ["Phrase verbale", "Titre nominal"],
        rows: [
          ["Les loyers *augmentent*.", "*Hausse* des loyers"],
          ["La médiathèque *ouvre*.", "*Ouverture* de la médiathèque"],
          ["Le ministre *démissionne*.", "*Démission* du ministre"],
          ["Les étudiants *manifestent*.", "*Manifestation* des étudiants"],
          ["Le chômage *baisse*.", "*Baisse* du chômage"],
          ["On *découvre* un trésor.", "*Découverte* d'un trésor"]
        ],
        note: "Suffixes fréquents : *-tion, -ment, -age, -ure, -ée* ou nom sans suffixe (*hausse, baisse, recul*)."
      }
    ],
    watchOut: [
      ["En étant fatigué, il dort. (cause)", "Étant fatigué, il dort."],
      ["Il lit en mange.", "Il lit en mangeant."],
      ["des femmes travaillantes ici (= qui travaillent)", "des femmes travaillant ici"],
      ["En sortant de la maison, la pluie a commencé.", "Quand je suis sorti de la maison, la pluie a commencé."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez.",
      items: ["Il s'informe [[en écoutant|en ecoutant]] la radio. (écouter, gérondif)", "Les prix augmentent → [[Hausse|Augmentation]] des prix", "[[Ayant]] fini son article, elle est partie. (avoir)"]
    }
  },

  skills: {
    listening: {
      intro: "Écoutez le journal de 8 heures de Radio Campus.",
      title: "Le journal de 8 heures",
      script: [
        { who: "Le présentateur", line: "Bonjour, il est 8 heures. Voici les titres de l'actualité." },
        { who: "Le présentateur", line: "Grève des transports : en raison d'un mouvement social, seulement un bus sur deux circulera aujourd'hui. Les étudiants sont invités à partir plus tôt." },
        { who: "Le présentateur", line: "Succès pour la nouvelle médiathèque : plus de deux mille visiteurs ont franchi ses portes en trois jours. Les étudiants l'ont adoptée en appréciant surtout ses salles de travail en groupe." },
        { who: "Le présentateur", line: "Enfin, dans le domaine sportif, victoire de l'équipe de basket universitaire, qui s'est qualifiée pour la finale nationale en battant Bordeaux 78 à 74." },
        { who: "Le présentateur", line: "Restez avec nous : la météo, c'est juste après." }
      ],
      activities: [
        {
          type: "match", title: "Les titres",
          prompt: "Associez le sujet et l'information.",
          pairs: [["les transports", "un bus sur deux"], ["la médiathèque", "deux mille visiteurs en trois jours"], ["le basket", "qualification pour la finale"]]
        },
        {
          type: "gap", title: "Les gérondifs",
          prompt: "Complétez avec le gérondif entendu.",
          items: ["Les étudiants l'ont adoptée [[en appréciant|en appreciant]] ses salles de travail.", "L'équipe s'est qualifiée [[en battant]] Bordeaux."]
        }
      ]
    },

    reading: {
      intro: "Lisez cet article du journal étudiant.",
      title: "Logement étudiant : le cri d'alarme",
      text: [
        "**Hausse des loyers, pénurie de chambres : la rentrée s'annonce difficile pour des milliers d'étudiants.**",
        "Selon une enquête publiée cette semaine par l'association Étudiants solidaires, les loyers des studios ont augmenté de 8 % en un an. Résultat : de nombreux jeunes, ne trouvant pas de logement, vivent chez des amis ou dorment dans leur voiture.",
        "« J'ai visité quinze appartements en deux semaines. En voyant les prix, j'ai pensé abandonner mes études », témoigne Clara, 19 ans, étudiante en histoire. Ayant finalement trouvé une chambre à quarante minutes du campus, elle travaille le week-end pour la payer.",
        "Face à cette situation, l'université promet la construction de 300 nouveaux logements d'ici 2027. Une annonce jugée insuffisante par les syndicats étudiants, réclamant un plafonnement des loyers."
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Les loyers ont augmenté de 8 % en un an.", a: true },
            { s: "Clara a trouvé un logement très près du campus.", a: false },
            { s: "Clara travaille le week-end pour payer sa chambre.", a: true },
            { s: "Les syndicats sont satisfaits de l'annonce de l'université.", a: false }
          ]
        },
        {
          type: "rewrite", title: "Reformulez avec qui / parce que / quand",
          prompt: "Reformulez le passage souligné sans participe ni gérondif.",
          items: [
            { q: "de nombreux jeunes, ne trouvant pas de logement, … → de nombreux jeunes, qui…", a: ["de nombreux jeunes, qui ne trouvent pas de logement"] },
            { q: "En voyant les prix, j'ai pensé abandonner. → Quand…", a: ["Quand j'ai vu les prix, j'ai pensé abandonner."] },
            { q: "Ayant trouvé une chambre, elle travaille. → Comme…", a: ["Comme elle a trouvé une chambre, elle travaille."] },
            { q: "les syndicats, réclamant un plafonnement → les syndicats, qui…", a: ["les syndicats, qui réclament un plafonnement"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Créez des titres, puis rédigez votre article.",
      activities: [
        {
          type: "rewrite", title: "Faites des titres",
          prompt: "Transformez la phrase en titre de presse (nominalisation).",
          items: [
            { q: "Le prix de l'essence baisse.", a: ["Baisse du prix de l'essence"] },
            { q: "Le musée du Louvre ferme.", a: ["Fermeture du musée du Louvre"] },
            { q: "Les infirmiers manifestent.", a: ["Manifestation des infirmiers"] },
            { q: "On arrête un voleur de tableaux.", a: ["Arrestation d'un voleur de tableaux"] },
            { q: "Le festival est annulé.", a: ["Annulation du festival"] }
          ]
        },
        {
          type: "write", title: "Mon article pour le journal",
          prompt: "Rédigez un article pour le journal de votre université sur un événement réel ou imaginaire du campus. Structure : titre nominal, chapeau (le résumé), corps de l'article avec un témoignage. Utilisez au moins trois gérondifs ou participes présents.",
          minWords: 160, maxWords: 220,
          model: "Inauguration d'un potager sur le campus. Depuis lundi, les étudiants de la faculté de biologie peuvent cultiver leurs propres légumes dans un potager de 500 m², situé derrière la bibliothèque. Le projet, lancé par l'association Campus Vert, a été financé par l'université à hauteur de 20 000 pesos. « En participant à ce projet, j'ai appris énormément sur l'agriculture urbaine », explique Mariana, 21 ans. Les légumes récoltés seront distribués gratuitement aux étudiants ayant des difficultés financières. Les organisateurs espèrent sensibiliser la communauté en organisant des ateliers chaque vendredi. Ayant déjà reçu plus de cent inscriptions, l'association envisage d'agrandir le potager l'année prochaine.",
          bank: ["Inauguration / Ouverture / Lancement de…", "Selon…", "« … », explique…", "En participant…", "ayant…", "Les organisateurs espèrent…"],
          checklist: ["Mon titre est nominal.", "J'ai écrit un chapeau qui résume l'information.", "J'ai cité un témoignage.", "J'ai utilisé trois gérondifs ou participes présents."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Le ton du journaliste",
          prompt: "Écoutez et répétez comme un présentateur de radio.",
          items: [
            { s: "Bonjour, voici les titres de l'actualité." },
            { s: "Hausse des loyers étudiants : la colère monte." },
            { s: "Ouverture de la nouvelle médiathèque." },
            { s: "Il a appris le français en regardant des films." },
            { s: "En partant maintenant, tu arriveras à l'heure." },
            { s: "Restez avec nous, la météo, c'est juste après." }
          ]
        },
        {
          type: "speak", title: "Le flash info",
          prompt: "Présentez un flash info d'une minute et demie avec trois nouvelles (campus, ville, monde). Commencez chaque nouvelle par un titre nominal.",
          language: ["Bonjour, voici les titres de l'actualité.", "Hausse de… / Ouverture de…", "Selon…", "en raison de…", "Restez avec nous…"],
          model: [
            { who: "Le présentateur", line: "Bonjour, voici les titres. Ouverture d'une nouvelle piste cyclable : en reliant la gare au campus, elle permettra aux étudiants de gagner vingt minutes. Victoire de l'équipe de football féminine, qui s'est qualifiée en marquant dans les dernières secondes." }
          ],
          seconds: 90,
          checklist: ["présenté trois nouvelles ?", "utilisé des titres nominaux ?", "utilisé un gérondif ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux utiliser le vocabulaire de la presse.", review: "Explication : le vocabulaire" },
    { can: "Je peux former le participe présent et le gérondif.", review: "Explication : le participe présent et le gérondif" },
    { can: "Je peux utiliser le gérondif pour la simultanéité, la manière et la condition.", review: "Explication : le gérondif" },
    { can: "Je peux comprendre et reformuler un participe présent.", review: "Lire, activité 2" },
    { can: "Je peux transformer une phrase en titre nominal.", review: "Explication : la nominalisation ; Écrire, activité 1" },
    { can: "Je peux rédiger un article de presse court.", review: "Écrire, activité 2" }
  ]
};
