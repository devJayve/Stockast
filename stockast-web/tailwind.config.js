/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
    },
  },
};
