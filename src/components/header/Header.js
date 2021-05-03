import React from 'react';
import './header.scss';

function header() {
  return (
    <div className="header">

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
          <a href="#">Zaloguj się</a>
        </div>
      </div>

      <div className="header__info">
        <div className="header__description">
          <h1>Nieograniczona oferta filmów, seraili, programów <br/> i nie tylko.</h1>
          <h3>Oglądaj wszędzie. Anuluj w każdej chwili.</h3>
        </div>
        
      </div>
    </div>
  );
}

export default header;
