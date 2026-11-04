import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Search, Share2, Monitor, Palette, FileText, Target, Mail, Compass, BarChart2 } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import './Page.css'
import { SERVICES } from '../utils/constants'

const IconMap = { Search, Share2, Monitor, Palette, FileText, Target, Mail, Compass, BarChart2 }

const serviceDetails = {
  seo: ['On-page & technical SEO', 'Keyword research & strategy', 'Link building campaigns', 'Local SEO optimization', 'SEO audits & reporting'],
  'social-media': ['Platform strategy & management', 'Content creation & scheduling', 'Community management', 'Paid social campaigns', 'Influencer marketing'],
  'web-design': ['Custom website design', 'Landing page design', 'E-commerce development', 'CMS development', 'Website maintenance'],
  branding: ['Logo design & brand identity', 'Brand guidelines', 'Visual design system', 'Brand messaging', 'Rebranding services'],
  content: ['Blog & article writing', 'Video script writing', 'Infographic creation', 'Email newsletters', 'Content calendars'],
  ppc: ['Google Ads management', 'Meta (Facebook/Instagram) Ads', 'Display advertising', 'Remarketing campaigns', 'Conversion optimization'],
  email: ['Email campaign design', 'Marketing automation', 'List segmentation', 'A/B testing', 'Performance tracking'],
  strategy: ['Digital marketing audit', 'Competitor analysis', 'Custom growth roadmap', 'Channel strategy', 'KPI setting & tracking'],
  analytics: ['Google Analytics setup', 'Custom dashboards', 'Monthly performance reports', 'Conversion tracking', 'ROI measurement'],
}

function Reveal({ children, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <div ref={ref} className={`reveal ${inView ? 'reveal--in' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function Services() {
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Our Services – Spinnert Digital Marketing Agency Gurgaon</title>
        <meta name="description" content="Explore Spinnert's full range of digital marketing services: SEO, Social Media, PPC, Web Design, Branding, Content Marketing and more." />
      </Helmet>

      <section className="page-hero">
        <div className="orb orb-primary" style={{ width: 400, height: 400, top: '-100px', right: '0' }} />
        <div className="container">
          <Reveal>
            <div className="page-hero__content">
              <span className="section-tag">Our Services</span>
              <h1 className="page-hero__title">
                End-to-End <span className="gradient-text">Digital Marketing</span> Services
              </h1>
              <p className="page-hero__subtitle">
                From strategy to execution, we offer a complete suite of digital marketing services
                designed to grow your brand and drive measurable business results.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {SERVICES.map((service, i) => {
              const Icon = IconMap[service.icon]
              const features = serviceDetails[service.id] || []
              return (
                <Reveal key={service.id} delay={i * 60}>
                  <article className="service-detail-card">
                    <div className="service-detail-card__icon" style={{ background: service.color }}>
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

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="inner-cta">
              <h2>Not Sure Which Service You Need?</h2>
              <p>Talk to our digital marketing experts. We'll assess your business and recommend the right strategy.</p>
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
