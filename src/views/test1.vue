<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-04-02 14:31:11
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-05-07 13:45:14
-->
<template>
  <span>测试页面1222</span>
  <el-button type="primary" @click="clickButton">主要按钮</el-button>
</template>

<script lang='ts'>
import { debounce, throttle, throttleset, throttleall } from "../ts/debounce";
import { shallowClone, deepClone, deepClone1} from "../ts/common";
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    // const clickButton = throttleall(() => {
    //   console.log(111);
    // }, 1000);
    // const obj = {
    //   name: 1,
    //   age: 2,
    // };
    // const arrTest = [1, 2, 3];
    // const copyObj = shallowClone(obj);
    // const copyArr = shallowClone(arrTest);
    // copyObj.name = '222';
    // copyArr[1] = '222';
    // console.log(copyObj, 'copyObj');
    // console.log(obj, 'obj');
    // console.log(copyArr, 'copyArr');
    // console.log(arrTest, 'arrTest');
    // const obj = {
    //   name: '2222',
    //   age: 222,
    // };
    // const obj1 = Object.assign({}, obj);


    // 深拷贝测试
    const obj = {
      name: 1,
      age: 2,
      objtest: {},
      objSon: {
        name: 'ceshi',
        age: '10',
        objSonSon: {
          name: 'ceshi',
          age: '10',
          objSonSon: {
            name: 'ceshi',
            age: '10',
            objSonSon: {
              name: 'ceshi',
              age: '10',
              objSonSon: {
                name: 'ceshi',
                age: '10',
              },
            },
          },
        },
      }
    }
    obj.objtest = obj;
    const obj2 = deepClone1(obj);
    obj2.objSon.objSonSon.objSonSon.objSonSon.name = 'deep';
    console.log(obj, 'obj')
    // obj2.
    console.log(obj2, 'obj2');
    return {
      // clickButton,
    };
  },
});
</script>

<style>
</style>