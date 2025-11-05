export default function ProjetProPage() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Projet professionnel
        </h1>
        <p className="text-foreground/80 mt-4 text-lg">
          Ma vision, mes ambitions et l'analyse de mon positionnement dans le
          paysage technologique actuel.
        </p>
      </div>

      {/* Section 1: Description du projet */}
      <div className="prose mt-12 max-w-none">
        <h2>Mon objectif</h2>
        <p>
          Mon objectif à moyen terme est de compléter mes études par un Master à
          l'UCL afin d'acquérir des compétences plus spécialisé dans un domaine.
          Mon objectif à long terme est d'intégrer une équipe de développement
          en tant que développeur Full-Stack, avec une spécialisation dans
          l'écosystème JavaScript/TypeScript (React, Node.js). Je souhaite
          participer à la création de module tourné vers l'humain afin de
          simplifier la vie du plus grand nombre.
        </p>
        <p>
          Je suis ouvert à tous les domaines qui proposent des solutions tourné
          vers l'humain. Je suis intéressé par les nouvelles technologies et
          j'apprécie me former en continu. J'ai l'habitude de travailler avec
          des méthodologies Agile comme Scrum. Je cible les petites entreprise
          comme les startup ou les PME.
        </p>
      </div>

      <hr className="border-border/40 my-12" />

      {/* Section 2: Auto-analyse */}
      <div className="mt-12">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Auto-analyse
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Colonne des Forces */}
          <div className="border-border/40 bg-foreground/5 rounded-lg border p-6">
            <h3 className="text-xl font-semibold">Forces</h3>
            <ul className="prose mt-4 max-w-none list-disc pl-5">
              <li>
                <strong>Polyvalence (Full-Stack) :</strong> Ma formation et mes
                projets personnels m'ont donné une bonne compréhension à la fois
                du front-end et du back-end, me permettant de comprendre les
                enjeux globaux d'une application.
              </li>
              <li>
                <strong>Apprentissage rapide :</strong> Je suis capable de
                monter en compétence rapidement sur de nouvelles technologies,
                comme je l'ai démontré en apprenant FastAPI pour un projet
                personnel en quelques semaines.
              </li>
              <li>
                <strong>Qualité du code :</strong> J'accorde une grande
                importance à l'écriture d'un code propre, maintenable et testé,
                en appliquant les principes de la Clean Architecture.
              </li>
              <li>
                <strong>DevOps et Déploiement :</strong> J'ai des compétences
                pratiques concernant les bon procédés DevOps comme les pipelines
                CI/CD et Docker.
              </li>
              {/* Ajoutez d'autres points forts */}
            </ul>
          </div>

          {/* Colonne des Faiblesses */}
          <div className="border-border/40 bg-foreground/5 rounded-lg border p-6">
            <h3 className="text-xl font-semibold">Axes d'amélioration</h3>
            <ul className="prose mt-4 max-w-none list-disc pl-5">
              <li>
                <strong>Optimisation et performance :</strong> Bien que je sois
                capable de construire des applications fonctionnelles, il me
                manque encore de l'expérience sur l'optimisation fine des
                performances (requêtes de base de données complexes, 'lazy
                loading' avancé, etc.).
              </li>
              <li>
                <strong>Communication technique en anglais :</strong> Bien que
                je sois à l'aise pour lire de la documentation et à dialoguer en
                anglais, je dois améliorer ma fluidité à l'oral pour participer
                efficacement à des réunions techniques internationales.
              </li>
              {/* Ajoutez d'autres points à améliorer */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
