import React from "react";
import portfolioData from "./data/portfolioData";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const visibleSkills = Array.isArray(portfolioData.skills)
    ? portfolioData.skills.filter((skill) => skill?.trim())
    : [];
  const visibleProjects = Array.isArray(portfolioData.projects)
    ? portfolioData.projects.filter((project) => project?.title?.trim())
    : [];

  const sections = {
    about: Boolean(portfolioData.aboutText?.trim()),
    skills: visibleSkills.length > 0,
    projects: visibleProjects.length > 0,
    contact: Boolean(
      portfolioData.email?.trim() ||
        portfolioData.githubUrl?.trim() ||
        portfolioData.linkedinUrl?.trim()
    )
  };

  return (
    <div className="site-shell">
      <Header name={portfolioData.name} sections={sections} />
      <main>
        <Hero data={portfolioData} />
        <About text={portfolioData.aboutText} />
        <Skills skills={visibleSkills} />
        <Projects projects={visibleProjects} />
        <Contact
          email={portfolioData.email}
          githubUrl={portfolioData.githubUrl}
          linkedinUrl={portfolioData.linkedinUrl}
        />
      </main>
      <Footer name={portfolioData.name} />
    </div>
  );
}

export default App;
