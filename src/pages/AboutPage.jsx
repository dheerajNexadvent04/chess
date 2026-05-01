import { ArrowUpRight, FileText } from 'lucide-react'

const aboutHeroImage =
  'https://www.figma.com/api/mcp/asset/2a5580e7-9da5-4e92-95f1-cbae69296834'
const coachingImage =
  'https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?auto=format&fit=crop&w=1200&q=80'
const missionBoardImage =
  'https://images.unsplash.com/photo-1575300806297-4dbf7f81d95f?auto=format&fit=crop&w=1400&q=80'
const visionKidImage =
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80'

const memoryCards = [
  { id: 1, variant: 'dark', arrow: 'plain' },
  { id: 2, variant: 'dark', arrow: 'circle' },
  { id: 3, variant: 'dark', arrow: 'circle' },
  { id: 4, variant: 'dark', arrow: 'circle' },
  { id: 5, variant: 'light', arrow: 'circle' },
  { id: 6, variant: 'dark', arrow: 'plain' },
]

export function AboutPage() {
  return (
    <div className="about-page">
      <p className="about-page-kicker">About us</p>

      <section className="about-hero-first">
        <div className="about-hero-first-head">
          <h1>
            Where Champions
            <br />
            Are Shaped, Not Born.
          </h1>

          <p>
            Since 2009, Rohini Chess Academy Has Been Turning Curious Beginners Into
            Confident Players — One Move At A Time. We Believe Chess Is The Greatest
            Classroom On Earth.
          </p>

          <a className="about-hero-first-btn" href="#about-details">
            GET TO KNOW US
          </a>
        </div>

        <div className="about-hero-first-image">
          <img src={aboutHeroImage} alt="Chess training session" />
        </div>
      </section>

      <section className="about-memory-section" aria-label="Key memory benefits">
        <div className="about-memory-grid">
          {memoryCards.map((card) => (
            <article
              key={card.id}
              className={`about-memory-card ${card.variant === 'light' ? 'light' : ''}`}
            >
              <h3>Chess-trained Memory</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vestibulum commodo nunc at sit.
                Aenean aliquam posuere hac sem turpis lorem iaculis turpis.
              </p>

              <div className="about-memory-card-footer">
                {card.arrow === 'circle' ? (
                  <a className={`about-memory-cta ${card.variant === 'light' ? 'light' : ''}`} href="/courses-offered" aria-label="Open course details">
                    <ArrowUpRight size={26} strokeWidth={2.2} />
                  </a>
                ) : (
                  <a className="about-memory-cta plain" href="/courses-offered" aria-label="Open course details">
                    <ArrowUpRight size={24} strokeWidth={2.2} />
                  </a>
                )}

                <FileText
                  className="about-memory-doc"
                  size={56}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-coaching-section" aria-label="Master chess coaching">
        <div className="about-coaching-copy">
          <h2>
            Master Chess
            <br />
            With <span>Rohni Chess</span>
            <br />
            Coaching.
          </h2>

          <p className="about-coaching-subtext">
            Accelerate your game with structured lessons, live analysis, and personalized
            training plans designed for every skill level.personalized training plans
            designed for every skill level.
          </p>

          <p className="about-coaching-body">
            Lorem ipsum dolor sit amet consectetur. Massa feugiat tempor felis massa.
            Nunc varius faucibus eget aliquam adipiscing sed et ultrices laoreet. Aliquam
            erat facilisi purus nec scelerisque arcu nulla nulla. Et eget enim turpis
            augue eu convallis turpis quis egestas. Dictum condimentum pellentesque
            consequat in.
          </p>

          <a className="about-coaching-btn" href="/courses-offered">
            Start Your Free Trial
          </a>
        </div>

        <div className="about-coaching-image-wrap">
          <img src={coachingImage} alt="Kids receiving chess coaching" />
        </div>
      </section>

      <section className="about-duo-section" aria-label="Mission and vision">
        <article className="about-duo-row">
          <div className="about-duo-copy">
            <span className="about-duo-kicker">OUR MISSION</span>
            <h3>Empowering Every Move</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sit pretium integer sed diam
              tincidunt lobortis eu. Diam magna lobortis vehicula commodo et proin
              tellus. Volutpat enim at laoreet consectetur bibendum vel pulvinar. Diam
              magna lobortis vehicula commodo et proin tellus. Volutpat enim at laoreet
              consectetur bibendum vel pulvinar.
            </p>
            <a className="about-duo-btn" href="/courses-offered">
              LEARN MORE
            </a>
          </div>
          <div className="about-duo-image-wrap">
            <img src={missionBoardImage} alt="Chess board strategy pattern" />
          </div>
        </article>

        <article className="about-duo-row reverse">
          <div className="about-duo-image-wrap">
            <img src={visionKidImage} alt="Student focusing on a chess move" />
          </div>
          <div className="about-duo-copy">
            <span className="about-duo-kicker">OUR VISION</span>
            <h3>Vision Beyond The Board</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sit pretium integer sed diam
              tincidunt lobortis eu. Diam magna lobortis vehicula commodo et proin
              tellus. Volutpat enim at laoreet consectetur bibendum vel pulvinar. Diam
              magna lobortis vehicula commodo et proin tellus. Volutpat enim at laoreet
              consectetur bibendum vel pulvinar.
            </p>
            <a className="about-duo-btn" href="/courses-offered">
              LEARN MORE
            </a>
          </div>
        </article>
      </section>
    </div>
  )
}
