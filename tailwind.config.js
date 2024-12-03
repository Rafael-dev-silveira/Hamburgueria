/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      "sans": ["Poppins", "sans-serif"]
    },
    extend: {
      backgroundImage:{
        "home": "url('/src/img/bg.png')"
      }
    },
  },
  plugins: [],
}

