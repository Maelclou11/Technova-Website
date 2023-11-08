import React from 'react';
import {camera3dIcon} from '../img/index';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';


function InstantQuote() {

/* Traduction */
const { t, i18n } = useTranslation();

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
    <div className='InstantQuote'>
        <div className="imgBox">
            <img src={camera3dIcon} alt="" />
        </div>
        <div className="contentBox">
            <h2>{t('service:virtualTour:instantQuote:titre')} &nbsp;<a href='tel:819-237-6080'>819-237-6080</a></h2>
            <p>{t('service:virtualTour:instantQuote:texte')}</p>
            <button><Link to="/" onClick={() => scrollToElement('contactUs')}>{t('service:virtualTour:instantQuote:button')}<FontAwesomeIcon icon={faChevronCircleRight} /></Link></button>
{/*             <div className="form">
                <label htmlFor="">
                    <input type="text" name="name" placeholder='Name*'/>
                    Veuillez remplir ce champ obligatoire
                </label>
                <label htmlFor="">
                    <input type="email" name="email" placeholder='Email*'/>
                    Veuillez remplir ce champ obligatoire
                </label>
                <button type='submit'>Submit</button>
            </div> */}
        </div>
    </div>
  )
}

export default InstantQuote