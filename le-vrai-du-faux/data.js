window.UNIT = {
  slug: "le-vrai-du-faux",
  title: "Le vrai du faux",
  level: "C1",
  subject: "Les médias",
  minutes: 65,
  focus: ["la désinformation", "la modalisation : conditionnel journalistique, il semblerait que", "rapporter avec distance : selon, d'après, prétendument", "évaluer la fiabilité d'une source"],

  presentation: {
    scene: "🕵️📰❓",
    situation: "Une vidéo devient virale : on y affirme que l'eau du robinet de la ville serait contaminée. En quelques heures, les supermarchés sont pris d'assaut. Dans la rédaction d'un média de vérification, deux journalistes tentent de **démêler le vrai du faux**.",
    warmup: {
      prompt: "Que faites-vous avant de partager une information surprenante ?",
      options: ["je vérifie la source", "je cherche d'autres médias", "je lis l'article en entier", "je regarde la date", "je partage directement", "je demande à quelqu'un", "je ne partage jamais"],
      response: "Bons réflexes ! Dans cette unité, vous apprendrez à exprimer le doute avec précision."
    },
    dialogueTitle: "Dans la cellule de vérification",
    dialogue: [
      { who: "Sophie", line: "La vidéo *aurait été vue* plus de deux millions de fois. Son auteur *affirme* que des analyses officielles *auraient été cachées*." },
      { who: "Julien", line: "*Selon* lui, oui. Mais *rien ne permet d'affirmer* que ces analyses existent." },
      { who: "Sophie", line: "*Il semblerait que* la vidéo date de 2019 et concerne une autre ville." },
      { who: "Julien", line: "C'est *ce que laisse penser* le décor. *A priori*, il s'agit d'un montage." },
      { who: "Sophie", line: "La mairie, *quant à elle*, *dément* toute contamination et publie ses résultats." },
      { who: "Julien", line: "Alors titrons prudemment : « Eau contaminée : une rumeur *prétendument* fondée sur des documents introuvables »." }
    ]
  },

  objectives: [
    "Je peux utiliser le conditionnel journalistique pour une information non confirmée.",
    "Je peux nuancer une affirmation avec *il semblerait que, il est probable que, a priori*.",
    "Je peux rapporter des propos en prenant mes distances (*selon, d'après, prétendument*).",
    "Je peux analyser la fiabilité d'une information et rédiger un article de vérification."
  ],

  explanation: {
    vocabTitle: "Le vocabulaire de l'information",
    vocab: [
      { word: "une infox", icon: "🦠" }, { word: "une rumeur", icon: "🗣️" }, { word: "démentir", icon: "🙅" }, { word: "confirmer", icon: "✅" },
      { word: "une source fiable", icon: "🔍" }, { word: "un recoupement", icon: "🧩" }, { word: "un montage", icon: "✂️" }, { word: "le complotisme", icon: "🌀" },
      { word: "la vérification des faits", icon: "🕵️" }, { word: "manipuler", icon: "🎭" }, { word: "relayer", icon: "🔁" }, { word: "un biais", icon: "↗️" }
    ],
    grammar: [
      {
        title: "Le conditionnel journalistique",
        intro: "Il présente une information **non vérifiée** : le journaliste ne la prend pas à son compte.",
        head: ["Temps", "Usage", "Exemple"],
        rows: [
          ["conditionnel présent", "fait actuel non confirmé", "Le ministre *envisagerait* de démissionner."],
          ["conditionnel passé", "fait passé non confirmé", "L'incendie *aurait été provoqué* par un court-circuit."],
          ["passif au conditionnel", "agent inconnu ou incertain", "Des documents *auraient été détruits*."]
        ],
        note: "À ne pas confondre avec l'hypothèse : ici, il n'y a pas de *si*."
      },
      {
        title: "Les degrés de certitude",
        head: ["Degré", "Expressions", "Mode"],
        rows: [
          ["certitude", "Il est établi que… / Il est avéré que… / Nul doute que…", "indicatif"],
          ["forte probabilité", "Il est probable que… / Tout porte à croire que…", "indicatif"],
          ["apparence", "Il semble que… (+ subj.) / Il semblerait que… (+ subj.) / Il paraît que… (+ ind.)", "variable"],
          ["doute", "Il est peu probable que… / Rien ne prouve que… / Il n'est pas certain que…", "subjonctif"],
          ["adverbes", "a priori, apparemment, vraisemblablement, sans doute, prétendument", "—"]
        ],
        note: "*Sans doute* signifie « probablement », pas « sans aucun doute ». *Il me semble que* est suivi de l'indicatif."
      },
      {
        title: "Rapporter avec distance",
        head: ["Outil", "Exemple"],
        rows: [
          ["*selon / d'après* + source", "*Selon* l'auteur de la vidéo, l'eau serait contaminée."],
          ["verbe introducteur", "Il *affirme / prétend / assure / laisse entendre* que…"],
          ["guillemets", "Un document « secret » circule."],
          ["*quant à*", "La mairie, *quant à elle*, dément."]
        ],
        note: "*Prétendre* insinue que l'on doute de la parole rapportée ; *affirmer* reste neutre."
      }
    ],
    watchOut: [
      ["Il semble qu'il a menti.", "Il semble qu'il ait menti."],
      ["Selon lui, l'eau est contaminée, donc c'est vrai.", "Selon lui, l'eau serait contaminée."],
      ["Sans doute, c'est vrai (= certainement).", "Sans aucun doute, c'est vrai."],
      ["Il est probable qu'il vienne.", "Il est probable qu'il viendra."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez.",
      items: ["L'accident [[aurait été|aurait ete]] causé par la pluie. (être, conditionnel passé)", "Rien ne prouve que ce document [[soit]] authentique. (être)", "Il est probable que la mairie [[publiera|publie]] ses résultats. (publier)"]
    }
  },

  skills: {
    listening: {
      intro: "Écoutez un extrait d'émission consacrée à la désinformation.",
      title: "Comment naît une infox ?",
      script: [
        { who: "La présentatrice", line: "Notre invité, chercheur en sciences de l'information, a étudié la propagation des fausses nouvelles. Comment une rumeur devient-elle virale ?" },
        { who: "Le chercheur", line: "Tout porte à croire que l'émotion est le moteur principal. Une information qui suscite la peur ou la colère circule six fois plus vite qu'une information neutre, d'après une étude du MIT." },
        { who: "La présentatrice", line: "Les réseaux sociaux seraient donc responsables ?" },
        { who: "Le chercheur", line: "En partie. Leurs algorithmes favorisent les contenus qui provoquent des réactions. Mais il serait réducteur d'accuser uniquement la technologie : nous partageons souvent sans lire au-delà du titre." },
        { who: "La présentatrice", line: "Que conseillez-vous ?" },
        { who: "Le chercheur", line: "De se méfier de ce qui confirme trop parfaitement nos opinions. C'est précisément là que nos biais nous rendent vulnérables." }
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Selon le chercheur, l'émotion joue un rôle central dans la propagation.", a: true },
            { s: "Une information neutre circule plus vite qu'une information choquante.", a: false },
            { s: "Le chercheur accuse uniquement les algorithmes.", a: false },
            { s: "Il recommande de se méfier des informations qui confirment nos opinions.", a: true }
          ]
        },
        {
          type: "gap", title: "La modalisation",
          prompt: "Complétez avec l'expression entendue.",
          items: ["[[Tout porte à croire|Tout porte a croire]] que l'émotion est le moteur principal.", "Les réseaux sociaux [[seraient]] donc responsables ?", "Il [[serait]] réducteur d'accuser uniquement la technologie."]
        }
      ]
    },

    reading: {
      intro: "Lisez cet article de vérification publié par un média en ligne.",
      title: "Vrai ou faux : « Le chocolat noir ferait maigrir »",
      text: [
        "Depuis quelques jours, un article partagé des dizaines de milliers de fois affirme qu'un carré de chocolat noir par jour ferait perdre jusqu'à trois kilos par mois. L'auteur s'appuie sur une étude prétendument publiée par une université allemande.",
        "Notre vérification montre que cette étude a bien existé… mais qu'il s'agissait d'un canular. En 2015, un journaliste scientifique a volontairement mené une étude bâclée — quinze participants, des mesures imprécises — afin de démontrer avec quelle facilité les médias relaient des résultats non vérifiés. Il a, de son propre aveu, réussi au-delà de ses espérances.",
        "Rien ne permet donc d'affirmer que le chocolat noir fasse maigrir. Il est en revanche établi qu'il contient des antioxydants. Notre verdict : **faux**, et un excellent exemple de la manière dont une information peut être sortie de son contexte."
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "L'étude citée n'a jamais existé.", a: false },
            { s: "L'étude était volontairement mal faite.", a: true },
            { s: "Son but était de montrer la crédulité des médias.", a: true },
            { s: "L'article conclut que le chocolat noir fait maigrir.", a: false }
          ]
        },
        {
          type: "sort", title: "Fait établi ou affirmation non vérifiée ?",
          bins: ["Fait établi", "Affirmation non vérifiée ou fausse"],
          items: [
            { text: "l'étude de 2015 a existé", bin: 0 }, { text: "elle comptait quinze participants", bin: 0 }, { text: "le chocolat contient des antioxydants", bin: 0 },
            { text: "on perd trois kilos par mois", bin: 1 }, { text: "un carré par jour fait maigrir", bin: 1 }
          ]
        }
      ]
    },

    writing: {
      intro: "Reformulez avec distance, puis rédigez votre article de vérification.",
      activities: [
        {
          type: "rewrite", title: "Prenez vos distances",
          prompt: "Reformulez au conditionnel journalistique.",
          items: [
            { q: "Le président démissionne demain.", a: ["Le président démissionnerait demain."] },
            { q: "Les pirates ont volé des données.", a: ["Les pirates auraient volé des données."] },
            { q: "Des documents ont été détruits.", a: ["Des documents auraient été détruits."] },
            { q: "L'entreprise prépare des licenciements.", a: ["L'entreprise préparerait des licenciements."] }
          ]
        },
        {
          type: "write", title: "Article de vérification",
          prompt: "Choisissez une rumeur (réelle ou inventée) qui circule sur les réseaux. Rédigez un article de vérification : présentation de la rumeur avec distance, enquête (sources, recoupements), verdict nuancé. Utilisez le conditionnel journalistique et au moins cinq expressions de modalisation.",
          minWords: 220, maxWords: 300,
          model: "« Les cours seraient supprimés le vendredi dès le prochain semestre. » Ce message, publié dimanche sur un groupe étudiant, a été partagé plus de trois mille fois. Selon son auteur, la décision aurait été prise lors d'un conseil d'administration à huis clos et serait annoncée « d'ici quelques jours ». Nous avons cherché à recouper cette information. D'après le calendrier officiel, aucun conseil ne s'est tenu ces dernières semaines. Contacté par téléphone, le service de communication de l'université dément catégoriquement : « Il n'a jamais été question de supprimer un jour de cours. » Il semblerait que la rumeur provienne d'une réunion syndicale au cours de laquelle des étudiants auraient proposé, à titre d'hypothèse, d'expérimenter une semaine de quatre jours. Rien ne prouve que cette proposition soit actuellement étudiée par la direction. Tout porte à croire, en revanche, que le malentendu s'explique par un compte rendu mal interprété. Notre verdict : faux, ou du moins prématuré. Ce cas illustre une fois de plus la vitesse à laquelle une hypothèse peut se transformer en certitude dès lors qu'elle répond à une attente collective.",
          bank: ["Selon…, … serait / aurait…", "D'après…", "Il semblerait que… (+ subj.)", "Rien ne prouve que… (+ subj.)", "Tout porte à croire que…", "… dément", "Notre verdict :"],
          checklist: ["J'ai présenté la rumeur avec distance (conditionnel, guillemets).", "J'ai cité au moins deux sources et un recoupement.", "J'ai utilisé cinq expressions de modalisation.", "J'ai donné un verdict nuancé."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Exprimez le doute",
          prompt: "Écoutez et répétez avec un ton neutre et posé.",
          items: [
            { s: "La vidéo aurait été vue des millions de fois." },
            { s: "Rien ne prouve que ce document soit authentique." },
            { s: "Il semblerait que la vidéo soit ancienne." },
            { s: "Tout porte à croire qu'il s'agit d'un montage." },
            { s: "La mairie dément toute contamination." },
            { s: "Méfiez-vous de ce qui confirme vos opinions." }
          ]
        },
        {
          type: "speak", title: "Chronique : une infox décryptée",
          prompt: "Présentez en deux minutes une fausse information célèbre ou récente : son contenu, sa propagation, la manière dont elle a été démentie. Restez prudent(e) dans vos formulations.",
          language: ["Il y a quelque temps, une rumeur affirmait que…", "Selon ses auteurs,… aurait…", "Il semblerait que…", "Rien ne permettait d'affirmer que…", "Ce cas montre que…"],
          seconds: 120,
          checklist: ["utilisé le conditionnel journalistique ?", "varié les degrés de certitude ?", "conclu par une réflexion ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux utiliser le conditionnel journalistique.", review: "Explication : le conditionnel journalistique ; Écrire, activité 1" },
    { can: "Je peux exprimer différents degrés de certitude.", review: "Explication : les degrés de certitude" },
    { can: "Je peux choisir le mode après *il semble que, il est probable que, rien ne prouve que*.", review: "Explication : les degrés de certitude (mode)" },
    { can: "Je peux rapporter des propos en prenant mes distances.", review: "Explication : rapporter avec distance" },
    { can: "Je peux comprendre une analyse sur la désinformation.", review: "Écouter et Lire" },
    { can: "Je peux rédiger un article de vérification nuancé.", review: "Écrire, activité 2" }
  ]
};
