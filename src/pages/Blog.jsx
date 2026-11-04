import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Search, Clock, User } from 'lucide-react'
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

const categories = ['All', 'SEO', 'Social Media', 'PPC', 'Content Marketing', 'Branding', 'Analytics']

const posts = [
  { id: 1, category: 'SEO', title: '10 SEO Strategies That Will Dominate Search Rankings in 2024', excerpt: 'Discover the latest SEO techniques top agencies use to rank websites on the first page of Google consistently.', author: 'Priya Sharma', date: 'Oct 15, 2024', readTime: '5 min', color: '#6C63FF' },
  { id: 2, category: 'Social Media', title: 'How to Build a Winning Social Media Strategy for Your Brand', excerpt: 'Learn how to create a social media strategy that builds brand awareness, drives engagement and generates leads.', author: 'Ankita Verma', date: 'Oct 8, 2024', readTime: '7 min', color: '#3ECFCF' },
  { id: 3, category: 'PPC', title: 'Google Ads Best Practices: Maximize Your ROI in 2024', excerpt: 'A comprehensive guide to running profitable Google Ads campaigns that deliver consistent measurable returns.', author: 'Vikash Tiwari', date: 'Sep 28, 2024', readTime: '6 min', color: '#FF6B6B' },
  { id: 4, category: 'Content Marketing', title: 'Content Marketing That Actually Converts: A 2024 Guide', excerpt: 'How to create content that not only ranks but also converts visitors into leads and paying customers.', author: 'Sonia Kapoor', date: 'Sep 20, 2024', readTime: '8 min', color: '#A78BFA' },
  { id: 5, category: 'Branding', title: 'Why a Strong Brand Identity is Your Greatest Business Asset', excerpt: 'Discover how investing in branding can drive long-term business growth, loyalty and competitive advantage.', author: 'Rahul Kumar', date: 'Sep 12, 2024', readTime: '5 min', color: '#FF8C42' },
  { id: 6, category: 'Analytics', title: 'Using Data Analytics to Make Smarter Marketing Decisions', excerpt: 'Learn how to leverage analytics and reporting to optimize your marketing campaigns and maximize ROI.', author: 'Arjun Malhotra', date: 'Sep 5, 2024', readTime: '6 min', color: '#FBBF24' },
  { id: 7, category: 'SEO', title: 'Local SEO for Businesses in Gurgaon: The Complete Guide', excerpt: 'How to dominate local search results and attract more customers from Gurgaon and the NCR region.', author: 'Priya Sharma', date: 'Aug 28, 2024', readTime: '9 min', color: '#6C63FF' },
  { id: 8, category: 'Social Media', title: 'Instagram Marketing: 15 Proven Tips to Grow Your Following', excerpt: 'Organic Instagram strategies that top brands are using to grow their audience and drive real business results.', author: 'Ankita Verma', date: 'Aug 20, 2024', readTime: '6 min', color: '#3ECFCF' },
  { id: 9, category: 'PPC', title: 'Understanding Quality Score in Google Ads and How to Improve It', excerpt: 'A deep dive into Google Ads Quality Score and actionable steps to reduce CPC and improve ad performance.', author: 'Vikash Tiwari', date: 'Aug 14, 2024', readTime: '7 min', color: '#FF6B6B' },
]

export default function Blog() {
  const [active, setActive] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = posts.filter(p => {
    const matchCat = active === 'All' || p.category === active
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Blog – Digital Marketing Insights | Spinnert Gurgaon</title>
        <meta name="description" content="Read the latest digital marketing tips, strategies and insights from Spinnert's expert team. SEO, PPC, Social Media, Content Marketing and more." />
      </Helmet>

      <section className="page-hero">
        <div className="orb orb-primary" style={{ width: 400, height: 400, top: '-100px', right: '0' }} />
        <div className="container">
          <Reveal>
            <div className="page-hero__content">
              <span className="section-tag">Our Blog</span>
              <h1 className="page-hero__title">
                Digital Marketing <span className="gradient-text">Insights & Tips</span>
              </h1>
              <p className="page-hero__subtitle">
                Stay ahead of the curve with actionable digital marketing strategies,
                industry insights and expert tips from the Spinnert team.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Search + Filter */}
          <Reveal>
            <div className="blog-toolbar">
              <div className="blog-search">
                <Search size={16} />
                <input
                  type="search"
                  placeholder="Search articles..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  aria-label="Search blog posts"
                />
              </div>
              <div className="blog-cats">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`blog-cat ${active === cat ? 'blog-cat--active' : ''}`}
                    onClick={() => setActive(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {filtered.length === 0 ? (
            <Reveal>
              <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
                No articles found. Try a different search or category.
              </div>
            </Reveal>
          ) : (
            <div className="blog-grid">
              {filtered.map((post, i) => (
                <Reveal key={post.id} delay={i * 60}>
                  <article className="blog-card-full">
                    <div className="blog-card-full__img" style={{ '--blog-color': post.color }}>
                      <span className="blog-card-full__cat">{post.category}</span>
                    </div>
                    <div className="blog-card-full__body">
                      <div className="blog-card-full__meta">
                        <span><User size={12} /> {post.author}</span>
                        <span><Clock size={12} /> {post.readTime} read</span>
                        <span>{post.date}</span>
                      </div>
                      <h2 className="blog-card-full__title">{post.title}</h2>
                      <p className="blog-card-full__excerpt">{post.excerpt}</p>
                      <Link to="/blog" className="blog-card-full__link">
                        Read Article <ArrowRight size={14} />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
