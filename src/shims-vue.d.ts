/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-03-27 20:20:18
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-03-27 20:20:26
 */
/* eslint-disable */
declare module '*.js' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }