/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_', // 忽略以 `_` 开头的变量
        argsIgnorePattern: '^_', // 忽略以 `_` 开头的函数参数
        caughtErrorsIgnorePattern: '^_' // 忽略以 `_` 开头的捕获错误变量
      }
    ]
  }
}
