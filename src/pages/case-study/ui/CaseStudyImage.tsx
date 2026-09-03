import { useState } from 'react'

interface CaseStudyImageProps {
  alt: string
  className: string
  src: string
}

export function CaseStudyImage({ alt, className, src }: CaseStudyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <img
      ref={(node) => {
        if (node?.complete) {
          setIsLoaded(true)
        }
      }}
      alt={alt}
      className={
        isLoaded ? `${className} case-study__img case-study__img--loaded` : `${className} case-study__img`
      }
      loading="lazy"
      src={src}
      onLoad={() => {
        setIsLoaded(true)
      }}
    />
  )
}
