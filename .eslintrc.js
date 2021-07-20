const eslint = {
  root: true,
  env: {
    node: true
  },
  extends: [
    // 检测vue的
    "eslint:recommended",
    "plugin:vue/recommended",
    '@vue/prettier'
    // ESlint标准的检测
    // "@vue/standard",
    // TypeScript的检测
    // "@vue/typescript/recommended"
  ],
  // off :代表关闭检测
  // warn : 视为一个警告
  // error: 视为一个错误
  rules: {
    'linebreak-style': ['off', 'windows'],
    // 'linebreak-style': ['error', 'unix'],
    "vue/html-indent": ["off", 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": [],
    }],
    //https://eslint.vuejs.org/rules/
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 10,
        multiline: {
          max: 8,
          allowFirstLine: true
        }
      }
    ],
    // <component />
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "any",
          component: "always"
        },
        svg: "always",
        math: "always"
      }
    ],
    "vue/singleline-html-element-content-newline": "off",
    "vue/no-parsing-error": [
      "error",
      { "invalid-first-character-of-tag-name": false }
    ],
    //不能在v-for里面使用
    "vue/no-use-v-if-with-v-for": "off",
    "vue/no-unused-components": "off",
    "vue/multiline-html-element-content-newline": [
      "error",
      {
        ignoreWhenEmpty: true,
        ignores: ["pre", "textarea"],
        allowEmptyLines: false
      }
    ],
    "vue/name-property-casing": ["warn", "PascalCase"],
    "vue/html-closing-bracket-newline": [
      "warn",
      {
        singleline: "never",
        multiline: "always"
      }
    ],
    "vue/order-in-components": ["error", {
      "order": [
        "el",
        "name",
        "parent",
        "functional",
        ["props", "propsData"],
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        "model",
        "fetch",
        "asyncData",
        "data",
        "computed",
        "LIFECYCLE_HOOKS",
        "watch",
        "methods",
        "head",
        ["template", "render"],
        "renderError"
      ]
    }],
    //属性顺序
    "vue/attributes-order": [
      "error",
      {
        order: [
          "DEFINITION",
          "LIST_RENDERING", //v-for item in items
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          "UNIQUE",
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT"
        ],
        alphabetical: false
      }
    ],
    "vue/no-side-effects-in-computed-properties": "warn",
    //https://eslint.bootcss.com/docs/rules/
    eqeqeq: "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "off",
    "no-extra-semi": "error",
    // 是否检测分号，是否需要分号
    semi: ["error", "never"],
    indent: ['off', 2, { //缩进风格
        'SwitchCase': 1
    }],
    complexity: ["error", 15], //限制圈复杂度
    "default-case": "off", //要求 switch 语句中有 default 分支
    "no-irregular-whitespace": "off",
    // 函数括号前后是否需要空格
    "space-before-function-paren": ["off", "always"],
    "no-redeclare": "off",
    "no-empty": "off",
    "no-undef": "off",
    // 是否检测引号，是单引号还会双引号
    quotes: ["error", "single"],//'' ``
    "no-case-declarations": "off",
    'prettier/prettier': ['error', {
      "eslintIntegration": true,
      "singleQuote": true,
      "semi": false,
      "printWidth": 200,
      "wrapAttributes": false,
      "sortAttributes": false,
      "bracketSpacing": true,
      "tabWidth": 2,
      "endOfLine" : "auto"
  }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
module.exports = eslint;
