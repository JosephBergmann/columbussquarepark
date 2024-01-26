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
        'fun': '#6CBD91',
        'primary': '#A0CB1',
        'secondary': '#ACD2BD',
        // 'tertiary': '#ACD2BD',
      },
    },
  },
  plugins: [],
}
