const path = require('path');

const swConfig = {
  entry: './site/sw.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sw.js',
  },
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loaders: ['json'],
      },
    ],
  },
};

module.exports = swConfig;
