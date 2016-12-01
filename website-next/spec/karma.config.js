const webpackConfig = require('../webpack.config.js').find(c => c.name === 'client');

webpackConfig.devtool = 'inline-source-map';
webpackConfig.module.preLoaders = [
  {
    test: /\.js$/,
    exclude: /(node_modules|\.spec\.js)/,
    loader: 'isparta'
  }
];

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS', 'Firefox'],
    frameworks: [ 'mocha' ],
    files: [
      '../node_modules/phantomjs-polyfill/bind-polyfill.js',
      './karma-context.js'
    ],
    preprocessors: {
      './karma-context.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [
      'mocha',
      'coverage'
    ],
    coverageReporter: {
      type: 'lcov',
      dir: './coverage'
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-sourcemap-loader'
    ],
    singleRun: true
  });
};
