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
        loaders: ['babel'],
      },
    ],
  },
};

module.exports = swConfig;
