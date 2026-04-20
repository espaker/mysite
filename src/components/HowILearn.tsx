import { useEffect, useRef } from 'react'
import { Typography } from 'antd'
import type { Translations } from '../hooks/useTranslation'

const { Title } = Typography

interface HowILearnProps {
  t: Translations
}

export function HowILearn({ t }: HowILearnProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible')
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-i-learn" ref={ref} className="section animate-on-scroll">
      <div className="section-inner">
        <Title level={2} className="section-title">
          {t.howILearn.title}
        </Title>
        <blockquote className="learn-quote">
          <p className="learn-quote-text">{t.howILearn.quote}</p>
        </blockquote>
      </div>
    </section>
  )
}
