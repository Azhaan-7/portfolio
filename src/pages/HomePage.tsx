import { Link } from "react-router-dom";
import ArchitecturePlate from "../components/ArchitecturePlate";
import PageMeta from "../components/PageMeta";
import { Arrow } from "../components/SiteLayout";
import { practice, projects, site } from "../data/portfolio";

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Software Engineering Portfolio"
        description="Azhaanul Haque Farooqui, Software Engineering student at RMIT in Melbourne. Explore full-stack systems, backend development and relational data projects."
      />
      <section className="hero wrap" aria-labelledby="intro-title">
        <div className="hero-copy">
          <h1 id="intro-title">
            Azhaanul
            <br />
            Haque Farooqui<span className="name-stop">.</span>
          </h1>
          <p className="hero-role">
            Software Engineering student <br />
            at RMIT University.
          </p>
          <p className="hero-description">
            Building across the system: interfaces, APIs and the data behind
            them.
          </p>
          <div className="hero-actions">
            <Link className="button-primary" to="/projects/venue-vendors">
              Explore Venue Vendors <Arrow />
            </Link>
            <a className="text-link" href="#work">
              View featured projects <Arrow />
            </a>
          </div>
          <div className="hero-location">
            <span className="location-mark" aria-hidden="true" />
            {site.location}
          </div>
          <p className="hero-interests">
            Full-stack & backend development
            <br />
            Growing toward cloud & platform engineering
          </p>
        </div>
        <div className="hero-figure">
          <ArchitecturePlate />
          <p className="figure-note">
            <span>Featured system</span>
            <span>Completed university team project</span>
          </p>
        </div>
      </section>
      <section
        id="work"
        tabIndex={-1}
        className="section wrap"
        aria-labelledby="work-title"
      >
        <div className="section-heading">
          <h2 id="work-title">
            Selected work<span className="heading-dot">.</span>
          </h2>
          <p>
            Systems, data and the decisions
            <br className="desktop-break" /> that connect them.
          </p>
        </div>
        {projects.map((project, index) => (
          <article
            className={`project-entry project-${project.slug}`}
            key={project.slug}
          >
            <div className="project-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="project-entry-title">
              <h3>
                {project.detail ? (
                  <Link to={`/projects/${project.slug}`}>
                    {project.title}
                    <Arrow />
                  </Link>
                ) : (
                  project.title
                )}
              </h3>
              <p className="project-category">{project.category}</p>
              <p className="project-status">
                <span
                  className={`status-mark ${project.status === "In progress" ? "pending" : ""}`}
                  aria-hidden="true"
                />
                {project.status}
                {project.teamSize && <span> · Team of {project.teamSize}</span>}
              </p>
            </div>
            <div className="project-entry-body">
              <p>{project.summary}</p>
              <ul
                className="technology-line"
                aria-label={`${project.title} technologies`}
              >
                {project.technologies
                  .slice(0, index === 0 ? 9 : 7)
                  .map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
              </ul>
              {project.detail && (
                <Link className="text-link" to={`/projects/${project.slug}`}>
                  Read case study <Arrow />
                </Link>
              )}
            </div>
          </article>
        ))}
      </section>
      <section
        id="engineering"
        tabIndex={-1}
        className="practice-section"
        aria-labelledby="practice-title"
      >
        <div className="wrap practice-layout">
          <div className="practice-intro">
            <h2 id="practice-title">
              Beyond <br />
              the interface<span className="heading-dot">.</span>
            </h2>
            <p>
              A view of the engineering behind the projects, from application
              boundaries to the details of persistence and validation.
            </p>
            <span className="practice-note">Grounded in the work above.</span>
          </div>
          <div className="practice-list">
            {practice.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="practice-technologies">{item.technologies}</p>

                {item.slug ? (
                  <Link
                    className="practice-evidence"
                    to={`/projects/${item.slug}`}
                  >
                    Explore in {item.evidence} <Arrow />
                  </Link>
                ) : (
                  <span className="practice-evidence">
                    Evidence: {item.evidence}
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="about"
        tabIndex={-1}
        className="section wrap about-layout"
        aria-labelledby="about-title"
      >
        <h2 id="about-title">
          An engineering <br />
          education<span className="heading-dot">.</span>
        </h2>
        <div>
          <p className="about-lead">
            Learning through systems
            <br />
            built with other people.
          </p>
          <p>
            My projects span venue hiring, an ongoing community meal marketplace and
            climate-data exploration. They bring frontend development together with
            backend logic, relational databases, automated testing and team development.
          </p>
          <div className="education-record">
            <span className="education-institution">{site.university}</span>
            <h3>{site.degree}</h3>
            <p>{site.location}</p>
          </div>
        </div>
      </section>
      <section
        id="explore"
        tabIndex={-1}
        className="contact-section wrap"
        aria-labelledby="explore-title"
      >
        <div>
          <h2 id="explore-title">
            Keep exploring<span className="heading-dot">.</span>
          </h2>
          <p>Find my developer profile and public work on GitHub.</p>
        </div>
        <a className="contact-link" href={site.github}>
          Azhaan-7 <Arrow external />
        </a>
      </section>
    </>
  );
}
