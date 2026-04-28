import { courses } from '../data/siteContent'

export function CoursesPage() {
  return (
    <div className="inner-page">
      <header className="inner-header">
        <h1>Courses Offered</h1>
        <p>
          Structured chess learning paths for beginners, intermediate, and
          advance players.
        </p>
      </header>

      <section className="section slim">
        <div className="course-grid">
          {courses.map((course) => (
            <article key={course.title} className="course-card">
              <h2>{course.title}</h2>
              {course.duration ? <p className="duration">{course.duration}</p> : null}
              <p>{course.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section slim">
        <article className="curriculum-card">
          <h2>Curriculum Details</h2>
          <p>
            Detailed curriculum and level-wise progression sheets will be shared
            with enrolled students and partner schools.
          </p>
        </article>
      </section>
    </div>
  )
}
