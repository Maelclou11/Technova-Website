import React, { useState, useEffect } from 'react'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, FormSimple } from '../indexComponent';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';


function ContactUs() {
    /* Traduction */
    const { t } = useTranslation();

    const [showSimpleForm, setShowSimpleForm] = useState(false);

    const handleSimpleFormClick = () => {
      setShowSimpleForm(!showSimpleForm);
    };

    const location = useLocation();

    useEffect(() => {
      if (location.search.includes('form=simple')) {
        setShowSimpleForm(true);
      }
    }, [location]);


  return (
    <section id="contactUs">
      <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,192L34.3,197.3C68.6,203,137,213,206,224C274.3,235,343,245,411,213.3C480,181,549,107,617,90.7C685.7,75,754,117,823,128C891.4,139,960,117,1029,112C1097.1,107,1166,117,1234,112C1302.9,107,1371,85,1406,74.7L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
        <h2>
        <p className='hidden tleft'>{t('home:ContactUs:title:firstLine')}</p>
        <p className='hidden tright delay-300'>
            {t('home:ContactUs:title:secondLine')}{' '}
            <span className="blue">{t('home:ContactUs:title:wordBlue')}</span>
        </p>
        </h2>
        <div className="contactUs__content hidden down">
        {showSimpleForm ? <FormSimple /> : <Form />}
        <div className="textBox hidden tright delay-400">
            <h3>
            {showSimpleForm
                ? t('home:ContactUs:smallText:specificNeed')
                : t('home:ContactUs:smallText:btn')}
            </h3>
            <p className='text-help'>{t('home:ContactUs:smallText:text')}</p>
            <button onClick={handleSimpleFormClick}>
            {showSimpleForm
                ? t('home:ContactUs:smallText:showFullForm')
                : t('home:ContactUs:smallText:btn')}
            </button>
            <div className="info">
            <FontAwesomeIcon icon={faCircleExclamation} />
            <p>{t('home:ContactUs:smallText:answer24h')}</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default ContactUs