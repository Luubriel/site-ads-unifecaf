/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          white: '#FFFFFF',
          light: '#F8F9FA',
          dark: '#1A202C'
        },
        support: {
          success: '#1DB968',
          error: '#E53E3E',
          warning: '#ECC94B'
        },
        brand: {
          primary: '#005086',
          accent: '#006BB6'
        }
      }
    },
  },
  plugins: [],
}
