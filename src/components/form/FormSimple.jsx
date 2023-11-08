import React, { useState, useCallback, useEffect } from 'react';
import emailjs from 'emailjs-com';
import TextInput from './TextInput';
import TextArea from './TextArea';
import FormNavBtn from './FormNavBtn';
import TitleStepForm from './TitleStepForm';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function FormSimple() {
  const { t } = useTranslation();

  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [isFilled, setIsFilled] = useState(null);
  const [formErrors, setFormErrors] = useState({});


  const validateStep = useCallback(
    (step) => {
      let errors = {};
      let isValid = true;
  
      switch (step) {
        case 1:
          if (!formData.full_name || formData.full_name.trim() === "") {
            errors.full_name = `${t("home:ContactUs:fillTheMissing")}`;
            isValid = false;
          }
  
          const phoneRegex = /^[0-9-+() ]+$/;
          if (
            !formData.user_phone ||
            formData.user_phone.trim() === "" ||
            !phoneRegex.test(formData.user_phone)
          ) {
            errors.user_phone = `${t("home:ContactUs:invalidPhone")}`;
            isValid = false;
          }

          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
          if (
            !formData.user_email ||
            formData.user_email.trim() === "" ||
            !emailRegex.test(formData.user_email)
          ) {
            errors.user_email = `${t("home:ContactUs:invalidEmail")}`;
            isValid = false;
          }
  
          break;
        case 2:
          if (!formData.user_message || formData.user_message.trim() === "") {
            errors.user_message = `${t("home:ContactUs:fillTheMissing")}`;
            isValid = false;
          }
          break;
        default:
          break;
      }
  
      setFormErrors(errors);
      return isValid;
    },
    [formData, t]
  );
  

  const updateFormData = useCallback((key, value) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  }, []);

  useEffect(() => {
    if (isFilled) {
      const timer = setTimeout(() => {
        setIsFilled("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isFilled]);

  const nextStep = useCallback((e) => {
    if (validateStep(currentStep)) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setIsFilled(`${t("home:ContactUs:fillTheMissing")}`);
    }
  }, [currentStep, validateStep, setIsFilled, t]);
  
  
  const prevStep = useCallback(() => {
    setCurrentStep((prevStep) => prevStep - 1);
  }, []);
  

  const sendForm = useCallback((e) => {
    e.preventDefault();
  
    // Ajoutez cette condition pour vérifier si l'étape est valide
    if (!validateStep(currentStep)) {
      setIsFilled(`${t("home:ContactUs:fillTheMissing")}`);
      return;
    }
  
    setIsLoading(true);
    setCurrentStep(3);
  
    emailjs.send('service_xelok0a', 'template_zp9c81e', formData, 'qoVtexfIDNNBno05K')
      .then((result) => {
          console.log("Form sent successfully", result.text);
          setIsLoading(false);
      }, (error) => {
          console.log(error.text);
          setIsLoading(false);
      });
  
      setFormData({});
  }, [formData, currentStep, validateStep, setIsFilled, t]);
  

  return (
    <div className='formulaire'>
        <form className="form-simple" onSubmit={sendForm}>
            {currentStep === 1 && (
              <div className="step step2 fade-in">
                <TitleStepForm titleUp={t('home:ContactUs:form:step7:title1')} titleDown={t('home:ContactUs:form:step7:title2')} />
                {isFilled && <div className="fillTheMissing">{isFilled}</div>}
                <TextInput
                  labelText={t('home:ContactUs:form:step7:fullName')}
                  name="full_name"
                  type="text"
                  placeholder=""
                  value={formData.full_name}
                  onChange={updateFormData}
                  isRequired={true}
                  errorMessage={formErrors.full_name}
                />
                <TextInput
                  labelText={t('home:ContactUs:form:step7:telephone')}
                  name="user_phone"
                  type="tel"
                  placeholder=""
                  value={formData.user_phone}
                  onChange={updateFormData}
                  isRequired={true}
                  errorMessage={formErrors.user_phone}
                />
                <TextInput
                  labelText={t('home:ContactUs:form:step7:email')}
                  type="email"
                  name="user_email"
                  placeholder=""
                  value={formData.user_email}
                  onChange={updateFormData}
                  isRequired={true}
                  errorMessage={formErrors.user_email}
                />
                <FormNavBtn
                  onNext={nextStep}
                  onBack={prevStep}
                  isFirstStep={currentStep === 1}
                  isLastStep={currentStep === 2}
                />
                <p className='pageCount'>1\2</p>
              </div>
            )}
            {currentStep === 2 && (
              <div className="step step1 fade-in">
                {isFilled && <div className="fillTheMissing">{isFilled}</div>}
                <TextArea
                  labelText={t('home:ContactUs:form:message')}
                  name="user_message"
                  placeholder={t('home:ContactUs:form:step6:placeholder')}
                  value={formData.user_message}
                  onChange={updateFormData}
                />
                <FormNavBtn
                    onNext={nextStep}
                    onBack={prevStep}
                    isFirstStep={currentStep === 1}
                    isLastStep={currentStep === 2}
                />
                <p className='pageCount'>2\2</p>
              </div>
            )}
            {currentStep === 3 && (
              <div className="step step3">
                {isLoading ? (
                  <div className="loading-animation fade-in">
                    <div class="load-wrapp">
                      <div class="load-3">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                      </div>
                    </div>
                    <p>{t('home:ContactUs:form:sentSuccess:loading')}</p>
                  </div>
                ) : (
                  <div className="success-message fade-in">
                    <h3>{t('home:ContactUs:form:sentSuccess:title')}</h3>
                    <FontAwesomeIcon icon={faCheck} size="3x" className='rotate'/>
                    <p>{t('home:ContactUs:form:sentSuccess:text')}</p>
                  </div>
                )}
              </div>
            )}
        </form>
    </div>
  );
}

export default FormSimple;

