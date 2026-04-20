import { useState } from 'react'
import { ptBR } from '../i18n/pt-BR'
import { enUS } from '../i18n/en-US'

export type Locale = 'pt-BR' | 'en-US'
export type Translations = typeof ptBR

const STORAGE_KEY = 'lang-preference'

function detectLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'pt-BR' || stored === 'en-US') return stored
  const lang = navigator.language
  return lang.startsWith('pt') ? 'pt-BR' : 'en-US'
}

const translations: Record<Locale, Translations> = {
  'pt-BR': ptBR,
  'en-US': enUS,
}

export function useTranslation() {
  const [locale, setLocale] = useState<Locale>(detectLocale)

  function toggleLocale() {
    const next: Locale = locale === 'pt-BR' ? 'en-US' : 'pt-BR'
    localStorage.setItem(STORAGE_KEY, next)
    setLocale(next)
  }

  return { t: translations[locale], locale, toggleLocale }
}
