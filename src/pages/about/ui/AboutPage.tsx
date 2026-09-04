import { useEffect, useRef, useState } from 'react'

import { useTranslation } from 'react-i18next'

import { useLocale } from '@shared/hooks'
import { withBase } from '@shared/lib/browser/asset-url'
import { Footer } from '@widgets/footer'

import './AboutPage.sass'

const experienceConfig = [
  { slug: 'maryco', isLink: true, hasList: false, hasClosing: false },
  { slug: 'freelance', isLink: false, hasList: true, hasClosing: true },
] as const

const skillGroupSlugs = ['technologyStack', 'hardSkills', 'softSkills'] as const

const vinylRecords = [
  {
    title: 'AL-90 — Murmansk-60',
    cover: withBase('/about/vinyl/al-90-murmansk-60.jpg'),
  },
  {
    title: 'Joji — Piss in the Wind',
    cover: withBase('/about/vinyl/joji-piss-in-the-wind.jpg'),
  },
  {
    title: 'Tyler, The Creator — Chromakopia',
    cover: withBase('/about/vinyl/tyler-chromakopia.jpg'),
  },
  {
    title: 'Fred again — Actual Life (April 14 – December 17 2020)',
    cover: withBase('/about/vinyl/fred-again-actual-life.jpg'),
  },
  {
    title: 'ooes — Мои (твои) тёмные желания',
    cover: withBase('/about/vinyl/ooes-dark-desires.jpg'),
  },
  {
    title: 'Gorillaz — The Fall',
    cover: withBase('/about/vinyl/gorillaz-the-fall.jpg'),
  },
  {
    title: 'Radiohead — OK Computer',
    cover: withBase('/about/vinyl/radiohead-ok-computer.jpg'),
  },
  {
    title: 'Billie Eilish — dont smile at me',
    cover: withBase('/about/vinyl/billie-eilish-dont-smile-at-me.jpg'),
  },
  {
    title: 'Shirō Sagisu — Bleach Original Soundtrack vol 1-2',
    cover: withBase('/about/vinyl/shiro-sagisu-bleach-vol-1-2.jpg'),
  },
  {
    title: 'Skrillex — Quest for Fire',
    cover: withBase('/about/vinyl/skrillex-quest-for-fire.jpg'),
  },
  {
    title: 'Biicla — HYPER HOUSE',
    cover: withBase('/about/vinyl/biicla-hyper-house.jpg'),
  },
  {
    title: 'Tyler, The Creator — IGOR',
    cover: withBase('/about/vinyl/tyler-igor.jpg'),
  },
  {
    title: 'Twenty One Pilots — Blurryface',
    cover: withBase('/about/vinyl/twenty-one-pilots-blurryface.jpg'),
  },
] as const

function VinylTable() {
  const { t } = useTranslation('about')
  const [hoveredVinylCover, setHoveredVinylCover] = useState<string | null>(null)

  return (
    <>
      <div className="about-page__dark-row">
        <div className="about-page__dark-copy">
          <span className="about-page__dark-mobile-label">{t('vinyl.label')}</span>
          <p className="about-page__paragraph about-page__paragraph--light">
            {t('vinyl.paragraphs.0')}
          </p>
          <p className="about-page__paragraph about-page__paragraph--light">
            {t('vinyl.paragraphs.1')}
          </p>
        </div>

        <div className="about-page__dark-list-col">
          <span className="about-page__dark-mobile-label">{t('vinyl.nameLabel')}</span>

          <ul className="about-page__list">
            {vinylRecords.map((record) => (
              <li
                key={record.title}
                className="about-page__list-item"
                onMouseEnter={() => {
                  setHoveredVinylCover(record.cover)
                }}
                onMouseLeave={() => {
                  setHoveredVinylCover(null)
                }}
              >
                <span
                  className={
                    hoveredVinylCover && hoveredVinylCover !== record.cover
                      ? 'about-page__list-item-text about-page__list-item-text--dimmed'
                      : 'about-page__list-item-text'
                  }
                >
                  {record.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="about-page__vinyl-preview">
        {vinylRecords.map((record) => (
          <img
            key={record.cover}
            alt=""
            className={
              hoveredVinylCover === record.cover
                ? 'about-page__vinyl-preview-image about-page__vinyl-preview-image--visible'
                : 'about-page__vinyl-preview-image'
            }
            src={record.cover}
          />
        ))}
      </div>
    </>
  )
}

const heroImage = withBase('/about/hero.jpg')
const heroImageMobile = withBase('/about/mobile/hero.png')

export function AboutPage() {
  const { t } = useTranslation('about')
  const { currentLocale } = useLocale()
  const skillsSectionRef = useRef<HTMLElement | null>(null)
  const [isDark, setIsDark] = useState(false)
  const [isMobile] = useState(() => window.innerWidth <= 768)
  const cvHref = withBase(`/about/cv/yan-bogdanov-cv-${currentLocale}.pdf`)

  useEffect(() => {
    const skillsSection = skillsSectionRef.current

    if (!skillsSection) {
      return
    }

    let frame = 0

    const update = () => {
      frame = 0
      // Mobile flips earlier than desktop's original fixed offset so the
      // backdrop has already switched by the time the dark section could
      // scroll into view during a fast fling — otherwise the still-white
      // backdrop can briefly show through as dark content enters from the
      // bottom of the screen. Desktop is untouched from its original value.
      const earlyOffset = isMobile ? window.innerHeight / 2 - 30 : 250
      const skillsBottom = skillsSection.getBoundingClientRect().bottom + window.scrollY
      setIsDark(window.scrollY >= skillsBottom - earlyOffset)
    }

    const onScroll = () => {
      if (frame) {
        return
      }
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) {
        window.cancelAnimationFrame(frame)
      }
    }
  }, [isMobile])

  const introParagraphs = t('intro.paragraphs', { returnObjects: true }) as string[]

  const experience = experienceConfig.map((entry) => ({
    ...entry,
    company: t(`experience.${entry.slug}.name`),
    period: t(`experience.${entry.slug}.period`),
    paragraphs: t(`experience.${entry.slug}.paragraphs`, { returnObjects: true }) as string[],
    listItems: entry.hasList
      ? (t(`experience.${entry.slug}.listItems`, { returnObjects: true }) as string[])
      : null,
    closingParagraph: entry.hasClosing ? t(`experience.${entry.slug}.closingParagraph`) : null,
  }))

  const skillGroups = skillGroupSlugs.map((slug) => ({
    slug,
    label: t(`skills.${slug}.label`),
    paragraphs: t(`skills.${slug}.paragraphs`, { returnObjects: true }) as string[],
  }))

  return (
    <div className="about-page">
      <div
        className={
          isDark
            ? 'about-page__theme-backdrop about-page__theme-backdrop--dark'
            : 'about-page__theme-backdrop'
        }
      />

      <div className="about-page__hero" data-header-invert="true">
        <img
          alt={t('hero.alt')}
          className="about-page__hero-image"
          src={isMobile ? heroImageMobile : heroImage}
        />
      </div>

      <section className="about-page__row about-page__row--intro">
        <h1 className="about-page__heading">Yan Bogdanov</h1>

        <div className="about-page__row-content">
          <p className="about-page__row-label">{t('intro.personalInformation')}</p>

          <div className="about-page__col about-page__col--spaced">
            {introParagraphs.map((paragraph) => (
              <p key={paragraph} className="about-page__paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <div className="about-page__portrait">
        <img alt="" className="about-page__portrait-image" src={withBase('/about/portrait.png')} />
      </div>

      <section className="about-page__experience">
        <div className="about-page__experience-head">
          <div className="about-page__experience-head-meta">
            <span>{t('experience.headName')}</span>
            <span>{t('experience.headDate')}</span>
          </div>
          <div className="about-page__experience-head-content">
            <span>{t('experience.headDescription')}</span>
          </div>
        </div>

        {experience.map((entry) => (
          <div key={entry.slug} className="about-page__experience-entry">
            <div className="about-page__experience-divider" />

            <div className="about-page__experience-row">
              <div className="about-page__experience-meta">
                <p
                  className={
                    entry.isLink
                      ? 'about-page__experience-company about-page__experience-company--link'
                      : 'about-page__experience-company'
                  }
                >
                  {entry.company}
                </p>
                <p className="about-page__experience-period">{entry.period}</p>
              </div>

              <div className="about-page__col about-page__experience-content">
                {entry.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="about-page__paragraph">
                    {paragraph}
                  </p>
                ))}

                {entry.listItems ? (
                  <ul className="about-page__bullet-list">
                    {entry.listItems.map((item) => (
                      <li key={item} className="about-page__paragraph">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {entry.closingParagraph ? (
                  <p className="about-page__paragraph">{entry.closingParagraph}</p>
                ) : null}
              </div>
            </div>
          </div>
        ))}

        <div className="about-page__experience-divider" />
      </section>

      <section ref={skillsSectionRef} className="about-page__row about-page__row--skills">
        <h2 className="about-page__heading">{t('skills.heading')}</h2>

        <div className="about-page__skills">
          {skillGroups.map((group) => (
            <div key={group.slug} className="about-page__skill-group">
              <p className="about-page__row-label">{group.label}</p>
              <div className="about-page__col about-page__col--spaced">
                {group.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="about-page__paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="about-page__skill-group">
            <p className="about-page__row-label">{t('skills.cv.label')}</p>
            <a className="about-page__link" download href={cvHref}>
              {t('skills.cv.download')}
            </a>
          </div>
        </div>
      </section>

      <div className="about-page__dark-spacer" data-header-invert="true" />

      <section className="about-page__dark" data-header-invert="true">
        <div className="about-page__dark-block">
          <div className="about-page__dark-head">
            <span className="about-page__dark-head-label">{t('vinyl.label')}</span>
            <div className="about-page__dark-head-right">
              <span>{t('vinyl.nameLabel')}</span>
            </div>
          </div>
          <div className="about-page__dark-divider" />

          <VinylTable />
        </div>

        <Footer variant="dark" />
      </section>
    </div>
  )
}
