const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '275px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundColor:{
        'header-gray': '#F1F1F1' ,
      },
    },
  },
  variant: {},
  plugins: [],
}
