/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        "neon-blue": "#0172F0",
        "main-blue": "#005587",
        "dark-blue": "#002E44",
        "urgent-red": "#ED0E05",
        secondary: {
          "light-blue": "#60bdf4",
          turqoise: "#0095a3",
          green: "#009d2f",
          "light-green": "#76c300",
          yellow: "#ffbb00",
          orange: "#ff8c00",
          purple: "#5d008d",
          pink: "#d90063",
          video: "#0A212F",
        },
        "vertical-green": {
          primary: "#31c87c",
          secondary: "#31C87C",
        },
        "vertical-culture": {
          primary: "#b0339a",
          secondary: "#6905ff",
        },
        "vertical-next": {
          primary: "#ffb200",
          secondary: "#ffb200",
        },
        "vertical-travel": {
          primary: "#ff855c",
          secondary: "#D93E25",
        },
        grey: {
          1: "#ffffff",
          2: "#e6eaeb",
          3: "#d7dadb",
          4: "#c7cacb",
          5: "#abadae",
          6: "#8e9090",
          7: "#7c7d7d",
          8: "#666767",
          9: "#515252",
          10: "#404141",
          11: "#2f3030",
          12: "#1a1b1b",
        },
        dark: "#121212",
      },
      boxShadow: {
        "3xl": "0 35px 60px -10px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
  safelist: [
    "text-urgent-red",
    "hover:text-secondary-purple",
    "hover:text-secondary-orange",
    "hover:text-secondary-yellow",
    "hover:text-secondary-green",
    "fill-dark-blue",
    "dark:hover:text-secondary-purple",
    "dark:hover:text-secondary-purple",
    "dark:hover:text-secondary-orange",
    "dark:hover:text-secondary-yellow",
    "dark:hover:text-secondary-green",
    "dark:hover:text-neon-blue",
  ],
};
