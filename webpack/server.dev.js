const fs = require('fs');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const paths = require('./paths');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  name: 'server',
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],

  entry: [
    paths.serverEntryPath
  ],

  output: {
    filename: 'bundle.server.js',
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },

  module: {
    strictExportPresence: true,

    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              extends: paths.babelrcPath,
              envName: 'server',
              cacheDirectory: true,
            },
          },
        ],
      },

      {
        test: /\.scss$/,
        include: paths.srcPath,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'css-loader/locals',
            query: {
              sourceMap: true,
              modules: true,
              importLoaders: 3,
              localIdentName: '[local]_[hash:base64:5]', //[name]-[local]_[hash:base64:5]
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['node_modules'],
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/styles/functions/_functions.all.scss',
                './src/styles/settings/_settings.all.scss',
                './src/styles/mixins/_mixins.all.scss',
              ],
            },
          },
        ],
      },

      {
        test: /\.(graphql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },

      // Inline small SVGs
      {
        test: [/\.svg$/],
        include: paths.srcPath,
        loader: 'url-loader',
        options: {
          limit: 2000,
          name: 'static/media/[name].[ext]',
        },
      },

      // Everything else gets processed by `file-loader`.
      {
        // Exclude everything that's being handled by the loaders above.
        // Also exclude `html` and `json` extensions so they get processed
        // by webpacks internal loaders.
        include: paths.srcPath,
        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.graphql$/, /\.json$/, /\.svg/, /\.(css|scss)$/, /(node_modules)/],
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[ext]',
        },
      }
    ],
  },
};
