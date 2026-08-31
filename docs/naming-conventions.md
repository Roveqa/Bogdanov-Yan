# Naming Conventions

## General

- Use `kebab-case` for folders.
- Use `PascalCase` for React component files.
- Use `camelCase` for utility files and function-oriented modules.
- Use `*.types.ts` for type-only modules.
- Use `*.constants.ts` for constants.
- Use `*.mapper.ts` for data mapping adapters.
- Use `index.ts` only as a public API file for the current folder.

## Styling

- Use only `.sass` indented syntax.
- Keep one main style file near each component or widget when local styling is needed.
- Put tokens only in `src/shared/styles/tokens`.
- Put reusable mixins only in `src/shared/styles/mixins`.
- Put theme-level variables only in `src/shared/styles/themes` and `src/themes`.

## Content

- Keep static copy in `src/content`.
- Keep locale files split by domain: `common`, `home`, `about`, `works`, `case-study`, `seo`.
- Keep each case study in its own folder with `en.json`, `ru.json`, `meta.json`, `gallery.json`.

## Imports

- Prefer absolute imports through aliases.
- Import only from another layer's public API when possible.
- Avoid deep imports across slices unless the dependency is explicitly shared infrastructure.
