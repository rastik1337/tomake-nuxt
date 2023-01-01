/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'style': "url('~/assets/imgs/style.jpg')",
        'new-style': "url('~/assets/imgs/new-style.jpg')",
        'new-season': "url('~/assets/imgs/new-season.jpg')",
        'card-1': "url('~/assets/imgs/card-1.jpg')",
        'card-2': "url('~/assets/imgs/card-2.jpg')",
        'card-3': "url('~/assets/imgs/card-3.jpg')"
      },
      screens: {
        'xs': '320px'
      },
      fontFamily: {
        'custom': ['"Josefin Sans""', 'sans-serif']
      }
    },
  },
  plugins: [],
}
