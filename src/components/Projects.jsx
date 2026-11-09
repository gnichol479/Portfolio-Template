import React, { useEffect, useRef, useState } from "react";

function Projects({ projects }) {
  const visibleProjects = Array.isArray(projects)
    ? projects.filter((project) => project?.title?.trim())
    : [];
  const [activeProject, setActiveProject] = useState(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!activeProject) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  if (visibleProjects.length === 0) {
    return null;
  }

  return (
    <section className="section-shell section-block" id="projects" aria-labelledby="projects-title">
      <div className="section-heading section-heading--split">
        <div>
          <p className="eyebrow">04 / Selected work</p>
          <h2 id="projects-title">Projects</h2>
        </div>
        <p className="section-heading__note">A few things I have made or explored.</p>
      </div>

      <div className="project-grid">
        {visibleProjects.map((project, projectIndex) => {
          const technologies = Array.isArray(project.technologies)
            ? project.technologies.filter((technology) => technology?.trim())
            : [];

          return (
            <article className="project-card" key={project.title}>
              {project.image?.trim() ? (
                <figure className="project-card__media">
                  <img
                    src={project.image}
                    alt={project.imageAlt || `${project.title} screenshot`}
                    onError={(event) => {
                      event.currentTarget.hidden = true;
                      event.currentTarget.parentElement?.classList.add(
                        "project-card__media--empty"
                      );
                    }}
                  />
                </figure>
              ) : (
                <div className="project-card__media project-card__media--empty" aria-hidden="true">
                  <span>Project preview</span>
                </div>
              )}

              <div className="project-card__body">
                <div>
                  <p className="project-card__index">
                    Project {String(projectIndex + 1).padStart(2, "0")}
                  </p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                {technologies.length > 0 && (
                  <ul className="tag-list" aria-label={`${project.title} technologies`}>
                    {technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                )}

                <span className="project-card__prompt" aria-hidden="true">
                  View details <span>↗</span>
                </span>
              </div>

              <button
                className="project-card__open"
                type="button"
                aria-haspopup="dialog"
                aria-controls="project-modal"
                aria-label={`View details for ${project.title}`}
                onClick={() => setActiveProject(project)}
              >
                <span className="sr-only">View details for {project.title}</span>
              </button>
            </article>
          );
        })}
      </div>

      {activeProject && (
        <div className="project-modal" id="project-modal">
          <button
            className="project-modal__backdrop"
            type="button"
            aria-label="Close project details"
            onClick={() => setActiveProject(null)}
          />

          <div
            className="project-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <div className="project-modal__media-wrap">
              {activeProject.image?.trim() ? (
                <figure className="project-modal__media">
                  <img
                    src={activeProject.image}
                    alt={
                      activeProject.imageAlt ||
                      `${activeProject.title} screenshot`
                    }
                    onError={(event) => {
                      event.currentTarget.hidden = true;
                      event.currentTarget.parentElement?.classList.add(
                        "project-modal__media--empty"
                      );
                    }}
                  />
                </figure>
              ) : (
                <div
                  className="project-modal__media project-modal__media--empty"
                  aria-hidden="true"
                >
                  <span>Project preview</span>
                </div>
              )}
            </div>

            <div className="project-modal__content">
              <div className="project-modal__header">
                <div>
                  <p className="eyebrow">
                    Project {String(visibleProjects.indexOf(activeProject) + 1).padStart(2, "0")}
                  </p>
                  <h2 id="project-modal-title">{activeProject.title}</h2>
                </div>
                <button
                  className="project-modal__close"
                  type="button"
                  aria-label="Close project details"
                  ref={closeButtonRef}
                  onClick={() => setActiveProject(null)}
                >
                  ×
                </button>
              </div>

              {activeProject.description?.trim() && (
                <p className="project-modal__description">
                  {activeProject.description}
                </p>
              )}

              {Array.isArray(activeProject.technologies) &&
                activeProject.technologies.filter((technology) => technology?.trim()).length > 0 && (
                  <ul
                    className="tag-list project-modal__tags"
                    aria-label={`${activeProject.title} technologies`}
                  >
                    {activeProject.technologies
                      .filter((technology) => technology?.trim())
                      .map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                  </ul>
                )}

              {(activeProject.githubUrl?.trim() || activeProject.liveDemoUrl?.trim()) && (
                <div className="project-modal__links">
                  {activeProject.liveDemoUrl?.trim() && (
                    <a
                      className="button button--primary"
                      href={activeProject.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open live demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {activeProject.githubUrl?.trim() && (
                    <a
                      className="button button--secondary"
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on GitHub <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
