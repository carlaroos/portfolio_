import React from 'react';
import './Project.css';

const Project = ({ imgSrc, title, year, description }) => {
  return (
    <div className="project-container">
      <div className="project-hero">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="project-content">
        <h1 className="project-title">{title}</h1>
        <p className="project-year">{year}</p>
        <div className="projects-card">
            <div className="description-title">
                <h2>Kontext</h2>
                    <div className="project-description">   
                        {description}
                    </div>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Project;
