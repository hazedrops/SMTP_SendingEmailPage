/** @type {import('tailwindcss').Config} */
console.log(process.env.NODE_ENV)
const purge = process.env.NODE_ENV === 'production' ? true : false
module.exports = {
  purge: { enabled: purge, content: ['./**/*.{html, js}']},  
  theme: {
    extend: {},
  },
  plugins: [],
}
