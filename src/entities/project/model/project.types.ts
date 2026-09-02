export interface ProjectMedia {
  src: string
  alt?: string
}

export interface Project {
  slug: string
  title: string
  description: string
  media: ProjectMedia
  mobileMedia?: ProjectMedia
  overlayMedia?: ProjectMedia
  background?: string
  designWidth: number
  designHeight: number
  invertHeader?: boolean
  href?: string
  siteUrl?: string
  soon?: boolean
}
