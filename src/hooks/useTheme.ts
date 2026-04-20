import { useState, useEffect } from 'react'
import type { ThemeMode } from '../types'

const STORAGE_KEY = 'theme-preference'

function getSystemTheme(): ThemeMode {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
    return getSystemTheme()
  })

  const [manualOverride, setManualOverride] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEY) !== null
  })

  useEffect(() => {
    if (manualOverride) return

    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light')
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [manualOverride])

  function toggle() {
    const next: ThemeMode = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem(STORAGE_KEY, next)
    setManualOverride(true)
    setTheme(next)
  }

  return { theme, toggle }
}
