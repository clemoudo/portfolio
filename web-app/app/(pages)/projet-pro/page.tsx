export default function ProjetProPage() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Projet Professionnel
        </h1>
        <p className="mt-4 text-lg text-foreground/80">
          Ma vision, mes ambitions et l'analyse de mon positionnement
          dans le paysage technologique actuel.
        </p>
      </div>

      {/* Section 1: Description du projet */}
      <div className="prose mt-12 max-w-none">
        <h2>Mon Objectif</h2>
        <p>
          [Décrivez ici votre projet professionnel. Soyez aussi précis que
          possible. Par exemple : "Mon objectif à moyen terme est d'intégrer une
          équipe de développement en tant que Développeur Full-Stack, avec une
          spécialisation dans l'écosystème JavaScript/TypeScript (React,
          Node.js). Je souhaite contribuer à la création de produits SaaS
          innovants qui ont un impact positif sur leurs utilisateurs. À plus
          long terme, j'ambitionne d'évoluer vers un rôle de Lead Developer pour
          mentorer d'autres développeurs et prendre part aux décisions
          d'architecture technique."]
        </p>
        <p>
          [Vous pouvez ajouter d'autres paragraphes pour détailler les
          domaines qui vous intéressent (e-commerce, fintech, santé...), les
          méthodologies que vous appréciez (Agile, Scrum), ou le type
          d'entreprise que vous ciblez (startup, grande entreprise, agence)."]
        </p>
      </div>

      <hr className="my-12 border-border/40" />

      {/* Section 2: Auto-analyse */}
      <div className="mt-12">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Auto-analyse
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          
          {/* Colonne des Forces */}
          <div className="rounded-lg border border-border/40 bg-foreground/5 p-6">
            <h3 className="text-xl font-semibold">Forces</h3>
            <ul className="prose mt-4 max-w-none list-disc pl-5">
              <li>
                <strong>Polyvalence (Full-Stack) :</strong> [Exemple : "Ma
                formation et mes projets personnels m'ont donné une bonne
                compréhension à la fois du front-end et du back-end, me
                permettant de comprendre les enjeux globaux d'une application."]
              </li>
              <li>
                <strong>Apprentissage rapide :</strong> [Exemple : "Je suis
                capable de monter en compétence rapidement sur de nouvelles
                technologies, comme je l'ai démontré en apprenant FastAPI pour
                un projet personnel en quelques semaines."]
              </li>
              <li>
                <strong>Qualité du code :</strong> [Exemple : "J'accorde une
                grande importance à l'écriture d'un code propre, maintenable et
                testé, en appliquant les principes de la Clean Architecture."]
              </li>
              {/* Ajoutez d'autres points forts */}
            </ul>
          </div>

          {/* Colonne des Faiblesses */}
          <div className="rounded-lg border border-border/40 bg-foreground/5 p-6">
            <h3 className="text-xl font-semibold">Axes d'Amélioration</h3>
            <ul className="prose mt-4 max-w-none list-disc pl-5">
              <li>
                <strong>Optimisation et performance :</strong> [Exemple : "Bien
                que je sois capable de construire des applications
                fonctionnelles, il me manque encore de l'expérience sur
                l'optimisation fine des performances (requêtes de base de
                données complexes, 'lazy loading' avancé, etc.)."]
              </li>
              <li>
                <strong>DevOps et Déploiement :</strong> [Exemple : "Ma
                connaissance des pipelines CI/CD, de Docker et de
                l'orchestration avec Kubernetes est encore théorique. C'est un
                domaine que je souhaite activement développer."]
              </li>
              <li>
                <strong>Communication technique en anglais :</strong> [Exemple :
                "Bien que je sois à l'aise pour lire de la documentation en
                anglais, je dois améliorer ma fluidité à l'oral pour participer
                efficacement à des réunions techniques internationales."]
              </li>
              {/* Ajoutez d'autres points à améliorer */}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
