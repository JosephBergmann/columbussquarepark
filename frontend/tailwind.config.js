/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'newspaper': ['Cinzel', 'serif']
      },
      colors: {
        'main': '#ACD2BD',
      },
    },
  },
  plugins: [],
}
