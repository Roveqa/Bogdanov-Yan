# Barrel Export Rules

## Purpose

Barrel files exist to make imports predictable, stable, and architecture-safe.

## Allowed usage

- Each slice may expose one `index.ts` as its public API.
- Consumers from other slices should import from that `index.ts`.
- A barrel may re-export components, types, constants, and model helpers that are intentionally public.

## Not allowed

- Do not re-export everything by default without curation.
- Do not create nested barrel chains across many folders.
- Do not import from another slice's internal `ui`, `model`, `lib`, or `hooks` folders.
- Do not use a root `src/index.ts` catch-all export file.

## By layer

- `app`: may export app-level providers, layouts, routing config, and bootstrap-facing modules.
- `pages`: export page entry components only.
- `widgets`: export widget entry components only.
- `features`: export user-facing feature entry APIs.
- `entities`: export entity-level public UI and model contracts.
- `shared`: export stable primitives and utilities that are broadly reusable.

## Good examples

- `import { HomePage } from '@pages/home'`
- `import { BaseLayout } from '@app/layouts/base-layout'`
- `import { Button } from '@shared/ui/kit/button'`

## Bad examples

- `import { HomePage } from '@pages/home/ui/HomePage'`
- `import { ProjectCard } from '../../entities/project/ui/ProjectCard'`
- `import { routePaths } from '@app/routing/config/route-paths'` from a lower layer unless that dependency is intentionally infrastructural
