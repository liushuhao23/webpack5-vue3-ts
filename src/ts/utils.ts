/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-07-01 11:20:16
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-07-01 17:52:13
 */
type deepDataType = object | [] | null | Symbol;
/**
 * @description: 防抖
 * @param {Function} fn
 * @param {*} wait
 * @param {boolean} immediate
 * @return {*}
 * @author: liushuhao
 */
let debounce = function (fn: Function, wait = 50, immediate: boolean) {
    let timer: any = null;
    return function (...args: any) {
        if (timer) clearTimeout(timer);
        if (immediate && !timer) {
            fn.call(null, ...args)
        }
        timer = setTimeout(() => {
            fn.call(null, ...args)
        }, wait);
    }
}
/**
 * @description:  检查是不是原始类型
 * @param {deepDataType} datas
 * @return {*}
 * @author: liushuhao
 */
let checkObj = (datas: deepDataType) => {
    return typeof datas === 'object' && datas != null;
}
/**
 * @description: 检查是对象还是数组
 * @param {deepDataType} datas
 * @return {*}
 * @author: liushuhao
 */
let isArraryObject = (datas: deepDataType) => {
    return Object.prototype.toString.call(datas).slice(8, -1);
}
const isObj = (target: unknown) => {
    return typeof target === 'object' && target != null;
}
const checkoutType = (target: any): string => Object.prototype.toString.call(target).slice(8, -1);

const deepClone = (target: any, hash = new WeakMap()): any => {
    if (!isObj(target)) return target;
    if (hash.has(target)) return hash.get(target);
    
    let result: any = null;

    if (checkoutType(target) === 'Object') { result = {}};
    if (checkoutType(target) === 'Array') { result = []};
    hash.set(target, result);
    console.log(result);
    
    Reflect.ownKeys(target).forEach((key) => {
        if(Object.prototype.hasOwnProperty.call(target, key)) {
            if (isObj(target[key])) {
                result[key] = deepClone(target[key], hash);
            } else {
                result[key] = target[key];
            }
        }
    })
    return result;
}

// const isObject = (target: any) => (typeof target === "object" || typeof target === "function") && target !== null;

// let deepClone = function (data: deepDataType, hash = new WeakMap()) {
//     if (!checkObj) return data;
//     if (hash.has(data)) return hash.get(data);
//     let result: any = null;

//     isArraryObject(data) === 'Object' ? result = {} : (isArraryObject(data) === 'Array' ? result = [] : result = null);
//     hash.set(data, result);
//     Reflect.ownKeys(data).forEach((key) => {
//         if (Object.prototype.hasOwnProperty.call(data, key)) {
//             if (isArraryObject(data[key  as keyof typeof data]) === 'Object') {
//                 result[key] = deepClone(data[key  as keyof typeof data], hash)
//             } else if (isArraryObject(data[key  as keyof typeof data]) === 'Arrary') {
//                 result[key] = data[key as keyof typeof data]
//             }
//         }
//     })
//     return result
// }
export { debounce, deepClone }