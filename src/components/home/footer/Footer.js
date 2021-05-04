import React from 'react';
import './footer.scss';
import data from '../../../data/footer.json';

function Footer() {
  return (
    <div className="footer__card">
      <div className="footer__wrapper">
        <div className="footer__site">
          <p className="footer__title">Pytania? Zadzwoń pod numer 00 800 112 4444</p>
          <ul className="footer__links">
            {data.map((footer) => (
              <li className="footer__link" key={footer.id}>
                <a className="footer__link__item" href="#">{footer.title}</a>
              </li>
            ))}
          </ul>
          <div className="footer__country">
            <select>
              <option>Polski</option>
              <option>Angielski</option>
            </select>
            <p>Netflix Polska</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
