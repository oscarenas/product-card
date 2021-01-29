module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#00c4ae',
        dafitiGray: '#8e8e8e',
        titleGray: '#666666',
        'back-gray-radio': '#ececec',
      },
      fontFamily: {
        sans: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
