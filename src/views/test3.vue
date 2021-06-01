<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-05-07 16:59:43
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-05-07 17:03:06
-->
<template>
  <div class=""></div>
</template>

<script lang='ts'>
import { nextTick, reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
      const arr = [10, 20, 30, 40];
      let i= 0;
      while(arr[i]) {
         console.log(arr[i]);
         i += 1;    
      }
    return {};
  },
};
</script>

<style scoped lang='less'>
</style>
