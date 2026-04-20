import { Typography } from 'antd'
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import type { Translations } from '../hooks/useTranslation'

const { Text } = Typography

interface FooterProps {
  t: Translations
}

export function Footer({ t }: FooterProps) {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-inner">
        <div className="footer-contact">
          <a
            href="https://github.com/espaker"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            <Github size={20} />
            <span>github.com/espaker</span>
          </a>
          <a
            href="https://www.linkedin.com/in/espaker/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
            <span>linkedin.com/in/espaker</span>
          </a>
          <a href="mailto:espaker@gmail.com" className="footer-link">
            <Mail size={20} />
            <span>espaker@gmail.com</span>
          </a>
          <a href="tel:48996465692" className="footer-link">
            <Phone size={20} />
            <span>(48) 9 9646-5692</span>
          </a>
          <span className="footer-link footer-location">
            <MapPin size={20} />
            <span>Palhoça - SC, BR</span>
          </span>
        </div>
        <Text className="footer-copyright">{t.footer.copyright}</Text>
      </div>
    </footer>
  )
}
