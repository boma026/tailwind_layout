const { Container } = require("postcss");

/**@type {import('tailwindcss').Config}*/
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  },
  content: [
    "./src/**/*.{html,js,ts}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        'vermelhoEscuro': '#FF0000'
      }
    },
  },
  plugins: [],
}