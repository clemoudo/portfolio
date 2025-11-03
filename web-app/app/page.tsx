import Link from "next/link";
import { ArrowRight, Download } from "lucide-react"; // Jeux d'icone

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
      <section className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Clément Vier
        </h1>
        <p className="text-foreground/80 mt-6 max-w-2xl text-lg sm:text-xl">
          Développeur Full-Stack spécialisé dans la conception et le
          développement d&apos;applications web performantes, de l&apos;API
          RESTful à l&apos;interface utilisateur réactive.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-foreground text-background hover:bg-foreground/80 flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-colors"
          >
            Contact
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/clement_vier_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-border/40 hover:bg-foreground/5 flex items-center justify-center gap-2 rounded-md border bg-transparent px-6 py-3 text-sm font-medium transition-colors"
          >
            Télécharger mon CV
            <Download className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
