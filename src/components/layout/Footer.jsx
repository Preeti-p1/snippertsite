import React from 'react'
import { Link } from 'react-router-dom'
import {
  Mail, Phone, MapPin,
  Facebook, Instagram, Linkedin, Twitter, Youtube
} from 'lucide-react'
import logoImg from '../../assets/LOGO-SPINNERT.jpg'
import './Footer.css'

const services = [
  { label: 'SEO Services', to: '/services' },
  { label: 'Social Media Marketing', to: '/services' },
  { label: 'Website Design', to: '/services' },
  { label: 'PPC / Google Ads', to: '/services' },
  { label: 'Content Marketing', to: '/services' },
  { label: 'Branding', to: '/services' },
  { label: 'Email Marketing', to: '/services' },
  { label: 'Analytics & Reporting', to: '/services' },
]

const company = [
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact Us', to: '/contact' },
]

const legal = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions' },
]

const socials = [
  { icon: <Facebook size={18} />, href: 'https://www.facebook.com/spinnertdigitalagency', label: 'Facebook' },
  { icon: <Instagram size={18} />, href: 'https://www.instagram.com/spinnert_digital_agency/', label: 'Instagram' },
  { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/company/spinnert-digital-marketing', label: 'LinkedIn' },
  { icon: <Twitter size={18} />, href: 'https://x.com/spinnertagency', label: 'Twitter' },
  { icon: <Youtube size={18} />, href: 'https://www.youtube.com/@SpinnertDigitalMarketing', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="Spinnert Digital Agency Home">
              <img
                src={logoImg}
                alt="Spinnert Digital Agency"
                className="footer__logo-img"
                width="140"
                height="40"
                loading="lazy"
              />
            </Link>
            <p className="footer__tagline">
              Transforming businesses through data-driven digital marketing. Your growth is our mission.
            </p>
            <div className="footer__contact-list">
              <a href="tel:+918376002929" className="footer__contact-item">
                <Phone size={15} />
                <span>+91 8376002929</span>
              </a>
              <a href="mailto:info@spinnert.in" className="footer__contact-item">
                <Mail size={15} />
                <span>info@spinnert.in</span>
              </a>
              <div className="footer__contact-item">
                <MapPin size={15} />
                <span>Gurugram, Haryana, India</span>
              </div>
            </div>
            <div className="footer__socials">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__col-list">
              {services.map(s => (
                <li key={s.label}>
                  <Link to={s.to} className="footer__col-link">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__col-list">
              {company.map(c => (
                <li key={c.label}>
                  <Link to={c.to} className="footer__col-link">{c.label}</Link>
                </li>
              ))}
            </ul>
            <h4 className="footer__col-title" style={{ marginTop: '28px' }}>Legal</h4>
            <ul className="footer__col-list">
              {legal.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="footer__col-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer__col">
            <h4 className="footer__col-title">Stay Updated</h4>
            <p className="footer__newsletter-text">
              Subscribe to get the latest digital marketing insights and tips.
            </p>
            <form
              className="footer__newsletter-form"
              onSubmit={e => e.preventDefault()}
              aria-label="Newsletter subscription"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="footer__newsletter-input"
                required
                aria-label="Email address"
              />
              <button type="submit" className="btn btn-primary btn-sm">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Spinnert Digital Agency. All rights reserved.</p>
          <p>Made with ❤️ in Gurugram, India</p>
        </div>
      </div>
    </footer>
  )
}
