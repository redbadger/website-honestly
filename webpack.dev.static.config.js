const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge').smart;
const AssetsPlugin = require('assets-webpack-plugin');

const devStaticConfig = webpackMerge(baseConfig, {
  entry: {
    'dev-static': './dev/static/index.js',
  },
  output: {
    libraryTarget: 'commonjs',
  },
  target: 'node',
  externals: [
    './assets-digest',
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
      filename: 'assets-digest.json',
      path: './dist/dev-static',
      metadata: { bundleName: 'dev-static' },
    }),
  ],
});

module.exports = devStaticConfig;
