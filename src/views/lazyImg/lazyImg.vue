<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-06-30 20:16:15
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-07-02 20:27:39
-->
<template>
  <div class="lazyImg">
    <!-- <div class="imgList" id="imgList">
      <div
        class="img_item"
        :style="{ height: heightw + 'px' }"
        v-for="(item, index) in imgData"
        :key="index"
      >
        <div class="img_content">
          <img :src="loadingUrl" :data-src="item.url" alt="" class="lazy_img" />
        </div>
      </div>
    </div> -->
      <childrens></childrens>
  </div>
</template>

<script lang='ts'>
import { nextTick, onMounted, reactive, ref, getCurrentInstance, provide, readonly} from "vue";
import { useRouter } from "vue-router";
import  childrens from "./children.vue";
// import  errorBoundary from '../errorBoundaryCom/index.vue'


import { debounce, deepClone } from "../../ts/utils";


export default {
  name: "lazyImg",
  props: {
    data: {
      type: Object,
      default: {},
    },
    placeholderImg: {
      type: String,
    },
    height: {
      type:  Number || String,
    },
  },
  components: {
    childrens,
  },
  setup(props, ctx) {
    let instance = getCurrentInstance();
    let imgData = deepClone(props.data);
    let loadingUrl = props.placeholderImg;
    let heightw = props.height;
    onMounted(() => {
      let windowHeight = window.innerHeight;
      let check = (item: any) => {
        const isUp =
          item.getBoundingClientRect().top <= windowHeight ? true : false;
        const isButton =
          item.getBoundingClientRect().bottom >= 0 ? true : false;
        const isloaded = item.className == "loaded_img" ? false : true;
        return isUp && isButton && isloaded;
      };
      let nodeImg = Array.from(document.querySelectorAll(".lazy_img"));
      let lazyLoad = () => {
        nodeImg.forEach((item) => {
          if (check(item)) {
            (item as any).src = (item as any).dataset.src;
            item.classList.remove("lazy_img");
            item.classList.add("loaded_img");
          }
        });
        nodeImg = nodeImg.filter((item) => {
          return item.className !== "loaded_img";
        });
        if (nodeImg.length === 0) {
          document.removeEventListener("scroll", lazyLoad);
        }
      };
      lazyLoad();
      let scroll = debounce(lazyLoad, 50, true);
      window.addEventListener("scroll", () => {
        scroll();
      });
    });

    return {
      imgData,
      loadingUrl,
      heightw,
    };
  },
   errorCaptured (err, vm, info) {
       console.log(err, 'err');
       console.log(vm, 'vm');
       console.log(info, 'info');
       return false
   },
};
</script>

<style scoped lang='less'>
.lazyImg {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  .imgList {
    width: 100%;
    height: 100%;
    border: 1px solid #cccccc;
    .img_item {
      width: calc(100% - 20px);
      height: 150px;
      border: 1px solid #cccccc;
      margin: 10px;
      .img_content {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
