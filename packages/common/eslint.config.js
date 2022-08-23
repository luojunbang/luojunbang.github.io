const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    'no-empty': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    // ts
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: false }],
    '@typescript-eslint/ban-ts-comment': ['off', { 'ts-ignore': false }],

    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        arrowParens: 'avoid',
        eslintIntegration: true,
        singleQuote: true,
        semi: false,
        printWidth: 200,
        wrapAttributes: false,
        sortAttributes: false,
        bracketSpacing: true,
        tabWidth: 2,
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
})
