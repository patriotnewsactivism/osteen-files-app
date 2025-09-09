/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#8B5CF6",
          DEFAULT: "#7C3AED",
          dark: "#6D28D9",
        },
        primary: {
          light: "#F3F4F6",
          DEFAULT: "#E5E7EB",
          dark: "#D1D5DB",
        },
        secondary: {
          light: "#4B5563",
          DEFAULT: "#374151",
          dark: "#1F2937",
        },
        accent: {
          light: "#EC4899",
          DEFAULT: "#D946EF",
          dark: "#C026D3",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};