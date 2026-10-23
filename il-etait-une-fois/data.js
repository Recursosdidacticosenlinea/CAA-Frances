window.UNIT = {
  slug: "il-etait-une-fois",
  title: "Il était une fois…",
  level: "C2",
  subject: "La littérature",
  minutes: 70,
  focus: ["le récit littéraire", "le passé simple et le passé antérieur", "reconnaître le subjonctif imparfait", "analyser et écrire un récit"],

  presentation: {
    scene: "📜🖋️🕯️",
    situation: "Dans un atelier d'écriture, les participants découvrent les **temps du récit littéraire**. L'animatrice lit le début d'un conte, puis les invite à réécrire une anecdote à la manière des grands romanciers.",
    warmup: {
      prompt: "Quels auteurs de langue française connaissez-vous ?",
      options: ["Victor Hugo", "Albert Camus", "Marguerite Duras", "Guy de Maupassant", "Antoine de Saint-Exupéry", "Annie Ernaux", "Léopold Sédar Senghor", "Amélie Nothomb"],
      response: "Une belle bibliothèque ! Vous allez entrer dans la langue de leurs récits."
    },
    dialogueTitle: "L'atelier d'écriture",
    dialogue: [
      { who: "L'animatrice", line: "Écoutez : « Le vieil homme *ouvrit* la porte. Il *faisait* nuit. Quand il *eut allumé* la lampe, il *aperçut* une lettre sur la table. »" },
      { who: "Pierre", line: "On n'utilise plus ce temps à l'oral, n'est-ce pas ?" },
      { who: "L'animatrice", line: "Presque jamais. Le *passé simple* est le temps du récit écrit : il présente des actions achevées, coupées du présent." },
      { who: "Lucie", line: "Et « eut allumé » ?" },
      { who: "L'animatrice", line: "C'est le *passé antérieur* : une action terminée juste avant une autre, au passé simple." },
      { who: "Pierre", line: "Et cette phrase que j'ai lue chez Proust : « il fallait qu'il *partît* » ?" },
      { who: "L'animatrice", line: "Le *subjonctif imparfait*. Vous devez le reconnaître, mais aujourd'hui on écrirait « qu'il parte »." }
    ]
  },

  objectives: [
    "Je peux reconnaître et conjuguer le passé simple.",
    "Je peux utiliser le passé antérieur après *quand, lorsque, dès que, à peine… que*.",
    "Je peux reconnaître le subjonctif imparfait et le plus-que-parfait du subjonctif.",
    "Je peux écrire un récit littéraire en articulant passé simple et imparfait."
  ],

  explanation: {
    vocabTitle: "Le récit",
    vocab: [
      { word: "le narrateur", icon: "🗣️" }, { word: "l'intrigue", icon: "🧩" }, { word: "le dénouement", icon: "🏁" }, { word: "un personnage", icon: "🧑" },
      { word: "la focalisation", icon: "🔭" }, { word: "un retour en arrière", icon: "⏪" }, { word: "le dialogue", icon: "💬" }, { word: "la description", icon: "🖼️" },
      { word: "le suspense", icon: "😮" }, { word: "un conte", icon: "📖" }, { word: "une nouvelle", icon: "📄" }, { word: "le style", icon: "🖋️" }
    ],
    grammar: [
      {
        title: "Le passé simple : les trois terminaisons",
        head: ["", "-er : parler", "-ir / -re : finir, prendre", "-oir et autres : vouloir, être, avoir"],
        rows: [
          ["je", "parl*ai*", "fin*is*, pr*is*", "voul*us*, f*us*, e*us*"],
          ["tu", "parl*as*", "fin*is*, pr*is*", "voul*us*, f*us*, e*us*"],
          ["il / elle", "parl*a*", "fin*it*, pr*it*", "voul*ut*, f*ut*, e*ut*"],
          ["nous", "parl*âmes*", "fin*îmes*, pr*îmes*", "voul*ûmes*, f*ûmes*, e*ûmes*"],
          ["vous", "parl*âtes*", "fin*îtes*, pr*îtes*", "voul*ûtes*, f*ûtes*, e*ûtes*"],
          ["ils / elles", "parl*èrent*", "fin*irent*, pr*irent*", "voul*urent*, f*urent*, e*urent*"]
        ],
        note: "Irréguliers fréquents : *faire → il fit, voir → il vit, venir → il vint, tenir → il tint, naître → il naquit, mourir → il mourut*. Au récit, on utilise surtout la 3ᵉ personne."
      },
      {
        title: "Passé simple, imparfait, passé antérieur",
        head: ["Temps", "Rôle dans le récit", "Exemple"],
        rows: [
          ["*imparfait*", "décor, description, action en cours", "La pluie *tombait* ; la rue *était* déserte."],
          ["*passé simple*", "actions de premier plan, successives", "Il *entra*, *s'assit* et *attendit*."],
          ["*passé antérieur*", "action achevée juste avant un passé simple", "*Dès qu'*il *eut fini*, il *sortit*."],
          ["*plus-que-parfait*", "antériorité plus large", "Il *avait* déjà *lu* la lettre."]
        ],
        note: "Passé antérieur = *avoir / être* au passé simple + participe : *il eut fini, elle fut partie*. Construction typique : *À peine eut-il fini qu'il sortit.*"
      },
      {
        title: "Le subjonctif imparfait (à reconnaître)",
        head: ["Verbe", "3ᵉ pers. sing.", "Équivalent moderne"],
        rows: [
          ["être", "qu'il *fût*", "qu'il soit"], ["avoir", "qu'il *eût*", "qu'il ait"],
          ["faire", "qu'il *fît*", "qu'il fasse"], ["partir", "qu'il *partît*", "qu'il parte"],
          ["venir", "qu'il *vînt*", "qu'il vienne"], ["plus-que-parfait du subj.", "qu'il *eût fini*", "qu'il ait fini"]
        ],
        note: "Attention à l'accent circonflexe : *il fut* (passé simple, indicatif) ≠ *qu'il fût* (subjonctif imparfait)."
      }
    ],
    watchOut: [
      ["Il fut content qu'elle fût là. (les deux sont identiques)", "*fut* = passé simple ; *fût* = subjonctif imparfait."],
      ["Ils parlèrent puis ils parlirent.", "Ils parlèrent puis ils partirent."],
      ["Dès qu'il avait fini, il sortit. (action immédiate)", "Dès qu'il eut fini, il sortit."],
      ["Il venit hier.", "Il vint."]
    ],
    check: {
      type: "gap", title: "Vérification rapide",
      prompt: "Mettez le verbe au passé simple (3ᵉ personne).",
      items: ["Soudain, la porte s'[[ouvrit]]. (s'ouvrir)", "Ils [[firent]] un long voyage. (faire)", "Elle [[vint]] le voir le lendemain. (venir)"]
    }
  },

  skills: {
    listening: {
      intro: "Écoutez ce conte original, lu à voix haute.",
      title: "Conte : La lanterne du passeur",
      script: [
        { who: "La conteuse", line: "Il était une fois, au bord d'un fleuve immense, un passeur qui ne parlait jamais. Chaque soir, il allumait une lanterne et attendait les voyageurs." },
        { who: "La conteuse", line: "Une nuit d'hiver, une jeune femme se présenta. Elle portait un manteau trop léger et tenait contre elle un coffret de bois." },
        { who: "La conteuse", line: "Le passeur la fit monter sans un mot. À peine eurent-ils quitté la rive qu'une tempête se leva. La barque tangua, la lanterne s'éteignit." },
        { who: "La conteuse", line: "Alors la jeune femme ouvrit le coffret. Une lumière douce en sortit et éclaira le fleuve jusqu'à l'autre rive." },
        { who: "La conteuse", line: "Quand ils eurent atteint le rivage, le passeur parla pour la première fois : « Qui êtes-vous ? » Mais la jeune femme avait déjà disparu. Seul le coffret restait, ouvert, sur le banc de la barque." }
      ],
      activities: [
        {
          type: "sort", title: "Décor ou action ?",
          bins: ["Imparfait (décor)", "Passé simple (action)", "Passé antérieur"],
          items: [
            { text: "il allumait une lanterne", bin: 0 }, { text: "elle portait un manteau", bin: 0 },
            { text: "une jeune femme se présenta", bin: 1 }, { text: "la lanterne s'éteignit", bin: 1 }, { text: "elle ouvrit le coffret", bin: 1 },
            { text: "à peine eurent-ils quitté la rive", bin: 2 }, { text: "quand ils eurent atteint le rivage", bin: 2 }
          ]
        },
        {
          type: "tf", title: "Vrai ou faux ?",
          items: [
            { s: "Le passeur parlait beaucoup aux voyageurs.", a: false },
            { s: "La tempête éteignit la lanterne.", a: true },
            { s: "La lumière venait du coffret.", a: true },
            { s: "À la fin, la jeune femme répond au passeur.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Lisez cet extrait d'une nouvelle de Guy de Maupassant, « La Parure » (1884). Le texte est dans le domaine public.",
      title: "Maupassant, « La Parure » (extrait adapté)",
      text: [
        "Elle n'avait pas de toilettes, pas de bijoux, rien. Et elle n'aimait que cela ; elle se sentait faite pour cela. Elle eût tant désiré plaire, être enviée, être séduisante et recherchée.",
        "Le jour de la fête arriva. Mme Loisel eut un succès. Elle était plus jolie que toutes, élégante, gracieuse, souriante et folle de joie. Tous les hommes la regardaient, demandaient son nom, cherchaient à être présentés.",
        "Elle partit vers quatre heures du matin. […] Mais lorsqu'elle eut ôté les vêtements qui enveloppaient ses épaules, elle poussa un cri. Elle n'avait plus sa rivière autour du cou !"
      ],
      activities: [
        {
          type: "match", title: "Identifiez le temps",
          pairs: [["« Elle n'avait pas de toilettes »", "imparfait"], ["« Le jour de la fête arriva »", "passé simple"], ["« lorsqu'elle eut ôté »", "passé antérieur"], ["« Elle eût tant désiré plaire »", "plus-que-parfait du subjonctif (sens conditionnel)"]]
        },
        {
          type: "tf", title: "Comprendre le texte",
          items: [
            { s: "Mme Loisel possédait beaucoup de bijoux.", a: false },
            { s: "Elle eut beaucoup de succès à la fête.", a: true },
            { s: "Elle découvre la perte du bijou en rentrant chez elle.", a: true },
            { s: "« Elle eût désiré » signifie « elle aurait désiré ».", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Transposez, puis écrivez votre récit.",
      activities: [
        {
          type: "rewrite", title: "Du passé composé au passé simple",
          prompt: "Réécrivez la phrase au passé simple (et au passé antérieur si nécessaire).",
          items: [
            { q: "Il est entré et il a fermé la porte.", a: ["Il entra et ferma la porte.", "Il entra et il ferma la porte."] },
            { q: "Ils ont vu une lumière et ils ont eu peur.", a: ["Ils virent une lumière et eurent peur.", "Ils virent une lumière et ils eurent peur."] },
            { q: "Elle est venue, puis elle est repartie.", a: ["Elle vint, puis elle repartit.", "Elle vint, puis repartit."] },
            { q: "Quand il a fini, il est sorti. (action immédiate)", a: ["Quand il eut fini, il sortit."] }
          ]
        },
        {
          type: "write", title: "Récit à la manière d'un conte",
          prompt: "Écrivez un conte ou une nouvelle brève (vrai souvenir transformé ou pure fiction). Utilisez l'imparfait pour le décor, le passé simple pour les actions et au moins deux passés antérieurs. Soignez la chute.",
          minWords: 250, maxWords: 350,
          model: "Il y avait, dans un village des montagnes de la Sierra Norte, une horloge qui ne marchait plus depuis cent ans. Les habitants s'étaient habitués à ses aiguilles immobiles, figées sur midi, et nul ne songeait plus à la réparer. Un matin de décembre, un enfant arriva au village. Il portait un sac trop grand pour lui et parlait une langue que personne ne comprenait. Il passa la journée à observer l'horloge. Le soir venu, il grimpa dans le clocher. Les anciens voulurent l'en empêcher, mais il était déjà trop tard. Toute la nuit, on entendit des bruits de métal et de bois. Dès que le soleil eut paru, les habitants se rassemblèrent sur la place. L'horloge sonnait. Elle sonna sept coups, puis huit, puis neuf, et ne s'arrêta plus. On chercha l'enfant partout ; il avait disparu. À peine eut-on fini de fouiller les maisons qu'une vieille femme poussa un cri : dans le sac abandonné au pied du clocher, il n'y avait qu'une vieille photographie. On y voyait le village, cent ans plus tôt, et devant l'horloge, souriant, le même enfant.",
          bank: ["Il était une fois…", "Il y avait…", "Un matin,…", "Soudain,…", "Dès que… eut…", "À peine… eut-il… que…", "Alors,…"],
          checklist: ["J'ai utilisé l'imparfait pour le décor.", "J'ai utilisé le passé simple pour les actions.", "J'ai utilisé deux passés antérieurs.", "Mon récit a une chute."]
        }
      ]
    },

    speaking: {
      intro: "Entraînez votre prononciation avec la reconnaissance vocale, puis enregistrez-vous.",
      activities: [
        {
          type: "pronounce", title: "La voix du conteur",
          prompt: "Écoutez et répétez avec une voix de conteur.",
          items: [
            { s: "Il était une fois un passeur silencieux." },
            { s: "Une nuit d'hiver, une jeune femme se présenta." },
            { s: "La barque tangua et la lanterne s'éteignit." },
            { s: "Dès qu'il eut fini, il sortit." },
            { s: "Le jour de la fête arriva enfin." },
            { s: "Elle poussa un cri et disparut." }
          ]
        },
        {
          type: "speak", title: "Lecture expressive",
          prompt: "Lisez votre conte à voix haute (trois minutes maximum), comme si vous le racontiez à un public. Variez le rythme : lent pour le décor, plus rapide pour l'action.",
          language: ["Il était une fois…", "Alors…", "Soudain…", "Et c'est ainsi que…"],
          seconds: 180,
          checklist: ["varié le rythme ?", "bien prononcé les passés simples ?", "ménagé le suspense ?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "Je peux conjuguer le passé simple des verbes réguliers et irréguliers.", review: "Explication : le passé simple" },
    { can: "Je peux articuler imparfait et passé simple dans un récit.", review: "Explication : passé simple, imparfait ; Écouter, activité 1" },
    { can: "Je peux utiliser le passé antérieur.", review: "Explication (note) ; Écrire, activité 1" },
    { can: "Je peux reconnaître le subjonctif imparfait.", review: "Explication : le subjonctif imparfait" },
    { can: "Je peux analyser les temps d'un texte littéraire.", review: "Lire" },
    { can: "Je peux écrire un récit littéraire.", review: "Écrire, activité 2 et Parler" }
  ]
};
