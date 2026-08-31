import { useEffect } from 'react'

const STORAGE_PREFIX = 'scroll:'

export function ScrollRestoration() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const key = STORAGE_PREFIX + window.location.pathname

    let saved: string | null = null
    try {
      saved = sessionStorage.getItem(key)
    } catch {
      saved = null
    }

    if (saved) {
      const targetY = Number(saved)
      let attempts = 0

      const tryRestore = () => {
        attempts += 1
        window.scrollTo(0, targetY)

        const reached = Math.abs(window.scrollY - targetY) < 2
        if (!reached && attempts < 30) {
          window.requestAnimationFrame(tryRestore)
        }
      }

      window.requestAnimationFrame(tryRestore)
    }

    let frame = 0

    const persist = () => {
      frame = 0
      try {
        sessionStorage.setItem(key, String(window.scrollY))
      } catch {
        // sessionStorage unavailable (e.g. private mode) — nothing to persist
      }
    }

    const onScroll = () => {
      if (frame) {
        return
      }
      frame = window.requestAnimationFrame(persist)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pagehide', persist)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pagehide', persist)
      if (frame) {
        window.cancelAnimationFrame(frame)
      }
    }
  }, [])

  return null
}
