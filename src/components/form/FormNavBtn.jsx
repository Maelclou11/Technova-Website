import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

function FormNavBtn({ onNext, onBack, isFirstStep, isLastStep}) {
  /* Traduction */
  const { t } = useTranslation();

  return (
    <div className="formButton">
      {!isFirstStep && onBack && (
        <button className="backButton" onClick={onBack} type='button'>
          <FontAwesomeIcon icon={faArrowLeft} />
          {t('home:ContactUs:form:backBtn')}
        </button>
      )}
      {isLastStep ? (
        <button className="sendButton" type='submit'>
          {t('home:ContactUs:form:sendBtn')}
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      ) : (
        <button className="nextButton" onClick={onNext} type='button'>
          {t('home:ContactUs:form:nextBtn')}
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      )}
    </div>
  );
}

export default FormNavBtn;
