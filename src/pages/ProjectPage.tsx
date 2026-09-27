import { Link, useParams } from "react-router-dom";
import ArchitecturePlate from "../components/ArchitecturePlate";
import PageMeta from "../components/PageMeta";
import { Arrow } from "../components/SiteLayout";
import { projects } from "../data/portfolio";
import NotFoundPage from "./NotFoundPage";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug && item.detail);
  if (!project) return <NotFoundPage />;
  const isVenue = project.slug === "venue-vendors";
  const nextProject = projects.find(
    (item) => item.detail && item.slug !== slug,
  )!;
  return (
    <div className={`case-page ${isVenue ? "venue-case" : "climate-case"}`}>
      <PageMeta title={project.title} description={project.summary} />
      <div className="wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/#work">Work</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{project.title}</span>
        </nav>
        <header className="case-header">
          <div>
            <h1>
              {project.title}
              <span className="heading-dot">.</span>
            </h1>

            <p className="case-summary">{project.summary}</p>

            {(project.liveUrl || project.repositoryUrl) && (
              <div className="case-actions">
                {project.liveUrl && (
                  <a
                    className="text-link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo <Arrow external />
                  </a>
                )}

                {project.repositoryUrl && (
                  <a
                    className="text-link"
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repository<Arrow external />
                  </a>
                )}
              </div>
            )}
          </div>

          <dl className="case-facts">
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
            <div>
              <dt>Context</dt>
              <dd>University team project</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>{project.teamSize} people</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>
                {isVenue ? "Full-stack systems" : "Relational data & analysis"}
              </dd>
            </div>
          </dl>
        </header>
        <ul
          className="case-stack technology-line"
          aria-label="Project technologies"
        >
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {isVenue ? (
          <div className="case-architecture">
            <div>
              <h2>
                A shared domain.
                <br />
                Two ways in.
              </h2>
              <p>
                The main workflow and administration have separate applications
                and APIs. Both paths use TypeORM with a shared Azure SQL database.
              </p>
              <p className="small-note">
                Inspect either API path or the persistence layer.
              </p>
            </div>
            <ArchitecturePlate />
          </div>
        ) : (
          <section
            className="climate-overview"
            aria-labelledby="climate-overview-title"
          >
            <h2 id="climate-overview-title">Explore. Compare. Export.</h2>
            <p className="climate-overview-intro">
              Three ways to work with Australian climate records.
            </p>
            <ol className="climate-workflow">
              <li>
                <h3>Explore records</h3>
                <p>State, latitude range and climate metric.</p>
              </li>
              <li>
                <h3>Compare stations</h3>
                <p>Percentage change across different date ranges.</p>
              </li>
              <li>
                <h3>Export results</h3>
                <p>Filtered and similarity-analysis results as CSV.</p>
              </li>
            </ol>
            <p className="workflow-caption">
              Filtering, similarity analysis and CSV export
            </p>
          </section>
        )}
        <div className="case-reading-layout">
          <aside className="case-index">
            <nav aria-label="On this page">
              <p>In this case study</p>
              {project.sections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.id === "validation"
                    ? "Validation & tests"
                    : section.id.charAt(0).toUpperCase() + section.id.slice(1)}
                </a>
              ))}
            </nav>
          </aside>
          <div className="case-content">
            {project.sections.map((section) => (
              <section
                className="case-section"
                id={section.id}
                key={section.id}
                tabIndex={-1}
              >
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items && (
                  <div className="case-items">
                    {section.items.map((item) => (
                      <div key={item.title}>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
        <nav className="next-project" aria-label="Other work">
          <Link className="text-link" to="/#work">
            Back to selected work
          </Link>
          <Link
            className="next-project-link"
            to={`/projects/${nextProject.slug}`}
          >
            <span>Next case study</span>
            <strong>{nextProject.title}</strong>
            <Arrow />
          </Link>
        </nav>
      </div>
    </div>
  );
}
