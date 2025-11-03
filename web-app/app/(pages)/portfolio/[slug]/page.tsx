type PortfolioDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  return <h1>Détail de l'activité : {slug}</h1>;
}