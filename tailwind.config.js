module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
     'xxs': '.5rem',
    },
    fontFamily:{
      'footer': ['Courier New'],
    }
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}
