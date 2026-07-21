/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Unbounded', 'system-ui', 'sans-serif'],
        body: ['"Golos Text"', 'system-ui', 'sans-serif'],
      },
      // числовые веса, которые использует дизайн (font-500 … font-900)
      fontWeight: {
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },
      colors: {
        ink: '#111111',
        cream: '#F4ECD8',
        amanita: '#E8442B',
        amber: '#F5A623',
        moss: '#3C7A3C',
        lilac: '#B08BE8',
        sky: '#5BC8E8',
      },
      boxShadow: {
        brut: '8px 8px 0 0 #111111',
        brutlg: '12px 12px 0 0 #111111',
        brutsm: '4px 4px 0 0 #111111',
      },
    },
  },
  plugins: [],
};
