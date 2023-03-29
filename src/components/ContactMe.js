import React from "react";
import "./ContactMe.css";

function ContactMe() {
  return (
    <div className="contact-me">
      <h2 className="subtitle">Kontakt</h2>
      <p>
        Om du vill komma i kontakt med mig så kan du maila mig på {" "} 
      </p>
      <a class="btn"href="mailto:jobb.carla@gmail.com">jobb.carla@gmail.com &rarr;</a> 
    </div>
  );
}

export default ContactMe;
