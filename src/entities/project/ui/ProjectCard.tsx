import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import type { CSSProperties, ElementType } from 'react'

import type { Project } from '@entities/project/model/project.types'

import './ProjectCard.sass'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isMobile] = useState(() => window.innerWidth <= 768)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const {
    title,
    description,
    media,
    mobileMedia,
    overlayMedia,
    background,
    designWidth,
    designHeight,
    invertHeader,
    href,
    siteUrl,
    soon,
  } = project

  const activeMedia = isMobile && mobileMedia ? mobileMedia : media

  const Root: ElementType = href ? NavLink : siteUrl ? 'a' : 'div'
  const rootProps = href
    ? { to: href }
    : siteUrl
      ? { href: siteUrl, rel: 'noreferrer', target: '_blank' }
      : {}

  return (
    <Root className="project-card" {...rootProps}>
      <div
        className="project-card__media"
        data-header-invert={invertHeader ? 'true' : undefined}
        style={
          {
            '--card-w0': designWidth,
            '--card-h0': designHeight,
          } as CSSProperties
        }
      >
        <div
          className={
            isImageLoaded ? 'project-card__skeleton project-card__skeleton--hidden' : 'project-card__skeleton'
          }
        />

        <div className="project-card__zoom" style={{ background }}>
          <img
            ref={(node) => {
              if (node?.complete) {
                setIsImageLoaded(true)
              }
            }}
            alt={activeMedia.alt ?? ''}
            className={
              isImageLoaded ? 'project-card__image project-card__image--loaded' : 'project-card__image'
            }
            loading="lazy"
            src={activeMedia.src}
            onLoad={() => {
              setIsImageLoaded(true)
            }}
          />

          {overlayMedia ? (
            <img
              alt={overlayMedia.alt ?? ''}
              className="project-card__overlay"
              loading="lazy"
              src={overlayMedia.src}
            />
          ) : null}
        </div>

        {soon ? (
          <div className="project-card__hover-overlay">
            <span className="project-card__site-link project-card__site-link--plain">
              Soon
            </span>
          </div>
        ) : null}
      </div>

      <div className="project-card__caption">
        <span className="project-card__title">{title}</span>
        <span className="project-card__description">{description}</span>
      </div>
    </Root>
  )
}
