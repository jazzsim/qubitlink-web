/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["**/*.{html, js}", "**/**/*.{html, js}", "./index.html"],
  theme: {
    screens: {
      'xs': '450px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        'hk': ['HK GROTESK']
      },
      fontSize: {
        'title': "11rem",
      },
      colors: {
        'lime': '#C1FF72',
      },
      screens: {
        'custom': '1450px',
      },
    },
  },
  plugins: [],
}