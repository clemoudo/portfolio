"use client";

import { useMemo, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { portfolioData, Activity } from "@/data/portfolio";
import { LayoutGrid, List } from "lucide-react";
import GridView from "./GridView";
import TableView from "./TableView";

export default function PortfolioView() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // --- 1. Extraction et Validation des paramètres ---
  const view = (searchParams.get("view") as "grid" | "table") || "grid";
  const sortKey = (searchParams.get("sort") as keyof Activity) || "startDate";
  const sortOrder = (searchParams.get("order") as "asc" | "desc") || "desc";

  // --- 2. Fonction utilitaire pour mettre à jour l'URL ---
  const updateQueryString = useCallback(
    (params: Record<string, string | null>) => {
      const newParams = new URLSearchParams(searchParams.toString());

      Object.entries(params).forEach(([key, value]) => {
        if (value === null) {
          newParams.delete(key);
        } else {
          newParams.set(key, value);
        }
      });

      // scroll: false évite de remonter en haut de page lors du tri
      router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  // --- 3. Gestionnaires d'événements ---
  const handleViewChange = (newView: "grid" | "table") => {
    updateQueryString({ view: newView });
  };

  const handleSort = (key: keyof Activity) => {
    const isSameKey = sortKey === key;
    const newOrder = isSameKey && sortOrder === "asc" ? "desc" : "asc";
    updateQueryString({ sort: key, order: newOrder });
  };

  // --- 4. Logique de tri (mémorisée) ---
  const sortedActivities = useMemo(() => {
    return [...portfolioData].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      let comparison = 0;
      if (aValue instanceof Date && bValue instanceof Date) {
        comparison = aValue.getTime() - bValue.getTime();
      } else if (typeof aValue === "number" && typeof bValue === "number") {
        comparison = aValue - bValue;
      } else if (typeof aValue === "string" && typeof bValue === "string") {
        comparison = aValue.localeCompare(bValue);
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });
  }, [sortKey, sortOrder]);

  return (
    <div>
      <div className="flex justify-end gap-2">
        <button
          onClick={() => handleViewChange("grid")}
          className={`rounded-md p-2 transition-colors ${
            view === "grid" ? "bg-foreground/10" : "hover:bg-foreground/5"
          }`}
          aria-label="Vue grille"
        >
          <LayoutGrid className="h-5 w-5" />
        </button>
        <button
          onClick={() => handleViewChange("table")}
          className={`rounded-md p-2 transition-colors ${
            view === "table" ? "bg-foreground/10" : "hover:bg-foreground/5"
          }`}
          aria-label="Vue tableau"
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
