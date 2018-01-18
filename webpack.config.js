'use strict';

const path = require('path');
const webpack = require('webpack');
const StylelintPlugin = require('stylelint-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

function getPath(tsPath) {
  return path.join(__dirname, tsPath);
}

module.exports = {
  entry: {
    'app': [getPath('src/index.ts')]
  },
  output: {
    path: getPath('dist'),
    publicPath: 'dist',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue']
  },
  plugins: [
    new StylelintPlugin({
      files: [
        'src/**/*.vue',
        'src/**/*.css'
      ]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
      async: false,
      checkSyntacticErrors: true,
      tslint: true,
      vue: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.ts$/,
        include: [getPath('src')],
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true,
          loaders: {
            css: [
              'vue-style-loader',
              'css-loader'
            ]
          }
        }
      }
    ]
  },
  watchOptions: {
    poll: true
  },
  devServer: {
    hot: true,
    overlay: true,
    historyApiFallback: true
  }
};
