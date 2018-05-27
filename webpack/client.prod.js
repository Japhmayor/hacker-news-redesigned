const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const paths = require('./paths');

module.exports = {
  name: 'client',
  mode: 'production',
  target: 'web',
  devtool: false,
  bail: true,

  entry: [paths.srcEntryPath],

  output: {
    path: paths.buildPath,
    filename: 'assets/js/[name].[chunkhash:8].js',
    publicPath: paths.publicPath,
  },

  performance: {
    maxEntrypointSize: 400000,
    maxAssetSize: 400000,
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
    runtimeChunk: true,
  },

  module: {
    strictExportPresence: true,

    rules: [
      {
        oneOf: [

          // Transiplie JavaScript with Babel
          {
            test: /\.js$/,
            include: paths.srcPath,
            exclude: /(node_modules)/,
            use: [
              'thread-loader',
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true,
                  highlightCode: true,
                },
              },
            ],
          },

          // Process SCSS
          // 1. `sass-resources-loader` – Makes global dependencies (variables/mixins)
          // available to modules without @import
          // 2. `sass-loader` – Compiles Sass
          // 3. `postcss-loader` – Adds PostCSS plugins (e.g. autoprefixer)
          // 4. `css-loader` –Inteprets imports and adds CSS modules functionality
          // 5. `MiniCSSExtractPlugin` – Extracts generated CSS into a file
          {
            test: /\.scss$/,
            include: paths.srcPath,
            exclude: /(node_modules)/,
            use: [
              MiniCSSExtractPlugin.loader,
              {
                loader: 'css-loader',
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

          // Process imported .graphql files
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
              name: 'assets/media/[name].[hash:8].svg',
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
              name: 'assets/media/[name].[hash:8].[ext]',
            },
          },

          // No loaders beyond this point. All loaders should be specified
          // before the `file-loader`.

        ],
      }
    ],
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: paths.srcStaticPath,
      to: paths.buildStaticPath,
    }]),
    new MiniCSSExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css',
    }),
    new ManifestPlugin({
      fileName: 'assets/asset-manifest.json',
      publicPath: paths.publicPath,
    }),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    // new BundleAnalyzerPlugin(), // TODO: Make this conditional, based on a flag or something.
    new SWPrecacheWebpackPlugin({
      // By default, a cache-busting query parameter is appended to requests
      // used to populate the caches, to ensure the responses are fresh.
      // If a URL is already hashed by Webpack, then there is no concern
      // about it being stale, and the cache-busting can be skipped.
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      logger(message) {
        if (message.indexOf('Total precache size is') === 0) {
          // This message occurs for every build and is a bit too noisy.
          return;
        }
        if (message.indexOf('Skipping static resource') === 0) {
          // This message obscures real errors so we ignore it.
          // https://github.com/facebook/create-react-app/issues/2612
          return;
        }
        console.log(message);
      },
      minify: true,
      // Don't precache sourcemaps (they're large) and build asset manifest:
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
      // `navigateFallback` and `navigateFallbackWhitelist` are disabled by default; see
      // https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#service-worker-considerations
      // navigateFallback: publicUrl + '/index.html',
      // navigateFallbackWhitelist: [/^(?!\/__).*/],
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
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
