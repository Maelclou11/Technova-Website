import React from 'react';

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
  onClick
}) {
  return (
    <div className={`workCard ${className}`}>
      <a href={link} onClick={onClick}>
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
    </div>
  );
}

export default RecentWorkCard;