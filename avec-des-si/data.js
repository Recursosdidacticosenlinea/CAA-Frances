window.UNIT = {
  slug: "avec-des-si",
  title: "Avec des si…",
  level: "B2",
  subject: "Imaginer",
  minutes: 60,
  focus: ["le plus-que-parfait", "le conditionnel passé", "si + plus-que-parfait → conditionnel passé", "exprimer un regret, un reproche"],

  presentation: {
    scene: "⏪🤔🔀",
    situation: "« Avec des si, on mettrait Paris en bouteille », dit le proverbe. Camille et Maxime discutent de leurs **choix passés** et imaginent ce qui **se serait passé** autrement.",
    warmup: {
      prompt: "Avez-vous déjà regretté une décision ?",
      options: ["le choix de mes études", "ne pas avoir voyagé", "un mot dit trop vite", "une occasion manquée", "ne pas avoir étudié", "je ne regrette rien !"],
      response: "Nous avons tous des « et si… ». Apprenons à les exprimer."
    },
    dialogueTitle: "Et si…?",
    dialogue: [
      { who: "Maxime", line: "Tu sais, *si je n'avais pas raté* mon train ce jour-là, *je ne t'aurais jamais rencontrée*." },
      { who: "Camille", line: "C'est vrai ! Et moi, *si j'avais choisi* médecine comme mes parents voulaient, *je n'aurais pas été* à cette conférence." },
      { who: "Maxime", line: "Tu regrettes parfois ?" },
      { who: "Camille", line: "Non… Enfin, *j'aurais aimé* partir un an à l'étranger. *J'aurais dû* demander la bourse Erasmus." },
      { who: "Maxime", line: "*Tu aurais pu* m'en parler, je t'aurais aidée avec le dossier !" },
      { who: "Camille", line: "*Je ne savais pas* que tu *avais* déjà *fait* un échange. Bon, avec des si…" },
      { who: "Maxime", line: "…on mettrait Paris en bouteille !" }
    ]
  },

  objectives: [
    "Je peux former le plus-que-parfait.",
    "Je peux former le conditionnel passé.",
    "Je peux faire une hypothèse sur le passé (*si + plus-que-parfait*).",
    "Je peux exprimer un regret ou un reproche (*j'aurais dû, tu aurais pu*)."
  ],

  explanation: {
    vocabTitle: "Choix et regrets",
    vocab: [
      { word: "un regret", icon: "😔" }, { word: "un reproche", icon: "👉" }, { word: "une occasion manquée", icon: "🚪" }, { word: "rater", icon: "❌" },
      { word: "hésiter", icon: "🤷" }, { word: "un tournant", icon: "↪️" }, { word: "le destin", icon: "✨" }, { word: "le hasard", icon: "🎲" },
      { word: "prendre une décision", icon: "✅" }, { word: "se tromper", icon: "🙈" }, { word: "revenir en arrière", icon: "⏪" }, { word: "avoir de la chance", icon: "🍀" }
    ],
    grammar: [
      {
        title: "Le plus-que-parfait",
        intro: "Auxiliaire *avoir* ou *être* à l'**imparfait** + participe passé. Il exprime une action antérieure à une autre action passée.",
        head: ["avec avoir", "avec être"],
        rows: [
          ["j'*avais* fini", "j'*étais* parti(e)"], ["tu *avais* compris", "tu *étais* arrivé(e)"],
          ["il / elle *avait* vu", "il / elle *était* venu(e)"], ["nous *avions* décidé", "nous *étions* sorti(e)s"],
          ["vous *aviez* pris", "vous *étiez* resté(e)s"], ["ils / elles *avaient* fait", "ils / elles *étaient* allé(e)s"]
        ],
        note: "*Quand je suis arrivé, le film avait déjà commencé.* (le film a commencé avant mon arrivée)"
      },
      {
        title: "Le conditionnel passé",
        intro: "Auxiliaire au **conditionnel présent** + participe passé.",
        head: ["avec avoir", "avec être"],
        rows: [
          ["j'*aurais* aimé", "je *serais* venu(e)"], ["tu *aurais* pu", "tu *serais* resté(e)"],
          ["il / elle *aurait* dû", "il / elle *serait* parti(e)"], ["nous *aurions* su", "nous *serions* allé(e)s"]
        ]
      },
      {
        title: "Les trois hypothèses avec si",
        head: ["Type", "Si +", "Conséquence", "Exemple"],
        rows: [
          ["probable (futur)", "présent", "futur", "*Si tu travailles, tu réussiras.*"],
          ["irréel du présent", "imparfait", "conditionnel présent", "*Si tu travaillais, tu réussirais.*"],
          ["irréel du passé", "*plus-que-parfait*", "*conditionnel passé*", "*Si tu avais travaillé, tu aurais réussi.*"],
          ["mixte (passé → présent)", "plus-que-parfait", "conditionnel présent", "*Si j'avais étudié le droit, je serais avocat aujourd'hui.*"]
        ],
        note: "Regret : *J'aurais dû / J'aurais aimé / Si seulement j'avais…* Reproche : *Tu aurais pu / Tu aurais dû me prévenir !*"
      }
    ],
    watchOut: [
      ["Si j'aurais su, je serais venu.", "Si j'avais su, je serais venu."],
      ["Si tu avais étudié, tu réussirais l'examen hier.", "Si tu avais étudié, tu aurais réussi l'examen hier."],
      ["J'aurais dû de partir.", "J'aurais dû partir."],
      ["Si elle était venue, elle aurait venue.", "Si elle était venue, elle serait venue…"]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez.",
      items: ["Si j'[[avais su]], je serais venu. (savoir)", "Si nous étions partis plus tôt, nous [[serions arrivés|serions arrivées]] à l'heure. (arriver)", "Tu [[aurais dû]] me le dire ! (devoir)"]
    }
  },

  skills: {
    listening: {
      intro: "Trois personnes participent à une émission : « Le jour qui a changé ma vie ». Écoutez.",
      title: "Le jour qui a changé ma vie",
      script: [
        { who: "L'animatrice", line: "Bienvenue ! Élise, quel jour a changé votre vie ?" },
        { who: "Élise", line: "Le jour où j'ai perdu mon emploi. Si je n'avais pas été licenciée, je n'aurais jamais ouvert ma propre boulangerie. Aujourd'hui, je suis heureuse." },
        { who: "L'animatrice", line: "Et vous, Louis ?" },
        { who: "Louis", line: "Moi, c'est un regret. À vingt ans, on m'a proposé un contrat de musicien à Montréal. J'ai refusé par peur. J'aurais dû accepter. Si j'étais parti, j'aurais peut-être une autre vie aujourd'hui." },
        { who: "L'animatrice", line: "Fatou ?" },
        { who: "Fatou", line: "J'avais raté mon avion pour Dakar. J'étais furieuse ! Mais dans la salle d'attente, j'ai rencontré mon futur mari. Si j'avais pris cet avion, mes enfants ne seraient pas nés !" }
      ],
      activities: [
        {
          type: "match", title: "Les événements",
          pairs: [["Élise", "a perdu son emploi, puis ouvert une boulangerie"], ["Louis", "a refusé un contrat à Montréal"], ["Fatou", "a raté son avion et rencontré son mari"]]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Élise regrette d'avoir été licenciée.", a: false },
            { s: "Louis pense qu'il aurait dû accepter le contrat.", a: true },
            { s: "Fatou était contente d'avoir raté son avion sur le moment.", a: false },
            { s: "Si Fatou avait pris l'avion, elle n'aurait pas rencontré son mari.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez cet extrait d'une chronique historique.",
      title: "Et si l'histoire avait été différente ?",
      text: [
        "L'uchronie est un genre littéraire qui imagine une histoire alternative. Que se serait-il passé si certains événements n'avaient pas eu lieu ?",
        "Si Alexander Fleming n'avait pas oublié ses boîtes de culture avant de partir en vacances en 1928, il n'aurait peut-être pas découvert la pénicilline. Des millions de personnes seraient mortes d'infections banales.",
        "De même, si l'imprimerie n'avait pas été inventée au XVᵉ siècle, les idées de la Renaissance ne se seraient pas diffusées aussi vite en Europe. Et si Internet n'existait pas aujourd'hui ? Nous serions sans doute moins connectés… mais peut-être plus attentifs aux personnes qui nous entourent."
      ],
      activities: [
        {
          type: "gap", title: "Complétez",
          prompt: "Complétez avec le verbe du texte.",
          items: [
            "Si Fleming n'[[avait]] pas oublié ses boîtes de culture…",
            "…il n'[[aurait]] peut-être pas découvert la pénicilline.",
            "Des millions de personnes [[seraient]] mortes.",
            "Si Internet n'existait pas, nous [[serions]] moins connectés."
          ]
        },
        {
          type: "sort", title: "Quel type d'hypothèse ?",
          bins: ["Irréel du passé", "Irréel du présent"],
          items: [
            { text: "Si Fleming n'avait pas oublié…", bin: 0 }, { text: "Si l'imprimerie n'avait pas été inventée…", bin: 0 }, { text: "…des millions de personnes seraient mortes", bin: 0 },
            { text: "Si Internet n'existait pas…", bin: 1 }, { text: "…nous serions moins connectés", bin: 1 }
          ]
        }
      ]
    },

    writing: {
      intro: "Transformez, puis écrivez votre uchronie personnelle.",
      activities: [
        {
          type: "rewrite", title: "Irréel du passé",
          prompt: "Transformez avec *si + plus-que-parfait → conditionnel passé*.",
          items: [
            { q: "Je n'ai pas étudié, donc j'ai raté l'examen.", a: ["Si j'avais étudié, je n'aurais pas raté l'examen."] },
            { q: "Il est parti tôt, donc il n'a pas vu la fin.", a: ["S'il n'était pas parti tôt, il aurait vu la fin."] },
            { q: "Nous n'avons pas réservé, donc nous n'avons pas eu de place.", a: ["Si nous avions réservé, nous aurions eu une place.", "Si nous avions réservé, nous aurions eu de la place."] },
            { q: "Tu ne m'as pas appelé, donc je ne suis pas venu.", a: ["Si tu m'avais appelé, je serais venu."] }
          ]
        },
        {
          type: "write", title: "Ma vie parallèle",
          prompt: "Choisissez un tournant de votre vie (un choix, un hasard, une rencontre). Imaginez ce qui se serait passé si les choses avaient été différentes. Exprimez aussi un regret ou une satisfaction.",
          minWords: 150, maxWords: 220,
          model: "Il y a trois ans, j'ai hésité entre deux universités : une à Mexico et une à Puebla. J'ai finalement choisi Puebla, surtout pour rester près de ma famille. Si j'étais partie à Mexico, j'aurais vécu seule pour la première fois. J'aurais sans doute rencontré d'autres amis et je me serais peut-être intéressée à d'autres matières. Je n'aurais pas connu ma professeure de français, qui m'a donné envie de devenir traductrice. Si je ne l'avais pas rencontrée, je ne serais pas en train d'écrire ce texte en français aujourd'hui ! Bien sûr, j'aurais aimé être plus indépendante plus tôt, et parfois je me dis que j'aurais dû oser. Mais, tout bien considéré, je ne regrette pas mon choix. Avec des si…",
          bank: ["Il y a… ans, j'ai dû choisir entre…", "Si j'avais…, j'aurais…", "Je ne serais pas…", "J'aurais aimé…", "J'aurais dû…", "Tout bien considéré,…"],
          checklist: ["J'ai utilisé *si + plus-que-parfait* au moins trois fois.", "J'ai utilisé le conditionnel passé avec *avoir* et avec *être*.", "J'ai exprimé un regret avec *j'aurais dû / j'aurais aimé*.", "J'ai utilisé une hypothèse mixte (passé → présent)."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Regrets et hypothèses",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Si j'avais su, je serais venu." },
            { s: "J'aurais dû accepter ce contrat." },
            { s: "Tu aurais pu me prévenir !" },
            { s: "Si nous étions partis tôt, nous serions arrivés à l'heure." },
            { s: "Sans ce train raté, je ne t'aurais jamais rencontrée." },
            { s: "Avec des si, on mettrait Paris en bouteille." }
          ]
        },
        {
          type: "speak", title: "Uchronie historique",
          prompt: "Choisissez un événement historique de votre pays ou du monde. Imaginez ce qui se serait passé s'il avait été différent.",
          language: ["Si… n'avait pas…,", "… aurait / serait…", "Aujourd'hui, nous… (hypothèse mixte)", "Il est probable que…"],
          seconds: 90,
          checklist: ["fait trois hypothèses sur le passé ?", "utilisé une hypothèse mixte ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux former et utiliser le plus-que-parfait.", review: "Explication : le plus-que-parfait" },
    { can: "Je peux former le conditionnel passé.", review: "Explication : le conditionnel passé" },
    { can: "Je peux faire une hypothèse sur le passé.", review: "Explication : les trois hypothèses ; Écrire, activité 1" },
    { can: "Je peux faire une hypothèse mixte (passé → présent).", review: "Explication : les trois hypothèses" },
    { can: "Je peux exprimer un regret ou un reproche.", review: "Parler, activité 1" },
    { can: "Je peux imaginer et raconter une histoire alternative.", review: "Écrire, activité 2 et Parler, activité 2" }
  ]
};
