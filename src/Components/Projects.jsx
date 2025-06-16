import React from 'react'
import './Projects.css'
import project1Img from '../assets/project-1.jpg'
import project2Img from '../assets/hero.jpg'

const projectList = [
  {
    title: "Portfolio Website",
    description: "A minimal React + Vite portfolio with soft design aesthetics.",
    image: project2Img,
    demo: "https://my-portfolio-blush-seven-53.vercel.app/",
    code: "https://github.com/H1baq/my-portfolio",
  },
  {
    title: "School website",
    description: "A modern school website built with responsive design ",
    image: project1Img,
    demo: "",
    code: "https://github.com/H1baq/Edu_Link",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Work</h2>
      <div className="project-grid">
        {projectList.map((proj, idx) => (
          <div key={idx} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <img src={proj.image} alt={proj.title} className="project-img" />

            <div className="links">
              <a href={proj.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={proj.code} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects
