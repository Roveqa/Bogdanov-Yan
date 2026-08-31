import { useParams } from 'react-router-dom'

import { NotFoundPage } from '@pages/not-found'

import { EcolosCaseStudy } from './EcolosCaseStudy'
import { OysterCaseStudy } from './OysterCaseStudy'
import { RennuCaseStudy } from './RennuCaseStudy'

import './CaseStudyPage.sass'

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()

  if (slug === 'rennu') {
    return <RennuCaseStudy />
  }

  if (slug === 'ecolos') {
    return <EcolosCaseStudy />
  }

  if (slug === 'oyster') {
    return <OysterCaseStudy />
  }

  return <NotFoundPage />
}
