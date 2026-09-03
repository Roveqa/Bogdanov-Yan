import { NavLink } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { withBase } from '@shared/lib/browser/asset-url'

import { CaseStudyImage } from './CaseStudyImage'

export function RennuCaseStudy() {
  const { t } = useTranslation('case-study')

  const stats = [
    { label: t('common.goal'), text: t('rennu.goal') },
    { label: t('common.tasks'), text: t('rennu.tasks') },
    { label: t('common.problems'), text: t('rennu.problems') },
  ]

  return (
    <div className="case-study">
      <div className="case-study__intro">
        <p className="case-study__title">Rennu</p>

        <div className="case-study__intro-panel">
          <div className="case-study__intro-block">
            <p className="case-study__label">{t('common.information')}</p>
            <p className="case-study__text">{t('rennu.description')}</p>
          </div>

          <div className="case-study__intro-links">
            <a
              className="case-study__link"
              href="https://rennu.vercel.app"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t('common.website')}
            </a>
            <a
              className="case-study__link"
              href="https://www.figma.com/community/plugin/1622956777688955263"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t('rennu.figmaPlugin')}
            </a>
          </div>
        </div>
      </div>

      <div className="case-study__body">
        <CaseStudyImage alt="" className="case-study__section-image" src={withBase('/case-studies/rennu/images/hero.png')} />

        <div className="case-study__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="case-study__stat">
              <p className="case-study__label">{stat.label}</p>
              <p className="case-study__text">{stat.text}</p>
            </div>
          ))}
        </div>

        <div className="case-study__section">
          <CaseStudyImage
            alt=""
            className="case-study__section-photo"
            src={withBase('/case-studies/rennu/images/texture-pink.png')}
          />
          <CaseStudyImage alt="Rennu" className="case-study__logo" src={withBase('/case-studies/rennu/images/logo-rennu.svg')} />
        </div>

        <CaseStudyImage
          alt=""
          className="case-study__section-image case-study__section-image--crop"
          src={withBase('/case-studies/rennu/images/laptop-export.jpg')}
        />
        <CaseStudyImage
          alt=""
          className="case-study__section-image"
          src={withBase('/case-studies/rennu/images/phones-group.png')}
        />

        <div className="case-study__split">
          <div className="case-study__split-panel">
            <CaseStudyImage alt="" className="case-study__split-photo" src={withBase('/case-studies/rennu/images/panel-phone-1.png')} />
          </div>
          <div className="case-study__split-panel">
            <CaseStudyImage alt="" className="case-study__split-photo" src={withBase('/case-studies/rennu/images/panel-select.png')} />
          </div>
        </div>

        <div className="case-study__split case-study__split--reverse-mobile">
          <div className="case-study__split-panel">
            <CaseStudyImage alt="" className="case-study__split-photo" src={withBase('/case-studies/rennu/images/panel-slider.png')} />
          </div>
          <div className="case-study__split-panel">
            <CaseStudyImage alt="" className="case-study__split-photo" src={withBase('/case-studies/rennu/images/panel-phone-2.png')} />
          </div>
        </div>

        <div className="case-study__swatches" data-header-invert="true">
          <video
            autoPlay
            className="case-study__swatches-video"
            loop
            muted
            playsInline
            src={withBase('/case-studies/rennu/images/swatches-video.webm')}
          />
        </div>

        <div className="case-study__section case-study__section--export" data-header-invert="true">
          <CaseStudyImage
            alt=""
            className="case-study__section-photo"
            src={withBase('/case-studies/rennu/images/texture-green.png')}
          />
          <CaseStudyImage alt={t('common.export')} className="case-study__component case-study__component--button-export" src={withBase('/case-studies/rennu/images/button-export.svg')} />
        </div>

        <div className="case-study__icons">
          <video
            autoPlay
            className="case-study__icons-video"
            loop
            muted
            playsInline
            src={withBase('/case-studies/rennu/images/icons-video.webm')}
          />
        </div>

        <div className="case-study__tagline" data-header-invert="true">
          <CaseStudyImage alt="" className="case-study__section-photo" src={withBase('/case-studies/rennu/images/tagline-monitor.png')} />
        </div>

        <div className="case-study__split">
          <div className="case-study__split-panel">
            <CaseStudyImage alt="" className="case-study__split-photo" src={withBase('/case-studies/rennu/images/panel-apply.png')} />
          </div>
          <div className="case-study__split-panel">
            <CaseStudyImage alt="" className="case-study__split-photo" src={withBase('/case-studies/rennu/images/panel-frame.png')} />
          </div>
        </div>

        <CaseStudyImage
          alt=""
          className="case-study__section-image"
          src={withBase('/case-studies/rennu/images/closing-laptop.png')}
        />
      </div>

      <div className="case-study__next">
        <NavLink className="case-study__next-link" to="/works/ecolos">
          {t('common.nextCase')}
        </NavLink>
      </div>
    </div>
  )
}
