module.exports = {
  eslint: {
    env: {
      node: true,
      es6: true,
      jest: true,
      browser: true,
      commonjs: true,
    },
    extends: [
      'eslint:recommended',
      'react-app',
      'react-app/jest',
      'plugin:prettier/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: [
      'react',
      'react-hooks',
      'jsx-a11y',
      'flowtype',
      'import',
      'testing-library',
      'jest',
      'prettier',
    ],
    rules: {
      'no-console': 'error',
    },
  },
};
