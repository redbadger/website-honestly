/* eslint no-console:0 no-underscore-dangle:0 */

const chalk = require('chalk');
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMw = require('webpack-dev-middleware');
const webpackHotMw = require('webpack-hot-middleware');
const webpackConfigs = require('./webpack.config');

const port = process.env.PORT || 8000;
const app = express();
const clientConfig = webpackConfigs[0];
const clientCompiler = webpack(clientConfig);

app.use(webpackDevMw(clientCompiler, {
  noInfo: true,
  publicPath: clientConfig.output.publicPath,
}));

app.use(webpackHotMw(clientCompiler));

const serverConfig = webpackConfigs[1];
const serverCompiler = webpack(serverConfig);
const serverFile = path.join(serverConfig.output.path, '..', 'server.js');

serverCompiler.watch({}, (err) => {
  if (err) {
    console.log(chalk.red(err));
  }

  const mw = app._router.stack.find(mw => mw.name === 'mounted_app'); // eslint-disable-line
  if (mw) {
    app._router.stack.splice(app._router.stack.indexOf(mw), 1);
    delete require.cache[serverFile];
    console.log(chalk.white(chalk.yellow('INFO:'), 'Server reloaded'));
  } else {
    console.log(chalk.white(chalk.yellow('INFO:'), 'Server loaded'));
  }

  app.use(require(serverFile).default); // eslint-disable-line
});

app.listen(port, () => {
  console.log(chalk.white(chalk.yellow('INFO:'), 'Dev server listening on port', port));
});
