import React from "react";

function Header({ name, sections }) {
  const navigationItems = [
    { id: "about", label: "About", visible: sections.about },
    { id: "skills", label: "Skills", visible: sections.skills },
    { id: "projects", label: "Projects", visible: sections.projects },
    { id: "contact", label: "Contact", visible: sections.contact }
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top" aria-label={`${name} home`}>
          {name}
        </a>

        <nav aria-label="Primary navigation">
          <ul className="site-nav">
            {navigationItems
              .filter((item) => item.visible)
              .map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
