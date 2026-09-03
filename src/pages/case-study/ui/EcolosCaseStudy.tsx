import { NavLink } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { withBase } from '@shared/lib/browser/asset-url'

import { CaseStudyImage } from './CaseStudyImage'

export function EcolosCaseStudy() {
  const { t } = useTranslation('case-study')

  const stats = [
    { label: t('common.goal'), text: t('ecolos.goal') },
    { label: t('common.tasks'), text: t('ecolos.tasks') },
    { label: t('common.problems'), text: t('ecolos.problems') },
  ]

  return (
    <div className="case-study">
      <div className="case-study__intro">
        <p className="case-study__title">Ecolos</p>

        <div className="case-study__intro-panel">
          <div className="case-study__intro-block">
            <p className="case-study__label">{t('common.information')}</p>
            <p className="case-study__text">{t('ecolos.description')}</p>
          </div>

          <div className="case-study__intro-links">
            <a
              className="case-study__link"
              href="https://los-kos.ru"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t('common.website')}
            </a>
          </div>
        </div>
      </div>

      <div className="case-study__body">
        <CaseStudyImage
          alt=""
          className="case-study__section-image"
          src={withBase('/case-studies/ecolos/images/hero-monitor.png')}
        />

        <div className="case-study__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="case-study__stat">
              <p className="case-study__label">{stat.label}</p>
              <p className="case-study__text">{stat.text}</p>
            </div>
          ))}
        </div>

        <CaseStudyImage
          alt=""
          className="case-study__section-image"
          src={withBase('/case-studies/ecolos/images/hardhat-closeup.png')}
        />

        <CaseStudyImage
          alt=""
          className="case-study__section-image"
          src={withBase('/case-studies/ecolos/images/objects-monitor.png')}
        />

        <video
          autoPlay
          className="case-study__section-video"
          loop
          muted
          playsInline
          src={withBase('/case-studies/ecolos/images/browser-scroll-video.mp4')}
        />

        <CaseStudyImage
          alt=""
          className="case-study__section-image"
          src={withBase('/case-studies/ecolos/images/stats-text.svg')}
        />

        <CaseStudyImage
          alt=""
          className="case-study__section-image"
          src={withBase('/case-studies/ecolos/images/services-cta.svg')}
        />

        <CaseStudyImage
          alt=""
          className="case-study__section-image"
          src={withBase('/case-studies/ecolos/images/form-cta.svg')}
        />

        <CaseStudyImage
          alt=""
          className="case-study__section-image"
          src={withBase('/case-studies/ecolos/images/form-worker.png')}
        />

        <CaseStudyImage
          alt=""
          className="case-study__section-image"
          src={withBase('/case-studies/ecolos/images/laptop-stats.png')}
        />

        <CaseStudyImage
          alt=""
          className="case-study__section-image"
          src={withBase('/case-studies/ecolos/images/case-cards.png')}
        />

        <video
          autoPlay
          className="case-study__section-video"
          loop
          muted
          playsInline
          src={withBase('/case-studies/ecolos/images/loader-icon-video.mp4')}
        />

        <CaseStudyImage
          alt=""
          className="case-study__section-image"
          src={withBase('/case-studies/ecolos/images/icons-row.svg')}
        />

        <video
          autoPlay
          className="case-study__section-video"
          loop
          muted
          playsInline
          src={withBase('/case-studies/ecolos/images/phone-scroll-video.mp4')}
        />

        <CaseStudyImage
          alt=""
          className="case-study__section-image"
          src={withBase('/case-studies/ecolos/images/services-grid.svg')}
        />

        <CaseStudyImage
          alt=""
          className="case-study__section-image"
          src={withBase('/case-studies/ecolos/images/partners.png')}
        />

        <CaseStudyImage
          alt=""
          className="case-study__section-image"
          src={withBase('/case-studies/ecolos/images/jacket-closeup.png')}
        />
      </div>

      <div className="case-study__next">
        <NavLink className="case-study__next-link" to="/works/oyster">
          {t('common.nextCase')}
        </NavLink>
      </div>
    </div>
  )
}
