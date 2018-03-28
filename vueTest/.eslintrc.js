// https://eslint.org/docs/user-guide/configuring

/**规则ID设置
  'off'或0——关闭规则
  'warn'或1——开启规则，使用警告级别的错误：warn（不会导致程序退出）
  'error'或2——开启规则，使用错误级别的错误：error（当被触发的时候，程序会退出）
  **/
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
  ],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'no-mixed-spaces-and-tabs': 2,
    'space-before-blocks': [2, 'always'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
