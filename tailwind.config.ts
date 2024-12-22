import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom': '#222F37'
      },
      fontSize: {
        'jam': '0.6rem', // Um valor menor que `text-sm` (0.875rem padrão)
      },
    },
  },
  plugins: [],
};
export default config;

