/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "mainfont": ["Caveat", "sans-serif"],
        "Nunito": ["Nunito Sans", "sans-serif"],
      },
      colors:{
        "themeRed":"#eb0029",
        "themeYellow":"#ff7b19"
      },
    },
  },
  plugins: [],
}

