import React from "react";

function Projects({ projects }) {
  const visibleProjects = Array.isArray(projects)
    ? projects.filter((project) => project?.title?.trim())
    : [];

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
        {visibleProjects.map((project) => {
          const technologies = Array.isArray(project.technologies)
            ? project.technologies.filter(Boolean)
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
                  <p className="project-card__index">Project {String(visibleProjects.indexOf(project) + 1).padStart(2, "0")}</p>
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

                {(project.githubUrl?.trim() || project.liveDemoUrl?.trim()) && (
                  <div className="project-card__links">
                    {project.githubUrl?.trim() && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        GitHub <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    {project.liveDemoUrl?.trim() && (
                      <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">
                        Live demo <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
