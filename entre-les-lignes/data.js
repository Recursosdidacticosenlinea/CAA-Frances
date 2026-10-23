window.UNIT = {
  slug: "entre-les-lignes",
  title: "Entre les lignes",
  level: "C2",
  subject: "Communiquer",
  speakers: { "L'oncle": "m", "La tante": "f" },
  minutes: 65,
  focus: ["l'implicite : présupposés et sous-entendus", "l'ironie et l'antiphrase", "les jeux de mots", "interpréter ce qui n'est pas dit"],

  presentation: {
    scene: "😏🎭💬",
    situation: "Lors d'un dîner, Claire raconte qu'elle a enfin terminé son mémoire. Son oncle lance : « Ah, *enfin* ! On commençait à croire que tu ferais ça toute ta vie. » Tout le monde rit… sauf Claire. Qu'a-t-il **vraiment** dit ?",
    warmup: {
      prompt: "Dans quelles situations dit-on le contraire de ce qu'on pense ?",
      options: ["pour être poli", "pour plaisanter", "pour critiquer", "pour éviter un conflit", "par ironie", "pour flatter", "jamais"],
      response: "Exactement ! Le sens d'un énoncé dépasse souvent ses mots. Explorons cet implicite."
    },
    dialogueTitle: "Le dîner de famille",
    dialogue: [
      { who: "Claire", line: "J'ai *enfin* rendu mon mémoire !" },
      { who: "L'oncle", line: "Ah, *enfin* ! On commençait à croire que tu ferais ça toute ta vie." },
      { who: "Claire", line: "Merci… *Quel encouragement*, vraiment." },
      { who: "La tante", line: "Ne l'écoute pas. Il *a arrêté* ses études à dix-huit ans, alors forcément…" },
      { who: "L'oncle", line: "Moi ? Je dis ça, je dis rien." },
      { who: "Claire", line: "Évidemment. *Tu ne dis jamais rien*, toi." }
    ]
  },

  objectives: [
    "Je peux distinguer présupposé et sous-entendu.",
    "Je peux reconnaître et produire l'ironie (antiphrase, litote, hyperbole ironique).",
    "Je peux comprendre et créer des jeux de mots.",
    "Je peux interpréter et analyser l'implicite d'un échange."
  ],

  explanation: {
    vocabTitle: "Les mots de l'implicite",
    vocab: [
      { word: "l'implicite", icon: "🫥" }, { word: "un présupposé", icon: "📎" }, { word: "un sous-entendu", icon: "😏" }, { word: "insinuer", icon: "🐍" },
      { word: "l'ironie", icon: "🙃" }, { word: "une antiphrase", icon: "🔄" }, { word: "un jeu de mots", icon: "🎲" }, { word: "un calembour", icon: "😂" },
      { word: "le second degré", icon: "🎭" }, { word: "une allusion", icon: "👉" }, { word: "une pique", icon: "📌" }, { word: "le non-dit", icon: "🤐" }
    ],
    grammar: [
      {
        title: "Présupposé et sous-entendu",
        head: ["Notion", "Définition", "Exemple"],
        rows: [
          ["*présupposé*", "information contenue dans la phrase, qui reste vraie même à la forme négative", "*Il a arrêté de fumer.* → présupposé : il fumait avant."],
          ["*sous-entendu*", "information que l'on déduit du contexte ; le locuteur peut la nier", "*Il fait froid ici.* → sous-entendu : ferme la fenêtre."],
          ["marqueurs de présupposé", "*enfin, encore, déjà, ne… plus, arrêter de, recommencer, regretter que*", "*Tu es encore en retard.* → tu l'as déjà été."]
        ],
        note: "Le sous-entendu permet de dire sans dire : *Je dis ça, je dis rien* est la formule même du sous-entendu… qu'on ne peut pas reprocher."
      },
      {
        title: "Les procédés de l'ironie",
        head: ["Procédé", "Exemple", "Sens réel"],
        rows: [
          ["*antiphrase*", "« Bravo, quelle belle réussite ! » (après un échec)", "c'est un échec"],
          ["*hyperbole ironique*", "« Tu es d'une ponctualité légendaire. »", "tu es toujours en retard"],
          ["*litote*", "« Ce n'est pas du génie. »", "c'est médiocre"],
          ["*fausse question*", "« Tu as pensé à regarder l'heure ? »", "tu es en retard"],
          ["*marqueurs*", "*vraiment, évidemment, quel(le)…, comme c'est…*, ton, mimique", "signalent le second degré"]
        ]
      },
      {
        title: "Les jeux de mots",
        head: ["Type", "Exemple"],
        rows: [
          ["*calembour* (sons identiques)", "« Le vin d'ici est meilleur que l'eau de là. » (*l'au-delà*)"],
          ["*double sens*", "« Ce chirurgien a le bras long. » (influence / bras)"],
          ["*défigement* d'une expression", "« Il pleut des cordes… à linge. »"],
          ["*paronomase* (sons proches)", "« Qui se ressemble s'assemble. »"]
        ],
        note: "Les titres de presse et la publicité en raffolent : *« Les soldes font des heureux… et des malheureux »*."
      }
    ],
    watchOut: [
      ["« Il a arrêté de fumer » : on ne sait pas s'il fumait.", "Le présupposé dit qu'il fumait avant."],
      ["L'ironie, c'est un mensonge.", "L'ironie veut être comprise ; le mensonge veut tromper."],
      ["« Ce n'est pas mauvais » = c'est mauvais.", "C'est une litote : c'est plutôt bon."],
      ["Le sous-entendu est dans les mots.", "Le sous-entendu est dans le contexte."]
    ],
    check: {
      type: "match", title: "Vérification rapide",
      prompt: "Associez l'énoncé et ce qu'il implique.",
      pairs: [["« Tu es encore malade ? »", "présupposé : tu l'as déjà été"], ["« Il fait chaud ici… »", "sous-entendu : ouvre la fenêtre"], ["« Bravo, quel talent ! » (après une chute)", "antiphrase ironique"], ["« Ce n'est pas bête. »", "litote : c'est intelligent"]]
    }
  },

  skills: {
    listening: {
      intro: "Écoutez cet échange entre deux collègues à la machine à café.",
      title: "À la machine à café",
      script: [
        { who: "Inès", line: "Tu as vu ? Marc a encore été promu." },
        { who: "Louis", line: "Ah oui ? Comme c'est surprenant. Il faut dire qu'il passe tellement de temps dans le bureau du directeur…" },
        { who: "Inès", line: "Tu insinues quoi, exactement ?" },
        { who: "Louis", line: "Moi ? Rien du tout. Je constate simplement qu'il a un talent remarquable pour se rendre indispensable. Surtout à l'heure du déjeuner." },
        { who: "Inès", line: "Tu sais, il travaille aussi le week-end." },
        { who: "Louis", line: "Bien sûr. Et moi, je suis le pape." }
      ],
      activities: [
        {
          type: "match", title: "Que veut vraiment dire Louis ?",
          pairs: [["« Comme c'est surprenant. »", "ce n'est pas du tout surprenant"], ["« il passe tellement de temps dans le bureau du directeur »", "il flatte le directeur"], ["« un talent remarquable pour se rendre indispensable »", "il se rend utile par opportunisme"], ["« Et moi, je suis le pape. »", "je ne te crois pas"]]
        },
        {
          type: "tf", title: "Présupposé ou sous-entendu ?",
          items: [
            { s: "« Marc a encore été promu » présuppose qu'il l'a déjà été.", a: true },
            { s: "Louis dit explicitement que Marc est malhonnête.", a: false },
            { s: "Louis peut nier ce qu'il sous-entend.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez ce célèbre extrait de Montesquieu, *De l'esprit des lois* (1748), domaine public. L'auteur fait semblant de défendre l'esclavage pour mieux le dénoncer.",
      title: "Montesquieu, « De l'esclavage des nègres » (extrait)",
      text: [
        "« Si j'avais à soutenir le droit que nous avons eu de rendre les nègres esclaves, voici ce que je dirais :",
        "Le sucre serait trop cher, si l'on ne faisait travailler la plante qui le produit par des esclaves.",
        "On ne peut se mettre dans l'esprit que Dieu, qui est un être très sage, ait mis une âme, surtout une âme bonne, dans un corps tout noir.",
        "Il est impossible que nous supposions que ces gens-là soient des hommes ; parce que, si nous les supposions des hommes, on commencerait à croire que nous ne sommes pas nous-mêmes chrétiens. »"
      ],
      activities: [
        {
          type: "tf", title: "Comprendre l'ironie",
          items: [
            { s: "Montesquieu défend réellement l'esclavage.", a: false },
            { s: "Le conditionnel « je dirais » met à distance les arguments.", a: true },
            { s: "L'argument du sucre montre l'absurdité d'un intérêt économique face à la dignité humaine.", a: true },
            { s: "La dernière phrase suggère que les esclavagistes ne sont pas de vrais chrétiens.", a: true }
          ]
        },
        {
          type: "match", title: "Procédé et effet",
          pairs: [["« Si j'avais à soutenir… voici ce que je dirais »", "mise à distance par l'hypothèse"], ["« Le sucre serait trop cher »", "argument dérisoire qui révèle l'absurde"], ["« Dieu, qui est un être très sage »", "fausse logique ironique"], ["« nous ne sommes pas nous-mêmes chrétiens »", "retournement de l'accusation"]]
        }
      ]
    },

    writing: {
      intro: "Décodez, puis écrivez à votre tour avec ironie.",
      activities: [
        {
          type: "rewrite", title: "Dites-le explicitement",
          prompt: "Reformulez le sens réel de l'énoncé ironique ou implicite.",
          items: [
            { q: "« Quelle ponctualité ! » (il arrive avec une heure de retard)", a: ["Tu es très en retard.", "Il est très en retard.", "Tu es vraiment en retard."] },
            { q: "« Ce n'est pas le plus mauvais film de l'année. »", a: ["C'est un assez bon film.", "C'est plutôt un bon film.", "Ce film est assez bon."] },
            { q: "« Tu as fini de parler au téléphone ? » (au cinéma)", a: ["Arrête de parler au téléphone.", "Arrête de téléphoner."] }
          ]
        },
        {
          type: "write", title: "Billet d'humeur ironique",
          prompt: "Rédigez un billet d'humeur pour un journal, sur un travers de notre époque (l'obsession des écrans, les réunions inutiles, la course au « like », etc.). Faites semblant d'en faire l'éloge pour mieux le critiquer, à la manière de Montesquieu. Utilisez au moins quatre procédés de l'implicite ou de l'ironie.",
          minWords: 230, maxWords: 320,
          model: "Éloge de la réunion. On a beaucoup médit des réunions. C'est méconnaître leurs immenses vertus. La réunion, d'abord, est un remède souverain contre la solitude : où trouver ailleurs, chaque matin, quinze personnes réunies pour écouter quelqu'un lire à voix haute un document que chacun a reçu la veille ? La réunion est aussi une école de patience. Il faut un véritable héroïsme pour entendre, sans broncher, un collègue reformuler pour la troisième fois ce que deux autres viennent de dire. Que l'on ne m'accuse pas d'exagérer : je n'ai jamais vu une réunion qui n'ait débouché sur une décision essentielle, à savoir la date de la réunion suivante. Certains esprits chagrins prétendent que l'on pourrait remplacer une heure de discussion par un courriel de trois lignes. Quelle idée saugrenue ! Ce serait priver nos entreprises de ces précieux moments où chacun, l'œil perdu dans son téléphone, réfléchit intensément à sa liste de courses. Je propose donc, dans un souci d'efficacité, d'instaurer une réunion quotidienne consacrée à l'organisation des réunions. Les collègues qui ont encore du travail à faire n'auront qu'à le faire le week-end. Après tout, ce n'est pas comme si nous avions autre chose à faire.",
          bank: ["On a beaucoup médit de…", "C'est méconnaître…", "Que l'on ne m'accuse pas de…", "Quelle idée saugrenue !", "Je propose donc…", "Après tout,…"],
          checklist: ["J'ai fait semblant de défendre ce que je critique.", "J'ai utilisé l'antiphrase et l'hyperbole ironique.", "J'ai glissé au moins un présupposé ou un sous-entendu.", "Le lecteur comprend clairement ma vraie position."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Le ton de l'ironie",
          prompt: "Écoutez et répétez. Faites entendre l'ironie par l'intonation.",
          items: [
            { s: "Bravo, quelle belle réussite !" },
            { s: "Tu es d'une ponctualité légendaire." },
            { s: "Ce n'est pas du génie." },
            { s: "Comme c'est surprenant." },
            { s: "Je dis ça, je dis rien." },
            { s: "Ce n'est pas comme si nous étions pressés." }
          ]
        },
        {
          type: "speak", title: "Analyse d'un échange implicite",
          prompt: "Choisissez une scène de film, une publicité ou une conversation réelle qui joue sur l'implicite ou l'ironie. Présentez-la, puis expliquez ce qui est dit, présupposé et sous-entendu (deux minutes).",
          language: ["Dans cette scène,…", "Littéralement, il dit que…", "Mais il sous-entend que…", "Le présupposé est que…", "L'ironie repose sur…"],
          seconds: 120,
          checklist: ["distingué présupposé et sous-entendu ?", "expliqué le procédé ironique ?", "analysé l'effet sur l'interlocuteur ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux distinguer présupposé et sous-entendu.", review: "Explication : présupposé et sous-entendu" },
    { can: "Je peux repérer les marqueurs de présupposé (*encore, enfin, arrêter de…*).", review: "Explication ; Écouter, activité 2" },
    { can: "Je peux reconnaître l'antiphrase, la litote et l'hyperbole ironique.", review: "Explication : les procédés de l'ironie" },
    { can: "Je peux comprendre et créer des jeux de mots.", review: "Explication : les jeux de mots" },
    { can: "Je peux analyser l'ironie d'un texte littéraire.", review: "Lire" },
    { can: "Je peux écrire un texte ironique.", review: "Écrire, activité 2" }
  ]
};
