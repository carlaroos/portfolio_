import React from 'react';
import Project from '../components/Project';

import grandpacover from '../assets/icebreakers/grandpa-coverpicture.png';
import grandpaguide from '../assets/icebreakers/grandpa-guide.png';
import grandpastructure from '../assets/icebreakers/grandpa-structure.png';
import grandpawhiteboard from '../assets/icebreakers/grandpa-whiteboard.jpeg';




const project3page = () => {
    return (
        <div class="projects-containers">
          <Project
            imgSrc={grandpacover}
            title="Icebreakers"
            year="2022"
            description="I kursen teknik för sociala medier var uppdraget att skapa ett socialt medium för äldre. Kursen var ett samarbete med en australiensisk kurs där de skötte marketing och vi skötte prototypframtagning och utveckling. Resultatet blev Icebreakers, en applikation där äldre kan hitta nya personer att skriva med för att förhoppningsvis knyta nya kontakater. "/>
        <div class="text-container">
            <div class="overview">
                <h2 class="overview-title"> Överblick</h2>
                <p>Som en uppgift i kursen Teknik för sociala medier på Umeå Universitet skulle man som grupp ta fram något slags socialt medium för äldre. Kursen var i samarbete med en marketing-klass i Australien där de undersökte marknaden för att hitta vilka problem och behov som de äldre invånare i landet har. Det största genomgående problemet som uppdagades var just att de äldre hade en hög brist på socialt umgänge. För att försöka lösa detta rådande problem valde vi att skapa Icebreakers, ett koncept för en app där äldre kunde starta konversationer med andra äldre baserat på intressen och på så sätt knyta nya kontakter.  </p>
                <img src={grandpastructure} alt="Project 1" />
            </div>

            <div class="process">
                <h2 class="overview-title">Process</h2>
                <p>De australiensiska studenternas market-research på äldre i Australien berättade att många äldre är väldigt ensamma, speciellt under covid. Många har få relationer som inte är familj och upplever det svårt att knyta nya kontakter. Med detta som grund började gruppen fundera på olika koncept. Vi hade någon idé att göra något med hobbys, folk i närheten men kände att vi ville utöka det. Då valde vi att fokusera mer på just att skapa nya kontakter online. Då spelar inte fysisk form någon roll, då många av användarbasen kan ha problem med det. Efter en del idégenerering kom i fram till Icebreakers. En applikation där användaren kan skriva inlägg kopplat till vissa intressen, och sedan finna likasinnade med samma intressen. Konversationen kan sedan tas vidare i en chatt där man kan skriva med personen, och om personen verkar rimlig kan man sedan dela med sig av kontaktuppgifter och fortsätta knyta kontakt via en annan applikation.  </p>   
                <p>Fokuset under denna kurs låg på att faktiskt utveckla något, vilket vi gjorde i React. Gruppen delades in i utveckling och UX, där mitt fokus hamnade på just UX. Värt att nämna är att vi använde oss utav Material UI (Googles egna designbibliotek) då det fanns färdiga komponenter vilket underlättade kodningen. Det är  också anledningen till varför vi inte tog några större kreativa friheter, utan begränsade oss mer till designbiblioteket. </p>
                
                <h2 class="overview-title">Idégenerering</h2>
                <p>Vi brainstormade tillsammans hela gruppen för att sammanställa våra idéer och sedan skissade vi tillsammans. </p>     
                <img src={grandpawhiteboard} alt="Project 1" />
                <p>Efter att vi hade skrivit ner vad vi ville ha i applikationen så behövde vi prioritera. Vi använde oss utav MoSCoW (Must, Should, Could, Won't). Efter prioritering strukturerade vi arbetet och valde olika tekniker som skulle användas. </p>
            </div>
            <div class="prototyp-section">
                <h2 class="overview-title">Prototyp</h2>
                <p>Pågrund av tidsbrist och eftersom prototypen utvecklades samtidigt som programmeringen skedde låg fokuset på att utveckla Hi-fi prototypen. Slutresultatet UX-mässigt blev en applikation med fem huvudskärmar och två subskärmar. Ett hem-feed, utforska, chatt, upptäck nya personer och profil. Tidsbristen resulterade även i att kod-prototypen begränsades då det skulle vara för tidskrävande att koda en chatt. Trots detta togs det fram i UX-prototypen då det illustrerade vår tanke till marketing-gruppen i Austrailen. I UX "gruppen" var det jag och en klasskompis, men vi hade ett nära samarbete där vi arbetade på allt tillsammans. </p>
                <h3 class="second-title">Slutresultat</h3>
                <img src={grandpaguide} alt="Project 1" />
               
                
            </div>
            
        </div>
        <div></div>


        
        </div>

        
      );
};

export default project3page;
