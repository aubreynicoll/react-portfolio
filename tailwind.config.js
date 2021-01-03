module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      black: '#121212',
      gray: '#1c1c1c',
      danger: '#ff0000'
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
