/* eslint-disable camelcase */
const { baseWebConfig } = require('./webpack.base.config');
const webpackMerge = require('webpack-merge').smart;
const AssetsPlugin = require('assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const clientConfig = webpackMerge(baseWebConfig, {
  stats: 'errors-only',

  mode: 'production',

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
        sourceMap: true,
        uglifyOptions: {
          ecma: 6,
          output: {
            comments: false,
          },
          compress: {
            unused: true,
            dead_code: true,
            warnings: false,
            drop_debugger: true,
          },
        },
      }),
    ],
  },

  plugins: [
    new AssetsPlugin({
      filename: 'client-digest.json',
      path: './dist/services',
      metadata: { bundleName: 'index' },
    }),
  ],
});

module.exports = clientConfig;
