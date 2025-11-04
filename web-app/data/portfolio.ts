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
    title: "Tutorat en développement (JavaScript), EPHEC 2024",
    theme: "Développement JavaScript",
    date: "Septembre à Décembre 2024",
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
        url: "/proofs/virementTutorat1.pdf",
      },
      {
        label: "Virement #2 de l'EPHEC",
        url: "/proofs/virementTutorat2.pdf",
      },
    ],
    realHours: 9.75,
    valuedHours: 9.75,
  },
];
