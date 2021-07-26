<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-07-02 20:02:55
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-07-02 20:17:41
-->
<template>
  <div class='errorBoundary'>
  </div>
</template>

<script lang='ts'>
import { nextTick, reactive, } from 'vue';
import { useRouter } from 'vue-router'

export default {
   errorCaptured (err, vm, info) {
       console.log(err, 'err');
       console.log(vm, 'vm');
       console.log(info, 'info');
       return false
   },
};
</script>

<style scoped lang='less'>

</style>
