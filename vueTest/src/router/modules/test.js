const _import = require('../_import_' + process.env.NODE_ENV)

export default [
  {//首页
    path: '/test',
    name: 'test',
    component: _import('layout/testLayout'),
    redirect: '/test/testDialog',
    children: [
      {
        path: 'testDialog',
        name: 'testDialog',
        component: _import('test/testDialog'),
        meta: {
          testName: 'dialog',
        }
      },
      {
        path: 'testCss',
        name: 'testCss',
        component: _import('test/testCss'),
        meta: {
          testName: 'css',
        }
      },
      {
        path: 'testCtxGif',
        name: 'testCtxGif',
        component: _import('test/testCtxGif'),
        meta: {
          testName: 'ctxGif',
        }
      },
    ],
  },
]
