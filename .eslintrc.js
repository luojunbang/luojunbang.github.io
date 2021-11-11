const isDev = process.env.NODE_ENV === 'development'


module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier/@typescript-eslint",
    "@vue/prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": !isDev ? "off" : "off",
    "no-debugger": !isDev ? "off" : "off",
    "@typescript-eslint/no-unused-vars": ["off"],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "none",
        arrowParens: "avoid",
        eslintIntegration: true,
        singleQuote: true,
        semi: false,
        printWidth: 200,
        wrapAttributes: false,
        sortAttributes: false,
        bracketSpacing: true,
        tabWidth: 2,
        endOfLine: "auto",
      },
    ],
  },
};
