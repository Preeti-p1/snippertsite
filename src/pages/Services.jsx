import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  ArrowRight, CheckCircle,
  Search, Share2, Monitor, Palette, FileText, Target, Mail, Compass, BarChart2,
  Youtube, GraduationCap, MessageSquare, BadgeDollarSign, TrendingUp,
  Sparkles,
} from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import './Page.css'
import './Services.css'
import { SERVICES, NEW_SERVICES } from '../utils/constants'

// ─── Icon maps ────────────────────────────────────────────────────────────────
const IconMap = {
  Search, Share2, Monitor, Palette, FileText, Target, Mail, Compass, BarChart2,
  Youtube, GraduationCap, MessageSquare, BadgeDollarSign, TrendingUp,
}

// ─── Feature lists for legacy services ───────────────────────────────────────
const serviceDetails = {
  seo:          ['On-page & technical SEO', 'Keyword research & strategy', 'Link building campaigns', 'Local SEO optimization', 'SEO audits & reporting'],
  'social-media':['Platform strategy & management', 'Content creation & scheduling', 'Community management', 'Paid social campaigns', 'Influencer marketing'],
  'web-design': ['Custom website design', 'Landing page design', 'E-commerce development', 'CMS development', 'Website maintenance'],
  branding:     ['Logo design & brand identity', 'Brand guidelines', 'Visual design system', 'Brand messaging', 'Rebranding services'],
  content:      ['Blog & article writing', 'Video script writing', 'Infographic creation', 'Email newsletters', 'Content calendars'],
  ppc:          ['Google Ads management', 'Meta (Facebook/Instagram) Ads', 'Display advertising', 'Remarketing campaigns', 'Conversion optimization'],
  email:        ['Email campaign design', 'Marketing automation', 'List segmentation', 'A/B testing', 'Performance tracking'],
  strategy:     ['Digital marketing audit', 'Competitor analysis', 'Custom growth roadmap', 'Channel strategy', 'KPI setting & tracking'],
  analytics:    ['Google Analytics setup', 'Custom dashboards', 'Monthly performance reports', 'Conversion tracking', 'ROI measurement'],
}

// ─── Reveal wrapper ───────────────────────────────────────────────────────────
function Reveal({ children, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'reveal--in' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// ─── New Service Card ─────────────────────────────────────────────────────────
function NewServiceCard({ service, index }) {
  const Icon = IconMap[service.icon]
  const [hovered, setHovered] = useState(false)

  return (
    <Reveal delay={index * 100}>
      <article
        className="ns-card"
        style={{ '--ns-gradient': service.gradient, '--ns-color': service.color }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Glow blob */}
        <div className="ns-card__glow" aria-hidden="true" />

        {/* Badge */}
        <span className="ns-card__badge">
          <Sparkles size={11} /> {service.badge}
        </span>

        {/* Icon */}
        <div className="ns-card__icon">
          {Icon && <Icon size={28} />}
        </div>

        {/* Content */}
        <h3 className="ns-card__title">{service.title}</h3>
        <p className="ns-card__desc">{service.description}</p>

        {/* Feature list — slides in on hover via CSS */}
        <ul className={`ns-card__features ${hovered ? 'ns-card__features--visible' : ''}`}>
          {service.features.map(f => (
            <li key={f} className="ns-card__feature">
              <CheckCircle size={13} />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/contact" className="ns-card__btn">
          Learn More <ArrowRight size={14} />
        </Link>
      </article>
    </Reveal>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Services() {
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Our Services – Spinnert Digital Marketing Agency Gurgaon</title>
        <meta
          name="description"
          content="Explore Spinnert's full range of services: SEO, Social Media, PPC, Web Design, YouTube Management, School ERP, WhatsApp Messaging, Affiliate & Forex."
        />
      </Helmet>

      {/* ── Page Hero ─────────────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="orb orb-primary"  style={{ width: 400, height: 400, top: '-100px', right: '0' }} />
        <div className="orb orb-secondary" style={{ width: 300, height: 300, bottom: '-60px', left: '-60px' }} />
        <div className="container">
          <Reveal>
            <div className="page-hero__content">
              <span className="section-tag">Our Services</span>
              <h1 className="page-hero__title">
                End-to-End <span className="gradient-text">Digital &amp; Business</span> Services
              </h1>
              <p className="page-hero__subtitle">
                From performance marketing to ERP software and YouTube growth —
                we deliver comprehensive solutions that move your business forward.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── NEW SERVICES HIGHLIGHT ────────────────────────────────────────── */}
      <section className="section ns-section" id="new-services">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="section-tag ns-tag">
                <Sparkles size={13} /> Newly Added
              </span>
              <h2 className="section-title">Expanded Service Offerings</h2>
              <p className="section-subtitle">
                We've grown beyond digital marketing. Discover our latest high-impact
                services built for the modern business landscape.
              </p>
            </div>
          </Reveal>

          {/* 5-card grid: 3 top + 2 centered below */}
          <div className="ns-grid">
            {NEW_SERVICES.map((service, i) => (
              <NewServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────────── */}
      <div className="container">
        <Reveal>
          <div className="services-divider">
            <div className="services-divider__line" />
            <span className="services-divider__label">Core Digital Marketing Services</span>
            <div className="services-divider__line" />
          </div>
        </Reveal>
      </div>

      {/* ── EXISTING SERVICES ─────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '48px' }}>
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="section-tag">Digital Marketing</span>
              <h2 className="section-title">Performance-Driven Marketing Services</h2>
              <p className="section-subtitle">
                Tried-and-tested digital marketing services that consistently deliver
                traffic, leads and revenue growth for businesses across industries.
              </p>
            </div>
          </Reveal>

          <div className="grid-3">
            {SERVICES.map((service, i) => {
              const Icon = IconMap[service.icon]
              const features = serviceDetails[service.id] || []
              return (
                <Reveal key={service.id} delay={i * 60}>
                  <article
                    className="service-detail-card"
                    style={{ '--sdc-color': service.color }}
                  >
                    <div
                      className="service-detail-card__icon"
                      style={{ background: service.color }}
                    >
                      {Icon && <Icon size={24} />}
                    </div>
                    <h2 className="service-detail-card__title">{service.title}</h2>
                    <p className="service-detail-card__desc">{service.description}</p>
                    <ul className="service-detail-card__features">
                      {features.map(f => (
                        <li key={f} className="service-detail-card__feature">
                          <CheckCircle size={14} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn btn-outline btn-sm">
                      Get Started <ArrowRight size={14} />
                    </Link>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="inner-cta">
              <h2>Not Sure Which Service You Need?</h2>
              <p>Talk to our experts. We'll assess your business and recommend the right strategy — for free.</p>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get a Free Audit <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
