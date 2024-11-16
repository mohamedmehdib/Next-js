const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        swipper: {
          from: {transform: 'translateX(0)'},
          to: {transform: 'translateX(-100%)'},
        }
      },
      animation: {
        'swipe1': 'swipper 120s linear infinite',
        'swipe2': 'swipper 120s linear infinite'
      }
    },
  },
  plugins: [],
};
