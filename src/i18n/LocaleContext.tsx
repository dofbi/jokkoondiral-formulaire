'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { fr } from './dictionaries/fr'
import { en } from './dictionaries/en'

export type Locale = 'fr' | 'en'

const DICTIONARIES: Record<Locale, typeof fr> = { fr, en }
const STORAGE_KEY = 'jokko-locale'

function resolvePath(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key]
    }
    return undefined
  }, obj)
}

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  /** Typed dictionary for the current locale — prefer this for static paths (autocomplete + compile-time checks). */
  dict: typeof fr
  /** Dynamic dotted-path lookup (e.g. `errors.${code}`, `options.pays.${key}`) for cases where the path isn't known statically. */
  t: (path: string) => string
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fr')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'fr' || stored === 'en') {
      setLocaleState(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  const dict = DICTIONARIES[locale]
  const t = (path: string) => {
    const value = resolvePath(dict, path)
    return typeof value === 'string' ? value : path
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, dict, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider')
  return ctx
}
