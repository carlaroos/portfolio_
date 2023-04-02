import React from 'react';
import Project from '../components/Project';
import project1Img from '../assets/project1.png';
import firststepcover from '../assets/1step/1stepcover.jpg';
import firststepkoncept1 from '../assets/1step/1stepkoncept1.jpg';
import firststepkoncept2 from '../assets/1step/1stepkoncept2.png';
import firststepslutresultat from '../assets/1step/1stepslutresultat.png';


const project3page = () => {
    return (
        <div class="projects-containers">
          <Project
            imgSrc={project1Img}
            title="Project 2"
            year="2022"
            description="1step.se är ett företag som sammankopplar företag med stundeter i Västerbotten. Mitt uppdrag var att ta fram visuella och kommunikativa riktlinjer kring hur de ska visa och använda sitt varumärke. Detta inkluderade logotyp, riktlinjer, färger och texttyper. " />
        
        <div class="text-container">

            <div class="process">
                <h2 class="overview-title">Process</h2>
                <p>Efter att ha fått en utförlig uppdragsbeskrivning började jag skissa på olika idéer. Uppdragsgivaren ville se om man kunde inkoperera en trappa på något sett. Jag testade lite olika sätt att få in trappstegen (se bild)</p>   
                <img src={firststepcover} alt="Project 1" />
                <p>Från detta tyckte uppdragsgivaren att de tre blocken bäst passade dem men ville ha någon till variant. </p>
                
                <p>Tillbaka till skissbordet och då blev det ett mer abstrakt koncept, där trappstegen utgjordes av ettorna i 1step (se bild). </p>
                <img src={firststepkoncept1} alt="Project 1" />
                
                <p>Då hade jag två olika koncept, en där trappstegen utgjordes av ettorna och en annan där trappstegen utgjordes av block. Jag genomarbetade blocken lite mer och fick fram följande resultat: </p>  
                <img src={firststepkoncept2} alt="Project 1" />
                <p>Uppdragsgivaren var lite osäker kring vilken av alternativen som de skulle välja så en enkät skickades ut till nära och kära. Resultatet från enkäten blev trappstegen med block. Efter detta började arbetet med att ta fram fler färger och arbetet med att sätta designriktlinjer.</p>
            </div>
            <div class="final-result">
                <h2 class="overview-title">Slutresultat</h2>
                <img src={firststepslutresultat} alt="Project 1" />
                <p> 
                Detta var första gången jag gjorde en hel märkesidentitet så det var väldigt lärorikt och har gett mig fler uppdrag. Trots att denna typen av arbete inte inkluderas i min utbildning tyckte jag att det var väldigt roligt att få vara kreativ och få använda mig utav Figma på ett annat sätt och jag kände att mina ux och ui-kunskaper ändå kom till nytta. Uppdragsgivaren blev väldigt nöjd och håller nu på att inkorperera identiteten på deras hemsida <a href="https://www.1step.se">www.1step.se</a>
                </p>
            </div>
            
        </div>
        <div></div>


        
        </div>

        
      );
};

export default project3page;
