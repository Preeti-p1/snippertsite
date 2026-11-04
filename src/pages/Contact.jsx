import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import toast from 'react-hot-toast'
import './Page.css'
import { SERVICES } from '../utils/constants'

function Reveal({ children, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <div ref={ref} className={`reveal ${inView ? 'reveal--in' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.fullName.trim()) errs.fullName = 'Full name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.phone.trim()) errs.phone = 'Phone number is required'
    else if (!/^[+]?[0-9\s\-]{7,15}$/.test(form.phone)) errs.phone = 'Enter a valid phone number'
    if (!form.service) errs.service = 'Please select a service'
    if (!form.message.trim()) errs.message = 'Message is required'
    else if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setLoading(true)
    // Simulate API call
    try {
      await new Promise(r => setTimeout(r, 1500))
      toast.success('Message sent! We\'ll get back to you within 24 hours.')
      setForm(initialForm)
      setErrors({})
    } catch {
      toast.error('Something went wrong. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Contact Us – Spinnert Digital Marketing Agency Gurgaon</title>
        <meta name="description" content="Get in touch with Spinnert Digital Marketing Agency. Contact us for a free consultation for SEO, PPC, Social Media and Web Design services." />
      </Helmet>

      <section className="page-hero">
        <div className="orb orb-primary" style={{ width: 400, height: 400, top: '-100px', left: '-100px' }} />
        <div className="container">
          <Reveal>
            <div className="page-hero__content">
              <span className="section-tag">Contact Us</span>
              <h1 className="page-hero__title">
                Let's <span className="gradient-text">Talk Growth</span>
              </h1>
              <p className="page-hero__subtitle">
                Ready to transform your digital presence? Fill out the form and our team
                will get back to you within 24 hours.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Contact info */}
            <Reveal>
              <div>
                <div className="contact-info-card" style={{ marginBottom: 24 }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
                    Get in Touch
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: 24 }}>
                    Reach us through any of the following channels. We'd love to hear from you!
                  </p>

                  <div className="contact-info-item">
                    <div className="contact-info-item__icon"><Phone size={18} /></div>
                    <div>
                      <div className="contact-info-item__label">Phone</div>
                      <a href="tel:+918376002929" className="contact-info-item__value">+91 8376002929</a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-item__icon"><Mail size={18} /></div>
                    <div>
                      <div className="contact-info-item__label">Email</div>
                      <a href="mailto:info@spinnert.in" className="contact-info-item__value">info@spinnert.in</a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-item__icon"><MapPin size={18} /></div>
                    <div>
                      <div className="contact-info-item__label">Location</div>
                      <div className="contact-info-item__value">Gurugram, Haryana, India</div>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-item__icon"><Clock size={18} /></div>
                    <div>
                      <div className="contact-info-item__label">Business Hours</div>
                      <div className="contact-info-item__value">Mon–Sat: 10 AM – 6 PM  IST</div>
                    </div>
                  </div>
                </div>

                <div className="contact-info-card">
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>
                    Why Choose Spinnert?
                  </h3>
                  {[
                    'Free initial consultation',
                    'Response within 24 hours',
                    'Customized strategy for your business',
                    'Transparent pricing',
                    'No lock-in contracts',
                  ].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, fontSize: '14px', color: 'var(--text-secondary)' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gradient-primary)', flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right: Form */}
            <Reveal delay={100}>
              <div className="contact-form-card">
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
                  Send Us a Message
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: 28 }}>
                  Fill out the form below and we'll prepare a customized proposal for you.
                </p>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="fullName">
                        Full Name <span>*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        className={`form-input ${errors.fullName ? 'error' : ''}`}
                        placeholder="Your full name"
                        value={form.fullName}
                        onChange={handleChange}
                        autoComplete="name"
                      />
                      {errors.fullName && <span className="form-error">{errors.fullName}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Email Address <span>*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">
                        Phone Number <span>*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                      />
                      {errors.phone && <span className="form-error">{errors.phone}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="company">Company Name</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        className="form-input"
                        placeholder="Your company name"
                        value={form.company}
                        onChange={handleChange}
                        autoComplete="organization"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="service">
                      Service Interested In <span>*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      className={`form-select ${errors.service ? 'error' : ''}`}
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                      <option value="other">Other / Not Sure</option>
                    </select>
                    {errors.service && <span className="form-error">{errors.service}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Your Message <span>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={`form-textarea ${errors.message ? 'error' : ''}`}
                      placeholder="Tell us about your business and what you're looking to achieve..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary form-submit"
                    disabled={loading}
                    aria-busy={loading}
                  >
                    {loading ? (
                      'Sending...'
                    ) : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
