import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        champagne: "#FAF6EF", // page background
        linen: "#F5EEE3",     // soft section tint
        blush: "#EBD9CF",     // accent
        gold: "#C8A96A",      // luxe accent
        goldDark: "#AA8A49",
        onyx: "#0F0F10",      // deep text/panel
        stone: "#6B6B6B",     // muted text
        paper: "#FFFFFF",     // cards
      },
      boxShadow: {
        luxe: "0 20px 40px rgba(0,0,0,0.08)",
        soft: "0 10px 24px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      letterSpacing: {
        wideish: ".02em",
      },
    },
  },
  plugins: [],
} satisfies Config;
