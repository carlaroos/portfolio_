import React from 'react';
import selfie1 from '../assets/selfie1.png' 
import selfie2 from '../assets/selfie2.jpeg' 
import './About.css'

function About() {
    return (
        <div className="about-container" id='about'>
        <h1 className='heading'>Om mig</h1>
        <div className="about-content">
          <div className="about-image">
            <img src={selfie1} alt="Selfie" />
            <div className="small-picture">
              <img src={selfie2} alt="Image 2" />
            </div>
          </div>
          <div className="about-text">
            <p>Kul att du hittade hit! Jag är 23 år gammal och studerar för närvarande mitt femte och sista år på Civilingenjörs-programmet Interaktion och Design på Umeå Universitet. Jag började studera programmet tack vare mitt stora intresse för teknik och kreativitet, och har trivts väldigt bra! På min fritid gillar jag att vara kreativ och självklart att umgås med hunden på bilden 🐶.</p>
          </div>
        </div>
      </div>
      
    );
  }

export default About;