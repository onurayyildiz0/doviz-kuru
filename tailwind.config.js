/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  backgroundImage: {
      'doviz-pattern': "url('/src/images/currency-background.jpg')"
      
    }},
   
  },
  plugins: [],
}