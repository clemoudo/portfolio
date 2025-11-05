/**
 * Formate un nombre d'heures (ex: 3.5) en une chaîne de caractères (ex: "3h30").
 * @param hours Le nombre d'heures à formater.
 * @returns Une chaîne de caractères formatée.
 */
export function formatHours(hours: number): string {
  if (hours === 0) return "0h";

  // Sépare les heures entières et les décimales
  const h = Math.floor(hours);
  const decimalPart = hours - h;

  // Convertit la partie décimale en minutes
  const m = Math.round(decimalPart * 60);

  let result = "";
  if (h > 0) {
    result += `${h}h`;
  }
  if (m > 0) {
    // Ajoute un '0' pour les minutes inférieures à 10 si des heures sont présentes
    result += `${h > 0 && m < 10 ? "0" : ""}${m}`;
  }

  // Si le résultat est vide (par exemple pour 0.2h), il affichera juste les minutes
  return result || `${m}min`;
}

/**
 * Formate une date ou une plage de dates de manière intelligente.
 * - "Septembre 2025" si une seule date.
 * - "De septembre à décembre 2025" si la plage est dans la même année.
 * - "De décembre 2024 à janvier 2025" si la plage couvre deux années.
 * @param startDate La date de début.
 * @param endDate La date de fin optionnelle.
 * @returns Une chaîne de caractères formatée.
 */
export function formatDateRange(startDate: Date, endDate?: Date): string {
  // Helper pour mettre la première lettre en majuscule
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  // Formateur pour le mois seul (ex: "septembre")
  const monthFormatter = new Intl.DateTimeFormat("fr-FR", { month: "long" });
  // Formateur pour le mois et l'année (ex: "septembre 2025")
  const monthYearFormatter = new Intl.DateTimeFormat("fr-FR", {
    month: "long",
    year: "numeric",
  });

  const startMonthYear = monthYearFormatter.format(startDate);

  // Cas 1 : Pas de date de fin, ou date de fin identique au début
  if (!endDate || startMonthYear === monthYearFormatter.format(endDate)) {
    return capitalize(startMonthYear);
  }

  // Cas 2 : Années différentes
  if (startDate.getFullYear() !== endDate.getFullYear()) {
    const endMonthYear = monthYearFormatter.format(endDate);
    return `De ${startMonthYear} à ${endMonthYear}`;
  }

  // Cas 3 : Années identiques, mais mois différents
  const startMonth = monthFormatter.format(startDate);
  const endMonth = monthFormatter.format(endDate);
  const year = startDate.getFullYear();

  return `De ${startMonth} à ${endMonth} ${year}`;
}
