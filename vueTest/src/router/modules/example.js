const _import = require('../_import_' + process.env.NODE_ENV)

export default [
  {//首页
    path: '/example',
    name: 'example',
    component: _import('layout/example'),
    redirect: '/example/dialog',
    children: [
      {
        path: 'dialog',
        name: 'dialog',
        component: _import('example/dialog'),
        meta: {
          testName: 'dialog',
        }
      },
      {
        path: 'ctxGif',
        name: 'ctxGif',
        component: _import('example/ctxGif'),
        meta: {
          testName: 'ctxGif',
        }
      },
      {
        path: 'pixiHunter',
        name: 'pixiHunter',
        component: _import('example/pixiHunter'),
        meta: {
          testName: 'pixiHunter',
        }
      },
    ],
  },
]
