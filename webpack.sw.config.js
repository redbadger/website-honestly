const webpack = require('webpack');

const swConfig = {
  entry: './site/sw.js',
  output: {
    path: 'dist',
    filename: 'sw.js',
  },
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.URL_BASENAME': JSON.stringify(process.env.URL_BASENAME),
    }),
  ],
};

module.exports = swConfig;
