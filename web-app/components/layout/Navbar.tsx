import Link from "next/link";

const navLinks = [
  { href: "/projet-pro", label: "Projet Pro" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo ou Nom sur la gauche */}
        <Link
          href="/"
          className="hover:text-foreground/80 text-lg font-bold transition-colors"
        >
          Clément Vier
        </Link>

        {/* Liens de navigation sur la droite */}
        <nav className="flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/60 hover:text-foreground/80 font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
