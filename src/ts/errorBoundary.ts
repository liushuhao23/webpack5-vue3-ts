/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-07-05 09:42:55
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-07-05 09:46:38
 */
/**
 * @description: 
 * @param {Function} fn
 * @param {number} retriesLeft
 * @param {number} interval
 * @return {*}
 * @author: liushuhao
 */
const errorBoundary = function(fn: Function, retriesLeft: number = 5 , interval: number = 1000) {
    return new Promise((resolve, reject) => {
        fn().then(resolve).catch((err: unknown) => {
            console.log(err);
            setTimeout(() => {
                if (retriesLeft === 1) {
                    reject(err)
                }
                errorBoundary(fn, retriesLeft -1, interval).then(resolve, reject)
            }, interval);
        });
    })
}
export { errorBoundary }