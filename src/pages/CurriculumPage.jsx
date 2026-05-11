import { Award, BookOpen, GraduationCap, ShieldCheck, Users } from 'lucide-react'

const heroCards = [
  {
    title: '100+',
    subtitle: 'Students Trained',
    Icon: Users,
  },
  {
    title: 'Expert',
    subtitle: 'Chess Coaches',
    Icon: GraduationCap,
  },
  {
    title: 'Tournament',
    subtitle: 'Ready Training',
    Icon: ShieldCheck,
  },
]

const heroBadges = [
  { label: 'Delhi Chess Association Affiliated', Icon: Award },
  { label: 'Online & Offline Classes', Icon: BookOpen },
  { label: 'Tournament Preparation', Icon: Award },
  { label: 'Expert Coaches', Icon: GraduationCap },
  { label: '100+ Students Trained', Icon: Users },
]

export function CurriculumPage() {
  return (
    <section className="curriculum-page" aria-label="Curriculum page">
      <div className="curriculum-hero">
        <img className="curriculum-hero-bg" src="/herobanner.png" alt="" aria-hidden="true" />
        <div className="curriculum-hero-overlay" />

        <div className="curriculum-hero-main">
          <div className="curriculum-hero-left">
            <p className="curriculum-kicker">Structured chess coaching for kids</p>
            <h1>
              Chess Courses
              <br />
              Designed to
              <br />
              Build <span>Champions</span>
            </h1>
            <p>
              Structured chess coaching for children aged 5 to 15 years from beginner
              learning to tournament level preparation.
            </p>
            <div className="curriculum-hero-actions">
              <a href="tel:+918447992702">Book Free Trial</a>
              <a className="ghost" href="/courses-offered">
                View Courses →
              </a>
            </div>
          </div>

          <div className="curriculum-hero-right" aria-label="Key highlights">
            {heroCards.map((card, index) => (
              <article
                key={card.title}
                className={`curriculum-floating-card card-${index + 1}`}
              >
                <card.Icon size={24} strokeWidth={2.1} />
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="curriculum-badge-row">
          {heroBadges.map((badge) => (
            <article key={badge.label}>
              <badge.Icon size={18} strokeWidth={2} />
              <span>{badge.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
