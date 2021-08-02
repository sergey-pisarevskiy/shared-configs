module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'plugin:ava/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
    ],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['ava'],
    rules: {
      '@typescript-eslint/no-use-before-define': 0,
      "@typescript-eslint/ban-ts-comment": "off",
      '@typescript-eslint/no-explicit-any': 0,
      "@typescript-eslint/explicit-module-boundary-types": "off",
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'index', 'parent', 'sibling'],
          alphabetize: { order: 'asc' },
        },
      ],
      'import/no-named-as-default-member': 0,
      'import/extensions': 0,
    },
  };
  