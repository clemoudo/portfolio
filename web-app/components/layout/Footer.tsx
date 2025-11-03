import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-border/40 border-t">
      <div className="text-foreground/60 container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 text-sm sm:px-6 lg:px-8">
        {/* Copyright sur la gauche */}
        <div>
          © {new Date().getFullYear()} Clément Vier. Tous droits réservés.
        </div>

        {/* Liens sociaux/contact sur la droite */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/clemoudo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground/80 transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/clément-v-26ab7938a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground/80 transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
