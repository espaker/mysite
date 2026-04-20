import { useState } from 'react'
import { Button, Drawer } from 'antd'
import { Sun, Moon, Menu, X } from 'lucide-react'
import type { Translations, Locale } from '../hooks/useTranslation'
import type { ThemeMode } from '../types'

interface HeaderProps {
  t: Translations
  locale: Locale
  theme: ThemeMode
  onToggleTheme: () => void
  onToggleLocale: () => void
}

const NAV_LINKS = [
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'howILearn', href: '#how-i-learn' },
  { key: 'contact', href: '#contact' },
] as const

export function Header({ t, locale, theme, onToggleTheme, onToggleLocale }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const flag = locale === 'pt-BR' ? '🇺🇸' : '🇧🇷'
  const isDark = theme === 'dark'

  function handleNavClick(href: string) {
    setDrawerOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const navItems = NAV_LINKS.map((link) => (
    <a
      key={link.key}
      href={link.href}
      className="header-nav-link"
      onClick={(e) => {
        e.preventDefault()
        handleNavClick(link.href)
      }}
    >
      {t.nav[link.key]}
    </a>
  ))

  return (
    <header className={`site-header ${isDark ? 'dark' : 'light'}`}>
      <div className="header-inner">
        <a
          href="#hero"
          className="header-logo"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#hero')
          }}
        >
          <img
            src={isDark ? './favDark.svg' : './favLight.svg'}
            alt="EK logo"
            className="header-logo-img"
          />
          Espaker
        </a>

        {/* Desktop nav */}
        <nav className="header-nav desktop-nav">
          {navItems}
          <Button
            type="text"
            icon={isDark ? <Sun size={18} /> : <Moon size={18} />}
            onClick={onToggleTheme}
            className="header-icon-btn"
            aria-label="Toggle theme"
          />
          <Button
            type="text"
            onClick={onToggleLocale}
            className="header-icon-btn header-flag-btn"
            aria-label="Toggle language"
          >
            <span style={{ fontSize: 20 }}>{flag}</span>
          </Button>
        </nav>

        {/* Mobile controls */}
        <div className="mobile-controls">
          <Button
            type="text"
            icon={isDark ? <Sun size={18} /> : <Moon size={18} />}
            onClick={onToggleTheme}
            className="header-icon-btn"
            aria-label="Toggle theme"
          />
          <Button
            type="text"
            onClick={onToggleLocale}
            className="header-icon-btn header-flag-btn"
            aria-label="Toggle language"
          >
            <span style={{ fontSize: 20 }}>{flag}</span>
          </Button>
          <Button
            type="text"
            icon={<Menu size={22} />}
            onClick={() => setDrawerOpen(true)}
            className="header-icon-btn"
            aria-label="Open menu"
          />
        </div>
      </div>

      {/* Mobile drawer */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        placement="right"
        width={240}
        closeIcon={<X size={20} />}
        styles={{ body: { padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: 8 } }}
        title="Menu"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.key}
            href={link.href}
            className="drawer-nav-link"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick(link.href)
            }}
          >
            {t.nav[link.key]}
          </a>
        ))}
      </Drawer>
    </header>
  )
}
