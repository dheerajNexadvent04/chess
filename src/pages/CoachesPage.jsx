import { coaches } from '../data/siteContent'

export function CoachesPage() {
  return (
    <div className="inner-page">
      <header className="inner-header">
        <h1>Our Coaches</h1>
        <p>
          Experienced and student-focused mentors for every stage of chess
          learning.
        </p>
      </header>

      <section className="section slim">
        <div className="coach-grid">
          {coaches.map((coach) => (
            <article key={coach.name} className="coach-card">
              <img src={coach.image} alt={coach.name} />
              <div className="coach-content">
                <h2>{coach.name}</h2>
                <p className="coach-title">{coach.title}</p>
                <p>{coach.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
