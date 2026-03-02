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

  const view = (searchParams.get("view") as "grid" | "table") || "grid";
  const sortKey = (searchParams.get("sort") as keyof Activity) || "startDate";
  const sortOrder = (searchParams.get("order") as "asc" | "desc") || "desc";

  const currentQuery = searchParams.toString();

  const updateQueryString = useCallback(
    (params: Record<string, string | null>) => {
      const newParams = new URLSearchParams(searchParams.toString());
      Object.entries(params).forEach(([key, value]) => {
        if (value === null) newParams.delete(key);
        else newParams.set(key, value);
      });
      router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  const handleSort = (key: keyof Activity) => {
    const isSameKey = sortKey === key;
    const newOrder = isSameKey && sortOrder === "asc" ? "desc" : "asc";
    updateQueryString({ sort: key, order: newOrder });
  };

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
          onClick={() => updateQueryString({ view: "grid" })}
          className={`rounded-md p-2 transition-colors ${view === "grid" ? "bg-foreground/10" : "hover:bg-foreground/5"}`}
        >
          <LayoutGrid className="h-5 w-5" />
        </button>
        <button
          onClick={() => updateQueryString({ view: "table" })}
          className={`rounded-md p-2 transition-colors ${view === "table" ? "bg-foreground/10" : "hover:bg-foreground/5"}`}
        >
          <List className="h-5 w-5" />
        </button>
      </div>

      {view === "grid" ? (
        <GridView activities={sortedActivities} currentQuery={currentQuery} />
      ) : (
        <TableView
          activities={sortedActivities}
          handleSort={handleSort}
          sortKey={sortKey}
          sortOrder={sortOrder}
          currentQuery={currentQuery}
        />
      )}
    </div>
  );
}
