/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-05-05 20:09:44
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-05-06 14:47:18
 */

// const  debounce  = function(fn: any, wait = 50, immediate: boolean) {
//     let timer: any = null
//     return function(...args: any) {
//         if (timer) clearTimeout(timer)
//       	// ------ 新增部分 start ------ 
//       	// immediate 为 true 表示第一次触发后执行
//       	// timer 为空表示首次触发
//         if (immediate && !timer) {
//             fn.apply(this, args)
//         }
//       	// ------ 新增部分 end ------ 
      	
//         timer = setTimeout(() => {
//             fn.apply(this, args)
//         }, wait)
//     }
// }

const  debounce = function(fn: Function, wait: number =50, immediate: boolean) {
    let timer: any = null;
    return function(...args: any) {
        if (timer) clearTimeout(timer);
        if (immediate && !timer) {
            fn.apply(this, args)
        }
        timer =  setTimeout(() => {
            fn.apply(this, args)
        }, wait);
    }
}

const throttle = function(fn: any, wait: number) {
    let previous = 0;
    return function (...args: any) {
        let now = +new Date();
        if (now - previous > wait ) {
            previous = now;
            fn.apply(this, args);
        }
    }
}

const throttleset = function(fn: any, wait: number) {
    let timer: any = null;
    return function (...args: any) {
        if (!timer) {
            timer  = setTimeout(() => {
                timer = null;
                fn.apply(this, args)
            }, wait);
        }
    }
}

// var throttleall = function(func: any, delay: number) {
//     var timer: any = null;
//     var startTime = Date.now();
//     return function() {
//             var curTime = Date.now();
//             var remaining = delay - (curTime - startTime);
//             var context = this;
//             var args = arguments;
//             clearTimeout(timer);
//              if (remaining <= 0) {
//                    func.apply(context, args);
//                    startTime = Date.now();
//              } else {
//                    timer = setTimeout(func, remaining);
//              }
//      }
// }

const throttleall = function(fn: any, wait: number ){
    let timer: any = null;
    let previous = 0;
    return function (...args: any) {
        let now = +new Date();
        clearTimeout(timer)
        if (now - previous  >  wait) {
            previous = +new Date();
            fn.apply(this, args)
        } else {    
            timer = setTimeout(fn, wait);
            clearTimeout(timer)
        }
    }
}

export { debounce, throttle, throttleset, throttleall }