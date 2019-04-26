module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'plugin:compat/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  globals: {
    APP_TYPE: true,
    page: true,
  },
  rules: {
    'global-require': 0,
    'compat/compat': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    'func-names': 0,
    'no-plusplus': 0,
    'react/no-string-refs': 0,
    'react/no-access-state-in-setstate': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js',"jsx"] }],
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': [2, { ignore: ['^@/', '^umi/'] }],
    'import/no-extraneous-dependencies': [
      0,
      {
        optionalDependencies: true,
        devDependencies: ['**/tests/**.js', '/mock/**.js', '**/**.test.js'],
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'linebreak-style': 0,
    "react/jsx-indent-props": [0],
    "no-empty": [1],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "ignore"
    }],
    "no-unused-vars": "off",
    "quotes": [2, "single"], //单引号
  },
  settings: {
    polyfills: ['fetch', 'promises', 'url'],
  },
};