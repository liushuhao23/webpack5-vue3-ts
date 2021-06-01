<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-04-01 10:17:55
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-04-25 11:07:16
-->
<template>
  <div>
    <span>主页111zzz</span>
    <span ref='div'>111</span>
    <span ref='divtest'>3333</span>
    <span>{{object1.test}}</span>
    <button @click="gotest">测试页面</button>
    <button @click="gotest1">测试页面1</button>
    <!-- <p>{{test}}</p> -->
  </div>
</template>

<script lang='ts'>
interface obj {
  value: String
}
import { nextTick, reactive, } from "vue";
import { useRouter } from 'vue-router'
export default {
  setup() {
    //   const a = function() {
    //       console.log(this);
    //   }
    //   a.b = function() {
    //       console.log();
    //   }
    // return {}
  },
};
</script>

<style>
</style>