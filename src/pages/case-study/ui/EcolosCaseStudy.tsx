import { NavLink } from 'react-router-dom'

import { withBase } from '@shared/lib/browser/asset-url'
import { navigationRoutes } from '@content/site/navigation'

const stats = [
  {
    label: 'Goal',
    text: 'The client needed a landing page as part of an advertising campaign that stood out in a niche where every competitor looks identical. The goal was to create a visual identity that feels as precise and reliable as the work the company delivers.',
  },
  {
    label: 'Tasks',
    text: 'Design a landing page from scratch. Develop concept, full layout, tablet and mobile adaptives. Transfer the final design to Tilda with custom code for forms and interactions.',
  },
  {
    label: 'Problems',
    text: 'No strong visual references existed in the water treatment niche. The core challenge was translating industrial precision into a modern digital product without losing the technical character of the brand.',
  },
] as const

export function EcolosCaseStudy() {
  return (
    <div className="case-study">
      <div className="case-study__intro">
        <p className="case-study__title">Ecolos</p>

        <div className="case-study__intro-panel">
          <div className="case-study__intro-block">
            <p className="case-study__label">Information</p>
            <p className="case-study__text">
              Ecolos — landing page for a water treatment company, focused on their cost audit
              service. Design and Tilda build from scratch, visual language developed alongside
              the layout — no brandbook existed. Clean and minimal: precise for an industrial
              niche, modern enough to stand apart.
            </p>
          </div>

          <div className="case-study__intro-links">
            <a
              className="case-study__link"
              href="https://los-kos.ru"
              rel="noopener noreferrer"
              target="_blank"
            >
              Website
            </a>
          </div>
        </div>
      </div>

      <div className="case-study__body">
        <img
          alt=""
          className="case-study__section-image"
          loading="lazy"
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

        <img
          alt=""
          className="case-study__section-image"
          loading="lazy"
          src={withBase('/case-studies/ecolos/images/hardhat-closeup.png')}
        />

        <img
          alt=""
          className="case-study__section-image"
          loading="lazy"
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

        <img
          alt=""
          className="case-study__section-image"
          loading="lazy"
          src={withBase('/case-studies/ecolos/images/stats-text.svg')}
        />

        <img
          alt=""
          className="case-study__section-image"
          loading="lazy"
          src={withBase('/case-studies/ecolos/images/services-cta.svg')}
        />

        <img
          alt=""
          className="case-study__section-image"
          loading="lazy"
          src={withBase('/case-studies/ecolos/images/form-cta.svg')}
        />

        <img
          alt=""
          className="case-study__section-image"
          loading="lazy"
          src={withBase('/case-studies/ecolos/images/form-worker.png')}
        />

        <img
          alt=""
          className="case-study__section-image"
          loading="lazy"
          src={withBase('/case-studies/ecolos/images/laptop-stats.png')}
        />

        <img
          alt=""
          className="case-study__section-image"
          loading="lazy"
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

        <img
          alt=""
          className="case-study__section-image"
          loading="lazy"
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

        <img
          alt=""
          className="case-study__section-image"
          loading="lazy"
          src={withBase('/case-studies/ecolos/images/services-grid.svg')}
        />

        <img
          alt=""
          className="case-study__section-image"
          loading="lazy"
          src={withBase('/case-studies/ecolos/images/partners.png')}
        />

        <img
          alt=""
          className="case-study__section-image"
          loading="lazy"
          src={withBase('/case-studies/ecolos/images/jacket-closeup.png')}
        />
      </div>

      <div className="case-study__next">
        <NavLink className="case-study__next-link" to={navigationRoutes.works}>
          Next Case →
        </NavLink>
      </div>
    </div>
  )
}
