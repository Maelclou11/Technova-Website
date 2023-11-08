import React, { useEffect } from 'react';
import '../CSS/WorksPortfolio.css';
import { useTranslation } from 'react-i18next';
import { posterBrunelle, posterMariePier, posterFlawlaceSupply, posterVesiDesign } from '../img/index.js';

import { NavBar, Footer, WorkSection } from '../components/indexComponent';

function WorksPortfolio() {

    /* Traduction */
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    useEffect(() => {
        i18n.on('languageChanged', (lng) => {
        localStorage.setItem('userLanguage', lng);
        });
    
        return () => {
        i18n.off('languageChanged');
        };
    }, [i18n]);

  return (
    <div className='recentWork__body'>
        <NavBar />
        <section id="recentWork__home">
            <div class="recentWork__home--content">
                <h1>{t('workPortfolio:pageTitle')}</h1>
                <p>{t('workPortfolio:pageTexte')}</p>
            </div>
        </section>

        <WorkSection id="Delta-Marriott" companyName={t('workPortfolio:DeltaMarriott:companyName')} iframeTitle={t('workPortfolio:DeltaMarriott:iframeTitle')} matterportLink="https://captur3d.io/view/delta-marriott/delta-marriott-msa" typeOfWork={t('workPortfolio:DeltaMarriott:typeOfWork')} description={t('workPortfolio:DeltaMarriott:description')}/>

        <WorkSection id="Universite-Concordia" companyName={t('workPortfolio:Concordia:companyName')} iframeTitle={t('workPortfolio:Concordia:iframeTitle')} matterportLink="https://my.matterport.com/show/?m=iLJx9yhmdBH" typeOfWork={t('workPortfolio:Concordia:typeOfWork')} description={t('workPortfolio:Concordia:description')} reverse={true}/>

        <WorkSection id="Groupe-Prevel-Immobilier" companyName={t('workPortfolio:Prevel:companyName')} iframeTitle={t('workPortfolio:Prevel:iframeTitle')} matterportLink="https://my.matterport.com/show/?m=svgQem2dHbj" typeOfWork={t('workPortfolio:Prevel:typeOfWork')} description={t('workPortfolio:Prevel:description')} reverse={true} isMoreScan={true} otherScansLinks={["https://my.matterport.com/show/?m=jSDu1Q5NEB2", "https://my.matterport.com/show/?m=vx55CKLX7KJ"]}/>

        <WorkSection id="Montreal-Du-Futur" companyName={t('workPortfolio:montrealDuFutur:companyName')} iframeTitle={t('workPortfolio:montrealDuFutur:iframeTitle')} matterportLink="https://captur3d.io/view/tecnova-ca/montreal-du-futur-2023?fbclid=IwAR0dEfBgIUggCbxK7iJ-MBSgeoxWB5NmdsxvHgiryhJDOz4g9-WOv7vKLpI_aem_AWVo7K0QXkmHZRC_icDja1CVRO0OvN18wQK9zQZVkQfXut6syb4OTacfY1K9_oUW-Q8" typeOfWork={t('workPortfolio:montrealDuFutur:typeOfWork')} description={t('workPortfolio:montrealDuFutur:description')} reverse={true} 
        />

        <WorkSection id="Brunelle-Sport" companyName={t('workPortfolio:brunelleSport:companyName')} iframeTitle={t('workPortfolio:brunelleSport:iframeTitle')} matterportLink="https://my.matterport.com/show/?m=Yf2LHSr69GJ" typeOfWork={t('workPortfolio:brunelleSport:typeOfWork')} description={t('workPortfolio:brunelleSport:description')} reverse={true} videoLink='https://tecnova.ca/cdn.tecnova.ca/video_demo_brunellesport.mp4' posterImg={posterBrunelle} websiteLink="https://brunellesport.com/" typeOfWork2={t('workPortfolio:brunelleSport:typeOfWork2')} description2={t('workPortfolio:brunelleSport:description2')}/>

        <WorkSection id="Jacques-Fils-Funetarium" companyName={t('workPortfolio:jacquesEtFils:companyName')} iframeTitle={t('workPortfolio:jacquesEtFils:iframeTitle')} matterportLink="https://my.matterport.com/show/?m=YHhTNSLd1V6" typeOfWork={t('workPortfolio:jacquesEtFils:typeOfWork')} description={t('workPortfolio:jacquesEtFils:description')} reverse={true}/>

        <WorkSection id="SkyGym" companyName={t('workPortfolio:skyGym:companyName')} iframeTitle={t('workPortfolio:skyGym:iframeTitle')} matterportLink="https://captur3d.io/view/le-sky-gym/le-sky-gym" typeOfWork={t('workPortfolio:skyGym:typeOfWork')} description={t('workPortfolio:skyGym:description')}/>

        <WorkSection id="Marie-Pier-Dube-Clinique-Dentaire" companyName={t('workPortfolio:mariePierDube:companyName')} iframeTitle={t('workPortfolio:mariePierDube:iframeTitle')} matterportLink="https://my.matterport.com/show/?m=LVFju83EyXy" typeOfWork={t('workPortfolio:mariePierDube:typeOfWork')} description={t('workPortfolio:mariePierDube:description')} reverse={true} typeOfWork2={t('workPortfolio:mariePierDube:typeOfWork2')} description2={t('workPortfolio:mariePierDube:description2')} websiteLink="https://cliniquempd.ca/" posterImg={posterMariePier} videoLink="https://tecnova.ca/cdn.tecnova.ca/video_demo_mariepier.mp4"/>

        <WorkSection id="FlawlaceSupply" companyName={t('workPortfolio:flawlaceSupply:companyName')} iframeTitle={t('workPortfolio:flawlaceSupply:iframeTitle')} videoLink="https://tecnova.ca/cdn.tecnova.ca/video_demo_flawlace_supply.mp4" posterImg={posterFlawlaceSupply} typeOfWork={t('workPortfolio:flawlaceSupply:typeOfWork')} description={t('workPortfolio:flawlaceSupply:description')} websiteLink="https://www.flawlacesupply.ca/"/>

        <WorkSection id="Vesi-Design" companyName={t('workPortfolio:vesiDesign:companyName')} iframeTitle={t('workPortfolio:vesiDesign:iframeTitle')} videoLink="https://tecnova.ca/cdn.tecnova.ca/video_demo_vesidesign.mp4" posterImg={posterVesiDesign} typeOfWork={t('workPortfolio:vesiDesign:typeOfWork')} description={t('workPortfolio:vesiDesign:description')}/>



        <Footer />
    </div>
  )
}

export default WorksPortfolio