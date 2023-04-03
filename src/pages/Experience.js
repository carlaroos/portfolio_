import React from 'react';
import ExperienceComponent from '../components/ExperienceComponent';
import '../assets/fonts.css';

function Experience() {
  return (
    <section style={{ position: 'relative' }} id="experience">
      <div className="experience-container left">
        <ExperienceComponent
          title="Examensarbete"
          subtitle="NASDAQ"
          description="Här befinner jag mig för tillfället! "
          alignRight={true}
        />
      </div>
      <div className="experience-container right">
        <ExperienceComponent
          title="Studentjobb & sommarjobb"
          subtitle="ITS, Umeå Universitet"
          description="Sommarjobb 2022 och fortsatt studentjobb. Mina arbetsuppgifter innefattade en redesign av en del i deras befintliga system, samt front-end utveckling där jag fick se till att det befintliga systemet följde de designriktlinjer tagits fram."
          alignRight={false}
        />
      </div>
      <div className="experience-container lefte">
        <ExperienceComponent 
            title={`Civilingenjörs-\n  programmet \n Interaktion & Design`}
            subtitle="Umeå Universitet"
            description="Min nuvarande utbildning där jag beräknas bli färdig i Juni 2023"
            alignRight={true}
        />
    </div>
     
    </section>
  );
}

export default Experience;
