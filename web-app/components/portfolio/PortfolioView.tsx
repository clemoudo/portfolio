'use client'; // Ce composant aura de l'interactivité

import { useState } from 'react';
import Link from 'next/link';
import { portfolioData, Activity } from '@/data/portfolio'; // Importez les données
import { LayoutGrid, List } from 'lucide-react';

// Vue Grille (code que nous avions déjà)
const GridView = ({ activities }: { activities: Activity[] }) => (
  <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {activities.map((activity) => (
      <Link
        key={activity.slug}
        href={`/portfolio/${activity.slug}`}
        className="group block overflow-hidden rounded-lg border border-border/40 transition-all hover:border-foreground/40 hover:shadow-md"
      >
        <div className="p-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
            {activity.theme}
          </span>
          <h3 className="mt-2 text-xl font-semibold">{activity.title}</h3>
          <p className="mt-3 text-sm text-foreground/70">{activity.description}</p>
          <div className="mt-4 text-sm font-medium text-foreground/80 transition-transform group-hover:translate-x-1">
            Voir les détails &rarr;
          </div>
        </div>
      </Link>
    ))}
  </div>
);

// Vue Tableau
const TableView = ({ activities }: { activities: Activity[] }) => (
  <div className="mt-12 overflow-x-auto">
    <table className="min-w-full divide-y divide-border/40">
      <thead className="bg-foreground/5">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Titre</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Thème</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Heures (Réelles/Valorisées)</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border/40">
        {activities.map((activity) => (
          <tr key={activity.slug} className="hover:bg-foreground/5">
            <td className="px-6 py-4 whitespace-nowrap">
              <Link href={`/portfolio/${activity.slug}`} className="font-semibold text-foreground hover:underline">
                {activity.title}
              </Link>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{activity.theme}</td>
            <td className="px-6 py-4 whitespace-nowrap">{activity.date}</td>
            <td className="px-6 py-4 whitespace-nowrap">{`${activity.realHours}h / ${activity.valuedHours}h`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Le composant principal qui gère le basculement
export default function PortfolioView() {
  const [view, setView] = useState<'grid' | 'table'>('grid'); // Par défaut, la vue est 'grid'

  return (
    <div>
      <div className="flex justify-end gap-2">
        <button
          onClick={() => setView('grid')}
          className={`rounded-md p-2 transition-colors ${view === 'grid' ? 'bg-foreground/10' : 'hover:bg-foreground/5'}`}
          aria-label="Affichage en grille"
        >
          <LayoutGrid className="h-5 w-5" />
        </button>
        <button
          onClick={() => setView('table')}
          className={`rounded-md p-2 transition-colors ${view === 'table' ? 'bg-foreground/10' : 'hover:bg-foreground/5'}`}
          aria-label="Affichage en tableau"
        >
          <List className="h-5 w-5" />
        </button>
      </div>

      {/* Affiche la bonne vue en fonction de l'état */}
      {view === 'grid' ? <GridView activities={portfolioData} /> : <TableView activities={portfolioData} />}
    </div>
  );
}
