/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12);'
      }
    },
    screens: {
      'md': { 'max': '800px' },
      // => @media (max-width: 800px) { ... }
      'lg': { 'max': '1400px' }
    },
    fontFamily: {
      'main': ['Proxima Nova', 'sans-serif'],
      'secondary': ['Roboto', 'sans-serif']
    },
    colors: {
      'my-blue': 'rgba(161, 177, 219, 0.317343)',
      'my-yellow': 'rgba(255, 207, 0, 0.15)',
      'dark-blue': 'rgba(85, 105, 158, 0.3)'
    }
  },
  plugins: [],
}
