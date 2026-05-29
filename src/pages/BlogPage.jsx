import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogData'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './BlogPage.css'

export function BlogPage() {
  useScrollReveal()

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const featuredPost = blogPosts[0]
  const gridPosts = blogPosts.slice(1)

  return (
    <div className="blog-inner-page">
      <header className="blog-hero reveal fade-up">
        <h1 style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: '400', letterSpacing: '-0.03em' }}>
          Blog & articles
        </h1>
      </header>

      {/* Featured Post Card */}
      {featuredPost && (
        <section className="featured-post-container reveal fade-up" aria-label="Featured article">
          <div className="featured-post-card">
            <div className="featured-image-wrapper">
              <Link to={`/blog/${featuredPost.id}`}>
                <img src={featuredPost.image} alt={featuredPost.title} />
              </Link>
            </div>
            <div className="featured-content-wrapper">
              <span className="category-badge-simple">
                {featuredPost.category}
              </span>
              <h2>
                <Link to={`/blog/${featuredPost.id}`}>
                  {featuredPost.title}
                </Link>
              </h2>
              <div className="post-meta-row">
                <span>{featuredPost.date}</span>
                <span className="meta-dot" aria-hidden="true" />
                <span>{featuredPost.readTime}</span>
              </div>
              <p className="post-summary">{featuredPost.summary}</p>
              <Link to={`/blog/${featuredPost.id}`} className="read-more-solid-btn" id="featured-read-btn">
                Read more
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Grid of Articles */}
      <section className="blog-posts-grid-container reveal fade-up" aria-label="Article listing">
        <div className="blog-grid">
          {gridPosts.map((post) => (
            <article key={post.id} className="blog-post-card">
              <div className="card-image-wrapper">
                <Link to={`/blog/${post.id}`}>
                  <img src={post.image} alt={post.title} />
                </Link>
              </div>
              <div className="card-content-wrapper">
                <span className="category-badge-simple">
                  {post.category}
                </span>
                <h3>
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
                <div className="post-meta-row">
                  <span>{post.date}</span>
                  <span className="meta-dot" aria-hidden="true" />
                  <span>{post.readTime}</span>
                </div>
                <p className="post-summary">{post.summary}</p>
                <Link to={`/blog/${post.id}`} className="read-more-solid-btn">
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
