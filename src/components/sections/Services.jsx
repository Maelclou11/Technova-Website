import React from 'react'
import TitleCenterUnderline from '../TitleCenterUnderline';
import ServiceCard from '../ServiceCard';
import { faCubes, faDesktop, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

function Services() {
    /* Traduction */
    const { t, i18n } = useTranslation();

  return (
    <section id="service" className="service">
    <TitleCenterUnderline title={t('home:services:title')} className="hidden up " />

    <div className="services">
      <ServiceCard icon={faCubes} serviceName={t('home:services:serviceTitle3d')} serviceTexte={t('home:services:serviceDescription3d')} link={i18n.language === 'fr' ? "https://tecnova.ca/3D-ScanningFr.html" : "https://tecnova.ca/3D-Scanning.html" } texteBtn={t('home:services:learnMore')} className="hidden tleft delay-200 bezier" />
      <ServiceCard icon={faDesktop} serviceName={t('home:services:serviceTitleWebDesign')} serviceTexte={t('home:services:serviceDescriptionWebDesign')} link={i18n.language === 'fr' ? "https://tecnova.ca/Web-DesignFr.html" : "https://tecnova.ca/Web-Design.html" } texteBtn={t('home:services:learnMore')} className="hidden tleft delay-300 bezier"/>
      <ServiceCard icon={faMoneyBillTrendUp} serviceName={t('home:services:serviceTitleEcom')} serviceTexte={t('home:services:serviceDescriptionEcom')} link={i18n.language === 'fr' ? "https://tecnova.ca/E-CommerceFr.html" : "https://tecnova.ca/E-Commerce.html" } texteBtn={t('home:services:learnMore')} className="hidden tleft delay-400 bezier"/>
    </div>
  </section>
  )
}

export default Services