const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');
const paths = require('../config/paths');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  bail: true,

  entry: [
    paths.entryPath
  ],

  output: {
    path: paths.buildPath,
    publicPath: paths.ASSET_PATH,
    filename: 'assets/js/[name].[chunkhash].js',
    chunkFilename: 'assets/js/[name].[chunkhash].chunk.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: paths.htmlPath,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new ExtractTextPlugin({
      filename: 'assets/css/[name].[hash:8].css',
      allChunks: true
    }),
  ],

  module: {
    strictExportPresence: true,

    rules: [

      // ESLint
      // Runs before anything else, to avoid linting transpiled code.
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          formatter: eslintFormatter,
        },
      },


      {
        oneOf: [
          // Transipile JS with Babel
          {
            test: /\.js$/,
            include: paths.srcPath,
            exclude: /(node_modules)/,
            use: [
              'thread-loader',
              {
                loader: 'babel-loader',
                // This is a feature of `babel-loader` for webpack (not Babel itself).
                // It enables caching results in ./node_modules/.cache/babel-loader/
                // directory for faster rebuilds.
                options: {
                  compact: true,
                  highlightCode: true,
                }
              }
            ],
          },


          //  SCSS Modules
          // `style-loader`: Injects <style> tags in development mode
          // `css-loader`: Takes care of the modules, compression, and source maps
          // `sass-loader`: Loads and compiles SCSS files
          // `sass-resources-loader`: Loads ITCSS-like dependencies to be used in components
          {
            test: /\.scss$/,
            include: paths.srcPath,
            exclude: /(node_modules)/,
            loader: ExtractTextPlugin.extract({
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    sourceMap: true,
                    minimize: true,
                    importLoaders: 2,
                    localIdentName: '[local]_[hash:base64:5]', //[name]-[local]_[hash:base64:5] // TODO: Revisit name
                  },
                },
                {
                  loader: 'postcss-loader'
                },
                {
                  loader: 'sass-loader',
                  options: {
                    includePaths: ['node_modules']
                  }
                },
                {
                  loader: 'sass-resources-loader',
                  options: {
                    resources: [
                      './src/styles/functions/_functions.all.scss',
                      './src/styles/settings/_settings.all.scss',
                      './src/styles/mixins/_mixins.all.scss'
                    ]
                  }
                }
              ]
            }),
          },

          // Process GraphQL queries
          {
            loader: 'graphql-tag/loader',
            test: /\.(graphql)$/,
            exclude: /node_modules/,
          },

          // Process everything else.
          // Any imported file that isn't a match for loaders above will be processed
          // with file-loader
          {
            loader: 'file-loader',
            // Exclude `js` files to keep "css" loader working as it injects
            // it's runtime that would otherwise be processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            //
            // Credit: Create React App
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            options: {
              name: 'assets/media/[name].[hash:8].[ext]',
            },
          }

        ],
      }
    ],
  }
};
