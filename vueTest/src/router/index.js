import Vue from 'vue'
import Router from 'vue-router'

import mainRoutes from './modules/main.js'

Vue.use(Router)

let routes = mainRoutes.concat();

let base = '/';

export default new Router({
	base,
  routes,
})
