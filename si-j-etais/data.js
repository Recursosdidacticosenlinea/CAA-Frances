window.UNIT = {
  slug: "si-j-etais",
  title: "Si j'étais…",
  level: "B1",
  subject: "Imaginer",
  minutes: 55,
  focus: ["le conditionnel présent", "si + imparfait → conditionnel", "les souhaits : j'aimerais, je voudrais", "la politesse"],

  presentation: {
    scene: "💭🏝️🦸",
    situation: "À la cafétéria, Julien et Amina jouent à un jeu : « **Qu'est-ce que tu ferais si…** ? » Ils imaginent des situations impossibles.",
    warmup: {
      prompt: "Si vous gagniez à la loterie, qu'est-ce que vous feriez en premier ?",
      options: ["voyager", "acheter une maison", "aider ma famille", "donner à une association", "arrêter de travailler", "ouvrir une entreprise", "continuer comme avant"],
      response: "Belle idée ! Vous allez apprendre à imaginer en français."
    },
    dialogueTitle: "Le jeu du « si »",
    dialogue: [
      { who: "Julien", line: "Amina, *si tu gagnais* un million d'euros, qu'est-ce que *tu ferais* ?" },
      { who: "Amina", line: "*J'achèterais* une maison pour mes parents et *je ferais* le tour du monde. Et toi ?" },
      { who: "Julien", line: "Moi, *je créerais* une école de musique gratuite pour les enfants." },
      { who: "Amina", line: "C'est généreux ! Autre question : *si tu pouvais* avoir un super-pouvoir ?" },
      { who: "Julien", line: "*Je voudrais* parler toutes les langues du monde. Comme ça, *je n'aurais* plus d'examen de français !" },
      { who: "Amina", line: "Ha ha ! Moi, *j'aimerais* voler. *Je n'attendrais* plus jamais le bus !" },
      { who: "Julien", line: "*Ce serait* génial… Bon, *tu pourrais* me prêter tes notes d'histoire ?" }
    ]
  },

  objectives: [
    "Je peux former le conditionnel présent.",
    "Je peux faire une hypothèse avec *si + imparfait → conditionnel*.",
    "Je peux exprimer un souhait avec *j'aimerais, je voudrais*.",
    "Je peux faire une demande polie avec le conditionnel."
  ],

  explanation: {
    vocabTitle: "Rêves et souhaits",
    vocab: [
      { word: "gagner à la loterie", icon: "🎰" }, { word: "un super-pouvoir", icon: "🦸" }, { word: "voler", icon: "🕊️" }, { word: "devenir invisible", icon: "👻" },
      { word: "voyager dans le temps", icon: "⏳" }, { word: "une île déserte", icon: "🏝️" }, { word: "faire le tour du monde", icon: "🌍" }, { word: "réaliser un rêve", icon: "✨" },
      { word: "changer le monde", icon: "🌱" }, { word: "un souhait", icon: "🌠" }
    ],
    grammar: [
      {
        title: "Le conditionnel présent : formation",
        intro: "Radical du **futur** + terminaisons de l'**imparfait**.",
        head: ["Sujet", "Terminaison", "aimer", "faire (fer-)", "être (ser-)"],
        rows: [
          ["je", "*-ais*", "aimer*ais*", "fer*ais*", "ser*ais*"],
          ["tu", "*-ais*", "aimer*ais*", "fer*ais*", "ser*ais*"],
          ["il / elle / on", "*-ait*", "aimer*ait*", "fer*ait*", "ser*ait*"],
          ["nous", "*-ions*", "aimer*ions*", "fer*ions*", "ser*ions*"],
          ["vous", "*-iez*", "aimer*iez*", "fer*iez*", "ser*iez*"],
          ["ils / elles", "*-aient*", "aimer*aient*", "fer*aient*", "ser*aient*"]
        ],
        note: "Mêmes radicaux irréguliers qu'au futur : *aur-, ir-, pourr-, voudr-, viendr-, devr-, saur-, verr-*."
      },
      {
        title: "L'hypothèse sur le présent",
        head: ["Si + imparfait", "→ conditionnel"],
        rows: [
          ["*Si j'avais* du temps,", "*j'apprendrais* le japonais."],
          ["*Si nous étions* en vacances,", "*nous irions* à la plage."],
          ["*Si tu pouvais* voler,", "où *irais*-tu ?"]
        ],
        note: "**Jamais** de conditionnel après *si* : on dit *si j'avais*, pas *si j'aurais*."
      },
      {
        title: "Les autres usages",
        head: ["Usage", "Exemple"],
        rows: [
          ["souhait", "*J'aimerais* visiter le Japon. *Je voudrais* être pilote."],
          ["politesse", "*Pourriez-vous* m'aider ? *Je voudrais* un café, s'il vous plaît."],
          ["conseil", "*Tu devrais* dormir plus. *À ta place, je partirais.*"]
        ]
      }
    ],
    watchOut: [
      ["Si j'aurais de l'argent, je voyagerais.", "Si j'avais de l'argent, je voyagerais."],
      ["Je voyagerai si j'avais le temps.", "Je voyagerais si j'avais le temps."],
      ["Je voudrai un café. (au restaurant)", "Je voudrais un café."],
      ["Si je serais riche…", "Si j'étais riche…"]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez.",
      items: ["Si j'[[avais]] une voiture, je partirais en week-end. (avoir)", "Si tu étais président, qu'est-ce que tu [[ferais]] ? (faire)", "[[Pourriez]]-vous fermer la porte, s'il vous plaît ? (pouvoir)"]
    }
  },

  skills: {
    listening: {
      intro: "Une journaliste demande à des passants : « Si vous étiez maire de votre ville, que feriez-vous ? » Écoutez.",
      title: "Si j'étais maire…",
      script: [
        { who: "La journaliste", line: "Bonjour ! Si vous étiez maire de la ville, que feriez-vous ?" },
        { who: "Élise", line: "Je créerais plus de pistes cyclables. Les gens prendraient moins la voiture et l'air serait plus propre." },
        { who: "Pierre", line: "Moi, je construirais des logements pour les étudiants. Les loyers sont trop chers !" },
        { who: "Fatou", line: "Si j'étais maire, j'ouvrirais les bibliothèques le dimanche. Et j'organiserais des concerts gratuits dans les parcs." },
        { who: "Marc", line: "Moi ? Je ne voudrais pas être maire. C'est trop de responsabilités !" }
      ],
      activities: [
        {
          type: "match", title: "Les propositions",
          pairs: [["Élise", "plus de pistes cyclables"], ["Pierre", "des logements pour étudiants"], ["Fatou", "des bibliothèques ouvertes le dimanche"], ["Marc", "ne voudrait pas être maire"]]
        },
        {
          type: "gap", title: "Les verbes au conditionnel",
          prompt: "Complétez avec le verbe entendu.",
          items: ["Je [[créerais|creerais]] plus de pistes cyclables.", "L'air [[serait]] plus propre.", "J'[[ouvrirais]] les bibliothèques le dimanche."]
        }
      ]
    },

    reading: {
      intro: "Lisez les réponses au questionnaire de Proust publiées dans le journal de l'université.",
      title: "Le questionnaire de Proust",
      text: [
        { author: "Si vous étiez un animal ?", body: "**Lucie** : Je serais un chat, parce que j'adore dormir et être indépendante. **Karim** : Je serais un aigle : je pourrais voir le monde d'en haut." },
        { author: "Si vous étiez une ville ?", body: "**Lucie** : Je serais Barcelone, pour la mer et l'architecture. **Karim** : Je serais Marrakech, une ville pleine de couleurs et de vie." },
        { author: "Si vous pouviez rencontrer une personne célèbre ?", body: "**Lucie** : J'aimerais rencontrer Marie Curie. Je lui poserais mille questions sur ses découvertes. **Karim** : Je voudrais dîner avec Zinédine Zidane. Nous parlerions de football toute la nuit !" }
      ],
      activities: [
        {
          type: "sort", title: "Lucie ou Karim ?",
          bins: ["Lucie", "Karim"],
          items: [
            { text: "un chat", bin: 0 }, { text: "Barcelone", bin: 0 }, { text: "Marie Curie", bin: 0 },
            { text: "un aigle", bin: 1 }, { text: "Marrakech", bin: 1 }, { text: "Zinédine Zidane", bin: 1 }
          ]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Lucie serait un chat parce qu'elle aime dormir.", a: true },
            { s: "Karim aimerait voir le monde d'en haut.", a: true },
            { s: "Lucie aimerait parler de football.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Pratiquez, puis répondez au questionnaire.",
      activities: [
        {
          type: "rewrite", title: "Faites des hypothèses",
          prompt: "Transformez la phrase avec *si + imparfait → conditionnel*.",
          items: [
            { q: "Je n'ai pas le temps. Je ne fais pas de sport.", a: ["Si j'avais le temps, je ferais du sport."] },
            { q: "Il ne parle pas chinois. Il ne travaille pas à Pékin.", a: ["S'il parlait chinois, il travaillerait à Pékin."] },
            { q: "Nous ne sommes pas riches. Nous n'achetons pas de bateau.", a: ["Si nous étions riches, nous achèterions un bateau."] },
            { q: "Tu ne peux pas venir. Tu ne vois pas le concert.", a: ["Si tu pouvais venir, tu verrais le concert."] }
          ]
        },
        {
          type: "write", title: "Mon questionnaire de Proust",
          prompt: "Répondez à cinq questions et justifiez chaque réponse : Si vous étiez un animal ? une ville ? un objet ? une saison ? Si vous pouviez changer une chose dans le monde ?",
          minWords: 90, maxWords: 140,
          model: "Si j'étais un animal, je serais un dauphin, parce que je suis sociable et j'adore la mer. Si j'étais une ville, je serais Oaxaca : il y aurait de la musique et de la bonne cuisine partout. Si j'étais un objet, je serais un livre, pour voyager dans les mains de beaucoup de gens. Si j'étais une saison, je serais le printemps, la saison des nouveaux départs. Enfin, si je pouvais changer une chose dans le monde, je donnerais accès à l'éducation à tous les enfants. Ce serait le plus beau cadeau.",
          bank: ["Si j'étais…, je serais…", "parce que…", "Si je pouvais…, je…", "J'aimerais…", "Ce serait…"],
          checklist: ["J'ai répondu à cinq questions.", "J'ai utilisé *si + imparfait*.", "J'ai utilisé le conditionnel au moins huit fois.", "J'ai justifié mes réponses."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Imaginez !",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Si j'avais du temps, j'apprendrais le japonais." },
            { s: "Qu'est-ce que tu ferais si tu gagnais à la loterie ?" },
            { s: "Je ferais le tour du monde." },
            { s: "Pourriez-vous m'aider, s'il vous plaît ?" },
            { s: "J'aimerais beaucoup voler comme un oiseau." },
            { s: "Ce serait génial !" }
          ]
        },
        {
          type: "speak", title: "Si j'étais recteur…",
          prompt: "Imaginez : vous êtes recteur ou rectrice de votre université. Que changeriez-vous ? Donnez trois propositions.",
          language: ["Si j'étais recteur / rectrice,…", "D'abord, je…", "Ensuite, je…", "Les étudiants pourraient…", "Ce serait…"],
          seconds: 75,
          checklist: ["fait trois propositions ?", "utilisé le conditionnel ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux former le conditionnel présent.", review: "Explication : formation" },
    { can: "Je peux faire une hypothèse avec *si + imparfait*.", review: "Explication : l'hypothèse ; Écrire, activité 1" },
    { can: "Je sais qu'on ne met jamais le conditionnel après *si*.", review: "Explication : l'hypothèse (note)" },
    { can: "Je peux exprimer un souhait et faire une demande polie.", review: "Explication : les autres usages" },
    { can: "Je peux comprendre des propositions et des hypothèses.", review: "Écouter et Lire" },
    { can: "Je peux imaginer et justifier une situation hypothétique.", review: "Écrire, activité 2 et Parler" }
  ]
};
