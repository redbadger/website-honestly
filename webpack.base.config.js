/*
 * Base
 * Two base configs are exported here - one for the site and the other
 * for services (lambdas).
 */

const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge').smart;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const sharpImageLoader = require('responsive-loader/sharp');

const publicPath = `/${process.env.URL_BASENAME || ''}`;
const robots = process.env.ALLOW_ROBOTS ? 'robots-allow.txt' : 'robots-disallow.txt';

const devMode = process.env.NODE_ENV !== 'production';

const pathToFolder = folder => path.resolve(__dirname, folder);

function mediaFilesLoaders(options = {}) {
  const { emitFile = true } = options;

  const name = 'assets-honestly/[name]-[hash:base64:5].[ext]';

  const exclude = ['dist', 'node_modules'].map(pathToFolder);

  return [
    {
      test: /\.(jpe?g|png)$/i,
      loader: 'responsive-loader',
      options: {
        name,
        publicPath,
        adapter: sharpImageLoader,
      },
    },
    {
      test: /\.(gif|eot|ttf|woff|woff2|mp4|webm)$/,
      exclude,
      use: [
        {
          loader: 'file-loader',
          options: {
            name,
            publicPath,
            emitFile,
          },
        },
      ],
    },
  ];
}

const baseConfig = {
  stats: 'minimal',

  mode: 'development',

  output: {
    path: pathToFolder('dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          devMode
            ? { loader: 'style-loader', options: { singleton: true } }
            : MiniCssExtractPlugin.loader,
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
      },
      {
        test: /\.js$/,
        exclude: pathToFolder('node_modules'),
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      ...mediaFilesLoaders(),
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
      {
        test: /.pug$/,
        use: 'pug-loader',
      },
    ],
  },

  devtool: 'source-map',

  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.EnvironmentPlugin(Object.keys(process.env)),
    new MiniCssExtractPlugin({
      filename: 'assets-honestly/styles-[contenthash].css',
    }),
    new OptimizeCSSAssetsPlugin(),
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
    rules: mediaFilesLoaders({ emitFile: false }),
  },
});
