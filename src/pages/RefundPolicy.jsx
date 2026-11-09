import React from 'react'
import { Helmet } from 'react-helmet-async'
import './Page.css'

export default function RefundPolicy() {
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Return & Refund Policy – Spinnert Digital Marketing Agency</title>
        <meta name="description" content="Spinnert Digital Marketing Agency's Return and Refund Policy. Understand our refund process and conditions." />
      </Helmet>

      <section className="page-hero" style={{ paddingBottom: 40 }}>
        <div className="container">
          <div className="page-hero__content">
            <span className="section-tag">Legal</span>
            <h1 className="page-hero__title">Return & Refund Policy</h1>
            <p className="page-hero__subtitle">Last updated: October 1, 2024</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="policy-content">
            <p>
              At Spinnert Digital Marketing Agency, we are committed to delivering exceptional services
              and ensuring client satisfaction. This Refund Policy outlines the conditions under which
              refunds may be issued.
            </p>

            <h2>1. Nature of Services</h2>
            <p>
              Digital marketing services, including SEO, social media management, PPC campaigns,
              website design and content creation, are service-based engagements. As such, once
              work has commenced, the time and resources invested cannot be fully recovered.
            </p>

            <h2>2. Refund Eligibility</h2>
            <p>Refunds may be considered under the following circumstances:</p>
            <ul>
              <li><strong>Service Not Started:</strong> If the project has not yet commenced, a full refund will be issued within 7 business days of cancellation.</li>
              <li><strong>Partial Completion:</strong> If work has partially commenced, a pro-rated refund based on the work completed may be offered at Spinnert's discretion.</li>
              <li><strong>Failure to Deliver:</strong> If Spinnert fails to deliver the agreed services within the specified timeline through no fault of the client, a partial or full refund may be considered.</li>
            </ul>

            <h2>3. Non-Refundable Situations</h2>
            <p>Refunds will not be provided in the following cases:</p>
            <ul>
              <li>Services fully rendered as per the agreed scope of work.</li>
              <li>Dissatisfaction with results arising from factors outside Spinnert's control (e.g., search engine algorithm changes, market conditions).</li>
              <li>Delays caused by the client's failure to provide required information, approvals or assets.</li>
              <li>Change of mind after services have commenced.</li>
              <li>Third-party costs such as advertising budgets, domain registrations, software subscriptions or hosting fees.</li>
            </ul>

            <h2>4. Refund Process</h2>
            <p>To request a refund:</p>
            <ul>
              <li>Submit a refund request in writing to <a href="mailto:info@spinnert.in">info@spinnert.in</a> within 7 days of the triggering event.</li>
              <li>Include your name, contact details, service reference and reason for the refund request.</li>
              <li>Our team will review the request within 5 business days and respond with our decision.</li>
              <li>Approved refunds will be processed within 10–15 business days to the original payment method.</li>
            </ul>

            <h2>5. Dispute Resolution</h2>
            <p>
              If you are not satisfied with our decision, you may escalate the matter to our senior management
              at <a href="mailto:info@spinnert.in">info@spinnert.in</a>. We are committed to resolving all
              disputes fairly and amicably.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              For any refund-related questions, please contact us at:<br />
              <strong>Email:</strong> <a href="mailto:info@spinnert.in">info@spinnert.in</a><br />
              <strong>Phone:</strong> +91 8376002929<br />
              <strong>Address:</strong> Gurugram, Haryana, India
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
