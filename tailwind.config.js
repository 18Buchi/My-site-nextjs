module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        foot: ["Courier New"],
      },
      boxShadow: {
        under: '0 6px 0 rgba(0,0,0,0.5)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
