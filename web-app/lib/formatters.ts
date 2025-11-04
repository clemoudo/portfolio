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
