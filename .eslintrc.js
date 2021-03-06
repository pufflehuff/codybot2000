module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'better-styled-components',
    'jest',
  ],
  rules: {
    'no-console': 0,
    'react/no-array-index-key': 0,
    'react/forbid-prop-types': [2, { forbid: ['any'] }],
    'react/jsx-boolean-value': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['Components', './client/src/components/'],
          ['Assets', './client/assets/'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
