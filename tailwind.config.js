/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Muli', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      }
    },
    screens: {
      'media410': '410px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
}

