/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-06-22 15:35:10
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-06-22 20:31:44
 */

 function ListNode(this: any, val: any) {
         this.val = val;
         this.next = null;
}
class LinkedList {
    data: any;
    data2: any;
    val: any;
    next: any;
    constructor(data: any, data2?: any) {
        this.data = data;
        this.data2 = data2;
    }


    // 两数相加
    addTwoNumbers = () => { 
        let p1 = this.data[0];
        let p2 = this.data2[0];
        let result = 0;
        let pre = 0;
        let arr = [];
        
        while(p1.next && p2.next) {
              if(p1.next) {
                  p1 = p1.next;
              } 
              if (p2.next) {
                  p2 = p2.next;
              }
              result = (p1.val * 1)  + (p2.val * 1) + pre;
              if (result >= 10) {
                  pre = 1;
                  result = result - 10
              } else {
                  pre = 0;
              }
              arr.push(result)
        }
    };
}

export { LinkedList } 