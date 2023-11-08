import { NavBar, Footer, DomainBenefit, QuestionFaq, InstantQuote, TitleLeft, LogoCarousel } from '../../components/indexComponent';
import RecentWork from '../../components/sections/RecentWork';
import React, {useState} from 'react'
import {virtualTourImg} from '../../img/index';
import '../../CSS/CyberSecurite.css';
import '../../CSS/VisiteVirtuelles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faCubes, faChevronDown, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function VisitesVirtuelles() {
    const [showWork, setShowWork] = useState(false);

    /* Traduction */
    const { t, i18n } = useTranslation();

  $(window).scroll(() => {
    if ($(window).scrollTop() > 0) {
      $('.indexMenu').addClass('navbar-scrolled');
    } else {
      $('.indexMenu').removeClass('navbar-scrolled');
    }
  });

/* Scroller jusqu'a l'id */
const scrollToElement = (elementId) => {
    setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 0);
    };

    // Les logo des realisation ainsi que les lien reliés
    const logos = [
        { url: "https://matterport.com/sites/default/files/images/homepage-logo-aws_0.png"},
        { url: "https://matterport.com/sites/default/files/images/homepage-logo-choice.png"},
        { url: "https://matterport.com/sites/default/files/images/homepage-logo-vmware.png"},
        { url: "https://matterport.com/sites/default/files/images/homepage-logo-orangetheory.png"},
        { url: "https://matterport.com/sites/default/files/images/homepage-logo-p&g.png"},
        { url: "https://matterport.com/sites/default/files/images/homepage-logo-wework.png"},
        { url: "https://matterport.com/sites/default/files/images/homepage-logo-redfin.png"},
        { url: "https://matterport.com/sites/default/files/images/homepage-logo-netflix.png"},
        { url: "https://matterport.com/sites/default/files/images/homepage-logo-waldorf.png"},
    ];


  return (
    <div className='CyberSecurite VisiteVirtuelle'>
    <NavBar isWhite={true}/>
    <section className='Accueil-Service'>
        <div id='accueil' className="home">
            <div className="home-content">
                <div className="home--textContainer">
                    <div className="home--text">
                        <p className='small-title'><FontAwesomeIcon icon={faCubes}></FontAwesomeIcon>{t('service:virtualTour:accueil:surTitre')}</p>
                        <h1>{t('service:virtualTour:accueil:titre')}</h1>

                        <p className='texte'>{t('service:virtualTour:accueil:texte')}</p>
                        <div className="btn-container">
                            <button className='btn-info'><a href='#dois-je-me-conformer'>{t('service:virtualTour:accueil:button1')}</a></button>
                            <button className='btn-cta'>{t('service:virtualTour:accueil:button2')} <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                        </div>
                    </div>
                </div>

                <div className="home-img">
                    <img src={virtualTourImg} alt="" />
                </div>
            </div>
        </div>
    </section>
    <section id='realisation'>
        <TitleLeft title={t('service:virtualTour:trustBy')}/>
        <LogoCarousel logos={logos} />
    </section>
    <section className='DomainBenefits'>
        <DomainBenefit/>
    </section>
    <section>
        <InstantQuote />
    </section>
    <section className="stats">
        <div className="stat-container">
            <div className="stat">
                <p className="title">{t('service:virtualTour:stat:stat1:title')}</p>
                <p className="stat-percent">14%</p>
                <p className="text">{t('service:virtualTour:stat:stat1:desc')}</p>
            </div>
            <div className="stat">
                <p className="title">{t('service:virtualTour:stat:stat2:title')}</p>
                <p className="stat-percent">50%</p>
                <p className="text">{t('service:virtualTour:stat:stat2:desc')}</p>
            </div>
            <div className="stat">
                <p className="title">{t('service:virtualTour:stat:stat3:title')}</p>
                <p className="stat-percent">30%</p>
                <p className="text">{t('service:virtualTour:stat:stat3:desc')}</p>
            </div>
            <div className="stat">
                <p className="title">{t('service:virtualTour:stat:stat4:title')}</p>
                <p className="stat-percent">16%</p>
                <p className="text">{t('service:virtualTour:stat:stat4:desc')}</p>
            </div>
        </div>
    </section>
    <section className='section'>
        <h2 className='mesure-title'>{t('service:virtualTour:question:titre')}</h2>
        <div className="questions-container">
            <QuestionFaq question={t('service:virtualTour:question:question1')} reponse={t('service:virtualTour:question:reponse1')} />
            <QuestionFaq question={t('service:virtualTour:question:question2')} reponse={t('service:virtualTour:question:reponse2')} />
            <QuestionFaq question={t('service:virtualTour:question:question3')} reponse={t('service:virtualTour:question:reponse3')} />
            <QuestionFaq question={t('service:virtualTour:question:question4')} reponse={t('service:virtualTour:question:reponse4')} />
        </div>
    </section>
    <section className="section cta">
        <h2>{t('service:virtualTour:cta:titre')}</h2>
        <div className="button-container">
            <button onClick={() => {setShowWork(!showWork)}}> {t('service:virtualTour:cta:button1')} <FontAwesomeIcon icon={faChevronDown} /></button>
            <button><Link to="/" onClick={() => scrollToElement('contactUs')}>{t('service:virtualTour:cta:button2')} <FontAwesomeIcon icon={faChevronCircleRight} /></Link></button>
        </div>


        {showWork ? 
            <RecentWork type={"virtualTour"} animation={false}/>
        :
        ""
        }
    </section>

    <Footer />
</div>
  )
}

export default VisitesVirtuelles