import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import {
  contactEmail,
  contactLinks,
  contactTimezone,
} from '@content/site/contacts'
import { navigationRoutes } from '@content/site/navigation'
import { useLocale } from '@shared/hooks'

import './Header.sass'

function getCurrentTime() {
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
    second: '2-digit',
    timeZone: contactTimezone.timeZone,
  }).format(new Date())
}

type OpenMenu = 'contact' | 'language' | null

const menuCloseDelay = 100

export function Header() {
  const { t } = useTranslation('common')
  const { currentLocale, setLocale } = useLocale()
  const location = useLocation()
  const headerRef = useRef<HTMLElement | null>(null)
  const closeTimeoutRef = useRef<number | null>(null)
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null)
  const [isInverted, setIsInverted] = useState(false)
  const [currentTime, setCurrentTime] = useState(getCurrentTime)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isContactOpen = openMenu === 'contact'
  const isLanguageOpen = openMenu === 'language'

  const openMenuNow = (menu: OpenMenu) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }

    setOpenMenu(menu)
  }

  const scheduleMenuClose = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpenMenu(null)
    }, menuCloseDelay)
  }

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(getCurrentTime())
    }, 1000)

    return () => {
      window.clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    const headerEl = headerRef.current

    if (!headerEl) {
      return
    }

    const intersecting = new Set<Element>()
    let observer: IntersectionObserver | null = null

    const setup = () => {
      observer?.disconnect()
      intersecting.clear()

      const zones = document.querySelectorAll('[data-header-invert]')

      if (zones.length === 0) {
        setIsInverted(false)
        return
      }

      const headerHeight = headerEl.offsetHeight

      const bottomInset = String(window.innerHeight - headerHeight)

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              intersecting.add(entry.target)
            } else {
              intersecting.delete(entry.target)
            }
          })

          setIsInverted(intersecting.size > 0)
        },
        {
          rootMargin: `0px 0px -${bottomInset}px 0px`,
          threshold: 0,
        },
      )

      zones.forEach((zone) => {
        observer?.observe(zone)
      })
    }

    setup()
    window.addEventListener('resize', setup)

    const mutationObserver = new MutationObserver(setup)

    mutationObserver.observe(document.body, {
      attributeFilter: ['data-header-invert'],
      childList: true,
      subtree: true,
    })

    return () => {
      window.removeEventListener('resize', setup)
      observer?.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  const alternateLocale = currentLocale === 'en' ? 'ru' : 'en'

  return (
    <>
      <header
        className={
          isInverted && !isMobileMenuOpen ? 'header header--invert' : 'header'
        }
        ref={headerRef}
      >
        <div className="header__inner">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'header__logo header__logo--active' : 'header__logo'
            }
            end
            to={navigationRoutes.home}
          >
            {t('header.logo')}
          </NavLink>

          <nav className="header__nav" aria-label="Primary">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'header__link header__link--active' : 'header__link'
              }
              to={navigationRoutes.about}
            >
              {t('header.about')}
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? 'header__link header__link--active' : 'header__link'
              }
              to={navigationRoutes.works}
            >
              {t('header.works')}
            </NavLink>

            <div
              className="header__item header__item--contact"
              onMouseEnter={() => {
                openMenuNow('contact')
              }}
              onMouseLeave={scheduleMenuClose}
            >
              <button className="header__trigger" type="button">
                {t('header.contact')}
              </button>

              <div
                className={
                  isContactOpen
                    ? 'header__contact-panel header__contact-panel--open'
                    : 'header__contact-panel'
                }
              >
                <div className="header__contact-column">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      className="header__contact-link"
                      href={link.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                <div className="header__contact-column">
                  <a className="header__contact-link" href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>
                </div>

                <div className="header__contact-column">
                  <div className="header__contact-time-row">
                    <span className="header__contact-time">{currentTime}</span>
                    <span className="header__contact-zone">{contactTimezone.label}</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="header__item header__item--language"
              onMouseEnter={() => {
                openMenuNow('language')
              }}
              onMouseLeave={scheduleMenuClose}
            >
              <button className="header__trigger" type="button">
                {currentLocale}
              </button>

              <div
                className={
                  isLanguageOpen
                    ? 'header__language-panel header__language-panel--open'
                    : 'header__language-panel'
                }
              >
                <button
                  className="header__language-option"
                  onClick={() => {
                    setLocale(alternateLocale)
                  }}
                  type="button"
                >
                  {alternateLocale}
                </button>
              </div>
            </div>
          </nav>

          <button
            aria-expanded={isMobileMenuOpen}
            className="header__mobile-trigger"
            onClick={() => {
              setIsMobileMenuOpen((open) => !open)
            }}
            type="button"
          >
            <span>{t('header.menu')}</span>
            <span
              aria-hidden="true"
              className={
                isMobileMenuOpen
                  ? 'header__mobile-icon header__mobile-icon--open'
                  : 'header__mobile-icon'
              }
            />
          </button>
        </div>
      </header>

      <div
        className={
          isContactOpen || isLanguageOpen ? 'header__overlay header__overlay--open' : 'header__overlay'
        }
      />

      <div
        className={
          isMobileMenuOpen ? 'header__mobile-panel header__mobile-panel--open' : 'header__mobile-panel'
        }
      >
        <nav aria-label="Mobile" className="header__mobile-nav">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'header__mobile-nav-link header__mobile-nav-link--active'
                : 'header__mobile-nav-link'
            }
            end
            to={navigationRoutes.home}
          >
            {t('header.home')}
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'header__mobile-nav-link header__mobile-nav-link--active'
                : 'header__mobile-nav-link'
            }
            to={navigationRoutes.about}
          >
            {t('header.about')}
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'header__mobile-nav-link header__mobile-nav-link--active'
                : 'header__mobile-nav-link'
            }
            to={navigationRoutes.works}
          >
            {t('header.works')}
          </NavLink>
        </nav>

        <div className="header__mobile-footer">
          <button
            className="header__mobile-lang"
            onClick={() => {
              setLocale(alternateLocale)
            }}
            type="button"
          >
            {currentLocale} / <span className="header__mobile-lang-alt">{alternateLocale}</span>
          </button>

          <div className="header__mobile-contacts">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                className="header__mobile-contact-link"
                href={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
            <a className="header__mobile-contact-link" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
