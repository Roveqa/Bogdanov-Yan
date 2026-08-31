import './Footer.sass'

interface FooterProps {
  variant?: 'light' | 'dark'
}

export function Footer({ variant = 'light' }: FooterProps) {
  return (
    <footer className={variant === 'dark' ? 'footer footer--dark' : 'footer'}>
      <p className="footer__text">All rights reserved</p>
    </footer>
  )
}
