const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge').smart;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const publicPath = `/${process.env.URL_BASENAME || ''}`;
const robots = process.env.ALLOW_ROBOTS ? 'robots-allow.txt' : 'robots-disallow.txt';

const baseConfig = {
  stats: "minimal",

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            'postcss-loader',
          ],
        }),
      },
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|eot|ttf|woff|woff2)$/,
        exclude: [path.resolve(__dirname, 'dist'), path.resolve(__dirname, 'node_modules')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets-honestly/[name]-[hash:base64:5].[ext]',
              publicPath,
            },
          },
        ],
      },
      {
        test: /\.ejs/,
        use: [
          {
            loader: 'underscore-template-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-inline-loader',
          },
        ],
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
      ignoreOrder: true,
    }),
  ],
};

exports.baseWebConfig = webpackMerge(baseConfig, {
  plugins: [
    new CopyWebpackPlugin([
      { from: 'assets/favicons', to: 'assets-honestly/favicons' },
      { from: `assets/${robots}`, to: 'robots.txt' },
      { from: 'assets/manifest.json', to: 'manifest.json' },
      { from: 'assets/sitemap.xml', to: 'sitemap.xml' },
      { from: 'assets/google16329df1f462dd5e.html', to: 'google16329df1f462dd5e.html' },
      { from: 'assets/txt', to: 'txt/' },
      { from: 'assets/fonts', to: 'assets-honestly/' },
    ]),
  ],
});

exports.baseServiceConfig = webpackMerge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|eot|ttf|woff|woff2)$/,
        exclude: [path.resolve(__dirname, 'dist'), path.resolve(__dirname, 'node_modules')],
        use: [
          {
            loader: 'file-loader',
            options: {
              emitFile: false,
            },
          },
        ],
      },
    ],
  },
});
