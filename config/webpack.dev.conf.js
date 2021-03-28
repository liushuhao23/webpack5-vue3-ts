/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-03-27 22:39:53
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-03-28 21:09:26
 */

const { merge } = require('webpack-merge');
const base = require('./webpack.base.conf');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 8080,
    publicPath: '/',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      DEV: JSON.stringify('dev'),
    }),
  ],
});
