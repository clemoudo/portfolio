// Type pour une preuve individuelle
export type Proof = {
  label: string;
  url: string;
};

// Le type pour une activité
export type Activity = {
  slug: string;
  title: string;
  theme: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  analysis: string;
  proofs?: Proof[];
  realHours: number;
  valuedHours: number;
};

export const portfolioData: Activity[] = [
  // {
  //   slug: "",
  //   title: "",
  //   theme: "",
  //   startDate: "",
  //   description:
  //     "",
  //   analysis: `
  //   `,
  //   proofs: [
  //     {
  //       label: "",
  //       url: "",
  //     },
  //   ],
  //   realHours: 0,
  //   valuedHours: 0,
  // },
  {
    slug: "tutorat-2024",
    title: "Tutorat en développement (JavaScript)",
    theme: "Soft skill",
    startDate: new Date('2025-9-15'),
    endDate: new Date('2025-12-20'),
    description:
      "Tutorat délivré à un étudiant de première année encadré par l'EPHEC.",
    analysis: `
      <p>
        Le fait d'endosser le rôle de tuteur a été un exercice bien plus profond
        qu'une simple révision. Il m'a poussé à passer d'une connaissance
        passive de JavaScript à une maîtrise active. Pour expliquer clairement
        des concepts à un étudiant de première année, j'ai dû moi-même
        déconstruire et verbaliser des notions fondamentales que je tenais pour
        acquises, telles que le 'hoisting', la portée des variables (scope), les
        'closures', ou encore la gestion de l'asynchronisme avec les Promesses
        et <code>async/await</code>.
      </p>
      <p>
        Cette démarche a mis en lumière mes propres zones d'ombre et m'a forcé
        à solidifier mes bases à un niveau que la simple pratique personnelle ne
        m'aurait pas permis d'atteindre.
      </p>
      <p>
        Au-delà de l'aspect technique, cette expérience a été une leçon
        précieuse en matière de soft skills. Il m'a fallu développer de
        l'empathie pour identifier les points de blocage de l'étudiant, faire
        preuve de patience et adapter ma communication pour rendre des sujets
        complexes accessibles.
      </p>
    `,
    proofs: [
      {
        label: "Virement #1 de l'EPHEC",
        url: "/proofs/virementTutorat1.jpg",
      },
      {
        label: "Virement #2 de l'EPHEC",
        url: "/proofs/virementTutorat2.jpg",
      },
    ],
    realHours: 9.75,
    valuedHours: 9.75,
  },
  {
    slug: "open-classrooms-react",
    title: "Formation React OpenClassrooms",
    theme: "Développement React",
    startDate: new Date('2025-3-10'),
    description: "Formation dans le but de débuter avec React.",
    analysis: `
      <p>
        Cette formation sur OpenClassrooms a constitué mon point d'entrée
        structuré dans l'écosystème React. Bien que j'aie déjà eu une
        connaissance théorique des Single Page Applications (SPA), ce cours m'a
        permis de concrétiser ces concepts en maîtrisant les fondations de la
        bibliothèque.
      </p>
      <p>
        J'ai pu développer une compréhension pratique des piliers de React :
      </p>
      <ul>
        <li>
          <strong>L'approche par composants :</strong> Apprendre à penser en
          termes de composants réutilisables et à décomposer une interface
          complexe en petites briques logiques a fondamentalement changé ma
          manière de concevoir une application front-end.
        </li>
        <li>
          <strong>Le JSX :</strong> La syntaxe qui mélange JavaScript et HTML
          m'a paru très intuitive et puissante pour créer des interfaces
          dynamiques.
        </li>
        <li>
          <strong>
            La gestion de l'état (State) et des propriétés(Props) :
          </strong> 
          J'ai bien saisi la distinction cruciale entre ces deux concepts,
          notamment le flux de données unidirectionnel qui rend les applications
          plus prévisibles et plus faciles à déboguer.
        </li>
        <li>
          <strong>Les Hooks :</strong> La découverte des Hooks, en particulier
          <code>useState</code> et <code>useEffect</code>, a été une révélation.
          J'ai compris comment gérer l'état local d'un composant et comment
          interagir avec des effets de bord (comme les appels API) de manière
          propre et contrôlée.
        </li>
      </ul>
      <p>
        Au-delà de la technique, cette formation a été la confirmation de mon
        intérêt pour le développement front-end moderne. Elle constitue la
        première pierre de ma spécialisation en React, un choix technologique
        qui est au cœur de mon projet professionnel de devenir développeur
        Full-Stack dans l'écosystème JavaScript.
      </p>
    `,
    proofs: [
      {
        label: "Lien vers la formation",
        url: "https://openclassrooms.com/fr/courses/7008001-debutez-avec-react",
      },
      {
        label: "Durée",
        url: "/proofs/oc_duree.png",
      },
      {
        label: "Nom et prénom",
        url: "/proofs/oc_nom_prenom.png",
      },
      {
        label: "Réalisation",
        url: "/proofs/oc_realisation.png",
      },
    ],
    realHours: 10,
    valuedHours: 8,
  },
  {
    slug: "redsystem",
    title: "Formation cybersécurité RedSytem",
    theme:
      "Cybersécurité (phishing et ransomware + sécurité des appareils mobiles)",
    startDate: new Date('2025-11-4'),
    description: "Formation de sensibilisation aux attaques communes.",
    analysis: `
      <p>
        Cette session de sensibilisation avec RedSystem a été une démonstration
        percutante de la facilité avec laquelle des attaques, qu'elles soient
        logicielles ou matérielles, peuvent compromettre un système. Plutôt que
        de rester dans la théorie, la présentation de cas concrets comme les
        macros malveillantes, les câbles OMG ou les attaques par force brute a
        ancré ma compréhension de la sécurité dans le réel.
      </p>
      <p>
        Trois points ont particulièrement retenu mon attention :
      </p>
      <ul>
        <li>
          <strong>Les Macros malveillantes (Excel/Word) :</strong> J'ai souvent
          perçu les documents Office comme inoffensifs, mais j'ai réalisé qu'une
          simple macro peut servir de cheval de Troie pour exécuter du code
          arbitraire et infecter un poste. Cela m'a rappelé l'importance de la
          méfiance face aux pièces jointes et a renforcé ma conviction que toute
          fonctionnalité permettant l'exécution de scripts doit être désactivée
          par défaut et traitée avec une extrême prudence.
        </li>
        <li>
          <strong>Le Câble OMG :</strong> La démonstration de ce câble USB,
          indiscernable d'un câble standard mais contenant un keylogger et un
          serveur web, a été une véritable révélation. Cela m'a fait prendre
          conscience de la dimension physique de la sécurité. En tant que
          développeur, cela m'incite à ne jamais faire une confiance aveugle au
          matériel sur lequel je travaille et à être vigilant sur la sécurité de
          mon propre poste de développement.
        </li>
        <li>
          <strong>L'Attaque par Force Brute :</strong> Voir la vitesse à
          laquelle des mots de passe simples peuvent être "cassés" a été très
          concret. Cela renforce, de mon point de vue de développeur, l'absolue
          nécessité d'implémenter des mécanismes de défense robustes côté
          serveur : politiques de mots de passe complexes, limitation du nombre
          de tentatives de connexion (rate limiting), et mécanismes de
          temporisation exponentielle (exponential backoff). C'est une
          responsabilité directe lors de la conception d'un système
          d'authentification.
        </li>
      </ul>
      <p>
        En conclusion, cette formation m'a donné une vision plus holistique de
        la sécurité, qui ne se limite pas à protéger une base de données, mais
        englobe l'utilisateur (ingénierie sociale via les macros), le matériel
        (câbles malveillants) et l'infrastructure (protection contre la force
        brute). C'est une base de sensibilisation essentielle pour construire
        des applications plus résilientes.
      </p>
    `,
    proofs: [
      {
        label: "Screen début",
        url: "/proofs/teams_redsystem_debut.png",
      },
      {
        label: "Screen milieu 1",
        url: "/proofs/teams_redsystem_milieu1.png",
      },
      {
        label: "Screen milieu 2",
        url: "/proofs/teams_redsystem_milieu2.png",
      },
      {
        label: "Screen fin",
        url: "/proofs/teams_redsystem_fin.png",
      },
    ],
    realHours: 1,
    valuedHours: 1,
  },
  {
    slug: "labo-reseau",
    title: "Labo réseau sur du matériel physique",
    theme: "Réseau",
    startDate: new Date('2024-4-4'),
    description: "Manipulation de matériel Cisco physique.",
    analysis: `
      <p>
        Ce laboratoire sur du matériel Cisco a été une étape déterminante dans ma
        formation en réseau. Il m'a permis de passer de la théorie et des
        simulations sur Packet Tracer à la réalité tangible de la configuration
        d'équipements physiques. Cette transition a été incroyablement
        formatrice, car elle m'a confronté aux défis concrets du monde réel.
      </p>
      <p>
        Les principaux apprentissages de cette session ont été :
      </p>
      <ul>
        <li>
          <strong>La Connexion Physique :</strong> J'ai dû gérer la toute
          première étape de la configuration : l'accès physique aux équipements.
          Manipuler un câble console, utiliser un adaptateur USB vers RS-232,
          identifier le bon port COM via le gestionnaire de périphériques et
          établir une connexion série avec PuTTY sont des gestes de base que je
          maîtrise désormais. C'est une compétence fondamentale qui n'est jamais
          abordée dans les simulateurs.
        </li>
        <li>
          <strong>Découpage de Réseau (Subnetting) :</strong> L'énoncé nous
          demandait de découper un réseau global <code>10.0.x.0/24</code> en
          plusieurs sous-réseaux. Appliquer mes connaissances en subnetting sur
          du matériel réel, attribuer les adresses IP aux interfaces des
          routeurs et des PC, et vérifier la connectivité via des pings a rendu
          le concept beaucoup moins abstrait.
        </li>
        <li>
          <strong>Routage Statique :</strong> La mise en place du routage
          statique entre les différents sous-réseaux et vers le routeur central
          (Routeur2T) a été l'exercice central. J'ai compris l'importance de
          définir manuellement chaque route pour que les paquets sachent quel
          chemin emprunter. Configurer la route par défaut vers Internet a
          également clarifié le concept de "gateway of last resort".
        </li>
      </ul>
      <p>
        Au final, ce laboratoire a démystifié la configuration réseau. J'ai
        gagné en confiance dans ma capacité à configurer un petit réseau
        d'entreprise de A à Z. Savoir qu'il faut toujours vérifier l'état
        initial d'un appareil (<code>show start</code>, <code>sh vlan</code>) et
        le réinitialiser si nécessaire (<code>erase startup-config</code>,
        <code>del vlan.dat</code>) est un réflexe professionnel que j'ai acquis.
        Cette expérience pratique est un complément indispensable à mon profil
        de développeur Full-Stack, car elle me donne une meilleure compréhension
        de l'infrastructure sur laquelle mes applications seront déployées.
      </p>
    `,
    proofs: [
      {
        label: "Consignes",
        url: "/proofs/labo_reseau_consignes.pdf",
      },
      {
        label: "Présence #1",
        url: "/proofs/labo_reseau_presence1.jpg",
      },
      {
        label: "Présence #2",
        url: "/proofs/labo_reseau_presence2.jpg",
      },
      {
        label: "Diplome",
        url: "/proofs/labo_reseau_diplome.jpg", // TODO
      },
    ],
    realHours: 4,
    valuedHours: 4,
  },
  {
    slug: "cscbe-2025",
    title: "Cyber Security Challenge Belgium",
    theme: "Cybersécurité (CTF)",
    startDate: new Date('2025-3-14'),
    endDate: new Date('2025-3-15'),
    description: "Capture th flag sur la cybersécurité.",
    analysis: `
      <p>
        Ma participation au Cyber Security Challenge Belgium a été une
        expérience immersive et stimulante. Confronté à une série de défis
        chronométrés, j'ai pu mettre en pratique mes compétences dans un
        environnement compétitif qui couvre un large spectre de la
        cybersécurité. Les captures d'écran témoignent de la diversité des
        épreuves, allant de la culture générale en sécurité (catégorie "Trivia")
        à des challenges plus techniques en DNS ("CHAOS IN THE KITCHEN SINK"),
        programmation ("Infinite luck") et cryptographie.
      </p>
      <p>
        L'un des défis les plus instructifs pour moi fut un challenge de
        cryptographie (nommé "Two-time pad" dans l'interface). Il illustrait
        parfaitement une vulnérabilité classique de réutilisation de clé.
      </p>
      <ul>
        <li>
          <strong>Analyse du problème :</strong> Le challenge fournissait un
          script Python et deux grands nombres (les chiffrés). L'analyse du
          script a révélé qu'un chiffrement XOR était utilisé. Le flag
          (message 1) était chiffré avec une clé aléatoire. Un second message,
          connu, était chiffré avec la même clé, mais après une simple rotation
          d'un octet.
        </li>
        <li>
          <strong>Identification de la faille :</strong> La réutilisation de la
          clé, même légèrement modifiée de manière prédictible, est une faille
          critique dans les chiffrements de type "vernam" (one-time pad). C'est
          ce qu'on appelle une attaque "two-time pad".
        </li>
        <li>
          <strong>Démarche de résolution :</strong> La solution consistait à
          exploiter le message connu. En effectuant un XOR entre le texte en
          clair connu et son chiffré, j'ai pu retrouver la clé rotatée. J'ai
          ensuite inversé la rotation pour obtenir la clé de chiffrement
          originale. Enfin, un simple XOR entre cette clé et le premier chiffré
          m'a permis de révéler le flag.
        </li>
      </ul>
      <p>
        Au-delà de la satisfaction d'avoir résolu l'énigme, ce challenge a été
        une leçon pratique sur l'importance capitale de respecter les principes
        fondamentaux de la cryptographie. Il a renforcé ma conviction qu'en tant
        que développeur, il ne faut jamais tenter d'implémenter son propre
        algorithme de chiffrement, mais toujours s'appuyer sur des bibliothèques
        standard, éprouvées et utilisées selon les règles de l'art. Cette
        expérience m'a donné un aperçu précieux du mode de pensée "offensif"
        nécessaire pour construire des applications défensivement robustes.
      </p>
    `,
    proofs: [
      {
        label: "Inscription",
        url: "/proofs/cscbe_inscription.png",
      },
      {
        label: "Résultat de l'équipe",
        url: "/proofs/cscbe_equipe.jpg",
      },
      {
        label: "Challenges",
        url: "/proofs/cscbe_challenges.zip",
      },
    ],
    realHours: 6,
    valuedHours: 4,
  },
  {
    slug: "lets-fix-it",
    title: "Let's fix IT",
    theme: "Green IT",
    startDate: new Date('2025-3-18'),
    description: "Stands abordants des sujets concernant le green IT.",
    analysis: `
      <p>
        La soirée "Let's Fix IT" a été bien plus qu'une simple conférence sur le
        Green IT : c'était une immersion pratique dans les principes de
        l'économie circulaire appliqués au numérique. En naviguant entre les
        différents stands et ateliers, j'ai pu concrétiser des concepts souvent
        théoriques et réfléchir à mon rôle en tant que futur acteur de cette
        industrie.
      </p>
      <p>
        Plusieurs interventions ont particulièrement marqué ma réflexion :
      </p>
      <ul>
        <li>
          <strong>Le stand Fairphone :</strong> La découverte du
          <a 
            href="https://www.fairphone.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fairphone
          </a>
          a été une démonstration tangible de ce que signifie la "conception
          pour la réparabilité". Voir un smartphone pensé dès le départ pour
          être modulaire et facilement démontable m'a fait réaliser à quel point
          la plupart de l'électronique grand public est conçue comme une boîte
          noire jetable. Cela m'a poussé à m'interroger sur la maintenabilité et
          la "réparabilité" du code que j'écris. Un logiciel bien conçu,
          modulaire et documenté n'est-il pas aussi une forme de durabilité ?
        </li>
        <li>
          <strong>Les ateliers de réparation et les logiciels libres :</strong>
          L'atelier sur l'installation de logiciels libres, animé par des
          passionnés comme ceux de 
          <a 
            href="https://wiki.louvainlinux.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Louvain-li-Nux
          </a>
          , a mis en lumière une autre facette de la durabilité. Prolonger la
          vie d'un ordinateur vieillissant en remplaçant un système
          d'exploitation lourd par une distribution Linux légère est un acte
          écologique puissant. Cela m'a montré que le choix des logiciels et des
          technologies n'est pas neutre et peut avoir un impact direct sur
          l'obsolescence matérielle.
        </li>
        <li>
          <strong>Le témoignage de Revalor :</strong> La présentation de
          <a 
            href="https://www.revalor.be"
            target="_blank"
            rel="noopener noreferrer"
          >
            Revalor
          </a>
          , une entreprise spécialisée dans le reconditionnement de matériel
          informatique, a apporté une perspective économique essentielle. J'ai
          compris qu'un modèle d'affaires viable pouvait être construit autour
          de la seconde vie des appareils. Cela démystifie l'idée que le neuf
          est la seule voie possible et ouvre des perspectives sur des carrières
          dans des entreprises à impact positif.
        </li>
      </ul>
      <p>
        En définitive, cet événement a élargi ma vision du métier de
        développeur. Il ne s'agit pas seulement de créer des fonctionnalités,
        mais aussi de prendre en compte le cycle de vie complet du produit,
        matériel et logiciel confondus. Cette sensibilisation à l'éco-conception
        et à la sobriété numérique influencera certainement mes futurs choix
        techniques et professionnels.
      </p>
    `,
    proofs: [
      {
        label: "Invitation",
        url: "/proofs/letsfixit_invitation.pdf",
      },
      {
        label: "Enquête de satisfaction",
        url: "/proofs/letsfixit_participation.pdf",
      },
    ],
    realHours: 3.5,
    valuedHours: 3.5,
  },
  {
    slug: "formation-azure",
    title: "Formation cloud M365 et Azure",
    theme: "Cloud computing",
    startDate: new Date('2025-11-3'),
    description:
      "Présentation des solutions cloud de M365 et de l'infrastructure Azure.",
    analysis: `
      <p>
        Cette introduction aux services cloud de Microsoft a été une excellente
        porte d'entrée pour démystifier l'écosystème Azure et M365. En tant que
        développeur, il est crucial de ne pas seulement maîtriser le code, mais
        aussi de comprendre l'infrastructure sur laquelle nos applications sont
        destinées à fonctionner. Cette session a parfaitement rempli ce rôle de
        vue d'ensemble.
      </p>
      <p>
        Les points clés que je retiens de cette présentation sont :
      </p>
      <ul>
        <li>
          <strong>La distinction fondamentale entre SaaS et IaaS/PaaS :</strong>
          J'ai clairement saisi la différence entre Microsoft 365, qui est une
          solution logicielle prête à l'emploi (SaaS - Software as a Service),
          et Azure, qui est une plateforme sur laquelle on peut construire,
          déployer et gérer ses propres applications (IaaS/PaaS -
          Infrastructure/Platform as a Service). Pour moi, développeur, c'est
          sur Azure que se situe le terrain de jeu.
        </li>
        <li>
          <strong>La boîte à outils du développeur sur Azure :</strong> J'ai
          particulièrement été intéressé par l'aperçu des services Azure
          directement applicables à mon parcours. La facilité de déploiement
          d'une application web via <strong>Azure App Service</strong>, la
          gestion de bases de données scalables avec <strong>Azure SQL</strong>,
          ou encore le potentiel des <strong>Azure Functions</strong> pour
          créer des API "serverless" sont des solutions puissantes que je sais
          maintenant exister.
        </li>
        <li>
          <strong>L'importance de l'identité :</strong> La présentation de
          l'annuaire <strong>Azure Active Directory (aujourd'hui Entra ID)
          </strong> comme socle de la gestion des identités pour M365 et les
          applications Azure m'a rappelé que la sécurité et l'authentification
          sont des piliers centraux de toute architecture cloud moderne.
        </li>
      </ul>
      <p>
        En résumé, cette session, bien que courte, a solidifié ma compréhension
        de l'architecture cloud et de la place que j'occupe en tant que
        développeur au sein de cet écosystème. Elle m'a donné les repères
        nécessaires pour savoir quels services explorer plus en profondeur à
        l'avenir, et m'a motivé à obtenir une expérience pratique, par exemple
        en déployant l'un de mes projets personnels sur Azure.
      </p>
    `,
    proofs: [
      {
        label: "Participation",
        url: "/proofs/azure_participation.pdf",
      },
    ],
    realHours: 1,
    valuedHours: 1,
  },
];
