/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-ubuntu)", "sans-serif"],
        mono: ["var(--font-ubuntu-mono)", "monospace"],
      },
      typography: ({ theme: _theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "hsl(var(--foreground))",
            "--tw-prose-headings": "hsl(var(--foreground))",
            "--tw-prose-lead": "hsl(var(--foreground))",
            "--tw-prose-links": "hsl(var(--foreground))",
            "--tw-prose-bold": "hsl(var(--foreground))",
            "--tw-prose-counters": "hsl(var(--foreground-muted))",
            "--tw-prose-bullets": "hsl(var(--foreground-muted))",
            "--tw-prose-hr": "hsl(var(--border))",
            "--tw-prose-quotes": "hsl(var(--foreground))",
            "--tw-prose-quote-borders": "hsl(var(--border))",
            "--tw-prose-captions": "hsl(var(--foreground-muted))",
            "--tw-prose-code": "hsl(var(--foreground))",
            "--tw-prose-pre-code": "hsl(var(--foreground))",
            "--tw-prose-pre-bg": "hsl(var(--background-muted))",
            "--tw-prose-th-borders": "hsl(var(--border))",
            "--tw-prose-td-borders": "hsl(var(--border))",

            // Inversion pour le mode sombre (ce qui était fait par `prose-invert`)
            "--tw-prose-invert-body": "hsl(var(--foreground-invert))",
            "--tw-prose-invert-headings": "hsl(var(--foreground-invert))",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
