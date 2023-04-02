import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectImage from '../assets/project1.png';
import polarbrodcover from '../assets/polarbrod/polarbrodcover.png';
import spsmcoverimage from '../assets/spsm/spsmcoverimage.png';
import firststepcover from '../assets/1step/1stepcoverimage.png';
import grandpacover from '../assets/icebreakers/grandpa-cover.png'
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
  return (
    <section className="projects">
        
      <div className="project-row">
        <div className="project-column">
            <Link to="/project1">
                <ProjectCard
                    title="Smörgåsverktyg"
                    description="Ett koncept till ett smörgåsverktyg beställt av Polarbröd, mer specifikt deras innovationslabb Smedjan. Uppdraget var att undersöka och ta fram en digital lösning där konsumenter kan vara en del av processen med framtagning av nya produkter."
                    buttonText="Visa projekt &rarr;"
                    backgroundImage={polarbrodcover}
                />
            </Link>
        </div>
        <div className="project-column reverse">
          <Link to="/project2">  
          <ProjectCard
            title="Bildstödsplattform"
            description="Specialpedagogiska skolmyndigheten (SPSM) erhåller bildstödsbanker för elever som behöver olika typer av bildstöd i undervisning och vardagen. Uppdraget var att uppdatera deras två bildstödsbanker som var utdaterade och behövde ett uppdaterat koncept för en kombination av bildstördbankerna."
            buttonText="Visa projekt &rarr;"
            backgroundImage={spsmcoverimage}
          />
          </Link>
        </div>
        <div className="project-column">
        <Link to="/project3">  
          <ProjectCard
            title="Brand Identity"
            description="1step.se är ett företag som sammankopplar företag med stundeter i Västerbotten. Mitt uppdrag var att ta fram visuella och kommunikativa riktlinjer kring hur de ska visa och använda sitt varumärke. Detta inkluderade logotyp, riktlinjer, färger och texttyper."
            buttonText="Visa projekt &rarr;"
            backgroundImage={firststepcover}
          />
          </Link>
        </div>
        <div className="project-column">
        <Link to="/project4">  
          <ProjectCard
            title="Icebreakers"
            description="I kursen teknik för sociala medier var uppdraget att skapa ett socialt medium för äldre. Resultatet blev Icebreakers, en applikation där äldre kan hitta nya personer att skriva med för att förhoppningsvis knyta nya kontakater."
            buttonText="Visa projekt &rarr;"
            backgroundImage={grandpacover}
          />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
