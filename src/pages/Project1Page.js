import React from 'react';
import Project from '../components/Project';
import project1Img from '../assets/project1.png';
import polarbrodhifi1 from '../assets/polarbrod/polarbrodhifi1.png';
import polarbrodhifi2 from '../assets/polarbrod/polarbrodhifi2.png';
import polarbrodide from '../assets/polarbrod/polarbrodide.png';
import polarbrodlofi from '../assets/polarbrod/polarbrodlofi.png';
import polarbrodhmidfi from '../assets/polarbrod/polarbrodmidfi.png';
import polarbrodoverview from '../assets/polarbrod/polarbrodoverview.png';
import polarbrodcover from '../assets/polarbrod/polarbrodcover.png';

const project1page = () => {
    return (
        <div class="projects-containers">
          <Project
            imgSrc={polarbrodcover}
            title="Project 2"
            year="2021"
            description="Ett koncept till ett smörgåsverktyg beställt av Polarbröd, mer specifikt deras innovationslabb Smedjan. Uppdraget var att undersöka och ta fram en digital lösning där konsumenter kan vara en del av processen med framtagning av nya produkter. Resultatet blev ett smörgåsverktyg med syfte för att hålla i en tävling där användarna får skapa en egen smörgås och sedan tävla om den bästa smörgåsen." />
        
        <div class="text-container">
            <div class="overview">
                <h2 class="overview-title"> Överblick</h2>
                <p>Som en uppgift i kursen Design Build Test på Umeå Universitet skulle man som grupp kontakta ett företag, få ett uppdrag och sedan ta fram ett koncept utifrån uppdragsbeskrivningen. Min grupp bestod av 3 andra, där vi delade upp olika segment i verktygen och sedan fördelades ansvaret till respektive segment. Konceptet genomarbetades från idégenerering till en färdig klickbar prototyp. Mitt personliga ansvar var på ingrediensdelen vilket är anledningen till varför den delen beskrivs mer djupgående. </p>
                <img src={polarbrodoverview} alt="Project 1" />
            </div>

            <div class="process">
                <h2 class="overview-title">Process</h2>
                <p>Hela processen började med att vi undersöka liknande produkter. Det närmsta vi kunde komma på var Marabou Inventor, där användarna själva kunde bestämma smaksättningar till chokladen. Marabou inventor tillät bara användarna att klicka på ingredienserna och sedan syntes det på förpackningarna. Vidare utfördes en intervju med medarbetare på polarbröd för att undersöka vad som förväntades av verktyget. Detta tog sedan med till idégenereringen och fortsatt prototypframtagning. </p>   
                
                
                <h2 class="overview-title">Idégenerering</h2>
                <p>Resultatet av brainstormingen gav en överblick på strukturen trots att det var ett första utkast. Efter brainstormingen började vi skissa och visualisera de idéer vi gillade mest.</p>  
                <img src={polarbrodide} alt="Project 1" />
            </div>
            <div class="prototyp-section">
                <h2 class="overview-title">Lo-fi prototyp</h2>
                <p>Lo-fi-fasen bestod av att göra pappersprototyper, wireframes, användartester, samt en avstämning med Smedjan för att höra deras åsikter.</p>
                <h3 class="second-title">Pappersprototyp</h3>
                <img src={polarbrodlofi} alt="Project 1" />
                <p>Efter avstämning och pappersprototyper var det dags att börja göra wireframes. Vi antecknade de kommentarer vi fick från avstämningsmötet och sedan lade vi in alla wireframes i Miro för att markera ut de element som fått kommentarer och hur vi skulle lösa problemen.</p>
                <img src={polarbrodhmidfi} alt="Project 1" />

                <h2 class="overview-title">Hi-fi prototyp</h2>
                <p>I denna fas gjorde vi en kopia av wireframsen och omvandlade allt till mockups med färger och bilder. De komponenter som skapades i wireframesen gjordes om och nya skapades. Vi fortsatte att följa Polarbröds designmanual och kolla deras hemsida för att se till att känslan av verktyget passade in med Polarbröds egna design. Vi lade till bilder på ingredienser, bestämde vilka ingredienskategorier som skulle finnas. Här låg mitt huvudfokus på att göra “välj ingredienser” i både desktop-version och mobil version.</p>
                <div class="image-container">
                    <img src={polarbrodhifi1} alt="Project 1" />
                    <img src={polarbrodhifi2} alt="Project 1" />
                </div>
                
            </div>
            
        </div>
        <div></div>


        
        </div>

        
      );
};

export default project1page;
