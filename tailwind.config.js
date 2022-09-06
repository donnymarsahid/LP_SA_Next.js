module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'primary': '#E7583C',
      'primary-dark': '#C9513A',
      'white': '#FFFFFF',
      'disabled': '#B5B8C2',
      'dark': '#0A0E0E',
      'mute': '#8D8D8D',
    },
    extend: {
      height: {
        '700px': '700px',
      },
      margin: {
        '35px': '35px',
        '28px': '28px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
