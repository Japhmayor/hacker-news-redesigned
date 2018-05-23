const express = require('express');
const compression = require('compression');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const clientConfig = require('./webpack/client.dev');
const serverConfig = require('./webpack/server.dev');

const isDevelopment = process.env.NODE_ENV === 'development';
const PORT_NUMBER = process.env.PORT || 3050;

const app = express();

let isRunning = false;

const start = () => {
  !isRunning &&
  app.listen(PORT_NUMBER, () => {
    isRunning = true;
    console.log(`App is running at http://localhost:${PORT_NUMBER}`);
  });
};

if (isDevelopment) {
  const compiler = webpack([clientConfig, serverConfig]);
  const clientCompiler = compiler.compilers[0];
  const wmdOptions = {
    publicPath: '/',
    logLevel: 'info',
    compress: true,
    stats: {
      colors: true,
      assets: true,
      modules: false,
      builtAt: false,
      source: false,
      version: false,
    },
    serverSideRender: true,
  };

  app.use(compression());
  app.use(webpackDevMiddleware(compiler, wmdOptions));
  app.use(webpackHotMiddleware(clientCompiler));
  app.use(webpackHotServerMiddleware(compiler));

  compiler.hooks.done.tap('Done', start);
}

