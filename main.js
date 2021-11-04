import App from './App'
import store from './store'
// 获取位置jsonp跨域
import {VueJsonp} from 'vue-jsonp';
Vue.use(VueJsonp);
// // 
Vue.prototype.$store = store

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	 store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif