import Vue from 'vue'
import Router from 'vue-router'

import mainRoutes from './modules/main.js'
import exampleRoutes from './modules/example.js'
import testRoutes from './modules/test.js'

Vue.use(Router)

let routes = mainRoutes.concat(
  exampleRoutes,
  testRoutes,
);

let base = '/';

export default new Router({
  // mode: 'history',
  base,
  routes,
})
