import React from 'react'
import TitleLeft from '../TitleLeft';
import RecentWorkCard from '../RecentWorkCard';
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper";
import { workJacquesEtFils, logoJaquesEtFils, workBrunelleSport, imgLogoVesi, workConcordiaLogo, workConcordiaBg, workPrevelBg, workPrevelLogo} from '../../img/index.js';
import { useTranslation } from 'react-i18next';

function RecentWork() {
    /* Traduction */
    const { t, i18n } = useTranslation();

    function handleVoidClick(event) {
        event.preventDefault();
      }

  return (
    <section id='recentWork'>
        <TitleLeft title={t('home:RecentWork:RecentWorkTitle')} className="hidden tleft" />
        <div className="works__container">
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
            <SwiperSlide>
                <RecentWorkCard
                link={i18n.language === 'fr' ? "https://tecnova.ca/WorkFR.html#work_vesi-design" : "https://tecnova.ca/Work.html#work_vesi-design"} 
                imageBgSrc='https://cdn.shopify.com/s/files/1/0708/0479/9773/files/IMG_9296.jpg?v=1675047187'
                altBg={t('home:RecentWork:VesiDesign:altBg')} 
                companyName={t('home:RecentWork:VesiDesign:title')}  
                btnTexte={t('home:RecentWork:seeWorkBtn')} 
                typeOfWork={t('home:RecentWork:VesiDesign:typeOfWork')}
                logoSrc={imgLogoVesi} 
                altLogo={t('home:RecentWork:VesiDesign:altLogo')} 
                className="hidden tright delay-300"
                />
            </SwiperSlide>
            <SwiperSlide>
                <RecentWorkCard 
                imageBgSrc='https://lh5.googleusercontent.com/p/AF1QipOeXzZlidydgJ3Gyjv1aZEW1iXk_TRQC_3ZiS6S=w750-h704-p-k-no' 
                link={i18n.language === 'fr' ? "https://tecnova.ca/WorkFR.html#work_skygym" : "https://tecnova.ca/Work.html#work_skygym"}
                altBg={t('home:RecentWork:SkyGym:altBg')} 
                companyName={t('home:RecentWork:SkyGym:title')}  
                btnTexte={t('home:RecentWork:seeWorkBtn')} 
                typeOfWork={t('home:RecentWork:SkyGym:typeOfWork')}
                logoSrc='https://leskygym.com/wp-content/uploads/2021/05/logo-sky-gym.png'
                altLogo={t('home:RecentWork:SkyGym:altLogo')}   
                className="hidden tright delay-500"
                />
            </SwiperSlide>
            <SwiperSlide>
                <RecentWorkCard 
                link={i18n.language === 'fr' ? "https://tecnova.ca/WorkFR.html#work_brunellesport" : "https://tecnova.ca/Work.html#work_brunellesport"}
                imageBgSrc={workBrunelleSport} 
                altBg={t('home:RecentWork:BrunelleSport:altBg')} 
                companyName={t('home:RecentWork:BrunelleSport:title')}  
                btnTexte={t('home:RecentWork:seeWorkBtn')} 
                typeOfWork={t('home:RecentWork:BrunelleSport:typeOfWork')}
                className="hidden tright delay-400"  
                />
            </SwiperSlide>
            <SwiperSlide>
                <RecentWorkCard
                link={i18n.language === 'fr' ? "https://tecnova.ca/WorkFR.html#work_concordia" : "https://tecnova.ca/Work.html#work_concordia"}
                imageBgSrc={workConcordiaBg}
                altBg={t('home:RecentWork:Concordia:altBg')} 
                companyName={t('home:RecentWork:Concordia:title')}  
                btnTexte={t('home:RecentWork:seeWorkBtn')} 
                typeOfWork={t('home:RecentWork:Concordia:typeOfWork')}
                logoSrc={workConcordiaLogo} 
                altLogo={t('home:RecentWork:Concordia:altLogo')} 
                className="hidden tright delay-300"
                />
            </SwiperSlide>
            <SwiperSlide>
                <RecentWorkCard 
                    link={i18n.language === 'fr' ? "https://tecnova.ca/WorkFR.html#work_deltamarriot" : "https://tecnova.ca/Work.html#work_deltamarriot"}
                    imageBgSrc="https://cache.marriott.com/content/dam/marriott-renditions/YQBDM/yqbdm-loft-deluxe-3618-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*" 
                    altBg={t('home:RecentWork:DeltaMarriott:altBg')} 
                    companyName={t('home:RecentWork:DeltaMarriott:title')} 
                    btnTexte={t('home:RecentWork:seeWorkBtn')} 
                    typeOfWork={t('home:RecentWork:DeltaMarriott:typeOfWork')} 
                    logoSrc="https://cache.marriott.com/content/dam/marriott-digital/de/global-property-shared/en_us/logo/assets/de-delta-hotels-logo-41030.png" 
                    altLogo={t('home:RecentWork:DeltaMarriott:altLogo')}
                    className="hidden down" 
                />
            </SwiperSlide>
            <SwiperSlide>
                <RecentWorkCard
                link={i18n.language === 'fr' ? "https://tecnova.ca/WorkFR.html#work_prevel" : "https://tecnova.ca/Work.html#work_prevel"}
                imageBgSrc={workPrevelBg}
                altBg={t('home:RecentWork:Prevel:altBg')} 
                companyName={t('home:RecentWork:Prevel:title')}  
                btnTexte={t('home:RecentWork:seeWorkBtn')} 
                typeOfWork={t('home:RecentWork:Prevel:typeOfWork')}
                logoSrc={workPrevelLogo} 
                altLogo={t('home:RecentWork:Prevel:altLogo')} 
                className="hidden tleft delay-300"
                />
            </SwiperSlide>
            <SwiperSlide>
                <RecentWorkCard
                link={i18n.language === 'fr' ? "https://tecnova.ca/WorkFR.html#work_mariepier" : "https://tecnova.ca/Work.html#work_mariepier"} 
                imageBgSrc="https://lirp.cdn-website.com/5223305b/dms3rep/multi/opt/IMG_1557-1920w.JPG"
                altBg={t('home:RecentWork:MariePierDube:altBg')} 
                companyName={t('home:RecentWork:MariePierDube:title')}  
                btnTexte={t('home:RecentWork:seeWorkBtn')} 
                typeOfWork={t('home:RecentWork:MariePierDube:typeOfWork')}
                className="hidden tleft delay-400" 
                />
            </SwiperSlide>
            <SwiperSlide>
                <RecentWorkCard 
                link={i18n.language === 'fr' ? "https://tecnova.ca/WorkFR.html#work_jacques&fils" : "https://tecnova.ca/Work.html#work_jacques&fils"}
                imageBgSrc={workJacquesEtFils} 
                altBg={t('home:RecentWork:JacquesEtFils:altBg')} 
                companyName={t('home:RecentWork:JacquesEtFils:title')}  
                btnTexte={t('home:RecentWork:seeWorkBtn')} 
                typeOfWork={t('home:RecentWork:JacquesEtFils:typeOfWork')}
                logoSrc={logoJaquesEtFils}
                altLogo={t('home:RecentWork:JacquesEtFils:altLogo')}
                className="hidden tleft delay-500"
                /> 
            </SwiperSlide>
            </Swiper>       
        </div>
        </div>
    </section>
  )
}

export default RecentWork