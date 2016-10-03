const baseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge').smart;

const devStaticConfig = webpackMerge(baseConfig, {
  entry: {
    'dev-static': './dev/static/index.js',
  },
  target: 'node',
});

module.exports = devStaticConfig;
