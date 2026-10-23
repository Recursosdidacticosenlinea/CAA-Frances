window.UNIT = {
  slug: "une-drole-d-histoire",
  title: "Une drôle d'histoire",
  level: "B1",
  subject: "Raconter",
  minutes: 60,
  focus: ["passé composé ou imparfait ?", "le décor et les actions", "les marqueurs du récit", "raconter une anecdote"],

  presentation: {
    scene: "📖😂🌧️",
    situation: "Léa raconte à ses amis une **anecdote** incroyable qui lui est arrivée la semaine dernière à la bibliothèque.",
    warmup: {
      prompt: "Quel type d'histoire vous aimez raconter ?",
      options: ["une histoire drôle", "une histoire qui fait peur", "un voyage", "une rencontre", "un accident bizarre", "un rêve", "une coïncidence"],
      response: "Super ! Vous allez apprendre à raconter une histoire au passé."
    },
    dialogueTitle: "L'histoire de Léa",
    dialogue: [
      { who: "Léa", line: "Vous ne devinerez jamais ce qui m'est arrivé jeudi !" },
      { who: "Hugo", line: "Raconte !" },
      { who: "Léa", line: "*Il était* huit heures du soir. *Il pleuvait* et *la bibliothèque était* presque vide. *Je révisais* pour mon examen…" },
      { who: "Hugo", line: "Et alors ?" },
      { who: "Léa", line: "*Tout à coup*, les lumières *se sont éteintes* ! *J'ai entendu* un bruit derrière moi." },
      { who: "Chloé", line: "Oh là là ! Tu *as eu* peur ?" },
      { who: "Léa", line: "Très peur ! *Je me suis retournée* et… *j'ai vu* le chat du bibliothécaire ! *Il avait* fait tomber l'interrupteur !" },
      { who: "Hugo", line: "Ha ha ! Quelle histoire !" }
    ]
  },

  objectives: [
    "Je peux distinguer l'imparfait (décor) et le passé composé (actions).",
    "Je peux utiliser les marqueurs du récit : *soudain, tout à coup, ensuite, finalement…*",
    "Je peux comprendre une anecdote racontée à l'oral et à l'écrit.",
    "Je peux raconter une anecdote personnelle."
  ],

  explanation: {
    vocabTitle: "Les mots du récit",
    vocab: [
      { word: "une anecdote", icon: "💬" }, { word: "un souvenir", icon: "🧠" }, { word: "soudain", icon: "⚡" }, { word: "tout à coup", icon: "💥" },
      { word: "d'abord", icon: "1️⃣" }, { word: "ensuite", icon: "2️⃣" }, { word: "à ce moment-là", icon: "⏱️" }, { word: "finalement", icon: "🏁" },
      { word: "avoir peur", icon: "😱" }, { word: "éclater de rire", icon: "😂" }, { word: "se rendre compte", icon: "💡" }, { word: "par hasard", icon: "🎲" }
    ],
    grammar: [
      {
        title: "Imparfait ou passé composé ?",
        head: ["Imparfait = le décor 🎬", "Passé composé = les actions ▶️"],
        rows: [
          ["la description : *Il faisait nuit. La rue était calme.*", "une action ponctuelle : *Un homme est entré.*"],
          ["une action en cours : *Je lisais…*", "une action qui interrompt : *…quand le téléphone a sonné.*"],
          ["les sentiments, l'état : *J'étais fatigué.*", "une succession d'actions : *Je me suis levé, j'ai ouvert la porte et je suis sorti.*"],
          ["l'habitude : *Chaque jour, il prenait le bus.*", "une action limitée dans le temps : *J'ai attendu deux heures.*"]
        ],
        note: "Image : l'imparfait est le **film en arrière-plan** ; le passé composé, ce sont les **événements** qui font avancer l'histoire."
      },
      {
        title: "La structure d'une anecdote",
        head: ["Étape", "Marqueurs", "Temps"],
        rows: [
          ["1. La situation", "*C'était…, Il y a deux ans, Un jour…*", "imparfait"],
          ["2. L'événement", "*Soudain, Tout à coup, À ce moment-là…*", "passé composé"],
          ["3. Les réactions et la suite", "*Alors, Ensuite, Puis…*", "passé composé (+ imparfait)"],
          ["4. La fin", "*Finalement, Au final, Depuis ce jour…*", "passé composé / présent"]
        ]
      }
    ],
    watchOut: [
      ["Hier, il a fait beau et je me promenais quand j'ai vu Paul. (décor)", "Hier, il faisait beau et je me promenais quand j'ai vu Paul."],
      ["Je regardais la télé quand mon frère arrivait.", "Je regardais la télé quand mon frère est arrivé."],
      ["J'ai été fatigué, alors je dormais. (une fois)", "J'étais fatigué, alors j'ai dormi."],
      ["Soudain, la porte s'ouvrait.", "Soudain, la porte s'est ouverte."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Imparfait ou passé composé ?",
      items: ["Il [[faisait]] froid ce matin-là. (faire)", "Je dormais quand le téléphone [[a sonné]]. (sonner)", "Soudain, quelqu'un [[a frappé]] à la porte. (frapper)"]
    }
  },

  skills: {
    listening: {
      intro: "Paul raconte comment il a rencontré sa meilleure amie. Écoutez.",
      title: "Une rencontre par hasard",
      script: [
        { who: "Paul", line: "C'était il y a trois ans. J'étais en première année et je ne connaissais personne." },
        { who: "Paul", line: "Un matin, j'attendais le bus. Il pleuvait beaucoup et je n'avais pas de parapluie." },
        { who: "Paul", line: "Tout à coup, une fille s'est approchée et m'a proposé de partager son parapluie. Elle s'appelait Camille." },
        { who: "Paul", line: "Nous avons commencé à parler et, quand le bus est arrivé, nous nous sommes rendu compte que nous étions dans le même cours !" },
        { who: "Paul", line: "Depuis ce jour, nous sommes inséparables. Et maintenant, j'ai toujours deux parapluies dans mon sac !" }
      ],
      activities: [
        {
          type: "sort", title: "Décor ou action ?",
          prompt: "Classez les éléments de l'histoire.",
          bins: ["Décor (imparfait)", "Actions (passé composé)"],
          items: [
            { text: "il pleuvait beaucoup", bin: 0 }, { text: "il ne connaissait personne", bin: 0 }, { text: "il attendait le bus", bin: 0 },
            { text: "une fille s'est approchée", bin: 1 }, { text: "ils ont commencé à parler", bin: 1 }, { text: "le bus est arrivé", bin: 1 }
          ]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Paul était en dernière année.", a: false },
            { s: "Paul n'avait pas de parapluie.", a: true },
            { s: "Camille et Paul étaient dans le même cours.", a: true },
            { s: "Aujourd'hui, ils ne se parlent plus.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez cette anecdote publiée sur un forum d'étudiants étrangers.",
      title: "Mon pire malentendu en France",
      text: [
        "Quand je suis arrivé à Bordeaux, je ne parlais pas très bien français. Un jour, j'avais très faim et je suis entré dans une boulangerie. Il y avait beaucoup de monde et la boulangère parlait très vite.",
        "Quand mon tour est arrivé, j'ai voulu demander « un pain au chocolat », mais j'étais stressé et j'ai dit « un pain au chocolat… s'il te plaît, ma chérie ». Tout le monde s'est arrêté de parler. La boulangère m'a regardé, très surprise. Ensuite, elle a éclaté de rire !",
        "J'étais tellement rouge… Finalement, elle m'a donné deux pains au chocolat et elle m'a dit : « Le deuxième, c'est cadeau, mon chéri ! » Depuis ce jour, j'y vais tous les matins. — **Andrés, Colombie**"
      ],
      activities: [
        {
          type: "gap", title: "Retrouvez les verbes",
          prompt: "Complétez avec le verbe du texte.",
          items: [
            "Un jour, j'[[avais]] très faim.",
            "Il y [[avait]] beaucoup de monde.",
            "Tout le monde s'[[est arrêté|est arrete]] de parler.",
            "Ensuite, elle a [[éclaté|eclate]] de rire.",
            "J'[[étais|etais]] tellement rouge…"
          ]
        },
        {
          type: "tiles", title: "Résumez l'histoire",
          prompt: "Remettez les mots dans l'ordre.",
          items: [
            { a: "Andrés est entré dans une boulangerie." },
            { a: "Il a appelé la boulangère « ma chérie »." },
            { a: "Elle lui a donné un pain au chocolat gratuit." }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis racontez votre anecdote.",
      activities: [
        {
          type: "rewrite", title: "Racontez au passé",
          prompt: "Mettez l'histoire au passé (imparfait ou passé composé).",
          items: [
            { q: "Il est minuit. Je dors.", a: ["Il était minuit. Je dormais."] },
            { q: "Soudain, j'entends un bruit.", a: ["Soudain, j'ai entendu un bruit."] },
            { q: "J'ai peur, alors j'allume la lumière.", a: ["J'avais peur, alors j'ai allumé la lumière."] },
            { q: "C'est mon chien ! Il mange mon gâteau.", a: ["C'était mon chien ! Il mangeait mon gâteau."] }
          ]
        },
        {
          type: "write", title: "Mon anecdote",
          prompt: "Racontez une anecdote drôle, bizarre ou surprenante qui vous est arrivée. Suivez les quatre étapes : situation, événement, suite, fin.",
          minWords: 100, maxWords: 160,
          model: "C'était l'année dernière, le jour de mon examen d'anglais. J'étais très nerveuse parce que je n'avais pas beaucoup dormi. Il était sept heures et je courais vers l'arrêt de bus. Tout à coup, j'ai glissé sur une flaque d'eau et je suis tombée ! Mes cahiers étaient partout dans la rue. À ce moment-là, un garçon s'est arrêté pour m'aider. Il a ramassé mes cahiers et il m'a souri. Ensuite, nous avons pris le même bus. Finalement, je suis arrivée à l'heure… et le garçon était le nouvel assistant d'anglais ! J'ai eu dix-huit sur vingt à l'examen.",
          bank: ["C'était…", "Il y a… ans,", "J'étais…", "Tout à coup,", "À ce moment-là,", "Ensuite,", "Finalement,"],
          checklist: ["J'ai décrit la situation à l'imparfait.", "J'ai raconté les actions au passé composé.", "J'ai utilisé quatre marqueurs du récit.", "Mon histoire a une fin."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Racontez une histoire",
          prompt: "Écoutez et répétez avec expression.",
          items: [
            { s: "Il était huit heures du soir." },
            { s: "Il pleuvait et la rue était vide." },
            { s: "Tout à coup, les lumières se sont éteintes." },
            { s: "J'ai entendu un bruit derrière moi." },
            { s: "Je me suis retournée et j'ai vu un chat." },
            { s: "Finalement, nous avons éclaté de rire." }
          ]
        },
        {
          type: "speak", title: "Une histoire à partir de trois mots",
          prompt: "Inventez une histoire courte avec ces trois mots : *un parapluie, un chat, un train*.",
          language: ["Il était une fois…", "Un jour,…", "Soudain,…", "Finalement,…"],
          seconds: 75,
          checklist: ["utilisé les trois mots ?", "utilisé les deux temps du passé ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux utiliser l'imparfait pour le décor.", review: "Explication : imparfait ou passé composé ?" },
    { can: "Je peux utiliser le passé composé pour les actions.", review: "Explication : imparfait ou passé composé ?" },
    { can: "Je peux combiner les deux temps (*je lisais quand…*).", review: "Écrire, activité 1" },
    { can: "Je peux utiliser les marqueurs du récit.", review: "Explication : la structure d'une anecdote" },
    { can: "Je peux comprendre une anecdote.", review: "Écouter et Lire" },
    { can: "Je peux raconter une anecdote personnelle.", review: "Écrire, activité 2 et Parler, activité 1" }
  ]
};
