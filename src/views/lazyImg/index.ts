import { install } from "element-plus"

/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-07-02 09:25:27
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-07-02 09:41:05
 */import lazyImgContent from './lazyImg.vue'
let lazy = {
    install: (Vue: any, options: any) => {
        Vue.component('lazyImg', lazyImgContent);
    }
}
export default lazy