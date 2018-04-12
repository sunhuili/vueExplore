const _import = require('../_import_' + process.env.NODE_ENV)

export default [
  {//首页
    path: '/',
    name: 'home',
    component: _import('home'),
    meta: {
      hidden: true,
    },
  },
  {//404页面
    path: '/notFound',
    name: 'notFound',
    component: _import('notFound'),
    meta: {
      hidden: true,
    },
  },
  {//404
    path: '*',
    meta: {
      hidden: true,
    },
    beforeEnter(to,from,next) {
      next({path: 'notFound', query: {errorPath: to.path}});
    }
  },
]
