const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Override gray to be dark-mode-like in both themes
        gray: {
          50: "#1a1a1a",
          100: "#1f1f1f",
          200: "#252525",
          300: "#2b2b2b",
          400: "#313131",
          500: "#383838",
          600: "#404040",
          700: "#484848",
          800: "#505050",
          900: "#585858",
        },
        transparent: colors.transparent,
        current: colors.current,
        primary: colors.blue,
        hero1: "#5566b8",
        hero2: "#b3aaff",
        hero3: "#e8aff6",
        hero4: "#ced6ff",
        hero5: "#0c0c29",
        hero6: "#ffffff",
        neon: {
          blue: colors.blue[500],
          pink: colors.pink[500],
          purple: colors.purple[500],
          teal: colors.teal[400],
          green: colors.green[500],
          sky: colors.sky[500],
          amber: colors.amber[500],
          red: colors.red[500],
        },
      },
      fontFamily: {
        betm: ["Betm Rounded", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        sans: ["Poppins", "Avenir Next", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
