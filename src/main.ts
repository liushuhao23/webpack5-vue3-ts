/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-03-25 10:02:23
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-07-02 11:16:26
 */
import { createApp } from 'vue' // Vue 3.x 引入 vue 的形式
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import lazy from './views/lazyImg/index';

const app = createApp(App);

app.use(lazy).use(ElementPlus).use(router).mount('#root') // 将页面挂载到 root 节点