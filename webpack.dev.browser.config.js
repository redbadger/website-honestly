const baseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge').smart;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');

const devAppConfig = webpackMerge(baseConfig, {
  entry: {
    'dev-app': './dev/browser-app/index.js',
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      template: './site/index.ejs',
    }),
    new DotenvPlugin({
      sample: './.env.example',
      path: './.env',
    }),
  ],
});

module.exports = devAppConfig;
