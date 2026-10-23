window.UNIT = {
  slug: "la-vie-etudiante",
  title: "La vie étudiante",
  level: "B1",
  subject: "Les études",
  speakers: { "L'agent immobilier": "m" },
  minutes: 55,
  focus: ["le logement", "la colocation", "les pronoms y et en", "chercher un appartement"],

  presentation: {
    scene: "🏠🔑🧑‍🤝‍🧑",
    situation: "Mateo arrive à Toulouse pour un semestre d'échange. Il cherche une **colocation**. Il visite un appartement avec Chloé, une des colocataires.",
    warmup: {
      prompt: "Pour vous, qu'est-ce qui est important dans un logement étudiant ?",
      options: ["le prix", "être près de l'université", "une chambre calme", "une grande cuisine", "le wifi", "des colocataires sympas", "un balcon", "les transports"],
      response: "Bonne liste ! Voyons comment Mateo choisit son logement."
    },
    dialogueTitle: "La visite de la colocation",
    dialogue: [
      { who: "Chloé", line: "Bienvenue ! Alors, voici la cuisine. On *y* prépare les repas ensemble le dimanche." },
      { who: "Mateo", line: "Super. Et des colocataires, il *y en* a combien ?" },
      { who: "Chloé", line: "*Nous sommes* trois. Avec toi, nous *en* serons quatre." },
      { who: "Mateo", line: "Il y a une machine à laver ?" },
      { who: "Chloé", line: "Oui, il *y en* a une, dans la salle de bains." },
      { who: "Mateo", line: "Et l'université, c'est loin ?" },
      { who: "Chloé", line: "Non, tu peux *y* aller à pied en dix minutes. Le loyer est de 420 euros, charges comprises." },
      { who: "Mateo", line: "Parfait ! Je pense que je vais *en* parler avec mes parents ce soir, mais ça me plaît beaucoup." }
    ]
  },

  objectives: [
    "Je peux parler du logement et de la colocation.",
    "Je peux utiliser le pronom *y* pour remplacer un lieu.",
    "Je peux utiliser le pronom *en* pour remplacer une quantité ou *de* + nom.",
    "Je peux poser des questions sur un logement."
  ],

  explanation: {
    vocabTitle: "Le logement",
    vocab: [
      { word: "le loyer", icon: "💶" }, { word: "les charges", icon: "💡" }, { word: "la caution", icon: "🔐" }, { word: "le propriétaire", icon: "👤" },
      { word: "le colocataire", icon: "🧑‍🤝‍🧑" }, { word: "une chambre meublée", icon: "🛏️" }, { word: "la résidence universitaire", icon: "🏫" }, { word: "le studio", icon: "🏠" },
      { word: "le bail", icon: "📄" }, { word: "déménager", icon: "📦" }, { word: "emménager", icon: "🚚" }, { word: "les tâches ménagères", icon: "🧹" }
    ],
    grammar: [
      {
        title: "Le pronom y",
        intro: "*y* remplace un **lieu** introduit par *à, en, dans, chez, sur…*",
        head: ["Sans pronom", "Avec y"],
        rows: [
          ["Tu vas *à l'université* ?", "Oui, j'*y* vais."],
          ["Il habite *en France* depuis un an.", "Il *y* habite depuis un an."],
          ["Nous mangeons *dans la cuisine*.", "Nous *y* mangeons."],
          ["Tu ne vas pas *chez Léa* ?", "Non, je n'*y* vais pas."]
        ],
        note: "Le pronom se place **avant le verbe** conjugué, ou avant l'infinitif : *Je vais y aller.*"
      },
      {
        title: "Le pronom en",
        intro: "*en* remplace *du, de la, des, de* + nom, ou un nom avec une **quantité**.",
        head: ["Sans pronom", "Avec en"],
        rows: [
          ["Tu veux *du café* ?", "Oui, j'*en* veux."],
          ["Il y a *des chambres libres* ?", "Oui, il y *en* a deux."],
          ["Tu as *beaucoup de colocataires* ?", "J'*en* ai trois."],
          ["Vous parlez *de l'appartement* ?", "Oui, nous *en* parlons."],
          ["Tu reviens *de la bibliothèque* ?", "Oui, j'*en* reviens."]
        ],
        note: "Avec un nombre, on répète le nombre : *J'en ai trois.* Au négatif : *Je n'en ai pas.*"
      }
    ],
    watchOut: [
      ["J'y vais pas.", "Je n'y vais pas."],
      ["Tu as combien de cours ? – J'en ai.", "Tu as combien de cours ? – J'en ai cinq."],
      ["Je vais aller y.", "Je vais y aller."],
      ["Il y a des chambres ? – Oui, il y les a.", "Oui, il y en a."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Complétez avec *y* ou *en*.",
      items: ["Tu vas à Paris ? – Oui, j'[[y]] vais demain.", "Tu as des frères ? – Oui, j'[[en]] ai deux.", "Il mange de la viande ? – Non, il n'[[en]] mange pas."]
    }
  },

  skills: {
    listening: {
      intro: "Paula téléphone à une agence pour un studio. Écoutez.",
      title: "Un studio près de la fac",
      script: [
        { who: "L'agent immobilier", line: "Agence Soleil, bonjour !" },
        { who: "Paula", line: "Bonjour, j'appelle pour l'annonce du studio rue des Lilas. Il est encore disponible ?" },
        { who: "L'agent immobilier", line: "Oui, il l'est. C'est un studio de 22 mètres carrés, meublé, au deuxième étage." },
        { who: "Paula", line: "Il y a un ascenseur ?" },
        { who: "L'agent immobilier", line: "Non, il n'y en a pas, désolé. Mais il y a un petit balcon." },
        { who: "Paula", line: "Et le loyer, c'est combien ?" },
        { who: "L'agent immobilier", line: "Cinq cent cinquante euros, plus cinquante euros de charges. Et il faut une caution d'un mois." },
        { who: "Paula", line: "D'accord. Je peux le visiter ?" },
        { who: "L'agent immobilier", line: "Bien sûr. Vous pouvez y aller jeudi à 17 heures ?" },
        { who: "Paula", line: "Oui, j'y serai. Merci !" }
      ],
      activities: [
        {
          type: "gap", title: "La fiche du studio",
          prompt: "Complétez la fiche.",
          items: [
            "Surface : [[22|vingt-deux]] m²",
            "Étage : le [[deuxième|2e|2ème]]",
            "Ascenseur : [[non]]",
            "Loyer : [[550|cinq cent cinquante]] € + 50 € de charges",
            "Visite : [[jeudi]] à 17 h"
          ]
        },
        {
          type: "match", title: "Que remplace le pronom ?",
          prompt: "Associez le pronom et ce qu'il remplace.",
          pairs: [["« il n'y en a pas »", "un ascenseur"], ["« vous pouvez y aller »", "au studio"], ["« je peux le visiter »", "le studio"]]
        }
      ]
    },

    reading: {
      intro: "Lisez la charte de la colocation de Chloé.",
      title: "Charte de la coloc' 🏠",
      text: [
        "1. **La cuisine** : on y fait la vaisselle tout de suite après le repas. Pas de vaisselle sale le soir !",
        "2. **Les courses** : on les fait ensemble le samedi. Le café, le sucre, le papier toilette : chacun en achète à tour de rôle.",
        "3. **Les invités** : on peut en inviter, mais on prévient les autres. Pas de fête après minuit en semaine.",
        "4. **La salle de bains** : il n'y en a qu'une ! Maximum quinze minutes le matin.",
        "5. **Le ménage** : chaque semaine, une personne s'occupe du salon. Le planning est sur le frigo : regardez-y le lundi !"
      ],
      activities: [
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "On peut laisser la vaisselle sale jusqu'au lendemain.", a: false },
            { s: "Les colocataires font les courses le samedi.", a: true },
            { s: "Les invités sont interdits.", a: false },
            { s: "Il y a deux salles de bains.", a: false },
            { s: "Le planning du ménage est sur le frigo.", a: true }
          ]
        },
        {
          type: "match", title: "Que remplace le pronom ?",
          pairs: [["« on y fait la vaisselle »", "dans la cuisine"], ["« chacun en achète »", "du café, du sucre…"], ["« on peut en inviter »", "des invités"], ["« regardez-y »", "sur le frigo"]]
        }
      ]
    },

    writing: {
      intro: "Pratiquez les pronoms, puis écrivez une annonce.",
      activities: [
        {
          type: "rewrite", title: "Remplacez par y ou en",
          prompt: "Répondez avec *y* ou *en*.",
          items: [
            { q: "Tu vas à la résidence ? (oui)", a: ["Oui, j'y vais."] },
            { q: "Vous avez des colocataires ? (oui, deux)", a: ["Oui, j'en ai deux.", "Oui, nous en avons deux."] },
            { q: "Il habite à Lyon ? (non)", a: ["Non, il n'y habite pas."] },
            { q: "Tu bois du café ? (non)", a: ["Non, je n'en bois pas."] },
            { q: "Elle va aller à la fête ? (oui)", a: ["Oui, elle va y aller."] }
          ]
        },
        {
          type: "write", title: "Cherche colocataire !",
          prompt: "Vous cherchez un(e) colocataire. Écrivez une annonce : décrivez le logement, le quartier, le prix, et le / la colocataire idéal(e). Utilisez *y* et *en* au moins deux fois.",
          minWords: 80, maxWords: 120,
          model: "Cherche colocataire pour grand appartement au centre de Puebla ! L'appartement a trois chambres, deux salles de bains et un balcon. La cuisine est équipée : on y cuisine souvent ensemble. Il y a des cafés et des librairies dans le quartier, et l'université est à quinze minutes : on peut y aller en bus ou à vélo. Le loyer est de 3 500 pesos par mois, charges comprises. Des animaux ? Nous en avons déjà un : un chat très gentil ! Colocataire idéal(e) : calme, organisé(e) et qui aime la musique. Contactez-moi !",
          bank: ["Cherche colocataire", "L'appartement a…", "on y…", "il y en a…", "Le loyer est de…", "Colocataire idéal(e) :"],
          checklist: ["J'ai décrit le logement et le quartier.", "J'ai donné le prix.", "J'ai utilisé *y* et *en* au moins deux fois.", "J'ai décrit le / la colocataire idéal(e)."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "Chercher un logement",
          prompt: "Écoutez et répétez.",
          items: [
            { s: "Le loyer est de combien ?" },
            { s: "Les charges sont comprises ?" },
            { s: "Il y en a trois." },
            { s: "On peut y aller à pied." },
            { s: "Je n'en ai pas." },
            { s: "Quand est-ce que je peux emménager ?" }
          ]
        },
        {
          type: "speak", title: "Mon logement",
          prompt: "Décrivez où vous habitez maintenant : le type de logement, avec qui, les avantages et les inconvénients.",
          language: ["J'habite dans…", "J'y habite depuis…", "Il y en a…", "L'avantage, c'est que…", "L'inconvénient, c'est que…"],
          seconds: 75,
          checklist: ["parlé des avantages et des inconvénients ?", "utilisé *y* ou *en* ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux utiliser le vocabulaire du logement.", review: "Explication : le vocabulaire" },
    { can: "Je peux remplacer un lieu par *y*.", review: "Explication : le pronom y" },
    { can: "Je peux remplacer une quantité par *en*.", review: "Explication : le pronom en" },
    { can: "Je peux placer *y* et *en* au négatif et avec un infinitif.", review: "Écrire, activité 1" },
    { can: "Je peux comprendre une annonce et des règles de colocation.", review: "Écouter et Lire" },
    { can: "Je peux poser des questions sur un logement.", review: "Parler, activité 1" }
  ]
};
