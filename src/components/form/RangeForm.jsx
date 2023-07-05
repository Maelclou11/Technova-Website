import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function RangeForm({ type, moreValue, minValue, maxValue, name, value, onChange }) {
  /* Traduction */
  const { t, i18n } = useTranslation();

  const [budget, setBudget] = useState(value || (type === "number" ? 1000 : 1));
  const [selectedValue, setSelectedValue] = useState(budget);
  const unite = type === 'number' ? '$' : `${t('home:ContactUs:form:step3:month')}`;
  const isBudget = type === 'number' ? true : false;

  useEffect(() => {
    if (value === undefined || value === null) {
      onChange(name, budget);
    }
  }, [onChange, name, budget, value]);

  const handleSliderChange = (e) => {
    let roundedValue;
    if (type === 'number') {
      roundedValue = Math.round(e.target.value / 250) * 250;
      if (roundedValue === parseInt(e.target.max)) {
        setSelectedValue(moreValue);
        setBudget(roundedValue);
        onChange(name, roundedValue);
      } else {
        setBudget(roundedValue);
        setSelectedValue(roundedValue);
        onChange(name, roundedValue);
      }
    } else {
      roundedValue = Math.round(e.target.value / 0.5) * 0.5;
      if (roundedValue === parseInt(e.target.max)) {
        setSelectedValue(moreValue);
        setBudget(roundedValue);
        onChange(name, roundedValue);
      } else {
        setBudget(roundedValue);
        setSelectedValue(roundedValue);
        onChange(name, roundedValue);
      }
    }
  };
  
  return (
    <div className="range-form-frame">
      <p className="range-selected">
        {isBudget
          ? `${t('home:ContactUs:form:step4:budget')} ${selectedValue} ${unite}`
          : `${t('home:ContactUs:form:step3:periodOfTime')} ${selectedValue} ${type === 'number' ? `${unite}` : `${i18n.language === 'en' ? `${selectedValue === 1 ? `${t('home:ContactUs:form:step3:monthSingular')}` : `${t('home:ContactUs:form:step3:month')}`}` : `${t('home:ContactUs:form:step3:month')}`}`}`} 
      </p>
      <div className="range-input-container">
        <div className="range-input">
          <input
            type="range"
            min={minValue}
            max={maxValue}
            value={budget}
            onChange={handleSliderChange}
          />
        </div>
        <div className="range-minmax-container">
          <span className="range-min">
            {minValue} {type === 'number' ? `${unite}` : `${i18n.language === 'en' ? `${t('home:ContactUs:form:step3:monthSingular')}` : `${t('home:ContactUs:form:step3:month')}`}`}
          </span>
          <span className="range-max">
            {maxValue} {unite}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RangeForm;

