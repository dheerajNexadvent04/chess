import { partnerships } from '../data/siteContent'

export function PartnerSchoolsPage() {
  return (
    <div className="inner-page">
      <header className="inner-header">
        <h1>Partnered Schools</h1>
        <p>
          We are proud to work with leading schools and learning institutes
          across Delhi NCR and beyond.
        </p>
      </header>

      <section className="section slim">
        <div className="school-summary">
          <strong>10+ Schools Partnership Network</strong>
          <p>
            Rohini Chess Academy conducts on-campus chess classes, tournament
            training, and school event support through long-term collaborations.
          </p>
        </div>
      </section>

      <section className="section slim">
        <div className="schools-list">
          {partnerships.map((school) => (
            <article key={school.name} className="school-card">
              <h2>{school.name}</h2>
              <ul>
                {school.locations.map((location) => (
                  <li key={location}>{location}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
