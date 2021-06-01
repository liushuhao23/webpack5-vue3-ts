/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-05-06 14:43:16
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-05-07 13:55:36
 */

// // [propName: string]: any;
// interface Result {
//     [propName: string]: any;
// }
const checkoutType = (target: any): string => Object.prototype.toString.call(target).slice(8, -1);

const shallowClone = (target: any): any => {
    let result: any;
    if (checkoutType(target) === 'Object') {
        result = {};
    }
    if (checkoutType(target) === 'Array') {
        result = [];
    }
    Object.keys(target).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
            result[key] = target[key];
        }
    });
    return result;
};

const isObj = (target: unknown) => {
    return typeof target === 'object' && target != null;
}

const deepClone = (target: any): any => {
    if (!isObj(target)) return target
    let result: any;
    if (checkoutType(target) === 'Array') {
        result = [];
    } else if (checkoutType(target) === 'Object'){
        result = {};
    }
    Object.keys(target).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
            if (checkoutType(target[key]) === 'Object') {
                result[key] = deepClone(target[key]);
            } else {
                result[key] = target[key];
            }
        }
    });
    return result;
}

const deepClone1 = (target: any, hash = new WeakMap()): any => {
    if (!isObj(target)) return target;
    if (hash.has(target)) return hash.get(target);
    
    let result: any;

    if (checkoutType(target) === 'Object') { result = {}};
    if (checkoutType(target) === 'Arrary') { result = []};
    hash.set(target, result);
    
    Reflect.ownKeys(target).forEach((key) => {
        if(Object.prototype.hasOwnProperty.call(target, key)) {
            if (isObj(target[key])) {
                result[key] = deepClone1(target[key], hash);
            } else {
                result[key] = target[key];
            }
        }
    })
    return result;
}

export { shallowClone, checkoutType, deepClone, deepClone1}