module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 允许赋值重新赋值给函数参数
    'no-param-reassign':'off',
    'no-shadow':'off',
    'eqeqeq':'off',
    'no-plusplus':'off',
    'quotes':'off',
    "no-unused-vars":[
      "error",
      {
        "vars":"local",
        "args":"none"
      }
    ],
    'import/extensions':'off',
    // 最多允许１个属性在一行
    "vue/max-attributes-per-line": ["error", {
      "singleline": 1,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/no-parsing-error":'off',
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "never",
        "component": "never"
      },
      "svg": "always",
      "math": "always"
    }],
    // 关闭－标签的闭合括号另一起一行检查
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
