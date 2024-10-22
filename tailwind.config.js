module.exports = {
  content: ['./src/**/*.jsx', './src/**/*.js', './public/index.html'],
  theme: {
    extend: {
      colors: {
        darkGray: '#333333',
        lightGray: '#b3b3b3',
        greenPrimary: '#00b206',
        graySecondary: '#999999',
        blackPrimary: '#191919',
        gray: {
          666: '#666666'
        }
      },
      backgroundColor: {
        greenPrimary: '#00b206',
        whitePrimary: '#f7f7f7'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
};
