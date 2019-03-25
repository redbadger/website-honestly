/*
 * Lambda
 * Build files for services.
 */

const path = require('path');
const webpackMerge = require('webpack-merge').smart;
const { baseServiceConfig } = require('./webpack.base.config');

const lambdaConfig = webpackMerge(baseServiceConfig, {
  mode: 'production',

  stats: 'errors-only',

  entry: {
    index: './services/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist/services'),
    libraryTarget: 'commonjs',
  },

  target: 'node',

  externals: ['aws-sdk', './client-digest'],
});

module.exports = lambdaConfig;
