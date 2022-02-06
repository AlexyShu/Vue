export default {
    instal(Vue) {
        Vue.prototype.$log = function () {
            console.log("SimplePlugin work");
        }
    }
}