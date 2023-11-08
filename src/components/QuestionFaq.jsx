import React, { useState } from 'react';
import '../CSS/components.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

function QuestionFaq({ question, reponse }) {
  const [isActive, setIsActive] = useState(false);


  return (
    <div className="QuestionFaq" onClick={() => setIsActive(!isActive)}>
        <div className="question-container">
          <h3 className='question'>{/* <span className='puce'></span> */}<FontAwesomeIcon icon={faCircleQuestion} /> {question}</h3>
          {isActive ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
          
        </div>
        <p className={`reponse ${isActive ? 'active' : ''}`}>{reponse}</p>
    </div>
  );
}

export default QuestionFaq;

/*
{ id, number, question, reponse } 
*/


/*   const [isRevealed, setIsRevealed] = useState(false);

  function toggleRadio() {
    setIsRevealed(!isRevealed);
  }
  
*/
/*   

  <input
    type="radio"
    name="acc"
    id={id}
    onClick={toggleRadio}
    className={isRevealed ? 'revealTarif' : ''}
  />
  <label htmlFor={id}>
    <h3>{number}</h3>
    <h4>{question}</h4>
  </label>
  <div className="faq--content">
    <p>{reponse}</p>
  </div> 
*/