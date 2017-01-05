const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const publicPath = `/${process.env.URL_BASENAME || ''}`;
const robots = process.env.ALLOW_ROBOTS ? 'robots-allow.txt' : 'robots-disallow.txt';

const baseConfig = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          {
            fallbackLoader: 'style-loader',
            loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
          }
        ),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(png|jpe?g|eot|ttf|woff|woff2)$/,
        exclude: [/dist\//, /node_modules/],
        loader: 'file-loader',
        query: {
          name: 'assets-honestly/[name]-[hash:base64:5].[ext]',
          publicPath,
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.ejs/,
        loader: 'underscore-template-loader',
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.EnvironmentPlugin(Object.keys(process.env)),
    new ExtractTextPlugin({
      filename: 'assets-honestly/styles-[contenthash:base64:5].css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      { from: 'assets/favicons', to: 'assets-honestly/favicons' },
      { from: `assets/${robots}`, to: 'robots.txt' },
      { from: 'assets/state.json', to: 'state.json' },
      { from: 'assets/txt', to: 'txt/' },
      { from: 'assets/fonts', to: 'assets-honestly/' },
    ]),
  ],
};


module.exports = baseConfig;
