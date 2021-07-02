<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-07-01 14:16:55
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-07-02 09:42:08
-->
<template>
  <div class='imgContent'>
      <div class="imgLists">
        <lazyImg
            :data='ImgObject.data'
            :placeholderImg='ImgObject.placeholderImg'
            :height='ImgObject.itemheight'
        ></lazyImg>
      </div>
  </div>
</template>

<script lang='ts'>
import { nextTick, reactive, } from 'vue';
// import lazyImg from  './lazyImg.vue'

export default {
   name: 'test',
   components: {
      //  lazyImg
   },
   setup() {

    let objs = [
      {
        url: "https://img0.baidu.com/it/u=1028544035,1557576673&fm=26&fmt=auto&gp=0.jpg",
      },
      {
        url: "https://img1.baidu.com/it/u=1746234144,3750724172&fm=26&fmt=auto&gp=0.jpg",
      },
      {
        url: "https://img2.baidu.com/it/u=4087057811,445331467&fm=26&fmt=auto&gp=0.jpg",
      },
      {
        url: "https://img1.baidu.com/it/u=2961974070,137066290&fm=26&fmt=auto&gp=0.jpg",
      },
      {
        url: "https://img0.baidu.com/it/u=3824886304,665215047&fm=26&fmt=auto&gp=0.jpg",
      },
      {
        url: "https://img2.baidu.com/it/u=1697432864,1600199787&fm=26&fmt=auto&gp=0.jpg",
      },
      {
        url: "https://img1.baidu.com/it/u=395380977,272417941&fm=26&fmt=auto&gp=0.jpg",
      },
      {
        url: "https://img1.baidu.com/it/u=1680930604,3652180900&fm=26&fmt=auto&gp=0.jpg",
      },
      {
        url: "https://img1.baidu.com/it/u=1246451335,909670857&fm=26&fmt=auto&gp=0.jpg",
      },
      {
        url: "https://img1.baidu.com/it/u=1538179465,4272098539&fm=26&fmt=auto&gp=0.jpg",
      },
      {
        url: "https://img1.baidu.com/it/u=358897836,402397168&fm=11&fmt=auto&gp=0.jpg",
      },
    ];
    let ImgObject = {
        data: objs,
        placeholderImg: 'https://img1.baidu.com/it/u=3922824968,844223838&fm=26&fmt=auto&gp=0.jpg',
        itemheight: 200
    }
    return {
        ImgObject
    }
    },
};
</script>

<style scoped lang='less'>
.imgContent{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    .imgLists{
        width: 500px;
        height: 2000px;
        border: 1px solid #cccccc;
    }
}


</style>
