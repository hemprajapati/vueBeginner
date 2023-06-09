module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',],
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}
