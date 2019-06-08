module.exports = {
  eslint: {
    env: {
      node: true,
      es6: true,
      jest: true,
      browser: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
      'plugin:jsx-a11y/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['react', 'jsx-a11y'],
    rules: {
      'no-console': 'warn',
    },
  },
};
