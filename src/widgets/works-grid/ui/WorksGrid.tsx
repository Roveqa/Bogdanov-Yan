import type { Project } from '@entities/project'
import { ProjectCard } from '@entities/project'

import { withBase } from '@shared/lib/browser/asset-url'

import './WorksGrid.sass'

const heroProjects: Project[] = [
  {
    slug: 'venstra',
    title: 'Venstra',
    description: 'Design system, live in Figma and code',
    media: { alt: 'Venstra', src: withBase('/works/venstra.png') },
    designWidth: 1710,
    designHeight: 800,
    siteUrl: 'https://venstra.vercel.app',
  },
]

const pairedProjects: Project[] = [
  {
    slug: 'axiom',
    title: 'Axiom',
    description: 'Design system and website design',
    media: { alt: 'Axiom', src: withBase('/works/axiom.jpg') },
    designWidth: 854.5,
    designHeight: 800,
    soon: true,
  },
  {
    slug: 'ecolos',
    title: 'Ecolos',
    description: 'Landing for a wastewater treatment company’s cost-audit service',
    media: { alt: 'Ecolos', src: withBase('/works/ecolos.jpg') },
    designWidth: 854.5,
    designHeight: 540,
    href: '/works/ecolos',
  },
]

const closingProjects: Project[] = [
  {
    slug: 'oyster',
    title: 'ОИСТЕР',
    description: 'Rebuilt the design in Tilda with a full mobile adaptation',
    media: { alt: 'ОИСТЕР', src: withBase('/works/oyster.jpg') },
    designWidth: 854.5,
    designHeight: 540,
    href: '/works/oyster',
  },
  {
    slug: 'rennu',
    title: 'Rennu',
    description: 'Built a tool for generating gradients',
    media: { alt: 'Rennu', src: withBase('/works/rennu.png') },
    designWidth: 854.5,
    designHeight: 800,
    href: '/works/rennu',
  },
]

export function WorksGrid() {
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
