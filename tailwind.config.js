const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage : {
        'logo':"url('../img/logo.svg')",
        'assistance01':"url('../img/assistance-01.png')",
        'assistance02':"url('../img/assistance-02.png')",
        'assistance03':"url('../img/assistance-03.png')",
        'assistance04':"url('../img/assistance-04.png')",
        'assistancebg':"url('../img/assistance-bg.png')",
        'hero':"url(../img/hero.jpg)"
      }
    },
    backgroundColor : theme => ({
      ...theme('colors'),
      'primary': '#4D8ECD',
      'secondary': '#005EB8',
      'moto': 'FAFAFA'
    }),
    textColor : {
      'primary': '#4D8ECD',
      'secondary': '#005EB8',
      'black': '#323232',
      'grey': '#767676',
      'white': '#FFFFFF',
      'lgrey':'888888'

    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin')
  ],
};