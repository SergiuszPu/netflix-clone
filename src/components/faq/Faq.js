import React, { useState } from 'react';
import './faq.scss';
import data from '../../data/faqs.json';
import icon from '../../data/icons/add.png';
import str from '../../data/icons/close-slim.png';
import chevron from '../../data/icons/chevron-right.png';

function Faq() {
  const [toggleShow, setToggleShow] = useState(0);
  
  function toggleThis(id) {
    toggleShow === id ? setToggleShow(0) : setToggleShow(id);
  }

  return (
    
    <div className="faq">
      <div className="faq__wrapper">
        <h1>Często zadawane pytania</h1>
        <ul>
          {data.map((description) => (
            <li key={description.id} >
              <button 
                key={description.id} 
                onClick={() => toggleThis(description.id)}
                className="faq__question"
              >
                {description.header}
                { toggleShow === description.id  ? <img src={str} alt=""/> : <img  src={icon} alt="" /> }
                
              </button>
              <div className={toggleShow === description.id ? 'faq__question' : 'faq__answer' }>
                <span>{description.body}</span>
              </div> 
            </li>
          ))}
        </ul>
        <div className="faq__mail">
          <h3>Zaczynamy oglądać? Wprowadź adres e-mail, aby utworzyć lub odnowić konto</h3>
          <div className="faq__form">
            <input placeholder="Adres e-mail"/>
            <button>
                Rozpocznij
              <img  src={chevron} alt=""/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;