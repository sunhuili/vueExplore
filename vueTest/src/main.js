// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/vueStore.js'
import axios from './api/axios.js'
import flexible from './js/global/flexible.js'
import msgBox from '@/plugin/msgBox'

Vue.config.productionTip = false

Main();
function Main() {
  Vue.prototype.$axios = axios
  Vue.prototype.$msgBox = msgBox
  flexible();
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
  })
}
