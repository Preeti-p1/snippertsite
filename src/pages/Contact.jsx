import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import toast from 'react-hot-toast'
import './Page.css'
import './Contact.css'
import { SERVICES, NEW_SERVICES } from '../utils/constants'

// ─── WhatsApp config (same number as the floating button) ─────────────────────
const WA_PHONE = '918376002929'

/** Build the full wa.me URL from a submitted form object */
function buildWhatsAppURL(form, serviceLabel) {
  const lines = [
    '👋 *New enquiry from Spinnert website*',
    '',
    `*Name:*    ${form.fullName}`,
    `*Email:*   ${form.email}`,
    `*Phone:*   ${form.phone}`,
    form.company ? `*Company:* ${form.company}` : null,
    `*Service:* ${serviceLabel}`,
    '',
    `*Message:*`,
    form.message,
  ]
    .filter(l => l !== null)
    .join('\n')

  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(lines)}`
}

// ─── All services merged for the dropdown ─────────────────────────────────────
const ALL_SERVICES = [...SERVICES, ...NEW_SERVICES]

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
  const [form, setForm]       = useState(initialForm)
  const [errors, setErrors]   = useState({})
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
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      // Scroll to the first error field
      const firstKey = Object.keys(errs)[0]
      document.getElementById(firstKey)?.focus()
      return
    }

    setLoading(true)

    // Resolve the human-readable service label
    const matched = ALL_SERVICES.find(s => s.id === form.service)
    const serviceLabel = matched ? matched.title : form.service === 'other' ? 'Other / Not Sure' : form.service

    // Build & open the WhatsApp URL
    const url = buildWhatsAppURL(form, serviceLabel)
    window.open(url, '_blank', 'noopener,noreferrer')

    // Show success feedback, reset form
    toast.success(
      "Opening WhatsApp — your details have been pre-filled. Just hit Send!",
      { duration: 5000 }
    )
    setForm(initialForm)
    setErrors({})
    setLoading(false)
  }

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Contact Us – Spinnert Digital Marketing Agency Gurugram</title>
        <meta name="description" content="Get in touch with Spinnert Digital Marketing Agency. Contact us for a consultation for SEO, PPC, Social Media and Web Design services." />
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

            {/* ── Left: Contact info ─────────────────────────────────────── */}
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
                      <div className="contact-info-item__value">Mon–Sat: 10 AM – 6 PM IST</div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp quick-contact card */}
                <div className="contact-wa-card">
                  <div className="contact-wa-card__icon" aria-hidden="true">
                    <WaLogoIcon size={24} />
                  </div>
                  <div className="contact-wa-card__body">
                    <p className="contact-wa-card__title">Chat on WhatsApp</p>
                    <p className="contact-wa-card__sub">Get an instant reply during business hours</p>
                  </div>
                  <a
                    href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent("Hello! I'd like to know more about your services.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-wa-card__btn"
                    aria-label="Open WhatsApp chat"
                  >
                    Chat Now
                  </a>
                </div>

                <div className="contact-info-card" style={{ marginTop: 24 }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>
                    Why Choose Spinnert Digital Agency?
                  </h3>
                  {[
                    'Initial consultation',
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

            {/* ── Right: Form ────────────────────────────────────────────── */}
            <Reveal delay={100}>
              <div className="contact-form-card">
                <div className="contact-form-card__header">
                  <div>
                    <h3 className="contact-form-card__title">Send Us a Message</h3>
                    <p className="contact-form-card__sub">
                      Fill in the form — we'll instantly open WhatsApp with your details pre-filled.
                    </p>
                  </div>
                  {/* WhatsApp badge */}
                  <div className="contact-form-wa-badge" aria-label="Sends via WhatsApp">
                    <WaLogoIcon size={18} />
                    <span>via WhatsApp</span>
                  </div>
                </div>

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

                      <optgroup label="── Digital Marketing ──">
                        {SERVICES.map(s => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                      </optgroup>

                      <optgroup label="── Specialised Services ──">
                        {NEW_SERVICES.map(s => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                      </optgroup>

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

                  {/* Submit row */}
                  <div className="contact-submit-row">
                    <button
                      type="submit"
                      className="btn btn-primary form-submit contact-submit-btn"
                      disabled={loading}
                      aria-busy={loading}
                    >
                      {loading ? (
                        <span className="contact-submit-btn__loading">
                          <span className="contact-spinner" />
                          Opening WhatsApp…
                        </span>
                      ) : (
                        <>
                          <WaLogoIcon size={18} />
                          Send via WhatsApp
                        </>
                      )}
                    </button>
                    <p className="contact-submit-hint">
                      Your details will open in WhatsApp — just tap&nbsp;<strong>Send</strong>.
                    </p>
                  </div>
                </form>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </div>
  )
}

/* ── Inline WhatsApp SVG (no extra dependency) ───────────────────────────── */
function WaLogoIcon({ size = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.473-2.004A15.937 15.937 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0z"
        fill="#25D366"
      />
      <path
        d="M23.507 19.674c-.355-.178-2.101-1.036-2.426-1.154-.325-.118-.561-.177-.797.178-.236.355-.914 1.154-1.121 1.39-.207.237-.413.266-.768.089-.355-.178-1.498-.553-2.853-1.76-1.054-.94-1.765-2.1-1.972-2.454-.207-.355-.022-.547.156-.724.16-.158.355-.413.533-.62.178-.207.237-.355.355-.591.118-.237.059-.444-.03-.621-.088-.178-.796-1.919-1.09-2.629-.287-.69-.579-.596-.797-.607-.206-.01-.443-.012-.679-.012a1.302 1.302 0 0 0-.944.444c-.325.355-1.24 1.211-1.24 2.952 0 1.74 1.269 3.42 1.447 3.657.177.237 2.5 3.817 6.058 5.353.847.366 1.507.584 2.023.748.85.27 1.623.232 2.234.141.681-.101 2.101-.859 2.397-1.688.295-.83.295-1.54.207-1.688-.089-.148-.325-.237-.68-.414z"
        fill="#fff"
      />
    </svg>
  )
}

