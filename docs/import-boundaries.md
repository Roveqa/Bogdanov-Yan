# Import Boundaries

## Allowed imports by layer

- `app` -> `pages`, `widgets`, `features`, `entities`, `shared`, `content`, `themes`, `seo`, `transitions`
- `pages` -> `widgets`, `features`, `entities`, `shared`, `content`, `themes`, `seo`, `transitions`
- `widgets` -> `features`, `entities`, `shared`, `content`, `themes`, `seo`, `transitions`
- `features` -> `entities`, `shared`, `content`, `themes`, `seo`, `transitions`
- `entities` -> `shared`, `content`, `themes`, `seo`, `transitions`
- `shared` -> `shared` internal modules only

## Additional rules

- `themes` must not depend on `pages`, `widgets`, `features`, or `entities`
- `seo` must not depend on `pages`, `widgets`, `features`, or `entities`
- `transitions` must not depend on `pages`, `widgets`, `features`, or `entities`
- `content` should stay framework-agnostic and avoid importing from UI layers

## Public API rule

- Cross-slice imports should go through the destination slice `index.ts`
- Internal files inside a slice may use short relative imports when staying inside the same slice
- Long relative traversals across layers are forbidden
