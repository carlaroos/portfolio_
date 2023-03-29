import React from 'react';
import ExperienceComponent from '../components/ExperienceComponent';
import '../assets/fonts.css';

function Experience() {
  return (
    <section style={{ position: 'relative' }}>
      <div className="experience-container left">
        <ExperienceComponent
          title="Examensarbete"
          subtitle="NASDAQ"
          description="Description 1"
          alignRight={true}
        />
      </div>
      <div className="experience-container right">
        <ExperienceComponent
          title="Studentjobb & sommarjobb"
          subtitle="ITS, Umeå Universitet"
          description="Description 2"
          alignRight={false}
        />
      </div>
      <div className="experience-container lefte">
        <ExperienceComponent 
            title={`Civilingenjörsprogrammet \n Interaktion & Design`}
            subtitle="Umeå Universitet"
            description="Description 3"
            alignRight={true}
        />
    </div>
     
    </section>
  );
}

export default Experience;
