import { useTranslation } from 'react-i18next'

import './Footer.sass'

interface FooterProps {
  variant?: 'light' | 'dark'
}

export function Footer({ variant = 'light' }: FooterProps) {
  const { t } = useTranslation('common')

  return (
    <footer className={variant === 'dark' ? 'footer footer--dark' : 'footer'}>
      <p className="footer__text">{t('footer.rights')}</p>
    </footer>
  )
}
