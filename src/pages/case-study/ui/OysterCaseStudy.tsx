import { NavLink } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { withBase } from '@shared/lib/browser/asset-url'

import { CaseStudyImage } from './CaseStudyImage'

export function OysterCaseStudy() {
  const { t } = useTranslation('case-study')

  const stats = [
    { label: t('common.goal'), text: t('oyster.goal') },
    { label: t('common.tasks'), text: t('oyster.tasks') },
    { label: t('common.problems'), text: t('oyster.problems') },
  ]

  return (
    <div className="case-study">
      <div className="case-study__intro">
        <p className="case-study__title">ОИСТЕР</p>

        <div className="case-study__intro-panel">
          <div className="case-study__intro-block">
            <p className="case-study__label">{t('common.information')}</p>
            <p className="case-study__text">{t('oyster.description')}</p>
          </div>

          <div className="case-study__intro-links">
            <span className="case-study__link">{t('common.website')}</span>
            <span className="case-study__link">{t('oyster.designer')}</span>
          </div>
        </div>
      </div>

      <div className="case-study__body">
        <CaseStudyImage
          alt=""
          className="case-study__section-image"
          src={withBase('/case-studies/oyster/images/hero.png')}
        />

        <div className="case-study__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="case-study__stat">
              <p className="case-study__label">{stat.label}</p>
              <p className="case-study__text">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="case-study__next">
        <NavLink className="case-study__next-link" to="/works/rennu">
          {t('common.nextCase')}
        </NavLink>
      </div>
    </div>
  )
}
