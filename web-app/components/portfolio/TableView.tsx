import Link from "next/link";
import { formatHours, formatDateRange } from "@/lib/formatters";
import SortIcon from "./SortIcon";
import { Activity } from "@/data/portfolio";

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

export default TableView;
