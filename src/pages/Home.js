import React from 'react';
import './Home.css';
import '../assets/fonts.css';
import ExperienceComponent from '../components/ExperienceComponent';
import Experience from './Experience';
import ProjectCard from '../components/ProjectCard.js';
import Projects from './Projects';
import Footer from '../components/FooterComponent';
import ContactMe from '../components/ContactMe';
import About from './About';

function Home() {
  return (
    <>
    <div className="main">
      <div className="container">
        <div className="subtitle">
          <h2>Hej! Jag heter Carla och är (snart färdig) </h2>
        </div>
        <div className="title">
          <h1>INTERAKTIONSDESIGNER</h1>
        </div>

        <div className="terms">
          <ul>
            <li>UX & UI DESIGN</li>
            <li>UX RESEARCH</li>
            <li>FRONT-END</li>
          </ul>
        </div>

        <div className="cta-buttons">
          <button className="contact"> <a href='#contact'>Kontakt</a></button>
        </div>
      </div>

      <div class="containers" id="projects">  
      <h1 class="heading">Projekt</h1>
        <Projects />
      </div>
      <section>
        <div className='about-containers'>
            <About/>
        </div>
        
      </section>
      <section>
        <div className='experience-section' id="experience">
          <div class="experience">
          <h1 class="heading2">Erfarenhet</h1>
            <Experience/>
          </div>
        </div>
      </section>
      
    

    <div class="contact-container" id="contact">
        <ContactMe />
    </div>
      
    <div class="footer-container">
       
    </div>
    </div>
    
    </>
  );
}

export default Home;
