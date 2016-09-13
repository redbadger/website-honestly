const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'publish-service': './publish-service/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]/index.js',
    libraryTarget: 'commonjs',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',

      },
    ],
  },
  target: 'node',
  externals: [
    'aws-sdk',
  ],
  devtool: 'source-map',
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        drop_debugger: true
      },
    }),
  ],
};
