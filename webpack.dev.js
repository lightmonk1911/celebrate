/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    main: './src/index.js',
    mocha: 'mocha/mocha.js',
    mochaSetup: './src/mochaSetup.js',
    test: './src/layout.test.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.dev.html',
    }),
  ],
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'dist',
  },
});
