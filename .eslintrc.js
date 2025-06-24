module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue'],
  rules: {
    // example custom rules
    'vue/multi-word-component-names': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'warn'
  },
}