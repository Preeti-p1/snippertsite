import React from 'react'
import { Helmet } from 'react-helmet-async'
import './Page.css'

export default function PrivacyPolicy() {
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Privacy Policy – Spinnert Digital Marketing Agency</title>
        <meta name="description" content="Spinnert Digital Marketing Agency's Privacy Policy. Learn how we collect, use and protect your personal information." />
      </Helmet>

      <section className="page-hero" style={{ paddingBottom: 40 }}>
        <div className="container">
          <div className="page-hero__content">
            <span className="section-tag">Legal</span>
            <h1 className="page-hero__title">Privacy Policy</h1>
            <p className="page-hero__subtitle">Last updated: October 1, 2024</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="policy-content">
            <p>
              At Spinnert Digital Marketing Agency ("Spinnert", "we", "us", or "our"), we are committed to
              protecting your privacy. This Privacy Policy explains how we collect, use, disclose and safeguard
              your information when you visit our website spinnert.in or use our services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name when you fill out our contact form or subscribe to our newsletter.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, and other diagnostic data.</li>
              <li><strong>Cookies:</strong> We use cookies to enhance your experience on our website. You may disable cookies through your browser settings.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide requested services.</li>
              <li>Send you marketing communications (you may opt out at any time).</li>
              <li>Improve our website and services.</li>
              <li>Comply with legal obligations.</li>
              <li>Analyze usage patterns to improve user experience.</li>
            </ul>

            <h2>3. Sharing of Information</h2>
            <p>
              We do not sell, trade or rent your personal information to third parties. We may share
              your information with trusted service providers who assist us in operating our website
              and conducting our business, provided they agree to keep your information confidential.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure or destruction. However,
              no method of transmission over the internet is 100% secure.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices of these websites and encourage you to review their privacy policies.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you.</li>
              <li>Request correction or deletion of your personal data.</li>
              <li>Withdraw consent for marketing communications at any time.</li>
              <li>Lodge a complaint with a relevant supervisory authority.</li>
            </ul>

            <h2>7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new policy on this page with an updated date.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:<br />
              <strong>Email:</strong> <a href="mailto:info@spinnert.in">info@spinnert.in</a><br />
              <strong>Phone:</strong> +91 8376002929<br />
              <strong>Address:</strong> Gurgaon, Haryana, India
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
