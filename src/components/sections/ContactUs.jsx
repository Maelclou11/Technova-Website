import React, { useState } from 'react'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, FormSimple } from '../indexComponent';
import { useTranslation } from 'react-i18next';

function ContactUs() {
    /* Traduction */
    const { t } = useTranslation();

    const [showSimpleForm, setShowSimpleForm] = useState(false);

    const handleSimpleFormClick = () => {
      setShowSimpleForm(!showSimpleForm);
    };


  return (
    <section id="contactUs">
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