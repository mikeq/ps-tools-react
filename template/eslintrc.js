const eslint = {
  env: {
    node: true,
    es2021: true,
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
    ecmaVersion: 2021,
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
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
  },
};

export { eslint };
