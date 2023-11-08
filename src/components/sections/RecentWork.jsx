import React from 'react'
import TitleLeft from '../TitleLeft';
import RecentWorkCard from '../RecentWorkCard';
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {LogoCarousel} from '../indexComponent';
import { EffectCoverflow } from "swiper";
import { workJacquesEtFils,logoJaquesEtFils, logoJaquesEtFilsBlack, workBrunelleSport,imgLogoVesi, imgLogoVesiBlack, workConcordiaLogo, workConcordiaBg, workPrevelBg, workPrevelLogo ,logoPrevelBlack, workFlawlaceSupply, logoFlawlaceSupply, hexagoneBg, imgLogoNavBar, logoMontrealDuFutur, logoMontrealDuFuturBlack, logoVrbo, vrboBg, logoCliniqueMpd, logoFlawlaceSupplyBlack, montrealDuFutur, logoChezLionel } from '../../img/index.js';
import { useTranslation } from 'react-i18next';

function RecentWork({type, animation}) {
    /* Traduction */
    const { t, i18n } = useTranslation();
    

    function handleVoidClick(event) {
        event.preventDefault();
      }

    const logos = [
        { url: imgLogoVesiBlack, link:"https://tecnova.ca/realisations#Vesi-Design"},
        { url: "https://leskygym.com/wp-content/uploads/2021/05/logo-sky-gym.png", link:"https://tecnova.ca/realisations#SkyGym" },
        { url: "https://brunellesport.com/cdn/shop/t/2/assets/logo.svg?v=154944832994368556901597415404", link:"https://tecnova.ca/realisations#Brunelle-Sport"},
        { url: logoVrbo},
        { url: workConcordiaLogo, link:"https://tecnova.ca/realisations#Universite-Concordia"},
        { url: logoPrevelBlack, link:"https://tecnova.ca/realisations#Groupe-Prevel-Immobilier"},
        { url: logoJaquesEtFilsBlack, link:"https://tecnova.ca/realisations#Jacques-Fils-Funetarium"},
        { url: logoMontrealDuFuturBlack, link:"https://tecnova.ca/realisations#Montreal-Du-Futur"},
        { url: "https://cache.marriott.com/content/dam/marriott-digital/de/global-property-shared/en_us/logo/assets/de-delta-hotels-logo-41030.png", link:"https://tecnova.ca/realisations#Delta-Marriott"},
        { url: logoCliniqueMpd, link:"https://tecnova.ca/realisations#Marie-Pier-Dube-Clinique-Dentaire"},
        { url: logoFlawlaceSupplyBlack, link:"https://tecnova.ca/realisations#FlawlaceSupply"},
        { url: "https://i0.wp.com/www.imagine360.marketing/wp-content/uploads/Group-Petra.jpg?ssl=1", link:""},
        { url: logoChezLionel, link:""}
    ];

  return (
    <section id='recentWork'>
        <TitleLeft title={t('home:RecentWork:RecentWorkTitle')} className={`${animation ? "hidden tleft" : ''}`} />
        <div className="works__container">
            {type === 'virtualTour' ? 
                    <div className="works__content">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                        rotate: 20,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                        }}
                        modules={[EffectCoverflow]}
                        className="mySwiper"
                        initialSlide={4}
                    >
                        {/* <SwiperSlide>
                            <RecentWorkCard
                            redirectToPage={'/realisations'}
                            link={"Vesi-Design"} 
                            imageBgSrc='https://cdn.shopify.com/s/files/1/0708/0479/9773/files/IMG_9296.jpg?v=1675047187'
                            altBg={t('home:RecentWork:VesiDesign:altBg')} 
                            companyName={t('home:RecentWork:VesiDesign:title')}  
                            btnTexte={t('home:RecentWork:seeWorkBtn')} 
                            typeOfWork={t('home:RecentWork:VesiDesign:typeOfWork')}
                            logoSrc={imgLogoVesi} 
                            altLogo={t('home:RecentWork:VesiDesign:altLogo')} 
                            className={`${animation ? "hidden tright delay-300" : ''}`}
                            />
                        </SwiperSlide> */}
                        <SwiperSlide>
                            <RecentWorkCard
                            redirectToPage={'/realisations'} 
                            link={"SkyGym"}
                            imageBgSrc='https://lh5.googleusercontent.com/p/AF1QipOeXzZlidydgJ3Gyjv1aZEW1iXk_TRQC_3ZiS6S=w750-h704-p-k-no' 
                            altBg={t('home:RecentWork:SkyGym:altBg')} 
                            companyName={t('home:RecentWork:SkyGym:title')}  
                            btnTexte={t('home:RecentWork:seeWorkBtn')} 
                            typeOfWork={t('home:RecentWork:SkyGym:typeOfWork')}
                            logoSrc='https://leskygym.com/wp-content/uploads/2021/05/logo-sky-gym.png'
                            altLogo={t('home:RecentWork:SkyGym:altLogo')}   
                            className={`${animation ? "hidden tright delay-300" : ''}`}
                            />
                        </SwiperSlide>
                        {/* <SwiperSlide>
                            <RecentWorkCard
                            redirectToPage={'/realisations'} 
                            link={"Brunelle-Sport"}
                            imageBgSrc={workBrunelleSport} 
                            altBg={t('home:RecentWork:BrunelleSport:altBg')} 
                            companyName={t('home:RecentWork:BrunelleSport:title')}  
                            btnTexte={t('home:RecentWork:seeWorkBtn')} 
                            typeOfWork={t('home:RecentWork:BrunelleSport:typeOfWork')}
                            className={`${animation ? "hidden tright delay-400" : ''}`}  
                            />
                        </SwiperSlide> */}
                        <SwiperSlide>
                            <RecentWorkCard
                            imageBgSrc={vrboBg} 
                            altBg={t('home:RecentWork:VRBO:altBg')} 
                            companyName={t('home:RecentWork:VRBO:title')}  
                            btnTexte={t('home:RecentWork:comingSoonBtn')} 
                            typeOfWork={t('home:RecentWork:VRBO:typeOfWork')}
                            logoSrc={logoVrbo}
                            altLogo={t('home:RecentWork:VRBO:altLogo')}   
                            className={`${animation ? "hidden tright delay-300" : ''}`}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <RecentWorkCard
                                redirectToPage={'/realisations'} 
                                link={"Montreal-Du-Futur"}
                                imageBgSrc={montrealDuFutur} 
                                altBg={t('home:RecentWork:MontrealDuFutur:altBg')} 
                                companyName={t('home:RecentWork:MontrealDuFutur:title')} 
                                btnTexte={t('home:RecentWork:seeWorkBtn')} 
                                typeOfWork={t('home:RecentWork:MontrealDuFutur:typeOfWork')} 
                                logoSrc={logoMontrealDuFutur} 
                                altLogo={t('home:RecentWork:MontrealDuFutur:altLogo')}
                                className={`${animation ? "hidden tright delay-200" : ''}`} 
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <RecentWorkCard
                            redirectToPage={'/realisations'}
                            link={"Universite-Concordia"}
                            imageBgSrc={workConcordiaBg}
                            altBg={t('home:RecentWork:Concordia:altBg')} 
                            companyName={t('home:RecentWork:Concordia:title')}  
                            btnTexte={t('home:RecentWork:seeWorkBtn')} 
                            typeOfWork={t('home:RecentWork:Concordia:typeOfWork')}
                            logoSrc={workConcordiaLogo} 
                            altLogo={t('home:RecentWork:Concordia:altLogo')} 
                            className={`${animation ? "hidden tright delay-300" : ''}`}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <RecentWorkCard
                                redirectToPage={'/realisations'} 
                                link={"Delta-Marriott"}
                                imageBgSrc="https://cache.marriott.com/content/dam/marriott-renditions/YQBDM/yqbdm-loft-deluxe-3618-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*" 
                                altBg={t('home:RecentWork:DeltaMarriott:altBg')} 
                                companyName={t('home:RecentWork:DeltaMarriott:title')} 
                                btnTexte={t('home:RecentWork:seeWorkBtn')} 
                                typeOfWork={t('home:RecentWork:DeltaMarriott:typeOfWork')} 
                                logoSrc="https://cache.marriott.com/content/dam/marriott-digital/de/global-property-shared/en_us/logo/assets/de-delta-hotels-logo-41030.png" 
                                altLogo={t('home:RecentWork:DeltaMarriott:altLogo')}
                                className={`${animation ? "hidden down" : ''}`}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <RecentWorkCard
                            redirectToPage={'/realisations'}
                            link={"Groupe-Prevel-Immobilier"}
                            imageBgSrc={workPrevelBg}
                            altBg={t('home:RecentWork:Prevel:altBg')} 
                            companyName={t('home:RecentWork:Prevel:title')}  
                            btnTexte={t('home:RecentWork:seeWorkBtn')} 
                            typeOfWork={t('home:RecentWork:Prevel:typeOfWork')}
                            logoSrc={workPrevelLogo} 
                            altLogo={t('home:RecentWork:Prevel:altLogo')} 
                            className={`${animation ? "hidden tleft delay-300" : ''}`}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <RecentWorkCard
                            redirectToPage={'/realisations'}
                            link={"Marie-Pier-Dube-Clinique-Dentaire"} 
                            imageBgSrc="https://lirp.cdn-website.com/5223305b/dms3rep/multi/opt/IMG_1557-1920w.JPG"
                            altBg={t('home:RecentWork:MariePierDube:altBg')} 
                            companyName={t('home:RecentWork:MariePierDube:title')}  
                            btnTexte={t('home:RecentWork:seeWorkBtn')} 
                            typeOfWork={t('home:RecentWork:MariePierDube:typeOfWork')}
                            className={`${animation ? "hidden tleft delay-400" : ''}`}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <RecentWorkCard
                            redirectToPage={'/realisations'} 
                            link={"Jacques-Fils-Funetarium"}
                            imageBgSrc={workJacquesEtFils} 
                            altBg={t('home:RecentWork:JacquesEtFils:altBg')} 
                            companyName={t('home:RecentWork:JacquesEtFils:title')}  
                            btnTexte={t('home:RecentWork:seeWorkBtn')} 
                            typeOfWork={t('home:RecentWork:JacquesEtFils:typeOfWork')}
                            logoSrc={logoJaquesEtFils}
                            altLogo={t('home:RecentWork:JacquesEtFils:altLogo')}
                            className={`${animation ? "hidden tleft delay-500" : ''}`}
                            /> 
                        </SwiperSlide>
                        {/* <SwiperSlide>
                            <RecentWorkCard
                            redirectToPage={'/realisations'} 
                            link={'FlawlaceSupply'}
                            imageBgSrc={workFlawlaceSupply} 
                            altBg={t('home:RecentWork:FlawlaceSupply:altBg')} 
                            companyName={t('home:RecentWork:FlawlaceSupply:title')}  
                            btnTexte={t('home:RecentWork:seeWorkBtn')} 
                            typeOfWork={t('home:RecentWork:FlawlaceSupply:typeOfWork')}
                            logoSrc={logoFlawlaceSupply}
                            altLogo={t('home:RecentWork:FlawlaceSupply:altLogo')}
                            className={`${animation ? "hidden tleft delay-500" : ''}`}
                            /> 
                        </SwiperSlide> */}
            
                        {/* <SwiperSlide>
                            <RecentWorkCard 
                            link={'#contactUs'}
                            imageBgSrc={hexagoneBg} 
                            altBg={t('home:RecentWork:CompletePortfolio:altBg')} 
                            companyName={t('home:RecentWork:CompletePortfolio:title')}  
                            btnTexte={t('home:RecentWork:CompletePortfolio:btnTexte')} 
                            typeOfWork={t('home:RecentWork:CompletePortfolio:typeOfWork')}
                            logoSrc={imgLogoNavBar}
                            altLogo={t('home:RecentWork:CompletePortfolio:altLogo')}
                            className={`${animation ? "hidden tleft delay-500" : ''}`}
                            /> 
                        </SwiperSlide> */}
                        </Swiper>       
                    </div>
            :
            
            <LogoCarousel logos={logos} />
            }

        </div>
    </section>
  )
}

export default RecentWork