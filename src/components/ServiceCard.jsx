import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function ServiceCard({ icon, imgSrc, serviceName, serviceTexte, link, texteBtn, className }) {
  const isExternalLink = link.startsWith('http');

  if (isExternalLink) {
    return (
      <div className={`mainService ${className}`}>
        <div className="serviceCard">
          <div className="service-icon">
            {icon ? <FontAwesomeIcon className="svg-icon" size="3x" icon={icon} /> : <img src={imgSrc} alt='3d matterport camera'/>}
          </div>
          <h3>{serviceName}</h3>
          <p>{serviceTexte}</p>
          <a className="learnMoreButton" href={link}>
            <span>{texteBtn}</span>
          </a>
        </div>
        <div className="shadowOne">
          <div className="lineService"></div>
        </div>
        <div className="shadowTwo"></div>
      </div>
    );
  } else {
    return (
      <div className={`mainService ${className}`}>
        <div className="serviceCard">
          <div className="service-icon">
            {icon ? <FontAwesomeIcon className="svg-icon" size="3x" icon={icon} /> : <img src={imgSrc} alt='3d matterport camera'/>}
          </div>
          <h3>{serviceName}</h3>
          <p>{serviceTexte}</p>
          <Link className="learnMoreButton" to={link}>
            <span>{texteBtn}</span>
          </Link>
        </div>
        <div className="shadowOne">
          <div className="lineService"></div>
        </div>
        <div className="shadowTwo"></div>
      </div>
    );
  }
}

export default ServiceCard;
