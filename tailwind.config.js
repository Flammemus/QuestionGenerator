/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "customWhite": "#f1e8e6",
        "customBlack": "#0f0f0f",
        "customRed": "#f55951",

        "fontColor": "#E5DFBB",
        "fontColorHover": "#CCC6A2",
        "backgroundColor": "#0f0f0f",
      },
      transitionDuration: {
        "duration-40": "40ms"
      }
    }
  },
  plugins: []
};