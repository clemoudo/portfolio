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
  date: string;
  description: string;
  analysis: string;
  proofs?: Proof[];
  realHours: number;
  valuedHours: number;
};

export const portfolioData: Activity[] = [
  {
    slug: "tutorat-2024",
    title: "Tutorat en développement (JavaScript)",
    theme: "Développement JavaScript",
    date: "Septembre à décembre 2024",
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
    date: "Mars 2025",
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
    theme: "Cybersécurité",
    date: "Novembre 2025",
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
];
