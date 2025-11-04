import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import githubIcon from '@/public/github.svg';
import linkedinIcon from '@/public/linkedin.svg';

// Informations extraites de votre CV
const email = 'c.vier@students.ephec.be';
const phone = '+32 468 45 49 73';
const location = 'Ittre, Belgique';
const githubUrl = 'https://github.com/clemoudo/'; // J'ai repris l'URL de votre Footer
const linkedinUrl = 'https://linkedin.com/in/clément-v-26ab7938a/'; // J'ai repris l'URL de votre Footer

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-screen-md px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h1>
        <p className="mt-4 text-lg text-foreground/80">
          Je suis actuellement à la recherche d'un stage et reste ouvert à toute opportunité professionnelle.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {/* Carte Email */}
        <div className="rounded-lg border border-border/40 bg-foreground/5 p-8 text-center">
          <Mail className="mx-auto h-10 w-10 text-foreground/80" />
          <h2 className="mt-4 text-xl font-semibold">Par Email</h2>
          <p className="mt-2 text-lg text-foreground/80">{email}</p>
          <a
            href={`mailto:${email}`}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
          >
            Envoyer un message
          </a>
        </div>

        {/* Grille d'informations supplémentaires */}
        <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2">
          <div className="rounded-lg border border-border/40 bg-foreground/5 p-6">
            <Phone className="mx-auto h-8 w-8 text-foreground/80" />
            <h3 className="mt-3 font-semibold">Téléphone</h3>
            <p className="text-foreground/80">{phone}</p>
          </div>
          <div className="rounded-lg border border-border/40 bg-foreground/5 p-6">
            <MapPin className="mx-auto h-8 w-8 text-foreground/80" />
            <h3 className="mt-3 font-semibold">Localisation</h3>
            <p className="text-foreground/80">{location}</p>
          </div>
        </div>
        
        {/* Liens Sociaux */}
        <div className="flex items-center justify-center gap-6 pt-6">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors hover:text-foreground">
            <Image 
              src={githubIcon}
              width={50}
              height={50}
              alt="Github Icon"
            />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors hover:text-foreground">
            <Image
              src={linkedinIcon}
              width={50}
              height={50}
              alt="LinkedIn Icon"
            />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
