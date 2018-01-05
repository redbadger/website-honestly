/* eslint-disable camelcase */
const webpack = require('webpack');
const baseWebConfig = require('./webpack.base.config').baseWebConfig;
const webpackMerge = require('webpack-merge').smart;
const AssetsPlugin = require('assets-webpack-plugin');

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
      path: './dist/services',
      metadata: { bundleName: 'index' },
    }),
  ],
});

module.exports = clientConfig;
