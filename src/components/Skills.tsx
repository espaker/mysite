import { useEffect, useRef } from 'react'
import { Card, Tag, Typography } from 'antd'
import { Code2, Server, Monitor, Database, Phone, Brain, Terminal, AppWindow, Wrench, Cpu } from 'lucide-react'
import type { Translations } from '../hooks/useTranslation'

const { Title } = Typography

interface SkillsProps {
  t: Translations
}

type CategoryKey =
  | 'languages'
  | 'backend'
  | 'frontend'
  | 'databases'
  | 'telecom'
  | 'ai'
  | 'devops'
  | 'linux'
  | 'desktop'
  | 'tooling'

const SKILL_DATA: { key: CategoryKey; icon: React.ReactNode; items: string[] }[] = [
  {
    key: 'languages',
    icon: <Code2 size={22} />,
    items: ['TypeScript', 'JavaScript', 'Python', 'PHP', 'Shell Script', 'SQL', 'QML'],
  },
  {
    key: 'backend',
    icon: <Server size={22} />,
    items: ['Node.js', 'Express', 'Flask', 'Socket.IO', 'JWT', 'Passport.js', 'Knex.js', 'Sequelize'],
  },
  {
    key: 'frontend',
    icon: <Monitor size={22} />,
    items: ['React 18', 'Vite', 'Ant Design', 'MUI', 'Redux', 'Zustand', 'React Query', 'ReactFlow'],
  },
  {
    key: 'databases',
    icon: <Database size={22} />,
    items: ['MySQL/MariaDB', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite'],
  },
  {
    key: 'telecom',
    icon: <Phone size={22} />,
    items: ['Asterisk', 'SIP/PJSIP', 'AMI', 'AGI', 'JsSIP', 'DTMF', 'CDR/CEL', 'ODBC'],
  },
  {
    key: 'ai',
    icon: <Brain size={22} />,
    items: ['OpenAI API', 'Whisper', 'Azure Cognitive Services', 'Baileys', 'Genesys Cloud', 'FFmpeg', 'Telegram Bot API'],
  },
  {
    key: 'devops',
    icon: <Terminal size={22} />,
    items: ['Docker', 'Nginx', 'Shell Script', 'Vercel', 'GitHub Releases'],
  },
  {
    key: 'linux',
    icon: <Cpu size={22} />,
    items: ['Fedora', 'Rocky Linux', 'RHEL', 'AlmaLinux', 'zsh', 'systemd', 'ssh', 'firewalld', 'SELinux', 'cron', 'rsync', 'tmux', 'journalctl'],
  },
  {
    key: 'desktop',
    icon: <AppWindow size={22} />,
    items: ['Electron', 'KDE Plasma 6', 'QML'],
  },
  {
    key: 'tooling',
    icon: <Wrench size={22} />,
    items: ['pnpm', 'ESLint', 'Prettier', 'Swagger/OpenAPI', 'AsyncAPI', 'pkg', 'nexe', 'electron-builder'],
  },
]

function useAnimateOnScroll() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible')
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

export function Skills({ t }: SkillsProps) {
  const ref = useAnimateOnScroll()

  return (
    <section id="skills" ref={ref} className="section animate-on-scroll">
      <div className="section-inner">
        <Title level={2} className="section-title">
          {t.skills.title}
        </Title>
        <div className="skills-grid">
          {SKILL_DATA.map(({ key, icon, items }) => (
            <Card
              key={key}
              className="skill-card"
              title={
                <span className="skill-card-title">
                  <span className="skill-card-icon">{icon}</span>
                  {t.skills.categories[key]}
                </span>
              }
            >
              <div className="skill-tags">
                {items.map((item) => (
                  <Tag key={item} className="skill-tag">
                    {item}
                  </Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
