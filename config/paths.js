'use strict';

const path = require('path');
const fs = require('fs');

const resolve = (relativePath) => path.resolve(appDir, relativePath);

const appDir = process.cwd();

// 1. ASSET_PATH specifies the base path at which assets are requested from index.html
//    Specify  https://cdn.example.com
module.exports = {
  rootPath: resolve('.'),
  buildPath: resolve('build'),
  srcPath: resolve('src'),
  htmlPath: resolve('public/index.html'),
  entryPath: resolve('src/index.js'),
  ASSET_PATH: process.env.ASSET_PATH || '/', // [1]
};
