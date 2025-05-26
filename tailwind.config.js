const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Necessary color utilities
      transparent: colors.transparent,
      current: colors.current,
      // Primary accent color
      primary: colors.blue,
      // Grayscale
      gray: colors.zinc,
      // Gradient colors
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
    extend: {
      colors: {
        hero1: "#5566b8", // blue (main button/cta)
        hero2: "#b3aaff", // light purple (hashtag badge)
        hero3: "#e8aff6", // pinkish purple (optional, background shapes)
        hero4: "#ced6ff", // soft blue (for backgrounds, optional)
        hero5: "#0c0c29", // dark navy (background)
        hero6: "#ffffff", //white
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
