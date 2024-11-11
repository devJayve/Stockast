/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
      width: {
        0.25: '0.0625rem',
        0.1: '0.025rem',
      },
      borderWidth: {
        0.5: '0.5px',
        1: '1px',
      },
      colors: {
        neutral: {
          850: '#1a1a1a',
        },
        'stock-red': '#da3334',
        'stock-blue': '#3e6ff5',
        'stock-green': '#17bb76',
      },
    },
  },
};
