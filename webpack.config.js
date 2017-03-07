let path = require('path');

    module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
      root:  path.join(__dirname, "src")
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }

};
