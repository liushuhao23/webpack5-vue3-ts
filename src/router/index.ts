/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-04-01 10:16:44
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-07-01 14:24:57
 */

import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/index.vue';
import test1 from '../views/test1.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/fileUpload',
    name: 'fileUpload',
    component: () => import('../views/fileUpload.vue'),
  },

  {
    path: '/test3',
    name: 'test3',
    component: () => import('../views/test3.vue'),
  },
  {
    path: '/tree',
    name: 'tree',
    component: () => import('../views/tree.vue'),
  },
  {
    path: '/animation',
    name: 'animation',
    component: () => import('../views/animation.vue'),
  },
  {
    path: '/bigList',
    name: 'bigList',
    component: () => import('../views/bigList.vue'),
  },
  {
    path: '/inherit',
    name: 'inherit',
    component: () => import('../views/inherit.vue'),
  },
  {
    path: '/lazyImg',
    name: 'lazyImg',
    component: () => import('../views/lazyImg/test.vue'),
  },
  {
    path: '/linkList',
    name: 'linkList',
    component: () => import('../views/LinkedList.vue'),
  },
  {
    path: '/test/test1',
    name: 'test1',
    component: test1,
    // children: [
    //   {
    //     path: 'test1',
    //     component: test1,
    //   },
    // ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
