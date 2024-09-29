// Code for backgroud-boxes component
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      }, 
    },
    fontSize: {
      'h1': '2.986rem', 
      'h2': '2.488rem',
      'h3': '2.074rem', 
      'h4': '1.728rem', 
      'h5': '1.44rem', 
      'h6': '1.2rem',  
      'p': '1rem',  
      'small-1': '0.833rem', 
      'small-2': '0.694rem',   
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};

// Code for backgroud-boxes component
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({
  addBase,
  theme
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
