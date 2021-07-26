/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-07-02 19:41:28
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-07-02 19:49:18
 */
let errFunction = (Vue: any) => {
    Vue.config.errorHandler = (err: any, vm: any, info: any) => {
        console.log(err, 'err');
        console.log(vm, 'vm');
        console.log(info, 'info');
        console.error(err);
    }
}
export default errFunction