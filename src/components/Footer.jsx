import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {imgLogoFooter} from '../img/index.js';
import emailjs from 'emailjs-com';


function Footer() {
    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        if (i18n.language === 'en') {
          i18n.changeLanguage('fr');
        } else {
          i18n.changeLanguage('en');
        }
      };

    function togglePrivacy(){
        const privacyToggle = document.querySelector('.privacyToggle');
        privacyToggle.classList.toggle('active');
    }
    function toggleTerms(){
        const termsToggle = document.querySelector('.termsToggle');
        termsToggle.classList.toggle('active');
    }
    function toggleRefund(){
        const refundToggle = document.querySelector('.refundToggle');
        refundToggle.classList.toggle('active');
    } 


    /* #region      Send the form Newsletter */
    const [email, setEmail] = useState('');
    const [isSent, setIsSent] = useState('');

    
    function sendEmail(e) {
        e.preventDefault();

        emailjs.send('service_xelok0a', 'template_g8pr5yx', { email }, 'qoVtexfIDNNBno05K')
            .then((result) => {
                console.log(result.text);
                setIsSent('Votre demande à été envoyé!')
            }, (error) => {
                console.log(error.text);
            });

        setEmail('');
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    useEffect(() => {
        if (isSent) {
          const timer = setTimeout(() => {
            setIsSent("");
          }, 3000);
          return () => clearTimeout(timer);
        }
      }, [isSent]);
    /* #endregion */

  return (
    <div>
        <footer>
        <div className="rowFooter">
                        {/* <!-- Colonne 1 --> */}
            <div className="colFooter">
                <img loading="lazy" className="logo-footer" src={imgLogoFooter} alt="logo" /> 
                <p>{t('footer:col1:text')}</p>
            </div>
                        {/* <!-- Colonne 2 --> */}
            <div className="colFooter">
                <h3>{t('footer:col2:title')}<div className="underline"><span></span></div></h3>
                <p>2680 Chemin Ste-Foy, G1V1V4</p>
                <p>Québec, Canada</p>
                <p className="email-id"><a className="mobileFooter" href='mailto:service@tecnova.ca'>service@tecnova.ca</a></p>
                <p><a className="mobileFooter" href='tel:1-819-237-6080'>1 + 819-237-6080</a></p>
                <p><a className="mobileFooter" href='tel:1-514-867-6055'>1 + 514-867-6055</a></p>
            </div>
                        {/* <!-- Colonne 3 --> */}
            <div className="colFooter">
                <h3>{t('footer:col3:title')}<div className="underline"><span></span></div></h3>
                <ul className="ulFooter">
                    <li><a href="#home">{t('footer:col3:home')}</a></li>
                    <li><a href="#service">{t('footer:col3:service')}</a></li>
                {/* <li><a className="T-trustedBy" href="#work">Trusted By</a></li> */}
                    <li><a href="#particles-js">{t('footer:col3:ourMission')}</a></li>
                    <li><a href="#contactUs"><p>{t('footer:col3:startProject')}<i className="fa-solid fa-arrow-right-long"></i></p></a></li>
                    <li><button onClick={changeLanguage}><p>{t('footer:col3:langSwitchBtn')}<i className="fa-solid fa-arrow-right-long"></i></p></button></li>
                </ul>
            </div>
                        {/* <!-- Colonne 4 --> */}
            <div className="colFooter">

                <h3>{t('footer:col4:title')}<div className="underline"><span></span></div></h3>
                {isSent && <div>{isSent}</div>}
                <form onSubmit={sendEmail}>
                    <label htmlFor="newsletter">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input
                            className="newsletter"
                            autoComplete="off"
                            name="Email"
                            type="email"
                            placeholder={t('footer:col4:placeholder')}
                            required
                            value={email}
                            id='newsletter'
                            onChange={handleEmailChange}
                        />
                    </label>
                    <button type="submit" aria-label="Send">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </form>

                <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100088121244307&mibextid=LQQJ4d" aria-label="See Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://www.linkedin.com/company/tecnovagroup/" aria-label="See Linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://www.instagram.com/tecnova.group/" aria-label="See Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
        </div>
        <hr/>
        <p className="copyright">{t('footer:copyright')}</p>
        <p className="legalContainer">
            <button className="legal" onClick={togglePrivacy}>{t('footer:policy:privacy:title')}</button>
             || 
            <button className="legal" onClick={toggleTerms}>{t('footer:policy:termOfUse:title')}</button>
             || 
            <button className="legal" onClick={toggleRefund}>{t('footer:policy:refund:title')}</button>
        </p>
    </footer>

    <div className="privacyToggle">
        <div className="privacyContainer">
            <div className="titleXlogoContainer">
                <h3>{t('footer:policy:privacy:title')}</h3>
                <FontAwesomeIcon icon={faXmark} onClick={togglePrivacy}/>
            </div>

            <div className="textLegal">
                
            <p
                dangerouslySetInnerHTML={{
                    __html: t('footer:policy:privacy:text').replace(/\n/g, '<br />')
                }}
                ></p>
            </div>
        </div>

    </div>
    <div className="termsToggle">
        <div className="privacyContainer">
            <div className="titleXlogoContainer">
                <h3>{t('footer:policy:termOfUse:title')}</h3>
                <FontAwesomeIcon icon={faXmark} onClick={toggleTerms}/>
            </div>
            <div className="textLegal">
                
                <p
                dangerouslySetInnerHTML={{
                    __html: t('footer:policy:termOfUse:text').replace(/\n/g, '<br />')
                }}
                ></p>
            </div>
        </div>

    </div>
    <div className="refundToggle">
        <div className="privacyContainer">
            <div className="titleXlogoContainer">
                <h3>{t('footer:policy:refund:title')}</h3>
                <FontAwesomeIcon icon={faXmark} onClick={toggleRefund}/>
            </div>
            <div className="textLegal">            
                <p
                dangerouslySetInnerHTML={{
                    __html: t('footer:policy:refund:text').replace(/\n/g, '<br />')
                }}
                ></p>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Footer