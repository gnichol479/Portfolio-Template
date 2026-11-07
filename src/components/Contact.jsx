import React from "react";

function Contact({ email, githubUrl, linkedinUrl }) {
  const hasEmail = Boolean(email?.trim());
  const hasGithub = Boolean(githubUrl?.trim());
  const hasLinkedin = Boolean(linkedinUrl?.trim());

  if (!hasEmail && !hasGithub && !hasLinkedin) {
    return null;
  }

  return (
    <section className="section-shell section-block" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div className="section-heading">
          <p className="eyebrow">05 / Contact</p>
          <h2 id="contact-title">Let’s connect</h2>
        </div>
        <p className="contact-panel__copy">
          Add the links you want employers, collaborators, and classmates to use.
        </p>
        <div className="contact-links">
          {hasEmail && <a href={`mailto:${email}`}>{email}</a>}
          {hasGithub && (
            <a href={githubUrl} target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          )}
          {hasLinkedin && (
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
