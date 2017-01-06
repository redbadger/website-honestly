const baseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge').smart;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const devAppConfig = webpackMerge(baseConfig, {
  entry: ['babel-polyfill', './dev/browser-app/index.js'],
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      template: './site/index.ejs',
    }),
    new ExtractTextPlugin(
      '/assets-honestly/styles-[contenthash:base64:5].css',
      { allChunks: true }
    ),
  ],
});

module.exports = devAppConfig;
