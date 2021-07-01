<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-06-21 11:33:06
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-06-22 16:44:18
-->
<template>
  <div class=""></div>
</template>

<script lang='ts'>
import { nextTick, reactive } from "vue";
import { useRouter } from "vue-router";
import { LinkedList } from '../ts/linkedList'

export default {
  setup() {
    let data = [
        {
            val: 16,
            next: {
                val: 2,
                next: {
                    val: 21,
                    next: {
                        val: 10,
                        next: null,
                    }
                }
            }
        }
    ];
    let data2 = [
        {
            val: 0,
            next: {
                val: 1,
                next: {
                    val: 2, 
                    next: {
                        val: 3,
                        next: {
                            val: 4,
                            next: {
                                val: 5,
                                next: null
                            }
                        }
                    }
                },
            }

        }
    ]
    // const reverseList = function(head: any): any {
    //     if (head == null || head.next == null) {
    //         return head;
    //     }
    //     const newHead = reverseList(head.next);
    //     head.next.next = head;
    //     head.next = null;
    //     return newHead;
    // };
    // const result = reverseList(data[0]);
    // console.log(result, 'result');
    // const reverseLists = function (head: any): any {
    //     let pre = null;
    //     let cur = head;
    //     while (cur) {
    //         const next = cur.next;
    //         cur.next = pre;
    //         pre = cur;
    //         cur = next;
    //     }
    //     return pre;
    // }

    // let splitList = (head: any): any => {
    //     let p1 = head;
    //     let p2 = head;
    //     while (p2.next && p2.next.next) {
    //         p1 = p1.next;
    //         p2 = p2.next.next;
    //     }
    //     return p1;
    // }
    // let checkout = (p1: any, p2: any) => {
    //     console.log(p1, "++++", p2);
    //     while (p2 != null) {
    //         if (p1.val != p2.val) return false;
    //         p1 = p1.next;
    //         p2 = p2.next;
    //     }
    //     return true
    // }

    // const isPalindrome = function(head: any): any {
    //     const result =  splitList(head);
    //     const reverResult =  reverseLists(result.next);
    //     const checkoutFlag = checkout(head, reverResult);
    //     return checkoutFlag
    // }

    let data0 = [
        {
            val: 0,
            next: {
            val: 7,
            next: {
                val: 1,
                next: {
                    val: 6,
                    next: null
                }
            }
            }
        }
    ]
    let data1= [
        {
            val: 0,
            next: {
                val: 5,
                next: {
                    val: 9,
                    next: {
                        val: 2,
                        next: null
                    }
                }
            }
        }
    ]

    let result = new LinkedList(data0, data1);
    result.addTwoNumbers();

    // var removeNthFromEnd = function(head: any, n: any): any {
    //     if (!head) return [];
    //     let p1 = head;
    //     let p2 = head;
    //     for (let i = 0; i < n; ++i) {
    //         console.log(i);
    //         p2 = p2.next;
    //     }
    //     while(p2.next) {
    //         p1 = p1.next;
    //         p2 = p2.next;
    //     }
    //     p1.next = p1.next.next;
    //     return head.next;
    // };
    // // console.log(removeNthFromEnd(data3[0], 1));
    return {};
  },

};
</script>

<style scoped lang='less'>
</style>
