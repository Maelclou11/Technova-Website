import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';


function DomainBenefit() {
    /* Traduction */
    const { t, i18n } = useTranslation();


  const [selectedDomain, setSelectedDomain] = useState(null);
  const [backgroundSize, setBackgroundSize] = useState('0%');

  const domains = [
    {
      title: t('service:virtualTour:domainBenefit:domaine1'),
      benefits: [t('service:virtualTour:domainBenefit:benefit1')],
      backgroundImage: "https://www.restolacuisine.com/restaurants/restaurant-la-cuisine/website/images/Lacuisine_resto.jpg"
    },
    {
      title: t('service:virtualTour:domainBenefit:domaine2'),
      benefits: [t('service:virtualTour:domainBenefit:benefit2')],
      backgroundImage: "url-de-votre-image-pour-le-domaine-2"
    },
    {
      title: t('service:virtualTour:domainBenefit:domaine3'),
      benefits: [t('service:virtualTour:domainBenefit:benefit3')],
      backgroundImage: "https://www.jacquesetfils.com/uploads/images/Salon-funeraire-jacques-et-fils-le-salon.jpg"
    },
    {
      title: t('service:virtualTour:domainBenefit:domaine4'),
      benefits: [t('service:virtualTour:domainBenefit:benefit4')],
      backgroundImage: "url-de-votre-image-pour-le-domaine-4"
    },
    {
      title: t('service:virtualTour:domainBenefit:domaine5'),
      benefits: [t('service:virtualTour:domainBenefit:benefit5')],
      backgroundImage: "https://www.concordia.ca/fr/actualites/nouvelles/2022/02/25/concordia-reste-parmi-les-meilleures-universites-de-moins-de-50-ans-au-canada/_jcr_content/top-image.img.768.medium.jpg/1645801150868.jpg"
    },
    {
      title: t('service:virtualTour:domainBenefit:domaine6'),
      benefits: [t('service:virtualTour:domainBenefit:benefit6')],
      backgroundImage: "https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: t('service:virtualTour:domainBenefit:domaine7'),
      benefits: [t('service:virtualTour:domainBenefit:benefit7')],
      backgroundImage: "url-de-votre-image-pour-le-domaine-6"
    },
    {
      title: t('service:virtualTour:domainBenefit:domaine8'),
      benefits: [t('service:virtualTour:domainBenefit:benefit8')],
      backgroundImage: "url-de-votre-image-pour-le-domaine-6"
    },
    {
      title: t('service:virtualTour:domainBenefit:domaine9'),
      benefits: [t('service:virtualTour:domainBenefit:benefit9')],
      backgroundImage: "url-de-votre-image-pour-le-domaine-6"
    },
    {
      title: t('service:virtualTour:domainBenefit:domaine10'),
      benefits: [t('service:virtualTour:domainBenefit:benefit10')],
      backgroundImage: "url-de-votre-image-pour-le-domaine-6"
    },
    {
      title: t('service:virtualTour:domainBenefit:domaine11'),
      benefits: [t('service:virtualTour:domainBenefit:benefit11')],
      backgroundImage: "url-de-votre-image-pour-le-domaine-6"
    },
    {
      title: t('service:virtualTour:domainBenefit:domaine12'),
      benefits: [t('service:virtualTour:domainBenefit:benefit12')],
      backgroundImage: "url-de-votre-image-pour-le-domaine-6"
    },
    {
      title: t('service:virtualTour:domainBenefit:domaine13'),
      benefits: [t('service:virtualTour:domainBenefit:benefit13')],
      backgroundImage: "url-de-votre-image-pour-le-domaine-6"
    },
    // ... Ajoutez autant de domaines que vous le souhaitez
  ];

  return (
    <div 
      className="DomainBenefit" 
      /* style={{
        backgroundImage: selectedDomain ? `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0,0,0, 0.3)), url(${selectedDomain.backgroundImage})` : '',
        backgroundSize: backgroundSize
      }} */
    >
      <h2>Visites virtuelles Matterport</h2>

      <div className="domain-list">
        {domains.map((domain, index) => (
          <div
            key={index}
            className={`domain-item ${selectedDomain && selectedDomain.title !== domain.title ? 'faded' : 'highlight'}`}
            onMouseOver={() => {setSelectedDomain(domain); setBackgroundSize('100%')}}
            onMouseLeave={() => {setSelectedDomain(null); setBackgroundSize('0%'); setTimeout(() => {
              setBackgroundSize('100%');
            }, 100)}}
          >
            <div className="row">
              <FontAwesomeIcon icon={faCube} />
              {domain.title}
              <FontAwesomeIcon icon={faChevronDown} className='chevron'/>
            </div>

            {selectedDomain?.title === domain.title && (
              <div className={`benefits-section ${selectedDomain !== null ? "show" : "hidden"}`}>
                {/* <h2>{selectedDomain.title}</h2> */}
                <ul>
                  {selectedDomain.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        ))}
      </div>

    </div>
  );
}

export default DomainBenefit;
