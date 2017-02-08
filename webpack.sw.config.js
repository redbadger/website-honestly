const swConfig = {
  entry: './site/sw.js',
  output: {
    path: 'dist',
    filename: 'sw.js',
  },
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loaders: ['json'],
      },
    ],
  },
};

module.exports = swConfig;
