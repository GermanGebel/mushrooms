/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF3D6',
        ink: '#141414',
        shroom: '#E4572E',
        moss: '#2F8F3E',
        mustard: '#FFC53D',
        sky: '#4C9BE8',
        grape: '#8B5CF6',
      },
      boxShadow: {
        neoSm: '3px 3px 0 0 #141414',
        neo: '6px 6px 0 0 #141414',
        neoLg: '10px 10px 0 0 #141414',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'system-ui', 'sans-serif'],
        body: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
