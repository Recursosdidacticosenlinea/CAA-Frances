window.UNIT = {
  slug: "quoi-qu-il-en-soit",
  title: "Quoi qu'il en soit",
  level: "C1",
  subject: "La science",
  minutes: 65,
  focus: ["les débats bioéthiques", "la concession indéfinie : quel que soit, quoi que, qui que, où que", "si + adjectif + que, aussi + adjectif + que", "nuancer une position éthique"],

  presentation: {
    scene: "🧬⚖️🤖",
    situation: "Un comité d'éthique réunit des scientifiques, des juristes et des citoyens pour débattre d'une question délicate : **jusqu'où laisser l'intelligence artificielle intervenir dans le diagnostic médical ?**",
    warmup: {
      prompt: "Feriez-vous confiance à une IA pour un diagnostic médical ?",
      options: ["oui, totalement", "oui, avec un médecin", "seulement pour un deuxième avis", "ça dépend de la maladie", "non, jamais", "je ne sais pas"],
      response: "Il n'y a pas de réponse simple. Découvrez comment exprimer une position nuancée."
    },
    dialogueTitle: "Le comité d'éthique",
    dialogue: [
      { who: "La présidente", line: "*Quelle que soit* notre position, nous devons partir des faits." },
      { who: "Le médecin", line: "Les faits sont clairs : *aussi performante qu'*elle *soit*, l'IA se trompe parfois. Et *quoi qu'*elle *propose*, c'est le médecin qui doit décider." },
      { who: "La juriste", line: "*Qui que* *soit* le responsable de l'erreur, le patient a droit à une explication." },
      { who: "Le citoyen", line: "*Où que* l'on *vive*, à la campagne comme en ville, on devrait avoir accès au même diagnostic. L'IA pourrait aider." },
      { who: "La présidente", line: "*Si utile que* *soit* cet outil, il ne remplace pas la relation humaine." },
      { who: "Le médecin", line: "*Quoi qu'il en soit*, nous sommes d'accord sur un point : l'humain doit garder le dernier mot." }
    ]
  },

  objectives: [
    "Je peux utiliser *quel(le)(s) que soit / soient* + nom.",
    "Je peux utiliser *quoi que, qui que, où que* + subjonctif.",
    "Je peux concéder avec *si / aussi + adjectif + que* + subjonctif.",
    "Je peux défendre une position éthique nuancée."
  ],

  explanation: {
    vocabTitle: "La bioéthique",
    vocab: [
      { word: "l'éthique", icon: "⚖️" }, { word: "le consentement", icon: "✍️" }, { word: "la confidentialité", icon: "🔒" }, { word: "un algorithme", icon: "🤖" },
      { word: "un diagnostic", icon: "🩺" }, { word: "la responsabilité", icon: "🧑‍⚖️" }, { word: "une dérive", icon: "⚠️" }, { word: "encadrer", icon: "🖼️" },
      { word: "le libre arbitre", icon: "🕊️" }, { word: "la dignité", icon: "👤" }, { word: "le principe de précaution", icon: "🛡️" }, { word: "un dilemme", icon: "🔀" }
    ],
    grammar: [
      {
        title: "La concession indéfinie",
        intro: "Ces structures signifient « peu importe… » et sont toujours suivies du **subjonctif**.",
        head: ["Structure", "Remplace", "Exemple"],
        rows: [
          ["*quel / quelle / quels / quelles que* + être + nom", "un nom (s'accorde avec le sujet)", "*Quelles que soient* vos raisons, il faut le dire."],
          ["*quoi que* + subj.", "une chose (COD)", "*Quoi que* tu *fasses*, fais-le bien."],
          ["*qui que* + subj.", "une personne", "*Qui que* vous *soyez*, vous avez des droits."],
          ["*où que* + subj.", "un lieu", "*Où qu'*il *aille*, il emporte son ordinateur."],
          ["*si / aussi* + adj. + *que* + subj.", "un degré", "*Si* (*aussi*) *compétent qu'*il *soit*, il peut se tromper."],
          ["*quelque* + adj. + *que* (très soutenu)", "un degré", "*Quelque* habiles *qu'*ils *soient*…"]
        ],
        note: "Ne confondez pas *quoi que* (peu importe ce que) et *quoique* (bien que) : *Quoiqu'il soit tard, je travaille.*"
      },
      {
        title: "Expressions figées",
        head: ["Expression", "Sens"],
        rows: [
          ["*Quoi qu'il en soit*, …", "En tout cas, de toute façon"],
          ["*Quoi qu'il arrive*, …", "Dans tous les cas"],
          ["*Qui que ce soit*", "N'importe qui : *Ne le dis à qui que ce soit.*"],
          ["*Quoi que ce soit*", "N'importe quoi : *Si tu as besoin de quoi que ce soit…*"]
        ]
      }
    ],
    watchOut: [
      ["Quelque soit le problème…", "Quel que soit le problème…"],
      ["Quelles que soit les raisons…", "Quelles que soient les raisons…"],
      ["Quoique tu fasses, fais-le bien.", "Quoi que tu fasses, fais-le bien."],
      ["Si compétent qu'il est…", "Si compétent qu'il soit…"]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez.",
      items: ["[[Quelle]] que soit ta décision, je te soutiendrai.", "Quoi que vous [[disiez]], je resterai prudent. (dire)", "Si performante qu'elle [[soit]], l'IA se trompe. (être)"]
    }
  },

  skills: {
    listening: {
      intro: "Écoutez l'intervention d'une philosophe dans une émission scientifique.",
      title: "L'humain doit-il garder le dernier mot ?",
      script: [
        { who: "La philosophe", line: "Quelle que soit la puissance des algorithmes, une question demeure : qui est responsable lorsqu'une machine se trompe ?" },
        { who: "La philosophe", line: "On me répondra que les médecins se trompent aussi. Certes. Mais un médecin, si fatigué qu'il soit, peut expliquer son raisonnement. Un algorithme, souvent, ne le peut pas." },
        { who: "La philosophe", line: "Où que l'on regarde, les systèmes les plus performants sont aussi les plus opaques. C'est ce paradoxe qu'il nous faut affronter." },
        { who: "La philosophe", line: "Quoi qu'en disent leurs défenseurs, la transparence n'est pas un luxe : c'est la condition de la confiance." }
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "La philosophe nie que les médecins se trompent.", a: false },
            { s: "Selon elle, un médecin peut expliquer son raisonnement.", a: true },
            { s: "Les systèmes les plus performants sont souvent les plus transparents.", a: false },
            { s: "Pour elle, la transparence est la condition de la confiance.", a: true }
          ]
        },
        {
          type: "gap", title: "Les structures de concession",
          items: ["[[Quelle que soit]] la puissance des algorithmes…", "Un médecin, si fatigué qu'il [[soit]], peut expliquer.", "[[Où que|Ou que]] l'on regarde, les systèmes sont opaques.", "[[Quoi qu']]en disent leurs défenseurs…"]
        }
      ]
    },

    reading: {
      intro: "Lisez cet extrait d'un avis rendu par un comité d'éthique (texte fictif).",
      title: "Avis sur l'usage de l'IA dans le diagnostic médical",
      text: [
        "Le comité reconnaît les bénéfices considérables que peuvent apporter les outils d'intelligence artificielle, notamment dans la détection précoce de certains cancers. Si prometteurs que soient ces résultats, ils ne sauraient toutefois justifier un usage sans garde-fous.",
        "Le comité recommande en premier lieu que, quels que soient les outils utilisés, la décision finale revienne à un professionnel de santé. Il rappelle ensuite que tout patient, qui qu'il soit et où qu'il soit soigné, doit être informé du recours à un algorithme et pouvoir s'y opposer.",
        "Enfin, quoi que décident les fabricants, les données de santé doivent demeurer protégées. Leur exploitation commerciale, quelle qu'en soit la forme, est jugée contraire au principe de dignité."
      ],
      activities: [
        {
          type: "sort", title: "Recommandation ou constat ?",
          bins: ["Constat", "Recommandation"],
          items: [
            { text: "l'IA aide à détecter certains cancers", bin: 0 }, { text: "les résultats sont prometteurs", bin: 0 },
            { text: "la décision finale revient à un professionnel", bin: 1 }, { text: "le patient doit être informé", bin: 1 }, { text: "les données doivent rester protégées", bin: 1 }
          ]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Le comité rejette totalement l'usage de l'IA.", a: false },
            { s: "Le patient peut refuser le recours à un algorithme.", a: true },
            { s: "L'exploitation commerciale des données est autorisée sous certaines formes.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Reformulez, puis rédigez votre avis argumenté.",
      activities: [
        {
          type: "rewrite", title: "Reformulez avec « peu importe »",
          prompt: "Remplacez *peu importe* par une structure de concession indéfinie.",
          items: [
            { q: "Peu importe ce que tu dis, je ne changerai pas d'avis.", a: ["Quoi que tu dises, je ne changerai pas d'avis."] },
            { q: "Peu importe les résultats, nous publierons l'étude.", a: ["Quels que soient les résultats, nous publierons l'étude."] },
            { q: "Peu importe où vous allez, respectez les règles.", a: ["Où que vous alliez, respectez les règles."] },
            { q: "Peu importe à quel point il est intelligent, il doit écouter.", a: ["Si intelligent qu'il soit, il doit écouter.", "Aussi intelligent qu'il soit, il doit écouter."] }
          ]
        },
        {
          type: "write", title: "Avis argumenté sur un dilemme éthique",
          prompt: "Choisissez un dilemme : l'IA dans le diagnostic médical, la modification génétique des embryons, ou la reconnaissance faciale dans l'espace public. Rédigez un avis argumenté et nuancé : enjeux, arguments, recommandations. Utilisez au moins six structures de concession différentes.",
          minWords: 230, maxWords: 320,
          model: "La reconnaissance faciale dans l'espace public divise profondément nos sociétés. Si efficace qu'elle soit pour retrouver des personnes recherchées, elle soulève des questions fondamentales sur nos libertés. Quels que soient les arguments sécuritaires avancés, un principe devrait primer : nul ne doit être surveillé sans raison légitime. Ses partisans affirment que seuls les coupables ont quelque chose à craindre. Quoi qu'ils en disent, l'expérience montre que ces systèmes commettent davantage d'erreurs pour certaines populations, ce qui risque d'aggraver les discriminations. Où que ces technologies aient été déployées massivement, le sentiment d'être observé a modifié les comportements : on manifeste moins, on s'exprime moins librement. Faut-il pour autant tout interdire ? Je ne le pense pas. Aussi dangereuse qu'elle puisse être, cette technologie peut rendre des services ponctuels, par exemple pour identifier une victime de catastrophe. Je recommande donc trois garde-fous : une autorisation judiciaire préalable, quel que soit le motif invoqué ; un contrôle par une autorité indépendante ; enfin, l'information systématique des citoyens, qui qu'ils soient. Quoi qu'il en soit, le débat ne peut être laissé aux seuls ingénieurs : il engage la société tout entière.",
          bank: ["Si / Aussi + adj. + que + subj.", "Quel(le)(s) que soi(en)t…", "Quoi que…", "Qui que…", "Où que…", "Quoi qu'il en soit,…"],
          checklist: ["J'ai présenté les enjeux du dilemme.", "J'ai donné des arguments pour et contre.", "J'ai utilisé six structures de concession différentes.", "J'ai fait des recommandations précises."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Concéder avec élégance",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Quelle que soit votre position, partons des faits." },
            { s: "Quoi que tu fasses, fais-le bien." },
            { s: "Qui que vous soyez, vous avez des droits." },
            { s: "Si performante qu'elle soit, l'IA se trompe parfois." },
            { s: "Quoi qu'il en soit, l'humain garde le dernier mot." },
            { s: "Où qu'il aille, il emporte son ordinateur." }
          ]
        },
        {
          type: "speak", title: "Prise de position éthique",
          prompt: "Exposez en deux minutes votre position sur un des dilemmes de l'unité. Reconnaissez les arguments adverses et concluez par une recommandation.",
          language: ["Quels que soient…,", "Si… que soit…,", "Quoi qu'en disent…,", "Je reconnais que…", "Quoi qu'il en soit,…", "Je recommande que…"],
          seconds: 120,
          checklist: ["utilisé trois structures de concession ?", "reconnu les arguments adverses ?", "fait une recommandation ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux accorder *quel que soit* avec le nom.", review: "Explication : la concession indéfinie ; Attention !" },
    { can: "Je peux utiliser *quoi que, qui que, où que* + subjonctif.", review: "Explication : la concession indéfinie ; Écrire, activité 1" },
    { can: "Je peux distinguer *quoi que* et *quoique*.", review: "Explication (note)" },
    { can: "Je peux utiliser *si / aussi + adjectif + que*.", review: "Explication : la concession indéfinie" },
    { can: "Je peux comprendre un avis ou une intervention sur l'éthique.", review: "Écouter et Lire" },
    { can: "Je peux défendre une position éthique nuancée.", review: "Écrire, activité 2 et Parler" }
  ]
};
