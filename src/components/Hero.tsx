import { useEffect, useRef } from 'react'
import { Button, Typography, Avatar } from 'antd'
import { Github, Linkedin } from 'lucide-react'
import type { Translations } from '../hooks/useTranslation'

const { Title, Text } = Typography

interface HeroProps {
  t: Translations
}

export function Hero({ t }: HeroProps) {
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
    <section id="hero" ref={ref} className="section hero-section animate-on-scroll">
      <div className="hero-content">
        <Avatar
          src="./profile.png"
          size={140}
          className="hero-avatar"
          alt="Espaker Kaminski"
        />
        <Title className="hero-name">Espaker Kaminski</Title>
        <Title level={2} className="hero-role">
          {t.hero.role}
        </Title>
        <Text className="hero-subtitle">{t.hero.subtitle}</Text>
        <div className="hero-actions">
          <Button
            type="primary"
            size="large"
            onClick={() => {
              document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {t.hero.btnSkills}
          </Button>
          <Button
            size="large"
            icon={<Github size={18} />}
            href="https://github.com/espaker"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.hero.btnGitHub}
          </Button>
          <Button
            size="large"
            icon={<Linkedin size={18} />}
            href="https://www.linkedin.com/in/espaker/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.hero.btnLinkedIn}
          </Button>
        </div>
      </div>
    </section>
  )
}
