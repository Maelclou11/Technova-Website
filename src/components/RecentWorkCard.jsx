import React from 'react';
import { Link } from 'react-router-dom';

function RecentWorkCard({
  className,
  link,
  imageBgSrc,
  altBg,
  companyName,
  btnTexte,
  typeOfWork,
  logoSrc,
  altLogo,
  onClick,
  redirectToPage
}) {

  const scrollToElement = (elementId) => {
    setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
            const rect = element.getBoundingClientRect();
            const offsetTop = rect.top + window.pageYOffset;
            window.scrollTo({
                top: offsetTop - 80, // défilement de 80px plus haut
                behavior: 'smooth'
            });
        }
    }, 0);
};

  return (
    <div className={`workCard ${className}`}>
      {redirectToPage ? 
        <Link to={redirectToPage} onClick={() => scrollToElement(link)}>
          <div className="works work-1">
            <img src={imageBgSrc} alt={altBg} />
            <h3 className="work--title">{companyName}</h3>
            <p className="work--button">{btnTexte}</p>
            <p className="work--para">{typeOfWork}</p>
            {logoSrc && altLogo && (
              <img className="logoWork" src={logoSrc} alt={altLogo} />
            )}
          </div>
          <div className="shadowWork"></div>
        </Link>
    
      :
        <a href={link}>
          <div className="works work-1">
            <img src={imageBgSrc} alt={altBg} />
            <h3 className="work--title">{companyName}</h3>
            <p className="work--button">{btnTexte}</p>
            <p className="work--para">{typeOfWork}</p>
            {logoSrc && altLogo && (
              <img className="logoWork" src={logoSrc} alt={altLogo} />
            )}
          </div>
          <div className="shadowWork"></div>
        </a>
      }
    </div>
  );
}

export default RecentWorkCard;