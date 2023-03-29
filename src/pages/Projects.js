import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectImage from '../assets/project1.png';

function Projects() {
  return (
    <section className="projects">
        
      <div className="project-row">
        <div className="project-column">
          <ProjectCard
            title="Project 1"
            description="This is a description of project 1."
            buttonText="Visa projekt &rarr;"
            backgroundImage={projectImage}
          />
        </div>
        <div className="project-column reverse">
          <ProjectCard
            title="Project 2"
            description="This is a description of project 2."
            buttonText="Visa projekt &rarr;"
            backgroundImage={projectImage}
          />
        </div>
        <div className="project-column">
          <ProjectCard
            title="Project 3"
            description="This is a description of project 3."
            buttonText="Visa projekt &rarr;"
            backgroundImage={projectImage}
          />
        </div>
        <div className="project-column">
          <ProjectCard
            title="Project 4"
            description="This is a description of project 4."
            buttonText="Visa projekt &rarr;"
            backgroundImage={projectImage}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
