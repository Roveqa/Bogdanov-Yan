import { NavLink } from 'react-router-dom'

import { navigationRoutes } from '@content/site/navigation'

const stats = [
  {
    label: 'Goal',
    text: 'The client was launching a new accessories brand and needed a landing page for the first drop — to present the product and give the brand a home online alongside its social media.',
  },
  {
    label: 'Tasks',
    text: 'Transfer the finished Figma layout to Tilda accurately. Develop a mobile version from scratch — no mobile design existed, adaptive layout was built independently based on the desktop.',
  },
  {
    label: 'Problems',
    text: 'No mobile design was provided, so all adaptive decisions had to be made independently — maintaining the visual logic of the original while making it work across screen sizes.',
  },
] as const

export function OysterCaseStudy() {
  return (
    <div className="case-study">
      <div className="case-study__intro">
        <p className="case-study__title">ОИСТЕР</p>

        <div className="case-study__intro-panel">
          <div className="case-study__intro-block">
            <p className="case-study__label">Information</p>
            <p className="case-study__text">
              Oister — landing page for a young Russian accessories brand built around seasonal
              drops. Built on Tilda from a finished Figma layout, with custom CSS and JS where the
              platform&apos;s native blocks fell short.
            </p>
          </div>

          <div className="case-study__intro-links">
            <span className="case-study__link">Website</span>
            <span className="case-study__link">Designer</span>
          </div>
        </div>
      </div>

      <div className="case-study__body">
        <img
          alt=""
          className="case-study__section-image"
          loading="lazy"
          src="/case-studies/oyster/images/hero.png"
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
        <NavLink className="case-study__next-link" to={navigationRoutes.works}>
          Next Case →
        </NavLink>
      </div>
    </div>
  )
}
