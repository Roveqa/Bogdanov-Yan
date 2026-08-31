import { NavLink } from 'react-router-dom'

import { navigationRoutes } from '@content/site/navigation'

import './NotFoundPage.sass'

export function NotFoundPage() {
  return (
    <div className="not-found-page">
      <p className="not-found-page__code">404</p>

      <NavLink className="not-found-page__link" to={navigationRoutes.home}>
        Back home →
      </NavLink>
    </div>
  )
}
