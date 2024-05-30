/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hind : ["Hind Siliguri", 'sans-serif'],
        poppins : ["Poppins", 'sans-serif'],
        relaway: ["Raleway", 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}