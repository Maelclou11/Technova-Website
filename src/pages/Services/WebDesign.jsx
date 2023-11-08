import { NavBar, Footer, BannerWord, ServiceCardImage, TitreSurtitre, TitleLeft,LogoCarousel, QuestionFaq } from '../../components/indexComponent';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {balance, imageWebDesign, iconServiceWebDesign, imageServiceWebDesign, imageServiceOptimisation, iconServiceOptimisation, imageServiceWebDev, iconServiceWebDev, imgOrdinateurBleu, iconStep1, iconStep2, iconStep3, iconStep4, iconStep5, logoFlawlaceSupplyBlack, imgLogoVesiBlack, logoFermeFlorale, logoGarageLeclerc, logoCliniqueMpd} from '../../img/index';
import '../../CSS/CyberSecurite.css';
import '../../CSS/WebDesign.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoneyCheckDollar, faCode } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { useTranslation } from 'react-i18next';


function WebDesign() {
    /* Traduction */
    const { t, i18n } = useTranslation();

    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const updateCursorPos = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', updateCursorPos);

        return () => {
            document.removeEventListener('mousemove', updateCursorPos);
        };
    }, []);

    /* Scroller jusqu'a l'id */
    const scrollToElement = (elementId) => {
        setTimeout(() => {
            const element = document.getElementById(elementId);
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
        };
    

    const logos = [
        { url: logoFlawlaceSupplyBlack, link: 'https://www.flawlacesupply.ca/'},
        { url: 'https://brunellesport.com/cdn/shop/t/2/assets/logo.svg?v=154944832994368556901597415404', link: 'https://brunellesport.com/'},
        { url: imgLogoVesiBlack},
        { url: logoFermeFlorale},
        { url: logoGarageLeclerc},
        { url: logoCliniqueMpd, link: 'https://cliniquempd.ca/'},
        ];
    
  return (
    <div className='CyberSecurite WebDesign'>
    <NavBar isWhite={true}/>

    <section>
        <div id='accueil' className="home">
            <div className="home-content">
                <div className="home--textContainer">
                    <div className="home--text">

                        <p className='small-title'>
                            <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>{t('service:webdesign:accueil:surtitre')}
                        </p>
                        <h1>{t('service:webdesign:accueil:titre')}</h1>
                        <p className='texte'>{t('service:webdesign:accueil:texte')}</p>
                        <div className="btn-container">
                            <button className='btn-info'><a href='#dois-je-me-conformer'>{t('service:webdesign:accueil:button1')}</a></button>
                            <button className='btn-cta'><a href='#Se-Conformer'>{t('service:webdesign:accueil:button2')} <FontAwesomeIcon icon={faCircleCheck} beat/></a></button>
                        </div>
                    </div>
                </div>

                <div className="home-img">
                    <img src={imageWebDesign} alt="Design 3d du site MXB Tech dans un cellulaire" />
                </div>
            </div>
        </div>
    </section>

    <BannerWord />

    <section className='web-service-section'>
        <TitreSurtitre titre={t('service:webdesign:service:titre')} surtitre={t('service:webdesign:service:surtitre')}/>
        <div className="web-service">
            <ServiceCardImage backgroundSrc={imageServiceWebDesign} iconSrc={iconServiceWebDesign} iconAlt={"Service de Web Design Tecnova Québec"} titreDuService={t('service:webdesign:service:service1')} text={t('service:webdesign:service:desc1')}/>
            <ServiceCardImage backgroundSrc={imageServiceWebDev} iconSrc={iconServiceWebDev} iconAlt={"Service de développement Web Tecnova Québec"} titreDuService={t('service:webdesign:service:service2')} text={t('service:webdesign:service:desc2')}/>
            <ServiceCardImage backgroundSrc={imageServiceOptimisation} iconSrc={iconServiceOptimisation} iconAlt={"Service de Web Design Tecnova Québec"} titreDuService={t('service:webdesign:service:service3')} text={t('service:webdesign:service:desc3')}/>
        </div>
    </section>

    <section id="besoindaide">
        <TitleLeft title={t('service:webdesign:probleme:titre')} />
        <div className='besoindaide__content'>
            <div className="imgBox">
                <img className="hidden bottom" src={imgOrdinateurBleu} alt="icone d'une ordinateur qui représente un design web fait par MXB Tech" />
            </div>
            <ul>
                <li className='hidden right blur'>{t('service:webdesign:probleme:probleme1')}</li>
                <li className='hidden right blur d1'>{t('service:webdesign:probleme:probleme2')}</li>
                <li className='hidden right blur d2'>{t('service:webdesign:probleme:probleme3')}</li>
                <li className='hidden right blur d3'>{t('service:webdesign:probleme:probleme4')}</li>
                <li className='hidden right blur d4'>{t('service:webdesign:probleme:probleme5')}</li>
            </ul>
        </div>
        <div className="btn-devis hidden right d4">
            <button><Link to="/" onClick={() => scrollToElement('contactUs')}>{t('service:webdesign:probleme:button')}</Link></button>
        </div>
    </section>

    <section id='process'>
        <TitreSurtitre titre={t('service:webdesign:processus:titre')} surtitre={t('service:webdesign:processus:surtitre')}/>

        <div className="processus-container">
            <div className="steps">
                <div className="step" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
                    <div className="icon"><img src={iconStep1} alt="Consultation"/></div>
                    <h3>{t('service:webdesign:processus:etape1:titre')}</h3>
                    <p>{t('service:webdesign:processus:etape1:desc')}</p>
                    <span>1</span>
                </div>
                <div className="step" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
                    <div className="icon"><img src={iconStep2} alt="Consultation"/></div>
                    <h3>{t('service:webdesign:processus:etape2:titre')}</h3>
                    <p>{t('service:webdesign:processus:etape2:desc')}</p>
                    <span>2</span>
                </div>
                <div className="step" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
                    <div className="icon"><img src={iconStep3} alt="Consultation"/></div>
                    <h3>{t('service:webdesign:processus:etape3:titre')}</h3>
                    <p>{t('service:webdesign:processus:etape3:desc')}</p>
                    <span>3</span>
                </div>
                <div className="step" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
                    <div className="icon"><img src={iconStep4} alt="Consultation"/></div>
                    <h3>{t('service:webdesign:processus:etape4:titre')}</h3>
                    <p>{t('service:webdesign:processus:etape4:desc')}</p>
                    <span>4</span>
                </div>
                <div className="step" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
                    <div className="icon"><img src={iconStep5} alt="Consultation"/></div>
                    <h3>{t('service:webdesign:processus:etape5:titre')}</h3>
                    <p>{t('service:webdesign:processus:etape5:desc')}</p>
                    <span>5</span>
                </div>
            </div>
                {/* Élément pour le curseur personnalisé */}
                    {hovering && (
                        <div
                            className="custom-cursor"
                            style={{
                                left: `${cursorPos.x}px`,
                                top: `${cursorPos.y}px`
                            }}
                        ></div>
                )}
        </div>
    </section>

    <section id='realisation'>
        <TitleLeft title={t('service:webdesign:realisation:titre')}/>
        <LogoCarousel logos={logos} />
    </section>

    <section className='section'>
        <h2 className='mesure-title'>{t('service:webdesign:pointfort:titre')}</h2>
        <div className="list">
            <div className="list-container">
                <h3>{t('service:webdesign:pointfort:point1')}</h3>
                <h3>{t('service:webdesign:pointfort:point2')}</h3>
                <h3>{t('service:webdesign:pointfort:point3')}</h3>
            </div>
            <div className="list-container">
                <h3>{t('service:webdesign:pointfort:point4')}</h3>
                <h3>{t('service:webdesign:pointfort:point5')}</h3>
                <h3>{t('service:webdesign:pointfort:point6')}</h3>
            </div>
            <div className="list-container">
                <h3>{t('service:webdesign:pointfort:point7')}</h3>
                <h3>{t('service:webdesign:pointfort:point8')}</h3>
                <h3>{t('service:webdesign:pointfort:point9')}</h3>
            </div>
        </div>
    </section>

    <section id='web-design-faq'>
        <div className="questions-container">
            <TitleLeft title={t('service:webdesign:faq:titre')} />
            <QuestionFaq question={t('service:webdesign:faq:question1')} reponse={t('service:webdesign:faq:reponse1')} />
            <QuestionFaq question={t('service:webdesign:faq:question2')} reponse={t('service:webdesign:faq:reponse2')} />
            <QuestionFaq question={t('service:webdesign:faq:question3')} reponse={t('service:webdesign:faq:reponse3')} />
            <QuestionFaq question={t('service:webdesign:faq:question4')} reponse={t('service:webdesign:faq:reponse4')} />
            <QuestionFaq question={t('service:webdesign:faq:question5')} reponse={t('service:webdesign:faq:reponse5')} />
            <QuestionFaq question={t('service:webdesign:faq:question6')} reponse={t('service:webdesign:faq:reponse6')} />
        </div>
    </section>



    {/* <section className='section section-amende'>
        <h2>Amendes et sanctions</h2>
        <div className="container">
            <div className="content">
                <p>Pénalités financières</p>
                <ul>
                    <li>Une amende allant jusqu'à 25 000 000 de dollars canadiens</li>
                    <li>Une somme correspondant à 4% du chiffre d'affaires global de l'entreprise de l'année fiscale précédente</li>
                    <li>Des sanctions plus fortes sont prévues pour les plus graves infractions</li>
                </ul>
            </div>
            <div className="imgBox">
                <img src={balance} alt="Balance représentant la loi et les sanctions légales de la loi 25 au Québec" />
            </div>
        </div>
    </section> */}
    <section className="section cta" id='Se-Conformer'>
        <h2>{t('service:webdesign:cta:titre1')} <br/> {t('service:webdesign:cta:titre2')}</h2>
        <button><Link to="/?form=simple" onClick={() => scrollToElement('contactUs')}>{t('service:webdesign:cta:button')} <FontAwesomeIcon icon={faCircleCheck} /></Link></button>
    </section>
    <Footer />
</div>
  )
}

export default WebDesign