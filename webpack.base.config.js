const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const publicPath = `/${process.env.URL_BASENAME || ''}`;


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
          name: 'assets-honestly/[name]-[hash:base64:5].[ext]',
          publicPath,
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
    new ExtractTextPlugin(
      'assets-honestly/styles-[contenthash:base64:5].css',
      { allChunks: true }
    ),
    new CopyWebpackPlugin([
      { from: 'assets/favicons', to: 'assets-honestly/favicons' },
      { from: 'assets/txt', to: 'txt/' },
    ]),
  ],
};

module.exports = baseConfig;
