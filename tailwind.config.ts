import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pst: {
          dark: "#060D1F",
          navy: "#0A1931",
          navyLight: "#15284F",
          blue: "#1E40AF",
          blueLight: "#3B82F6",
          gold: "#D4AF37",
          goldLight: "#FDE047",
          goldDark: "#B48A1E",
          surface: "rgba(10, 25, 49, 0.75)",
          surfaceCard: "rgba(21, 40, 79, 0.6)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gold-gradient": "linear-gradient(135deg, #FDE047 0%, #D4AF37 50%, #B48A1E 100%)",
        "blue-gradient": "linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)",
        "navy-gradient": "linear-gradient(180deg, #060D1F 0%, #0A1931 100%)",
      },
      boxShadow: {
        "gold-sm": "0 2px 10px rgba(212, 175, 55, 0.2)",
        "gold-glow": "0 0 25px rgba(212, 175, 55, 0.35)",
        "blue-glow": "0 0 30px rgba(59, 130, 246, 0.3)",
      },
      fontFamily: {
        sans: ["var(--font-prompt)", "sans-serif"],
        heading: ["var(--font-prompt)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
