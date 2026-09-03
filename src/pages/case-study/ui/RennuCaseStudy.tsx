import { NavLink } from 'react-router-dom'

import { withBase } from '@shared/lib/browser/asset-url'

import { CaseStudyImage } from './CaseStudyImage'

const stats = [
  {
    label: 'Goal',
    text: 'Most gradient tools produce clean, predictable results. Rennu was built for something different — gradients that carry mood, texture and a sense of place. The goal was to create a tool that feels as considered as the output it produces.',
  },
  {
    label: 'Tasks',
    text: 'Design and develop a web-based gradient generator from scratch. Build a Figma plugin with the same functionality. Create a design system, component library and visual identity for the product. Launch and distribute across design communities.',
  },
  {
    label: 'Problems',
    text: 'No reference existed — the tool had to be imagined before it could be built. The core challenge was translating a feeling into a controllable, exportable output.',
  },
] as const

export function RennuCaseStudy() {
  return (
    <div className="case-study">
      <div className="case-study__intro">
        <p className="case-study__title">Rennu</p>

        <div className="case-study__intro-panel">
          <div className="case-study__intro-block">
            <p className="case-study__label">Information</p>
            <p className="case-study__text">
              {
                'Rennu is a personal project — a free online generator of Japanese-inspired gradients. Atmospheric, noisy, alive. Built because nothing like it existed.'
              }
            </p>
          </div>

          <div className="case-study__intro-links">
            <a
              className="case-study__link"
              href="https://rennu.vercel.app"
              rel="noopener noreferrer"
              target="_blank"
            >
              Website
            </a>
            <a
              className="case-study__link"
              href="https://www.figma.com/community/plugin/1622956777688955263"
              rel="noopener noreferrer"
              target="_blank"
            >
              Figma Plugin
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
          <CaseStudyImage alt="Export" className="case-study__component case-study__component--button-export" src={withBase('/case-studies/rennu/images/button-export.svg')} />
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
          Next Case →
        </NavLink>
      </div>
    </div>
  )
}
