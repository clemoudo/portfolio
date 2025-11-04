import { notFound } from "next/navigation";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { ArrowLeft, ExternalLink, Hourglass, Target } from "lucide-react";

export async function generateStaticParams() {
  return portfolioData.map((activity) => ({
    slug: activity.slug,
  }));
}

async function getActivityData(slug: string) {
  const activity = portfolioData.find((act) => act.slug === slug);
  if (!activity) {
    notFound();
  }
  return activity;
}

type PortfolioDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PortfolioDetailPage({
  params,
}: PortfolioDetailPageProps) {
  // On attend explicitement que la promesse `params` soit résolue
  const resolvedParams = await params;
  const activity = await getActivityData(resolvedParams.slug);

  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/portfolio"
        className="text-foreground/80 hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour au portfolio
      </Link>
      <div className="border-border/40 mb-10 border-b pb-6">
        <span className="text-foreground/60 text-sm font-semibold uppercase tracking-wider">
          {activity.theme}
        </span>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          {activity.title}
        </h1>
        <p className="text-foreground/80 mt-4 text-lg">{activity.date}</p>
      </div>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold">Analyse Réflexive</h2>
          <div
            className="prose mt-6 max-w-none"
            dangerouslySetInnerHTML={{ __html: activity.analysis }}
          />
        </div>
        <div className="lg:col-span-1">
          <div className="border-border/40 bg-foreground/5 sticky top-24 rounded-lg border p-6">
            <h3 className="text-xl font-semibold">Détails</h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <Hourglass className="text-foreground/60 mr-3 h-5 w-5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Temps Investi</h4>
                  <p className="text-foreground/80 text-sm">
                    {activity.realHours}h (Réel) / {activity.valuedHours}h
                    (Valorisé)
                  </p>
                </div>
              </div>
              {activity.proofs && activity.proofs.length > 0 && (
                <div className="flex items-start">
                  <Target className="text-foreground/60 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Preuves</h4>
                    <ul className="mt-1 space-y-1">
                      {activity.proofs.map((proof) => (
                        <li key={proof.url}>
                          <a
                            href={proof.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-foreground group flex items-center text-sm transition-colors"
                          >
                            {proof.label}
                            <ExternalLink className="ml-2 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
