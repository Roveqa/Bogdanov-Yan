import { useLocation } from 'react-router-dom'

import { navigationRoutes } from '@content/site/navigation'
import { Footer } from '@widgets/footer'
import { Header } from '@widgets/header'
import { PageTransition } from '@widgets/page-transition'

import './BaseLayout.sass'

const caseStudySlugs = ['ecolos', 'rennu', 'oyster']

function hasFooter(pathname: string) {
  if (pathname === navigationRoutes.works) return true

  const caseStudyMatch = /^\/works\/([^/]+)$/.exec(pathname)
  if (caseStudyMatch) return caseStudySlugs.includes(caseStudyMatch[1])

  return false
}

export function BaseLayout() {
  const location = useLocation()

  return (
    <div className="base-layout">
      <Header />

      <main className="base-layout__main">
        <PageTransition />
      </main>

      {hasFooter(location.pathname) ? <Footer /> : null}
    </div>
  )
}
