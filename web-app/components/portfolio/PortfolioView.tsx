"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { portfolioData, Activity } from "@/data/portfolio";
import { formatHours, formatDateRange } from "@/lib/formatters";
import { LayoutGrid, List } from "lucide-react";
import SortIcon from "./SortIcon";

// Le composant GridView ne change pas
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

// Type pour les props du TableView
type TableViewProps = {
  activities: Activity[];
  sortKey: keyof Activity | null;
  sortOrder: "asc" | "desc";
  handleSort: (key: keyof Activity) => void;
};

const TableView = ({
  activities,
  sortKey,
  sortOrder,
  handleSort,
}: TableViewProps) => {
  const totals = activities.reduce(
    (acc, activity) => {
      acc.real += activity.realHours;
      acc.valued += activity.valuedHours;
      return acc;
    },
    { real: 0, valued: 0 }
  );

  return (
    <div className="scrollbar-hide mt-12 overflow-x-auto">
      <table className="divide-border/40 w-full table-auto divide-y">
        <thead className="bg-foreground/5">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              <button
                onClick={() => handleSort("title")}
                className="flex w-full items-center gap-2"
              >
                <span>Titre</span>
                <SortIcon
                  columnKey="title"
                  sortKey={sortKey}
                  sortOrder={sortOrder}
                />
              </button>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              <button
                onClick={() => handleSort("theme")}
                className="flex w-full items-center gap-2"
              >
                <span>Thème</span>
                <SortIcon
                  columnKey="theme"
                  sortKey={sortKey}
                  sortOrder={sortOrder}
                />
              </button>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              <button
                onClick={() => handleSort("startDate")}
                className="flex w-full items-center gap-2"
              >
                <span>Date</span>
                <SortIcon
                  columnKey="startDate"
                  sortKey={sortKey}
                  sortOrder={sortOrder}
                />
              </button>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              <button
                onClick={() => handleSort("realHours")}
                className="flex w-full items-center gap-2"
              >
                <span className="max-w-[44px]">Heures Réelles</span>
                <SortIcon
                  columnKey="realHours"
                  sortKey={sortKey}
                  sortOrder={sortOrder}
                />
              </button>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              <button
                onClick={() => handleSort("valuedHours")}
                className="flex w-full items-center gap-2"
              >
                <span className="max-w-[62px]">Heures Valorisées</span>
                <SortIcon
                  columnKey="valuedHours"
                  sortKey={sortKey}
                  sortOrder={sortOrder}
                />
              </button>
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
              <td className="px-6 py-4">
                {formatDateRange(activity.startDate, activity.endDate)}
              </td>
              <td className="px-6 py-4">{formatHours(activity.realHours)}</td>
              <td className="px-6 py-4">{formatHours(activity.valuedHours)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className="border-border/40 bg-foreground/5 border-t">
          <tr>
            <td
              colSpan={3}
              className="px-6 py-4 text-right text-sm font-bold uppercase tracking-wider"
            >
              Total
            </td>
            <td className="px-6 py-4 text-sm font-bold">
              {formatHours(totals.real)}
            </td>
            <td className="px-6 py-4 text-sm font-bold">
              {formatHours(totals.valued)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default function PortfolioView() {
  const [view, setView] = useState<"grid" | "table">("grid");
  const [sortKey, setSortKey] = useState<keyof Activity>("startDate");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const handleSort = (key: keyof Activity) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc"); // Par défaut, on trie en ascendant sur une nouvelle colonne
    }
  };

  const sortedActivities = useMemo(() => {
    if (!sortKey) return portfolioData;

    const sorted = [...portfolioData].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      let comparison = 0;
      if (aValue instanceof Date && bValue instanceof Date) {
        comparison = aValue.getTime() - bValue.getTime();
      } else if (typeof aValue === "string" && typeof bValue === "string") {
        comparison = aValue.localeCompare(bValue);
      } else if (typeof aValue === "number" && typeof bValue === "number") {
        comparison = aValue - bValue;
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });
    return sorted;
  }, [sortKey, sortOrder]);

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

      {view === "grid" ? (
        <GridView activities={sortedActivities} />
      ) : (
        <TableView
          activities={sortedActivities}
          handleSort={handleSort}
          sortKey={sortKey}
          sortOrder={sortOrder}
        />
      )}
    </div>
  );
}
