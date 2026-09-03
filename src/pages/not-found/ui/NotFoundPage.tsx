import { NavLink } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { navigationRoutes } from '@content/site/navigation'

import './NotFoundPage.sass'

export function NotFoundPage() {
  const { t } = useTranslation('common')

  return (
    <div className="not-found-page">
      <p className="not-found-page__code">404</p>

      <NavLink className="not-found-page__link" to={navigationRoutes.home}>
        {t('notFound.backHome')}
      </NavLink>
    </div>
  )
}
