/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy-red.png')",
      },
      backgroundColor: {
        main: '#121214',
      }
    },
  },
  plugins: [],
}
