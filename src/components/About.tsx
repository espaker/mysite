import { useEffect, useRef } from 'react'
import { Typography } from 'antd'
import { getAge } from '../utils/age'
import type { Translations } from '../hooks/useTranslation'

const { Title, Paragraph } = Typography

interface AboutProps {
  t: Translations
}

export function About({ t }: AboutProps) {
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

  const aboutText = t.about.text.replace('{age}', String(getAge()))

  return (
    <section id="about" ref={ref} className="section animate-on-scroll">
      <div className="section-inner">
        <Title level={2} className="section-title">
          {t.about.title}
        </Title>
        <Paragraph className="about-text">{aboutText}</Paragraph>
      </div>
    </section>
  )
}
