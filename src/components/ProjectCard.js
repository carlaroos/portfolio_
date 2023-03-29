// ProjectCard.js
import React from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
  const imagePosition = props.imageOnRight ? 'right' : 'left';

  return (
    <div className={`project-card ${imagePosition}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
      ></div>
      <div className={`image-text ${imagePosition}`}>
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
        <button className="card-btn">{props.buttonText}</button>
      </div>
    </div>
  );
}

export default ProjectCard;
