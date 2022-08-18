// const { defineConfig } = require('eslint-define-config')

// defineConfig({
//   root: true,
//   env: {
//     node: true,
//   },
//   extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended', '@vue/prettier/@typescript-eslint', '@vue/prettier'],
//   parserOptions: {
//     ecmaVersion: 2020,
//     parser: '@typescript-eslint/parser',
//   },
//   rules: {
//     'no-console': !isDev ? 'off' : 'off',
//     'no-debugger': !isDev ? 'off' : 'off',
//     '@typescript-eslint/no-unused-vars': ['off'],
//     'no-empty': 'off',
//     '@typescript-eslint/explicit-module-boundary-types': 'off',
//     'vue/multi-word-component-names': 'off',
//     // 'vue/html-self-closing': [
//     //   'error',
//     //   {
//     //     html: {
//     //       void: 'always',
//     //       normal: 'never',
//     //       component: 'always',
//     //     },
//     //     svg: 'always',
//     //     math: 'always',
//     //   },
//     // ],
//     '@typescript-eslint/no-empty-function': 'off',
//     '@typescript-eslint/no-this-alias': 'off',
//     'prettier/prettier': [
//       'error',
//       {
//         trailingComma: 'all',
//         arrowParens: 'avoid',
//         eslintIntegration: true,
//         singleQuote: true,
//         semi: false,
//         printWidth: 200,
//         wrapAttributes: false,
//         sortAttributes: false,
//         bracketSpacing: true,
//         tabWidth: 2,
//         endOfLine: 'auto',
//       },
//     ],
//   },
//   overrides: [
//     {
//       // enable the rule specifically for TypeScript files
//       files: ['*.ts', '*.tsx'],
//       rules: {
//         '@typescript-eslint/explicit-module-boundary-types': 'off',
//       },
//     },
//   ],
// })
