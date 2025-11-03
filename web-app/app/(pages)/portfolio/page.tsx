import PortfolioView from '@/components/portfolio/PortfolioView';

export default function PortfolioPage() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Portfolio</h1>
        <p className="mt-4 text-lg text-foreground/80">
          Découvrez une sélection de projets et d'activités de formation continue
          qui ont contribué à mon développement professionnel.
        </p>
      </div>
      
      {/* Affichez simplement le composant de vue */}
      <PortfolioView />
    </div>
  );
}
