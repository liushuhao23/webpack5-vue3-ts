<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-05-08 13:48:35
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-05-28 15:08:49
-->
<template>
  <div class=""></div>
</template>

<script lang='ts'>
import { nextTick, reactive } from "vue";
import { useRouter } from "vue-router";
import { tree } from "../ts/tree";

export default {
  setup() {
    const data = {
      name: "D盘",
      children: [
        {
          name: "学习",
          children: [
            {
              name: "电子书",
              children: [
                {
                  name: "文学",
                  children: [
                    {
                      name: "茶馆",
                    },
                    {
                      name: "红与黑",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "电影",
          children: [
            {
              name: "美国电影",
            },
            {
              name: "日本电影",
            },
          ],
        },
      ],
    };
    const TreeInstance = new tree(data);
    const resultData = TreeInstance.Depthtraverse();
    let treeObJ: any = {
      val: 6,
      left: {
        val: 2,
        left: {
          val: 0,
        },
        right: {
          val: 4,
          left: {
            val: 3
          },
          right: {
            val: 5
          }
        }
      },
      right: {
        val: 8,
        left: {
          val: 7,
        },
        right: {
          val: 9,
        }
      },
    };
    let tree1 = new tree(treeObJ);
    // const result=  tree1.resverse(treeObJ);
    // const index = tree1.maxDepth(treeObJ)

    var isBalanced = function (root: any) {
      return balanced(root, 0) !== -1;
    };

    var balanced = function (node: any, index: number) {
      if (!node) return 0;
      // console.log(JSON.parse(JSON.stringify(node)));
      
      const left: any = balanced(node.left, index);
      const right: any = balanced(node.right, index);    
      // console.log(left, 'left');
      // console.log(right, 'right');
      
      if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
        return -1;
      }
      return Math.max(left, right) + 1;
    };
    // console.log(treeObJ);
    
    // const res = tree1.isbalanced(treeObJ);

    const results = tree1.binaryTreePaths(treeObJ);
    console.log(results, 'results');
    
    // console.log(results, 'results');
    

    // var preorder = function (root: any) {
    //   let result: any = [];
    //   if (!root) return result;
    //   let stack = [];
    //   stack.push(root);
    //   // let index = 1
    //   while (stack.length) {
    //     console.log(JSON.parse(JSON.stringify(stack)) , '111');
    //     let cur: any = stack.pop();
    //     // console.log(cur.val, ';');
    //     // index += 1
    //     result.push(cur.val);
    //     if (cur.children) {
    //       for (let index = cur.children.length - 1; index >= 0; index--) {
    //         // console.log(cur.children, 'cur.children');
    //         // console.log(cur.children[index], 'cur.children');
    //         const element = cur.children[index];
    //         stack.push(element);

    //       }
    //     }
    //   }
    //   // console.log(index);

    //   return result;
    // };
    //  const list =  preorder(treeObJ);

    // console.log(list, '222');

    return {};
  },
};
</script>

<style scoped lang='less'>
</style>
