<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-07-05 09:48:32
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-07-05 10:42:14
-->
<template>
  <div class="">
      <childrens></childrens>
  </div>
</template>

<script lang='ts'>
import { nextTick, reactive, defineAsyncComponent} from "vue";
import { useRouter } from "vue-router";
import { errorBoundary } from '../ts/errorBoundary'

export default {
  components: {
      childrens:  defineAsyncComponent( () => import('./childrenErr.vue')) 
  },
  setup() {
    return {};
  },
};
</script>

<style scoped lang='less'>
</style>
