import { useTranslation } from 'react-i18next'

import type { Project } from '@entities/project'
import { ProjectCard } from '@entities/project'
import { withBase } from '@shared/lib/browser/asset-url'

import './WorksGrid.sass'

const heroProjectsBase = [
  {
    slug: 'venstra',
    title: 'Venstra',
    media: { alt: 'Venstra', src: withBase('/works/venstra.png') },
    mobileMedia: { alt: 'Venstra', src: withBase('/works/mobile/venstra.png') },
    designWidth: 1710,
    designHeight: 800,
    siteUrl: 'https://venstra.vercel.app',
  },
] as const

const pairedProjectsBase = [
  {
    slug: 'axiom',
    title: 'Axiom',
    media: { alt: 'Axiom', src: withBase('/works/axiom.jpg') },
    mobileMedia: { alt: 'Axiom', src: withBase('/works/mobile/axiom.png') },
    designWidth: 854.5,
    designHeight: 800,
    soon: true,
  },
  {
    slug: 'ecolos',
    title: 'Ecolos',
    media: { alt: 'Ecolos', src: withBase('/works/ecolos.jpg') },
    mobileMedia: { alt: 'Ecolos', src: withBase('/works/mobile/ecolos.png') },
    designWidth: 854.5,
    designHeight: 540,
    href: '/works/ecolos',
  },
] as const

const closingProjectsBase = [
  {
    slug: 'oyster',
    title: 'ОИСТЕР',
    media: { alt: 'ОИСТЕР', src: withBase('/works/oyster.jpg') },
    mobileMedia: { alt: 'ОИСТЕР', src: withBase('/works/mobile/oyster.png') },
    designWidth: 854.5,
    designHeight: 540,
    href: '/works/oyster',
  },
  {
    slug: 'rennu',
    title: 'Rennu',
    media: { alt: 'Rennu', src: withBase('/works/rennu.png') },
    mobileMedia: { alt: 'Rennu', src: withBase('/works/mobile/rennu.png') },
    designWidth: 854.5,
    designHeight: 800,
    href: '/works/rennu',
  },
] as const

export function WorksGrid() {
  const { t } = useTranslation('works')

  const heroProjects: Project[] = heroProjectsBase.map((project) => ({
    ...project,
    description: t(`${project.slug}.description`),
  }))

  const pairedProjects: Project[] = pairedProjectsBase.map((project) => ({
    ...project,
    description: t(`${project.slug}.description`),
  }))

  const closingProjects: Project[] = closingProjectsBase.map((project) => ({
    ...project,
    description: t(`${project.slug}.description`),
  }))

  return (
    <div className="works-grid">
      {heroProjects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}

      <div className="works-grid__row">
        {pairedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="works-grid__row">
        {closingProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
