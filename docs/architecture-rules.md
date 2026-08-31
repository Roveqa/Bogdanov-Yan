# Architecture Rules

## Layer order

Allowed dependency direction:

`app -> pages -> widgets -> features -> entities -> shared`

Additional content/infrastructure layers:

- `content` can be consumed by `pages`, `widgets`, `features`, `entities`, and `shared/lib`.
- `themes`, `seo`, and `transitions` act as infrastructure layers and should not depend on `pages`, `widgets`, `features`, or `entities`.

## Responsibilities

- `app`: application bootstrap, providers, routing, layout composition, global config.
- `pages`: route-level composition only.
- `widgets`: large page sections and composite UI blocks.
- `features`: user actions, interaction flows, and behavior units.
- `entities`: domain entities and their presentation primitives.
- `shared`: design system, utilities, hooks, infrastructure, assets, and cross-project primitives.

## Hard rules

- Do not place page-specific business composition inside `shared`.
- Do not place global tokens or mixins inside widget or feature folders.
- Do not let `entities` depend on `features` or `widgets`.
- Do not let `features` import from `pages`.
- Do not store translated copy inside components.
- Do not create separate technical pages for each case study when a content-driven route can scale better.

## Case study strategy

- Use one route-level page for case studies.
- Treat each case study as content plus domain mapping.
- Keep media, metadata, localized copy, and gallery structure separated.

## Design system strategy

- `src/shared/ui/kit` contains neutral primitives.
- Brand-specific compositions belong to `widgets` or `entities`.
- Visual consistency should come from tokens, semantic theme variables, and motion presets rather than ad hoc local values.
