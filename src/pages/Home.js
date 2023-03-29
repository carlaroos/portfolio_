import React from 'react';
import './Home.css';
import '../assets/fonts.css';
import ExperienceComponent from '../components/ExperienceComponent';
import Experience from './Experience';
import ProjectCard from '../components/ProjectCard.js';
import Projects from './Projects';
import Footer from '../components/FooterComponent';

function Home() {
  return (
    <>
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
          <button className="project">Projekt</button>
          <button className="contact">Kontakt</button>
        </div>
      </div>

      <div class="containers">  
      <h1 class="heading">Projekt</h1>
      <Projects />
      <section>
        <div>
          <div>
          <h1 class="heading">Erfarenhet</h1>
            <Experience/>
          </div>
        </div>
      </section>
      </div>

    <div class="footer-container"><Footer /></div>
    
    </>
  );
}

export default Home;
