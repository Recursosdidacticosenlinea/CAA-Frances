window.UNIT = {
  slug: "lettre-formelle",
  title: "La lettre formelle",
  level: "B2",
  subject: "Communiquer",
  minutes: 60,
  focus: ["le registre soutenu", "les formules de la lettre et du courriel", "le conditionnel de politesse", "la réclamation et la demande"],

  presentation: {
    scene: "✉️🖋️🏛️",
    situation: "Andrés a acheté un ordinateur en ligne. Il est arrivé **endommagé** et le service client ne répond pas. Il demande de l'aide à son amie Claire pour écrire une **lettre de réclamation**.",
    warmup: {
      prompt: "À qui avez-vous déjà écrit un message formel ?",
      options: ["un professeur", "l'administration de l'université", "une entreprise", "un service client", "une ambassade", "un futur employeur", "un propriétaire", "jamais"],
      response: "Écrire formellement en français obéit à des codes précis. Découvrons-les."
    },
    dialogueTitle: "Comment je commence ?",
    dialogue: [
      { who: "Andrés", line: "Je commence par « Salut » ?" },
      { who: "Claire", line: "Surtout pas ! Tu écris « *Madame, Monsieur,* ». Et tu vouvoies, évidemment." },
      { who: "Andrés", line: "D'accord. Ensuite, je dis que je suis très en colère ?" },
      { who: "Claire", line: "Reste poli mais ferme : « *Je me permets de vous contacter au sujet de* ma commande n° 4521. »" },
      { who: "Andrés", line: "Et pour demander le remboursement ?" },
      { who: "Claire", line: "Utilise le conditionnel : « *Je vous serais reconnaissant de bien vouloir* procéder au remboursement. »" },
      { who: "Andrés", line: "Et à la fin, « Bisous » ?" },
      { who: "Claire", line: "Ha ha ! Non : « *Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.* »" }
    ]
  },

  objectives: [
    "Je peux distinguer le registre familier, courant et soutenu.",
    "Je peux utiliser les formules d'ouverture et de clôture d'une lettre ou d'un courriel formel.",
    "Je peux formuler une demande polie avec le conditionnel.",
    "Je peux rédiger une lettre de réclamation ou de demande."
  ],

  explanation: {
    vocabTitle: "La correspondance formelle",
    vocab: [
      { word: "l'objet", icon: "📌" }, { word: "le destinataire", icon: "📬" }, { word: "l'expéditeur", icon: "📤" }, { word: "une pièce jointe", icon: "📎" },
      { word: "une réclamation", icon: "⚠️" }, { word: "une demande", icon: "🙋" }, { word: "un remboursement", icon: "💶" }, { word: "un délai", icon: "⏳" },
      { word: "une facture", icon: "🧾" }, { word: "une candidature", icon: "📄" }, { word: "les salutations", icon: "🤝" }, { word: "la signature", icon: "✍️" }
    ],
    grammar: [
      {
        title: "Les registres de langue",
        head: ["Familier", "Courant", "Soutenu"],
        rows: [
          ["Salut !", "Bonjour,", "Madame, Monsieur,"],
          ["T'as reçu mon truc ?", "Avez-vous reçu mon message ?", "Auriez-vous l'obligeance de me confirmer la réception de mon courrier ?"],
          ["Je veux mon fric.", "Je voudrais être remboursé.", "Je souhaiterais obtenir le remboursement de ma commande."],
          ["Bisous / À plus", "Cordialement", "Je vous prie d'agréer l'expression de mes salutations distinguées."]
        ]
      },
      {
        title: "Les formules de la lettre formelle",
        head: ["Partie", "Formules"],
        rows: [
          ["ouverture", "Madame, Monsieur, / Madame la Directrice, / Monsieur le Professeur,"],
          ["motif", "Je me permets de vous écrire au sujet de… / Je vous contacte afin de… / Suite à notre conversation du…"],
          ["réclamation", "J'ai le regret de vous informer que… / Je constate avec surprise que… / Malgré mes nombreuses relances,…"],
          ["demande", "Je vous serais reconnaissant(e) de bien vouloir… / Pourriez-vous… ? / Je souhaiterais…"],
          ["pièces jointes", "Vous trouverez ci-joint… / Je joins à ce courrier…"],
          ["clôture", "Dans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées."],
          ["courriel (plus simple)", "Je vous remercie par avance. Bien cordialement, / Cordialement,"]
        ]
      },
      {
        title: "Le conditionnel de politesse",
        head: ["Direct (trop brutal)", "Poli (conditionnel)"],
        rows: [
          ["Je veux un rendez-vous.", "Je *souhaiterais* / *voudrais* obtenir un rendez-vous."],
          ["Envoyez-moi le formulaire.", "*Pourriez-vous* m'envoyer le formulaire ?"],
          ["Vous devez me répondre.", "*Il serait souhaitable* que vous me répondiez rapidement."],
          ["Merci de m'aider.", "Je vous *serais* très reconnaissant(e) de m'aider."]
        ]
      }
    ],
    watchOut: [
      ["Cher Monsieur Dupont, (à un inconnu)", "Monsieur,"],
      ["Je vous prie d'agréer mes bisous.", "Je vous prie d'agréer l'expression de mes salutations distinguées."],
      ["Pouvez-vous m'envoyer ça vite ?", "Pourriez-vous me faire parvenir ce document dans les meilleurs délais ?"],
      ["Tu peux me répondre ? (à l'administration)", "Pourriez-vous me répondre ?"]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez les formules.",
      items: ["Je vous serais [[reconnaissant|reconnaissante]] de bien vouloir me répondre.", "Vous trouverez [[ci-joint]] ma facture.", "Je vous prie d'[[agréer|agreer]] l'expression de mes salutations distinguées."]
    }
  },

  skills: {
    listening: {
      intro: "Écoutez ce message laissé sur le répondeur du secrétariat. Puis repérez les éléments formels.",
      title: "Un message au secrétariat",
      script: [
        { who: "Valeria", line: "Bonjour, madame. Valeria Ortiz à l'appareil, étudiante en master de traduction, numéro d'étudiante 20 41 87." },
        { who: "Valeria", line: "Je me permets de vous appeler au sujet de mon attestation de réussite. Je l'ai demandée il y a trois semaines et je ne l'ai toujours pas reçue." },
        { who: "Valeria", line: "J'en aurais besoin avant le 15 juin pour ma candidature à une bourse. Pourriez-vous me l'envoyer par courriel, s'il vous plaît ?" },
        { who: "Valeria", line: "Je vous serais très reconnaissante de me rappeler au zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit. Je vous remercie par avance et vous souhaite une bonne journée." }
      ],
      activities: [
        {
          type: "gap", title: "Les informations",
          prompt: "Complétez.",
          items: ["Valeria est étudiante en master de [[traduction]].", "Elle a demandé son [[attestation]] il y a trois semaines.", "Elle en a besoin avant le [[15|quinze]] juin.", "C'est pour une candidature à une [[bourse]]."]
        },
        {
          type: "sort", title: "Quelles formules a-t-elle utilisées ?",
          bins: ["Formules entendues", "Formules non utilisées"],
          items: [
            { text: "Je me permets de vous appeler", bin: 0 }, { text: "Pourriez-vous…", bin: 0 }, { text: "Je vous serais très reconnaissante", bin: 0 }, { text: "Je vous remercie par avance", bin: 0 },
            { text: "Salut !", bin: 1 }, { text: "Vous trouverez ci-joint", bin: 1 }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez la lettre d'Andrés. Elle contient quelques erreurs de registre !",
      title: "Lettre de réclamation (brouillon)",
      text: [
        "**Objet** : Réclamation – commande n° 4521",
        "Madame, Monsieur,",
        "Je me permets de vous écrire au sujet de l'ordinateur portable commandé sur votre site le 2 mars et livré le 10 mars. À l'ouverture du colis, j'ai constaté que l'écran était fissuré. **C'est vraiment nul.**",
        "J'ai contacté votre service client à trois reprises par téléphone, sans obtenir de réponse. **Franchement, vous rigolez ?**",
        "Conformément à vos conditions générales de vente, je vous serais reconnaissant de bien vouloir procéder au remboursement intégral de ma commande ou à son remplacement dans un délai de quinze jours. Vous trouverez ci-joint la facture ainsi que des photos de l'écran.",
        "Dans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
        "Andrés Rivera"
      ],
      activities: [
        {
          type: "rewrite", title: "Corrigez le registre",
          prompt: "Remplacez les phrases familières (en gras dans le texte) par une formulation soutenue.",
          items: [
            { q: "C'est vraiment nul.", a: ["Je suis très déçu.", "Je suis profondément déçu.", "Ce produit ne correspond pas à mes attentes.", "Je suis extrêmement déçu."] },
            { q: "Franchement, vous rigolez ?", a: ["Je trouve cette situation inacceptable.", "Cette situation est inacceptable.", "Je déplore ce manque de réactivité.", "Je regrette ce manque de réponse."] }
          ]
        },
        {
          type: "match", title: "La structure de la lettre",
          prompt: "Associez chaque partie à sa fonction.",
          pairs: [["Objet : Réclamation…", "annoncer le sujet"], ["Je me permets de vous écrire au sujet de…", "présenter le motif"], ["J'ai contacté votre service client…", "rappeler les démarches"], ["Je vous serais reconnaissant de…", "formuler la demande"], ["Je vous prie d'agréer…", "clore la lettre"]]
        }
      ]
    },

    writing: {
      intro: "Rendez les phrases formelles, puis rédigez votre lettre.",
      activities: [
        {
          type: "rewrite", title: "Du familier au soutenu",
          prompt: "Reformulez dans un registre soutenu.",
          items: [
            { q: "Envoyez-moi le formulaire.", a: ["Pourriez-vous m'envoyer le formulaire ?", "Pourriez-vous m'envoyer le formulaire, s'il vous plaît ?", "Je vous serais reconnaissant de bien vouloir m'envoyer le formulaire."] },
            { q: "Je veux changer de groupe.", a: ["Je souhaiterais changer de groupe.", "Je voudrais changer de groupe."] },
            { q: "Voilà ma facture.", a: ["Vous trouverez ci-joint ma facture."] },
            { q: "Répondez vite.", a: ["Pourriez-vous me répondre rapidement ?", "Pourriez-vous me répondre dans les meilleurs délais ?"] }
          ]
        },
        {
          type: "write", title: "Ma lettre formelle",
          prompt: "Choisissez une situation : (1) une réclamation à une entreprise (produit, service, retard) ; (2) une demande à l'administration de l'université (changement de groupe, attestation, report d'examen). Rédigez une lettre complète : objet, ouverture, motif, explication, demande, pièces jointes, clôture.",
          minWords: 160, maxWords: 230,
          model: "Objet : Demande de report d'examen. Madame la Directrice des études, Je me permets de vous écrire afin de solliciter le report de mon examen de linguistique, prévu le 12 juin. En effet, je dois subir une intervention chirurgicale le 10 juin, comme l'atteste le certificat médical ci-joint. Mon médecin m'a prescrit un repos complet d'une semaine, si bien qu'il me sera impossible de me présenter à l'épreuve. Je suis consciente des contraintes d'organisation que représente cette demande. Néanmoins, je vous serais très reconnaissante de bien vouloir m'autoriser à passer cet examen lors de la session de rattrapage ou à une date qui vous conviendrait. Je reste à votre disposition pour tout renseignement complémentaire. Dans l'attente de votre réponse, je vous prie d'agréer, Madame la Directrice, l'expression de mes salutations respectueuses. Valeria Ortiz, étudiante en 2e année de master, n° 204187",
          bank: ["Objet :", "Madame, Monsieur,", "Je me permets de vous écrire afin de…", "En effet,…", "Je vous serais reconnaissant(e) de bien vouloir…", "Vous trouverez ci-joint…", "Je reste à votre disposition…", "Je vous prie d'agréer…"],
          checklist: ["J'ai écrit un objet.", "J'ai utilisé une formule d'ouverture et une de clôture adaptées.", "J'ai formulé ma demande avec le conditionnel.", "J'ai vouvoyé et évité le registre familier.", "J'ai mentionné une pièce jointe."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Le registre soutenu",
          prompt: "Écoutez et répétez avec un ton poli.",
          items: [
            { s: "Madame, Monsieur, je vous écris." },
            { s: "Je me permets de vous contacter au sujet de ma commande." },
            { s: "Pourriez-vous m'envoyer le formulaire ?" },
            { s: "Je vous serais reconnaissant de bien vouloir me répondre." },
            { s: "Vous trouverez ci-joint ma facture." },
            { s: "Je vous remercie par avance de votre compréhension." }
          ]
        },
        {
          type: "speak", title: "Message vocal formel",
          prompt: "Laissez un message vocal formel à un professeur ou à l'administration pour demander un rendez-vous ou un document.",
          language: ["Bonjour, madame / monsieur.", "… à l'appareil.", "Je me permets de vous appeler au sujet de…", "Pourriez-vous… ?", "Je vous remercie par avance."],
          seconds: 60,
          checklist: ["présenté qui vous êtes ?", "formulé une demande claire et polie ?", "laissé vos coordonnées ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux distinguer les registres familier, courant et soutenu.", review: "Explication : les registres de langue" },
    { can: "Je peux utiliser les formules d'ouverture et de clôture.", review: "Explication : les formules de la lettre" },
    { can: "Je peux formuler une demande polie avec le conditionnel.", review: "Explication : le conditionnel de politesse ; Écrire, activité 1" },
    { can: "Je peux repérer et corriger un registre inadapté.", review: "Lire, activité 1" },
    { can: "Je peux rédiger une lettre de réclamation ou de demande.", review: "Écrire, activité 2" },
    { can: "Je peux faire une réclamation à l'oral de façon formelle.", review: "Parler, activité 1" }
  ]
};
