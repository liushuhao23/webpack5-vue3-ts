<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-04-02 14:31:11
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-04-14 20:50:32
-->
<template>
  <span>测试页面11</span>
<router-view></router-view>

</template>

<script lang='ts'>
import def from '../ts/defineProperty';
export default {
  setup() {
    // const obj:  = {
    //   a: 1,
    // }
    const obj: number[] = [1, 2, 3];
    def(obj);
    // obj[0] = 3;
    obj.unshift(102)
    // console.log(obj);

    // obj.b = 2;
    // console.log(obj.a);
    // def
    // const intervals = [[1,4],[4,5]];
    // const arr: string | any[] = [];
    // const intervalsFunction = (intervals: any[]) => {
    //   intervals.sort((a: number[], b: number[]) => {
    //     return a[0] - b[0];
    //   });
    // };
    
    // intervalsFunction(intervals);
    // arr.push(intervals[0])
    // for (let i = 1; i < intervals.length; i += 1 ) {
    //     if (intervals[i][0] > arr[arr.length - 1][1]) {
    //         arr.push(intervals[i]);
    //     } else {
    //         if(intervals[i][1] > arr[arr.length - 1][1]) {
    //             arr[arr.length - 1][1] = intervals[i][1]
    //         }
    //     }
    // }
    function* testz(x: number): any {
      let y = yield x + 2;
      // return y;
    }
    var g = testz(1);
    // g();
    // g.next(2)
    console.log(  g.next(2) , 'kk');
    return {
      //   object1
    };
  },
};
</script>

<style>
</style>