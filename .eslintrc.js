module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@react-native-community',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    semi: 'off',
    'no-console': 'error',
    'no-undef': 'off',
    'no-unneeded-ternary': 'error',
    'no-nested-ternary': 'error',
    curly: 'error',
    'no-underscore-dangle': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var', 'case', 'default'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['return', 'export'],
      },
    ],
    'import/no-cycle': 'error',
    'import/named': 'off',
    'import/newline-after-import': 'error',
    'import/no-unresolved': 'off',
    'import/namespace': 'off',
    'import/no-named-as-default': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'react**',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@app/**',
            group: 'internal',
            position: 'before',
          },
        ],
        groups: [
          ['builtin', 'external'],
          ['sibling', 'object', 'type', 'internal', 'parent', 'index'],
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroupsExcludedImportTypes: [],
      },
    ],
    'react/jsx-newline': 'error',
    'react/jsx-no-bind': 'error',
  },
}
