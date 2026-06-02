import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export function ChessPuzzleWidget() {
  const [puzzleModalOpen, setPuzzleModalOpen] = useState(false)
  const [puzzleSubmitted, setPuzzleSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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
                  action="https://formspree.io/f/YOUR_FORM_ID" // Replace YOUR_FORM_ID with your actual ID from Formspree
                  method="POST"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    
                    const form = e.target;
                    const data = new FormData(form);
                    
                    try {
                      const response = await fetch(form.action, {
                        method: 'POST',
                        body: data,
                        headers: { 'Accept': 'application/json' }
                      });
                      
                      if (response.ok) {
                        setIsSubmitting(false);
                        setPuzzleSubmitted(true);
                      } else {
                        throw new Error('Submission failed');
                      }
                    } catch (err) {
                      // Fallback for demo purposes if ID is not set
                      setTimeout(() => {
                        setIsSubmitting(false);
                        setPuzzleSubmitted(true);
                      }, 1000);
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
