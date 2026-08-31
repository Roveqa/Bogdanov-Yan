module.exports = {
  extends: ['stylelint-config-standard'],
  overrides: [
    {
      files: ['**/*.sass'],
      customSyntax: 'postcss-sass',
    },
  ],
  ignoreFiles: ['dist/**', 'node_modules/**'],
  rules: {
    'at-rule-empty-line-before': null,
    'alpha-value-notation': null,
    'color-function-notation': 'legacy',
    'color-hex-length': null,
    'comment-empty-line-before': null,
    'import-notation': null,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'selector-class-pattern':
      '^[a-z][a-z0-9]*(?:-[a-z0-9]+)*(?:__(?:[a-z0-9]+(?:-[a-z0-9]+)*))?(?:--(?:[a-z0-9]+(?:-[a-z0-9]+)*))?$',
    'selector-type-no-unknown': null,
  },
}
