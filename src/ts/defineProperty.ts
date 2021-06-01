/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-04-07 15:06:18
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-04-07 17:45:40
 */
interface objType {
    aa: number,
}
const obj: objType = {
    aa: 2,
}

const defineReactive = (data: unknown, key: string, value: unknown) =>{
    Object.defineProperty(data, key,  {
        enumerable: true,
        configurable: true,
        get: function defineSet() {
            console.log(`get key: ${key} value: ${value}`);
            return value;
        },
        set: function definSet(newVal) {
            console.log(`set key: ${key} value: ${value}`);
            value = newVal;
        }
    })
}
const observe = (data: any) => {
    Object.keys(data).forEach(function(key) {
        defineReactive(data, key, data[key]);
    })
}
// const objtest = {a: 1};

export default observe;
// observe(objtest);
// defineReactive()