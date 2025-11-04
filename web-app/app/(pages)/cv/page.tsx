// app/(pages)/cv/page.tsx
import Link from 'next/link';
import { Download, Briefcase, GraduationCap, Star, Wrench } from 'lucide-react';

const experiences = [
  {
    role: 'Tuteur',
    company: 'EPHEC LLN',
    period: '2024 - Aujourd\'hui',
    description: 'Tutorat en développement (10h délivrées en 2024-2025). Suivi et réussite de l\'étudiant tutoré.',
  },
  {
    role: 'Étudiant en projet',
    company: 'EPHEC LLN',
    period: '2023 - 2026',
    description: 'Formation professionnalisante avec un grand nombre de cours pratiques et application de la méthode Agile.',
  },
  {
    role: 'Développeur Full-Stack (Projet académique)',
    company: 'EPHEC LLN',
    period: '2025',
    description: 'Conception d\'une application web (+150h de travail) avec React, une API RESTful et déploiement via Docker.',
  },
];

const education = [
  {
    degree: 'Bachelier en Technologies de l\'Informatique',
    school: 'EPHEC, Louvain-la-Neuve',
    period: '2023 - 2026', // J'ai repris la date de l'expérience "Étudiant"
  },
];

const skills = [
  { category: 'Compétences Techniques', items: 'React, Python, JavaScript, HTML5, CSS3, SQL, API RESTful' },
  { category: 'Méthodologies', items: 'Méthode Agile' },
  { category: 'Langues', items: 'Français (Natif), Anglais (B1/B2)' },
  { category: 'Soft Skills', items: 'Autonomie, Esprit d\'équipe, Écoute, Persévérance' },
];

const tools = [
  { category: 'Conteneurisation', items: 'Docker (healthcheck, docker-compose, build, CLI, swarm, stack)' },
  { category: 'Contrôle de version & CI/CD', items: 'Git, GitHub (Projects, CI/CD)' },
  { category: 'Réseau', items: 'Wireshark (utilisation basique des filtres)' },
  { category: 'Éditeur', items: 'Visual Studio Code' },
];


export default function CVPage() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Curriculum Vitae</h1>
        <Link
          href="/clement_vier_cv.pdf" // Assurez-vous que le nom du fichier est correct
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/80 sm:w-auto"
        >
          Télécharger la version PDF
          <Download className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-12 space-y-10">
        {/* Section Expérience */}
        <section>
          <h2 className="flex items-center text-2xl font-semibold">
            <Briefcase className="mr-3 h-6 w-6 text-foreground/80" />
            Expérience
          </h2>
          <div className="mt-6 space-y-6 border-l-2 border-border/40 pl-6">
            {experiences.map((exp, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-md text-foreground/80">{exp.company}</p>
                <p className="text-sm text-foreground/60">{exp.period}</p>
                <p className="mt-2 text-foreground/90">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section Formation */}
        <section>
          <h2 className="flex items-center text-2xl font-semibold">
            <GraduationCap className="mr-3 h-6 w-6 text-foreground/80" />
            Formation
          </h2>
          <div className="mt-6 space-y-6 border-l-2 border-border/40 pl-6">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-md text-foreground/80">{edu.school}</p>
                <p className="text-sm text-foreground/60">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section Compétences */}
        <section>
          <h2 className="flex items-center text-2xl font-semibold">
            <Star className="mr-3 h-6 w-6 text-foreground/80" />
            Compétences & Soft Skills
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <div key={index}>
                <h3 className="font-semibold">{skill.category}</h3>
                <p className="text-foreground/80">{skill.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section Logiciels/Outils */}
        <section>
          <h2 className="flex items-center text-2xl font-semibold">
            <Wrench className="mr-3 h-6 w-6 text-foreground/80" />
            Logiciels & Outils
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {tools.map((tool, index) => (
              <div key={index}>
                <h3 className="font-semibold">{tool.category}</h3>
                <p className="text-foreground/80">{tool.items}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
