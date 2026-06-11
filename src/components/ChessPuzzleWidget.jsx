import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwvBydd6I0jpFWm4UPgRIUrJkyttZwI8gC-FSV5WMVzFkg1hJdJ1n041jF80eIemf4h/exec'

export function ChessPuzzleWidget() {
  const [puzzleModalOpen, setPuzzleModalOpen] = useState(false)
  const [puzzleSubmitted, setPuzzleSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const location = useLocation()

  const isNepzoPage = ['/nepzo', '/nepzo-program'].includes(location.pathname)

  if (isNepzoPage) return null

  // Auto-trigger popup on page load (runs once per session)
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPuzzlePopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setPuzzleModalOpen(true);
        sessionStorage.setItem('hasSeenPuzzlePopup', 'true');
      }, 3000); // 3 second delay for better UX
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* ── Floating Puzzle CTA ── */}
      <button 
        className="puzzle-floating-cta"
        onClick={() => setPuzzleModalOpen(true)}
      >
        <span className="cta-icon">🎁</span>
        <span className="cta-text">Free Puzzle</span>
      </button>

      {/* ── Puzzle Lead Modal ── */}
      {puzzleModalOpen && (
        <div className="puzzle-modal-overlay">
          <div className="puzzle-modal-card">
            <button 
              className="puzzle-modal-close" 
              onClick={() => {
                setPuzzleModalOpen(false)
                setPuzzleSubmitted(false)
              }}
            >
              <X size={24} />
            </button>

            {!puzzleSubmitted ? (
              <div className="puzzle-modal-content">
                <div className="puzzle-modal-header">
                  <div className="puzzle-icon-wrap">🧩</div>
                  <h2>Get Your Free Chess Puzzle!</h2>
                  <p>Master the board with our hand-picked collection of championship-level puzzles. Enter your details to download the PDF instantly.</p>
                </div>

                <form 
                  className="puzzle-modal-form"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    
                    const form = e.target;
                    const data = new FormData(form);
                    data.append('type', 'free_puzzle');
                    data.append('Form Name', 'Free Puzzle Request');
                    data.append('date', new Date().toLocaleString());

                    try {
                      await fetch(SCRIPT_URL, {
                        method: 'POST',
                        body: new URLSearchParams(data),
                        mode: 'no-cors'
                      });
                      
                      setIsSubmitting(false);
                      setPuzzleSubmitted(true);
                      
                      // Programmatically trigger the download of the PDF
                      const link = document.createElement('a');
                      link.href = '/chess-puzzles.pdf';
                      link.download = 'chess-puzzles.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    } catch (err) {
                      console.error('Error submitting form:', err.message);
                      setIsSubmitting(false);
                      setPuzzleSubmitted(true);
                    }
                  }}
                >
                  <div className="puzzle-input-group">
                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="alex@example.com" required />
                  </div>
                  <div className="puzzle-input-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="+91 00000 00000" required />
                  </div>
                  <button type="submit" className="puzzle-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Processing...' : 'Send Me the PDF'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="puzzle-success-content">
                <div className="success-icon">✅</div>
                <h2>Success!</h2>
                <p>Your chess puzzle PDF is ready for download. Challenge your mind!</p>
                <a 
                  href="/chess-puzzles.pdf" 
                  download 
                  className="puzzle-download-btn"
                >
                  Download PDF Now
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
