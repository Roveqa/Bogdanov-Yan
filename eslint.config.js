import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'

const ignores = [
  'dist/**',
  'docs/**',
  'eslint.config.js',
  'node_modules/**',
  '.stylelintrc.cjs',
  'vite.config.js',
  'vite.config.d.ts',
]

const longRelativeImportsRule = [
  'error',
  {
    patterns: [
      {
        group: ['../../*', '../../../*', '../../../../*', '../../../../../*'],
        message:
          'Prefer absolute imports and public APIs over long relative traversals.',
      },
    ],
  },
]

const layerBoundaries = [
  {
    files: ['src/pages/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@app/*'],
              message: 'Pages must not depend on the app layer.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/widgets/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@app/*', '@pages/*'],
              message:
                'Widgets may depend only on features, entities, shared, content, and infrastructure.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/features/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@app/*', '@pages/*', '@widgets/*'],
              message: 'Features must not import app, pages, or widgets.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/entities/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@app/*', '@pages/*', '@widgets/*', '@features/*'],
              message:
                'Entities may depend only on shared, content, and infrastructure.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/shared/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@app/*', '@pages/*', '@widgets/*', '@features/*', '@entities/*'],
              message: 'Shared must stay independent from higher business layers.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/themes/**/*.{ts,tsx}', 'src/seo/**/*.{ts,tsx}', 'src/transitions/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@pages/*', '@widgets/*', '@features/*', '@entities/*'],
              message:
                'Infrastructure layers must not depend on business UI layers.',
            },
          ],
        },
      ],
    },
  },
]

export default tseslint.config(
  {
    ignores,
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    files: ['**/*.{js,cjs,mjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/no-confusing-void-expression': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      'no-restricted-imports': longRelativeImportsRule,
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react$', '^react-dom$', '^react-router-dom$'],
            ['^@?\\w'],
            ['^@(app|pages|widgets|features|entities|shared|content|themes|seo|transitions)(/.*|$)'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.s?css$', '^.+\\.sass$'],
          ],
        },
      ],
    },
  },
  ...layerBoundaries,
)
