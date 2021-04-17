module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        foot: ["Courier New"],
      },
      boxShadow: {
        indexButton: "0 6px 0 rgba(0,0,0,0.5)",
        buyButton: "1px 2px 10px gray",
        card: "2px 2px 3px rgba(206, 206, 206, 0.5)",
      },
      maxWidth: {
        likeButton: "10em",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
