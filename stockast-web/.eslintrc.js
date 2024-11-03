module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Prettier와 ESLint 규칙을 통합
  ],
  parser: '@typescript-eslint/parser', // TypeScript 파서를 사용하여 ESLint와 통합
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // JSX 구문 지원
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'warn', // Prettier 규칙 위반 시 경고 표시
    'react/react-in-jsx-scope': 'off', // React 17 이상에서는 import React 생략 가능
    '@typescript-eslint/no-unused-vars': ['warn'], // 사용되지 않는 변수 경고
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-require-imports': 0,
  },
  settings: {
    react: {
      version: 'detect', // React 버전을 자동으로 감지
    },
  },
};
