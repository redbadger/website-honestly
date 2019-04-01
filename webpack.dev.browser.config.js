/*
 * Dev-Browser
 * Used for hot reloadin' server.
 */

const webpack = require('webpack');
const webpackMerge = require('webpack-merge').smart;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { baseWebConfig } = require('./webpack.base.config');

const devAppConfig = webpackMerge(baseWebConfig, {
  entry: {
    'dev-app': ['babel-polyfill', './dev/browser-app/index.js'],
  },

  target: 'web',

  devServer: {
    inline: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8080,
    open: true,
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './site/index.pug',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CopyWebpackPlugin([{ from: 'assets/state.json', to: 'state.json' }]),
  ],
});

module.exports = devAppConfig;
