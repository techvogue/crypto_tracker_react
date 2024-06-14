module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
      backgroundImage: {
        'web': "url('src\assets\crypto_web.jpg')",
        'phone': "url('src\assets\crypto-phone.jpg')",
      },
      screens: {
        'xs': '565px',  // Custom breakpoint for extra small screens
      
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
