import { useEffect, useRef, useState } from 'react'

import { Footer } from '@widgets/footer'

import './AboutPage.sass'

const introParagraphs = [
  "I'm a UI/UX designer who approaches interfaces as systems — I think through their structure, logic, and visual language to make sure a product feels intuitive and stays cohesive. I'm drawn to clean, minimalist design, free of unnecessary noise, but I love adding expressive details where they genuinely improve the experience and make a product memorable.",
  "Lately I've been focusing on design systems — building them from scratch: tokens, components, states, and the rules that keep things consistent and scalable. I try not to think only about the current screens, but about how the system will grow and adapt as the product evolves. I work with new ideas as well as existing products, from launching from zero to ongoing design support. What matters to me is that a system stays flexible, clear, and resilient as it grows.",
  "My approach blends visual design with logic. With a background in front-end development, I think not just about how an interface looks, but how it's built and how it behaves in real use. Outside of client work, I like inventing small ideas of my own and bringing them to life — it's a way for me to explore solutions freely, without a brief.",
  'I believe in clear processes, honest communication, and design that solves real problems — not just looks good.',
] as const

const freelanceListItems = [
  'landing pages for product and service launches',
  'adaptive interface design',
  'visual concepts and prototypes',
  'design presentations',
  'infographics',
  'work on the Tilda platform, as well as React/HTML/CSS layout',
  'direct communication with clients and involvement in briefings',
] as const

const experience = [
  {
    company: 'maryco',
    period: '2024 — Present',
    paragraphs: [
      'I joined the studio as a mid-level UI/UX designer and grew into the lead role, now shaping how design is done across the team as much as doing it myself. My work spans client websites and landing pages — from generating imagery and running UI/UX audits, to designing interfaces of varying complexity, building guidelines, and putting together presentations.',
      'I stay closely involved in design support after launch, and often code directly on Tilda to bridge the gap between the visual idea and its real implementation.',
    ],
    listItems: null,
    closingParagraph: null,
  },
  {
    company: 'Freelance',
    period: '2022 — Present',
    paragraphs: [
      "For the past few years I've worked as a freelance UX/UI designer, helping businesses and private clients launch and grow digital products. What I bring to freelance work is less about executing a brief line by line, and more about thinking through the product itself — asking the right questions early, shaping the concept, and making sure the design actually solves the problem behind the request.",
      'That mindset has shown up across a wide range of formats:',
    ],
    listItems: freelanceListItems,
    closingParagraph:
      'Freelancing pushed my flexibility and responsibility, and taught me to hold the full picture of a project — not just the screens, but the reasoning behind them.',
  },
] as const

const skillGroups = [
  {
    label: 'Technology stack',
    paragraphs: [
      'Figma, Photoshop, Midjourney, Tilda, Webflow, Framer, HTML, Sass, React, Claude, Codex, Cursor',
    ],
  },
  {
    label: 'Hard skills',
    paragraphs: [
      'I work in Figma — from UX to interfaces to design systems — building solutions that stay consistent and scalable. My current focus is design systems: tokens, components, states, and the logic behind how they interact. I think not just about individual screens, but about how the system will evolve within the product. I have a solid grasp of UX — hierarchy, grids, adaptability — and aim to build interfaces where visuals and logic work together.',
      "I also build projects in Tilda, Webflow, and Framer, handling both customization and code. I'm comfortable with HTML and CSS and have a working understanding of React, which helps me think about implementation from the design stage. From time to time I build small tools and Figma plugins to speed up workflows and explore ideas more freely.",
      "I care about details — spacing, rhythm, the small visual decisions that don't announce themselves but shape how a product actually feels to use.",
    ],
  },
  {
    label: 'Soft skills',
    paragraphs: [
      'Communication with developers, managers, and clients stays straightforward and collaborative, with an emphasis on shared understanding throughout the process.',
      "Currently working as lead designer — overseeing project execution, structuring workflows, and staying hands-on when needed. I'm also involved in shaping internal UI/UX methodology within the studio.",
      'I approach tasks in a structured way: planning early, asking the right questions upfront, and reducing uncertainty before execution begins. Feedback is treated as a practical tool — translated into concrete changes through discussion and refinement. I work calmly and systematically, and value processes that hold up under growth and complexity.',
    ],
  },
] as const

const vinylRecords = [
  {
    title: 'Joji — Piss in the Wind',
    cover: '/about/vinyl/joji-piss-in-the-wind.jpg',
  },
  {
    title: 'Tyler, The Creator — Chromakopia',
    cover: '/about/vinyl/tyler-chromakopia.jpg',
  },
  {
    title: 'Fred again — Actual Life (April 14 – December 17 2020)',
    cover: '/about/vinyl/fred-again-actual-life.jpg',
  },
  {
    title: 'ooes — Мои (твои) тёмные желания',
    cover: '/about/vinyl/ooes-dark-desires.jpg',
  },
  {
    title: 'Gorillaz — The Fall',
    cover: '/about/vinyl/gorillaz-the-fall.jpg',
  },
  {
    title: 'Radiohead — OK Computer',
    cover: '/about/vinyl/radiohead-ok-computer.jpg',
  },
  {
    title: 'Billie Eilish — dont smile at me',
    cover: '/about/vinyl/billie-eilish-dont-smile-at-me.jpg',
  },
  {
    title: 'Shirō Sagisu — Bleach Original Soundtrack vol 1-2',
    cover: '/about/vinyl/shiro-sagisu-bleach-vol-1-2.jpg',
  },
  {
    title: 'Skrillex — Quest for Fire',
    cover: '/about/vinyl/skrillex-quest-for-fire.jpg',
  },
  {
    title: 'Biicla — HYPER HOUSE',
    cover: '/about/vinyl/biicla-hyper-house.jpg',
  },
  {
    title: 'Tyler, The Creator — IGOR',
    cover: '/about/vinyl/tyler-igor.jpg',
  },
  {
    title: 'Twenty One Pilots — Blurryface',
    cover: '/about/vinyl/twenty-one-pilots-blurryface.jpg',
  },
] as const

function VinylTable() {
  const [hoveredVinylCover, setHoveredVinylCover] = useState<string | null>(null)

  return (
    <>
      <div className="about-page__dark-row">
        <div className="about-page__dark-copy">
          <p className="about-page__paragraph about-page__paragraph--light">
            It&rsquo;s a small collection of records that I&rsquo;m gradually building up.
            It&rsquo;s music for different moods—ranging from calm, atmospheric tracks to more
            energetic and rhythmic sounds.
          </p>
          <p className="about-page__paragraph about-page__paragraph--light">
            For me, vinyl isn&rsquo;t about quantity, but about the feeling and the process:
            choosing, listening, and revisiting records I already know.
          </p>
        </div>

        <ul className="about-page__list">
          {vinylRecords.map((record) => (
            <li
              key={record.title}
              className="about-page__list-item"
              onMouseEnter={() => setHoveredVinylCover(record.cover)}
              onMouseLeave={() => setHoveredVinylCover(null)}
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

export function AboutPage() {
  const skillsSectionRef = useRef<HTMLElement | null>(null)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const skillsSection = skillsSectionRef.current

    if (!skillsSection) {
      return
    }

    let frame = 0

    const earlyOffset = 250

    const update = () => {
      frame = 0
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
  }, [])

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
        <img alt="Yan Bogdanov" className="about-page__hero-image" src="/about/hero.jpg" />
      </div>

      <section className="about-page__row about-page__row--intro">
        <h1 className="about-page__heading">Yan Bogdanov</h1>

        <div className="about-page__row-content">
          <p className="about-page__row-label">Personal information</p>

          <div className="about-page__col">
            {introParagraphs.map((paragraph) => (
              <p key={paragraph} className="about-page__paragraph about-page__paragraph--intro">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <div className="about-page__portrait">
        <img alt="" className="about-page__portrait-image" src="/about/portrait.png" />
      </div>

      <section className="about-page__experience">
        <div className="about-page__experience-head">
          <div className="about-page__experience-head-meta">
            <span>Name</span>
            <span>Date</span>
          </div>
          <div className="about-page__experience-head-content">
            <span>Link</span>
          </div>
        </div>

        {experience.map((entry) => (
          <div key={entry.company} className="about-page__experience-entry">
            <div className="about-page__experience-divider" />

            <div className="about-page__experience-row">
              <div className="about-page__experience-meta">
                <p className="about-page__experience-company">{entry.company}</p>
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
        <h2 className="about-page__heading">Skills</h2>

        <div className="about-page__skills">
          {skillGroups.map((group) => (
            <div key={group.label} className="about-page__skill-group">
              <p className="about-page__row-label">{group.label}</p>
              {group.paragraphs.map((paragraph) => (
                <p key={paragraph} className="about-page__paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <div className="about-page__skill-group">
            <p className="about-page__row-label">CV</p>
            <a className="about-page__link" href="#">
              Download
            </a>
          </div>
        </div>
      </section>

      <div className="about-page__dark-spacer" data-header-invert="true" />

      <section className="about-page__dark" data-header-invert="true">
        <div className="about-page__dark-block">
          <div className="about-page__dark-head">
            <span className="about-page__dark-head-label">Vinyl</span>
            <div className="about-page__dark-head-right">
              <span>Name</span>
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
