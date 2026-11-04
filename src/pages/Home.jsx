import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  ArrowRight, ChevronRight, Play, Search, Share2, Monitor,
  Palette, FileText, Target, Mail, Compass, BarChart2,
  CheckCircle, Star, TrendingUp, Users, Award, Zap, Globe,
  MessageCircle, Quote,
  Youtube, GraduationCap, MessageSquare, BadgeDollarSign,
} from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import './Home.css'
import { SERVICES, NEW_SERVICES } from '../utils/constants'

// ─── Icon map ──────────────────────────────────────────────────────────────
const IconMap = { Search, Share2, Monitor, Palette, FileText, Target, Mail, Compass, BarChart2, Youtube, GraduationCap, MessageSquare, BadgeDollarSign, TrendingUp }

// ─── Animated Counter ──────────────────────────────────────────────────────
function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

// ─── Reveal wrapper ─────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = '' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'reveal--in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// ─── Service Card ────────────────────────────────────────────────────────────
function ServiceCard({ service, delay }) {
  const Icon = IconMap[service.icon]
  return (
    <Reveal delay={delay}>
      <article className="service-card" style={{ '--service-color': service.color }}>
        <div className="service-card__icon">
          {Icon && <Icon size={24} />}
        </div>
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__desc">{service.description}</p>
        <Link to="/services" className="service-card__link">
          Learn More <ArrowRight size={14} />
        </Link>
      </article>
    </Reveal>
  )
}

// ─── Main Home Component ─────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="page-wrapper home-page">
      <Helmet>
        <title>Spinnert – #1 Digital Marketing Agency in Gurgaon</title>
        <meta name="description" content="Spinnert is a premium digital marketing agency in Gurgaon offering SEO, PPC, Social Media Marketing, Website Design, Branding and Content Marketing." />
      </Helmet>

      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <StatsSection />
      <ProcessSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactCTASection />
    </div>
  )
}

// ─── Hero Section ────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="hero" aria-label="Hero">
      {/* Background orbs */}
      <div className="orb orb-primary hero__orb-1" />
      <div className="orb orb-secondary hero__orb-2" />

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <Zap size={14} />
            <span>Gurgaon's Leading Digital Marketing Agency</span>
          </div>
          <h1 className="hero__title">
            Grow Your Business<br />
            with <span className="gradient-text">Data-Driven</span><br />
            Digital Marketing
          </h1>
          <p className="hero__subtitle">
            We help businesses of all sizes build a powerful online presence, attract quality leads,
            and achieve sustainable revenue growth through customized digital marketing strategies.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Free Consultation <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-secondary btn-lg">
              Our Services
            </Link>
          </div>
          <div className="hero__trust">
            <div className="hero__trust-avatars">
              {[1,2,3,4].map(i => (
                <div key={i} className="hero__avatar" style={{ background: `hsl(${i * 60 + 200}, 60%, 50%)` }}>
                  {['AR','MK','PS','VR'][i-1]}
                </div>
              ))}
            </div>
            <div className="hero__trust-text">
              <div className="hero__stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#FBBF24" color="#FBBF24" />)}
              </div>
              <span>Trusted by 200+ businesses</span>
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card-main animate-float">
            <div className="hero__card-inner">
              <div className="hero__card-header">
                <TrendingUp size={20} className="hero__card-icon" />
                <span>Growth Overview</span>
              </div>
              <div className="hero__chart">
                {[40, 65, 50, 80, 70, 90, 85].map((h, i) => (
                  <div key={i} className="hero__bar" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              <div className="hero__card-stats">
                <div>
                  <strong>+127%</strong>
                  <span>Organic Traffic</span>
                </div>
                <div>
                  <strong>3.8x</strong>
                  <span>ROI</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__card-floating hero__card-floating--1">
            <Users size={16} />
            <div>
              <strong>+45%</strong>
              <span>More Leads</span>
            </div>
          </div>
          <div className="hero__card-floating hero__card-floating--2">
            <Globe size={16} />
            <div>
              <strong>#1</strong>
              <span>Rankings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}

// ─── Trusted By ───────────────────────────────────────────────────────────────
function TrustedBySection() {
  const brands = ['TechCorp', 'BuildRight', 'UrbanStudio', 'FinPro', 'MediCare', 'EduSpark', 'RetailMax', 'GreenLeaf']
  return (
    <section className="trusted section-sm">
      <div className="container">
        <p className="trusted__label">Trusted by businesses across industries</p>
        <div className="trusted__logos">
          {brands.map(b => (
            <div key={b} className="trusted__logo">{b}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── About Section ────────────────────────────────────────────────────────────
function AboutSection() {
  const features = [
    'Customized strategies for every business',
    'Data-driven approach with measurable results',
    'Experienced team of digital marketing experts',
    'Full-service agency under one roof',
    'Transparent reporting and communication',
    'Focused on ROI and business growth',
  ]
  return (
    <section className="about section" id="about">
      <div className="container about__inner">
        <Reveal>
          <div className="about__visual">
            <div className="about__img-wrap">
              <div className="about__img-bg" />
              <div className="about__img-card">
                <div className="about__img-icon">
                  <Award size={40} />
                </div>
                <div className="about__metric">
                  <strong>15+ Years</strong>
                  <span>of Excellence</span>
                </div>
              </div>
              <div className="about__stat-card about__stat-card--1">
                <strong>200+</strong>
                <span>Happy Clients</span>
              </div>
              <div className="about__stat-card about__stat-card--2">
                <strong>98%</strong>
                <span>Retention Rate</span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="about__content">
          <Reveal delay={100}>
            <span className="section-tag">About Spinnert</span>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="section-title about__title">
              Your Growth Partner in the Digital World
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="about__text">
              Spinnert Digital Marketing Agency is a dynamic and innovative company based in Gurgaon,
              specializing in comprehensive digital marketing services for businesses of all sizes.
            </p>
            <p className="about__text">
              We work closely with our clients to develop customized strategies that align with their
              business goals. From website design to social media management, SEO, PPC advertising,
              and content marketing — our team has the expertise to deliver results.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <ul className="about__features">
              {features.map(f => (
                <li key={f}>
                  <CheckCircle size={18} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={300}>
            <div className="about__actions">
              <Link to="/about" className="btn btn-primary">
                Learn More About Us <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Talk to Our Team
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─── Services Section ─────────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section className="services-sec section" id="services">
      <div className="orb orb-secondary" style={{ width: 400, height: 400, top: '10%', right: '-10%', opacity: 0.5 }} aria-hidden="true" />
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">Services That Drive Growth</h2>
            <p className="section-subtitle">
              From strategy to execution, we provide end-to-end digital marketing services
              designed to elevate your brand and grow your business.
            </p>
          </div>
        </Reveal>

        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 60} />
          ))}
        </div>

        {/* New Services teaser strip */}
        <Reveal delay={100}>
          <div className="home-new-services">
            <div className="home-new-services__header">
              <span className="home-new-services__label">
                <Zap size={13} /> New Services
              </span>
              <p className="home-new-services__sub">We've expanded — explore our latest offerings</p>
            </div>
            <div className="home-new-services__pills">
              {NEW_SERVICES.map(s => {
                const Icon = IconMap[s.icon]
                return (
                  <Link
                    key={s.id}
                    to="/services#new-services"
                    className="home-new-pill"
                    style={{ '--pill-color': s.color, '--pill-gradient': s.gradient }}
                  >
                    <span className="home-new-pill__icon">
                      {Icon && <Icon size={16} />}
                    </span>
                    <span>{s.shortTitle}</span>
                  </Link>
                )
              })}
              <Link to="/services" className="home-new-pill home-new-pill--more">
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="services-sec__cta">
            <Link to="/services" className="btn btn-primary btn-lg">
              View All Services <ChevronRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Why Us Section ───────────────────────────────────────────────────────────
function WhyUsSection() {
  const reasons = [
    {
      icon: <Target size={24} />,
      title: 'Results-Focused',
      desc: 'Every strategy we build is laser-focused on delivering measurable results that matter to your business.',
      color: '#6C63FF',
    },
    {
      icon: <BarChart2 size={24} />,
      title: 'Data-Driven Approach',
      desc: 'We make decisions backed by data and analytics, not guesswork. Every campaign is optimized continuously.',
      color: '#3ECFCF',
    },
    {
      icon: <Users size={24} />,
      title: 'Dedicated Team',
      desc: 'A passionate team of digital marketing experts dedicated exclusively to your success.',
      color: '#FF6B6B',
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'Transparent Communication',
      desc: 'Regular reports, clear communication and full transparency — always know exactly what we\'re doing.',
      color: '#FBBF24',
    },
    {
      icon: <Zap size={24} />,
      title: 'Fast Execution',
      desc: 'We move fast. From strategy to implementation, we execute with speed and precision.',
      color: '#A78BFA',
    },
    {
      icon: <Globe size={24} />,
      title: 'Full-Service Agency',
      desc: 'From SEO and PPC to branding and web design — get everything under one roof.',
      color: '#34D399',
    },
  ]

  return (
    <section className="why-us section" id="why-us">
      <div className="orb orb-primary" style={{ width: 500, height: 500, top: '20%', left: '-15%', opacity: 0.4 }} aria-hidden="true" />
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">Why Spinnert</span>
            <h2 className="section-title">Why Businesses Choose Us</h2>
            <p className="section-subtitle">
              We're not just another digital marketing agency. We're your strategic growth partner.
            </p>
          </div>
        </Reveal>

        <div className="grid-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <article className="why-card" style={{ '--why-color': r.color }}>
                <div className="why-card__icon">{r.icon}</div>
                <h3 className="why-card__title">{r.title}</h3>
                <p className="why-card__desc">{r.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Stats Section ────────────────────────────────────────────────────────────
function StatsSection() {
  const stats = [
    { value: 200, suffix: '+', label: 'Happy Clients', icon: <Users size={24} /> },
    { value: 500, suffix: '+', label: 'Projects Delivered', icon: <Award size={24} /> },
    { value: 15, suffix: '+', label: 'Years of Experience', icon: <TrendingUp size={24} /> },
    { value: 98, suffix: '%', label: 'Client Retention', icon: <Star size={24} /> },
  ]

  return (
    <section className="stats-sec" aria-label="Achievements">
      <div className="stats-sec__bg" aria-hidden="true" />
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="stat-item">
                <div className="stat-item__icon">{s.icon}</div>
                <div className="stat-item__value">
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <div className="stat-item__label">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Process Section ──────────────────────────────────────────────────────────
function ProcessSection() {
  const steps = [
    { num: '01', title: 'Discovery & Research', desc: 'We deep-dive into your business, goals, audience and competition to build the right foundation.' },
    { num: '02', title: 'Strategy Development', desc: 'We craft a comprehensive, customized digital marketing strategy aligned with your objectives.' },
    { num: '03', title: 'Execution & Launch', desc: 'Our experts implement the strategy across all channels with precision and creativity.' },
    { num: '04', title: 'Optimize & Scale', desc: 'Continuous monitoring, A/B testing and optimization to maximize results and scale growth.' },
  ]

  return (
    <section className="process-sec section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">Our Process</span>
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">A proven four-step process that delivers consistent, measurable results.</p>
          </div>
        </Reveal>

        <div className="process-grid">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 100}>
              <div className="process-step">
                <div className="process-step__num">{step.num}</div>
                <div className="process-step__connector" aria-hidden="true" />
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials Section ─────────────────────────────────────────────────────
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'CEO, TechStartup',
      initials: 'RS',
      color: '#6C63FF',
      text: 'Spinnert completely transformed our digital presence. Their SEO work helped us rank #1 for our target keywords within 6 months. Exceptional results!',
      stars: 5,
    },
    {
      name: 'Priya Mehta',
      role: 'Marketing Head, RetailBrand',
      initials: 'PM',
      color: '#3ECFCF',
      text: 'The team at Spinnert is incredibly professional and results-oriented. Our social media engagement went up by 300% and leads doubled in 3 months.',
      stars: 5,
    },
    {
      name: 'Amit Verma',
      role: 'Founder, HealthCare Startup',
      initials: 'AV',
      color: '#FF6B6B',
      text: 'Working with Spinnert has been a game-changer. Their PPC campaigns deliver consistent ROI and their reporting is always transparent and detailed.',
      stars: 5,
    },
    {
      name: 'Neha Gupta',
      role: 'Director, EduTech Company',
      initials: 'NG',
      color: '#FBBF24',
      text: 'Spinnert redesigned our website and revamped our content strategy. The results were beyond our expectations — traffic up 180% in just 4 months!',
      stars: 5,
    },
    {
      name: 'Vikram Singh',
      role: 'Owner, Real Estate Agency',
      initials: 'VS',
      color: '#A78BFA',
      text: 'Their digital marketing strategy helped us generate quality leads consistently. The team is responsive, creative and truly invested in our success.',
      stars: 5,
    },
    {
      name: 'Sunita Kapoor',
      role: 'CMO, Fashion Brand',
      initials: 'SK',
      color: '#34D399',
      text: 'Spinnert\'s branding and social media work elevated our brand to a whole new level. They understand our audience and create content that truly connects.',
      stars: 5,
    },
  ]

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Real results, real feedback from the businesses we've helped grow.
            </p>
          </div>
        </Reveal>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <article className="testimonial-card">
                <div className="testimonial-card__quote"><Quote size={20} /></div>
                <div className="testimonial-card__stars">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={14} fill="#FBBF24" color="#FBBF24" />
                  ))}
                </div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar" style={{ background: t.color }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Blog Section ─────────────────────────────────────────────────────────────
function BlogSection() {
  const posts = [
    {
      category: 'SEO',
      title: '10 SEO Strategies That Will Dominate Search Rankings in 2024',
      excerpt: 'Discover the latest SEO techniques that top agencies are using to rank websites on the first page of Google.',
      date: 'Oct 15, 2024',
      readTime: '5 min read',
      color: '#6C63FF',
    },
    {
      category: 'Social Media',
      title: 'How to Build a Winning Social Media Strategy for Your Brand',
      excerpt: 'Learn how to create a social media strategy that builds brand awareness, drives engagement and generates leads.',
      date: 'Oct 8, 2024',
      readTime: '7 min read',
      color: '#3ECFCF',
    },
    {
      category: 'PPC',
      title: 'Google Ads Best Practices: Maximize Your ROI in 2024',
      excerpt: 'A comprehensive guide to running profitable Google Ads campaigns that deliver consistent returns.',
      date: 'Sep 28, 2024',
      readTime: '6 min read',
      color: '#FF6B6B',
    },
  ]

  return (
    <section className="blog-sec section" id="blog">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">Latest Insights</span>
            <h2 className="section-title">From Our Blog</h2>
            <p className="section-subtitle">
              Stay ahead with the latest digital marketing trends, tips and strategies.
            </p>
          </div>
        </Reveal>

        <div className="grid-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 100}>
              <article className="blog-card">
                <div className="blog-card__img" style={{ '--blog-color': post.color }}>
                  <span className="blog-card__category">{post.category}</span>
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="blog-card__title">{post.title}</h3>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <Link to="/blog" className="blog-card__link">
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="blog-sec__cta">
            <Link to="/blog" className="btn btn-secondary btn-lg">
              View All Articles <ChevronRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Contact CTA Section ──────────────────────────────────────────────────────
function ContactCTASection() {
  return (
    <section className="cta-sec section">
      <div className="container">
        <Reveal>
          <div className="cta-card">
            <div className="orb orb-primary" style={{ width: 300, height: 300, top: '-50px', right: '10%', opacity: 0.5 }} aria-hidden="true" />
            <div className="orb orb-secondary" style={{ width: 200, height: 200, bottom: '-30px', left: '15%', opacity: 0.4 }} aria-hidden="true" />
            <span className="section-tag">Ready to Grow?</span>
            <h2 className="cta-card__title">
              Let's Supercharge Your<br />
              <span className="gradient-text">Digital Growth</span>
            </h2>
            <p className="cta-card__subtitle">
              Get a free consultation with our digital marketing experts.
              We'll analyze your business and create a custom growth strategy.
            </p>
            <div className="cta-card__actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Free Consultation <ArrowRight size={18} />
              </Link>
              <a href="tel:+918376002929" className="btn btn-secondary btn-lg">
                Call +91 8376002929
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
