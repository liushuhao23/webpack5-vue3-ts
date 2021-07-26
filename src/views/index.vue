<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-04-01 10:17:55
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-07-05 09:53:40
-->
<template>
  <div>
    <span>主页111zzz</span>
    <span ref='div'>111</span>
    <span ref='divtest'>3333</span>
    <span>{{object1.test}}</span>
    <button @click="gotest">测试页面</button>
    <button @click="gotest1">测试页面1</button>
    <button @click="gotest3">测试页面3</button>
    <button @click="gotree">测试树</button>
    <button @click="goanimation">测试动画</button>
    <button @click="gobigList">长列表</button>
    <button @click="goinherit">继承</button>
    <button @click="goLinkList">链表</button>
    <button @click="goLazyImg">图片懒加载</button>
    <button @click="goFailure">文件加载失败重试测试</button>
    <div class="bigListContent">
      <VirtualList :listData="data" :itemSize="100"/>
    </div>
  </div>
</template>

<script lang='ts'>
interface obj {
  value: String
}
import { nextTick, reactive, } from "vue";
import { useRouter } from 'vue-router'
import observez from '../ts/defineProperty';
import { a as ss, b } from '../ts/test'
// import VirtualList from "./bigList.vue";
import VirtualList from "./bigList1.vue";

let d: any = [];
for (let i = 0; i < 1000; i++) {
  d.push({ id: i, value: i });
}

export default {
  components: {
    VirtualList
  },
  data() {
    return {
      data: d
    };
  },
  setup() {
    let object1 = new Map();
    observez(object1);
    const router = useRouter();
    const gotest = () => {
      router.push({
        name: 'test'
      })
    }
    const gotest1 = () => {
      router.push({ path: '/test/test1', query: { plan: 'private' } })
    }
    const gotest3 = () => {
      router.push({ path: '/test3' })
    }

    const gotree = () => {
      router.push({ path: '/tree' })
    }
    const goanimation = () => {
      router.push({ path: '/animation' })
    }
    const gobigList = () => {
      router.push({ path: '/bigList' })
    }
    const goinherit = () => {
      router.push({ path: '/inherit' })
    }
    const goLinkList = () => {
      router.push({ path: '/linkList' })
    }
    const goLazyImg = () => {
      router.push({ path: '/lazyImg' })
    }
    const goFailure = () => {
      router.push({ path: '/failure' })
    }
    return {
      object1,
      gotest,
      gotest1,
      gotest3,
      gotree,
      goanimation,
      gobigList,
      goinherit,
      goLinkList,
      goLazyImg,
      goFailure
    }
  },
};
</script>

<style lang='less'>
.bigListContent{
  width: 100%;
  height: 500px;
}
.test{
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>