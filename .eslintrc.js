module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['simple-import-sort'],
  env: {
    'jest/globals': true,
  },
  globals: {
    React: true,
    NodeJS: true,
  },
  ignorePatterns: ['**/coverage-ts/*', '**/coverage/*', '**/lcov-report/*'],
  rules: {
    'react/jsx-curly-brace-presence': [2, { props: 'never' }],
    'no-shadow': 'off',
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(warn|error|info|trace)$/]",
        message: 'Unexpected property on console object was called',
      },
    ],
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: '(useStyle)',
      },
    ],
    'react/jsx-sort-props': 2,
    'react/jsx-no-bind': 2,
    'react-native/no-unused-styles': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-single-element-style-arrays': 2,
    'react-native/sort-styles': [
      'error',
      'asc',
      {
        ignoreClassNames: false,
        ignoreStyleProperties: false,
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [],
      },
    ],
  },
};
