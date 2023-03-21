/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./*.{html,js}"],
  theme: {

    screens :{
      'sm': '500px',
      'md': '600px',
      'lg' : '900px',
      'xl' : '1100px'
    },

    colors: {
      'primary-1': 'hsl(233, 47%, 7%)',
      'primary-2': ' hsl(244, 38%, 16%)',
      'accent-1': 'hsl(277, 64%, 61%)',
      'white': 'hsl(0, 0%, 100%)',
      'neutral-400': 'hsla(0, 0%, 100%, 0.75)',
      'neutral-300': 'hsla(0, 0%, 100%, 0.6)',
    },
    fontFamily: {
      heading: ['Inter', 'sans-serif'],
      body:['Lexend Deca', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    plugin(function({ addBase }) {
      addBase({
         'html': { fontSize: "15px" },
       })
     }),
  ],
}
