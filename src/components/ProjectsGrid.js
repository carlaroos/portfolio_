// ProjectsGrid.js
import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectsGrid.css';

function ProjectsGrid({ projects }) {
  return (
    <div className="projects-grid-container">
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            backgroundImage={project.backgroundImage}
            title={project.title}
            description={project.description}
            buttonText={project.buttonText}
            imageOnRight={project.imageOnRight}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsGrid;
