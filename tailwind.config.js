/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      gridColumn: {
        'span-16': 'span 16 / span 16',
      },
    },
  },
  plugins: [],
};
