/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './main.jsx'],
  content: [],
  theme: {
    extend: {
      backgroundColor: {
        'dark': '#0c134f',
        'light': '#F1EAFF',
      },
      width: {
        'logo': '6rem',
        'full': '100%',
        'display': '60vw',
        'half': '50%',
      },
      height: {
        'logo': '3rem',
        'full': '100%',
        'display': '50rem',
      },
      textColor: {
        'light': '#0c134f',
        'dark': '#e5d4ff',
      },
      left: {
        'nav': "22rem",
      },
    },
  },
  plugins: [],
}