import React, { useState } from 'react';
import TeamIcon from '../TeamIcon';
import TeamCard from '../TeamCard';
import { imgXav, imgChrist, imgVince, imgMael, imgEtienne, imgLaurie, imgThomas, imgPhillipe } from '../../img/index.js';
import { useTranslation } from 'react-i18next';

function Team() {
    /* Traduction */
    const { t } = useTranslation();

    const [activeIcon, setActiveIcon] = useState('content1');
    const [haveDisplayed, setHaveDisplayed] = useState(false);

    const handleClick = (iconId) => {
        setActiveIcon(iconId);
        setHaveDisplayed(true);
    };


  return (
    <section className="team">

        <div className="teamText">
            <h2 className='hidden tleft'>{t('home:OurTeam:title')}</h2>
            <p className='hidden tleft delay-300'>{t('home:OurTeam:text')}</p>
        </div>

        <div className="container__team hidden">
        <div className="container__team--icon">
            <TeamIcon onClick={handleClick} active={activeIcon === 'content1'} className={`hidden Teamscale ${haveDisplayed ? 'show' : ''}`} i="2" data_id="content1" iconSrc={imgXav} alt="Xavier Charland - Fondateur et Directeur Général de Tecnova"/>
            <TeamIcon onClick={handleClick} active={activeIcon === 'content2'} className={`hidden Teamscale delay-300 ${haveDisplayed ? 'show' : ''}`} i="3" data_id="content2" iconSrc={imgChrist} alt="Christophe Kinghorn - Directeur des opérations et Co-Propriétaire de Tecnova"/>
            <TeamIcon onClick={handleClick} active={activeIcon === 'content4'} className={`hidden Teamscale delay-400 ${haveDisplayed ? 'show' : ''}`} i="4" data_id="content4" iconSrc={imgMael} alt="Maël Cloutier - Développeur en chef et Designer chez Tecnova"/>
            <TeamIcon onClick={handleClick} active={activeIcon === 'content6'} className={`hidden Teamscale delay-450 ${haveDisplayed ? 'show' : ''}`} i="5" data_id="content6" iconSrc={imgThomas} alt="Thomas Barrial"/>
            <TeamIcon onClick={handleClick} active={activeIcon === 'content5'} className={`hidden Teamscale delay-500 ${haveDisplayed ? 'show' : ''}`} i="6" data_id="content5" iconSrc={imgEtienne} alt="Étienne Arsenault - Développeur et Designer chez Tecnova"/>
            <TeamIcon onClick={handleClick} active={activeIcon === 'content7'} className={`hidden Teamscale delay-550 ${haveDisplayed ? 'show' : ''}`} i="7" data_id="content7" iconSrc={imgLaurie} alt="Laurie Lafontaine - Préposée au Marketing chez Tecnova"/>
            <TeamIcon onClick={handleClick} active={activeIcon === 'content8'} className={`hidden Teamscale delay-600 ${haveDisplayed ? 'show' : ''}`} i="8" data_id="content8" iconSrc={imgPhillipe} alt="Philipe Noël Duperron - Directeur Marketing chez Tecnova"/>
            <TeamIcon onClick={handleClick} active={activeIcon === 'content3'} className={`hidden Teamscale delay-650 ${haveDisplayed ? 'show' : ''}`} i="9" data_id="content3" iconSrc={imgVince} alt="Vincent Denis - Directeur Financier et Co-Propriétaire de Tecnova"/>
        </div>
        <div className="team__content hidden delay-1200">
            <TeamCard 
                active={activeIcon === 'content1'} 
                id="content1" 
                photoSrc={imgXav}
                alt="Xavier Charland - Fondateur et Directeur Général de Tecnova" 
                name="Xavier Charland" role={t('home:OurTeam:members:xavier:role')} 
                email="xcharland@tecnova.ca" 
                number="819-237-6080" 
                telephone="1 + 819-237-6080" 
                linkedin="https://ca.linkedin.com/in/xavier-charland-350883200?trk=public_profile_browsemap"
            />

            <TeamCard 
                active={activeIcon === 'content2'} 
                id="content2" 
                photoSrc={imgChrist}
                alt="Christophe Kinghorn - Directeur des opérations et Co-Propriétaire de Tecnova" 
                name="Christophe Kinghorn" 
                role={t('home:OurTeam:members:christ:role')} email="christophe@tecnova.ca" 
                number="514-867-6055" 
                telephone="+1 514-867-6055" 
                linkedin="https://www.linkedin.com/in/christophe-kinghorn-bb668624a" 
            />

            <TeamCard 
                active={activeIcon === 'content3'} 
                id="content3" 
                photoSrc={imgVince}
                alt="Vincent Denis - Directeur Financier et Co-Propriétaire de Tecnova" 
                name="Vincent Denis" 
                role={t('home:OurTeam:members:vince:role')} email="vdenis@tecnova.ca" 
                number="418-906-6942" 
                telephone="+1 418-906-6942" 
                linkedin="https://www.linkedin.com/in/vincent-denis-a0a2b8251"
            />

            <TeamCard 
                active={activeIcon === 'content4'} 
                id="content4" 
                photoSrc={imgMael}
                alt="Maël Cloutier - Développeur en chef et Designer chez Tecnova" 
                name="Maël Cloutier" 
                role={t('home:OurTeam:members:mael:role')} email="mcloutier@tecnova.ca" 
                number="" 
                telephone="" 
                linkedin="" 
            />

            <TeamCard 
                active={activeIcon === 'content5'} 
                id="content5" 
                photoSrc={imgEtienne}
                alt="Étienne Arsenault - Développeur et Designer chez Tecnova" 
                name="Étienne Arsenault" 
                role={t('home:OurTeam:members:etienne:role')} 
                email="" 
                number="" 
                telephone="" 
                linkedin="" 
            />

            <TeamCard 
                active={activeIcon === 'content6'} 
                id="content6" 
                photoSrc={imgThomas}
                alt="Thomas Barrial" 
                name="Thomas Barrial" 
                role={t('home:OurTeam:members:thomas:role')} 
                email="" 
                number="" 
                telephone="" 
                linkedin="" 
            />

            <TeamCard 
                active={activeIcon === 'content7'} 
                id="content7"
                photoSrc={imgLaurie}
                alt="Laurie Lafontaine - Préposée au Marketing chez Tecnova" 
                name="Laurie Lafontaine" 
                role={t('home:OurTeam:members:laurie:role')} 
                email="laurie@tecnova.ca" 
                number="" 
                telephone="" 
                linkedin="" 
            />

            <TeamCard 
                active={activeIcon === 'content8'} 
                id="content8"
                photoSrc={imgPhillipe}
                alt="Philipe Noël Duperron - Directeur Marketing chez Tecnova" 
                name="Philippe Noël Duperron" 
                role={t('home:OurTeam:members:philippe:role')} 
                email="" 
                number="" 
                telephone="" 
                linkedin="https://ca.linkedin.com/in/philippe-no%C3%ABl-duperron-0901791ab" 
            />
        </div>
        </div>

    </section>
  )
}

export default Team