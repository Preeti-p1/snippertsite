import React from 'react'
import { Helmet } from 'react-helmet-async'
import './Page.css'

export default function TermsConditions() {
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Terms & Conditions – Spinnert Digital Marketing Agency</title>
        <meta name="description" content="Read the Terms and Conditions for using Spinnert Digital Marketing Agency's services and website." />
      </Helmet>

      <section className="page-hero" style={{ paddingBottom: 40 }}>
        <div className="container">
          <div className="page-hero__content">
            <span className="section-tag">Legal</span>
            <h1 className="page-hero__title">Terms & Conditions</h1>
            <p className="page-hero__subtitle">Last updated: October 1, 2024</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="policy-content">
            <p>
              Please read these Terms and Conditions carefully before using the spinnert.in website
              or engaging our services. By accessing or using our website, you agree to be bound by
              these terms.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by these Terms
              and Conditions and our Privacy Policy. If you do not agree to these terms, you may
              not use our website or services.
            </p>

            <h2>2. Services</h2>
            <p>
              Spinnert Digital Marketing Agency provides digital marketing services including but not
              limited to SEO, social media marketing, PPC advertising, website design and development,
              content marketing, branding and analytics. The specific scope of services will be defined
              in individual service agreements.
            </p>

            <h2>3. Client Responsibilities</h2>
            <p>Clients are responsible for:</p>
            <ul>
              <li>Providing accurate and complete information needed to perform the services.</li>
              <li>Timely review and approval of deliverables.</li>
              <li>Ensuring all content provided does not infringe on any third-party rights.</li>
              <li>Making payments as per the agreed schedule.</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              Upon full payment, clients own the final deliverables created specifically for them.
              Spinnert retains ownership of any pre-existing intellectual property, tools, frameworks
              and methodologies used in delivering the services.
            </p>

            <h2>5. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all proprietary and sensitive business information
              shared during the engagement and not to disclose such information to third parties without
              prior written consent.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              Spinnert shall not be liable for any indirect, incidental, special or consequential damages
              arising from the use of our services. Our total liability shall not exceed the amount paid
              by the client for the specific service in the preceding 30 days.
            </p>

            <h2>7. Termination</h2>
            <p>
              Either party may terminate the service agreement with 30 days written notice. Upon termination,
              the client shall pay for all services rendered up to the termination date.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India.
              Any disputes shall be subject to the exclusive jurisdiction of the courts in Gurgaon, Haryana.
            </p>

            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately
              upon posting on the website. Your continued use of our services constitutes acceptance of the modified terms.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              For any questions regarding these terms, contact us at:<br />
              <strong>Email:</strong> <a href="mailto:info@spinnert.in">info@spinnert.in</a><br />
              <strong>Phone:</strong> +91 8376002929
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
