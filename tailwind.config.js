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
      'background': '#F8F7F3',
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
    fontSize: {
      '22px': '22px',
      '18px': '18px',
      '12px': '12px',
    },
    screens: {
      'xs': '375px',
      // => @media (min-width: 375px) { ... } 
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
