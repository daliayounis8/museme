import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF7EC",
        gold: "#F4C35B",
        goldDark: "#D9A43A",
        charcoal: "#111827",
        muted: "#6B7280",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
