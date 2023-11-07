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
        'light': '#f1eaff',
        'gold': '#F39F5A',
        'maron': '#662549'
      },
      width: {
        'logo': '6rem',
        'full': '100%',
        'display': '60vw',
        'feature': '80vw',
        'half': '50%',
      },
      height: {
        'logo': '3rem',
        'full': '100%',
        'display': '50rem',
        'grid': '55vh',
      },
      textColor: {
        'light': '#0c134f',
        'light-2': '#f1eaff',
        'dark': '#e5d4ff',
        'dark-2': '#1d267d',
      },
      boxShadow: {
        '3xl': 'inset 6px 34px 30px -21px rgba(176,136,227,0.75)',
      }
    },
  },
  plugins: [],
}