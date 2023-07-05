import React from 'react'
import { imgCerveauBlanc } from '../../img/index.js';
import { useTranslation } from 'react-i18next';

function OurMission() {
    /* Traduction */
    const { t } = useTranslation();


  return (
    <section id="particles-js" className="about">
        <div className="content titleMission reveal ourstorydiv">
        <div className="textBx">
            <h2 className="T-ourMission hidden up">{t('home:OurMission:title')}</h2>
            <p className="ourstoryp T-ourMissionDesc hidden up delay-500">{t('home:OurMission:text')}</p>
        </div>
        <div className="imgBx">
            <img loading="lazy" className="brainImg hidden blur delay-500" src={imgCerveauBlanc}  alt='Our Mission'/>
        </div>
        </div>
    </section>
  )
}

export default OurMission