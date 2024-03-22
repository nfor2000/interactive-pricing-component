/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
     fontFamily: {
          sans: [ "Manrope", 'sans-serif'],
     },
     colors: {
          'soft-cryan': 'hsl(174, 77%, 80%)',
          'strong-cryan': 'hsl(174, 86%, 45%)',
          'light-gray-red': 'hsl(14, 92%, 95%)',
          'light-red': 'hsl(15, 100%, 70%)',
          'pale-blue': 'hsl(226, 100%, 87%)',
          'very-pale-blue': 'hsl(230, 100%, 99%)',
          'light-gray-blue': 'hsl(224, 65%, 95%)',
          'gray-blue': 'hsl(225, 20%, 60%)',
          'light-gray-blue-1': 'hsl(223, 50%, 87%)',
          'dark-blue': 'hsl(227, 35%, 25%)',
          'white': 'hsl(0, 0%, 100%)',
     },
    extend: {},
  },
  plugins: [],
}

