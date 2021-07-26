<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-07-02 15:13:29
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-07-02 20:27:27
-->
<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-07-02 11:50:03
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-07-02 15:07:04
-->
<template>
  <div class=''>
      <span>children</span>
      <button @click="click1">点击</button>
      <button @click="clickoo">点击1</button>
      <!-- <button @click="injectz">点击2</button> -->
      {{testnn}}
  </div>
</template>

<script lang='ts'>
import { nextTick, reactive, ref, inject, Ref} from 'vue';
import { useRouter } from 'vue-router'
 
interface SetupContext{ 
    emit: (event: string, ...args: unknown[]) => void
}
interface Data {
    [key: string]: unknown
}
export default {
   props: ['age', 'name'],
   setup(props: Data,  content: SetupContext ) {
        let errObj = null;
        errObj.length = 0;
       const click1 = () => {
           content.emit('update:age', 55555);
           content.emit('update:name', 88888);
       };
       let testnn = ref('88888')
    //    const parentT: Ref = inject('location');
    //    const injectz =() => {
    //        parentT.value = 'jjjjjnnnn'
    //    }
     return {
         click1,
         testnn,
        //  injectz
     }
    },
    methods: {
        clickoo () {
            this.testnn = '8899900'
        }
    }
};
</script>

<style scoped lang='less'>

</style>
