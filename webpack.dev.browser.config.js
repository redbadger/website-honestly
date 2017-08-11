const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge').smart;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const devAppConfig = webpackMerge(baseConfig, {
  entry: {
    'dev-app': ['babel-polyfill', './dev/browser-app/index.js'],
  },
  target: 'web',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './site/index.ejs',
    }),
    new ExtractTextPlugin({
      disable: true,
    }),
  ],
});

module.exports = devAppConfig;
