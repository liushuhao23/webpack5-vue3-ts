<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-05-20 10:55:39
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-05-20 11:04:29
-->
<template>
  <div class='animation'>
      <div class="demo">

      </div>
  </div>
</template>

<script lang='ts'>
import { nextTick, reactive, } from 'vue';
import { useRouter } from 'vue-router'

export default {
   setup() {
     return {}
    },
};
</script>

<style scoped lang='less'>
.demo{
    width: 100px;
    height: 100px;
    border: 1px solid red;
    animation-name: example;
    animation-duration: 4s;
    background: red;
}
@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}


</style>
