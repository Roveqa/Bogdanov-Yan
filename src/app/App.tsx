import { AppProviders } from '@app/providers'
import { AppRouter } from '@app/providers/router'
import { ScrollRestoration } from '@app/routing/ui/ScrollRestoration'

import '@app/styles/app.sass'

export function App() {
  return (
    <AppProviders>
      <ScrollRestoration />
      <AppRouter />
    </AppProviders>
  )
}
