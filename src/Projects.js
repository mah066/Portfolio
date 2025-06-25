import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'Asteroid Dodger',
    description: 'A Tkinter-based game where the player dodges falling asteroids.',
    tech: ['Python', 'Tkinter'],
    github: 'https://github.com/mah066/Tkinter_Game',
  },
  {
    title: 'Thrifty Bee',
    description: 'A marketplace for university students with chat and moderation features.',
    tech: ['JavaScript', 'Node.js', 'MongoDB', 'Express', 'React'],
    github: 'https://github.com/mah066/Thrifty-Bee',
  },
  {
    title: 'Traffic Light FSM',
    description: 'A finite state machine in Verilog to control a crossroad traffic light.',
    tech: ['Verilog'],
    github: 'https://gitlab.cs.man.ac.uk/comp12111_2024/comp12111_a30604mh',
  },
  {
    title: 'Kingdom Simulator',
    description: 'A Java-based object-oriented game designed from UML specifications.',
    tech: ['Java'],
    github: 'https://github.com/mah066/Kingdom_Simulator',
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-list">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-item">{t}</span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
