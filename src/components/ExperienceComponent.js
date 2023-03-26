import React from 'react';
import '../assets/fonts.css';

function ExperienceComponent(props) {
  const { title, subtitle, description, alignRight } = props;
  const textAlign = alignRight ? "right" : "left";

  return (
    <div className={`exp-container ${alignRight ? "right" : "left"}`}>
      <div className="exp-content" style={{ textAlign }}>
        <h3 class="titleExp">
          {title.split("\n").map((item, key) => {
            return (
              <React.Fragment key={key}>
                {item}
                <br />
              </React.Fragment>
            );
          })}
        </h3>
        <h4 class="subtitleExp">{subtitle}</h4>
        <p class="descriptionExp">{description}</p>
      </div>
    </div>
  );
}

export default ExperienceComponent;
