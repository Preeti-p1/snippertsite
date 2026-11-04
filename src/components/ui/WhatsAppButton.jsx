import React, { useState } from 'react'
import './WhatsAppButton.css'

// ─── Config ───────────────────────────────────────────────────────────────────
const PHONE    = '918376002929'   // country code + number, no + or spaces
const MESSAGE  = "Hello! I'm interested in your services. Please share more details."
const WA_URL   = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`

// ─── WhatsApp SVG icon (official green logo) ──────────────────────────────────
function WhatsAppIcon({ size = 28 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
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

// ─── Component ────────────────────────────────────────────────────────────────
export default function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(false)

  return (
    <div className="wa-wrap">
      {/* Tooltip */}
      <div
        className={`wa-tooltip ${tooltip ? 'wa-tooltip--visible' : ''}`}
        role="tooltip"
        id="wa-tooltip"
      >
        <span>Chat on WhatsApp</span>
        <span className="wa-tooltip__arrow" />
      </div>

      {/* Ripple rings */}
      <span className="wa-ring wa-ring--1" aria-hidden="true" />
      <span className="wa-ring wa-ring--2" aria-hidden="true" />

      {/* Button */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn"
        aria-label="Chat with us on WhatsApp"
        aria-describedby="wa-tooltip"
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        onFocus={() => setTooltip(true)}
        onBlur={() => setTooltip(false)}
      >
        <WhatsAppIcon size={28} />
      </a>
    </div>
  )
}
