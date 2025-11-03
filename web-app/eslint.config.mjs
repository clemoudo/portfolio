// eslint.config.mjs
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier"; // Assurez-vous d'avoir cette ligne

const eslintConfig = defineConfig([
  // Configuration par défaut pour les fichiers du projet (TS/TSX)
  ...nextVitals,
  ...nextTs,

  // Section spécifique pour les fichiers de configuration en .cjs
  {
    files: ["**/*.cjs"], // Applique les règles suivantes uniquement aux fichiers .cjs
    rules: {
      "@typescript-eslint/no-require-imports": "off", // Désactive la règle pour ces fichiers
      "@typescript-eslint/no-var-requires": "off",     // Désactive une règle similaire
    },
  },

  // La configuration de Prettier doit TOUJOURS être à la fin
  prettierConfig,

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
