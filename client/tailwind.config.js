/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "rgb(255,165,0)"
      }
    },
    screens: {
      'sm': { "max": '900px' },
      'lg': { "max": '3000px' }
      ,
    }
  },
  plugins: [],
}

