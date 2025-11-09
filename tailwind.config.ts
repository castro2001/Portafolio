import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // 👈 necesario para next-themes
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
