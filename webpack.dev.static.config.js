/* eslint-disable camelcase */
const path = require('path');
const webpack = require('webpack');
const { baseServiceConfig, baseWebConfig } = require('./webpack.base.config');
const webpackMerge = require('webpack-merge').smart;
const AssetsPlugin = require('assets-webpack-plugin');

const devStaticConfig = webpackMerge(baseServiceConfig, {
  entry: {
    index: ['babel-polyfill', './dev/static/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/dev-static'),
    libraryTarget: 'commonjs',
  },
  target: 'node',
  externals: [
    './client-digest',
  ],
});

const clientConfig = webpackMerge(baseWebConfig, {
  entry: {
    index: './client/index.js',
  },
  output: {
    filename: 'assets-honestly/[name]-[hash:5].js',
    chunkFilename: 'assets-honestly/[name]-[chunkhash:5].js',
  },
  target: 'web',
  externals: [
    './client-digest',
  ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        drop_debugger: true,
      },
    }),
    new AssetsPlugin({
      filename: 'client-digest.json',
      path: './dist/dev-static',
      metadata: { bundleName: 'index' },
    }),
  ],
});

module.exports = [devStaticConfig, clientConfig];
