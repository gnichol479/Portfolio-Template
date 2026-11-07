import React from "react";

function Hero({ data }) {
  const hasProjects = Array.isArray(data.projects)
    && data.projects.some((project) => project?.title?.trim());
  const hasResume = Boolean(data.resumePath?.trim());
  const hasProfileImage = Boolean(data.profileImage?.trim());

  return (
    <section
      className={`hero section-shell ${hasProfileImage ? "hero--with-image" : ""}`}
      id="top"
      aria-labelledby="hero-title"
    >
      <div className="hero__content">
        <p className="eyebrow">Hi, I’m</p>
        <h1 id="hero-title">{data.name}</h1>
        <p className="hero__headline">{data.headline}</p>
        <p className="hero__intro">{data.intro}</p>

        <div className="button-row" aria-label="Portfolio actions">
          {hasProjects && (
            <a className="button button--primary" href="#projects">
              View projects <span aria-hidden="true">↘</span>
            </a>
          )}
          {hasResume && (
            <a
              className="button button--secondary"
              href={data.resumePath}
              target="_blank"
              rel="noreferrer"
            >
              View resume <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>

      {hasProfileImage && (
        <div className="hero__aside">
          <div className="profile-frame">
            <img
              src={data.profileImage}
              alt={data.profileImageAlt || `Portrait of ${data.name}`}
              onError={(event) => {
                event.currentTarget.hidden = true;
                event.currentTarget.parentElement?.classList.add("profile-frame--empty");
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
