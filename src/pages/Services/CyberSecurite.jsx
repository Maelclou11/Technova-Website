import { NavBar, Footer, HoverImage } from '../../components/indexComponent';
import React from 'react'
import {cybersecurite3D, biometricIcon, balance} from '../../img/index';
import '../../CSS/CyberSecurite.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faUser, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



function CyberSecurite() {

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
    <div className='CyberSecurite'>
    <NavBar />
    <section>
        <div id='accueil' className="home">
            <div className="home-content">
                <div className="home--textContainer">
                    <div className="home--text">
                        <p className='small-title'><FontAwesomeIcon icon={faShieldHalved}></FontAwesomeIcon>{t('service:cybersecurite:accueil:surtitre')}</p>
                        <h1><span className=''>{t('service:cybersecurite:accueil:titre1')}</span> <span className='blue-word'>{t('service:cybersecurite:accueil:titre2')} 
                            <svg width="45" height="62" viewBox="0 0 45 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_406_121)">
                                <path d="M37.5531 42.2036C38.5405 40.7218 38.4564 37.478 36.4821 36.3329C34.9718 35.5709 33.2661 35.8691 32.4691 36.5251C31.1861 37.3081 29.9505 39.8123 29.9505 42.3481L34.3807 42.3425L34.3795 47.334L25.1848 47.3291C25.3052 49.8965 26.6927 51.953 29.2746 53.0981C28.9422 54.18 27.3851 56.3853 25.2468 56.2359C24.8247 58.5696 24.4235 59.8796 22.5009 62C20.577 59.8802 20.1758 58.5696 19.7536 56.2359C17.6153 56.3853 16.0583 54.18 15.7259 53.0981C18.3078 51.953 19.6953 49.8965 19.8157 47.3291L10.6204 47.334V42.3425L15.0494 42.3481C15.0494 39.8123 13.8156 37.3081 12.5314 36.5251C11.7344 35.8697 10.0293 35.5715 8.5196 36.3329C6.54414 37.478 6.45934 40.7224 7.44677 42.2036C-1.88185 40.4558 -0.956488 31.3655 2.22146 28.0653C4.78988 25.3993 7.58993 24.9826 9.74912 25.8234C14.6561 27.5984 17.9564 33.5131 18.1167 42.3481H20.6827C20.6827 34.3167 19.2977 31.7561 15.689 21.6688C13.8715 16.9016 14.9634 11.008 18.2126 5.58118C19.3764 3.63626 20.8302 1.88044 22.5009 0C24.1703 1.88044 25.6241 3.63626 26.7879 5.58118C30.0371 11.008 31.129 16.9016 29.3127 21.6688C25.7022 31.7561 24.3172 34.316 24.3172 42.3481H26.8831C27.0435 33.5131 30.345 27.5984 35.2508 25.8234C37.4099 24.9833 40.2118 25.3993 42.779 28.0653C45.9564 31.3655 46.8817 40.4558 37.5531 42.2036Z" fill="#0440B6"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_406_121">
                                <rect width="45" height="62" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            </span></h1>
                        <p className='texte'>{t('service:cybersecurite:accueil:texte')} </p>
                        <div className="btn-container">
                            <button className='btn-info'><a href='#dois-je-me-conformer'>{t('service:cybersecurite:accueil:button1')}</a></button>
                            <button className='btn-cta'><a href='#Se-Conformer'>{t('service:cybersecurite:accueil:button2')} <FontAwesomeIcon icon={faCircleCheck} beat/></a></button>
                        </div>
                    </div>
                </div>

                <div className="home-img">
                    <img className='levitate' src={cybersecurite3D} alt="Design 3d du site MXB Tech dans un cellulaire" />
                </div>
            </div>
        </div>
    </section>
    <section className="bande-bleu" id='dois-je-me-conformer'>
        <h2>{t('service:cybersecurite:collecte:titre')}</h2>
        <div className="iconBox-container">

            <div className="iconBox">
                <div className="icon">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <h3>{t('service:cybersecurite:collecte:info1')}</h3>
            </div>

            <div className="iconBox">
                <div className="icon">
                    <img src={biometricIcon} alt="icon qui représente des informations biométrique" />
                </div>
                <h3>{t('service:cybersecurite:collecte:info2')}</h3>
            </div>

            <div className="iconBox">
                <div className="icon">
                    <FontAwesomeIcon icon={faMoneyCheckDollar} />
                </div>
                <h3>{t('service:cybersecurite:collecte:info3')}</h3>
            </div>

        </div>
    </section>
    <section className='section'>
        <h2 className='mesure-title'>{t('service:cybersecurite:mesures:titre')}</h2>
        <div className="list">
            <div className="list-container">
                <h3>{t('service:cybersecurite:mesures:mesuresListe:mesure1')}</h3>
                <h3>{t('service:cybersecurite:mesures:mesuresListe:mesure2')}</h3>
                <h3>{t('service:cybersecurite:mesures:mesuresListe:mesure3')}</h3>
            </div>
            <div className="list-container">
                <h3>{t('service:cybersecurite:mesures:mesuresListe:mesure4')}</h3>
                <h3>{t('service:cybersecurite:mesures:mesuresListe:mesure5')}</h3>
                <h3>{t('service:cybersecurite:mesures:mesuresListe:mesure6')}</h3>
            </div>
        </div>
    </section>
    <section className='section section-amende'>
        <h2>{t('service:cybersecurite:amendes:titre')}</h2>
        <div className="container">
            <div className="content">
                <p>{t('service:cybersecurite:amendes:texte')}</p>
                <ul>
                    <li>{t('service:cybersecurite:amendes:amendesListe:amende1')}</li>
                    <li>{t('service:cybersecurite:amendes:amendesListe:amende2')}</li>
                    <li>{t('service:cybersecurite:amendes:amendesListe:amende3')}</li>
                </ul>
            </div>
            <div className="imgBox">
                <img src={balance} alt="Balance représentant la loi et les sanctions légales de la loi 25 au Québec" />
            </div>
        </div>
    </section>
    <section className="section cta" id='Se-Conformer'>
        <h2>{t('service:cybersecurite:CTA:titre1')} <br/> {t('service:cybersecurite:CTA:titre2')}</h2>
        <button><Link to="/?form=simple" onClick={() => scrollToElement('contactUs')}>{t('service:cybersecurite:CTA:button')} <FontAwesomeIcon icon={faCircleCheck} /></Link></button>
        <p className="plus-info">{t('service:cybersecurite:CTA:documentation')} <a href='https://www.cai.gouv.qc.ca/documents/CAI_Guide_obligations_entreprises_vf.pdf'>{t('service:cybersecurite:CTA:link')}</a></p>
    </section>
    <Footer />
</div>
  )
}

export default CyberSecurite