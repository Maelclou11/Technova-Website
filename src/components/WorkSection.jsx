import React from 'react'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function WorkSection({id, companyName, iframeTitle, matterportLink, videoLink, posterImg, websiteLink, typeOfWork, description, reverse, typeOfWork2, description2, isMoreScan, otherScansLinks}) {

    /* Traduction */
    const { i18n, t } = useTranslation();

    const scrollToElement = (elementId) => {
        setTimeout(() => {
            const element = document.getElementById(elementId);
            if (element) {
                const rect = element.getBoundingClientRect();
                const offsetTop = rect.top + window.pageYOffset;
                window.scrollTo({
                    top: offsetTop - 80, // défilement de 80px plus haut
                    behavior: 'smooth'
                });
            }
        }, 0);
    };

  return (
        <section class="recentWork__virtualTour" id={`${id}`}>
        <div class="recentWork__virtualTour--title">
            <Link to={'/'} onClick={() => scrollToElement('recentWork')}>
            <div className="backArrow">
                <FontAwesomeIcon icon={faArrowLeft} />
                <p>{t('workPortfolio:backToRecentWork')}</p>
            </div>
            </Link>
            <h2>{companyName}</h2>
        </div>

        <div class="virtualTour">
            <div class="virtualTour__content">

                {reverse === true ? 
                <>
                <div class="virtualTour__content--text">
                    <h3>{typeOfWork}</h3>
                    <p>{description}</p>
                </div>


                {matterportLink ? 
                    <div class="virtualTour__content--work">
                        <iframe class="captur3d-3d-tour__iframe"
                        title={iframeTitle}
                        width="100%"
                        height="480"
                        src={matterportLink}
                        frameborder="0"
                        allowfullscreen
                        mozallowfullscreen="true"
                        webkitallowfullscreen="true"
                        onmousewheel=""
                        allow='xr-spatial-tracking'>
                        </iframe>
                    </div>
                : videoLink ? 
                    <div class={`virtualTour__content--work videoContainer ${i18n.language === 'en' ? '' : 'Fr'}`}>
                        <a href={websiteLink}>
                        <video class="videoDemo" poster={posterImg} preload="none" loop muted>
                            <source src={videoLink} type="video/mp4"/>
                        </video>
                        </a>
                    </div>
                :
                    ''
                }

                </>
                :
                <>
                {matterportLink ? 
                    <div class="virtualTour__content--work">
                        <iframe class="captur3d-3d-tour__iframe"
                        title={iframeTitle}
                        width="100%"
                        height="480"
                        src={matterportLink}
                        frameborder="0"
                        allowfullscreen
                        mozallowfullscreen="true"
                        webkitallowfullscreen="true"
                        onmousewheel=""
                        allow='xr-spatial-tracking'>
                        </iframe>
                    </div>
                : videoLink ? 
                    <div class={`virtualTour__content--work videoContainer ${i18n.language === 'en' ? '' : 'Fr'}`}>
                        <a href={websiteLink}>
                        <video class="videoDemo" poster={posterImg} preload="none" loop muted>
                            <source src={videoLink} type="video/mp4"/>
                        </video>
                        </a>
                    </div>
                :
                    ''
                }

                <div class="virtualTour__content--text">
                    <h3>{typeOfWork}</h3>
                    <p>{description}</p>
                </div>
                </>
                }

                {matterportLink && videoLink ?
                    <div class="virtualTour">
                        <div class="virtualTour__content">
        
                            <div class={`virtualTour__content--work videoContainer ${i18n.language === 'en' ? '' : 'Fr'}`}>
                                <a href={websiteLink}>
                                <video class="videoDemo" poster={posterImg} preload="none" loop muted>
                                    <source src={videoLink} type="video/mp4"/>
                                </video>
                                </a>
                            </div>
        
                            <div class="virtualTour__content--text">
                                <h3>{typeOfWork2}</h3>
                                <p>{description2}</p>
                            </div>
                        </div>
                    </div>
                    : 
                    ''
                }

                {isMoreScan ? 
                    <div class="virtualTour__content justify-sb">
                        <div class="virtualTour__content--work">
                            <iframe class="captur3d-3d-tour__iframe"
                            title='Virtual Tour'
                            width="100%"
                            height="480"
                            src={otherScansLinks[0]}
                            frameborder="0"
                            allowfullscreen
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                            onmousewheel=""
                            allow='xr-spatial-tracking'>
                            </iframe>
                        </div>
                        <div class="virtualTour__content--work">
                            <iframe class="captur3d-3d-tour__iframe"
                            title='Virtual Tour'
                            width="100%"
                            height="480"
                            src={otherScansLinks[1]}
                            frameborder="0"
                            allowfullscreen
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                            onmousewheel=""
                            allow='xr-spatial-tracking'>
                            </iframe>
                        </div>
                    </div>
                    :
                    ''
                }
            </div>
        </div>
    </section>
  )
}

export default WorkSection