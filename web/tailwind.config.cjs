/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy-red.png')",
        "nlw-gradient": "linear-gradient(89.86deg, #FCD572 23.08%, #E80000 83.94%)",
        "game-gradient": "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundColor: {
        main: '#121214',
      },
    },
  },
  plugins: [],
};
