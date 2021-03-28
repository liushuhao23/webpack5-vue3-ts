<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-03-25 15:49:50
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-03-27 19:27:46
-->
<template>
  <div id="root">
    “喂你好，是尼克陈吗？我是叮咚买菜的zzz送菜员，由于您电话打不通，
    特意在页面里跟您说一声，您菜到sss家了aaaa。”
    <div class="parent">
      <div class="children">
        <span>1111</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const test = () => {
      console.log(22222220000222);
    };
    test();
    return {
      test,
    };
  },
};
</script>
<style lang='less'>
.parent {
  .children {
    span {
      color: red;
      transform: rotate(30deg);
    }
  }
}
</style>