/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      }, 
      fontSize: {
        'text-h1': '2.986rem', 
        'text-h2': '2.488rem',
        'text-h3': '2.074rem', 
        'text-h4': '1.728rem', 
        'text-h5': '1.44rem', 
        'text-h6': '1.2rem',  
        'text-p': '1rem',  
        'text-small-1': '0.833rem', 
        'text-small-2': '0.694rem',   
      },
    },
  },
  plugins: [],
};
