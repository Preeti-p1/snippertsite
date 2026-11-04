import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft } from 'lucide-react'
import './Page.css'

export default function NotFound() {
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>404 – Page Not Found | Spinnert Digital Marketing Agency</title>
      </Helmet>
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px 60px' }}>
        <div>
          <div style={{ fontSize: '8rem', fontWeight: 900, background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>
            404
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', margin: '16px 0' }}>
            Page Not Found
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.7 }}>
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          <Link to="/" className="btn btn-primary btn-lg">
            <ArrowLeft size={18} /> Go Back Home
          </Link>
        </div>
      </section>
    </div>
  )
}
