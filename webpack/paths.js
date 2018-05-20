'use strict';

const path = require('path');
const fs = require('fs');

const appDir = fs.realpathSync(process.cwd());

const resolve = relativePath => path.resolve(appDir, relativePath);

module.exports = {
  rootPath: resolve('.'),
  buildPath: resolve('build'),
  srcPath: resolve('src'),
  serverPath: resolve('server'),
  srcEntryPath: resolve('src/index.js'),
  serverEntryPath: resolve('server/index.js'),
  nodeModulesPath: resolve('./node_modules'),
  babelrcPath: resolve('./.babelrc'),
};
