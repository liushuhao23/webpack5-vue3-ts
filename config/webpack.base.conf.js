/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-03-25 09:59:06
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-04-29 17:26:23
 */
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/main.ts'),
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/, // 不编译node_modules下的文件
        use:  [
          {
              loader: 'ts-loader',
              options: {
                  // 指定特定的ts编译配置，为了区分脚本的ts配置
                  configFile: path.resolve(__dirname, '../tsconfig.json'),
                  appendTsSuffixTo: [/\.vue$/]
              }
          }
      ]
      },
      {
        test: /\.css$/,
        use: [
          NODE_ENV === 'development'? 'style-loader': {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          NODE_ENV === 'development'? 'style-loader': {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'less-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm',
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: true, // 移除空格
        removeComments: true, // 移除注释
      },
      title: 'webpack5+vue',
    }),
  ],
};
