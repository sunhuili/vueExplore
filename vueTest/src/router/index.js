import Vue from 'vue'
import Router from 'vue-router'

import mainRoutes from './modules/main.js'
import testRoutes from './modules/test.js'

Vue.use(Router)

let routes = mainRoutes.concat(
  testRoutes,
);

let base = '/';

export default new Router({
	base,
  routes,
})
