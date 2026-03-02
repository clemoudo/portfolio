import Link from "next/link";
import { Activity } from "@/data/portfolio";

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

export default GridView;
