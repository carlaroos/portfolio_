import React from 'react';
//import './Home'
import './Home.css';
import '../assets/fonts.css'; 
function Home() {
    return(     
        <>

        <div class ="container">
            <div class="subtitle">
            <h2>HEJ! JAG HETER CARLA OCH ÄR </h2>
            </div>
            <div class="title">
                <h1>INTERAKTIONSDESIGNER</h1>
            </div>

            <div class="terms">
                <ul>
                    <li>UX & UI DESIGNER</li>
                    <li>UX RESEARCHER</li>
                    <li>FRONT-END</li>
                </ul>
            </div>

            <div class="cta-buttons">
                <button class="project">Projekt</button>
                <button class="contact">Kontakt</button>
            </div>
        </div>
        </>
    );
}

export default Home;