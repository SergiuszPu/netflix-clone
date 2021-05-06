import React from 'react';
import './header.scss';
import chevron from '../../data/icons/chevron-right.png';
import { Link } from 'react-router-dom';

function header() {
  return (
    <div className="header">
      <div className="banner--fadeTop">

        <div className="header__navigation">
          <div className="header__logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt='netflix logo'/>
          </div>
          <div className="header__login">
            <div className="header__select">
              <select>
                <option>Polski</option>
                <option>Angielski</option>
              </select>
            </div>
            <Link to="/signin" href="#">Zaloguj się</Link>
          </div>
        </div>

      </div>
  
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
      <div className="banner--fadeBottom"/>
    </div>
  );
}

export default header;
