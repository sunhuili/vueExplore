const _import = require('../_import_' + process.env.NODE_ENV)

export default [
  {//首页
    path: '/test',
    name: 'test',
    component: _import('layout/test'),
    redirect: '/test/css',
    children: [
      {
        path: 'css',
        name: 'css',
        component: _import('test/css'),
        meta: {
          testName: 'css',
        }
      },
      {
        path: 'ctxBasis',
        name: 'ctxBasis',
        component: _import('test/ctxBasis'),
        meta: {
          testName: 'ctxBasis',
        }
      },
    ],
  },
]
