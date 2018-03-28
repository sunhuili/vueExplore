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
    //以下为空格相关规则
    'no-irregular-whitespace': 2,//禁止无效或不规则的空白
    'no-mixed-spaces-and-tabs': 2,//禁止空格和tab的混合缩进
    'no-multi-spaces': 2,//禁止出现多个空格
    'no-regex-spaces': 2,//禁止正则表达式字面量中出现多个空格
    'no-spaced-func': 2,//调用函数时，函数名和括号之间不能有空格
    'no-trailing-spaces': 2,//禁用行尾空白
    'no-whitespace-before-property': 2,//禁止点号周围或对象属性之前的左括号前出现空白
    'space-before-blocks': [2, 'always'],//语句块前必须有空格
    'space-before-function-paren': [2, 'never'],//函数名和参数左括号间不允许有空格
    'space-in-parens': [2, 'never'],//小括号内不允许有空格（左括号右边和右括号左边）
    //以下为默认规则配置
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
