import React from 'react';
import './Home.css';
import '../assets/fonts.css';
import ExperienceComponent from '../components/ExperienceComponent';
import Experience from './Experience';

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

      <section>
        <div>
          <div>
            <Experience/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
