import React from 'react';
import Project from '../components/Project';
import project1Img from '../assets/project1.png';
import spsmhifi1 from '../assets/spsm/spsmhifi1.png'
import spsmhifi2 from '../assets/spsm/spsmhifi2.png'
import spsmhifi3 from '../assets/spsm/spsmhifi3.png'
import spsmide from '../assets/spsm/spsmide.png'
import spsmlofi1 from '../assets/spsm/spsmlofi1.png'
import spsmlofi2 from '../assets/spsm/spsmlofi2.png'
import spsmlofi3 from '../assets/spsm/spsmlofi3.png'
import spsmoverview from '../assets/spsm/spsmoverview.png'
import spsmcover from '../assets/spsm/spsmcover.png'

const project2page = () => {
    return (
        <div class="projects-containers">
          <Project
            imgSrc={spsmcover}
            title="Specialpedagogiska skolmyndigheten"
            year="2020"
            description="Specialpedagogiska skolmyndigheten (SPSM) erhåller bildstödsbanker för elever som behöver olika typer av bildstöd i undervisning och vardagen. Uppdraget som SPSM gav var att uppdatera deras två bildstödsbanker som var utdaterade och behövde ett uppdaterat koncept för en kombination av bildstördbankerna. Målet med verktyget var att vuxna i elevernas närhet ska kunna skapa individanpassade läromedel och scheman bland annat. "/>
        <div class="text-container">
            <div class="overview">
                <h2 class="overview-title"> Överblick</h2>
                <p>Som en uppgift i kursen Design för användarupplevelse på Umeå Universitet skulle man som grupp  ta fram ett koncept utifrån uppdragsbeskrivningen. Under detta projekt var det första gången vi fick stöta på Double diamond för att få fram ett koncept. Vi började med research för att sedan försöka definiera, analysera och sammanfatta problemet. Detta gav oss en bra möjlighet att idégenerera och börja prototypa</p>   
                <img src={spsmoverview} alt="Project 1" />
            </div>

            <div class="process">
                <h2 class="overview-title">Process</h2>
                <p>Hela processen började med att vi undersöka liknande produkter. Det närmsta vi kunde komma på var Marabou Inventor, där användarna själva kunde bestämma smaksättningar till chokladen. Marabou inventor tillät bara användarna att klicka på ingredienserna och sedan syntes det på förpackningarna. Vidare utfördes en intervju med medarbetare på polarbröd för att undersöka vad som förväntades av verktyget. Detta tog sedan med till idégenereringen och fortsatt prototypframtagning. </p>   
                
                
                <h2 class="overview-title">Idégenerering</h2>
                <p>Efter research och ett försök att rama in behov och önskemål kunde vi börja idégenerera. Vi brainstormade tillsammans och sedan skissade ensamma för att få ner det vi hade tänkt utan att låsa sig till någon annans idé. Nedan syns ett exempel på det. </p>  
                <img src={spsmide} alt="Project 1" />
            </div>
            <div class="prototyp-section">
                <h2 class="overview-title">Lo-fi prototyp</h2>
                <img src={spsmlofi1} alt="Project 1" />
                <img src={spsmlofi2} alt="Project 1" />
                <img src={spsmlofi3} alt="Project 1" />
                <p> Efter att vi hade idégenererat och skissat försökte vi få ner idéerna i en lo-fi prototyp. Dessa testades sedan på en lärare som aktivt använder bildstöd inom sitt arbete vilket gav oss värdefull feedback som vi sedan tog med oss i framtagningen av hi-fi prototypen.</p>               
                <h2 class="overview-title">Hi-fi prototyp</h2>
                <p>Hi-fi prototypen gjordes i Adobe Xd där jag för första gången stötte på komponenter och states. Detta var väldigt lärorikt då jag kunde se smidigheten med det. Mitt ansvar låg på tre vyer. Dessa var hämta urval, hämta hela banker och mina dokument (se bilder).  </p>               
                <img src={spsmhifi1} alt="Project 1" />
                <img src={spsmhifi2} alt="Project 1" />
                <img src={spsmhifi3} alt="Project 1" />
            </div>
            <div class="final-result">
                <h2 class="overview-title">Slutresultat</h2>
                <p> Eftersom uppdraget gavs till alla som lästes kursen blev det ett flertal prototyper med samma uppdragsbeskrivning. Detta resulterade att SPSM fick välja den bästa prototypen de ville använda som underlag för att utveckla sidan. Det slutade med att de valde min grupps prototyp och ska utvecklas och användas av SPSM.</p>
            </div>
            
        </div>
        <div></div>


        
        </div>

        
      );
};

export default project2page;
