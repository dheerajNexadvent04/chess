import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page Not Found | SckoolChess'

    const metaDesc = document.querySelector('meta[name="description"]')
    const prevDesc = metaDesc?.getAttribute('content')
    if (metaDesc) {
      metaDesc.setAttribute('content', 'The page you are looking for does not exist or has moved.')
    }

    const robotsMeta = document.createElement('meta')
    robotsMeta.name = 'robots'
    robotsMeta.content = 'noindex, follow'
    document.head.appendChild(robotsMeta)

    return () => {
      document.head.removeChild(robotsMeta)
      if (metaDesc && prevDesc) metaDesc.setAttribute('content', prevDesc)
    }
  }, [])

  return (
    <div className="page" style={{ textAlign: 'center', padding: '100px 20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '64px', marginBottom: '8px' }}>404</h1>
      <h2 style={{ marginBottom: '16px' }}>Page Not Found</h2>
      <p style={{ marginBottom: '32px', color: '#666' }}>
        The page you're looking for doesn't exist or has moved. It may have been renamed as part of a recent site update.
      </p>
      <Link to="/" className="btn-primary" style={{ display: 'inline-block', marginBottom: '24px' }}>
        Go to Homepage
      </Link>
      <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
        <Link to="/courses-offered">Courses</Link>
        <Link to="/curriculum">Curriculum</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact</Link>
      </nav>
    </div>
  )
}
