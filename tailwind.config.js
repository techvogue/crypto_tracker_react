module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'class' or remove entirely if not needed
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
        '11xl': '11rem',
        '12xl': '12rem',
      },
      screens: {
        'xs': '565px', // Custom breakpoint for extra small screens
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
