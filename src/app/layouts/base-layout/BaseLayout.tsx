import { useLocation } from 'react-router-dom'

import { navigationRoutes } from '@content/site/navigation'
import { Footer } from '@widgets/footer'
import { Header } from '@widgets/header'
import { PageTransition } from '@widgets/page-transition'

import './BaseLayout.sass'

const caseStudySlugs = ['ecolos', 'rennu', 'oyster']

function hasFooter(pathname: string) {
  // GitHub Pages 301-redirects extensionless paths to add a trailing
  // slash before falling back to 404.html, so a hard refresh or direct
  // link lands here with e.g. "/works/" instead of "/works" — normalize
  // before comparing.
  const normalized =
    pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname

  if (normalized === navigationRoutes.works) return true

  const caseStudyMatch = /^\/works\/([^/]+)$/.exec(normalized)
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
