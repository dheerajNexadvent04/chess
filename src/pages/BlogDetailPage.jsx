import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogPosts } from '../data/blogData'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './BlogPage.css'

export function BlogDetailPage() {
  useScrollReveal()
  const { id } = useParams()

  // Find the current blog post
  const post = blogPosts.find((p) => p.id === id)

  // Scroll to top when the article changes (id changes)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [id])

  if (!post) {
    return (
      <div className="blog-detail-container">
        <div className="blog-detail-inner" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h2>Article Not Found</h2>
          <p style={{ margin: '1rem 0 2rem', color: '#6b7a99' }}>
            The article you are looking for does not exist or has been moved.
          </p>
          <Link to="/blog" className="back-to-blogs-link" style={{ justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(180deg)' }}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Back to Blogs
          </Link>
        </div>
      </div>
    )
  }

  // Get related posts (excluding current post, max 2)
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2)

  return (
    <div className="blog-detail-container">
      <div className="blog-detail-inner">
        <Link to="/blog" className="back-to-blogs-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(180deg)', marginRight: '2px' }}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          Back to Blogs
        </Link>

        {/* Floating rounded content card */}
        <article className="blog-detail-card reveal fade-up">
          <header className="blog-detail-header">
            <span className="category-badge-simple">
              {post.category}
            </span>
            <h1>{post.title}</h1>
            {post.subtitle && <p className="blog-detail-subtitle">{post.subtitle}</p>}
            <div className="post-meta-row">
              <span>{post.date}</span>
              <span className="meta-dot" aria-hidden="true" />
              <span>{post.readTime}</span>
            </div>
          </header>

          <img className="blog-detail-hero-image" src={post.image} alt={post.title} />

          <div className="blog-detail-content">
            <p className="blog-detail-introduction">{post.introduction}</p>

            {post.points && post.points.length > 0 && (
              <div className="blog-points-list">
                {post.points.map((point) => (
                  <div key={point.number} className="blog-point-item">
                    <h2>
                      <span className="point-number">{point.number}</span>
                      {point.title}
                    </h2>
                    <p>{point.body}</p>
                  </div>
                ))}
              </div>
            )}

            {post.sections && post.sections.length > 0 && (
              <div className="blog-sections-list">
                {post.sections.map((section) => (
                  <div key={section.title} className="blog-section-item">
                    <h3>{section.title}</h3>
                    <p>{section.body}</p>
                  </div>
                ))}
              </div>
            )}

            {post.conclusion && (
              <div className="blog-conclusion-block">
                <h4>Conclusion</h4>
                <p>{post.conclusion}</p>
              </div>
            )}

            {post.website && (
              <div className="blog-website-box">
                For more information and structured curriculum details, visit{' '}
                <a href={`https://${post.website}`} target="_blank" rel="noopener noreferrer">
                  {post.website}
                </a>
              </div>
            )}
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="related-posts-section reveal fade-up">
            <h3>Related Articles</h3>
            <div className="related-posts-grid">
              {relatedPosts.map((rPost) => (
                <article key={rPost.id} className="blog-post-card">
                  <div className="card-image-wrapper">
                    <Link to={`/blog/${rPost.id}`}>
                      <img src={rPost.image} alt={rPost.title} />
                    </Link>
                  </div>
                  <div className="card-content-wrapper">
                    <span className="category-badge-simple">
                      {rPost.category}
                    </span>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                      <Link to={`/blog/${rPost.id}`}>
                        {rPost.title}
                      </Link>
                    </h3>
                    <div className="post-meta-row" style={{ marginBottom: '1.25rem' }}>
                      <span>{rPost.date}</span>
                      <span className="meta-dot" aria-hidden="true" />
                      <span>{rPost.readTime}</span>
                    </div>
                    <Link to={`/blog/${rPost.id}`} className="read-more-solid-btn">
                      Read more
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
