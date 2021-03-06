module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/no-unresolved': 0,
    'import/extensions': 'off',
    'class-methods-use-this': 'off',
    "@typescript-eslint/no-explicit-any": "off",
    semi: ["error", "never"],
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
};
