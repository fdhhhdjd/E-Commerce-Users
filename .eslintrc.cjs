module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'out/',
    '.tmp/',
    '.temp/',
    'public/',
    'coverage/',
    'vite.config.js',
    'commitlint.config.js'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
        moduleDirectory: ['node_modules', 'src/'] // Adjust if your source directory is different
      },
      alias: {
        map: [
          ['@', './src'] // Adjust the path as necessary
        ],
        extensions: ['.js', '.jsx', '.json']
      },
      react: {
        version: 'detect'
      }
    },
    react: {
      version: 'detect' // Automatically detect the React version
    }
  },

  plugins: [
    'react',
    'prettier',
    'react-hooks',
    'import',
    'prefer-arrow',
    'react-refresh',
    'import'
  ],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-confusing-arrow': 'off',
    'react/no-array-index-key': 'off',
    // 'jsx-a11y/no-static-element-interactions': 'off',
    // 'jsx-a11y/click-events-have-key-events': 'off',
    'object-curly-newline': 'off',
    'no-return-assign': 'off',
    'import/no-useless-path-segments': 'off',
    'react/function-component-definition': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'implicit-arrow-linebreak': 'off',
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    'no-template-curly-in-string': 'off',
    'import/extensions': 'off',
    'no-plusplus': 'off',
    'operator-linebreak': 'off',
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'import/no-cycle': 'off',
    'no-restricted-syntax': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',
    indent: 'off',
    'jsx-quotes': 'off',
    'function-paren-newline': 'off',
    'arrow-body-style': 'off',
    'import/no-self-import': 'off',
    'import/no-relative-packages': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/alt-text': 'off',
    'no-unreachable': 'off',
    'prettier/prettier': ['error'],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['./**']
      }
    ],
    'react/jsx-fragments': ['error', 'element'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],

    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'type'
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@**/*',
            group: 'internal',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc', // or 'desc'
          caseInsensitive: true
        }
      }
    ],
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error', 'time', 'timeEnd']
      }
    ],
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowBind: false,
        ignoreRefs: true
      }
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false
      }
    ],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ]
  },
  overrides: [
    {
      files: ['*.cjs', '*.mjs', '*.js', '*.jsx', '*.cts', '*.mts']
    }
  ]
};
