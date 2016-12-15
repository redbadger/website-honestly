const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge').smart;
const AssetsPlugin = require('assets-webpack-plugin');

const clientConfig = webpackMerge(baseConfig, {
  entry: {
    client: './client/index.js',
  },
  output: {
    filename: 'assets-honestly/index-[hash:5].js',
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
      metadata: { bundleName: 'client' },
    }),
  ],
});

module.exports = clientConfig;
