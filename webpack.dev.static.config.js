/*
 * Dev-Static
 * Build the files needed to run the site locally (ie. without using the publish lambda).
 */

/* eslint-disable camelcase */
const path = require('path');
const webpackMerge = require('webpack-merge').smart;
const AssetsPlugin = require('assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { baseServiceConfig, baseWebConfig } = require('./webpack.base.config');

const devStaticConfig = webpackMerge(baseServiceConfig, {
  entry: {
    index: ['babel-polyfill', './dev/static/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/dev-static'),
    libraryTarget: 'commonjs',
  },
  target: 'node',
  externals: ['./client-digest'],
});

const clientConfig = webpackMerge(baseWebConfig, {
  stats: 'errors-only',

  entry: {
    index: './client/index.js',
  },

  output: {
    filename: 'assets-honestly/[name]-[hash:5].js',
    chunkFilename: 'assets-honestly/[name]-[chunkhash:5].js',
  },

  target: 'web',

  externals: ['./client-digest'],

  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          ecma: 6,
          output: {
            comments: false,
          },
          warnings: false,
          compress: {
            unused: true,
            dead_code: true,
            drop_debugger: true,
          },
        },
      }),
    ],
  },

  plugins: [
    new AssetsPlugin({
      filename: 'client-digest.json',
      path: './dist/dev-static',
      metadata: { bundleName: 'index' },
    }),
  ],
});

module.exports = [devStaticConfig, clientConfig];
