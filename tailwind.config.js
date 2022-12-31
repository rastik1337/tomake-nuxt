/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'style': "url('~/assets/imgs/style.jpg')",
        'new-style': "url('~/assets/imgs/new-style.jpg')",
      },
      screens: {
        'xs': '320px'
      }
    },
  },
  plugins: [],
}
