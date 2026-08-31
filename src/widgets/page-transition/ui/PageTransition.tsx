import { useEffect, useState } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'

import './PageTransition.sass'

type Stage = 'enter' | 'exit'

export function PageTransition() {
  const location = useLocation()
  const outlet = useOutlet()

  const [displayPath, setDisplayPath] = useState(location.pathname)
  const [displayOutlet, setDisplayOutlet] = useState(outlet)
  const [stage, setStage] = useState<Stage>('enter')

  useEffect(() => {
    if (location.pathname !== displayPath) {
      setStage('exit')
    }
  }, [location.pathname, displayPath])

  const handleAnimationEnd = () => {
    if (stage !== 'exit') {
      return
    }

    window.scrollTo({ top: 0 })
    setDisplayPath(location.pathname)
    setDisplayOutlet(outlet)
    setStage('enter')
  }

  return (
    <div
      className={`page-transition page-transition--${stage}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {displayOutlet}
    </div>
  )
}
