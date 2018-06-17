const webpack = require('webpack');
const paths = require('./paths');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  name: 'server',
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'false',
  bail: true,

  entry: [paths.serverEntryPath],

  output: {
    path: paths.buildPath,
    filename: 'server/bundle.server.js',
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
          emitFile: false,
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
          emitFile: false,
        },
      },

      // No loaders beyond this point. All loaders should be specified
      // before the `file-loader`.
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL),
    }),
  ],

  stats: {
    colors: true,
    assets: true,
    modules: false,
    builtAt: false,
    source: false,
    children: false,
  },
};
