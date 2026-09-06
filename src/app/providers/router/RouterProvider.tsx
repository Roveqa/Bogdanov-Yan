import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { BaseLayout } from '@app/layouts/base-layout'
import { routePaths } from '@app/routing/config/route-paths'
import { AboutPage } from '@pages/about'
import { CaseStudyPage } from '@pages/case-study'
import { HomePage } from '@pages/home'
import { NotFoundPage } from '@pages/not-found'
import { WorksPage } from '@pages/works'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined

export function AppRouter() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path={routePaths.home} element={<HomePage />} />
          <Route path={routePaths.about} element={<AboutPage />} />
          <Route path={routePaths.works} element={<WorksPage />} />
          <Route path={routePaths.caseStudy} element={<CaseStudyPage />} />
          <Route path={routePaths.notFound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
