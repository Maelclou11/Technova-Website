import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function TeamCard({active, id, photoSrc, alt, name, role, email, number, telephone, linkedin, className }) {
  return (
    <div className={`contentBx ${className} ${active ? 'active' : ''}`} id={id}>
      <div className="cardTeam">
        <div className="imgBox">
          <img loading="lazy" src={photoSrc} alt={alt} />
        </div>
        <div className="textBox">
          <h3>
            {name}
            <br />
            <span>{role}</span>
            <br />
            <span>{email}</span>
          </h3>
          {number && telephone && (
            <h3 className="mobile">
              <a href={`tel:${number}`}>
                <span>
                  <FontAwesomeIcon icon={faPhone} /> &nbsp;{telephone}
                </span>
              </a>
            </h3>
          )}
          {linkedin && (
            <ul className="sci">
              <li>
                <a href={linkedin} aria-label="See Linkedin">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
