/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-03-26 10:22:33
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-03-26 10:42:56
 */
module.exports = {
    presets: [
      ["@babel/preset-env", {
        "targets": {
          "browsers": ["last 1 chrome versions"] // 最近 2 个版本的浏览器
        }
      }]
    ]
  }