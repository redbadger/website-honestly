const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge').smart;
const AssetsPlugin = require('assets-webpack-plugin');

const lambdaConfig = webpackMerge(baseConfig, {
  entry: {
    'publish-service': './publish-service/index.js',
  },
  output: {
    libraryTarget: 'commonjs',
  },
  target: 'node',
  externals: [
    'aws-sdk',
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
      path: './dist/publish-service',
      metadata: { bundleName: 'publish-service' },
    }),
  ],
});

module.exports = lambdaConfig;
