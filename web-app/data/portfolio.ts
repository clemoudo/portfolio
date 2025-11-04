// Type pour une preuve individuelle
export type Proof = {
  label: string; // Ex: "Dépôt GitHub", "Certificat de réussite", "Vidéo de démonstration"
  url: string;
};

// Le type Activity est mis à jour pour inclure un tableau de preuves
export type Activity = {
  slug: string;
  title: string;
  theme: string;
  date: string;
  description: string;
  analysis: string;
  proofs?: Proof[]; // Remplacé par `proofs` (pluriel) et devient un tableau de Proof
  realHours: number;
  valuedHours: number;
};

export const portfolioData: Activity[] = [
  {
    slug: "hackathon-economie-circulaire-2023",
    title: "Hackathon sur l'Économie Circulaire",
    theme: "Développement Durable & Soft Skills",
    date: "Septembre 2023",
    description:
      "Participation à un hackathon de 48h visant à prototyper une solution numérique pour la gestion des déchets.",
    analysis:
      "<p>Cette expérience a été extrêmement formatrice...</p><p>J'ai pu mettre en pratique mes compétences en React dans un contexte de pression temporelle...</p>",
    proofs: [
      { label: "Projet sur GitHub", url: "https://github.com/votre-projet-1" },
      {
        label: "Présentation finale (PDF)",
        url: "/documents/presentation-hackathon.pdf",
      },
    ],
    realHours: 48,
    valuedHours: 10,
  },
  {
    slug: "formation-api-rest-fastapi",
    title: "Formation en ligne : API REST avec FastAPI",
    theme: "Développement Back-end",
    date: "Juillet 2023",
    description:
      "Cours complet sur la création d'API performantes en Python avec le framework FastAPI.",
    analysis:
      "<p>Cette formation m'a permis de solidifier mes bases en développement back-end Python...</p>",
    proofs: [
      {
        label: "Certificat de réussite",
        url: "https://lien-vers-le-certificat.com",
      },
    ],
    realHours: 15,
    valuedHours: 10,
  },
  // --- AJOUTEZ VOS AUTRES ACTIVITÉS ICI ---
];
