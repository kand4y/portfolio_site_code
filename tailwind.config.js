/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#F9F9F9",
      black: "#16160E",
      gray: "#2B2B2B",
      red: {
        500: "#9F0000",
      },
    },
    fontFamily: {
      noto: ["Noto Sans JP", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
