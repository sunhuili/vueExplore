const home = resolve => require(['@/view/home.vue'],resolve)
const ceshi = resolve => require(['@/view/ceshi.vue'],resolve)
const notFound = resolve => require(['@/view/notFound.vue'],resolve)

export default [
  {//首页
    path: '/',
    name: 'home',
    component: home
  },
  {//测试页面
    path: '/ceshi',
    name: 'ceshi',
    component: ceshi
  },
  {//404页面
    path: '/notFound',
    name: 'notFound',
    component: notFound
  },
  {//404
    path: '*',
    redirect: '/notFound',
  },
]
