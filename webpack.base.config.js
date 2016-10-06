const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const baseConfig = {
  output: {
    path: 'dist',
    filename: '[name]/index.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
        ),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(png|jpe?g|eot|ttf|woff|woff2)$/,
        exclude: [/dist\//, /node_modules/],
        loader: 'file-loader',
        query: {
          name: 'assets/[name]-[hash:base64:5].[ext]',
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline',
      },
      {
        test: /\.ejs/,
        loader: 'underscore-template-loader',
      },
    ],
  },
  postcss() {
    return [
      autoprefixer,
    ];
  },
  devtool: 'source-map',
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.EnvironmentPlugin(Object.keys(process.env)),
    new ExtractTextPlugin(
      'assets/styles-[contenthash:base64:5].css',
      { allChunks: true }
    ),
  ],
};

module.exports = baseConfig;
