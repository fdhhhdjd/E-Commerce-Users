module.exports = {
  content: ['./src/**/*.jsx', './src/**/*.js', './public/index.html'],
  theme: {
    extend: {
      colors: {
        darkGray: '#333333',
        lightGray: '#b3b3b3'
      },
      backgroundColor: {
        greenPrimary: '#00b206'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
};
