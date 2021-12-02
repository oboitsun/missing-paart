module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        10: "0.625rem",
      },
      colors: {
        myBlack: "#1D2327",
        myBlue: "#67A9D5",
        myGray: "#60626E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
