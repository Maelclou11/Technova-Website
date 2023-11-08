import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ServiceCardImage({ backgroundSrc, iconSrc, iconAlt, titreDuService, text }) {
  // État pour suivre si le composant est survolé
  const [isHovered, setIsHovered] = useState(false);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: isHovered ? 0 : 1,
    transition: 'opacity 0.3s',
    position: 'absolute', // Afin que cette div occupe toute la place de la div parent
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1 // Afin que le contenu soit au-dessus de l'arrière-plan
  };

  /* Scroller jusqu'a l'id */
  const scrollToElement = (elementId) => {
    setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 0);
    };

  return (
    <div 
      className={`ServiceCardImage ${isHovered ? 'hover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative' }}
    >
      <div className="backgroundLayer" style={backgroundStyle}></div>
      <span className='service-icon'>
        <img src={iconSrc} alt={iconAlt} />
      </span>
      <h3>{titreDuService}</h3>
      <div className={`animated ${isHovered ? 'hover' : ''}`}>
        <p>{text}</p>
        <button><Link to="/" onClick={() => scrollToElement('contactUs')}>Nous Joindre</Link></button>
      </div>
    </div>
  );
}

export default ServiceCardImage;
