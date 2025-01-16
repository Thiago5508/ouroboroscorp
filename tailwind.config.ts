import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"; // Importando o helper de plugins do Tailwind CSS

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
        custom: "#222F37",
      },
      fontSize: {
        jam: "0.6rem", // Um valor menor que `text-sm` (0.875rem padrão)
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          ".custom-scrollbar": {
            "scrollbar-width": "thin", // Para navegadores como Firefox
            "scrollbar-color": "#a0aec0 #f7fafc", // Cor da barra e do fundo
          },
          ".custom-scrollbar::-webkit-scrollbar": {
            width: "8px", // Largura da barra
          },
          ".custom-scrollbar::-webkit-scrollbar-track": {
            background: "#f7fafc", // Fundo da barra
          },
          ".custom-scrollbar::-webkit-scrollbar-thumb": {
            background: "#a0aec0", // Cor da barra
            "border-radius": "4px", // Cantos arredondados
            border: "2px solid #f7fafc", // Borda da barra
          },
        },
      );
    }),
  ],
};

export default config;
