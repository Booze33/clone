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
        'light': '#e5d4ff',
      },
      width: {
        'logo': '6rem',
        'full': '100%',
      },
      height: {
        'logo': '3rem',
        'full': '100%',
      },
      textColor: {
        'light': '#0c134f',
        'dark': '#e5d4ff',
      }
    },
  },
  plugins: [],
}