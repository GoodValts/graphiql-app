module.exports = {
  extends: 'next/core-web-vitals',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'comma-dangle': [
      'error',
      'only-multiline'
    ],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'no-console': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx'
        ]
      }
    ],
    'react/prefer-stateless-function': [
      0,
      {
        ignorePureComponents: true
      }
    ],
    'react/function-component-definition': [
      0
    ],
    'react/state-in-constructor': [
      2,
      'never'
    ],
    'class-methods-use-this': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'react/jsx-props-no-spreading': 'off',
    'consistent-return': 'off',
    'react/require-default-props': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': [
      'off',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.spec.js'
        ]
      }
    ]
  },
  ignorePatterns: [
    // 'tsconfig.json',
    // 'dist/',
    // 'coverage/',
    // 'module.d.ts',
    // 'vite.config.ts',
    // 'babel.config.js',
    // 'jest.config.js',
    // 'setupTest.ts',
    // '__mocks__/handlers.tsx',
    // '__mocks__/mswServer.tsx',
    // '__mocks__/imageMock.js',
    // 'next.config.js'
  ]
};