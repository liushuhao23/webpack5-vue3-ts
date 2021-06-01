<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-05-31 15:43:34
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-05-31 16:26:15
-->
<template>
    <div
      ref="list"
      class="infinite-list-container"
      @scroll="scrollEvent($event)"
    >
      <div class="infinite-list-phantom" :style="{height: listHeight + 'px'}"></div>
        <div class="infinite-list" :style='{transform: getTransform }'>
            <div 
                class="infinite-list-item" 
                v-for="item in visibleData" 
                :key ='item.id'  
                :style="{ height: itemSize + 'px',lineHeight: itemSize + 'px'}">
                {{item.value}}
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { nextTick, reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    return {};
  },
  data() {
      return {
          startOffset: 0,
          start: 0,
          end: null,
          screenHeight:0,
      }
  },
  mounted() {
    //   this.startOffset = this.$el.clientHeight;
      this.screenHeight = this.$el.clientHeight;
      this.start = 0;
      this.end = this.start + this.visibleCount;
      console.log(this.visibleCount);
      console.log(this.screenHeight, 'visibleData');
      
    //   this.listHeight = this.listData.length * this.itemSize;

  },
  methods: {
      scrollEvent() {
          let scrollTop = (this.$refs as any).list.scrollTop;
          this.start = Math.floor(scrollTop / this.itemSize);
          this.end = this.start + this.visibleCount;
          this.startOffset = scrollTop - (scrollTop % this.itemSize);

      //当前滚动位置
    //   let scrollTop = this.$refs.list.scrollTop;
    //   //此时的开始索引
    //   this.start = Math.floor(scrollTop / this.itemSize);
    //   //此时的结束索引
    //   this.end = this.start + this.visibleCount;
    //   //此时的偏移量
    //   this.startOffset = scrollTop - (scrollTop % this.itemSize);
      }
  },
  props: {
      listData: {
          type: Array,
          default:()=>[]
      },
      itemSize: {
          type: Number,
          default: 300,
      }
  },
  computed: {
    //列表总高度
    listHeight(): any{
      return this.listData.length * this.itemSize;
    },
    // 偏移量
    getTransform(): any {
        return `translate3d(0, ${this.startOffset}px,  0)`;
    },
    // 可视区域的列表
    visibleData(): any {
        return this.listData.slice(this.start, Math.min(this.end, this.listData.length));
    },
    // 列表数量
    visibleCount(): any {
        return this.screenHeight / this.itemSize;
    }
  }
};
</script>

<style scoped lang='less'>
.infinite-list-container {
  height: 100%;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.infinite-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.infinite-list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  text-align: center;
}

.infinite-list-item {
  padding: 10px;
  color: #555;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
}
</style>
