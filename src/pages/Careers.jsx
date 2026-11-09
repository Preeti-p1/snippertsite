import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, MapPin, Briefcase, Clock } from 'lucide-react'
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

const openings = [
  {
    title: 'SEO Specialist',
    type: 'Full Time',
    typeClass: 'full',
    location: 'Gurugram (Hybrid)',
    experience: '2–4 years',
    desc: 'We\'re looking for an SEO specialist with hands-on experience in on-page, off-page and technical SEO to help our clients rank higher on Google.',
  },
  {
    title: 'Social Media Manager',
    type: 'Full Time',
    typeClass: 'full',
    location: 'Gurugram (On-site)',
    experience: '2–3 years',
    desc: 'Manage social media accounts for multiple clients, create engaging content and run paid social media campaigns that drive real results.',
  },
  {
    title: 'PPC / Google Ads Specialist',
    type: 'Full Time',
    typeClass: 'full',
    location: 'Gurugram (Hybrid)',
    experience: '2–5 years',
    desc: 'Google Ads certified professional needed to manage and optimize PPC campaigns with a focus on maximizing ROI for our diverse client base.',
  },
  {
    title: 'Content Writer',
    type: 'Full Time',
    typeClass: 'full',
    location: 'Remote',
    experience: '1–3 years',
    desc: 'Create compelling, SEO-optimized content including blog posts, website copy, social media captions and email newsletters.',
  },
  {
    title: 'Graphic Designer',
    type: 'Full Time',
    typeClass: 'full',
    location: 'Gurugram (On-site)',
    experience: '2–4 years',
    desc: 'Design stunning visual assets for digital campaigns, social media, presentations, branding materials and website design.',
  },
   {
    title: 'Social Media Executive',
    type: 'Full Time',
    typeClass: 'full',
    location: 'Gurugram (On-site)',
    experience: '2–4 years',
    desc: 'Manages a brands online presence, creates content, and engages audiences across platforms like Instagram, Facebook, and LinkedIn.',
  },
  {
    title: 'Digital Marketing Intern',
    type: 'Internship',
    typeClass: 'intern',
    location: 'Gurugram (Hybrid)',
    experience: 'Fresher / 0–1 year',
    desc: 'Learn from the best! Join as an intern and get hands-on experience across SEO, social media, content and paid campaigns.',
  },
]

const perks = [
  { emoji: '💰', title: 'Competitive Salary', desc: 'Industry-leading compensation packages with performance bonuses.' },
  { emoji: '🚀', title: 'Career Growth', desc: 'Clear career progression paths and leadership opportunities.' },
  { emoji: '📚', title: 'Learning & Development', desc: 'Access to courses, certifications and industry conferences.' },
  { emoji: '🏠', title: 'Flexible Work', desc: 'Hybrid work options and flexible working hours.' },
  { emoji: '🎯', title: 'Impactful Work', desc: 'Work on real campaigns that drive measurable business results.' },
  { emoji: '🤝', title: 'Great Culture', desc: 'Collaborative, inclusive and energetic work environment.' },
]

export default function Careers() {
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Careers – Join the Spinnert Team | Digital Marketing Agency Gurugram</title>
        <meta name="description" content="Join Spinnert Digital Marketing Agency in Gurugram. We're hiring SEO specialists, social media managers, content writers and more." />
      </Helmet>

      <section className="page-hero">
        <div className="orb orb-primary" style={{ width: 400, height: 400, top: '-100px', left: '-100px' }} />
        <div className="container">
          <Reveal>
            <div className="page-hero__content">
              <span className="section-tag">Careers</span>
              <h1 className="page-hero__title">
                Grow Your Career at <span className="gradient-text">Spinnert</span>
              </h1>
              <p className="page-hero__subtitle">
                Join a passionate team of digital marketing experts and work on campaigns
                that make a real difference for businesses across India.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Perks */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="section-tag">Why Work Here</span>
              <h2 className="section-title">Perks & Benefits</h2>
            </div>
          </Reveal>
          <div className="grid-3">
            {perks.map((perk, i) => (
              <Reveal key={perk.title} delay={i * 80}>
                <div className="perk-card">
                  <div className="perk-card__emoji">{perk.emoji}</div>
                  <h3 className="perk-card__title">{perk.title}</h3>
                  <p className="perk-card__desc">{perk.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="section-tag">Open Positions</span>
              <h2 className="section-title">Current Openings</h2>
              <p className="section-subtitle">Don't see a perfect fit? Send your resume to <a href="mailto:careers@spinnert.in" style={{ color: 'var(--primary-light)' }}>careers@spinnert.in</a></p>
            </div>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {openings.map((job, i) => (
              <Reveal key={job.title} delay={i * 60}>
                <article className="job-card">
                  <div className="job-card__header">
                    <h3 className="job-card__title">{job.title}</h3>
                    <span className={`job-card__badge job-card__badge--${job.typeClass}`}>{job.type}</span>
                  </div>
                  <div className="job-card__meta">
                    <span><MapPin size={13} /> {job.location}</span>
                    <span><Briefcase size={13} /> {job.experience}</span>
                    <span><Clock size={13} /> {job.type}</span>
                  </div>
                  <p className="job-card__desc">{job.desc}</p>
                  <a
                    href={`mailto:careers@spinnert.in?subject=Application for ${job.title}`}
                    className="btn btn-outline btn-sm"
                  >
                    Apply Now <ArrowRight size={14} />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="inner-cta">
              <h2>Don't See Your Role?</h2>
              <p>We're always looking for talented people. Send your CV and we'll reach out when there's a match.</p>
              <a href="mailto:careers@spinnert.in" className="btn btn-primary btn-lg">
                Send Your Resume <ArrowRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
