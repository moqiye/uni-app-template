/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-06-08 13:28:36
 * @LastEditTime: 2023-06-08 16:55:21
 */
// .eslintrc.js

module.exports = {
  root: true, // 停止向上查找父级目录中的配置文件
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    'prettier', // eslint-config-prettier 的缩写

    // 解决使用自动导入api报错
    './.eslintrc-auto-import.json',
  ],
  parser: 'vue-eslint-parser', // 指定要使用的解析器
  // 给解析器传入一些其他的配置参数
  parserOptions: {
    ecmaVersion: 'latest', // 支持的es版本
    parser: '@typescript-eslint/parser',
    sourceType: 'module', // 模块类型，默认为script，我们设置为module
  },
  plugins: ['vue', 'prettier'], // eslint-plugin- 可以省略
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'off',
  },
  globals: {
    uni: true,
  },
};
