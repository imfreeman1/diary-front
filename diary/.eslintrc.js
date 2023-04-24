module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'next', 'next/core-web-vitals'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'react/function-component-definition': [
      2,
      { namedComponents: ['arrow-function', 'function-declaration'] },
    ],
    'linebreak-style': 0,
    'no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-unresolved': 0,
    'import/extensions': ['off'],
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      'FunctionExpression',
      'WithStatement',
      "BinaryExpression[operator='in']",
    ],
  },
};
