import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ServiceCard({icon, serviceName, serviceTexte, link, texteBtn, className}) {
  return (
    <div className={`mainService ${className}`}>
        <div className="serviceCard">
            <div className="service-icon">
                <FontAwesomeIcon className="svg-icon" size="3x" icon={icon} />
            </div>
            <h3>{serviceName}</h3> {/* Numérisation numérique 3D / Visites virtuelles */}
            <p>{serviceTexte}</p> {/* Nous aidons les prospects à imaginer leur espace en utilisant une technologie virtuelle 3D puissante et ingénieuse. */}
            <a className="learnMoreButton" href={link}>
                <span>{texteBtn}</span>
            </a>
        </div>
        <div className="shadowOne">
            <div className="lineService"></div>
        </div>
        <div className="shadowTwo"></div>
    </div>
  )
}

export default ServiceCard