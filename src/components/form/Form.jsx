import React, { useState, useCallback, useEffect } from 'react';
import CheckBox from './CheckBox';
import TitleStepForm from './TitleStepForm';
import FormNavBtn from './FormNavBtn';
import RangeForm from './RangeForm';
import emailjs from 'emailjs-com';
import TextInput from './TextInput';
import TextArea from './TextArea';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Form() {
  /* Traduction */
  const { t } = useTranslation();
  
  /* #region    Send the form */
  const [isFilled, setIsFilled] = useState(null);

  useEffect(() => {
    if (isFilled) {
      const timer = setTimeout(() => {
        setIsFilled("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isFilled]);
  // Naviguate in the form
  const [currentStep, setCurrentStep] = useState(1);

  // When the form is submited
  const [isLoading, setIsLoading] = useState(false);


  /* Email Js */
  const [formData, setFormData] = useState({});

  const updateFormData = useCallback((key, value) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  }, []);

  const isStepValid = useCallback((step) => {
    switch (step) {
      case 1:
        return formData.virtual_tour || formData.web_design || formData.e_commerce || formData.other;
      case 2:
        return formData.pre_launch || formData.time_0_2_years || formData.time_2_5_years || formData.time_5_years;
      case 5:
        return formData.company_name;
      case 6:
        return formData.user_message;
      case 7:
        return (
          formData.full_name &&
          formData.user_phone &&
          formData.user_email &&
          validatePhoneNumber(formData.user_phone) &&
          validateEmail(formData.user_email)
        );
      default:
        return true;
    }
  }, [formData]);

  const nextStep = useCallback((e) => {
    if (isStepValid(currentStep)) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setIsFilled(`${t('home:ContactUs:fillTheMissing')}`)
    }
  }, [currentStep, isStepValid, t]);
  
  const prevStep = useCallback(() => {
    setCurrentStep((prevStep) => prevStep - 1);
  }, []);

  const generateSelectedChoices = useCallback(() => {
    let service_asked = "";
    let company_age = "";
    let budget = `${formData.approximate_budget} $`;
    let delai = `${formData.time_frame} Mois`;
  
    if (formData.virtual_tour) service_asked += "Virtual Tour, ";
    if (formData.web_design) service_asked += "Web Design, ";
    if (formData.e_commerce) service_asked += "E-Commerce, ";
    if (formData.other) service_asked += "Autre, ";
  
    if (formData.pre_launch) company_age = "En cour de lancement";
    if (formData.time_0_2_years) company_age = "0-2 ans";
    if (formData.time_2_5_years) company_age = "2-5 ans";
    if (formData.time_5_years) company_age = "5+ ans";

  
    return { service_asked: service_asked.slice(0, -2), company_age, budget, delai };
  }, [formData]);

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const validatePhoneNumber = (number) => {
    const re = /^\+?([0-9]{1,3})?[-. (]?([0-9]{1,4})[-. )]?([0-9]{1,4})[-. ]?([0-9]{1,9})$/;
    return re.test(String(number));
  };


  const sendForm = useCallback((e) => {
    e.preventDefault();

    if (!isStepValid(currentStep)) {
      setIsFilled(`${t('home:ContactUs:fillTheMissing')}`);
      return;
    }

    setIsLoading(true);
    setCurrentStep(8);

    const { service_asked, company_age, budget, delai } = generateSelectedChoices();
    const extendedFormData = { ...formData, service_asked, company_age, budget, delai };

    // Envoyer les données avec EmailJS (vous devrez configurer les détails de votre service et modèle)
    emailjs.send('service_xelok0a', 'template_zp9c81e', extendedFormData, 'qoVtexfIDNNBno05K')
      .then((result) => {
          console.log("Form sent successfully", result.text);
          setIsLoading(false); // Arrêter l'animation de chargement
      }, (error) => {
          console.log(error.text);
          setIsLoading(false); // Arrêter l'animation de chargement
      });

      // Réinitialiser le formulaire ici
      setFormData({});
      /* setCurrentStep(1); */

  }, [formData, generateSelectedChoices, isStepValid, currentStep, t]);

  /* #endregion */
  


  return (
    <div className='formulaire'>

        <form onSubmit={sendForm}>
            {currentStep === 1 && (
              <div className="step step1 fade-in">
                <TitleStepForm titleUp={t('home:ContactUs:form:step1:title1')} titleDown={t('home:ContactUs:form:step1:title2')} />
                {isFilled && <div className="fillTheMissing">{isFilled}</div>}
                  <CheckBox text={t('home:services:serviceTitle3d')} name="virtual_tour" value={formData.virtual_tour || false} onChange={updateFormData}/>
                  <CheckBox text={t('home:services:serviceTitleWebDesign')} name="web_design" value={formData.web_design || false} onChange={updateFormData}/>
                  <CheckBox text={t('home:services:serviceTitleEcom')} name="e_commerce" value={formData.e_commerce || false} onChange={updateFormData} />
                  <CheckBox text={t('home:services:other')} name="other" value={formData.other || false} onChange={updateFormData} />
                  {/* <input type=" name="service_asked" value={formData.service_asked || ''} /> */}
                  <FormNavBtn
                    onNext={nextStep}
                    onBack={prevStep}
                    isFirstStep={currentStep === 1}
                    isLastStep={currentStep === 7}
                  />
                <p className='pageCount'>1\7</p>
              </div>
            )}
            {currentStep === 2 && (
              <div className="step step2 fade-in">
                <TitleStepForm titleUp={t('home:ContactUs:form:step2:title1')} titleDown={t('home:ContactUs:form:step2:title2')} />
                {isFilled && <div className="fillTheMissing">{isFilled}</div>}
                  <CheckBox text={t('home:ContactUs:form:step2:preLaunch')} name="pre_launch" value={formData.pre_launch || false} onChange={updateFormData} />
                  <CheckBox text={`0-2 ${t('home:ContactUs:form:step2:years')}`} name="time_0_2_years" value={formData.time_0_2_years || false} onChange={updateFormData} />
                  <CheckBox text={`2-5 ${t('home:ContactUs:form:step2:years')}`} name="time_2_5_years" value={formData.time_2_5_years || false} onChange={updateFormData} />
                  <CheckBox text={`+5 ${t('home:ContactUs:form:step2:years')}`} name="time_5_years" value={formData.time_5_years || false} onChange={updateFormData} />
                  {/* <input type=" name="company_age" value={formData.company_age || ''} /> */}
                  <FormNavBtn
                    onNext={nextStep}
                    onBack={prevStep}
                    isFirstStep={currentStep === 1}
                    isLastStep={currentStep === 7}
                  />
                <p className='pageCount'>2\7</p>
              </div>
            )}
            {currentStep === 3 && (
              <div className="step step3 fade-in">
                <TitleStepForm titleUp={t('home:ContactUs:form:step3:title1')} titleDown={t('home:ContactUs:form:step3:title2')} />
                {isFilled && <div className="fillTheMissing">{isFilled}</div>}
                  <RangeForm type="time" moreValue="+12" minValue="1" maxValue="12" name="time_frame" value={formData.time_frame || 1} onChange={updateFormData}/>
                  <CheckBox text={t('home:ContactUs:form:step3:partnership')} name="long_term_partner" value={formData.long_term_partner || false} onChange={updateFormData} />
                  <FormNavBtn
                    onNext={nextStep}
                    onBack={prevStep}
                    isFirstStep={currentStep === 1}
                    isLastStep={currentStep === 7}
                  />
                <p className='pageCount'>3\7</p>
              </div>
            )}
            {currentStep === 4 && (
              <div className="step step4 fade-in">
                <TitleStepForm titleUp={t('home:ContactUs:form:step4:title1')} titleDown={t('home:ContactUs:form:step4:title2')} />
                {isFilled && <div className="fillTheMissing">{isFilled}</div>}
                <RangeForm type="number" moreValue="+20000" minValue="1000" maxValue="20000" name="approximate_budget" value={formData.approximate_budget || 1000} onChange={updateFormData}/>
                <CheckBox text={t('home:ContactUs:form:step4:discuss')} name="stock_compensation" value={formData.stock_compensation || false} onChange={updateFormData} />
                <FormNavBtn
                  onNext={nextStep}
                  onBack={prevStep}
                  isFirstStep={currentStep === 1}
                  isLastStep={currentStep === 7}
                />
                <p className='pageCount'>4\7</p>
              </div>
            )}
            {currentStep === 5 && (
              <div className="step step5 fade-in">
                <TitleStepForm titleUp={t('home:ContactUs:form:step5:title1')} titleDown={t('home:ContactUs:form:step5:title2')} />
                {isFilled && <div className="fillTheMissing">{isFilled}</div>}
                <TextInput
                  labelText={t('home:ContactUs:form:step5:nameCompany')}
                  name="company_name"
                  placeholder=""
                  value={formData.company_name}
                  onChange={updateFormData}
                />
                <TextInput
                  labelText={`${t('home:ContactUs:form:step5:position')} ${t('home:ContactUs:form:step5:optional')}`}
                  name="position"
                  placeholder=""
                  value={formData.position}
                  onChange={updateFormData}
                />
                <TextInput
                  labelText={`${t('home:ContactUs:form:step5:websiteURL')} ${t('home:ContactUs:form:step5:optional')}`}
                  name="website_url"
                  placeholder=""
                  value={formData.website_url}
                  onChange={updateFormData}
                />
                <FormNavBtn
                  onNext={nextStep}
                  onBack={prevStep}
                  isFirstStep={currentStep === 1}
                  isLastStep={currentStep === 7}
                />
                <p className='pageCount'>5\7</p>
              </div>
            )}
            {currentStep === 6 && (
              <div className="step step6 fade-in">
                <TitleStepForm titleUp={t('home:ContactUs:form:step6:title1')} titleDown={t('home:ContactUs:form:step6:title2')} />
                {isFilled && <div className="fillTheMissing">{isFilled}</div>}
                <TextArea
                  labelText={t('home:ContactUs:form:step6:projectScope')}
                  name="user_message"
                  placeholder={t('home:ContactUs:form:step6:placeholder')}
                  value={formData.user_message}
                  onChange={updateFormData}
                />
                <FormNavBtn
                  onNext={nextStep}
                  onBack={prevStep}
                  isFirstStep={currentStep === 1}
                  isLastStep={currentStep === 7}
                />
                <p className='pageCount'>6\7</p>
              </div>
            )}
            {currentStep === 7 && (
              <div className="step step7 fade-in">
                <TitleStepForm titleUp={t('home:ContactUs:form:step7:title1')} titleDown={t('home:ContactUs:form:step7:title2')} />
                {isFilled && <div className="fillTheMissing">{isFilled}</div>}
                <TextInput
                  labelText={t('home:ContactUs:form:step7:fullName')}
                  name="full_name"
                  placeholder=""
                  value={formData.full_name}
                  onChange={updateFormData}
                  isRequired={true}
                />
                <TextInput
                  labelText={t('home:ContactUs:form:step7:telephone')}
                  name="user_phone"
                  placeholder=""
                  value={formData.user_phone}
                  onChange={updateFormData}
                  isRequired={true}
                />
                <TextInput
                  labelText={t('home:ContactUs:form:step7:email')}
                  name="user_email"
                  placeholder=""
                  value={formData.user_email}
                  onChange={updateFormData}
                  isRequired={true}
                />
                <FormNavBtn
                  onNext={nextStep}
                  onBack={prevStep}
                  isFirstStep={currentStep === 1}
                  isLastStep={currentStep === 7}
                />
                <p className='pageCount'>7\7</p>
              </div>
            )}
            {currentStep === 8 && (
              <div className="step step8 fade-in">
                {isLoading ? (
                  <div className="loading-animation">
                    {/* Insérez ici le code de votre animation de chargement */}
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
                    <FontAwesomeIcon icon={faCheck} className='rotate' />
                    <p>{t('home:ContactUs:form:sentSuccess:text')}</p>
                  </div>
                )}
              </div>
            )}
        </form>
    </div>
  )
}
export default Form
