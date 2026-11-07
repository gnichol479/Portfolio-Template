import React from "react";

function Skills({ skills }) {
  if (!Array.isArray(skills) || skills.length === 0) {
    return null;
  }

  return (
    <section className="section-shell section-block" id="skills" aria-labelledby="skills-title">
      <div className="section-heading">
        <p className="eyebrow">03 / Skills</p>
        <h2 id="skills-title">What I use</h2>
      </div>
      <ul className="skills-list" aria-label="Skills">
        {skills.filter(Boolean).map((skill) => (
          <li className="skill-pill" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
