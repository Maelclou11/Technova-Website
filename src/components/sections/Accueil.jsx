import React from 'react'
import { iconWebDesign } from '../../img/index.js';
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';
import '../../App.css';

function Accueil() {
    /* Traduction */
    const { t } = useTranslation();


  return (
    <section id="home" className="home">
        <div className="home__content">
            <h1>
            <span className='db hidden'>{t('home:home:title')}</span>
            <span className='db hidden'>
                {/* {t('home:home:title2')} */}
                {' '}
                <Typewriter
                loop
                cursor
                cursorStyle='|'
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={2000}
                words={[t('home:home:title2'), t('home:home:title3'), t('home:home:title4')]}
                onInit={(typewriter) => {
                    setTimeout(() => {
                    typewriter.start();
                    }, 2000); }}
                onStart={(typewriter) => {
                    typewriter.deleteAll(); // Efface le premier mot déjà écrit
                }}
                />
            </span>
            </h1>
            <p className='hidden down delay-500'>{t('home:home:description')}</p>
            <div className="btn-container">
                <a href="#contactUs" className='hidden tleft delay-700 duration-300'>{t('home:home:startProject')}</a>
                <a href="#particles-js" className='hidden tleft delay-800 duration-300'>{t('home:home:moreAboutUs')}</a>
            </div>
        </div>
        <div className="home__img">
                <div className="img-transition hidden">
                    <img className="overflowBottom" src={iconWebDesign} alt="camera 3d"/> 
                </div>
            {/* <div className="test-3d">
                <Test3D />
            </div> */}
        </div>

    </section>
  )
}

export default Accueil

/* 
            <div className="img-transition hidden">
                 <img className="overflowBottom" src={imageAccueil} alt="camera 3d"/> 
                </div>
*/