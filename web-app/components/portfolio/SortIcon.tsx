import { ArrowUp, ArrowDown } from "lucide-react";
import type { Activity } from "@/data/portfolio";

// Définition des props que le composant attend
type SortIconProps = {
  columnKey: keyof Activity;
  sortKey: keyof Activity | null;
  sortOrder: "asc" | "desc";
};

export default function SortIcon({
  columnKey,
  sortKey,
  sortOrder,
}: SortIconProps) {
  const className = "h-4 w-4 flex-shrink-0";

  // Si la colonne n'est pas la colonne de tri active, on affiche un espace réservé
  if (sortKey !== columnKey) {
    return <span className={className} />;
  }

  // Si elle est active, on affiche la bonne flèche
  if (sortOrder === "asc") {
    return <ArrowUp className={className} />;
  }

  return <ArrowDown className={className} />;
}
