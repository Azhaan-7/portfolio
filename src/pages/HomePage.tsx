import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { Arrow } from "../components/SiteLayout";
import { plannedProjects, practice, projects, site } from "../data/portfolio";

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
            Hi, I'm Azhaanul.
          </h1>
          <p className="hero-role">
            I'm studying Software Engineering at RMIT University in Melbourne.
          </p>
          <p className="hero-description">
            I enjoy building applications and understanding how their interfaces,
            backend services and databases fit together.
          </p>
          <p className="hero-description">I'm particularly interested in full-stack and backend development, with growing interests in AI integration and cloud/platform engineering. I'm seeking software engineering internship opportunities where I can contribute to real products and continue learning.</p>
          <div className="hero-actions">
            <Link className="button-primary" to="/#work">
              Explore projects <Arrow />
            </Link>
            <a className="text-link" href={site.resume} target="_blank" rel="noopener noreferrer" aria-label="View résumé (PDF, opens in a new tab)">
              View résumé <Arrow external />
            </a>
          </div>
          <div className="hero-location">
            <span className="location-mark" aria-hidden="true" />
            {site.location}
          </div>
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
                {project.status === "Completed" ? "Completed university team project" : project.status}
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
      <section className="planned-section" aria-labelledby="planned-title">
        <div className="wrap section">
          <div className="section-heading"><h2 id="planned-title">Projects in design</h2><p>Future directions; proposed capabilities have not shipped.</p></div>
          <div className="planned-list">
            {plannedProjects.map((project) => <article key={project.title}>
              <p className="project-status">{project.status}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <p className="planned-stack">{project.stack}</p>
            </article>)}
          </div>
        </div>
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
            I like tracing a feature from the screen to the data behind it. University
            team projects have given me opportunities to discuss design decisions,
            connect different parts of an application and learn alongside others.
          </p>
          <div className="education-record">
            <span className="education-institution">{site.university}</span>
            <h3>{site.degree}</h3>
            <p>{site.location}</p>
          </div>
        </div>
      </section>
      <section
        id="contact"
        tabIndex={-1}
        className="contact-section wrap"
        aria-labelledby="contact-title"
      >
        <div>
          <h2 id="contact-title">
            Contact
          </h2>
          <p>Get in touch about software engineering internship opportunities.</p>
        </div>
        <div className="contact-links">
          <a className="text-link" href={`mailto:${site.email}`}>{site.email}<Arrow /></a>
          <a className="text-link" href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">GitHub <Arrow external /></a>
          <a className="text-link" href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">LinkedIn <Arrow external /></a>
          <a className="text-link" href={site.resume} target="_blank" rel="noopener noreferrer" aria-label="Résumé (PDF, opens in a new tab)">Résumé <Arrow external /></a>
        </div>
      </section>
    </>
  );
}
