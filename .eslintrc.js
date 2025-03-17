module.exports = {
    env: {
      node: true,
      commonjs: true,
      es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],
    plugins: ['prettier'],
    parserOptions: {
      ecmaVersion: 'latest',
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'off',
      'node/no-unpublished-require': 'off',
      'node/no-unsupported-features/es-syntax': 'off',
    },
  };