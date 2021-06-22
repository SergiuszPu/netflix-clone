import React from 'react';
import './header.scss';
import chevron from '../../data/icons/chevron-right.png';

function header() {
  return (
    <div className="header">
      <div className="header__info">
        <div className="header__description">
          <h1>Nieograniczona oferta filmów, seriali, programów i nie tylko.</h1>
          <h3>Oglądaj wszędzie. Anuluj w każdej chwili.</h3>
        </div>
      </div>
      <div className="header__form">
        <h3>Zaczynamy oglądać? Wprowadź adres e-mail, aby utworzyć lub odnowić konto</h3>
        <input placeholder="Adres e-mail"></input>
        <button>Rozpocznij
          <img  src={chevron} alt=""/>
        </button>
      </div>
    </div>
  );
}

export default header;
