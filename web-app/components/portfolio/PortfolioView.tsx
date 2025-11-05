"use client"; // Ce composant aura de l'interactivité

import { useState } from "react";
import Link from "next/link";
import { portfolioData, Activity } from "@/data/portfolio";
import { LayoutGrid, List } from "lucide-react";
import { formatHours, formatDateRange } from "@/lib/formatters";

// Vue Grille
const GridView = ({ activities }: { activities: Activity[] }) => (
  <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {activities.map((activity) => (
      <Link
        key={activity.slug}
        href={`/portfolio/${activity.slug}`}
        className="border-border/40 hover:border-foreground/40 group block overflow-hidden rounded-lg border transition-all hover:shadow-md"
      >
        <div className="p-6">
          <span className="text-foreground/60 text-xs font-semibold uppercase tracking-wider">
            {activity.theme}
          </span>
          <h3 className="mt-2 text-xl font-semibold">{activity.title}</h3>
          <p className="text-foreground/70 mt-3 text-sm">
            {activity.description}
          </p>
          <div className="text-foreground/80 mt-4 text-sm font-medium transition-transform group-hover:translate-x-1">
            Voir les détails &rarr;
          </div>
        </div>
      </Link>
    ))}
  </div>
);

// Vue Tableau
const TableView = ({ activities }: { activities: Activity[] }) => {
  // 1. Calculer les totaux en utilisant la méthode .reduce()
  const totals = activities.reduce(
    (acc, activity) => {
      acc.real += activity.realHours;
      acc.valued += activity.valuedHours;
      return acc;
    },
    { real: 0, valued: 0 }
  );

  return (
    <div className="mt-12 overflow-x-auto">
      <table className="divide-border/40 w-full divide-y">
        <thead className="bg-foreground/5">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              Titre
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              Thème
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              Heures (Réelles/Valorisées)
            </th>
          </tr>
        </thead>
        <tbody className="divide-border/40 divide-y">
          {activities.map((activity) => (
            <tr key={activity.slug} className="hover:bg-foreground/5">
              <td className="px-6 py-4">
                <Link
                  href={`/portfolio/${activity.slug}`}
                  className="text-foreground font-semibold hover:underline"
                >
                  {activity.title}
                </Link>
              </td>
              <td className="px-6 py-4">{activity.theme}</td>
              <td className="px-6 py-4">{formatDateRange(activity.startDate, activity.endDate)}</td>
              <td className="px-6 py-4">{`${formatHours(activity.realHours)} / ${formatHours(activity.valuedHours)}`}</td>
            </tr>
          ))}
        </tbody>

        {/* 2. Ajouter la section <tfoot> pour afficher les totaux */}
        <tfoot className="border-border/40 bg-foreground/5 border-t">
          <tr>
            <td
              colSpan={3}
              className="px-6 py-4 text-right text-sm font-bold uppercase tracking-wider"
            >
              Total
            </td>
            <td className="px-6 py-4 text-sm font-bold">
              {`${formatHours(totals.real)} / ${formatHours(totals.valued)}`}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

// Le composant principal qui gère le basculement
export default function PortfolioView() {
  const [view, setView] = useState<"grid" | "table">("grid"); // Par défaut, la vue est 'grid'

  const sortedActivities = [...portfolioData].sort(
    (a, b) => b.startDate.getTime() - a.startDate.getTime()
  );

  return (
    <div>
      <div className="flex justify-end gap-2">
        <button
          onClick={() => setView("grid")}
          className={`rounded-md p-2 transition-colors ${view === "grid" ? "bg-foreground/10" : "hover:bg-foreground/5"}`}
          aria-label="Affichage en grille"
        >
          <LayoutGrid className="h-5 w-5" />
        </button>
        <button
          onClick={() => setView("table")}
          className={`rounded-md p-2 transition-colors ${view === "table" ? "bg-foreground/10" : "hover:bg-foreground/5"}`}
          aria-label="Affichage en tableau"
        >
          <List className="h-5 w-5" />
        </button>
      </div>

      {/* Affiche la bonne vue en fonction de l'état */}
      {view === "grid" ? (
        <GridView activities={sortedActivities} />
      ) : (
        <TableView activities={sortedActivities} />
      )}
    </div>
  );
}
