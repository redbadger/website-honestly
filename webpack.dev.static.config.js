const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge').smart;
const AssetsPlugin = require('assets-webpack-plugin');

process.env.BABEL_ENV = 'typecheck';

const devStaticConfig = webpackMerge(baseConfig, {
  entry: {
    'dev-static': ['babel-polyfill', './dev/static/index.js'],
  },
  output: {
    libraryTarget: 'commonjs',
  },
  target: 'node',
  externals: [
    './client-digest',
  ],
}, baseConfig.typeCheckConfig);

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
      path: './dist/dev-static',
      metadata: { bundleName: 'client' },
    }),
  ],
});

module.exports = [devStaticConfig, clientConfig];
