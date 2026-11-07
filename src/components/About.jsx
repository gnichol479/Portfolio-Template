import React from "react";

function About({ text }) {
  if (!text?.trim()) {
    return null;
  }

  return (
    <section className="section-shell section-block" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="eyebrow">02 / About</p>
        <h2 id="about-title">About Me</h2>
      </div>
      <div className="about-card">
        <p>{text}</p>
      </div>
    </section>
  );
}

export default About;
