/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        heading: ["'Rajdhani'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        cyan: { 400: "#00E5FF", 500: "#00BCD4", 300: "#80DEEA" },
        amber: { 400: "#FFB300", 500: "#FF8F00" },
      },
    },
  },
  plugins: [],
};
