/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'blue': '#5515ef',
        'blue-dark': '#3c01ca',
        'pink': '#eb589e',
        'gray': '#eeeeee',
      },
      fontSize: {
        '10xl': '10rem',
        '16xl': '16rem',
        '17xl': '17rem',
        '18xl': '18rem',
        '19xl': '19rem',
        '20xl': '20rem',
      },
      letterSpacing: {
        'more-wide': '1rem',
      },
    },
  },
  plugins: [],
};