/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-03-25 09:59:06
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-03-28 13:48:16
 */
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.ts'),
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/, // 不编译node_modules下的文件
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 不编译node_modules下的文件
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
      },
      {
        test: /\.svg/,
        type: 'asset/inline', // inline 的时候不需要指定文件名
      },
      {
        test: /\.txt/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb  指定大小
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 8080,
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: true, // 移除空格
        removeComments: true, // 移除注释
      },
      title: 'webpack5+vue',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/bundle_[chunkhash:8].css'
  }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(
    {
      test: /\.js(\?.*)?$/i,    //匹配参与压缩的文件
      parallel: true,    //使用多进程并发运行
      terserOptions: {    //Terser 压缩配置
        output:{comments: false}
      },
      extractComments: true,    //将注释剥离到单独的文件中
    }
    )],
  },
};
