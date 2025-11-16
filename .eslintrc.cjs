module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }]
  }
};
