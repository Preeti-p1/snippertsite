import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Target, Eye, Heart, Users, Award, Globe, Zap } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import './Page.css'

function Reveal({ children, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <div ref={ref} className={`reveal ${inView ? 'reveal--in' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

const team = [
  { name: 'Arjun Malhotra', role: 'Founder & CEO', initials: 'AM', color: '#6C63FF', bio: 'Digital marketing veteran with 10+ years of experience driving growth for businesses across industries.' },
  { name: 'Priya Sharma', role: 'Head of SEO', initials: 'PS', color: '#3ECFCF', bio: 'SEO specialist who has helped 100+ websites achieve first-page rankings on Google.' },
  { name: 'Rahul Kumar', role: 'Creative Director', initials: 'RK', color: '#FF6B6B', bio: 'Award-winning designer crafting brand identities that resonate and convert.' },
  { name: 'Ankita Verma', role: 'Social Media Lead', initials: 'AV', color: '#FBBF24', bio: 'Social media strategist managing multi-million reach campaigns for top brands.' },
  { name: 'Vikash Tiwari', role: 'PPC Specialist', initials: 'VT', color: '#A78BFA', bio: 'Google Ads certified expert delivering 3x+ ROI for clients across verticals.' },
  { name: 'Sonia Kapoor', role: 'Content Strategist', initials: 'SK', color: '#34D399', bio: 'Content marketing expert creating high-impact strategies that drive organic growth.' },
]

const values = [
  { icon: <Target size={24} />, title: 'Results-Driven', desc: 'Every decision we make is driven by data and focused on delivering measurable outcomes.' },
  { icon: <Heart size={24} />, title: 'Client-First', desc: 'Your success is our success. We treat every client\'s business as if it were our own.' },
  { icon: <Eye size={24} />, title: 'Transparent', desc: 'Full transparency in reporting, strategy and pricing. No surprises, no hidden fees.' },
  { icon: <Zap size={24} />, title: 'Innovative', desc: 'We stay ahead of industry trends to apply the latest strategies for maximum impact.' },
]

export default function About() {
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>About Us – Spinnert Digital Marketing Agency Gurugram</title>
        <meta name="description" content="Learn about Spinnert Digital Marketing Agency – our story, mission, values and the passionate team behind your digital growth." />
      </Helmet>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="orb orb-primary" style={{ width: 400, height: 400, top: '-100px', left: '-100px' }} />
        <div className="orb orb-secondary" style={{ width: 300, height: 300, bottom: 0, right: 0 }} />
        <div className="container">
          <Reveal>
            <div className="page-hero__content">
              <span className="section-tag">About Us</span>
              <h1 className="page-hero__title">
                We're Your <span className="gradient-text">Digital Growth</span> Partner
              </h1>
              <p className="page-hero__subtitle">
                Spinnert is a dynamic digital marketing agency in Gurgaon committed to helping businesses
                establish a powerful online presence and achieve sustainable growth.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story section */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <Reveal>
              <div className="about-story__content">
                <span className="section-tag">Our Story</span>
                <h2 className="section-title" style={{ textAlign: 'left', background: 'none', WebkitTextFillColor: 'var(--text-primary)' }}>
                  Built on a Passion for Digital Excellence
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>
                  Spinnert was founded with a single goal: to help businesses thrive in the digital world.
                  We recognized that many businesses struggled to navigate the rapidly evolving digital landscape,
                  and we set out to be their trusted guide.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>
                  Based in Gurgaon — India's technology and business hub — we have grown into a full-service
                  digital marketing agency with a track record of delivering exceptional results. Our team
                  combines deep expertise with creative thinking to craft strategies that work.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 32 }}>
                  We understand that every business is unique and requires a personalized approach.
                  That's why we work closely with each client to develop customized digital marketing strategies
                  that align with their specific goals and objectives.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Work With Us <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="about-story__visual">
                <div className="about-story__grid">
                  {[
                    { label: '200+', sub: 'Happy Clients' },
                    { label: '500+', sub: 'Projects Done' },
                    { label: '15+', sub: 'Years Experience' },
                    { label: '98%', sub: 'Retention Rate' },
                  ].map(s => (
                    <div key={s.label} className="about-story__stat">
                      <strong>{s.label}</strong>
                      <span>{s.sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="mv-grid">
            {[
              {
                icon: <Target size={28} />,
                label: 'Our Mission',
                text: 'To empower businesses of all sizes with world-class digital marketing solutions that drive real, measurable growth. We aim to be the most trusted digital partner for businesses in Gurgaon and beyond.',
              },
              {
                icon: <Eye size={28} />,
                label: 'Our Vision',
                text: 'To be India\'s most results-driven digital marketing agency — known for innovation, transparency and delivering exceptional value to every client we serve.',
              },
            ].map((mv, i) => (
              <Reveal key={mv.label} delay={i * 100}>
                <div className="mv-card">
                  <div className="mv-card__icon">{mv.icon}</div>
                  <h3 className="mv-card__label">{mv.label}</h3>
                  <p className="mv-card__text">{mv.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="section-tag">Our Values</span>
              <h2 className="section-title">What We Stand For</h2>
            </div>
          </Reveal>
          <div className="grid-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="value-card">
                  <div className="value-card__icon">{v.icon}</div>
                  <h3 className="value-card__title">{v.title}</h3>
                  <p className="value-card__desc">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="section-tag">Our Team</span>
              <h2 className="section-title">Meet the Experts</h2>
              <p className="section-subtitle">A passionate team of digital marketing professionals dedicated to your growth.</p>
            </div>
          </Reveal>
          <div className="grid-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 80}>
                <article className="team-card">
                  <div className="team-card__avatar" style={{ background: member.color }}>
                    {member.initials}
                  </div>
                  <h3 className="team-card__name">{member.name}</h3>
                  <div className="team-card__role">{member.role}</div>
                  <p className="team-card__bio">{member.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="inner-cta">
              <h2>Ready to Start Growing?</h2>
              <p>Let's build a winning digital strategy for your business.</p>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Free Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
