import { useEffect } from 'react'
import { ConfigProvider, theme as antdTheme } from 'antd'
import { useTheme } from './hooks/useTheme'
import { useTranslation } from './hooks/useTranslation'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { HowILearn } from './components/HowILearn'
import { Footer } from './components/Footer'

export default function App() {
  const { theme, toggle: toggleTheme } = useTheme()
  const { t, locale, toggleLocale } = useTranslation()
  const isDark = theme === 'dark'

  useEffect(() => {
    const links = document.querySelectorAll<HTMLLinkElement>('link[rel="icon"]')
    links.forEach((link) => {
      const isForDark = link.href.includes('favDark')
      link.media = isForDark
        ? isDark ? 'all' : 'not all'
        : isDark ? 'not all' : 'all'
    })
  }, [isDark])

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: {
          fontFamily: "'Poppins', sans-serif",
          colorPrimary: '#6366f1',
        },
      }}
    >
      <div className={`app-root ${isDark ? 'dark' : 'light'}`}>
        <Header
          t={t}
          locale={locale}
          theme={theme}
          onToggleTheme={toggleTheme}
          onToggleLocale={toggleLocale}
        />
        <main>
          <Hero t={t} />
          <About t={t} />
          <Skills t={t} />
          <HowILearn t={t} />
        </main>
        <Footer t={t} />
      </div>
    </ConfigProvider>
  )
}
