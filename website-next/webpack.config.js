// Webpack configuration
// Written in vanilla js for usage in a non-babel environment

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const hot = process.env.HOT;
const buildPath = path.join(__dirname, 'build');
const publicPath = '/assets/';
const outputPath = path.join(buildPath, publicPath);
const production = process.env.NODE_ENV === 'production';

const postcssPlugins = [
  require('postcss-cssnext')
];

const commonLoaders = (options, append) => {
  options = options || {};
  return [
    Object.assign({}, { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }, options['babel-loader']),
    Object.assign({}, { test: /\.json$/, loader: 'json-loader' }, options['json-loader']),
    Object.assign({}, { test: /\.(png|jpe?g|eot|ttf|woff|svg)$/, exclude: /node_modules/, loader: 'file-loader', query: { name: '[name]-[hash:base64:5].[ext]'} }, options['file-loader'])
  ].concat(append);
};

const commonPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin()
];

const clientConfig = {
  // Client configuration
  name: 'client',
  entry: ['./src/client/index.js'],
  output: {
    path: outputPath,
    filename: 'client.js',
    publicPath: publicPath
  },
  plugins: commonPlugins,
  postcss: postcssPlugins
};

if (hot) {
  clientConfig.plugins = clientConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ]);

  clientConfig.entry.unshift('webpack-hot-middleware/client');

  clientConfig.module = {
    loaders: commonLoaders({
      'babel-loader': {
        query: {
          presets: [ "es2015-webpack", "react", "stage-0", "react-hmre" ]
        }
      }
    }, [
      { test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!postcss-loader' }
    ])
  };
} else {
  const ExtractCSSPlugin = new ExtractTextPlugin('style.css');
  clientConfig.plugins = clientConfig.plugins.concat([ExtractCSSPlugin]);
  clientConfig.module = {
    loaders: commonLoaders({
      'babel-loader': {
        query: {
          presets: [ "es2015-webpack", "react", "stage-0" ]
        }
      }
    }, [
      { test: /\.css$/, loader: ExtractCSSPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!postcss-loader') }
    ])
  };
}

clientConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
);

if (production) {
  clientConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }}));
}

const serverConfig = {
  // Server configuration
  name: 'server',
  entry: './src/server/index.js',
  target: 'node',
  output: {
    path: outputPath,
    filename: '../server.js',
    publicPath: publicPath,
    libraryTarget: 'commonjs2'
  },
  plugins: commonPlugins,
  module: {
    loaders: commonLoaders({
      'babel-loader': {
        query: {
          presets: [ "node5", "react", "stage-0" ]
        }
      },
      'file-loader': {
        exclude: [/server/, /node_modules/],
        loader: 'fake-file-loader'
      }
    },[
      { test: /\.(png|jpe?g|eot|ttf|woff|svg)$/, exclude: [/shared\//, /client\//, /node_modules/], loader: 'file-loader', query: { name: '[name]-[hash:base64:5].[ext]'} },
      { test: /\.css$/, loader: 'css-loader/locals?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!postcss-loader' }
    ])
  },
  postcss: postcssPlugins,
  externals: /^[a-z\/\-0-9]+$/i,
  node: {
    __dirname: false
  }
};

module.exports = [clientConfig, serverConfig];
